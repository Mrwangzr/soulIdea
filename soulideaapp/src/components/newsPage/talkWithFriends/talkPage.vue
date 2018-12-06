<template>
  <transition name="move">
    <div class="all">
      <talk-header-com :right="true" :id="id" :friendName="friendName"></talk-header-com>
        <div class="talk">
          <!--<time-line-com></time-line-com>
          <friend-talk-bubble-com></friend-talk-bubble-com>
          <my-talk-bubble-com></my-talk-bubble-com>-->
        </div>
      <talk-input-com @oninputsend="handleInputSend"></talk-input-com>
    </div>
  </transition>
</template>

<script>
  import axios from "axios";
  //头部
  import talkHeader from './talkHeader';
  //输入框
  import talkInput from './talkInput';
  //我的气泡
  import myTalkBubble from './myTalkBubble';
  //别人的气泡
  import friendTalkBubble from './friendTalkBubble';
  //时间签
  import time from './timeLine';

  export default {
    name: "talk-page",
    components: {
      "talk-header-com": talkHeader,
      "talk-input-com": talkInput,
      "friend-talk-bubble-com":myTalkBubble,
      "my-talk-bubble-com":friendTalkBubble,
      "time-line-com":time
    },
    data(){
      return{
        id:-1,
        friendName:"",
        websocket:null,
        talkArr:[]
      }
    },
    methods:{
      //初始化webSocket
      initWebSocket(id){
        if ('WebSocket' in window) {
          //这是建立链接的地址，需要传入用id
         this.websocket  = new WebSocket("ws://" + "localhost:8080/Soulidea-1.0" + "/websocket/" + id);
         console.log(this.websocket);
         // alert(document.location.host);
          this.websocket.onopen = function () {
            console.log("连接成功")
          };
          this.websocket.onclose = function () {
            console.log("连接关闭")
          };
          this.websocket.onerro = function () {
            console.log("连接出错")
          };
          this.websocket.onmessage = function (message) {
            console.log(message);
          }
        } else {
          alert("浏览器版本过低");
        }
      },
      //关闭socket
      close() {
        if (  this.websocket != null) {
          this.websocket.close()
        }
      },
      //发送数据
      sendmessage(value) {
        var to = this.id;//接收者
        var messsage = value;//获取要发送的内容
        if ( this.websocket != null) {//防止有神经病上来就点发送
          //json字符串，这里的格式如果没有必要无需更改。
          var message='{"to":"'+to+'","content":"'+messsage+'"}';
          this.websocket.send(message)
        }
      },
      handleInputSend(value){
        console.log(value);
        this.sendmessage(value);
      }
    },
    created(){
      this.id = this.$route.query.id;
      this.friendName = this.$route.query.friendName;
      axios.get("/Soulidea-1.0/user/getuserid").then((data)=>{
        console.log(data);
        this.initWebSocket(data.data.data);
      });

    },


  }
</script>

<style scoped>
  .all{
    height: 100%;
  }
  .talk{
    width: 100%;
    background: #efefef;
    height: 100%;
  }
  .move-enter,.move-leave-to {
    transform: translateX(100%);
  }

  .move-enter-active,.move-leave-active{
    transition: all .3s;
  }
</style>
