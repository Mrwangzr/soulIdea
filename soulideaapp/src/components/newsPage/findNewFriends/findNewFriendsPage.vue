<template>
  <transition name="move">
    <div class="all">
      <find-friends-header-com :titleString="'添加朋友'"></find-friends-header-com>
      <ul>
        <li>
          <span>
            <i class="iconfont icon-fangdajing"></i>昵称/点点号/手机号
          </span>
        </li>
        <li>
          <div class="list">
            <span>扫一扫</span>
            <i class="iconfont icon-saoyisaoerweimasaomasaomiao"></i>
          </div>
        </li>
        <li>
          <div class="list">
            手机联系人
          </div>
        </li>
        <li>
          <div class="list">
            公众号
          </div>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
  import findFriendsHeader from "../common/findNewFriendsHeader"

  export default {
    name: "find-new-friends-page",
    components: {
      "find-friends-header-com": findFriendsHeader
    },
    data() {
      return {
        inputInfo: ""
      }
    }
  }
</script>

<style scoped>
  .list {
    width: 100%;
    height: 100%;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #666666;
    font-weight: 600;
  }

  .list i {
    font-size: 25px;
    font-weight: 500;
  }

  .all {
    width: 100%;
    height: 20rem;
    background: #f8f8f8;
  }

  li {
    width: 100%;
    height: 1rem;
    margin-top: .15rem;
    background: #ffffff;
    display: flex;
    padding: 0 .25rem;
  }

  li:first-of-type {
    justify-content: center;
    align-items: center;

  }

  li:first-of-type span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: .7rem;
    background: #f8f8f8;
    border-radius: 10px;
    color: #666666;
    font-size: 12px;
  }

  li:first-of-type span i {
    margin-right: 10px;
    font-size: 16px;
    color: #999999;
  }

  .move-enter, .move-leave-to {
    transform: translateX(100%);
  }

  .move-enter-active, .move-leave-active {
    transition: all .3s;
  }
</style>
