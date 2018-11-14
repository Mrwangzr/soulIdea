<template>
  <div class="bubble">
    <div>
      <div class="textDiv">
        <p>
          我发了一条消息cnm你爱看不看
        </p>
      </div>
      <div class="triangleDiv"></div>
    </div>
    <img src="/static/image/newsPage/messagePage/logo.png" alt="">
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .bubble{
    display: flex;
    justify-content: flex-end;
    padding-right: .24rem;
    position: relative;
    padding-top: .2rem;
    overflow-wrap: break-word;
    text-align: left;
  }
  img{
    width: 1rem;
    height: 1rem;
  }
  .textDiv{
    max-width:4.2rem;
    padding: .37rem;
    background: #F6C45D;
    margin-right: .5rem;
    border-radius:.3rem ;
  }
  .textDiv p{
    line-height: 18px;
    font-size: 16px;
  }
  .triangleDiv{
    border-right:none ;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left:15px solid #F6C45D ;
    position: absolute;
    top: .40rem;
    right: 1.50rem;
  }

</style>
