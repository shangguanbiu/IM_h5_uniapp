import{_ as a,a as t,u as s,s as e,b as n,g as i,$ as l,d as o,n as c,o as d,e as r,w as u,i as m,f as g,q as p,j as h,k as f,r as _,F as C,C as y,z as x,y as b,t as k,m as v}from"./index-784797a9.js";const w=""+new URL("nearby_ico-489ec025.jpg",import.meta.url).href,I=t(),L=s(e);t(e);const{unread:B,sysUnread:T}=n(L);const N=a({data:()=>({isCard:!0,userInfo:I.userInfo,paddingB:0,current:0,list:[],total:0,params:{page:1,limit:10,is_mine:0},PageCur:"compass",navList:[{name:"message",title:"消息",notice:B},{name:"contacts",title:"通讯录",notice:T},{name:"compass",title:"探索",notice:0},{name:"mine",title:"我的",notice:0}]}),created:function(){this.paddingB=this.inlineTools,this.getList()},mounted(){var a=document.getElementsByClassName("uni-page-head-hd")[0];a&&(a.style.display="none"),i("allContacts").length||this.initContacts(),l("socketStatus",(a=>{a&&this.initContacts()}))},methods:{NavChange(a){console.log("fff",a),"message"==a.name?o({url:"/pages/index/index"}):"contacts"==a.name?o({url:"/pages/contacts/index"}):"compass"==a.name?c({url:"/pages/compass/index"}):c({url:"/pages/mine/index"})},initContacts(){this.modelName="",this.$api.msgApi.initContacts().then((a=>{L.sysUnread=a.count,L.initContacts(a.data)}))},IsCard(a){this.isCard=a.detail.value},getList(){this.$api.third_openApi.thirdList(this.params).then((a=>{0==a.code&&(this.list=a.data.data,this.total=a.count)}))},To_third(a,t){i("userInfo"),c(1==a?{url:"/pages/nearby/nearby"}:2==a?{url:"/pages/opengroup/opengroup"}:{url:"/pages/movie/index/index"})}}},[["render",function(a,t,s,e,n,i){const l=x,o=m,c=b;return d(),r(o,null,{default:u((()=>[g(o,{style:y({paddingBottom:n.paddingB+"px"})},{default:u((()=>[g(o,{style:{"padding-bottom":"30rpx"}},{default:u((()=>[g(o,{style:{padding:"5px 10px"},onClick:t[0]||(t[0]=a=>i.To_third(1,""))},{default:u((()=>[g(l,{src:w,mode:"widthFix",style:{width:"100%"}})])),_:1}),g(o,{class:"cu-list menu mt-10"},{default:u((()=>[g(o,{class:"cu-item arrow",onClick:t[1]||(t[1]=a=>i.To_third(2,""))},{default:u((()=>[g(o,{class:p(["cu-avatar mr-15 group-bg","round"])}),g(o,{class:"content"},{default:u((()=>[g(c,{class:"c-333"},{default:u((()=>[h("公开的群")])),_:1})])),_:1})])),_:1}),(d(!0),f(C,null,_(n.list,((a,t)=>(d(),r(o,{class:"cu-item arrow",key:t,onClick:t=>i.To_third(3,a)},{default:u((()=>[g(o,{class:p(["cu-avatar mr-15","round"])},{default:u((()=>[g(l,{src:a.logo,mode:"widthFix",style:{width:"100%"}},null,8,["src"])])),_:2},1024),g(o,{class:"content"},{default:u((()=>[g(c,{class:"c-333"},{default:u((()=>[h(k(a.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}),g(o,{class:"cu-bar tabbar bg-white shadow foot"},{default:u((()=>[(d(!0),f(C,null,_(n.navList,((a,t)=>(d(),r(o,{class:"action",onClick:t=>i.NavChange(a),key:t,"data-cur":"message"},{default:u((()=>[g(o,{class:"cuIcon-cu-image"},{default:u((()=>[g(l,{src:"/static/image/tabbar/"+[a.name]+[n.PageCur==a.name?"-active":""]+".svg"},null,8,["src"]),a.notice>0?(d(),r(o,{key:0,class:"cu-tag badge"},{default:u((()=>[h(k(a.notice),1)])),_:2},1024)):v("",!0)])),_:2},1024),g(o,{class:p(n.PageCur==a.name?"text-green":"text-black")},{default:u((()=>[h(k(a.title),1)])),_:2},1032,["class"])])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["style"])])),_:1})}],["__scopeId","data-v-4eeacd74"]]);export{N as default};
