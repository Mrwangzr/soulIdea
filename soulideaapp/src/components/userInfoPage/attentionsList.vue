<template>
	<div class="attention">
		<li>
			<!-- <img src="../../../static/image/feedback/gz_tx.png" /> -->
			<img :src="item.head" />
		</li>
		<li>{{item.name}}</li>
		<li :class="ico">
			<!-- <img src="../../../static/image/feedback/gz_xb_nan.png" /> -->
		</li>
		<a href="#" @click="cancel()">
			<li>{{message}}</li>
			
		</a> 
	</div>
</template>

<script>
	import Vuex from "vuex";
	import axios from "axios";
	import { MessageBox } from 'mint-ui';
	export default{
		data(){
			return{
				message:"取消关注",
				id:"",
				ico:"iconfont icon-nan",
				male:"",
			}
		},
// 		props:{
// 			item:Object
// 		},
		props:{
			item:Object
		},
		methods:{
			//取消关注
			cancel(id){
				console.log(this.item.id);
				MessageBox.confirm('确定取消关注？').then(action => {
					axios({
						method:"post",
						url:"/Soulidea-1.0/user/unfork?userid="+this.item.id,
					}).then((data)=>{
						// console.log(data);
						if(data.data.code==200){
							MessageBox('提示', '操作失败');	
							this.$router.go(0);
						}else{
							MessageBox('提示', '操作失败');	
							// this.$router.go(0);
						}
					})
				})
			},
			//判断性别
			gender(male){
				if(this.item.male==true){
					this.ico="iconfont icon-nan nan";
				}else{
					this.ico="iconfont icon-nv-copy nv"
				}
			}
		},
		created(){
			this.gender()
		}
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
	border-radius: .4rem;
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