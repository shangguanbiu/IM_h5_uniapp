<template>
	<view>
		<view style="height:150rpx;"></view>
		<view class="padding im-flex im-rows im-justify-content-center mb-10">
			<view class="im-flex im-rows im-justify-content-center">
				<image class="login-logo " :src="globalConfig.sysInfo.logo ?? packData.logo" mode="fixWidth"></image>
				
			</view>
		</view>
		<view class="im-flex im-rows im-justify-content-center">{{globalConfig.sysInfo.name ?? packData.name}}</view>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">{{$t('login.tit_l1')}}</view>
				<input :placeholder="$t('login.tit_l1_p1')"  maxlength="32" name="input" v-model="loginForm.account"/>
			</view>
			<view class="cu-form-group" v-if="!forget">
				<view class="title">{{$t('login.tit_l2')}}</view>
				<input :placeholder="$t('login.tit_l1_p2')" maxlength="32" type="password" name="input" v-model="loginForm.password"/>
			</view>
			<view class="cu-form-group" v-else>
				<view class="title">{{$t('login.tit_l3')}}</view>
				<input :placeholder="$t('login.tit_l1_p3')" maxlength="6" name="input" v-model="loginForm.code"/>
				<button class='cu-btn bg-blue shadow' @tap="sendCode">发送验证码</button>
			</view>
		</form>
		<view class='forget'>
			<view><switch class="switch" :checked="loginForm.rememberMe"  :class="loginForm.rememberMe?'checked':''" @change="switchChange"  style="transform:scale(0.7)" />{{$t('login.tit_l4')}}</view>
			<view class="text-blue" @tap="to_kefu" v-show="!forget">{{$t('login.tit_l5')}}</view>
			
		</view>
		<view class="flex flex-direction im-login-btn">
			<button class="cu-btn lg bg-pink" @tap="login()">{{$t('login.tit_l6')}}</button>
		</view>
		<view class="flex flex-direction im-reg-btn" v-if="globalConfig && globalConfig.sysInfo.regtype==1">
			<button class=" cu-btn lg bg-white" @tap="register()">{{$t('login.tit_l7')}}</button>
		</view>
		<!-- <view class="m-20 c-666" v-if="globalConfig && globalConfig.demon_mode ">
			<view class="f-16 remark-title mb-10">站点仅用于演示，演示账号</view>
			<view class="c-999">账号：13800000002~13800000020</view>
			<view class="c-999">密码：123456</view>
		</view> -->
		<view class="footer-version c-999">
			{{globalConfig.sysInfo.name ?? packData.name}} for {{packData.version}}
		</view>
	</view>
</template>

<script>
	import { useloginStore } from '@/store/login'
	import pinia from '@/store/index'
	import packageData from "../../package.json"
	const loginStore = useloginStore(pinia)
	export default {
		data() {
			return {
				loginForm:{
					account:'',
					password:'',
					code:'',
					client_id:'',
					rememberMe:false
				},
				forget:false,
				packData:packageData,
				globalConfig:loginStore.globalConfig
			}
		},
		watch:{
			forget(val){
			  if(val){
				this.loginForm.password='123456';
			  }
			}
		},
		mounted() {
			if(this.globalConfig && this.globalConfig.demon_mode){
				const random = Math.floor(Math.random() * 19 + 2)
				this.loginForm.account=13800000000+random;
				this.loginForm.password='123456';
			}
			let LoginAccount=uni.getStorageSync('LoginAccount');
			if(LoginAccount){
				this.loginForm=LoginAccount;
			}
		},
		methods: {
			to_kefu(){
				uni.navigateTo({
					url: '/pages/movie/kefu/kefu',
				});
			},
			switchChange(e) {
				this.loginForm.rememberMe=e.detail.value;
			},
			sendCode(){
			  if(!this.loginForm.account){
				uni.showToast({
					title: '请输入账号！',
					icon: "none"
				});
				return false;
			  }
			  let data={
				account:this.loginForm.account,
				type:1
			  }
			  this.$api.LoginApi.sendCode(data).then((res)=>{
				  uni.showToast({
				  	title: res.msg,
				  	icon: "none"
				  });
			  })
			},
			register(){
				uni.navigateTo({
					url:"/pages/login/register"
				})
			},
			login(){
				if(this.loginForm.rememberMe){
					uni.setStorageSync('LoginAccount',this.loginForm);
				}else{
					uni.removeStorageSync('LoginAccount');
				}
				if(this.loginForm.account==""){
					uni.showToast({
						title: this.$t('login.pop_tit1'),//'请输入账号！',
						icon: "none"
					});
					return false;
				}
				if(this.loginForm.password==""){
					uni.showToast({
						title: this.$t('login.pop_tit2'),//'请输入密码！',
						icon: "none"
					});
					return false;
				}
				let client_id=uni.getStorageSync('client_id');
				if(client_id){
					this.loginForm.client_id=client_id;
				}
				this.$api.LoginApi.login(this.loginForm).then(res => {
					if (res.code == 0) {
						uni.setStorageSync('authToken', res.data.authToken)
						
						let userInfo=res.data.userInfo;
						
						
						this.check_login(userInfo.account)
						// 登录成功后绑定wss
						this.socketIo.send({
							type: "bindUid",
							user_id: userInfo.user_id,
							token:res.data.authToken
						});

						loginStore.login(userInfo);
						
						
					}
				})
				
			},
			async check_login(account) {
				var _this = this
				const res = await this.$myRuquest({
					url: '/api/front/user/login',
					method: "POST",
					data: {
						username: account,
						password:''
					},
				})
				if (res.code == 200) {
					uni.setStorageSync('ifLogin', res.data.token)
					uni.reLaunch({
						url: '/pages/index/index'
					})
				}
			},
		}
	}
</script>

<style scoped>
	.login-logo {
		width: 180rpx;
		height: 180rpx;
		font-size: 80rpx;
		text-align: center;
		line-height: 120rpx;
		border-radius: 18rpx;
	}
	.footer-version{
		width:100%;
		text-align: center;
		position: fixed;
		bottom: 40rpx;
	}
	.remark-title{
		font-weight: 600;
	}
	.im-reg-btn{
		padding:30rpx;
	}
	.im-login-btn{
		padding:0 30rpx;
	}
	.forget{
		display: flex;
		justify-content: space-between;
		padding:30rpx;
	}
</style>
