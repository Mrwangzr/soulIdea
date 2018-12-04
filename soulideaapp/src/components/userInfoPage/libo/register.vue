<template>

	<div class="register">
		<div class="mark"
			v-show="slider"
		></div>
		<div class="loading" v-show="slider">
			<mt-spinner type="triple-bounce" color="#ccc" :size="40"></mt-spinner>
		</div>
		<div class="blank"></div>
		<div class="register-top">注册</div>
		<div class="register-cont">
			<div class="register-icon"></div>
		</div>
		<div class="register-cont-second">
			<div class="register-input">
				<div class="inputFirst">
					<span class="tit" v-show="showS">请输入正确的手机号！</span>
					<div
						class="inputName"
						:id="inputStyle == true ? 'myStyle' : ''"
						:class="showS == true ? 'errorStyle' : ''"
					>
						<div class="input-icon">
							<div class="input-icon-f"></div>
						</div>
						<input
							type="text"
							placeholder="请输入手机号"
							v-model="phone"
							@focus="handlerFocusOne()"
							@blur="handlerBlurOne()"
						>
					</div>
					<div
						class="test"
						@click="handlerGet()"
						:class="show == true? 'test-wait':''"
					>
					{{this.show == false ? this.text : this.num + " S"}}
					</div>
				</div>
				<div class="inputTest" :class="inputStyleS == true ? 'myStyle' : ''">
					<div class="input-icon">
						<div class="input-icon-s"></div>
					</div>
					<input type="text" v-model="code" placeholder="请输入短信验证码" @focus="handlerFocusTwo()"
							@blur="handlerBlurTwo()">
				</div>
				<div class="inputPassword" :class="inputStyleT == true ? 'myStyle' : ''">
					<div class="input-icon">
						<div class="input-icon-t"></div>
					</div>
					<input :type="type" v-model="password" placeholder="请设置6-16位密码" @focus="handlerFocusThree()"
							@blur="handlerBlurThree()">
					<div class="input-icon-right">
						<div class="input-icon-fo" @click="handlerSee()"></div>
					</div>
				</div>
			</div>
			<div
				class="register-on"
				@click="handlerRegister()"
				:id="(registerOne && registerTwo && registerThree) == true ? 'newStyle':''"
			>立即注册</div>
		</div>
	</div>

</template>

<script>
	import Vue from 'vue';
	import {
		MessageBox,
		Spinner
	} from 'mint-ui';
	Vue.component(Spinner.name, Spinner);
	import axios from "axios";
	export default {
		data() {
			return {
				showS:'',
				show:"",
				text:"获取验证码",
				num:60,
				type:"password",
				toggle:"",
				inputStyle:"",
				inputStyleS:"",
				inputStyleT:"",
				phone:"",
				code:"",
				password:"",
				registerThree:'',
				registerOne:'',
				registerTwo:'',
				slider:"",
				tit:""
			}
		},
		watch:{
			password(val){
				if(val){
					this.registerThree = true;
				}else{
					this.registerThree = false;
				}
			},
			code(val){
				if(val){
					this.registerTwo = true;
				}else{
					this.registerTwo = false;
				}
			},
			phone(val){
				var re = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
				if(re.test(val)) {
					this.registerOne = true;
					this.showS = false;
				} else {
					this.registerOne = false;
				}
			}

		},
		methods:{
			handlerBlurTwo(){
				this.inputStyleS = false

			},
			handlerFocusTwo(){
				this.inputStyleS = true
			},
			handlerBlurThree(){
				this.inputStyleT = false

			},
			handlerFocusThree(){
				this.inputStyleT = true
			},
			handlerBlurOne(){
				this.inputStyle = false
				var re = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
				if(re.test(this.phone)) {
					this.showS = false;
				} else {
					this.showS = true;
				}
			},
			handlerFocusOne(){
				this.inputStyle = true;
			},
			handlerGet(){
				if(!this.show){
					console.log(this.phone);
					this.show = !this.show;
					var that = this;
					let timer = null;
					var sport = function(){
						timer = setInterval(function(){
							that.num --;
							if(that.num < 1){
								clearInterval(timer);
								that.show = !that.show;
								that.num = 60;
							}
						},1000)
					}
					sport();
					axios({
						method: "post",
						headers: {
							'Content-type': 'application/x-www-form-urlencoded'
						},
						url: "/Soulidea-1.0/user/sendcode?phone="+this.phone,

					}).then(
						console.log(this.phone)
					)
// 					axios.post("/Soulidea-1.0/code)
// 					.then((data)=>{
// 						console.log(data);
// 					});

// 					{
// 						method:"get",
// 						headers:{
// 							'Content-type':'application/x-www-form-urlencoded'
// 						},
// 						url:"/Soulidea-1.0/code/sendcode",
// 						data:{
// 							phone:this.phone,
// 						}
// 					}

				/* 	axios.get("/Soulidea-1.0/code/sendcode?phone="+this.phone) */



				}
			},
			handlerRegister(){
				if(this.registerOne && this.registerTwo && this.registerThree){
					this.slider = ! this.slider;
					var that = this;
					setTimeout(function() {
						console.log(that.tit);
						MessageBox({
							title: '提示',
							message: that.tit,
						}).then(
							action=>{
									if(that.tit == "注册成功！"){
										that.$router.push({
											name:'login'
										})
									}
							})
					}, 2000)
					setTimeout(function() {
						that.slider = false;
					}, 2000)
					axios({
						method:"post",
						headers:{
							'Content-type':'application/x-www-form-urlencoded'
						},
// 						url:"/Soulidea-1.0/user/regist",
// 						data:{
// 							phone:this.phone,
// 							code:this.code,
// 							password:this.password
// 						}
						url:"/Soulidea-1.0/user/register?phone="+this.phone+"&code="+this.code+"&password"+this.password,
					}).then((data)=>{
						console.log(data);
						console.log(this.phone,this.code,this.password);
						//this.slider = false;

						if(data.status == 200){
							switch(data.data.code){
								case 200:
									this.tit = "注册成功！"
								case 302:
									this.tit = "验证码错误，请重新输入！"
									break;
								case 304:
									this.tit = "邮箱网址错误，请输入正确的邮箱网址！"
									break;
								case 306:
									this.tit = "手机地址错误，请输入正确的手机号码！"
									break;
								case 308:
									this.tit = "该手机邮箱已经注册，请登录！"
									break;
								case 500:
									this.tit = "服务器产生未知错误！"
							}

						}
					}).catch(
						this.tit = "啊哦，没网了，亲请检查您的网络！"
					)
				}
			},
			handlerSee(){
				if(!this.toggle){
					this.type = "text";
				}else{
					this.type = "password";
				}

				this.toggle = !this.toggle;
			}
		}
	}
