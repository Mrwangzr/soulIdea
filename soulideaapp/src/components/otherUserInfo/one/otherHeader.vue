<template>
    <div id="header">
        <!-- 头像 -->
        <div class="head" >
            <div class="headImg">
                <img :src="arr.head">
            </div>
            <p><i class="iconfont icon-huangguan ziti"></i>lv:{{arr.level}}</p>
            <p>{{arr.username}}</p>
            <p>账号：{{arr.username}}</p>
            <div class="bottom">
                <li>
                    <i>{{arr.fans}}</i>
                    <em>粉丝数</em>
                </li>
                <li>
                     <i>{{arr.exp}}</i>
                    <em>关注</em>
                </li>
                <li>
                     <i>{{arr.fork}}</i>
                    <em>点赞数</em>
                </li>
            </div>

        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            arr:[],
        }
    },
    //接收父组件传的值id，并将该值发给后端
   props:["id"],

    created(){
        this.getUserMessage();
        // console.log(this.arr);

    },
    methods:{
        getUserMessage(){
            axios({
                method:"get",
                // url:"Soulidea-1.0/user/getotheruserinfo?id=val",
                url:"Soulidea-1.0/user/getotheruserinfo?id=6",

                }).then((data)=>{
                    this.arr = data.data.data;
                })
        }
    }

}
</script>

<style scoped>
/*头像*/
*{
    font-family: "PingFangSC-Medium";
}
#header .head{
    width: 100%;
    height: 6.13rem;
    background:url("../../../../static/otherHomeImg/headBg.png") no-repeat;
    background-size: 7.49rem 6.13rem;
    margin-bottom: 19px;
    padding-top: 40px;
}

#header .head p:nth-of-type(1){
    color: #fff;
    font-size: 12px;

}
#header .head p:nth-of-type(1) .ziti{
    color:yellow;
    padding-right: 5px;

}
#header .head p:nth-of-type(2){
    color: #fff;
    font-size: 18px;
    line-height: 18px;
    padding-top: 10px;

}
#header .head p:nth-of-type(3){
    color: #fff;
    font-size:12px;
    line-height: 12px;
    padding-top: 5px;

}
#header .headImg img{
    width: 1.62rem;
    height: 1.62rem;
    margin: 0 auto;
    border-radius: 50%;
}
#header p{
    text-align: center;
}

#header .bottom{
    display: flex;
    justify-content: space-around;
    /* align-items:flex-end */
    margin-top: 70px;
    color: #fff;
}
#header .bottom li{

    display: flex;
    flex-direction: column;
}
#header .bottom li i,em{
    text-align: center;
    font-style: normal;
    padding: 3px 0;
    font-size: 14px;
}


</style>
