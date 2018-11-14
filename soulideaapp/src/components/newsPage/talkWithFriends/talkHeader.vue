<template>
  <div class="all">
    <i class="iconfont icon-right"></i>
    <span>用户名</span>
    <span>
      <i class="iconfont icon-icon-list-horizontal" v-if="right"></i>
    </span>

  </div>
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
  .all{
    padding: .4rem .34rem 0;
    display: flex;
    height: 1.28rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d6d6d6;
  }
  .all span:first-of-type{
    font-size: 16px;
    color: #292929;
    font-weight: 600;
  }
  .all i{
    font-size: 22px;
    color: #999;
    font-weight: 600;
  }
</style>
