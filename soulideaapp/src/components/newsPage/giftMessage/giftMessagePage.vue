<template>
  <transition name="move">
    <div class="all">
      <header-com :titleString="'打赏记录'"></header-com>
      <div class="wrapper" ref="wrapper">
        <ul class="content">
          <li v-for="item in giftChange_list">
            <message-com :username="item.username" :type="'打赏了我'" :content="item.name" :time="item.time" :num="1" :imgSrc="'/static/image/newsPage/messagePage/logo.png'"></message-com>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
  import header from "../common/findNewFriendsHeader";
  import message from "../common/oneMessage";
  import Vuex from "vuex";
  import BScroll from "better-scroll";

  export default {
    name: "gift-message-page",
    components: {
      "header-com": header,
      "message-com": message
    },
    data() {
      return {
        pageNum:1
      }
    },
    methods:{
      ...Vuex.mapActions({
        handleGiftChangeList_getList:"handleGiftChangeList_getList"
      })
    },
    computed:{
      ...Vuex.mapState({
        giftChange_list:state=>state.newsModulesStore.giftChange_list,
        giftChange_max:state=>state.newsModulesStore.giftChange_max
      })
    },
    created() {
      this.handleGiftChangeList_getList({pageNum:this.pageNum,max:this.giftChange_max});
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{

        });
    }
  }
</script>

<style scoped>
  .all {
    height: 100%;
  }
  .wrapper{
    width: 100%;
    position: absolute;
    top: 1.28rem;
    bottom: 0;
    z-index: 1;
    overflow: hidden;
  }

  .move-enter, .move-leave-to {
    transform: translateX(100%);
  }

  .move-enter-active, .move-leave-active {
    transition: all .3s;
  }
</style>
