import{_ as e,u as s,s as t,g as a,C as l,U as r,n as i,J as u,o,e as n,w as c,i as d,f as m,j as g,B as h,k as f,r as _,F as p,m as y,t as k,p as U,q as x,x as b,O as C}from"./index-bbbfa810.js";const I=s(t),w=a("userInfo");const N=e({data:()=>({keywords:"",group_id:"",modelName:"",userList:[],allUser:[],isAdmin:!1,isManage:!1,isAuth:!1,userInfo:w,curUser:{}}),watch:{keywords(e){""==e?this.userList=this.allUser:this.search()}},onLoad(e){this.group_id=e.group_id?e.group_id:"",this.getGroupuserlist()},methods:{getGroupuserlist(){this.userList=[],this.$api.msgApi.groupUserList({group_id:this.group_id}).then((e=>{const s=e.data.filter((e=>1==e.role&&e.userInfo.id==w.user_id));s.length&&(this.isAdmin=!0);const t=e.data.filter((e=>2==e.role&&e.userInfo.id==w.user_id));t.length&&(this.manage=!0),(s.length||t.length)&&(this.isAuth=!0);const a=e.data;a.forEach((e=>{e.realname=e.userInfo.displayName,e.name_py=e.userInfo.name_py})),this.allUser=a,this.userList=e.data}))},openModel(e){e.realname=e.userInfo.displayName,e.avatar=e.userInfo.avatar,this.curUser=e,this.modelName="userOpt"},setManage(){const e=2==this.curUser.role?3:2;this.$api.msgApi.setManager({id:this.group_id,user_id:this.curUser.user_id,role:e}).then((e=>{0==e.code&&this.getGroupuserlist(),this.modelName=""}))},removeUser(){this.modelName="",l({title:"确定要删除该成员吗?",success:e=>{e.confirm&&this.$api.msgApi.removeUser({id:this.group_id,user_id:this.curUser.user_id}).then((e=>{0==e.code&&this.getGroupuserlist()}))}})},changeOwner(){this.modelName="",l({title:"确定将管理权限转移给该成员吗?",success:e=>{e.confirm&&this.$api.msgApi.changeOwner({id:this.group_id,user_id:this.curUser.user_id}).then((e=>{0==e.code&&r({url:"/pages/index/index"})}))}})},search(){const e=JSON.parse(JSON.stringify(this.allUser));this.userList=this.$util.searchObject(e,["realname","name_py"],this.keywords)},openChatDetail(e){if(w.user_id==e.user_id)return;let s=I.getContact(e.user_id),t=I.getContact(this.group_id);if(!(t.role<3||"1"==t.setting.profile||s))return u({title:"已开启用户隐私！",icon:"none"}),!1;i({url:"/pages/contacts/detail?id="+e.user_id})}}},[["render",function(e,s,t,a,l,r){const i=x("cu-custom"),u=b,I=C,w=d,N=x("Empty");return o(),n(w,null,{default:c((()=>[m(i,{bgColor:"bg-gradual-pink",isBack:!0},{backText:c((()=>[])),content:c((()=>[g("群成员")])),_:1}),m(w,{class:"cu-bar bg-white search fixed",style:h([{top:e.CustomBar+"px"}])},{default:c((()=>[m(w,{class:"search-form round"},{default:c((()=>[m(u,{class:"cuIcon-search"}),m(I,{type:"text",modelValue:l.keywords,"onUpdate:modelValue":s[0]||(s[0]=e=>l.keywords=e),placeholder:"输入搜索的关键词","confirm-type":"search"},null,8,["modelValue"])])),_:1})])),_:1},8,["style"]),m(w,{style:{"margin-top":"104rpx"}},{default:c((()=>[m(w,{class:"cu-list menu-avatar"},{default:c((()=>[(o(!0),f(p,null,_(l.userList,(e=>(o(),n(w,{class:"cu-item"},{default:c((()=>[m(w,{class:"cu-avatar round lg",style:h("background-image:url("+e.userInfo.avatar+");"),onClick:s=>r.openChatDetail(e)},null,8,["style","onClick"]),m(w,{class:"content"},{default:c((()=>[m(w,{class:"text-grey"},{default:c((()=>[m(w,{class:"text-cut"},{default:c((()=>[g(k(e.userInfo.displayName),1)])),_:2},1024),e.role<3?(o(),n(w,{key:0,class:U(["cu-tag round sm",1==e.role?"bg-red":"bg-orange"])},{default:c((()=>[g(k(1==e.role?"群主":2==e.role?"管理员":""),1)])),_:2},1032,["class"])):y("",!0),e.user_id==l.userInfo.user_id?(o(),n(w,{key:1,class:"cu-tag round sm"},{default:c((()=>[g("我")])),_:1})):y("",!0)])),_:2},1024)])),_:2},1024),m(w,{class:"action",onClick:s=>r.openModel(e)},{default:c((()=>[m(w,{class:"text-grey text-sm"},{default:c((()=>[e.role>1&&l.isAuth?(o(),n(u,{key:0,class:"cuIcon-more f-24"})):y("",!0)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),256)),l.userList.length?y("",!0):(o(),n(N,{key:0,noDatatext:"未搜索到数据",textcolor:"#999"}))])),_:1})])),_:1}),m(w,{class:U(["cu-modal bottom-modal","userOpt"==l.modelName?"show":""])},{default:c((()=>[m(w,{class:"cu-dialog"},{default:c((()=>[m(w,{class:"manage-content"},{default:c((()=>[m(w,{class:"cu-list menu bg-white"},{default:c((()=>[l.curUser?(o(),n(w,{key:0,class:"cu-item"},{default:c((()=>[m(w,{class:"content im-flex im-justify-content-center im-align-items-center"},{default:c((()=>[m(w,{class:"cu-avatar round sm",style:h("background-image:url("+l.curUser.avatar+");")},null,8,["style"]),m(w,{class:"text-cut ml-5"},{default:c((()=>[g(k(l.curUser.realname),1)])),_:1}),2==l.curUser.role?(o(),n(w,{key:0,class:"cu-tag round sm bg-orange"},{default:c((()=>[g("管理员")])),_:1})):y("",!0)])),_:1})])),_:1})):y("",!0),l.isAdmin?(o(),n(w,{key:1,class:"cu-item",onClick:s[1]||(s[1]=e=>r.changeOwner())},{default:c((()=>[m(w,{class:"content padding-tb-sm"},{default:c((()=>[m(u,{class:"c-orange"},{default:c((()=>[g("转让管理权限")])),_:1})])),_:1})])),_:1})):y("",!0),l.isAdmin?(o(),n(w,{key:2,class:"cu-item",onClick:s[2]||(s[2]=e=>r.setManage())},{default:c((()=>[m(w,{class:"content padding-tb-sm"},{default:c((()=>[m(u,null,{default:c((()=>[g(k(2==l.curUser.role?"取消管理员":"设为管理员"),1)])),_:1})])),_:1})])),_:1})):y("",!0),m(w,{class:"cu-item",onClick:s[3]||(s[3]=e=>r.removeUser())},{default:c((()=>[m(w,{class:"content padding-tb-sm"},{default:c((()=>[m(u,null,{default:c((()=>[g("移出群聊")])),_:1})])),_:1})])),_:1}),m(w,{class:"parting-line-5"}),m(w,{class:"cu-item",onClick:s[4]||(s[4]=e=>l.modelName="")},{default:c((()=>[m(w,{class:"content padding-tb-sm"},{default:c((()=>[m(u,{class:"c-red"},{default:c((()=>[g("取消")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["class"])])),_:1})}],["__scopeId","data-v-eae68f24"]]);export{N as default};
