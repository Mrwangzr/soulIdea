<template>
	<div class="details">
		<div class="details-bigimg" @click="conceal()">
			<img :src="'http://'+ photoinfo.src">
			<div class="details-L" @click="back()">
				<img src="../../../../static/sorksimage/details/fh.png">
			</div>
			<div class="details-R" @click="cancel(index)">
				删除
			</div>
		</div>
		<div class="details-mark" v-show="show"></div>
		<div class="details-text" v-show="show">
			<p>{{photoinfo.contant}}</p>
			<p>
				<img src="../../../../static/sorksimage/details/logo.png">
			</p>
		</div>
		
	</div>
	
</template>

<script>
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui';
import axios from "axios"
import Vuex from "vuex"
export default {
	created(){
		this.index = this.$route.query.id
		this.getphotoinfo(this.index)
		console.log(this.index)
	},
	data() {
		return {
			show:true,
			index:""
		};
	},
	watch:{
		"$route"(to,from){
			this.index = to.query.id;
		}
	},
	computed:{
		...Vuex.mapState({
			photoinfo:state=>state.production.getphotoinfo
		})
	},
	methods: {
		back(){
			this.$router.back()
		},
		conceal(){
			this.show = !this.show
		},
		...Vuex.mapActions({
			getproduct:"getproduct",
			deletedData:"deletedData",
			getphotoinfo:"getphotoinfo"
		}),
		cancel(index){
			MessageBox({
			  title: '提示',
			  message: '确定删除图片?',
			  showCancelButton: true,
			  confirmButtonText:"删除",
			  cancelButtonText:"取消"
			}).then(action => {
          		if(action == 'confirm'){
		            this.deletedData(index)
					Toast({
					  message: '已成功删除图片',
					  position: 'middle',
					  duration: 1000
					});
					this.$router.back()
		          }else{
					Toast({
						message: '已成功取消',
						position: 'middle',
						duration: 500
					});
		          }
		      });

		},
		deletedData(id){
			axios({
				method:"get",
				url:"Soulidea-1.0/product/delphoto?id="+id
			}).then((data)=>{
			})
		}
	},
	
}
</script>

<style scoped>

.details-bigimg{
	position: relative;
}
.details-bigimg img{
	width: 100%;
}
.details-L{
	position: absolute;
	top: .65rem;
	left: .31rem;
	width: .19rem;
	height: .37rem;
}
.details-R{
	width: .88rem;
	height: .34rem;
	position: absolute;
	top: .67rem;
	right: .24rem;
	background:rgba(255,0,0,1);
	border-radius:7px;
	font-size:11px;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(238,238,238,1);
	text-align: center;
}
.details-mark{
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 2.84rem;
	background: #000000;
	opacity:0.5;
}
.details-text{
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 2.84rem;
	padding-left: .48rem;
	display: flex;
	align-items: center;
	z-index: 2;
}
.details-text p:nth-child(1) {
	display: block;
	font-size:.26rem;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(250,250,250,1);
	line-height: .51rem;
	text-indent: .2rem;
	overflow: hidden;
	width: 6.22rem;
	height: 1.65rem;
}
.details-text p:nth-child(2) img{
	width: .35rem;
	height: .35rem;
	position: absolute;
	top:.14rem;
	left: .48rem;
	
}

</style>
<style>
	.mint-msgbox-confirm{
		color: #c33;
	}
</style>