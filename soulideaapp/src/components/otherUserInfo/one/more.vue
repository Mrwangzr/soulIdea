<template>
    <div id="prMore">
         <!-- 容器 -->
        <div class="con">
            <!-- 创作个数 -->
            <div class="proNum">
                <p>共上传20个创作</p>
                <p>时间更新</p>
            </div>
            <!-- 作品集 -->
            <div class="wrapper" ref="wrapper">
                <div class="proCon content">
                    <!-- 作品 -->
                    <div class="pr" @click="handle()">
                        <div class="one">
                            <img src="../../../../static/otherHomeImg/pro.jpg" alt="">
                        </div>
                        <div class="two">
                            <p>爱美丽插画集</p>
                            <p><i>6</i>推荐 <i>0</i>评论</p>
                        </div>
                        <div class="three">
                            平面-插画
                        </div>

                    </div>
                    <div class="pr">
                        <div class="one">
                            <img src="../../../../static/otherHomeImg/pro.jpg" alt="">
                        </div>
                        <div class="two">
                            <p>《爱美丽插画集》</p>
                            <p><i>6</i>推荐 <i>0</i>评论</p>
                        </div>
                        <div class="three">
                            平面-插画
                        </div>

                    </div>
                
                </div>
            </div>
<!--             
             <div class="more">
                    
                    <img src="../../../../static/otherHomeImg/gd@2x.png" alt="">
                    <p>
                    点击加载更多
                    </p>
                </div> -->
        </div>
    </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
    methods:{
        handle(){
            this.$router.push("/otherUserTwo");
        }
    },
    mounted(){
        var scroll = new Bscroll(this.$refs.wrapper,{
            click:true,
            pullUpLoad:true,
        });
        // this.scroll.on("pullingUp",()=>{
            
        // })
    }

}
</script>

<style scoped>
/*创作个数*/
*{
    font-family: "PingFangSC-Regular";
}
#prMore{
    padding: 0 12px;
    overflow: hidden;
}
#prMore .proNum{
    border-radius: 10px;
    width: 7.01rem;
    height: .73rem;
    background: #E7E7E7;
    margin-bottom: 32px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
}
#prMore .proNum p{
    height: .73rem;
    line-height: .73rem;
    padding: 0 12px;
}
#prMore .proNum p:nth-of-type(1){
    color:#797979;
}
/*作品集*/

.wrapper{
    width: 100%;
    /* height: 100%; */
    height: 3rem;
    /* overflow: hidden; */
}

#prMore .proCon{
    width: 100%;
    height: auto;
    /* overflow: hidden; */
    margin-bottom: 10px;
}
#prMore .con .more{
    height: 64px;
}
#prMore .con .more img{
    margin: 0 auto;
    width: 20px;
    height: 30px;
}
#prMore .con .more p{
    text-align: center;
    line-height: 14px;
    font-size: 14px;
    margin-top: 10px;
}
#prMore .proCon .more img{
    width: 25px;
    height: 40px;
}
#prMore .proCon .pr{
    width: 100%;
    height: 6.49rem;
    /* background: #ccc; */
    overflow: hidden;
}
#prMore .proCon .pr img{
    width: 100%;
    height: 4.68rem;
}
#prMore .proCon .pr .two{
    display: flex;
   justify-content: space-between;
   margin-top: 12px;
   align-items: baseline;
   font-family: "PingFangSC-Regular";
}
#prMore .proCon .pr .two p:nth-child(1){
   font-size: 18px;
   color: #1E1C1C;
}
#prMore .proCon .pr .two p:nth-child(2){
   font-size: 14px;
   color: #797979;
}
#prMore .proCon .pr .two i{
   font-style: normal;
}
#prMore .proCon .pr .three{
    font-size: 12px;
    line-height: 12px;
    padding-top: 8px;
   color: #797979;

}
</style>
