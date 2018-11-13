<template>
	<div class="WorksCollection">
		<header class="worksHeader">
			<p @click="back()"><img src="../../../../static/sorksimage/production/fanhui.png"></p>
			<p>作品集</p>
			<p @click="newConstruction()">建立</p>
		</header>
		<div class="workslist" v-for="(item,index) in productionList" @click="beautifulGo()">
			<img :src="item.url">
			<p>{{item.name}}</p>
		</div>
	</div>
</template>

<script>
import Vuex from "vuex"
export default {
		data() {
			return {
				
			};
		},
		computed: {
			...Vuex.mapState({
				productionList:state=>state.production.productionList
			})
		},
		methods: {
			beautifulGo(){
				this.$router.push("/beautiful")
			},
			back(){
				this.$router.back()
			},
			newConstruction(){
				this.$router.push("/newConstruction")
			}
		},
	}
</script>

<style scoped>
.WorksCollection{
	padding-top: .4rem;	
	}
.worksHeader{
	background: #fff;
	width: 100%;
	height:0.88rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding:0 .25rem 0 .34rem;
	margin-bottom: .24rem;
}
.worksHeader p:nth-child(2){
	font-size:.34rem;
	font-family:PingFang-SC-Heavy;
	font-weight:800;
	color:rgba(41,41,41,1);
}
.worksHeader p:nth-child(3){
	font-size:.28rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(149,149,149,1);
}

.worksHeader img{
	width: 0.2rem;
	height: 0.41rem;
	}
.workslist{
	width: 3.26rem;
	height: 4.4rem;
	background:rgba(255,255,255,1);
	box-shadow:0px 6px 7px 4px rgba(205,205,205,1);
	border-radius:10px;
	margin: .24rem;
	float: left;
}
.workslist img{
	width: 100%;
}
.workslist p{
	margin-left: .21rem;
	font-size:.3rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:#292929;
	text-align: left;
}
</style>
