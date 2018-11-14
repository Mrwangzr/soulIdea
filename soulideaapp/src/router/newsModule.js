import talkPage from "../components/newsPage/talkWithFriends/talkPage";
import findNewFriends from "../components/newsPage/findNewFriends/findNewFriendsPage";
import friendInfoPage from "../components/newsPage/friendsInfoPage/friendsInfoPage";
import fansChangePage from "../components/newsPage/fansChangeInfo/fansChangePage";
import aiteMessagePage from "../components/newsPage/aiteMessage/aiteMessagePage";
import giftMessagePage from "../components/newsPage/giftMessage/giftMessagePage";
import searchUserByNamePage from "../components/newsPage/searchUserByName/searchUserByNamePage";
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
  },
  {
    //涨粉信息
    path:"/fansChangePage",
    component:fansChangePage
  },
  {
    //@信息
    path:"/aiteMessagePage",
    component:aiteMessagePage
  },
  {
    //打赏信息
    path:"/giftMessagePage",
    component:giftMessagePage
  },
  {
    //按照用户名搜索用户
    path:"/searchUserByNamePage",
    component:searchUserByNamePage
  }


]
