<template>
  <div class="all">
    <div class="info">
      <img :src="item.head" alt="">
      <span>
         <p>{{item.name}}</p>
         <p>{{item.sign}}</p>
      </span>
    </div>

    <div class="add" @click="handleAddFriend()">
      加为好友
    </div>
  </div>

</template>

<script>
  import {MessageBox} from "mint-ui";
  import axios from "axios";
    export default {
        name: "search-user-by-name",
      props:[
         "item"
     ],
        methods:{
          //处理添加好友
              handleAddFriend(){
                MessageBox.confirm("添加对方为好友",{
                  title:" "
                }).then(
                  action=>{
                    axios({
                      methods:"get",
                      url:"/Soulidea-1.0/friend/addfriend?id="+this.item.id,
                    }).then(
                      (data)=>{
                        if(data.data.code === 200){
                        MessageBox.alert("添加成功",{
                            title:" "
                          });
                        }
                      }
                    ).catch(()=>{ MessageBox.alert("添加失败",{
                      title:" "
                    });});
                  }
                ).catch(()=>{});
              }
        }
    }
</script>

<style scoped>
  .all{
    background: #ffffff;
    width: 100%;
    height: 1.6rem;
    margin-top: .1rem;
    padding: 0 .4rem;
    display: flex;
    align-items: center;
    border:1px solid #efefef;
    border-left: none;
    border-right: none;
  }
  img{
    width: 1.1rem;
    height: 1.1rem;
    margin-right: .2rem;
    border-radius: 100%;
  }
  .info{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  span{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:.9rem;
  }
  p{
    text-align: left;
    width: 3.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p:first-of-type{
    font-size: 14px;
    font-weight:600;
    color: #666666;
  }
  p:last-of-type{
    color: #999;
  }
  .add{
    border: 1px solid #999999;
    height: .6rem;
    width: 3rem;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
  }

</style>
