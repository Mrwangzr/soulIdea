<template>
<transition name="move">
    <ul>
      <li><span><img src="/static/image/newsPage/messagePage/logo.png" alt="">粉丝</span> <i class="iconfont icon-arrow-right"></i></li>
      <li><span><img src="/static/image/newsPage/messagePage/logo.png" alt="">@你 </span> <i class="iconfont icon-arrow-right"></i></li>
      <li><span><img src="/static/image/newsPage/messagePage/logo.png" alt="">打赏</span> <i class="iconfont icon-arrow-right"></i></li>
    </ul>
</transition>
</template>

<script>
    export default {
        name: "message-page"
    }
</script>

<style scoped>
  ul{
    padding: 0 .52rem;
    width: 100%;
    position: absolute;
  }
  ul img{
    width: .57rem;
    height: .57rem;
    margin-right: .3rem;
  }
 ul li{
    width: 100%;
    height: 1.3rem;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    align-items: center;
   font-size: 14px;
   color: #292929;
   justify-content: space-between;
   padding-left: .17rem;
  }
 ul li span{
   display: flex;
   align-items: center;
 }
 ul li:first-child{
    border-top:1px solid #dfdfdf ;
  }
  ul li i{
    float: right;
    font-size: 20px;
    color: #999999;
  }
  .move-enter,.move-leave-to{
    transform: translateX(-100%);
  }
  .move-enter-active,.move-leave-active{
    transition: all .3s;
  }
</style>
