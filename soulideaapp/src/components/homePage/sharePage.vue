<template>
  <div class="wrapper" ref="wrapper">
    <div class="share content">

      <div class="share_1" v-for="item in list" @click="handleToInfo.bind(this,item.id)">
        <div class="logo">
          <img :src="item.head" alt="">
          <div>
            <h3 style="margin-top:15px;font-weight: 300">{{item.name}}<span class="level"> v.{{item.level}}</span></h3>
            <p>{{item.time}}</p>
            <p>举报</p>
          </div>
        </div>

        <p class="text">{{item.contant}}</p>

        <div class="Img">
          <img  alt="" v-for="src in item.src" :src="src">
        </div>
        <div class="Inp">
          <div class="inputDiv">评论</div>
          <i class="iconfont icon-dianzan"></i>
          <i class="iconfont icon-zhuanfu"></i>
        </div>

      </div>


      <div class="share_1">
        <div class="logo">
          <img src="../../../static/otherHomeImg/head.png">
          <div>
            <h3 style="margin-top:15px;font-weight: 300">我是大笨蛋<span class="level"> v.9</span></h3>
            <p>今天9:10</p>
            <p>举报</p>
          </div>
        </div>
        <p class="text">悲哉秋之为气也！萧瑟兮草木摇落而变衰，憭栗兮若在远行,登山临水兮送将归 萧瑟：寂寞萧条的样子。燎栗：凄凉。若在远行:好象人在远行之中...</p>

        <div class="Img">
          <img src="../../../static/img/矩形 4.png" alt="">
          <img src="../../../static/img/矩形 4 拷贝.png" alt="">
          <img src="../../../static/img/矩形 4 拷贝 2.png" alt="">
        </div>
        <div class="Inp">
          <div class="inputDiv">评论</div>
          <i class="iconfont icon-dianzan"></i>
          <i class="iconfont icon-zhuanfu"></i>
        </div>

      </div>

      <div class="share_1">
        <div class="logo">
          <img src="http://img3.redocn.com/20120628/Redocn_2012062806101969.jpg">
          <div>
            <p>张梦晨<span class="level"> v.3</span></p>
            <p>今天10:15</p>
            <p>举报</p>
          </div>
        </div>
        <p class="text">
          晋太元中，武陵人捕鱼为业。缘溪行，忘路之远近。忽逢桃花林，夹岸数百步，中无杂树，芳草鲜美，落英缤纷，渔人甚异之。复前行，欲穷其林...
        </p>

        <div class="Img">
          <img src="https://goss1.veer.com/creative/vcg/veer/612/veer-142468260.jpg" alt="">
          <img src="https://goss3.veer.com/creative/vcg/veer/612/veer-130088931.jpg" alt="">
          <img src="https://goss1.veer.com/creative/vcg/veer/612/veer-133857517.jpg" alt="">
        </div>
        <div class="Inp">
          <input type="text" placeholder="评论">
          <img src="../../../static/img/dianzhan .icon.png">
          <img src="../../../static/img/fenxiang .icon.png">
        </div>

      </div>


      <div class="share_1">
        <div class="logo">
          <img src="http://img3.redocn.com/20120628/Redocn_2012062806101969.jpg">
          <div>
            <p>张同<span class="level"> v.2</span></p>
            <p>今天09:54</p>
            <p>举报</p>
          </div>
        </div>
        <p class="text">
          林尽水源，便得一山，山有小口，仿佛若有光。便舍船，从 口入。初极狭，才通人。复行数十步，豁然开朗。土地平旷，屋舍俨然，有良田美池桑竹之属。阡陌交通，鸡犬相闻...</p>

        <div class="Img">
          <img src="https://goss2.veer.com/creative/vcg/veer/612/veer-138205190.jpg" alt="">
          <img src="https://goss3.veer.com/creative/vcg/veer/612/veer-141917665.jpg" alt="">
          <img src="https://goss4.veer.com/creative/vcg/veer/612/veer-133663134.jpg" alt="">
        </div>
        <div class="Inp">
          <input type="text" placeholder="评论">
          <img src="../../../static/img/dianzhan .icon.png">
          <img src="../../../static/img/fenxiang .icon.png">
        </div>

      </div>


      <div class="share_1">
        <div class="logo">
          <img src="http://a0.att.hudong.com/16/12/01300535031999137270128786964.jpg">
          <div>
            <p>张明轩<span class="level"> v.1</span></p>
            <p>今天16:12</p>
            <p>举报</p>
          </div>
        </div>
        <p class="text">
          萧瑟兮草木摇落而变衰，憭栗兮若在远行,登山临水兮送将归 萧瑟：寂寞萧条的样子。燎栗：凄凉。若在远行:好象人在远行之中...</p>

        <div class="Img">
          <img src="https://goss1.veer.com/creative/vcg/veer/612/veer-134149996.jpg" alt="">
          <img src="https://goss2.veer.com/creative/vcg/veer/612/veer-134579925.jpg" alt="">
          <img src="https://goss3.veer.com/creative/vcg/veer/612/veer-129645925.jpg" alt="">
        </div>
        <div class="Inp">
          <input type="text" placeholder="评论">
          <img src="../../../static/img/dianzhan .icon.png">
          <img src="../../../static/img/fenxiang .icon.png">
        </div>

      </div>


      <div class="share_1">
        <div class="logo">
          <img src="http://a2.att.hudong.com/22/04/01300536886921136691044308918.jpg">
          <div>
            <p>李凡<span class="level"> v.3</span></p>
            <p>今天11:12</p>
            <p>举报</p>
          </div>
        </div>
        <p class="text">
          登山临水兮送将归！萧瑟兮草木摇落而变衰，憭栗兮若在远行,萧瑟：寂寞萧条的样子。燎栗：凄凉。若在远行:好象人在远行之中...</p>

        <div class="Img">
          <img src="https://goss4.veer.com/creative/vcg/veer/612/veer-136227135.jpg" alt="">
          <img src="https://goss.veer.com/creative/vcg/veer/612/veer-147789962.jpg" alt="">
          <img src="https://goss1.veer.com/creative/vcg/veer/612/veer-147138934.jpg" alt="">
        </div>
        <div class="Inp">
          <input type="text" placeholder="评论">
          <img src="../../../static/img/dianzhan .icon.png">
          <img src="../../../static/img/fenxiang .icon.png">
        </div>

      </div>


      <div class="share_1">
        <div class="logo">
          <img src="http://pic.58pic.com/58pic/13/76/69/39u58PICbDT_1024.jpg">
          <div>
            <p>李时<span class="level"> v.5</span></p>
            <p>今天13:45</p>
            <p>举报</p>
          </div>
        </div>
        <p class="text">
          既出，得其船，便扶向路，处处志之。及郡下，诣太守，说如此。太守即遣人随其往，寻向所志，遂迷，不复得路。 </p>

        <div class="Img">
          <img src="https://goss2.veer.com/creative/vcg/veer/612/veer-300062688.jpg" alt="">
          <img src="https://goss2.veer.com/creative/vcg/veer/612/veer-147123808.jpg" alt="">
          <img src="https://goss3.veer.com/creative/vcg/veer/612/veer-147151062.jpg" alt="">
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
  import axios from "axios";

  export default {
    data(){
      return{
        pageNum:1,
        list:[],
      }
    },
    computed: {},
    methods: {
      init(){
          axios("/Soulidea-1.0/share/publicetc?page="+this.pageNum++).then((data)=>{
            console.log(data);
          // this.list = [...this.list,data.data.message];
          })
      },
      handleToInfo(id){
        this.$router.push({path:"/worksInfoPage",query:{id:id}});
      }
    },
    created(){
      this.init();
    },
    mounted() {
      new BScroll(this.$refs.wrapper, {
        click: true
      });

    }

  }
