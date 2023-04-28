<template>
	<view class="padding">
		<!-- 单曲 -->
		<view v-if="['1','1018'].includes(order) && searchData.song" class="song card_box">
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
				{{searchData.song.moreText || '更多单曲'}}
				<text class="lg text-blake cuIcon-right"></text>
			</view>
		</view>
		<!-- 歌单 -->
		<view v-if="['1000','1018'].includes(order) && searchData.playList" class="playList card_box">
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
				{{searchData.playList.moreText || '更多歌单'}}
				<text class="lg text-blake cuIcon-right"></text>
			</view>
		</view>
		<!-- 专辑 -->
		<view v-if="['10','1018'].includes(order) && searchData.album" class="playList card_box">
			<view class="margin">
				<view class="card_title">专辑</view>
				<view class="playList_box" v-for="(item,index) in searchData.album.albums" :key="item.id">
					<image class="card_img" :src="item.blurPicUrl"></image>
					<view class="playList_info">
						<view class="playList_name">{{item.name}}</view>
						<view class="playList_init">{{returnSonger(item.artists)}}
							{{formatDate(item.publishTime).slice(0,10)}}
						</view>
					</view>
				</view>
			</view>
			<view class="card_foot" style="border-top: 1upx solid #dcdcdc;">
				{{searchData.album.moreText || '更多专辑'}}
				<text class="lg text-blake cuIcon-right"></text>
			</view>
		</view>
		<!-- 用户 -->
		<view v-if="['1002','1018'].includes(order) && searchData.user" class="playList card_box">
			<view class="margin">
				<view class="card_title">用户</view>
				<view class="playList_box" v-for="(item,index) in searchData.user.users" :key="item.id">
					<image class="card_img_radius" :src="item.avatarUrl"></image>
					<!-- <image class="card_img_Lv" :src="item.avatarDetail.identityIconUrl"></image> -->
					<view class="playList_info">
						<view class="playList_name">
							{{item.nickname}}
							<image class="sex" :src="item.gender === 1 ? men : wemen" mode=""></image>
						</view>
						<view class="playList_init">{{ item.description }}</view>
					</view>
				</view>
				<view class="card_foot" style="border-top: 1upx solid #dcdcdc;">
					{{searchData.user.moreText || '更多用户'}}
					<text class="lg text-blake cuIcon-right"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import men from "@/static/men.png"
	import wemen from "@/static/wemen.png"
	export default {
		name: 'SearchComponent',
		data() {
			return {
				men,
				wemen,
			};
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
			formatDate(ts) {
				var now = new Date(ts);
				var year = now.getFullYear();
				var month = ((now.getMonth() + 1) < 10) ? ('0' + (now.getMonth() + 1)) : (now.getMonth() + 1);
				var date = (now.getDate() < 10) ? ('0' + now.getDate()) : (now.getDate());
				var hour = (now.getHours() < 10) ? ('0' + now.getHours()) : (now.getHours());
				var minute = (now.getMinutes() < 10) ? ('0' + now.getMinutes()) : (now.getMinutes());
				var second = (now.getSeconds() < 10) ? ('0' + now.getSeconds()) : (now.getSeconds());
				return year + "." + month + "." + date + " " + hour + ":" + minute + ":" + second;
			},
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

	.song_songer {
		width: 450upx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
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
		position: relative;
	}

	.card_img {
		width: 100upx;
		height: 100upx;
		border-radius: 15upx;
	}

	.card_img_radius {
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
	}

	.card_img_Lv {
		width: 30upx;
		height: 30upx;
		border-radius: 50%;
		position: absolute;
		bottom: 10upx;
		left: 70upx;
	}

	.playList_info {
		margin-left: 20upx;
	}

	.playList_init {
		font-size: 20upx;
		color: #c5c5c5;
		margin-top: 6upx;
	}

	.sex {
		width: 30upx;
		height: 30upx;
		border-radius: 50%;
		margin-left: 10upx;
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