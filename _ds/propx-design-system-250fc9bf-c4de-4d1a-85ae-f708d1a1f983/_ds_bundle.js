/* @ds-bundle: {"format":4,"namespace":"PropXDesignSystem_250fc9","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Button.jsx":"99d9024ee7ee","components/core/IconButton.jsx":"6ccada5e7e3e","components/data/Avatar.jsx":"a200d44f3b0b","components/data/Card.jsx":"0d524fd839c0","components/data/StatCard.jsx":"933f31224cda","components/data/Table.jsx":"41ce8f4d87a8","components/feedback/Alert.jsx":"dade754b681d","components/feedback/Badge.jsx":"6c9f61d2c88c","components/feedback/Progress.jsx":"5d7fc094018a","components/feedback/Tag.jsx":"cd5b53b31cef","components/feedback/Tooltip.jsx":"3c0a9e591220","components/forms/Checkbox.jsx":"4cb8a1aceb65","components/forms/Field.jsx":"e07e2d5b036b","components/forms/Input.jsx":"2839ecb0aedf","components/forms/Radio.jsx":"8c2022a17a69","components/forms/Select.jsx":"140993974fe9","components/forms/Switch.jsx":"20dadd55f2b3","components/forms/Textarea.jsx":"534a552969fa","components/navigation/Breadcrumb.jsx":"9e9b903de6ad","components/navigation/Pagination.jsx":"b0acf198fa03","components/navigation/Sidebar.jsx":"069461a192f8","components/navigation/Tabs.jsx":"92790ff9d21d","ui_kits/dashboard/AppShell.jsx":"b9823dd02d85","ui_kits/dashboard/ListingsScreen.jsx":"6948620a2d76","ui_kits/dashboard/OverviewScreen.jsx":"757ea64b2e8c","ui_kits/dashboard/PropertyDetailScreen.jsx":"f08e69d3dea1","ui_kits/dashboard/SettingsScreen.jsx":"925cf58d41ee"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PropXDesignSystem_250fc9 = window.PropXDesignSystem_250fc9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  children
}) {
  const cls = `propx-btn propx-btn--${variant} propx-btn--${size}${fullWidth ? ' propx-btn--full' : ''}`;
  return React.createElement('button', {
    type,
    className: cls,
    disabled,
    onClick
  }, iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  size = 'md',
  variant = 'outline',
  disabled = false,
  'aria-label': ariaLabel,
  onClick
}) {
  return React.createElement('button', {
    type: 'button',
    className: `propx-icon-btn propx-icon-btn--${size}${variant === 'ghost' ? ' propx-icon-btn--ghost' : ''}`,
    disabled,
    onClick,
    'aria-label': ariaLabel
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
function Avatar({
  name,
  src,
  size = 'md'
}) {
  const initials = (name || '').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    className: `propx-avatar propx-avatar--${size}`
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function Card({
  interactive = false,
  children,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `propx-card${interactive ? ' propx-card--interactive' : ''}`,
    onClick: onClick
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function StatCard({
  label,
  value,
  delta,
  direction
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "propx-stat-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "propx-stat-card__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "propx-stat-card__value"
  }, value), delta && /*#__PURE__*/React.createElement("span", {
    className: `propx-stat-card__delta propx-stat-card__delta--${direction || 'up'}`
  }, direction === 'down' ? '▼' : '▲', " ", delta));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function Table({
  columns,
  rows,
  dense = false
}) {
  return /*#__PURE__*/React.createElement("table", {
    className: `propx-table${dense ? ' propx-table--dense' : ''}`
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: c.numeric ? {
      textAlign: 'right'
    } : null
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    className: c.numeric ? 'propx-table__num' : ''
  }, r[c.key]))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function Alert({
  variant = 'info',
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `propx-alert propx-alert--${variant}`
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("p", {
    className: "propx-alert__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "propx-alert__body"
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function Badge({
  variant = 'neutral',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `propx-badge propx-badge--${variant}`
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function Progress({
  value = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "propx-progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "propx-progress__bar",
    style: {
      width: `${Math.max(0, Math.min(100, value))}%`
    }
  }));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "propx-tag"
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'inherit',
      padding: 0,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "propx-tooltip"
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "propx-tooltip__bubble"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  onChange,
  label,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "propx-check",
    style: disabled ? {
      opacity: 'var(--opacity-disabled)',
      cursor: 'not-allowed'
    } : null
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("span", {
    className: "propx-check__box"
  }, checked && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8l3.5 3.5L13 5",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "propx-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "propx-field__label"
  }, label), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "propx-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "propx-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  size = 'md',
  error = false,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    className: `propx-input${size === 'sm' ? ' propx-input--sm' : ''}${error ? ' propx-input--error' : ''}`
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  checked,
  onChange,
  label,
  name,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "propx-check propx-radio",
    style: disabled ? {
      opacity: 'var(--opacity-disabled)',
      cursor: 'not-allowed'
    } : null
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("span", {
    className: "propx-radio__box"
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  size = 'md',
  error = false,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    className: `propx-select${size === 'sm' ? ' propx-input--sm' : ''}${error ? ' propx-select--error' : ''}`
  }, rest), children);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  disabled,
  'aria-label': ariaLabel
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "propx-switch",
    style: disabled ? {
      opacity: 'var(--opacity-disabled)',
      cursor: 'not-allowed'
    } : null
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    "aria-label": ariaLabel
  }), /*#__PURE__*/React.createElement("span", {
    className: "propx-switch__track"
  }), /*#__PURE__*/React.createElement("span", {
    className: "propx-switch__thumb"
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  error = false,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: `propx-textarea${error ? ' propx-textarea--error' : ''}`
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "propx-breadcrumb"
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "propx-breadcrumb__sep"
  }, "/"), i === items.length - 1 ? /*#__PURE__*/React.createElement("span", {
    className: "propx-breadcrumb__current"
  }, it.label) : /*#__PURE__*/React.createElement("a", {
    href: it.href || '#'
  }, it.label))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function Pagination({
  page,
  pageCount,
  onChange
}) {
  const pages = Array.from({
    length: pageCount
  }, (_, i) => i + 1);
  return /*#__PURE__*/React.createElement("div", {
    className: "propx-pagination"
  }, /*#__PURE__*/React.createElement("button", {
    className: "propx-pagination__btn",
    disabled: page === 1,
    onClick: () => onChange(page - 1)
  }, "\u2039"), pages.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    className: `propx-pagination__btn${p === page ? ' propx-pagination__btn--active' : ''}`,
    onClick: () => onChange(p)
  }, p)), /*#__PURE__*/React.createElement("button", {
    className: "propx-pagination__btn",
    disabled: page === pageCount,
    onClick: () => onChange(page + 1)
  }, "\u203A"));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
