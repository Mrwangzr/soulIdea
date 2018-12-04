<template>
		<div class="bigdiv">
				<header class="beautifulHeader">
					<p @click="back()"><img src="../../../../static/sorksimage/production/fanhui.png"></p>
					<p>{{title}}</p>
				</header>
			<Allworkslist-com :getId="getid"></Allworkslist-com>
		</div>
		
</template>

<script>
	
const Allworkslist = ()=> import("./worksmodule/AllworksList")
import	Vuex from "vuex"
export default {
	created(){
			this.title = this.$route.query.name;
			this.getid = this.$route.query.id
		},
		components:{
			"Allworkslist-com":Allworkslist
		},
	data() {
			return {
				title:""
			};
		},
		watch:{
			"$route"(to,from){
				this.title = to.query.name;
			}
		},
	methods: {
		back(){
			this.$router.back()
		}
	},
}
</script>

<style scoped>
.bigdiv{
	height: 100%;
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
</style>
