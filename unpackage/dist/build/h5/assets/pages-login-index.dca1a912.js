import{_ as e,u as o,s as l,y as a,L as t,q as n,ag as s,ah as i,a6 as r,o as c,c as g,w as d,g as u,i as m,t as f,f as h,h as p,j as b,z as _,I as k,A as F,ai as C,ab as w}from"./index.5cd51b9e.js";import{p as x}from"./package.f2fde6e3.js";const y=o(l);var V=e({data:()=>({loginForm:{account:"13800000015",password:"123456",code:"",client_id:"",rememberMe:!1},forget:!1,packData:x,globalConfig:y.globalConfig}),watch:{forget(e){e&&(this.loginForm.password="123456")}},mounted(){if(this.globalConfig&&this.globalConfig.demon_mode){const e=Math.floor(19*Math.random()+2);this.loginForm.account=138e8+e,this.loginForm.password="123456"}let e=a("LoginAccount");e&&(this.loginForm=e)},methods:{switchChange(e){this.loginForm.rememberMe=e.detail.value},sendCode(){if(!this.loginForm.account)return t({title:"请输入账号！",icon:"none"}),!1;let e={account:this.loginForm.account,type:1};this.$api.LoginApi.sendCode(e).then((e=>{t({title:e.msg,icon:"none"})}))},register(){n({url:"/pages/login/register"})},login(){if(this.loginForm.rememberMe?s("LoginAccount",this.loginForm):i("LoginAccount"),""==this.loginForm.account)return t({title:"请输入账号！",icon:"none"}),!1;if(""==this.loginForm.password)return t({title:"请输入密码！",icon:"none"}),!1;let e=a("client_id");e&&(this.loginForm.client_id=e),this.$api.LoginApi.login(this.loginForm).then((e=>{if(0==e.code){s("authToken",e.data.authToken);let o=e.data.userInfo;this.socketIo.send({type:"bindUid",user_id:o.user_id,token:e.data.authToken}),y.login(o),r({url:"/pages/index/index"})}}))}}},[["render",function(e,o,l,a,t,n){const s=b,i=_,r=k,x=F,y=C,V=w;return c(),g(s,null,{default:d((()=>[u(s,{style:{height:"150rpx"}}),u(s,{class:"padding im-flex im-rows im-justify-content-center mb-10"},{default:d((()=>[u(s,{class:"im-flex im-rows im-justify-content-center"},{default:d((()=>{var e;return[u(i,{class:"login-logo",src:null!=(e=t.globalConfig.sysInfo.logo)?e:t.packData.logo,mode:"fixWidth"},null,8,["src"])]})),_:1})])),_:1}),u(s,{class:"im-flex im-rows im-justify-content-center"},{default:d((()=>{var e;return[m(f(null!=(e=t.globalConfig.sysInfo.name)?e:t.packData.name),1)]})),_:1}),u(y,null,{default:d((()=>[u(s,{class:"cu-form-group margin-top"},{default:d((()=>[u(s,{class:"title"},{default:d((()=>[m("账号")])),_:1}),u(r,{placeholder:"账号",maxlength:"32",name:"input",modelValue:t.loginForm.account,"onUpdate:modelValue":o[0]||(o[0]=e=>t.loginForm.account=e)},null,8,["modelValue"])])),_:1}),t.forget?(c(),g(s,{key:1,class:"cu-form-group"},{default:d((()=>[u(s,{class:"title"},{default:d((()=>[m("验证码")])),_:1}),u(r,{placeholder:"请输入验证码",maxlength:"6",name:"input",modelValue:t.loginForm.code,"onUpdate:modelValue":o[2]||(o[2]=e=>t.loginForm.code=e)},null,8,["modelValue"]),u(x,{class:"cu-btn bg-blue shadow",onClick:n.sendCode},{default:d((()=>[m("发送验证码")])),_:1},8,["onClick"])])),_:1})):(c(),g(s,{key:0,class:"cu-form-group"},{default:d((()=>[u(s,{class:"title"},{default:d((()=>[m("密码")])),_:1}),u(r,{placeholder:"请输入密码",maxlength:"32",type:"password",name:"input",modelValue:t.loginForm.password,"onUpdate:modelValue":o[1]||(o[1]=e=>t.loginForm.password=e)},null,8,["modelValue"])])),_:1}))])),_:1}),u(s,{class:"forget"},{default:d((()=>[u(s,null,{default:d((()=>[u(V,{class:h(["switch",t.loginForm.rememberMe?"checked":""]),checked:t.loginForm.rememberMe,onChange:n.switchChange,style:{transform:"scale(0.7)"}},null,8,["checked","class","onChange"]),m("记住我")])),_:1}),u(s,{class:"text-blue",onClick:o[3]||(o[3]=e=>t.forget=!t.forget)},{default:d((()=>[m(f(t.forget?"密码登陆":"忘记密码"),1)])),_:1})])),_:1}),u(s,{class:"flex flex-direction im-login-btn"},{default:d((()=>[u(x,{class:"cu-btn lg bg-blue",onClick:o[4]||(o[4]=e=>n.login())},{default:d((()=>[m("登录")])),_:1})])),_:1}),t.globalConfig&&1==t.globalConfig.sysInfo.regtype?(c(),g(s,{key:0,class:"flex flex-direction im-reg-btn"},{default:d((()=>[u(x,{class:"cu-btn lg bg-white",onClick:o[5]||(o[5]=e=>n.register())},{default:d((()=>[m("注册")])),_:1})])),_:1})):p("",!0),u(s,{class:"footer-version c-999"},{default:d((()=>{var e;return[m(f(null!=(e=t.globalConfig.sysInfo.name)?e:t.packData.name)+" for "+f(t.packData.version),1)]})),_:1})])),_:1})}],["__scopeId","data-v-5d6ef325"]]);export{V as default};
