<template>
		<div class="wrapper bigbox" ref="wrapper">
			<div class="JoinList content">
					<h3>选择作品集</h3>
					<div v-for="(item,index) in TitleWork" 
					:class="activeIndex == index?'active':''"
					@click="handleToggle(index)">
						<p @click="handleToggle(index)">{{item.name}}</p>
					</div>
			</div>
		</div>
</template>

<script>
import BScroll from "better-scroll"
import Vuex from "vuex"
export default {
		created(){
			this.observer.$on("AddportfolioId",(id)=>{
				console.log(id)
			}),
			this.GetTitleWork()
		},
		data() {
			return {
				activeIndex:0
			};
		},
		computed:{
			...Vuex.mapState({
				TitleWork:state=>state.production.GetTitleWork
			})
		},
		methods: {
			handleColor(index){
				this.activeIndex = index
			},
			handleToggle(params){
				this.$emit("handleMark",false)
			},
			...Vuex.mapActions({
				GetTitleWork:"GetTitleWork"
			})
		},
		mounted(){
			this.scroll = new BScroll(this.$refs.wrapper,{
					click:true,
					pullUpLoad:true
					
			})
		},
		updated () {
				//重新计算高度
				this.scroll.refresh();
				//当数据加载完毕以后通知better-scroll
				this.scroll.finishPullUp();
		}
}
</script>

<style scoped>
.bigbox{
	overflow: hidden;
	width: 50%;
	height: 4rem;
	position:fixed;
	left: 25%;
	top: 30%;
	border-radius: 6%;
	
}
.JoinList{
	width: 100%;
	background: #fff;
	z-index: 1;
}
.JoinList h3{
	height:.5rem;
	border-bottom: 1px solid #CCC;
	color:#F6C45D ;
}
.JoinList div p {
	width: 100%;
	height: .6rem;
	border-bottom: 1px solid #CCC;
	text-align: center;
	line-height: .6rem;
	font-family:PingFang-SC-Heavy;
	font-weight:800;
	color: #333;
}
.active p{
	background: #F6C45D;
	color: #fff!important;
}
</style>
