webpackHotUpdate_N_E("pages/index",{

/***/ "./components/IndexSlider.js":
/*!***********************************!*\
  !*** ./components/IndexSlider.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_sprietthibault_Sites_sandrine_psychomot_psychomot_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_animated_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-animated-slider */ \"./node_modules/react-animated-slider/build/index.js\");\n/* harmony import */ var react_animated_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_animated_slider__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_animated_slider_build_horizontal_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animated-slider/build/horizontal.css */ \"./node_modules/react-animated-slider/build/horizontal.css\");\n/* harmony import */ var react_animated_slider_build_horizontal_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_animated_slider_build_horizontal_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/sprietthibault/Sites/sandrine-psychomot/psychomot_nextjs/components/IndexSlider.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_sprietthibault_Sites_sandrine_psychomot_psychomot_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar yogaBack = {\n  backgroundPositionX: \"top\",\n  backgroundPositionY: \"bottom\"\n};\n\nvar IndexSlider = function IndexSlider() {\n  var slides = [{\n    title: \"En psychomotricité\",\n    description: \"on vit, on ressent, on expérimente, on exprime des sensations et des émotions\",\n    backgroundImage: \"/main/psychomotricite_slider.jpg\",\n    link: \"/psychomotricite\",\n    linkLabel: \"Psychomotricité\",\n    className: \"psychomotricite_slide\"\n  }, {\n    title: \"le yoga\",\n    description: \"une pratique douce accessible pour tous\",\n    backgroundImage: \"/main/yoga_slider.jpg\",\n    link: \"/yoga-detail\",\n    linkLabel: \"Le yoga\",\n    className: \"yoga_slide\",\n    additionalCss: yogaBack\n  }, {\n    title: \"la sophrologie\",\n    description: \"Une démarche positive pour retrouver Equilibre et Harmonie.\",\n    backgroundImage: \"/main/sophro_slider.jpg\",\n    link: \"/sophro-detail\",\n    linkLabel: \"La sophrologie\",\n    className: \"sophro_slide\"\n  }];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_animated_slider__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    infinite: true,\n    autoplay: 5000,\n    children: slides.map(function (slide, index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        style: _objectSpread({\n          background: \"url(\".concat(slide.backgroundImage, \")\"),\n          backgroundSize: \"cover\"\n        }, slide.additionalCss),\n        className: slide.className,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"text\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n            children: slide.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: slide.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this), slide.link ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"linkContainer\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            href: slide.link,\n            children: slide.linkLabel\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }, _this) : null]\n      }, index, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = IndexSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexSlider);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexSlider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmRleFNsaWRlci5qcz8zNTM4Il0sIm5hbWVzIjpbInlvZ2FCYWNrIiwiYmFja2dyb3VuZFBvc2l0aW9uWCIsImJhY2tncm91bmRQb3NpdGlvblkiLCJJbmRleFNsaWRlciIsInNsaWRlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJsaW5rIiwibGlua0xhYmVsIiwiY2xhc3NOYW1lIiwiYWRkaXRpb25hbENzcyIsIm1hcCIsInNsaWRlIiwiaW5kZXgiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2ZDLHFCQUFtQixFQUFHLEtBRFA7QUFFZkMscUJBQW1CLEVBQUc7QUFGUCxDQUFqQjs7QUFLQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLE1BQU1DLE1BQU0sR0FBRyxDQUNiO0FBQ0VDLFNBQUssRUFBRSxvQkFEVDtBQUVFQyxlQUFXLEVBQ1QsK0VBSEo7QUFJRUMsbUJBQWUsRUFBRSxrQ0FKbkI7QUFLRUMsUUFBSSxFQUFFLGtCQUxSO0FBTUVDLGFBQVMsRUFBRSxpQkFOYjtBQU9FQyxhQUFTLEVBQUU7QUFQYixHQURhLEVBVWI7QUFDRUwsU0FBSyxFQUFFLFNBRFQ7QUFFRUMsZUFBVyxFQUFFLHlDQUZmO0FBR0VDLG1CQUFlLEVBQUUsdUJBSG5CO0FBSUVDLFFBQUksRUFBRSxjQUpSO0FBS0VDLGFBQVMsRUFBRSxTQUxiO0FBTUVDLGFBQVMsRUFBRSxZQU5iO0FBT0VDLGlCQUFhLEVBQUdYO0FBUGxCLEdBVmEsRUFtQmI7QUFDRUssU0FBSyxFQUFFLGdCQURUO0FBRUVDLGVBQVcsRUFDVCw2REFISjtBQUlFQyxtQkFBZSxFQUFFLHlCQUpuQjtBQUtFQyxRQUFJLEVBQUUsZ0JBTFI7QUFNRUMsYUFBUyxFQUFFLGdCQU5iO0FBT0VDLGFBQVMsRUFBRTtBQVBiLEdBbkJhLENBQWY7QUE2QkEsc0JBQ0UscUVBQUMsNERBQUQ7QUFBUSxZQUFRLEVBQUUsSUFBbEI7QUFBd0IsWUFBUSxFQUFFLElBQWxDO0FBQUEsY0FDR04sTUFBTSxDQUFDUSxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsMEJBQ1Y7QUFFRSxhQUFLO0FBQ0hDLG9CQUFVLGdCQUFTRixLQUFLLENBQUNOLGVBQWYsTUFEUDtBQUVIUyx3QkFBYyxFQUFFO0FBRmIsV0FHQUgsS0FBSyxDQUFDRixhQUhOLENBRlA7QUFPRSxpQkFBUyxFQUFFRSxLQUFLLENBQUNILFNBUG5CO0FBQUEsZ0NBU0U7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxrQ0FDRTtBQUFBLHNCQUFLRyxLQUFLLENBQUNSO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsc0JBQUlRLEtBQUssQ0FBQ1A7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURixFQWFHTyxLQUFLLENBQUNMLElBQU4sZ0JBQ0M7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxpQ0FDRTtBQUFHLGdCQUFJLEVBQUVLLEtBQUssQ0FBQ0wsSUFBZjtBQUFBLHNCQUFzQkssS0FBSyxDQUFDSjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxHQUlHLElBakJOO0FBQUEsU0FDT0ssS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFU7QUFBQSxLQUFYO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUJELENBdkREOztLQUFNWCxXO0FBeURTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW5kZXhTbGlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LWFuaW1hdGVkLXNsaWRlclwiO1xuaW1wb3J0IFwicmVhY3QtYW5pbWF0ZWQtc2xpZGVyL2J1aWxkL2hvcml6b250YWwuY3NzXCI7XG5cbmNvbnN0IHlvZ2FCYWNrID0ge1xuICBiYWNrZ3JvdW5kUG9zaXRpb25YIDogXCJ0b3BcIixcbiAgYmFja2dyb3VuZFBvc2l0aW9uWSA6IFwiYm90dG9tXCJcbn1cblxuY29uc3QgSW5kZXhTbGlkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNsaWRlcyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJFbiBwc3ljaG9tb3RyaWNpdMOpXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJvbiB2aXQsIG9uIHJlc3NlbnQsIG9uIGV4cMOpcmltZW50ZSwgb24gZXhwcmltZSBkZXMgc2Vuc2F0aW9ucyBldCBkZXMgw6ltb3Rpb25zXCIsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwiL21haW4vcHN5Y2hvbW90cmljaXRlX3NsaWRlci5qcGdcIixcbiAgICAgIGxpbms6IFwiL3BzeWNob21vdHJpY2l0ZVwiLFxuICAgICAgbGlua0xhYmVsOiBcIlBzeWNob21vdHJpY2l0w6lcIixcbiAgICAgIGNsYXNzTmFtZTogXCJwc3ljaG9tb3RyaWNpdGVfc2xpZGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcImxlIHlvZ2FcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcInVuZSBwcmF0aXF1ZSBkb3VjZSBhY2Nlc3NpYmxlIHBvdXIgdG91c1wiLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBcIi9tYWluL3lvZ2Ffc2xpZGVyLmpwZ1wiLFxuICAgICAgbGluazogXCIveW9nYS1kZXRhaWxcIixcbiAgICAgIGxpbmtMYWJlbDogXCJMZSB5b2dhXCIsXG4gICAgICBjbGFzc05hbWU6IFwieW9nYV9zbGlkZVwiLFxuICAgICAgYWRkaXRpb25hbENzcyA6IHlvZ2FCYWNrXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJsYSBzb3Bocm9sb2dpZVwiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiVW5lIGTDqW1hcmNoZSBwb3NpdGl2ZSBwb3VyIHJldHJvdXZlciBFcXVpbGlicmUgZXQgSGFybW9uaWUuXCIsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwiL21haW4vc29waHJvX3NsaWRlci5qcGdcIixcbiAgICAgIGxpbms6IFwiL3NvcGhyby1kZXRhaWxcIixcbiAgICAgIGxpbmtMYWJlbDogXCJMYSBzb3Bocm9sb2dpZVwiLFxuICAgICAgY2xhc3NOYW1lOiBcInNvcGhyb19zbGlkZVwiLFxuICAgIH0sXG4gIF07XG4gIHJldHVybiAoXG4gICAgPFNsaWRlciBpbmZpbml0ZT17dHJ1ZX0gYXV0b3BsYXk9ezUwMDB9PlxuICAgICAge3NsaWRlcy5tYXAoKHNsaWRlLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybCgke3NsaWRlLmJhY2tncm91bmRJbWFnZX0pYCxcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgICAuLi5zbGlkZS5hZGRpdGlvbmFsQ3NzXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e3NsaWRlLmNsYXNzTmFtZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgPGgyPntzbGlkZS50aXRsZX08L2gyPlxuICAgICAgICAgICAgPHA+e3NsaWRlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7c2xpZGUubGluayA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8YSBocmVmPXtzbGlkZS5saW5rfT57c2xpZGUubGlua0xhYmVsfTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvU2xpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhTbGlkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/IndexSlider.js\n");

/***/ })

})