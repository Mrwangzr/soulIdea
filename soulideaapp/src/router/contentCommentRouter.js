import contentComment from "../components/homePage/contentComment/contentCom";
import contentPublish from "../components/homePage/contentPublish/contentPublish"
import contentReward from "../components/homePage/contentReward/contentReward"


export default [
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
      path:"/contentComment",
      name:"contentComment",
      component:contentComment
    },
    {
      path:"/contentPublish",
      name:"contentPublish",
      component:contentPublish
    },
    {
      path:"/contentReward",
      name:"contentReward",
      component:contentReward
    }
  ]

