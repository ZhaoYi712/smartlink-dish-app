<template>

	<view class="main">

		<view class="swiper">
			<!--circular用来设置循环轮播   indicator-dots设置下面小圆点用来点击 -->
			<swiper class="swiper-box" circular indicator-dots autoplay>
				<!-- v-for循环遍历数组 -->
				<swiper-item v-for="item in swipers">
					<image :src="item"></image>
				</swiper-item>
			</swiper>
		</view>

		<view class="container">

			<view class="userInfo" @tap="userinfo">
				<view class="infoTip">
					你好呀，欢迎来到智链点单！
				</view>
			</view>

			<view class="ac-option">
				<view class="option-box" @click="orderFood">
					<image style="width: 130rpx;height: 130rpx;" src="/static/icon/index/now-dish.png"></image>
					<view class="option-t">到店取餐</view>
					<view class="option-tip">在线点，到店取</view>
				</view>
				<view class="option-box" @click="distribution">
					<image style="width: 130rpx;height: 130rpx;" src="/static/icon/index/wm.png"></image>
					<view class="option-t">外卖配送</view>
					<view class="option-tip">暂未开通，敬请期待</view>
				</view>
			</view>

			<view class="active">
				<view class="index" @tap="actives">
					<image class="active-img" src="/static/icon/index/mall.png"></image>
					<view class="active-text">积分商城</view>
				</view>
				<view class="index" @tap="actives">
					<image class="active-img" src="/static/icon/index/activities.png"></image>
					<view class="active-text">今日活动</view>
				</view>
				<view class="index" @tap="actives">
					<image class="active-img" src="/static/icon/index/gift.png"></image>
					<view class="active-text">下单有礼</view>
				</view>
				<view class="index" @tap="actives">
					<image class="active-img" src="/static/icon/index/member.png"></image>
					<view class="active-text">会员中心</view>
				</view>
			</view>

			<!-- <view class="preferential">
				<view class="title">优惠专区</view>
				<image class="item" src="https://img.zcool.cn/community/014f4d58eb2ce2a8012049ef7c812c.jpg@2o.jpg"></image>
				<image class="item" src="https://pic.nximg.cn/file/20210409/21588030_103925410120_2.jpg"></image>
				<image class="item" src="https://img.zcool.cn/community/017e8c58d87dd2a801219c77c40094.jpg@2o.jpg"></image>
			</view> -->

		</view>

	</view>

</template>

<script>
	import {
		mapState
	} from 'vuex';

	export default {
		data() {
			return {
				swipers: [
					'https://img-u-4.51miz.com/Templet/00/17/75/55/177555_e10700d86ddfd59c798319c11250f576.jpg-1.jpg',
					'https://img.zcool.cn/community/0192e76225de9511013f01cdc88eba.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100'
				],
			}
		},
		computed: {
			...mapState(['userInfo', "appProperties"])
		},
		onLoad() {
			let that = this;
			that.$request('/config', 'get').then(result => {
				console.log('刷新配置信息:' + JSON.stringify(result.data));
				that.$store.commit('set_app_properties', result.data);
			})

			if (!this.userInfo) {
				// 不登录 通过本地缓存直接进入
				let userInfo = uni.getStorageSync("userInfo");
				if (userInfo) {
					console.log("不登录，走本地缓存")
					this.$store.commit("login", userInfo);
				}
			}

		},
		methods: {

			// 外卖配送
			distribution() {
				uni.showToast({
					title: '该服务暂未开通',
					icon: 'none'
				})
			},

			orderFood() {
				uni.switchTab({
					url: '/pages/menu/menu'
				});
			},

			// 如果用户未登录
			userinfo() {
				if (!this.userInfo) {
					uni.navigateTo({
						url: '/pages/login/login'
					});
					return;
				}
			},

			actives() {
				uni.showToast({
					title: '该功能尚未完善',
					icon: 'none'
				})
			},

		}
	}
</script>

<style lang="scss">
	.main {
		// background: url("https://pic1.zhimg.com/v2-9b839e0d2e69243a9104b4ce55a122c6_r.jpg?source=1940ef5c");
		background: url("https://tse1-mm.cn.bing.net/th/id/OIP-C.5zGN9Y6AG9GlSMpjxUVkkAHaNK?rs=1&pid=ImgDetMain");
		width: 100%;
		min-height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		// position: relative;
	}

	.container {
		display: flex;
		flex-direction: column;
		padding: 25rpx;
		position: absolute;
		top: 450rpx;
		height: 0;

		.userInfo {
			border-radius: 20rpx 20rpx 0rpx 0rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			background-color: #ffffff;
			padding: 10rpx;
			// margin-bottom: 20rpx;
			box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.05);
			background-color: #4a4a4a;
			opacity: 0.9;

			.infoTip{
				color: $color-warning;
				font-size: $font-size-base;
			}
		}

	}

	.swiper {
		width: 100%;
		position: absolute;

		.swiper-box {
			height: 550rpx;

			image {
				width: 100%;
				height: 550rpx;
			}
		}

	}


	.ac-option {
		border-radius: 0rpx 0rpx 20rpx 20rpx;
		background-color: #ffffff;
		height: 250rpx;
		// box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.05);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		padding: 20rpx;
		margin-bottom: 20rpx;


		.option-box {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.option-t {
			margin: 10rpx;
			font-weight: bold;
		}

		.option-tip {
			color: #d78f00;
			font-size: $font-size-mini;
		}

	}

	.active {
		border-radius: 20rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #ffffff;
		padding: 10rpx;
		padding-left: 50rpx;
		padding-right: 50rpx;
		margin-bottom: 20rpx;
		box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.05);
		justify-content: space-between;

		.index {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: $font-size-sm;
			color: $text-color-assist;
		}

		.active-img {
			width: 80rpx;
			height: 80rpx;
			margin: 10rpx;
		}
	}

	.preferential {

		.title {
			margin: 10rpx;
			color: #414141;
			font-size: $font-size-lg;
			border-bottom: 2px solid #a4a4a4;
		}

		.item {
			border-radius: 20rpx;
			width: 100%;
			height: 300rpx;
			margin-bottom: 10rpx;
		}
	}
</style>