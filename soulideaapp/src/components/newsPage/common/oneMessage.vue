<template>
  <div class="article">
    <div class="line">
      <img :src="imgSrc" alt="">
      <span>{{username}}</span>
      <span>{{type}}</span>
      <p>{{content}}</p>
    </div>
    <div>
       {{time}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "one-message",
    props:{
      imgSrc:String,
      username:String,
      time:String,
      type:String,
      content:String
    }
  }
</script>

<style scoped>
  .article {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    padding: 0 .4rem;
    justify-content: space-between;
    border-bottom: 1px solid #d6d6d6;
  }
  img{
    width: .6rem;
    height: .6rem;
    margin-right: .2rem;
  }
  .line{
    display: flex;
    align-items: center;
    font-size: 12px;
  }
  .line{
    font-size: 12px;
    color: #999;
  }
  span:first-of-type{
    font-weight: 600;
    margin-right: .1rem;
    font-size: 14px;
    color: #666666;
  }
  p{
    margin-left: .1rem;
    color: #999;
    width:3.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }
</style>
