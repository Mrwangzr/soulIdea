<template>
    <div id="otherUserTwo">
        <!-- 头部空白 -->
        <div class="white">

              </div>  

            <!-- name -->
            <div class="name">
                <i class="iconfont icon-right" @click="handleBack()"></i>
                《爱美丽》插画集
            </div> 
      
        <!-- 插画集 -->
        <div class="con">
            <div class="pic" v-for="(item,index) in arr"  @click="handleToThree(index)">
                <img  :src="item.src1" alt="">
                <div class="one">
                    <p>{{item.p1}}</p>
                    <div class="oneR">
                        <p><i class="iconfont icon-yanjing1"></i>{{item.p2}}</p>
                        <p><i class="iconfont icon-dianzan"></i>{{item.p3}}</p>
                    </div>
                </div>
                 <div class="head">
                    <img :src="item.src2" alt="">
                    <p>{{item.p4}}</p>
                 </div>      
                <div class="dis">
                    <dl>
                        <dt>简介:</dt>
                        <dd> {{item.p5}} </dd>
                    </dl>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    data(){
        return{

        }
    },
    created(){
        this.getPics();
        console.log(this);

        // console.log(this.arr);

    },
    computed:{
        ...Vuex.mapState({
            arr:state=>state.otherUserTwo.arr
        })

    },
    methods:{
        ...Vuex.mapActions({
            getPics:"otherUserTwo/getPics"
        }),
        handleBack(){
            this.$router.back();
        },
        handleToThree(){
            this.$router.push("/otherUserThree");
        },
    }
    
    

}
</script>

<style scoped>
    *{
        font-family: "PingFangSC-Regular";
    }
    #otherUserTwo{
        width: 100%;
        height: 100%;
    }
   
    /* 头部空白 */
    .white{
        width: 100%;
        height: .4rem;
        background: #fff;
        position: fixed;
        top: 0;
        /* margin-bottom: 10px; */

    }
    /* 名称 */
    .name{
        width: 100%;
        height: .88rem;
        background: pink;
        text-align: center;
        line-height: .88rem;
        font-size: 20px;
        position: fixed; 
        /* bottom: 0; */
        top: .4rem;

    }
    .name i{
        position: absolute;
        display: block;
        font-size: 26px;
        left: 10px;
    }
    /* 插画集 */
    .con{
        padding-top: 1.1rem;
        background: #f0f0f0;
    }
    .con>.pic{
        padding: 12px  12px;
        background: #fff;
        margin-bottom: 10px;
    }
    .con>.pic>img{
        width: 7.02rem;
        height: 4.56rem;
    }
    .con>.pic>.one{
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        margin-bottom: 8px;
    }
     .con>.pic>.one>p{
         font-size: 18px;
         color: #262525;
         font-weight: bold;
     }
    .con>.pic>.one>.oneR{
        display: flex;
        justify-content: space-between;
        color: #999;
    }
    .con>.pic>.one>.oneR>p:nth-child(1){
        padding-right: 10px;
    }
    .con>.pic>.head{
        display: flex;
        align-items: center;
        margin-bottom: 9px;
        color: #999;

    }
    .con>.pic>.head>img{
        width: .45rem;
        height: .45rem;
    }
    .con>.pic>.head>p{
        padding-left: 5px;
    }
    .con>.pic>.dis{
        color: #494747;
        font-size: 16px;
        line-height: 25px;
        width: 100%;
        padding-bottom: 15px;
    }
    .con>.pic>.dis dd{
        width: 100%;
        height: 48px;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }
    
</style>
