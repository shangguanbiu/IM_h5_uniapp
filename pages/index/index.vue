<template>
	<view>
		<!-- <cu-custom bgColor="bg-white" >
			<template #backText>
				<view v-if="PageCur=='message' || PageCur=='contacts'" class="f-20 ml-10 mr-10" @tap="search()">
					<text class="cuIcon-search" style="margin-left: -10px;"></text>
				</view>
			</template>
			<template #content>{{PageName}}</template>
			<template #right>
				<view v-if="PageCur=='contacts' && (globalConfig && globalConfig.demon_mode)" class="f-20 ml-10 mr-10"
					@tap="showContacts()">
					<text class="f-24" :class="TabCur ? 'cuIcon-peoplelist' : 'cuIcon-friend'"></text>
				</view>
				<view v-if="PageCur=='message'" class="f-20 ml-10 mr-10" @tap="modelName='add'">
					<text class="cuIcon-add f-28"></text>
				</view>

			</template>
		</cu-custom> -->
		<cu-custom bgColor="bg-gradual-pink" :isBack="false">
			<template #backText></template>
			<template #content>{{PageName}}</template>
		</cu-custom>
		<view class="tab_mline">
			<view class="tab_mline_zi" v-for="(tabsitem,index_tab) in tabs_arr" :key="index_tab"
				@click="tab_change(index_tab)" :class="{'tab_hover':tabs==index_tab}">
				{{tabsitem.name}}
			</view>

		</view>
		<view>

			<movice v-show="tabs==0" :run="run_fun" ref="child_action"></movice>
			<opengroup v-if="tabs==1"></opengroup>
			<bet v-show="tabs==2" ref="bet_action"></bet>
			<nearby v-if="tabs==3"></nearby>
			<!-- <compass v-if="PageCur=='compass'"></compass> -->
			<!-- <mine v-if="PageCur=='mine'"></mine> -->

		</view>
		<view class="cu-bar tabbar bg-white shadow foot" v-if="tabs==3?false:true">
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
		<view class="cu-modal bottom-modal" :class="modelName=='add' ? 'show' : ''" @tap="modelName=''">
			<view class="cu-dialog">
				<view class="manage-content">
					<view class="cu-list menu bg-white">
						<view class="cu-item" @tap="initContacts();">
							<view class="content padding-tb-sm">
								<text class="cuIcon-refresh"></text>
								<text>更新消息列表</text>
							</view>
						</view>
						<view v-if="userinfo.role !==undefined &&userinfo.role==1">
							<view class="cu-item" @tap="addFriend()" v-if='globalConfig.sysInfo.runMode==2'>
								<view class="content padding-tb-sm">
									<text class="cuIcon-friendadd"></text>
									<text>添加朋友</text>
								</view>
							</view>
							<view class="cu-item" @tap="addGroup()">
								<view class="content padding-tb-sm">
									<text class=" cuIcon-friend"></text>
									<text>创建群聊</text>
								</view>
							</view>
							<!-- <view class="cu-item" @tap="scan()">
								<view class="content padding-tb-sm">
									<text class=" cuIcon-scan mr-10"></text>
									<text>扫 一 扫</text>
								</view>
							</view> -->
						</view>
						<view class="parting-line-5"></view>
						<view class="cu-item" @tap="modelName=''">
							<view class="content padding-tb-sm">
								<text class="c-red">取消</text>
							</view>
						</view>

					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import message from '@/pages/message';
	import contacts from '@/pages/contacts';
	import compass from '@/pages/compass';
	import movice from '@/pages/movie/index/index.vue';
	import opengroup from '@/pages/opengroup/opengroup.vue';
	import bet from '@/pages/movie/bet/bet.vue';
	import nearby from '@/pages/nearby/nearby.vue';

	import mine from '@/pages/mine';
	import {
		storeToRefs
	} from 'pinia';
	import {
		useMsgStore
	} from '@/store/message';
	import {
		useloginStore
	} from '@/store/login';
	import pinia from '@/store/index'
	import scan from '@/common/scan.js'
	const msgStore = useMsgStore(pinia)
	const loginStore = useloginStore(pinia)
	const {
		unread,
		sysUnread
	} = storeToRefs(msgStore);
	export default {
		components: {
			message,
			contacts,
			compass,
			mine,
			movice,
			opengroup,
			bet,
			nearby
		},
		watch:{
			 
		},
		data() {
			let navList = [{
					name: 'message',
					title: '消息',
					notice: unread
				},
				{
					name: 'contacts',
					title: '通讯录',
					notice: sysUnread
				}, {
					name: 'compass',
					title: '探索',
					notice: 0
				}
			]
			let compass = {
				name: 'compass',
				title: '探索',
				notice: 0
			};

			let mine = {
				name: 'mine',
				title: '我的',
				notice: 0
			}
			// navList.push(mine);
			return {
				globalConfig: loginStore.globalConfig,
				PageCur: 'home',
				PageName: '首页',
				TabCur: 0,
				modelName: false,
				navList: [{
						name: 'home',
						title: '首页',
						notice: 0
					}, {
						name: 'message',
						title: '消息',
						notice: unread
					}, {
						name: 'serve',
						title: '客服',
						notice: 0
					},
					{
						name: 'contacts',
						title: '通讯录',
						notice: sysUnread
					}, {
						name: 'mine',
						title: '我的',
						notice: 0
					}
				],
				userinfo: {},
				tabs: 0,
				run_fun:true,
				tabs_arr: [{
					id: 1,
					name: '影院',
					ifshow: false
				}, {
					id: 2,
					name: '福利群',
					ifshow: false
				}, {
					id: 3,
					name: '投票',
					ifshow: false
				}, {
					id: 4,
					name: '附近的人',
					ifshow: false
				}, ]
			}
		},
		
		onShow() {
			
			
			// #ifndef MP
			//this.run_child()
			// #endif
			
		},
		onLoad() {},
		mounted() {
			 
			this.$refs.child_action.get_banner(1);
			this.$refs.child_action.get_notice(2);
			this.$refs.child_action.getList(1, 6, 1);
			this.$refs.child_action.getList(2, 10, 2);
			// #ifndef MP
			uni.hideTabBar();
			// #endif	
			// 检查本地联系人,如果没有才去请求接口
			// let contacts = uni.getStorageSync('allContacts');
			// console.log('contacts',contacts)
			// if (!contacts.length||contacts==undefined) {
			// 	this.initContacts();
			// }

			this.initContacts();
			// 监听ws状态,如果重新连接了,要更新联系人
			uni.$on('socketStatus', (e) => {
				if (e) {
					this.initContacts();
				}
			})

			this.userinfo = uni.getStorageSync('userInfo')

		},
		methods: {
			run_child() {
				
				if (uni.getStorageSync('iffirst') !== '') {
					this.$refs.child_action.get_banner(1);
					this.$refs.child_action.getList(1, 6, 1);
					this.$refs.child_action.getList(2, 10, 2);
					uni.setStorageSync('iffirst', true)
				}


			},
			closeModel() {
				this.modelName = false;
			},
			scan() {
				scan.scanQr();

			},
			NavChange: function(item) {

				if (item.name == 'mine') {
					uni.navigateTo({
						url: '/pages/mine/index',
					});
				} else if (item.name == 'message') {
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
				} else if (item.name == 'serve') {
					uni.navigateTo({
						url: '/pages/movie/kefu/kefu',
					});
				} else {
					this.PageCur = item.name
					this.PageName = item.title
				}

			},
			showContacts() {
				this.TabCur == 1 ? this.TabCur = 0 : this.TabCur = 1
			},
			initContacts() {
				this.modelName = '';
				this.$api.msgApi.initContacts().then(res => {
					// 设置消息未读数和系统消息未读数
					msgStore.sysUnread = res.count;
					msgStore.initContacts(res.data);
				})
			},
			addGroup() {
				uni.navigateTo({
					url: '/pages/index/userSelection?type=1'
				})
			},
			addFriend() {
				uni.navigateTo({
					url: '/pages/contacts/search'
				})
			},
			search() {
				const type = this.PageCur == "message" ? 1 : 2;
				uni.navigateTo({
					url: '/pages/index/search?type=' + type
				})
			},
			tab_change(index) {
				this.tabs = index
				this.PageName = this.tabs_arr[index].name
				this.run_fun=false
				if(index==0){
					this.run_fun=true
					this.$refs.child_action.get_userinfo();
				}
				if(index==2){
					this.$refs.bet_action.run_fun();
				}
			},
		}
	}
</script>

<style scoped>
	.tab_mline {
		display: flex;
		justify-content: center;
		padding: 20px 0;

	}


	.tab_mline_zi {

		font-size: 13px;
		color: #646566;
		width: 25%;
		text-align: center;

	}


	.tab_ico {
		width: 20px;
		height: 20px;
		margin-right: 5px;
	}

	.tab_hover {
		color: #9c26b0;
		position: relative;
	}

	.tab_hover::after {
		content: '';
		height: 2px;
		width: 50%;
		background: #9c26b0;
		position: absolute;
		left: 25%;
		bottom: -8px;
	}
</style>