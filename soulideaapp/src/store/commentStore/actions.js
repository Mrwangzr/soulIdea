import axios from "axios";
export default{
    //将用户评论信息传入数据库
    handlSendComment({commit},params){
        commit("handlSendComment",params)
        // console.log(parmas)
    },
    //发送用户评论
    // handlSendUserCom({},val){
    //     // console.log(val)
    //     axios({
    //     method:"post",
    //     url:"http://localhost:3000/"
    //     })
    // },
    //获取用户信息接口
    handlGetUserMsg({commit},params){
        // alert(params)
        axios({
            method:"get",
            url:"Soulidea-1.0/product/getproduct/3",

        }).then((data)=>{
            console.log(data.data)
            commit("handlGetUserMsg",data.data)
        })
    },
    // //点赞数据传入后端接口
    // handlLike({commit},val){
    //     axios({
    //         method:"post",
    //         url:"http://localhost:3000/userlist",
    //         data:{
    //             praise : val
    //         }

    //     }).then((data)=>{
    //         console.log(data.data)
    //         commit("handlGetUserMsg",data.data)
    //     })
    // },
    //获取当前用户被评论数
    // handlCommentNum({commit},params){
    //     console.log(params)
    // }
}
