<template>
  <div class="all">
    <img src="/static/image/newsPage/messagePage/logo.png" alt="">
    <div class="info">
      <p>用户名</p>
      <p>个签</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "search-user-by-name"
    }
</script>

<style scoped>
  .all{
    background: #ffffff;
    width: 100%;
    height: 1.6rem;
    margin-top: .1rem;
    padding: 0 .6rem;
    display: flex;
    align-items: center;
    border:1px solid #efefef;
    border-left: none;
    border-right: none;
  }
  img{
    width: 1.1rem;
    height: 1.1rem;

  }
  .info{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: .8rem;
    margin-left: .2rem;
  }
  p{
    text-align: left;
    width: 4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p:first-of-type{
    font-size: 14px;
    font-weight:600;
    color: #666666;
  }
  p:last-of-type{
    color: #999;
  }

</style>
