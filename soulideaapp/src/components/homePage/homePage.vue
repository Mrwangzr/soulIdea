<template>
    <div class=" page home_com">
        <div class="header">
        <div class="kongbai"></div>
        <div class="home_tab">
            <div><i class="iconfont icon-caidan"></i></div>
            <div :class="activeIndex == 1?'active':''" 
            @click="handleToggle(2)"
            >共享</div>
            <div :class="activeIndex == 2?'active':''" 
            @click="handleToggle(1)"
            >专属</div>
            <div><i class="iconfont icon-jia"></i></div>
        </div>
    </div>
        
    <component :is="comName"></component>



    </div>
</template>

<script>
import sharePage from "./sharePage";
import exclusivePage from "./exclusivePage";
export default {
  data() {
    return {
      comName: "sharePage-com",
      activeIndex: 2
    };
  },
  components: {
    "sharePage-com": sharePage,
    "exclusivePage-com": exclusivePage
  },
  methods: {
    handleToggle(val) {
      this.activeIndex = val;
      switch (this.activeIndex) {
        case 1:
          this.comName = "exclusivePage-com";
          break;
        case 2:
          this.comName = "sharePage-com";
          break;
        default:
          break;
      }
    },
   
  }
};
</script>

<style scoped>

.home_com{
  width:100%;
  height:100%;


}
.home_tab{
    height: .88rem;
    border-bottom:5px solid rgb(223, 223, 223);
    display: flex;
    justify-content: space-between;
}
.home_tab>div{
    width: 100%;
    text-align: center;
    line-height: .92rem;
    font-size: 17px;
}
.home_com > .header > .kongbai {
  width: 100%;
  height: 0.4rem;
  background: #fff;
}
.home_tab>.active{
    color:#aaaaaa;
    
}
.home_tab div:nth-child(1) i {
  font-size: 30px;
  padding-right:40px;
  line-height: 0.88rem;
}
.home_tab div:nth-child(4) i {
  font-size: 25px;
  line-height: 0.88rem;
  padding-left:40px;

}

/* .home_com {
  width: 100%;
  height: 13rem;
  background:darkorange;
}
.home_com > .header > .kongbai {
  width: 100%;
  height: 0.4rem;
  background: #fff;
}
.home_com > .header {
  width: 100%;
  height: 1.28rem;
  background: deeppink;
  
}
.home_com > .header > .home_tab {
  width: 100%;
  height: 0.88rem;
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  border-bottom:5px solid rgb(223, 223, 223)
}
.home_tab div:nth-child(1) i {
  font-size: 30px;
  padding-left: 0.24rem;
  line-height: 0.88rem;
}
.home_tab div:nth-child(4) i {
  font-size: 25px;
  line-height: 0.88rem;
  -right: 0.24rem;
}
.home_tab div:nth-child(2) {
  font-size: 0.34rem;
  line-height: 0.88rem;
  padding-left: 1.5rem;
  color: #292929;
}
.home_tab div:nth-child(3) {
  font-size: 0.34rem;
  line-height: 0.88rem;
  padding-right: 1.5rem;
  color: #aaaaaa;
}  */
</style>
