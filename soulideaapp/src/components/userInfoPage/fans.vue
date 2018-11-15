<template>
	
		<div class="box">
			<div class="set">
				<router-link to="/">
					<li class="iconfont icon-right"></li>
				</router-link>
				<li>粉丝</li>
				<li></li>
			</div>
			<div class="wrapper" ref="wrapper">
				<div class="content">
						
						<div class="attention"
							v-for="(item,index) in list"
							@click="handleClick()"
							>
							<fanslist-com></fanslist-com>	
						</div> 
					
				</div>
			</div>
		</div>
</template>


<script>
	// import axios from "axios";
	import Vuex from "vuex";
	import BScroll from "better-scroll";
	import fanslist from "./fanslist.vue"
	export default{
		data(){
			return{
			message:"关注",
			}
		},
		components:{
			"fanslist-com":fanslist,
		},
		computed:{
			...Vuex.mapState({
				list:state=>state.userInfoStore.list
			})
		},
		methods:{
			...Vuex.mapActions({
				handleGetName:"userInfoStore/handleGetName"
			}),
			handleClick(){
				alert(1);
			}
		},
		created(){
			
			this.handleGetName();
		} ,
		mounted(){
			this.scroll=new BScroll(this.$refs.wrapper,{
				click:true,
				pullUpLoad:true
			})
			this.scroll.on("pullingUp",()=>{
				this.handleGetName()
			})
		},
		updated () {
				//重新计算高度
				this.scroll.refresh();
				//当数据加载完毕以后通知better-scroll
				this.scroll.finishPullUp();
		}
	}
</script>

<style>
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
	position: absolute;
	border-bottom: .02rem solid #f8f8f8;
}
.set .iconfont{
	font-size: .4rem;
}

.box .wrapper{
	position: absolute;
    z-index: 1;
    top:1.28rem;
	bottom: .1rem;
    width:100%;
	height:100%;
    overflow: hidden;
	

}
/* .attention{
	height: 1rem;
	width: 100%;
	background: white;
	margin-top: .08rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.attention li:nth-child(1) img{
	height: .8rem;
	width: .8rem;
}
.attention li:nth-child(3) img{
	height: .28rem;
	width: .28rem;
}
.attention a li{
	width: 1.5rem;
	height: .5rem;
	border-radius: .25rem;
	border: .02rem solid #F6C45D;
	color: #F6C45D;
	font-size: .24rem;
	line-height: .5rem;
} */
</style>