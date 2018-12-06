<template>
    <div class="otherUserHome">
        <!-- 头像 -->
        <!-- <otherHeader-com :val="id"></otherHeader-com> -->
        <otherHeader-com :id="id"></otherHeader-com>

        <!-- 作品集 -->
        <div class="pro">
            <p>作品集</p>
        </div>
        <!-- 容器 -->
        <!-- <more-com :val="id"></more-com> -->
        <more-com :val="id"></more-com>





    </div>
</template>

<script>
import otherHeader from "./one/otherHeader";
// import prMore from "./one/more.vue";
import pMore from "./one/more"

export default {
    data(){
        return{
            id:""
        }
    },
    // 接收传值id,并将id传给两个子组件otherheader和 more
  //props:["id"],
    components:{
        "otherHeader-com":otherHeader,
        "more-com":pMore

    },
    created(){
        console.log("route");
        console.log(this.$route);
        this.id = this;$router.query.id;
    },
    computed:{

    },
    methods:{

    }


}
</script>

<style>


.otherUserHome{
    width: 100%;
    height: 100%;
    background: #fff;
}

/*作品集*/
.otherUserHome .pro{
    border-radius: 10px;
    width: 7.02rem;
    height: 1.18rem;
    margin-bottom: 23px;
    background:url("../../../static/otherHomeImg/bg.png") no-repeat;
    background-size: 7.02rem 1.18rem;
    margin-left: 12px;

}
.otherUserHome .pro p{
    color: #fff;
    font-size: 25px;
    text-align: center;
    padding-top: 15px;
    letter-spacing: 8px;
}


</style>
