<template>
	<view>
		<youlanSignIn :integral="integral" :isIntegral="isIntegral" :checkinDays="checkinDays" :already="data" type="sign"
			lang="zh" @change="signDate" />
	</view>
</template>

<script>
	import youlanSignIn from '@/components/youlan-SignIn/youlan-SignIn.vue'

	export default {
		components: {
		    youlanSignIn
		},
		data() {
			return {
				data: [],
				checkinDays: 0, // 连续签到天数
				integral: 0, // 本次签到获取的积分
				isIntegral: false, // 是否显示签到积分模块
			}
		},
		methods: {
			signDate(v) {
				// 签到成功后需要更新连续签到的数据
				this.checkinDays = this.checkinDays + 1;
				// 获取随机整数
				const randomInteger = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
				// 模拟获取的积分,这个根据你的实际情况来，如果你没有积分系统，可以忽略这些
				this.integral = randomInteger;
				this.isIntegral = true;
				console.log(v);
			}
		},
	}
</script>

<style>
</style>