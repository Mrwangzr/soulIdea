<template>
    <div class="commentReward_footer">
        <div>
            <p><span class="iconfont icon-liwu"></span></p>
             
            <em @click="handlComment();handlBoo()">打赏</em>
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
        handlComment(val){

        }
    }
}
</script>
<style>
.commentReward_footer div em{
    font-style: normal;
}
.commentReward_footer{
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
.commentReward_footer div p span{
    font-size:18px;
    
}
.commentReward_footer div p #clickColor{
    color:red;
}

</style>

