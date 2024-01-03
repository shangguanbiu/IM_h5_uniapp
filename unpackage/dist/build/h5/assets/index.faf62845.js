import{a as t,s,_ as e,A as a,x as i,B as o,o as n,e as c,w as l,C as u,k as r,F as m,r as d,q as p,f as h,m as g,j as f,t as _,i as T,y as k,u as y,b,$ as x,D as C,n as v,E as S,G as I}from"./index-7b243064.js";import{_ as j}from"./mp-html.5850ce47.js";import{r as $}from"./uni-app.es.718d5945.js";import{e as w}from"./emoji.4b4cb326.js";import{s as L}from"./status.684ef06d.js";const A=t(s);const D=e({name:"message-list",props:{msgs:{type:Array,default:function(){return[]}},btnWidth:{type:Number,default:320}},components:{statusPoint:L},data:()=>({msgsIn:[],damping:.29,moveIndex:-1,x:0,oX:0,scY:!0,btnWidthpx:160,touchStart:!1,modalName:null,listTouchStart:0,listTouchDirection:null,emojiMap:[],chatStatus:!0,paddingB:0,appSetting:A.appSetting,globalConfig:A.globalConfig}),created:function(){this.init(this.msgs),this.btnWidthpx=-1*a(this.btnWidth)+2;let t=[];w.forEach((function(s){let e=s.children;e.length>0&&e.forEach((function(s){let e=s.name,a=s.src;t[e]=a}))})),this.emojiMap=t,this.paddingB=this.inlineTools},watch:{msgs:function(t){this.init(t)}},methods:{init:function(t){this.moveIndex=-1,this.msgsIn=t.filter((t=>t.lastContent))},scrolltolower:function(){},emojiToHtml(t){if(!t)return;let s=this.emojiMap;return t.replace(/\[!(\w+)\]/gi,(function(t,e){var a=e;return s[a]?'<img class=\'mr-5\' style="width:18px;height:18px" emoji-name="'.concat(e,'" src="').concat(s[a],'" />'):"[!".concat(e,"]")}))},ListTouchStart(t){this.listTouchStart=t.touches[0].pageX},ListTouchMove(t){let s=t.touches[0].pageX-this.listTouchStart;Math.abs(s)>100&&s<0?this.listTouchDirection="left":this.listTouchDirection="right"},ListTouchEnd(t){"left"==this.listTouchDirection?(this.modalName=t.currentTarget.dataset.target,this.chatStatus=!1):this.modalName=null,this.listTouchDirection=null},openChat(t,s){this.chatStatus?this.$emit("itemTap",t,s):this.chatStatus=!0},from_time(t){return this.$util.timeFormat(t)},btnTap(t,s){this.$emit("btnTap",t,s)}}},[["render",function(t,s,e,a,y,b){const x=T,C=i("Tags"),v=i("statusPoint"),S=k,I=$(o("mp-html"),j),w=i("Empty");return n(),c(x,{class:"im-message-list"},{default:l((()=>[y.msgsIn.length>0?(n(),c(x,{key:0,class:"cu-list menu-avatar",style:u({paddingBottom:y.paddingB+"px"})},{default:l((()=>[(n(!0),r(m,null,d(y.msgsIn,((s,e)=>(n(),c(x,{class:p(["cu-item",[y.modalName=="move-box-"+e?"move-cur":"",1==s.is_top?"top-contacts":"",0==s.is_group?"third":"second"]]),key:e,onTouchstart:b.ListTouchStart,onTouchmove:b.ListTouchMove,onTouchend:b.ListTouchEnd,onClick:t=>b.openChat(e,s),"data-target":"move-box-"+e},{default:l((()=>[h(x,{class:p(["cu-avatar lg",y.appSetting.circleAvatar?"round":"radius"]),style:u([{backgroundImage:"url("+s.avatar+")"}])},null,8,["class","style"]),h(x,{class:"content"},{default:l((()=>[h(x,{class:"c-333"},{default:l((()=>[1==s.is_group?(n(),c(C,{key:0,text:t.$t("message.group_title"),size:"mini"},null,8,["text"])):g("",!0),s.is_online&&0==s.is_group&&1==y.globalConfig.chatInfo.online?(n(),c(v,{key:1,type:"success"})):g("",!0),h(x,{class:"text-overflow f-16",style:{width:"80%"}},{default:l((()=>[f(_(s.displayName),1)])),_:2},1024)])),_:2},1024),h(x,{class:"im-flex im-justify-content-start im-align-items-start pt-5",style:{height:"50rpx",overflow:"hidden"}},{default:l((()=>[h(x,{class:"text-gray text-sm"},{default:l((()=>[s.unread>0&&0==s.is_notice?(n(),c(S,{key:0},{default:l((()=>[f("["+_(s.unread)+_(t.$t("message.no_read"))+"] ",1)])),_:2},1024)):g("",!0)])),_:2},1024),h(I,{content:b.emojiToHtml(s.lastContent),class:"im-flex text-gray text-sm text-overflow no-click"},null,8,["content"])])),_:2},1024)])),_:2},1024),h(x,{class:"action"},{default:l((()=>[h(x,{class:"text-grey text-xs"},{default:l((()=>[f(_(b.from_time(s.lastSendTime)),1)])),_:2},1024),s.unread>0&&s.is_notice?(n(),c(x,{key:0,class:"cu-tag round bg-red sm"},{default:l((()=>[f(_(s.unread),1)])),_:2},1024)):g("",!0),0==s.is_notice?(n(),c(x,{key:1,class:"c-999"},{default:l((()=>[h(S,{class:"cuIcon-musicforbidfill"})])),_:1})):g("",!0)])),_:2},1024),h(x,{class:p(["move",0==s.is_group?"third":"second"])},{default:l((()=>[1==s.is_top?(n(),c(x,{key:0,class:"bg-grey",onClick:t=>b.btnTap(0,s)},{default:l((()=>[f(_(t.$t("message.cancle_top")),1)])),_:2},1032,["onClick"])):(n(),c(x,{key:1,class:"bg-blue",onClick:t=>b.btnTap(0,s)},{default:l((()=>[f(_(t.$t("message.set_top")),1)])),_:2},1032,["onClick"])),1==s.is_notice?(n(),c(x,{key:2,class:"bg-orange",onClick:t=>b.btnTap(2,s)},{default:l((()=>[f(_(t.$t("message.set_notice")),1)])),_:2},1032,["onClick"])):(n(),c(x,{key:3,class:"bg-orange",onClick:t=>b.btnTap(2,s)},{default:l((()=>[f(_(t.$t("message.cancle_notice")),1)])),_:2},1032,["onClick"])),0==s.is_group?(n(),c(x,{key:4,class:"bg-red",onClick:t=>b.btnTap(1,s)},{default:l((()=>[f(_(t.$t("message.del_talk")),1)])),_:2},1032,["onClick"])):g("",!0)])),_:2},1032,["class"])])),_:2},1032,["class","onTouchstart","onTouchmove","onTouchend","onClick","data-target"])))),128))])),_:1},8,["style"])):(n(),c(w,{key:1,noDatatext:t.$t("message.no_data"),textcolor:"#999"},null,8,["noDatatext"]))])),_:1})}],["__scopeId","data-v-b6c5e720"]]),N=y(s),{contacts:B}=b(N),M=t(s),{multiport:E}=b(M);const W=e({components:{messageList:D},data:()=>({navCurrent:0,msgs:B,mainHeight:500,pageLoading:!0,multiport:E,socketStatus:!0}),mounted(){x("socketStatus",(t=>{t||(this.multiport=!1),this.socketStatus=t}))},methods:{btnTap:function(t,s){0==t?(s.is_top=0==s.is_top?1:0,this.$api.msgApi.setChatTopAPI({id:s.id,is_top:s.is_top,is_group:s.is_group}).then((t=>{0==t.code&&N.updateContacts(s)}))):1==t?C({title:this.$t("message.pop_no_t3"),success:t=>{t.confirm&&this.$api.msgApi.delChatAPI({id:s.id,is_group:s.is_group}).then((t=>{0==t.code&&N.deleteContacts(s)}))}}):2==t&&(s.is_notice=0==s.is_notice?1:0,this.$api.msgApi.setIsNotice({id:s.id,is_notice:s.is_notice,is_group:s.is_group}).then((t=>{0==t.code&&N.updateContacts(s)})))},itemTap:function(t,s){N.unread-=s.unread;let e=this.msgs;e[t].unread=0,N.initContacts(e),v({url:"/pages/message/chat?id="+s.id})},reconnect(){S({title:"重连中..."}),this.socketIo.connectSocketInit({type:"ping"}),setTimeout((()=>{I()}),1500)}}},[["render",function(t,s,e,a,o,u){const r=T,m=i("messageList");return n(),c(r,null,{default:l((()=>[o.socketStatus?g("",!0):(n(),c(r,{key:0,class:"socket-status pd-10 im-flex justify-between im-align-items-center"},{default:l((()=>[h(r,{class:"cuIcon-infofill text-red f-18"}),h(r,{class:"c-666 f-12"},{default:l((()=>[f(" WS通信已断开，检查网络设置是否正常")])),_:1}),h(r,{onClick:s[0]||(s[0]=t=>u.reconnect())},{default:l((()=>[f("重连")])),_:1})])),_:1})),o.multiport?(n(),c(r,{key:1,class:"border-b pd-10 text-gray im-flex im-justify-content-start"},{default:l((()=>[h(r,{class:"iconfont icon-web f-18 ml-20"}),h(r,{class:"f-12 ml-20"},{default:l((()=>[f(" Web网页端已登录")])),_:1})])),_:1})):g("",!0),h(m,{msgs:o.msgs,onItemTap:u.itemTap,onBtnTap:u.btnTap},null,8,["msgs","onItemTap","onBtnTap"])])),_:1})}],["__scopeId","data-v-60eb2c36"]]);export{W as m};
