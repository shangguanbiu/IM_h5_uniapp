import{_ as e,V as s,d as a,o as t,e as n,w as o,i as d,f as l,j as g,x as i,ae as u}from"./index-7b243064.js";const r=e({name:"third",data:()=>({web_url:""}),methods:{getMessage(e){console.log("@message 接收成功1"),(e.detail.data[0].action="message")&&s({url:"/pages/index/index"})},getPostMessage(e){console.log("@onPostMessage 接收成功2"),a({url:"/pages/index/index"})}},mounted(){top.addEventListener("message",(e=>{console.log("获得传参：",e.data)}),!1),window.addEventListener("message",this.getMessage,!1);var e=document.getElementsByClassName("uni-page-head-hd")[0];e&&(e.style.display="none")},onLoad(e){this.web_url=e.url+"?uid="+e.uid}},[["render",function(e,s,a,r,c,m){const p=i("cu-custom"),w=u,x=d;return t(),n(x,null,{default:o((()=>[l(p,{bgColor:"bg-gradual-pink",isBack:!0},{backText:o((()=>[])),content:o((()=>[g("影院")])),_:1}),l(x,null,{default:o((()=>[l(w,{ref:"webview",onMessage:m.getMessage,"update-title":!0,src:c.web_url},null,8,["onMessage","src"])])),_:1})])),_:1})}]]);export{r as default};