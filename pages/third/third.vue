<template>
	<view>
		<web-view :update-title="true" :src="web_url"></web-view>
	</view>
</template>

<script>
	export default {
		name  : "third",
		data() {
			return {
				web_url:'',
				
			}
		},
		methods: {
			
		},
		mounted(){
			
		},
		onLoad(option) {
			this.web_url=option.url+'?uid='+option.uid
			
		}
	}
</script>

<style>

</style>
