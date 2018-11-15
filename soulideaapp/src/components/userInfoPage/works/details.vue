<template>
	<div class="details">
		<div class="details-bigimg" @click="conceal()">
			<img :src="product.src">
			<div class="details-L" @click="back()">
				<img src="../../../../static/sorksimage/details/fh.png">
			</div>
			<div class="details-R" @click="cancel(index)">
				删除
			</div>
		</div>
		<div class="details-mark" v-show="show"></div>
		<div class="details-text" v-show="show">
			<p>{{product.contant}}</p>
			<p>
				<img src="../../../../static/sorksimage/details/logo.png">
			</p>
		</div>
		
	</div>
	
</template>

<script>
import Vuex from "vuex"
export default {
	created(){
		this.id = this.$route.query.id;
		this.getproduct(this.id);
		this.index = this.id
	},
	data() {
		return {
			show:true,
			index:""
		};
	},
	computed: {
		...Vuex.mapState({
			product:state=>state.production.getproduct
		})
	},
	methods: {
		back(){
			this.$router.back()
		},
		conceal(){
			this.show = !this.show
		},
		...Vuex.mapActions({
			getproduct:"getproduct",
			deletedData:"deletedData"
		}),
		cancel(index){
			this.deletedData(index);
			this.$router.back()
		}
	},
}
</script>

<style scoped>
.details-bigimg{
	position: relative;
}
.details-bigimg img{
	width: 100%;
}
.details-L{
	position: absolute;
	top: .65rem;
	left: .31rem;
	width: .19rem;
	height: .37rem;
}
.details-R{
	width: .88rem;
	height: .34rem;
	position: absolute;
	top: .67rem;
	right: .24rem;
	background:rgba(255,0,0,1);
	border-radius:7px;
	font-size:11px;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(238,238,238,1);
	text-align: center;
}
.details-mark{
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 2.84rem;
	background: #000000;
	opacity:0.5;
}
.details-text{
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 2.84rem;
	padding-left: .48rem;
	display: flex;
	align-items: center;
	z-index: 2;
}
.details-text p:nth-child(1) {
	display: block;
	font-size:.26rem;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(250,250,250,1);
	line-height: .51rem;
	text-indent: .2rem;
	overflow: hidden;
	width: 6.22rem;
	height: 1.65rem;
}
.details-text p:nth-child(2) img{
	width: .35rem;
	height: .35rem;
	position: absolute;
	top:.14rem;
	left: .48rem;
	
}
</style>
