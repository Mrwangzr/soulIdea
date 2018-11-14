<template>
<transition name="move">
  <section>
    <header-com></header-com>
    <ul>
      <li>
        <list-com></list-com>
      </li>
    </ul>
  </section>
</transition>
</template>

<script>
  import header from "./searchUserByNameHeader";
  import list from "./searchUserByNameList";
    export default {
        name: "search-user-by-name-page",
        components:{
          "header-com":header,
          "list-com":list
      }
    }
</script>

<style scoped>
  section{
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
