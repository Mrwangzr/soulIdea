// import set from "../components/userInfoPage/set";
// import feedback from "../components/userInfoPage/feedback";
// import fans from "../components/userInfoPage/fans";
// import attention from "../components/userInfoPage/attention"
// import rank from "../components/userInfoPage/rank"
 const Set=()=>import("../components/userInfoPage/set")
export default [
	{
		path:'/set',
		name:"set",
		component:Set
	},
	{
		path:'/feedback',
		name:'feedback',
		component:resolve=>(require(["../components/userInfoPage/feedback"],resolve)),
		meta: {
		  keepAlive: false // 不需要被缓存
		}
	},
	{
		path:'/fans',
		name:'fans',
		component:resolve=>(require(["../components/userInfoPage/fans"],resolve)),
		meta: {
			keepAlive: false // 不需要被缓存
		}
	},
	{
		path:'/attention',
		name:'attention',
		component:resolve=>(require(["../components/userInfoPage/attention"],resolve)),
		meta: {
			keepAlive: false // 不需要被缓存
		}
	},
	{
		path:"/rank",
		name:"rank",
		component:resolve=>(require(["../components/userInfoPage/rank"],resolve)),
		meta: {
			keepAlive: false // 不需要被缓存
		}
	}
]