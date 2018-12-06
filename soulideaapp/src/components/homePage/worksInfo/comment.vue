<template>
    <div class="all">
        <div class="head">
          <img :src="item.head | urlSet" alt="">
        </div>

        <div class="right">
          <div class="top">
            <span>{{item.name}} <b>v.{{item.level}}</b></span>
            <span>{{item.time}}</span>
          </div>

          <p class="content">
            {{item.contant}}
          </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "comment",
      data(){
          return{

          }
      },
      props:{
          item:Object
      }
    }
</script>

<style scoped>
  .all{
    width: 100%;
    background: #ffffff;
    display: flex;
    margin-right: .2rem;
    padding: .2rem;
  }
  .head{
    width: .7rem;
    height: .7rem;
    background: #000;
    margin-right: .2rem;
  }
  .head img{
    width: 100%;
    height: 100%;
  }
  .right{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-top: .2rem;
    padding-bottom: .2rem;
    text-align: left;
    width: 100%;
  }
  .top{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .top > span:first-of-type {
    font-weight: 600;
    font-size: 12px;
  }

  .top > span:first-of-type b {
    font-weight: 300;
    color: #fce450;
    font-size: 10px;
  }

  .content{
    text-indent: 2em;
    margin-top:.2rem;
    padding-right: .1rem;
  }

</style>
