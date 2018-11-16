<template>
	<div class="login">
		<transition name="markSport">
			<div class="mark"
				v-show="slider"
			></div>
		</transition>
		<transition name="boxSport">
			<div class="box"
				v-show="slider"
			>{{text}}</div>
		</transition>		
		<div class="blank"></div>
		<div class="login-top">
			<p>登录</p>
			<span
				@click="handleRouter()"
			>注册</span>
		</div>
		<div class="login-cont">
			<div class="login-icon">
			</div>
			<span class="tit" v-show="show">请输入正确的手机号或者邮箱！</span>
			<div 
				class="inputName"
				:id="inputStyle == true ? 'myStyle' : ''" 
				:class="show == true ? 'errorStyle' : ''"
			>
				<div class="input-icon">
					<div class="input-icon-f"></div>
				</div>
				<input 
					type="text" 
					placeholder="手机号/邮箱" 
					v-model="username" 
					@focus="handlerFocus()"
					@blur="handlerBlur()"
					/>

			</div>
			<div 
				class="inputPassword"
				:id="inputStyleS == true ? 'myStyle' : ''"
			>
				<div class="input-icon">
					<div class="input-icon-s"></div>
				</div>
				<input 
					type="password" 
					placeholder="登陆密码" 
					v-model="password"
					@focus="handlerFocusS()"
					@blur="handlerBlurS()"
				>
			</div>
			<div class="login-on"
				@click="handlerLogin"
				:id="(loginOne && loginTwo) == true ? 'newStyle':''"
			 >登&nbsp;&nbsp;&nbsp;录</div>
			<div class="login-herf">
				<p @click="handlerGo()">账号安全</p>
				<p></p>
				<p @click="handlerGo()">找回密码？</p>
			</div>
			<div class="login-dashed">
				<div class="dashed"></div>
				<p>其他登陆方式</p>
				<div class="dashed"></div>
			</div>
			<div class="login-else">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		created(){
			
		},
		data() {
			return {
				show:"",
				username:"",
				password:"",
				inputStyle:"",
				inputStyleS:"",
				slider:'',
				text:"",
				showS:"true",
				loginOne:'',
				loginTwo:""
			};
		},
		methods:{
			handleRouter(){
				this.$router.push({name:"register"})
			},
			handlerGo(){
				window.location.href = "https://www.360.cn/"
			},
			handlerBlur(){
				this.inputStyle = false;
				var re = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
				var reO = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				if(re.test(this.username) || reO.test(this.username)) {
					this.show = false;
					this.loginOne = true;
				} else {
					this.show = true;
					this.loginOne = false;
				}
	
				
			},
			handlerFocus(){
				this.inputStyle = true
			},
			handlerBlurS(){
				this.inputStyleS = false
			},
			handlerFocusS(){
				this.inputStyleS = true
			},
			handlerLogin(){
				if(this.loginOne && this.loginTwo){
					this.slider = !this.slider;
					// this.$router.push()
					// this.$router.go(0);
	// 				axios({
	// 				  method:"post",
	// 				  url:"http://localhost:3000/list",
	// 				  data:{
	// 					  username:this.username,
	// 					  password:this.password
	// 				  }
	// 				}).then((data)=>{
	// 					console.log(data);
	// 					if(data.data.result){
	// 						console.log("登陆成功！")
	// 						this.text = "登陆成功！"
	// 					}else{
	// 						switch(data.errorCode){
	// 							case 301:
	// 								this.text = "登录密码错误，请重新输入！"
	// 								break;
	// 							case 304:
	// 								this.text = "邮箱网址错误，请输入正确的邮箱网址！"
	// 								break;
	// 							case 306:
	// 								this.text = "手机地址错误，请输入正确的手机号码！"
	// 								break;
	// 						}
	// 						
	// 					}
	// 				})
				}
			},
		

		},
		watch:{			
			password(val){
				if(val){
					this.loginTwo = true;
				}else{
					this.loginTwo = false;
				}
			},
			username(val){
				var re = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
				var reO = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				if(re.test(val) || reO.test(val)) {
					this.loginOne = true;
					this.show = false;
				} else {
					this.loginOne = false;
				}
			}
		}
		
		
		
		
	}
</script>

<style scoped>
.tit{
	position: absolute;
	left:.5rem;
	top:4.7rem;
	color: #fc4343;
}	
.login{
	height:13.34rem;
	width:100%;
	display:flex;
	flex-direction:column;
	position: relative;
}
.box{
	height:3rem;
	width:6rem;
	background: #fff;
	position: fixed;
	z-index: 2;
	margin:auto;
	left:0;
	top:0;
	bottom:0;
	right:0;
	box-shadow:0px 7px 7px 1px rgba(167,167,167,0.3);
	border-radius:10px;
	line-height: 3rem;
	color:;
	font-weight:600;
	letter-spacing: .02rem;
	font-size:.3rem
}
.mark{
	height:100%;
	width:100%;
	position: absolute;
	background: rgba(0,0,0,0.5);	
	z-index: 1;
}
.blank{
	height:.4rem;
	width:100%;
	
}
#myStyle{
	border:1px solid #488ee7;
}
	
