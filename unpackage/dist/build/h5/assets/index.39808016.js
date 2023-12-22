import{a as t,s,_ as e,A as a,x as i,B as o,o as n,e as c,w as l,C as u,k as r,F as m,r as d,q as p,f as h,m as g,j as f,t as _,i as T,y as b,u as k,b as y,$ as x,D as C,n as v,E as S,G as I}from"./index-94068fa3.js";import{_ as j}from"./mp-html.1adb3129.js";import{r as w}from"./uni-app.es.f2d0fc12.js";import{e as L}from"./emoji.4b4cb326.js";import{s as A}from"./status.c4f1bf24.js";const B=t(s);const D=e({name:"message-list",props:{msgs:{type:Array,default:function(){return[]}},btnWidth:{type:Number,default:320}},components:{statusPoint:A},data:()=>({msgsIn:[],damping:.29,moveIndex:-1,x:0,oX:0,scY:!0,btnWidthpx:160,touchStart:!1,modalName:null,listTouchStart:0,listTouchDirection:null,emojiMap:[],chatStatus:!0,paddingB:0,appSetting:B.appSetting,globalConfig:B.globalConfig}),created:function(){this.init(this.msgs),this.btnWidthpx=-1*a(this.btnWidth)+2;let t=[];L.forEach((function(s){let e=s.children;e.length>0&&e.forEach((function(s){let e=s.name,a=s.src;t[e]=a}))})),this.emojiMap=t,this.paddingB=this.inlineTools},watch:{msgs:function(t){this.init(t)}},methods:{init:function(t){this.moveIndex=-1,this.msgsIn=t.filter((t=>t.lastContent))},scrolltolower:function(){},emojiToHtml(t){if(!t)return;let s=this.emojiMap;return t.replace(/\[!(\w+)\]/gi,(function(t,e){var a=e;return s[a]?'<img class=\'mr-5\' style="width:18px;height:18px" emoji-name="'.concat(e,'" src="').concat(s[a],'" />'):"[!".concat(e,"]")}))},ListTouchStart(t){this.listTouchStart=t.touches[0].pageX},ListTouchMove(t){let s=t.touches[0].pageX-this.listTouchStart;Math.abs(s)>100&&s<0?this.listTouchDirection="left":this.listTouchDirection="right"},ListTouchEnd(t){"left"==this.listTouchDirection?(this.modalName=t.currentTarget.dataset.target,this.chatStatus=!1):this.modalName=null,this.listTouchDirection=null},openChat(t,s){this.chatStatus?this.$emit("itemTap",t,s):this.chatStatus=!0},from_time(t){return this.$util.timeFormat(t)},btnTap(t,s){this.$emit("btnTap",t,s)}}},[["render",function(t,s,e,a,k,y){const x=T,C=i("Tags"),v=i("statusPoint"),S=b,I=w(o("mp-html"),j),L=i("Empty");return n(),c(x,{class:"im-message-list"},{default:l((()=>[k.msgsIn.length>0?(n(),c(x,{key:0,class:"cu-list menu-avatar",style:u({paddingBottom:k.paddingB+"px"})},{default:l((()=>[(n(!0),r(m,null,d(k.msgsIn,((t,s)=>(n(),c(x,{class:p(["cu-item",[k.modalName=="move-box-"+s?"move-cur":"",1==t.is_top?"top-contacts":"",0==t.is_group?"third":"second"]]),key:s,onTouchstart:y.ListTouchStart,onTouchmove:y.ListTouchMove,onTouchend:y.ListTouchEnd,onClick:e=>y.openChat(s,t),"data-target":"move-box-"+s},{default:l((()=>[h(x,{class:p(["cu-avatar lg",k.appSetting.circleAvatar?"round":"radius"]),style:u([{backgroundImage:"url("+t.avatar+")"}])},null,8,["class","style"]),h(x,{class:"content"},{default:l((()=>[h(x,{class:"c-333"},{default:l((()=>[1==t.is_group?(n(),c(C,{key:0,text:"群聊",size:"mini"})):g("",!0),t.is_online&&0==t.is_group&&1==k.globalConfig.chatInfo.online?(n(),c(v,{key:1,type:"success"})):g("",!0),h(x,{class:"text-overflow f-16",style:{width:"80%"}},{default:l((()=>[f(_(t.displayName),1)])),_:2},1024)])),_:2},1024),h(x,{class:"im-flex im-justify-content-start im-align-items-start pt-5",style:{height:"50rpx",overflow:"hidden"}},{default:l((()=>[h(x,{class:"text-gray text-sm"},{default:l((()=>[t.unread>0&&0==t.is_notice?(n(),c(S,{key:0},{default:l((()=>[f("["+_(t.unread)+"条未读] ",1)])),_:2},1024)):g("",!0)])),_:2},1024),h(I,{content:y.emojiToHtml(t.lastContent),class:"im-flex text-gray text-sm text-overflow no-click"},null,8,["content"])])),_:2},1024)])),_:2},1024),h(x,{class:"action"},{default:l((()=>[h(x,{class:"text-grey text-xs"},{default:l((()=>[f(_(y.from_time(t.lastSendTime)),1)])),_:2},1024),t.unread>0&&t.is_notice?(n(),c(x,{key:0,class:"cu-tag round bg-red sm"},{default:l((()=>[f(_(t.unread),1)])),_:2},1024)):g("",!0),0==t.is_notice?(n(),c(x,{key:1,class:"c-999"},{default:l((()=>[h(S,{class:"cuIcon-musicforbidfill"})])),_:1})):g("",!0)])),_:2},1024),h(x,{class:p(["move",0==t.is_group?"third":"second"])},{default:l((()=>[1==t.is_top?(n(),c(x,{key:0,class:"bg-grey",onClick:s=>y.btnTap(0,t)},{default:l((()=>[f("取消置顶")])),_:2},1032,["onClick"])):(n(),c(x,{key:1,class:"bg-blue",onClick:s=>y.btnTap(0,t)},{default:l((()=>[f("置顶聊天")])),_:2},1032,["onClick"])),1==t.is_notice?(n(),c(x,{key:2,class:"bg-orange",onClick:s=>y.btnTap(2,t)},{default:l((()=>[f("免扰")])),_:2},1032,["onClick"])):(n(),c(x,{key:3,class:"bg-orange",onClick:s=>y.btnTap(2,t)},{default:l((()=>[f("取消免扰")])),_:2},1032,["onClick"])),0==t.is_group?(n(),c(x,{key:4,class:"bg-red",onClick:s=>y.btnTap(1,t)},{default:l((()=>[f("删除会话")])),_:2},1032,["onClick"])):g("",!0)])),_:2},1032,["class"])])),_:2},1032,["class","onTouchstart","onTouchmove","onTouchend","onClick","data-target"])))),128))])),_:1},8,["style"])):(n(),c(L,{key:1,noDatatext:"暂无聊天",textcolor:"#999"}))])),_:1})}],["__scopeId","data-v-19af59d0"]]),M=k(s),{contacts:N}=y(M),$=t(s),{multiport:E}=y($);const W=e({components:{messageList:D},data:()=>({navCurrent:0,msgs:N,mainHeight:500,pageLoading:!0,multiport:E,socketStatus:!0}),mounted(){x("socketStatus",(t=>{t||(this.multiport=!1),this.socketStatus=t}))},methods:{btnTap:function(t,s){0==t?(s.is_top=0==s.is_top?1:0,this.$api.msgApi.setChatTopAPI({id:s.id,is_top:s.is_top,is_group:s.is_group}).then((t=>{0==t.code&&M.updateContacts(s)}))):1==t?C({title:"确定要删除吗?",success:t=>{t.confirm&&this.$api.msgApi.delChatAPI({id:s.id,is_group:s.is_group}).then((t=>{0==t.code&&M.deleteContacts(s)}))}}):2==t&&(s.is_notice=0==s.is_notice?1:0,this.$api.msgApi.setIsNotice({id:s.id,is_notice:s.is_notice,is_group:s.is_group}).then((t=>{0==t.code&&M.updateContacts(s)})))},itemTap:function(t,s){M.unread-=s.unread;let e=this.msgs;e[t].unread=0,M.initContacts(e),v({url:"/pages/message/chat?id="+s.id})},reconnect(){S({title:"重连中..."}),this.socketIo.connectSocketInit({type:"ping"}),setTimeout((()=>{I()}),1500)}}},[["render",function(t,s,e,a,o,u){const r=T,m=i("messageList");return n(),c(r,null,{default:l((()=>[o.socketStatus?g("",!0):(n(),c(r,{key:0,class:"socket-status pd-10 im-flex justify-between im-align-items-center"},{default:l((()=>[h(r,{class:"cuIcon-infofill text-red f-18"}),h(r,{class:"c-666 f-12"},{default:l((()=>[f(" WS通信已断开，检查网络设置是否正常")])),_:1}),h(r,{onClick:s[0]||(s[0]=t=>u.reconnect())},{default:l((()=>[f("重连")])),_:1})])),_:1})),o.multiport?(n(),c(r,{key:1,class:"border-b pd-10 text-gray im-flex im-justify-content-start"},{default:l((()=>[h(r,{class:"iconfont icon-web f-18 ml-20"}),h(r,{class:"f-12 ml-20"},{default:l((()=>[f(" Web网页端已登录")])),_:1})])),_:1})):g("",!0),h(m,{msgs:o.msgs,onItemTap:u.itemTap,onBtnTap:u.btnTap},null,8,["msgs","onItemTap","onBtnTap"])])),_:1})}],["__scopeId","data-v-0bb020b5"]]);export{W as m};
