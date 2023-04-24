<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// uni-app客户端获取push客户端标记
			uni.getPushClientId({
				success: (res) => {
					let cid = res.cid
					uni.setStorageSync('cid', cid);
					console.log('客户端推送标识:', cid)
				},
				fail(err) {
					console.log(err)
				}
			})
			uni.onPushMessage((res) => {
				console.log("收到推送消息：", res) //监听推送消息
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "colorui/main.css";
	@import "colorui/icon.css";

</style>