<template>
    <div class="comment_footer">
        <div>
            <p><span 
                :id="praise == 1?'clickColor' :''"
                 class="iconfont icon-dianzan"
                 @click="handlPraise(1);handlLike(1)"

                >
                </span>
            </p>
            <em>点赞</em>
        </div>
        <div>
            <p> <span :id="praise == 2?'clickColor' :''"  class="iconfont icon-xin"  @click="handlPraise(2)"></span></p>
            
            <em>关注</em>
        </div>
        <div>
            <p><span :id="praise == 3?'clickColor' :''"  class="iconfont icon-speech"  @click="handlPraise(3);handlBoo()"></span></p>
             
            <em @click="handlComment();handlBoo()">评论</em>
        </div>
        <div>
            <p> <span :id="praise == 4?'clickColor' :''"  class="iconfont icon-zhuanfu"  @click="handlPraise(4)"></span></p>
            
            <em>转发</em>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex"
export default {
    data(){
        return{
            praise:0,
            booT:true
        }
                
    },
    methods:{
         ...Vuex.mapActions({
             handlLike:"commentStore/handlLike"
         }),
                
        handlBoo(){
            this.$emit("handlGetBoo",this.booT)
        },
        handlPraise(val){
            
            switch(val){
                case 1 :
                this.praise = val;
                break;
                case 2 :
                this.praise = val;
                break;
                case 3 :
                this.praise = val;
                break;
                case 4 :
                this.praise = val;
                break;
            }
            
        },
        handlComment(val){

        }
    }
}
</script>
<style>
.comment_footer div em{
    font-style: normal;
}
.comment_footer{
    width:100%;
    height:1rem;
    position:fixed;
    bottom:0;
    left:0;
    background:rgba(112, 110, 110, 0.5);
    display: flex;
    justify-content: space-around;
    align-items: center;
    color:white;
    
}
.comment_footer div p span{
    font-size:18px;
    
}
.comment_footer div p #clickColor{
    color:red;
}

</style>


