import axios from "axios";
export default {
  //关注变化列表的获取
  handleFansChangeList_getList({commit},params){
    console.log(params.pageNum,params.max);
    console.log(params.pageNum<params.max);
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
      console.log("执行");
        axios({
          method:"get",
          url:"http://localhost:3000/forklist",
          /*data:{
            page:params,
            count:20
          }*/}).then((data)=>{
            console.log(data);
            commit("handleFansChangeList_getList",data.data);
        })
    }
  },
  //@列表变化的获取
  handleAiteChangeList_getList({commit},params){
    console.log(params.pageNum,params.max);
    console.log(params.pageNum<params.max);
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
      console.log("执行");
      axios({
        method:"get",
        url:"http://localhost:3000/aitelist",
        /*data:{
          page:params,
          count:20
        }*/}).then((data)=>{
        console.log(data.data);
        commit("handleAiteChangeList_getList",data.data);
      })
    }
  },

}
