<template>
<!-- 内容 -->
    <transition name="slide">
        <div class="content_comment">
        
        <!-- <router-viwe></router-viwe> -->
        <commentTop-com></commentTop-com>
        <commentShow-com></commentShow-com>
        <commentFooter-com  @handlGetBoo="getval"></commentFooter-com>
        <commentInput-com v-show="Boo"></commentInput-com>
    </div>
    </transition>
    
</template>
<script>
import commentTop from "./commentCommentTop/commentTop"
import commentShow from "./contentShow/contentShow"
import commentFooter from "./commentFooter/commentFooter"
import commentInput from "./commentFooter/commtentInput.vue/commintInput"
export default {
    components:{
        "commentTop-com":commentTop,
        "commentShow-com":commentShow,
        "commentFooter-com":commentFooter,
        "commentInput-com":commentInput,
    },
    data(){
        return{
            Boo:false
        }
    },
    methods:{
        getval(val){
            this.Boo = val
        }
    }
   
}
</script>
<style scoped>
html,body{
    height:100%;
    background:white;
    overflow: hidden;
}
     .content_comment{
         width:100%;
         height:100%;
         background:#ccc;
         padding-top:.4rem;
        
    }
.slide-enter {
  transform: translateX(-100%);
}
.slide-enter-active {
  transition: all 300ms;
}   
</style>
