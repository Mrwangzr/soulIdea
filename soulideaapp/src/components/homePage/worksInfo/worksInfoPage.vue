<template>
  <div class="all">
    <header-com></header-com>

    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div>
          <div class="allInfo">
            <div class="userInfo">
              <img :src="this.content.head" alt="" class="headImg">
              <div>
                <span>{{this.content.name}} <b>v.{{this.content.level}}</b></span>
                <span>{{this.content.time}}</span>
              </div>
            </div>
            <div class="contentInfo">
              <div class="contenttext">
                <p>{{this.content.contant}}</p>
              </div>
              <ul class="imgUl">
                <li v-for="item in this.content.src">
                  <img :src="item | urlSet" alt="">
                </li>
              </ul>


            </div>
            <div class="otherInfo">
              <span><i class="iconfont icon-yanjing"></i>54821次</span>
              <span><i class="iconfont icon-dianzan"></i>{{this.content.great}}次</span>
            </div>
          </div>
        </div>

        <div class="comment">
          <ul>
            <li v-for="item in comments" class="commentLi">
              <comment-com :item="item"></comment-com>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <div class="bottomLine">
      <ul>
        <li :class="greatClass" @click="handleDianZan">
          <i class="iconfont icon-dianzan"></i>
          <span>点赞</span>
        </li>
        <li :class="guanzhuClass" @click="handleGuanZhu">
          <i class="iconfont icon-xin"></i>
          <span>关注</span>
        </li>
        <li>
          <i class="iconfont icon-speech" @click="handlePingLun"></i>
          <span>评论</span>
        </li>
        <li>
          <i class="iconfont icon-zhuanfu"></i>
          <span>转发</span>
        </li>
      </ul>
    </div>

    <div class="bottomInputBlock" v-if="BottomInputClass">
      <div class="inputDiv">
        <i class="iconfont icon-yuyin"></i>
        <input type="text" ref="input" autofocus @blur="handleBlur" v-model="inputValue">
        <a href="javascript:;" @click="handleSend">发送</a>
      </div>
    </div>
  </div>
</template>

<script>
  import header from "../../newsPage/common/findNewFriendsHeader";
  import axios from "axios";
  import comment from "./comment";
  import BScroll from "better-scroll";
  import {Toast} from "mint-ui";

  export default {
    name: "works-info-page",
    components: {
      "header-com": header,
      "comment-com": comment
    },
    data() {
      return {
        id: "1",
        content: {
          name: "",
          level: "",
          time: "",
          contant: "",
          uid: "",
          src: []
        },
        comments:[{}],
        greatClass: "",
        guanzhuClass: "",
        guanzhuFlag: true,
        BottomInputClass:false,
        inputValue:""

      }
    },
    methods: {
      initUser() {
        //获取信息
        axios.get("/Soulidea-1.0/share/privateetc?id=" + this.id).then((data) => {
          this.content = data.data.data;
        });

      },
      //获取评论
      initComments(){
        axios.get("/Soulidea-1.0/share/comments?id=" + this.id).then((data) => {
          this.comments = data.data.data;
        })
      },
      //点赞
      handleDianZan() {
        axios.get("/Soulidea-1.0/share/addgreat?id=" + this.id).then((data) => {
          if (data.data.code === 200) {
            this.greatClass = "afterGreat";
            this.initUser();
          }
        });
      },
      //关注
      handleGuanZhu() {
        if (this.guanzhuFlag) {
          axios.get("/Soulidea-1.0/user/fork?userid=" + parseInt(this.content.uid)).then((data) => {
            this.guanzhuClass = "afterGuanzhu";
          })
        }
        else{
          axios.get("/Soulidea-1.0/user/unfork?userid="+parseInt(this.content.uid)).then((data) => {
            this.guanzhuClass = "";
          });
        }
      },
      //评论
      handlePingLun(){
        console.log(1);
        this.BottomInputClass = true;
      },
      //失去焦点
      handleBlur(){
        setTimeout(this.BottomInputClass =false,500);
      },
      //@系统
      handleAite(uid){
        this.handleSend(uid,this.inputValue);
      },
      //评论系统
      handleComment(){
        this.handleSend(this.content.uid,this.inputValue);
      },
      //发布评论
      handleSend(id,content){
        axios({
          method:"post",
          url:"/Soulidea/share/comment",
          headers:{
            'Content-type': 'application/x-www-form-urlencoded'
          },
          data:{
            id:id,
            contant:content
          }
        }).then(
          (data)=>{
           if(data.data.data.code === 200){
             Toast({
               message:"评论成功",
               duration:1500,
               className:"toast"
             });
             this.inputValue = "";
             this. initComments();
           }else{
             Toast({
               message:"评论失败",
               duration:1500,
               className:"toast"
             });
             this.inputValue = "";
           }
          }
        )
      }
    },
    created() {
      this.initUser();
      this. initComments();
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      })
    }

  }
