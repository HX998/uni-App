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
						<input style="width: 100%;" type="text" v-model="searchform.keywords" placeholder="搜索cuIcon"
							confirm-type="search" @input="searchsuggest"></input>
						<text v-if="searchform.keywords" class="lg text-black cuIcon-roundclose"
							@click="clearSearch"></text>
					</view>
				</view>
				<view class="action">
					<text style="font-size: 20upx;" @click="search">搜索</text>
				</view>
			</view>
		</view>
		<view v-if="type === ''" class="search_down padding van-sticky2">
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
		<view v-if="type === 'suggest'" class="search_suggest">
			<view class="search_suggest_item" v-for="it in search_suggest_list">
				<text class="lg text-black cuIcon-search margin"></text>
				<view class="search_name" @click="search">{{it.keyword}}</view>
			</view>
		</view>
		<scroll-view v-if="type === 'search'" scroll-x class="nav category_nav" scroll-with-animation
			:scroll-left="scrollLeft">
			<view class="cu-item" v-for="(item,index) in category" :key="index" @click="setType(item.type,index)"
				:class="item.type==searchform.type?'text-red cur':''">
				{{item.name}}
			</view>
		</scroll-view>
		<view v-if="type === 'search'" class="search_category">
			<ComponentSearch ref="ComponentSearch" :searchData="searchData" :order="searchform.type" />
		</view>
		<view v-else style="margin-top: 200upx;z-index: 1;">
			<van-tabs type="card" @click="SetNum($event)" style="">
				<van-tab v-for="(item,index) in list" :key="index" :title="item"></van-tab>
			</van-tabs>
			<view class="padding">
				<view v-if="numType === 0" class="con_card padding">
					<view class="swiper_title">热搜榜</view>
					<view class="swiper_infobox" v-for="(it,index) in hotList" :key="it.coder">
						<text class="swiper_ranking" :style="{color: index+1 > 3 ? '' :'red'}">{{index + 1}}.</text>
						<text class="swiper_info" @click="searchInfo(it.searchWord)">
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
		getSearch,
		getSearchSuggest,
	} from "@/utils/api.js"
	import ComponentSearch from "@/components/Search.vue"
	export default {
		name: 'search',
		data() {
			return {
				scrollLeft: 0,
				hotList: [],
				programList: [],
				toplist: [],
				newlist: [],
				searchData: [],
				list: ['热搜榜', '节目榜', '主播榜', '新人榜'],
				category: [ // 歌曲类目
					{
						name: '综合',
						type: '1018'
					},
					{
						name: '单曲',
						type: '1'
					},
					{
						name: '歌单',
						type: '1000'
					},
					{
						name: '视频',
						type: '1004'
					},
					{
						name: '歌手',
						type: '100'
					},
					{
						name: '电台',
						type: '1009'
					},
					{
						name: '歌词',
						type: '1006'
					},
					{
						name: '专辑',
						type: '10'
					},
					{
						name: '用户',
						type: '1002'
					}
				],
				numType: 0,
				search_suggest_list: [],
				type: '', // 控制搜索建议和榜单显示隐藏
				searchData: {},
				searchform: {
					keywords: '',
					type: '1018',
					limit: 10,
					offset: 0
				}
			}
		},
		components: {
			ComponentSearch
		},
		onLoad() {
			this.getHot()
			this.getProgram()
			this.getToplist()
			this.getNewcomer()
		},
		methods: {
			setType(value, index) {
				console.log(value, '类目Type');
				this.searchform.type = value
				this.scrollLeft = (index - 1) * 60
				this.search()
			},
			clearSearch() {
				this.searchform = {
					keywords: '',
					type: '1018',
					offset: 0
				}
				this.search()
			},
			searchInfo(e) {
				console.log(e, 'eeeeeeeeee');
				this.searchform.keywords = e
				this.search()
			},
			search() {
				if (this.searchform.keywords) {
					getSearch(this.searchform).then(sch => {
						this.type = 'search'
						console.log(sch, '搜索');
						this.searchData = {
							...sch.result
						}
					})
				} else {
					this.type = ''
				}
			},
			searchsuggest(e) {
				if (e.detail?.value) {
					console.log(e.detail?.value, '搜索建议');
					let keywords = e.detail.value
					getSearchSuggest(keywords).then(suggest => {
						console.log(suggest, '搜索建议');
						this.search_suggest_list = suggest.result.allMatch
						this.type = 'suggest'
					})
				} else {
					this.type = ''
				}
			},
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
	.van-sticky {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;
		background-color: #F8F8F8;
	}

	.van-sticky2 {
		position: fixed;
		top: 80upx;
		width: 100%;
	}

	.search_down {
		display: flex;
		justify-content: space-around;
		background-color: #F8F8F8;
		z-index: 2;
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

	.search_suggest {
		background-color: #F8F8F8;
		position: fixed;
		top: 180upx;
		width: 100%;
		height: calc(100vh - 180upx);
		z-index: 110;
	}

	.search_category {
		background-color: #F8F8F8;
		margin-top: 140upx;
		width: 100%;
		height: 100%;
		overflow-y: auto;
		z-index: 110;
	}

	.category_nav {
		position: fixed;
		top: 80upx;
		left: 0;
		z-index: 110;
		background-color: #F8F8F8;
	}

	.search_suggest_item {
		display: flex;
		justify-content: left;
		align-items: center;
	}

	.search_name {
		width: 100%;
		padding-bottom: 10upx;
		border-bottom: #e2e2e2 2upx solid;
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