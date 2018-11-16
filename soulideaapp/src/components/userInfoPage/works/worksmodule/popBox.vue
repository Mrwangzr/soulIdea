<template>
	<div class="box" v-show="show">
		<h2>您确定要删除吗？</h2>
		<div>
			<button @click="cencel()">取消</button>
			<button @click="SureDelete()">确定</button>
		</div>
		
	</div>
</template>

<script>
	import Vuex from "vuex"
	export default {
		data() {
			return {
				show:true
			};
		},
		methods:{
			cencel(){
				this.show = false
			}
		}
	}
</script>

<style scoped>
.box{
	height: 2rem;
	width: 4rem;
	background: #fff;
	position: fixed;
	left: 50%;
	top: 50%;
	margin-left: -2rem;
	margin-top: -1rem;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
}
.box h2{
	color: #c33;
}
.box div{
	width:100%;
	display: flex;
	justify-content:space-around
}
.box div button{
	border: none;
	font-size:.34rem ;
	background: #fff;
	font-weight: 500;
	font-family:PingFang-SC-Bold;
}
</style>
