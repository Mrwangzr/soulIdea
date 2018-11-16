<template>
    <div class="bubble">
      <img src="/static/image/newsPage/messagePage/logo.png" alt="">
      <div>
          <div class="textDiv">
            <p>
              ?
            </p>
          </div>
          <div class="triangleDiv"></div>
      </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  .bubble{
    display: flex;
    padding-left: .24rem;
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
      background: #fff;
      margin-left: .5rem;
      border-radius:.3rem ;
    }
  .textDiv p{
    line-height: 18px;
    font-size: 16px;
  }
  .triangleDiv{
    border-left:none ;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right:15px solid #ffffff ;
    position: absolute;
    top: .40rem;
    left: 1.50rem;
  }

</style>
