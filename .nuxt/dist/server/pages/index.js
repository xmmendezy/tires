exports.ids = [1];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(104);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("28f1127f", content, true, context)
};

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".home .navbar-brand{padding-left:4rem}.home .navbar-end{padding-right:4rem}.home .content{padding:3rem 4rem}.home .content img{height:12rem;display:block;margin:auto}.home .content .subtitle{font-size:1rem;padding:.5rem 1.5rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=f87a5f7a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('b-navbar',{scopedSlots:_vm._u([{key:"brand",fn:function(){return [_c('b-navbar-item',[_c('h1',{staticClass:"title has-text-primary"},[_vm._v("\n\t\t\t\t\t"+_vm._s(_vm.L('title'))+"\n\t\t\t\t")])])]},proxy:true},{key:"end",fn:function(){return [_c('b-navbar-item',{attrs:{"tag":"div"}},[_c('b-autocomplete',{attrs:{"rounded":"","data":_vm.search_products,"placeholder":_vm.L('helper.search'),"icon":"magnify","clearable":""},on:{"select":function (option) { return (_vm.selected = option); }},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-left"},[_c('img',{attrs:{"width":"32","src":props.option.image}})]),_vm._v(" "),_c('div',{staticClass:"media-content"},[_vm._v("\n\t\t\t\t\t\t\t\t"+_vm._s(props.option.label)+"\n\t\t\t\t\t\t\t\t"),_c('br'),_vm._v(" "),_c('small',[_vm._v("\n\t\t\t\t\t\t\t\t\t"+_vm._s(props.option.description)+"\n\t\t\t\t\t\t\t\t")])])])]}},{key:"empty",fn:function(){return [_vm._v(_vm._s(_vm.L('helper.not_found')))]},proxy:true}]),model:{value:(_vm.search),callback:function ($$v) {_vm.search=$$v},expression:"search"}})],1),_vm._v(" "),_c('b-navbar-item',{attrs:{"tag":"div"},on:{"click":function($event){return _vm.logout()}}},[_c('a',{staticClass:"button is-light"},[_vm._v(" "+_vm._s(_vm.L('helper.logout'))+" ")])])]},proxy:true}])}),_vm._ssrNode(" <div class=\"content\">"+(_vm._ssrList((_vm.group_products),function(products,i){return ("<div class=\"tile is-ancestor\">"+(_vm._ssrList((products),function(product){return ("<div class=\"tile is-parent\"><article class=\"tile is-child box\"><img"+(_vm._ssrAttr("src",product.image))+"> <p class=\"title\">"+_vm._ssrEscape(_vm._s(product.label))+"</p> <p class=\"subtitle\">"+_vm._ssrEscape(_vm._s(product.description))+"</p> <p class=\"subtitle has-text-right\">"+_vm._ssrEscape(_vm._s(_vm.formatMoney(product.price)))+"</p></article></div>")}))+"</div>")}))+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=f87a5f7a&

// EXTERNAL MODULE: ./utils/page_child_base.utils.ts
var page_child_base_utils = __webpack_require__(98);

// CONCATENATED MODULE: ./utils/page_base.utils.ts

class page_base_utils_PageBase extends page_child_base_utils["a" /* default */] {
  async created() {
    super.created();
  }

}
// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let lib_vue_loader_options_pagesvue_type_script_lang_ts_Home = class Home extends page_base_utils_PageBase {
  constructor() {
    super(...arguments);
    this.products = [];
    this.group_products = [];
    this.search = '';
  }

  async created() {
    await super.created();
    this.get_products();
  }

  filter_group_products() {
    this.group_products = [];
    let origin_products = [...this.products];

    if (this.search) {
      const search = new RegExp(this.search, 'i');
      origin_products = origin_products.filter(product => search.test(product.label) || search.test(product.description) || search.test(product.price.toString()));
    }

    while (origin_products.length > 0) {
      let dataElement = origin_products.splice(0, 4);
      this.group_products.push(dataElement);
    }
  }

  get search_products() {
    if (this.search) {
      const search = new RegExp(this.search, 'i');
      return [...this.products].filter(product => search.test(product.label) || search.test(product.description) || search.test(product.price.toString()));
    }

    return [];
  }

  async get_products() {
    this.load_form_api(await this.store.api.get_products(), data => {
      this.products = data.filter(p => p.status === '1');
      this.filter_group_products();
    });
  }

};
lib_vue_loader_options_pagesvue_type_script_lang_ts_Home = __decorate([external_vue_property_decorator_["Component"]], lib_vue_loader_options_pagesvue_type_script_lang_ts_Home);
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_ts_ = (lib_vue_loader_options_pagesvue_type_script_lang_ts_Home);
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pagesvue_type_script_lang_ts_ = (lib_vue_loader_options_pagesvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(103)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e38561a4"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageChildBase; });
/* harmony import */ var _component_base_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);

class PageChildBase extends _component_base_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] {
  async created() {
    super.created();
  }

}

/***/ })

};;
//# sourceMappingURL=index.js.map