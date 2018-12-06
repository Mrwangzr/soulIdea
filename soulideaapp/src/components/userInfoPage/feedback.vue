<template>
	<div class="box">
		<div class="set">
			<!-- <router-link to="/set">
				<li class="iconfont icon-right"></li>
			</router-link> -->
			<span @click="back">
				<li class="iconfont icon-right"></li>
			</span>
			<li>意见反馈</li>
			<li></li>
		</div>
		<div class="info"> 
			<li>内容反馈:</li>
			<textarea class="info-text" style="resize: none;" name="textareal" v-model="message"></textarea>
		</div>
		<div class="evaluate">
			<li>评价我们：</li>	
			<div class="eva-input">
				<li><input type="radio" name="a" checked="checked">满意</input></li>
				<li><input type="radio" name="a">一般</input></li>
				<li><input type="radio" name="a">不满意</input></li>		
			</div>
		</div>
		<div class="submit" >
			<template>
				<el-button type="text" @click="open4">
					<img src="../../../static/image/feedback/提交.png" />
				</el-button>
			</template>
		</div>
	</div>
</template>

<script scoped>
	import { MessageBox } from 'mint-ui';
	export default{
		data(){
			return{
				show:false,
				message:""
			}
		},
		methods:{
			back(){
				this.$router.back();
			},
			//点击提交，显示提交成功，跳转到设置页面（set.vue）
			open4(){
				if(this.message!=""){
					MessageBox.confirm('确定提交该反馈?').then(action => {
						this.$router.push('/set');
						this.message=null;
					});
				}
			}
		},
		watch:{
			message(newVal,oldVal){
				this.message=newVal;
			}
		},
// 		MessageBox({
// 		  title: '提示',
// 		  message: '确定执行此操作?',
// 		  showCancelButton: true
// 		});
	}
</script>

<style>
html,body{
	background: #f8f8f8;
}

.set{
	width: 100%;
	height: 1.28rem;
	background:white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: .3rem;
	color: #292929;
	font-weight: 900;
	padding: 0 .2rem;
	padding-top: .4rem;
}
.set .iconfont{
	font-size: .4rem;
}
.info{
	height:4rem;
	width: 100%;
	background: white;
	margin-top: .08rem;	
}
.info li{
	text-align: left;
	padding: .4rem 0 0 .15rem;	
}
.info-text{
	width: 5rem;
	height: 2.6rem;
	background: #F4F4F4;
	border: none;
}
.evaluate{
	width: 100%;
	height: 1rem;
	background: white;
	margin-top: .08rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left:.4rem ;
}

.evaluate .eva-input{
	width: 70%;
	color: #292929;
	font-size: .24rem;
	display: flex;
	justify-content: space-around;
}
.submit{
	width: 5rem;
	height: 2.6rem;
	position: absolute;
	left: 1.26rem;
	bottom: 1.83rem;
}
.submit img{
	width: 100%;
}
.submit li{
	padding-top: 1rem;
	font-size:.3rem ;
	color: #F6C45D;
}
.el-message-box{
		width: 6.75rem;
	}
</style>