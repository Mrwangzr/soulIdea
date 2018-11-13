import talkPage from "../components/newsPage/talkWithFriends/talkPage";
import findNewFriends from "../components/newsPage/findNewFriends/findNewFriendsPage";
import friendInfoPage from "../components/newsPage/friendsInfoPage/friendsInfoPage";
export default [
  {//聊天页的路由
    path:"/talkPage",
    component:talkPage
  },
  {
    //添加好友
    path:"/findNewFriendsPage",
    component:findNewFriends
  },
  {
    //好友信息
    path:"/friendInfoPage",
    component:friendInfoPage
  }
]
