<template>
<!-- 内容 -->
<transition name= "slide">
    <div class="content_comment">
        
        <!-- <router-viwe></router-viwe> -->
        <contentRewardTop-com></contentRewardTop-com>
        <contenPewardShow-com></contenPewardShow-com>
        <contentRewardFooter-com  @handlGetBoo="getval"></contentRewardFooter-com>
        <transition name="fade">
            <contentRewardInput-com v-show="Boo"></contentRewardInput-com>
        </transition>
        
    </div>
</transition>
    
</template>
<script>
import contentRewardTop from "./contentRewardTop"
import contenPewardShow from "./contenPewardShow"
import contentRewardInput from "./contentRewardInput"
import contentRewardFooter from "./contentRewardFooter"
export default {
    components:{
        "contentRewardTop-com":contentRewardTop,
        "contenPewardShow-com":contenPewardShow,
        "contentRewardInput-com":contentRewardInput,
        "contentRewardFooter-com":contentRewardFooter,
    },
    data(){
        return{
            Boo:false,
        }
    },
    methods:{
        getval(val){
            this.Boo = val
        }
    },
    // beforeRouteLeave(to,from,next){
    //     this.slidBoo = false;
    // }

   
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
.fade-enter,.fade-leave-to{
    /* opacity: 0; */
    transform: translateY(100%)
}
.fade-enter-active,.fade-leave-active{
    transition : all 300ms;
}
.slide-enter {
  transform: translateX(-100%);
}
.slide-enter-active {
  transition: all 300ms;
}
</style>
