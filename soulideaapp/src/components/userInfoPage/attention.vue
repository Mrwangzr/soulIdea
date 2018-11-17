<template>
	<div class="box">
		<div class="set">
			<!-- <router-link to="/">
				<li class="iconfont icon-right"></li>
			</router-link> -->
			<a href="javascript:;" @click="back">
				<li class="iconfont icon-right"></li>
			</a>
			<li>关注</li>
			<li></li>
		</div>
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<div class="attention"
					v-for="(item,index) in attentionsList"
					@click="handleClick()"
					>
					<attentionsList-com :item="item"></attentionsList-com>	
				</div> 
			</div>
		</div>
	</div>
</template>
		
		
<script>
	// import axios from "axios";
	import Vuex from "vuex";
	import BScroll from "better-scroll";
	import attentionsList from "./attentionsList.vue"
	export default{
		data(){
			return{
			message:"关注",
			}
		},
		components:{
			"attentionsList-com":attentionsList,
		},
		computed:{
			...Vuex.mapState({
				attentionsList:state=>state.userInfoStore.attentionsList
			})
		},
		methods:{
			...Vuex.mapActions({
				handleGetAttentions:"userInfoStore/handleGetAttentions"
			}),
			handleClick(){
				alert(1);
			},
			back(){
				this.$router.back();
			}
		},
		created(){
			
			this.handleGetAttentions();
		} ,
		mounted(){
			this.scroll=new BScroll(this.$refs.wrapper,{
				click:true,
				pullUpLoad:true
			})
			this.scroll.on("pullingUp",()=>{
				this.handleGetAttentions()
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
	/* height:100%; */
	overflow: hidden;
	

}

</style>