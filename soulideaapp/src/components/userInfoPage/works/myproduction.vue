<template>
	<div class="production">
		<!-- 头部 -->
		<div class="header">
			<img src="../../../../static/sorksimage/production/fanhui.png" @click="back()">
			<p>作品</p>
		</div>
		<!-- 作品集 -->
		<router-link to="/WorksCollection">
			<div class="production-nav">
				<p>作品集</p>
				<p><img src="../../../../static/sorksimage/production/xiayibu.png"></p>
			</div>
		</router-link>
	
		<!-- 作品列表 -->
		<ListWorks-com></ListWorks-com>
	</div>
</template>

<script>
import ListWorks from "./worksmodule/Listofworks.vue"
export default {
	components:{
		"ListWorks-com":ListWorks
	},
	methods: {
		back(){
			this.$router.back()
		}
	},
}
</script>

<style scoped>
.production{
	padding-top: .4rem;
}
.header{
	background: #fff;
	width: 100%;
	height:0.88rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.34rem;
	color: #292929;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(41,41,41,1);
	line-height:0.15rem;
	position:relative;
}
.header img{
	width: 0.2rem;
	height: 0.41rem;
	position: absolute;
	left: 0.34rem;
	top: 0.24rem;
}
.production-nav{
	width: 100%;
	height: 1rem;
	margin-top: 0.1rem;
	background: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 .24rem;
	margin-bottom: .2rem;
}
.production-nav p{
	font-size: .3rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(41,41,41,1);
}
.production-nav p img{
	width: 0.16rem;
	height: 0.32rem;
}



</style>
