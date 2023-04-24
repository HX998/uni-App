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
}