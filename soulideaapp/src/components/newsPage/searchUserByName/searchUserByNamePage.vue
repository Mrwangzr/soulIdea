<template>
<transition name="move">
  <div class="all">
    <header-com></header-com>
    <ul>
      <li v-for="item in userList">
        <list-com></list-com>
      </li>
    </ul>
  </div>
</transition>
</template>

<script>
  import header from "./searchUserByNameHeader";
  import list from "./searchUserByNameList";
  import axios from "axios";
    export default {
        name: "search-user-by-name-page",
        components:{
          "header-com":header,
          "list-com":list
      },
      data(){
        return{
          userList:[""]
        }
      },
      created(){
          this.$on("search-submit",this.handleSearch)
      },
      methods:{
          handleSearch(str){
            axios({
              method:"get",
              url:""
            }).then(
              (data)=>{
                  this.userList = [...this.userList,...data.data]
              }
            );
          }
      }
    }
</script>

<style scoped>
  .all{
    height: 100%;
  }
  ul{
    height: 100%;
    background: #f8f8f8;
  }
  .move-enter, .move-leave-to {
    transform: translateX(-100%);
  }

  .move-enter-active, .move-leave-active {
    transition: all .3s;
  }
</style>
