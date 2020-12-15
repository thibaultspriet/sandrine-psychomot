webpackHotUpdate_N_E("pages/index",{

/***/ "./components/GoTop.js":
/*!*****************************!*\
  !*** ./components/GoTop.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GoTop; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _static_css_goTop_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/css/goTop.css */ \"./static/css/goTop.css\");\n/* harmony import */ var _static_css_goTop_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_css_goTop_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/sprietthibault/Sites/sandrine-dubois-psychomotricienne/psychomot_nextjs/components/GoTop.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_3__[\"gsap\"].registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__[\"ScrollTrigger\"]);\nfunction GoTop() {\n  _s();\n\n  var handleClick = function handleClick() {\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\"\n    });\n  };\n\n  var button = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_3__[\"gsap\"].timeline({\n      scrollTrigger: {\n        trigger: button.current,\n        toggleActions: \"play pause\"\n      }\n    }).to(button.current, {\n      y: \"-=3px\",\n      duration: .8,\n      ease: \"power4.out\"\n    }).yoyo(true).repeat(-1);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"scrollTopContainer\",\n    onClick: handleClick,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      ref: button,\n      src: \"/main/scrollTop.svg\",\n      alt: \"Retourner en haut de la page\",\n      title: \"Haut de page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 9\n  }, this);\n}\n\n_s(GoTop, \"GaX2rfgZYDk6IuwW3YEHKZkcOeM=\");\n\n_c = GoTop;\n\nvar _c;\n\n$RefreshReg$(_c, \"GoTop\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb1RvcC5qcz9hMDZmIl0sIm5hbWVzIjpbImdzYXAiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRyaWdnZXIiLCJHb1RvcCIsImhhbmRsZUNsaWNrIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImJ1dHRvbiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRsIiwidGltZWxpbmUiLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsImN1cnJlbnQiLCJ0b2dnbGVBY3Rpb25zIiwidG8iLCJ5IiwiZHVyYXRpb24iLCJlYXNlIiwieW95byIsInJlcGVhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBQSx5Q0FBSSxDQUFDQyxjQUFMLENBQW9CQyxxRUFBcEI7QUFFZSxTQUFTQyxLQUFULEdBQWdCO0FBQUE7O0FBRTNCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQUs7QUFDckJDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUFDQyxTQUFHLEVBQUMsQ0FBTDtBQUFPQyxjQUFRLEVBQUM7QUFBaEIsS0FBaEI7QUFDSCxHQUZEOztBQUlBLE1BQU1DLE1BQU0sR0FBR0Msb0RBQU0sRUFBckI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsRUFBRSxHQUFHWix5Q0FBSSxDQUFDYSxRQUFMLENBQWM7QUFDckJDLG1CQUFhLEVBQUc7QUFDWkMsZUFBTyxFQUFHTixNQUFNLENBQUNPLE9BREw7QUFFWkMscUJBQWEsRUFBRztBQUZKO0FBREssS0FBZCxFQU1WQyxFQU5VLENBTVBULE1BQU0sQ0FBQ08sT0FOQSxFQU1RO0FBQ2ZHLE9BQUMsRUFBQyxPQURhO0FBRWZDLGNBQVEsRUFBQyxFQUZNO0FBR2ZDLFVBQUksRUFBQztBQUhVLEtBTlIsRUFXVkMsSUFYVSxDQVdMLElBWEssRUFZVkMsTUFaVSxDQVlILENBQUMsQ0FaRSxDQUFYO0FBYUgsR0FkUSxFQWNQLEVBZE8sQ0FBVDtBQWdCQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFvQyxXQUFPLEVBQUVuQixXQUE3QztBQUFBLDJCQUNJO0FBQUssU0FBRyxFQUFFSyxNQUFWO0FBQWtCLFNBQUcsRUFBQyxxQkFBdEI7QUFBNEMsU0FBRyxFQUFDLDhCQUFoRDtBQUErRSxXQUFLLEVBQUM7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztHQTVCdUJOLEs7O0tBQUFBLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL0dvVG9wLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBcIi4uL3N0YXRpYy9jc3MvZ29Ub3AuY3NzXCJcblxuaW1wb3J0IHtnc2FwfSBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQge3VzZUVmZmVjdCx1c2VSZWZ9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHb1RvcCgpe1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PntcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6MCxiZWhhdmlvcjpcInNtb290aFwifSlcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b24gPSB1c2VSZWYoKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyIDoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIgOiBidXR0b24uY3VycmVudCxcbiAgICAgICAgICAgICAgICB0b2dnbGVBY3Rpb25zIDogXCJwbGF5IHBhdXNlXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50byhidXR0b24uY3VycmVudCx7XG4gICAgICAgICAgICB5OlwiLT0zcHhcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOi44LFxuICAgICAgICAgICAgZWFzZTpcInBvd2VyNC5vdXRcIlxuICAgICAgICB9KVxuICAgICAgICAueW95byh0cnVlKVxuICAgICAgICAucmVwZWF0KC0xKVxuICAgIH0sW10pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsVG9wQ29udGFpbmVyXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgPGltZyByZWY9e2J1dHRvbn0gc3JjPVwiL21haW4vc2Nyb2xsVG9wLnN2Z1wiIGFsdD1cIlJldG91cm5lciBlbiBoYXV0IGRlIGxhIHBhZ2VcIiB0aXRsZT1cIkhhdXQgZGUgcGFnZVwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GoTop.js\n");

/***/ })

})