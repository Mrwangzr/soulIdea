<template>
	<div class="box">
			<div class="box-top">
					<router-link to="/set">
						<li>设置</li>
					</router-link>
			</div>
				<div class="box-center">
							<div class="photo">
									<img src="../../../static/image/feedback/gz_tx.png" />
									<!-- <div id="photo">
										<div class="item_bock head_p">
												 <div class="head_img">
													 <!-- <img :src="userInfo.avatar"/> -->
													 <!-- 图片地址动态绑定 -->
												<!-- </div>
												 <div class="setting_right" @click.stop="uploadHeadImg">
													 <div class="caption">更改头像</div>
												 </div>
												 <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
										</div>
									</div> -->
									  
							</div>
							<div class="nickname">
									<li>{{message.name}}</li>
									
										<li><router-link to="/rank">{{message.v}}</router-link></li>
									
							</div>
							<li>{{message.sign}}</li>
							<div class="fans">
									<span>
											<li>{{message.zan}}</li>
											<li class="fans-li">赞</li>
									</span>
									<span>
											<router-link to="/attention">
													<li>{{message.att}}</li>
													<li class="fans-li">关注</li>
											</router-link>
									</span>
									<span>
											<router-link to="fans">
													<li>{{message.fans}}</li>
													<li class="fans-li">粉丝</li>
											</router-link>
									</span>
							</div>
				</div>
				<router-link to="/home">
					<ul class="ul-pay">
						<li>点点钱包</li>
						<li class="iconfont icon-arrow-right"></li>
					</ul>
				</router-link>
				<router-link to="/home">
					<ul class="ul-my">
						<li>我的作品</li>
						<li class="iconfont icon-arrow-right"></li>
					</ul>
				</router-link>
				
	</div>


</template>

<script>
import Vuex from "vuex";
export default {
		name: "user-info-page",
// 		  el: '#photo',
//   data: {
//     userInfo: {
//       avatar: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=62d46c39067b020818c437b303b099b6/d4628535e5dde7119c3d076aabefce1b9c1661ba.jpg'
//     }
//     // 初始图片
//   },
//   methods: {
//     // 打开图片上传
//     uploadHeadImg: function () {
//       this.$el.querySelector('.hiddenInput').click()
//     },
//     // 将头像显示
//     handleFile: function (e) {
//       let $target = e.target || e.srcElement
//       let file = $target.files[0]
//       var reader = new FileReader()
//       reader.onload = (data) => {
//         let res = data.target || data.srcElement
//         this.userInfo.avatar = res.result
//       }
//        reader.readAsDataURL(file)
//      },
//    },
		computed:{
			...Vuex.mapState({
				message:state=>state.userInfoStore.message
			})
		},
		methods:{
			...Vuex.mapActions({
				handleGetMessage:"userInfoStore/handleGetMessage"
			})
		},
		created(){
			
			this.handleGetMessage();
		} ,
  }
</script>

<style scoped>

.box{
	height:100%;
	background: #f8f8f8;
}

	.box-top {
		height: 1.28rem;
		width: 100%;
		padding-top: .4rem;
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		background: white;
	}

	.box-top li {
		font-size: .3rem;
		padding-right: .3rem;
		padding-bottom: .2rem;
	}

	.box-center {
		height: 4rem;
		width: 100%;
		background: #F6C45D;
		display: flex;
		flex-direction: column;
		color: #ECECEC;
		align-items: center;
		padding-top: .5rem;
	}

	.box-center .photo {
		background: #ccc;
		height: 1.2rem;
		width: 1.2rem;
		border-radius: .7rem;
		padding-bottom: .1rem;
	}
.box-center .photo img{
		width:100%;
}
	.box-center .nickname {
		display: flex;
		text-decoration: row;
		align-items: flex-end;
		color: #000000;
		padding-top: .1rem;
		padding-bottom: .15rem;
	}

	.box-center .nickname li:nth-child(1) {
		font-size: .3rem;
		padding-right: .06rem;
		padding-left: .4rem;
	}

	.box-center .nickname li:nth-child(2) a{
		font-size: .2rem;
		color: white;
	}

	.box-center .fans {
		width: 60%;
		display: flex;
		text-decoration: row;
		justify-content: space-around;
		align-items: center;
		padding-top: .2rem;
	}

	.box-center .fans span li:nth-child(1) {
		color: #fff;

	}

	.box-center .fans span .fans-li{
		color: #ECECEC;

	}

	ul {
		height: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: .1rem 0;
		background: white;
		padding: 0 .3rem;
	}

	.box ul>li {
		font-size: .3rem;
		color: #000;
	}

	.box-input {
		height: 2rem;
		width: 100%;
		background: red;
	}
/* .item_bock {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:94px;
  width: 300px;
  padding:0px 24px 0px 38px;
  border-bottom: 1px solid #f7f7f7;
  background: #fff;
}
.head_p {
  height:132px;
}
.head_img{
  height: 90px;
}
.head_img img{
  width:90px;
  height:90px;
  border-radius:50px
}
.setting_right{
  display: flex;
  height: 37px;
  justify-content: flex-end;
  align-items: center;
}
.hiddenInput{
  display: none;
}
.caption {
  color: #8F8F8F;
  font-size: 26px;
  height: 37px;
} */
</style>
