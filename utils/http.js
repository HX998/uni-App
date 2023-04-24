import {
	baseUrl
} from './config.js'

module.exports = {
	/*
	 * url:请求的接口地址
	 * methodType:请求方式
	 * data: 要传递的参数
	 */
	request: function(url, methodType, data) {
		let fullUrl = `${baseUrl}${url}`
		let token = uni.getStorageSync('token') ? uni.getStorageSync('token') : ''
		uni.showLoading({
			title: "加载中"
		});
		return new Promise((resolve, reject) => {
			uni.request({
				url: fullUrl,
				data,
				method: methodType,
				data,
				// header: {
				// 	'content-type': 'application/json', // 默认值
				// 	'x-api-key': token,
				// },
				success: (res) => {
					console.log(res, 'success');
					if (res.data.code === 200) {
						resolve(res.data)
					}else if(res.data.code === 803){
						resolve(res.data)
					} else {
						uni.showToast({
							title: '请求异常',
							icon: 'none'
						})
						reject(res.data)
					}
				},
				fail: () => {
					console.log('fail');
					uni.showToast({
						title: '接口请求错误',
						icon: 'none'
					})
					reject('接口请求错误')
				},
				complete: () => {
					console.log('complete');
					setTimeout(() => {
						uni.hideLoading()
					}, 100)
				}
			})
		})
	}
}