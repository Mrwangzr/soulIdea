// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*              ii.                                         ;9ABH,
               SA391,                                    .r9GG35&G
               &#ii13Gh;                               i3X31i;:,rB1
               iMs,:,i5895,                         .5G91:,:;:s1:8A
                33::::,,;5G5,                     ,58Si,,:::,sHX;iH1
                 Sr.,:;rs13BBX35hh11511h5Shhh5S3GAXS:.,,::,,1AG3i,GG
                 .G51S511sr;;iiiishS8G89Shsrrsh59S;.,,,,,..5A85Si,h8
                :SB9s:,............................,,,.,,,SASh53h,1G.
             .r18S;..,,,,,,,,,,,,,,,,,,,,,,,,,,,,,....,,.1H315199,rX,
           ;S89s,..,,,,,,,,,,,,,,,,,,,,,,,....,,.......,,,;r1ShS8,;Xi
         i55s:.........,,,,,,,,,,,,,,,,.,,,......,.....,,....r9&5.:X1
        59;.....,.     .,,,,,,,,,,,...        .............,..:1;.:&s
       s8,..;53S5S3s.   .,,,,,,,.,..      i15S5h1:.........,,,..,,:99
       93.:39s:rSGB@A;  ..,,,,.....    .SG3hhh9G&BGi..,,,,,,,,,,,,.,83
       G5.G8  9#@@@@@X. .,,,,,,.....  iA9,.S&B       Gs.X8 S@@@@@@@B:..,,,,,,,,,,. rA1 ,A@@@@@@@@@H:........,,,,,,.iX:
      ;9. ,8A#@@@@@@#5,.,,,,,,,,,... 9A. 8@@@@@@@@@@M;    ....,,,,,,,,S8
      X3    iS8XAHH8s.,,,,,,,,,,...,..58hH@@@@@@@@@Hs       ...,,,,,,,:Gs
     r8,        ,,,...,,,,,,,,,,.....  ,h8XABMMHX3r.          .,,,,,,,.rX:
    :9, .    .:,..,:;;;::,.,,,,,..          .,,.               ..,,,,,,.59
   .Si      ,:.i8HBMMMMMB&5,....                    .            .,,,,,.sMr
   SS       :: h@@@@@@@@@@#; .                     ...  .         ..,,,,iM5
   91  .    ;:.,1&@@@@@@MXs.                            .          .,,:,:&S
   hS ....  .:;,,,i3MMS1;..,..... .  .     ...                     ..,:,.99
   ,8; ..... .,:,..,8Ms:;,,,...                                     .,::.83
    s&: ....  .sS553B@@HX3s;,.    .,;13h.                            .:::&1
     SXr  .  ...;s3G99XA&X88Shss11155hi.                             ,;:h&,
      iH8:  . ..   ,;iiii;,::,,,,,.                                 .;irHA
       ,8X5;   .     .......                                       ,;iihS8Gi
          1831,                                                 .,;irrrrrs&@
            ;5A8r.                                            .:;iiiiirrss1H
              :X@H3s.......                                .,:;iii;iiiiirsrh
               r#h:;,...,,.. .,,:;;;;;:::,...              .:;;;;;;iiiirrss1
              ,M8 ..,....,.....,,::::::,,...         .     .,;;;iiiiiirss11h
              8B;.,,,,,,,.,.....          .           ..   .:;;;;iirrsss111h
             i@5,:::,,,,,,,,.... .                   . .:::;;;;;irrrss111111
             9Bi,:,,,,......                        ..r91;;;;;iirrsss1ss1111


*/

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
//引入mint-ui插件
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './css_common/mint-uicolor.css';
import { Popup } from 'mint-ui';

Vue.use(ElementUI);
Vue.config.productionTip = false;
//设置observer 处理组件传值
Vue.prototype.observer  = observer;




Vue.component(Popup.name, Popup);






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  storeCom,
  components: { App },
  template: '<App/>'
});
