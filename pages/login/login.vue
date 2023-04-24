<template>
	<view>
		<view class="img">
			<image class="image" src="../../static/Login.png" mode=""></image>
		</view>
		<form class="_form">
			<view class="cu-form-group margin-top">
				<view class="title">手机号</view>
				<input placeholder="请输入手机号" name="input" v-model="form.phone"></input>
				<text class="text-gray cuIcon-roundclosefill" v-if="form.phone" @click="form.phone = ''"></text>
			</view>
			<view class="cu-form-group">
				<view class="title">验证码</view>
				<input placeholder="输入框带个按钮" name="input" v-model="form.captcha"></input>
				<text class="text-gray cuIcon-roundclosefill" v-if="form.captcha" @click="form.captcha = ''"></text>
				<button class='cu-btn bg-green shadow' @click="getcode">验证码</button>
			</view>
		</form>
		<view class="btn">
			<button class="button cu-btn bg-red round lg" @click="Login">登录</button>
		</view>
	</view>
</template>

<script>
	import {
		getSentcode,
		getVerifycode
	} from '@/utils/api.js'

	export default {
		data() {
			return {
				form: {
					phone: '18739989913',
					// password: 'zxcv1234'
					captcha: ''
				},
			}
		},
		methods: {
			getcode(val) {
				if (val) {
					let data = {
						phone: this.form.phone
					}
					getSentcode(data).then((res) => {
						console.log(res, 'asdasdasd');
						uni.showToast({
							title: '获取成功，验证码只有2分钟之内有效',
							duration: 1000,
							icon: "none"
						})
					}).catch(err => {
						uni.showToast({
							title: '获取失败' + err.data,
							duration: 1000,
							icon: "none"
						})
					})
				}
			},
			Login() {
				// getVerifycode(this.form).then((res) => {
				// 	uni.showToast({
				// 		title: '验证成功',
				// 		duration: 1000,
				// 		icon: "none"
				// 	})
				uni.switchTab({
					url: '/pages/find/find'
				});
				// }).catch(err => {
				// 	uni.showToast({
				// 		title: '验证失败' + err.data,
				// 		duration: 1000,
				// 		icon: "none"
				// 	})
				// 	console.log(err, 'error')
				// })
			}
		}
	}
</script>

<style>
	.img {
		width: 100%;
		text-align: center;
		padding: 96upx 48upx;
	}

	.image {
		width: 500upx;
		height: 500upx;
	}

	._form {
		width: 100%;
		padding: 48px 0;
	}

	.title {
		width: 160upx;
	}

	.btn {
		width: 100%;
		text-align: center;
	}

	.button {
		width: 80%;
		margin: 48upx auto;
	}
</style>