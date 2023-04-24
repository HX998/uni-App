import {
	request
} from './http.js'
//基于业务封装的接口
module.exports = {
	getSentcode(data) {
		/** 获取验证码 */
		return request('/captcha/sent', 'GET', data);
	},
	getVerifycode(data) {
		/** 校验验证码 */
		return request('/captcha/verify', 'GET', data);
	},
	getKey(data) {
		/** 获取二维码key */
		return request('/login/qr/key', 'GET', data);
	},
	getCreate(data) {
		/** 获取二维码 */
		return request('/login/qr/create', 'GET', data);
	},
	getCheck(data) {
		/** 校验二维码 */
		return request('/login/qr/check', 'GET', data);
	},
	getAccount(data) {
		/** 获取账号信息 */
		return request('/user/account', 'GET', data);
	},
	getUserDetail(data) {
		/** 获取用户详情 */
		return request('/user/detail', 'GET', data);
	},
}