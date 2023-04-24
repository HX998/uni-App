<template>
	<view class="main">
		<view class="nav">
			<image class="nav_img nav_more" src="../../static/more.png" mode="" />
			<van-icon class="more_num" info="9" />
			<image class="nav_img" src="../../static/search.png" mode="" />
		</view>
		<view class="container">
			<view class="con_card con_hand">
				<image class="sculpture" src="/static/logo.png" mode=""></image>
				<view class="con_title">
					<text>@听闻余生@</text>
				</view>
				<view class="con_info">
					<text class="con_info_item">1 关注</text>
					<text class="septal_line"> | </text>
					<text class="con_info_item">0 粉丝</text>
					<text class="septal_line"> | </text>
					<text class="con_info_item">Lv.7</text>
				</view>
			</view>
			<view class="con_card"></view>
			<view class="con_card"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.main {
		padding: 24upx;
	}

	.nav {
		height: 40upx;
		display: flex;
		justify-content: space-between;
	}

	.nav_img {
		width: 36upx;
		height: 36upx;
	}

	.nav_more {
		position: relative;
	}

	.more_num {
		position: absolute;
		left: 60upx;
	}

	.container {
		margin-top: 100upx;
	}

	.con_card {
		background-color: #fff;
		margin: 36upx 0;
		border-radius: 20upx;
		box-shadow: 0 0 30upx #d5d5d5;
	}

	.con_hand {
		text-align: center;
		position: relative;
		height: 200upx;
		margin-top: 30upx;
	}

	.sculpture {
		position: absolute;
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
		left: 50%;
		transform: translateX(-50%);
		top: -60upx
	}

	.con_title {
		padding-top: 70upx;
	}

	.con_info {
		padding: 20upx;
	}

	.con_info_item {
		margin: 10upx;
		color: #7c7c7c;
	}

	.septal_line {
		position: relative;
		top: -5upx;
		color: #d8d8d8;
	}
</style>