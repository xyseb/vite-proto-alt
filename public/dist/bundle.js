(function (React, ReactDOM) {
  'use strict';

  function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n.default = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);
  var ReactDOM__namespace = /*#__PURE__*/_interopNamespaceDefault(ReactDOM);

  const App = () => {
      return React__namespace.createElement(React__namespace.Fragment, null,
          React__namespace.createElement("h1", null, "Hello, React with TypeScript!"));
  };
  ReactDOM__namespace.render(React__namespace.createElement(React__namespace.StrictMode, null,
      React__namespace.createElement(App, null)), document.getElementById('root'));

})(React, ReactDOM);
//# sourceMappingURL=bundle.js.map
