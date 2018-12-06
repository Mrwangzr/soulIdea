<template>
	<div class="mylist">
		<div class="WorksCollection">
			<header class="worksHeader">
				<p @click="back()"><img src="../../../../static/sorksimage/production/fanhui.png"></p>
				<p>作品集</p>
				<p @click="newConstruction()">建立</p>
			</header>
		</div>
		<Tagboard-com></Tagboard-com>
	</div>
		
</template>

<script>
const Tagboard = ()=>import("./worksmodule/tagboard.vue") 
import Vuex from "vuex"
export default {
		data() {
			return {
				show:false
			};
		},
		components:{
			"Tagboard-com":Tagboard,
		},
		methods: {
			back(){
				this.$router.push("/production")
			},
			newConstruction(){
				this.$router.push("/newConstruction")
			}
		}
	}
</script>

<style scoped>
.mylist{
	height: 100%;
}
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

</style>
