<template>
	<div class="beautiful">
		<header class="beautifulHeader">
			<p @click="back()"><img src="../../../../static/sorksimage/production/fanhui.png"></p>
			<p>最美</p>
		</header>
		<div class="beautifulList" @click="detailsGo()">
			<img src="../../../../static/sorksimage/beautiful/hongjiu.png">
		</div>
		
	</div>
</template>

<script scoped>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			detailsGo(){
				this.$router.push("/details")
			},
			back(){
				this.$router.back()
			}
		},
	}
</script>

<style>
.beautiful{
	padding-top: .4rem;	
	
}
.beautifulHeader{
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
	margin-bottom: .32rem;
}
.beautifulHeader img{
	width: 0.2rem;
	height: 0.41rem;
	position: absolute;
	left: 0.34rem;
	top: 0.24rem;
}
.beautifulList{
	width: 3.68rem;
	height: 3.4rem;
	border:1px dashed #ccc;
	float: left;
	margin: 0 0 .02rem .05rem;
}
.beautifulList img{
	width: 100%;
}
</style>
