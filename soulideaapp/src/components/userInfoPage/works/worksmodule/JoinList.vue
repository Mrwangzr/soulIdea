<template>
	<div>
			<div class="JoinList">
				<h3>选择作品集</h3>
				<div v-for="(item,index) in names" 
				:class="activeIndex == index?'active':''"
				@click="handleToggle(index)">
					<p @click="handleToggle(index)">{{item.name}}</p>
				</div>
			</div>
	</div>
</template>

<script>
import Vuex from "vuex"
export default {
		data() {
			return {
				names:[
					{
						name:"最美"
					}
				],
				activeIndex:0
			};
		},
		methods: {
			handleColor(index){
				this.activeIndex = index
			},
			handleToggle(params){
				this.$emit("handleMark",false)
			}
		},
}
</script>

<style scoped>
.mark{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: #000;
	opacity:0.3;
}
.JoinList{
	width: 50%;
	background: #fff;
	position: absolute;
	left: 25%;
	top: 30%;
	height: 4rem;
	z-index: 1;
	border-radius: 6%;
	overflow: hidden;
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
