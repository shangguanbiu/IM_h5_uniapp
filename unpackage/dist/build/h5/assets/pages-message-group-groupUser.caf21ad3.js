import{_ as s,u as e,s as t,g as a,D as r,V as l,n as u,K as i,o,e as n,w as c,i as d,f as _,j as g,t as m,C as p,k as h,r as f,F as y,m as k,q as U,x,y as $,P as b}from"./index-d8cdb88b.js";const C=e(t),I=a("userInfo");const w=s({data:()=>({keywords:"",group_id:"",modelName:"",userList:[],allUser:[],isAdmin:!1,isManage:!1,isAuth:!1,userInfo:I,curUser:{}}),watch:{keywords(s){""==s?this.userList=this.allUser:this.search()}},onLoad(s){this.group_id=s.group_id?s.group_id:"",this.getGroupuserlist()},methods:{getGroupuserlist(){this.userList=[],this.$api.msgApi.groupUserList({group_id:this.group_id}).then((s=>{const e=s.data.filter((s=>1==s.role&&s.userInfo.id==I.user_id));e.length&&(this.isAdmin=!0);const t=s.data.filter((s=>2==s.role&&s.userInfo.id==I.user_id));t.length&&(this.manage=!0),(e.length||t.length)&&(this.isAuth=!0);const a=s.data;a.forEach((s=>{s.realname=s.userInfo.displayName,s.name_py=s.userInfo.name_py})),this.allUser=a,this.userList=s.data}))},openModel(s){s.realname=s.userInfo.displayName,s.avatar=s.userInfo.avatar,this.curUser=s,this.modelName="userOpt"},setManage(){const s=2==this.curUser.role?3:2;this.$api.msgApi.setManager({id:this.group_id,user_id:this.curUser.user_id,role:s}).then((s=>{0==s.code&&this.getGroupuserlist(),this.modelName=""}))},removeUser(){this.modelName="",r({title:this.$t("group_sys.pop_tit1"),success:s=>{s.confirm&&this.$api.msgApi.removeUser({id:this.group_id,user_id:this.curUser.user_id}).then((s=>{0==s.code&&this.getGroupuserlist()}))}})},changeOwner(){this.modelName="",r({title:this.$t("group_sys.pop_tit2"),success:s=>{s.confirm&&this.$api.msgApi.changeOwner({id:this.group_id,user_id:this.curUser.user_id}).then((s=>{0==s.code&&l({url:"/pages/index/index"})}))}})},search(){const s=JSON.parse(JSON.stringify(this.allUser));this.userList=this.$util.searchObject(s,["realname","name_py"],this.keywords)},openChatDetail(s){if(I.user_id==s.user_id)return;let e=C.getContact(s.user_id),t=C.getContact(this.group_id);if(!(t.role<3||"1"==t.setting.profile||e))return i({title:this.$t("group_sys.pop_tit3"),icon:"none"}),!1;u({url:"/pages/contacts/detail?id="+s.user_id})}}},[["render",function(s,e,t,a,r,l){const u=x("cu-custom"),i=$,C=b,I=d,w=x("Empty");return o(),n(I,null,{default:c((()=>[_(u,{bgColor:"bg-gradual-pink",isBack:!0},{backText:c((()=>[])),content:c((()=>[g(m(s.$t("group_sys.user_list")),1)])),_:1}),_(I,{class:"cu-bar bg-white search fixed",style:p([{top:s.CustomBar+"px"}])},{default:c((()=>[_(I,{class:"search-form round"},{default:c((()=>[_(i,{class:"cuIcon-search"}),_(C,{type:"text",modelValue:r.keywords,"onUpdate:modelValue":e[0]||(e[0]=s=>r.keywords=s),placeholder:s.$t("group_sys.search_placeholder"),"confirm-type":"search"},null,8,["modelValue","placeholder"])])),_:1})])),_:1},8,["style"]),_(I,{style:{"margin-top":"104rpx"}},{default:c((()=>[_(I,{class:"cu-list menu-avatar"},{default:c((()=>[(o(!0),h(y,null,f(r.userList,(e=>(o(),n(I,{class:"cu-item"},{default:c((()=>[_(I,{class:"cu-avatar round lg",style:p("background-image:url("+e.userInfo.avatar+");"),onClick:s=>l.openChatDetail(e)},null,8,["style","onClick"]),_(I,{class:"content"},{default:c((()=>[_(I,{class:"text-grey"},{default:c((()=>[_(I,{class:"text-cut"},{default:c((()=>[g(m(e.userInfo.displayName),1)])),_:2},1024),e.role<3?(o(),n(I,{key:0,class:U(["cu-tag round sm",1==e.role?"bg-red":"bg-orange"])},{default:c((()=>[g(m(1==e.role?s.$t("group_sys.role_t1"):2==e.role?s.$t("group_sys.role_t2"):""),1)])),_:2},1032,["class"])):k("",!0),e.user_id==r.userInfo.user_id?(o(),n(I,{key:1,class:"cu-tag round sm"},{default:c((()=>[g("我")])),_:1})):k("",!0)])),_:2},1024)])),_:2},1024),_(I,{class:"action",onClick:s=>l.openModel(e)},{default:c((()=>[_(I,{class:"text-grey text-sm"},{default:c((()=>[e.role>1&&r.isAuth?(o(),n(i,{key:0,class:"cuIcon-more f-24"})):k("",!0)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),256)),r.userList.length?k("",!0):(o(),n(w,{key:0,noDatatext:s.$t("group_sys.search_no_data"),textcolor:"#999"},null,8,["noDatatext"]))])),_:1})])),_:1}),_(I,{class:U(["cu-modal bottom-modal","userOpt"==r.modelName?"show":""])},{default:c((()=>[_(I,{class:"cu-dialog"},{default:c((()=>[_(I,{class:"manage-content"},{default:c((()=>[_(I,{class:"cu-list menu bg-white"},{default:c((()=>[r.curUser?(o(),n(I,{key:0,class:"cu-item"},{default:c((()=>[_(I,{class:"content im-flex im-justify-content-center im-align-items-center"},{default:c((()=>[_(I,{class:"cu-avatar round sm",style:p("background-image:url("+r.curUser.avatar+");")},null,8,["style"]),_(I,{class:"text-cut ml-5"},{default:c((()=>[g(m(r.curUser.realname),1)])),_:1}),2==r.curUser.role?(o(),n(I,{key:0,class:"cu-tag round sm bg-orange"},{default:c((()=>[g(m(s.$t("group_sys.role_t2")),1)])),_:1})):k("",!0)])),_:1})])),_:1})):k("",!0),r.isAdmin?(o(),n(I,{key:1,class:"cu-item",onClick:e[1]||(e[1]=s=>l.changeOwner())},{default:c((()=>[_(I,{class:"content padding-tb-sm"},{default:c((()=>[_(i,{class:"c-orange"},{default:c((()=>[g(m(s.$t("group_sys.change_admin")),1)])),_:1})])),_:1})])),_:1})):k("",!0),r.isAdmin?(o(),n(I,{key:2,class:"cu-item",onClick:e[2]||(e[2]=s=>l.setManage())},{default:c((()=>[_(I,{class:"content padding-tb-sm"},{default:c((()=>[_(i,null,{default:c((()=>[g(m(2==r.curUser.role?s.$t("group_sys.role_set_t1"):s.$t("group_sys.role_set_t2")),1)])),_:1})])),_:1})])),_:1})):k("",!0),_(I,{class:"cu-item",onClick:e[3]||(e[3]=s=>l.removeUser())},{default:c((()=>[_(I,{class:"content padding-tb-sm"},{default:c((()=>[_(i,null,{default:c((()=>[g(m(s.$t("group_sys.out_group")),1)])),_:1})])),_:1})])),_:1}),_(I,{class:"parting-line-5"}),_(I,{class:"cu-item",onClick:e[4]||(e[4]=s=>r.modelName="")},{default:c((()=>[_(I,{class:"content padding-tb-sm"},{default:c((()=>[_(i,{class:"c-red"},{default:c((()=>[g(m(s.$t("group_sys.ok")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["class"])])),_:1})}],["__scopeId","data-v-eb15a8a4"]]);export{w as default};
