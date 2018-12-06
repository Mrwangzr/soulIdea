<template>
  <div>
    <div class="header">
      <b>聊天</b>
      <span>
        <router-link to="/findNewFriendsPage">添加好友</router-link>
      </span>
    </div>

    <div class="nav">
      <ul>
        <li :id="this.arrClass['messagePage']"
            @click="handleTagClick('messagePage','spanLineMoveLeft','messagePage-com')">消息
        </li>
        <li :id="this.arrClass['friendPage']"
            @click="handleTagClick('friendPage','spanLineMoveRight','friendsPage-com')">好友
        </li>
      </ul>
      <div>
        <span :id="this.lineClass"></span>
      </div>
    </div>
    <div class="com">
      <keep-alive>
        <component :is="comName"></component>
      </keep-alive>
    </div>

  </div>
</template>

<script>
  import messagePage from "./messagePage";
  import friendsPage from "./friendsPage"

  export default {
    components: {
      "messagePage-com": messagePage,
      "friendsPage-com": friendsPage
    },
    name: "user-info-page",
    created() {
      //设置动态组件
      this.comName = "messagePage-com"
    },
    data() {
      return {
        //动态组件名
        comName: "messagePage",
        //切换tag的动画效果
        //class数列
        arrClass: {
          messagePage: "spanOnTag",
          friendPage: ""
        },
        //滑块定位
        lineClass: "",
      }
    },
    methods: {
      //点击tag的切换页面
      handleTagClick(name, val, com) {
        for (var key in this.arrClass) {
          this.arrClass[key] = "";
        }
        this.arrClass[name] = "spanOnTag";
        this.lineClass = val;
        this.comName = com;
      }
    },
    updated() {

    }
  }
</script>

<style scoped>
  .header {
    padding: .7rem .3rem 0;
    height: 1.28rem;
    font-size: 16px;
    color: #292929;
    text-align: center;
    font-weight: bold;
    background: #F8F8F8;
    position: relative;
    border-bottom: 1px solid #d0d0d0;
  }

  .header span {
    padding-top: .06rem;
    font-size: 12px;
    color: #999999;
    font-weight: normal;
    position: absolute;
    right: 0.3rem;
  }

  .nav {
    width: 100%;
    height: .99rem;
    padding-top: .22rem;
  }

  .nav ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: .2rem;
    padding: 0 1.2rem;
  }

  .nav li {
    font-size: 16px;
    font-weight: 600;
    color: #999;
    padding: 0 .18rem;
  }

  .nav div {
    width: 100%;
    height: .06rem;
    padding: 0 1.2rem;
    position: relative;
  }

  .nav span {
    display: block;
    height: 100%;
    width: 1rem;
    background: #f9c45d;
    position: absolute;
    left: 1.2rem;
    transition: 0.2s;
  }

  .com {
    position: relative;
    height: 100%;
  }

  #spanOnTag {
    color: #292929;
  }

  #spanLineMoveLeft {
    left: 1.2rem;
  }

  #spanLineMoveRight {
    left: 5.3rem;
  }

</style>