</script>

<style scoped>
.tit{
	position:absolute;
	left:.5rem;
	top:4.22rem;
	color: #fc4343;
}
.loading{
	position:fixed;
	height:50px;
	width:50px;
	top:0;
	left:0;
	bottom:0;
	right:0;
	margin:auto;
	z-index: 10;
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
#myStyle{
	border:1px solid #488ee7;
}
.errorStyle{
	border:1px solid #fc4343;
}
.myStyle{
	border:1px solid #488ee7;
}
#errorStyle{
	border:1px solid #fc4343;
}
.register{
	height:13.34rem;
	width:100%;
	display:flex;
	flex-direction:column;
}
.blank{
	height:.4rem;
	width:100%;

}
.register-top{
	font-size:.34rem;
	font-family:Adobe Heiti Std R;
	font-weight:normal;
	color:rgba(41,41,41,1);
	height:.88rem;
	width:100%;
	line-height:.88rem;
	text-align: center;
}

.register-cont{
	height:3.32rem;
	background: #F8F8F8;
	display: flex;
	justify-content: center;
	align-items: center;
}
.register-cont-second{
	background: #F8F8F8;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.register-icon{
	height:1.5rem;
	width:1.5rem;
	background:url(../../../assets/imgLibo/register.png) no-repeat;
	background-size:contain;

}
.input-icon{
	height:1rem;
	width:1.5rem;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius:10px 0 0 10px;

}
.input-icon-right{

	height:1rem;
	width:1rem;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius:0 10px 10px 0;

}
.input-icon-f{
	height:.42rem;
	width:.3rem;
	background: url(../../../assets/imgLibo/shoujihao@2x.png) no-repeat;
	background-size:contain;
}
.inputName input{
	width:1rem;
}
.input-icon-s{
	height:.42rem;
	width:.3rem;
	background: url(../../../assets/imgLibo/sr@2x.png) no-repeat;
	background-size:contain;
}
.input-icon-fo{
	margin-top:.08rem;
	height:.42rem;
	width:.42rem;
	background: url(../../../assets/imgLibo/y@2x.png) no-repeat;
	background-size:contain;
}
.input-icon-t{
	height:.42rem;
	width:.3rem;
	background: url(../../../assets/imgLibo/mima@2x.png) no-repeat;
	background-size:contain;
}

input{
	border:none;
	flex:1;
	font-size:.3rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(41,41,41,1);
	border-radius:0 10px 10px 0;
	outline: none;
}
.inputPassword input{
	border-radius:0;
}
.inputName,.inputPassword,.inputTest{
	display: flex;
	overflow: hidden;
	border-radius: 5px;
}
.inputFirst{
	display: flex;
	justify-content: space-between;

}
.inputFirst .inputName{
	height:1rem;
	width:4.8rem;

}
.inputFirst .test{
	height:1rem;
	width:2rem;
	background: #fff;
	font-size:.30rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(41,41,41,1);
	text-align: center;
	line-height:1rem;
	border-radius:10px;
}
.inputFirst .test-wait{
	background: #ccc;
}
.inputTest,.inputPassword{
	height:1rem;
	width:7rem;
}
.register-input{
	display:flex;
	justify-content: space-between;
	flex-direction: column;
	padding:0 0.25rem;
	height:3.4rem;
}
.register-on{
	width:5rem;
	height:1rem;
	background:#ccc;
	box-shadow:0px 13px 7px 0px rgba(240,240,240,0.92);
	border-radius:10px;
	text-align: center;
	line-height: 1rem;
	margin-top:0.4rem;
	font-size:.32rem;
	font-family:Adobe Heiti Std R;
	color:rgba(255,255,255,1);
	letter-spacing:.1rem;
	/* opacity:0.55; */
}
#newStyle{
	background:rgba(246,196,93,1);
}
.markSport-enter,.markSport-leave-to{
    opacity: 0;
}
.registerSport-enter,.registerSport-leave-to{
    transform: translateX(-100%);
}
.markSport-enter-active,.markSport-leave-active{
    transition: all 300ms;
}
.boxSport-enter,.boxSport-leave-to{
    transform: translateY(-100%);
}
.boxSport-enter-active,.boxSport-leave-active{
    transition: all 600ms;
}
</style>