function Sidebar({
  brand = 'PropX',
  sections,
  activeKey,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "propx-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "propx-sidebar__brand"
  }, brand), sections.map(sec => /*#__PURE__*/React.createElement("div", {
    className: "propx-sidebar__section",
    key: sec.label
  }, sec.label && /*#__PURE__*/React.createElement("div", {
    className: "propx-sidebar__label"
  }, sec.label), sec.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.key,
    className: `propx-sidebar__item${it.key === activeKey ? ' propx-sidebar__item--active' : ''}`,
    onClick: () => onSelect && onSelect(it.key)
  }, it.icon, it.label)))));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "propx-tabs"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.key,
    className: `propx-tabs__tab${t.key === active ? ' propx-tabs__tab--active' : ''}`,
    onClick: () => onChange(t.key)
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/AppShell.jsx
try { (() => {
function AppShell({
  active,
  onNav,
  children
}) {
  const {
    Sidebar
  } = window.PropXDesignSystem_250fc9;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      background: 'var(--bg-canvas)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    activeKey: active,
    onSelect: onNav,
    sections: [{
      label: 'Portfolio',
      items: [{
        key: 'overview',
        label: 'Overview'
      }, {
        key: 'listings',
        label: 'Listings'
      }, {
        key: 'documents',
        label: 'Documents'
      }]
    }, {
      label: 'Analysis',
      items: [{
        key: 'reports',
        label: 'Reports'
      }, {
        key: 'market',
        label: 'Market Data'
      }]
    }, {
      label: 'Account',
      items: [{
        key: 'settings',
        label: 'Settings'
      }]
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children));
}
window.AppShell = AppShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/ListingsScreen.jsx
try { (() => {
function ListingsScreen() {
  const {
    Input,
    Select,
    Field,
    Tag,
    Table,
    Badge,
    Pagination,
    Button
  } = window.PropXDesignSystem_250fc9;
  const [page, setPage] = React.useState(1);
  const rows = [{
    addr: '412 Harrison St',
    zip: '94103',
    type: 'Multifamily',
    rent: '$3,200',
    status: /*#__PURE__*/React.createElement(Badge, {
      variant: "success"
    }, "Active")
  }, {
    addr: '88 King St #4B',
    zip: '94107',
    type: 'Condo',
    rent: '$4,750',
    status: /*#__PURE__*/React.createElement(Badge, {
      variant: "success"
    }, "Active")
  }, {
    addr: '1500 Folsom St',
    zip: '94103',
    type: 'Retail',
    rent: '$2,900',
    status: /*#__PURE__*/React.createElement(Badge, {
      variant: "warning"
    }, "Pending")
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-h2)',
      fontWeight: 'var(--fw-bold)',
      margin: 0
    }
  }, "Listings"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Search"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search by address, APN, owner\u2026"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Type"
  }, /*#__PURE__*/React.createElement(Select, {
    defaultValue: "all"
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "All types"), /*#__PURE__*/React.createElement("option", null, "Multifamily"), /*#__PURE__*/React.createElement("option", null, "Retail"), /*#__PURE__*/React.createElement("option", null, "Office"))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Filter")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    onRemove: () => {}
  }, "Zip: 94103"), /*#__PURE__*/React.createElement(Tag, {
    onRemove: () => {}
  }, "Sqft > 2000")), /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: 'addr',
      label: 'Address'
    }, {
      key: 'zip',
      label: 'Zip'
    }, {
      key: 'type',
      label: 'Type'
    }, {
      key: 'rent',
      label: 'Rent',
      numeric: true
    }, {
      key: 'status',
      label: 'Status'
    }],
    rows: rows
  }), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    pageCount: 6,
    onChange: setPage
  }));
}
window.ListingsScreen = ListingsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/ListingsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/OverviewScreen.jsx
try { (() => {
function OverviewScreen() {
  const {
    StatCard,
    Table,
    Badge,
    Alert,
    Button
  } = window.PropXDesignSystem_250fc9;
  const rows = [{
    addr: '412 Harrison St, San Francisco',
    type: 'Multifamily',
    rent: '$3,200',
    cap: '5.4%',
    status: /*#__PURE__*/React.createElement(Badge, {
      variant: "success"
    }, "Active")
  }, {
    addr: '88 King St #4B, San Francisco',
    type: 'Condo',
    rent: '$4,750',
    cap: '4.8%',
    status: /*#__PURE__*/React.createElement(Badge, {
      variant: "success"
    }, "Active")
  }, {
    addr: '1500 Folsom St, San Francisco',
    type: 'Retail',
    rent: '$2,900',
    cap: '6.1%',
    status: /*#__PURE__*/React.createElement(Badge, {
      variant: "warning"
    }, "Pending")
  }, {
    addr: '220 Bush St, San Francisco',
    type: 'Office',
    rent: '$8,400',
    cap: '5.9%',
    status: /*#__PURE__*/React.createElement(Badge, {
      variant: "success"
    }, "Active")
  }, {
    addr: '77 Geary St, San Francisco',
    type: 'Retail',
    rent: '$3,650',
    cap: '5.0%',
    status: /*#__PURE__*/React.createElement(Badge, {
      variant: "danger"
    }, "Expired")
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-h2)',
      fontWeight: 'var(--fw-bold)',
      margin: 0
    }
  }, "Portfolio Overview"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "+ Add Property")), /*#__PURE__*/React.createElement(Alert, {
    variant: "info",
    title: "Market data refreshed"
  }, "County records synced 12 minutes ago."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Portfolio value",
    value: "$48.2M",
    delta: "+3.4%",
    direction: "up"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Avg cap rate",
    value: "5.44%",
    delta: "+0.2%",
    direction: "up"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Vacancy rate",
    value: "4.1%",
    delta: "-0.6%",
    direction: "down"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Units tracked",
    value: "312",
    delta: "+8",
    direction: "up"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h4)',
      fontWeight: 'var(--fw-semibold)',
      marginBottom: 12
    }
  }, "Top Properties"), /*#__PURE__*/React.createElement(Table, {
    dense: true,
    columns: [{
      key: 'addr',
      label: 'Address'
    }, {
      key: 'type',
      label: 'Type'
    }, {
      key: 'rent',
      label: 'Rent',
      numeric: true
    }, {
      key: 'cap',
      label: 'Cap Rate',
      numeric: true
    }, {
      key: 'status',
      label: 'Status'
    }],
    rows: rows
  })));
}
window.OverviewScreen = OverviewScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/PropertyDetailScreen.jsx
try { (() => {
function PropertyDetailScreen() {
  const {
    Breadcrumb,
    Tabs,
    StatCard,
    Table,
    Avatar,
    Card
  } = window.PropXDesignSystem_250fc9;
  const [tab, setTab] = React.useState('overview');
  const fin = [{
    item: 'Gross rent',
    amount: '$38,400',
    period: 'Monthly'
  }, {
    item: 'Operating expenses',
    amount: '$11,200',
    period: 'Monthly'
  }, {
    item: 'Net operating income',
    amount: '$27,200',
    period: 'Monthly'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Portfolios',
      href: '#'
    }, {
      label: '412 Harrison St'
    }]
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-h2)',
      fontWeight: 'var(--fw-bold)',
      margin: 0
    }
  }, "412 Harrison St"), /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      key: 'overview',
      label: 'Overview'
    }, {
      key: 'financials',
      label: 'Financials'
    }, {
      key: 'documents',
      label: 'Documents'
    }],
    active: tab,
    onChange: setTab
  }), tab === 'overview' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Est. value",
    value: "$6.4M",
    delta: "+2.1%",
    direction: "up"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Cap rate",
    value: "5.4%"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Occupancy",
    value: "96%",
    delta: "+1%",
    direction: "up"
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dana Reyes"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13
    }
  }, "Dana Reyes"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "Portfolio manager"))))), tab === 'financials' && /*#__PURE__*/React.createElement(Table, {
    dense: true,
    columns: [{
      key: 'item',
      label: 'Line item'
    }, {
      key: 'amount',
      label: 'Amount',
      numeric: true
    }, {
      key: 'period',
      label: 'Period'
    }],
    rows: fin
  }), tab === 'documents' && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-tertiary)',
      fontSize: 13,
      padding: '24px 0'
    }
  }, "No documents uploaded yet."));
}
window.PropertyDetailScreen = PropertyDetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/PropertyDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/SettingsScreen.jsx
try { (() => {
function SettingsScreen() {
  const {
    Field,
    Input,
    Select,
    Switch,
    Checkbox,
    Button
  } = window.PropXDesignSystem_250fc9;
  const [autoSync, setAutoSync] = React.useState(true);
  const [digest, setDigest] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-h2)',
      fontWeight: 'var(--fw-bold)',
      margin: 0
    }
  }, "Settings"), /*#__PURE__*/React.createElement(Field, {
    label: "Organization name"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "PropX Capital LLC"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Default currency"
  }, /*#__PURE__*/React.createElement(Select, {
    defaultValue: "usd"
  }, /*#__PURE__*/React.createElement("option", {
    value: "usd"
  }, "USD"), /*#__PURE__*/React.createElement("option", {
    value: "eur"
  }, "EUR"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 0',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Auto-sync county records"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "Refresh valuations nightly")), /*#__PURE__*/React.createElement(Switch, {
    checked: autoSync,
    onChange: e => setAutoSync(e.target.checked),
    "aria-label": "Auto-sync county records"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 0',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Weekly digest email"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "Portfolio performance summary")), /*#__PURE__*/React.createElement(Switch, {
    checked: digest,
    onChange: e => setDigest(e.target.checked),
    "aria-label": "Weekly digest email"
  })), /*#__PURE__*/React.createElement(Checkbox, {
    checked: true,
    onChange: () => {},
    label: "Share anonymized data for market benchmarking"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Save changes")));
}
window.SettingsScreen = SettingsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/SettingsScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
