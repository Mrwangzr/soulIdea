<template>
  <transition name="move">
    <div class="all">
      <header-com @search-submit="handleSearch"></header-com>
      <div class="wrapper" ref="wrapper">
        <ul class="content">
          <li v-for="item in userList">
            <list-com :item="item"></list-com>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
  import header from "./searchUserByNameHeader";
  import list from "./searchUserByNameList";
  import axios from "axios";
  import BScroll from "better-scroll";

  export default {
    name: "search-user-by-name-page",
    components: {
      "header-com": header,
      "list-com": list
    },
    data() {
      return {
        userList: null
      }
    },
    methods: {
      handleSearch(str) {
        axios({
          method: "get",
          url: "/Soulidea-1.0/friend/searchfriend?search=" + str
        }).then(
          (data) => {
            console.log(data);
            this.userList = data.data.data;
          }
        );
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true
      })
    }
  }
</script>

<style scoped>
  .all {
    height: 100%;
  }
  .wrapper{
    height: 100%;
    overflow: hidden;
  }

  ul {
    background: #f8f8f8;
    padding-bottom: 1rem;
  }

  .move-enter, .move-leave-to {
    transform: translateX(100%);
  }

  .move-enter-active, .move-leave-active {
    transition: all .3s;
  }
</style>
