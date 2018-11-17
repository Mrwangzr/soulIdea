<template>
	<div class="box">
			<div class="box-top">
					<router-link to="/set">
						<li>设置</li>
					</router-link>
			</div>
				<div class="box-center">
							<div class="photo">
									<!-- <img src="../../../static/image/feedback/gz_tx.png" /> -->
									<el-upload
										class="avatar-uploader"
										action="https://jsonplaceholder.typicode.com/posts/"
										:show-file-list="false"
										:on-success="handleAvatarSuccess"
										:before-upload="beforeAvatarUpload">
										<img v-if="imageUrl" :src="imageUrl" class="avatar">
										<i v-else class="el-icon-plus avatar-uploader-icon"></i>
									</el-upload>
							</div>
							<div class="nickname">
									<li>{{message.name}}</li>
									
										<li><router-link to="/rank">v.{{message.gender}}</router-link></li>
									
							</div>
							<li>{{message.sign}}</li>
							<div class="fans">
									<span>
											<li>{{message.fork}}</li>
											<li class="fans-li">赞</li>
									</span>
									<span>
											<router-link to="/attention">
													<li>{{message.great}}</li>
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
				<router-link to="/production">
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

		computed:{
			...Vuex.mapState({
				message:state=>state.userInfoStore.message
			})
		},
		created(){
			
			this.handleGetMessage();
		} ,
		data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
			...Vuex.mapActions({
				handleGetMessage:"userInfoStore/handleGetMessage"
			})
    }
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
.avatar-uploader .el-upload {
    /* border: 1px dashed #d9d9d9;
    border-radius: 6px; */
    cursor: pointer;
    position: relative;
    overflow: hidden;
		height: 1.2rem;
		width: 1.2rem;
		border-radius: .7rem;
		padding-bottom: .1rem;
 }
	.avatar-uploader .el-upload  img{
		width:100%;
	}
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
   /* width: 178px;
    height: 178px;
    line-height: 178px; */
		line-height: 1.2rem;
    text-align: center;
  }
  /* .avatar {
    width: 178px;
    height: 178px;
    display: block;
  } */
	
</style>
