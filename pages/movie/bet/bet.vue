<template>
	<view  :class="{'scroll_ft':scroll_ft}">
		<!-- <cu-custom bgColor="bg-gradual-pink" :isBack="false">
			<template #backText></template>
			<template #content>投票</template>
		</cu-custom> -->
		<view class="bet_top">
			<view style="padding: 10px  15px">
				<view class="bet_line bet_ge">
					<view>当前期数</view>
				</view>
				<view style="display: flex;" class="bet_ge">
					<view style="font-weight: bold; font-size: 16px;">{{qishu}}</view>
					<view v-if="ifrun">投票中</view>
					<view v-if="!ifrun">封盘中</view>
				</view>
				<view class="time">{{time2+':'+time3}}</view>
				<view class="bet_line bet_ge">
					<view style="display: flex;" v-for="(item,narr_k) in Number_laster" :key="narr_k">
						<view style="margin-right: 10px;">20231212000002</view>
						<view class="color_n1" v-if="item.value<4 ||item.value==4">春</view>
						<view class="color_n2" v-if="item.value>5||item.value==5">夏</view>
						<view class="color_n1" v-if="item.value % 2 === 1">秋</view>
						<view class="color_n2" v-if="item.value% 2 === 0">冬</view>
					</view>
					<view @click="ifhistory=!ifhistory" style="display: flex;">历史出票

						<view class="cuIcon-unfold" style="line-height: 19px;margin-left: 2px;" v-if="!ifhistory">
						</view>
						<view class="cuIcon-fold" style="line-height: 19px;margin-left: 2px;" v-if="ifhistory"></view>
					</view>
					<view class="history_are" v-show="ifhistory" @tap="ifhistory=false">
						<view style="padding: 0px 15px" v-if="Number_arr.length !==0">
							<view style="display: flex; padding: 5px 0;" v-for="(item,narr_k) in Number_arr"
								:key="narr_k">
								<view style="margin-right: 10px;">20231212000002</view>
								<view class="color_n1" v-if="item.value<4 ||item.value==4">春</view>
								<view class="color_n2" v-if="item.value>5||item.value==5">夏</view>
								<view class="color_n1" v-if="item.value % 2 === 1">秋</view>
								<view class="color_n2" v-if="item.value% 2 === 0">冬</view>

							</view>
						</view>

					</view>
				</view>


			</view>

		</view>
		<view class="bet_top_ft">
			<view class="bet_t_ft_m" @tap="pop_notice=true">投票规则</view>
			<view class="bet_t_ft_m" @click="see_list" style="display: flex; justify-content: center; color:#e6557f ;">
				我的出票
				<view class="cuIcon-right" style="line-height: 40px; margin-left: 2px;"></view>
			</view>

		</view>
		<view class="bet_main">
			<view class="bet_mainzi" v-for="(nitem,narr_i) in Number_arr" :key="narr_i">
				<view class="bet_zi" :class="{'bet_zi_get':nitem.ifhad}" @click="get_bet_num(nitem,narr_i)">
					{{nitem.name}}
				</view>
			</view>




		</view>
		<view class="bet_foot" v-show="pop_bet">
			<view class="bet_f_m">
				<view class="bet_f_mtit">
					<view>快捷投票</view>
					<view class="had_num">可用积分:{{max_num}}</view>
				</view>
				<view class="bet_num_line">
					<view class="bet_num" v-for="(item,narr_k) in cost_arr" :key="narr_k" @click="get_num(item)">
						{{item}}
					</view>

				</view>
				<view class="bet_num_line" style="padding: 15px 0;">
					<view style="line-height: 30px;">投票积分:</view>
					<view><input class="uni-input inmut_l" v-model="bet_num" @input="change_num(bet_num)" type="number"
							placeholder="" />
					</view>
					<view><button type="default" class="reset_btn" @click="reset">重置</button></view>
				</view>
				<button type="default" v-if="ifrun" class="ok_btn" @tap="submit_bet">投票</button>
				<button type="default" v-if="!ifrun" class="ok_btn2">封盘中</button>
			</view>

		</view>
		<view v-show="pop_notice">
			<view class="com_bg"></view>
			<view class="com_main">
				<view class="pop_mian">
					<view class="pop_title">投票规则</view>
					<view
						style="padding: 10px 15px; display:flex; justify-content: flex-start; line-height: 25px; flex-wrap: wrap;">
						游戏投票规则
					</view>

					<view class="pop_foot">
						<view class="pop_ft_btn2" @tap="pop_notice=false">确定</view>

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
				pop_notice: false,
				scroll_ft:false,
				pop_bet: false,
				index_ico: '@/static/image/shouye.png', // require(""),
				index_ico_h: '', // require("@/static/image/shouye_hover.png"),
				cz_ico: '', // require("@/static/image/chongzhi.png"),
				cz_ico_h: '', // require("@/static/image/chongzhi_hover.png"),
				kf_ico: '', //require("@/static/image/kefu.png"),
				kf_ico_h: '', // require("@/static/image/kefu_hover.png"),
				user_ico: '', //require("@/static/image/wode.png"),
				user_ico_h: '', // require("@/static/image/wode_hover.png"),
				bet_num: '',
				max_num: 0,
				qishu: '',
				qishu_id:'',
				ifrun: true,
				ifhistory: false,
				history_list: [],
				Number_arr: [{
					name: '春',
					value: 1,
					ifhad: false
				}, {
					name: '夏',
					value: 2,
					ifhad: false
				}, {
					name: '秋',
					value: 3,
					ifhad: false
				}, {
					name: '冬',
					value: 4,
					ifhad: false
				}],
				Number_laster: [{
					name: '冬',
					value: 4,
					ifhad: false
				}],
				cost_arr: [10, 50, 100, 200, 500, 1000],
				userinfo: {},
				time1: 0,
				time2: 0,
				time3: 0,
				time_build: null,
				if_over: false,
				pageHeight:0,

			}
		},
		watch: {
			bet_num(val) {
				if (Number(val) > this.max_num) {
					this.bet_num = this.max_num
					return
				} else {
					this.bet_num = val
				}

			},
			time3: function(val) {
				var _this = this
				if (this.time1 == 0 && this.time2 == 0 && val < 8) {
					this.ifrun = false
				}
				if (this.time2 == this.time3 && val == 0) {
					//clearInterval(this.runtime_obj)
					this.if_over = true
					this.time1 = 0
					this.time2 = 0
					this.time3 = 0
					this.ifrun = false
					clearInterval(this.time_build);
					this.time_build = null;
					setTimeout(function() {
						this.getNewOpenData()
					}, 10000)

				}
				if (val < 0 || val == NaN || val == 'NaN') {
					this.time1 = 0
					this.time2 = 0
					this.time3 = 0
					this.ifrun = false
					clearInterval(this.time_build);
					this.time_build = null;
					setTimeout(function() {
						this.getNewOpenData()
					}, 10000)
				}

			},
		},
		methods: {
			change_num(val) {

			},
			showtime(nowdate, endate) {
				//2023-12-15 14:42:27
				if (endate !== '') {
					var nowtime = new Date(), //获取当前时间
						endtime = new Date(endate); //定义结束时间
					var lefttime = endtime.getTime() - nowtime.getTime(), //距离结束时间的毫秒数
						leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24)), //计算天数
						lefth = Math.floor(lefttime / (1000 * 60 * 60) % 24), //计算小时数
						leftm = Math.floor(lefttime / (1000 * 60) % 60), //计算分钟数
						lefts = Math.floor(lefttime / 1000 % 60); //计算秒数
					//console.log('dddd', lefth + ':' + leftm + ':' + lefts)
					this.time1 = lefth
					this.time2 = leftm
					this.time3 = lefts
					console.log(leftd + "天" + lefth + ":" + leftm + ":" + lefts)
					return leftd + "天" + lefth + ":" + leftm + ":" + lefts; //返回倒计时的字符串
				} else {
					// clearInterval(this.time_build);
					// this.time_build = null;
					// this.if_over = true
				}
			},
			jump(type) {
				if (type == 1) {
					uni.navigateTo({
						url: '/pages/movie/index/index',
					});
				} else if (type == 2) {
					uni.navigateTo({
						url: '/pages/movie/list/index'
					});
				} else if (type == 3) {
					uni.navigateTo({
						url: "/pages/movie/bet/bet",
					});
				} else if (type == 4) {
					uni.navigateTo({
						url: '/pages/kefu/kefu_index',
					});
				} else if (type == 5) {
					uni.navigateTo({
						url: '/pages/mine/index',
					});
				}
			},
			see_list() {
				uni.navigateTo({
					url: '/pages/movie/bet/list',
				});

			},
			get_bet_num(data, index) {
				if (this.Number_arr[index].ifhad) {
					this.Number_arr[index].ifhad = false
				} else {
					this.Number_arr[index].ifhad = true
				}

				const result = this.Number_arr.find(item => item.ifhad == true);
				if (result !== undefined) {
					this.pop_bet = true
				} else {
					this.pop_bet = false
				}
				
				if(this.pageHeight<820&&this.pop_bet==true){
					this.scroll_ft=true
				}

			},
			get_num(data) {
				this.bet_num = data
			},
			reset() {
				this.bet_num = ''
			},
			async get_userInfo() {
				var _this = this
				const res = await this.$myRuquest({
					url: '/api/front/user/getUserInfo',
					method: "POST",
				})
				if (res.code == 200) {
					this.userinfo = res.data
					this.max_num = this.userinfo.balance
				}
			},
			async getNewOpenData() {
				var _this = this
				const res = await this.$myRuquest({
					url: '/api/front/movie/getNewOpenData',
					method: "POST",
				})
				if (res.code == 200) {
					 this.qishu=res.data.open_no
					 this.qishu_id=res.data.id
					 this.time_build = setInterval(() => {
					 	this.showtime('', res.data.open_time)
					 }, 1000)
				}
			},async getOpenData() {
				var _this = this
				const res = await this.$myRuquest({
					url: '/api/front/movie/getActionDetail',
					method: "POST",
				})
				if (res.code == 200) {
					 this.qishu=res.data.next_open_data.open_no
					 //this.qishu_id=res.data.next_open_data.id
					 this.time_build = setInterval(() => {
					 	this.showtime('', res.data.next_open_data.open_time)
					 }, 1000)
				}
			},
			async getHistoryOpenData() {
				var _this = this
				const res = await this.$myRuquest({
					url: '/api/front/movie/getHistoryOpenData',
					method: "POST",
					data:{
						page:1,
						pagesoze:10
					}
				})
				if (res.code == 200) {
					// this.Number_laster=res.data.next_open_data.open_no
					 console.log('ddd',res.data.data)
				}
			},
			async submit_bet() {
				var _this = this
				if(this.bet_num>Number(this.balance)){
					uni.showToast({
						title: '积分不足！',
						icon: "none"
					});
					return
				}
				let ids=new Array()
				this.Number_arr.forEach((item)=>{
					if(item.ifhad==true){
						ids.push(item.value)
					}
					
				})

				const res = await this.$myRuquest({
					url: '/api/front/order/createOrder',
					method: "POST",
					data: {
						next_open_id:this.qishu_id,
						multiple_id: ids.toString(),
						amount: this.bet_num
					}
				})
				if (res.code == 200) {
					uni.showToast({
						title: '投票成功！',
						icon: "success"
					});
				}
			},
			run_fun() {
				this.get_userInfo()
				this.getOpenData()
				this.getHistoryOpenData()
				
			}
		},
		onLoad() {
			this.pop_notice = false

			var backbutton = document.getElementsByClassName('uni-page-head-hd')[0]
			if (backbutton) backbutton.style.display = 'none';

		},
		mounted() {
			this.pageHeight = document.documentElement.clientHeight;
			console.log('ddd',this.pageHeight)
			
		}
	}
