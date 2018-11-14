<template>
  <div class="all">
    <friends-info-page-com :titleString="'更多'"></friends-info-page-com>
    <ul>
      <li class="userInfo">
        <div>
          <img src="/static/image/newsPage/messagePage/logo.png" alt="">
          <p>
            <span><b>俗人</b><b>v.9</b><i class="iconfont icon-nan nan"></i></span>
            <span>签名</span>
          </p>
        </div>
      </li>

      <li>
        <div @click="handleSetRemark"  class="small-tag">
          <span>备注</span>
          <span><i class="iconfont icon-icon1"></i></span>
        </div>
      </li>

      <transition name="slideDown">
        <div class="editRemark" v-show="remark">
          <input type="text" placeholder="输入备注">
          <p><a href="##">确认</a><a href="##">取消</a></p>
        </div>
      </transition>

      <li>
        <div class="small-tag">
          <span>屏蔽</span>
          <div :class="shield" @click="handleSetShield">
            <span class="dashSpan"></span>
          </div>
        </div>
      </li>

      <li>
        <div class="small-tag">
          <span>
            举报
          </span>
          <span>
            <i class="iconfont icon-arrow-right"></i>
          </span>
        </div>
      </li>

      <li>
        <div class="small-tag">
          <span>
            删除好友
          </span>
          <span>
          </span>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
  import friendInfoheader from "../common/findNewFriendsHeader";

  export default {
    data() {
      return {
        remark: false,
        shield:"dashDiv",
        user: {
          username: "用户名",
          autograph: "个性签名",
          imgSrc: "",
          remarks: "备注名",
          sex: "男",
          level: "9"
        }
      }
    },
    methods: {
      handleSetRemark() {
        if (this.remark) {
          this.remark = false;
        }
        else {
          this.remark = true;
        }
      },
      handleSetShield(){
        if (this.shield == "dashDiv") {
          this.shield = "dashDivSelectd";
        }
        else {
          this.shield = "dashDiv";
        }
      }
    },
    components: {
      "friends-info-page-com": friendInfoheader
    },
    name: "friends-info-page"
  }
</script>

<style scoped>
  .slideDown-enter, .slideDown-leave-to {
    transform: scale(0);
  }

  .slideDown-enter-active, .slideDown-leave-active {
    transition: all .3s;
  }

  .all {
    width: 100%;
    height: 20rem;
    background: #f8f8f8;
  }

  img {
    width: 1.28rem;
    height: 1.28rem;
    margin-right: .25rem;
  }

  li {
    width: 100%;
    padding: 0 .23rem;
    background: #fff;
    margin-top: .1rem;

  }

  li:first-of-type div {
    height: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  li:first-of-type div p {
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-between;
    height: .9rem;
  }

  li:first-of-type div span:first-of-type b:first-of-type {
    font-size: 16px;
    font-weight: 600;
    margin-right: .1rem;
  }

  li:first-of-type div span:first-of-type b:nth-of-type(2) {
    font-size: 10px;
    color: #F6C45D;
    margin-right: .1rem;
  }

  .nan {
    font-size: 14px;
    color: #0086b3;
  }

  li:first-of-type div p span:nth-of-type(2) {
    font-size: 14px;
    color: #999;
  }

  .small-tag{
    height: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .small-tag span:first-of-type {
    font-size: 14px;
    color: #666;
  }


  .editRemark {
    width: 100%;
    height: 2.08rem;
    background: #ffffff;
    margin-top: .1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0.3rem .78rem;
  }

  .editRemark input {
    width: 6rem;
    height: .8rem;
    border-radius: .1rem;
    background: #f8f8f8;
    outline: none;
    border: none;
    padding-left: .2rem;
  }

  .editRemark p {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .editRemark p a {
    font-size: 14px;
  }

  .editRemark a:first-of-type {
    color: #F6C45D;
    margin-right: .2rem;
  }


  /*开关效果*/
  /*关闭状态*/
  .dashDiv{
    float: right;
    border-radius: 1.8667rem;
    border: 0.03rem solid #cbcbcb;
    background-color: #FFFFFF;
    width: 1.06667rem;
    height: 0.613333rem;
    box-sizing: border-box;
  }
  .dashDiv .dashSpan{
    border-radius: 50%;
    border: 0.03rem solid #cbcbcb;
    background-color: #FFFFFF;
    float: left;
    width: 0.506rem;
    height: 0.506rem;
    margin-left: 0.04rem;
    margin-top: 0.019rem;
    box-sizing: border-box;
  }
  /*开通状态*/
  .dashDivSelectd{
    background-color: #F6C45D;
    transition: .5s;
    border-radius: 1.8667rem;
    border: 0.03rem solid #FFFFFF;
    width: 1.16667rem;
    height: 0.613333rem;
    box-sizing: border-box;

  }

  .dashDivSelectd .dashSpan{
    border-radius: 50%;
    border: 0.03rem solid #FFFFFF;
    background-color: #FFFFFF;
    float: right;
    margin-right: 0.04rem;
    margin-top: 0.019rem;
    width: 0.506rem;
    height: 0.506rem;
    box-sizing: border-box;
  }
</style>
