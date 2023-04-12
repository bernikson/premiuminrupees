exports.id = 296;
exports.ids = [296];
exports.modules = {

/***/ 6712:
/***/ ((module) => {

// Exports
module.exports = {
	"product_up": "productDetails_product_up__zXcci",
	"product_image": "productDetails_product_image__6wOhi",
	"product_details": "productDetails_product_details__QT184",
	"product_details_stats_wrapper": "productDetails_product_details_stats_wrapper___MR3x",
	"product_details_rating": "productDetails_product_details_rating__zdsD6",
	"product_details_comment": "productDetails_product_details_comment__5tfGd",
	"product_add_to_cart": "productDetails_product_add_to_cart__hmKAW",
	"product_add_to_wish": "productDetails_product_add_to_wish__G_gU8"
};


/***/ }),

/***/ 5296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ productDetails)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/productDetails/productDetails.module.css
var productDetails_module = __webpack_require__(6712);
var productDetails_module_default = /*#__PURE__*/__webpack_require__.n(productDetails_module);
;// CONCATENATED MODULE: ./svgs/Tick.jsx


const Tick = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "35",
        height: "26",
        viewBox: "0 0 35 26",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M11.8876 25.4894L0.512542 14.1579C-0.170847 13.4771 -0.170847 12.3733 0.512542 11.6925L2.98736 9.22709C3.67075 8.54624 4.77885 8.54624 5.46224 9.22709L13.125 16.8604L29.5378 0.51058C30.2211 -0.170193 31.3293 -0.170193 32.0126 0.51058L34.4875 2.97599C35.1708 3.65676 35.1708 4.76056 34.4875 5.4414L14.3624 25.4894C13.679 26.1702 12.5709 26.1702 11.8876 25.4894Z"
        })
    });
};
/* harmony default export */ const svgs_Tick = (Tick);

// EXTERNAL MODULE: ./svgs/StarEmpty.jsx
var StarEmpty = __webpack_require__(7836);
// EXTERNAL MODULE: ./svgs/StarFull.jsx
var StarFull = __webpack_require__(836);
// EXTERNAL MODULE: ./svgs/Comment.jsx
var Comment = __webpack_require__(176);
;// CONCATENATED MODULE: ./svgs/CartTwo.jsx


const CartTwo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "20",
        height: "16",
        viewBox: "0 0 20 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M18.3333 5.90834H14.3416L10.6916 0.441675C10.5333 0.208342 10.2666 0.0916748 9.99998 0.0916748C9.73331 0.0916748 9.46665 0.208342 9.30831 0.450008L5.65831 5.90834H1.66665C1.20831 5.90834 0.833313 6.28334 0.833313 6.74167C0.833313 6.81667 0.841646 6.89167 0.866646 6.96667L2.98331 14.6917C3.17498 15.3917 3.81665 15.9083 4.58331 15.9083H15.4166C16.1833 15.9083 16.825 15.3917 17.025 14.6917L19.1416 6.96667L19.1666 6.74167C19.1666 6.28334 18.7916 5.90834 18.3333 5.90834ZM9.99998 2.40834L12.3333 5.90834H7.66665L9.99998 2.40834ZM15.4166 14.2417L4.59165 14.25L2.75831 7.57501H17.25L15.4166 14.2417ZM9.99998 9.24167C9.08331 9.24167 8.33331 9.99167 8.33331 10.9083C8.33331 11.825 9.08331 12.575 9.99998 12.575C10.9166 12.575 11.6666 11.825 11.6666 10.9083C11.6666 9.99167 10.9166 9.24167 9.99998 9.24167Z",
            fill: "var(--grey)"
        })
    });
};
/* harmony default export */ const svgs_CartTwo = (CartTwo);

// EXTERNAL MODULE: ./svgs/HeartTwo.jsx
var HeartTwo = __webpack_require__(8849);
// EXTERNAL MODULE: external "primereact/button"
var button_ = __webpack_require__(1088);
;// CONCATENATED MODULE: ./components/productDetails/productDetails.tsx










const ProductDetails = ()=>{
    const [review, setReview] = (0,external_react_.useState)({
        rating: 0
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: (productDetails_module_default()).product_up,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (productDetails_module_default()).product_image
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (productDetails_module_default()).product_details,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(svgs_Tick, {}),
                            "In Stock"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (productDetails_module_default()).product_details_stats_wrapper,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (productDetails_module_default()).product_details_rating,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(StarFull/* default */.Z, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: review.rating < 2 ? /*#__PURE__*/ jsx_runtime_.jsx(StarEmpty/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx(StarFull/* default */.Z, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: review.rating < 3 ? /*#__PURE__*/ jsx_runtime_.jsx(StarEmpty/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx(StarFull/* default */.Z, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: review.rating < 4 ? /*#__PURE__*/ jsx_runtime_.jsx(StarEmpty/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx(StarFull/* default */.Z, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: review.rating < 5 ? /*#__PURE__*/ jsx_runtime_.jsx(StarEmpty/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx(StarFull/* default */.Z, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "9.5"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (productDetails_module_default()).product_details_comment,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Comment/* default */.Z, {}),
                                    "32 reviews"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (productDetails_module_default()).product_details_comment,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(svgs_CartTwo, {}),
                                    "154 sold"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(button_.Button, {
                        className: (productDetails_module_default()).product_add_to_cart,
                        children: "Add to cart"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (productDetails_module_default()).product_add_to_wish,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(HeartTwo/* default */.Z, {}),
                            " Add to wishlist"
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const productDetails = (/*#__PURE__*/external_react_default().memo(ProductDetails));


/***/ }),

/***/ 176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Comment = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M18 0H2C0.9 0 0.01 0.9 0.01 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM5 7H15C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9H5C4.45 9 4 8.55 4 8C4 7.45 4.45 7 5 7ZM11 12H5C4.45 12 4 11.55 4 11C4 10.45 4.45 10 5 10H11C11.55 10 12 10.45 12 11C12 11.55 11.55 12 11 12ZM15 6H5C4.45 6 4 5.55 4 5C4 4.45 4.45 4 5 4H15C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6Z",
            fill: "var(--grey)"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);


/***/ }),

/***/ 8849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const HeartTwo = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M14.5 0.824951C12.76 0.824951 11.09 1.63495 10 2.91495C8.91 1.63495 7.24 0.824951 5.5 0.824951C2.42 0.824951 0 3.24495 0 6.32495C0 10.105 3.4 13.185 8.55 17.865L10 19.175L11.45 17.855C16.6 13.185 20 10.105 20 6.32495C20 3.24495 17.58 0.824951 14.5 0.824951ZM10.1 16.375L10 16.475L9.9 16.375C5.14 12.065 2 9.21495 2 6.32495C2 4.32495 3.5 2.82495 5.5 2.82495C7.04 2.82495 8.54 3.81495 9.07 5.18495H10.94C11.46 3.81495 12.96 2.82495 14.5 2.82495C16.5 2.82495 18 4.32495 18 6.32495C18 9.21495 14.86 12.065 10.1 16.375Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeartTwo);


/***/ })

};
;