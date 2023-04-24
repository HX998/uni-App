<template>
	<view>
		<view class="img">
			<image class="image" src="../../static/Login.png" mode=""></image>
		</view>
		<!-- <form class="_form">
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
		</form> -->
		<view class="QRcode">
			<image class="QR_image" :src="imgUrl" mode="" @click="getKeyCode"></image>
		</view>
		<button class="button cu-btn bg-red round lg" @click="Check">登录</button>
	</view>
</template>

<script>
	import {
		getKey,
		getCreate,
		getCheck,
		getAccount
	} from '@/utils/api.js'

	export default {
		data() {
			return {
				form: {
					phone: '18739989913',
					// password: 'zxcv1234'
					captcha: ''
				},
				imgUrl: '',
				key: ''
			}
		},
		onLoad() {
			this.getKeyCode()
		},
		methods: {
			getKeyCode() {
				getKey({
					time: Date.parse(new Date())
				}).then(res => {
					console.log(res, 'res');
					this.key = res.data.unikey
					let data = {
						key: this.key,
						qrimg: true
					}
					getCreate(data).then(it => {
						console.log(it, 'ititit');
						this.imgUrl = it.data.qrimg
					})
				})
			},
			Check() {
				getCheck({
					key: this.key
				}).then(res => {
					console.log(res, '验证二维码');
					uni.setStorageSync('cookies', res.cookies)
					this.getAccount()
				})
			},
			getAccount() {
				getAccount().then(it => {
					uni.setStorageSync('user', it.account)
					uni.switchTab({
						url: '/pages/my/my'
					})
				})
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

	.QRcode {
		text-align: center;
	}

	.QR_image {
		position: absolute;
		top: 55%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 500upx;
		height: 500upx;
		/* width: 70%;
		height: auto; */
	}

	.button {
		position: absolute;
		top: 78%;
		left: 50%;
		transform: translateX(-50%);
		width: 80%;
		margin: 48upx auto;
	}
</style>