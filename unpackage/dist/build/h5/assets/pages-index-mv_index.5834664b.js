import{_ as a,u as s,s as e,a as t,b as n,h as o,g as l,$ as c,n as i,d,o as u,e as m,w as r,i as g,f,j as p,t as h,q as C,m as _,k as b,r as k,F as v,y as x,x as y,z as w}from"./index-d492f317.js";import{m as j}from"./index.78d4f369.js";import N from"./pages-contacts-index.070abff1.js";import $ from"./pages-compass-index.9b8e0208.js";import I from"./pages-mine-index.260ccf6b.js";import{s as P}from"./scan.364f081c.js";import"./mp-html.781e958b.js";import"./uni-app.es.bb0d54d8.js";import"./guan_l.692a6680.js";import"./status.c83eadfd.js";import"./men2.a2cf875e.js";const T=s(e),L=t(e),{unread:S,sysUnread:F}=n(T);const M=a({components:{message:j,contacts:N,compass:$,mine:I},data(){return{globalConfig:L.globalConfig,PageCur:"message",PageName:this.$t("nav.message"),TabCur:0,modelName:!1,navList:[],userinfo:{},tabs:0,tabs_arr:[{id:1,name:"影院",ifshow:!1},{id:2,name:"群",ifshow:!1},{id:3,name:"探索",ifshow:!1},{id:4,name:"附近的人",ifshow:!1}]}},onShow(){this.navList=[{name:"home",title:this.$t("nav.home"),notice:0},{name:"message",title:this.$t("nav.message"),notice:S},{name:"serve",title:this.$t("nav.serve"),notice:0},{name:"contacts",title:this.$t("nav.contacts"),notice:F},{name:"mine",title:this.$t("nav.mine"),notice:0}]},onLoad(){},mounted(){o(),l("allContacts").length||this.initContacts(),c("socketStatus",(a=>{a&&this.initContacts()})),this.userinfo=l("userInfo")},methods:{closeModel(){this.modelName=!1},scan(){P.scanQr()},NavChange:function(a){"mine"==a.name?i({url:"/pages/mine/index"}):"contacts"==a.name?d({url:"/pages/contacts/index"}):"compass"==a.name?i({url:"/pages/compass/index"}):"serve"==a.name?i({url:"/pages/movie/kefu/kefu"}):"home"==a.name&&d({url:"/pages/index/index"})},showContacts(){1==this.TabCur?this.TabCur=0:this.TabCur=1},initContacts(){this.modelName="",this.$api.msgApi.initContacts().then((a=>{T.sysUnread=a.count,T.initContacts(a.data)}))},addGroup(){i({url:"/pages/index/userSelection?type=1"})},addFriend(){i({url:"/pages/contacts/search"})},search(){const a="message"==this.PageCur?1:2;i({url:"/pages/index/search?type="+a})},tab_change(a){this.tabs=a}}},[["render",function(a,s,e,t,n,o){const l=x,c=g,i=y("cu-custom"),d=y("message"),j=y("contacts"),N=w;return u(),m(c,null,{default:r((()=>[f(i,{bgColor:"bg-gradual-pink"},{backText:r((()=>[])),content:r((()=>[p(h(n.PageName),1)])),right:r((()=>["contacts"==n.PageCur&&n.globalConfig&&n.globalConfig.demon_mode?(u(),m(c,{key:0,class:"f-20 ml-10 mr-10",onClick:s[0]||(s[0]=a=>o.showContacts())},{default:r((()=>[f(l,{class:C(["f-24",n.TabCur?"cuIcon-peoplelist":"cuIcon-friend"])},null,8,["class"])])),_:1})):_("",!0),"message"==n.PageCur?(u(),m(c,{key:1,class:"f-20 ml-10 mr-10",onClick:s[1]||(s[1]=a=>n.modelName="add")},{default:r((()=>[f(l,{class:"cuIcon-add f-28"})])),_:1})):_("",!0)])),_:1}),f(c,null,{default:r((()=>["message"==n.PageCur?(u(),m(d,{key:0})):_("",!0),"contacts"==n.PageCur?(u(),m(j,{key:1,TabCur:n.TabCur},null,8,["TabCur"])):_("",!0)])),_:1}),(u(),m(c,{class:"cu-bar tabbar bg-white shadow foot",key:a.keyIndex},{default:r((()=>[(u(!0),b(v,null,k(n.navList,((a,s)=>(u(),m(c,{class:"action",onClick:s=>o.NavChange(a),"data-cur":"message"},{default:r((()=>[f(c,{class:"cuIcon-cu-image"},{default:r((()=>[f(N,{src:"/static/image/tabbar/"+[a.name]+[n.PageCur==a.name?"-active":""]+".svg"},null,8,["src"]),a.notice>0?(u(),m(c,{key:0,class:"cu-tag badge"},{default:r((()=>[p(h(a.notice),1)])),_:2},1024)):_("",!0)])),_:2},1024),f(c,{class:C(n.PageCur==a.name?"text-mauve":"text-black")},{default:r((()=>[p(h(a.title),1)])),_:2},1032,["class"])])),_:2},1032,["onClick"])))),256))])),_:1})),f(c,{class:C(["cu-modal bottom-modal","add"==n.modelName?"show":""]),onClick:s[6]||(s[6]=a=>n.modelName="")},{default:r((()=>[f(c,{class:"cu-dialog"},{default:r((()=>[f(c,{class:"manage-content"},{default:r((()=>[f(c,{class:"cu-list menu bg-white"},{default:r((()=>[f(c,{class:"cu-item",onClick:s[2]||(s[2]=a=>{o.initContacts()})},{default:r((()=>[f(c,{class:"content padding-tb-sm"},{default:r((()=>[f(l,{class:"cuIcon-refresh"}),f(l,null,{default:r((()=>[p(h(a.$t("talk.reload")),1)])),_:1})])),_:1})])),_:1}),void 0!==n.userinfo.role&&1==n.userinfo.role?(u(),m(c,{key:0},{default:r((()=>[2==n.globalConfig.sysInfo.runMode?(u(),m(c,{key:0,class:"cu-item",onClick:s[3]||(s[3]=a=>o.addFriend())},{default:r((()=>[f(c,{class:"content padding-tb-sm"},{default:r((()=>[f(l,{class:"cuIcon-friendadd"}),f(l,null,{default:r((()=>[p(h(a.$t("talk.add_friend")),1)])),_:1})])),_:1})])),_:1})):_("",!0),f(c,{class:"cu-item",onClick:s[4]||(s[4]=a=>o.addGroup())},{default:r((()=>[f(c,{class:"content padding-tb-sm"},{default:r((()=>[f(l,{class:"cuIcon-friend"}),f(l,null,{default:r((()=>[p(h(a.$t("talk.new_group")),1)])),_:1})])),_:1})])),_:1})])),_:1})):_("",!0),f(c,{class:"parting-line-5"}),f(c,{class:"cu-item",onClick:s[5]||(s[5]=a=>n.modelName="")},{default:r((()=>[f(c,{class:"content padding-tb-sm"},{default:r((()=>[f(l,{class:"c-red"},{default:r((()=>[p(h(a.$t("talk.close")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["class"])])),_:1})}],["__scopeId","data-v-78133e78"]]);export{M as default};
