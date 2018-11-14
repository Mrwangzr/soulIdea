<template>
  <transition name="move">
    <div class="all">
      <header-com :titleString="'@ 我'"></header-com>
      <div class="wrapper" ref="wrapper">
        <ul class="content">
          <li v-for="item in aiteChange_list">
            <message-com :username="item.name" :imgSrc="item.head" :time="item.time" :content="item.content"
                         :type="'@了我'"></message-com>
          </li>
        </ul>
      </div>
    </div>

  </transition>
</template>

<script>
  import header from "../common/findNewFriendsHeader";
  import message from "../common/oneMessage-aite";
  import BScroll from "better-scroll";
  import Vuex from "vuex";
  export default {
    name: "aite-message-page",
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
        handleAiteChangeList_getList:"handleAiteChangeList_getList",
      })
    },
    computed:{
      ...Vuex.mapState({
        aiteChange_list:state=>state.newsModulesStore.aiteChange_list,
        aiteChange_max:state=>state.newsModulesStore.aiteChange_max
      })
    },
    created(){
      this.handleAiteChangeList_getList({pageNum:this.pageNum,max:this.aiteChange_max})
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{

      });
  }

  }
</script>

<style scoped>
  .all {
    height: 100%;
    position: relative;
  }
  .wrapper {
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
