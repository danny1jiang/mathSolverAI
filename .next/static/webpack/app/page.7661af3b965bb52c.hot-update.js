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

/***/ "(app-pages-browser)/./src/AI.js":
/*!*******************!*\
  !*** ./src/AI.js ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateContent: () => (/* binding */ generateContent),\n/* harmony export */   promptWithImage: () => (/* binding */ promptWithImage)\n/* harmony export */ });\n/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ \"(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js\");\n/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* __next_internal_action_entry_do_not_use__ {\"0005ec5dee036b7d6f898cce795d6abe919375bdd5\":\"generateContent\",\"40eb245ed88c06fc656ac4791cf077cb10e57ea1ba\":\"promptWithImage\"} */ \nvar generateContent = /*#__PURE__*/ (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.createServerReference)(\"0005ec5dee036b7d6f898cce795d6abe919375bdd5\", private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.callServer, void 0, private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.findSourceMapURL, \"generateContent\");\nvar promptWithImage = /*#__PURE__*/ (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.createServerReference)(\"40eb245ed88c06fc656ac4791cf077cb10e57ea1ba\", private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.callServer, void 0, private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.findSourceMapURL, \"promptWithImage\");\n /*\nconst fileManager = new GoogleAIFileManager(process.env.REACT_APP_API_KEY);\n\nconst uploadResult = await fileManager.uploadFile(\n  `${mediaPath}/jetpack.jpg`,\n  {\n    mimeType: \"image/jpeg\",\n    displayName: \"Jetpack drawing\",\n  },\n);\n// View the response.\nconsole.log(\n  `Uploaded file ${uploadResult.file.displayName} as: ${uploadResult.file.uri}`,\n);\n\nconst genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);\nconst model = genAI.getGenerativeModel({ model: \"gemini-1.5-flash\" });\nconst result = await model.generateContent([\n  \"Tell me about this image.\",\n  {\n    fileData: {\n      fileUri: uploadResult.file.uri,\n      mimeType: uploadResult.file.mimeType,\n    },\n  },\n]);\nconsole.log(result.response.text());\n*/ \n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9BSS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztJQVFzQkEsZ0NBQUFBLDZGQUFBQSwrQ0FBQUEsOEVBQUFBLFVBQUFBLG9GQUFBQTtJQVVBQyxnQ0FBQUEsNkZBQUFBLCtDQUFBQSw4RUFBQUEsVUFBQUEsb0ZBQUFBO0NBcUN0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBIiwic291cmNlcyI6WyIvVXNlcnMvZGFubnkvRG9jdW1lbnRzL3dlYi1kZXNpZ24vbWF0aC1zb2x2ZXItYWkvc3JjL0FJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQge0dvb2dsZUdlbmVyYXRpdmVBSX0gZnJvbSBcIkBnb29nbGUvZ2VuZXJhdGl2ZS1haVwiO1xuaW1wb3J0IHtHb29nbGVBSUZpbGVNYW5hZ2VyfSBmcm9tIFwiQGdvb2dsZS9nZW5lcmF0aXZlLWFpL3NlcnZlclwiO1xuaW1wb3J0IHtkaXJuYW1lfSBmcm9tIFwicGF0aFwiO1xuXG5jb25zdCBtZWRpYVBhdGggPSBfX2Rpcm5hbWU7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnQoKSB7XG5cdGNvbnN0IGdlbkFJID0gbmV3IEdvb2dsZUdlbmVyYXRpdmVBSShwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX0tFWSk7XG5cdGNvbnN0IG1vZGVsID0gZ2VuQUkuZ2V0R2VuZXJhdGl2ZU1vZGVsKHttb2RlbDogXCJnZW1pbmktMS41LWZsYXNoXCJ9KTtcblxuXHRjb25zdCBwcm9tcHQgPSBcIldyaXRlIGEgc3RvcnkgYWJvdXQgYSBtYWdpYyBiYWNrcGFjay5cIjtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBtb2RlbC5nZW5lcmF0ZUNvbnRlbnQocHJvbXB0KTtcblx0Y29uc29sZS5sb2cocmVzdWx0LnJlc3BvbnNlLnRleHQoKSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9tcHRXaXRoSW1hZ2UoZmlsZSkge1xuXHRjb25zb2xlLmxvZyhcInRlc3RcIik7XG5cdGNvbnNvbGUubG9nKGZpbGUpO1xuXHRjb25zdCBnZW5lcmF0aXZlUGFydCA9IGZpbGVUb0dlbmVyYXRpdmVQYXJ0KGZpbGUsIFwiaW1hZ2UvcG5nXCIpO1xuXHRjb25zb2xlLmxvZyhnZW5lcmF0aXZlUGFydCk7XG5cdGNvbnN0IGZpbGVNYW5hZ2VyID0gbmV3IEdvb2dsZUFJRmlsZU1hbmFnZXIocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9LRVkpO1xuXG5cdGNvbnN0IHVwbG9hZFJlc3VsdCA9IGF3YWl0IGZpbGVNYW5hZ2VyLnVwbG9hZEZpbGUoYCR7bWVkaWFQYXRofS9PcHRpbWl6YXRpb25QcmFjdGljZS5wbmdgLCB7XG5cdFx0bWltZVR5cGU6IFwiaW1hZ2UvcG5nXCIsXG5cdFx0ZGlzcGxheU5hbWU6IFwiTWF0aCBQcm9ibGVtXCIsXG5cdH0pO1xuXHQvLyBWaWV3IHRoZSByZXNwb25zZS5cblx0Y29uc29sZS5sb2coYFVwbG9hZGVkIGZpbGUgJHt1cGxvYWRSZXN1bHQuZmlsZS5kaXNwbGF5TmFtZX0gYXM6ICR7dXBsb2FkUmVzdWx0LmZpbGUudXJpfWApO1xuXG5cdGNvbnN0IGdlbkFJID0gbmV3IEdvb2dsZUdlbmVyYXRpdmVBSShwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX0tFWSk7XG5cdGNvbnN0IG1vZGVsID0gZ2VuQUkuZ2V0R2VuZXJhdGl2ZU1vZGVsKHttb2RlbDogXCJnZW1pbmktMS41LWZsYXNoXCJ9KTtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgbW9kZWwuZ2VuZXJhdGVDb250ZW50KFtcblx0XHRcIlNvbHZlIHByb2JsZW0gMSBhbmQgZ2l2ZSBkZXRhaWxlZCBzdGVwc1wiLFxuXHRcdHtcblx0XHRcdGZpbGVEYXRhOiB7XG5cdFx0XHRcdGZpbGVVcmk6IHVwbG9hZFJlc3VsdC5maWxlLnVyaSxcblx0XHRcdFx0bWltZVR5cGU6IHVwbG9hZFJlc3VsdC5maWxlLm1pbWVUeXBlLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRdKTtcblx0Y29uc29sZS5sb2cocmVzdWx0LnJlc3BvbnNlLnRleHQoKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZpbGVUb0dlbmVyYXRpdmVQYXJ0KGZpbGUsIG1pbWVUeXBlKSB7XG5cdHJldHVybiB7XG5cdFx0aW5saW5lRGF0YToge1xuXHRcdFx0ZGF0YTogQnVmZmVyLmZyb20oYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpKS50b1N0cmluZyhcImJhc2U2NFwiKSxcblx0XHRcdG1pbWVUeXBlLFxuXHRcdH0sXG5cdH07XG59XG5cbi8qXG5jb25zdCBmaWxlTWFuYWdlciA9IG5ldyBHb29nbGVBSUZpbGVNYW5hZ2VyKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9BUElfS0VZKTtcblxuY29uc3QgdXBsb2FkUmVzdWx0ID0gYXdhaXQgZmlsZU1hbmFnZXIudXBsb2FkRmlsZShcbiAgYCR7bWVkaWFQYXRofS9qZXRwYWNrLmpwZ2AsXG4gIHtcbiAgICBtaW1lVHlwZTogXCJpbWFnZS9qcGVnXCIsXG4gICAgZGlzcGxheU5hbWU6IFwiSmV0cGFjayBkcmF3aW5nXCIsXG4gIH0sXG4pO1xuLy8gVmlldyB0aGUgcmVzcG9uc2UuXG5jb25zb2xlLmxvZyhcbiAgYFVwbG9hZGVkIGZpbGUgJHt1cGxvYWRSZXN1bHQuZmlsZS5kaXNwbGF5TmFtZX0gYXM6ICR7dXBsb2FkUmVzdWx0LmZpbGUudXJpfWAsXG4pO1xuXG5jb25zdCBnZW5BSSA9IG5ldyBHb29nbGVHZW5lcmF0aXZlQUkocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9LRVkpO1xuY29uc3QgbW9kZWwgPSBnZW5BSS5nZXRHZW5lcmF0aXZlTW9kZWwoeyBtb2RlbDogXCJnZW1pbmktMS41LWZsYXNoXCIgfSk7XG5jb25zdCByZXN1bHQgPSBhd2FpdCBtb2RlbC5nZW5lcmF0ZUNvbnRlbnQoW1xuICBcIlRlbGwgbWUgYWJvdXQgdGhpcyBpbWFnZS5cIixcbiAge1xuICAgIGZpbGVEYXRhOiB7XG4gICAgICBmaWxlVXJpOiB1cGxvYWRSZXN1bHQuZmlsZS51cmksXG4gICAgICBtaW1lVHlwZTogdXBsb2FkUmVzdWx0LmZpbGUubWltZVR5cGUsXG4gICAgfSxcbiAgfSxcbl0pO1xuY29uc29sZS5sb2cocmVzdWx0LnJlc3BvbnNlLnRleHQoKSk7XG4qL1xuIl0sIm5hbWVzIjpbImdlbmVyYXRlQ29udGVudCIsInByb21wdFdpdGhJbWFnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/AI.js\n"));

/***/ })

});