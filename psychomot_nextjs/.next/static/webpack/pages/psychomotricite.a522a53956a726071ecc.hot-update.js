webpackHotUpdate_N_E("pages/psychomotricite",{

/***/ "./components/GoTop.js":
/*!*****************************!*\
  !*** ./components/GoTop.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GoTop; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _static_css_goTop_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/css/goTop.css */ \"./static/css/goTop.css\");\n/* harmony import */ var _static_css_goTop_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_css_goTop_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/sprietthibault/Sites/sandrine-dubois-psychomotricienne/psychomot_nextjs/components/GoTop.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_3__[\"gsap\"].registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__[\"ScrollTrigger\"]);\nfunction GoTop() {\n  _s();\n\n  var handleClick = function handleClick() {\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\"\n    });\n  };\n\n  var button = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_3__[\"gsap\"].timeline({\n      scrollTrigger: {\n        trigger: button.current,\n        toggleActions: \"restart resume resume reverse\",\n        markers: true\n      }\n    }).to(button.current, {\n      y: \"-=3px\",\n      duration: .8,\n      ease: \"power4.out\"\n    }).yoyo(true).repeat(-1);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"scrollTopContainer\",\n    onClick: handleClick,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      ref: button,\n      src: \"/main/scrollTop.svg\",\n      alt: \"Retourner en haut de la page\",\n      title: \"Haut de page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 9\n  }, this);\n}\n\n_s(GoTop, \"GaX2rfgZYDk6IuwW3YEHKZkcOeM=\");\n\n_c = GoTop;\n\nvar _c;\n\n$RefreshReg$(_c, \"GoTop\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb1RvcC5qcz9hMDZmIl0sIm5hbWVzIjpbImdzYXAiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRyaWdnZXIiLCJHb1RvcCIsImhhbmRsZUNsaWNrIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImJ1dHRvbiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRsIiwidGltZWxpbmUiLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsImN1cnJlbnQiLCJ0b2dnbGVBY3Rpb25zIiwibWFya2VycyIsInRvIiwieSIsImR1cmF0aW9uIiwiZWFzZSIsInlveW8iLCJyZXBlYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQUEseUNBQUksQ0FBQ0MsY0FBTCxDQUFvQkMscUVBQXBCO0FBRWUsU0FBU0MsS0FBVCxHQUFnQjtBQUFBOztBQUUzQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFLO0FBQ3JCQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0I7QUFBQ0MsU0FBRyxFQUFDLENBQUw7QUFBT0MsY0FBUSxFQUFDO0FBQWhCLEtBQWhCO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxNQUFNLEdBQUdDLG9EQUFNLEVBQXJCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLEVBQUUsR0FBR1oseUNBQUksQ0FBQ2EsUUFBTCxDQUFjO0FBQ3JCQyxtQkFBYSxFQUFHO0FBQ1pDLGVBQU8sRUFBR04sTUFBTSxDQUFDTyxPQURMO0FBRVpDLHFCQUFhLEVBQUcsK0JBRko7QUFHWkMsZUFBTyxFQUFFO0FBSEc7QUFESyxLQUFkLEVBT1ZDLEVBUFUsQ0FPUFYsTUFBTSxDQUFDTyxPQVBBLEVBT1E7QUFDZkksT0FBQyxFQUFDLE9BRGE7QUFFZkMsY0FBUSxFQUFDLEVBRk07QUFHZkMsVUFBSSxFQUFDO0FBSFUsS0FQUixFQVlWQyxJQVpVLENBWUwsSUFaSyxFQWFWQyxNQWJVLENBYUgsQ0FBQyxDQWJFLENBQVg7QUFjSCxHQWZRLEVBZVAsRUFmTyxDQUFUO0FBaUJBLHNCQUNJO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQW9DLFdBQU8sRUFBRXBCLFdBQTdDO0FBQUEsMkJBQ0k7QUFBSyxTQUFHLEVBQUVLLE1BQVY7QUFBa0IsU0FBRyxFQUFDLHFCQUF0QjtBQUE0QyxTQUFHLEVBQUMsOEJBQWhEO0FBQStFLFdBQUssRUFBQztBQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0dBN0J1Qk4sSzs7S0FBQUEsSyIsImZpbGUiOiIuL2NvbXBvbmVudHMvR29Ub3AuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IFwiLi4vc3RhdGljL2Nzcy9nb1RvcC5jc3NcIlxuXG5pbXBvcnQge2dzYXB9IGZyb20gXCJnc2FwXCJcbmltcG9ydCB7dXNlRWZmZWN0LHVzZVJlZn0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdvVG9wKCl7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+e1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe3RvcDowLGJlaGF2aW9yOlwic21vb3RoXCJ9KVxuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbiA9IHVzZVJlZigpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXIgOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlciA6IGJ1dHRvbi5jdXJyZW50LFxuICAgICAgICAgICAgICAgIHRvZ2dsZUFjdGlvbnMgOiBcInJlc3RhcnQgcmVzdW1lIHJlc3VtZSByZXZlcnNlXCIsXG4gICAgICAgICAgICAgICAgbWFya2VyczogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudG8oYnV0dG9uLmN1cnJlbnQse1xuICAgICAgICAgICAgeTpcIi09M3B4XCIsXG4gICAgICAgICAgICBkdXJhdGlvbjouOCxcbiAgICAgICAgICAgIGVhc2U6XCJwb3dlcjQub3V0XCJcbiAgICAgICAgfSlcbiAgICAgICAgLnlveW8odHJ1ZSlcbiAgICAgICAgLnJlcGVhdCgtMSlcbiAgICB9LFtdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbFRvcENvbnRhaW5lclwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgIDxpbWcgcmVmPXtidXR0b259IHNyYz1cIi9tYWluL3Njcm9sbFRvcC5zdmdcIiBhbHQ9XCJSZXRvdXJuZXIgZW4gaGF1dCBkZSBsYSBwYWdlXCIgdGl0bGU9XCJIYXV0IGRlIHBhZ2VcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GoTop.js\n");

/***/ })

})