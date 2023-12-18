import{_ as a,u as s,s as e,a as t,b as n,h as c,g as o,$ as l,n as i,d as u,o as m,e as d,w as r,i as f,f as g,m as p,j as C,t as h,p as b,k as _,r as k,F as x,x as y,q as w,y as j}from"./index-7ddb419c.js";import{m as v}from"./index.7efd25c4.js";import I from"./pages-contacts-index.be054646.js";import P from"./pages-compass-index.06e19ad3.js";import N from"./pages-mine-index.1e597479.js";import{s as T}from"./scan.0482b83a.js";import"./mp-html.943e6e93.js";import"./uni-app.es.9f78534b.js";import"./emoji.4b4cb326.js";import"./status.2680a495.js";const F=s(e),G=t(e),{unread:L,sysUnread:S}=n(F);const M=a({components:{message:v,contacts:I,compass:P,mine:N},data:()=>({globalConfig:G.globalConfig,PageCur:"message",PageName:"消息",TabCur:0,modelName:!1,navList:[{name:"home",title:"首页",notice:0},{name:"message",title:"消息",notice:L},{name:"serve",title:"客服",notice:0},{name:"contacts",title:"通讯录",notice:S},{name:"mine",title:"我的",notice:0}],userinfo:{},tabs:0,tabs_arr:[{id:1,name:"影院",ifshow:!1},{id:2,name:"群",ifshow:!1},{id:3,name:"探索",ifshow:!1},{id:4,name:"附近的人",ifshow:!1}]}),onShow(){},mounted(){c(),o("allContacts").length||this.initContacts(),l("socketStatus",(a=>{a&&this.initContacts()})),this.userinfo=o("userInfo")},methods:{closeModel(){this.modelName=!1},scan(){T.scanQr()},NavChange:function(a){"mine"==a.name?i({url:"/pages/mine/index"}):"contacts"==a.name?u({url:"/pages/contacts/index"}):"compass"==a.name?i({url:"/pages/compass/index"}):"serve"==a.name?i({url:"/pages/movie/kefu/kefu"}):"home"==a.name&&u({url:"/pages/index/index"})},showContacts(){1==this.TabCur?this.TabCur=0:this.TabCur=1},initContacts(){this.modelName="",this.$api.msgApi.initContacts().then((a=>{F.sysUnread=a.count,F.initContacts(a.data)}))},addGroup(){i({url:"/pages/index/userSelection?type=1"})},addFriend(){i({url:"/pages/contacts/search"})},search(){const a="message"==this.PageCur?1:2;i({url:"/pages/index/search?type="+a})},tab_change(a){this.tabs=a}}},[["render",function(a,s,e,t,n,c){const o=y,l=f,i=w("cu-custom"),u=w("message"),v=w("contacts"),I=j;return m(),d(l,null,{default:r((()=>[g(i,{bgColor:"bg-white"},{backText:r((()=>["message"==n.PageCur||"contacts"==n.PageCur?(m(),d(l,{key:0,class:"f-20 ml-10 mr-10",onClick:s[0]||(s[0]=a=>c.search())},{default:r((()=>[g(o,{class:"cuIcon-search",style:{"margin-left":"-10px"}})])),_:1})):p("",!0)])),content:r((()=>[C(h(n.PageName),1)])),right:r((()=>["contacts"==n.PageCur&&n.globalConfig&&n.globalConfig.demon_mode?(m(),d(l,{key:0,class:"f-20 ml-10 mr-10",onClick:s[1]||(s[1]=a=>c.showContacts())},{default:r((()=>[g(o,{class:b(["f-24",n.TabCur?"cuIcon-peoplelist":"cuIcon-friend"])},null,8,["class"])])),_:1})):p("",!0),"message"==n.PageCur?(m(),d(l,{key:1,class:"f-20 ml-10 mr-10",onClick:s[2]||(s[2]=a=>n.modelName="add")},{default:r((()=>[g(o,{class:"cuIcon-add f-28"})])),_:1})):p("",!0)])),_:1}),g(l,null,{default:r((()=>["message"==n.PageCur?(m(),d(u,{key:0})):p("",!0),"contacts"==n.PageCur?(m(),d(v,{key:1,TabCur:n.TabCur},null,8,["TabCur"])):p("",!0)])),_:1}),g(l,{class:"cu-bar tabbar bg-white shadow foot"},{default:r((()=>[(m(!0),_(x,null,k(n.navList,((a,s)=>(m(),d(l,{class:"action",onClick:s=>c.NavChange(a),key:s,"data-cur":"message"},{default:r((()=>[g(l,{class:"cuIcon-cu-image"},{default:r((()=>[g(I,{src:"/static/image/tabbar/"+[a.name]+[n.PageCur==a.name?"-active":""]+".svg"},null,8,["src"]),a.notice>0?(m(),d(l,{key:0,class:"cu-tag badge"},{default:r((()=>[C(h(a.notice),1)])),_:2},1024)):p("",!0)])),_:2},1024),g(l,{class:b(n.PageCur==a.name?"text-mauve":"text-black")},{default:r((()=>[C(h(a.title),1)])),_:2},1032,["class"])])),_:2},1032,["onClick"])))),128))])),_:1}),g(l,{class:b(["cu-modal bottom-modal","add"==n.modelName?"show":""]),onClick:s[7]||(s[7]=a=>n.modelName="")},{default:r((()=>[g(l,{class:"cu-dialog"},{default:r((()=>[g(l,{class:"manage-content"},{default:r((()=>[g(l,{class:"cu-list menu bg-white"},{default:r((()=>[g(l,{class:"cu-item",onClick:s[3]||(s[3]=a=>{c.initContacts()})},{default:r((()=>[g(l,{class:"content padding-tb-sm"},{default:r((()=>[g(o,{class:"cuIcon-refresh"}),g(o,null,{default:r((()=>[C("更新消息列表")])),_:1})])),_:1})])),_:1}),void 0!==n.userinfo.role&&1==n.userinfo.role?(m(),d(l,{key:0},{default:r((()=>[2==n.globalConfig.sysInfo.runMode?(m(),d(l,{key:0,class:"cu-item",onClick:s[4]||(s[4]=a=>c.addFriend())},{default:r((()=>[g(l,{class:"content padding-tb-sm"},{default:r((()=>[g(o,{class:"cuIcon-friendadd"}),g(o,null,{default:r((()=>[C("添加朋友")])),_:1})])),_:1})])),_:1})):p("",!0),g(l,{class:"cu-item",onClick:s[5]||(s[5]=a=>c.addGroup())},{default:r((()=>[g(l,{class:"content padding-tb-sm"},{default:r((()=>[g(o,{class:"cuIcon-friend"}),g(o,null,{default:r((()=>[C("创建群聊")])),_:1})])),_:1})])),_:1})])),_:1})):p("",!0),g(l,{class:"parting-line-5"}),g(l,{class:"cu-item",onClick:s[6]||(s[6]=a=>n.modelName="")},{default:r((()=>[g(l,{class:"content padding-tb-sm"},{default:r((()=>[g(o,{class:"c-red"},{default:r((()=>[C("取消")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["class"])])),_:1})}],["__scopeId","data-v-0acf0ae4"]]);export{M as default};
