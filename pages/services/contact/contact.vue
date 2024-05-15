<template>
	<view>
		<view style="width: 100vw;padding: 10px;">
			<view style="padding: 10px 10px 0;"  @tap="callPhone">
				联系电话: {{appProperties.phone}}</view>
			<view style="padding: 10px 10px 0;"  @tap="setClipboardData">
				联系邮箱: {{appProperties.email}}</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
export default {
	data() {
		return {
			
		};
	},
	computed: {
		...mapState(['appProperties'])
	},
	onShow() {
	},
	methods: {
		// 拨打电话
		callPhone() {
			const tel = this.appProperties.phone + ''
			console.log("打电话: " + tel)
			uni.makePhoneCall({
			    phoneNumber: '' + tel   // 纯数字就不行
			});
		},

		// 负责内容到剪切板
		setClipboardData() {
			let email = this.appProperties.email + '';
			uni.setClipboardData({
				data: '' + email,
				success: function() {
					
				}
			});
		}
	}
};
</script>

<style></style>
