import{_ as e,a as o,s as a,g as l,n,J as t,c as s,a9 as i,U as c,o as r,e as g,w as d,i as u,f as m,j as f,t as h,p,l as _,v as k,m as b,y as C,O as F,P as w,aa as y,a4 as x}from"./index-bb9aa3b8.js";import{p as V}from"./package.548099a0.js";const I=o(a);const M=e({data:()=>({loginForm:{account:"",password:"",code:"",client_id:"",rememberMe:!1},forget:!1,packData:V,globalConfig:I.globalConfig}),watch:{forget(e){e&&(this.loginForm.password="123456")}},mounted(){if(this.globalConfig&&this.globalConfig.demon_mode){const e=Math.floor(19*Math.random()+2);this.loginForm.account=138e8+e,this.loginForm.password="123456"}let e=l("LoginAccount");e&&(this.loginForm=e)},methods:{to_kefu(){n({url:"/pages/movie/kefu/kefu"})},switchChange(e){this.loginForm.rememberMe=e.detail.value},sendCode(){if(!this.loginForm.account)return t({title:"请输入账号！",icon:"none"}),!1;let e={account:this.loginForm.account,type:1};this.$api.LoginApi.sendCode(e).then((e=>{t({title:e.msg,icon:"none"})}))},register(){n({url:"/pages/login/register"})},login(){if(this.loginForm.rememberMe?s("LoginAccount",this.loginForm):i("LoginAccount"),""==this.loginForm.account)return t({title:"请输入账号！",icon:"none"}),!1;if(""==this.loginForm.password)return t({title:"请输入密码！",icon:"none"}),!1;let e=l("client_id");e&&(this.loginForm.client_id=e),this.$api.LoginApi.login(this.loginForm).then((e=>{if(0==e.code){s("authToken",e.data.authToken);let o=e.data.userInfo;console.log("login",o),this.check_login(o.account),this.socketIo.send({type:"bindUid",user_id:o.user_id,token:e.data.authToken}),I.login(o)}}))},async check_login(e){const o=await this.$myRuquest({url:"/api/front/user/login",method:"POST",data:{username:e,password:""}});200==o.code&&(s("ifLogin",o.data.token),c({url:"/pages/index/index"}))}}},[["render",function(e,o,a,l,n,t){const s=u,i=C,c=F,V=w,I=y,M=x;return r(),g(s,null,{default:d((()=>[m(s,{style:{height:"150rpx"}}),m(s,{class:"padding im-flex im-rows im-justify-content-center mb-10"},{default:d((()=>[m(s,{class:"im-flex im-rows im-justify-content-center"},{default:d((()=>[m(i,{class:"login-logo",src:n.globalConfig.sysInfo.logo??n.packData.logo,mode:"fixWidth"},null,8,["src"])])),_:1})])),_:1}),m(s,{class:"im-flex im-rows im-justify-content-center"},{default:d((()=>[f(h(n.globalConfig.sysInfo.name??n.packData.name),1)])),_:1}),m(I,null,{default:d((()=>[m(s,{class:"cu-form-group margin-top"},{default:d((()=>[m(s,{class:"title"},{default:d((()=>[f("账号")])),_:1}),m(c,{placeholder:"账号",maxlength:"32",name:"input",modelValue:n.loginForm.account,"onUpdate:modelValue":o[0]||(o[0]=e=>n.loginForm.account=e)},null,8,["modelValue"])])),_:1}),n.forget?(r(),g(s,{key:1,class:"cu-form-group"},{default:d((()=>[m(s,{class:"title"},{default:d((()=>[f("验证码")])),_:1}),m(c,{placeholder:"请输入验证码",maxlength:"6",name:"input",modelValue:n.loginForm.code,"onUpdate:modelValue":o[2]||(o[2]=e=>n.loginForm.code=e)},null,8,["modelValue"]),m(V,{class:"cu-btn bg-blue shadow",onClick:t.sendCode},{default:d((()=>[f("发送验证码")])),_:1},8,["onClick"])])),_:1})):(r(),g(s,{key:0,class:"cu-form-group"},{default:d((()=>[m(s,{class:"title"},{default:d((()=>[f("密码")])),_:1}),m(c,{placeholder:"请输入密码",maxlength:"32",type:"password",name:"input",modelValue:n.loginForm.password,"onUpdate:modelValue":o[1]||(o[1]=e=>n.loginForm.password=e)},null,8,["modelValue"])])),_:1}))])),_:1}),m(s,{class:"forget"},{default:d((()=>[m(s,null,{default:d((()=>[m(M,{class:p(["switch",n.loginForm.rememberMe?"checked":""]),checked:n.loginForm.rememberMe,onChange:t.switchChange,style:{transform:"scale(0.7)"}},null,8,["checked","class","onChange"]),f("记住我")])),_:1}),_(m(s,{class:"text-blue",onClick:t.to_kefu},{default:d((()=>[f("忘记密码？点击联系客服")])),_:1},8,["onClick"]),[[k,!n.forget]])])),_:1}),m(s,{class:"flex flex-direction im-login-btn"},{default:d((()=>[m(V,{class:"cu-btn lg bg-pink",onClick:o[3]||(o[3]=e=>t.login())},{default:d((()=>[f("登录")])),_:1})])),_:1}),n.globalConfig&&1==n.globalConfig.sysInfo.regtype?(r(),g(s,{key:0,class:"flex flex-direction im-reg-btn"},{default:d((()=>[m(V,{class:"cu-btn lg bg-white",onClick:o[4]||(o[4]=e=>t.register())},{default:d((()=>[f("注册")])),_:1})])),_:1})):b("",!0),m(s,{class:"footer-version c-999"},{default:d((()=>[f(h(n.globalConfig.sysInfo.name??n.packData.name)+" for "+h(n.packData.version),1)])),_:1})])),_:1})}],["__scopeId","data-v-708c66a9"]]);export{M as default};