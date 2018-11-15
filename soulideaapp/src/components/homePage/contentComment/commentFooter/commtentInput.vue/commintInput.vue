<template>
    <div class="comment_input">
        <div id="comment_input">
            <p><input type="text" placeholder="请说点什么吧！" v-model="data"><button @click="handlSendUserCom(data)">发送</button></p>
        </div>
        
    </div>
</template>
<style>
    .comment_input{
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
    }
</style>
<script>
import Vuex from "vuex"
export default {
    data(){
        return{
          data:"",
          dataVal:this.data 
        }
    },
    created(){
        console.log(this.commentList)
    },
    computed:{
        ...Vuex.mapState({
            commentList:state=>state.commentList
        })
    },
    methods:{
        ...Vuex.mapActions({
            handlSendUserCom:"commentStore/handlSendUserCom"
        }),
        // handlSendComment(){
            
        //     this.dataVal = this.data
            
        // }
        
    },
    watch:{
        commentList(newVal){
            console.log(newVal)
              this.commentList = newVal
            // console.log(this.dataVal)
        }
    }
}
</script>
