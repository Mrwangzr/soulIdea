<template>
    <div class="box">
      <div class="center">
        <img src="../../static/welcome/logo.png" alt="">
        <img src="../../static/welcome/text.png" alt="">
        <img src="../../static/welcome/line.png" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "welcome",
        created(){
          setTimeout(()=>{
            this.$router.push("/login");
          },3000);
        }
    }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100%;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .center{
    width:4rem ;
  }
  img{
    margin: 0 auto;
  }
  img:first-of-type{
    width:128px;
    height: 128px;
    margin-bottom: 22px;
  }
  img:nth-of-type(2){
    width: 125px;
    height: 20px;
    margin-bottom: 8px;
  }
  img:last-of-type{
    width: 200px;
    height:22px;
  }
</style>
