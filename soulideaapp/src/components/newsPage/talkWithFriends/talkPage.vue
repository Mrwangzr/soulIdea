<template>
  <transition name="move">
    <div>
      <talk-header-com :right="true"></talk-header-com>
        <div class="talk"></div>
      <talk-input-com></talk-input-com>
    </div>
  </transition>
</template>

<script>
  //头部
  import talkHeader from './talkHeader';
  //输入框
  import talkInput from './talkInput'

  export default {
    name: "talk-page",
    components: {
      "talk-header-com": talkHeader,
      "talk-input-com": talkInput
    }
  }
</script>

<style scoped>
  .talk{
    width: 100%;
    background: #d6d6d6;
  }
  .move-enter, .move-leave-to {
    transform: translateX(-100%);
  }

  .move-enter-active, .move-leave-active {
    transition: all .3s;
  }
</style>
