<template>
    <div class=" page home_com">
        <div class="header">
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
  .header{
    width:100%;
    height:0.88rem;
    line-height:0.88rem;
    position: relative;
    margin-top:0.4rem
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


</style>
