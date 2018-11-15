<template>
  <div class="all">
    <div class="top">
    <div class="info">
      <img :src="imgSrc" alt="">
      <span>{{username}}</span>
      <span>{{type}}</span>
    </div>
    <div class="time">
       {{time}}
    </div>
    </div>
    <p>{{content}}</p>
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
  .all{
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #d6d6d6;
    height: 1.6rem;
  }
  .top {
    width: 100%;
    height: .8rem;
    display: flex;
    align-items: center;
    padding: 0 .4rem;
    justify-content: space-between;
  }
  img{
    width: .6rem;
    height: .6rem;
    margin-right: .2rem;
  }
  .info{
    display: flex;
    align-items: center;
    font-size: 12px;
  }
  .info span{
    font-size: 12px;
    color: #666;
  }
  span:first-of-type  {
    font-weight: 600;
    margin-right: .1rem;
    font-size: 14px;
  }
  p{
    color: #999;
    width:5.5rem;
    line-height: .7rem;
    flex-direction: column;
    justify-content: center;
    height: .7rem;
    text-align: left;
    margin: -0.1rem 0 0 1.2rem;
    padding-left: .3rem;
    background: #efefef;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
