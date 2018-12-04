<template>
    <div id="otherUserFour">
        <div class="con">
            <div class="prImg" @click="handleHide()">
                 <i class="iconfont icon-right" @click="handle()"></i>
                <img src="../../../static/four/four.png" alt="">
            </div>
            <!-- <transition name="hide"> -->
                <div class="mark" v-show="show"></div>
                <div class="text" v-show="show">
                    在漫长的软件发展中，界面设计工作一直没有被重视,
                    做界面设计的人也别贬义称为“美工”。其实软件界面设
                    就像工业产品中的工业造型设计一样，是产品的重要卖
                    一个友好美观的界面会给人带来舒服的视觉享受，拉近...
                </div>
            <!-- </transition> -->
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show:true

        }
    },
    //接收图片的id值
    props:["id"],

    
    created(){
        

    },
    computed:{

    },
    methods:{
        handleHide(){
            this.show = !this.show;
            console.log(this.id);
        },
         handle(){
            this.$router.back();
        },

    }
    

}
</script>

<style>
    #otherUserFour{
        width: 100%;
        height: 100%;
        /* background: pink; */
    }
    #otherUserFour .con{
        width: 100%;
        height: 100%;
        position: relative;
    }
    #otherUserFour .con prImg{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .prImg i{
        position: fixed;
        display: block;
        left: 15px;
        top: 15px;
        z-index: 1000;
        font-size: 24px;
        color: #fff;
        
    }
     #otherUserFour .con .prImg>img{
         width:100%;
         height: 100%;
         /* height: 13.34rem; */
     }
     #otherUserFour .con .mark{
         width: 100%;
         height: 2.84rem;
         position: absolute;
         bottom: 0px;
         background: #333;
         opacity: .3;
     }
      #otherUserFour .con .text{
         width: 100%;
         height: 2.84rem;
         position: absolute;
         bottom: 0;
         color: #fff;
         font-size: 14px;
         line-height: 30px;
         padding: 15px 25px;
         overflow: hidden;
         text-overflow: ellipsis;
     }
   
</style>
