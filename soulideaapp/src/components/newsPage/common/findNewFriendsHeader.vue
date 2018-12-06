<template>
  <div>
    <i class="iconfont icon-right" @click="handleBackBtn"></i>
    <span>{{titleString}}</span>
    <span>
    </span>

  </div>
</template>

<script>
  export default {
    props:{
      titleString:String
    },
    methods:{
      handleBackBtn(){
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  div{
    width: 100%;
    padding: .44rem .34rem 0;
    display: flex;
    height: 1.28rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d6d6d6;
    background: #fff;
  }
  div span:first-of-type{
    font-size: 16px;
    color: #292929;
    font-weight: 600;
  }
  div i{
    font-size: 22px;
    color: #999;
    font-weight: 600;
  }
</style>
