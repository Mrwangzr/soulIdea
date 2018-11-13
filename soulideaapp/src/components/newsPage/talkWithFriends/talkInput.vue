<template>
  <div>
    <i class="iconfont icon-yuyin"></i>
    <input type="text">
    <a href="##">发送</a>
  </div>
</template>

<script>
  export default {
    name: "talk-input"
  }
</script>

<style scoped>
  div {
    border-top: 1px solid #d6d6d6;
    position: absolute;
    height: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    padding: 0 .25rem;
  }
  input{
    width: 5.4rem;
    height: .7rem;
    border: 1px solid #cfcfcf;
    border-radius:14px;
    padding-left: 10px;
    outline: none;

  }
  i{
    font-size: 30px;
    color: #999999;
  }
  a{
    font-size: 14px;
    color: #F6C45D;
  }
</style>
