<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<div class="workslist" 
				v-for="(item,index) in productionList" 
				@click="beautifulGo()"
				>
				<img :src="item.url">
				<p>{{item.name}}</p>
			</div>
		</div>
	</div>
</template>

<script>
import Vuex from "vuex"
import BScroll from "better-scroll"
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
			
		},
		mounted(){
			new BScroll(this.$refs.wrapper)
			console.log(BScroll)
		}
	}
</script>

<style>
.wrapper{
	overflow: hidden;
	height: 100%;
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
