import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Util from "@/util/js/util.js";
import util from './util/js/util';
import registerGlobalComponentsfunction from "@/init/registerGlobalComponents.js"

import fromCore from "./libs/formDesign/form_core.js"
import formView from "./libs/formDesign/form_view.js"
import formApp from "./libs/formDesign/app.js"

import "./libs/formDesign/css/form_core.css"
import "./libs/formDesign/css/form_view.css"
import "./libs/formDesign/css/app.css"


Vue.config.productionTip = false; 

util.loadStyle("//at.alicdn.com/t/font_1803290_c7fn6uda29o.css");



window.AppWindow = {
  Plugins: {

  }
}

registerGlobalComponentsfunction(Vue);

Util.loadScript("https://libs.baidu.com/jquery/1.7.2/jquery.min.js", function () {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
});
