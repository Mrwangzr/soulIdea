<template>
    <div  class="otherUserFour">
      
        <div class="con">
            <div class="prImg" @click="handleHide()">
                 <i class="iconfont icon-right" @click="handle()"></i>
                <img :src="img" alt="">
            </div>
            <!-- <transition name="hide"> -->
                <div class="mark" v-show="show">
                    
                </div>
                <div class="text" v-show="show">
                    <i></i>
                    在漫长的软件发展中，界面设计工作一直没有被重视,
                    做界面设计的人也别贬义称为“美工”。其实软件界面设
                    就像工业产品中的工业造型设计一样，是产品的重要卖
                    一个友好美观的界面会给人带来舒服的视觉享受，拉近...
                </div>
            <!-- </transition> -->
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      show: true,
      img:"",
    };
  },
  //接收图片的id值
  // props: ["id"],
  watch:{
          "$route"(to,from){
            //接收otherUserTwo路由传来的作品集的id值，并传给后端
              this.id = to.params.id;
              // this.name = to.params.name;
              // console.log(this.id);
              

          }

      },
  created() {
      this.getDetails();
      console.log(this.id);
  },
  computed: {},
  methods: {
    handleHide() {
      this.show = !this.show;
      console.log(this.id);
    },
    handle() {
      this.$router.back();
    },
    getDetails() {
      axios({
        method: "get",
        // url: "Soulidea-1.0/product/getphotoinfo?id=" + this.id
        url: "Soulidea-1.0/product/getphotoinfo?id=6"
      }).then((data) => {
        console.log(data.data.data);
        this.img = "http://" + data.data.data.src
      });
    },
    
  }
};
</script>

<style>
.otherUserFour {
  width: 100%;
  height: 100%;
  /* background: pink; */
}
.otherUserFour .con {
  width: 100%;
  height: 100%;
  position: relative;
}
.otherUserFour .con .prImg {
  width: 100%;
  height: 100%;
  position: relative;
}
.prImg i {
  position: fixed;
  display: block;
  left: 15px;
  top: 15px;
  z-index: 1000;
  font-size: 24px;
  color: #000;
}
/*.otherUserFour>.con>*/
.prImg>img {
  width: 100%;
  height: 100%;
  /* height: 13.34rem; */
}
.otherUserFour .con .mark {
  width: 100%;
  height: 2.84rem;
  position: absolute;
  bottom: 0px;
  background: #333;
  opacity: 0.3;
}
.otherUserFour .con .text {
  width: 100%;
  height: 2.84rem;
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 14px;
  line-height: 30px;
  padding: 25px 25px 15px 25px ;
  overflow: hidden;
  text-overflow: ellipsis;
}
.otherUserFour .con .text i{
    display: block;
    width: 20px;
    height: 20px;
    background:url("../../../static/four/logo.png") no-repeat ;
    background-size: 20px 20px;
    position: absolute;
    top: 5px;
    left: 20px;
}
</style>
