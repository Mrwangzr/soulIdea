<template>
  <div>
      <component :is="comName"></component>
      <footer-com></footer-com>
  </div>
</template>

<script>
  import footerCom from "./footer";
  import homePage from "./homePage/homePage";
  import newsPage from "./newsPage/newsPage";
  import userInfoPage from "./userInfoPage/userInfoPage";

  //承载第一层页面
    export default {
      name: "first-level-page",
      created(){
        this.observer.$on("footChange",(val)=>{
          this.comName = val;
        });
      },
      data(){
        return{
          comName:""
        }
      },
      components:{
          "footer-com":footerCom,
          "homePage":homePage,
          "newsPage":newsPage,
          "userInfoPage":userInfoPage
        },
      methods:{
      }

    }
</script>

<style scoped>

</style>
