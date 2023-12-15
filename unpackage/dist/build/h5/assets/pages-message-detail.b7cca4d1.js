import{a2 as t,_ as e,o as s,e as i,w as a,f as o,p as n,j as l,t as c,a0 as u,x as r,i as d,O as p,a3 as h,B as m,m as f,A as g,q as y,Q as _,u as k,s as C,g as b,n as x,C as w,U as T,J as v,k as $,r as S,F as A,a1 as I,a4 as N,a5 as P,a6 as D,y as M,a7 as U}from"./index-23f4cc32.js";import{r as L}from"./uni-app.es.9cc35cc0.js";const z={data:()=>({}),created(){this.popup=this.getParent()},methods:{getParent(t="uniPopup"){let e=this.$parent,s=e.$options.name;for(;s!==t;){if(e=e.$parent,!e)return!1;s=e.$options.name}return e}}},B={en:{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"},"zh-Hans":{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"},"zh-Hant":{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}},{t:j}=t(B);const E=e({name:"uniPopupDialog",mixins:[z],emits:["confirm","close"],props:{value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:""},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""}},data:()=>({dialogType:"error",focus:!1,val:""}),computed:{okText(){return this.confirmText||j("uni-popup.ok")},closeText(){return this.cancelText||j("uni-popup.cancel")},placeholderText(){return this.placeholder||j("uni-popup.placeholder")},titleText(){return this.title||j("uni-popup.title")}},watch:{type(t){this.dialogType=t},mode(t){"input"===t&&(this.dialogType="info")},value(t){this.val=t}},created(){this.popup.disableMask(),"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted(){this.focus=!0},methods:{onOk(){"input"===this.mode?this.$emit("confirm",this.val):this.$emit("confirm"),this.beforeClose||this.popup.close()},closeDialog(){this.$emit("close"),this.beforeClose||this.popup.close()},close(){this.popup.close()}}},[["render",function(t,e,h,m,f,g){const y=r,_=d,k=p;return s(),i(_,{class:"uni-popup-dialog"},{default:a((()=>[o(_,{class:"uni-dialog-title"},{default:a((()=>[o(y,{class:n(["uni-dialog-title-text",["uni-popup__"+f.dialogType]])},{default:a((()=>[l(c(g.titleText),1)])),_:1},8,["class"])])),_:1}),"base"===h.mode?(s(),i(_,{key:0,class:"uni-dialog-content"},{default:a((()=>[u(t.$slots,"default",{},(()=>[o(y,{class:"uni-dialog-content-text"},{default:a((()=>[l(c(h.content),1)])),_:1})]),!0)])),_:3})):(s(),i(_,{key:1,class:"uni-dialog-content"},{default:a((()=>[u(t.$slots,"default",{},(()=>[o(k,{class:"uni-dialog-input",modelValue:f.val,"onUpdate:modelValue":e[0]||(e[0]=t=>f.val=t),type:"text",placeholder:g.placeholderText,focus:f.focus},null,8,["modelValue","placeholder","focus"])]),!0)])),_:3})),o(_,{class:"uni-dialog-button-group"},{default:a((()=>[o(_,{class:"uni-dialog-button",onClick:g.closeDialog},{default:a((()=>[o(y,{class:"uni-dialog-button-text"},{default:a((()=>[l(c(g.closeText),1)])),_:1})])),_:1},8,["onClick"]),o(_,{class:"uni-dialog-button uni-border-left",onClick:g.onOk},{default:a((()=>[o(y,{class:"uni-dialog-button-text uni-button-color"},{default:a((()=>[l(c(g.okText),1)])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:3})}],["__scopeId","data-v-d19f9ee6"]]);class O{constructor(t,e){this.options=t,this.animation=h(t),this.currentStepAnimates={},this.next=0,this.$=e}_nvuePushAnimates(t,e){let s=this.currentStepAnimates[this.next],i={};if(i=s||{styles:{},config:{}},H.includes(t)){i.styles.transform||(i.styles.transform="");let s="";"rotate"===t&&(s="deg"),i.styles.transform+=`${t}(${e+s}) `}else i.styles[t]=`${e}`;this.currentStepAnimates[this.next]=i}_animateRun(t={},e={}){let s=this.$.$refs.ani.ref;if(s)return new Promise(((i,a)=>{nvueAnimation.transition(s,{styles:t,...e},(t=>{i()}))}))}_nvueNextAnimate(t,e=0,s){let i=t[e];if(i){let{styles:a,config:o}=i;this._animateRun(a,o).then((()=>{e+=1,this._nvueNextAnimate(t,e,s)}))}else this.currentStepAnimates={},"function"==typeof s&&s(),this.isEnd=!0}step(t={}){return this.animation.step(t),this}run(t){this.$.animationData=this.animation.export(),this.$.timer=setTimeout((()=>{"function"==typeof t&&t()}),this.$.durationTime)}}const H=["matrix","matrix3d","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","translate","translate3d","translateX","translateY","translateZ"];function X(t,e){if(e)return clearTimeout(e.timer),new O(t,e)}H.concat(["opacity","backgroundColor"],["width","height","left","right","top","bottom"]).forEach((t=>{O.prototype[t]=function(...e){return this.animation[t](...e),this}}));const Y=e({name:"uniTransition",emits:["click","change"],props:{show:{type:Boolean,default:!1},modeClass:{type:[Array,String],default:()=>"fade"},duration:{type:Number,default:300},styles:{type:Object,default:()=>({})},customClass:{type:String,default:""}},data:()=>({isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}),watch:{show:{handler(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{stylesObject(){let t={...this.styles,"transition-duration":this.duration/1e3+"s"},e="";for(let s in t){e+=this.toLine(s)+":"+t[s]+";"}return e},transformStyles(){return"transform:"+this.transform+";opacity:"+this.opacity+";"+this.stylesObject}},created(){this.config={duration:this.duration,timingFunction:"ease",transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init(t={}){t.duration&&(this.durationTime=t.duration),this.animation=X(Object.assign(this.config,t),this)},onClick(){this.$emit("click",{detail:this.isShow})},step(t,e={}){if(this.animation){for(let e in t)try{"object"==typeof t[e]?this.animation[e](...t[e]):this.animation[e](t[e])}catch(s){console.error(`方法 ${e} 不存在`)}return this.animation.step(e),this}},run(t){this.animation&&this.animation.run(t)},open(){clearTimeout(this.timer),this.transform="",this.isShow=!0;let{opacity:t,transform:e}=this.styleInit(!1);void 0!==t&&(this.opacity=t),this.transform=e,this.$nextTick((()=>{this.timer=setTimeout((()=>{this.animation=X(this.config,this),this.tranfromInit(!1).step(),this.animation.run(),this.$emit("change",{detail:this.isShow})}),20)}))},close(t){this.animation&&this.tranfromInit(!0).step().run((()=>{this.isShow=!1,this.animationData=null,this.animation=null;let{opacity:t,transform:e}=this.styleInit(!1);this.opacity=t||1,this.transform=e,this.$emit("change",{detail:this.isShow})}))},styleInit(t){let e={transform:""},s=(t,s)=>{"fade"===s?e.opacity=this.animationType(t)[s]:e.transform+=this.animationType(t)[s]+" "};return"string"==typeof this.modeClass?s(t,this.modeClass):this.modeClass.forEach((e=>{s(t,e)})),e},tranfromInit(t){let e=(t,e)=>{let s=null;"fade"===e?s=t?0:1:(s=t?"-100%":"0","zoom-in"===e&&(s=t?.8:1),"zoom-out"===e&&(s=t?1.2:1),"slide-right"===e&&(s=t?"100%":"0"),"slide-bottom"===e&&(s=t?"100%":"0")),this.animation[this.animationMode()[e]](s)};return"string"==typeof this.modeClass?e(t,this.modeClass):this.modeClass.forEach((s=>{e(t,s)})),this.animation},animationType:t=>({fade:t?1:0,"slide-top":`translateY(${t?"0":"-100%"})`,"slide-right":`translateX(${t?"0":"100%"})`,"slide-bottom":`translateY(${t?"0":"100%"})`,"slide-left":`translateX(${t?"0":"-100%"})`,"zoom-in":`scaleX(${t?1:.8}) scaleY(${t?1:.8})`,"zoom-out":`scaleX(${t?1:1.2}) scaleY(${t?1:1.2})`}),animationMode:()=>({fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}),toLine:t=>t.replace(/([A-Z])/g,"-$1").toLowerCase()}},[["render",function(t,e,o,l,c,r){const p=d;return c.isShow?(s(),i(p,{key:0,ref:"ani",animation:c.animationData,class:n(o.customClass),style:m(r.transformStyles),onClick:r.onClick},{default:a((()=>[u(t.$slots,"default")])),_:3},8,["animation","class","style","onClick"])):f("",!0)}]]);const R=e({name:"uniPopup",components:{keypress:{name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted(){const t={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(e=>{if(this.disable)return;const s=Object.keys(t).find((s=>{const i=e.key,a=t[s];return a===i||Array.isArray(a)&&a.includes(i)}));s&&setTimeout((()=>{this.$emit(s,{})}),0)}))},render:()=>{}}},emits:["change","maskClick"],props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},isMaskClick:{type:Boolean,default:null},maskClick:{type:Boolean,default:null},backgroundColor:{type:String,default:"none"},safeArea:{type:Boolean,default:!0},maskBackgroundColor:{type:String,default:"rgba(0, 0, 0, 0.4)"}},watch:{type:{handler:function(t){this.config[t]&&this[this.config[t]](!0)},immediate:!0},isDesktop:{handler:function(t){this.config[t]&&this[this.config[this.type]](!0)},immediate:!0},maskClick:{handler:function(t){this.mkclick=t},immediate:!0},isMaskClick:{handler:function(t){this.mkclick=t},immediate:!0},showPopup(t){document.getElementsByTagName("body")[0].style.overflow=t?"hidden":"visible"}},data(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,popupWidth:0,popupHeight:0,config:{top:"top",bottom:"bottom",center:"center",left:"left",right:"right",message:"top",dialog:"center",share:"bottom"},maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:this.isDesktop?"fixforpc-top":"top"}},computed:{isDesktop(){return this.popupWidth>=500&&this.popupHeight>=500},bg(){return""===this.backgroundColor||"none"===this.backgroundColor?"transparent":this.backgroundColor}},mounted(){(()=>{const{windowWidth:t,windowHeight:e,windowTop:s,safeArea:i,screenHeight:a,safeAreaInsets:o}=_();this.popupWidth=t,this.popupHeight=e+(s||0),i&&this.safeArea?this.safeAreaInsets=o.bottom:this.safeAreaInsets=0})()},unmounted(){this.setH5Visible()},created(){null===this.isMaskClick&&null===this.maskClick?this.mkclick=!0:this.mkclick=null!==this.isMaskClick?this.isMaskClick:this.maskClick,this.animation?this.duration=300:this.duration=0,this.messageChild=null,this.clearPropagation=!1,this.maskClass.backgroundColor=this.maskBackgroundColor},methods:{setH5Visible(){document.getElementsByTagName("body")[0].style.overflow="visible"},closeMask(){this.maskShow=!1},disableMask(){this.mkclick=!1},clear(t){t.stopPropagation(),this.clearPropagation=!0},open(t){this.showPopup&&(clearTimeout(this.timer),this.showPopup=!1);t&&-1!==["top","center","bottom","left","right","message","dialog","share"].indexOf(t)||(t=this.type),this.config[t]?(this[this.config[t]](),this.$emit("change",{show:!0,type:t})):console.error("缺少类型：",t)},close(t){this.showTrans=!1,this.$emit("change",{show:!1,type:this.type}),clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showPopup=!1}),300)},touchstart(){this.clearPropagation=!1},onTap(){this.clearPropagation?this.clearPropagation=!1:(this.$emit("maskClick"),this.mkclick&&this.close())},top(t){this.popupstyle=this.isDesktop?"fixforpc-top":"top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0,backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0,this.$nextTick((()=>{this.messageChild&&"message"===this.type&&this.messageChild.timerClose()})))},bottom(t){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0,paddingBottom:this.safeAreaInsets+"px",backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0)},center(t){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"},t||(this.showPopup=!0,this.showTrans=!0)},left(t){this.popupstyle="left",this.ani=["slide-left"],this.transClass={position:"fixed",left:0,bottom:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)},right(t){this.popupstyle="right",this.ani=["slide-right"],this.transClass={position:"fixed",bottom:0,right:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)}}},[["render",function(t,e,l,c,r,p){const h=L(g("uni-transition"),Y),_=d,k=y("keypress");return r.showPopup?(s(),i(_,{key:0,class:n(["uni-popup",[r.popupstyle,p.isDesktop?"fixforpc-z-index":""]])},{default:a((()=>[o(_,{onTouchstart:p.touchstart},{default:a((()=>[r.maskShow?(s(),i(h,{key:"1",name:"mask","mode-class":"fade",styles:r.maskClass,duration:r.duration,show:r.showTrans,onClick:p.onTap},null,8,["styles","duration","show","onClick"])):f("",!0),o(h,{key:"2","mode-class":r.ani,name:"content",styles:r.transClass,duration:r.duration,show:r.showTrans,onClick:p.onTap},{default:a((()=>[o(_,{class:n(["uni-popup__wrapper",[r.popupstyle]]),style:m({backgroundColor:p.bg}),onClick:p.clear},{default:a((()=>[u(t.$slots,"default",{},void 0,!0)])),_:3},8,["style","class","onClick"])])),_:3},8,["mode-class","styles","duration","show","onClick"])])),_:3},8,["onTouchstart"]),r.maskShow?(s(),i(k,{key:0,onEsc:p.onTap},null,8,["onEsc"])):f("",!0)])),_:3},8,["class"])):f("",!0)}],["__scopeId","data-v-dd488718"]]);const V=e({name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding(){return"string"==typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick(){this.$emit("click")}}},[["render",function(t,e,p,h,g,y){const _=d,k=r;return s(),i(_,{class:"uni-section"},{default:a((()=>[o(_,{class:"uni-section-header",onClick:y.onClick},{default:a((()=>[p.type?(s(),i(_,{key:0,class:n(["uni-section-header__decoration",p.type])},null,8,["class"])):u(t.$slots,"decoration",{key:1},void 0,!0),o(_,{class:"uni-section-header__content"},{default:a((()=>[o(k,{style:m({"font-size":p.titleFontSize,color:p.titleColor}),class:n(["uni-section__content-title",{distraction:!p.subTitle}])},{default:a((()=>[l(c(p.title),1)])),_:1},8,["style","class"]),p.subTitle?(s(),i(k,{key:0,style:m({"font-size":p.subTitleFontSize,color:p.subTitleColor}),class:"uni-section-header__content-sub"},{default:a((()=>[l(c(p.subTitle),1)])),_:1},8,["style"])):f("",!0)])),_:1}),o(_,{class:"uni-section-header__slot-right"},{default:a((()=>[u(t.$slots,"right",{},void 0,!0)])),_:3})])),_:3},8,["onClick"]),o(_,{class:"uni-section-content",style:m({padding:y._padding})},{default:a((()=>[u(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3})}],["__scopeId","data-v-0a8818d5"]]),F=k(C),G=b("userInfo");const J=e({components:{},data:()=>({pageLoading:!0,contact_id:null,is_group:0,modelName:!1,userList:[],allUser:[],chatRecordlist:[{text:"文本",icon:"icon-wenben",type:"text"},{text:"图片",icon:"icon-zhaopian",type:"image"},{text:"文件",icon:"icon-wenjian",type:"file"},{text:"视频",icon:"icon-shipin",type:"video"},{text:"项目",icon:"icon-xiangmu_2",type:"project"},{text:"客户",icon:"icon-kehu",type:"leads"}],radioList:[{label:"关闭",value:0},{label:"仅管理员可发言",value:1},{label:"仅群主可发言",value:2}],isAuth:!1,contact:null,isAdmin:!1,isManage:!1,user_ids:[],user:[]}),onShow(){this.getUserlist()},onLoad:function(t){this.is_group=t.is_group,this.contact_id=t.id;let e=F.getContact(this.contact_id);this.contact=e,0==this.is_group&&(e.userInfo={id:e.user_id,account:e.account,displayName:e.displayName,avatar:e.avatar},this.allUser.push(e),this.userList.push(e))},methods:{openModel(t){this.modelName=t},closeModel(){this.modelName=!1},saveManage(){this.isAuth&&(this.$api.msgApi.groupSetting({id:this.contact.id,setting:this.contact.setting}),this.modelName=!1)},setManage(t){this.contact.setting.manage=t.detail.value?"1":"0"},setInvite(t){this.contact.setting.invite=t.detail.value?"1":"0"},setProfile(t){this.contact.setting.profile=t.detail.value?"1":"0"},setSpeak(t){this.contact.setting.nospeak=t.detail.value},setIsNotice(t){this.contact.is_notice=t.detail.value?0:1,this.$api.msgApi.isNoticeAPI({id:this.contact.id,is_group:this.contact.is_group,is_notice:this.contact.is_notice})},setIsTop(t){this.contact.is_top=t.detail.value?1:0,this.$api.msgApi.setChatTopAPI({id:this.contact.id,is_group:this.contact.is_group,is_top:this.contact.is_top})},editNotice(){this.isAuth&&(this.$api.msgApi.setNotice({id:this.contact.id,notice:this.contact.notice}),this.modelName=!1)},open(){this.$refs.popup.open()},openQr(){x({url:"/pages/index/qrcode?group_id="+this.contact.id})},editGroupName(t){this.$api.msgApi.editGroupName({id:this.contact.id,displayName:t}).then((e=>{this.contact.displayName=t,this.$refs.popup.close()}))},closePop(){this.$refs.popup.close()},removeGroup(){let t="退出群聊";this.isAdmin&&(t="解散群聊"),w({title:"确定要"+t+"吗?",success:t=>{t.confirm&&(this.isAdmin?this.$api.msgApi.removeGroup({id:this.contact.id}).then((t=>{T({url:"/pages/index/index"})})):this.$api.msgApi.removeUser({id:this.contact.id,user_id:G.user_id}).then((t=>{T({url:"/pages/index/index"})})))}})},editUser(t){this.user_ids=this.allUser.map((t=>t.user_id)),0==this.contact.is_group&&(t=1),x({url:"/pages/index/userSelection?type="+t+"&contact_id="+this.contact.id})},manageUser(){x({url:"/pages/message/group/groupUser?group_id="+this.contact.id})},goChatRecord(t){x({url:"/package/message/pages/chatRecord/chatRecord?type="+t+"&toContactId="+this.contact_id+"&is_group=1"})},getUserlist(){0!=this.is_group&&(this.userList=[],this.$api.msgApi.groupUserList({group_id:this.contact_id}).then((t=>{if(this.user=t.data,0!==t.code)return;const e=t.data.filter((t=>1==t.role&&t.userInfo.id==G.user_id));e.length&&(this.isAdmin=!0);const s=t.data.filter((t=>2==t.role&&t.userInfo.id==G.user_id));s.length&&(this.manage=!0),(e.length||s.length)&&(this.isAuth=!0),this.allUser=JSON.parse(JSON.stringify(t.data)),t.data.length>18?this.isAuth?this.userList=t.data.splice(0,18):this.contact.setting.invite?this.userList=t.data.splice(0,19):this.userList=t.data.splice(0,20):this.userList=t.data,this.pageLoading=!1})))},openChatDetail(t){if(G.user_id==t.id)return;let e=F.getContact(t.id);if(!(this.contact.role<3||"1"==this.contact.setting.profile||e))return v({title:"已开启用户隐私！",icon:"none"}),!1;x({url:"/pages/contacts/detail?id="+t.id})}}},[["render",function(t,e,u,p,h,m){const _=y("cu-custom"),k=M,C=d,b=r,x=I,w=L(g("uni-popup-dialog"),E),T=L(g("uni-popup"),R),v=N,z=P,B=U,j=D,O=L(g("uni-section"),V);return s(),i(C,null,{default:a((()=>[o(_,{bgColor:"bg-gradual-pink",isBack:!0},{backText:a((()=>[])),content:a((()=>[l("聊天信息")])),_:1}),o(C,null,{default:a((()=>[o(C,{class:"bg-white"},{default:a((()=>[o(C,{class:"user-list im-flex im-justify-content-start im-align-items-center im-a im-wrap"},{default:a((()=>[(s(!0),$(A,null,S(h.userList,((t,e)=>(s(),i(C,{class:"user-info mt-20",key:e,align:"center"},{default:a((()=>[o(k,{class:"user-avatar",src:t.userInfo.avatar,onClick:e=>m.openChatDetail(t.userInfo)},null,8,["src","onClick"]),o(C,{class:"text-center user-name text-overflow"},{default:a((()=>[l(c(t.userInfo.displayName),1)])),_:2},1024)])),_:2},1024)))),128)),h.isAuth||0==h.is_group||h.contact.setting.invite?(s(),i(C,{key:0,class:"user-info mt-20"},{default:a((()=>[o(C,{class:"user-opt radius-8",style:{margin:"auto"},onClick:e[0]||(e[0]=t=>m.editUser(2))},{default:a((()=>[o(C,{class:"icon cuIcon-add f-24"})])),_:1}),o(C,{class:"f-11 mt-5"},{default:a((()=>[l("添加成员")])),_:1})])),_:1})):f("",!0),h.isAuth?(s(),i(C,{key:1,class:"user-info mt-20"},{default:a((()=>[o(C,{class:"user-opt radius-8",style:{margin:"auto"},onClick:e[1]||(e[1]=t=>m.manageUser())},{default:a((()=>[o(C,{class:"icon cuIcon-move f-24"})])),_:1}),o(C,{class:"f-11 mt-5"},{default:a((()=>[l("移除成员")])),_:1})])),_:1})):f("",!0)])),_:1}),1==h.is_group?(s(),i(x,{key:0,class:"mt-10",url:`/pages/message/group/groupUser?group_id=${h.contact_id}`},{default:a((()=>[o(C,{class:"text-center pb-15 pt-15 im-flex im-justify-content-center im-align-items-center"},{default:a((()=>[o(b,{class:"gui-list-title-text gui-list-one-line gui-primary-color"},{default:a((()=>[l("查看全部群成员")])),_:1}),o(b,{class:"gui-list-title-desc gui-color-gray"},{default:a((()=>[l(c(h.allUser.length)+"人",1)])),_:1}),o(b,{class:"cuIcon-right"})])),_:1})])),_:1},8,["url"])):f("",!0)])),_:1}),1==h.is_group?(s(),i(C,{key:0,class:"cu-list menu mt-15 bg-white"},{default:a((()=>[o(C,{class:"cu-item",onClick:m.open},{default:a((()=>[o(C,{class:"content padding-tb-sm"},{default:a((()=>[o(C,null,{default:a((()=>[l(" 群聊名称 ")])),_:1})])),_:1}),o(C,{class:"action"},{default:a((()=>[o(C,{class:"text-grey"},{default:a((()=>[l(c(h.contact.displayName)+" ",1),o(b,{class:"cuIcon-right"})])),_:1})])),_:1})])),_:1},8,["onClick"]),o(C,{class:"cu-item",onClick:e[2]||(e[2]=t=>m.openModel("notice"))},{default:a((()=>[o(C,{class:"content padding-tb-sm"},{default:a((()=>[o(C,null,{default:a((()=>[l(" 群公告 ")])),_:1})])),_:1}),o(C,{class:"action",style:{width:"80%"}},{default:a((()=>[o(C,{class:"text-grey im-flex im-justify-content-end"},{default:a((()=>[o(C,{class:"text-overflow notice-line"},{default:a((()=>[l(c(h.contact.notice??"暂无公告"),1)])),_:1}),o(b,{class:"cuIcon-right"})])),_:1})])),_:1})])),_:1}),h.isAuth?(s(),i(C,{key:0,class:"cu-item",onClick:e[3]||(e[3]=t=>m.openModel("manage"))},{default:a((()=>[o(C,{class:"content padding-tb-sm"},{default:a((()=>[o(C,null,{default:a((()=>[l(" 群管理 ")])),_:1})])),_:1}),o(C,{class:"action"},{default:a((()=>[o(C,{class:"text-grey"},{default:a((()=>[o(b,{class:"cuIcon-right"})])),_:1})])),_:1})])),_:1})):f("",!0),o(T,{ref:"popup",type:"dialog"},{default:a((()=>[o(w,{mode:"input",value:h.contact.displayName,title:"修改群名称",duration:2e3,"before-close":!0,onClose:m.closePop,onConfirm:m.editGroupName},null,8,["value","onClose","onConfirm"])])),_:1},512)])),_:1})):f("",!0),o(C,{class:"cu-list menu mt-15 bg-white"},{default:a((()=>[o(C,{class:"cu-item"},{default:a((()=>[o(C,{class:"content padding-tb-sm"},{default:a((()=>[o(C,null,{default:a((()=>[l(" 消息免打扰 ")])),_:1})])),_:1}),o(C,{class:"action"},{default:a((()=>[o(v,{class:n(["switch",h.contact.is_notice?"":"checked"]),onChange:m.setIsNotice,checked:!h.contact.is_notice},null,8,["onChange","class","checked"])])),_:1})])),_:1}),o(C,{class:"cu-item"},{default:a((()=>[o(C,{class:"content padding-tb-sm"},{default:a((()=>[o(C,null,{default:a((()=>[l(" 置顶聊天 ")])),_:1})])),_:1}),o(C,{class:"action"},{default:a((()=>[o(v,{class:n(["switch",h.contact.is_top?"checked":""]),onChange:m.setIsTop,checked:!!h.contact.is_top},null,8,["onChange","class","checked"])])),_:1})])),_:1})])),_:1}),1==h.is_group?(s(),i(C,{key:1,class:"cu-list menu mt-15 bg-white",onClick:m.removeGroup},{default:a((()=>[o(C,{class:"cu-item text-center delete-btn"},{default:a((()=>[o(b,{class:"c-red"},{default:a((()=>[l(c(h.isAdmin?"解散群聊":"退出群聊"),1)])),_:1})])),_:1})])),_:1},8,["onClick"])):f("",!0),o(C,{class:"parting-line-20"}),o(C,{class:n(["cu-modal bottom-modal","notice"==h.modelName?"show":""])},{default:a((()=>[o(C,{class:"cu-dialog"},{default:a((()=>[o(C,{class:"cu-bar bg-white"},{default:a((()=>[o(C,{class:"action text-gray",onClick:m.closeModel},{default:a((()=>[l("取消")])),_:1},8,["onClick"]),o(C,{class:"action text-green",onClick:m.editNotice},{default:a((()=>[l("保存")])),_:1},8,["onClick"])])),_:1}),o(C,{class:"notice-content"},{default:a((()=>[o(z,{class:"im-textarea",maxlength:"-1",disabled:!h.isAuth,modelValue:h.contact.notice,"onUpdate:modelValue":e[4]||(e[4]=t=>h.contact.notice=t),onInput:t.textareaAInput,placeholder:"请输入公告内容..."},null,8,["disabled","modelValue","onInput"])])),_:1})])),_:1})])),_:1},8,["class"]),o(C,{class:n(["cu-modal bottom-modal","manage"==h.modelName?"show":""])},{default:a((()=>[o(C,{class:"cu-dialog"},{default:a((()=>[o(C,{class:"cu-bar bg-white"},{default:a((()=>[o(C,{class:"action text-gray",onClick:m.closeModel},{default:a((()=>[l("取消")])),_:1},8,["onClick"]),o(C,{class:"action text-green",onClick:m.saveManage},{default:a((()=>[l("保存")])),_:1},8,["onClick"])])),_:1}),o(C,{class:"manage-content"},{default:a((()=>[o(C,{class:"cu-list menu mt-15 bg-white"},{default:a((()=>[o(C,{class:"cu-item"},{default:a((()=>[o(C,{class:"content padding-tb-sm"},{default:a((()=>[o(C,null,{default:a((()=>[l("仅群主和群管理员可以管理")])),_:1}),o(C,{class:"text-gray text-sm"},{default:a((()=>[l(" 启用后，其他成员不能修改群名称，编辑公告等")])),_:1})])),_:1}),o(C,{class:"action"},{default:a((()=>[o(v,{class:n(["switch","1"==h.contact.setting.manage?"checked":""]),onChange:m.setManage,checked:"1"==h.contact.setting.manage},null,8,["onChange","class","checked"])])),_:1})])),_:1}),o(C,{class:"cu-item"},{default:a((()=>[o(C,{class:"content padding-tb-sm"},{default:a((()=>[o(C,null,{default:a((()=>[l("允许群成员邀请")])),_:1}),o(C,{class:"text-gray text-sm"},{default:a((()=>[l("启用后，其他成员可以邀请其他人加入群聊")])),_:1})])),_:1}),o(C,{class:"action"},{default:a((()=>[o(v,{class:n(["switch","1"==h.contact.setting.invite?"checked":""]),onChange:m.setInvite,checked:"1"==h.contact.setting.invite},null,8,["onChange","class","checked"])])),_:1})])),_:1}),o(C,{class:"cu-item"},{default:a((()=>[o(C,{class:"content padding-tb-sm"},{default:a((()=>[o(C,null,{default:a((()=>[l("允许添加群成员为好友")])),_:1}),o(C,{class:"text-gray text-sm"},{default:a((()=>[l("启用后，成员可以互相查看资料并添加为好友或发消息")])),_:1})])),_:1}),o(C,{class:"action"},{default:a((()=>[o(v,{class:n(["switch","1"==h.contact.setting.profile?"checked":""]),onChange:m.setProfile,checked:"1"==h.contact.setting.profile},null,8,["onChange","class","checked"])])),_:1})])),_:1}),o(O,{title:"群聊禁言",type:"line"},{default:a((()=>[o(j,{class:"block",onChange:m.setSpeak},{default:a((()=>[(s(!0),$(A,null,S(h.radioList,(t=>(s(),i(C,{class:"cu-form-group"},{default:a((()=>[o(C,{class:"title"},{default:a((()=>[l(c(t.label),1)])),_:2},1024),o(B,{class:n(h.contact.setting.nospeak==t.value?"checked":""),checked:h.contact.setting.nospeak==t.value,value:t.value},null,8,["class","checked","value"])])),_:2},1024)))),256))])),_:1},8,["onChange"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["class"])])),_:1})])),_:1})}],["__scopeId","data-v-edfae7d1"]]);export{J as default};
