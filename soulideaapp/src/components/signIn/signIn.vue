<template>
    <div id="signIn">
        <!-- 最顶部空余40px -->
       <div class="top"></div>
       <div class="signInName">
           <i class="iconfont icon-right" @click="handleBack()"></i>
           <p>签到</p>
       </div>
       <!-- 签到 -->
       <div class="signInCon">

           <el-steps :active="activeA" finish-status="success">
                <el-step title="1天"></el-step>
                <el-step title="2天"></el-step>
                <el-step title="3天"></el-step>
                <el-step title="4天"></el-step>
                <el-step title="5天"></el-step>
                <el-step title="6天"></el-step>
                <el-step title="7天"></el-step>
            </el-steps>
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
      // 签到后激活相应的圈
         activeA: 0
    };
  },
  created() {
    //         axios({
    //             method:"get",//请求方式
    //             url:"",//请求接口
    //             data:{
    //                 id:""//传送的值
    //             },
    //             responseType:"json"//请求数据返回的数据类型
    //         }).then((data)=>{
    // //成功的回调
    //         })
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
    handleClick() {
      this.activeA = 6;
        // if (this.active++ > 6){
        //     this.active = 0;

        // } 
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
#signIn > .signInCon>.signConOne{
    margin: 10px 0 0 150px;
}
 #signIn > .signInCon .el-step__icon-inner{
   display: none;
 }
 /* 签到后的样式 */
  #signIn > .signInCon .el-step__head.is-success{
    color:red;
        border-color:red;
  }
  #signIn > .signInCon .el-step__title.is-success{
    color: red;
  }
  /* 签到前的样式 */
  #signIn > .signInCon .el-step__head.is-process{
    color: #ccc;
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
