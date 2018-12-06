const talkPage = ()=>import("../components/newsPage/talkWithFriends/talkPage");
const findNewFriends = ()=>import("../components/newsPage/findNewFriends/findNewFriendsPage");
const friendInfoPage = ()=>import("../components/newsPage/friendsInfoPage/friendsInfoPage");
const fansChangePage = ()=>import("../components/newsPage/fansChangeInfo/fansChangePage");
const aiteMessagePage = ()=>import("../components/newsPage/aiteMessage/aiteMessagePage");
const giftMessagePage = ()=>import("../components/newsPage/giftMessage/giftMessagePage");
const searchUserByNamePage = ()=>import("../components/newsPage/searchUserByName/searchUserByNamePage");

const worksInfoPage = ()=>import("../components/homePage/worksInfo/worksInfoPage");
const releasePage = ()=>import("../components/homePage/release/releasePage");
//import fansChangePage from "../components/newsPage/fansChangeInfo/fansChangePage";

export default [
  {//聊天页的路由
    path: "/talkPage",
    component: talkPage,
    meta:{
      keepAlive:false
    }
  },
  {
    //按照用户名搜索用户
    path: "/searchUserByNamePage",
    component: searchUserByNamePage,
    meta:{
      keepAlive:false
    }
  },
  {
    //添加好友
    path: "/findNewFriendsPage",
    component: findNewFriends,
    meta:{
      keepAlive:false
    }
  },
  {
    //好友信息
    path: "/friendInfoPage",
    component: friendInfoPage,
    meta:{
      keepAlive:false
    }
  },
  {
    //涨粉信息
    path: "/fansChangePage",
    component: fansChangePage,
    meta:{
      keepAlive:true
    }
  },
  {
    //@信息
    path: "/aiteMessagePage",
    component: aiteMessagePage,
    meta:{
      keepAlive:true
    }
  },
  {
    //打赏信息
    path: "/giftMessagePage",
    component: giftMessagePage,
    meta:{
      keepAlive:true
    }
  },
  //额外工作
  //作品详情
  {
    path:"/worksInfoPage",
    component:worksInfoPage,
    meta:{
      keepAlive:false
    }
  },
  {
    path:"/releasePage",
    component:releasePage,
    meta:{
      keepAlive:false
    }
  }
  /*
    {
      //按照用户名搜索用户
      path:"/searchUserByNamePage",
      component:searchUserByNamePage
    }
  */
]
