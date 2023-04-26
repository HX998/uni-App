<template>
	<view>
		<view class="cu-bar search van-sticky">
			<view class="action">
				<text class="lg text-black cuIcon-sort"></text>
			</view>
			<view class="padding" style="width: 80%;">
				<view class="search-form round">
					<text class="lg text-black cuIcon-search"></text>
					<input style="width: 80%;" type="text" placeholder="搜索cuIcon" confirm-type="search"
						@input="searchIcon" @click="goSearch"></input>
					<text class="lg text-black cuIcon-scan"></text>
				</view>
			</view>
			<view class="action">
				<text class="lg text-black cuIcon-voice"></text>
			</view>
		</view>
		<swiper class="screen-swiper" indicator-dots indicator-color="#fff" indicator-active-color="#ff0000"
			:circular="true" :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in bannerList" :key="index">
				<img :src="item.pic" mode="aspectFill" style="width: 100%; height: 100%;"></img>
				<!-- <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false"
					style="width: 100%; height: 100%;" objectFit="cover""></video> -->
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
		getBanner
	} from '@/utils/api.js'
	export default {
		data() {
			return {
				bannerList: []
			}
		},
		onLoad() {
			this.getBannerinfo()
		},
		methods: {
			getBannerinfo() {
				getBanner().then(res => {
					console.log(res, '轮播图');
					this.bannerList = res.banners
				})
			},
			goSearch() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			}
		}
	}
</script>

<style>

</style>