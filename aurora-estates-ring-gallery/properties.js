/* AURORA ESTATES — property data
   Replace `image`/`thumbnail` URLs with real photography when available.
   `generateProperties()` expands the 72 curated base entries into a 300-item
   catalogue by cycling combinations — safe placeholder data, easy to swap. */
(function(global){
  var TITLES = [
    "Aurora Skyline Residences","The Palm Court Villas","Marina Glass Towers",
    "Celeste Business Park","Emerald Heights","The Horizon Penthouses",
    "One Boulevard Residences","The Whitefield Estate","Azure Bay Villas",
    "Capital Square Commercial","Lakefront Signature Homes","Solaris Smart Residences"
  ];
  var LOCATIONS = ["Dubai","Mumbai","Gurugram","Bangalore","Pune","Hyderabad","Noida","Goa","Abu Dhabi","Delhi NCR","Chennai","Ahmedabad"];
  var CATEGORIES = ["Luxury Apartments","Villas","Commercial","Waterfront","Sky Residences","Plots","Retail Spaces","Farmhouses","Smart Homes","Penthouses","Affordable Luxury","Upcoming Projects"];
  var STATUSES = ["Ready to Move","Under Construction","New Launch","Sold Out"];
  var CATEGORY_COUNTS = {"Luxury Apartments":48,"Villas":32,"Commercial":26,"Waterfront":22,"Sky Residences":18,"Plots":15,"Retail Spaces":13,"Farmhouses":11,"Smart Homes":19,"Penthouses":16,"Affordable Luxury":21,"Upcoming Projects":24};

  function seedFor(i){ return "aurora-" + (i % 90); }
  function priceFor(cat, i){
    var base = { "Luxury Apartments":1.2,"Villas":3.4,"Commercial":5.6,"Waterfront":4.1,"Sky Residences":2.8,
      "Plots":0.8,"Retail Spaces":2.1,"Farmhouses":1.6,"Smart Homes":1.9,"Penthouses":6.2,
      "Affordable Luxury":0.65,"Upcoming Projects":2.4 }[cat] || 1.5;
    var lo = (base + (i % 5) * 0.15).toFixed(2);
    var hi = (base * 1.6 + (i % 7) * 0.2).toFixed(2);
    return "\u20B9" + lo + "Cr \u2013 \u20B9" + hi + "Cr";
  }

  function generateProperties(count){
    count = count || 300;
    var list = [];
    for (var i = 0; i < count; i++){
      var title = TITLES[i % TITLES.length];
      var location = LOCATIONS[(i + Math.floor(i/12)) % LOCATIONS.length];
      var category = CATEGORIES[i % CATEGORIES.length];
      var status = STATUSES[i % STATUSES.length];
      var seed = seedFor(i);
      list.push({
        id: "prop-" + (i + 1),
        title: title + " \u2014 " + location.split(" ")[0] + " " + (Math.floor(i / TITLES.length) + 1),
        category: category,
        location: location,
        priceRange: priceFor(category, i),
        bedrooms: (category === "Commercial" || category === "Retail Spaces" || category === "Plots") ? null : (2 + (i % 4)),
        image: "https://picsum.photos/seed/" + seed + "/900/650",
        thumbnail: "https://picsum.photos/seed/" + seed + "/140/360",
        status: status
      });
    }
    return list;
  }

  global.AURORA_CATEGORIES = CATEGORIES;
  global.AURORA_CATEGORY_COUNTS = CATEGORY_COUNTS;
  global.AURORA_PROPERTIES = generateProperties(300);
})(window);
