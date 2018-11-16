<template>
    <div id="otherUserHome">
        <!-- 头像 -->
        <otherHeader-com></otherHeader-com>
        <!-- 作品集 -->
        <div class="pro">
            <p>作品集</p>
        </div>
        <!-- 容器 -->
        <more-com></more-com>
        
        


    </div>
</template>

<script>
import otherHeader from "./one/otherHeader";
// import prMore from "./one/more.vue";
import pMore from "./one/more"

export default {
    data(){
        return{

        }
    },
    components:{
        "otherHeader-com":otherHeader,
        "more-com":pMore

    },
    created(){

    },
    computed:{

    },
    methods:{

    }
    

}
</script>

<style>


#otherUserHome{
    width: 100%;
    height: 100%;
    background: #fff;
}

/*作品集*/
#otherUserHome .pro{
    border-radius: 10px;
    width: 7.02rem;
    height: 1.18rem;
    margin-bottom: 23px;
    background:url("../../../static/otherHomeImg/bg.png") no-repeat;
    background-size: 7.02rem 1.18rem;
    margin-left: 12px;

}
#otherUserHome .pro p{
    color: #fff;
    font-size: 25px;
    text-align: center;
    padding-top: 15px;
    letter-spacing: 8px;
}


</style>
