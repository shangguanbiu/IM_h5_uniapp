import{_ as a,J as e,n as s,o as t,e as l,w as c,i as n,f as o,j as r,t as d,B as u,k as i,r as f,F as m,m as p,q as k,x as h,O as y,P as _,N as g}from"./index-45871c8e.js";const x=a({name:"search",data:()=>({title:"搜索朋友",keywords:"",contacts:[],type:1,noText:"暂无数据"}),methods:{search(){if(""==this.keywords)return e({title:"请输入用户账号进行搜索",icon:"none"});this.noText="未搜索到数据",this.$api.msgApi.searchUser({keywords:this.keywords}).then((a=>{0==a.code&&(this.contacts=a.data)}))},openDetails(a){s({url:"/pages/contacts/detail?id="+a.user_id})},sendMsg(a){s({url:"/pages/message/chat?id="+a})}}},[["render",function(a,e,s,x,b,w){const C=k("cu-custom"),D=h,T=y,B=n,V=_,j=k("Empty");return t(),l(B,null,{default:c((()=>[o(C,{bgColor:"bg-gradual-pink",isBack:!0},{backText:c((()=>[])),content:c((()=>[r(d(b.title),1)])),_:1}),o(B,{class:"cu-bar bg-white search fixed",style:u([{top:a.CustomBar+"px"}])},{default:c((()=>[o(B,{class:"search-form round"},{default:c((()=>[o(D,{class:"cuIcon-search"}),o(T,{type:"text",modelValue:b.keywords,"onUpdate:modelValue":e[0]||(e[0]=a=>b.keywords=a),placeholder:"请输入用户账号进行搜索","confirm-type":"search"},null,8,["modelValue"])])),_:1}),o(B,{class:"action"},{default:c((()=>[o(V,{class:"cu-btn round bg-green",onClick:e[1]||(e[1]=a=>w.search())},{default:c((()=>[r("搜索")])),_:1})])),_:1})])),_:1},8,["style"]),o(B,{style:{"margin-top":"120rpx"}},{default:c((()=>[o(B,null,{default:c((()=>[o(B,{class:"cu-list menu no-padding"},{default:c((()=>[(t(!0),i(m,null,f(b.contacts,((a,e)=>(t(),l(B,{class:"cu-item",key:e,onClick:e=>w.openDetails(a)},{default:c((()=>[o(B,{class:"cu-avatar radius mr-15",style:u([{backgroundImage:"url("+a.avatar+")"}])},null,8,["style"]),o(B,{class:"content"},{default:c((()=>[o(B,{class:"c-333"},{default:c((()=>[r(d(a.realname),1)])),_:2},1024)])),_:2},1024),o(B,{class:"action ml-10"},{default:c((()=>[a.friend?(t(),l(B,{key:0,class:"text-blue",onClick:g((e=>w.sendMsg(a.user_id)),["stop"])},{default:c((()=>[r("发消息")])),_:2},1032,["onClick"])):p("",!0),a.friend?p("",!0):(t(),l(B,{key:1,class:"text-blue"},{default:c((()=>[r("查看")])),_:1}))])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}),b.contacts.length?p("",!0):(t(),l(B,{key:0},{default:c((()=>[o(j,{noDatatext:b.noText,textcolor:"#999"},null,8,["noDatatext"])])),_:1}))])),_:1})])),_:1})}]]);export{x as default};
