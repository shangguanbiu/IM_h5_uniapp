<template>
	<view>
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<template #backText></template>
			<template #content>附近的人</template>
		</cu-custom>
		<view>
			<view class="user_line" v-for="(people,t_index) in list" :key="t_index">
				<view class="user_l">
					<image :src="'http://123.56.77.160/'+people.avatar" mode='widthFix' style="width: 100%; border-radius: 8px;"></image>
				</view>
				<view class="user_r">
					<view class="item_name">{{people.realname}}</view>
					<view style=" min-height: 90px;">
						<view style="display: flex;padding: 10px 0;">
							<view class="item">好看</view>
							<view class="item">好看</view>
						</view>
					</view>
					
					<view class="item_btn">
						加她为好友
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				paddingB: 0,
				total: 0,
				params: {
					page: 1,
					limit: 10,
					is_mine: 0
				},
				list: []
			}
		},
		methods: {
			getList() {
				this.$api.third_openApi.near_user_List(this.params).then((res) => {
					if (res.code == 0) {
						this.list = res.data.data;
						this.total = res.count;

					}
				})
			},
		},
		created() {
			// #ifdef H5
			this.paddingB = this.inlineTools;
			// #endif

			// #ifndef H5
			this.paddingB = this.navBarHeight + this.inlineTools;
			// #endif
			this.getList()
		}
	}
</script>

<style scoped>
	.user_line {
		display: flex;
		width: 90%;
		margin: 10px auto;
	}

	.user_l {
		width: 150px;
		border-radius: 8px;
	}

	.user_r {
		flex: 1;
		padding-left: 15px;
	}
	.item_name{ font-size: 14px;}
	.item {
		background: linear-gradient(50deg, #9b54ca, #e6557f);
		color: #fff;
		display: inline-block;
		border-radius: 0.33333rem;
		margin-right: 0.33333rem;
		font-size: 12PX;
		padding: 0.33333rem 1rem;
		margin-bottom: 0.33333rem;
	}
	.item_btn {
		background: #9b54ca;
		color: #fff;
		width: 100%; text-align:center;
		display: inline-block;
		border-radius: 0.33333rem;
		margin-right: 0.33333rem;
		font-size: 12PX;
		padding: 0.33333rem 1rem;
		margin-bottom: 0.33333rem;
	}
</style>
