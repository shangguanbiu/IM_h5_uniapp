import{_ as a,u as e,s,a as t,b as n,h as i,$ as o,g as c,c as l,n as r,d as m,o as u,e as d,w as f,i as g,f as p,j as h,t as _,k as b,r as C,F as k,l as j,v,m as x,p as y,q as w,x as N,y as $}from"./index-45871c8e.js";import{m as P}from"./index.9a7ab05a.js";import I from"./pages-contacts-index.05fe7f95.js";import L from"./pages-compass-index.f77751c4.js";import T from"./pages-movie-index-index.33b0f5a4.js";import F from"./pages-opengroup-opengroup.5eace9ac.js";import M from"./pages-movie-bet-bet.90bbb6e9.js";import S from"./pages-nearby-nearby.2e4cf597.js";import G from"./pages-mine-index.283c271a.js";import{s as U}from"./scan.863c663b.js";import"./mp-html.e78a65ee.js";import"./uni-app.es.423bf3f3.js";import"./emoji.4b4cb326.js";import"./status.d6b9e55f.js";import"./uni-icons.88d2def1.js";import"./nan_b.1f2ad1df.js";import"./common.b05f9007.js";const q=e(s),z=t(s),{unread:A,sysUnread:B}=n(q);const H=a({components:{message:P,contacts:I,compass:L,mine:G,movice:T,opengroup:F,bet:M,nearby:S},watch:{},data:()=>({globalConfig:z.globalConfig,PageCur:"home",PageName:"首页",TabCur:0,modelName:!1,navList:[{name:"home",title:"首页",notice:0},{name:"message",title:"消息",notice:A},{name:"serve",title:"客服",notice:0},{name:"contacts",title:"通讯录",notice:B},{name:"mine",title:"我的",notice:0}],userinfo:{},tabs:0,run_fun:!0,tabs_arr:[{id:1,name:"影院",ifshow:!1},{id:2,name:"福利群",ifshow:!1},{id:3,name:"投票",ifshow:!1},{id:4,name:"附近的人",ifshow:!1}]}),onShow(){},onLoad(){},mounted(){this.$refs.child_action.get_banner(1),this.$refs.child_action.get_notice(2),this.$refs.child_action.getList(1,6,1),this.$refs.child_action.getList(2,10,2),i(),this.initContacts(),o("socketStatus",(a=>{a&&this.initContacts()})),this.userinfo=c("userInfo")},methods:{run_child(){""!==c("iffirst")&&(this.$refs.child_action.get_banner(1),this.$refs.child_action.getList(1,6,1),this.$refs.child_action.getList(2,10,2),l("iffirst",!0))},closeModel(){this.modelName=!1},scan(){U.scanQr()},NavChange:function(a){"mine"==a.name?r({url:"/pages/mine/index"}):"message"==a.name?r({url:"/pages/index/mv_index"}):"contacts"==a.name?m({url:"/pages/contacts/index"}):"compass"==a.name?r({url:"/pages/compass/index"}):"serve"==a.name?r({url:"/pages/movie/kefu/kefu"}):(this.PageCur=a.name,this.PageName=a.title)},showContacts(){1==this.TabCur?this.TabCur=0:this.TabCur=1},initContacts(){this.modelName="",this.$api.msgApi.initContacts().then((a=>{q.sysUnread=a.count,q.initContacts(a.data)}))},addGroup(){r({url:"/pages/index/userSelection?type=1"})},addFriend(){r({url:"/pages/contacts/search"})},search(){const a="message"==this.PageCur?1:2;r({url:"/pages/index/search?type="+a})},tab_change(a){this.tabs=a,this.PageName=this.tabs_arr[a].name,this.run_fun=!1,0==a&&(this.run_fun=!0,this.$refs.child_action.get_userinfo()),2==a&&this.$refs.bet_action.run_fun()}}},[["render",function(a,e,s,t,n,i){const o=w("cu-custom"),c=g,l=w("movice"),r=w("opengroup"),m=w("bet"),P=w("nearby"),I=$,L=N;return u(),d(c,null,{default:f((()=>[p(o,{bgColor:"bg-gradual-pink",isBack:!1},{backText:f((()=>[])),content:f((()=>[h(_(n.PageName),1)])),_:1}),p(c,{class:"tab_mline"},{default:f((()=>[(u(!0),b(k,null,C(n.tabs_arr,((a,e)=>(u(),d(c,{class:y(["tab_mline_zi",{tab_hover:n.tabs==e}]),key:e,onClick:a=>i.tab_change(e)},{default:f((()=>[h(_(a.name),1)])),_:2},1032,["onClick","class"])))),128))])),_:1}),p(c,null,{default:f((()=>[j(p(l,{run:n.run_fun,ref:"child_action"},null,8,["run"]),[[v,0==n.tabs]]),1==n.tabs?(u(),d(r,{key:0})):x("",!0),j(p(m,{ref:"bet_action"},null,512),[[v,2==n.tabs]]),3==n.tabs?(u(),d(P,{key:1})):x("",!0)])),_:1}),3!=n.tabs?(u(),d(c,{key:0,class:"cu-bar tabbar bg-white shadow foot"},{default:f((()=>[(u(!0),b(k,null,C(n.navList,((a,e)=>(u(),d(c,{class:"action",onClick:e=>i.NavChange(a),key:e,"data-cur":"message"},{default:f((()=>[p(c,{class:"cuIcon-cu-image"},{default:f((()=>[p(I,{src:"/static/image/tabbar/"+[a.name]+[n.PageCur==a.name?"-active":""]+".svg"},null,8,["src"]),a.notice>0?(u(),d(c,{key:0,class:"cu-tag badge"},{default:f((()=>[h(_(a.notice),1)])),_:2},1024)):x("",!0)])),_:2},1024),p(c,{class:y(n.PageCur==a.name?"text-mauve":"text-black")},{default:f((()=>[h(_(a.title),1)])),_:2},1032,["class"])])),_:2},1032,["onClick"])))),128))])),_:1})):x("",!0),p(c,{class:y(["cu-modal bottom-modal","add"==n.modelName?"show":""]),onClick:e[4]||(e[4]=a=>n.modelName="")},{default:f((()=>[p(c,{class:"cu-dialog"},{default:f((()=>[p(c,{class:"manage-content"},{default:f((()=>[p(c,{class:"cu-list menu bg-white"},{default:f((()=>[p(c,{class:"cu-item",onClick:e[0]||(e[0]=a=>{i.initContacts()})},{default:f((()=>[p(c,{class:"content padding-tb-sm"},{default:f((()=>[p(L,{class:"cuIcon-refresh"}),p(L,null,{default:f((()=>[h("更新消息列表")])),_:1})])),_:1})])),_:1}),void 0!==n.userinfo.role&&1==n.userinfo.role?(u(),d(c,{key:0},{default:f((()=>[2==n.globalConfig.sysInfo.runMode?(u(),d(c,{key:0,class:"cu-item",onClick:e[1]||(e[1]=a=>i.addFriend())},{default:f((()=>[p(c,{class:"content padding-tb-sm"},{default:f((()=>[p(L,{class:"cuIcon-friendadd"}),p(L,null,{default:f((()=>[h("添加朋友")])),_:1})])),_:1})])),_:1})):x("",!0),p(c,{class:"cu-item",onClick:e[2]||(e[2]=a=>i.addGroup())},{default:f((()=>[p(c,{class:"content padding-tb-sm"},{default:f((()=>[p(L,{class:"cuIcon-friend"}),p(L,null,{default:f((()=>[h("创建群聊")])),_:1})])),_:1})])),_:1})])),_:1})):x("",!0),p(c,{class:"parting-line-5"}),p(c,{class:"cu-item",onClick:e[3]||(e[3]=a=>n.modelName="")},{default:f((()=>[p(c,{class:"content padding-tb-sm"},{default:f((()=>[p(L,{class:"c-red"},{default:f((()=>[h("取消")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["class"])])),_:1})}],["__scopeId","data-v-43cf84ae"]]);export{H as default};