import{q as e,J as a,p as s,K as c,L as n,M as t}from"./index.5cd51b9e.js";var i={scanQr:()=>{e({url:"/pages/index/scan"})},checkQr:i=>{i.includes(a)?(s=>{let c=s.replace(a,""),n=c.split("/"),i=n[n.length-1];t(c,{realToken:i}).then((a=>{if(0==a.code)switch(a.data.action){case"groupInfo":e({url:"/pages/message/group/info?group_id="+a.data.id});break;case"userInfo":e({url:"/pages/contacts/detail?id="+a.data.id})}}))})(i):s({title:"已识别内容",content:i,confirmText:"复制内容",success:function(e){e.confirm&&c({data:i,success:function(){n({title:"复制成功",icon:"none"})}})}})}};export{i as s};
