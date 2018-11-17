<template>
  <footer>
    <div  @click="handleFootClick('homePage')" :class="this.arrClass['homePage']">
        <i class="iconfont icon-home" :class="this.arrClass['homePage']"></i>
        <span>首页</span>
    </div>

    <div  @click="handleFootClick('newsPage')" :class="this.arrClass['newsPage']">
        <i class="iconfont icon-speech" :class="this.arrClass['newsPage']"></i>
        <span>聊天</span>
    </div>

    <div  @click="handleFootClick('userInfoPage')" :class="this.arrClass['userInfoPage']">
        <i class="iconfont icon-yonghu" :class="this.arrClass['userInfoPage']"></i>
        <span>我的</span>
    </div>
  </footer>
</template>
<script>
  //底部导航栏
  export default {
    created() {

    },
    data(){
      return {
        arrClass: {
          homePage:"inPage",
          newsPage:"",
          userInfoPage:""
        },
        }
      },
    methods: {
      //处理点击
      handleFootClick(val) {
        //更换颜色
        for(let key in this.arrClass){
            this.arrClass[key] = "";
        }
        this.arrClass[val] = "inPage";
        this.observer.$emit("footChange", val);
      }
    }
  }
</script>

<style scoped>
  footer {
    width: 100%;
    height: 1rem;
    position: absolute;
    bottom: 0;
    display: flex;
    background: #fff;
    border-top:1px solid #efefef ;
    z-index: 1000;
  }

  div {
    flex: 1;
    display: flex;
    font-size: 10px;
    color: #898989;
    justify-content: center;
    align-items: center;
    padding-top: 0.2rem;
    flex-direction: column;
  }

  i {
    color: #898989;
    font-size: 23px;
  }

  .inPage{
    color: #F6C45D;
  }
</style>
