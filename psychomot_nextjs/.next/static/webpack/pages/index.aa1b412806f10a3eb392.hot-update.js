webpackHotUpdate_N_E("pages/index",{

/***/ "./components/GoTop.js":
/*!*****************************!*\
  !*** ./components/GoTop.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GoTop; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _static_css_goTop_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/css/goTop.css */ \"./static/css/goTop.css\");\n/* harmony import */ var _static_css_goTop_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_css_goTop_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/sprietthibault/Sites/sandrine-dubois-psychomotricienne/psychomot_nextjs/components/GoTop.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction GoTop() {\n  _s();\n\n  var handleClick = function handleClick() {\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\"\n    });\n  };\n\n  var button = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_3__[\"gsap\"].timeline().to(button, {\n      y: \"-=5px\",\n      duration: .3,\n      ease: \"power4.out\"\n    }).to(button, {\n      y: \"+=5pw\"\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    ref: button,\n    className: \"scrollTopContainer\",\n    onClick: handleClick,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"/main/scrollTop.svg\",\n      alt: \"Retourner en haut de la page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 9\n  }, this);\n}\n\n_s(GoTop, \"GaX2rfgZYDk6IuwW3YEHKZkcOeM=\");\n\n_c = GoTop;\n\nvar _c;\n\n$RefreshReg$(_c, \"GoTop\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb1RvcC5qcz9hMDZmIl0sIm5hbWVzIjpbIkdvVG9wIiwiaGFuZGxlQ2xpY2siLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiYnV0dG9uIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGwiLCJnc2FwIiwidGltZWxpbmUiLCJ0byIsInkiLCJkdXJhdGlvbiIsImVhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBZ0I7QUFBQTs7QUFFM0IsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBSztBQUNyQkMsVUFBTSxDQUFDQyxRQUFQLENBQWdCO0FBQUNDLFNBQUcsRUFBQyxDQUFMO0FBQU9DLGNBQVEsRUFBQztBQUFoQixLQUFoQjtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsTUFBTSxHQUFHQyxvREFBTSxFQUFyQjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxFQUFFLEdBQUdDLHlDQUFJLENBQUNDLFFBQUwsR0FDVkMsRUFEVSxDQUNQTixNQURPLEVBQ0E7QUFDUE8sT0FBQyxFQUFDLE9BREs7QUFFUEMsY0FBUSxFQUFDLEVBRkY7QUFHUEMsVUFBSSxFQUFDO0FBSEUsS0FEQSxFQU1WSCxFQU5VLENBTVBOLE1BTk8sRUFNQTtBQUNQTyxPQUFDLEVBQUM7QUFESyxLQU5BLENBQVg7QUFVSCxHQVhRLEVBV1AsRUFYTyxDQUFUO0FBYUEsc0JBQ0k7QUFBSyxPQUFHLEVBQUVQLE1BQVY7QUFBa0IsYUFBUyxFQUFDLG9CQUE1QjtBQUFpRCxXQUFPLEVBQUVMLFdBQTFEO0FBQUEsMkJBQ0k7QUFBSyxTQUFHLEVBQUMscUJBQVQ7QUFBK0IsU0FBRyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7R0F6QnVCRCxLOztLQUFBQSxLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Hb1RvcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgXCIuLi9zdGF0aWMvY3NzL2dvVG9wLmNzc1wiXG5cbmltcG9ydCB7Z3NhcH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IHt1c2VFZmZlY3QsdXNlUmVmfSBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHb1RvcCgpe1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PntcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6MCxiZWhhdmlvcjpcInNtb290aFwifSlcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b24gPSB1c2VSZWYoKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSgpXG4gICAgICAgIC50byhidXR0b24se1xuICAgICAgICAgICAgeTpcIi09NXB4XCIsXG4gICAgICAgICAgICBkdXJhdGlvbjouMyxcbiAgICAgICAgICAgIGVhc2U6XCJwb3dlcjQub3V0XCJcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKGJ1dHRvbix7XG4gICAgICAgICAgICB5OlwiKz01cHdcIixcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH0sW10pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgcmVmPXtidXR0b259IGNsYXNzTmFtZT1cInNjcm9sbFRvcENvbnRhaW5lclwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL21haW4vc2Nyb2xsVG9wLnN2Z1wiIGFsdD1cIlJldG91cm5lciBlbiBoYXV0IGRlIGxhIHBhZ2VcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GoTop.js\n");

/***/ })

})