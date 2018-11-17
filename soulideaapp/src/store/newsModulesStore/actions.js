import axios from "axios";
export default {
  //关注变化列表的获取
  handleFansChangeList_getList({commit},params){
    //第一次进入页面
    if(params.max === -1){
        axios({
          method:"get",
          url:"",
          data:{
            page:params,
            count:20
          }}).then((data)=>{
            commit("handleFansChangeMax_setMax",data.data.max);
            commit("handleFansChangeList_getList",data.data.forklist);
        });
    }
    else if(params.pageNum<params.max){
        axios({
          method:"get",
          url:"http://localhost:3000/forklist",
          /*data:{
            page:params,
            count:20
          }*/}).then((data)=>{
            commit("handleFansChangeList_getList",data.data);
        })
    }
  },
  //@列表变化的获取
  handleAiteChangeList_getList({commit},params){
    //第一次进入页面
    if(params.max === -1){
      axios({
        method:"get",
        url:"",
        data:{
          page:params,
          count:20
        }}).then((data)=>{
        commit("handleAiteChangeMax_setMax",data.data.max);
        commit("handleAiteChangeList_getList",data.data.forklist);
      });
    }
    else if(params.pageNum<params.max){
      axios({
        method:"get",
        url:"http://localhost:3000/aitelist",
        /*data:{
          page:params,
          count:20
        }*/}).then((data)=>{
        commit("handleAiteChangeList_getList",data.data);
      })
    }
  },
  //打赏列表的获取
  handleGiftChangeList_getList({commit},params){
    //第一次进入页面
    if(params.max === -1){
      axios({
        method:"get",
        url:"",
        data:{
          page:params,
          count:20
        }}).then((data)=>{
        commit("handleGiftChangeMax_setMax",data.data.max);
        commit("handleGiftChangeList_getList",data.data.forklist);
      });
    }
    else if(params.pageNum<params.max){
      axios({
        method:"get",
        url:"http://localhost:3000/getgiftupdate",
        /*data:{
          page:params,
          count:20
        }*/}).then((data)=>{
        commit("handleGiftChangeList_getList",data.data);
      })
    }
  },


  //好友模块
    //加好友
    addNewFriend(id){
       axios({
         method:"post",
         url:"/friend/addfriend",
         headers:{
           'Content-type': 'application/x-www-form-urlencoded'
         },

         data:{
           id:id
         }
       }).then(
         (data)=>{
           if(data.errorCode === 200){

           }
           else{

           }
         }
       )
    },
    //删好友
    deleteFriend(id){
      axios({
        method:"post",
        url:"/friend/deletefriend",
        headers:{
          'Content-type': 'application/x-www-form-urlencoded'
        },

        data:{
          id:id
        }
      }).then(
        (data)=>{
          if(data.errorCode === 200){

          }else{

          }
        }
      )
    },
    //改备注
    editFriendRemarks(params){
    axios({
      method:"post",
      url:"/friend/getfriendname",
      headers:{
        'Content-type': 'application/x-www-form-urlencoded'
      },

      data:{
        id:params.id,
        name:params.name
      }
    }).then(
      (data)=>{
        if(data.errorCode === 200){

        }else{

        }
      }
    )
    },
    //查找个人信息
    findFriendInfo(){
      axios({
        method:"get",
        url: "",
      }).then(
        (data)=>{

        }
      )
    },
  //聊天模块
    //发送消息
    sendMessageTo(id){
     axios({
       method:"post",
       headers:{
         'Content-type': 'application/x-www-form-urlencoded'
       },
       url:"/friend/user",
       data:{
         to:id
       }
     }).then(
       (data)=>{
         data
       }
     )
    },
    //查找消息



}
