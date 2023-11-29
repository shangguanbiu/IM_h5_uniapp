import{_ as e,Z as t,o as s,c as i,w as o,g as a,h as n,f as l,n as c,i as r,t as d,z as u,j as h,a0 as m,l as p,s as g,u as f,y,a1 as x,L as _,a2 as C,a3 as k,a4 as b,q as w,p as v,b as I,D as T,d as M,e as S,F as B,E as U,G as j,I as A,A as L,S as R,m as N,U as D,a as $,W as E,$ as H,a5 as F,a6 as O,O as P,K as z,a7 as V,P as J,r as W,k as q,R as G}from"./index.5cd51b9e.js";import{_ as K}from"./uni-load-more.9554ceb4.js";import{r as Y}from"./uni-app.es.df83c1db.js";import{e as Z,_ as Q}from"./emoji.41844c8b.js";import{s as X}from"./status.8d414f26.js";let ee;var te=e({name:"syAudio",emits:["audioPlay","audioPause","audioEnd","audioCanplay","change"],data:()=>({audio_status:!1,timeTxt:"00 : 00",timeIndex:0,sliderIndex:0,maxSliderIndex:100,stringObject:e=>typeof e,innerAudioContext:t()}),props:{autoplay:{type:Boolean,default:!1},src:{type:[String,Array],default:""},isCountDown:{type:Boolean,default:!1},audioCover:{type:String,default:""},audioTitle:{type:String,default:"new Audio Title"},audioTitleColor:{type:String,default:"#333"},subheading:{type:String,default:"new Audio Subheading"},activeColor:{type:String,default:"#bf41a2"},backgroundColor:{type:String,default:"#f1c38b"}},async mounted(){if(this.innerAudioContext.src="string"==typeof this.src?this.src:this.src[0],this.autoplay){if(!this.src)return console.error("src cannot be empty，The target value is string or array");if("micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)){const e=require("../../utils/jweixin");e.config({}),e.ready((()=>{WeixinJSBridge.invoke("getNetworkType",{},(e=>{this.innerAudioContext.play(),this.countDown()}))}))}}this.innerAudioContext.onPlay((()=>{this.audio_status=!0,this.$emit("audioPlay"),setTimeout((()=>{this.maxSliderIndex=parseFloat(this.innerAudioContext.duration).toFixed(2),this.countDown()}),100)})),this.innerAudioContext.onPause((()=>{this.$emit("audioPause")})),this.innerAudioContext.onEnded((()=>{this.audio_status=!this.audio_status,this.$emit("audioEnd")})),this.innerAudioContext.onCanplay((e=>{this.$emit("audioCanplay")})),this.innerAudioContext.onPlay((()=>{this.$emit("change",{state:!0})})),this.innerAudioContext.onPause((()=>{this.$emit("change",{state:!1})}))},methods:{audioDestroy(){this.innerAudioContext&&(this.innerAudioContext.destroy(),this.audio_status=!1)},audioSeek(e){this.sliderChange(e)},audioPause(){this.clickAudio()},countDown(){ee=setInterval((()=>{this.sliderIndex=parseFloat(this.innerAudioContext.currentTime).toFixed(2),this.timeTxt=this.getTime(this.isCountDown?this.innerAudioContext.duration-this.innerAudioContext.currentTime:this.innerAudioContext.currentTime),this.timeTxt=this.isCountDown?"- "+this.timeTxt:this.timeTxt,this.innerAudioContext.currentTime>=this.innerAudioContext.duration&&clearInterval(ee)}),100)},clickAudio(){this.audio_status&&!this.innerAudioContext.paused?(this.innerAudioContext.pause(),clearInterval(ee)):this.innerAudioContext.play(),this.audio_status=!this.audio_status},getTime(e){let t=parseInt(e/60%60);t=t<10?"0"+t:t;let s=parseInt(e%60);return s=s<10?"0"+s:s,t+" : "+s},sliderChange(e){this.innerAudioContext.seek(e.detail?e.detail.value:e),this.sliderIndex=e.detail?e.detail.value:e}},onUnload(){this.audioDestroy()},onHide(){this.audioDestroy()},beforeDestroy(){this.audioDestroy()}},[["render",function(e,t,p,g,f,y){const x=u,_=h,C=m;return s(),i(_,{class:"audio_center"},{default:o((()=>[a(_,{class:"audio_center_cover"},{default:o((()=>[p.audioCover?(s(),i(x,{key:0,class:"audio_center_cover_img",mode:"aspectFill",src:p.audioCover},null,8,["src"])):n("",!0),a(_,{class:l(["iconfont",f.audio_status?"icon-play-stop":"icon-play-cell"]),onClick:y.clickAudio},null,8,["onClick","class"])])),_:1}),a(_,{class:"audio_center_right"},{default:o((()=>["string"==f.stringObject(p.src)?(s(),i(_,{key:0,class:"single"},{default:o((()=>[a(_,{class:"single_title"},{default:o((()=>[a(_,{class:"single_title_info",style:c({color:p.audioTitleColor})},{default:o((()=>[r(d(p.audioTitle),1)])),_:1},8,["style"]),a(_,{class:"tips"},{default:o((()=>[r(d(f.timeTxt),1)])),_:1})])),_:1}),a(_,{class:"tips"},{default:o((()=>[r(d(p.subheading),1)])),_:1}),a(C,{backgroundColor:p.backgroundColor,activeColor:p.activeColor,onChange:y.sliderChange,value:f.sliderIndex,max:f.maxSliderIndex,"block-size":0},null,8,["backgroundColor","activeColor","onChange","value","max"])])),_:1})):(s(),i(_,{key:1},{default:o((()=>[r("相关功能正在开发中~")])),_:1}))])),_:1})])),_:1})}],["__scopeId","data-v-7aa84796"]]);var se=e({data:()=>({isUserMedia:!1,stream:null,audio:null,recorder:null,chunks:[],startTime:0}),mounted(){if(-1===origin.indexOf("https")&&-1===origin.indexOf("localhost")&&-1===origin.indexOf("127.0.0.1"))throw this.$emit("error","100"),"请在 https 环境中使用本插件。";if(!navigator.mediaDevices||!window.MediaRecorder)throw this.$emit("error","101"),"当前浏览器不支持";this.getRecorderManager()},methods:{getRecorderManager(){this.audio=document.createElement("audio"),navigator.mediaDevices.getUserMedia({audio:!0}).then((e=>{this.isUserMedia=!0,e.getTracks().forEach((e=>{e.stop()}))})).catch((e=>{this.onErrorHandler(e)}))},start(){if(!this.isUserMedia)return console.log("设备不支持");navigator.mediaDevices.getUserMedia({audio:!0}).then((e=>{this.startTime=(new Date).getTime(),this.stream=e,this.recorder=new MediaRecorder(e),this.recorder.ondataavailable=this.getRecordingData,this.recorder.onstop=this.saveRecordingData,this.recorder.start()})).catch((e=>{this.onErrorHandler(e)}))},stop(){this.recorder.stop(),this.stream.getTracks().forEach((e=>{e.stop()}))},getRecordingData(e){this.chunks.push(e.data)},saveRecordingData(){const e=new Blob(this.chunks,{type:"audio/mpeg"}),t=URL.createObjectURL(e);this.chunks=[];let s=((new Date).getTime()-this.startTime).toString().split("");s.splice(s.length-2),s.splice(s.length-1,0,"."),s=parseFloat(s.join(""));const i={data:e,duration:s,localUrl:t};this.$emit("success",i)},onErrorHandler(e){if(console.log(e),"NotAllowedError"===e.name)throw this.$emit("error","201"),"用户拒绝了当前的浏览器实例的访问请求";if("NotReadableError"===e.name)throw this.$emit("error","101"),"当前浏览器不支持";throw this.$emit("error","500"),"调用失败，原因不详"}},destroyed(){this.stop()}},[["render",function(e,t,o,a,n,l){const c=h;return s(),i(c,{class:"recorder"})}]]);const ie=p(g),oe=f(g);var ae=e({name:"im-input",components:{MumuRecorder:se},props:{boxStatus:{type:Number,default:0},contact:{type:Object,default:{}}},data:()=>({InputBottom:0,paddingB:0,footerHeight:50,boxHeight:300,uploading:!1,recShow:!1,inputMsg:"",recorderManager:null,recing:!1,recLength:1,recTimer:null,tmpVoice:"",isUseRecorder:!1,playItemIndex:-1,currentAudio:"",mainHeight:0,isCancel:!1,isH5:!1,isApp:!1,appBox:0,TabCur:0,scrollLeft:0,emojiList:[],currentEmojiList:[],isFocus:!1,globalConfig:oe.globalConfig,userinfo:{}}),watch:{boxStatus(e){this.appBox=0,this.InputBottom=0},appBox(e){0!=e||this.isFocus||(this.InputBottom=0)},InputBottom(e){this.$emit("setPad",e)}},created:function(){this.userinfo=y("userInfo"),1!==this.userinfo.role&&(this.inputMsg="全体禁言中"),this.emojiList=Z,this.currentEmojiList=Z[0].children,x({success:e=>{let t=e.windowHeight;this.mainHeight=t}}),this.isH5=!0},methods:{msgItem(){return{id:this.$util.getUuid(),sendTime:(new Date).getTime(),status:"going",type:"text",content:"",is_read:0,is_group:0,file_id:0,file_cate:0,fileName:"",fileSize:0,extends:null}},chooseEmoji(e){let t="[!"+e.name+"]";this.inputMsg+=t},tabSelect(e){this.TabCur=e.currentTarget.dataset.id,this.scrollLeft=60*(e.currentTarget.dataset.id-1),this.currentEmojiList=this.emojiList[this.TabCur].children},showAppBox(e){this.appBox==e?(this.appBox=0,this.InputBottom=0):(this.appBox=e,this.InputBottom=this.boxHeight,this.recShow=!1)},showRec:function(){this.InputBottom=0,this.appBox=0,1==this.recShow?this.recShow=!1:this.recShow=!0},sendVoiceMsg:function(){if(""==this.tmpVoice)return void _({title:"录制已取消",icon:"none"});let e={localUrl:this.tmpVoice,duration:this.recLength};this.handlerSuccess(e),this.tmpVoice="",this.recLength=0},sendTextMsg:function(){if(1!=this.appBox&&(this.isFocus=!0),""==this.inputMsg)return!1;let e={type:"text",content:this.inputMsg};this.inputMsg="",this.$emit("send",Object.assign(this.msgItem(),e),"")},chooseImg(){let e={type:"image",status:"going"};C({count:9,sizeType:["compressed"],sourceType:["album","camera"],success:t=>{t.tempFiles.forEach((t=>{e.content=t.path,e.fileName=t.name,e.fileSize=t.size,this.$emit("send",Object.assign(this.msgItem(),e),t.path)}))}})},chooseVideo:function(){let e={type:"video",status:"going"};k({sourceType:["camera","album"],success:t=>{if(t.duration>60)return _({title:"视频长度不能超过60秒",icon:"error"});const s=t.tempFilePath;let i={duration:t.duration,width:t.width,height:t.height};e.fileName=t.name,e.fileSize=t.size,e.extends=i,e.content=s,this.$emit("send",Object.assign(this.msgItem(),e),s)}})},chooseFile:function(){let e=this;b({count:5,success:function(t){e.appendFile(t)}})},appendFile(e){e.tempFiles.forEach((e=>{let t=e.path,s={type:"file",status:"going",fileName:e.name,fileSize:e.size,content:t},i=e.type;-1!=i.indexOf("image/")&&(s.type="image"),-1!=i.indexOf("video/")&&(s.type="video"),this.$emit("send",Object.assign(this.msgItem(),s),t)}))},chooseProject:()=>_({title:"自己扩展呗~~"}),calling(e){if(!parseInt(this.globalConfig.chatInfo.webrtc))return _({title:"未开启音视频通话",icon:"none"});if(ie.webrtcLock)return _({title:"其他终端正在通话中",icon:"none"});let t=this.$util.getUuid();w({url:"/pages/message/call?msg_id="+t+"&type="+e+"&status=1&id="+this.contact.id+"&name="+this.contact.displayName+"&avatar="+encodeURI(this.contact.avatar)})},InputFocus(e){this.isFocus=!0,this.appBox>0&&(this.appBox=0),this.InputBottom=0},InputBlur(e){this.appBox||this.isFocus||(this.InputBottom=0),this.isFocus=!1},startRecorder(){console.log("录音开始..."),this.$refs.recorderRef.start(),this.isUseRecorder=!0},endRecorder(){console.log("录音结束"),this.$refs.recorderRef.stop(),this.isUseRecorder=!1},cancelRecorder(){this.endRecorder(),this.isCancel=!0},moveRecorder(e){e.touches[0].clientY<this.mainHeight-80?this.isCancel=!0:this.isCancel=!1},handlerSuccess(e){if(this.checkRecorder(e.duration),this.isCancel)return this.isCancel=!1,console.log("录音已取消");let t={type:"voice",content:e.localUrl,fileName:this.$util.getUuid()+".mp3",extends:{duration:e.duration}};this.$emit("send",Object.assign(this.msgItem(),t))},checkRecorder(e){if(e<1||isNaN(e)||!e)return this.recLength=0,this.tmpVoice="",this.recing=!1,this.isCancel=!0,_({title:"录音时间太短",icon:"error"})},handlerError(e){switch(e){case"101":v({content:"当前浏览器版本较低，请更换浏览器使用，推荐在微信中打开。"});break;case"201":v({content:"麦克风权限被拒绝，请刷新页面后授权麦克风权限。"});break;default:console.log("录音功能受限，请知晓！")}}}},[["render",function(e,t,m,p,g,f){const y=h,x=A,_=Y(I("mumu-recorder"),se),C=L,k=R,b=u;return s(),i(y,{id:"more-oprate"},{default:o((()=>[void 0!==g.userinfo.role&&1==g.userinfo.role?(s(),i(y,{key:0,class:"im-footer bg-gray",style:c([{paddingBottom:g.paddingB+"px",height:g.footerHeight+"px",bottom:g.InputBottom+"px"}])},{default:o((()=>[a(y,{class:l(["im-menus f-28",[g.recShow?"cuIcon-keyboard":"cuIcon-sound"]]),"hover-class":"tap",onClick:f.showRec},null,8,["class","onClick"]),0==g.recShow?(s(),i(x,{key:0,class:"solid-bottom im-flex1 bg-white im-input",type:"text",modelValue:g.inputMsg,"onUpdate:modelValue":t[0]||(t[0]=e=>g.inputMsg=e),"adjust-position":!1,focus:g.isFocus,maxlength:"300","cursor-spacing":"10",onFocus:f.InputFocus,onBlur:f.InputBlur,onConfirm:f.sendTextMsg,"confirm-type":"send","confirm-hold":!0},null,8,["modelValue","focus","onFocus","onBlur","onConfirm"])):n("",!0),1==g.recShow?(s(),i(y,{key:1,class:"toolBox im-flex1"},{default:o((()=>[a(y,{class:l(["recorder",{active:g.isUseRecorder}]),onTouchstart:T(f.startRecorder,["prevent"]),onTouchend:T(f.endRecorder,["prevent"]),onTouchmove:T(f.moveRecorder,["prevent"]),onTouchcancel:f.cancelRecorder},{default:o((()=>[r(d(g.isUseRecorder?"松开结束":"按住说话"),1)])),_:1},8,["class","onTouchstart","onTouchend","onTouchmove","onTouchcancel"])])),_:1})):n("",!0),g.isH5?(s(),i(_,{key:2,ref:"recorderRef",onSuccess:f.handlerSuccess,onError:f.handlerError},null,8,["onSuccess","onError"])):n("",!0),a(y,{class:"im-flex im-justify-content-start im-align-items-center"},{default:o((()=>[a(y,{class:"im-menus cuIcon-emoji f-28","hover-class":"tap",onClick:t[1]||(t[1]=e=>f.showAppBox(1))}),g.inputMsg?n("",!0):(s(),i(y,{key:0,class:"im-menus cuIcon-roundadd f-28 mr-10","hover-class":"tap",onClick:t[2]||(t[2]=e=>f.showAppBox(2))})),g.inputMsg?(s(),i(y,{key:1},{default:o((()=>[a(C,{class:"cu-btn bg-green shadow mr-10",onClick:f.sendTextMsg},{default:o((()=>[r("发送")])),_:1},8,["onClick"])])),_:1})):n("",!0)])),_:1}),1==g.appBox?(s(),i(y,{key:3,class:"im-flex im-columns im-emoji-box",style:c([{height:g.boxHeight+"px"}])},{default:o((()=>[a(k,{"scroll-x":"",class:"bg-gray nav im-emoji-header","scroll-with-animation":"","scroll-left":g.scrollLeft},{default:o((()=>[(s(!0),M(B,null,S(g.emojiList,((e,t)=>(s(),i(y,{class:l(["cu-item",t==g.TabCur?"text-green":""]),key:t,onClick:f.tabSelect,"data-id":t},{default:o((()=>[a(y,{class:l([[e.icon],"f-20"])},null,8,["class"])])),_:2},1032,["class","onClick","data-id"])))),128))])),_:1},8,["scroll-left"]),a(k,{"scroll-y":"",class:"bg-white im-emoji-body"},{default:o((()=>[a(y,{class:"im-flex im-wrap im-justify-content-start im-align-items-center pd-10"},{default:o((()=>[(s(!0),M(B,null,S(g.currentEmojiList,((e,t)=>(s(),i(y,{class:"im-emoji-item"},{default:o((()=>[a(b,{src:e.src,style:{width:"44rpx"},mode:"widthFix",onClick:t=>f.chooseEmoji(e)},null,8,["src","onClick"])])),_:2},1024)))),256))])),_:1})])),_:1})])),_:1},8,["style"])):n("",!0),2==g.appBox?(s(),i(y,{key:4,class:"im-flex im-app-box im-flex im-justify-content-start im-wrap im-align-content-start pd-20",style:c([{height:g.boxHeight+"px"}])},{default:o((()=>[a(y,{class:"im-flex im-columns im-align-items-center mt-10 im-app-item",onClick:f.chooseImg},{default:o((()=>[a(y,{class:"bg-white cuIcon-album f-24 radius-10 im-app-item-icon"}),a(y,{class:"mt-5"},{default:o((()=>[r("照片")])),_:1})])),_:1},8,["onClick"]),a(y,{class:"im-flex im-columns im-align-items-center mt-10 im-app-item",onClick:f.chooseVideo},{default:o((()=>[a(y,{class:"bg-white cuIcon-video f-24 radius-10 im-app-item-icon"}),a(y,{class:"mt-5"},{default:o((()=>[r("视频")])),_:1})])),_:1},8,["onClick"]),a(y,{class:"im-flex im-columns im-align-items-center mt-10 im-app-item",onClick:f.chooseFile},{default:o((()=>[a(y,{class:"bg-white cuIcon-file f-24 radius-10 im-app-item-icon"}),a(y,{class:"mt-5"},{default:o((()=>[r("文件")])),_:1})])),_:1},8,["onClick"]),!m.contact.is_group&&(g.isH5||g.isApp)&&parseInt(g.globalConfig.chatInfo.webrtc)?(s(),i(y,{key:0,class:"im-flex im-columns im-align-items-center mt-10 im-app-item",onClick:t[3]||(t[3]=e=>f.calling(0))},{default:o((()=>[a(y,{class:"bg-white cuIcon-dianhua f-24 radius-10 im-app-item-icon"}),a(y,{class:"mt-5"},{default:o((()=>[r("语音通话")])),_:1})])),_:1})):n("",!0),!m.contact.is_group&&(g.isH5||g.isApp)&&parseInt(g.globalConfig.chatInfo.webrtc)?(s(),i(y,{key:1,class:"im-flex im-columns im-align-items-center mt-10 im-app-item",onClick:t[4]||(t[4]=e=>f.calling(1))},{default:o((()=>[a(y,{class:"bg-white cuIcon-record f-24 radius-10 im-app-item-icon"}),a(y,{class:"mt-5"},{default:o((()=>[r("视频通话")])),_:1})])),_:1})):n("",!0)])),_:1},8,["style"])):n("",!0)])),_:1},8,["style"])):(s(),i(y,{key:1,class:"im-footer bg-gray",style:c([{paddingBottom:g.paddingB+"px",height:g.footerHeight+"px",bottom:g.InputBottom+"px"}])},{default:o((()=>[a(y,{class:l(["im-menus f-28",[g.recShow?"cuIcon-keyboard":"cuIcon-sound"]]),"hover-class":"tap"},null,8,["class"]),a(y,{class:"solid-bottom im-flex1 bg-white im-input","read-only":"",type:"text",style:{"text-align":"center","line-height":"30px"}},{default:o((()=>[r(d(g.inputMsg),1)])),_:1})])),_:1},8,["style"])),U(a(y,{class:"voice-model c-white radius-10 im-flex im-columns im-align-items-center pd-10"},{default:o((()=>[a(y,{class:l(["cuIcon-voicefill mt-15 mb-5 f-28",[g.isCancel?"c-red":""]])},null,8,["class"]),a(y,{class:l([g.isCancel?"c-red":""])},{default:o((()=>[r(d(g.isCancel?"松开取消":"正在录音..."),1)])),_:1},8,["class"])])),_:1},512),[[j,g.isUseRecorder]])])),_:1})}],["__scopeId","data-v-b762af4a"]]);var ne=e({name:"im-item",components:{},props:{item:{type:Object,default:function(){return{}}},index:{type:Number,default:0},isSelf:{type:Boolean,default:!1}},data:()=>({}),created:function(){},methods:{}},[["render",function(e,t,a,n,l,c){const d=h;return"diy"==a.item.type?(s(),i(d,{key:0,item:a.item,index:a.index,isSelf:a.isSelf},{default:o((()=>[r(" 自定义 ")])),_:1},8,["item","index","isSelf"])):(s(),i(d,{key:1},{default:o((()=>[r(" 暂不支持该消息类型 ")])),_:1}))}]]);const le=y("userInfo"),ce=y("appSetting"),re=p(g);var de=e({name:"im-touch",props:{info:{type:Object,default:function(){return{}}},circleAvatar:{type:Boolean,default:!1},profile:{type:Boolean,default:!1}},data:()=>({toucheTimer:0,fingerRes:[],distance:0,taptimer:100,appSetting:ce}),methods:{openUserInfo(e){let t=re.getContact(e.user_id);if(!this.profile&&!t)return _({title:"已开启用户隐私！",icon:"none"}),!1;e.id!=le.user_id&&w({url:"/pages/contacts/detail?id="+this.info.id})}}},[["render",function(e,t,o,a,n,r){const d=h;return s(),i(d,{class:l(["cu-avatar lg",n.appSetting.circleAvatar?"round":"radius"]),onClick:t[0]||(t[0]=e=>r.openUserInfo(o.info)),style:c([{backgroundImage:"url("+o.info.avatar+")"}])},null,8,["class","style"])}]]);const ue=t(),he=p(g),{newMessage:me,msgList:pe,getContact:ge,appendMsg:fe,checkMsg:ye}=N(he),xe=f(g);var _e=e({components:{imInput:ae,imItem:ne,imUser:de,statusPoint:X},data:()=>({user:xe.userInfo,contact:{},is_group:0,boxStatus:0,paddingT:0,video:"",videoUrl:"",videoModel:!1,InputBottom:0,player:null,playIndex:-1,emojiMap:[],fileExt:[],page:1,limit:20,moreData:!0,newMessage:me,messageList:pe,newheight:0,scrollTop:0,loading:"more",loadLock:!1,scrollHeight:0,paddingB:0,contact_id:0,bottomHeight:50,globalConfig:xe.globalConfig,modelName:"",curMsg:"",isSending:!1,copyTxt:"文本",wsData:null,timer:null,lastTapDiffTime:0,isProfile:!1}),computed:{scrollH:function(){let e=D(),t=750/e.windowWidth,s=$(100);this.bottomHeight=s;const i=E().in(this);return setTimeout((()=>{i.select(".cu-header").boundingClientRect(),i.exec((e=>{this.paddingT=e[0].height}))}),10),parseInt((e.windowHeight-this.navBarHeight-this.paddingT)*t)}},watch:{newMessage(e){e.toContactId==this.contact.id&&e.fromUser.id!=this.user.user_id&&this.$api.msgApi.setMsgIsRead({toContactId:this.contact.id,is_group:this.contact.is_group,messages:e,fromUser:e.fromUser.id}),this.scrollToBottom()},videoModel(e){e||this.video.pause()}},onLoad(e){let t=he.getContact(e.id);1==t.is_group&&(t.role<3||"1"==t.setting.profile)&&(this.isProfile=!0),this.contact=t,this.contact_id=e.id,this.is_group=t.is_group,he.updateContacts({id:e.id,unread:0}),this.getMessageList(),H("getPositonsOrder",(e=>{let t=e.data;switch(e.type){case"isRead":for(let o=0;t.length>o;o++){const e={id:t[o].id,is_read:1};this.updateMessage(e)}break;case"readAll":t.toContactId==this.contact.id&&0==this.is_group&&this.messageList.forEach((e=>{e.is_read=1}));break;case"isOnline":t.id==this.contact.id&&(this.contact.is_online=t.is_online);break;case"undoMessage":if(t.from_user==this.user.user_id&&1==t.isMobile&&(new Date).getTime()-t.sendTime<12e4)return!1;this.updateMessage(t);break;case"simple":case"group":case"webrtc":F();let e={},s=location.href;if(e=this.$util.parseUrl(s),"webrtc"==t.type){if(!["calling","hangup","otherOpt"].includes(t.extends.event))return!1;"calling"==t.extends.event&&(this.wsData=t);let e=parseInt(t.extends.code);if([902,903,904,905,906,907].includes(e)){let e=this.wsData||t;e.content=t.content,t=e}}let i=!1;1==t.is_group?t.toUser==e.id&&(i=!0):(t.toContactId==e.id||t.fromUser.id==this.user.user_id&&t.toUser==e.id)&&(i=!0),i&&(he.checkMsg(t),he.appendMsg(t),he.updateContacts({id:e.id,unread:0})),this.scrollToBottom()}}))},onUnload(){he.msgList=[],ue.stop(),this.closeMusic()},onBackPress(e){return this.InputBottom=0,O({url:"/pages/index/index"}),!0},onShow(){this.socketIo.send({type:"ping"})},created:function(){let e=[];Z.forEach((function(t){let s=t.children;s.length>0&&s.forEach((function(t){let s=t.name,i=t.src;e[s]=i}))})),this.emojiMap=e,ue.onPlay((()=>{console.log("play")})),ue.onEnded((()=>{console.log("播放完毕，继续播放下一个录音！");var e=Number(this.playIndex);for(let t=e+1;t<this.messageList.length;t++)if("voice"==this.messageList[t].type){this.playNow(this.messageList[t].content,t);break}this.messageList.length<=e+1&&(ue.stop(),this.playIndex=-1)})),ue.onError((e=>{console.log(e)}))},mounted(){this.video=P("myVideo",this)},methods:{calling(e){this.$refs.imInput.calling(parseInt(e))},endTimer(){clearTimeout(this.timer)},dblclick(e){const t=(new Date).getTime(),s=this.lastTapDiffTime;this.lastTapDiffTime=t;t-s<300&&(this.curMsg=e,this.modelName="copyModel")},getTime:()=>(new Date).getTime(),setPad(e){this.paddingB=e,this.scrollToBottom()},updateMessage(e){let t=this.messageList;t.forEach(((s,i)=>{let o=t[i];s.id==e.id&&(t[i]=Object.assign(o,e))})),this.messageList=t},getScrollHeight(){const e=E().in(this);setTimeout((()=>{e.select(".cu-chat").boundingClientRect(),e.exec((e=>{this.scrollHeight=e[0].height,this.scrollTop=e[0].height-this.newheight,this.loadLock=!1}))}),10)},scrollChat(e){this.newheight=e.detail.scrollHeight,e.detail.scrollTop<10&&0==this.loadLock&&(this.loadLock=!0,this.page++,this.moreData&&(this.loading="loading",setTimeout((()=>{this.getMessageList()}),1e3)))},getMessageList(){this.$api.msgApi.getMessageList({is_group:this.is_group,toContactId:this.contact.id,page:this.page,limit:this.limit}).then((e=>{1==this.page&&(he.msgList=[]),e.data.slice().reverse().forEach((e=>{he.msgList.unshift(e)})),this.loading="more",e.data.length<this.limit&&(this.moreData=!1,this.loading="noMore"),this.$nextTick((()=>{1==this.page?this.scrollToBottom():this.getScrollHeight()}))}))},moreOption(e){this.timer=setTimeout((()=>{this.curMsg=e,"text"==e.type?this.copyTxt="消息":"image"==e.type?this.copyTxt="图片链接":this.copyTxt="文件链接",this.modelName="moreOpt"}),1e3)},undoMsg(){let e=this.curMsg;this.modelName="",this.$api.msgApi.undoMessage({id:e.id}).then((t=>{const s={id:e.id,type:"event",is_undo:1,content:"你撤回了一条消息",oldContent:e.content,toContactId:e.toContactId};this.updateMessage(s)}))},copyMsg(){z({data:this.curMsg.content,showToast:!0}),this.modelName="",this.curMsg={}},forwardMsg(){w({url:"/pages/index/userSelection?contact_id="+this.contact_id+"&type=3"})},reEdit(e){this.$refs.imInput.inputMsg=e,this.$refs.imInput.isFocus=!0},scrollToBottom(){const e=E().in(this);setTimeout((()=>{e.select(".cu-chat").boundingClientRect(),e.exec((e=>{var t;let s=null!=(t=e[0].height)?t:999999;this.scrollTop=s+3e3}))}),10)},openDetails(){w({url:"/pages/message/detail?id="+this.contact.id+"&is_group="+this.contact.is_group})},fileSize(e){return this.$util.getFileSize(e)},emojiToHtml(e){let t=this.emojiMap;return e.replace(/\[!(\w+)\]/gi,(function(e,s){var i=s;return t[i]?'<img class=\'mr-5\' style="width:18px;height:18px" emoji-name="'.concat(s,'" src="').concat(t[i],'" />'):"[!".concat(s,"]")}))},reSend(e){e.status="going",this.sendMessage(JSON.parse(JSON.stringify(e)),"")},sendMessage(e,t){if(!this.globalConfig.chatInfo.simpleChat&&0==this.is_group||!this.nospeak())return void _({title:"系统已关闭单聊，或者群已开启禁言，无法发送消息",icon:"none"});let s=this.user;s.id=s.user_id,e.fromUser=s,e.from_user=this.user.user_id,e.toContactId=this.contact.id,e.is_group=this.contact.is_group,this.messageList.push(e),this.scrollToBottom();if("text"==e.type)this.$api.msgApi.sendMessage(e).then((e=>{0==e.code?this.updateMessage(e.data):401==e.code&&(this.messageList.pop(),_({title:e.msg,icon:"none"}))})).catch((t=>{this.sendFailed(e)}));else if(["image","file","video","voice"].includes(e.type)){if(e.fileSize>1024e4)return _({title:"文件大小不能超过10M",icon:"error"});V({url:this.$api.msgApi.uploadUrl,filePath:e.content,name:"file",header:{Authorization:y("authToken")},formData:{message:JSON.stringify(e)},success:e=>{let t=JSON.parse(e.data);0==t.code?this.updateMessage(t.data):401==t.code&&(this.messageList.pop(),_({title:t.msg,icon:"none"}))},fail:t=>{this.sendFailed(e)}})}},sendFailed(e){e.status="failed",this.updateMessage(JSON.parse(JSON.stringify(e)))},closeModel(){this.videoUrl="",this.videoModel=!1},handlePlay(e){this.videoUrl=e.content,this.videoModel=!0,ue.stop(),this.playIndex=-1},sendTime:function(e){return this.$util.timeFormat(e)},playVoice:function(e){var t=e.currentTarget.dataset.voice,s=e.currentTarget.dataset.index;if(-1==this.playIndex)return this.playNow(t,s);this.playIndex==s?(ue.stop(),this.playIndex=-1):(ue.stop(),this.playIndex=-1,this.playNow(t,s))},playNow:function(e,t){return this.playIndex=t,ue.autoplay=!0,ue.src=e,ue.play(),!0},preview(e){let t=e.content.split(".").pop().toLowerCase();if(["mp3","wav","acc"].includes(t))return this.curMsg=e,void(this.modelName="musicPlay");const s=document.createElement("a");s.style.display="none",s.href=e.download,s.setAttribute("download",e.fileName),s.setAttribute("target","_blank"),document.body.appendChild(s),s.click(),document.body.removeChild(s)},closeMusic(){this.modelName="",this.$refs.audio.audioPause()},showImgs:function(e){for(var t=[],s=e.currentTarget.dataset.img,i=0;i<this.messageList.length;i++)"image"==this.messageList[i].type&&t.push(this.messageList[i].content);J({urls:t,current:s})},closeInput(e){this.boxStatus++},nospeak(){return!(1==this.is_group&&this.contact.setting.nospeak>0)||(1==this.contact.setting.nospeak&&2==this.contact.role||2==this.contact.setting.nospeak&&1==this.contact.role)}}},[["render",function(e,t,m,p,g,f){const y=W("Tags"),x=W("statusPoint"),_=q,C=h,k=W("cu-custom"),b=Y(I("uni-load-more"),K),w=W("im-user"),v=Y(I("mp-html"),Q),U=u,j=W("imItem"),A=G,L=R,N=W("imInput"),D=Y(I("sy-audio"),te);return s(),i(C,null,{default:o((()=>[a(k,{bgColor:"bg-white",isBack:!0,class:"cu-header"},{backText:o((()=>[])),content:o((()=>[a(C,{class:"im-flex im-justify-content-center im-align-items-center"},{default:o((()=>[1==g.is_group?(s(),i(y,{key:0,text:"群聊",size:"mini"})):n("",!0),0==g.is_group&&1==g.contact.is_online&&1==g.globalConfig.chatInfo.online?(s(),i(x,{key:1,type:"success"})):n("",!0),a(_,{class:"text-overflow"},{default:o((()=>[r(d(g.contact.displayName),1)])),_:1})])),_:1})])),right:o((()=>[a(C,{class:"cuIcon-more mr-10 f-16",onClick:f.openDetails},null,8,["onClick"])])),_:1}),a(L,{ref:"scrollView","scroll-y":"true","scroll-anchoring":!0,"scroll-top":g.scrollTop,onScroll:f.scrollChat,style:c({height:f.scrollH+"rpx",position:"fixed",bottom:g.bottomHeight+"px"})},{default:o((()=>[a(C,{class:"cu-chat",style:c({paddingBottom:g.paddingB+"px"}),onClick:f.closeInput,id:"more-oprate"},{default:o((()=>[a(b,{status:g.loading},null,8,["status"]),(s(!0),M(B,null,S(g.messageList,((e,t)=>(s(),M(B,{key:t},["event"==e.type?(s(),i(C,{key:0,class:"cu-info"},{default:o((()=>[r(d(e.content)+" ",1),1==e.is_undo&&f.getTime()-e.sendTime<12e4?(s(),i(_,{key:0,class:"c-primary",onClick:t=>{var s;return f.reEdit(null!=(s=e.oldContent)?s:"")}},{default:o((()=>[r("重新编辑")])),_:2},1032,["onClick"])):n("",!0)])),_:2},1024)):(s(),i(C,{key:1,class:l(["cu-item",[e.fromUser.id==g.user.user_id?"im-rows-reverse self im-justify-content-start":""]])},{default:o((()=>[a(w,{info:e.fromUser,profile:g.isProfile},null,8,["info","profile"]),a(C,{class:"main im-wrap",onTouchstart:t=>f.moreOption(e),onTouchend:f.endTimer,onClick:t=>f.dblclick(e)},{default:o((()=>[e.fromUser.id!=g.user.user_id?(s(),i(C,{key:0,class:"f-12 c-666",style:{width:"100%","margin-bottom":"6rpx"}},{default:o((()=>[r(d(e.fromUser.realname),1)])),_:2},1024)):n("",!0),"text"==e.type?(s(),i(C,{key:1,class:l(["content shadow",[e.fromUser.id==g.user.user_id?"bg-green":""]])},{default:o((()=>[a(v,{"container-style":"overflow: hidden;display:inline;white-space: pre-wrap",content:f.emojiToHtml(e.content)},null,8,["content"])])),_:2},1032,["class"])):"image"==e.type?(s(),i(U,{key:2,src:e.content,class:"radius",mode:"widthFix",onClick:f.showImgs,"data-img":e.content},null,8,["src","onClick","data-img"])):"voice"==e.type?(s(),i(C,{key:3,class:l(["im-voice-msg im-flex im-rows im-nowrap im-align-items-center radius-20",[t==g.playIndex?"linear-green":"",e.fromUser.id==g.user.user_id?"im-rows-reverse":""]]),"data-voice":e.content,"data-index":t,onClick:f.playVoice,style:c({width:3*e.extends.duration+"px"})},{default:o((()=>[a(_,{class:l(["f-16 cuIcon-subscription rotate45",[t==g.playIndex?"c-white":"",e.fromUser.id==g.user.user_id?"rotate225":""]])},null,8,["class"]),a(_,{class:l(["im-voice-msg-text",[t==g.playIndex?"c-white":""]])},{default:o((()=>[r(d(e.extends.duration)+' "',1)])),_:2},1032,["class"])])),_:2},1032,["class","data-voice","data-index","onClick","style"])):"video"==e.type?(s(),i(C,{key:4},{default:o((()=>[a(C,{class:"course-video radius-10",onClick:t=>f.handlePlay(e)},{default:o((()=>[a(C,{class:"relative-shadow"},{default:o((()=>[a(C,{class:"cuIcon-video icon-center f-28 c-white"})])),_:1}),a(U,{src:e.extends.poster,class:"",mode:"heightFix"},null,8,["src"])])),_:2},1032,["onClick"])])),_:2},1024)):"file"==e.type?(s(),i(C,{key:5},{default:o((()=>[a(C,{class:"file-card bg-white radius-10 im-flex im-justify-content-start pd-10 im-align-items-center",onClick:t=>f.preview(e)},{default:o((()=>[a(C,{class:"file-icon cuIcon-text f-36"}),a(C,{class:"im-flex im-columns ml-10"},{default:o((()=>[a(C,{class:"text-overflow file-name"},{default:o((()=>[r(d(e.fileName),1)])),_:2},1024),a(C,{class:"text-gray file-size f-12"},{default:o((()=>[r(d(f.fileSize(e.fileSize)),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)):"webrtc"==e.type?(s(),i(C,{key:6,onClick:t=>f.calling(e.extends.type),class:l(["im-voice-msg im-flex im-rows im-nowrap im-align-items-center radius-20",[e.fromUser.id==g.user.user_id?"im-rows-reverse":""]])},{default:o((()=>[a(_,{class:l(["f-16",[1==e.extends.type?"cuIcon-record":"cuIcon-dianhua",e.fromUser.id==g.user.user_id?"rotate180":""]])},null,8,["class"]),a(_,{class:"im-voice-msg-text"},{default:o((()=>[r(d(e.content),1)])),_:2},1024)])),_:2},1032,["onClick","class"])):(s(),i(j,{key:7,item:e,index:t,isSelf:!0},null,8,["item","index"]))])),_:2},1032,["onTouchstart","onTouchend","onClick"]),e.fromUser.id==g.user.user_id?(s(),i(C,{key:0,class:"mt-10 f-20"},{default:o((()=>["going"==e.status?(s(),i(C,{key:0,class:"cuIcon-icloading icon-spin c-999"})):n("",!0),"failed"==e.status?(s(),i(C,{key:1,class:"cuIcon-infofill c-red",onClick:t=>f.reSend(e)},null,8,["onClick"])):n("",!0)])),_:2},1024)):n("",!0),a(C,{class:"date"},{default:o((()=>[0==e.is_group&&e.fromUser.id==g.user.user_id?(s(),i(_,{key:0,class:l(e.is_read?"c-success":"c-gray")},{default:o((()=>[r(d(e.is_read?"已读":"未读"),1)])),_:2},1032,["class"])):n("",!0),r(" "+d(f.sendTime(e.sendTime)),1)])),_:2},1024)])),_:2},1032,["class"]))],64)))),128)),g.videoModel?(s(),i(C,{key:0,class:"video-model im-flex im-align-items-center"},{default:o((()=>[a(C,{class:"c-white radius-16 close-model",onClick:f.closeModel},{default:o((()=>[r("关闭 ")])),_:1},8,["onClick"]),a(A,{class:"video-box",id:"myVideo",src:g.videoUrl,controls:"",autoplay:"autoplay"},null,8,["src"])])),_:1})):n("",!0)])),_:1},8,["style","onClick"])])),_:1},8,["scroll-top","onScroll","style"]),a(C,{id:"im-input"},{default:o((()=>[a(N,{onSend:f.sendMessage,onSetPad:f.setPad,boxStatus:g.boxStatus,contact:g.contact,ref:"imInput"},null,8,["onSend","onSetPad","boxStatus","contact"])])),_:1}),a(C,{class:l(["cu-modal bottom-modal","moreOpt"==g.modelName?"show":""]),onClick:t[4]||(t[4]=e=>g.modelName="")},{default:o((()=>[a(C,{class:"cu-dialog"},{default:o((()=>[a(C,{class:"manage-content"},{default:o((()=>[a(C,{class:"cu-list menu bg-white"},{default:o((()=>[f.getTime()-g.curMsg.sendTime<12e4&&g.curMsg.fromUser.id==g.user.user_id||g.contact.role<3?(s(),i(C,{key:0,class:"cu-item",onClick:t[0]||(t[0]=e=>f.undoMsg())},{default:o((()=>[a(C,{class:"content padding-tb-sm"},{default:o((()=>[a(_,{class:"cuIcon-repeal"}),a(_,null,{default:o((()=>[r("撤回消息")])),_:1})])),_:1})])),_:1})):n("",!0),a(C,{class:"cu-item",onClick:t[1]||(t[1]=e=>f.copyMsg())},{default:o((()=>[a(C,{class:"content padding-tb-sm"},{default:o((()=>[a(_,{class:"cuIcon-copy"}),a(_,null,{default:o((()=>[r("复制"+d(g.copyTxt),1)])),_:1})])),_:1})])),_:1}),"voice"!=g.curMsg.type?(s(),i(C,{key:1,class:"cu-item",onClick:t[2]||(t[2]=e=>f.forwardMsg())},{default:o((()=>[a(C,{class:"content padding-tb-sm"},{default:o((()=>[a(_,{class:"cuIcon-forward"}),a(_,null,{default:o((()=>[r("转发")])),_:1})])),_:1})])),_:1})):n("",!0),a(C,{class:"parting-line-5"}),a(C,{class:"cu-item",onClick:t[3]||(t[3]=e=>g.modelName="")},{default:o((()=>[a(C,{class:"content padding-tb-sm"},{default:o((()=>[a(_,{class:"c-red"},{default:o((()=>[r("取消")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["class"]),a(C,{class:l(["cu-modal bottom-modal","musicPlay"==g.modelName?"show":""]),onClick:t[7]||(t[7]=e=>f.closeMusic())},{default:o((()=>[a(C,{class:"cu-dialog",onClick:t[6]||(t[6]=T((()=>{}),["stop"]))},{default:o((()=>[a(C,{class:"pd-20"},{default:o((()=>[(s(),i(D,{ref:"audio",src:g.curMsg.content,audioCover:"",subheading:"",audioTitle:g.curMsg.fileName,key:g.curMsg.id},null,8,["src","audioTitle"]))])),_:1}),a(C,{class:"cu-list menu bg-white"},{default:o((()=>[a(C,{class:"cu-item",onClick:t[5]||(t[5]=e=>f.closeMusic())},{default:o((()=>[a(C,{class:"content padding-tb-sm"},{default:o((()=>[a(_,null,{default:o((()=>[r("关闭")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["class"]),a(C,{class:l(["cu-modal bottom-modal","copyModel"==g.modelName?"show":""])},{default:o((()=>[a(C,{class:"cu-dialog"},{default:o((()=>[a(C,{class:"cu-bar bg-white"},{default:o((()=>[a(C,{class:"action text-gray",onClick:t[8]||(t[8]=e=>g.modelName="")},{default:o((()=>[r("取消")])),_:1}),a(C,{class:"action text-green",onClick:t[9]||(t[9]=e=>f.copyMsg())},{default:o((()=>[r("复制")])),_:1})])),_:1}),a(L,{"scroll-y":"true",style:c({height:f.scrollH+"rpx"})},{default:o((()=>[a(C,{class:"pd-20 text-container"},{default:o((()=>[a(v,{content:g.curMsg.content},null,8,["content"])])),_:1})])),_:1},8,["style"])])),_:1})])),_:1},8,["class"])])),_:1})}],["__scopeId","data-v-4f664c67"]]);export{_e as default};
