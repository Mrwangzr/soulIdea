<template>
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<div class="beautifulList" v-for="(item,index) in proList">
					<router-link :to="{name:'details',query:{id:item.id,name:item.name}}">
						<div>
							<img :src="item.src">
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
	props:[
		"getId"
	],
	created(){
			this.getproductour(this.getId)
		},
		computed: {
			...Vuex.mapState({
				proList:state=>state.production.getproductour
			})
		},
	methods: {
		...Vuex.mapActions({
			getproductour:"getproductour"
		}),
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

<style scoped>
.wrapper{
	overflow: hidden;
	height: 100%;
}
.content{
	overflow: hidden;
}
.beautifulList{
	width: 3.68rem;
	height: 3.4rem;
	float: left;
	margin: 0 0 .02rem .05rem;
}
.beautifulList img{
	width: 100%;
}
</style>
