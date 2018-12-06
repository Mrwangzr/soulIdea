<template>
         <div class="content_else_comment">
            <div><img src="../../../../../static/commentImg/timg.jpg" alt=""></div>
            <div class="user_comment">
                <p>我的名字<span>v6</span> </p>
                <p>风景不错呦！顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶水水水水水水水水水水水水水水水水水水水</p>
                <p>今天<span>12：00</span></p>
            </div>
      </div>

</template>
<script>

export default {
    
}
</script>
<style>
    .content_else_comment{
    width:100%;
    height:1.5rem;
    display: flex;
    background:white;
    align-items: center;
    padding-left:.24rem;
    border-top:5px solid #ccc;
}
.content_else_comment .user_comment{
    width:100%;
}
.content_else_comment div:nth-child(1){
    width:.88rem;
    height:.9rem;
    margin-right: .22rem;
}
.content_else_comment div:nth-child(1) img{
     width:.72rem;
    height:.7rem;
}
.content_else_comment div:nth-child(2) p:nth-child(1){
    font-size: 14px;
    font-family:PingFang-SC-Bold;
    color:#292929;
    font-weight: 600;
    text-align:left;
}
.content_else_comment div:nth-child(2) p:nth-child(2){
    width:100%;
    height:.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: .4rem;
    margin:.1rem 0; 
    text-align:left;
    color:#292929;
    border:1px solid #ccc;
    border-radius: .1rem .1rem;
}
 .content_else_comment div:nth-child(2) p:nth-child(3){
    font-size: 12px;
    color:#969696;
    /* margin-top:.1rem; */
    text-align:left;
}
</style>


