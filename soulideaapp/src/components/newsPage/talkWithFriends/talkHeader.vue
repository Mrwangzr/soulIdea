<template>
  <header>
    <i class="iconfont icon-right"></i>
    <span>用户名</span>
    <span>
      <i class="iconfont icon-icon-list-horizontal" v-if="right"></i>
    </span>

  </header>
</template>

<script>
    export default {
        name: "talk-header",
        props:{
          right:Boolean
        }
    }
</script>

<style scoped>
  header{
    padding: .4rem .34rem 0;
    display: flex;
    height: 1.28rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d6d6d6;
  }
  header span:first-of-type{
    font-size: 16px;
    color: #292929;
    font-weight: 600;
  }
  header i{
    font-size: 22px;
    color: #999;
    font-weight: 600;
  }
</style>
