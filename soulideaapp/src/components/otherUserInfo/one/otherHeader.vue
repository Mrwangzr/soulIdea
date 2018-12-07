<template>
    <div id="header">
        <!-- 头像 -->
        <div class="head">
            <div class="headImg">
                <img src="../../../../static/otherHomeImg/head.png" alt="">
            </div>
            <p><i></i> LV:10</p>
            <p>这是大笨蛋</p>
            <p>账号：wang123456789</p>
            <div class="bottom">
                <li>
                    <i>32650</i>
                    <em>粉丝数</em>
                </li>
                <li>
                     <i>8520</i>
                    <em>关注</em>
                </li>
                <li>
                     <i>750</i>
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
            
        }
    },
    created(){
        // this.getHomeMessage();

    },
    methods:{
        // getHomeMessage(){
        //     axios({
        //         method:"get",
        //         url:"Soulidea-1.0/showreel/getshowreel?id=2&orderby=0"

        //         }).then((data)=>{
        //             // this.arr = data.data;
        //             console.log(data);
        //         })
        //      }
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
