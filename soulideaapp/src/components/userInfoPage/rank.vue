<template>
	<div class="box">
		<div class="rank-top">
			<span @click="back">
				<li class="iconfont icon-right"></li>
			</span>
			<li>个人等级</li>
			<li></li>
		</div>
		<div class="rank-center">
			<div class="photo"><img src="../../../static/image/feedback/gz_tx.png" /> </div>
			<div class="nowrank">
				<li>当前等级：{{message.level}}</li>
				<li></li>
			</div>
			<div class="rank-num">
				<li v-for="(item,index) in rankNum">{{item}}</li>
			</div>
			<div id="rank-photo">
				<!-- <li><el-progress :text-inside="true" :stroke-width="22" :percentage="message.level"></el-progress></li> -->
				<li v-for="(item,index) in rankNums" :class="index<message.level-1?'alive':''" ></li>
			</div>
			<div class="prompt">
				<li>等级数据每天早上6点更新</li>
			</div>
			
		</div>
		<div class="rank-bottom">
			<div class="rank-next">
				<li>距离下一个等级：{{message.exp}} 点经验</li>
				<li><el-progress type="circle" :percentage="parseInt(10000-message.exp/message.totalexp)/100"></el-progress></li>
				
			</div>
			<div class="rank-suffer">
				
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		data(){
			return{
				message1:2,
				level:4
			}
		},
		methods:{
			back(){
				this.$router.back();
			},
		},
		computed:{
			...Vuex.mapState({
				rankNum:state=>state.userInfoStore.rankNum,
				rankNums:state=>state.userInfoStore.rankNums,
				message:state=>state.userInfoStore.message
			})
		},
	}
</script>

<style scoped>
.box{
	height:100%;
	background: #f8f8f8;
}

.rank-top{
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
.rank-top .iconfont{
	font-size: .4rem;
}
.rank-center{
	width: 100%;
	height: 4rem;
	background: white;
	margin-top: .1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.rank-center .photo{
	width: 1.1rem;
	height: 1.1rem;
	border-radius: .5rem;
	/* background: #c0c0c0; */
	margin: .35rem 0;
}
.rank-center .photo img{
	width: 100%;
	border-radius: .5rem;
}
.rank-center .nowrank{
	font-size: .34rem;
	color: #292929;
	margin-bottom: .5rem;
}
.rank-center .rank-num{
	display: flex;
	flex-direction: row;
	width: 5.8rem;
	justify-content: space-between;
	align-items: center;
}
.rank-center .rank-num li{
	width: .22rem;
	height: .22rem;
	font-size: .18rem; 
	border-radius: .11rem;
	/* background: #f6c45d; */
	text-align: center;
	line-height: .22rem;
}
.rank-center #rank-photo{
	height: .22rem;
	width: 5.8rem;
	background:white;
	margin-top: .08rem;
	border-radius: .1rem;
	display: flex;
	flex-direction: row;
	justify-content:space-between;
	overflow: hidden;
	background:  #ccc;
}
.rank-center #rank-photo li{
	
	width:5.7rem ;
	margin-right:.05rem;
	
	background:  #CBCBCB;
}
.rank-center #rank-photo .alive{
	background:  #F6C45D;
}
/* .el-progress .el-progress--circle .el-progress-circle .el-progress-circle__path{
	stroke: #F6C45D !important;
	
} */

.rank-center .prompt{
	font-size: .22rem;
	color: #292929;
	margin-top: .01rem;
}
.rank-center .prompt li{
	position: absolute;
	left: .9rem;
}
.rank-bottom{
	width: 100%;
	height: 7.86rem;
	background: white;
	position: absolute;
	bottom: 0;
}
.rank-bottom .rank-next{
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: .75rem;
	color:  #292929 ;
	font-size: .28rem;
}
.rank-bottom .rank-next li:nth-child(2){
	margin-top: 1rem;
}
.rank-bottom .rank-suffer{
	height: 4.2rem;
	width: 4.2rem;
	
	
}
/* .rank-bottom .rank-next .el-progress-circle__track .el-progress-circle__path {
	stroke:red !important;
} */
</style>