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

/***/ "(app-client)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"(app-client)/./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/app/page.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(app-client)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/app/page.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page.module.css */ \"(app-client)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"(app-client)/./node_modules/@apollo/client/core/ApolloClient.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"(app-client)/./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"(app-client)/./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ \"(app-client)/./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n          query GetLaunches {\\n            launchesPast(limit: 10) {\\n              id\\n              mission_name\\n              launch_date_local\\n              launch_site {\\n                site_name_long\\n              }\\n              links {\\n                article_link\\n                video_link\\n                mission_patch\\n              }\\n              rocket {\\n                rocket_name\\n              }\\n            }\\n          }\\n        \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n      query GetLaunches {\\n        launchesPast(limit: 10) {\\n          id\\n          mission_name\\n          launch_date_local\\n          launch_site {\\n            site_name_long\\n          }\\n          links {\\n            article_link\\n            video_link\\n            mission_patch\\n          }\\n          rocket {\\n            rocket_name\\n          }\\n        }\\n      }\\n    \"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        async function fetchData() {\n            const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloClient({\n                uri: \"https://api.spacex.land/graphql/\",\n                cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_6__.InMemoryCache()\n            });\n            const { data  } = await client.query({\n                query: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject())\n            });\n            // const res = await fetch(\n            //   \"https://proton.api.atomicassets.io/atomicmarket/v1/sales\"\n            // );\n            // const { data } = await res.json();\n            setData(data);\n        }\n        fetchData();\n    }, []);\n    console.log(data);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n            lineNumber: 52,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Get started by editing\\xa0\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"code\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().code),\n                                children: \"src/app/page.tsx\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            children: [\n                                \"By\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: \"/vercel.svg\",\n                                    alt: \"Vercel Logo\",\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().vercelLogo),\n                                    width: 100,\n                                    height: 24,\n                                    priority: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().center),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().logo),\n                        src: \"/next.svg\",\n                        alt: \"Next.js Logo\",\n                        width: 180,\n                        height: 37,\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().thirteen),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/thirteen.svg\",\n                            alt: \"13\",\n                            width: 40,\n                            height: 31,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().grid),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\",\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().card),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                className: (next_font_google_target_css_path_src_app_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default().className),\n                                children: [\n                                    \"Docs \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: \"->\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 18\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: (next_font_google_target_css_path_src_app_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default().className),\n                                children: \"Find in-depth information about Next.js features and API.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\",\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().card),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                className: (next_font_google_target_css_path_src_app_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default().className),\n                                children: [\n                                    \"Templates \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: \"->\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: (next_font_google_target_css_path_src_app_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default().className),\n                                children: \"Explore the Next.js 13 playground.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\",\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().card),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                className: (next_font_google_target_css_path_src_app_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default().className),\n                                children: [\n                                    \"Deploy \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: \"->\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 20\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: (next_font_google_target_css_path_src_app_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default().className),\n                                children: \"Instantly deploy your Next.js site to a shareable URL with Vercel.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"WZ2PO9A64oHRexE1CE+yX3ebuoA=\");\n_c = Home;\nHome.getInitialProps = async (context)=>{\n    const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloClient({\n        uri: \"https://api.spacex.land/graphql/\",\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_6__.InMemoryCache()\n    });\n    const { data  } = await client.query({\n        query: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject1())\n    });\n    const ctx = await next_app__WEBPACK_IMPORTED_MODULE_3___default().getInitialProps(context);\n    return {\n        ...ctx,\n        data: data\n    };\n};\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixXQUFXckIsNkpBQWU7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96QyxDQUFDO0dBN0h1QlM7S0FBQUE7QUErSHhCQSxLQUFLaUMsZUFBZSxHQUFHLE9BQU9DLFVBQXdCO0lBQ3BELE1BQU05QixTQUFTLElBQUlWLHdEQUFZQSxDQUFDO1FBQzlCVyxLQUFLO1FBQ0xDLE9BQU8sSUFBSVgseURBQWFBO0lBQzFCO0lBQ0EsTUFBTSxFQUFFTSxLQUFJLEVBQUUsR0FBRyxNQUFNRyxPQUFPRyxLQUFLLENBQUM7UUFDbENBLEtBQUssRUFBRVgsbURBQUdBO0lBb0JaO0lBQ0EsTUFBTXVDLE1BQU0sTUFBTXRDLCtEQUFtQixDQUFDcUM7SUFDdEMsT0FBTztRQUFFLEdBQUdDLEdBQUc7UUFBRWxDLE1BQU1BO0lBQUs7QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiOyAvLyB0aGlzIGlzIGEgY2xpZW50IGNvbXBvbmVudCDwn5GI8J+PvVxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBBcHAsIHsgQXBwQ29udGV4dCwgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgIHVyaTogJ2h0dHBzOi8vYXBpLnNwYWNleC5sYW5kL2dyYXBocWwvJyxcbiAgICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcbiAgICAgIH0pO1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICBxdWVyeTogZ3FsYFxuICAgICAgICAgIHF1ZXJ5IEdldExhdW5jaGVzIHtcbiAgICAgICAgICAgIGxhdW5jaGVzUGFzdChsaW1pdDogMTApIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbWlzc2lvbl9uYW1lXG4gICAgICAgICAgICAgIGxhdW5jaF9kYXRlX2xvY2FsXG4gICAgICAgICAgICAgIGxhdW5jaF9zaXRlIHtcbiAgICAgICAgICAgICAgICBzaXRlX25hbWVfbG9uZ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxpbmtzIHtcbiAgICAgICAgICAgICAgICBhcnRpY2xlX2xpbmtcbiAgICAgICAgICAgICAgICB2aWRlb19saW5rXG4gICAgICAgICAgICAgICAgbWlzc2lvbl9wYXRjaFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJvY2tldCB7XG4gICAgICAgICAgICAgICAgcm9ja2V0X25hbWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYFxuICAgICAgfSk7XG4gICAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIC8vICAgXCJodHRwczovL3Byb3Rvbi5hcGkuYXRvbWljYXNzZXRzLmlvL2F0b21pY21hcmtldC92MS9zYWxlc1wiXG4gICAgICAvLyApO1xuICAgICAgLy8gY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgc2V0RGF0YShkYXRhKTtcbiAgICB9XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICA8cD5cbiAgICAgICAgICBHZXQgc3RhcnRlZCBieSBlZGl0aW5nJm5ic3A7XG4gICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPXtzdHlsZXMuY29kZX0+c3JjL2FwcC9wYWdlLnRzeDwvY29kZT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09YXBwZGlyLXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJ5e1wiIFwifVxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz1cIi92ZXJjZWwuc3ZnXCJcbiAgICAgICAgICAgICAgYWx0PVwiVmVyY2VsIExvZ29cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy52ZXJjZWxMb2dvfVxuICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezI0fVxuICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9nb31cbiAgICAgICAgICBzcmM9XCIvbmV4dC5zdmdcIlxuICAgICAgICAgIGFsdD1cIk5leHQuanMgTG9nb1wiXG4gICAgICAgICAgd2lkdGg9ezE4MH1cbiAgICAgICAgICBoZWlnaHQ9ezM3fVxuICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGhpcnRlZW59PlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdGhpcnRlZW4uc3ZnXCIgYWx0PVwiMTNcIiB3aWR0aD17NDB9IGhlaWdodD17MzF9IHByaW9yaXR5IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vYmV0YS5uZXh0anMub3JnL2RvY3M/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1hcHBkaXItdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17aW50ZXIuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIERvY3MgPHNwYW4+LSZndDs8L3NwYW4+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2ludGVyLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICBGaW5kIGluLWRlcHRoIGluZm9ybWF0aW9uIGFib3V0IE5leHQuanMgZmVhdHVyZXMgYW5kIEFQSS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20vdGVtcGxhdGVzP2ZyYW1ld29yaz1uZXh0LmpzJnV0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09YXBwZGlyLXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2ludGVyLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICBUZW1wbGF0ZXMgPHNwYW4+LSZndDs8L3NwYW4+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2ludGVyLmNsYXNzTmFtZX0+RXhwbG9yZSB0aGUgTmV4dC5qcyAxMyBwbGF5Z3JvdW5kLjwvcD5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbS9uZXc/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1hcHBkaXItdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17aW50ZXIuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIERlcGxveSA8c3Bhbj4tJmd0Ozwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17aW50ZXIuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIEluc3RhbnRseSBkZXBsb3kgeW91ciBOZXh0LmpzIHNpdGUgdG8gYSBzaGFyZWFibGUgVVJMIHdpdGggVmVyY2VsLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0OiBBcHBDb250ZXh0KSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHVyaTogXCJodHRwczovL2FwaS5zcGFjZXgubGFuZC9ncmFwaHFsL1wiLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICB9KTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSBHZXRMYXVuY2hlcyB7XG4gICAgICAgIGxhdW5jaGVzUGFzdChsaW1pdDogMTApIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG1pc3Npb25fbmFtZVxuICAgICAgICAgIGxhdW5jaF9kYXRlX2xvY2FsXG4gICAgICAgICAgbGF1bmNoX3NpdGUge1xuICAgICAgICAgICAgc2l0ZV9uYW1lX2xvbmdcbiAgICAgICAgICB9XG4gICAgICAgICAgbGlua3Mge1xuICAgICAgICAgICAgYXJ0aWNsZV9saW5rXG4gICAgICAgICAgICB2aWRlb19saW5rXG4gICAgICAgICAgICBtaXNzaW9uX3BhdGNoXG4gICAgICAgICAgfVxuICAgICAgICAgIHJvY2tldCB7XG4gICAgICAgICAgICByb2NrZXRfbmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gIH0pO1xuICBjb25zdCBjdHggPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQpO1xuICByZXR1cm4geyAuLi5jdHgsIGRhdGE6IGRhdGEgfTtcbn07XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJJbWFnZSIsInN0eWxlcyIsIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJncWwiLCJBcHAiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoRGF0YSIsImNsaWVudCIsInVyaSIsImNhY2hlIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibWFpbiIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwicCIsImNvZGUiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInNyYyIsImFsdCIsInZlcmNlbExvZ28iLCJ3aWR0aCIsImhlaWdodCIsInByaW9yaXR5IiwiY2VudGVyIiwibG9nbyIsInRoaXJ0ZWVuIiwiZ3JpZCIsImNhcmQiLCJoMiIsInNwYW4iLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiY3R4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.tsx\n"));

/***/ })

});