<template>
    <div class="add_img">
        <div class="box_img wrapper" ref="wrapper">
            <div class="content">
                <div><img src="../../../../static/commentImg/psa2cde6d664f13de9-2b3f-43b8-bc18-1764470132f5.png" alt=""></div>
                <div><img src="../../../../static/commentImg/psa2cde6d664f13de9-2b3f-43b8-bc18-1764470132f5.png" alt=""></div>
                <div><img src="../../../../static/commentImg/psa2cde6d664f13de9-2b3f-43b8-bc18-1764470132f5.png" alt=""></div>
                <div><img src="../../../../static/commentImg/psa2cde6d664f13de9-2b3f-43b8-bc18-1764470132f5.png" alt=""></div>
                <div><img src="../../../../static/commentImg/psa2cde6d664f13de9-2b3f-43b8-bc18-1764470132f5.png" alt=""></div>
                <div class="clickAdd_img"><i class="iconfont icon-jia"></i></div>
            </div>
            
        </div>
        <div class="location_share">
            <div>发布位置:</div>
            <div>
                <i class="iconfont icon-hongdian"></i>
                <em>共享</em>
            </div>
            <div>
                <i class="iconfont icon-hongdian"></i>
                <em>专属</em>
            </div>
            <div></div>
        </div>
    </div>
</template>
<style>
.add_img {
  width: 100%;
  height: 100%;
  margin-top: 0.3rem;
}
.add_img .wrapper {
  width: 100%;
  height: 5rem;
}
.add_img .box_img .content {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.add_img .box_img .content .clickAdd_img {
  width: 1.9rem;
  height: 1.9rem;
  background: #ccc;
  text-align: center;
}
.add_img .box_img .content .clickAdd_img i {
  font-size: 30px;
  color: white;
  line-height: 1.9rem;
}
.add_img .box_img .content div {
  width: 1.9rem;
  height: 1.9rem;
  margin-top: 0.64rem;
}
.add_img .box_img .content div img {
  width: 100%;
  height: 100%;
}
.add_img .location_share {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.add_img .location_share div {
  width: 25%;
  height: 1rem;
  font-size: 14px;
  color: #666666;
  font-weight: 500;
  line-height: 1rem;
  text-align: center;
 
}
.add_img .location_share div em{
     font-style: normal;
}
.add_img .location_share div i{
    font-size: 20px;

}
</style>
<script>
import BScroll from "better-scroll";
export default {
     mounted() {
    //第一个参数是最外面的大盒子第二个参数是配置项
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      //pullUpLoad 设置为true 开启上拉加载功能,设置threshold:50 意思是上拉到50时 执行pullingUp
        pullUpLoad:{
            threshold:50 
        }
    });
     //当用户上拉时触发事件 第一个参数：pullingUp上拉加载必须配置pullUpLoad：true 时候开启上拉加载
    this.scroll.on("pullingUp",()=>{
      this.handlCommentNum(++this.pageNum)
    })
  },
    updated(){
    //重新计算高度
    // this.scroll.refresh()
    //当数据加载完毕后通知better-scroll停止加载数据
    // this.scroll.finishPullUp()
  }
  // updated() {
  //   this.scroll.refresh();
  // }
};
</script>
