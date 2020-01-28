webpackHotUpdate("cart",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/transactions/transactionList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/transactions/transactionList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join */ \"./node_modules/core-js/modules/es.array.join.js\");\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"transactionList\",\n  props: {\n    data: Object\n  },\n  methods: {\n    price: function price(value) {\n      var segment = [];\n      var n = [];\n      var priceReverse = \"0\" + value.toString().split(\"\").reverse().join(\"\");\n\n      for (var i = 1; i <= priceReverse.length + 1; i++) {\n        n.unshift(priceReverse[i]);\n\n        if (i % 3 === 0) {\n          segment.unshift(n.join(\"\"));\n          n = [];\n        }\n      }\n\n      return segment.join(\".\");\n    },\n    confirm: function confirm() {\n      var _this = this;\n\n      this.$dialog.confirm('Confirm item received ?').then(function (dialog) {\n        _this.$axios({\n          method: 'patch',\n          url: \"/api/transactions/done/\".concat(_this.data._id),\n          headers: {\n            token: localStorage.getItem('token')\n          }\n        }).then(function (response) {\n          _this.$emit('listTransactions');\n\n          _this.$toast.success({\n            title: 'Success',\n            message: 'Confirmed'\n          });\n\n          dialog.close();\n        }).catch(function (err) {\n          _this.$toast.error({\n            title: 'Error',\n            message: 'Confirmation error'\n          });\n\n          dialog.close();\n        });\n      }).catch(function (err) {\n        _this.$toast.info({\n          title: 'Cancel',\n          message: 'Confirmation has been cancel'\n        });\n      });\n    }\n  },\n  computed: {\n    totalPrice: function totalPrice() {\n      return this.price(this.data.totalPrice);\n    },\n    itemPrice: function itemPrice() {\n      return this.price(this.data.itemDetails.price);\n    },\n    confirmationStatus: function confirmationStatus() {\n      if (this.data.status === 'done') {\n        return {\n          color: 'green',\n          visibility: false,\n          descVisibility: false\n        };\n      } else if (this.data.status === 'paid') {\n        return {\n          color: 'teal',\n          visibility: false,\n          descVisibility: true\n        };\n      } else {\n        return {\n          color: 'yellow',\n          visibility: true\n        };\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3RyYW5zYWN0aW9uTGlzdC52dWU/MTYwZiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHN1aS1pdGVtPlxuICAgICAgICA8c3VpLWl0ZW0taW1hZ2VcbiAgICAgICAgICAgICAgICBzaXplPVwidGlueVwiXG4gICAgICAgICAgICAgICAgOnNyYz1cImRhdGEuaXRlbURldGFpbHMuaW1hZ2VcIi8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUgYWxpZ25lZCBjb250ZW50XCI+XG4gICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAge3sgZGF0YS5pdGVtRGV0YWlscy5uYW1lIH19XG4gICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxzdWktbGFiZWwgOmNvbG9yPVwiY29uZmlybWF0aW9uU3RhdHVzLmNvbG9yXCI+e3sgZGF0YS5zdGF0dXMgfX08L3N1aS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHN1aS1sYWJlbCBjb2xvcj1cInllbGxvd1wiIHYtaWY9XCJjb25maXJtYXRpb25TdGF0dXMuZGVzY1Zpc2liaWxpdHlcIj5XYWl0aW5nIGZvciBzaGlwZWQ8L3N1aS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIGludm9pY2UgOiA8c3BhbiBjbGFzcz1cIml0ZW1WYWx1ZVwiPnt7IGRhdGEuX2lkIH19PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gZGF0ZSA6IDxzcGFuIGNsYXNzPVwiaXRlbVZhbHVlXCI+e3sgZGF0YS5jcmVhdGVkQXQuc3BsaXQoXCJUXCIpfX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgICAgICBQcmljZSA6IDxzcGFuIGNsYXNzPVwiaXRlbVZhbHVlXCI+UnAuIHt7IGl0ZW1QcmljZSB9fTwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgICAgIEFtb3VudCA6IDxzcGFuIGNsYXNzPVwiaXRlbVZhbHVlXCI+e3sgZGF0YS5pdGVtQW1vdW50IH19PC9zcGFuPiBpdGVtczxicj5cbiAgICAgICAgICAgICAgICAgICAgVG90YWw6IDxzcGFuIGNsYXNzPVwiaXRlbVZhbHVlXCI+UnAuIHt7IHRvdGFsUHJpY2UgfX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8c3VpLWxhYmVsIGlkPVwiY29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiY29uZmlybWF0aW9uU3RhdHVzLnZpc2liaWxpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgQ29uZmlybSBJdGVtIHJlY2VpdmVkXG4gICAgICAgICAgICAgICAgPC9zdWktbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zdWktaXRlbT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcInRyYW5zYWN0aW9uTGlzdFwiLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGF0YTogT2JqZWN0XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHByaWNlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlZ21lbnQgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgbiA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBwcmljZVJldmVyc2UgPSBcIjBcIiArIHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcHJpY2VSZXZlcnNlLmxlbmd0aCArIDE7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBuLnVuc2hpZnQocHJpY2VSZXZlcnNlW2ldKVxuICAgICAgICAgICAgICAgICAgICBpZiAoaSAlIDMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnQudW5zaGlmdChuLmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbiA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWdtZW50LmpvaW4oXCIuXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpcm0oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZGlhbG9nXG4gICAgICAgICAgICAgICAgICAgIC5jb25maXJtKCdDb25maXJtIGl0ZW0gcmVjZWl2ZWQgPycpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGRpYWxvZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRheGlvcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAncGF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYC9hcGkvdHJhbnNhY3Rpb25zL2RvbmUvJHt0aGlzLmRhdGEuX2lkfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2xpc3RUcmFuc2FjdGlvbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiR0b2FzdC5zdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0NvbmZpcm1lZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiR0b2FzdC5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ29uZmlybWF0aW9uIGVycm9yJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHRvYXN0LmluZm8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2FuY2VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ29uZmlybWF0aW9uIGhhcyBiZWVuIGNhbmNlbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgdG90YWxQcmljZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcmljZSh0aGlzLmRhdGEudG90YWxQcmljZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpdGVtUHJpY2UoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpY2UodGhpcy5kYXRhLml0ZW1EZXRhaWxzLnByaWNlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvblN0YXR1cygpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnN0YXR1cyA9PT0gJ2RvbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY1Zpc2liaWxpdHk6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5zdGF0dXMgPT09ICdwYWlkJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd0ZWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY1Zpc2liaWxpdHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3llbGxvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICAjY29uZmlybSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuaXRlbVZhbHVlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBM0NBO0FBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQTFCQTtBQWxEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/transactions/transactionList.vue?vue&type=script&lang=js&\n");

/***/ })

})