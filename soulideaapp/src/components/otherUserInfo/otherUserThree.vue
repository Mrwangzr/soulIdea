<template>
    <div class="otherUserThree">
        <div class="head">
            <div class="name">
                <i class="iconfont icon-right" @click="handle()"></i>
                {{name}}
            </div>
        </div>
        <div class="wrapper" ref="wrapper">
            <div class="content">
                <img v-for="(item,index) in arr " :src="item.src" alt="" @click="handleDetail()">
                <img v-for="(item,index) in arr " :src="item.src" alt="" @click="handleDetail()">
                
                <div class="bottom">
                    <p><i class="iconfont icon-dianzan"></i> <i>{{seen}}</i> </p>
                    <p><i class="iconfont icon-qiandai"></i> <i>{{great}}</i></p>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script >
import axios from "axios";
import Vuex from "vuex";
import Bscroll from "better-scroll";
export default {
  data() {
    return {
      arr: [],
      name: "",
      seen:"",
      great:""
    };
  },
  created() {
    this.getImg();
    // console.log(this.id);
    // alert(this.id);
  },
  mounted() {
    var scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      pullUpLoad: true
    });
  },
  //接收otherUserTwo传的id值
  props:["id"],
  methods: {
    handle() {
      this.$router.back();
    },
    handleDetail(val) {
        // this.$router.push({ name: "otherUserFour", params: { id: val } });
        this.$router.push({ name: "otherUserFour"});

    },

    getImg() {
      axios({
        method: "get",
        url: "Soulidea-1.0/product/getproduct/2"
      }).then((data) => {
          console.log(data)
        this.name = data.data.data.name;
        this.seen = data.data.data.seen;
        this.great = data.data.data.great;
        this.arr = data.data.data.src;
        this.arr.filter(item => {
          item.src = "http://" + item.url;
        });
        console.log(this.arr);
      });
    }
  }
};
</script>

<style scoped >
* {
  font-family: "PingFangSC-Regular";
}
.otherUserThree {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.otherUserThree .head {
  padding-top: 0.4rem;
  width: 100%;
  height: 1.28rem;
  background: #fff;
  line-height: 0.88rem;
  font-size: 18px;
  color: #000;
  position: relative;
}
.otherUserThree .head i {
  display: block;
  position: absolute;
  left: 10px;
  font-size: 24px;
}
.wrapper {
  width: 100%;
  flex: 1;
  overflow: hidden;
  /* margin-bottom: 20px; */
}
.wrapper .content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 15px;
}
.wrapper .content img {
  width: 3.36rem;
  height: 6.08rem;
  margin-bottom: 15px;
}
.bottom{
    display: flex;
    justify-content: space-around;
    /* margin-top: 30px; */
    width: 100%;

}
.bottom p{
    width: 2.83rem;
    height: .75rem;
    border: 1px solid #ccc;
    text-align: center;
    line-height: .75rem;
    font-size: 16px;
    color: black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
}
.bottom p:nth-of-type(1){
    background: #EB0011
    
}
.bottom p:nth-of-type(2){
    background: #EB6100
    
}
.bottom p i{
    font-style: normal;
}
.bottom p i:nth-of-type(1){
    margin-right: 15px;
    font-size: 18px;
}
</style>
