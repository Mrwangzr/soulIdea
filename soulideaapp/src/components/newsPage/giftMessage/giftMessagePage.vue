<template>
  <transition name="move">
  <div class="all">
      <header-com :titleString="'打赏记录'"></header-com>
    <ul>
      <li v-for="item in messageList">
        <message-com :username="item.name" :type="'打赏了我'"  :content="item.content" :time="item.time"></message-com>
      </li>
    </ul>
  </div>
  </transition>
</template>

<script>
  import header from "../common/findNewFriendsHeader";
  import message from "../common/oneMessage"
    export default {
        name: "gift-message-page",
        components:{
          "header-com":header,
          "message-com":message
        },
      data(){
          return{
            messageList:[
              {
                name:"神仙",
                imgSrc:"",
                content:"仙女棒×1",
                time:"3-28"
              }
              ]
          }
      }
    }
</script>

<style scoped>
  .all{
    height: 100%;
  }
  .move-enter, .move-leave-to {
    transform: translateX(100%);
  }

  .move-enter-active, .move-leave-active {
    transition: all .3s;
  }
</style>
