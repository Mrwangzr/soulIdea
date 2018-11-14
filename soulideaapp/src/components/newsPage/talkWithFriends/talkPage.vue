<template>
  <transition name="move">
    <div class="all">
      <talk-header-com :right="true"></talk-header-com>
        <div class="talk">
          <time-line-com></time-line-com>
          <friend-talk-bubble-com></friend-talk-bubble-com>
          <my-talk-bubble-com></my-talk-bubble-com>
        </div>
      <talk-input-com></talk-input-com>
    </div>
  </transition>
</template>

<script>
  //头部
  import talkHeader from './talkHeader';
  //输入框
  import talkInput from './talkInput';
  //我的气泡
  import myTalkBubble from './myTalkBubble';
  //别人的气泡
  import friendTalkBubble from './friendTalkBubble';
  //时间签
  import time from './timeLine';

  export default {
    name: "talk-page",
    components: {
      "talk-header-com": talkHeader,
      "talk-input-com": talkInput,
      "friend-talk-bubble-com":myTalkBubble,
      "my-talk-bubble-com":friendTalkBubble,
      "time-line-com":time
    }
  }
</script>

<style scoped>
  .all{
    height: 100%;
  }
  .talk{
    width: 100%;
    background: #e9e9e9;
    height: 100%;
  }
  .move-enter, .move-leave-to {
    transform: translateX(-100%);
  }

  .move-enter-active, .move-leave-active {
    transition: all .3s;
  }
</style>
