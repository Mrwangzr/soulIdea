<template>
    <div class="add_img">
        <div class="box_img wrapper" ref="wrapper">
            <div class="content">
                <div><img src="../../../../static/commentImg/psa2cde6d664f13de9-2b3f-43b8-bc18-1764470132f5.png" alt=""></div>
                <div><img src="../../../../static/commentImg/psa2cde6d664f13de9-2b3f-43b8-bc18-1764470132f5.png" alt=""></div>
                <div><img src="../../../../static/commentImg/psa2cde6d664f13de9-2b3f-43b8-bc18-1764470132f5.png" alt=""></div>
                <div><img src="../../../../static/commentImg/psa2cde6d664f13de9-2b3f-43b8-bc18-1764470132f5.png" alt=""></div>
                <div><img src="../../../../static/commentImg/psa2cde6d664f13de9-2b3f-43b8-bc18-1764470132f5.png" alt=""></div> 
                <div class="clickAdd_img"><i class="iconfont icon-jia"></i></div>
               <!-- <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>
                <div class="add-img" v-show="imgList.length">
                    <p class="font14">图片(最多6张，还可上传<span v-text="6-imgList.length"></span>张)</p>
                    <ul class="img-list">
                        <li v-for="(url,index) in imgList">
                            <img class="del" src="../../assets/img/home/btn_clean.png" @click.stop="delImg(index)"/> 
                            //del删除样式，icon字体图标需要自己找哦
                            <img :src="url.file.src">
                        </li>
                    </ul>
                </div> -->

            <!-- <div class="clickAdd_img" @click="chooseType">
                    <div class="add-image" align="center">
                       <i class="iconfont icon-jia"></i>  
                        <p class="font13">添加图片</p>
                    </div>
                </div>-->
            </div>
            
        </div>
        <div class="location_share">
            <div>发布位置:</div>
            <div>
                <i class="iconfont icon-hongdian"></i>
                <em>共享</em>
            </div>
            <div>
                <i class="iconfont icon-hongdian"></i>
                <em>专属</em>
            </div>
            <div></div>
        </div>
    </div>
</template>
<style>
.add_img {
  width: 100%;
  height: 100%;
  margin-top: 0.3rem;
}
.add_img .wrapper {
  width: 100%;
  height: 5rem;
}
.add_img .box_img .content {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.add_img .box_img .content .clickAdd_img {
  width: 1.9rem;
  height: 1.9rem;
  background: #ccc;
  text-align: center;
}
.add_img .box_img .content .clickAdd_img i {
  font-size: 12px;
  color: white;
  line-height: 1.9rem;
}
/* .add {
        display: inline-block;
        margin-bottom: 20px;
    }

    .add-image {
        padding-top: 15px;
        margin-left: 10px;
        width: 80px;
        top: 20px;
        height: 80px;
        border: 1px dashed rgba(0, 0, 0, .2);
    }

    .add-image .icon-camera {
        font-size: 24px;
    } */
.add_img .box_img .content div {
  width: 1.9rem;
  height: 1.9rem;
  margin-top: 0.64rem;
}
.add_img .box_img .content div img {
  width: 100%;
  height: 100%;
}
.add_img .location_share {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.add_img .location_share div {
  width: 25%;
  height: 1rem;
  font-size: 14px;
  color: #666666;
  font-weight: 500;
  line-height: 1rem;
  text-align: center;
}
.add_img .location_share div em {
  font-style: normal;
}
.add_img .location_share div i {
  font-size: 20px;
}
</style>
<script>
import BScroll from "better-scroll";
export default {
  mounted() {
    //第一个参数是最外面的大盒子第二个参数是配置项
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      //pullUpLoad 设置为true 开启上拉加载功能,设置threshold:50 意思是上拉到50时 执行pullingUp
      pullUpLoad: {
        threshold: 50
      }
    });
    //当用户上拉时触发事件 第一个参数：pullingUp上拉加载必须配置pullUpLoad：true 时候开启上拉加载
    this.scroll.on("pullingUp", () => {
      this.handlCommentNum(++this.pageNum);
    });
  },

  updated() {
    //重新计算高度
    // this.scroll.refresh()
    //当数据加载完毕后通知better-scroll停止加载数据
    // this.scroll.finishPullUp()
  },
  // updated() {
  //   this.scroll.refresh();
  // }
//    name: "Feedback",
//         data() {
//             return {
//                 showFace: false,
//                 imgList: [],
//                 size: 0,
//                 limit:6, //限制图片上传的数量
//                 tempImgs:[]
//             }
//         },
//         methods: {
//             chooseType() {
//                 document.getElementById('upload_file').click();
//             },
//             fileChange(el) {
//                 if (!el.target.files[0].size) return;
//                 this.fileList(el.target);
//                 el.target.value = ''
//             },
//             fileList(fileList) {
//                 let files = fileList.files;
//                 for (let i = 0; i < files.length; i++) {
//                     //判断是否为文件夹
//                     if (files[i].type != '') {
//                         this.fileAdd(files[i]);
//                     } else {
//                         //文件夹处理
//                         this.folders(fileList.items[i]);
//                     }
//                 }
//             },
//             //文件夹处理
//             folders(files) {
//                 let _this = this;
//                 //判断是否为原生file
//                 if (files.kind) {
//                     files = files.webkitGetAsEntry();
//                 }
//                 files.createReader().readEntries(function (file) {
//                     for (let i = 0; i < file.length; i++) {
//                         if (file[i].isFile) {
//                             _this.foldersAdd(file[i]);
//                         } else {
//                             _this.folders(file[i]);
//                         }
//                     }
//                 });

//             },
//             foldersAdd(entry) {
//                 let _this = this;
//                 entry.file(function (file) {
//                     _this.fileAdd(file)
//                 })
//             },
//             fileAdd(file) {
//                 if (this.limit !== undefined) this.limit--;
//                 if (this.limit !== undefined && this.limit < 0) return;
//                 //总大小
//                 this.size = this.size + file.size;
//                 //判断是否为图片文件
//                 if (file.type.indexOf('image') == -1) {
//                     this.$dialog.toast({mes: '请选择图片文件'});
//                 } else {
//                     let reader = new FileReader();
//                     let image = new Image();
//                     let _this = this;
//                     reader.readAsDataURL(file);
//                     reader.onload = function () {
//                         file.src = this.result;
//                         image.onload = function(){
//                             let width = image.width;
//                             let height = image.height;
//                             file.width = width;
//                             file.height = height;
//                             _this.imgList.push({
//                                 file
//                             });
//                             console.log( _this.imgList);
//                         };
//                         image.src= file.src;
//                     }
//                 }
//             },
//             delImg(index) {
//                 this.size = this.size - this.imgList[index].file.size;//总大小
//                 this.imgList.splice(index, 1);
//                 if (this.limit !== undefined) this.limit = 6-this.imgList.length;
//             },
//         }
    
};
</script>
