import{_ as e,a,s as t,n as s,g as i,K as n,E as o,Y as r,G as l,o as u,e as d,w as f,i as m,f as c,j as g,t as h,C as p,x as v,y as I,ab as _,Q as x}from"./index-7b243064.js";import{a as b}from"./yq-avatar.62ec6229.js";const S=a(t);const $=e({components:{avatar:b},data(){return{loginStore:S,globalConfig:S.globalConfig,userInfo:{},sexList:[{id:"2",name:this.$t("mine.no_msg")},{id:"1",name:this.$t("mine.sex_nan")},{id:"0",name:this.$t("mine.sex_nv")}],saved:!1,balance:"0.00"}},mounted(){this.get_userInfo(),this.userInfo=JSON.parse(JSON.stringify(S.userInfo))},methods:{to_fengmian(){s({url:"/pages/mine/run_img"})},async get_userInfo(){const e=await this.$myRuquest({url:"/api/front/user/getUserInfo",method:"POST"});200==e.code&&(this.balance=e.data.balance)},logout(){let e=i("client_id");this.$api.LoginApi.logout({client_id:e}).then((e=>{0==e.code&&S.logout()}))},textareaBInput(e){this.userInfo.motto=e.detail.value},changeSex(e){this.userInfo.sex=parseInt(e.detail.value)},saveInfo(){if(""==this.userInfo.realname)return n({title:this.$t("mine.set_t_1"),icon:"none"}),!1;this.saved=!0;let e={realname:this.userInfo.realname,email:this.userInfo.email,sex:this.userInfo.sex,motto:this.userInfo.motto,ages:this.userInfo.ages};this.$api.msgApi.updateUserInfo(e).then((e=>{if(0==e.code){n({title:this.$t("mine.set_t_2"),icon:"none"});let e=JSON.parse(JSON.stringify(this.userInfo));S.login(e)}})),setTimeout((()=>{this.saved=!1}),8e3)},setAvatar(){s({url:"/pages/mine/avatar"})},uploadAvatar(e){o({title:this.$t("mine.set_t_1")}),r({url:this.$api.msgApi.uploadAvatar,filePath:e.path,name:"file",header:{Authorization:i("authToken")},formData:{ext:"png"},success:e=>{l();let a=JSON.parse(e.data);if(0==a.code){n({title:a.msg,icon:"none"}),this.userInfo.avatar=a.data;let e=JSON.parse(JSON.stringify(this.userInfo));S.login(e)}},fail:e=>{l()}})}}},[["render",function(e,a,t,s,i,n){const o=v("cu-custom"),r=m,l=v("avatar"),b=I,S=_,$=x;return u(),d(r,null,{default:f((()=>[c(o,{bgColor:"bg-gradual-pink",isBack:!0},{backText:f((()=>[])),content:f((()=>[g(h(e.$t("mine.icon")),1)])),_:1}),c(S,null,{default:f((()=>[c(r,{class:"cu-form-group",style:{height:"140rpx"}},{default:f((()=>[c(r,{class:"title"},{default:f((()=>[g(h(e.$t("mine.icon")),1)])),_:1}),c(r,{class:"im-flex im-align-items-center"},{default:f((()=>[c(l,{selWidth:"240px",selHeight:"480upx",onUpload:n.uploadAvatar,avatarSrc:i.userInfo.avatar,avatarStyle:"width: 100rpx; height: 100rpx; border-radius: 100%;"},null,8,["onUpload","avatarSrc"]),c(b,{class:"cuIcon-right ml-10 f-18 text-grey"})])),_:1})])),_:1})])),_:1}),c(r,{class:"padding flex flex-direction"},{default:f((()=>[c($,{class:"cu-btn bg-green lg",style:p(i.saved?"border: solid 1px #dbdada;":""),disabled:i.saved,onClick:a[0]||(a[0]=e=>n.saveInfo())},{default:f((()=>[g(h(e.$t("mine.save")),1)])),_:1},8,["style","disabled"])])),_:1})])),_:1})}]]);export{$ as default};
