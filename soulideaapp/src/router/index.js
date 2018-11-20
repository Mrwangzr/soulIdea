import Vue from 'vue';
import Router from 'vue-router';
import firstLevelPage from '../components/firstLevelPage';
import homePage from "../components/homePage/homePage";
import userInfoModule from "./userInfoModule";
import newsModule from './newsModule';
import routerLi from "./router-Libo";
import othersInfoModule from "./othersInfoModule";
import works from "./works";
import contentCommentRouter from "./contentCommentRouter.js"

//me
const talkPage = import("../components/newsPage/talkWithFriends/talkPage");
const findNewFriends = import("../components/newsPage/findNewFriends/findNewFriendsPage");
const friendInfoPage = import("../components/newsPage/friendsInfoPage/friendsInfoPage");
const fansChangePage = import("../components/newsPage/fansChangeInfo/fansChangePage");
const aiteMessagePage = import("../components/newsPage/aiteMessage/aiteMessagePage");
const giftMessagePage = import("../components/newsPage/giftMessage/giftMessagePage");
const searchUserByNamePage = import("../components/newsPage/searchUserByName/searchUserByNamePage");


Vue.use(Router);

export default new Router({
  routes: [
    {
      //重定向
      path: "/",
      redirect: "/login"
    },
    {
      //首页的跳转路由
      path: '/firstLevelPage',
      name: 'firstLevelPage',
      component: firstLevelPage,
      meta:{
        keepAlive:true
      }
    },
    //登录注册模块
    ...routerLi,
    //个人信息路由
    ...userInfoModule,
    //消息模块的路由
    ...newsModule,
    //他人信息路由
    ...othersInfoModule,
    ...works,
    ...contentCommentRouter
  ]
})
