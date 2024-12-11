"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/SelectProblem.js":
/*!*****************************************!*\
  !*** ./src/components/SelectProblem.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SelectProblemComponent: () => (/* binding */ SelectProblemComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _AI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AI */ \"(app-pages-browser)/./src/AI.js\");\n\n\nfunction SelectProblemComponent(param) {\n    var file = param.file, problems = param.problems, resultCallback = param.resultCallback, onStartCallback = param.onStartCallback, onCloseCallback = param.onCloseCallback;\n    if (problems === undefined) {\n        return null;\n    }\n    console.log(problems);\n    var problemComponents = [];\n    for(var i = 0; i < problems.length; i++){\n        problemComponents.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProblemComponent, {\n            file: file,\n            problemLabel: problems[i],\n            onStartCallback: onStartCallback,\n            resultCallback: resultCallback\n        }, i, false, {\n            fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n            lineNumber: 19,\n            columnNumber: 4\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            color: \"white\",\n            fontFamily: \"sans-serif\",\n            fontSize: 25,\n            maxWidth: \"100%\",\n            height: \"100%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Select a Problem\"\n            }, void 0, false, {\n                fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n                lineNumber: 41,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.container,\n                children: problemComponents\n            }, void 0, false, {\n                fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n                lineNumber: 42,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n        lineNumber: 30,\n        columnNumber: 3\n    }, this);\n}\n_c = SelectProblemComponent;\nfunction ProblemComponent(param) {\n    var file = param.file, problemLabel = param.problemLabel, resultCallback = param.resultCallback, onStartCallback = param.onStartCallback;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function() {\n            onStartCallback();\n            resultCallback(problemLabel);\n        /*promptWithImage(file, problemLabel).then((result) => {\n\t\t\t\t\tresultCallback(result);\n\t\t\t\t});*/ },\n        style: styles.problemLabelBox,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: problemLabel\n        }, void 0, false, {\n            fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n            lineNumber: 59,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n        lineNumber: 49,\n        columnNumber: 3\n    }, this);\n}\n_c1 = ProblemComponent;\nvar styles = {\n    container: {\n        flex: 1,\n        display: \"flex\",\n        flexWrap: \"wrap\",\n        flexDirection: \"row\",\n        gap: \"5%\",\n        paddingLeft: \"5%\",\n        backgroundColor: \"white\",\n        alignItems: \"space-evenly\",\n        justifyContent: \"flex-start\",\n        overflow: \"hidden\"\n    },\n    problemLabelBox: {\n        width: \"15%\",\n        aspectRatio: 1,\n        marginBottom: \"5%\",\n        backgroundColor: \"#939393\",\n        border: \"none\"\n    }\n};\nvar _c, _c1;\n$RefreshReg$(_c, \"SelectProblemComponent\");\n$RefreshReg$(_c1, \"ProblemComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlbGVjdFByb2JsZW0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzQztBQUUvQixTQUFTQyx1QkFBdUIsS0FNdEM7UUFMQUMsT0FEc0MsTUFDdENBLE1BQ0FDLFdBRnNDLE1BRXRDQSxVQUNBQyxpQkFIc0MsTUFHdENBLGdCQUNBQyxrQkFKc0MsTUFJdENBLGlCQUNBQyxrQkFMc0MsTUFLdENBO0lBRUEsSUFBSUgsYUFBYUksV0FBVztRQUMzQixPQUFPO0lBQ1I7SUFFQUMsUUFBUUMsR0FBRyxDQUFDTjtJQUVaLElBQUlPLG9CQUFvQixFQUFFO0lBQzFCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJUixTQUFTUyxNQUFNLEVBQUVELElBQUs7UUFDekNELGtCQUFrQkcsSUFBSSxlQUNyQiw4REFBQ0M7WUFFQVosTUFBTUE7WUFDTmEsY0FBY1osUUFBUSxDQUFDUSxFQUFFO1lBQ3pCTixpQkFBaUJBO1lBQ2pCRCxnQkFBZ0JBO1dBSlhPOzs7OztJQU9SO0lBRUEscUJBQ0MsOERBQUNLO1FBQ0FDLE9BQU87WUFDTkMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLE9BQU87WUFDUEMsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZDLFVBQVU7WUFDVkMsUUFBUTtRQUNUOzswQkFFQSw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ1Q7Z0JBQUlDLE9BQU9TLE9BQU9DLFNBQVM7MEJBQUdqQjs7Ozs7Ozs7Ozs7O0FBR2xDO0tBMUNnQlQ7QUE0Q2hCLFNBQVNhLGlCQUFpQixLQUFxRDtRQUFwRFosT0FBRCxNQUFDQSxNQUFNYSxlQUFQLE1BQU9BLGNBQWNYLGlCQUFyQixNQUFxQkEsZ0JBQWdCQyxrQkFBckMsTUFBcUNBO0lBQzlELHFCQUNDLDhEQUFDdUI7UUFDQUMsU0FBUztZQUNSeEI7WUFDQUQsZUFBZVc7UUFDZjs7T0FFRyxHQUNKO1FBQ0FFLE9BQU9TLE9BQU9JLGVBQWU7a0JBRTdCLDRFQUFDTDtzQkFBSVY7Ozs7Ozs7Ozs7O0FBR1I7TUFmU0Q7QUFpQlQsSUFBTVksU0FBUztJQUNkQyxXQUFXO1FBQ1ZJLE1BQU07UUFDTmIsU0FBUztRQUNUYyxVQUFVO1FBQ1ZiLGVBQWU7UUFDZmMsS0FBSztRQUNMQyxhQUFhO1FBQ2JDLGlCQUFpQjtRQUNqQkMsWUFBWTtRQUNaQyxnQkFBZ0I7UUFDaEJDLFVBQVU7SUFDWDtJQUNBUixpQkFBaUI7UUFDaEJTLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxjQUFjO1FBQ2ROLGlCQUFpQjtRQUNqQk8sUUFBUTtJQUNUO0FBQ0QiLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5ueS9Eb2N1bWVudHMvd2ViLWRlc2lnbi9tYXRoLXNvbHZlci1haS9zcmMvY29tcG9uZW50cy9TZWxlY3RQcm9ibGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvbXB0V2l0aEltYWdlfSBmcm9tIFwiLi4vQUlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdFByb2JsZW1Db21wb25lbnQoe1xuXHRmaWxlLFxuXHRwcm9ibGVtcyxcblx0cmVzdWx0Q2FsbGJhY2ssXG5cdG9uU3RhcnRDYWxsYmFjayxcblx0b25DbG9zZUNhbGxiYWNrLFxufSkge1xuXHRpZiAocHJvYmxlbXMgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc29sZS5sb2cocHJvYmxlbXMpO1xuXG5cdGxldCBwcm9ibGVtQ29tcG9uZW50cyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2JsZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0cHJvYmxlbUNvbXBvbmVudHMucHVzaChcblx0XHRcdDxQcm9ibGVtQ29tcG9uZW50XG5cdFx0XHRcdGtleT17aX1cblx0XHRcdFx0ZmlsZT17ZmlsZX1cblx0XHRcdFx0cHJvYmxlbUxhYmVsPXtwcm9ibGVtc1tpXX1cblx0XHRcdFx0b25TdGFydENhbGxiYWNrPXtvblN0YXJ0Q2FsbGJhY2t9XG5cdFx0XHRcdHJlc3VsdENhbGxiYWNrPXtyZXN1bHRDYWxsYmFja31cblx0XHRcdC8+XG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRcdGZvbnRGYW1pbHk6IFwic2Fucy1zZXJpZlwiLFxuXHRcdFx0XHRmb250U2l6ZTogMjUsXG5cdFx0XHRcdG1heFdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PGgxPlNlbGVjdCBhIFByb2JsZW08L2gxPlxuXHRcdFx0PGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+e3Byb2JsZW1Db21wb25lbnRzfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5mdW5jdGlvbiBQcm9ibGVtQ29tcG9uZW50KHtmaWxlLCBwcm9ibGVtTGFiZWwsIHJlc3VsdENhbGxiYWNrLCBvblN0YXJ0Q2FsbGJhY2t9KSB7XG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRvblN0YXJ0Q2FsbGJhY2soKTtcblx0XHRcdFx0cmVzdWx0Q2FsbGJhY2socHJvYmxlbUxhYmVsKTtcblx0XHRcdFx0Lypwcm9tcHRXaXRoSW1hZ2UoZmlsZSwgcHJvYmxlbUxhYmVsKS50aGVuKChyZXN1bHQpID0+IHtcblx0XHRcdFx0XHRyZXN1bHRDYWxsYmFjayhyZXN1bHQpO1xuXHRcdFx0XHR9KTsqL1xuXHRcdFx0fX1cblx0XHRcdHN0eWxlPXtzdHlsZXMucHJvYmxlbUxhYmVsQm94fVxuXHRcdD5cblx0XHRcdDxoMT57cHJvYmxlbUxhYmVsfTwvaDE+XG5cdFx0PC9idXR0b24+XG5cdCk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Y29udGFpbmVyOiB7XG5cdFx0ZmxleDogMSxcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRmbGV4V3JhcDogXCJ3cmFwXCIsXG5cdFx0ZmxleERpcmVjdGlvbjogXCJyb3dcIixcblx0XHRnYXA6IFwiNSVcIixcblx0XHRwYWRkaW5nTGVmdDogXCI1JVwiLFxuXHRcdGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdGFsaWduSXRlbXM6IFwic3BhY2UtZXZlbmx5XCIsXG5cdFx0anVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuXHRcdG92ZXJmbG93OiBcImhpZGRlblwiLFxuXHR9LFxuXHRwcm9ibGVtTGFiZWxCb3g6IHtcblx0XHR3aWR0aDogXCIxNSVcIixcblx0XHRhc3BlY3RSYXRpbzogMSxcblx0XHRtYXJnaW5Cb3R0b206IFwiNSVcIixcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzkzOTM5M1wiLFxuXHRcdGJvcmRlcjogXCJub25lXCIsXG5cdH0sXG59O1xuIl0sIm5hbWVzIjpbInByb21wdFdpdGhJbWFnZSIsIlNlbGVjdFByb2JsZW1Db21wb25lbnQiLCJmaWxlIiwicHJvYmxlbXMiLCJyZXN1bHRDYWxsYmFjayIsIm9uU3RhcnRDYWxsYmFjayIsIm9uQ2xvc2VDYWxsYmFjayIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJwcm9ibGVtQ29tcG9uZW50cyIsImkiLCJsZW5ndGgiLCJwdXNoIiwiUHJvYmxlbUNvbXBvbmVudCIsInByb2JsZW1MYWJlbCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJjb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsIm1heFdpZHRoIiwiaGVpZ2h0IiwiaDEiLCJzdHlsZXMiLCJjb250YWluZXIiLCJidXR0b24iLCJvbkNsaWNrIiwicHJvYmxlbUxhYmVsQm94IiwiZmxleCIsImZsZXhXcmFwIiwiZ2FwIiwicGFkZGluZ0xlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJvdmVyZmxvdyIsIndpZHRoIiwiYXNwZWN0UmF0aW8iLCJtYXJnaW5Cb3R0b20iLCJib3JkZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SelectProblem.js\n"));

/***/ })

});