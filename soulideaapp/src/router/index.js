import Vue from 'vue';
import Router from 'vue-router';
// import firstLevelPage from '../components/firstLevelPage';
// import homePage from "../components/homePage/homePage";
// import contentComment from "../components/homePage/contentComment/contentCom";
// import contentPublish from "../components/homePage/contentPublish/contentPublish"
import contentCommentRouter from "./contentCommentRouter.js"

Vue.use(Router)

export default new Router({
  routes: [
    {
      //重定向
      path:"/",
      redirect:"/firstLevelPage"
    },
    {
      //首页的跳转路由
      path: '/firstLevelPage',
      name: 'firstLevelPage',
      component: firstLevelPage,
    },
    ...contentCommentRouter
  ]
})
