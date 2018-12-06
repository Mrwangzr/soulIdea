<template>
    <div id="otherUserTwo">
        <!-- 头部空白 -->
        <!-- name -->
        <div class="pp">
            <div class="name">
                <i class="iconfont icon-right" @click="handleBack()"></i>
                《爱美丽》插画集
            </div> 
        </div>
        <!-- 插画集 -->
        <div class="wrapper" ref="wrapper">
            <div class="con content">
                <div class="pic" v-for="(item,index) in arr"  @click="handleToThree(item.id)">
                    <img :src="item.head" alt="">
                    <div class="one">
                        <p>{{item.name}}</p>
                        <div class="oneR">
                            <p><i class="iconfont icon-yanjing1"></i><i>{{item.seen}}</i></p>
                            <p><i class="iconfont icon-dianzan"></i> <i>{{item.great}}</i></p>
                        </div>
                    </div>
                    <div class="head">
                        <img :src="item.uhead" alt="">
                        <p>{{item.uname}}</p>
                    </div>      
                    <div class="dis">
                        <p>简介:</p>
                        <p>{{item.contant}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
import axios from "axios";
import Bscroll from "better-scroll";
export default {
  data() {
    return {
      arr: [],
      name: ""
    };
  },
  created() {
    console.log(this);
    this.getList();
  },
  mounted() {
    var scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      pullUpLoad: true
    });
  },
  computed: {},
  methods: {
    getList() {
      axios({
        method: "get",
        url: "Soulidea-1.0/showreel/getshowreel?id=6&orderby=1"
      }).then(data => {
        this.arr = data.data.data;
        // console.log("111111111111")
        console.log(data);
      });
    },
    handleBack() {
      this.$router.back();
    },
    handleToThree(id) {
      //路由跳转并传id值
      this.$router.push({ name: "otherUserThree", params: { id: id } });
    }
  }
};
</script>

<style scoped>
* {
  font-family: "PingFangSC-Regular";
}
#otherUserTwo {
  width: 100%;
  height: 100%;
}

/* 头部空白*/

.name {
  width: 100%;
  height: 1.28rem;
  text-align: center;
  line-height: 0.88rem;
  padding-top: 0.4rem;
  position: absolute;
  top: 0;
  font-size: 20px;
  background: #fff;
  z-index: 1000;
}
.name i {
  position: absolute;
  display: block;
  font-size: 26px;
  left: 10px;
}
/* 插画集 */
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-top: 1.28rem;
}
.content {
}

.con {
  padding-top: 1.5rem;
  background: #f0f0f0;
}
.con > .pic {
  padding: 12px 12px;
  background: #fff;
  margin-bottom: 10px;
}
.con > .pic > img {
  width: 7.02rem;
  height: 4.56rem;
}
.con > .pic > .one {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  margin-bottom: 8px;
}
.con > .pic > .one > p {
  font-size: 18px;
  color: #262525;
  font-weight: bold;
}
.con > .pic > .one > .oneR {
  display: flex;
  justify-content: space-between;
  color: #999;
}
.con > .pic > .one > .oneR > p > i {
  font-style: normal;
}
.con > .pic > .one > .oneR > p > i:nth-of-type(1) {
  font-size: 18px;
  padding-right: 5px;
}
.con > .pic > .one > .oneR > p > i:nth-of-type(2) {
  font-size: 14px;
}
.con > .pic > .one > .oneR > p:nth-child(1) {
  padding-right: 15px;
}
.con > .pic > .head {
  display: flex;
  align-items: center;
  margin-bottom: 9px;
  color: #999;
}
.con > .pic > .head > img {
  width: 0.45rem;
  height: 0.45rem;
}
.con > .pic > .head > p {
  padding-left: 5px;
}
.con > .pic > .dis {
  color: #494747;
  font-size: 16px;
  line-height: 25px;
  width: 100%;
  padding-bottom: 15px;
  text-align: left;
}
.con > .pic > .dis dd {
  width: 100%;
  height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
