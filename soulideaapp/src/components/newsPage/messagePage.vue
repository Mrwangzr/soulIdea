<template>
  <transition name="move">
    <ul>
      <li>
        <router-link to="/fansChangePage">
          <div>
            <span><img src="../../../static/image/newsPage/messagePage/logo.png" alt="">粉丝</span> <i
            class="iconfont icon-arrow-right"></i>
             <b class="dot" v-if="messageFlag"></b>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/aiteMessagePage">
        <div><span><img src="../../../static/image/newsPage/messagePage/logo.png" alt="">@你 </span> <i
          class="iconfont icon-arrow-right"></i>
          <b class="dot" v-if="aiteFlag"></b>
        </div>
        </router-link>
      </li>

      <li>
        <router-link to="/giftMessagePage">
        <div><span><img src="../../../static/image/newsPage/messagePage/logo.png" alt="">打赏</span> <i
          class="iconfont icon-arrow-right"></i>
          <b class="dot" v-if="giftFlag"></b>
        </div>
        </router-link>
      </li>

    </ul>
  </transition>
</template>

<script>
  import axios from "axios";
  export default {
    name: "message-page",
    data(){
      return {
        messageFlag: false,
        aiteFlag: false,
        giftFlag: false
      }
    },
    methods:{
      getMessageUpdate(){
        axios.get("/Soulidea-1.0/share/message").then((data)=>{
          switch (data.data.data){
            case 1:{
              break;
            }
            case 2:{
              this.aiteFlag = true;
              break;
            }
            case 3:{
              this.giftFlag = true;
              break;
            }
            case 4:{
              this.aiteFlag = true;
              this.giftFlag = true;
              break;
            }
          }

        })
      }
    },
    created(){
      this.getMessageUpdate();
    },
    activated(){
      this.getMessageUpdate();
    }
  }
</script>

<style scoped>
  ul {
    padding: 0 .52rem;
    width: 100%;
    position: absolute;
  }

  ul img {
    width: .57rem;
    height: .57rem;
    margin-right: .3rem;
  }

  ul li {
    width: 100%;
    height: 1.3rem;
    border-bottom: 1px solid #dfdfdf;
    padding-left: .17rem;
    overflow: hidden;
  }

  ul li div {
    width: 100%;
    height: 1.3rem;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #292929;
    justify-content: space-between;
    position: relative;
  }

  ul li span {
    display: flex;
    align-items: center;
  }

  ul li:first-child {
    border-top: 1px solid #dfdfdf;
  }

  ul li i {
    float: right;
    font-size: 20px;
    color: #999999;
  }

  .move-enter {
    transform: translateX(-100%);
  }

  .move-enter-active {
    transition: all .3s;
  }

  .dot{
    width: 5px;
    height: 5px;
    background: red;
    border-radius:5px;
    position: absolute;
    right: .5rem;
  }
</style>
