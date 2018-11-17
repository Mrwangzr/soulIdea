<template>
<transition name="slide">
      <div class="publish_box">
        <contentPublishTop-com></contentPublishTop-com>
        <contentPublishTab-com></contentPublishTab-com>
        <contentPublishAdd-com></contentPublishAdd-com>
    </div>
</transition>
  
</template>
<style scoped>
.publish_box {
  width: 100%;
  height: 100%;
  padding-top: 0.4rem;
}
.slide-enter {
  transform: translateX(-100%);
}
.slide-enter-active {
  transition: all 300ms;
}
/* .slid-enter,
.slid-leave-to {
   opacity: 0; 
  transform: translateX(-100%);
}
.slid-enter-active,
.slid-leave-active {
  transition: all 3000ms;
} */
</style>
<script>
import contentPublishTop from "./contentPublishTop";
import contentPublishTab from "./contentPublishTab";
import contentPublishAdd from "./contentPublishAdd";
export default {
  components: {
    "contentPublishTop-com": contentPublishTop,
    "contentPublishTab-com": contentPublishTab,
    "contentPublishAdd-com": contentPublishAdd
  },
};
</script>
