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


}
