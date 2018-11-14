<template>
  <transition name="move">
    <div class="all">
      <header-com :titleString="'粉丝记录'"></header-com>
      <div class="wrapper" ref="wrapper">
        <ul class="content">
          <li v-for="item in fansChange_list">
            <one-message-com :username="item.username" :imgSrc="item.head" :time="item.time"
                             :type="'关注了我'"></one-message-com>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
  import header from '../common/findNewFriendsHeader';
  import oneMessage from "../common/oneMessage";
  import BScroll from 'better-scroll';
  import Vuex from "vuex";

  export default {
    name: "fans-change-page",
    components: {
      "header-com": header,
      "one-message-com": oneMessage
    },
    data() {
      return {
        pageNum: 1,
      }
    },
    methods:{
      ...Vuex.mapActions({
        handleFansChangeList_getList: "handleFansChangeList_getList"
      })
    },
    computed: {
      ...Vuex.mapState({
        fansChange_list: state => state.newsModulesStore.fansChange_list,
        fansChange_max:state => state.newsModulesStore.fansChange_max
      })
    },
    created() {
      this.handleFansChangeList_getList({"pageNum":this.pageNum,"max":this.fansChange_max});
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {});
    }
  }
</script>

<style scoped>
  .all {
    height: 100%;
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
