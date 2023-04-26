<template>
	<view class="main">
		<view class="nav">
			<image class="nav_img nav_more" src="../../static/more.png" mode="" @tap="open" />
			<van-icon class="more_num" info="9" />
			<image class="nav_img" src="../../static/search.png" mode="" @click="searcher" />
		</view>
		<view class="container">
			<view class="con_card con_hand">
				<image class="sculpture" src="/static/logo.png" mode=""></image>
				<view class="con_title">
					<text>$ 听闻余生 $</text>
				</view>
				<view class="con_info">
					<text class="con_info_item">1 关注</text>
					<text class="septal_line"> | </text>
					<text class="con_info_item">0 粉丝</text>
					<text class="septal_line"> | </text>
					<text class="con_info_item">Lv.7</text>
				</view>
			</view>
			<view class="con_card music_app">
				<view class="cu-list grid col-4">
					<view class="cu-item" v-for="(item,index) in MusicApplications" :key="index">
						<view class="lg text-red icon_image" :class="'cuIcon-' + item.image"></view>
						<text>{{item.name}}</text>
					</view>
				</view>
				<view class="card_down">
					<text><i class="lg text-gray cuIcon-add"></i>音乐应用</text>
				</view>
			</view>
		</view>
		<scroll-view scroll-x class="bg-white nav text-center" style="height: 90upx;">
			<view class="cu-item" v-for="(item,index) in tabs" :key="index" @click="tab_type = index"
				:class="index===tab_type?'text-red cur':''">
				{{item}}
			</view>
		</scroll-view>
		<view class="con_card padding" v-if="tab_type === 0">
			<view style="display: flex;justify-content: space-between;">
				<text>创建歌单(n个)</text>
				<text>
					<text class="text-gray cuIcon-add"></text>
					<text class="text-gray cuIcon-moreandroid"></text>
				</text>
			</view>
			<view class="padding" style="height: 80upx; text-align: center; color: #dedede;">
				暂无歌单
			</view>
		</view>
		<view class="con_card padding" v-if="tab_type === 1">
			<view style="display: flex;justify-content: space-between;">
				<text>收藏歌单(n个)</text>
				<text>
					<text class="text-gray cuIcon-add"></text>
					<text class="text-gray cuIcon-moreandroid"></text>
				</text>
			</view>
			<view class="padding" style="height: 80upx; text-align: center; color: #dedede;">
				暂无歌单
			</view>
		</view>
		<SetPopup ref="SetPopup" @children="children" />
	</view>
</template>

<script>
	import {
		getUserDetail
	} from '@/utils/api.js'
	import SetPopup from "@/components/SetPopup.vue"

	export default {
		data() {
			return {
				uid: uni.getStorageSync('user').id,
				MusicApplications: [ // 音乐应用
					{
						image: 'videofill',
						name: '最近播放'
					},
					{
						image: 'musicfill',
						name: '本地/下载'
					},
					{
						image: 'pullup',
						name: '云盘'
					},
					{
						image: 'goodsfavor',
						name: '已购'
					},
					{
						image: 'friend',
						name: '我的好友'
					},
					{
						image: 'favorfill',
						name: '收藏和赞'
					},
					{
						image: 'wefill',
						name: '我的播客'
					},
					{
						image: 'likefill',
						name: '乐迷团'
					},
				],
				tabs: ['创建歌单', '收藏歌单'],
				tab_type: 0
			}
		},
		components: {
			SetPopup
		},
		onLoad() {
			// this.getuserInfo()
		},
		methods: {
			open() {
				this.$refs.SetPopup.open()
			},
			children(e) {
				console.log('千位', e);
			},
			searcher() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			getuserInfo() {
				let data = {
					uid: this.uid
				}
				getUserDetail(data).then(res => {
					console.log(res, 'res');
				})
			}
		}
	}
</script>

<style>
	@import url("my.css");
</style>