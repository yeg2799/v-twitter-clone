exports.ids = [1];
exports.modules = {

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1334a86b", content, true, context)
};

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_tw_content_card_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_tw_content_card_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_tw_content_card_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_tw_content_card_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_tw_content_card_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".tw-content-cards{width:100%;cursor:pointer}.tw-content-cards:hover{background:#080808}.tw-content-cards-wrapper{display:flex;padding:10px;border-bottom:1px solid #393c3e}.tw-content-cards-wrapper-right{width:100%;margin-left:10px}.tw-content-cards-wrapper-right-header{display:flex;justify-content:space-between}.tw-content-cards-wrapper-right-body-image{width:520px;margin:20px 0}.tw-content-cards-wrapper-right-body-image img{width:100%;border-radius:10px}.tw-content-cards-wrapper-right-bottom{width:80%;margin-top:10px}.tw-content-cards-wrapper-right-bottom-reaction{display:flex;justify-content:space-between}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--2-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/cards/tw-content-card.vue?vue&type=template&id=7626a872&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tw-content-cards"},_vm._l((3),function(a){return _vm._ssrNode("<div class=\"tw-content-cards-wrapper\">","</div>",[_vm._ssrNode("<div class=\"tw-content-cards-wrapper-left\">","</div>",[_vm._ssrNode("<div class=\"tw-content-cards-wrapper-left-avatar\">","</div>",[_c('tw-image-card',{attrs:{"src":"https://st2.depositphotos.com/3557671/11164/v/950/depositphotos_111644750-stock-illustration-man-avatar-icon-of-vector.jpg","preset":"avatar"}})],1)]),_vm._ssrNode("<div class=\"tw-content-cards-wrapper-right\">","</div>",[_vm._ssrNode("<div class=\"tw-content-cards-wrapper-right-header\">","</div>",[_vm._ssrNode("<div class=\"tw-content-cards-wrapper-right-header-userName\"><span class=\"name\">De Marke Sports</span><span class=\"userName\">@demarkesports</span><span class=\"time\">.34d</span></div>"),_c('tw-icon',{attrs:{"icon":"more-than","size":"20"}})],2),_vm._ssrNode("<div class=\"tw-content-cards-wrapper-right-body\">","</div>",[_vm._ssrNode("<div class=\"tw-content-cards-wrapper-right-body-text\"><span>Nwakaeme'nin penaltı golü öncesinde tribünde fenalaşan iki Trabzonspor taraftarı, hastaneye kaldırıldı. (Spor Arena)</span></div>"),_vm._ssrNode("<div class=\"tw-content-cards-wrapper-right-body-image\">","</div>",[_c('tw-image-card',{attrs:{"src":"https://pbs.twimg.com/media/FMd5kQXX0AESMhs?format=jpg&name=medium"}})],1)],2),_vm._ssrNode("<div class=\"tw-content-cards-wrapper-right-bottom\">","</div>",[_vm._ssrNode("<div class=\"tw-content-cards-wrapper-right-bottom-reaction\">","</div>",[_c('tw-icon',{attrs:{"color":"#343639","icon":"content","text":"6","size":"20"}}),_c('tw-icon',{attrs:{"color":"#343639","icon":"retweet","text":"37","size":"20"}}),_c('tw-icon',{attrs:{"color":"#343639","icon":"like","text":"382","size":"20"}}),_c('tw-icon',{attrs:{"color":"#343639","icon":"share","size":"20"}})],1)])])])}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/cards/tw-content-card.vue?vue&type=template&id=7626a872&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/cards/tw-content-card.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var tw_content_cardvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/cards/tw-content-card.vue?vue&type=script&lang=js&
 /* harmony default export */ var cards_tw_content_cardvue_type_script_lang_js_ = (tw_content_cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/cards/tw-content-card.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(142)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cards_tw_content_cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3609b199"
  
)

/* harmony default export */ var tw_content_card = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cards-tw-content-card.js.map