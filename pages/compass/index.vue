<template>
	<view :style="{paddingBottom: paddingB+'px'}">
		<view style="padding-bottom:30rpx">
			<view class="cu-list menu mt-10">
				<view class="cu-item arrow"  @tap="To_third(1,'')">
					<view class='cu-avatar mr-15 invite-bg' :class="true?'round':'radius'">
						
					</view>
					<view class="content">
						<text class="c-333">附近的人</text>
					</view>
				
				</view>
				<view class="cu-item arrow" @tap="To_third(2,'')">
					<view class='cu-avatar mr-15 group-bg' :class="true?'round':'radius'" >
						
					</view>
					<view class="content">
						<text class="c-333">公开的群</text>
					</view>
				
				</view>
				<view class="cu-item arrow" v-for="(third_item,t_index) in list" :key="t_index" @tap="To_third(3,third_item)">
					<view class='cu-avatar mr-15' :class="true?'round':'radius'">
						<image :src="third_item.logo" mode='widthFix' style="width: 100%;"></image>
					</view>
					<view class="content">
						<text class="c-333">{{third_item.name}}</text>
					</view>

				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import {
		useloginStore
	} from '@/store/login'
	const loginStore = useloginStore()
	export default {
		data() {
			return {
				isCard: true,
				userInfo: loginStore.userInfo,
				paddingB: 0,
				current: 0,
				list: [],
				total:0,
				params: {
					page: 1,
					limit: 10,
					is_mine:0
				}
			};
		},
		created: function() {
			// #ifdef H5
			this.paddingB = this.inlineTools;
			// #endif

			// #ifndef H5
			this.paddingB = this.navBarHeight + this.inlineTools;
			// #endif
			
			this.getList()
			
			 
		},
		methods: {
			IsCard(e) {
				this.isCard = e.detail.value
			},
			getList(){
				this.$api.third_openApi.thirdList(this.params).then((res)=>{
					if(res.code==0){
						this.list = res.data.data;
						this.total = res.count;
						
					}
				})
			},
			To_third(type,data){
				var userInfo=uni.getStorageSync('userInfo')
				if(type==1){
					uni.navigateTo({
						url:"/pages/nearby/nearby"
					});
				}else if(type==2){
					uni.navigateTo({
						url:'/pages/opengroup/opengroup'
					});
				}else{
					
					uni.navigateTo({
						url:'/pages/third/third?url=' + data.url+'&uid='+userInfo.account,
					});
				}
				
			},
			
			
		}
	}
</script>

<style lang="scss">
	.im-friend-header {
		width: 100%;
		height: 400rpx;
		position: relative;

		.im-friend-bg {
			width: 100%;
			height: 300rpx;
			overflow: hidden;

			.im-friend-image {
				width: 100%;
				height: 300rpx;
			}
		}
	}

	.im-user {
		position: absolute;
		right: 60rpx;
		top: 210rpx;
		overflow: hidden;
	}

	.group-bg {
		background-image: url(@/static/image/group.png);
	}

	.invite-bg {
		background-image: url(@/static/image/invite.png);
	}
</style>