</script>

<style scoped>
  .toast{
    padding: .1rem;
  }
  .all {
    height: 100%;
  }

  .wrapper {
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .otherInfo{
    height: .5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-left:.2rem;
    padding-right: .2rem;

  }
  .otherInfo span i{
    color: #999999;
    font-size:10px;
    margin-right: .1rem;
  }

  .content {
    padding-bottom: 2rem;
  }

  .allInfo {
    width: 100%;
    background: #ffffff;
    margin-top: .1rem;
  }

  .userInfo {
    width: 100%;
    height: 1.4rem;
    padding: .2rem;
    display: flex;

  }

  .headImg {
    height: .9rem;
    width: .9rem;
    margin-right: .1rem;
  }

  .userInfo > div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;

  }

  .userInfo > div > span:first-of-type {
    font-weight: 600;
    font-size: 12px;
  }

  .userInfo > div > span:first-of-type b {
    font-weight: 300;
    color: #fce450;
    font-size: 10px;
  }

  .contenttext {
    width: 100%;
  }

  p {
    text-align: left;
    padding-left: .2rem;
    text-indent: 2em;
  }

  .imgUl {
    width: 100%;
    margin-top: .5rem;
    display: flex;
    flex-wrap: wrap;
    padding-left: .2rem;
  }

  .imgUl li {
    width: 2rem;
    height: 2rem;
    margin-right: .2rem;
    margin-bottom: .2rem;
  }

  .imgUl img {
    width: 100%;
    height: 100%;
  }

  .comment {
    margin-top: .2rem;
  }

  .commentLi {
    margin-bottom: .1rem;
  }

  .bottomLine {
    width: 100%;
    height: 1rem;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    bottom: 0;
    padding-top: .1rem;
  }

  .bottomLine ul {
    display: flex;
    flex-direction: row;
  }

  .bottomLine ul li {
    flex: 1;
    display: flex;
    flex-direction: column;
    color: #ffffff;
  }

  .bottomLine ul li i {
    font-size: 20px;
  }

  .bottomLine ul li span {
    font-size: 12px;
  }

  .afterGreat {
    color: #fce450 !important;
  }

  .afterGuanzhu {
    color: #fce450 !important;
  }
  .bottomInput{
    height: 1rem;
    position: absolute;
    bottom: 0;
    background: #000;
    width: 100%;
    display: none;
  }
  .bottomInputBlock{
    height: 1rem;
    position: absolute;
    bottom: 0;
    background: #000;
    width: 100%;
    display: block;
  }


  .inputDiv {
    border-top: 1px solid #d6d6d6;
    position: absolute;
    height: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    padding: 0 .25rem;
    background: #ffffff;
  }
  .inputDiv input{
    width: 5.4rem;
    height: .7rem;
    border: 1px solid #cfcfcf;
    border-radius:14px;
    padding-left: 10px;
    outline: none;

  }
  .inputDiv i{
    font-size: 30px;
    color: #999999;
  }
  .inputDiv a{
    font-size: 14px;
    color: #F6C45D;
  }
</style>
