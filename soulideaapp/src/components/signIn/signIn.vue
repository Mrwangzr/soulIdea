<template>
    <div id="signIn">
        <!-- 最顶部空余40px -->
       <div class="top"></div>
       <div class="signInName">
           <i class="iconfont icon-right" @click="handleBack()"></i>
           <p @click="hangleSignIn()">签到</p>
       </div>
       <!-- 签到 -->
       <div class="signInCon">
         <div class="signStar">
           <!-- <i :class="sign1==index?el-icon-star-on:el-icon-star-off"></i>
           <i :class="sign2==index?el-icon-star-on:el-icon-star-off"></i>
           <i :class="sign3==index?el-icon-star-on:el-icon-star-off"></i>
           <i :class="sign4==index?el-icon-star-on:el-icon-star-off"></i>
           <i :class="sign5==index?el-icon-star-on:el-icon-star-off"></i>
           <i :class="sign6==index?el-icon-star-on:el-icon-star-off"></i>
           <i :class="sign7==index?el-icon-star-on:el-icon-star-off"></i> -->

         </div>
            <el-button  class="signConOne" @click="handleClick()">签到</el-button>
           
       </div>
       <!-- 经验值 -->
       <div class="signInVal">
           <p>您的经验值</p>
           <!-- vvvvvv -->
           <p>1536</p>
           <p>普通用户</p>

       </div>
       <!-- 签到提示 -->
       <div class="sinInBottom">
           <div> 
               <i class="iconfont icon-xin"></i>
               <p>连续签到经验翻倍</p>
               
           </div>
           <div>
               <i class="iconfont icon-liwu"></i>
               <p>签到送金币</p>
           </div>
       </div>

    </div>
</template>

<script>
import Vuex from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      sign7:0,
      sign1:1,
      sign2:2,
      sign3:3,
      sign4:4,
      sign5:5,
      sign6:6,
      index:0

      
    };
  },
  created() {
  },
  computed: {
    ...Vuex.mapState({
      message: state => state.signInStore.message
    })
  },
  methods: {
    // 路由跳转，返回
    handleBack() {
      this.$router.back();
    },
      //点击签到，向后端请求
    signIn() {
      axios({
        method: "get",
        url: "Soulidea-1.0/user/signin"
      }).then((data) => {
       console.log(data)
      });
    },
    //点击签到，调用方法
    handleClick(){
      this.signIn();
      var data = new Date();
      var week = data.getDay();
      var month = data.getMonth();
      console.log(data);
      console.log(week);
      console.log(month);
    }
  }
};
</script>

<style>
#signIn {
  width: 100%;
  height: 100%;
  font-family: "PingFang-SC-Regular";
}
#signIn > .top {
  width: 100%;
  height: 0.4rem;
  background: #fff;
}
#signIn > .signInName {
  width: 100%;
  height: 0.88rem;
  background: #fff;
  position: relative;
}
#signIn > .signInName > p {
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 0.88rem;
  font-size: 16px;
  color: #292929;
  font-weight: bold;
}
#signIn > .signInName > i {
  display: block;
  position: fixed;
  font-size: 26px;
  left: 18px;
  top: 27px;
}
/*签到*/
#signIn > .signInCon {
  width: 100%;
  height: 4rem;
  background:url("../../../static/otherHomeImg/signIn_02.jpg") no-repeat ;
  background-size: 100%,4rem;
  margin-bottom: 10px;
  padding-top: 80px;
  
}
.signInCon .signStar{
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  }
  .el-icon-star-on{
    color: red;
  }
.el-button{
  margin-top: 20px;
}
 

/**/
#signIn > .signInVal {
  width: 100%;
  height: 3.77rem;
  background: #f6c45d;
  text-align: center;
}
#signIn > .signInVal > p {
  text-align: center;
}
#signIn > .signInVal > p:nth-child(1) {
  padding-top: 0.82rem;
  font-size: 14px;
}
#signIn > .signInVal > p:nth-child(2) {
  padding-top: 0.25rem;
  padding-bottom: 0.18rem;
  font-size: 23px;
  font-weight: bold;
}
#signIn > .signInVal > p:nth-child(3) {
  width: 1.61rem;
  height: 0.56rem;
  border: 1px solid #333;
  margin-left: 2.95rem;
  line-height: 0.56rem;
  font-size: 14px;
}
#signIn > .sinInBottom {
  width: 100%;
  height: 4.09rem;
  padding-top: 10px;
  background: #f8f8f8;
}
#signIn > .sinInBottom > div {
  width: 100%;
  height: 1.4rem;
  background: #fff;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #999;
}
#signIn > .sinInBottom > div > i {
  font-size: 30px;
  margin-left: 27px;
  margin-right: 14px;
  color: #f6c45d;
}



</style>
