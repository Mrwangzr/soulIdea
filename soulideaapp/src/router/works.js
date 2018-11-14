import Vue from 'vue';
import Router from 'vue-router';
import firstLevelPage from '../components/firstLevelPage';
import homePage from "../components/homePage/homePage";
import production from "../components/userInfoPage/works/myproduction";
import WorksCollection from "../components/userInfoPage/works/WorksCollection"
import Beautiful from "../components/userInfoPage/works/beautiful";
import details from "../components/userInfoPage/works/details";
import newConstruction from "../components/userInfoPage/works/newConstruction";
Vue.use(Router)

export default new Router({
  routes: [
    {
      //首页的跳转路由
      path: '/',
      name: 'production',
      component: production,
    },
		{
			//作品集的跳转路由
			path: '/WorksCollection',
			name: 'WorksCollection',
			component: WorksCollection,
		},{
			//作品集内容跳转路由
			path: '/beautiful/',
			name:"beautiful",
			component:Beautiful
			
		},
		{
			//作品详情
			path: '/details',
			name:"details",
			component:details
		},
		{
			//作品集跳转到新建页路由
			path: '/newConstruction',
			name:"newConstruction",
			component:newConstruction
		},
		
			
  ]
})
