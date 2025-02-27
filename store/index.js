import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		// 小程序配置
		appProperties: {
			"shopName": "智链刺茶",
			"sendingPrice": 100, // 外卖配送费
			"packingPrice": 0, // 包装费
			"sendingNeedLeastPrice": 1000, // 起送需要的最低价格
			"businessStartTime": 8, // 营业开始时间, 开始的点必须在结束之前
			"businessEndTime": 23, // 营业结束时间
			phone: '10086', // 联系电话
			email: 'y330160@126.com', // 联系邮箱
			shopStatus: true, // 商家营业状态
			shopNotice: "8点到23点可以送餐~", // 公告
			testUserLoginEnabled: true // 测试登陆
		},
		cart: [], // 购物车
		userInfo: null,
		takeType: '到店自取', // 取餐方式
		token: null,
		position: {
			latitude: null,
			longitude: null
		}

	},
	getters: {
		getUserInfo: state => {
			return state.userInfo;
		},
		getToken: state => {
			return state.token
		},
		getTakeType: state => {
			return state.takeType
		},
		get_position: state => {
			return state.position
		}
	},
	mutations: {
		login(state, userInfo) {
			console.log("[vuex] 登录", userInfo)
			state.userInfo = userInfo;
			state.token = userInfo.token;
			uni.setStorageSync('token', userInfo.token)
			uni.setStorageSync("userInfo", userInfo) // 缓存用户的信息到本地
		},
		logout(state) {
			console.log("[vuex] 退出登录")
			state.userInfo = null;
			state.token = null;
			uni.removeStorageSync('token');
			uni.removeStorageSync("userInfo");
		},
		setUserInfo(state, userInfo) {
			state.userInfo = userInfo;
			uni.setStorageSync("userInfo", userInfo) // 缓存用户的信息到本地
		},
		setToken(state, token) {
			state.token = token;
			uni.setStorageSync('token', token)
		},
		// 设置购物车
		set_cart(state, cart) {
			state.cart = cart
		},
		// 下单方式 外卖配送，到店自取
		set_take_type(state, type) {
			state.takeType = type
		},
		set_app_properties(state, appProperties) {
			state.appProperties = appProperties;
		},
		// 获取定位
		set_position(state, position) {
			state.position.latitude = position.polatitude;
			state.position.longitude = position.longitude;
			console.log(position)
		}
	},
	actions: {}
})

export default store