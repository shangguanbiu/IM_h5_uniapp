import{_ as t,u as a,s as e,y as s,o as c,c as l,w as i,g as n,i as u,f as o,r as d,j as r,k as g,ab as h}from"./index.5cd51b9e.js";const f=a(e);var v=t({data:()=>({loginStore:f,globalConfig:f.globalConfig,setting:{voiceStatus:!0,vibrateStatus:!1,circleAvatar:!1}}),created(){var t;let a=null!=(t=s("appSetting"))?t:"";a&&(this.setting=a)},methods:{setVoice(t){this.setting.voiceStatus=t.detail.value,this.saveSet()},setVibrate(t){this.setting.vibrateStatus=t.detail.value,this.saveSet()},setAvatar(t){this.setting.circleAvatar=t.detail.value,this.saveSet()},saveSet(){f.setAppSetting(this.setting)}}},[["render",function(t,a,e,s,f,v){const _=d("cu-custom"),b=r,S=g,m=h;return c(),l(b,null,{default:i((()=>[n(_,{bgColor:"bg-gradual-green",isBack:!0},{backText:i((()=>[])),content:i((()=>[u("通用设置")])),_:1}),n(b,{class:"cu-bar bg-white solid-bottom margin-top"},{default:i((()=>[n(b,{class:"action"},{default:i((()=>[u("新消息")])),_:1})])),_:1}),n(b,{class:"cu-list menu"},{default:i((()=>[n(b,{class:"cu-item"},{default:i((()=>[n(b,{class:"content"},{default:i((()=>[n(S,null,{default:i((()=>[u("声音")])),_:1})])),_:1}),n(b,{class:"action"},{default:i((()=>[n(m,{class:o(["switch",f.setting.voiceStatus?"checked":""]),onChange:v.setVoice,checked:f.setting.voiceStatus},null,8,["onChange","class","checked"])])),_:1})])),_:1}),n(b,{class:"cu-item"},{default:i((()=>[n(b,{class:"content"},{default:i((()=>[n(S,null,{default:i((()=>[u("震动")])),_:1})])),_:1}),n(b,{class:"action"},{default:i((()=>[n(m,{class:o(["switch",f.setting.vibrateStatus?"checked":""]),onChange:v.setVibrate,checked:f.setting.vibrateStatus},null,8,["onChange","class","checked"])])),_:1})])),_:1})])),_:1}),n(b,{class:"cu-bar bg-white solid-bottom margin-top"},{default:i((()=>[n(b,{class:"action"},{default:i((()=>[u("其他设置")])),_:1})])),_:1}),n(b,{class:"cu-list menu"},{default:i((()=>[n(b,{class:"cu-item"},{default:i((()=>[n(b,{class:"content"},{default:i((()=>[n(S,null,{default:i((()=>[u("圆形头像")])),_:1})])),_:1}),n(b,{class:"action"},{default:i((()=>[n(m,{class:o(["switch",f.setting.circleAvatar?"checked":""]),onChange:v.setAvatar,checked:f.setting.circleAvatar},null,8,["onChange","class","checked"])])),_:1})])),_:1})])),_:1})])),_:1})}]]);export{v as default};
