import{_ as a,u as s,s as e,a as t,b as n,h as c,g as o,$ as l,n as i,d as u,o as d,e as m,w as r,i as g,f,l as p,j as C,t as h,p as b,k as _,r as k,F as x,x as y,q as w,y as j}from"./index-cd0ab6d8.js";import{m as v}from"./index.befeee05.js";import I from"./pages-contacts-index.6f947b59.js";import P from"./pages-compass-index.540656e5.js";import N from"./pages-mine-index.18173e13.js";import{s as T}from"./scan.1a6c8fa6.js";import"./mp-html.40725cf4.js";import"./uni-app.es.224f57fe.js";import"./emoji.4b4cb326.js";import"./status.bacbd1e6.js";const F=s(e),L=t(e),{unread:M,sysUnread:S}=n(F);const G=a({components:{message:v,contacts:I,compass:P,mine:N},data:()=>({globalConfig:L.globalConfig,PageCur:"message",PageName:"消息",TabCur:0,modelName:!1,navList:[{name:"home",title:"首页",notice:0},{name:"message",title:"消息",notice:M},{name:"serve",title:"客服",notice:0},{name:"contacts",title:"通讯录",notice:S},{name:"mine",title:"我的",notice:0}],userinfo:{},tabs:0,tabs_arr:[{id:1,name:"影院",ifshow:!1},{id:2,name:"群",ifshow:!1},{id:3,name:"探索",ifshow:!1},{id:4,name:"附近的人",ifshow:!1}]}),onShow(){},mounted(){c(),o("allContacts").length||this.initContacts(),l("socketStatus",(a=>{a&&this.initContacts()})),this.userinfo=o("userInfo")},methods:{closeModel(){this.modelName=!1},scan(){T.scanQr()},NavChange:function(a){"mine"==a.name?i({url:"/pages/mine/index"}):"contacts"==a.name?u({url:"/pages/contacts/index"}):"compass"==a.name?i({url:"/pages/compass/index"}):"serve"==a.name?i({url:"/pages/movie/kefu/kefu"}):"home"==a.name&&u({url:"/pages/index/index"})},showContacts(){1==this.TabCur?this.TabCur=0:this.TabCur=1},initContacts(){this.modelName="",this.$api.msgApi.initContacts().then((a=>{F.sysUnread=a.count,F.initContacts(a.data)}))},addGroup(){i({url:"/pages/index/userSelection?type=1"})},addFriend(){i({url:"/pages/contacts/search"})},search(){const a="message"==this.PageCur?1:2;i({url:"/pages/index/search?type="+a})},tab_change(a){this.tabs=a}}},[["render",function(a,s,e,t,n,c){const o=y,l=g,i=w("cu-custom"),u=w("message"),v=w("contacts"),I=j;return d(),m(l,null,{default:r((()=>[f(i,{bgColor:"bg-white"},{backText:r((()=>["message"==n.PageCur||"contacts"==n.PageCur?(d(),m(l,{key:0,class:"f-20 ml-10 mr-10",onClick:s[0]||(s[0]=a=>c.search())},{default:r((()=>[f(o,{class:"cuIcon-search",style:{"margin-left":"-10px"}})])),_:1})):p("",!0)])),content:r((()=>[C(h(n.PageName),1)])),right:r((()=>["contacts"==n.PageCur&&n.globalConfig&&n.globalConfig.demon_mode?(d(),m(l,{key:0,class:"f-20 ml-10 mr-10",onClick:s[1]||(s[1]=a=>c.showContacts())},{default:r((()=>[f(o,{class:b(["f-24",n.TabCur?"cuIcon-peoplelist":"cuIcon-friend"])},null,8,["class"])])),_:1})):p("",!0),"message"==n.PageCur?(d(),m(l,{key:1,class:"f-20 ml-10 mr-10",onClick:s[2]||(s[2]=a=>n.modelName="add")},{default:r((()=>[f(o,{class:"cuIcon-add f-28"})])),_:1})):p("",!0)])),_:1}),f(l,null,{default:r((()=>["message"==n.PageCur?(d(),m(u,{key:0})):p("",!0),"contacts"==n.PageCur?(d(),m(v,{key:1,TabCur:n.TabCur},null,8,["TabCur"])):p("",!0)])),_:1}),f(l,{class:"cu-bar tabbar bg-white shadow foot"},{default:r((()=>[(d(!0),_(x,null,k(n.navList,((a,s)=>(d(),m(l,{class:"action",onClick:s=>c.NavChange(a),key:s,"data-cur":"message"},{default:r((()=>[f(l,{class:"cuIcon-cu-image"},{default:r((()=>[f(I,{src:"/static/image/tabbar/"+[a.name]+[n.PageCur==a.name?"-active":""]+".svg"},null,8,["src"]),a.notice>0?(d(),m(l,{key:0,class:"cu-tag badge"},{default:r((()=>[C(h(a.notice),1)])),_:2},1024)):p("",!0)])),_:2},1024),f(l,{class:b(n.PageCur==a.name?"text-mauve":"text-black")},{default:r((()=>[C(h(a.title),1)])),_:2},1032,["class"])])),_:2},1032,["onClick"])))),128))])),_:1}),f(l,{class:b(["cu-modal bottom-modal","add"==n.modelName?"show":""]),onClick:s[7]||(s[7]=a=>n.modelName="")},{default:r((()=>[f(l,{class:"cu-dialog"},{default:r((()=>[f(l,{class:"manage-content"},{default:r((()=>[f(l,{class:"cu-list menu bg-white"},{default:r((()=>[f(l,{class:"cu-item",onClick:s[3]||(s[3]=a=>{c.initContacts()})},{default:r((()=>[f(l,{class:"content padding-tb-sm"},{default:r((()=>[f(o,{class:"cuIcon-refresh"}),f(o,null,{default:r((()=>[C("更新消息列表")])),_:1})])),_:1})])),_:1}),void 0!==n.userinfo.role&&1==n.userinfo.role?(d(),m(l,{key:0},{default:r((()=>[2==n.globalConfig.sysInfo.runMode?(d(),m(l,{key:0,class:"cu-item",onClick:s[4]||(s[4]=a=>c.addFriend())},{default:r((()=>[f(l,{class:"content padding-tb-sm"},{default:r((()=>[f(o,{class:"cuIcon-friendadd"}),f(o,null,{default:r((()=>[C("添加朋友")])),_:1})])),_:1})])),_:1})):p("",!0),f(l,{class:"cu-item",onClick:s[5]||(s[5]=a=>c.addGroup())},{default:r((()=>[f(l,{class:"content padding-tb-sm"},{default:r((()=>[f(o,{class:"cuIcon-friend"}),f(o,null,{default:r((()=>[C("创建群聊")])),_:1})])),_:1})])),_:1})])),_:1})):p("",!0),f(l,{class:"parting-line-5"}),f(l,{class:"cu-item",onClick:s[6]||(s[6]=a=>n.modelName="")},{default:r((()=>[f(l,{class:"content padding-tb-sm"},{default:r((()=>[f(o,{class:"c-red"},{default:r((()=>[C("取消")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["class"])])),_:1})}],["__scopeId","data-v-86dacb85"]]);export{G as default};
