(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostCreate.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/docs/posts/PostCreate.vue?vue&type=script&lang=js& ***!
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
      organs: [],
      post: {
        title: '',
        number_doc: '',
        date_doc: '',
        org_id_in: '',
        org_id_out: '',
        date_receiving: '',
        type_of_receipt: '',
        need_an_answer: '',
        date_an_answer: '',
        signature_on_receipt: '',
        comment: '',
        in_or_out: '',
        user_id: '1'
      },
      images: [],
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    };
  },
  success: function success(data) {
    console.log(data);
  },
  mounted: function mounted() {
    var app = this;
    axios.get('/api/docs/organs/create').then(function (resp) {
      app.organs = resp.data.organs;
      console.log(resp.data);
    })["catch"](function (resp) {
      console.log(resp);
      alert("Could not load posts");
    });
  },
  methods: {
    saveForm: function saveForm() {
      var app = this;
      event.preventDefault();
      var config = {
        headers: {
          'Content-type': 'multipart/form-data'
        },
        onUploadProgress: function onUploadProgress(progressEvent) {
          return console.log(Math.round(progressEvent.loaded * 100 / progressEvent.total));
        }
      };
      var formData = new FormData();
      formData.append('post', JSON.stringify(app.post));
      formData.append('images', JSON.stringify(app.images)); // console.log(formData);

      axios.post('/api/docs/posts', formData, config).then(function (response) {
        app.$router.push({
          path: '/'
        });
      })["catch"](function (error) {
        console.log(error.message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostCreate.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/docs/posts/PostCreate.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.preview {\n    width: 200px;\n    background-color: white;\n    border: 1px solid #DDD;\n    padding: 5px;\n    margin: 15px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostCreate.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/docs/posts/PostCreate.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostCreate.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostCreate.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostCreate.vue?vue&type=template&id=628fd3b1&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/docs/posts/PostCreate.vue?vue&type=template&id=628fd3b1& ***!
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "card animated fadeIn" }, [
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
              [_vm._v("Назад")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-header mb-3 font-weight-bold" }, [
          _vm._v("\n                Добавить документ\n            ")
        ]),
        _vm._v(" "),
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                return _vm.saveForm()
              }
            }
          },
          [
            _c("input", {
              attrs: { type: "hidden", name: "_token" },
              domProps: { value: _vm.csrf }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Название документа")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.post.title,
                        expression: "post.title"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "", required: "" },
                    domProps: { value: _vm.post.title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.post, "title", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\n                                Valid first name is required.\n                        "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Номер документа")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.post.number_doc,
                        expression: "post.number_doc"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "", required: "" },
                    domProps: { value: _vm.post.number_doc },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.post, "number_doc", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\n                                Valid first name is required.\n                            "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Дата документа")]),
                    _vm._v(" "),
                    _c("date-picker", {
                      attrs: {
                        lang: "ru",
                        valueType: "format",
                        "input-attr": { required: true }
                      },
                      model: {
                        value: _vm.post.date_doc,
                        callback: function($$v) {
                          _vm.$set(_vm.post, "date_doc", $$v)
                        },
                        expression: "post.date_doc"
                      }
                    })
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Входящий/Исходящий")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.post.in_or_out,
                          expression: "post.in_or_out"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { required: "" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.post,
                            "in_or_out",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "1" } }, [
                        _vm._v("Входящий")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "2" } }, [
                        _vm._v("Исходящий")
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-3" },
                [
                  _c("label", [_vm._v("Дата получения")]),
                  _vm._v(" "),
                  _c("date-picker", {
                    attrs: {
                      lang: "ru",
                      valueType: "format",
                      "input-attr": { required: true }
                    },
                    model: {
                      value: _vm.post.date_receiving,
                      callback: function($$v) {
                        _vm.$set(_vm.post, "date_receiving", $$v)
                      },
                      expression: "post.date_receiving"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(1)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "exampleFormControlSelect2" } }, [
                    _vm._v("От организации")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.post.org_id_in,
                          expression: "post.org_id_in"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "exampleFormControlSelect2" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.post,
                            "org_id_in",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    _vm._l(_vm.organs, function(organ, index) {
                      return _c(
                        "option",
                        { key: index, domProps: { value: organ.id } },
                        [_vm._v(_vm._s(organ.title))]
                      )
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "exampleFormControlSelect2" } }, [
                    _vm._v("К организации")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.post.org_id_out,
                          expression: "post.org_id_out"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "exampleFormControlSelect2" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.post,
                            "org_id_out",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    _vm._l(_vm.organs, function(organ, index) {
                      return _c(
                        "option",
                        { key: index, domProps: { value: organ.id } },
                        [_vm._v(_vm._s(organ.title))]
                      )
                    }),
                    0
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-3" }, [
                _c("span", [_vm._v("Требует/нетребует ответа")]),
                _vm._v(" "),
                _c("div", { staticClass: "form-check" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.post.need_an_answer,
                        expression: "post.need_an_answer"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: {
                      type: "radio",
                      name: "need_an_answer",
                      id: "need_an_answer1",
                      checked: ""
                    },
                    domProps: {
                      value: 1,
                      checked: _vm._q(_vm.post.need_an_answer, 1)
                    },
                    on: {
                      change: function($event) {
                        return _vm.$set(_vm.post, "need_an_answer", 1)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "form-check-label",
                      attrs: { for: "need_an_answer1" }
                    },
                    [
                      _vm._v(
                        "\n                                Не требует\n                            "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-check" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.post.need_an_answer,
                        expression: "post.need_an_answer"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: {
                      type: "radio",
                      name: "need_an_answer",
                      id: "need_an_answer2"
                    },
                    domProps: {
                      value: 0,
                      checked: _vm._q(_vm.post.need_an_answer, 0)
                    },
                    on: {
                      change: function($event) {
                        return _vm.$set(_vm.post, "need_an_answer", 0)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "form-check-label",
                      attrs: { for: "need_an_answer2" }
                    },
                    [
                      _vm._v(
                        "\n                                Требует\n                            "
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-3" },
                [
                  _c("label", [_vm._v("Конечная дата ответа")]),
                  _vm._v(" "),
                  _c("date-picker", {
                    attrs: {
                      lang: "ru",
                      valueType: "format",
                      "input-attr": { required: true }
                    },
                    model: {
                      value: _vm.post.date_an_answer,
                      callback: function($$v) {
                        _vm.$set(_vm.post, "date_an_answer", $$v)
                      },
                      expression: "post.date_an_answer"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Вид получения")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.post.type_of_receipt,
                          expression: "post.type_of_receipt"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { required: "" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.post,
                            "type_of_receipt",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "1" } }, [
                        _vm._v("Простое")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "2" } }, [
                        _vm._v("Заказное")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "3" } }, [
                        _vm._v("Курьер")
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c("span", [_vm._v("Подпись о получении")]),
                _vm._v(" "),
                _c("div", { staticClass: "form-check" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.post.signature_on_receipt,
                        expression: "post.signature_on_receipt"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: {
                      type: "radio",
                      name: "signature_on_receipt",
                      id: "signature_on_receipt1",
                      checked: ""
                    },
                    domProps: {
                      value: 1,
                      checked: _vm._q(_vm.post.signature_on_receipt, 1)
                    },
                    on: {
                      change: function($event) {
                        return _vm.$set(_vm.post, "signature_on_receipt", 1)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "form-check-label",
                      attrs: { for: "signature_on_receipt1" }
                    },
                    [
                      _vm._v(
                        "\n                                Да\n                            "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-check" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.post.signature_on_receipt,
                        expression: "post.signature_on_receipt"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: {
                      type: "radio",
                      name: "signature_on_receipt",
                      id: "signature_on_receipt2"
                    },
                    domProps: {
                      value: 0,
                      checked: _vm._q(_vm.post.signature_on_receipt, 0)
                    },
                    on: {
                      change: function($event) {
                        return _vm.$set(_vm.post, "signature_on_receipt", 0)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "form-check-label",
                      attrs: { for: "signature_on_receipt2" }
                    },
                    [
                      _vm._v(
                        "\n                                Нет\n                            "
                      )
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "exampleFormControlTextarea1" } },
                    [_vm._v("Коментарий")]
                  ),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.post.comment,
                        expression: "post.comment"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { rows: "3" },
                    domProps: { value: _vm.post.comment },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.post, "comment", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _vm._m(2)
            ]),
            _vm._v(" "),
            _c("image-upload", {
              on: {
                arrayUploadedImage: function($event) {
                  _vm.images = $event
                }
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn-primary btn-lg float-right" },
              [_vm._v("Отправить")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "exampleFormControlSelect1" } }, [
          _vm._v("Кто получил")
        ]),
        _vm._v(" "),
        _c("select", { staticClass: "form-control", attrs: { required: "" } }, [
          _c("option", [_vm._v("1")]),
          _vm._v(" "),
          _c("option", [_vm._v("2")]),
          _vm._v(" "),
          _c("option", [_vm._v("3")]),
          _vm._v(" "),
          _c("option", [_vm._v("4")]),
          _vm._v(" "),
          _c("option", [_vm._v("5")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "exampleFormControlSelect1" } }, [
          _vm._v("Вид письма")
        ]),
        _vm._v(" "),
        _c("select", { staticClass: "form-control", attrs: { required: "" } }, [
          _c("option", [_vm._v("Информационное")]),
          _vm._v(" "),
          _c("option", [_vm._v("Предупреждение")]),
          _vm._v(" "),
          _c("option", [_vm._v("Требование")]),
          _vm._v(" "),
          _c("option", [_vm._v("Претензия")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "exampleFormControlSelect2" } }, [
          _vm._v("Какому отделу/отделам адресовано")
        ]),
        _vm._v(" "),
        _c(
          "select",
          {
            staticClass: "form-control",
            attrs: { multiple: "", id: "exampleFormControlSelect2" }
          },
          [
            _c("option", { attrs: { value: "1" } }, [_vm._v("Абонотдел")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "2" } }, [_vm._v("Юротдел")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "3" } }, [_vm._v("Общее")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "4" } }, [_vm._v("Бухгалтерия")])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/docs/posts/PostCreate.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/docs/posts/PostCreate.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostCreate_vue_vue_type_template_id_628fd3b1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostCreate.vue?vue&type=template&id=628fd3b1& */ "./resources/js/components/docs/posts/PostCreate.vue?vue&type=template&id=628fd3b1&");
/* harmony import */ var _PostCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostCreate.vue?vue&type=script&lang=js& */ "./resources/js/components/docs/posts/PostCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PostCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostCreate.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/docs/posts/PostCreate.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PostCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostCreate_vue_vue_type_template_id_628fd3b1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostCreate_vue_vue_type_template_id_628fd3b1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/docs/posts/PostCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/docs/posts/PostCreate.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/docs/posts/PostCreate.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/docs/posts/PostCreate.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/docs/posts/PostCreate.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostCreate.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostCreate.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/docs/posts/PostCreate.vue?vue&type=template&id=628fd3b1&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/docs/posts/PostCreate.vue?vue&type=template&id=628fd3b1& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreate_vue_vue_type_template_id_628fd3b1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostCreate.vue?vue&type=template&id=628fd3b1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docs/posts/PostCreate.vue?vue&type=template&id=628fd3b1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreate_vue_vue_type_template_id_628fd3b1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreate_vue_vue_type_template_id_628fd3b1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);