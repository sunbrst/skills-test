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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"(app-client)/./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/app/page.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(app-client)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/app/page.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page.module.css */ \"(app-client)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"(app-client)/./node_modules/@apollo/client/core/ApolloClient.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"(app-client)/./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"(app-client)/./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ \"(app-client)/./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n          query GetLaunches {\\n            launchesPast(limit: 10) {\\n              id\\n              mission_name\\n              launch_date_local\\n              launch_site {\\n                site_name_long\\n              }\\n              links {\\n                article_link\\n                video_link\\n                mission_patch\\n              }\\n              rocket {\\n                rocket_name\\n              }\\n            }\\n          }\\n        \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n      query GetLaunches {\\n        launchesPast(limit: 10) {\\n          id\\n          mission_name\\n          launch_date_local\\n          launch_site {\\n            site_name_long\\n          }\\n          links {\\n            article_link\\n            video_link\\n            mission_patch\\n          }\\n          rocket {\\n            rocket_name\\n          }\\n        }\\n      }\\n    \"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        async function fetchData() {\n            const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloClient({\n                uri: \"https://spacex-production.up.railway.app/graphql\",\n                cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_6__.InMemoryCache()\n            });\n            const { data  } = await client.query({\n                query: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject())\n            });\n            // const res = await fetch(\n            //   \"https://proton.api.atomicassets.io/atomicmarket/v1/sales\"\n            // );\n            // const { data } = await res.json();\n            setData(data);\n        }\n        fetchData();\n    }, []);\n    console.log(data);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n            lineNumber: 52,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Get started by editing\\xa0\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"code\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().code),\n                                children: \"src/app/page.tsx\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            children: [\n                                \"By\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: \"/vercel.svg\",\n                                    alt: \"Vercel Logo\",\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().vercelLogo),\n                                    width: 100,\n                                    height: 24,\n                                    priority: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().center),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().logo),\n                        src: \"/next.svg\",\n                        alt: \"Next.js Logo\",\n                        width: 180,\n                        height: 37,\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().thirteen),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/thirteen.svg\",\n                            alt: \"13\",\n                            width: 40,\n                            height: 31,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().grid),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\",\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().card),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                className: (next_font_google_target_css_path_src_app_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default().className),\n                                children: [\n                                    \"Docs \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: \"->\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 18\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: (next_font_google_target_css_path_src_app_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default().className),\n                                children: \"Find in-depth information about Next.js features and API.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\",\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().card),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                className: (next_font_google_target_css_path_src_app_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default().className),\n                                children: [\n                                    \"Templates \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: \"->\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: (next_font_google_target_css_path_src_app_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default().className),\n                                children: \"Explore the Next.js 13 playground.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\",\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().card),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                className: (next_font_google_target_css_path_src_app_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default().className),\n                                children: [\n                                    \"Deploy \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: \"->\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 20\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: (next_font_google_target_css_path_src_app_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default().className),\n                                children: \"Instantly deploy your Next.js site to a shareable URL with Vercel.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zachmeza/workspaces/skills-test/src/app/page.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"WZ2PO9A64oHRexE1CE+yX3ebuoA=\");\n_c = Home;\nHome.getInitialProps = async (context)=>{\n    const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloClient({\n        uri: \"https://api.spacex.land/graphql/\",\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_6__.InMemoryCache()\n    });\n    const { data  } = await client.query({\n        query: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject1())\n    });\n    const ctx = await next_app__WEBPACK_IMPORTED_MODULE_3___default().getInitialProps(context);\n    return {\n        ...ctx,\n        data: data\n    };\n};\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUU1BO0FBUHlCO0FBRVE7QUFDMkI7QUFDYjtBQUNUO0FBSzdCLFNBQVNTLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUE7SUFDaENELGdEQUFTQSxDQUFDLElBQU07UUFDZCxlQUFlSyxZQUFZO1lBQ3pCLE1BQU1DLFNBQVMsSUFBSVYsd0RBQVlBLENBQUM7Z0JBQzlCVyxLQUFLO2dCQUNMQyxPQUFPLElBQUlYLHlEQUFhQTtZQUMxQjtZQUNBLE1BQU0sRUFBRU0sS0FBSSxFQUFFLEdBQUcsTUFBTUcsT0FBT0csS0FBSyxDQUFDO2dCQUNsQ0EsS0FBSyxFQUFFWCxtREFBR0E7WUFvQlo7WUFDQSwyQkFBMkI7WUFDM0IsK0RBQStEO1lBQy9ELEtBQUs7WUFDTCxxQ0FBcUM7WUFDckNNLFFBQVFEO1FBQ1Y7UUFDQUU7SUFDRixHQUFHLEVBQUU7SUFDTEssUUFBUUMsR0FBRyxDQUFDUjtJQUNaLElBQUksQ0FBQ0EsTUFBTTtRQUNULHFCQUFPLDhEQUFDUztzQkFBSTs7Ozs7O0lBQ2QsQ0FBQztJQUNELHFCQUNFLDhEQUFDQztRQUFLQyxXQUFXbkIsOERBQVc7OzBCQUMxQiw4REFBQ2lCO2dCQUFJRSxXQUFXbkIscUVBQWtCOztrQ0FDaEMsOERBQUNxQjs7NEJBQUU7MENBRUQsOERBQUNDO2dDQUFLSCxXQUFXbkIsOERBQVc7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FFaEMsOERBQUNpQjtrQ0FDQyw0RUFBQ007NEJBQ0NDLE1BQUs7NEJBQ0xDLFFBQU87NEJBQ1BDLEtBQUk7O2dDQUNMO2dDQUNJOzhDQUNILDhEQUFDM0IsbURBQUtBO29DQUNKNEIsS0FBSTtvQ0FDSkMsS0FBSTtvQ0FDSlQsV0FBV25CLG9FQUFpQjtvQ0FDNUI4QixPQUFPO29DQUNQQyxRQUFRO29DQUNSQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNaEIsOERBQUNmO2dCQUFJRSxXQUFXbkIsZ0VBQWE7O2tDQUMzQiw4REFBQ0QsbURBQUtBO3dCQUNKb0IsV0FBV25CLDhEQUFXO3dCQUN0QjJCLEtBQUk7d0JBQ0pDLEtBQUk7d0JBQ0pFLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLFFBQVE7Ozs7OztrQ0FFViw4REFBQ2Y7d0JBQUlFLFdBQVduQixrRUFBZTtrQ0FDN0IsNEVBQUNELG1EQUFLQTs0QkFBQzRCLEtBQUk7NEJBQWdCQyxLQUFJOzRCQUFLRSxPQUFPOzRCQUFJQyxRQUFROzRCQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdkUsOERBQUNmO2dCQUFJRSxXQUFXbkIsOERBQVc7O2tDQUN6Qiw4REFBQ3VCO3dCQUNDQyxNQUFLO3dCQUNMTCxXQUFXbkIsOERBQVc7d0JBQ3RCeUIsUUFBTzt3QkFDUEMsS0FBSTs7MENBRUosOERBQUNZO2dDQUFHbkIsV0FBV3JCLDZKQUFlOztvQ0FBRTtrREFDekIsOERBQUN5QztrREFBSzs7Ozs7Ozs7Ozs7OzBDQUViLDhEQUFDbEI7Z0NBQUVGLFdBQVdyQiw2SkFBZTswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUtqQyw4REFBQ3lCO3dCQUNDQyxNQUFLO3dCQUNMTCxXQUFXbkIsOERBQVc7d0JBQ3RCeUIsUUFBTzt3QkFDUEMsS0FBSTs7MENBRUosOERBQUNZO2dDQUFHbkIsV0FBV3JCLDZKQUFlOztvQ0FBRTtrREFDcEIsOERBQUN5QztrREFBSzs7Ozs7Ozs7Ozs7OzBDQUVsQiw4REFBQ2xCO2dDQUFFRixXQUFXckIsNkpBQWU7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FHakMsOERBQUN5Qjt3QkFDQ0MsTUFBSzt3QkFDTEwsV0FBV25CLDhEQUFXO3dCQUN0QnlCLFFBQU87d0JBQ1BDLEtBQUk7OzBDQUVKLDhEQUFDWTtnQ0FBR25CLFdBQVdyQiw2SkFBZTs7b0NBQUU7a0RBQ3ZCLDhEQUFDeUM7a0RBQUs7Ozs7Ozs7Ozs7OzswQ0FFZiw4REFBQ2xCO2dDQUFFRixXQUFXckIsNkpBQWU7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96QyxDQUFDO0dBN0h1QlM7S0FBQUE7QUErSHhCQSxLQUFLaUMsZUFBZSxHQUFHLE9BQU9DLFVBQXdCO0lBQ3BELE1BQU05QixTQUFTLElBQUlWLHdEQUFZQSxDQUFDO1FBQzlCVyxLQUFLO1FBQ0xDLE9BQU8sSUFBSVgseURBQWFBO0lBQzFCO0lBQ0EsTUFBTSxFQUFFTSxLQUFJLEVBQUUsR0FBRyxNQUFNRyxPQUFPRyxLQUFLLENBQUM7UUFDbENBLEtBQUssRUFBRVgsbURBQUdBO0lBb0JaO0lBQ0EsTUFBTXVDLE1BQU0sTUFBTXRDLCtEQUFtQixDQUFDcUM7SUFDdEMsT0FBTztRQUFFLEdBQUdDLEdBQUc7UUFBRWxDLE1BQU1BO0lBQUs7QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiOyAvLyB0aGlzIGlzIGEgY2xpZW50IGNvbXBvbmVudCDwn5GI8J+PvVxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBBcHAsIHsgQXBwQ29udGV4dCwgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgIHVyaTogJ2h0dHBzOi8vc3BhY2V4LXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAvZ3JhcGhxbCcsXG4gICAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IGdxbGBcbiAgICAgICAgICBxdWVyeSBHZXRMYXVuY2hlcyB7XG4gICAgICAgICAgICBsYXVuY2hlc1Bhc3QobGltaXQ6IDEwKSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIG1pc3Npb25fbmFtZVxuICAgICAgICAgICAgICBsYXVuY2hfZGF0ZV9sb2NhbFxuICAgICAgICAgICAgICBsYXVuY2hfc2l0ZSB7XG4gICAgICAgICAgICAgICAgc2l0ZV9uYW1lX2xvbmdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsaW5rcyB7XG4gICAgICAgICAgICAgICAgYXJ0aWNsZV9saW5rXG4gICAgICAgICAgICAgICAgdmlkZW9fbGlua1xuICAgICAgICAgICAgICAgIG1pc3Npb25fcGF0Y2hcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByb2NrZXQge1xuICAgICAgICAgICAgICAgIHJvY2tldF9uYW1lXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGBcbiAgICAgIH0pO1xuICAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAvLyAgIFwiaHR0cHM6Ly9wcm90b24uYXBpLmF0b21pY2Fzc2V0cy5pby9hdG9taWNtYXJrZXQvdjEvc2FsZXNcIlxuICAgICAgLy8gKTtcbiAgICAgIC8vIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHNldERhdGEoZGF0YSk7XG4gICAgfVxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgR2V0IHN0YXJ0ZWQgYnkgZWRpdGluZyZuYnNwO1xuICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17c3R5bGVzLmNvZGV9PnNyYy9hcHAvcGFnZS50c3g8L2NvZGU+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWFwcGRpci10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBCeXtcIiBcIn1cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvdmVyY2VsLnN2Z1wiXG4gICAgICAgICAgICAgIGFsdD1cIlZlcmNlbCBMb2dvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudmVyY2VsTG9nb31cbiAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cbiAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299XG4gICAgICAgICAgc3JjPVwiL25leHQuc3ZnXCJcbiAgICAgICAgICBhbHQ9XCJOZXh0LmpzIExvZ29cIlxuICAgICAgICAgIHdpZHRoPXsxODB9XG4gICAgICAgICAgaGVpZ2h0PXszN31cbiAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRoaXJ0ZWVufT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3RoaXJ0ZWVuLnN2Z1wiIGFsdD1cIjEzXCIgd2lkdGg9ezQwfSBoZWlnaHQ9ezMxfSBwcmlvcml0eSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2JldGEubmV4dGpzLm9yZy9kb2NzP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09YXBwZGlyLXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2ludGVyLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICBEb2NzIDxzcGFuPi0mZ3Q7PC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtpbnRlci5jbGFzc05hbWV9PlxuICAgICAgICAgICAgRmluZCBpbi1kZXB0aCBpbmZvcm1hdGlvbiBhYm91dCBOZXh0LmpzIGZlYXR1cmVzIGFuZCBBUEkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL3RlbXBsYXRlcz9mcmFtZXdvcms9bmV4dC5qcyZ1dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWFwcGRpci10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtpbnRlci5jbGFzc05hbWV9PlxuICAgICAgICAgICAgVGVtcGxhdGVzIDxzcGFuPi0mZ3Q7PC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtpbnRlci5jbGFzc05hbWV9PkV4cGxvcmUgdGhlIE5leHQuanMgMTMgcGxheWdyb3VuZC48L3A+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20vbmV3P3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09YXBwZGlyLXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2ludGVyLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICBEZXBsb3kgPHNwYW4+LSZndDs8L3NwYW4+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2ludGVyLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgc2hhcmVhYmxlIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dDogQXBwQ29udGV4dCkgPT4ge1xuICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICB1cmk6IFwiaHR0cHM6Ly9hcGkuc3BhY2V4LmxhbmQvZ3JhcGhxbC9cIixcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgfSk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkgR2V0TGF1bmNoZXMge1xuICAgICAgICBsYXVuY2hlc1Bhc3QobGltaXQ6IDEwKSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBtaXNzaW9uX25hbWVcbiAgICAgICAgICBsYXVuY2hfZGF0ZV9sb2NhbFxuICAgICAgICAgIGxhdW5jaF9zaXRlIHtcbiAgICAgICAgICAgIHNpdGVfbmFtZV9sb25nXG4gICAgICAgICAgfVxuICAgICAgICAgIGxpbmtzIHtcbiAgICAgICAgICAgIGFydGljbGVfbGlua1xuICAgICAgICAgICAgdmlkZW9fbGlua1xuICAgICAgICAgICAgbWlzc2lvbl9wYXRjaFxuICAgICAgICAgIH1cbiAgICAgICAgICByb2NrZXQge1xuICAgICAgICAgICAgcm9ja2V0X25hbWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICB9KTtcbiAgY29uc3QgY3R4ID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjb250ZXh0KTtcbiAgcmV0dXJuIHsgLi4uY3R4LCBkYXRhOiBkYXRhIH07XG59O1xuIl0sIm5hbWVzIjpbImludGVyIiwiSW1hZ2UiLCJzdHlsZXMiLCJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiZ3FsIiwiQXBwIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJmZXRjaERhdGEiLCJjbGllbnQiLCJ1cmkiLCJjYWNoZSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImRpdiIsIm1haW4iLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsInAiLCJjb2RlIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJzcmMiLCJhbHQiLCJ2ZXJjZWxMb2dvIiwid2lkdGgiLCJoZWlnaHQiLCJwcmlvcml0eSIsImNlbnRlciIsImxvZ28iLCJ0aGlydGVlbiIsImdyaWQiLCJjYXJkIiwiaDIiLCJzcGFuIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImN0eCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.tsx\n"));

/***/ })

});