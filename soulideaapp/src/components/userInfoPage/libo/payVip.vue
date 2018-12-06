<template>
    <div class="payMoney">
		<p class="text">灵点会员套餐</p>
		<div class="payMoney-in">
			<div 
				v-for="(item,index) in list"
				:class="active == index?'active':''"
				@click ="handlerBtn(index)"
			>
				<p>{{item[0]}}度vip</p>
				<p>￥{{item[1]}}元</p>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
		data(){
			return{
				list:[["月",15],["季",45],["年",125]],
				active:0,
			}
		},
		methods:{
			handlerBtn(index){
				this.active = index;
				// console.log(this.list[index][1]);
				this.$emit("byVal",this.list[index][1]);
			}
		},
    }
</script>
	
<style scoped>
	.text{
		padding-left:.5rem;
		width:3rem;
		text-align: left;
		height:1.2rem;
		line-height: 1.2rem;
		font-size:.36rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(121,118,118,1);
	}
	.payMoney-in{
		padding:0 .43rem 0.4rem .43rem;
		display: flex;
		justify-content:space-between;
		flex-wrap: wrap;
		
	}
	.payMoney-in div{
		width:6.63rem;
		height:1.06rem;
		background:rgba(255,255,255,1);
		box-shadow:0px 7px 7px 1px rgba(167,167,167,0.3);
		border-radius:5px;
		display: flex;
		justify-content:space-between;
		align-items: center;
		margin-bottom:.2rem;
	}
	.payMoney-in div p:nth-child(1){
		width:2rem;
		height:1.25rem;
		font-size:.34rem;
		font-weight:500;
		color:rgba(121,118,118,1);
		margin-bottom:.2rem;
		line-height:1.5rem;
	}
	.payMoney-in div p:nth-child(2){
		font-size:.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(246,196,93,1);
		margin-right:.5rem;
	}
	.payMoney-in .active{
		background: url(../../../assets/imgLibo/bk.png) no-repeat;
		background-size:contain;
	}
</style>
