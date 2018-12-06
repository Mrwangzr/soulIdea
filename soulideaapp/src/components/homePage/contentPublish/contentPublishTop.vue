<template>
    <div class="top_comment">
            <div><span class="iconfont icon-right" @click="handlBack()"></span></div>
            <div>编辑</div>
            <div>发布</div>
    </div>
</template>
<script>
export default {
    methods:{
      handlBack(){
          this.$router.back()
      }
  },
};
</script>
<style>
.top_comment {
  width: 100%;
  height: 0.88rem;
  background: white;
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  margin-top:.4rem;
  padding:0 .34rem;
}
.top_comment div {
  width: 33%;
  height: 0.88rem;
  line-height: 0.88rem;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}
.top_comment div:nth-child(1) {
  text-align: left;
  font-size: 14px;
}
.top_comment div:nth-child(3) {
  text-align: right;
  font-size: 14px;
  color:rgb(100 100 100)
}
</style>