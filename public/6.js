(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostsIndex.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/docs/posts/PostsIndex.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      posts: ''
    };
  },
  success: function success(data) {
    console.log(data);
  },
  mounted: function mounted() {
    var app = this;
    axios.get('/api/docs/posts').then(function (resp) {
      app.posts = resp.data.posts;
      console.log(resp.data);
    })["catch"](function (resp) {
      console.log(resp);
      alert("Could not load posts");
    });
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostsIndex.vue?vue&type=style&index=0&scope=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/docs/posts/PostsIndex.vue?vue&type=style&index=0&scope=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.preview {\n    width: 200px;\n    background-color: white;\n    border: 1px solid #DDD;\n    padding: 5px;\n    margin: 15px;\n}\n.fontsize{\n        font-size: 12px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostsIndex.vue?vue&type=style&index=0&scope=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/docs/posts/PostsIndex.vue?vue&type=style&index=0&scope=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostsIndex.vue?vue&type=style&index=0&scope=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostsIndex.vue?vue&type=style&index=0&scope=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostsIndex.vue?vue&type=template&id=c320d598&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/docs/posts/PostsIndex.vue?vue&type=template&id=c320d598& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c(
          "div",
          { staticClass: "form-group mb-5" },
          [
            _c(
              "b-button",
              {
                staticClass: "float-right",
                attrs: { variant: "primary", to: { name: "PostCreate" } }
              },
              [
                _c("i", { staticClass: "fa fa-plus-circle fa-lg" }),
                _vm._v(" Создать документ")
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-header mb-3 font-weight-bold" }, [
          _vm._v("\n            Список документов\n        ")
        ]),
        _vm._v(" "),
        _c(
          "b-table-simple",
          { attrs: { striped: "", hover: "" } },
          [
            _c(
              "b-thead",
              [
                _c("b-th", [_vm._v("Id")]),
                _vm._v(" "),
                _c("b-th", [_vm._v("Название")]),
                _vm._v(" "),
                _c("b-th", [_vm._v("От организации")]),
                _vm._v(" "),
                _c("b-th", [_vm._v("На организацию")]),
                _vm._v(" "),
                _c("b-th", [_vm._v("Ответ")]),
                _vm._v(" "),
                _c("b-th", [_vm._v("Дата ответа")]),
                _vm._v(" "),
                _c("b-th", [_vm._v("Действия")])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-tbody",
              { staticClass: "fontsize" },
              _vm._l(_vm.posts, function(post, index) {
                return _c(
                  "b-tr",
                  { key: index },
                  [
                    _c("b-td", [_vm._v(_vm._s(post.id))]),
                    _vm._v(" "),
                    _c("b-td", [_vm._v(_vm._s(post.title))]),
                    _vm._v(" "),
                    _c("b-td", [_vm._v(_vm._s(post.organization_in.title))]),
                    _vm._v(" "),
                    _c("b-td", [_vm._v(_vm._s(post.organization_out.title))]),
                    _vm._v(" "),
                    _c("b-td", [
                      _vm._v(_vm._s(post.need_an_answer ? "Да" : "Нет"))
                    ]),
                    _vm._v(" "),
                    _c("b-td", [_vm._v(_vm._s(post.date_an_answer))]),
                    _vm._v(" "),
                    _c(
                      "b-td",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-outline-info btn-sm",
                            attrs: {
                              to: { name: "PostShow", params: { id: post.id } }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                Подробнее\n                            "
                            )
                          ]
                        )
                      ],
                      1
                    )
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/docs/posts/PostsIndex.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/docs/posts/PostsIndex.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostsIndex_vue_vue_type_template_id_c320d598___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostsIndex.vue?vue&type=template&id=c320d598& */ "./resources/js/components/docs/posts/PostsIndex.vue?vue&type=template&id=c320d598&");
/* harmony import */ var _PostsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostsIndex.vue?vue&type=script&lang=js& */ "./resources/js/components/docs/posts/PostsIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PostsIndex_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostsIndex.vue?vue&type=style&index=0&scope=true&lang=css& */ "./resources/js/components/docs/posts/PostsIndex.vue?vue&type=style&index=0&scope=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PostsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostsIndex_vue_vue_type_template_id_c320d598___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostsIndex_vue_vue_type_template_id_c320d598___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/docs/posts/PostsIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/docs/posts/PostsIndex.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/docs/posts/PostsIndex.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostsIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostsIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/docs/posts/PostsIndex.vue?vue&type=style&index=0&scope=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/docs/posts/PostsIndex.vue?vue&type=style&index=0&scope=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostsIndex_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostsIndex.vue?vue&type=style&index=0&scope=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostsIndex.vue?vue&type=style&index=0&scope=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostsIndex_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostsIndex_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostsIndex_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostsIndex_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostsIndex_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/docs/posts/PostsIndex.vue?vue&type=template&id=c320d598&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/docs/posts/PostsIndex.vue?vue&type=template&id=c320d598& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostsIndex_vue_vue_type_template_id_c320d598___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostsIndex.vue?vue&type=template&id=c320d598& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostsIndex.vue?vue&type=template&id=c320d598&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostsIndex_vue_vue_type_template_id_c320d598___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostsIndex_vue_vue_type_template_id_c320d598___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);