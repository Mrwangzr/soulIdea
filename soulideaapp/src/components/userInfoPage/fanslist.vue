<template>
	<div class="attention">
		<li>
			<img src="../../../static/image/feedback/gz_tx.png" />
		</li>
		<li>哈哈</li>
		<li>
			<img src="../../../static/image/feedback/gz_xb_nan.png" />
		</li>
		<a href="#" @click="cancel()">
			<li>{{message}}</li>
			
		</a>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		data(){
			return{
				message:"关注",
				
			    del:"相互关注",
				list:[],
				
			}
		},
		computed:{
			...Vuex.mapState({
				list:state=>state.userInfoStore.list
			})
		},
		methods:{
			cancel(){
				if(this.message="关注"){
					this.message=this.del;
					console.log(this.message);
						console.log(this.index)
				}	
			}
		},
	}
</script>
 
<style>
.attention{
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
}
</style>