import{_ as t,o as e,e as a,w as s,f as l,k as n,r as i,F as c,i as o,S as r,p as u,j as d,t as m,a0 as p,m as h,x as f,u as g,s as _,a as y,b,g as x,n as C,d as k,B as v,N as T,l as w,v as I,q as S,O as B,a1 as L,y as j}from"./index-45871c8e.js";import{s as D}from"./status.d6b9e55f.js";const P=t({name:"breadcrum",props:{tree:{type:Array,default:()=>({})},icon:{type:String,default:()=>"cuIcon-right"}},data:()=>({}),methods:{open(t){this.$emit("openBread",t)}}},[["render",function(t,g,_,y,b,x){const C=o,k=f,v=r;return e(),a(C,null,{default:s((()=>[l(v,{class:"folder-wap","scroll-x":!0,"scroll-left":99999999},{default:s((()=>[l(C,{class:"im-flex im-justify-content-start im-align-items-center"},{default:s((()=>[(e(!0),n(c,null,i(_.tree,((n,i)=>(e(),a(C,{class:"tab-item im-flex im-justify-content-start im-align-items-center",onClick:t=>x.open(n),key:i},{default:s((()=>[l(C,{class:u(["mar10 lz-tree-name font-color-999",{"font-color-333":i==_.tree.length-1}])},{default:s((()=>[d(m(n.name),1)])),_:2},1032,["class"]),p(t.$slots,"icon",{},(()=>[i<_.tree.length-1?(e(),a(k,{key:0,class:u(["font-color-999",[_.icon?_.icon:"cuIcon-right"]])},null,8,["class"])):h("",!0)]),!0)])),_:2},1032,["onClick"])))),128))])),_:3})])),_:3})])),_:3})}],["__scopeId","data-v-b66ec5ca"]]),M=g(_),N=y(_),{unread:O,contacts:V,sysUnread:z}=b(M);const A=t({components:{breadcurm:P,statusPoint:D},name:"contacts",props:{},data:()=>({PageCur:"contacts",navList:[{name:"home",title:"首页",notice:0},{name:"message",title:"消息",notice:O},{name:"serve",title:"客服",notice:0},{name:"contacts",title:"通讯录",notice:z},{name:"mine",title:"我的",notice:0}],TabCur:0,tabbarH:50,hidden:!0,listCurID:"",list:[],listCur:"",total:0,scrollLeft:0,msgs:V,unread:z,globalConfig:N.globalConfig,appSetting:N.appSetting,tree:[{id:1,name:"技术部"},{id:2,name:"产品部"},{id:3,name:"信息部"}],depList:[{id:1,name:"技术部"},{id:2,name:"财务部"}],userList:[{id:1,realname:"张三",avatar:"https://api.multiavatar.com/raingad1.png?apikey=zdvXV3W4MjwhP9"},{id:2,realname:"李四",avatar:"https://api.multiavatar.com/raingad2.png?apikey=zdvXV3W4MjwhP9"}],tabList:["普通通讯录","企业通讯录"],contacts:[],userinfo:{}}),watch:{msgs(t){this.initContacts(t)}},created(){this.listCur=this.contacts[0]},mounted(){this.initContacts(this.msgs),this.userinfo=x("userInfo")},methods:{NavChange:function(t){"mine"==t.name?C({url:"/pages/mine/index"}):"message"==t.name?C({url:"/pages/index/mv_index"}):"compass"==t.name?C({url:"/pages/compass/index"}):"home"==t.name?k({url:"/pages/index/index"}):"serve"==t.name&&C({url:"/pages/movie/kefu/kefu"})},initContacts(t){const e=JSON.parse(JSON.stringify(t)).filter((t=>0==t.is_group));this.total=e.length;const a=e.sort(((t,e)=>"#"===t.index?1:"#"===e.index?-1:t.index.localeCompare(e.index,"zh"))).reduce(((t,e)=>{const a=e.index,s=t.findIndex((t=>t.name===a));return-1===s?t.push({name:a,children:[e]}):t[s].children.push(e),t}),[]);this.contacts=a},openDep(t){},openDetails(t){C({url:"/pages/contacts/detail?id="+t.id})},openGroup(){C({url:"/pages/contacts/group"})},openFriend(){C({url:"/pages/contacts/friend"})},tabSelect(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)},getCur(t){this.hidden=!1,this.listCur=this.contacts[t.target.id].name},setCur(t){this.hidden=!0,this.listCur=this.listCur},tMove(t){let e=t.touches[0].clientY,a=this.boxTop,s=this;if(e>a){let t=parseInt((e-a)/20);this.listCur=s.contacts[t].name}},tStart(){this.hidden=!1},tEnd(){this.hidden=!0,this.listCurID=this.listCur},indexSelect(t){let e=this,a=this.barHeight,s=this.contacts,l=Math.ceil(s.length*t.detail.y/a);for(let n=0;n<s.length;n++)if(l<n+1)return e.listCur=s[n].name,e.movableY=20*n,!1}}},[["render",function(t,p,g,_,y,b){const x=o,C=f,k=S("statusPoint"),D=S("Empty"),P=r,M=B,N=S("breadcurm"),O=L,V=j;return e(),a(x,null,{default:s((()=>[0==y.TabCur?(e(),a(P,{key:0,"scroll-y":"",class:"indexes","scroll-into-view":"indexes-"+y.listCurID,style:v([{height:"calc(100vh - "+(t.CustomBar+t.inlineTools+t.StatusBar)+"px)"}]),"scroll-with-animation":!0,"enable-back-to-top":!0},{default:s((()=>[l(x,{style:{"padding-bottom":"30rpx"}},{default:s((()=>[l(x,{class:"cu-list menu"},{default:s((()=>[l(x,{class:"cu-item arrow",onClick:b.openFriend},{default:s((()=>[l(x,{class:u(["cu-avatar mr-15 invite-bg",y.appSetting.circleAvatar?"round":"radius"])},null,8,["class"]),l(x,{class:"content"},{default:s((()=>[l(C,{class:"c-333"},{default:s((()=>[d("新邀请")])),_:1})])),_:1}),l(x,{class:"action"},{default:s((()=>[y.unread>0?(e(),a(x,{key:0,class:"cu-tag round bg-red sm"},{default:s((()=>[d(m(y.unread),1)])),_:1})):h("",!0)])),_:1})])),_:1},8,["onClick"]),l(x,{class:"cu-item arrow",onClick:b.openGroup},{default:s((()=>[l(x,{class:u(["cu-avatar mr-15 group-bg",y.appSetting.circleAvatar?"round":"radius"])},null,8,["class"]),l(x,{class:"content"},{default:s((()=>[l(C,{class:"c-333"},{default:s((()=>[d("群聊")])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1}),(e(!0),n(c,null,i(y.contacts,((t,o)=>(e(),a(x,{key:o,class:u("indexItem-"+t.name),id:"indexes-"+t.name,"data-index":t.name},{default:s((()=>[l(x,{class:"padding"},{default:s((()=>[d(m(t.name),1)])),_:2},1024),l(x,{class:"cu-list menu no-padding"},{default:s((()=>[(e(!0),n(c,null,i(t.children,((t,n)=>(e(),a(x,{class:"cu-item",key:n,onClick:e=>b.openDetails(t)},{default:s((()=>[l(x,{class:u(["cu-avatar mr-15",y.appSetting.circleAvatar?"round":"radius"]),style:v([{backgroundImage:"url("+t.avatar+")"}])},null,8,["class","style"]),l(x,{class:"content"},{default:s((()=>[l(x,{class:"c-333"},{default:s((()=>[t.is_online&&0==t.is_group&&1==y.globalConfig.chatInfo.online?(e(),a(k,{key:0,type:"success"})):h("",!0),d(" "+m(t.displayName),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:2},1024)])),_:2},1032,["class","id","data-index"])))),128)),l(x,{class:"text-center m-20 text-grey"},{default:s((()=>[d(m(y.total)+" 个朋友",1)])),_:1}),y.contacts.length?h("",!0):(e(),a(D,{key:0,noDatatext:"暂无联系人",textcolor:"#999"}))])),_:1})])),_:1},8,["scroll-into-view","style"])):h("",!0),0==y.TabCur?(e(),a(x,{key:1,class:"indexBar",style:v([{height:"calc(100vh - "+t.CustomBar+"px - 50px)"}])},{default:s((()=>[l(x,{class:"indexBar-box",onTouchstart:b.tStart,onTouchend:b.tEnd,onTouchmove:T(b.tMove,["stop"])},{default:s((()=>[(e(!0),n(c,null,i(y.contacts,((t,l)=>(e(),a(x,{class:"indexBar-item",key:l,id:l,onTouchstart:b.getCur,onTouchend:b.setCur},{default:s((()=>[d(m(t.name),1)])),_:2},1032,["id","onTouchstart","onTouchend"])))),128))])),_:1},8,["onTouchstart","onTouchend","onTouchmove"])])),_:1},8,["style"])):h("",!0),1==y.TabCur?(e(),a(x,{key:2,class:"cu-bar bg-white search fixed",style:v([{top:t.CustomBar+"px"}])},{default:s((()=>[l(x,{class:"search-form round"},{default:s((()=>[l(C,{class:"cuIcon-search"}),l(M,{type:"text",modelValue:t.keywords,"onUpdate:modelValue":p[0]||(p[0]=e=>t.keywords=e),placeholder:"输入搜索的关键词","confirm-type":"search"},null,8,["modelValue"])])),_:1})])),_:1},8,["style"])):h("",!0),1==y.TabCur?(e(),a(P,{key:3,"scroll-y":"",class:"indexes",style:v([{top:"50px",height:"calc(100vh - "+(t.CustomBar+t.inlineTools+t.StatusBar)+"px)"}]),"scroll-with-animation":!0,"enable-back-to-top":!0},{default:s((()=>[l(x,{class:""},{default:s((()=>[l(N,{tree:y.tree,onOpenBread:b.openDep},null,8,["tree","onOpenBread"])])),_:1}),l(x,{class:"im-department-list"},{default:s((()=>[(e(!0),n(c,null,i(y.depList,((t,n)=>(e(),a(O,{class:"im-flex im-justify-content-start im-align-items-center mt-10",onClick:e=>b.openDep(t),key:n},{default:s((()=>[l(x,{class:"im-folder-bar mr-10"},{default:s((()=>[l(C,{class:"cuIcon-file color-blue"})])),_:1}),l(x,{class:"im-list-body im-border-b"},{default:s((()=>[l(x,{class:"im-list-title word"},{default:s((()=>[d(m(t.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128)),(e(!0),n(c,null,i(y.userList,((t,n)=>(e(),a(O,{class:"im-flex im-justify-content-start im-align-items-center mt-10",key:t.id,url:"/pages/contacts/detail?user_id="+t.id},{default:s((()=>[l(x,{class:"im-folder-bar im-image mr-10"},{default:s((()=>[l(V,{src:t.avatar,mode:"widthFix"},null,8,["src"])])),_:2},1024),l(x,{class:"im-list-body im-border-b"},{default:s((()=>[l(x,{class:"im-list-title word"},{default:s((()=>[d(m(t.realname),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["url"])))),128)),0==y.depList.length&&0==y.userList.length?(e(),a(D,{key:0})):h("",!0)])),_:1})])),_:1},8,["style"])):h("",!0),w(l(x,{class:"indexToast"},{default:s((()=>[d(m(y.listCur),1)])),_:1},512),[[I,!y.hidden]]),l(x,{class:"cu-bar tabbar bg-white shadow foot"},{default:s((()=>[(e(!0),n(c,null,i(y.navList,((t,n)=>(e(),a(x,{class:"action",onClick:e=>b.NavChange(t),key:n,"data-cur":"message"},{default:s((()=>[l(x,{class:"cuIcon-cu-image"},{default:s((()=>[l(V,{src:"/static/image/tabbar/"+[t.name]+[y.PageCur==t.name?"-active":""]+".svg"},null,8,["src"]),t.notice>0?(e(),a(x,{key:0,class:"cu-tag badge"},{default:s((()=>[d(m(t.notice),1)])),_:2},1024)):h("",!0)])),_:2},1024),l(x,{class:u(y.PageCur==t.name?"text-mauve":"text-black")},{default:s((()=>[d(m(t.title),1)])),_:2},1032,["class"])])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})}],["__scopeId","data-v-ac762e5a"]]);export{A as default};
