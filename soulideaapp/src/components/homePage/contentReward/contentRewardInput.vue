<template>
    <div class="comment_boxGify ">
        <!-- <div id="comment_">
            <p><input type="text" placeholder="请说点什么吧！" v-model="data"><button @click="handlSendUserCom(data)">发送</button></p>
            
        
        </div> -->
        <div class ="wrapper" ref="wrapper">
            <div class="content">
                <div>
                    <img src="../../../../static/giveImg/bb1@2x.png" alt="">
                    <span>冰棍</span>
                </div>
                <div>
                    <img src="../../../../static/giveImg/bb@2x.png" alt="">
                    <span>冰棍</span>
                </div>
                <div>
                    <img src="../../../../static/giveImg/fc@2x.png" alt="">
                    <span>冰棍</span>
                </div>
                <div>
                    <img src="../../../../static/giveImg/hj@2x.png" alt="">
                    <span>冰棍</span>
                </div>
                <div>
                    <img src="../../../../static/giveImg/jb@2x.png" alt="">
                    <span>冰棍</span>
                </div>
                <div>
                    <img src="../../../../static/giveImg/jinru@2x.png" alt="">
                    <span>冰棍</span>
                </div>
                 <div>
                    <img src="../../../../static/giveImg/jinru@2x.png" alt="">
                    <span>冰棍</span>
                </div>
                 <div>
                    <img src="../../../../static/giveImg/jinru@2x.png" alt="">
                    <span>冰棍</span>
                </div>
            </div>

            
        </div>
        <div class="comment_boxGify_buttom">
            <div><i class="iconfont icon-yuanquanjiahao"></i><span class="RMB">&nbsp 0</span> </div>
            <div><span>充值</span> <i  class="iconfont icon-arrow-right"></i> </div>
        </div>
        
    </div>
</template>
<style>
.comment_boxGify{
    width:100%;
    height:4.98rem;
    position: absolute;;
    bottom:0;
    left:0;
}
.comment_boxGify .wrapper{
    width:100%;
    height:3.96rem;
    background:#EBEBEB;
}
.comment_boxGify .wrapper .content{
    width:100%;
    /* height:100%; */
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.comment_boxGify .wrapper .content div{
    width:33%;
    height:1.98rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.comment_boxGify .wrapper .content img{
    width:.5rem;
    height:.6rem;
}
.comment_boxGify .comment_boxGify_buttom{
    width:100%;
    height:.98rem;
    background:white;
    display: flex;
    justify-content: space-between;
    align-items:center;
    z-index:100;
    
}
.comment_boxGify .comment_boxGify_buttom i{
    color:#F6C45D;
}
.comment_boxGify .comment_boxGify_buttom span{
    color:#F6C45D;
}
.comment_boxGify .comment_boxGify_buttom div .RMB{
    font-size: 16px;
}
    /* .comment_input{
    width:100%;
    height:1rem;
    position: absolute;;
    bottom:0;
    left:0;
    background:rgba(37, 36, 36, 1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    }
    #comment_input>p button{
        width:1.3rem;
        height:.5rem;
        margin-left:5px;
        border-radius: .1rem .1rem;
        background:white;
        color:rgb(58, 57, 57);
    } */
</style>
<script>
import BScroll from "better-scroll"
import Vuex from "vuex"
export default {
     mounted() {
    //第一个参数是最外面的大盒子第二个参数是配置项
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      //pullUpLoad 设置为true 开启上拉加载功能,设置threshold:50 意思是上拉到50时 执行pullingUp
        pullUpLoad:{
            threshold:50 
        }
    });
     //当用户上拉时触发事件 第一个参数：pullingUp上拉加载必须配置pullUpLoad：true 时候开启上拉加载
    this.scroll.on("pullingUp",()=>{
      this.handlCommentNum(++this.pageNum)
    })
  },
    // data(){
    //     return{
    //       data:"",
    //       dataVal:this.data 
    //     }
    // },
    // created(){
    //     console.log(this.commentList)
    // },
    // computed:{
    //     ...Vuex.mapState({
    //         commentList:state=>state.commentList
    //     })
    // },
    // methods:{
    //     ...Vuex.mapActions({
    //         handlSendUserCom:"commentStore/handlSendUserCom"
    //     }),
    //     handlSendComment(){
            
    //         this.dataVal = this.data
            
    //     }
        
    // },
    // watch:{
    //     commentList(newVal){
    //         console.log(newVal)
    //           this.commentList = newVal
    //         // console.log(this.dataVal)
    //     }
    // }

}
</script>
