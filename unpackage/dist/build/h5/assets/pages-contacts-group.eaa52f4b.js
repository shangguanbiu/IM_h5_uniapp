import{_ as a,u as s,s as t,b as e,g as l,n,o as c,e as o,w as i,i as r,f as u,j as d,k as g,r as m,F as p,m as f,x as h,q as x,B as k,t as _}from"./index-7ddb419c.js";e(s(t));const C=a({name:"group",data:()=>({groupList:[]}),created(){},mounted(){this.initContacts(this.msgs)},methods:{initContacts(a){const s=l("allContacts").filter((a=>1==a.is_group)).sort(((a,s)=>"#"===a.index?1:"#"===s.index?-1:a.index.localeCompare(s.index,"zh")));this.groupList=s},openDetails(a){n({url:"/pages/message/chat?id="+a.id})},search(){n({url:"/pages/index/search?type=3"})}}},[["render",function(a,s,t,e,l,n){const C=h,y=r,b=x("cu-custom"),L=x("Empty");return c(),o(y,null,{default:i((()=>[u(b,{bgColor:"bg-gradual-pink",isBack:!0},{backText:i((()=>[])),content:i((()=>[d("群聊列表")])),right:i((()=>[u(y,{class:"f-20 ml-10 mr-10",onClick:s[0]||(s[0]=a=>n.search())},{default:i((()=>[u(C,{class:"cuIcon-search"})])),_:1})])),_:1}),u(y,{class:"cu-list menu-avatar no-padding"},{default:i((()=>[(c(!0),g(p,null,m(l.groupList,((a,s)=>(c(),o(y,{class:"cu-item",key:s,onClick:s=>n.openDetails(a)},{default:i((()=>[u(y,{class:"cu-avatar lg radius mr-15",style:k([{backgroundImage:"url("+a.avatar+")"}])},null,8,["style"]),u(y,{class:"content"},{default:i((()=>[u(y,{class:"c-333"},{default:i((()=>[d(_(a.displayName),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128)),l.groupList.length?f("",!0):(c(),o(L,{key:0,noDatatext:"暂无群聊",textcolor:"#999"}))])),_:1})])),_:1})}]]);export{C as default};
