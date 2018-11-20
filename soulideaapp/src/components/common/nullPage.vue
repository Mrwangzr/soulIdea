<template>
  <div class="nullRemark" :style="top">
    <span>{{message}}</span>
  </div>
</template>

<script>
  export default {
    name: "null-page",
    props: {
      message: String,
      top: String
    }
  }
</script>

<style scoped>
  .nullRemark {
    position: absolute;
    width: 100%;
    padding-top: 3rem;
    height: 100%;
    display: flex;
    justify-content: center;
    font-size: 14px;
    color: #a0a0a0;
    font-weight: 600;
  }
</style>
