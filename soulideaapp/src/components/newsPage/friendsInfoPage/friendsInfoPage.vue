<template>
  <transition name="move">
    <div class="all">
      <friends-info-page-com :titleString="'更多'"></friends-info-page-com>
      <ul>
        <li class="userInfo">
          <div>
            <img :src="user.imgSrc" alt="">
            <p>
              <span><b>{{user.username}}</b><b>v.{{user.level}}</b><i :class="sexClassName"></i></span>
              <span>{{user.autograph}}</span>
            </p>
          </div>
        </li>

        <li>
          <div @click="handleSetRemark" class="small-tag">
            <span>备注 : {{remarkValue}}</span>
            <span><i class="iconfont icon-icon1"></i></span>
          </div>
        </li>

        <transition name="slideDown">
          <div class="editRemark" v-show="remark">
            <input type="text" placeholder="输入备注,最多六个字" v-model="remarkString">
            <p><a href="javascript:;" @click="handleSubRemark(1)">确认</a><a href="javascript:;"
                                                                           @click="handleSubRemark(0)">取消</a></p>
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
          <div class="small-tag deleteFriend" @click="handleDelete()">
          <span>
            删除好友
          </span>
            <span>
          </span>
          </div>
        </li>

      </ul>
    </div>
  </transition>
</template>

<script>
  import friendInfoheader from "../common/findNewFriendsHeader";
  import {MessageBox} from "mint-ui";
  import axios from "axios";

  export default {
    data() {
      return {
        id: -1,
        remark: false,
        shield: "dashDiv",
        sexClassName: "",
        user: {
          username: "用户名",
          autograph: "个性签名",
          imgSrc: "",
          remarks: "备注名",
          sex: 0,
          level: "9"
        },
        remarkString: "",
        remarkValue:""
      }
    },
    methods: {
      //处理备注弹出与隐藏
      handleSetRemark() {
        if (this.remark) {
          this.remark = false;
        }
        else {
          this.remark = true;
        }
      },
      //处理滑动按钮
      handleSetShield() {
        if (this.shield == "dashDiv") {
          this.shield = "dashDivSelectd";
        }
        else {
          this.shield = "dashDiv";
        }
      },
      //处理修改备注的前后
      handleSubRemark(flag) {
        if (flag) {
          if(/^[\u4e00-\u9fa5]{0,6}$/.test(this.remarkString)){
            console.log(this.id,this.remarkString)
            axios({
              method: "get",
              url: "/Soulidea-1.0/friend/addfriendname?id="+parseInt(this.id)+"&name="+this.remarkString,
             /* header:{
                'Content-type':'application/x-www-form-urlencoded'
              },*/
          /*    data: {
                id: parseInt(this.id),
                name: this.remarkString
              }*/
            }).then(
              (data) => {
                console.log(data);
                if (data.data.code === 200) {
                  MessageBox.alert("修改成功", {
                    title: " "
                  });
                  this.remarkValue = this.remarkString;
                  this.remarkString = "";
                  this.remark = false;
                } else {
                  MessageBox.alert("操作失败",{
                    title:" "
                  });
                }
              }
            )
          }else{
            MessageBox.alert("最多输入六个汉字");
          }
        }
        else {
          this.remark = false;
        }
      },
      //处理删除好友
      handleDelete() {
        MessageBox.confirm("确认删除好友吗", {
          title: '  ',
          showCancelButton: true
        }).then(
          action => {
            axios({
              method: "get",
              url: "/Soulidea-1.0/friend/deletefriend?id="+this.id
            }).then(
              (data) => {
                console.log(data);
                if (data.data.code === 200) {
                  MessageBox.alert("删除成功");
                }
                else {
                  MessageBox.alert("删除失败");
                }
              }
            ).catch(() => {
              MessageBox.alert("操作异常");
            });
          }
        ).catch(() => {
        });
      }
    },
    created() {
      //初始化数据
      this.id = this.$route.query.id;
      axios({
        method: "get",
        url: "/Soulidea-1.0/user/getotheruserinfo?id=" + this.id,
      }).then(
        (data) => {
          console.log(data);
          var userInfo = data.data.data;
          this.user.username = userInfo.username;
          this.user.autograph = userInfo.sign;
          this.user.sex = parseInt(userInfo.gender);
          this.user.level = userInfo.level;
          this.user.imgSrc = userInfo.head;
          if (this.user.sex) {
            this.sexClassName = "iconfont icon-nan nan"
          } else {
            this.sexClassName = "iconfont .icon-nv-copy nv"
          }
          axios({
            method:"get",
            url:"/Soulidea-1.0/friend/getfriendname?id="+this.id
          }).then(
            (data)=>{
              this.remarkValue = data.data.data.name;
            }
          ).catch(()=>{});
        }
      ).catch(() => {
      });
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
  .move-enter,.move-leave-to {
    transform: translateX(100%);
  }

  .move-enter-active,.move-leave-active {
    transition: all .3s;
  }

  .all {
    width: 100%;
    height: 20rem;
    background: #f8f8f8;
  }

  .userInfo {
    padding: 0 .23rem;
  }

  .userInfo span {
    width: 5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  img {
    width: 1.28rem;
    height: 1.28rem;
    margin-right: .25rem;
  }

  li {
    width: 100%;
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

  .nan .nv {
    font-size: 14px;
  }

  li:first-of-type div p span:nth-of-type(2) {
    font-size: 14px;
    color: #999;
  }

  .small-tag {
    height: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .23rem;

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

  .deleteFriend {
    margin-top: 5.7rem;
    justify-content: center;
    background: #fce450;
    color: #ffffff;
  }

  /*开关效果*/
  /*关闭状态*/
  .dashDiv {
    float: right;
    border-radius: 1.8667rem;
    border: 0.03rem solid #cbcbcb;
    background-color: #FFFFFF;
    width: 1.06667rem;
    height: 0.613333rem;
    box-sizing: border-box;
  }

  .dashDiv .dashSpan {
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
  .dashDivSelectd {
    background-color: #F6C45D;
    transition: .5s;
    border-radius: 1.8667rem;
    border: 0.03rem solid #FFFFFF;
    width: 1.16667rem;
    height: 0.613333rem;
    box-sizing: border-box;

  }

  .dashDivSelectd .dashSpan {
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
