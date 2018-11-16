<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<div v-for="(item,index) in getMyList" @touchstart.prevent="touchin(item.id)" @touchend.prevent="cleartime(item.id)">
				<router-link :to="{name:'beautiful',query:{id:item.id,name:item.name}}">
					<div class="workslist">
						<img :src="item.src">
						<p>{{item.name}}</p>
					</div>
				</router-link>
			</div>
		</div>
	</div>

</template>

<script>
import BScroll from "better-scroll"
import Vuex from "vuex"
export default {
		data() {
			return {
				
			};
		},
		created(){
			this.getWorksMyList()
		},
		computed: {
			...Vuex.mapState({
				getMyList:state=>state.production.getWorksMyList
			})
		},
		methods: {
			...Vuex.mapActions({
				getWorksMyList:"getWorksMyList"
			}),
				touchin(id) {
					clearInterval(this.Loop); //再次清空定时器，防止重复注册定时器
					this.Loop = setTimeout(function() {
						alert('是否确认删除')
					}.bind(this), 1000);
				},
				cleartime(id,course_id) {
					// 这个方法主要是用来将每次手指移出之后将计时器清零
					clearInterval(this.Loop);
				}
			},
		mounted(){
			this.scroll = new BScroll(this.$refs.wrapper,{
					click:true,
					pullUpLoad:true
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
.wrapper{
	overflow: hidden;
	height: 100%;
}
.content{
	overflow: hidden;
	padding-bottom: 1.5rem;
}
.workslist{
	width: 3.26rem;
	height: 4.4rem;
	background:rgba(255,255,255,1);
	box-shadow:0px 6px 7px 4px rgba(205,205,205,1);
	border-radius:10px;
	margin: .24rem;
	float: left;
}
.workslist img{
	width: 100%;
}
.workslist p{
	margin-left: .21rem;
	font-size:15px;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:#292929;
	text-align: left;
}
</style>
