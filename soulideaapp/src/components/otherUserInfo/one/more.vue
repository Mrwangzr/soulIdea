<template>
    <div id="prMore">
         <!-- 容器 -->
        <div class="con">

            <!-- 作品集 -->
            <div class="wrapper" ref="wrapper">
                <div class="proCon content">
          <!-- 创作个数 -->
                      <div class="proNum">
                          <p>共上传20个创作</p>
                          <p @click="handleTime()">时间更新</p>
                      </div>
                    <!-- 作品 -->
                    <div class="pr" v-for="(item,index) in arr">
                        <div class="one">
                            <img :src="item.head"  @click="handle(item.id,item.name)">
                        </div>
                        <div class="two">
                            <p>{{item.name}}</p>
                        </div>
                        <div class="three">
                           {{item.name}}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from "better-scroll";
import axios from "axios";
export default {
  data(){
    return{
      arr:[]
    }
  },
  created() {
    this.getMore();
  },
  //接收父组件传的值id，并将该值发给后端
   props:["val"],



  methods: {
    handle(val,name) {
      //点击图片进行跳转，并传值，图片的id
      this.$router.push({name:"otherUserTwo",params:{id:val,name:name}});
    },
    handleTime() {
      //进行axios请求，按照时间进行请求
      // console.log("1");
    },
    getMore() {

      axios({
        method: "get",
        //传id值
        // url: "Soulidea-1.0/showreel/getshowreel?id=val&orderby=1"
        url: "Soulidea-1.0/showreel/getshowreel?id=6&orderby=1"
      }).then(data => {
        this.arr = data.data.data;
      });
    }
  },
  mounted() {
    var scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      pullUpLoad: true
    });
  }
};
</script>

<style scoped>
/*创作个数*/
* {
  font-family: "PingFangSC-Regular";
}
#prMore {
  padding: 0 12px;
  overflow: hidden;
  height: 600px;
}
#prMore .proNum {
  border-radius: 10px;
  width: 7.01rem;
  height: 0.73rem;
  background: #e7e7e7;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
#prMore .proNum p {
  height: 0.73rem;
  line-height: 0.73rem;
  padding: 0 12px;
}
#prMore .proNum p:nth-of-type(2) {
  /* background: #797979; */
  border-radius: 5px;
}
#prMore .proNum p:nth-of-type(1) {
  color: #797979;
}
/*作品集*/

.wrapper {
  width: 100%;
  /* height: 100%; */
  height: 3rem;
  /* overflow: hidden; */
  background: #fff;
}

#prMore .proCon {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  background: #fff;
}
#prMore .con .more {
  height: 64px;
}
#prMore .con .more img {
  margin: 0 auto;
  width: 20px;
  height: 30px;
}
#prMore .con .more p {
  text-align: center;
  line-height: 14px;
  font-size: 14px;
  margin-top: 10px;
}
#prMore .proCon .more img {
  width: 25px;
  height: 40px;
}
#prMore .proCon .pr {
  width: 100%;
  height: 6.49rem;
  overflow: hidden;
}
#prMore .proCon .pr img {
  width: 100%;
  height: 4.68rem;
}
#prMore .proCon .pr .two {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  align-items: baseline;
  font-family: "PingFangSC-Regular";
}
#prMore .proCon .pr .two p:nth-child(1) {
  font-size: 18px;
  color: #1e1c1c;
}
#prMore .proCon .pr .two p:nth-child(2) {
  font-size: 14px;
  color: #797979;
}
#prMore .proCon .pr .two i {
  font-style: normal;
}
#prMore .proCon .pr .three {
  font-size: 12px;
  line-height: 12px;
  padding-top: 8px;
  color: #797979;
  text-align: left;
}
</style>
