// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import storeCom from "./store/commentStore"
//全局css
import './css_common/reset.css';
//图形文字
import './font_xkd0wfhsk8/iconfont.css';
//处理rem
import './js_rem/rem';
//封装observer
import observer from "./js_rem/observer";
//srh-elementUi查件
import ElementUI from 'element-ui';
//srh-elementUi查件css
import 'element-ui/lib/theme-chalk/index.css';
import VueCropper from 'vue-cropper';

Vue.use(ElementUI);
Vue.config.productionTip = false;
//设置observer 处理组件传值
Vue.prototype.observer  = observer;





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  storeCom,
  components: { App },
  template: '<App/>'
});
