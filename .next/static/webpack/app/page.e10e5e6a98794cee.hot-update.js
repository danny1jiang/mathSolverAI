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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   promptWithImage: () => (/* binding */ promptWithImage)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google/generative-ai */ \"(app-pages-browser)/./node_modules/@google/generative-ai/dist/index.mjs\");\n/* harmony import */ var _serverAI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serverAI */ \"(app-pages-browser)/./src/serverAI.js\");\n/* __next_internal_client_entry_do_not_use__ promptWithImage auto */ \n\n\n\n\nfunction promptWithImage(file, problemLabel) {\n    return _promptWithImage.apply(this, arguments);\n}\nfunction _promptWithImage() {\n    _promptWithImage = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(file, problemLabel) {\n        var result, filePart, APIKey, genAI, model, prompt, imageParts, generatedContent, newModel, generatedContentStream;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    console.log(\"test\");\n                    console.log(file);\n                    result = \"\";\n                    if (!(file !== undefined)) return [\n                        3,\n                        5\n                    ];\n                    return [\n                        4,\n                        (0,_serverAI__WEBPACK_IMPORTED_MODULE_1__.fileToGenerativePart)(file, \"image/png\")\n                    ];\n                case 1:\n                    filePart = _state.sent();\n                    return [\n                        4,\n                        (0,_serverAI__WEBPACK_IMPORTED_MODULE_1__.getAPIKey)()\n                    ];\n                case 2:\n                    APIKey = _state.sent();\n                    genAI = new _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.GoogleGenerativeAI(APIKey);\n                    model = genAI.getGenerativeModel({\n                        model: \"gemini-1.5-flash\",\n                        systemInstruction: //\"For every every problem, solve it. For each problem, for every portion of the problem that requires math (ANY MATH AT ALL), write code to accomplish the task and run it to get your desired result. If the question requires an exact answer rather than a decimal one, use your code and result to infer the correct answer. If a portion requires reasoning rather than math, do not write code for that portion. Write detailed steps on what you did. THIS IS VERY IMPORTANT: CHECK ALL OF YOUR CALCULATIONS AGAIN AFTER YOU COMPLETE THE PROBLEM AT ALL TIMES.\",\n                        //'For every every problem state the problem label and solve it. Display all math in LATEX format. For each problem, for every portion of the problem that requires math (ANY MATH AT ALL), write code to accomplish the task and run it to get your desired result. THIS IS VERY IMPORTANT: CHECK ALL OF YOUR CALCULATIONS WITH CODE AGAIN AFTER YOU COMPLETE THE PROBLEM AT ALL TIMES. If the question requires an exact answer rather than a decimal one, use your code and result to infer the correct answer. If a portion requires reasoning rather than math, do not write code for that portion. Show your steps briefly. Include your final answer at the very bottom of your response after writing \"(final_answer)\"',\n                        //\"For every every problem, give a chain of thought and before solving it, write code to solve the problem and use it to guide you. Display all of your math in LATEX format. For each step of the problem that requires algebra (for example, if you simplify, expand, or substitute, etc), write code to accomplish the task and run it to get your desired result BEFORE moving on. If a portion requires reasoning rather than math, do not write code for that portion. THIS IS VERY IMPORTANT: CHECK ALL OF YOUR CALCULATIONS WITH CODE AGAIN AFTER YOU COMPLETE THE PROBLEM AT ALL TIMES. If your answer does not match the code''s answer, THE CODE''s ANSWER IS MORE LIKELY TO BE CORRECT, so you should recheck your work according to the code's response unless you are absolutely sure that you are correct. If the question requires an exact answer rather than a decimal one, use your code and result to infer the correct answer. Show your steps briefly. Include your final answer at the very bottom of your response. After everything, reexplain your steps in human readable format\",\n                        //\"For every every problem, give a chain of thought and before solving it, write code to solve the problem and use it to guide you. Display all of your math in LATEX format using single and double dollar sign delimiters. For each step of the problem that requires algebra (for example, if you simplify, expand, or substitute, etc), write code to accomplish the task and run it to get your desired result BEFORE moving on. If a portion requires reasoning rather than math, do not write code for that portion. THIS IS VERY IMPORTANT: CHECK ALL OF YOUR CALCULATIONS WITH CODE AGAIN AFTER YOU COMPLETE THE PROBLEM AT ALL TIMES. If your answer does not match the code's answer, THE CODE's ANSWER IS MORE LIKELY TO BE CORRECT, so you should recheck your work according to the code's response unless you are absolutely sure that you are correct. If the question requires an exact answer rather than a decimal one, use your code and result to infer the correct answer. Show your steps briefly. Include your final answer at the very bottom of your response after writing '(final_answer)' After everything, reexplain your steps in human readable format\",\n                        //\"For every every problem, give a chain of thought and before solving it, write code to solve the problem and use it to guide you. Display all of your math in LATEX format in code blocks using single and double dollar sign delimiters. For each step of the problem that requires algebra (for example, if you simplify, expand, or substitute, etc), write code to accomplish the task and run it to get your desired result BEFORE moving on. If a portion requires reasoning rather than math, do not write code for that portion. THIS IS VERY IMPORTANT: CHECK ALL OF YOUR CALCULATIONS WITH CODE AGAIN AFTER YOU COMPLETE THE PROBLEM AT ALL TIMES. If your answer does not match the code's answer, THE CODE's ANSWER IS MORE LIKELY TO BE CORRECT, so you should recheck your work according to the code's response unless you are absolutely sure that you are correct. If the question requires an exact answer rather than a decimal one, use your code and result to infer the correct answer. Show your steps briefly. Include your final answer at the very bottom of your response after writing '(final_answer)'. After everything, display {explanation_start} and reexplain your steps in human readable format with formatting like new lines (step by step) as if you were just solving the problem for the first time\",\n                        \"For every every problem, write code to solve the problem and use it to guide you. For each step of the problem that requires algebra (for example, if you simplify, expand, or substitute, etc), write code to accomplish the task and run it to get your desired result BEFORE moving on. If a portion requires reasoning rather than math, do not write code for that portion. THIS IS VERY IMPORTANT: CHECK ALL OF YOUR CALCULATIONS WITH CODE AGAIN AFTER YOU COMPLETE THE PROBLEM AT ALL TIMES. If your answer does not match the code's answer, THE CODE's ANSWER IS MORE LIKELY TO BE CORRECT, so you should recheck your work according to the code's response unless you are absolutely sure that you are correct. If the question requires an exact answer rather than a decimal one, use your code and result to infer the correct answer.\",\n                        tools: [\n                            {\n                                codeExecution: {}\n                            }\n                        ]\n                    });\n                    prompt = \"Solve problem \" + problemLabel;\n                    //const prompt =\n                    //\t\"Solve every problem you see here and write detailed steps on what you did. (Do not worry about length)\";\n                    imageParts = [\n                        filePart\n                    ];\n                    return [\n                        4,\n                        model.generateContent([\n                            prompt\n                        ].concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(imageParts)))\n                    ];\n                case 3:\n                    generatedContent = _state.sent();\n                    console.log(generatedContent.response.text());\n                    newModel = genAI.getGenerativeModel({\n                        model: \"gemini-1.5-flash\",\n                        systemInstruction: \"You will receive a response that includes a detailed explanation of the solution to a problem. Use this response to guide you when solving the problem. DO NOT INCLUDE THE CODE PORTION. Make sure to print a step by step response with all of the math in LATEX form with double dollar delimiters. Do not use \\\\left or \\\\right in your LATEX. Double check your LATEX to make sure it is valid. Make sure you arrive at the same final answer as given. Do not mention anything about formatting or code in yoru response.\",\n                        tools: [\n                            {\n                                codeExecution: {}\n                            }\n                        ]\n                    });\n                    prompt = generatedContent.response.text();\n                    return [\n                        4,\n                        newModel.generateContentStream([\n                            prompt\n                        ].concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(imageParts)))\n                    ];\n                case 4:\n                    generatedContentStream = _state.sent();\n                    result = generatedContentStream.stream;\n                    _state.label = 5;\n                case 5:\n                    return [\n                        2,\n                        result\n                    ];\n            }\n        });\n    });\n    return _promptWithImage.apply(this, arguments);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9BSS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFeUQ7QUFDRTtBQUVwRCxTQUFlRyxnQkFBZ0JDLElBQUksRUFBRUMsWUFBWTtXQUFsQ0Y7O1NBQUFBO0lBQUFBLG1CQUFmLDRFQUErQkMsSUFBSSxFQUFFQyxZQUFZO1lBR25EQyxRQUVHQyxVQUNBQyxRQUNBQyxPQUNBQyxPQVlGQyxRQUlFQyxZQUNGQyxrQkFHRUMsVUFRRkM7Ozs7b0JBbkNMQyxRQUFRQyxHQUFHLENBQUM7b0JBQ1pELFFBQVFDLEdBQUcsQ0FBQ2I7b0JBQ1JFLFNBQVM7eUJBQ1RGLENBQUFBLFNBQVNjLFNBQVEsR0FBakJkOzs7O29CQUNjOzt3QkFBTUgsK0RBQW9CQSxDQUFDRyxNQUFNOzs7b0JBQTVDRyxXQUFXO29CQUNGOzt3QkFBTUwsb0RBQVNBOzs7b0JBQXhCTSxTQUFTO29CQUNUQyxRQUFRLElBQUlULHFFQUFrQkEsQ0FBQ1E7b0JBQy9CRSxRQUFRRCxNQUFNVSxrQkFBa0IsQ0FBQzt3QkFDdENULE9BQU87d0JBQ1BVLG1CQUNDLHlpQkFBeWlCO3dCQUN6aUIsZ3NCQUFnc0I7d0JBQ2hzQiw2aUNBQTZpQzt3QkFDN2lDLHduQ0FBd25DO3dCQUN4bkMsaXhDQUFpeEM7d0JBQ2p4Qzt3QkFDREMsS0FBSzs0QkFBRztnQ0FBQ0MsZUFBZSxDQUFDOzRCQUFDOztvQkFDM0I7b0JBRUlYLFNBQVMsbUJBQW1CTjtvQkFDaEMsZ0JBQWdCO29CQUNoQiw0R0FBNEc7b0JBRXRHTzt3QkFBY0w7O29CQUNHOzt3QkFBTUcsTUFBTWEsZUFBZSxDQUFDOzRCQUFDWjswQkFBRCxPQUFTLG9FQUFHQzs7O29CQUEzREMsbUJBQW1CO29CQUN2QkcsUUFBUUMsR0FBRyxDQUFDSixpQkFBaUJXLFFBQVEsQ0FBQ0MsSUFBSTtvQkFFcENYLFdBQVdMLE1BQU1VLGtCQUFrQixDQUFDO3dCQUN6Q1QsT0FBTzt3QkFDUFUsbUJBQ0M7d0JBQ0RDLEtBQUs7NEJBQUc7Z0NBQUNDLGVBQWUsQ0FBQzs0QkFBQzs7b0JBQzNCO29CQUVBWCxTQUFTRSxpQkFBaUJXLFFBQVEsQ0FBQ0MsSUFBSTtvQkFDVjs7d0JBQU1YLFNBQVNZLHFCQUFxQixDQUFDOzRCQUFDZjswQkFBRCxPQUFTLG9FQUFHQzs7O29CQUExRUcseUJBQXlCO29CQUU3QlQsU0FBU1MsdUJBQXVCWSxNQUFNOzs7b0JBUXZDOzt3QkFBT3JCOzs7O0lBQ1I7V0EvQ3NCSCIsInNvdXJjZXMiOlsiL1VzZXJzL2Rhbm55L0RvY3VtZW50cy93ZWItZGVzaWduL21hdGgtc29sdmVyLWFpL3NyYy9BSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHtHb29nbGVHZW5lcmF0aXZlQUl9IGZyb20gXCJAZ29vZ2xlL2dlbmVyYXRpdmUtYWlcIjtcbmltcG9ydCB7ZmlsZVRvR2VuZXJhdGl2ZVBhcnQsIGdldEFQSUtleX0gZnJvbSBcIi4vc2VydmVyQUlcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb21wdFdpdGhJbWFnZShmaWxlLCBwcm9ibGVtTGFiZWwpIHtcblx0Y29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuXHRjb25zb2xlLmxvZyhmaWxlKTtcblx0bGV0IHJlc3VsdCA9IFwiXCI7XG5cdGlmIChmaWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRjb25zdCBmaWxlUGFydCA9IGF3YWl0IGZpbGVUb0dlbmVyYXRpdmVQYXJ0KGZpbGUsIFwiaW1hZ2UvcG5nXCIpO1xuXHRcdGNvbnN0IEFQSUtleSA9IGF3YWl0IGdldEFQSUtleSgpO1xuXHRcdGNvbnN0IGdlbkFJID0gbmV3IEdvb2dsZUdlbmVyYXRpdmVBSShBUElLZXkpO1xuXHRcdGNvbnN0IG1vZGVsID0gZ2VuQUkuZ2V0R2VuZXJhdGl2ZU1vZGVsKHtcblx0XHRcdG1vZGVsOiBcImdlbWluaS0xLjUtZmxhc2hcIixcblx0XHRcdHN5c3RlbUluc3RydWN0aW9uOlxuXHRcdFx0XHQvL1wiRm9yIGV2ZXJ5IGV2ZXJ5IHByb2JsZW0sIHNvbHZlIGl0LiBGb3IgZWFjaCBwcm9ibGVtLCBmb3IgZXZlcnkgcG9ydGlvbiBvZiB0aGUgcHJvYmxlbSB0aGF0IHJlcXVpcmVzIG1hdGggKEFOWSBNQVRIIEFUIEFMTCksIHdyaXRlIGNvZGUgdG8gYWNjb21wbGlzaCB0aGUgdGFzayBhbmQgcnVuIGl0IHRvIGdldCB5b3VyIGRlc2lyZWQgcmVzdWx0LiBJZiB0aGUgcXVlc3Rpb24gcmVxdWlyZXMgYW4gZXhhY3QgYW5zd2VyIHJhdGhlciB0aGFuIGEgZGVjaW1hbCBvbmUsIHVzZSB5b3VyIGNvZGUgYW5kIHJlc3VsdCB0byBpbmZlciB0aGUgY29ycmVjdCBhbnN3ZXIuIElmIGEgcG9ydGlvbiByZXF1aXJlcyByZWFzb25pbmcgcmF0aGVyIHRoYW4gbWF0aCwgZG8gbm90IHdyaXRlIGNvZGUgZm9yIHRoYXQgcG9ydGlvbi4gV3JpdGUgZGV0YWlsZWQgc3RlcHMgb24gd2hhdCB5b3UgZGlkLiBUSElTIElTIFZFUlkgSU1QT1JUQU5UOiBDSEVDSyBBTEwgT0YgWU9VUiBDQUxDVUxBVElPTlMgQUdBSU4gQUZURVIgWU9VIENPTVBMRVRFIFRIRSBQUk9CTEVNIEFUIEFMTCBUSU1FUy5cIixcblx0XHRcdFx0Ly8nRm9yIGV2ZXJ5IGV2ZXJ5IHByb2JsZW0gc3RhdGUgdGhlIHByb2JsZW0gbGFiZWwgYW5kIHNvbHZlIGl0LiBEaXNwbGF5IGFsbCBtYXRoIGluIExBVEVYIGZvcm1hdC4gRm9yIGVhY2ggcHJvYmxlbSwgZm9yIGV2ZXJ5IHBvcnRpb24gb2YgdGhlIHByb2JsZW0gdGhhdCByZXF1aXJlcyBtYXRoIChBTlkgTUFUSCBBVCBBTEwpLCB3cml0ZSBjb2RlIHRvIGFjY29tcGxpc2ggdGhlIHRhc2sgYW5kIHJ1biBpdCB0byBnZXQgeW91ciBkZXNpcmVkIHJlc3VsdC4gVEhJUyBJUyBWRVJZIElNUE9SVEFOVDogQ0hFQ0sgQUxMIE9GIFlPVVIgQ0FMQ1VMQVRJT05TIFdJVEggQ09ERSBBR0FJTiBBRlRFUiBZT1UgQ09NUExFVEUgVEhFIFBST0JMRU0gQVQgQUxMIFRJTUVTLiBJZiB0aGUgcXVlc3Rpb24gcmVxdWlyZXMgYW4gZXhhY3QgYW5zd2VyIHJhdGhlciB0aGFuIGEgZGVjaW1hbCBvbmUsIHVzZSB5b3VyIGNvZGUgYW5kIHJlc3VsdCB0byBpbmZlciB0aGUgY29ycmVjdCBhbnN3ZXIuIElmIGEgcG9ydGlvbiByZXF1aXJlcyByZWFzb25pbmcgcmF0aGVyIHRoYW4gbWF0aCwgZG8gbm90IHdyaXRlIGNvZGUgZm9yIHRoYXQgcG9ydGlvbi4gU2hvdyB5b3VyIHN0ZXBzIGJyaWVmbHkuIEluY2x1ZGUgeW91ciBmaW5hbCBhbnN3ZXIgYXQgdGhlIHZlcnkgYm90dG9tIG9mIHlvdXIgcmVzcG9uc2UgYWZ0ZXIgd3JpdGluZyBcIihmaW5hbF9hbnN3ZXIpXCInLFxuXHRcdFx0XHQvL1wiRm9yIGV2ZXJ5IGV2ZXJ5IHByb2JsZW0sIGdpdmUgYSBjaGFpbiBvZiB0aG91Z2h0IGFuZCBiZWZvcmUgc29sdmluZyBpdCwgd3JpdGUgY29kZSB0byBzb2x2ZSB0aGUgcHJvYmxlbSBhbmQgdXNlIGl0IHRvIGd1aWRlIHlvdS4gRGlzcGxheSBhbGwgb2YgeW91ciBtYXRoIGluIExBVEVYIGZvcm1hdC4gRm9yIGVhY2ggc3RlcCBvZiB0aGUgcHJvYmxlbSB0aGF0IHJlcXVpcmVzIGFsZ2VicmEgKGZvciBleGFtcGxlLCBpZiB5b3Ugc2ltcGxpZnksIGV4cGFuZCwgb3Igc3Vic3RpdHV0ZSwgZXRjKSwgd3JpdGUgY29kZSB0byBhY2NvbXBsaXNoIHRoZSB0YXNrIGFuZCBydW4gaXQgdG8gZ2V0IHlvdXIgZGVzaXJlZCByZXN1bHQgQkVGT1JFIG1vdmluZyBvbi4gSWYgYSBwb3J0aW9uIHJlcXVpcmVzIHJlYXNvbmluZyByYXRoZXIgdGhhbiBtYXRoLCBkbyBub3Qgd3JpdGUgY29kZSBmb3IgdGhhdCBwb3J0aW9uLiBUSElTIElTIFZFUlkgSU1QT1JUQU5UOiBDSEVDSyBBTEwgT0YgWU9VUiBDQUxDVUxBVElPTlMgV0lUSCBDT0RFIEFHQUlOIEFGVEVSIFlPVSBDT01QTEVURSBUSEUgUFJPQkxFTSBBVCBBTEwgVElNRVMuIElmIHlvdXIgYW5zd2VyIGRvZXMgbm90IG1hdGNoIHRoZSBjb2RlJydzIGFuc3dlciwgVEhFIENPREUnJ3MgQU5TV0VSIElTIE1PUkUgTElLRUxZIFRPIEJFIENPUlJFQ1QsIHNvIHlvdSBzaG91bGQgcmVjaGVjayB5b3VyIHdvcmsgYWNjb3JkaW5nIHRvIHRoZSBjb2RlJ3MgcmVzcG9uc2UgdW5sZXNzIHlvdSBhcmUgYWJzb2x1dGVseSBzdXJlIHRoYXQgeW91IGFyZSBjb3JyZWN0LiBJZiB0aGUgcXVlc3Rpb24gcmVxdWlyZXMgYW4gZXhhY3QgYW5zd2VyIHJhdGhlciB0aGFuIGEgZGVjaW1hbCBvbmUsIHVzZSB5b3VyIGNvZGUgYW5kIHJlc3VsdCB0byBpbmZlciB0aGUgY29ycmVjdCBhbnN3ZXIuIFNob3cgeW91ciBzdGVwcyBicmllZmx5LiBJbmNsdWRlIHlvdXIgZmluYWwgYW5zd2VyIGF0IHRoZSB2ZXJ5IGJvdHRvbSBvZiB5b3VyIHJlc3BvbnNlLiBBZnRlciBldmVyeXRoaW5nLCByZWV4cGxhaW4geW91ciBzdGVwcyBpbiBodW1hbiByZWFkYWJsZSBmb3JtYXRcIixcblx0XHRcdFx0Ly9cIkZvciBldmVyeSBldmVyeSBwcm9ibGVtLCBnaXZlIGEgY2hhaW4gb2YgdGhvdWdodCBhbmQgYmVmb3JlIHNvbHZpbmcgaXQsIHdyaXRlIGNvZGUgdG8gc29sdmUgdGhlIHByb2JsZW0gYW5kIHVzZSBpdCB0byBndWlkZSB5b3UuIERpc3BsYXkgYWxsIG9mIHlvdXIgbWF0aCBpbiBMQVRFWCBmb3JtYXQgdXNpbmcgc2luZ2xlIGFuZCBkb3VibGUgZG9sbGFyIHNpZ24gZGVsaW1pdGVycy4gRm9yIGVhY2ggc3RlcCBvZiB0aGUgcHJvYmxlbSB0aGF0IHJlcXVpcmVzIGFsZ2VicmEgKGZvciBleGFtcGxlLCBpZiB5b3Ugc2ltcGxpZnksIGV4cGFuZCwgb3Igc3Vic3RpdHV0ZSwgZXRjKSwgd3JpdGUgY29kZSB0byBhY2NvbXBsaXNoIHRoZSB0YXNrIGFuZCBydW4gaXQgdG8gZ2V0IHlvdXIgZGVzaXJlZCByZXN1bHQgQkVGT1JFIG1vdmluZyBvbi4gSWYgYSBwb3J0aW9uIHJlcXVpcmVzIHJlYXNvbmluZyByYXRoZXIgdGhhbiBtYXRoLCBkbyBub3Qgd3JpdGUgY29kZSBmb3IgdGhhdCBwb3J0aW9uLiBUSElTIElTIFZFUlkgSU1QT1JUQU5UOiBDSEVDSyBBTEwgT0YgWU9VUiBDQUxDVUxBVElPTlMgV0lUSCBDT0RFIEFHQUlOIEFGVEVSIFlPVSBDT01QTEVURSBUSEUgUFJPQkxFTSBBVCBBTEwgVElNRVMuIElmIHlvdXIgYW5zd2VyIGRvZXMgbm90IG1hdGNoIHRoZSBjb2RlJ3MgYW5zd2VyLCBUSEUgQ09ERSdzIEFOU1dFUiBJUyBNT1JFIExJS0VMWSBUTyBCRSBDT1JSRUNULCBzbyB5b3Ugc2hvdWxkIHJlY2hlY2sgeW91ciB3b3JrIGFjY29yZGluZyB0byB0aGUgY29kZSdzIHJlc3BvbnNlIHVubGVzcyB5b3UgYXJlIGFic29sdXRlbHkgc3VyZSB0aGF0IHlvdSBhcmUgY29ycmVjdC4gSWYgdGhlIHF1ZXN0aW9uIHJlcXVpcmVzIGFuIGV4YWN0IGFuc3dlciByYXRoZXIgdGhhbiBhIGRlY2ltYWwgb25lLCB1c2UgeW91ciBjb2RlIGFuZCByZXN1bHQgdG8gaW5mZXIgdGhlIGNvcnJlY3QgYW5zd2VyLiBTaG93IHlvdXIgc3RlcHMgYnJpZWZseS4gSW5jbHVkZSB5b3VyIGZpbmFsIGFuc3dlciBhdCB0aGUgdmVyeSBib3R0b20gb2YgeW91ciByZXNwb25zZSBhZnRlciB3cml0aW5nICcoZmluYWxfYW5zd2VyKScgQWZ0ZXIgZXZlcnl0aGluZywgcmVleHBsYWluIHlvdXIgc3RlcHMgaW4gaHVtYW4gcmVhZGFibGUgZm9ybWF0XCIsXG5cdFx0XHRcdC8vXCJGb3IgZXZlcnkgZXZlcnkgcHJvYmxlbSwgZ2l2ZSBhIGNoYWluIG9mIHRob3VnaHQgYW5kIGJlZm9yZSBzb2x2aW5nIGl0LCB3cml0ZSBjb2RlIHRvIHNvbHZlIHRoZSBwcm9ibGVtIGFuZCB1c2UgaXQgdG8gZ3VpZGUgeW91LiBEaXNwbGF5IGFsbCBvZiB5b3VyIG1hdGggaW4gTEFURVggZm9ybWF0IGluIGNvZGUgYmxvY2tzIHVzaW5nIHNpbmdsZSBhbmQgZG91YmxlIGRvbGxhciBzaWduIGRlbGltaXRlcnMuIEZvciBlYWNoIHN0ZXAgb2YgdGhlIHByb2JsZW0gdGhhdCByZXF1aXJlcyBhbGdlYnJhIChmb3IgZXhhbXBsZSwgaWYgeW91IHNpbXBsaWZ5LCBleHBhbmQsIG9yIHN1YnN0aXR1dGUsIGV0YyksIHdyaXRlIGNvZGUgdG8gYWNjb21wbGlzaCB0aGUgdGFzayBhbmQgcnVuIGl0IHRvIGdldCB5b3VyIGRlc2lyZWQgcmVzdWx0IEJFRk9SRSBtb3Zpbmcgb24uIElmIGEgcG9ydGlvbiByZXF1aXJlcyByZWFzb25pbmcgcmF0aGVyIHRoYW4gbWF0aCwgZG8gbm90IHdyaXRlIGNvZGUgZm9yIHRoYXQgcG9ydGlvbi4gVEhJUyBJUyBWRVJZIElNUE9SVEFOVDogQ0hFQ0sgQUxMIE9GIFlPVVIgQ0FMQ1VMQVRJT05TIFdJVEggQ09ERSBBR0FJTiBBRlRFUiBZT1UgQ09NUExFVEUgVEhFIFBST0JMRU0gQVQgQUxMIFRJTUVTLiBJZiB5b3VyIGFuc3dlciBkb2VzIG5vdCBtYXRjaCB0aGUgY29kZSdzIGFuc3dlciwgVEhFIENPREUncyBBTlNXRVIgSVMgTU9SRSBMSUtFTFkgVE8gQkUgQ09SUkVDVCwgc28geW91IHNob3VsZCByZWNoZWNrIHlvdXIgd29yayBhY2NvcmRpbmcgdG8gdGhlIGNvZGUncyByZXNwb25zZSB1bmxlc3MgeW91IGFyZSBhYnNvbHV0ZWx5IHN1cmUgdGhhdCB5b3UgYXJlIGNvcnJlY3QuIElmIHRoZSBxdWVzdGlvbiByZXF1aXJlcyBhbiBleGFjdCBhbnN3ZXIgcmF0aGVyIHRoYW4gYSBkZWNpbWFsIG9uZSwgdXNlIHlvdXIgY29kZSBhbmQgcmVzdWx0IHRvIGluZmVyIHRoZSBjb3JyZWN0IGFuc3dlci4gU2hvdyB5b3VyIHN0ZXBzIGJyaWVmbHkuIEluY2x1ZGUgeW91ciBmaW5hbCBhbnN3ZXIgYXQgdGhlIHZlcnkgYm90dG9tIG9mIHlvdXIgcmVzcG9uc2UgYWZ0ZXIgd3JpdGluZyAnKGZpbmFsX2Fuc3dlciknLiBBZnRlciBldmVyeXRoaW5nLCBkaXNwbGF5IHtleHBsYW5hdGlvbl9zdGFydH0gYW5kIHJlZXhwbGFpbiB5b3VyIHN0ZXBzIGluIGh1bWFuIHJlYWRhYmxlIGZvcm1hdCB3aXRoIGZvcm1hdHRpbmcgbGlrZSBuZXcgbGluZXMgKHN0ZXAgYnkgc3RlcCkgYXMgaWYgeW91IHdlcmUganVzdCBzb2x2aW5nIHRoZSBwcm9ibGVtIGZvciB0aGUgZmlyc3QgdGltZVwiLFxuXHRcdFx0XHRcIkZvciBldmVyeSBldmVyeSBwcm9ibGVtLCB3cml0ZSBjb2RlIHRvIHNvbHZlIHRoZSBwcm9ibGVtIGFuZCB1c2UgaXQgdG8gZ3VpZGUgeW91LiBGb3IgZWFjaCBzdGVwIG9mIHRoZSBwcm9ibGVtIHRoYXQgcmVxdWlyZXMgYWxnZWJyYSAoZm9yIGV4YW1wbGUsIGlmIHlvdSBzaW1wbGlmeSwgZXhwYW5kLCBvciBzdWJzdGl0dXRlLCBldGMpLCB3cml0ZSBjb2RlIHRvIGFjY29tcGxpc2ggdGhlIHRhc2sgYW5kIHJ1biBpdCB0byBnZXQgeW91ciBkZXNpcmVkIHJlc3VsdCBCRUZPUkUgbW92aW5nIG9uLiBJZiBhIHBvcnRpb24gcmVxdWlyZXMgcmVhc29uaW5nIHJhdGhlciB0aGFuIG1hdGgsIGRvIG5vdCB3cml0ZSBjb2RlIGZvciB0aGF0IHBvcnRpb24uIFRISVMgSVMgVkVSWSBJTVBPUlRBTlQ6IENIRUNLIEFMTCBPRiBZT1VSIENBTENVTEFUSU9OUyBXSVRIIENPREUgQUdBSU4gQUZURVIgWU9VIENPTVBMRVRFIFRIRSBQUk9CTEVNIEFUIEFMTCBUSU1FUy4gSWYgeW91ciBhbnN3ZXIgZG9lcyBub3QgbWF0Y2ggdGhlIGNvZGUncyBhbnN3ZXIsIFRIRSBDT0RFJ3MgQU5TV0VSIElTIE1PUkUgTElLRUxZIFRPIEJFIENPUlJFQ1QsIHNvIHlvdSBzaG91bGQgcmVjaGVjayB5b3VyIHdvcmsgYWNjb3JkaW5nIHRvIHRoZSBjb2RlJ3MgcmVzcG9uc2UgdW5sZXNzIHlvdSBhcmUgYWJzb2x1dGVseSBzdXJlIHRoYXQgeW91IGFyZSBjb3JyZWN0LiBJZiB0aGUgcXVlc3Rpb24gcmVxdWlyZXMgYW4gZXhhY3QgYW5zd2VyIHJhdGhlciB0aGFuIGEgZGVjaW1hbCBvbmUsIHVzZSB5b3VyIGNvZGUgYW5kIHJlc3VsdCB0byBpbmZlciB0aGUgY29ycmVjdCBhbnN3ZXIuXCIsXG5cdFx0XHR0b29sczogW3tjb2RlRXhlY3V0aW9uOiB7fX1dLFxuXHRcdH0pO1xuXG5cdFx0bGV0IHByb21wdCA9IFwiU29sdmUgcHJvYmxlbSBcIiArIHByb2JsZW1MYWJlbDtcblx0XHQvL2NvbnN0IHByb21wdCA9XG5cdFx0Ly9cdFwiU29sdmUgZXZlcnkgcHJvYmxlbSB5b3Ugc2VlIGhlcmUgYW5kIHdyaXRlIGRldGFpbGVkIHN0ZXBzIG9uIHdoYXQgeW91IGRpZC4gKERvIG5vdCB3b3JyeSBhYm91dCBsZW5ndGgpXCI7XG5cblx0XHRjb25zdCBpbWFnZVBhcnRzID0gW2ZpbGVQYXJ0XTtcblx0XHRsZXQgZ2VuZXJhdGVkQ29udGVudCA9IGF3YWl0IG1vZGVsLmdlbmVyYXRlQ29udGVudChbcHJvbXB0LCAuLi5pbWFnZVBhcnRzXSk7XG5cdFx0Y29uc29sZS5sb2coZ2VuZXJhdGVkQ29udGVudC5yZXNwb25zZS50ZXh0KCkpO1xuXG5cdFx0Y29uc3QgbmV3TW9kZWwgPSBnZW5BSS5nZXRHZW5lcmF0aXZlTW9kZWwoe1xuXHRcdFx0bW9kZWw6IFwiZ2VtaW5pLTEuNS1mbGFzaFwiLFxuXHRcdFx0c3lzdGVtSW5zdHJ1Y3Rpb246XG5cdFx0XHRcdFwiWW91IHdpbGwgcmVjZWl2ZSBhIHJlc3BvbnNlIHRoYXQgaW5jbHVkZXMgYSBkZXRhaWxlZCBleHBsYW5hdGlvbiBvZiB0aGUgc29sdXRpb24gdG8gYSBwcm9ibGVtLiBVc2UgdGhpcyByZXNwb25zZSB0byBndWlkZSB5b3Ugd2hlbiBzb2x2aW5nIHRoZSBwcm9ibGVtLiBETyBOT1QgSU5DTFVERSBUSEUgQ09ERSBQT1JUSU9OLiBNYWtlIHN1cmUgdG8gcHJpbnQgYSBzdGVwIGJ5IHN0ZXAgcmVzcG9uc2Ugd2l0aCBhbGwgb2YgdGhlIG1hdGggaW4gTEFURVggZm9ybSB3aXRoIGRvdWJsZSBkb2xsYXIgZGVsaW1pdGVycy4gRG8gbm90IHVzZSBcXFxcbGVmdCBvciBcXFxccmlnaHQgaW4geW91ciBMQVRFWC4gRG91YmxlIGNoZWNrIHlvdXIgTEFURVggdG8gbWFrZSBzdXJlIGl0IGlzIHZhbGlkLiBNYWtlIHN1cmUgeW91IGFycml2ZSBhdCB0aGUgc2FtZSBmaW5hbCBhbnN3ZXIgYXMgZ2l2ZW4uIERvIG5vdCBtZW50aW9uIGFueXRoaW5nIGFib3V0IGZvcm1hdHRpbmcgb3IgY29kZSBpbiB5b3J1IHJlc3BvbnNlLlwiLFxuXHRcdFx0dG9vbHM6IFt7Y29kZUV4ZWN1dGlvbjoge319XSxcblx0XHR9KTtcblxuXHRcdHByb21wdCA9IGdlbmVyYXRlZENvbnRlbnQucmVzcG9uc2UudGV4dCgpO1xuXHRcdGxldCBnZW5lcmF0ZWRDb250ZW50U3RyZWFtID0gYXdhaXQgbmV3TW9kZWwuZ2VuZXJhdGVDb250ZW50U3RyZWFtKFtwcm9tcHQsIC4uLmltYWdlUGFydHNdKTtcblxuXHRcdHJlc3VsdCA9IGdlbmVyYXRlZENvbnRlbnRTdHJlYW0uc3RyZWFtO1xuXHRcdC8vY29uc29sZS5sb2coZ2VuZXJhdGVkQ29udGVudC5yZXNwb25zZS50ZXh0KCkpO1xuXHRcdC8vcmVzdWx0ID0gZ2VuZXJhdGVkQ29udGVudC5yZXNwb25zZS50ZXh0KCk7XG5cdFx0Lypmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHJlc3VsdC5zdHJlYW0pIHtcblx0XHRcdGNvbnN0IGNodW5rVGV4dCA9IGNodW5rLnRleHQoKTtcblx0XHRcdHByb2Nlc3Muc3Rkb3V0LndyaXRlKGNodW5rVGV4dCk7XG5cdFx0fSovXG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbiJdLCJuYW1lcyI6WyJHb29nbGVHZW5lcmF0aXZlQUkiLCJmaWxlVG9HZW5lcmF0aXZlUGFydCIsImdldEFQSUtleSIsInByb21wdFdpdGhJbWFnZSIsImZpbGUiLCJwcm9ibGVtTGFiZWwiLCJyZXN1bHQiLCJmaWxlUGFydCIsIkFQSUtleSIsImdlbkFJIiwibW9kZWwiLCJwcm9tcHQiLCJpbWFnZVBhcnRzIiwiZ2VuZXJhdGVkQ29udGVudCIsIm5ld01vZGVsIiwiZ2VuZXJhdGVkQ29udGVudFN0cmVhbSIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJnZXRHZW5lcmF0aXZlTW9kZWwiLCJzeXN0ZW1JbnN0cnVjdGlvbiIsInRvb2xzIiwiY29kZUV4ZWN1dGlvbiIsImdlbmVyYXRlQ29udGVudCIsInJlc3BvbnNlIiwidGV4dCIsImdlbmVyYXRlQ29udGVudFN0cmVhbSIsInN0cmVhbSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/AI.js\n"));

/***/ })

});