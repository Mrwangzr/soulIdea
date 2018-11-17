<template>
	<div class="register">
		<div class="blank"></div>
		<div class="register-top">注册</div>
		<div class="register-cont">
			<div class="register-icon"></div>
		</div>
		<div class="register-cont-second">
			<div class="register-input">
				<div class="inputFirst">	
					<div 
						class="inputName"
						:class="inputStyle == true ? 'myStyle' : ''"
					>
						<div class="input-icon">
							<div class="input-icon-f"></div>
						</div>
						<input 
							type="text" 
							placeholder="请输入手机号"
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
					<input type="text" placeholder="请输入短信验证码" @focus="handlerFocusTwo()"
							@blur="handlerBlurTwo()">
				</div>
				<div class="inputPassword" :class="inputStyleT == true ? 'myStyle' : ''">
					<div class="input-icon">
						<div class="input-icon-t"></div>
					</div>
					<input :type="type" placeholder="请设置6-16位密码" @focus="handlerFocusThree()"
							@blur="handlerBlurThree()">
					<div class="input-icon-right">
						<div class="input-icon-fo" @click="handlerSee()"></div>
					</div>
				</div>
			</div>	
			<div 
				class="register-on"
				@click="handlerRegister()"
			>立即注册</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show:"",
				text:"获取验证码",
				num:60,
				type:"password",
				toggle:"",
				inputStyle:"",
				inputStyleS:"",
				inputStyleT:"",
			};
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
				
			},
			handlerFocusOne(){
				this.inputStyle = true
			},
			handlerGet(){
				if(!this.show){
					this.show = !this.show;
					var that = this;
					let timer = null; 
					var sport = function(){
						timer = setInterval(function(){
							that.num --
							console.log(that.num);
							if(that.num < 1){
								clearInterval(timer);
								that.show = !that.show;
								that.num = 60;
							}
						},1000)
					}
					sport();
					
				}								
			},
			handlerRegister(){
				alert("注册成功")
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

<style>
.myStyle{
	border:1px solid #4CD1E0;
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
	background:rgba(246,196,93,1);
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
</style>
