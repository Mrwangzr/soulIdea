<template>
	<div class="money">
		<div class="blank"></div>
		<div class="head">
			<span @click="handlerBack()"></span>
			点点钱包</div>
		<div class="cont">
			<div class="icon"></div>
			<p>余额</p>
			<div class="money-rmb">￥100</div>
		</div>
		<div 
			class="pay-money"
			v-for="(item,index) in list"
			:class="cash == index? 'cash':''"
			@click="handlerCash(index)"
		>{{item}}</div>
	<div class="pay-vip" @click="handlerGo()">>>充值VIP，解锁更多新功能^^~</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list:["充值","提现"],
				cash:""
			};
		},
		methods:{
			handlerCash(index){
				this.cash = index;
				if(index == 0){
					this.$router.push({name:"pay"});
				}
			},
			handlerBack(){
				this.$router.back();
				window.reload();
			},
			handlerGo(){
				this.$router.push({name:"pay"});
			}
		}
	}
</script>

<style scoped>
.money{
	height:13.34rem;
}
.blank{
		height:.4rem;
		background:#F6C45D;
}
.head{
	height:.88rem;
	font-size:.4rem;
	font-family:PingFang-SC-Heavy;
	font-weight:800;
	color:rgba(255,254,250,1);
	line-height:.88rem;
	background:#F6C45D;
	position: relative;
}
.head span{
	position: absolute;
	display: block;
	height:.4rem;
	width:.4rem;
	background:red;
	left:.43rem;
	top:.26rem;
	background: url(../../../assets/imgLibo/liaotian_back_nor@2x.png) no-repeat;
	background-size:contain;
}
.cont{
	height:4rem;
	background: #F8F8F8;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background:#F6C45D;
	margin-bottom:.6rem;
}
.cont .icon{
	height:1.3rem;
	width:1.3rem;
	background: url(../../../assets/imgLibo/yue_money_nor@2x.png) no-repeat;
	background-size: contain;
}
.cont p{
	margin-top:.3rem;
	font-size:.4rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(255,254,250,1);
}
.money-rmb{
	font-size:.9rem;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(255,254,250,1);

}
.pay-money{
	margin:.26rem auto;
	width:7.02rem;
	height:1rem;
	background:rgba(248,248,248,1);
	font-size:.4rem;
	font-family:PingFang-SC-Light;
	font-weight:300;
	color:rgba(41,41,41,1);
	line-height:1rem;
}
.cash{
	color:rgba(255,254,250,1);
	background:rgba(246,196,93,1);
}
.pay-vip{
	font-size:.36rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(246,196,93,1);
	margin-top:1.95rem;
}
</style>