</script>

<style scoped>
	page {
		background: #969696;

	}

	.bet_top {
		height: auto;
		width: 94%;
		margin: auto;
		margin-top: 10px;
		border-radius: 18px 18px 0 0;
		background: #e6557f;
		position: relative;
	}

	.bet_top_ft {
		height: auto;
		width: 94%;
		margin: auto;
		display: flex;
		border-radius: 0 0 18px 18px;
		background: #fff;

	}

	.bet_t_ft_m {
		width: 50%;
		text-align: center;
		line-height: 40px;
		font-size: 14px;
	}

	.bet_line {
		display: flex;
		justify-content: space-between;
	}

	.bet_ge {
		padding: 5px 0;
		color: #fff;
		font-size: 14px;

	}

	.time {
		border: 1px solid #fff;
		padding: 2px;
		margin: 10px 0;
		color: #fff;
		width: 50px;
		text-align: center;
		border-radius: 5px
	}

	.bet_main {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-top: 10px;
	}

	.bet_mainzi {
		width: 50%;
		margin: 10px 0;
	}

	.bet_zi {
		border-radius: 8px;
		line-height: 60px;
		width: 90%;
		margin: auto;
		background: #e6557f;
		text-align: center;
		color: #fff;
		font-size: 18px;
	}

	.bet_zi_get {
		background: #251C48;
	}

	.bet_foot {
		height: 240px;
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 50px;
		background: #fff;
		border-radius: 18px 18px 0 0;
		z-index: 1027;
	}

	.bet_f_m {
		padding: 10px 15px;
	}

	.bet_f_mtit {
		font-size: 14px;
		color: #333;
		display: flex;
		justify-content: space-between;
		padding-bottom: 10px;
	}

	.had_num {
		color: #e6557f;
		;
	}

	.bet_num_line {
		display: flex;
		justify-content: center;
	}

	.bet_num {
		border: 1px solid #e6557f;
		padding: 5px;
		width: 48px;
		text-align: center;
		border-radius: 5px;
		margin: 10px 5px;
		color: #e6557f;

	}

	.inmut_l {
		/* border: 1px solid #ccc; */
		border-radius: 28px;
		text-align: center;
		height: 30px;
		line-height: 30px;
		color: #e6557f;
		background: #bebebe;
		width: 100px;
		margin: 0 5px;
		padding: 0px 15px;
	}

	.reset_btn {
		height: 30px;
		color: #fff;
		background: #EAC477;
		text-align: center;
		line-height: 30px;
		border-radius: 28px;
		font-size: 14px;
	}

	.ok_btn {
		height: 35px;
		color: #fff;
		background: #e6557f;
		width: 80%;
		text-align: center;
		line-height: 35px;
		font-size: 14px;
		margin: 20px auto;
	}

	.ok_btn2 {
		height: 35px;
		color: #fff;
		background: #e6e6e6;
		width: 80%;
		text-align: center;
		line-height: 35px;
		font-size: 14px;
	}

	.color_n1 {
		color: #fff;
		border-radius: 5px;
		padding: 0px 5px;
		background: #EAC477;
		margin-right: 10px;
	}

	.color_n2 {
		color: #fff;
		border-radius: 5px;
		padding: 0px 5px;
		background: #8e3aca;
	}

	.history_are {
		background: #251c487a;
		border-radius: 8px;
		position: absolute;
		top: 149px;
		left: 0px;
		width: 100%;
		padding: 10px 0px;
		z-index: 1029;
	}
	.scroll_ft{ padding-bottom: 300px;}
</style>