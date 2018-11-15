<template>
    <div class="publish_box">
        <contentPublishTop-com></contentPublishTop-com>
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
export default {
    components:{
        "contentPublishTop-com":contentPublishTop
    }
}
</script>
