<template>
    <div class="success">
		<div class="loading" v-show="slider">
			<mt-spinner type="triple-bounce" color="#ccc" :size="40"></mt-spinner>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		MessageBox,
		Spinner

	} from 'mint-ui';
	Vue.component(Spinner.name, Spinner);

    export default {
		data(){
			return{
				slider:true
			}
		},
		mounted(){
			var that = this;
			
			
		},
		created(){
			var that = this;
			setTimeout(function(){
				that.slider = false;
			},2000)
		
			setTimeout(function(){
					MessageBox({
						title: '提示',
						message: "恭喜您充值成功!",
					}).then(
						action=>{
							that.$router.push({
								name: "money"
							})
						}	
					)		
			},2000)
		}
	
    }
</script>
	
<style scoped>
.loading {
		position: fixed;
		height: 50px;
		width: 50px;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		z-index: 10;
}	

</style>
