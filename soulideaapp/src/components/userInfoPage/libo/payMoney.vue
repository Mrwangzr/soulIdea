<template>
    <div class="payMoney">
		<div class="payMoney-in">
			<div 
				v-for="(item,index) in list"
				:class="active == index?'active':''"
				@click ="handlerBtn(index)"
			>
				<p>{{item[0]}}点点币</p>
				<p>￥{{item[1]}}元</p>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
		data(){
			return{
				list:[[60,6],[100,10],[200,20],[300,30],[500,50],[1000,100]],
				active:0,
				howMoney:0,
			}
		},
		methods:{
			handlerBtn(index){
				this.active = index;
				this.howMoney = this.list[index][1];
			}
		},
    }
</script>
	
<style scoped>
	.payMoney-in{
		padding:.8rem .5rem .8rem .5rem;
		display: flex;
		justify-content:space-between;
		flex-wrap: wrap;
		
	}
	.payMoney-in div{
		width:2rem;
		height:1.48rem;
		background:rgba(255,255,255,1);
		box-shadow:0px 7px 7px 1px rgba(167,167,167,0.3);
		border-radius:5px;
		display: flex;
		flex-direction: column;
		justify-content:center;
		align-items: center;
		margin-bottom:.2rem;
	}
	.payMoney-in div p:nth-child(1){
		font-size:.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(41,41,41,1);
		margin-bottom:.2rem;
	}
	.payMoney-in div p:nth-child(2){
		font-size:.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(246,196,93,1);
		
	}
	.payMoney-in .active{
		background: url(../../../assets/imgLibo/pay-background1.png) no-repeat;
		background-size:contain;
	}
</style>
