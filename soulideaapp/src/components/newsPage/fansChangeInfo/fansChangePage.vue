<template>
  <transition name="move">
    <section>
      <header-com :titleString="'粉丝记录'"> </header-com>
      <ul>
        <li v-for="item in messageList">
          <one-message-com :username="item.name" :imgSrc="item.imgSrc" :time="item.time" :type="'关注了我'"></one-message-com>
        </li>
      </ul>
    </section>
  </transition>
</template>

<script>
  import header from '../common/findNewFriendsHeader';
  import oneMessage from "../common/oneMessage";
  export default {
    name: "fans-change-page",
    components:{
      "header-com":header,
      "one-message-com":oneMessage
    },
    data(){
      return{
        messageList:[
          {
            name:"神仙",
            imgSrc:"/static/image/newsPage/messagePage/logo.png",
            time:"3-28"
          },
          {
            name:"神仙1",
            imgSrc:"/static/image/newsPage/messagePage/logo.png",
            time:"3-27"
          },
          {
            name:"神仙2",
            imgSrc:"/static/image/newsPage/messagePage/logo.png",
            time:"3-26"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  section{
    height: 100%;
  }
  .move-enter, .move-leave-to {
    transform: translateX(100%);
  }

  .move-enter-active, .move-leave-active {
    transition: all .3s;
  }
</style>
