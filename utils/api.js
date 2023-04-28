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
	getBanner() {
		/** 获取轮播图详情 */
		return request('/banner', 'GET', {
			type: '2'
		});
	},
	getHotList(data) {
		/** 获取热搜榜详情 */
		return request('/search/hot/detail', 'GET', data);
	},
	getProgramHours() {
		/** 获取 日节目榜详情 */
		return request('/dj/program/toplist/hours', 'GET', {
			limit: 20
		});
	},
	getToplistHours() {
		/** 获取 日主播榜详情 */
		return request('/dj/toplist/hours', 'GET', {
			limit: 20
		});
	},
	getNewcomerHours() {
		/** 获取 日新人榜详情 */
		return request('/dj/toplist/newcomer', 'GET', {
			limit: 20
		});
	},
	getSearch(data) {
		/** 获取 日新人榜详情 */
		return request('/search', 'GET', data);
	},
	getSearchSuggest(keywords) {
		/** 获取 日新人榜详情 */
		return request('/search/suggest', 'GET', {
			keywords: keywords,
			type: 'mobile'
		});
	},
	getArtist() {
		/** 获取华语歌手榜详情 */
		return request('/toplist/artist', 'GET', {
			type: '1'
		});
	},
}