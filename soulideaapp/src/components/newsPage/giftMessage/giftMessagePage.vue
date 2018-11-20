<template>
  <transition name="move">
    <div class="all">
      <header-com :titleString="'打赏记录'"></header-com>
      <div class="wrapper" ref="wrapper">
        <ul class="content">
          <li v-for="item in giftChange_list">
            <message-com :username="item.username" :type="'打赏了我'" :content="item.name" :time="item.time" :num="1"
                         :imgSrc="'/static/image/newsPage/messagePage/logo.png'"></message-com>
          </li>
        </ul>
        <mark-com v-if="markFlag" :message="'最近还没有人打赏你哦'"></mark-com>
      </div>
    </div>
  </transition>
</template>

<script>
  import header from "../common/findNewFriendsHeader";
  import message from "../common/oneMessage";
  import Vuex from "vuex";
  import BScroll from "better-scroll";
  import mark from "../../common/nullPage";
  import {Indicator} from 'mint-ui';


  export default {
    name: "gift-message-page",
    components: {
      "header-com": header,
      "message-com": message,
      "mark-com": mark
    },
    data() {
      return {
        pageNum: 1,
        markFlag: false
      }
    },
    methods: {
      ...Vuex.mapActions({
        handleGiftChangeList_getList: "handleGiftChangeList_getList"
      }),
      //加载页面的回调
      handleMarkAndLoading(flag) {
        if (flag) {
          if (this.giftChange_list.length <= 0) {
            this.markFlag = true;
          }
          else {
            this.markFlag = false;
          }
          this.loading.close();
        }else{
          this.loading.close();
          Toast({
            message:"┭┮﹏┭┮获取记录失败",
            duration:1500,
            className:"toast"
          });
        }
      }

    },
    computed: {
      ...Vuex.mapState({
        giftChange_list: state => state.newsModulesStore.giftChange_list,
        giftChange_max: state => state.newsModulesStore.giftChange_max
      })
    },
    created() {
      this.loading = Indicator;
      this.loading.open();
      setTimeout(() => {
        this.loading.close();
      }, 5000);
      this.handleGiftChangeList_getList({
        pageNum: this.pageNum,
        max: this.giftChange_max,
        func: this.handleMarkAndLoading
      });
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
