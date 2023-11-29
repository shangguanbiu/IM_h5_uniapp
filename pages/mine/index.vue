<template>
	<view>
		<view class="padding flex im-space-between im-align-items-center bg-white mb-10">
			<view class="flex justify-start bg-white" @tap="editInfo()">
				<view class='cu-avatar lg mr-15'  :class="appSetting.circleAvatar?'round':'radius'" :style="[{backgroundImage:'url('+loginStore.userInfo.avatar+')'}]">
				</view>
				<view class='im-flex im-justify-content-start im-columns'>
					<view class="mb-5 f-18 mb-10 im-flex im-align-items-center">
						<view class="c-333">{{loginStore.userInfo.realname}}</view>
						<!-- <view class='cu-tag ml-10  round light' :class="loginStore.userInfo.is_auth ? 'bg-orange' : 'bg-grey'">{{loginStore.userInfo.is_auth ? '已认证' : '未认证'}}</view>
					 -->
					</view>
					<view class="text-gray mb-10">{{loginStore.userInfo.account}}</view>
				</view>
			</view>
			<!-- <view class="cuIcon-qrcode f-24 text-gray" @tap="openQr"></view> -->
		</view>
		
		<view class="cu-list menu">
			<view class="cu-item" @tap="scan">
				<view class="content">
					<text class="cuIcon-scan text-blue"></text>
					<text>扫一扫</text>
				</view>
				<view class="action">
					<text class="text-grey cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-item" @tap="showSetting">
				<view class="content">
					<text class="cuIcon-settings text-grey"></text>
					<text>通用设置</text>
				</view>
				<view class="action">
					<text class="text-grey cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-item" @tap="showsecure">
				<view class="content">
					<text class="cuIcon-safe text-orange"></text>
					<text>账号安全</text>
				</view>
				<view class="action">
					<text class="text-grey cuIcon-right"></text>
				</view>
			</view>
			<!-- <view class="cu-item" @click="about()" v-if="globalConfig.demon_mode">
				<view class="content">
					<text class="cuIcon-info text-green"></text>
					<text>关于IM</text>
				</view>
				<view class="action">
					<text class="text-grey cuIcon-right"></text>
				</view>
			</view> -->
		</view>
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-red lg" @tap="logout()">退出登录</button>
		</view>
	</view>
</template>

<script>
	import { useloginStore } from '@/store/login'
	import pinia from '@/store/index'
	import scan from '@/common/scan.js'
	const loginStore = useloginStore(pinia)
	export default {
		data() {
			return {
				loginStore:loginStore,
				globalConfig:loginStore.globalConfig,
				appSetting:loginStore.appSetting
			}
		},
		onShow() {
			
		}, 
		methods: {
			logout(){
				let client_id=uni.getStorageSync('client_id');
				this.$api.LoginApi.logout({client_id:client_id}).then(res => {
					if (res.code == 0) {
						loginStore.logout()
					}
				})
				
			},
			about(){
				if(this.globalConfig && this.globalConfig.demon_mode){
					let srcs = "https://im.raingad.com";
					uni.navigateTo({
						url:"/pages/mine/webview?src=" + srcs
					})
				}else{
					uni.navigateTo({
						url:"/pages/mine/about"
					})
				}
				
			},
			showSetting(){
				uni.navigateTo({
					url:"/pages/mine/setting"
				})
			},
			showsecure(){
				uni.navigateTo({
					url:"/pages/mine/secure"
				})
			},
			editInfo(){
				uni.navigateTo({
					url:"/pages/mine/profile"
				})
			},
			scan(){
				scan.scanQr();
			},
			openQr(){
				uni.navigateTo({
					url:"/pages/index/qrcode"
				})
			}
		}
	}
</script>

<style>

</style>
