<template>
	<div class="box">
		<div class="set">
			<span @click="back">
				<li class="iconfont icon-right"></li>
			</span>
			<li>设置</li>
			<li></li>
		</div>
		<div class="account">
			<li>账号与安全</li>
			<li class="iconfont icon-arrow-right"></li>
		</div>
		<router-link to="/feedback">
			<div class="account tickling">
				<li>意见反馈</li>
				<li class="iconfont icon-arrow-right"></li>
			</div>
		</router-link>
		<div class="account update">
			<li>检查更新</li>
			<li>灵点2.0.6</li>
		</div>
		<div class="account cache">
			<li>清楚缓存</li>
			<li>358.4M</li>
		</div>
		<div class="logout" @click="handleUserLogout()">
			<a href="#">
				<li>退出当前账号</li>
			</a>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	import axios from "axios";
	import { MessageBox } from 'mint-ui';
	export default{
		methods:{
			back(){
				this.$router.back();
			},
			//退出登录
			handleUserLogout(){
				MessageBox.confirm('确定退出该账号?').then(action => {
					axios({
						method:"get",
						url:"/Soulidea-1.0/user/logout",
					}).then((data)=>{
						console.log(data.status)
						if(data.status=200){
							this.$router.push("/login");
						}
					})
				});
				
			}
		}
	}
</script>

<style scoped>
.box{
	height:100%;
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
.account{
	width: 100%;
	height: 1rem;
	background:white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 .3rem;
	margin-top: .08rem;
}
.update li:nth-child(2){
	color: #828282;
	font-size: .22rem;
}
.cache li:nth-child(2){
	color: #828282;
	font-size: .22rem;
}
.logout{
	width: 100%;
	height: 1rem;
	background: white;
	position:absolute;
	bottom: 0;
	line-height: 1rem;
}
.logout a li{
	font-size: .23rem;
	color: #F6C45D;
}
</style>