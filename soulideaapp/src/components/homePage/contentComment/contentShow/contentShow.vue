<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
          <div class="content_show" v-for="(item,input) in userMessage" >
              <div class="content_myname">
                <div><img src="../../../../../static/commentImg/timg.jpg" alt=""></div>
                <div>
                    <p>{{item.name}}<span>{{item.grade}}</span> </p>
                    <p>今天<span>12：00</span></p>
                </div>

            </div>
            <div class="content_text">
                    <p>悲哉秋之为气也！萧瑟兮草木摇落而变衰，憭栗兮若在远行， 登山临水兮送将归 萧瑟：寂寞萧条的样子。燎栗：凄凉</p>
                </div>
            <div class="content_img">
                <div><img src="../../../../../static/commentImg/psa2cde6d664f13de9-2b3f-43b8-bc18-1764470132f5.png" alt=""></div>
                <div><img src="../../../../../static/commentImg/psa2cde6d664f13de9-2b3f-43b8-bc18-1764470132f5.png" alt=""></div>
                <div><img src="../../../../../static/commentImg/psa2cde6d664f13de9-2b3f-43b8-bc18-1764470132f5.png" alt=""></div>
                <div><img src="../../../../../static/commentImg/psa2cde6d664f13de9-2b3f-43b8-bc18-1764470132f5.png" alt=""></div>
                <div><img src="../../../../../static/commentImg/psa2cde6d664f13de9-2b3f-43b8-bc18-1764470132f5.png" alt=""></div>
                <div><img src="../../../../../static/commentImg/psa2cde6d664f13de9-2b3f-43b8-bc18-1764470132f5.png" alt=""></div>
            </div>
            <div class="content_visit">
                <div  ><i  class="iconfont icon-yanjing "></i><em>{{item.pv}}万</em> </div>
                <div  ><i  class="iconfont icon-dianzan "></i><em>{{item.praise}}万</em></div>
            </div>
            <commentList-com></commentList-com>
            <commentList-com></commentList-com>
            <commentList-com></commentList-com>
            <commentList-com></commentList-com>
            <commentList-com></commentList-com>
          </div>
            
            
        </div>
    </div>
   
</template>
<script>
import BScroll from "better-scroll";
import Vuex from "vuex";
import commentList from "../commentList/commentList";

export default {
  data() {
    return {
      pageNum:0,
    };
  },

  created() {
    console.log(this.userMessage);
    this.handlGetUserMsg();
    // console.log(this.userMessage);
  },
  components: {
    // "commentShow-com":commentShow,
    "commentList-com": commentList
  },
  computed: {
    ...Vuex.mapState({
      userMessage: state => state.commentStore.userMessage
      //  user:state=>state.commentStore.user
    })
  },

  methods: {
    ...Vuex.mapActions({
      handlGetUserMsg: "commentStore/handlGetUserMsg",
      handlCommentNum:"commentStore/handlCommentNum"
    })
    // ...Vuex.mapMutations({
    //     handlGetUserMsg:"handlGetUserMsg"
    // })
  },
  mounted() {
    //第一个参数是最外面的大盒子第二个参数是配置项
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      //pullUpLoad 设置为true 开启上拉加载功能,设置threshold:50 意思是上拉到50时 执行pullingUp
        pullUpLoad:{
            threshold:50 
        }
    });
     //当用户上拉时触发事件 第一个参数：pullingUp上拉加载必须配置pullUpLoad：true 时候开启上拉加载
    this.scroll.on("pullingUp",()=>{
      this.handlCommentNum(++this.pageNum)
    })
  },
  updated(){
    //重新计算高度
    // this.scroll.refresh()
    //当数据加载完毕后通知better-scroll停止加载数据
    // this.scroll.finishPullUp()
  }
  // updated() {
  //   this.scroll.refresh();
  // }
};
</script>
<style scoped>
i em {
  font-style: normal !important;
}
.wrapper {
  overflow: hidden;
  height: 100%;
  position: absolute;
    /* z-index: 1; */
    top:1.28rem;
    bottom: .98rem;
    width:100%;
    overflow: hidden;
}
/* .content_show {
  width: 100%;
  height: 100%;
  margin-top: 0.1rem;
  background: white;
  
} */
.content_show .content_myname {
  width: 100%;
  height: 1.38rem;
  display: flex;
  align-items: center;
  padding-left: 0.24rem;
  margin-top: 0.69rem;
}
.content_show .content_myname div:nth-child(1) {
  width: 0.88rem;
  height: 0.9rem;
  margin-right: 0.22rem;
}
.content_show .content_myname div:nth-child(1) img {
  width: 0.88rem;
  height: 0.9rem;
}
.content_show .content_myname div:nth-child(2) p:nth-child(1) {
  font-size: 14px;
  font-family: PingFang-SC-Bold;
  color: #292929;
  font-weight: 600;
}
.content_show .content_myname div:nth-child(2) p:nth-child(2) {
  font-size: 12px;
  color: #969696;
}
.content_show .content_text {
  width: 100%;
  height: 1rem;
  padding-left: 0.25rem;

  margin-bottom: 0.3rem;
}
.content_show .content_text p {
  width: 6.78rem;
  height: 1rem;
  white-space: initial;
  /* overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; */
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.content_show .content_img {
  width: 100%;
  height: 4.3rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.content_show .content_img div {
  width: 2.02rem;
  height: 2.02rem;
  /* float:left; */
}
.content_show .content_img div img {
  width: 100%;
  height: 100%;
}
.content_show .content_visit {
  width: 100%;
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.24rem 0.2rem 0.24rem;
}
.content_show.content_visit div {
  height: 0.32rem;
  width: 100%;
}
.content_show .content_visit div i {
  font-size: 0.1rem;
  line-height: 0.32rem;
}
.content_show .content_visit div em {
  font-style: normal;
}
</style>