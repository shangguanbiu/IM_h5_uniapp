import{_ as a,o as t,e as s,w as e,i as u,f as o,j as r,q as n,ad as l}from"./index-bbbfa810.js";const d=a({data:()=>({url:""}),methods:{async get_kefu_url(){const a=await this.$myRuquest({url:"/api/front/index/getKefuUrl",method:"POST",data:{page:1}});200==a.code&&(this.url=a.data.kefu_url)}},onLoad(){},onShow(){this.get_kefu_url()}},[["render",function(a,d,c,i,f,_){const g=n("cu-custom"),m=l,h=u;return t(),s(h,null,{default:e((()=>[o(g,{bgColor:"bg-gradual-pink",isBack:!0},{backText:e((()=>[])),content:e((()=>[r("客服")])),_:1}),o(h,{class:"main"},{default:e((()=>[o(m,{src:f.url},null,8,["src"])])),_:1})])),_:1})}],["__scopeId","data-v-72b808ec"]]);export{d as default};
