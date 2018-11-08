import Vue from 'vue';
import Router from 'vue-router';
import firstLevelPage from '../components/firstLevelPage';
import homePage from "../components/homePage/homePage";


Vue.use(Router)

export default new Router({
  routes: [
    {
      //首页的跳转路由
      path: '/',
      name: 'firstLevelPage',
      component: firstLevelPage,
    },
  ]
})
