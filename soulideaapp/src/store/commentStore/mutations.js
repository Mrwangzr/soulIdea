export default {
    //存入用户信息
    handlGetUserMsg(state,params){
         console.log(params)
        // state.user.grade = params[0].grade
        // state.user.pv = params[0].pv
        state.userMessage = params

       
        
    },
    handlSendComment(state,val){
        state.commentList = val;
        console.log(val)
    },
    //用户评论数据
    handlCommentNum(state,params){

    }
}