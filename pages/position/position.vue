<template>
	<view class="content">
		<map style="width: 100%; height: 90vh;" :layer-style='5' :style="{height:mapheight}" :show-location='true'
			:latitude="latitude" :longitude="longitude" :markers="marker" :scale="scale" @markertap="markertap"
			@callouttap='callouttap'>

		</map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 23.106574, //纬度
				longitude: 113.324587, //经度
				scale: 13, //缩放级别
				bottomData: false,
				marker: [{
					id: 1234597,
					latitude: null, //纬度
					longitude: null, //经度
					iconPath: '', //显示的图标        
					rotate: 0, // 旋转度数
					width: 20, //宽
					height: 30, //高
					//  title:'我在这里',//标注点名
					alpha: 0.5, //透明度
					//      label:{//为标记点旁边增加标签   //因背景颜色H5不支持
					//   color:'red',//文本颜色
					//      },
					callout: { //自定义标记点上方的气泡窗口 点击有效  
						content: '我的位置', //文本
						color: '#ffffff', //文字颜色
						fontSize: 14, //文本大小
						borderRadius: 15, //边框圆角
						borderWidth: '10',
						bgColor: '#e51860', //背景颜色
						display: 'ALWAYS', //常显
					},
				}, ]
			}
		},
		computed: {
			mapheight() {
				let data = ''
				if (this.bottomData) {
					if (this.upTop) {
						data = '50px'
					} else {
						data = '200px'
					}
				} else {
					data = '90vh'
				}
				return data
			},
			coverbottom() {
				let data = ''
				if (this.bottomData) {
					data = '20rpx'
				} else {
					data = '100rpx'
				}
				return data
			}
		},
		onLoad() {
			this.getPosition()
		},
		methods: {

			getPosition() {
				uni.getLocation({
					type: 'wgs84',
					success: function(res) {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
						this.latitude = res.latitude
						this.longitude = res.longitude
					},
					fail: function() {
						uni.showToast({
							title: '获取地址失败，将导致部分功能不可用',
							icon: 'none'
						});
					}
				});
			},
			//地图点击事件
			markertap(e) {
				console.log("===你点击了标记点===", e)
			},
			//地图点击事件
			callouttap(e) {
				console.log('地图点击事件', e)
			}
		}

	}
</script>

<style lang='scss' scoped>
	.map-container {
		position: relative;
		overflow: hidden;

		.cover-view {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 80rpx;
			height: 80rpx;
			color: #484848;
			background-color: #fff;
			background-size: 120rpx 120rpx;
			background-position: center center;
			position: absolute;
			bottom: 100rpx;
			right: 32rpx;
		}

		.cover-image {
			display: inline-block;
			width: 30rpx;
			height: 30rpx;
		}
	}
</style>