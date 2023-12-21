import{_ as t,a as e,s,b as a,ab as o,$ as i,J as n,G as l,T as d,ac as r,U as c,o as u,e as p,w as g,i as m,f as h,j as f,q as v,ad as C}from"./index-45871c8e.js";const b={judgeIosPermission:function(t){return"location"==t?(s=plus.ios.import("CLLocationManager"),e=2!=s.authorizationStatus(),console.log("定位权限开启："+e),plus.ios.deleteObject(s),e):"camera"==t?function(){var t=!1,e=plus.ios.import("AVCaptureDevice"),s=e.authorizationStatusForMediaType("vide");return console.log("authStatus:"+s),3==s?(t=!0,console.log("相机权限已经开启")):console.log("相机权限没有开启"),plus.ios.deleteObject(e),t}():"photoLibrary"==t?function(){var t=!1,e=plus.ios.import("PHPhotoLibrary"),s=e.authorizationStatus();return console.log("authStatus:"+s),3==s?(t=!0,console.log("相册权限已经开启")):console.log("相册权限没有开启"),plus.ios.deleteObject(e),t}():"record"==t?function(){var t=!1,e=plus.ios.import("AVAudioSession"),s=e.sharedInstance().recordPermission();return console.log("permissionStatus:"+s),1684369017==s||1970168948==s?console.log("麦克风权限没有开启"):(t=!0,console.log("麦克风权限已经开启")),plus.ios.deleteObject(e),t}():"push"==t?function(){var t=!1,e=plus.ios.import("UIApplication"),s=e.sharedApplication(),a=0;if(s.currentUserNotificationSettings){var o=s.currentUserNotificationSettings();a=o.plusGetAttribute("types"),console.log("enabledTypes1:"+a),0==a?console.log("推送权限没有开启"):(t=!0,console.log("已经开启推送功能!")),plus.ios.deleteObject(o)}else 0==(a=s.enabledRemoteNotificationTypes())?console.log("推送权限没有开启!"):(t=!0,console.log("已经开启推送功能!")),console.log("enabledTypes2:"+a);return plus.ios.deleteObject(s),plus.ios.deleteObject(e),t}():"contact"==t?function(){var t=!1,e=plus.ios.import("CNContactStore");return 3==e.authorizationStatusForEntityType(0)?(t=!0,console.log("通讯录权限已经开启")):console.log("通讯录权限没有开启"),plus.ios.deleteObject(e),t}():"calendar"==t?function(){var t=!1,e=plus.ios.import("EKEventStore");return 3==e.authorizationStatusForEntityType(0)?(t=!0,console.log("日历权限已经开启")):console.log("日历权限没有开启"),plus.ios.deleteObject(e),t}():"memo"==t&&function(){var t=!1,e=plus.ios.import("EKEventStore");return 3==e.authorizationStatusForEntityType(1)?(t=!0,console.log("备忘录权限已经开启")):console.log("备忘录权限没有开启"),plus.ios.deleteObject(e),t}();var e,s},requestAndroidPermission:function(t){return new Promise(((e,s)=>{plus.android.requestPermissions([t],(function(t){for(var s=0,a=0;a<t.granted.length;a++){var o=t.granted[a];console.log("已获取的权限："+o),s=1}for(a=0;a<t.deniedPresent.length;a++){var i=t.deniedPresent[a];console.log("拒绝本次申请的权限："+i),s=0}for(a=0;a<t.deniedAlways.length;a++){var n=t.deniedAlways[a];console.log("永久拒绝申请的权限："+n),s=-1}e(s)}),(function(t){console.log("申请权限错误："+t.code+" = "+t.message),e({code:t.code,message:t.message})}))}))},checkSystemEnableLocation:function(){var t=plus.android.importClass("android.content.Context"),e=plus.android.importClass("android.location.LocationManager"),s=plus.android.runtimeMainActivity().getSystemService(t.LOCATION_SERVICE).isProviderEnabled(e.GPS_PROVIDER);return console.log("系统定位开启:"+s),s},gotoAppPermissionSetting:function(){var t=plus.android.importClass("android.content.Intent"),e=plus.android.importClass("android.provider.Settings"),s=plus.android.importClass("android.net.Uri"),a=plus.android.runtimeMainActivity(),o=new t;o.setAction(e.ACTION_APPLICATION_DETAILS_SETTINGS);var i=s.fromParts("package",a.getPackageName(),null);o.setData(i),a.startActivity(o)}},y=e(s),{userInfo:S}=a(y);const _=t({data:()=>({html:"",postMsg:null,webview:null,Frames:null,mainFrame:null,contact:null,type:!1,wsData:null,main_id:null,globalConfig:y.globalConfig}),onReady(){},onLoad:function(t){let e="h5",s=0;e="h5",s=1;let a=encodeURIComponent(JSON.stringify({stun:this.globalConfig.chatInfo.stun??"",stunUser:this.globalConfig.chatInfo.stunUser??"",stunPass:this.globalConfig.chatInfo.stunPass??""}));this.html="/hybrid/html/index.html?id="+S.value.user_id+"&status="+t.status+"&calling=1&name="+t.name+"&target_id="+t.id+"&type="+t.type+"&platform=h5&avatar="+t.avatar+"&stun="+a,this.main_id=t.msg_id,this.type=t.type,this.status=t.status,this.contact={id:t.id,displayName:t.name,avatar:t.avatar},setTimeout((()=>{this.Frames=document.getElementsByTagName("iframe"),this.mainFrame=this.Frames[0].contentWindow,this.postMsg=this.h5sendH5}),500),window.onmessage=t=>{this.msgCallback(t)},o("webrtcConn"),i("webrtcConn",(t=>{t.fromUser.id!=S.value.user_id?this.main_id&&this.main_id!=t.id?this.$api.msgApi.sendToMsg({toContactId:t.fromUser.user_id,type:t.extends.type,event:"busy",status:t.extends.status,code:907,id:t.id,msg_id:t.msg_id}):(this.wsData=t,this.main_id&&this.main_id==t.id&&this.postMsg(JSON.parse(JSON.stringify(t.extends)),"*")):"otherOpt"==t.extends.event&&(this.wsData=null,this.main_id=null,this.postMsg({event:"hangup"},"*"))}))},methods:{async checkAuth(t){},async requestPermission(t){let e="";"record"==t?e="android.permission.RECORD_AUDIO":"camera"==t&&(e="android.permission.CAMERA");return 1==await b.requestAndroidPermission(e)||this.closeCall()},message(t){const e={data:t.detail.data[0]};this.msgCallback(e)},appsendH5(t){t.iceCandidate&&t.iceCandidate.length>0&&(t.iceCandidate=JSON.parse(t.iceCandidate)),this.webview.evalJS("getUniAppMessage('"+JSON.stringify(t)+"')")},h5sendH5(t){this.mainFrame.postMessage(t,"*")},msgCallback(t){let e="",s="";this.wsData&&(s=this.wsData.msg_id??"");let a=!0;switch(t.data.event){case"hangup":this.closeCall(),907==t.data.code&&n({title:"对方忙~~",icon:"none"}),t.data.isbtn||(a=!1);break;case"iceCandidate":console.log("监听同步ice");let s={};s.candidate=t.data.iceCandidate.candidate,s.sdpMLineIndex=t.data.iceCandidate.sdpMLineIndex,s.sdpMid=t.data.iceCandidate.sdpMid,e=JSON.stringify(s);break;case"mediaDevices":a=!1,n({title:"请检查音视频",icon:"none"}),this.closeCall()}a&&this.$api.msgApi.sendToMsg({id:this.main_id,msg_id:s,toContactId:this.contact.id,type:this.type,event:t.data.event,status:t.data.status??"",code:t.data.code??"",callTime:t.data.callTime??"",sdp:t.data.sdp??"",iceCandidate:e}).then((e=>{"calling"==t.data.event&&(this.wsData=e.data),907==e.data.extends.code&&(n({title:"对方不在线",icon:"none"}),this.closeCall())}))},closeCall(){const t=l();t.autoplay=!0,t.src="https://im.file.raingad.com/static/voice/guaduan.mp3",t.onStop((t=>{this.$forceUpdate()})),d().length>1?r():c({url:"/pages/index/index"})}}},[["render",function(t,e,s,a,o,i){const n=v("cu-custom"),l=C,d=m;return u(),p(d,{class:""},{default:g((()=>[h(n,{bgColor:"bg-gradual-pink",isBack:!0},{backText:g((()=>[])),content:g((()=>[f("通话")])),_:1}),h(l,{onMessage:i.message,src:o.html},null,8,["onMessage","src"])])),_:1})}],["__scopeId","data-v-ea06b7cb"]]);export{_ as default};