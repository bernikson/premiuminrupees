(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/primereact/resources/primereact.min.css
var primereact_min = __webpack_require__(5626);
// EXTERNAL MODULE: ./styles/Theme.css
var Theme = __webpack_require__(1110);
// EXTERNAL MODULE: ./node_modules/primeicons/primeicons.css
var primeicons = __webpack_require__(3248);
;// CONCATENATED MODULE: external "primereact/api"
const api_namespaceObject = require("primereact/api");
var api_default = /*#__PURE__*/__webpack_require__.n(api_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/_app.tsx








function MyApp({ Component , pageProps  }) {
    const Navbar = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(664), __webpack_require__.e(813), __webpack_require__.e(954)]).then(__webpack_require__.bind(__webpack_require__, 6954)), {
        loadableGenerated: {
            modules: [
                "_app.tsx -> " + "../components/navbar/navbar"
            ]
        },
        suspense: true
    });
    const Footer = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(813), __webpack_require__.e(235)]).then(__webpack_require__.bind(__webpack_require__, 9235)), {
        loadableGenerated: {
            modules: [
                "_app.tsx -> " + "../components/footer/Footer"
            ]
        },
        suspense: true
    });
    (api_default()).ripple = true;
    // 2. Use at the root of your app
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Suspense, {
                fallback: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: "Loading..."
                }),
                children: /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Suspense, {
                fallback: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: "Loading..."
                }),
                children: /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3248:
/***/ (() => {



/***/ }),

/***/ 5626:
/***/ (() => {



/***/ }),

/***/ 1110:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ }),

/***/ 3868:
/***/ ((module) => {

"use strict";
module.exports = import("zustand/middleware/immer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,152], () => (__webpack_exec__(8970)));
module.exports = __webpack_exports__;

})();