import axios from "axios";
export default {
  //关注变化列表的获取
  handleFansChangeList_getList({commit},params){
    //第一次进入页面
    if(params.max === -1){
        axios({
          method:"get",
          url:"/Soulidea-1.0/user/forkremind?page="+params.pageNum,
          }).then((data)=>{
            if(data.data.code === 200){
            console.log(data);
           /* commit("handleFansChangeMax_setMax",data.data.max);
            commit("handleFansChangeList_getList",data.data.forklist);*/
           //空页面回调
           params.func(true);
            }
            else{
              params.func(false);
            }
        });
    }
    else if(params.pageNum<params.max){
        axios({
          method:"get",
          url:"/Soulidea-1.0/user/forkremind?page="+params.pageNum,
          }).then((data)=>{
            if(data.data.code === 200){
            console.log(data);
          /*  commit("handleFansChangeList_getList",data.data);*/
          //空页面回调
          params.func(true);
            }
            else{
              params.func(false);
            }
        })
    }
  },
  //@列表变化的获取
  handleAiteChangeList_getList({commit},params){
    //第一次进入页面
    if(params.max === -1){
      axios({
        method:"get",
        url:"/Soulidea-1.0/share/message",
        data:{
          page:params,
        }}).then((data)=>{
          if(data.data.code === 200) {
            console.log(data);
            /*  commit("handleAiteChangeMax_setMax",data.data.max);
              commit("handleAiteChangeList_getList",data.data.forklist);*/
            params.func(true);
          }
          else{
            params.func(false);
          }
      });
    }
    else if(params.pageNum<params.max){
      axios({
        method:"get",
        url:"/Soulidea-1.0/share/message",
        data:{
          page:params,
        }}).then((data)=>{
          if(data.data.code === 200) {
            console.log(data);
            // commit("handleAiteChangeList_getList",data.data);
            params.func(true);
          }
          else{
            params.func(false);
          }
      })
    }
  },
  //打赏列表的获取
  handleGiftChangeList_getList({commit},params){
    //第一次进入页面
    if(params.max === -1){
      axios({
        method:"get",
        url:"/Soulidea-1.0/share/getgiftupdate",
        data:{
          page:params,
        }}).then((data)=>{
          if(data.data.code === 200) {
            console.log(data);
            /*   commit("handleGiftChangeMax_setMax",data.data.max);
               commit("handleGiftChangeList_getList",data.data.forklist);*/
            params.func(true);
          }
          else{
            params.func(false);
          }
      });
    }
    else if(params.pageNum<params.max){
      axios({
        method:"get",
        url:"/Soulidea-1.0/share/getgiftupdate",
        data:{
          page:params,
        }}).then((data)=>{
          if(data.data.code === 200){
          console.log(data);
        commit("handleGiftChangeList_getList",data.data);
        params.func(true);
      }
      else{
            params.func(false);
          }
      })
    }
  },

/*
  //好友模块
    //加好友
    addNewFriend(id){
       axios({
         method:"post",
         url:"/Soulidea/friend/addfriend",
         headers:{
           'Content-type': 'application/x-www-form-urlencoded'
         },
         data:{
           id:id
         }
       }).then(
         (data)=>{
           console.log(data);
         }
       )
    },*/

   /* //改备注
    editFriendRemarks(params){
    axios({
      method:"post",
      url:"/Soulidea/friend/getfriendname",
      headers:{
        'Content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        id:params.id,
        name:params.name
      }
    }).then(
      (data)=>{
        console.log(data);
      }
    )
    }*/
  //聊天模块
    //发送消息

    //查找消息



}
