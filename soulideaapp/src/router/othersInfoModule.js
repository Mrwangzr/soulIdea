 import otherUserTwo from "../components/otherUserInfo/otherUserTwo";
 import otherUserThree from "../components/otherUserInfo/otherUserThree";
 import otherUserFour from "../components/otherUserInfo/otherUserFour";
 // 他人主页路由
 import otherUserHome from "../components/otherUserInfo/otherUserHome";
 import signIn from "../components/signIn/signIn";


 export default [
    {
      
        path: '/signIn',
        name: 'signIn',
        component: signIn,
      },
  
      {
        path:'/otherUserHome',
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
        props:true,
        name:"otherUserFour",
        component:otherUserFour
      }
 ]