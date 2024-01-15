import{a as t,s,_ as e,A as a,x as i,B as o,o as n,e as c,w as l,C as u,k as r,F as m,r as d,q as p,f as h,m as g,j as f,t as _,z as T,i as k,y,u as b,b as x,$ as C,D as v,n as S,E as I,G as $}from"./index-d492f317.js";import{_ as j}from"./mp-html.781e958b.js";import{r as w}from"./uni-app.es.bb0d54d8.js";import{e as L,_ as A}from"./guan_l.692a6680.js";import{s as D}from"./status.c83eadfd.js";const N=t(s);const B=e({name:"message-list",props:{msgs:{type:Array,default:function(){return[]}},btnWidth:{type:Number,default:320}},components:{statusPoint:D},data:()=>({msgsIn:[],damping:.29,moveIndex:-1,x:0,oX:0,scY:!0,btnWidthpx:160,touchStart:!1,modalName:null,listTouchStart:0,listTouchDirection:null,emojiMap:[],chatStatus:!0,paddingB:0,appSetting:N.appSetting,globalConfig:N.globalConfig}),created:function(){this.init(this.msgs),this.btnWidthpx=-1*a(this.btnWidth)+2;let t=[];L.forEach((function(s){let e=s.children;e.length>0&&e.forEach((function(s){let e=s.name,a=s.src;t[e]=a}))})),this.emojiMap=t,this.paddingB=this.inlineTools},watch:{msgs:function(t){this.init(t)}},methods:{init:function(t){this.moveIndex=-1,this.msgsIn=t.filter((t=>t.lastContent))},scrolltolower:function(){},emojiToHtml(t){if(!t)return;let s=this.emojiMap;return t.replace(/\[!(\w+)\]/gi,(function(t,e){var a=e;return s[a]?'<img class=\'mr-5\' style="width:18px;height:18px" emoji-name="'.concat(e,'" src="').concat(s[a],'" />'):"[!".concat(e,"]")}))},ListTouchStart(t){this.listTouchStart=t.touches[0].pageX},ListTouchMove(t){let s=t.touches[0].pageX-this.listTouchStart;Math.abs(s)>100&&s<0?this.listTouchDirection="left":this.listTouchDirection="right"},ListTouchEnd(t){"left"==this.listTouchDirection?(this.modalName=t.currentTarget.dataset.target,this.chatStatus=!1):this.modalName=null,this.listTouchDirection=null},openChat(t,s){this.chatStatus?this.$emit("itemTap",t,s):this.chatStatus=!0},from_time(t){return this.$util.timeFormat(t)},btnTap(t,s){this.$emit("btnTap",t,s)}}},[["render",function(t,s,e,a,b,x){const C=T,v=k,S=i("Tags"),I=i("statusPoint"),$=y,L=w(o("mp-html"),j),D=i("Empty");return n(),c(v,{class:"im-message-list"},{default:l((()=>[b.msgsIn.length>0?(n(),c(v,{key:0,class:"cu-list menu-avatar",style:u({paddingBottom:b.paddingB+"px"})},{default:l((()=>[(n(!0),r(m,null,d(b.msgsIn,((s,e)=>(n(),c(v,{class:p(["cu-item",[b.modalName=="move-box-"+e?"move-cur":"",1==s.is_top?"top-contacts":"",0==s.is_group?"third":"second"]]),key:e,onTouchstart:x.ListTouchStart,onTouchmove:x.ListTouchMove,onTouchend:x.ListTouchEnd,onClick:t=>x.openChat(e,s),"data-target":"move-box-"+e},{default:l((()=>[h(v,{class:p(["cu-avatar lg icon_vip_are",b.appSetting.circleAvatar?"round":"radius"]),style:u([{backgroundImage:"url("+s.avatar+")"}])},{default:l((()=>[1==s.icon_vip?(n(),c(v,{key:0,class:"icon_vip_l"},{default:l((()=>[h(C,{src:A,mode:"widthFix",style:{width:"100%","max-height":"100px"}})])),_:1})):g("",!0)])),_:2},1032,["class","style"]),h(v,{class:"content"},{default:l((()=>[h(v,{class:"c-333"},{default:l((()=>[1==s.is_group?(n(),c(S,{key:0,text:t.$t("message.group_title"),size:"mini"},null,8,["text"])):g("",!0),s.is_online&&0==s.is_group&&1==b.globalConfig.chatInfo.online?(n(),c(I,{key:1,type:"success"})):g("",!0),h(v,{class:"text-overflow f-16",style:{width:"80%"}},{default:l((()=>[f(_(s.displayName),1)])),_:2},1024)])),_:2},1024),h(v,{class:"im-flex im-justify-content-start im-align-items-start pt-5",style:{height:"50rpx",overflow:"hidden"}},{default:l((()=>[h(v,{class:"text-gray text-sm"},{default:l((()=>[s.unread>0&&0==s.is_notice?(n(),c($,{key:0},{default:l((()=>[f("["+_(s.unread)+_(t.$t("message.no_read"))+"] ",1)])),_:2},1024)):g("",!0)])),_:2},1024),h(L,{content:x.emojiToHtml(s.lastContent),class:"im-flex text-gray text-sm text-overflow no-click"},null,8,["content"])])),_:2},1024)])),_:2},1024),h(v,{class:"action"},{default:l((()=>[h(v,{class:"text-grey text-xs"},{default:l((()=>[f(_(x.from_time(s.lastSendTime)),1)])),_:2},1024),s.unread>0&&s.is_notice?(n(),c(v,{key:0,class:"cu-tag round bg-red sm"},{default:l((()=>[f(_(s.unread),1)])),_:2},1024)):g("",!0),0==s.is_notice?(n(),c(v,{key:1,class:"c-999"},{default:l((()=>[h($,{class:"cuIcon-musicforbidfill"})])),_:1})):g("",!0)])),_:2},1024),h(v,{class:p(["move",0==s.is_group?"third":"second"])},{default:l((()=>[1==s.is_top?(n(),c(v,{key:0,class:"bg-grey",onClick:t=>x.btnTap(0,s)},{default:l((()=>[f(_(t.$t("message.cancle_top")),1)])),_:2},1032,["onClick"])):(n(),c(v,{key:1,class:"bg-blue",onClick:t=>x.btnTap(0,s)},{default:l((()=>[f(_(t.$t("message.set_top")),1)])),_:2},1032,["onClick"])),1==s.is_notice?(n(),c(v,{key:2,class:"bg-orange",onClick:t=>x.btnTap(2,s)},{default:l((()=>[f(_(t.$t("message.set_notice")),1)])),_:2},1032,["onClick"])):(n(),c(v,{key:3,class:"bg-orange",onClick:t=>x.btnTap(2,s)},{default:l((()=>[f(_(t.$t("message.cancle_notice")),1)])),_:2},1032,["onClick"])),0==s.is_group?(n(),c(v,{key:4,class:"bg-red",onClick:t=>x.btnTap(1,s)},{default:l((()=>[f(_(t.$t("message.del_talk")),1)])),_:2},1032,["onClick"])):g("",!0)])),_:2},1032,["class"])])),_:2},1032,["class","onTouchstart","onTouchmove","onTouchend","onClick","data-target"])))),128))])),_:1},8,["style"])):(n(),c(D,{key:1,noDatatext:t.$t("message.no_data"),textcolor:"#999"},null,8,["noDatatext"]))])),_:1})}],["__scopeId","data-v-5241bb3e"]]),M=b(s),{contacts:E}=x(M),W=t(s),{multiport:P}=x(W);const F=e({components:{messageList:B},data:()=>({navCurrent:0,msgs:E,mainHeight:500,pageLoading:!0,multiport:P,socketStatus:!0}),mounted(){C("socketStatus",(t=>{t||(this.multiport=!1),this.socketStatus=t}))},methods:{btnTap:function(t,s){0==t?(s.is_top=0==s.is_top?1:0,this.$api.msgApi.setChatTopAPI({id:s.id,is_top:s.is_top,is_group:s.is_group}).then((t=>{0==t.code&&M.updateContacts(s)}))):1==t?v({title:this.$t("message.pop_no_t3"),success:t=>{t.confirm&&this.$api.msgApi.delChatAPI({id:s.id,is_group:s.is_group}).then((t=>{0==t.code&&M.deleteContacts(s)}))}}):2==t&&(s.is_notice=0==s.is_notice?1:0,this.$api.msgApi.setIsNotice({id:s.id,is_notice:s.is_notice,is_group:s.is_group}).then((t=>{0==t.code&&M.updateContacts(s)})))},itemTap:function(t,s){M.unread-=s.unread;let e=this.msgs;e[t].unread=0,M.initContacts(e),S({url:"/pages/message/chat?id="+s.id})},reconnect(){I({title:"重连中..."}),this.socketIo.connectSocketInit({type:"ping"}),setTimeout((()=>{$()}),1500)}}},[["render",function(t,s,e,a,o,u){const r=k,m=i("messageList");return n(),c(r,null,{default:l((()=>[o.socketStatus?g("",!0):(n(),c(r,{key:0,class:"socket-status pd-10 im-flex justify-between im-align-items-center"},{default:l((()=>[h(r,{class:"cuIcon-infofill text-red f-18"}),h(r,{class:"c-666 f-12"},{default:l((()=>[f(" WS通信已断开，检查网络设置是否正常")])),_:1}),h(r,{onClick:s[0]||(s[0]=t=>u.reconnect())},{default:l((()=>[f("重连")])),_:1})])),_:1})),o.multiport?(n(),c(r,{key:1,class:"border-b pd-10 text-gray im-flex im-justify-content-start"},{default:l((()=>[h(r,{class:"iconfont icon-web f-18 ml-20"}),h(r,{class:"f-12 ml-20"},{default:l((()=>[f(" Web网页端已登录")])),_:1})])),_:1})):g("",!0),h(m,{msgs:o.msgs,onItemTap:u.itemTap,onBtnTap:u.btnTap},null,8,["msgs","onItemTap","onBtnTap"])])),_:1})}],["__scopeId","data-v-60eb2c36"]]);export{F as m};