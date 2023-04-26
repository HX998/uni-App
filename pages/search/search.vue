<template>
	<view>
		<view class="van-sticky">
			<view class="cu-bar search">
				<view class="action" @click="goBack">
					<text class="lg text-black cuIcon-back_android"></text>
				</view>
				<view class="" style="width: 80%;">
					<view class="search-form round">
						<text class="lg text-black cuIcon-search"></text>
						<input style="width: 100%;" type="text" placeholder="搜索cuIcon" confirm-type="search"
							@input="searchIcon"></input>
					</view>
				</view>
				<view class="action">
					<text style="font-size: 20upx;">搜索</text>
				</view>
			</view>
			<view class="search_down padding">
				<view class="search_item">
					<image class="seach_img" src="../../static/gs.png" mode=""></image>
					<text>歌手</text>
				</view>
				<view>|</view>
				<view class="search_item">
					<image class="seach_img" src="../../static/qf.png" mode=""></image>
					<text>曲风</text>
				</view>
				<view>|</view>
				<view class="search_item">
					<image class="seach_img" src="../../static/qu.png" mode=""></image>
					<text>专区</text>
				</view>
				<view>|</view>
				<view class="search_item">
					<image class="seach_img" src="../../static/sq.png" mode=""></image>
					<text>识曲</text>
				</view>
			</view>
		</view>
		<view>
			<van-tabs type="card" @click="SetNum($event)">
				<van-tab v-for="(item,index) in list" :key="index" :title="item"></van-tab>
			</van-tabs>
			<view class="padding">
				<view v-if="numType === 0" class="con_card padding">
					<view class="swiper_title">热搜榜</view>
					<view class="swiper_infobox" v-for="(it,index) in hotList" :key="it.coder">
						<text class="swiper_ranking" :style="{color: index+1 > 3 ? '' :'red'}">{{index + 1}}.</text>
						<text class="swiper_info">
							{{it.searchWord}}
							<image class="swiper_image_hot" v-if="it.iconType === 1" :src="it.iconUrl" mode=""></image>
							<image class="swiper_image_up" v-if="it.iconType === 5" :src="it.iconUrl" mode=""></image>
						</text>
					</view>
				</view>
				<view v-if="numType === 1" class="con_card padding">
					<view class="swiper_title">节目榜</view>
					<view class="swiper_infobox" v-for="(it,index) in programList" :key="it.coder">
						<text class="swiper_ranking" :style="{color: index+1 > 3 ? '' :'red'}">{{index + 1}}.</text>
						<text class="swiper_info">
							<image class="swiper_image" :src="it.program.coverUrl" mode=""></image>
							{{it.program.name}}
						</text>
					</view>
				</view>
				<view v-if="numType === 2" class="con_card padding">
					<view class="swiper_title">主播榜</view>
					<view class="swiper_infobox" v-for="(it,index) in toplist" :key="it.coder">
						<text class="swiper_ranking" :style="{color: index+1 > 3 ? '' :'red'}">{{index + 1}}.</text>
						<text class="swiper_info">
							<image class="swiper_image" :src="it.avatarUrl" mode=""></image>
							{{it.nickName}}
						</text>
					</view>
				</view>
				<view v-if="numType === 3" class="con_card padding">
					<view class="swiper_title">新人榜</view>
					<view class="swiper_infobox" v-for="(it,index) in newlist" :key="it.coder">
						<text class="swiper_ranking" :style="{color: index+1 > 3 ? '' :'red'}">{{index + 1}}.</text>
						<text class="swiper_info">
							<image class="swiper_image" :src="it.avatarUrl" mode=""></image>
							{{it.nickName}}
						</text>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import {
		getHotList,
		getProgramHours,
		getToplistHours,
		getNewcomerHours,
	} from "@/utils/api.js"
	export default {
		data() {
			return {
				hotList: [],
				programList: [],
				toplist: [],
				newlist: [],
				list: ['热搜榜', '节目榜', '主播榜', '新人榜'],
				numType: 0
			}
		},
		onLoad() {
			this.getHot()
			this.getProgram()
			this.getToplist()
			this.getNewcomer()
		},
		methods: {
			SetNum(e) {
				this.numType = e.detail.index
			},
			getNewcomer() {
				getNewcomerHours({}).then(news => {
					console.log(news, 'newlist');
					this.newlist = news.data.list
				})
			},
			getToplist() {
				getToplistHours({}).then(top => {
					console.log(top, 'toplist');
					this.toplist = top.data.list
				})
			},
			getProgram() {
				getProgramHours({}).then(pro => {
					console.log(pro.data.list, 'programList');
					this.programList = pro.data.list
				})
			},
			getHot() {
				getHotList({}).then(hot => {
					console.log(hot.data, 'hotList');
					this.hotList = hot.data
				})
			},
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>
	.search_down {
		display: flex;
		justify-content: space-around;
	}

	.search_item {
		display: flex;
		justify-items: center;
	}

	.seach_img {
		width: 36upx;
		height: 36upx;
		margin-right: 20upx;
	}

	.LIST_box {
		display: flex;
		justify-content: space-around;
		overflow-x: auto;
	}

	.con_card {
		font-size: 36upx;
		font-style: italic;
		background-color: #fff;
		border-radius: 20upx;
		box-shadow: 0 0 30upx #d5d5d5;
	}

	.swiper_title {
		display: block;
		font-size: 38upx;
		padding-bottom: 25upx;
		border-bottom: #dfdfdf 1px solid;
	}

	.swiper_infobox {
		margin: 20upx 0;
		display: flex;
		align-items: center;
	}

	.swiper_ranking {
		width: 50upx;
		display: inline-block;
		margin-right: 10upx;
	}

	.swiper_info {
		width: 495upx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.swiper_image_hot {
		margin-left: 15upx;
		width: 40upx;
		height: 30upx;
	}

	.swiper_image_up {
		margin-left: 15upx;
		width: 20upx;
		height: 30upx;
	}

	.swiper_image {
		width: 36upx;
		height: 36upx;
		border-radius: 50%;
		margin-right: 10upx;
	}
</style>