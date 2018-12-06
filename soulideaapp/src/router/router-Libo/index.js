import login from "../../components/userInfoPage/libo/login"
import register from "../../components/userInfoPage/libo/register"
import pay from"../../components/userInfoPage/libo/pay"
import money from"../../components/userInfoPage/libo/money"
export default [	
	{
		path:'/login',
		name:'login',
		component:login,
	},
	{
		path:'/register',
		name:'register',
		component:register,
	},
	{
		path:'/pay',
		name:'pay',
		component:pay,
	},
	{
		path:'/money',
		name:'money',
		component:money,
	}
]
