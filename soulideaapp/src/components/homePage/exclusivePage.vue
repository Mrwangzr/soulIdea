<template>
    <div class="Exclusive">
        <div class="Tier">
            <p>v.1</p>
            <p>v.2</p>
            <p>v.3</p>
            <p>v.4</p>
            <p>v.5</p>
        </div>
        <div class="Personage">
            <div class="Personage_1">
                <div class="Personage_2">
                    <img src="../../../static/img/logo.png">
                    <p>昵称 v.1</p>
                </div>

                <div class="video">
                    <img src="../../../static/img/t017eab4075c115d158.png" alt="">
                </div>
            </div>

        </div>
</div>
</template>


<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
  
}
</script>


<style>
    .Exclusive{
        width:100%;
        /* height:12rem; */
    }
    .Tier{
        width:100%;
        height:0.8rem;
        background:#FFFFFF;
        border-bottom:0.1rem solid  rgb(223, 223, 223);
        display:flex;
        justify-content:space-around;
        line-height:0.8rem

    }
    .Tier p:nth-child(1){
        color:#F6C45D
    }
    .Personage{
        width:100%;
        height:10.28rem;
    }
    .Personage_1{
        width:100%;
        height:4.47rem;
        /* background:blueviolet; */
    }
    .Personage_2{
        width:100%;
        height:.69rem;
        /* background:pink; */
        position: relative;
    }
    .Personage_2 img{
        width:0.63rem;
        height:0.64rem;
        margin:1.5px 11.5px 0 12px
    }
    .Personage_2 p{
        width:100px;
        height:34px;
        position: absolute;
        left:25px;
        top:9px
    }
    .video{
        width:5rem;
        height:3.5rem;
        background:#fff;
        margin-left:0.88rem
    }
    .video img{
        width:5rem;
        height:3.5rem
    }
     
   



  
</style>