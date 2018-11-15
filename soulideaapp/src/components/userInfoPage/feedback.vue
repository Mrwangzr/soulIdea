<template>
	<div class="box">
		<div class="set">
			<router-link to="/set">
				<li class="iconfont icon-right"></li>
			</router-link>
			<li>意见反馈</li>
			<li></li>
		</div>
		<div class="info"> 
			<li>内容反馈:</li>
			<textarea class="info-text" style="resize: none;" name="textareal"></textarea>
		</div>
		<div class="evaluate">
			<li>评价我们：</li>	
			<div class="eva-input">
				<li><input type="radio" name="a" checked="checked">满意</input></li>
				<li><input type="radio" name="a">一般</input></li>
				<li><input type="radio" name="a">不满意</input></li>		
			</div>
		</div>
		<div class="submit" @click="submit()">
			<!-- <router-link to="/set"> -->
				<img src="../../../static/image/feedback/提交.png" />
			<!-- </router-link>	 -->
			<li v-show="show">提交成功!</li>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				show:false
			}
		},
		methods:{
			//点击提交，显示提交成功，3s后跳转到设置页面（set.vue）
			submit(){
				this.show=true;
				alert(1);
				setTimeout(()=>{
					this.show=false;
					this.$router.push('/set');
					
				},3000)
			}
		}
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
</style>