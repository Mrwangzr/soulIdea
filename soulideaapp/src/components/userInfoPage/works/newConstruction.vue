<template>
	<div class="newConstruction">
		<div class="header">
			<img src="../../../../static/sorksimage/production/fanhui.png" @click="back()">
			<p>新建</p>
		</div>
		<div class="newlyName">
			<p>名字</p>
			<input type="text" placeholder="给作品起个名字吧！"/>
		</div>
		<div class="intro">
			<p>简介</p>
			<textarea placeholder="介绍一下自己的作品！">
				
			</textarea>
		</div>
		<div class="classify">
			<span>分类</span>
			<div class="classify-con">
				<div class="classify-con-big" v-for="(item,index) in classify">
					<div><p :class="activeIndex == index ? 'active':''" @click="changeIndex(index)"></p></div>
					<i>{{item}}</i>
				</div>
			</div>
		</div>
		<div class="accomplish">
			<img src="../../../../static/sorksimage/details/圆角矩形1.png">
			<p>完成</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				classify:["摄影","手绘","界面","PS","icon"],
				activeIndex:0
			};
		},
		methods: {
			back(){
				this.$router.back()
			},
			changeIndex(index){
				this.activeIndex = index
			}
		},
	}
</script>

<style scoped>
.newConstruction{
	padding-top: .4rem;
}
.header{
	background: #fff;
	width: 100%;
	height:0.88rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.34rem;
	color: #292929;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(41,41,41,1);
	line-height:0.15rem;
	position: relative;
}
.header img{
	width: 0.2rem;
	height: 0.41rem;
	position: absolute;
	left: 0.34rem;
	top: 0.24rem;
}
.newlyName{
	width: 100%;
	height: 1rem;
	background: #fff;
	padding-left: .25rem;
	display: flex;
	align-items: center;
	margin: .1rem 0 ;

}
.newlyName p{
	font-size:.3rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(41,41,41,1);
	margin-right: .42rem;
}
.newlyName input{
	width: 5rem;
	height: .6rem;
	border: none;
	background: rgba(248,248,248,1);
	border-radius:5px;
	padding-left: .24rem;
	font-size:.22rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:#E1E1E1;

}
.intro{
	width: 100%;
	height: 3rem;
	background: #fff;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
}
.intro p {
	position: absolute;
	top: .26rem;
	left: .25rem;
	font-size:.3rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(41,41,41,1);
}
.intro textarea{
	resize: none;
	width: 5rem;
	height: 2rem;
	border: none;
	background:rgba(248,248,248,1);
	border-radius:.1rem;
	font-size:.22rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(231,231,231,1);
}
.classify{
	margin-top: .1rem;
	position: relative;
	width: 100%;
	height: 3rem;
	background: #fff;
	float: left;
}
.classify span {
	position: absolute;
	top: .26rem;
	left: .25rem;
	font-size:.3rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(41,41,41,1);
}
.classify .classify-con{
	width: 4.85rem;
	overflow: hidden;
	height: 2rem;
	margin-top:.93rem;
	margin-left:1.33rem ;
}
.classify .classify-con-big{
	float: left;
	height: .4rem;
	margin-bottom: .4rem;
	margin-right: .2rem;
}
.classify .classify-con-big div{
	width:.28rem;
	height:.28rem;
	border:.02rem solid rgba(153,153,153,1);
	border-radius:50%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: .4rem;
	float: left;
	margin-top: .06rem;
	
}
.classify .classify-con-big div p {
	width:.16rem;
	height:.16rem;
	background:#999999;
	border-radius:50%;
	
}
.classify-con i{
	font-style: normal;
	font-size:.3rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(41,41,41,1);
}
.active{
	background:#F6C45D !important;
}
.accomplish{
	float: left;
	width: 3rem;
	height: .80rem;
	position:relative;
	margin-top: .9rem;
	margin-left: 2.25rem;
}
.accomplish img{
	width: 100%;
}
.accomplish p {
	position: absolute;
	top: 0;
	left: 1.2rem;
	font-size:.3rem;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(41,41,41,1);
	line-height: .8rem;
}
</style>
