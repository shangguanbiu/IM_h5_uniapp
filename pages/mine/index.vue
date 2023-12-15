<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="false" >

			<template #content>我的</template>
		</cu-custom>
		<view class="padding flex im-space-between im-align-items-center bg-white mb-10">
			<view class="flex justify-start bg-white" @tap="editInfo()">
				<view class='cu-avatar lg mr-15' :class="appSetting.circleAvatar?'round':'radius'"
					:style="[{backgroundImage:'url('+loginStore.userInfo.avatar+')'}]">
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
		<view class="vip_are_P" @click="to_vip">
			<view class="vip_are_m">
				<view class="vip_are_tit">我的特权</view>
				<view class="vip_are_p">￥50/月即可获得特权VIP</view>
			</view>
			<image src="@/static/image/vip_me.png" mode='widthFix' style="width: 100%;max-height: 100px;">
			</image>
		</view>
		<view class="cu-list menu">
			<!-- <view class="cu-item" @tap="scan">
				<view class="content">
					<text class="cuIcon-scan text-blue"></text>
					<text>扫一扫</text>
				</view>
				<view class="action">
					<text class="text-grey cuIcon-right"></text>
				</view>
			</view> -->
			<view class="cu-item" @tap="to_like(1)">
				<view class="content">
					<text class="cuIcon-likefill text-red"></text>
					<text>喜欢我的TA</text>
				</view>
				<view class="action">
					<text class="text-grey cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-item" @tap="to_like(2)">
				<view class="content">
					<text class="cuIcon-emojiflashfill text-pink"></text>
					<text>我喜欢的TA</text>
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
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange(item)" v-for="(item,index) in navList" :key="index"
				data-cur="message">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/image/tabbar/' + [item.name] + [PageCur==item.name?'-active':''] + '.svg'">
					</image>
					<view class="cu-tag badge" v-if="item.notice>0">{{item.notice}}</view>
				</view>
				<view :class="PageCur==item.name?'text-mauve':'text-black'">{{item.title}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		useloginStore
	} from '@/store/login'
	import pinia from '@/store/index'
	import scan from '@/common/scan.js'
	import {
		useMsgStore
	} from '@/store/message';
	const msgStore = useMsgStore(pinia)
	import {
		storeToRefs
	} from 'pinia';
	const loginStore = useloginStore(pinia)
	const {
		unread,
		sysUnread
	} = storeToRefs(msgStore);
	export default {
		data() {
			return {
				loginStore: loginStore,
				globalConfig: loginStore.globalConfig,
				appSetting: loginStore.appSetting,
				PageCur: 'mine',
				navList: [{
						name: 'home',
						title: '首页',
						notice: 0
					},{
						name: 'message',
						title: '消息',
						notice: unread
					},{
						name: 'serve',
						title: '客服',
						notice: 0
					},
					{
						name: 'contacts',
						title: '通讯录',
						notice: sysUnread
					},{
						name: 'mine',
						title: '我的',
						notice: 0
					}
				],
			}
		},
		onShow() {

		},
		mounted() {
			// 检查本地联系人,如果没有才去请求接口
			let contacts = uni.getStorageSync('allContacts');
			if (!contacts.length) {
				this.initContacts();
			}
			// 监听ws状态,如果重新连接了,要更新联系人
			uni.$on('socketStatus', (e) => {
				if (e) {
					this.initContacts();
				}
			})
			var backbutton = document.getElementsByClassName('uni-page-head-hd')[0]
			if (backbutton) backbutton.style.display = 'none';
		},
		methods: {
			to_like(type){
				if(type==1){
					uni.navigateTo({
						url: '/pages/mine/like/like_me',
					});
				}else{
					uni.navigateTo({
						url: '/pages/mine/like/like',
					});
				}
			},
			NavChange(item) {

				if (item.name == 'message') {
					uni.navigateTo({
						url: '/pages/index/mv_index',
					});
				} else if (item.name == 'contacts') {
					uni.switchTab({
						url: '/pages/contacts/index',
					});
				} else if (item.name == 'compass') {
					uni.navigateTo({
						url: '/pages/compass/index',
					});
				} else if (item.name == 'home') {
					uni.switchTab({
						url: '/pages/index/index',
					});
				}else if (item.name == 'serve') {
					uni.navigateTo({
						url: '/pages/movie/kefu/kefu',
					});
				} 

			},
			initContacts() {
				this.modelName = '';
				this.$api.msgApi.initContacts().then(res => {
					// 设置消息未读数和系统消息未读数
					msgStore.sysUnread = res.count;
					msgStore.initContacts(res.data);
				})
			},
			logout() {
				let client_id = uni.getStorageSync('client_id');
				this.$api.LoginApi.logout({
					client_id: client_id
				}).then(res => {
					if (res.code == 0) {
						loginStore.logout()
					}
				})
				uni.removeStorageSync('allContacts')
				uni.removeStorageSync('ifLogin')
				

			},
			about() {
				if (this.globalConfig && this.globalConfig.demon_mode) {
					let srcs = "https://im.raingad.com";
					uni.navigateTo({
						url: "/pages/mine/webview?src=" + srcs
					})
				} else {
					uni.navigateTo({
						url: "/pages/mine/about"
					})
				}

			},
			
			showSetting() {
				uni.navigateTo({
					url: "/pages/mine/setting"
				})
			},
			showsecure() {
				uni.navigateTo({
					url: "/pages/mine/secure"
				})
			},
			editInfo() {
				uni.navigateTo({
					url: "/pages/mine/profile"
				})
			},
			scan() {
				scan.scanQr();
			},
			openQr() {
				uni.navigateTo({
					url: "/pages/index/qrcode"
				})
			},
			to_vip(){
				uni.navigateTo({
					url: "/pages/mine/vip/vip"
				})
			},
		}
	}
</script>

<style scoped>
.vip_are_P{padding: 10px;max-height: 100px; position: relative;}
.vip_are_m{position: absolute; z-index: 10;left:31px; top: 20px;}
.vip_are_tit{font-size: 14px; font-weight: bold; color: #a66941; line-height: 30px;}
.vip_are_p{font-size: 13px; color: #b67d54;}
</style>