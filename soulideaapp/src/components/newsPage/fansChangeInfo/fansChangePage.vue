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
          <i class="fa fa-circle-o-notch fa-spin" v-if="loadingBottom"></i>
        </ul>
        <mark-com v-if="markFlag" :message="'最近还没有人关注你哦'"></mark-com>
      </div>
    </div>
  </transition>
</template>

<script>
  import header from '../common/findNewFriendsHeader';
  import oneMessage from "../common/oneMessage";
  import BScroll from 'better-scroll';
  import Vuex from "vuex";
  import mark from "../../common/nullPage";
  import {Indicator} from 'mint-ui';
  import { Toast } from 'mint-ui';

  export default {
    name: "fans-change-page",
    components: {
      "header-com": header,
      "one-message-com": oneMessage,
      "mark-com": mark
    },
    data() {
      return {
        pageNum: 0,
        //空页面
        markFlag: false,
        //读取条
        loading: null,
        loadingBottom:false
      }
    },
    methods: {
      ...Vuex.mapActions({
        //获取数据
        handleFansChangeList_getList: "handleFansChangeList_getList"
      }),
      //加载页面的回调
      handleMarkAndLoading(flag) {
        if (flag) {
          if (this.fansChange_list.length <= 0) {
            this.markFlag = true;
          }
          else {
            this.markFlag = false;
          }
          this.loading.close();
        }
        else{
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
        //数据列表
        fansChange_list: state => state.newsModulesStore.fansChange_list,
        //总页数
        fansChange_max: state => state.newsModulesStore.fansChange_max
      })
    },
    created() {
      //读取条
      this.loading = Indicator;
      this.loading.open();
      setTimeout(() => {
        this.loading.close();
      }, 5000);
      this.handleFansChangeList_getList({
        "pageNum": ++this.pageNum,
        "max": this.fansChange_max,
        "func": this.handleMarkAndLoading
      });

    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        pullUpLoad:300
      });
      this.scroll.on("pullingUp",()=>{
        console.log("上拉刷新");
        this.loadingBottom = true;
        this.handleFansChangeList_getList({
          "pageNum": ++this.pageNum,
          "max": this.fansChange_max,
          "func":()=>{
            this.scroll.finishPullUp();
          }
        })
      })
    },
    updated(){
      this.scroll.refresh();
      if(this.pageNum + 1 >= this.fansChange_max){
        this.loadingBottom = false;
      }
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
  .toast{
    padding: .5rem;
  }
</style>
