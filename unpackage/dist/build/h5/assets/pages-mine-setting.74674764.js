import{_ as t,a as e,s as a,g as s,o as l,e as i,w as c,i as n,f as u,j as g,q as d,t as o,m as _,l as h,v as f,k as r,r as v,F as m,x as p,y as k,a5 as y}from"./index-784797a9.js";const b=e(a);const C=t({data:()=>({loginStore:b,globalConfig:b.globalConfig,setting:{voiceStatus:!0,vibrateStatus:!1,circleAvatar:!1},language:"",type_list:[{id:1,name:"中文",valus:"zh"},{id:2,name:"繁体中文",valus:"zhCN"},{id:3,name:"english",valus:"en"}],show_more:!1,index_get:0}),created(){let t=s("appSetting")??"";this.language=b.language,"zh"==this.language?this.index_get=0:"zhCN"==this.language?this.index_get=1:this.index_get=2,t&&(this.setting=t)},methods:{setVoice(t){this.setting.voiceStatus=t.detail.value,this.saveSet()},setVibrate(t){this.setting.vibrateStatus=t.detail.value,this.saveSet()},setAvatar(t){this.setting.circleAvatar=t.detail.value,this.saveSet()},saveSet(){b.setAppSetting(this.setting)},get_type(t,e,a){1==a?this.index_get=e:(b.set_language(this.type_list[this.index_get].valus),this.language=b.language,this.show_more=!1,this.$i18n.locale=this.type_list[this.index_get].valus)}}},[["render",function(t,e,a,s,b,C){const S=p("cu-custom"),x=n,w=k,z=y;return l(),i(x,null,{default:c((()=>[u(S,{bgColor:"bg-gradual-pink",isBack:!0},{backText:c((()=>[])),content:c((()=>[g("通用设置")])),_:1}),u(x,{class:"cu-bar bg-white solid-bottom margin-top"},{default:c((()=>[u(x,{class:"action"},{default:c((()=>[g("新消息")])),_:1})])),_:1}),u(x,{class:"cu-list menu"},{default:c((()=>[u(x,{class:"cu-item"},{default:c((()=>[u(x,{class:"content"},{default:c((()=>[u(w,null,{default:c((()=>[g("声音")])),_:1})])),_:1}),u(x,{class:"action"},{default:c((()=>[u(z,{class:d(["switch",b.setting.voiceStatus?"checked":""]),onChange:C.setVoice,checked:b.setting.voiceStatus},null,8,["onChange","class","checked"])])),_:1})])),_:1}),u(x,{class:"cu-item"},{default:c((()=>[u(x,{class:"content"},{default:c((()=>[u(w,null,{default:c((()=>[g("震动")])),_:1})])),_:1}),u(x,{class:"action"},{default:c((()=>[u(z,{class:d(["switch",b.setting.vibrateStatus?"checked":""]),onChange:C.setVibrate,checked:b.setting.vibrateStatus},null,8,["onChange","class","checked"])])),_:1})])),_:1})])),_:1}),u(x,{class:"cu-bar bg-white solid-bottom margin-top"},{default:c((()=>[u(x,{class:"action"},{default:c((()=>[g("其他设置")])),_:1})])),_:1}),u(x,{class:"cu-list menu"},{default:c((()=>[u(x,{class:"cu-item"},{default:c((()=>[u(x,{class:"content"},{default:c((()=>[u(w,null,{default:c((()=>[g("圆形头像")])),_:1})])),_:1}),u(x,{class:"action"},{default:c((()=>[u(z,{class:d(["switch",b.setting.circleAvatar?"checked":""]),onChange:C.setAvatar,checked:b.setting.circleAvatar},null,8,["onChange","class","checked"])])),_:1})])),_:1})])),_:1}),u(x,{class:"cu-list menu"},{default:c((()=>[u(x,{class:"cu-item"},{default:c((()=>[u(x,{class:"content"},{default:c((()=>[u(w,null,{default:c((()=>[g(o(t.$t("To_Login"))+"语言",1)])),_:1})])),_:1}),u(x,{class:"action"},{default:c((()=>[u(x,{onClick:e[0]||(e[0]=t=>b.show_more=!0)},{default:c((()=>["zh"==b.language?(l(),i(x,{key:0},{default:c((()=>[g("简体中文")])),_:1})):_("",!0),"zhCN"==b.language?(l(),i(x,{key:1},{default:c((()=>[g("繁体中文")])),_:1})):_("",!0),"en"==b.language?(l(),i(x,{key:2},{default:c((()=>[g("English")])),_:1})):_("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),h(u(x,{class:"type_more"},{default:c((()=>[u(x,{style:{"padding-top":"50px"}},{default:c((()=>[u(x,{class:"type_tit"},{default:c((()=>[g("语言")])),_:1}),(l(!0),r(m,null,v(b.type_list,((t,e)=>(l(),i(x,{class:d(["type_zi",{type_get:b.index_get==e}]),key:e,onClick:a=>C.get_type(t,e,1)},{default:c((()=>[g(o(t.name),1)])),_:2},1032,["class","onClick"])))),128))])),_:1}),u(x,{class:"type_close",onClick:e[1]||(e[1]=t=>C.get_type("","",2))},{default:c((()=>[g("确定")])),_:1})])),_:1},512),[[f,b.show_more]])])),_:1})}],["__scopeId","data-v-1c1f0ac4"]]);export{C as default};