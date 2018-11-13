<template>
	<div class="production">
		<!-- 头部 -->
		<div class="header">
			<img src="../../../../static/sorksimage/production/fanhui.png" @click="back()">
			<p>作品</p>
		</div>
		<!-- 作品集 -->
		<div class="production-nav" @click="productionSkip()">
			<p>作品集</p>
			<p><img src="../../../../static/sorksimage/production/xiayibu.png"></p>
		</div>
		<!-- 作品列表 -->
		<div class="production-list">
			<p class="bigimg"><img src="../../../../static/sorksimage/production/qiche.png"></p>
			<div class="production-list-b">
				<div class="production-list-b-l">
					<p>【Mustang 野马战机】ALL 4K</p>
					<p>2018/09/21</p>
				</div>
				<div class="production-list-b-r" @click="bigimgSkip()">
					<img src="../../../../static/sorksimage/production/jiaru.png">
				</div>
			</div>
			<div class="production-list-yanjing">
				<p><img src="../../../../static/sorksimage/production/yanjing.png"></p>
				<p>2.1万</p>
			</div>
			<div class="production-list-yanjing-r">
				<p><img src="../../../../static/sorksimage/production/dianzan.png"></p>
				<p>1.2万</p>
			</div>
		</div>
	</div>
</template>

<script>
import Vuex from "vuex"
export default {
	
	methods: {
		productionSkip() {
			this.$router.push({name:"WorksCollection"})
		},
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
	position: relative;
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
.production-list{
	margin-top: .2rem;
	position: relative;
}
.production-list .bigimg img{
	width: 100%;
	height: 4rem;
}
.production-list-b{
	width: 100%;
	height: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right:.25rem;
	
}
.production-list-b-l{
	text-align: left;
	padding-left: .25rem;
}
.production-list-b-l p:nth-child(1){
	font-size:.3rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(41,41,41,1);
}
.production-list-b-l p:nth-child(2){
	font-size:.22rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(155,155,155,1);
}
.production-list-b-r img{
	width: 1.2rem;
	height: .32rem;
}
.production-list-yanjing{
	position: absolute;
	top: 3.61rem;
	left: .24rem;
	display: flex;
	justify-content: space-between;
	align-items:baseline;
}
.production-list-yanjing p img{
	width: .2rem;

}
.production-list-yanjing p:nth-child(2){
	font-size:.2rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(234,234,234,1);
	margin-left: .07rem;
}
.production-list-yanjing-r{
	position: absolute;
	top: 3.61rem;
	right: .25rem;
	display: flex;
	justify-content: space-between;
	align-items:baseline;
}
.production-list-yanjing-r p img{
	width: .2rem;
}
.production-list-yanjing-r p:nth-child(2){
	font-size:.2rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(234,234,234,1);
	margin-left: .07rem;
}

</style>
