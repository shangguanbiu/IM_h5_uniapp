import{_ as a,o as t,e,w as s,i as u,f as o,j as r,x as n,ae as l}from"./index-94068fa3.js";const c=a({data:()=>({url:""}),methods:{async get_kefu_url(){const a=await this.$myRuquest({url:"/api/front/index/getKefuUrl",method:"POST",data:{page:1}});200==a.code&&(this.url=a.data.kefu_url)}},onLoad(){},onShow(){this.get_kefu_url()}},[["render",function(a,c,d,i,f,_){const g=n("cu-custom"),m=l,h=u;return t(),e(h,null,{default:s((()=>[o(g,{bgColor:"bg-gradual-pink",isBack:!0},{backText:s((()=>[])),content:s((()=>[r("客服")])),_:1}),o(h,{class:"main"},{default:s((()=>[o(m,{src:f.url},null,8,["src"])])),_:1})])),_:1})}],["__scopeId","data-v-72b808ec"]]);export{c as default};
