<template>
  <transition name="move">
    <div class="all">
      <header-com :titleString="'编辑'"
                  :rightString="'发布'"
                  :rightEvent="'onclick'"
                  @onclick="handleRelease"
      ></header-com>

      <div class="title">
        <span>标题</span><input type="text" placeholder="快给作品起个名字吧" v-model="titleValue">
      </div>

      <div class="content">
        <textarea name="" id="" resize="none" placeholder="想说点什么,.." v-model="contentValue"></textarea>
      </div>

      <div class="imgArr">
        <ul>
          <li v-for="item in imageList">
            <img :src="item" alt="" class="avatar">
          </li>
          <li>
            <el-upload
              class="avatar-uploader"
              style="width: 100%;height: 100%;background: #efefef;display: flex;align-items: center;justify-content: center"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon" style="font-size: 40px;"></i>
            </el-upload>
          </li>
        </ul>
      </div>

      <div class="choose">
        <div>发布位置 :</div>
        <div>
          <label><input type="radio" name="radio" checked>共享</label>
          <label><input type="radio" name="radio">专属</label>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import header from "../../newsPage/common/findNewFriendsHeader";
  import axios from "axios";

  export default {
    name: "release-page",
    components: {
      "header-com": header
    },
    data() {
      return {
        imageList: [],
        imageUrl: "",
        imageFileList: [],
        titleValue: "",
        contentValue: ""
      }
    },
    methods: {
      //处理发布
      handleRelease() {
        axios({
          method: "post",
          url: "/Soulidea-1.0/share/release",
          headers: {
            'Content-type': 'multipart/form-data'
          },
          data: {
            title: this.titleValue,
            constant: this.contentValue,
            srclist: this.imageFileList,
            type: true
          }
        }).then(
          (data) => {
            console.log(data);
          }
        )
      },
      //上传图片
      handleAvatarSuccess(res, file) {
        this.imageList.push(URL.createObjectURL(file.raw));
        this.imageFileList.push(file);
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
      }
    }
  }
</script>

<style scoped>
  .title {
    width: 100%;
    height: 1rem;
    background: #ffffff;
    margin-top: .1rem;
    text-align: left;
    padding: .1rem .3rem;
    display: flex;
    align-items: center;
  }

  .title span {
    font-size: 14px;
    color: #333;
    margin-right: .3rem;
  }

  .title input {
    flex: 1;
    height: .8rem;
    padding-left: .3rem;
    color: #999999;
    font-size: 12px;
    background: #efefef;
    border: none;
    outline: none;
  }
.content{
  height: 1.8rem;
  margin-bottom: .1rem;
  overflow: hidden;
}
  .content textarea {
    width: 100%;
    outline: none;
    border: none;
    padding: .2rem;
    margin-top: .1rem;
    height: 1.8rem;
    background: #ffffff;
    overflow: hidden;
    color: #999999;
    font-size: 12px;
  }

  .imgArr {
    width: 100%;
    max-height: 5rem;
    min-height: 1rem;
    background: #ffffff;
    margin-top: .1rem;
    overflow: hidden;
  }

  .imgArr ul {
    display: flex;
    flex-wrap: wrap;
    padding-top: .4rem;
    padding-left: .4rem;
  }

  .imgArr li {
    width: 1.9rem;
    height: 1.9rem;
    margin-right: .45rem;
    margin-bottom: .6rem;
  }

  .choose {
    display: flex;
    padding-left: .2rem;
    height: 1rem;
    margin-top: .1rem;
    width: 100%;
    background: #ffffff;
  }

  .choose > div:first-of-type {
    width: 1.3rem;
    display: flex;
    align-items: center;
  }

  .choose > div:last-of-type {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-around;
  }

  .choose > div:last-of-type > label {
    display: flex;
    align-items: center;
  }

  .avatar-uploader .el-upload {
    /* border: 1px dashed #d9d9d9;
    border-radius: 6px; */
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: .7rem;
    padding-bottom: .1rem;
    background: #efefef;
  }

  .avatar-uploader .el-upload {
    width: 100%;
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

  .avatar {
    width: 100%;
    height: 100%;
  }

  .move-enter, .move-leave-to {
    transform: translateX(100%);
  }

  .move-enter-active, .move-leave-active {
    transition: all .3s;
  }
</style>
