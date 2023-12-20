<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<template #backText></template>
			<template #content>封面图设置</template>
		</cu-custom>
		<form>
			<view class="tab_mline">
				<view class="tab_mline_zi" v-for="(tabsitem,index_tab) in tabs_arr" :key="index_tab"
					@click="tab_change(index_tab)" :class="{'tab_hover':tabs==index_tab}">
					{{tabsitem.name}}
				</view>
			
			</view>
			<view v-if="tabs==0">
				<view>
					<avatar
					       selWidth="480px" selHeight="800px" @upload="uploadAvatar" :avatarSrc="userInfo.nearby_img"
					       avatarStyle="width:100%;">
					   </avatar>
				</view>
				
			</view>
			<view v-else>
				22
			</view>
			
			
			<!-- <view class="cu-form-group" style="height:140rpx">
				<view class="title">头像</view>
				<view class="im-flex im-align-items-center">
					<avatar
					       selWidth="240px" selHeight="480upx" @upload="uploadAvatar" :avatarSrc="userInfo.avatar"
					       avatarStyle="width: 100rpx; height: 100rpx; border-radius: 100%;">
					   </avatar>
					<text class="cuIcon-right ml-10 f-18 text-grey"></text></view>
			</view>
			<view class="cu-form-group">
				<view class="title">账号</view>
				<view class="text-gray">{{userInfo.account}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title">积分</view>
				<view class="text-pink">{{balance}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title">{{globalConfig.sysInfo.runMode==1 ? "姓名" : '昵称'}}</view>
				<view class="text-gray" v-if="globalConfig.sysInfo.runMode==1">{{userInfo.realname}}</view>
				<input class="uni-input" style="text-align: right;" v-if="globalConfig.sysInfo.runMode==2" v-model="userInfo.realname"  placeholder="请输入昵称" />
			</view>
			<view class="cu-form-group">
				<view class="title">e-mail</view>
				<input class="uni-input" style="text-align: right;" v-model="userInfo.email"  placeholder="请输入email地址" />
			</view>
			<view class="cu-form-group">
				<view class="title">年纪</view>
				<input class="uni-input" style="text-align: right;" v-model="userInfo.ages"  placeholder="请输入数字" type="number" />
			</view>
			<view class="cu-form-group">
				<view class="title">性别</view>
				<view>
					<radio-group @change="changeSex">
					<label class="radio mr-10" v-for="x in sexList"><radio name="sex" :value="x.id" :checked="userInfo.sex==x.id" /> {{x.name}}</label>
					</radio-group>
				</view>
			</view>
			<view class="cu-form-group align-start">
				<view class="title">个性签名</view>
				<textarea maxlength="-1" v-model="userInfo.motto" placeholder="请输入个性签名"></textarea>
			</view> -->
		</form>
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-green lg" :style="saved ? 'border: solid 1px #dbdada;' : ''" :disabled="saved" @tap="saveInfo()" >保存</button>
		</view>
	</view>
</template>

<script>
	import { useloginStore } from '@/store/login'
	import pinia from '@/store/index'
	import avatar from "@/components/yq-avatar/yq-avatar2.vue";
	const loginStore = useloginStore(pinia)
	export default {
		components: {
			avatar
		},
		data() {
			return {
				loginStore:loginStore,
				globalConfig:loginStore.globalConfig,
				userInfo:{},
				sexList:[
					{
						id:'2',
						name:'未知'
					},
					{
						id:'1',
						name:'男'
					},
					{
						id:'0',
						name:'女'
					},
				],
				saved:false,
				balance:'0.00',
				tabs_arr: [{
					id: 1,
					name: '封面图',
					ifshow: false
				},{
					id: 2,
					name: '详细图',
					ifshow: false
				},],
				tabs: 0,
			}
		},
		mounted() {
			this.get_userInfo()
			this.userInfo=JSON.parse(JSON.stringify(loginStore.userInfo));
			console.log('ffffff',this.userInfo)
		}, 
		methods: {
			tab_change(index) {
				this.tabs = index
				
			},
			async get_userInfo() {
				var _this = this
				const res = await this.$myRuquest({
					url: '/api/front/user/getUserInfo',
					method: "POST",
				})
				if (res.code == 200) {
					
					this.balance=res.data.balance
				}
			},
			logout(){
				let client_id=uni.getStorageSync('client_id');
				this.$api.LoginApi.logout({client_id:client_id}).then(res => {
					if (res.code == 0) {
						loginStore.logout()
					}
				})
				
			},
			textareaBInput(e) {
				this.userInfo.motto = e.detail.value
			},
			changeSex(evt){
				this.userInfo.sex=parseInt(evt.detail.value);
			},
			saveInfo(){
				if(this.userInfo.realname == ''){
					uni.showToast({
						title:'请输入昵称',
						icon:'none'
					})
					return false
				  }
				  // 防止无限次点击
				  this.saved=true;
				  let params={
					realname:this.userInfo.realname,
					email:this.userInfo.email,
					sex:this.userInfo.sex,
					motto:this.userInfo.motto,
					ages:this.userInfo.ages,
				  }
				  this.$api.msgApi.updateUserInfo(params).then(res=>{
					if(res.code == 0){
					  uni.showToast({
					  	title:'保存成功',
					  	icon:'none'
					  })
					  let data=JSON.parse(JSON.stringify(this.userInfo))
					  loginStore.login(data)
					}
				  })
				  // 8秒后可以重新保存
				  setTimeout(()=>{
				  	this.saved=false;
				  },8000)
			},
			setAvatar(){
				uni.navigateTo({
					url:"/pages/mine/avatar"
				})
			},
			uploadAvatar(res){
				uni.showLoading({
					title:'上传中...'
				})
				uni.uploadFile({
					url: this.$api.msgApi.uploadAvatar,
					filePath: res.path,
					name: 'file',
					header: {
						'Authorization': uni.getStorageSync('authToken'),
					},
					formData: {
						ext: 'png'
					},
					success: (e) => {
						uni.hideLoading();
						let res=JSON.parse(e.data);
						if(res.code==0){
							uni.showToast({
								title:res.msg,
								icon:'none'
							})
							this.userInfo.avatar=res.data
							let data=JSON.parse(JSON.stringify(this.userInfo));
							loginStore.login(data);
						}
					},
					fail: (res) => {
						uni.hideLoading();
					}
				})
			}
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
