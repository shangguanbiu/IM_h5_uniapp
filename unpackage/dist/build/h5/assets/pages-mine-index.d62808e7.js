import{_ as e,u as a,s as t,a as s,b as l,g as i,$ as n,n as c,d as o,a9 as u,o as r,e as d,w as g,i as m,f,j as _,p,B as h,t as k,k as x,r as b,F as C,q as v,y,x as I,P as w,m as S}from"./index-bb9aa3b8.js";import{s as N}from"./scan.dd047bba.js";const P=""+new URL("vip_me-3501a8ec.png",import.meta.url).href,j=a(t),A=s(t),{unread:L,sysUnread:O}=l(j);const J=e({data:()=>({loginStore:A,globalConfig:A.globalConfig,appSetting:A.appSetting,PageCur:"mine",navList:[{name:"home",title:"首页",notice:0},{name:"message",title:"消息",notice:L},{name:"serve",title:"客服",notice:0},{name:"contacts",title:"通讯录",notice:O},{name:"mine",title:"我的",notice:0}]}),onShow(){},mounted(){i("allContacts").length||this.initContacts(),n("socketStatus",(e=>{e&&this.initContacts()}));var e=document.getElementsByClassName("uni-page-head-hd")[0];e&&(e.style.display="none"),console.log("ffff",A.userInfo),this.get_userinfo()},methods:{async get_userinfo(){let e=JSON.parse(JSON.stringify(A.userInfo));const a=await this.$myRuquest({url:"/api/front/index/getImUserInfo",method:"POST",data:{user_id:e.user_id}});if(200==a.code){let e=JSON.parse(JSON.stringify(a.data));A.login(e)}},to_like(e){c(1==e?{url:"/pages/mine/like/like_me"}:{url:"/pages/mine/like/like"})},NavChange(e){"message"==e.name?c({url:"/pages/index/mv_index"}):"contacts"==e.name?o({url:"/pages/contacts/index"}):"compass"==e.name?c({url:"/pages/compass/index"}):"home"==e.name?o({url:"/pages/index/index"}):"serve"==e.name&&c({url:"/pages/movie/kefu/kefu"})},initContacts(){this.modelName="",this.$api.msgApi.initContacts().then((e=>{j.sysUnread=e.count,j.initContacts(e.data)}))},logout(){let e=i("client_id");this.$api.LoginApi.logout({client_id:e}).then((e=>{0==e.code&&A.logout()})),u("allContacts"),u("ifLogin"),u("iffirst")},about(){if(this.globalConfig&&this.globalConfig.demon_mode){c({url:"/pages/mine/webview?src="+"https://im.raingad.com"})}else c({url:"/pages/mine/about"})},showSetting(){c({url:"/pages/mine/setting"})},showsecure(){c({url:"/pages/mine/secure"})},editInfo(){c({url:"/pages/mine/profile"})},scan(){N.scanQr()},openQr(){c({url:"/pages/index/qrcode"})},to_vip(){c({url:"/pages/mine/vip/vip"})}}},[["render",function(e,a,t,s,l,i){const n=v("cu-custom"),c=m,o=y,u=I,N=w;return r(),d(c,null,{default:g((()=>[f(n,{bgColor:"bg-gradual-pink",isBack:!1},{content:g((()=>[_("我的")])),_:1}),f(c,{class:"padding flex im-space-between im-align-items-center bg-white mb-10"},{default:g((()=>[f(c,{class:"flex justify-start bg-white",onClick:a[0]||(a[0]=e=>i.editInfo())},{default:g((()=>[f(c,{class:p(["cu-avatar lg mr-15",l.appSetting.circleAvatar?"round":"radius"]),style:h([{backgroundImage:"url("+l.loginStore.userInfo.avatar+")"}])},null,8,["class","style"]),f(c,{class:"im-flex im-justify-content-start im-columns"},{default:g((()=>[f(c,{class:"mb-5 f-18 mb-10 im-flex im-align-items-center"},{default:g((()=>[f(c,{class:"c-333"},{default:g((()=>[_(k(l.loginStore.userInfo.realname),1)])),_:1})])),_:1}),f(c,{class:"text-gray mb-10"},{default:g((()=>[_(k(l.loginStore.userInfo.account),1)])),_:1})])),_:1})])),_:1})])),_:1}),f(c,{class:"vip_are_P",onClick:i.to_vip},{default:g((()=>[f(c,{class:"vip_are_m"},{default:g((()=>[f(c,{class:"vip_are_tit"},{default:g((()=>[_("我的特权")])),_:1}),f(c,{class:"vip_are_p"},{default:g((()=>[_("￥50/月即可获得特权VIP")])),_:1})])),_:1}),f(o,{src:P,mode:"widthFix",style:{width:"100%","max-height":"100px"}})])),_:1},8,["onClick"]),f(c,{class:"cu-list menu"},{default:g((()=>[f(c,{class:"cu-item",onClick:a[1]||(a[1]=e=>i.to_like(1))},{default:g((()=>[f(c,{class:"content"},{default:g((()=>[f(u,{class:"cuIcon-likefill text-red"}),f(u,null,{default:g((()=>[_("喜欢我的TA")])),_:1})])),_:1}),f(c,{class:"action"},{default:g((()=>[f(u,{class:"text-grey cuIcon-right"})])),_:1})])),_:1}),f(c,{class:"cu-item",onClick:a[2]||(a[2]=e=>i.to_like(2))},{default:g((()=>[f(c,{class:"content"},{default:g((()=>[f(u,{class:"cuIcon-emojiflashfill text-pink"}),f(u,null,{default:g((()=>[_("我喜欢的TA")])),_:1})])),_:1}),f(c,{class:"action"},{default:g((()=>[f(u,{class:"text-grey cuIcon-right"})])),_:1})])),_:1}),f(c,{class:"cu-item",onClick:i.showSetting},{default:g((()=>[f(c,{class:"content"},{default:g((()=>[f(u,{class:"cuIcon-settings text-grey"}),f(u,null,{default:g((()=>[_("通用设置")])),_:1})])),_:1}),f(c,{class:"action"},{default:g((()=>[f(u,{class:"text-grey cuIcon-right"})])),_:1})])),_:1},8,["onClick"]),f(c,{class:"cu-item",onClick:i.showsecure},{default:g((()=>[f(c,{class:"content"},{default:g((()=>[f(u,{class:"cuIcon-safe text-orange"}),f(u,null,{default:g((()=>[_("账号安全")])),_:1})])),_:1}),f(c,{class:"action"},{default:g((()=>[f(u,{class:"text-grey cuIcon-right"})])),_:1})])),_:1},8,["onClick"])])),_:1}),f(c,{class:"padding flex flex-direction"},{default:g((()=>[f(N,{class:"cu-btn bg-red lg",onClick:a[3]||(a[3]=e=>i.logout())},{default:g((()=>[_("退出登录")])),_:1})])),_:1}),f(c,{class:"cu-bar tabbar bg-white shadow foot"},{default:g((()=>[(r(!0),x(C,null,b(l.navList,((e,a)=>(r(),d(c,{class:"action",onClick:a=>i.NavChange(e),key:a,"data-cur":"message"},{default:g((()=>[f(c,{class:"cuIcon-cu-image"},{default:g((()=>[f(o,{src:"/static/image/tabbar/"+[e.name]+[l.PageCur==e.name?"-active":""]+".svg"},null,8,["src"]),e.notice>0?(r(),d(c,{key:0,class:"cu-tag badge"},{default:g((()=>[_(k(e.notice),1)])),_:2},1024)):S("",!0)])),_:2},1024),f(c,{class:p(l.PageCur==e.name?"text-mauve":"text-black")},{default:g((()=>[_(k(e.title),1)])),_:2},1032,["class"])])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})}],["__scopeId","data-v-e195ba6b"]]);export{J as default};