</script>


<style>
  .wrapper {
    overflow: hidden;
    height: 100%;
  }

  .content {
    padding-bottom: 1.5rem;
  }

  .share {
    text-align: left;
  }

  .share_1 {
    width: 100%;
    min-height: 6rem;
    background: #fff;
    border-bottom: 1px solid rgb(223, 223, 223);
    margin-bottom: .1rem;
    padding-bottom: .2rem;
  }

  .logo {
    width: 7.5rem;
    height: 1.3rem;
    display: flex;
    position: relative;

  }

  .logo img {
    width: 0.81rem;
    height: 0.82rem;
    margin: 0.23rem 0.19rem 0.25rem 0.24rem;
  }

  .logo span {
    color: red;
  }

  .logo p:nth-child(1) {
    width: 1.6rem;
    height: 0.27rem;
    font-size: 0.28rem;
    color: #292929;
    margin-top: 0.34rem;
    margin-bottom: 0.11rem
  }

  .logo p:nth-child(2) {
    width: 1.11rem;
    height: 0.23rem;
    font-size: 0.24rem;
    color: #BABABA
  }

  .logo p:nth-child(3) {
    position: absolute;
    right: 0.24rem;
    top: 0.38rem;
    color: #cacaca;
  }

  .share .Img {
    width: 100%;
    min-height: 2.02rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .share .Img img {
    width: 2.02rem;
    height: 2.02rem;
    margin-bottom: .2rem;
  }

  .share .text {
    width: 6.78rem;
    max-height: 1.44rem;
    margin-bottom: .2rem;
    overflow: hidden;
    color: #292929;
    font-size: 12px;
    text-indent: 2em;
    padding-left: .2rem;
    padding-right: .2rem;
  }

  .share .Inp {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .Inp i{
    margin-top: .3rem;
    font-size: 18px;
    color: #dfdfdf;
  }

  .share input {
    width: 5.4rem;
    height: 0.6rem;
    font-size: 12px;
    margin-top: 0.4rem
  }

  .share .Inp img:nth-child(2) {
    width: 0.3rem;
    height: 0.31rem;
    margin-top: 0.55rem
  }

  .share .Inp img:nth-child(3) {
    width: 0.3rem;
    height: 0.26rem;
    margin-top: 0.57rem
  }

  .level {
    color: #fce450 !important;
    font-size: 10px;
    font-weight: 300;
  }

  input {
    padding-left: .2rem;
  }

  .inputDiv {
    width: 5.4rem;
    height: 0.6rem;
    font-size: 12px;
    margin-top: 0.4rem;
    border: 1px solid #efefef;
    padding-left: .2rem;
    display: flex;
    align-items: center;
    color: #999999;
  }

</style>


