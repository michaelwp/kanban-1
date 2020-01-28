webpackHotUpdate("cart",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/transactions/transactionList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/transactions/transactionList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join */ \"./node_modules/core-js/modules/es.array.join.js\");\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"transactionList\",\n  props: {\n    data: Object\n  },\n  methods: {\n    price: function price(value) {\n      var segment = [];\n      var n = [];\n      var priceReverse = \"0\" + value.toString().split(\"\").reverse().join(\"\");\n\n      for (var i = 1; i <= priceReverse.length + 1; i++) {\n        n.unshift(priceReverse[i]);\n\n        if (i % 3 === 0) {\n          segment.unshift(n.join(\"\"));\n          n = [];\n        }\n      }\n\n      return segment.join(\".\");\n    },\n    confirm: function confirm() {\n      var _this = this;\n\n      this.$dialog.confirm('Confirm item received ?').then(function (dialog) {\n        _this.$axios({\n          method: 'patch',\n          url: \"/api/transactions/done/\".concat(_this.data._id),\n          headers: {\n            token: localStorage.getItem('token')\n          }\n        }).then(function (response) {\n          _this.$emit('listTransactions');\n\n          _this.$toast.success({\n            title: 'Success',\n            message: 'Confirmed'\n          });\n\n          dialog.close();\n        }).catch(function (err) {\n          _this.$toast.error({\n            title: 'Error',\n            message: 'Confirmation error'\n          });\n\n          dialog.close();\n        });\n      }).catch(function (err) {\n        _this.$toast.info({\n          title: 'Cancel',\n          message: 'Confirmation has been cancel'\n        });\n      });\n    }\n  },\n  computed: {\n    totalPrice: function totalPrice() {\n      return this.price(this.data.totalPrice);\n    },\n    itemPrice: function itemPrice() {\n      return this.price(this.data.itemDetails.price);\n    },\n    confirmationStatus: function confirmationStatus() {\n      if (this.data.status === 'done') {\n        return {\n          color: 'green',\n          visibility: false\n        };\n      } else if (this.data.status === 'paid') {\n        return {\n          color: 'teal',\n          visibility: true\n        };\n      } else {\n        return {\n          color: 'yellow',\n          visibility: true\n        };\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3RyYW5zYWN0aW9uTGlzdC52dWU/MTYwZiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHN1aS1pdGVtPlxuICAgICAgICA8c3VpLWl0ZW0taW1hZ2VcbiAgICAgICAgICAgICAgICBzaXplPVwidGlueVwiXG4gICAgICAgICAgICAgICAgOnNyYz1cImRhdGEuaXRlbURldGFpbHMuaW1hZ2VcIi8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUgYWxpZ25lZCBjb250ZW50XCI+XG4gICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAge3sgZGF0YS5pdGVtRGV0YWlscy5uYW1lIH19XG4gICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxzdWktbGFiZWwgOmNvbG9yPVwiY29uZmlybWF0aW9uU3RhdHVzLmNvbG9yXCI+e3sgZGF0YS5zdGF0dXMgfX08L3N1aS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHN1aS1sYWJlbCBjb2xvcj1cInllbGxvd1wiIHYtaWY9XCJjb25maXJtYXRpb25TdGF0dXMudmlzaWJpbGl0eVwiPldhaXRpbmcgZm9yIHNoaXBlZDwvc3VpLWxhYmVsPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgaW52b2ljZSA6IDxzcGFuIGNsYXNzPVwiaXRlbVZhbHVlXCI+e3sgZGF0YS5faWQgfX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbiBkYXRlIDogPHNwYW4gY2xhc3M9XCJpdGVtVmFsdWVcIj57eyBkYXRhLmNyZWF0ZWRBdC5zcGxpdChcIlRcIil9fTwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgICAgIFByaWNlIDogPHNwYW4gY2xhc3M9XCJpdGVtVmFsdWVcIj5ScC4ge3sgaXRlbVByaWNlIH19PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICAgICAgQW1vdW50IDogPHNwYW4gY2xhc3M9XCJpdGVtVmFsdWVcIj57eyBkYXRhLml0ZW1BbW91bnQgfX08L3NwYW4+IGl0ZW1zPGJyPlxuICAgICAgICAgICAgICAgICAgICBUb3RhbDogPHNwYW4gY2xhc3M9XCJpdGVtVmFsdWVcIj5ScC4ge3sgdG90YWxQcmljZSB9fTwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxzdWktbGFiZWwgaWQ9XCJjb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJjb25maXJtYXRpb25TdGF0dXMudmlzaWJpbGl0eVwiPlxuICAgICAgICAgICAgICAgICAgICBDb25maXJtIEl0ZW0gcmVjZWl2ZWRcbiAgICAgICAgICAgICAgICA8L3N1aS1sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3N1aS1pdGVtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwidHJhbnNhY3Rpb25MaXN0XCIsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkYXRhOiBPYmplY3RcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgcHJpY2UodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VnbWVudCA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBuID0gW107XG4gICAgICAgICAgICAgICAgbGV0IHByaWNlUmV2ZXJzZSA9IFwiMFwiICsgdmFsdWUudG9TdHJpbmcoKS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwcmljZVJldmVyc2UubGVuZ3RoICsgMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG4udW5zaGlmdChwcmljZVJldmVyc2VbaV0pXG4gICAgICAgICAgICAgICAgICAgIGlmIChpICUgMyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudC51bnNoaWZ0KG4uam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlZ21lbnQuam9pbihcIi5cIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlybSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRkaWFsb2dcbiAgICAgICAgICAgICAgICAgICAgLmNvbmZpcm0oJ0NvbmZpcm0gaXRlbSByZWNlaXZlZCA/JylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZGlhbG9nID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGF4aW9zKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdwYXRjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgL2FwaS90cmFuc2FjdGlvbnMvZG9uZS8ke3RoaXMuZGF0YS5faWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbGlzdFRyYW5zYWN0aW9ucycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHRvYXN0LnN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ29uZmlybWVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHRvYXN0LmVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDb25maXJtYXRpb24gZXJyb3InXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kdG9hc3QuaW5mbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDYW5jZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDb25maXJtYXRpb24gaGFzIGJlZW4gY2FuY2VsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB0b3RhbFByaWNlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByaWNlKHRoaXMuZGF0YS50b3RhbFByaWNlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGl0ZW1QcmljZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcmljZSh0aGlzLmRhdGEuaXRlbURldGFpbHMucHJpY2UpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlybWF0aW9uU3RhdHVzKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuc3RhdHVzID09PSAnZG9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLnN0YXR1cyA9PT0gJ3BhaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3RlYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAneWVsbG93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgICNjb25maXJtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5pdGVtVmFsdWUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUEzQ0E7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUF4QkE7QUFsREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/transactions/transactionList.vue?vue&type=script&lang=js&\n");

/***/ })

})