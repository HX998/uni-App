<template>
	<view>
		<van-button type="info" @click="login">信息按钮</van-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			login() {
				uni.switchTab({
					url: '/pages/find/find'
				});
			}
		}
	}
</script>

<style>

</style>