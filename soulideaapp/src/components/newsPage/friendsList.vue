<template>
  <li class="line"
      :style="deleteSlider"
      @touchstart='touchStart'
      @touchmove='touchMove'

  >
    <div  @click="handleToTalk">
          <span>
            <img :src="item.head" alt="">
            <div>
              <span class="spanline">{{item.name}}</span>
              <span class="spanline">{{item.sign}}</span>
            </div>
          </span>
     <!-- <b>
        {{item.time}}
      </b>-->
    </div>
    <div @click="handleDelete">删除</div>
  </li>
</template>

<script>
  import {MessageBox} from "mint-ui";
  import axios from "axios";

  export default {
    components: {},
    data() {
      return {
        startX: 0,   //触摸位置
        endX: 0,     //结束位置
        moveX: 0,   //滑动时的位置
        disX: 0,    //移动距离
        deleteSlider: '',//滑动时的效果,使用v-bind:style="deleteSlider",
        options: {
          btn: {
            text: '按钮',
            style: {
              'background-color': 'red',
              'font-size': '20px',
              'color': 'blue'
            }
          }
        }
      }
    },
    props: {
      item: Object
    },
    methods: {
      /* touchStart(e){
         //阻止默认事件
         e.preventDefault();
         //获取起始坐标
         window.startX = e.touches[0].pageX;
       },
       touchMove(e){
          var moveEndX = e.changedTouches[0].pageX;
          var x = moveEndX - window.startX;
        if(x>30){
           this.slideDelClass = "";
         }
         if(x<-30){
           this.slideDelClass = "slideDel";
         }
       },*/
      //处理删除按钮
      handleDelete() {
        MessageBox.confirm("确认删除好友吗",{
          title: '  ',
          showCancelButton: true
        }).then(
          action => {
            axios({
              method: "get",
              url: "/Soulidea-1.0/friend/deletefriend?id="+this.item.id,
            }).then(
              (data) => {
                if(data.data.code === 200){
                MessageBox.alert("删除成功",{
                  title:" "
                });
                }
                else{
                  MessageBox.alert("删除失败",{
                    title:" "
                  })
                }
              }
            ).catch(()=>{});
          }
        ).catch(()=>{});
      },
      //处理触摸滑动
      touchStart(ev) {
        ev = ev || event;
        //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕

        if (ev.touches.length == 1) {
          // 记录开始位置
          this.startX = ev.touches[0].clientX;
        }
      }
      ,
      touchMove(ev) {
        ev = ev || event;
        //获取删除按钮的宽度，此宽度为滑块左滑的最大距离
        let wd = 105;
        let wdRem = 2.1;
        if (ev.touches.length == 1) {
          // 滑动时距离浏览器左侧实时距离
          this.moveX = ev.touches[0].clientX

          //起始位置减去 实时的滑动的距离，得到手指实时偏移距离
          this.disX = this.startX - this.moveX;
          // 如果是向右滑动或者不滑动，不改变滑块的位置
          if (this.disX < 0 || this.disX == 0) {
            this.deleteSlider = "transform:translateX(0px)";
            // 大于0，表示左滑了，此时滑块开始滑动
          } else if (this.disX > 0) {
            //具体滑动距离我取的是 手指偏移距离*5。
            this.deleteSlider = "transform:translateX(-" + this.disX * 5 + "px)";

            // 最大也只能等于删除按钮宽度
            if (this.disX * 5 >= wd) {
              this.deleteSlider = "transform:translateX(-" + wdRem + "rem)";

            }
          }
        }
      }
      ,
      touchEnd(ev) {
        ev = ev || event;
        let wd = 105;
        let wdRem = 2.1;
        if (ev.changedTouches.length == 1) {
          let endX = ev.changedTouches[0].clientX;

          this.disX = this.startX - endX;
          //如果距离小于删除按钮一半,强行回到起点

          if ((this.disX * 5) < (wd / 2)) {

            this.deleteSlider = "transform:translateX(0px)";
          } else {
            //大于一半 滑动到最大值
            this.deleteSlider = "transform:translateX(-" + wdRem + "rem)";
          }
        }
      },
      //处理点击进入聊天
      handleToTalk(){
       this.$router.push({
          path:"/talkpage",
          query:{
            id:this.item.id,
            friendName:this.item.name
          }
        });
      }
    }
  }
</script>
<style scoped>

  .spanline{
    width:5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }


  li {
    width: 200%;
    height: 1.31rem;
    position: relative;
    transition: 0.3s;
    left: 0;
  }

  .slideDel {
    left: -2.1rem;
  }

  li div:nth-of-type(2) {
    width: 2rem;
    height: 100%;
    background: #e96262;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
  }

  li div img {
    width: .9rem;
    height: .9rem;
    margin-right: .26rem;
    border-radius: 100%;

  }

  li > div:first-of-type {
    width: 50%;
    height: 1.31rem;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    justify-content: space-between;
    float: left;
    margin-right: 0.25rem;
  }

  li:first-of-type > div:first-of-type {
    border-top: 1px solid #dfdfdf;
  }

  li div > span:first-of-type {
    display: flex;
    align-items: center;
  }

  li div > span:first-of-type div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 0.8rem;
  }

  li div > span:first-of-type div span {
    display: flex;
    justify-content: flex-start;

  }

  li div > span:first-of-type div span:first-of-type {
    font-size: 14px;
    color: #292929;
  }

  li div > span:first-of-type div span:last-of-type {
    font-size: 12px;
    color: #999;
  }

  li div > b {
    font-weight: normal;
    align-self: flex-start;
    padding: 0.3rem 0.4rem 0 0;
    font-size: 12px;
    color: #999;
  }


</style>
