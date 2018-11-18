import production from "../components/userInfoPage/works/myproduction";
import WorksCollection from "../components/userInfoPage/works/WorksCollection"
import Beautiful from "../components/userInfoPage/works/beautiful";
import details from "../components/userInfoPage/works/details";
import newConstruction from "../components/userInfoPage/works/newConstruction";
import Allworks from "../components/userInfoPage/works/Allworks"
export default [
    {
      //首页的跳转路由
      path: '/production',
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
		{
			//获取当前作品集中所有作品
			path:"/Allworks",
			name:"Allworks",
			component:Allworks
		}
  ]

