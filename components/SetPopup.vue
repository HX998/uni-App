<template>
	<view class="cu-modal drawer-modal justify-start " :class="show?'show':''" @click="close()">
		<view class="deloag_box" @click.stop>
			<view class="cu-bar search van-sticky">
				<view>
					<img class="cu-avatar round" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg"
						alt="" style="margin-right: 10upx;">
					<text style="margin-right: 10upx;">$ 听闻余生 $</text>
					<text class="cuIcon-right"></text>
				</view>
				<view class="action">
					<text class="cuIcon-scan"></text>
				</view>
			</view>
			<van-cell-group inset>
				<van-cell title="我的消息" value="内容" />
				<van-cell title="云贝中心" value="内容" />
				<van-cell title="创作者中心" value="内容" />
			</van-cell-group>
			<!-- <button @click="firther">点击事件</button> -->
		</view>
	</view>
</template>

<script>
	export default {
		props: {},
		data() {
			return {
				show: false,
				list: [{
					content: [{
							icon: 'commentfill',
							title: '我的消息',
							num: '9',
							text: '',
							right: 'right'
						},
						{
							icon: 'commentfill',
							title: '云贝中心',
							num: '',
							text: '签到',
							right: 'right'
						},
						{
							icon: 'commentfill',
							title: '创作者中心',
							num: '',
							text: '',
							right: 'right'
						}
					]
				}, {
					content: [{
							icon: 'commentfill',
							title: '趣测',
							num: '',
							text: '点击查看今日运势',
							right: 'right'
						},
						{
							icon: 'commentfill',
							title: '云村有票',
							num: '',
							text: '',
							right: 'right'
						},
						{
							icon: 'commentfill',
							title: '多多西西口袋',
							num: '',
							text: '',
							right: 'right'
						},
						{
							icon: 'commentfill',
							title: '商城',
							num: '',
							text: '',
							right: 'right'
						},
						{
							icon: 'commentfill',
							title: 'Beat专区',
							text: '投稿说唱赢万元礼！',
							num: '',
							right: 'right'
						},
						{
							icon: 'commentfill',
							title: '口袋彩铃',
							text: '',
							num: '',
							right: 'right'
						},
						{
							icon: 'commentfill',
							title: '游戏专区',
							text: '音乐浇灌治愈花园',
							num: '',
							right: 'right'
						}
					]
				}, {
					content: [

					]
				}]
			}
		},
		methods: {
			open() {
				this.show = true
			},
			close() {
				this.show = false
			},
			firther() {
				this.$emit('children', '子组件')
			}
		}
	}
</script>

<style>
	.deloag_box {
		width: 80%;
		height: 100vh;
		background-color: #f1f1f1;
	}
</style>