<template>
    <div class="publish_box">
        <contentPublishTop-com></contentPublishTop-com>
        <contentPublishTab-com></contentPublishTab-com>
    </div>
</template>
<style>
    .publish_box{
        width:100%;
        height:100%;
        padding-top:.4rem;
        background:#ccc;
    }
</style>
<script>
import contentPublishTop from "./contentPublishTop"
import contentPublishTab from "./contentPublishTab"
export default {
    components:{
        "contentPublishTop-com":contentPublishTop,
        "contentPublishTab-com":contentPublishTab
    }
}
</script>
