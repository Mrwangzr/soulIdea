<template>
    <div class="otherUserThree">
        <div class="head">
            <div class="t"></div>
            <div class="name">
                <i class="iconfont icon-right" @click="handle()"></i>
                平面图册
            </div>
        </div>
        <div class="wrapper" ref="wrapper">
            <div class="content">
                <img v-for="(item,index) in arr " :src="item.src" alt="" @click="handleDetail(item.id)">
            </div>
        </div>
        
    </div>
</template>

<script >
import axios from "axios";
import Vuex from "vuex";
import Bscroll from "better-scroll";
export default {
    data(){
        return{
            arr:[]

        }
    },
    created(){
        axios({
            method:"get",
            url:"http://localhost:3000/image"

        }).then((data)=>{
            this.arr = data.data;
        })
            
    },
    mounted(){
        var scroll = new Bscroll(this.$refs.wrapper,{
            click:true,
            pullUpLoad:true,
        });
        // this.scroll.on("pullingUp",()=>{
            
        // })
        

    },
    computed:{


    },
    methods:{
        handle(){
            this.$router.back();
        },
        handleDetail(val){
            this.$router.push({name:"otherUserFour",params:{id:val}})
        }

    }
    

}
</script>

<style scoped >
    *{
        font-family: "PingFangSC-Regular";
    }
    .otherUserThree{
        width: 100%;
        height: 100%;
        overflow: hidden;
        
    }
    .otherUserThree .head{
        padding-top: .4rem;
        width: 100%;
        height: 1.28rem;
        background: #fff;
        line-height: .88rem;
        font-size: 18px;
        color: #000;
        position: relative;
    }
    .otherUserThree .head i{
        display: block;
        position: absolute;
        left: 10px;
        font-size: 24px;
    }
    .wrapper{
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 1.28rem;

    }
    .wrapper .content{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top: 15px;

    }
    .wrapper .content img{
        width: 3.36rem;
        height: 6.08rem;
        margin-bottom: 15px;

    }


    

</style>
