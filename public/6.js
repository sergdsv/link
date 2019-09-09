(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostShow.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/docs/posts/PostShow.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      post: {
        organization_in: {},
        organization_out: {}
      }
    };
  },
  success: function success(data) {
    console.log(data);
  },
  mounted: function mounted() {
    var app = this;
    axios.get('/api/docs/posts/' + app.$route.params.id).then(function (resp) {
      app.post = resp.data;
      console.log(resp.data);
    })["catch"](function (resp) {
      console.log(resp);
      alert("Could not load posts");
    });
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostShow.vue?vue&type=style&index=0&scope=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/docs/posts/PostShow.vue?vue&type=style&index=0&scope=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.preview {\n    width: 200px;\n    background-color: white;\n    border: 1px solid #DDD;\n    padding: 5px;\n    margin: 15px;\n}\n.fontsize{\n    font-size: 12px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostShow.vue?vue&type=style&index=0&scope=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/docs/posts/PostShow.vue?vue&type=style&index=0&scope=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostShow.vue?vue&type=style&index=0&scope=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostShow.vue?vue&type=style&index=0&scope=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostShow.vue?vue&type=template&id=98e7ef1c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/docs/posts/PostShow.vue?vue&type=template&id=98e7ef1c& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card animated fadeIn" }, [
    _c("div", { staticClass: "card-body" }, [
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-success",
              attrs: { to: { name: "PostsIndex" } }
            },
            [_vm._v("Все документы")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-header mb-3 font-weight-bold" }, [
        _c("h3", [_vm._v(_vm._s(_vm.post.title))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-2" }, [
          _c("span", [_vm._v("Номер документа:")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.post.number_doc))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("span", [_vm._v("Дата документа:")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.post.date_doc))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("span", [_vm._v("Дата получения:")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.post.date_receiving))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("span", [_vm._v("Дата создания:")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.post.created_at))])
        ])
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-3" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c("span", { staticClass: "bold" }, [_vm._v("От организации:")]),
          _vm._v(" "),
          _c("span", {
            domProps: { textContent: _vm._s(_vm.post.organization_in.title) }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("span", [_vm._v("Для организации:")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.post.organization_out["title"]))])
        ])
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-6" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c("span", { staticClass: "bold" }, [_vm._v("Подпись о получении:")]),
          _vm._v(" "),
          _c("span", [
            _vm._v(_vm._s(_vm.post.signature_on_receipt ? "Да" : "Нет"))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("span", [_vm._v("Требует/нетребует ответа:")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.post.need_an_answer ? "Да" : "Нет"))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("span", [_vm._v("Конечная дата ответа:")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.post.date_an_answer))])
        ])
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-3" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c("span", { staticClass: "bold" }, [_vm._v("Подпись о получении:")]),
          _vm._v(" "),
          _c("span", [
            _vm._v(_vm._s(_vm.post.signature_on_receipt ? "Да" : "Нет"))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("span", [_vm._v("Требует/нетребует ответа:")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.post.need_an_answer ? "Да" : "Нет"))])
        ])
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-3" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("span", [_vm._v("Коментарий:")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.post.comment))])
        ])
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("span", [_vm._v("Изображения:")]),
          _vm._v(" "),
          _c(
            "b-container",
            { staticClass: "p-4", attrs: { fluid: "" } },
            [
              _c(
                "b-row",
                _vm._l(_vm.post.images, function(image, index) {
                  return _c(
                    "b-col",
                    { key: index },
                    [
                      _c("b-img", {
                        staticClass: "preview",
                        attrs: { thumbnail: "", fluid: "", src: image.image }
                      })
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/docs/posts/PostShow.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/docs/posts/PostShow.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostShow_vue_vue_type_template_id_98e7ef1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostShow.vue?vue&type=template&id=98e7ef1c& */ "./resources/js/components/docs/posts/PostShow.vue?vue&type=template&id=98e7ef1c&");
/* harmony import */ var _PostShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostShow.vue?vue&type=script&lang=js& */ "./resources/js/components/docs/posts/PostShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PostShow_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostShow.vue?vue&type=style&index=0&scope=true&lang=css& */ "./resources/js/components/docs/posts/PostShow.vue?vue&type=style&index=0&scope=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PostShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostShow_vue_vue_type_template_id_98e7ef1c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostShow_vue_vue_type_template_id_98e7ef1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/docs/posts/PostShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/docs/posts/PostShow.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/docs/posts/PostShow.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/docs/posts/PostShow.vue?vue&type=style&index=0&scope=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/docs/posts/PostShow.vue?vue&type=style&index=0&scope=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostShow.vue?vue&type=style&index=0&scope=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostShow.vue?vue&type=style&index=0&scope=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/docs/posts/PostShow.vue?vue&type=template&id=98e7ef1c&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/docs/posts/PostShow.vue?vue&type=template&id=98e7ef1c& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_template_id_98e7ef1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostShow.vue?vue&type=template&id=98e7ef1c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostShow.vue?vue&type=template&id=98e7ef1c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_template_id_98e7ef1c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_template_id_98e7ef1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);