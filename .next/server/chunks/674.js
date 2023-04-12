exports.id = 674;
exports.ids = [674];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

// Exports
module.exports = {
	"product_review": "productReviews_product_review__5T9zA",
	"product_review_nav": "productReviews_product_review_nav__b3_s6",
	"product_review_main": "productReviews_product_review_main__dcUPz",
	"product_review_write": "productReviews_product_review_write__mFjom",
	"product_review_nav_active": "productReviews_product_review_nav_active__tZSuT",
	"product_reviews": "productReviews_product_reviews___J35w",
	"product_reviews_content": "productReviews_product_reviews_content__evy_E",
	"product_reviews_user": "productReviews_product_reviews_user__YYSI_",
	"product_reviews_user_wrapper": "productReviews_product_reviews_user_wrapper__btZFm",
	"product_reviews_user_avatar": "productReviews_product_reviews_user_avatar__ikYR5",
	"product_reviews_user_name": "productReviews_product_reviews_user_name__TPbmr",
	"product_reviews_user_rating": "productReviews_product_reviews_user_rating__D0ZI6",
	"product_details_rating": "productReviews_product_details_rating__ar0aC"
};


/***/ }),

/***/ 1674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _productReviews_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8038);
/* harmony import */ var _productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _svgs_StarEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7836);
/* harmony import */ var _svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(836);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_4__);






const ProductReviews = ()=>{
    const [review, setReview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        rating: 0
    });
    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("description");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_review),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_review_nav),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>setNav("description"),
                        className: nav === "description" ? (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_review_nav_active) : undefined,
                        children: "Description"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>setNav("review"),
                        className: nav === "review" ? (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_review_nav_active) : undefined,
                        children: "Reviews"
                    })
                ]
            }),
            nav !== "description" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_review_main),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_review_write),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                placeholder: "Write a review..."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                children: "Submit"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_content),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user_wrapper),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user_avatar)
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user_name),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                children: "Jhon Smith"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "25, Nov 2025"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user_rating),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Rating: 5.0"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_details_rating),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: review.rating < 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarEmpty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: review.rating < 3 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarEmpty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: review.rating < 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarEmpty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: review.rating < 5 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarEmpty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean tristique nisl nec fermentum eleifend. Fusce tincidunt, tortor a elementum vehicula, magna ligula iaculis lacus, vel feugiat velit felis a metus."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_content),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user_wrapper),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user_avatar)
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user_name),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                children: "Jhon Smith"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "25, Nov 2025"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user_rating),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Rating: 5.0"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_details_rating),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: review.rating < 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarEmpty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: review.rating < 3 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarEmpty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: review.rating < 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarEmpty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: review.rating < 5 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarEmpty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean tristique nisl nec fermentum eleifend. Fusce tincidunt, tortor a elementum vehicula, magna ligula iaculis lacus, vel feugiat velit felis a metus."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_content),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user_wrapper),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user_avatar)
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user_name),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                children: "Jhon Smith"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "25, Nov 2025"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user_rating),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Rating: 5.0"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_details_rating),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: review.rating < 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarEmpty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: review.rating < 3 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarEmpty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: review.rating < 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarEmpty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: review.rating < 5 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarEmpty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean tristique nisl nec fermentum eleifend. Fusce tincidunt, tortor a elementum vehicula, magna ligula iaculis lacus, vel feugiat velit felis a metus."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_content),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user_wrapper),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user_avatar)
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user_name),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                children: "Jhon Smith"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "25, Nov 2025"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_reviews_user_rating),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Rating: 5.0"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_productReviews_module_css__WEBPACK_IMPORTED_MODULE_5___default().product_details_rating),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: review.rating < 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarEmpty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: review.rating < 3 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarEmpty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: review.rating < 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarEmpty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: review.rating < 5 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarEmpty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_StarFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean tristique nisl nec fermentum eleifend. Fusce tincidunt, tortor a elementum vehicula, magna ligula iaculis lacus, vel feugiat velit felis a metus."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    " ",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean tristique nisl nec fermentum eleifend. Fusce tincidunt, tortor a elementum vehicula, magna ligula iaculis lacus, vel feugiat velit felis a metus."
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(ProductReviews));


/***/ })

};
;