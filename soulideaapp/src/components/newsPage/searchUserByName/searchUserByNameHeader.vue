<template>
    <article>
      <div>
        <span> <i class="iconfont icon-fangdajing"></i></span>
        <input type="text">
      </div>
        <div>
          <a href="##" >搜索</a>
          <a href="##" @click="back()">取消</a>
        </div>

    </article>
</template>

<script>
    export default {
        name: "search-user-by-name-header",
      methods:{
          back(){
            this.$router.back();
          }
      }
    }
</script>

<style scoped>
  article{
    width: 100%;
    height: .8rem;
    display: flex;
    border-bottom: 1px solid #efefef;
    padding-left: .7rem;
    align-items: center;
  }
  div{
    display: flex;
  }
  span{
    height:.5rem ;
    width:.7rem;
    background: #efefef;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.3rem 0 0 0.3rem;
  }
  i{
    font-size: 12px;
  }
  input{
    background: #efefef;
    outline: none;
    border: none;
    border-radius: 0 0.3rem 0.3rem 0;
    width: 4.5rem;
    margin-right: .2rem;
  }
  a{
    color: #f6c45d;
  }
  div:last-of-type{
    width: 1.1rem;
    display: flex;
    justify-content: space-between;
  }
</style>
