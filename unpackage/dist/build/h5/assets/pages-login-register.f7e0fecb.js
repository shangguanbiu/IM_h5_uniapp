import{_ as e,a,s as o,J as l,U as t,o as s,e as n,w as r,i,f as u,j as c,t as d,l as m,q as g,y as p,O as f,P as h,aa as F}from"./index-cd0ab6d8.js";import{p as _}from"./package.548099a0.js";const b=a(o);const w=e({data:()=>({regForm:{account:"",realname:"",password:"",repass:"",code:""},forget:!1,packData:_,globalConfig:b.globalConfig}),watch:{forget(e){e&&(this.regForm.password="123456")}},mounted(){},methods:{handleInput(e){let a=e.detail.value.replace(/[\u4e00-\u9fa5]/g,"");this.regForm.account=a},sendCode(){if(!this.regForm.account)return l({title:"请输入账号！",icon:"none"}),!1;let e={account:this.regForm.account,type:2};this.$api.LoginApi.sendCode(e).then((e=>{l({title:e.msg,icon:"none"})}))},login(){return""==this.regForm.account?(l({title:"请输入账号！",icon:"none"}),!1):""==this.regForm.realname?(l({title:"请输入用户名或者昵称！",icon:"none"}),!1):""==this.regForm.password&&this.regForm.password.length<6&&this.regForm.password>16?(l({title:"请输入6-16位密码！",icon:"none"}),!1):this.regForm.password!=this.regForm.repass?(l({title:"两次密码输入不相同！",icon:"none"}),!1):void this.$api.LoginApi.register(this.regForm).then((e=>{0==e.code&&setTimeout((()=>{t({url:"/pages/login/index"})}),2e3)}))}}},[["render",function(e,a,o,l,t,_){const b=g("cu-custom"),w=i,x=p,V=f,k=h,y=F;return s(),n(w,null,{default:r((()=>[u(b,{bgColor:"bg-gradual-pink",isBack:!0},{backText:r((()=>[])),content:r((()=>[c("账号注册")])),_:1}),u(w,{style:{height:"100rpx"}}),u(w,{class:"padding im-flex im-rows im-justify-content-center mb-10"},{default:r((()=>[u(w,{class:"im-flex im-rows im-justify-content-center"},{default:r((()=>[u(x,{class:"login-logo",src:t.globalConfig.sysInfo.logo??t.packData.logo,mode:"fixWidth"},null,8,["src"])])),_:1})])),_:1}),u(w,{class:"im-flex im-rows im-justify-content-center"},{default:r((()=>[c(d(t.globalConfig.sysInfo.name??t.packData.name),1)])),_:1}),u(y,null,{default:r((()=>[u(w,{class:"cu-form-group margin-top"},{default:r((()=>[u(w,{class:"title"},{default:r((()=>[c("账号")])),_:1}),u(V,{placeholder:"账号",class:"uni-input",maxlength:"32",name:"input",modelValue:t.regForm.account,"onUpdate:modelValue":a[0]||(a[0]=e=>t.regForm.account=e),onInput:_.handleInput},null,8,["modelValue","onInput"])])),_:1}),u(w,{class:"cu-form-group margin-top"},{default:r((()=>[u(w,{class:"title"},{default:r((()=>[c("用户名/昵称")])),_:1}),u(V,{placeholder:"请输入用户名或昵称",maxlength:"32",name:"input",modelValue:t.regForm.realname,"onUpdate:modelValue":a[1]||(a[1]=e=>t.regForm.realname=e)},null,8,["modelValue"])])),_:1}),parseInt(t.globalConfig.sysInfo.regauth)?(s(),n(w,{key:0,class:"cu-form-group"},{default:r((()=>[u(w,{class:"title"},{default:r((()=>[c("验证码")])),_:1}),u(V,{placeholder:"请输入验证码",maxlength:"6",name:"input",modelValue:t.regForm.code,"onUpdate:modelValue":a[2]||(a[2]=e=>t.regForm.code=e)},null,8,["modelValue"]),u(k,{class:"cu-btn bg-blue shadow",onClick:_.sendCode},{default:r((()=>[c("发送验证码")])),_:1},8,["onClick"])])),_:1})):m("",!0),u(w,{class:"cu-form-group"},{default:r((()=>[u(w,{class:"title"},{default:r((()=>[c("密码")])),_:1}),u(V,{placeholder:"请输入密码",maxlength:"32",type:"password",name:"input",modelValue:t.regForm.password,"onUpdate:modelValue":a[3]||(a[3]=e=>t.regForm.password=e)},null,8,["modelValue"])])),_:1}),u(w,{class:"cu-form-group"},{default:r((()=>[u(w,{class:"title"},{default:r((()=>[c("重复密码")])),_:1}),u(V,{placeholder:"请重复输入密码",maxlength:"32",type:"password",name:"input",modelValue:t.regForm.repass,"onUpdate:modelValue":a[4]||(a[4]=e=>t.regForm.repass=e)},null,8,["modelValue"])])),_:1})])),_:1}),u(w,{class:"flex flex-direction im-login-btn"},{default:r((()=>[u(k,{class:"cu-btn lg bg-pink",onClick:a[5]||(a[5]=e=>_.login())},{default:r((()=>[c("注册")])),_:1})])),_:1}),u(w,{class:"footer-version c-999"},{default:r((()=>[c(d(t.globalConfig.sysInfo.name??t.packData.name)+" for "+d(t.packData.version),1)])),_:1})])),_:1})}],["__scopeId","data-v-e6ab5a06"]]);export{w as default};
