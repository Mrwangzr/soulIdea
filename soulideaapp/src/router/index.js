import Vue from 'vue';
import Router from 'vue-router';
import firstLevelPage from '../components/firstLevelPage';
import homePage from "../components/homePage/homePage";
import signIn from "../components/signIn/signIn";
import otherUserTwo from "../components/otherUserInfo/otherUserTwo";
import otherUserThree from "../components/otherUserInfo/otherUserThree";
import otherUserFour from "../components/otherUserInfo/otherUserFour";




// 他人主页路由
import otherUserHome from "../components/otherUserInfo/otherUserHome";

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   //重定向
    //   path:"/",
    //   redirect:"/firstLevelPage"
    // },
    // {
    //   //首页的跳转路由
    //   path: '/firstLevelPage',
    //   name: 'firstLevelPage',
    //   component: firstLevelPage,
    // },
    {
      
      path: '/signIn',
      name: 'signIn',
      component: signIn,
    },

    {
      path:'/',
      name:"otherUserHome",
      component:otherUserHome
    },

    {
      path:'/otherUserTwo',
      name:"otherUserTwo",
      component:otherUserTwo
    },
    
    {
      path:'/otherUserThree',
      name:"otherUserThree",
      component:otherUserThree
    },
    {
      path:'/otherUserFour',
      name:"otherUserFour",
      component:otherUserFour
    }


  ]
})
