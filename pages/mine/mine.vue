<template>
	<view class="container">

		<view class="userInfo">
			<view class="" @tap="userinfo">
				<image class="avatar" v-if="userInfo" :src="userInfo.wxAvatar" style="border-radius: 100rpx;"></image>
				<image v-else src="/static/images/mine/default.png"></image>
			</view>
			<view class="info">
				<view class="font-size-lg font-weight-bold" v-if="!userInfo">请点击授权登录</view>
				<view class="basic" v-if="userInfo">
					<view class="nickName">{{ userInfo.name ? userInfo.name : '新用户' }}</view>
					<uni-tag style="margin-left: 30rpx;" text="白金会员" type="primary" size="mini" />
				</view>
				<view class="deposit" v-if="userInfo">
					<view class="integral">积分：5</view>
					<view class="balance" style="margin-left: 30rpx;">余额：0</view>
				</view>
			</view>
			<view class="qrs" @tap="map">
				<image class="qr" src="/static/icon/mine/qr.png"></image>
				<view class="qr-info">会员码</view>
			</view>
		</view>

		<!-- service box begin -->
		<view class="service-box">

			<view class="font-size-lg text-color-base font-weight-bold" style="margin-bottom: 20rpx;">我的服务</view>
			<view class="row">
				<view class="grid" @tap="userinfo">
					<view class="image">
						<image src="/static/icon/mine/info.png"></image>
					</view>
					<view>我的信息</view>
				</view>
				<view class="grid" @tap="orders">
					<view class="image">
						<image src="/static/icon/mine/dingdan.png"></image>
					</view>
					<view>我的订单</view>
				</view>
				<view class="grid" @tap="sign">
					<view class="image">
						<image src="/static/icon/mine/sign.png"></image>
					</view>
					<view>签到</view>
				</view>
				<view class="grid" @tap="toContact()">
					<view class="image">
						<image src="/static/icon/mine/customer.png"></image>
					</view>
					<view>联系我们</view>
				</view>
				<view class="grid" @tap="logout">
					<view class="image">
						<image src="/static/icon/mine/exit.png"></image>
					</view>
					<view>退出登录</view>
				</view>
				<view class="grid" @tap="services">
					<view class="image">
						<image src="/static/icon/mine/more.png"></image>
					</view>
					<view>更多服务</view>
				</view>
			</view>
		</view>
		<!-- service box end -->
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';

	export default {
		data() {
			return {
				background: 'https://img.tukuppt.com/ad_preview/00/20/40/5c9a14155d934.jpg!/fw/980'
			};
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
			// 前往登录页
			login() {
				uni.navigateTo({
					url: '/pages/login/login'
				});
			},

			// 退出登录
			logout() {
				let that = this;
				if (!this.userInfo) {
					this.$msg("请先登录")
					return;
				}
				uni.showModal({
					content: "是否退出登录?",
					cancelText: "取消",
					confirmText: "退出登录",
					success: function(e) {
						if (e.confirm) {
							that.$request("/user/logout", "delete").then(result => {
								that.$store.commit("logout")
								uni.reLaunch({
									url: '/pages/login/login'
								})
							})
						}
					}
				})
			},

			toContact() {
				uni.navigateTo({
					url: '/pages/services/contact/contact'
				});
			},

			sign() {
				uni.navigateTo({
					url: '/pages/sign/sign'
				})
			},

			addresses() {
				if (!this.userInfo) {
					this.login();
					return;
				}
				uni.navigateTo({
					url: '/pages/address/address'
				});
			},

			orders() {
				if (!this.userInfo) {
					this.login();
					return;
				}
				uni.navigateTo({
					url: '/pages/orders/orders'
				});
			},

			// 如果this.userinfo为空就执行登录方法
			userinfo() {
				if (!this.userInfo) {
					this.login();
					return;
				}
				// userinfo已存在，则跳转到用户信息页面
				uni.navigateTo({
					url: '/pages/mine/userinfo'
				});
			},
			
			services() {
				uni.navigateTo({
					url: '/pages/services/services'
				});
			},
			
			map(){
				uni.navigateTo({
					url: '/pages/position/position'
				})
			}

		}
	};
</script>

<style lang="scss">
	.container {
		padding: 25rpx;
		background: url("https://img.tukuppt.com/ad_preview/00/09/13/5c9911109cac8.jpg!/fw/780");
		width: 100%;
		min-height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.userInfo {
		margin-top: 200rpx;
		border-radius: 20rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #ffffff;
		padding: 20rpx;
		box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.05);
		margin-bottom: 20rpx;

		image {
			width: 100rpx;
			height: 100rpx;
		}

		.qrs {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-items: center;
			margin-left: 200rpx;

			.qr {
				width: 60rpx;
				height: 60rpx;
			}

			.qr-info {
				font-size: $font-size-sm;
				color: $text-color-base;
			}

		}

		.info {
			margin-left: 25rpx;

			.basic {
				display: flex;
				flex-direction: row;

				.nickName {
					font-weight: bold;
					font-family: KaiTi;
				}
			}

			.deposit {
				display: flex;
				flex-direction: row;
				margin-top: 10rpx;
				font-size: 25rpx;
				font-family: KaiTi;
			}
		}

	}

	.bg {
		width: 100%;
		height: calc(410 / 594 * 750rpx);
	}

	.service-box {
		width: 100%;
		background-color: #ffffff;
		padding: 32rpx 30rpx 10rpx;
		box-shadow: $box-shadow;
		border-radius: 20rpx;

		.row {
			display: flex;
			flex-wrap: wrap;
			color: $text-color-assist;
			font-size: $font-size-sm;
			padding-bottom: -40rpx;

			.grid {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-bottom: 40rpx;
				width: 25%;
				position: relative;

				.image {
					image {
						width: 80rpx;
						height: 80rpx;
						margin-bottom: 20rpx;
					}
				}

				.new-badage {
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					top: 0;
					right: 30rpx;
				}
			}
		}
	}
</style>