<template>
	<div class="production">
		<!-- 头部 -->
		<div class="header"  @click="back()">
			<img src="../../../../static/sorksimage/production/fanhui.png">
			<p>作品</p>
		</div>
		<!-- 作品集 -->
		<router-link to="/WorksCollection">
			<div class="production-nav">
				<p>作品集</p>
				<p><img src="../../../../static/sorksimage/production/xiayibu.png"></p>
			</div>
		</router-link>

		<!-- 作品列表 -->
		<ListWorks-com @handleTogle="getShow"></ListWorks-com>
		<mt-popup
			mt-popup v-model="popupVisible" 
			popup-transition="popup-fade" 
			closeOnClickModal="true" 
			position="bottom"
			>
			<div class="MyListnamelist">
				<h3>选择您的作品集</h3>
				<ul v-for="(item) in MyListname">
					<li @click="handlejiaru(item.id)">{{item.name}}</li>
				</ul>
			</div>
		</mt-popup>

	</div>
</template>

<script>

const ListWorks = ()=> import("./worksmodule/Listofworks.vue")
import { Toast } from 'mint-ui';
import axios from "axios"
import Vuex from "vuex"
export default {
	data(){
		return{
			popupVisible:false,
			MyList:-1
		}
	},
	created(){
		this.getWorksMyList()
	},
	components:{
		"ListWorks-com":ListWorks
	},
	computed:{
		...Vuex.mapState({
			MyListname:state=>state.production.getWorksMyList
		})
	},
	methods: {
		...Vuex.mapActions({
			getWorksMyList:"getWorksMyList",
		}),
		back(){
			this.$router.push("/firstLevelPage")
		},
		getShow(id){
			this.popupVisible = !this.popupVisible;
			this.MyList = id
		},
		handlejiaru(id){
			setTimeout(()=>{
				this.popupVisible = !this.popupVisible
				let obj = {}
				obj.id=id
				obj.pid=this.MyList
				this.addtoshowreel(obj)
			},500)
		},
		addtoshowreel(obj){
			axios({
				method:"get",
				url:"Soulidea-1.0/product/addtoshowreel?id="+obj.id+"&pid="+obj.pid
			}).then((data)=>{
				console.log(data)
				if(data.data.message == "SUCCESS"){
					Toast({
						message: '已成功加入',
						position: 'middle',
						duration: 1000
					});
				}else{
					Toast({
						message: '加入错误',
						position: 'middle',
						duration: 1000
					});
				}
			})
		}
	},
}
</script>

<style scoped>
.production{
	height: 100%;
}

.header{
	padding-top: .4rem;
	background: #fff;
	width: 100%;
	height:1.28rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.34rem;
	color: #292929;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(41,41,41,1);
	line-height:0.15rem;
	position:relative;
}
.header img{
	width: 0.2rem;
	height: 0.41rem;
	position: absolute;
	left: 0.34rem;
	top: 0.64rem;
}
.production-nav{
	width: 100%;
	height: 1rem;
	margin-top: 0.1rem;
	background: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 .24rem;
	margin-bottom: .2rem;
}
.production-nav p{
	font-size: .3rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(41,41,41,1);
}
.production-nav p img{
	width: 0.16rem;
	height: 0.32rem;
}
.mint-popup {
	width: 100%;
	border-radius: 3px;
}
.mint-popup ul li{
	text-align: center;
	line-height: .8rem;
	height: .8rem;
	font-size: .32rem;
	margin-bottom: .3rem;
}
.MyListnamelist h3{
	font-size: .34rem;
	margin-bottom: .5rem;
}
</style>
<style>
	.v-modal{
		background: #000;
		width: 100%;
	}
</style>