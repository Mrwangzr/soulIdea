<template>
    <div class="pay">
		<div class="blank"></div>
		<div class="head">充值
			<span @click="handlerBack()"></span>
		</div>
		<div class="cont">			
			<div class="pay-on">
				<li 
					v-for="(item,index) in navs"
					:class="active == index? 'active':''"
					@click = 'handlerToggle(index)'
				>{{item}}</li>
			</div>

				<keep-alive>
			<component :is="comNames" v-on:byVal="getVal"></component> 
				</keep-alive>

			 
			<div class="cont-bottom">
				<div class="line"></div>
				<p>支付方式</p>
				<div class="pay-methods">
					<div class="left">微信支付</div>
					<div class="reight" @click="handleShow()">
						<div class="circle" v-show="show"></div>
					</div>
				</div>
				
				
				
					<form  action="http://ceshi.chenjunbo.xin/payment/weixinpay" method="get">
											
							<input type="hidden" name="orderId" v-model="orderId">                  
						<input type="hidden" name="price" v-model="money">
						 <input type="hidden" name="body" value="jinbi">
					 <input type="hidden" name="url" value="http://localhost:8080/success">
					<input type="submit" class="pay-go"  :class="show == true? 'pay-sure':''"
					@click="handlePay()" value="确认支付" :disabled="show == true? false : true">

		
			 </form>
				
				
			
				
			</div>
		</div>
	

	</div>
</template>

<script>
	import axios from "axios";
	import payMoney from "./payMoney";
	import payVip from "./payVip";
    export default {
        data(){
			return{
				navs:["点币充值","会员充值"],
				active : 0,
				comNames:"payMoney-com",
				show:"",
				money:"1",
				body:"jinbi",
				orderId:"",
				url:"http://localhost:8080/getweixinback"
			}
		},

		methods:{
				getVal(val){
					this.money = val;
				},
        handlerToggle(index){
					this.active = index;
					switch(index){
						case 0:
                this.comNames = "payMoney-com"
                break;
            case 1:
                this.comNames = "payVip-com"
                break;
            }
           },
		   handleShow(){
				this.show = !this.show;
				var date = new Date;
				this.orderId = date.getTime();
				console.log(this.orderId);
		   },
		   handlePay(){				 
				
			   if(this.show){
				  
				   // window.location.href = 'http://ceshi.chenjunbo.xin/payment/weixinpay?body="jinbi"&orderId="zzzzzz_17864308316"&url="http://localhost:8080/getweixinback"';
				
			   } 
		   },
		   handlerBack(){
			   this.$router.back();
		   }
		   
       },
	   components:{
		   "payMoney-com":payMoney,
		   "payVip-com":payVip,
	   }
    }
</script>

<style scoped>
	.pay{
		height:13.34rem;
		width:7.5rem;
		display: flex;
		flex-direction: column;
	}
	.blank{
		height:.4rem;
		background:#fff;
	}
	.head{
		width:100%;
		height:.88rem;
		text-align: center;
		line-height: .88rem;
		font-size:.34rem;
		font-family:PingFang-SC-Heavy;
		font-weight:800;
		color:rgba(41,41,41,1);
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
		background: url(../../../assets/imgLibo/fh@2x.png) no-repeat;
		background-size:contain;
		
	}
	.cont{
		flex:1;
		background: #F8F8F8;
	}
	.pay-on{
		height:1rem;
		margin-top:.2rem;
		display: flex;
		flex-direction:row;
		justify-content: space-between;
	}
	.pay-on li{
		width:3.74rem;
		height:1rem;
		font-size:.36rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(121,118,118,1);
		line-height: 1rem;
		text-align: center;
		background: #fff;
	}
	.pay-on .active{
		color:rgba(255,255,255,1);
		background: #F6C45D;
	}
	.cont-bottom{
		display: flex;
		flex-direction:column;
		align-items: center;
	}
	p{
		height:.32rem;
		text-align:left;
		width:6.5rem;
		font-size:.32rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(121,118,118,1);
		margin-top:.6rem;
	}
	.pay-methods{
		height:.6rem;
		width:6.5rem;
		margin-top:.25rem;
		display: flex;
		justify-content: space-between;
	}
	.pay-methods .left{
		height:.6rem;
		background: url(../../../assets/imgLibo/wx@2x.png) no-repeat;
		background-size: contain;
		padding-left:.81rem;
		font-size:.32rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(121,118,118,1);
		line-height: .6rem;
	}
	.pay-methods .reight{
		height:.36rem;
		width:.36rem;
		border:2px solid rgba(191,191,191,1);
		border-radius:50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.circle{
		height:.16rem;
		width:.16rem;
		background:rgba(246,196,93,1);
		border-radius:50%;
	}
	.pay-go{
		border: none;
		margin-top:2rem;
		width:5rem;
		height:1rem;
		background:#ccc;
		border-radius:5px;
		font-size:.36rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		line-height: 1rem;
	}
	.line{
		height:.01rem;
		width:6.5rem;
		border-top:.01rem solid rgba(236,236,236,1);
	}
	.pay-sure{
		background:rgba(246,196,93,1);
		color:rgba(255,255,255,1);
	}
</style>
