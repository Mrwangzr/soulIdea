<template>
<div class="wrapper" ref="wrapper"> 
    <div class="share content">
        <div class="share_1">
            <div class="logo">
                <img src="../../assets/logo.png">
                <div>
                    <p>我的名字<span>V.9</span></p>
                    <p>今天12:10</p>
                    <p>举报</p>
                </div>
            </div>
            <p class="text">
               &nbsp;&nbsp;&nbsp;&nbsp;悲哉秋之为气也！萧瑟兮草木摇落而变衰，憭栗兮若在远行,
               &nbsp;&nbsp;&nbsp; 登山临水兮送将归 萧瑟：寂寞萧条的样子。燎栗：凄凉。若在远行:好象人在远行之中...</p>
               
            <div class="Img">
                <img src="../../../static/img/矩形 4.png" alt="">
                <img src="../../../static/img/矩形 4 拷贝.png" alt="">
                <img src="../../../static/img/矩形 4 拷贝 2.png" alt="">
            </div>
            <div class="Inp">
                <input type="text" placeholder="评论">
                <img src="../../../static/img/dianzhan .icon.png">
                <img src="../../../static/img/fenxiang .icon.png">
            </div>
           
        </div>

    </div>
    </div>
</template>


<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
  created(){
     this.handleNow_getNowMovie();  
     console.log(this.movie_nowMovie,111)
  },
  computed:{
      ...Vuex.mapState({
          movie_nowMovie:state=>state.nowMovie.movie_nowMovie,
      })
  },
  methods:{
      ...Vuex.mapActions({
          handleNow_getNowMovie:"nowMovie/handleNow_getNowMovie"
      }),
      handleClick(){
          alert(1)
      }
  },
  mounted(){
      new BScroll(this.$refs.wrapper,{
            click:true
      });
      
  }
 
}
</script>


<style>
.wrapper{
    overflow: hidden;
    height:100%;
}

.share_1 {
  width: 100%;
  height:6rem; 
  background: #fff;
  border-bottom: 5px solid rgb(223, 223, 223);

}
.logo{
    width:7.5rem;
    height:1.3rem;
    display: flex;
    justify-content: space-center;
    position: relative;
    
}
.logo img {
  width: 0.81rem;
  height: 0.82rem;
  margin:0.23rem 0.19rem 0.25rem 0.24rem;
}
.logo span {
  color: red;
}
.logo p:nth-child(1) {
  width: 1.6rem;
  height: 0.27rem;
  font-size: 0.28rem;
  color:#292929;
  margin-top:0.34rem;
  margin-bottom:0.11rem
}
.logo p:nth-child(2) {
  width: 1.11rem;
  height: 0.23rem;
  font-size: 0.24rem;
  color:#BABABA
}
.logo p:nth-child(3) {
  position: absolute;
  right: 0.24rem;
  top: 0.38rem;
  color: #cacaca;
}

.share .Img{
    width:100%;
    height:2.02rem;
    display:flex;
    justify-content:space-around
}
 .share .Img img{
    width:2.02rem;
    height:2.02rem;
    }
.share .text{
    width:6.78rem;
    height:1.44rem;
    color:#292929;
    font-size:12px;
}

.share .Inp{
    display:flex;
    justify-content:space-around;
    
}
.share input{
    width:5.4rem;
    height:0.6rem;
    font-size:12px;
    margin-top:0.4rem
}
.share .Inp img:nth-child(2){
    width:0.3rem;
    height:0.31rem;
    margin-top:0.55rem
}
.share .Inp img:nth-child(3){
    width:0.3rem;
    height:0.26rem;
    margin-top:0.57rem
}



</style>


