import set from "../components/userInfoPage/set";
import feedback from "../components/userInfoPage/feedback";
import fans from "../components/userInfoPage/fans";
import attention from "../components/userInfoPage/attention"
export default [
	{
		path:'/set',
		name:"set",
		component:set
	},
	{
		path:'/feedback',
		name:'feedback',
		component:feedback
	},
	{
		path:'/fans',
		name:'fans',
		component:fans
	},
	{
		path:'/attention',
		name:'attention',
		component:attention
	}
]