<template>
	<div class="wrapper listBox" ref="wrapper">
		<div class="content">
			<div class="production-list" v-for="(item,index) in goodsList">
				<router-link :to="{name:'beautiful',query:{id:item.id,name:item.name}}">
					<p class="bigimg"><img :src="item.head"></p>
				</router-link>
				<div class="production-list-b">
					<div class="production-list-b-l">
						<p>{{item.name}}</p>
						<p>{{item.time}}</p>
					</div>
					<div class="production-list-b-r" @click="handleToggle(item.id)">
						<img src="../../../../../static/sorksimage/production/jiaru.png">
					</div>
				</div>
				<div class="production-list-yanjing">
					<p><img src="../../../../../static/sorksimage/production/yanjing.png"></p>
					<p>{{item.great}}</p>
				</div>
				<div class="production-list-yanjing-r">
					<p><img src="../../../../../static/sorksimage/production/dianzan.png"></p>
					<p>{{item.comment}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from "better-scroll"
import Vuex from "vuex"
export default {
    created(){
    	this.getworkslist()
    },
    data() {
    	return {

    	}
    }, 
    computed: {
    	...Vuex.mapState({
    		goodsList:state=>state.production.goodsList
    	})
    },
    methods: {
    	Addportfolio(){
    		
    	},
    	handleToggle(id){
    		this.$emit("handleTogle")
			this.observer.$emit("AddportfolioId",id)
    	},
    	...Vuex.mapActions({
    		getworkslist:"getworkslist"
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
	.listBox{
		overflow: hidden;
		height: 100%;
	}
	.content{
		padding-bottom: 2.2rem;
	}
	.production-list{
		margin-top: .2rem;
		position: relative;
		background: #fff;
	}
	.production-list:nth-child(1){
		margin-top:0;
	}
	.production-list .bigimg img{
		width: 100%;
		height: 4rem;
	}
	.production-list-b{
		width: 100%;
		height: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-right:.25rem;
		
	}
	.production-list-b-l{
		text-align: left;
		padding-left: .25rem;
	}
	.production-list-b-l p:nth-child(1){
		font-size:.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(41,41,41,1);
	}
	.production-list-b-l p:nth-child(2){
		font-size:.22rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(155,155,155,1);
	}
	.production-list-b-r img{
		width: 1.2rem;
		height: .32rem;
	}
	.production-list-yanjing{
		position: absolute;
		top: 3.61rem;
		left: .24rem;
		display: flex;
		justify-content: space-between;
		align-items:baseline;
	}
	.production-list-yanjing p img{
		width: .2rem;
	
	}
	.production-list-yanjing p:nth-child(2){
		font-size:.2rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(234,234,234,1);
		margin-left: .07rem;
	}
	.production-list-yanjing-r{
		position: absolute;
		top: 3.61rem;
		right: .25rem;
		display: flex;
		justify-content: space-between;
		align-items:baseline;
	}
	.production-list-yanjing-r p img{
		width: .2rem;
	}
	.production-list-yanjing-r p:nth-child(2){
		font-size:.2rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(234,234,234,1);
		margin-left: .07rem;
	}
</style>
