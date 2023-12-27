import{_ as e,a,s,g as t,n as l,K as o,o as n,e as d,w as i,i as c,f as u,j as r,t as f,O as m,q as h,m as p,k as g,F as _,x as w,y as C,P as b,Q as k}from"./index-d8cdb88b.js";const x=a(s);const V=e({data:()=>({userInfo:x.userInfo,globalConfig:x.globalConfig,modelName:"",code:"",account:"",newCode:"",password:"",originalPassword:"",repass:"",loading:!1,editPass:!1}),onShow(){},methods:{logout(){let e=t("client_id");this.$api.LoginApi.logout({client_id:e}).then((e=>{0==e.code&&x.logout()}))},editAcc(){},openWeb(e){l({url:"/pages/mine/webview?src=https://im.raingad.com"})},save(){if(""==this.code&&this.userInfo.is_auth)return o({title:"请输入验证码",icon:"none"}),!1;if(this.editPass){if(""==this.password||this.password.length<6||this.password.length>16)return o({title:"请输入6-16个字符串的密码",icon:"none"}),!1;if(this.password!=this.repass)return o({title:"两次密码不一致",icon:"none"}),!1;let e={password:this.password,code:this.code,originalPassword:this.originalPassword};this.$api.msgApi.editPassword(e).then((e=>{0==e.code&&(this.modelName="",this.password="",this.repass="",o({title:e.msg,icon:"none"}))}))}else{if(""==this.account)return o({title:"请输入新的账号",icon:"none"}),!1;if(""==this.newCode)return o({title:"请输入新账号的验证码",icon:"none"}),!1;let e={account:this.account,code:this.code,newCode:this.newCode};this.$api.msgApi.editAccount(e).then((e=>{0==e.code&&(this.modelName="",this.account="",this.code="",this.newCode="",o({title:"修改成功，请重新登陆",icon:"none"}))}))}},sendCode(e){let a=e?this.userInfo.account:this.account,s=this.editPass?3:4;if(""==a)return o({title:"请输入新的账号",icon:"none"}),!1;this.loading=!0,this.$api.LoginApi.sendCode({account:a,type:s}).then((e=>{o({title:e.msg,icon:"none"}),this.loading=!1}))}}},[["render",function(e,a,s,t,l,o){const x=w("cu-custom"),V=C,$=c,I=b,P=k;return n(),d($,null,{default:i((()=>[u(x,{bgColor:"bg-gradual-pink",isBack:!0},{backText:i((()=>[])),content:i((()=>[r(f(e.$t("safe.title")),1)])),_:1}),u($,{class:"cu-list menu mt-10"},{default:i((()=>[u($,{class:"cu-item",onClick:o.editAcc},{default:i((()=>[u($,{class:"content"},{default:i((()=>[u(V,{class:"cuIcon-settings text-grey"}),u(V,null,{default:i((()=>[r(f(e.$t("safe.account")),1)])),_:1})])),_:1}),u($,{class:"action"},{default:i((()=>[u(V,null,{default:i((()=>[r(f(l.userInfo.account),1)])),_:1}),u(V,{class:"text-grey cuIcon-right"})])),_:1})])),_:1},8,["onClick"]),u($,{class:"cu-item",onClick:a[0]||(a[0]=e=>{l.modelName="show",l.editPass=!0})},{default:i((()=>[u($,{class:"content"},{default:i((()=>[u(V,{class:"cuIcon-lock text-green"}),u(V,null,{default:i((()=>[r(f(e.$t("safe.update_psw")),1)])),_:1})])),_:1}),u($,{class:"action"},{default:i((()=>[u(V,{class:"text-grey cuIcon-right"})])),_:1})])),_:1})])),_:1}),u($,{class:h(["cu-modal bottom-modal","show"==l.modelName?"show":""]),onClick:a[11]||(a[11]=e=>l.modelName="")},{default:i((()=>[u($,{class:"cu-dialog",onClick:a[10]||(a[10]=m((()=>{}),["stop"]))},{default:i((()=>[u($,{class:"cu-bar bg-white"},{default:i((()=>[u($,{class:"action text-gray",onClick:a[1]||(a[1]=e=>l.modelName="")},{default:i((()=>[r(f(e.$t("safe.close")),1)])),_:1}),u($,{class:"action text-green",onClick:o.save},{default:i((()=>[r(f(e.$t("safe.save")),1)])),_:1},8,["onClick"])])),_:1}),u($,{class:"manage-content mb-20"},{default:i((()=>[u($,{class:"cu-list menu mt-15 bg-white"},{default:i((()=>[l.userInfo.is_auth?(n(),d($,{key:0,class:"cu-form-group text-right"},{default:i((()=>[u($,{class:"title"},{default:i((()=>[r("验证码")])),_:1}),u(I,{placeholder:"输入验证码",name:"input",modelValue:l.code,"onUpdate:modelValue":a[2]||(a[2]=e=>l.code=e)},null,8,["modelValue"]),u(P,{class:h(["cu-btn bg-green shadow cu-load",l.loading?"loading":""]),disabled:l.loading,onClick:a[3]||(a[3]=e=>o.sendCode(!0))},{default:i((()=>[r("发送验证码")])),_:1},8,["class","disabled"])])),_:1})):p("",!0),l.editPass?(n(),g(_,{key:2},[l.userInfo.is_auth?p("",!0):(n(),d($,{key:0,class:"cu-form-group text-right"},{default:i((()=>[u($,{class:"title"},{default:i((()=>[r(f(e.$t("safe.old_psw")),1)])),_:1}),u(I,{placeholder:e.$t("safe.old_psw_1"),name:"input",modelValue:l.originalPassword,"onUpdate:modelValue":a[7]||(a[7]=e=>l.originalPassword=e)},null,8,["placeholder","modelValue"])])),_:1})),u($,{class:"cu-form-group text-right"},{default:i((()=>[u($,{class:"title"},{default:i((()=>[r(f(e.$t("safe.new_psw")),1)])),_:1}),u(I,{placeholder:e.$t("safe.new_psw_1"),name:"input",modelValue:l.password,"onUpdate:modelValue":a[8]||(a[8]=e=>l.password=e)},null,8,["placeholder","modelValue"])])),_:1}),u($,{class:"cu-form-group text-right"},{default:i((()=>[u($,{class:"title"},{default:i((()=>[r(f(e.$t("safe.renew_psw")),1)])),_:1}),u(I,{placeholder:e.$t("safe.renew_psw_1"),name:"input",modelValue:l.repass,"onUpdate:modelValue":a[9]||(a[9]=e=>l.repass=e)},null,8,["placeholder","modelValue"])])),_:1})],64)):(n(),g(_,{key:1},[u($,{class:"text-gray m-15 text-left"},{default:i((()=>[u(V,{class:"cuIcon-infofill ml-5 mr-10"}),r(" 验证账户的真实性，绑定后请使用新账户来登录！ ")])),_:1}),u($,{class:"cu-form-group text-right"},{default:i((()=>[u($,{class:"title"},{default:i((()=>[r("新账号")])),_:1}),u(I,{placeholder:"输入新的邮箱或者手机号",name:"input",modelValue:l.account,"onUpdate:modelValue":a[4]||(a[4]=e=>l.account=e)},null,8,["modelValue"])])),_:1}),u($,{class:"cu-form-group text-right"},{default:i((()=>[u($,{class:"title"},{default:i((()=>[r("新账号验证码")])),_:1}),u(I,{placeholder:"输入验证码",name:"input",modelValue:l.newCode,"onUpdate:modelValue":a[5]||(a[5]=e=>l.newCode=e)},null,8,["modelValue"]),u(P,{class:h(["cu-btn bg-green shadow cu-load",l.loading?"loading":""]),disabled:l.loading,onClick:a[6]||(a[6]=e=>o.sendCode(!1))},{default:i((()=>[r("发送验证码")])),_:1},8,["class","disabled"])])),_:1})],64))])),_:1})])),_:1})])),_:1})])),_:1},8,["class"])])),_:1})}],["__scopeId","data-v-d53dedef"]]);export{V as default};