.errorStyle{
	border:1px solid #fc4343;
}
.login-top{
	height:.88rem;
	width:100%;
	display: flex;
	position:relative;
	justify-content: center;
	align-items: center;
}
.login-top p{
	height:.32rem;
	width:.65rem;
	font-size:16px;
	font-family:PingFang-SC-Heavy;
	font-weight:800;
	color:rgba(41,41,41,1);
}
.login-top span{
	position:absolute;
	right:.25rem;
	bottom:.21rem;
	background: #fff;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(246,196,93,1);
}
.login-cont{
	flex:1;
	width:100%;
	background:#f8f8f8;


}
.login-icon {
	width:1.65rem;
	height:1.65rem;
	background:url(../../../assets/imgLibo/register.png) no-repeat;
	background-size:cover;
	position:absolute;
	top:2.44rem;
	left:2.93rem;
}
.inputName,.inputPassword{
	height:1rem;
	width:7.02rem;
	background:rgba(255,255,255,1);
	border-radius:10px;
	display: flex;
}
.inputName{
	position:absolute;
	top:5.12rem;
	left:.24rem;
}
.inputPassword{
	position:absolute;
	top:6.32rem;
	left:.24rem;
}
input{
	background:#fff;
	height:100%;
	flex: 1;
	border:none;
	border-radius:10px;
	font-size:.28rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(79,77,77,1);
	outline: none;
}
.input-icon{
	height:1rem;
	width:1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
.input-icon-f{
	height:.42rem;
	width:.3rem;
	background: url(../../../assets/imgLibo/shoujihao@2x.png) no-repeat;
	background-size:contain;
}
.input-icon-s{
	height:.42rem;
	width:.3rem;
	background: url(../../../assets/imgLibo/mima@2x.png) no-repeat;
	background-size:contain;
}
.login-on{
	text-align:center;
	position:absolute;
	top:7.92rem;
	left:1.19rem;
	width:5.13rem;
	height:1.2rem;
	background:#ccc;
	border-radius: 10px;
	font-size:.32rem;
	line-height:1.2rem;
	font-family:PingFang-SC-Heavy;
	font-weight:800;
	color:rgba(255,255,255,1);
}
#newStyle{
	background:rgba(246,196,93,1);
	background-size:cover;
}
.login-herf{
	height:.25rem;
	width:3.0rem;
	position:absolute;
	left:2.4rem;
	top:9.2rem;
	display: flex;
	justify-content: space-between;
}
.login-herf p{
	font-size:.24rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(143,143,143,1);
}
.login-herf p:nth-child(2){
	width:.02rem;
	height:.25rem;
	background: url(../../../assets/imgLibo/_@2x.png) no-repeat;
}
.login-dashed{
	display:flex;
	justify-content: space-between;
	position: absolute;
	left:1.23rem;
	top:11.7rem;
	
}
.login-dashed .dashed{
	margin: .1rem .1rem 0 .1rem;
	
	height: .01rem;
	width: 1.6rem;
	background:url(../../../assets/imgLibo/dashed.png)
}
.login-dashed p{
	width:1.6rem;
	height:.23rem;
	line-height: .23rem;
	font-size:.24rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(79,77,77,1);
}
.login-else{
	height:.6rem;
	width:3.8rem;
	position: absolute;
	left:1.9rem;
	top:12.28rem;
	display: flex;
	justify-content: space-between;
}
.login-else div:nth-child(1){
	height:.6rem;
	width:.6rem;
	background: url(../../../assets/imgLibo/qq@2x.png) no-repeat;
	background-size:contain;
}
.login-else div:nth-child(2){
	height:.6rem;
	width:.6rem;
	background: url(../../../assets/imgLibo/weixin@2x.png) no-repeat;
	background-size:contain;
}
.login-else div:nth-child(3){
	height:.6rem;
	width:.6rem;
	background: url(../../../assets/imgLibo/weibo@2x.png) no-repeat;
	background-size:contain;
}
.markSport-enter,.markSport-leave-to{
    opacity: 0;
}
.markSport-enter-active,.markSport-leave-active{
    transition: all 300ms;
}
.boxSport-enter,.boxSport-leave-to{
    transform: translateY(-100%);
}
.boxSport-enter-active,.boxSport-leave-active{
    transition: all 300ms;
}
</style>
