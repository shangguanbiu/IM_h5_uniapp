import{_ as t,a as e,s as o,g as l,n as i,K as a,c as n,aa as s,V as d,o as r,e as m,w as c,i as g,f as u,j as h,t as f,q as p,l as w,v as _,m as y,z as x,P as b,Q as F,ab as k,a5 as L}from"./index-7b243064.js";import{p as j}from"./package.fba20730.js";const U=""+new URL("a1-b843a84b.jpg",import.meta.url).href,C=""+new URL("a2-b7617607.jpg",import.meta.url).href,R=""+new URL("a3-65ab6087.jpg",import.meta.url).href,$=""+new URL("a4-a6627f69.jpg",import.meta.url).href,I=""+new URL("a5-85a21372.jpg",import.meta.url).href,T=""+new URL("a6-9cd3eed1.jpg",import.meta.url).href,v=""+new URL("a7-10d58e7d.jpg",import.meta.url).href,V=""+new URL("a8-97535dd7.jpg",import.meta.url).href,M=""+new URL("a9-6c392362.jpg",import.meta.url).href,A=""+new URL("a10-39ce16e8.jpg",import.meta.url).href,E=""+new URL("a11-c7c58a48.jpg",import.meta.url).href,B=""+new URL("a12-29e2f366.jpg",import.meta.url).href,D=""+new URL("a13-cde89001.jpg",import.meta.url).href,H=""+new URL("a15-d051517f.jpg",import.meta.url).href,q=""+new URL("a16-d5b2bbf7.jpg",import.meta.url).href,z=""+new URL("a17-59371290.jpg",import.meta.url).href,P=e(o);const K=t({data:()=>({loginForm:{account:"",password:"",code:"",client_id:"",rememberMe:!1},forget:!1,packData:j,globalConfig:P.globalConfig}),watch:{forget(t){t&&(this.loginForm.password="123456")}},mounted(){console.log("ffff",document.documentElement.clientHeight),this.run_bg();let t=l("LoginAccount");t&&(this.loginForm=t)},methods:{run_bg(){var t=document.getElementById("demo");document.getElementById("demo1");var e=document.getElementById("demo2");function o(){e.offsetTop-t.scrollTop-t.offsetTop<=0?(t.scrollTop=0,console.log("<0:"+t.scrollTop)):t.scrollTop++}document.getElementById("demo3"),demo2.innerHTML=demo1.innerHTML;var l=setInterval(o,15);t.onmouseover=function(){clearInterval(l)},t.onmouseout=function(){l=setInterval(o,15)}},to_kefu(){i({url:"/pages/movie/kefu/kefu"})},switchChange(t){this.loginForm.rememberMe=t.detail.value},sendCode(){if(!this.loginForm.account)return a({title:"请输入账号！",icon:"none"}),!1;let t={account:this.loginForm.account,type:1};this.$api.LoginApi.sendCode(t).then((t=>{a({title:t.msg,icon:"none"})}))},register(){i({url:"/pages/login/register"})},login(){if(this.loginForm.rememberMe?n("LoginAccount",this.loginForm):s("LoginAccount"),""==this.loginForm.account)return a({title:this.$t("login.pop_tit1"),icon:"none"}),!1;if(""==this.loginForm.password)return a({title:this.$t("login.pop_tit2"),icon:"none"}),!1;let t=l("client_id");t&&(this.loginForm.client_id=t),this.$api.LoginApi.login(this.loginForm).then((t=>{if(0==t.code){n("authToken",t.data.authToken);let e=t.data.userInfo;this.check_login(e.account),this.socketIo.send({type:"bindUid",user_id:e.user_id,token:t.data.authToken}),P.login(e)}}))},async check_login(t){const e=await this.$myRuquest({url:"/api/front/user/login",method:"POST",data:{username:t,password:""}});200==e.code&&(n("ifLogin",e.data.token),d({url:"/pages/index/index"}))}}},[["render",function(t,e,o,l,i,a){const n=g,s=x,d=b,j=F,P=k,K=L;return r(),m(n,null,{default:c((()=>[u(n,{style:{height:"100vh",width:"100%",position:"fixed",top:"0",left:"0","z-index":"5"}},{default:c((()=>[u(n,{style:{height:"150rpx"}}),u(n,{class:"padding im-flex im-rows im-justify-content-center mb-10"},{default:c((()=>[u(n,{class:"im-flex im-rows im-justify-content-center"},{default:c((()=>[u(s,{class:"login-logo",src:i.globalConfig.sysInfo.logo??i.packData.logo,mode:"fixWidth"},null,8,["src"])])),_:1})])),_:1}),u(n,{class:"im-flex im-rows im-justify-content-center"},{default:c((()=>[h(f(i.globalConfig.sysInfo.name??i.packData.name),1)])),_:1}),u(P,null,{default:c((()=>[u(n,{class:"cu-form-group margin-top"},{default:c((()=>[u(n,{class:"title"},{default:c((()=>[h(f(t.$t("login.tit_l1")),1)])),_:1}),u(d,{placeholder:t.$t("login.tit_l1_p1"),maxlength:"32",name:"input",modelValue:i.loginForm.account,"onUpdate:modelValue":e[0]||(e[0]=t=>i.loginForm.account=t)},null,8,["placeholder","modelValue"])])),_:1}),i.forget?(r(),m(n,{key:1,class:"cu-form-group"},{default:c((()=>[u(n,{class:"title"},{default:c((()=>[h(f(t.$t("login.tit_l3")),1)])),_:1}),u(d,{placeholder:t.$t("login.tit_l1_p3"),maxlength:"6",name:"input",modelValue:i.loginForm.code,"onUpdate:modelValue":e[2]||(e[2]=t=>i.loginForm.code=t)},null,8,["placeholder","modelValue"]),u(j,{class:"cu-btn bg-blue shadow",onClick:a.sendCode},{default:c((()=>[h("发送验证码")])),_:1},8,["onClick"])])),_:1})):(r(),m(n,{key:0,class:"cu-form-group"},{default:c((()=>[u(n,{class:"title"},{default:c((()=>[h(f(t.$t("login.tit_l2")),1)])),_:1}),u(d,{placeholder:t.$t("login.tit_l1_p2"),maxlength:"32",type:"password",name:"input",modelValue:i.loginForm.password,"onUpdate:modelValue":e[1]||(e[1]=t=>i.loginForm.password=t)},null,8,["placeholder","modelValue"])])),_:1}))])),_:1}),u(n,{class:"forget"},{default:c((()=>[u(n,null,{default:c((()=>[u(K,{class:p(["switch",i.loginForm.rememberMe?"checked":""]),checked:i.loginForm.rememberMe,onChange:a.switchChange,style:{transform:"scale(0.7)"}},null,8,["checked","class","onChange"]),h(f(t.$t("login.tit_l4")),1)])),_:1}),w(u(n,{class:"text-blue",onClick:a.to_kefu},{default:c((()=>[h(f(t.$t("login.tit_l5")),1)])),_:1},8,["onClick"]),[[_,!i.forget]])])),_:1}),u(n,{class:"flex flex-direction im-login-btn"},{default:c((()=>[u(j,{class:"cu-btn lg bg-pink",onClick:e[3]||(e[3]=t=>a.login())},{default:c((()=>[h(f(t.$t("login.tit_l6")),1)])),_:1})])),_:1}),i.globalConfig&&1==i.globalConfig.sysInfo.regtype?(r(),m(n,{key:0,class:"flex flex-direction im-reg-btn"},{default:c((()=>[u(j,{class:"cu-btn lg bg-white",onClick:e[4]||(e[4]=t=>a.register())},{default:c((()=>[h(f(t.$t("login.tit_l7")),1)])),_:1})])),_:1})):y("",!0)])),_:1}),u(n,{id:"demo",class:"out-box"},{default:c((()=>[u(n,{id:"demo1",style:{display:"flex","flex-wrap":"wrap"}},{default:c((()=>[u(n,{style:{width:"50%","margin-bottom":"-4px"}},{default:c((()=>[u(s,{src:U,mode:"widthFix",style:{width:"100%"}})])),_:1}),u(n,{style:{width:"50%","margin-bottom":"-4px"}},{default:c((()=>[u(s,{src:C,mode:"widthFix",style:{width:"100%"}})])),_:1}),u(n,{style:{width:"50%","margin-bottom":"-4px"}},{default:c((()=>[u(s,{src:R,mode:"widthFix",style:{width:"100%"}})])),_:1}),u(n,{style:{width:"50%","margin-bottom":"-4px"}},{default:c((()=>[u(s,{src:$,mode:"widthFix",style:{width:"100%"}})])),_:1}),u(n,{style:{width:"50%","margin-bottom":"-4px"}},{default:c((()=>[u(s,{src:I,mode:"widthFix",style:{width:"100%"}})])),_:1}),u(n,{style:{width:"50%","margin-bottom":"-4px"}},{default:c((()=>[u(s,{src:T,mode:"widthFix",style:{width:"100%"}})])),_:1}),u(n,{style:{width:"50%","margin-bottom":"-4px"}},{default:c((()=>[u(s,{src:v,mode:"widthFix",style:{width:"100%"}})])),_:1}),u(n,{style:{width:"50%","margin-bottom":"-4px"}},{default:c((()=>[u(s,{src:V,mode:"widthFix",style:{width:"100%"}})])),_:1}),u(n,{style:{width:"50%","margin-bottom":"-4px"}},{default:c((()=>[u(s,{src:M,mode:"widthFix",style:{width:"100%"}})])),_:1}),u(n,{style:{width:"50%","margin-bottom":"-4px"}},{default:c((()=>[u(s,{src:A,mode:"widthFix",style:{width:"100%"}})])),_:1}),u(n,{style:{width:"50%","margin-bottom":"-4px"}},{default:c((()=>[u(s,{src:E,mode:"widthFix",style:{width:"100%"}})])),_:1}),u(n,{style:{width:"50%","margin-bottom":"-4px"}},{default:c((()=>[u(s,{src:B,mode:"widthFix",style:{width:"100%"}})])),_:1}),u(n,{style:{width:"50%","margin-bottom":"-4px"}},{default:c((()=>[u(s,{src:D,mode:"widthFix",style:{width:"100%"}})])),_:1}),u(n,{style:{width:"50%","margin-bottom":"-4px"}},{default:c((()=>[u(s,{src:H,mode:"widthFix",style:{width:"100%"}})])),_:1}),u(n,{style:{width:"50%","margin-bottom":"-4px"}},{default:c((()=>[u(s,{src:q,mode:"widthFix",style:{width:"100%"}})])),_:1}),u(n,{style:{width:"50%","margin-bottom":"-4px"}},{default:c((()=>[u(s,{src:z,mode:"widthFix",style:{width:"100%"}})])),_:1})])),_:1}),u(n,{id:"demo2"}),u(n,{id:"demo3",style:{height:"1"}})])),_:1})])),_:1})}],["__scopeId","data-v-d4e5bbf5"]]);export{K as default};