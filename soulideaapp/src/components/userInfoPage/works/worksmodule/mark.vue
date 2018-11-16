<template>
		<div class="mark" @click="handleTogo()"></div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			handleTogo() {
				this.$emit("handleMark",false)
			}
		},
	}
</script>

<style scoped>
.mark{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: #000;
	opacity:0.3;
}
</style>
