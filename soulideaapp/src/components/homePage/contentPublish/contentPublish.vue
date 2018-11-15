<template>
    <div class="publish_box">
        <contentPublishTop-com></contentPublishTop-com>
        <contentPublishTab-com></contentPublishTab-com>
        <contentPublishAdd-com></contentPublishAdd-com>
    </div>
</template>
<style>
    .publish_box{
        width:100%;
        height:100%;
        padding-top:.4rem;
    }
</style>
<script>
import contentPublishTop from "./contentPublishTop"
import contentPublishTab from "./contentPublishTab"
import contentPublishAdd from "./contentPublishAdd"
export default {
    components:{
        "contentPublishTop-com":contentPublishTop,
        "contentPublishTab-com":contentPublishTab,
        "contentPublishAdd-com":contentPublishAdd
    }
}
</script>
