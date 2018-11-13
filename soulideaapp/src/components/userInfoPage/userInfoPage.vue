<template>
    <div class="box">
		<div class="box-top">
			<router-link to="/set">
				<li>设置</li>
			</router-link>
		</div>
		<div class="box-center">
			<div class="photo">
				 
			</div>
			<div class="nickname">
				<li>我的名字叫大白 </li><li> v.9</li>
			</div>
			<li>一个不会写代码的厨子不是个好的设计师</li>
			<div class="fans">
				<span>
					<li>200万</li><li>赞</li>
				</span>
				<span>
					<li>2000</li><li>关注</li>
				</span>
				<span>
					<li>99万</li><li>粉丝</li>
				</span>
			</div>
			
		</div>
		<router-link to="/home">
			<ul class="ul-pay">
				<li>点点钱包</li>
				<li class="iconfont icon-arrow-right"></li>
			</ul></router-link>
		<router-link to="/home">
			<ul class="ul-my">
				<li>我的作品</li>
				<li class="iconfont icon-arrow-right"></li>
			</ul>
		</router-link>
		
	</div>
</template>

<script>
    export default {
        name: "user-info-page",
		//cameras-and-albums
		
     }
</script>

<style scoped>
body,html{
	background: #f8f8f8;
}
.box{
	height: 100%;
	background:#f8f8f8 ;
}
.box-top{
	height: 1.28rem;
	width: 100%;
	padding-top: .4rem;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	background: white;
}
.box-top li{
	font-size: .3rem;
	padding-right: .3rem;
	padding-bottom: .2rem;
}
.box-center{
	height: 4rem;
	width: 100%;
	background:#F6C45D;
	display: flex;
	flex-direction: column;
	color: #ECECEC;
	align-items:center;
	padding-top: .5rem;
}
.box-center .photo{
	background: #ccc;
	height: 1.2rem;
	width: 1.2rem;
	border-radius: .7rem;
	padding-bottom: .1rem;
}
.box-center .nickname{
	display: flex;
	text-decoration: row;
	align-items: flex-end;
	color:#000000;
	padding-top: .1rem;
	padding-bottom: .15rem;
}
.box-center .nickname li:nth-child(1){
	font-size: .3rem;
	padding-right: .06rem;
} 
.box-center .nickname li:nth-child(2){
	font-size: .2rem;
	color: white;
} 
.box-center .fans{
	width: 60%;
	display: flex;
	text-decoration: row;
	justify-content: space-around;
	align-items: center;
	padding-top: .2rem;
}
.box-center .fans span li:nth-child(1){
	color:#fff;
	
}
.box-center .fans span li:nth-child(2){
	color:#ECECEC;
	
}
ul{
	height: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: .1rem 0 ;
	background: white;
	padding: 0  .3rem;
}
.box ul>li{
	font-size: .3rem;
	color: #000;
}
.box-input{
	height: 2rem;
	width: 100%;
	background: red;
}
</style>
