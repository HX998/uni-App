<template>
	<view class="padding ">
		<!-- 单曲 -->
		<view class="song card_box">
			<view class="margin">
				<view class="card_title">单曲</view>
				<view class="song_box padding" v-for="(item,index) in searchData.song.songs" :key="item.id">
					<view class="song_name">{{item.name}}</view>
					<view class="song_songer">{{returnSonger(item.ar) + '-' + item.al.name}}</view>
					<text class="lg text-blake cuIcon-video btn_bof"></text>
					<text class="lg text-blake cuIcon-moreandroid more_info"></text>
				</view>
			</view>
			<view class="card_foot" style="border-top: 1upx solid #dcdcdc;">
				{{searchData.song.moreText}}
				<text class="lg text-blake cuIcon-right"></text>
			</view>
		</view>
		<!-- 歌单 -->
		<view class="playList card_box">
			<view class="margin">
				<view class="card_title">歌单</view>
				<view class="playList_box" v-for="(item,index) in searchData.playList.playLists" :key="item.id">
					<image class="card_img" :src="item.coverImgUrl"></image>
					<view class="playList_info">
						<view class="playList_name">{{item.name}}</view>
						<view class="playList_init">{{item.trackCount}}首，by {{item.creator.nickname}},
							播放{{(item.playCount/10000).toFixed(1)}}万次</view>

					</view>
				</view>
			</view>
			<view class="card_foot" style="border-top: 1upx solid #dcdcdc;">
				{{searchData.playList.moreText}}
				<text class="lg text-blake cuIcon-right"></text>
			</view>
		</view>
		<!-- 专辑 -->
		<view class="playList card_box">
			<view class="margin">
				<view class="card_title">专辑</view>
				<view class="playList_box" v-for="(item,index) in searchData.album.albums" :key="item.id">
					<image class="card_img" :src="item.blurPicUrl"></image>
					<view class="playList_info">
						<view class="playList_name">{{item.name}}</view>
						<!-- <view class="playList_init">{{item.trackCount}}首，by {{item.creator.nickname}},
							播放{{(item.playCount/10000).toFixed(1)}}万次</view> -->
					</view>
				</view>
			</view>
			<view class="card_foot" style="border-top: 1upx solid #dcdcdc;">
				{{searchData.playList.moreText}}
				<text class="lg text-blake cuIcon-right"></text>
			</view>
		</view>
		<!-- 用户 -->
		<view class="user"></view>
	</view>
</template>

<script>
	export default {
		name: 'SearchComponent',
		data() {
			return {};
		},
		props: {
			searchData: {
				type: Object,
				default: {}
			},
			order: {
				type: String,
				default: ''
			}
		},
		methods: {
			returnSonger(arr) {
				console.log(arr, 'aaaa');
				let name = '';
				arr.map((it, index) => {
					if (index == arr.length - 1) {
						name += it.name
					} else {
						name += it.name + '/'
					}
				})
				return name ? name : '--'
			},
		}
	}
</script>

<style>
	.search_box {}

	.card_title {
		width: 100%;
		line-height: 90upx;
		border-bottom: 1upx solid #dcdcdc;
	}

	.card_box {
		background-color: #ffffff;
		border-radius: 20upx;
		box-shadow: #c5c5c5 0 0 30upx;
	}

	.song_box {
		position: relative;
		font-size: 28upx;
		color: #535353;
		border-top: 1upx solid #dcdcdc;
	}

	.playList_box {
		padding: 15upx 0;
		font-size: 24upx;
		color: #535353;
		display: flex;
		align-items: center;
	}

	.card_img {
		width: 100upx;
		height: 100upx;
		border-radius: 15upx;
	}

	.playList_info {
		margin-left: 20upx;
	}

	.playList_init {
		font-size: 20upx;
		color: #c5c5c5;
		margin-top: 6upx;
	}

	.card_foot {
		font-size: 24upx;
		text-align: center;
		padding: 15upx;
		color: #949494;
		border-top: 1upx solid #dcdcdc;
	}

	.btn_bof {
		position: absolute;
		right: 100upx;
		top: 50upx;
	}

	.more_info {
		position: absolute;
		right: 50upx;
		top: 50upx;
	}
</style>