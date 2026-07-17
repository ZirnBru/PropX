(function(){
"use strict";
var stage=document.getElementById('top');
var ringViewport=document.querySelector('.ring-viewport');
var ring=document.getElementById('ring');
var centerDefault=document.getElementById('centerDefault');
var centerActive=document.getElementById('centerActive');
var activeTitle=document.getElementById('activeTitle');
var activeImage=document.getElementById('activeImage');
var activeMeta=document.getElementById('activeMeta');
var viewPropertyBtn=document.getElementById('viewPropertyBtn');
var cursorDot=document.getElementById('cursorDot');
var gridView=document.getElementById('gridView');
var gridWrap=document.getElementById('gridWrap');
var loadMoreBtn=document.getElementById('loadMoreBtn');
var viewToggleBtn=document.getElementById('viewToggleBtn');
var ringViewBtn=document.getElementById('ringViewBtn');
var filterBtn=document.getElementById('filterBtn');
var filterOverlay=document.getElementById('filterOverlay');
var filterCloseBtn=document.getElementById('filterCloseBtn');
var filterApplyBtn=document.getElementById('filterApplyBtn');
var filterResetBtn=document.getElementById('filterResetBtn');
var hamburgerBtn=document.getElementById('hamburgerBtn');
var mobileNav=document.getElementById('mobileNav');

var ALL_PROPERTIES=window.AURORA_PROPERTIES||[];
var CATEGORIES=window.AURORA_CATEGORIES||[];
var CATEGORY_COUNTS=window.AURORA_CATEGORY_COUNTS||{};
var filtered=ALL_PROPERTIES.slice();
var activeCategory=null;
var activeFilters={type:"",location:"",budget:"",status:"",bedrooms:""};

function lerp(a,b,t){return a+(b-a)*t}
function clamp(v,min,max){return Math.max(min,Math.min(max,v))}

/* ---------- responsive config ---------- */
function getConfig(){
  var w=window.innerWidth;
  if(w>=901) return {radiusX:700,radiusY:180,count:140,panelW:44,panelH:118,tilt:9};
  if(w>=601) return {radiusX:440,radiusY:135,count:108,panelW:34,panelH:92,tilt:8};
  return {radiusX:150,radiusY:96,count:76,panelW:26,panelH:74,tilt:6};
}
var cfg=getConfig();

/* ---------- ring build ---------- */
var panels=[]; // {el,baseAngle,data}
var rotation=0, dragging=false, dragStartX=0, dragStartRotation=0, velocity=0;
var lastFrameTime=0;
var mouseNX=0, mouseNY=0, tiltCurrent=cfg.tilt;
var AUTO_SPEED=0.00042;

function buildRing(){
  ring.innerHTML='';
  panels=[];
  var n=cfg.count;
  var source=filtered.length?filtered:ALL_PROPERTIES;
  for(var i=0;i<n;i++){
    var data=source[i%source.length];
    var el=document.createElement('div');
    el.className='panel';
    el.style.width=cfg.panelW+'px';
    el.style.height=cfg.panelH+'px';
    el.style.marginLeft=(-cfg.panelW/2)+'px';
    el.style.marginTop=(-cfg.panelH/2)+'px';
    var img=document.createElement('img');
    img.loading='lazy';
    img.alt=data.title;
    img.src=data.thumbnail;
    img.onerror=function(){this.onerror=null;this.src='assets/fallback.svg';};
    el.appendChild(img);
    el.dataset.id=data.id;
    (function(d,node){
      node.addEventListener('mouseenter',function(){hoveredProperty=d;renderCenter();cursorDot.classList.add('is-hover');});
      node.addEventListener('mouseleave',function(){hoveredProperty=null;renderCenter();cursorDot.classList.remove('is-hover');});
      node.addEventListener('click',function(e){
        e.stopPropagation();
        if(lockedProperty&&lockedProperty.id===d.id){lockedProperty=null;}else{lockedProperty=d;}
        renderCenter();
      });
      node.addEventListener('keydown',function(e){
        if(e.key==='Enter'||e.key===' '){e.preventDefault();node.click();}
      });
    })(data,el);
    el.tabIndex=0;
    el.setAttribute('role','button');
    el.setAttribute('aria-label',data.title+', '+data.category);
    var baseAngle=(i/n)*Math.PI*2;
    panels.push({el:el,baseAngle:baseAngle,data:data});
    ring.appendChild(el);
  }
}

/* ---------- center content ---------- */
var hoveredProperty=null, lockedProperty=null;
function renderCenter(){
  var displayed=lockedProperty||hoveredProperty;
  panels.forEach(function(p){p.el.classList.toggle('is-active',!!(lockedProperty&&p.data.id===lockedProperty.id));});
  if(!displayed){
    centerDefault.hidden=false;centerActive.hidden=true;
    return;
  }
  centerDefault.hidden=true;centerActive.hidden=false;
  activeTitle.textContent=displayed.title;
  activeImage.src=displayed.image;
  activeImage.alt=displayed.title;
  activeImage.onerror=function(){this.onerror=null;this.src='assets/fallback.svg';};
  activeMeta.textContent=displayed.category+' · '+displayed.location;
  viewPropertyBtn.hidden=!lockedProperty;
}

/* ---------- animation loop ---------- */
function tick(t){
  if(!dragging){
    rotation += AUTO_SPEED + mouseNX*0.00075 + velocity;
    velocity *= 0.94;
    if(Math.abs(velocity)<0.00002) velocity=0;
  }
  tiltCurrent = lerp(tiltCurrent, cfg.tilt + mouseNY*4, 0.06);
  ring.style.transform='rotateX('+tiltCurrent+'deg)';
  for(var i=0;i<panels.length;i++){
    var p=panels[i];
    var angle=p.baseAngle+rotation;
    var x=Math.cos(angle)*cfg.radiusX;
    var y=Math.sin(angle)*cfg.radiusY;
    var depth=(Math.sin(angle)+1)/2;
    var scale=lerp(0.55,1.08,depth);
    var opacity=lerp(0.32,1,depth);
    var blur=lerp(1.1,0,depth);
    var z=lerp(-260,160,depth);
    var rotY=-(x/cfg.radiusX)*22;
    p.el.style.transform='translate3d('+x+'px,'+y+'px,'+z+'px) rotateY('+rotY+'deg) scale('+scale+')';
    p.el.style.opacity=opacity;
    p.el.style.filter=blur>0.05?'blur('+blur+'px)':'none';
    p.el.style.zIndex=Math.round(depth*1000)+(p.el.classList.contains('is-active')?2000:0);
  }
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

/* ---------- pointer / drag / cursor ---------- */
document.addEventListener('mousemove',function(e){
  cursorDot.style.transform='translate('+e.clientX+'px,'+e.clientY+'px) translate(-50%,-50%)';
  var rect=stage.getBoundingClientRect();
  mouseNX=clamp((e.clientX-rect.left-rect.width/2)/(rect.width/2),-1,1);
  mouseNY=clamp((e.clientY-rect.top-rect.height*0.7)/(rect.height*0.5),-1,1);
});
document.querySelectorAll('a,button,.text-btn').forEach(function(n){
  n.addEventListener('mouseenter',function(){cursorDot.classList.add('is-hover');});
  n.addEventListener('mouseleave',function(){cursorDot.classList.remove('is-hover');});
});

var lastDragX=0,lastDragRotation=0;
ringViewport.addEventListener('pointerdown',function(e){
  dragging=true;velocity=0;
  dragStartX=e.clientX;dragStartRotation=rotation;
  lastDragX=e.clientX;lastDragRotation=rotation;
  ringViewport.setPointerCapture(e.pointerId);
});
ringViewport.addEventListener('pointermove',function(e){
  if(!dragging)return;
  var delta=(e.clientX-dragStartX)*0.0055;
  rotation=dragStartRotation+delta;
  velocity=(rotation-lastDragRotation);
  lastDragRotation=rotation;
});
function endDrag(){dragging=false;}
ringViewport.addEventListener('pointerup',endDrag);
ringViewport.addEventListener('pointercancel',endDrag);

/* ---------- grid view ---------- */
var GRID_BATCH=30, gridCount=0;
function resetGrid(){gridWrap.innerHTML='';gridCount=0;renderGridBatch();}
function renderGridBatch(){
  var source=filtered.length?filtered:ALL_PROPERTIES;
  var slice=source.slice(gridCount,gridCount+GRID_BATCH);
  slice.forEach(function(d){
    var card=document.createElement('article');
    card.className='grid-card';
    card.innerHTML='<div class="thumb"><img loading="lazy" alt="'+d.title.replace(/"/g,'&quot;')+'" src="'+d.image+'"></div>'+
      '<div class="info"><h3>'+d.title+'</h3><div class="meta">'+d.category+' · '+d.location+'</div>'+
      '<div class="price">'+d.priceRange+'</div><span class="status">'+d.status+'</span></div>';
    var img=card.querySelector('img');
    img.onerror=function(){this.onerror=null;this.src='assets/fallback.svg';};
    card.addEventListener('click',function(){lockedProperty=d;switchToRing();renderCenter();});
    gridWrap.appendChild(card);
  });
  gridCount+=slice.length;
  loadMoreBtn.hidden = gridCount>=source.length;
}
loadMoreBtn.addEventListener('click',renderGridBatch);

function switchToRing(){
  gridView.hidden=true;stage.hidden=false;document.querySelector('.hint').hidden=false;
  viewToggleBtn.textContent='';var s=document.createElement('span');
  viewToggleBtn.innerHTML='Grid view <span>+</span>';
  viewToggleBtn.setAttribute('aria-pressed','false');
}
viewToggleBtn.addEventListener('click',function(){
  var toGrid=gridView.hidden;
  gridView.hidden=!toGrid;stage.hidden=toGrid;document.querySelector('.hint').hidden=toGrid;
  viewToggleBtn.setAttribute('aria-pressed',String(toGrid));
  if(toGrid) resetGrid();
});
ringViewBtn.addEventListener('click',switchToRing);

/* ---------- filters ---------- */
function uniqueLocations(){
  var set={};ALL_PROPERTIES.forEach(function(p){set[p.location]=1;});
  return Object.keys(set).sort();
}
function uniqueStatuses(){
  var set={};ALL_PROPERTIES.forEach(function(p){set[p.status]=1;});
  return Object.keys(set);
}
(function populateFilterSelects(){
  var typeSel=document.getElementById('filterType');
  CATEGORIES.forEach(function(c){var o=document.createElement('option');o.value=c;o.textContent=c;typeSel.appendChild(o);});
  var locSel=document.getElementById('filterLocation');
  uniqueLocations().forEach(function(l){var o=document.createElement('option');o.value=l;o.textContent=l;locSel.appendChild(o);});
  var statusSel=document.getElementById('filterStatus');
  uniqueStatuses().forEach(function(s){var o=document.createElement('option');o.value=s;o.textContent=s;statusSel.appendChild(o);});
})();

function applyFilters(){
  filtered=ALL_PROPERTIES.filter(function(p){
    if(activeCategory && p.category!==activeCategory) return false;
    if(activeFilters.type && p.category!==activeFilters.type) return false;
    if(activeFilters.location && p.location!==activeFilters.location) return false;
    if(activeFilters.status && p.status!==activeFilters.status) return false;
    if(activeFilters.bedrooms && String(p.bedrooms)!==activeFilters.bedrooms) return false;
    if(activeFilters.budget){
      var parts=activeFilters.budget.split('-').map(Number);
      var lo=parseFloat(p.priceRange.replace(/[^\d.]/g,''));
      if(!(lo>=parts[0]&&lo<=parts[1])) return false;
    }
    return true;
  });
  if(!filtered.length) filtered=ALL_PROPERTIES.slice();
  buildRing();
  renderCenter();
  if(!gridView.hidden) resetGrid();
}

filterBtn.addEventListener('click',function(){filterOverlay.hidden=false;});
filterCloseBtn.addEventListener('click',function(){filterOverlay.hidden=true;});
filterOverlay.addEventListener('click',function(e){if(e.target===filterOverlay)filterOverlay.hidden=true;});
filterApplyBtn.addEventListener('click',function(){
  activeFilters.type=document.getElementById('filterType').value;
  activeFilters.location=document.getElementById('filterLocation').value;
  activeFilters.budget=document.getElementById('filterBudget').value;
  activeFilters.status=document.getElementById('filterStatus').value;
  activeFilters.bedrooms=document.getElementById('filterBedrooms').value;
  filterOverlay.hidden=true;
  applyFilters();
});
filterResetBtn.addEventListener('click',function(){
  ['filterType','filterLocation','filterBudget','filterStatus','filterBedrooms'].forEach(function(id){document.getElementById(id).value='';});
  activeFilters={type:"",location:"",budget:"",status:"",bedrooms:""};
  activeCategory=null;
  applyFilters();
});

/* ---------- mobile nav ---------- */
hamburgerBtn.addEventListener('click',function(){
  var open=mobileNav.hidden;
  mobileNav.hidden=!open;
  hamburgerBtn.setAttribute('aria-expanded',String(open));
});

/* ---------- resize ---------- */
var resizeTimer;
window.addEventListener('resize',function(){
  clearTimeout(resizeTimer);
  resizeTimer=setTimeout(function(){cfg=getConfig();buildRing();renderCenter();},180);
});

/* ---------- init ---------- */
buildRing();
renderCenter();
})();
