import{_ as a,u as s,s as e,a as t,b as n,h as i,$ as o,g as c,p as l,c as r,n as m,d as u,o as d,e as f,w as g,i as _,f as p,j as h,t as b,k as C,r as k,F as j,l as v,v as x,m as y,q as w,x as N,y as $,z as P}from"./index-94068fa3.js";import{m as T}from"./index.39808016.js";import I from"./pages-contacts-index.b99b2c81.js";import L from"./pages-compass-index.c7e7fc55.js";import S from"./pages-movie-index-index.b1381340.js";import F from"./pages-opengroup-opengroup.bf1cc49a.js";import M from"./pages-movie-bet-bet.7a037525.js";import q from"./pages-nearby-nearby.b372de14.js";import z from"./pages-mine-index.fb4f3060.js";import{s as G}from"./scan.e3628dbc.js";import"./mp-html.1adb3129.js";import"./uni-app.es.f2d0fc12.js";import"./emoji.4b4cb326.js";import"./status.c4f1bf24.js";import"./uni-icons.564d28fc.js";import"./nan_b.1f2ad1df.js";import"./common.b05f9007.js";const H=s(e),U=t(e),{unread:A,sysUnread:B}=n(H);const J=a({components:{message:T,contacts:I,compass:L,mine:z,movice:S,opengroup:F,bet:M,nearby:q},watch:{},data:()=>({globalConfig:U.globalConfig,PageCur:"home",PageName:"首页",TabCur:0,modelName:!1,navList:[{name:"home",title:"首页",notice:0},{name:"message",title:"消息",notice:A},{name:"serve",title:"客服",notice:0},{name:"contacts",title:"通讯录",notice:B},{name:"mine",title:"我的",notice:0}],userinfo:{},tabs:0,run_fun:!0,tabs_arr:[{id:1,name:"影院",ifshow:!1},{id:2,name:"福利群",ifshow:!1},{id:3,name:"投票",ifshow:!1},{id:4,name:"附近的人",ifshow:!1}]}),onShow(){},onLoad(){},mounted(){this.$refs.child_action.get_banner(1),this.$refs.child_action.get_notice(2),this.$refs.child_action.getList(1,6,1),this.$refs.child_action.getList(2,10,2),i(),this.initContacts(),o("socketStatus",(a=>{a&&this.initContacts()})),this.userinfo=c("userInfo")},methods:{to_bottom(){setTimeout((()=>{l({scrollTop:document.querySelector(".scroll_main").scrollHeight-102,duration:0})}),100)},run_child(){""!==c("iffirst")&&(this.$refs.child_action.get_banner(1),this.$refs.child_action.getList(1,6,1),this.$refs.child_action.getList(2,10,2),r("iffirst",!0))},closeModel(){this.modelName=!1},scan(){G.scanQr()},NavChange:function(a){"mine"==a.name?m({url:"/pages/mine/index"}):"message"==a.name?m({url:"/pages/index/mv_index"}):"contacts"==a.name?u({url:"/pages/contacts/index"}):"compass"==a.name?m({url:"/pages/compass/index"}):"serve"==a.name?m({url:"/pages/movie/kefu/kefu"}):(this.PageCur=a.name,this.PageName=a.title)},showContacts(){1==this.TabCur?this.TabCur=0:this.TabCur=1},initContacts(){this.modelName="",this.$api.msgApi.initContacts().then((a=>{H.sysUnread=a.count,H.initContacts(a.data)}))},addGroup(){m({url:"/pages/index/userSelection?type=1"})},addFriend(){m({url:"/pages/contacts/search"})},search(){const a="message"==this.PageCur?1:2;m({url:"/pages/index/search?type="+a})},tab_change(a){this.tabs=a,this.PageName=this.tabs_arr[a].name,this.run_fun=!1,0==a&&(this.run_fun=!0,this.$refs.child_action.get_userinfo()),2==a&&this.$refs.bet_action.run_fun()}}},[["render",function(a,s,e,t,n,i){const o=N("cu-custom"),c=_,l=N("movice"),r=N("opengroup"),m=N("bet"),u=N("nearby"),T=P,I=$;return d(),f(c,{class:"scroll_main"},{default:g((()=>[p(o,{bgColor:"bg-gradual-pink",isBack:!1},{backText:g((()=>[])),content:g((()=>[h(b(n.PageName),1)])),_:1}),p(c,{class:"tab_mline"},{default:g((()=>[(d(!0),C(j,null,k(n.tabs_arr,((a,s)=>(d(),f(c,{class:w(["tab_mline_zi",{tab_hover:n.tabs==s}]),key:s,onClick:a=>i.tab_change(s)},{default:g((()=>[h(b(a.name),1)])),_:2},1032,["onClick","class"])))),128))])),_:1}),p(c,null,{default:g((()=>[v(p(l,{run:n.run_fun,ref:"child_action"},null,8,["run"]),[[x,0==n.tabs]]),1==n.tabs?(d(),f(r,{key:0})):y("",!0),v(p(m,{ref:"bet_action"},null,512),[[x,2==n.tabs]]),3==n.tabs?(d(),f(u,{key:1,onTo_bottom:i.to_bottom},null,8,["onTo_bottom"])):y("",!0)])),_:1}),3!=n.tabs?(d(),f(c,{key:0,class:"cu-bar tabbar bg-white shadow foot"},{default:g((()=>[(d(!0),C(j,null,k(n.navList,((a,s)=>(d(),f(c,{class:"action",onClick:s=>i.NavChange(a),key:s,"data-cur":"message"},{default:g((()=>[p(c,{class:"cuIcon-cu-image"},{default:g((()=>[p(T,{src:"/static/image/tabbar/"+[a.name]+[n.PageCur==a.name?"-active":""]+".svg"},null,8,["src"]),a.notice>0?(d(),f(c,{key:0,class:"cu-tag badge"},{default:g((()=>[h(b(a.notice),1)])),_:2},1024)):y("",!0)])),_:2},1024),p(c,{class:w(n.PageCur==a.name?"text-mauve":"text-black")},{default:g((()=>[h(b(a.title),1)])),_:2},1032,["class"])])),_:2},1032,["onClick"])))),128))])),_:1})):y("",!0),p(c,{class:w(["cu-modal bottom-modal","add"==n.modelName?"show":""]),onClick:s[4]||(s[4]=a=>n.modelName="")},{default:g((()=>[p(c,{class:"cu-dialog"},{default:g((()=>[p(c,{class:"manage-content"},{default:g((()=>[p(c,{class:"cu-list menu bg-white"},{default:g((()=>[p(c,{class:"cu-item",onClick:s[0]||(s[0]=a=>{i.initContacts()})},{default:g((()=>[p(c,{class:"content padding-tb-sm"},{default:g((()=>[p(I,{class:"cuIcon-refresh"}),p(I,null,{default:g((()=>[h("更新消息列表")])),_:1})])),_:1})])),_:1}),void 0!==n.userinfo.role&&1==n.userinfo.role?(d(),f(c,{key:0},{default:g((()=>[2==n.globalConfig.sysInfo.runMode?(d(),f(c,{key:0,class:"cu-item",onClick:s[1]||(s[1]=a=>i.addFriend())},{default:g((()=>[p(c,{class:"content padding-tb-sm"},{default:g((()=>[p(I,{class:"cuIcon-friendadd"}),p(I,null,{default:g((()=>[h("添加朋友")])),_:1})])),_:1})])),_:1})):y("",!0),p(c,{class:"cu-item",onClick:s[2]||(s[2]=a=>i.addGroup())},{default:g((()=>[p(c,{class:"content padding-tb-sm"},{default:g((()=>[p(I,{class:"cuIcon-friend"}),p(I,null,{default:g((()=>[h("创建群聊")])),_:1})])),_:1})])),_:1})])),_:1})):y("",!0),p(c,{class:"parting-line-5"}),p(c,{class:"cu-item",onClick:s[3]||(s[3]=a=>n.modelName="")},{default:g((()=>[p(c,{class:"content padding-tb-sm"},{default:g((()=>[p(I,{class:"c-red"},{default:g((()=>[h("取消")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["class"])])),_:1})}],["__scopeId","data-v-a9aaabdf"]]);export{J as default};