<template>
  <transition name="move">
    <ul>
      <friendsList-com v-for="item in friends"  :item="item">
        </friendsList-com>
    </ul>
  </transition>
</template>

<script>
  import friendsList from "./friendsList";
  export default {
    name: "friends-page",
    components:{
      "friendsList-com":friendsList
    },
    data() {
      return {
        friends: [
          {
            name: "用户名",
            message: "最后一条信息",
            time: "8-30"
          },
          {
            name: "用户名",
            message: "最后一条信息",
            time: "8-30"
          },
          {
            name: "用户名",
            message: "最后一条信息",
            time: "8-30"
          }
        ],
      }
    }
  }
</script>

<style scoped>

  ul {
    padding: 0 .24rem;
    width: 100%;
    position: absolute;
    overflow: hidden;
  }

  ul li {
    width: 200%;
    height: 1.31rem;
    position: relative;
    transition: 0.3s;
    left: 0;
  }

  .slideDel {
    left: -105px;
  }

  ul li div:nth-of-type(2) {
    width: 100px;
    height: 100%;
    background: #e96262;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
  }

  ul li div img {
    width: .9rem;
    height: .9rem;
    margin-right: .26rem;
  }

  ul li > div:first-of-type {
    width: 50%;
    height: 1.31rem;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    justify-content: space-between;
    float: left;
    margin-right: 15px;
  }

  ul li:first-of-type > div:first-of-type {
    border-top: 1px solid #dfdfdf;
  }

  ul li div > span:first-of-type {
    display: flex;
    align-items: center;
  }

  ul li div > span:first-of-type div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 0.8rem;
  }

  ul li div > span:first-of-type div span {
    display: flex;
    justify-content: flex-start;

  }

  ul li div > span:first-of-type div span:first-of-type {
    font-size: 14px;
    color: #292929;
  }

  ul li div > span:first-of-type div span:last-of-type {
    font-size: 12px;
    color: #999;
  }

  ul li div > b {
    font-weight: normal;
    align-self: flex-start;
    padding: 0.3rem 0.4rem 0 0;
    font-size: 12px;
    color: #999;
  }

  .move-enter, .move-leave-to {
    transform: translateX(100%);
  }

  .move-enter-active, .move-leave-active {
    transition: all .3s;
  }
</style>
