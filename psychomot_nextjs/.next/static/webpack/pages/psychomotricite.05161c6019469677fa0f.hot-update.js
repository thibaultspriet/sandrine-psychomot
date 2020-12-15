webpackHotUpdate_N_E("pages/psychomotricite",{

/***/ "./components/GoTop.js":
/*!*****************************!*\
  !*** ./components/GoTop.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GoTop; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _static_css_goTop_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/css/goTop.css */ \"./static/css/goTop.css\");\n/* harmony import */ var _static_css_goTop_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_css_goTop_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/sprietthibault/Sites/sandrine-dubois-psychomotricienne/psychomot_nextjs/components/GoTop.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction GoTop() {\n  _s();\n\n  var handleClick = function handleClick() {\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\"\n    });\n  };\n\n  var button = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_3__[\"gsap\"].timeline().to(button.current, {\n      y: \"-=5px\",\n      duration: .3,\n      ease: \"power4.out\"\n    })\n    /* .to(button.current,{\n        y:\"+=5px\",\n        duration:.5,\n        ease:\"power2.in\"\n    }) */\n    .yoyo(true).repeat(-1);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"scrollTopContainer\",\n    onClick: handleClick,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      ref: button,\n      src: \"/main/scrollTop.svg\",\n      alt: \"Retourner en haut de la page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 9\n  }, this);\n}\n\n_s(GoTop, \"GaX2rfgZYDk6IuwW3YEHKZkcOeM=\");\n\n_c = GoTop;\n\nvar _c;\n\n$RefreshReg$(_c, \"GoTop\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb1RvcC5qcz9hMDZmIl0sIm5hbWVzIjpbIkdvVG9wIiwiaGFuZGxlQ2xpY2siLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiYnV0dG9uIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGwiLCJnc2FwIiwidGltZWxpbmUiLCJ0byIsImN1cnJlbnQiLCJ5IiwiZHVyYXRpb24iLCJlYXNlIiwieW95byIsInJlcGVhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFnQjtBQUFBOztBQUUzQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFLO0FBQ3JCQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0I7QUFBQ0MsU0FBRyxFQUFDLENBQUw7QUFBT0MsY0FBUSxFQUFDO0FBQWhCLEtBQWhCO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxNQUFNLEdBQUdDLG9EQUFNLEVBQXJCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLEVBQUUsR0FBR0MseUNBQUksQ0FBQ0MsUUFBTCxHQUNWQyxFQURVLENBQ1BOLE1BQU0sQ0FBQ08sT0FEQSxFQUNRO0FBQ2ZDLE9BQUMsRUFBQyxPQURhO0FBRWZDLGNBQVEsRUFBQyxFQUZNO0FBR2ZDLFVBQUksRUFBQztBQUhVLEtBRFI7QUFNWDtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBVm1CLEtBV1ZDLElBWFUsQ0FXTCxJQVhLLEVBWVZDLE1BWlUsQ0FZSCxDQUFDLENBWkUsQ0FBWDtBQWFILEdBZFEsRUFjUCxFQWRPLENBQVQ7QUFnQkEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBb0MsV0FBTyxFQUFFakIsV0FBN0M7QUFBQSwyQkFDSTtBQUFLLFNBQUcsRUFBRUssTUFBVjtBQUFrQixTQUFHLEVBQUMscUJBQXRCO0FBQTRDLFNBQUcsRUFBQztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0dBNUJ1Qk4sSzs7S0FBQUEsSyIsImZpbGUiOiIuL2NvbXBvbmVudHMvR29Ub3AuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IFwiLi4vc3RhdGljL2Nzcy9nb1RvcC5jc3NcIlxuXG5pbXBvcnQge2dzYXB9IGZyb20gXCJnc2FwXCJcbmltcG9ydCB7dXNlRWZmZWN0LHVzZVJlZn0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR29Ub3AoKXtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT57XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOjAsYmVoYXZpb3I6XCJzbW9vdGhcIn0pXG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uID0gdXNlUmVmKClcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKVxuICAgICAgICAudG8oYnV0dG9uLmN1cnJlbnQse1xuICAgICAgICAgICAgeTpcIi09NXB4XCIsXG4gICAgICAgICAgICBkdXJhdGlvbjouMyxcbiAgICAgICAgICAgIGVhc2U6XCJwb3dlcjQub3V0XCJcbiAgICAgICAgfSlcbiAgICAgICAgLyogLnRvKGJ1dHRvbi5jdXJyZW50LHtcbiAgICAgICAgICAgIHk6XCIrPTVweFwiLFxuICAgICAgICAgICAgZHVyYXRpb246LjUsXG4gICAgICAgICAgICBlYXNlOlwicG93ZXIyLmluXCJcbiAgICAgICAgfSkgKi9cbiAgICAgICAgLnlveW8odHJ1ZSlcbiAgICAgICAgLnJlcGVhdCgtMSlcbiAgICB9LFtdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbFRvcENvbnRhaW5lclwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgIDxpbWcgcmVmPXtidXR0b259IHNyYz1cIi9tYWluL3Njcm9sbFRvcC5zdmdcIiBhbHQ9XCJSZXRvdXJuZXIgZW4gaGF1dCBkZSBsYSBwYWdlXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GoTop.js\n");

/***/ })

})