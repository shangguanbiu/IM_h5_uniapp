import{_ as t,ar as i,aw as s,Q as e,K as h,D as a,ax as l,C as o,h as n,J as r,E as c,as as p,ay as d,az as f,o as g,e as u,w as m,f as x,B as v,j as S,y as I,at as w,x as y,i as H,H as b,a as W,s as k,g as T,n as _,X as D,k as R,r as C,F as P,q as O,aa as z,P as U,p as M,t as Y}from"./index-bb9aa3b8.js";const q=t({name:"yq-avatar",data:()=>({csH:"0px",sD:"none",sT:"-10000px",pT:"-10000px",iS:{},sS:{},sO:!0,bW:"19%",bD:"flex",tp:0,imgSrc:{imgSrc:""}}),watch:{avatarSrc(){this.imgSrc.imgSrc=this.avatarSrc}},computed:{inlineH:()=>0},props:{avatarSrc:"",avatarStyle:"",selWidth:"",selHeight:"",expWidth:"",expHeight:"",minScale:"",maxScale:"",canScale:"",canRotate:"",lockWidth:"",lockHeight:"",stretch:"",lock:"",fileType:"",noTab:"",inner:"",quality:"",index:"",bgImage:""},created(){this.cc=i("avatar-canvas",this),this.cco=i("oper-canvas",this),this.ccp=i("prv-canvas",this),this.qlty=parseFloat(this.quality)||1,this.imgSrc.imgSrc=this.avatarSrc,this.letRotate=!1===this.canRotate||!0===this.inner||"true"===this.inner||"false"===this.canRotate?0:1,this.letScale=!1===this.canScale||"false"===this.canScale?0:1,this.isin=!0===this.inner||"true"===this.inner?1:0,this.indx=this.index||void 0,this.mnScale=parseFloat(this.minScale)||.3,this.mxScale=parseFloat(this.maxScale)||4,this.noBar=!0===this.noTab||"true"===this.noTab?1:0,this.stc=this.stretch,this.lck=this.lock,this.fType="jpg"===this.fileType?"jpg":"png",this.isin||!this.letRotate?(this.bW="24%",this.bD="none"):(this.bW="19%",this.bD="flex"),this.noBar?this.fWindowResize():s({fail:()=>{this.noBar=1},success:()=>{this.noBar=0},complete:t=>{this.fWindowResize()}})},methods:{fWindowResize(){let t=e();this.platform=t.platform,this.wW=t.windowWidth,this.drawTop=t.windowTop,this.wH=t.windowHeight,this.noBar||(this.wH+=50),this.csH=this.wH-50-this.inlineH+"px",this.tp=this.csH,this.tp=t.windowTop+parseInt(this.csH)+"px",this.pxRatio=this.wW/750;let i=this.avatarStyle;if(i&&!0!==i&&(i=i.trim())){i=i.split(";");let t={};for(let s of i)if(s){if(s=s.trim().split(":"),s[1].toString().indexOf("upx")>=0){let t=s[1].trim().split(" ");for(let i in t)t[i]&&t[i].toString().indexOf("upx")>=0&&(t[i]=parseFloat(t[i])*this.pxRatio+"px");s[1]=t.join(" ")}t[s[0].trim()]=s[1].trim()}this.iS=t}this.expWidth&&(this.eW=this.expWidth.toString().indexOf("upx")>=0?parseInt(this.expWidth)*this.pxRatio:parseInt(this.expWidth)),this.expHeight&&(this.eH=this.expHeight.toString().indexOf("upx")>=0?parseInt(this.expHeight)*this.pxRatio:parseInt(this.expHeight)),"flex"===this.sD&&this.fDrawInit(!0),this.fHideImg()},fSelect(){this.fSelecting||(this.fSelecting=!0,setTimeout((()=>{this.fSelecting=!1}),500),h({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:t=>{a({title:"加载中...",mask:!0});let i=this.imgPath=t.tempFilePaths[0];l({src:i,success:t=>{if(this.imgWidth=t.width,this.imgHeight=t.height,this.path=i,!this.hasSel){let t=this.sS||{};if(!this.selWidth||!this.selHeight)return void o({title:"裁剪框的宽或高没有设置",showCancel:!1});{let i=this.selWidth.toString().indexOf("upx")>=0?parseInt(this.selWidth)*this.pxRatio:parseInt(this.selWidth),s=this.selHeight.toString().indexOf("upx")>=0?parseInt(this.selHeight)*this.pxRatio:parseInt(this.selHeight);t.width=i+"px",t.height=s+"px",t.top=(this.wH-s-50|0)/2+"px",t.left=(this.wW-i|0)/2+"px"}this.sS=t}this.noBar?this.fDrawInit(!0):n({complete:()=>{this.fDrawInit(!0)}})},fail:()=>{r({title:"请选择正确图片",duration:2e3})},complete(){c()}})}}))},fUpload(){if(this.fUploading)return;this.fUploading=!0,setTimeout((()=>{this.fUploading=!1}),1e3);let t=this.sS,i=parseInt(t.left),e=parseInt(t.top),h=parseInt(t.width),l=parseInt(t.height),o=this.eW||h*this.pixelRatio,n=this.eH||l*this.pixelRatio;a({title:"加载中...",mask:!0}),this.sD="none",this.sT="-10000px",this.hasSel=!1,this.fHideImg(),p({x:i,y:e,width:h,height:l,destWidth:o,destHeight:n,canvasId:"avatar-canvas",fileType:this.fType,quality:this.qlty,success:t=>{t=t.tempFilePath,this.btop(t).then((t=>{this.$emit("upload",{avatar:this.imgSrc,path:t,index:this.indx,data:this.rtn,base64:this.base64||null})}))},fail:t=>{r({title:"error1",duration:2e3})},complete:()=>{c(),this.noBar||s(),this.$emit("end")}},this)},fPrvUpload(){if(this.fPrvUploading)return;this.fPrvUploading=!0,setTimeout((()=>{this.fPrvUploading=!1}),1e3);let t=this.sS;parseInt(t.width),parseInt(t.height);let i=this.prvX,e=this.prvY,h=this.prvWidth,l=this.prvHeight,o=this.eW||parseInt(t.width)*this.pixelRatio,n=this.eH||parseInt(t.height)*this.pixelRatio;a({title:"加载中...",mask:!0}),this.sD="none",this.sT="-10000px",this.hasSel=!1,this.fHideImg(),p({x:i,y:e,width:h,height:l,destWidth:o,destHeight:n,canvasId:"prv-canvas",fileType:this.fType,quality:this.qlty,success:t=>{t=t.tempFilePath,this.btop(t).then((t=>{this.$emit("upload",{avatar:this.imgSrc,path:t,index:this.indx,data:this.rtn,base64:this.base64||null})}))},fail:()=>{r({title:"error_prv",duration:2e3})},complete:()=>{c(),this.noBar||s(),this.$emit("end")}},this)},fDrawInit(t=!1){let i=this.wW,s=this.wH,e=this.imgWidth,h=this.imgHeight,a=e/h,l=i-40,o=s-50-80,n=l/o,r=parseInt(this.sS.width),c=parseInt(this.sS.height);switch(this.fixWidth=0,this.fixHeight=0,this.lckWidth=0,this.lckHeight=0,this.stc){case"x":this.fixWidth=1;break;case"y":this.fixHeight=1;break;case"long":a>1?this.fixWidth=1:this.fixHeight=1;break;case"short":a>1?this.fixHeight=1:this.fixWidth=1;break;case"longSel":r>c?this.fixWidth=1:this.fixHeight=1;break;case"shortSel":r>c?this.fixHeight=1:this.fixWidth=1}switch(this.lck){case"x":this.lckWidth=1;break;case"y":this.lckHeight=1;break;case"long":a>1?this.lckWidth=1:this.lckHeight=1;break;case"short":a>1?this.lckHeight=1:this.lckWidth=1;break;case"longSel":r>c?this.lckWidth=1:this.lckHeight=1;break;case"shortSel":r>c?this.lckHeight=1:this.lckWidth=1}this.fixWidth?(l=r,o=l/a):this.fixHeight?(o=c,l=o*a):a<n?h<o?(l=e,o=h):l=o*a:e<l?(l=e,o=h):o=l/a,this.isin&&(l<r&&(l=r,o=l/a,this.lckHeight=0),o<c&&(o=c,l=o*a,this.lckWidth=0)),this.scaleSize=1,this.rotateDeg=0,this.posWidth=(i-l)/2|0,this.posHeight=(s-o-50)/2|0,this.useWidth=0|l,this.useHeight=0|o,this.centerX=this.posWidth+l/2,this.centerY=this.posHeight+o/2,this.focusX=0,this.focusY=0;let p=this.sS,d=parseInt(p.left),f=parseInt(p.top),g=parseInt(p.width),u=parseInt(p.height);this.canvas,this.canvasOper,this.cc;let m=this.cco;m.beginPath(),m.setLineWidth(3),m.setGlobalAlpha(1),m.setStrokeStyle("white"),m.strokeRect(d,f,g,u),m.setFillStyle("black"),m.setGlobalAlpha(.5),m.fillRect(0,0,this.wW,f),m.fillRect(0,f,d,u),m.fillRect(0,f+u,this.wW,this.wH-u-f-50),m.fillRect(d+g,f,this.wW-g-d,u),m.setGlobalAlpha(1),m.setStrokeStyle("red"),m.moveTo(d+15,f),m.lineTo(d,f),m.lineTo(d,f+15),m.moveTo(d+g-15,f),m.lineTo(d+g,f),m.lineTo(d+g,f+15),m.moveTo(d+15,f+u),m.lineTo(d,f+u),m.lineTo(d,f+u-15),m.moveTo(d+g-15,f+u),m.lineTo(d+g,f+u),m.lineTo(d+g,f+u-15),m.stroke(),m.draw(!1,(()=>{t&&(this.sD="flex",this.sT=this.drawTop+"px",this.fDrawImage(!0))})),this.$emit("init")},fDrawImage(t=!1){let i=Date.now();if(i-this.drawTm<20)return;this.drawTm=i;let s=this.cc,e=this.useWidth*this.scaleSize,h=this.useHeight*this.scaleSize;if(this.bgImage?s.drawImage(this.bgImage,0,0,this.wW,this.wH-50):s.fillRect(0,0,this.wW,this.wH-50),this.isin){let t=this.focusX*(this.scaleSize-1),i=this.focusY*(this.scaleSize-1);s.translate(this.centerX,this.centerY),s.rotate(this.rotateDeg*Math.PI/180),s.drawImage(this.imgPath,this.posWidth-this.centerX-t,this.posHeight-this.centerY-i,e,h)}else s.translate(this.posWidth+e/2,this.posHeight+h/2),s.rotate(this.rotateDeg*Math.PI/180),s.drawImage(this.imgPath,-e/2,-h/2,e,h);s.draw(!1)},fPreview(){if(this.fPreviewing)return;this.fPreviewing=!0,setTimeout((()=>{this.fPreviewing=!1}),1e3);let t=this.sS,i=parseInt(t.left),s=parseInt(t.top),e=parseInt(t.width),h=parseInt(t.height);a({title:"加载中...",mask:!0}),p({x:i,y:s,width:e,height:h,expWidth:e*this.pixelRatio,expHeight:h*this.pixelRatio,canvasId:"avatar-canvas",fileType:this.fType,quality:this.qlty,success:t=>{this.prvImgTmp=t=t.tempFilePath;let i=this.ccp,s=this.wW,e=parseInt(this.csH),h=parseInt(this.sS.width),a=parseInt(this.sS.height),l=s-40,o=e-80,n=l/h,r=a*n;r<o?(h=l,a=r):(n=o/a,h*=n,a=o),i.fillRect(0,0,s,e),this.prvX=s=(s-h)/2|0,this.prvY=e=(e-a)/2|0,this.prvWidth=h|=0,this.prvHeight=a|=0,i.drawImage(t,s,e,h,a),i.draw(!1),this.btop(t).then((t=>{this.sO=!1,this.pT=this.drawTop+"px"})),this.sO=!1,this.pT=this.drawTop+"px"},fail:()=>{r({title:"error2",duration:2e3})},complete:()=>{c()}},this)},fChooseImg(t,i,s){if(i){let t=i.selWidth,s=i.selHeight,e=i.expWidth,h=i.expHeight,a=i.quality,l=i.canRotate,o=i.canScale,n=i.minScale,r=i.maxScale,c=i.stretch,p=i.fileType,d=i.inner,f=i.lock;e&&(this.eW=e.toString().indexOf("upx")>=0?parseInt(e)*this.pxRatio:parseInt(e)),h&&(this.eH=h.toString().indexOf("upx")>=0?parseInt(h)*this.pxRatio:parseInt(h)),this.letRotate=!1===l||!0===d||"true"===d||"false"===l?0:1,this.letScale=!1===o||"false"===o?0:1,this.qlty=parseFloat(a)||1,this.mnScale=parseFloat(n)||.3,this.mxScale=parseFloat(r)||4,this.stc=c,this.isin=!0===d||"true"===d?1:0,this.fType="jpg"===p?"jpg":"png",this.lck=f,this.isin||!this.letRotate?(this.bW="24%",this.bD="none"):(this.bW="19%",this.bD="flex"),t&&s&&(t=t.toString().indexOf("upx")>=0?parseInt(t)*this.pxRatio:parseInt(t),s=s.toString().indexOf("upx")>=0?parseInt(s)*this.pxRatio:parseInt(s),this.sS.width=t+"px",this.sS.height=s+"px",this.sS.top=(this.wH-s-50|0)/2+"px",this.sS.left=(this.wW-t|0)/2+"px",this.hasSel=!0)}this.rtn=s,this.indx=t,this.fSelect()},fRotate(){this.rotateDeg+=90-this.rotateDeg%90,this.fDrawImage()},fStart(t){let i=t.touches,s=i[0],e=i[1];if(this.touch0=s,this.touch1=e,e){let t=e.x-s.x,i=e.y-s.y;this.fgDistance=Math.sqrt(t*t+i*i)}},fMove(t){let i=t.touches,s=i[0],e=i[1];if(e){let t=e.x-s.x,i=e.y-s.y,h=Math.sqrt(t*t+i*i),a=.005*(h-this.fgDistance),l=this.scaleSize+a;do{if(!this.letScale)break;if(l<this.mnScale)break;if(l>this.mxScale)break;let t=this.useWidth*a/2,i=this.useHeight*a/2;if(this.isin){let s=this.useWidth*l,e=this.useHeight*l;this.posWidth,this.posHeight;let h,a,o=parseInt(this.sS.left),n=parseInt(this.sS.top),r=parseInt(this.sS.width),c=parseInt(this.sS.height),p=o+r,d=n+c;if(s<=r||e<=c)break;this.cx=h=this.focusX*l-this.focusX,this.cy=a=this.focusY*l-this.focusY,this.posWidth-=t,this.posHeight-=i,this.posWidth-h>o&&(this.posWidth=o+h),this.posWidth+s-h<p&&(this.posWidth=p-s+h),this.posHeight-a>n&&(this.posHeight=n+a),this.posHeight+e-a<d&&(this.posHeight=d-e+a)}else this.posWidth-=t,this.posHeight-=i;this.scaleSize=l}while(0);this.fgDistance=h,e.x!==s.x&&this.letRotate&&(t=(this.touch1.y-this.touch0.y)/(this.touch1.x-this.touch0.x),i=(e.y-s.y)/(e.x-s.x),this.rotateDeg+=180*Math.atan((i-t)/(1+t*i))/Math.PI,this.touch0=s,this.touch1=e),this.fDrawImage()}else if(this.touch0){let t=s.x-this.touch0.x,i=s.y-this.touch0.y,e=this.posWidth+t,h=this.posHeight+i;if(this.isin){let s,a,l=this.useWidth*this.scaleSize,o=this.useHeight*this.scaleSize,n=e,r=h,c=n+l,p=r+o,d=parseInt(this.sS.left),f=parseInt(this.sS.top),g=d+parseInt(this.sS.width),u=f+parseInt(this.sS.height);this.cx=s=this.focusX*this.scaleSize-this.focusX,this.cy=a=this.focusY*this.scaleSize-this.focusY,!this.lckWidth&&Math.abs(t)<100&&(d<n-s?this.posWidth=d+s:g>c-s?this.posWidth=g-l+s:(this.posWidth=e,this.focusX-=t)),!this.lckHeight&&Math.abs(i)<100&&(f<r-a?(this.focusY-=f+a-this.posHeight,this.posHeight=f+a):u>p-a?(this.focusY-=u+a-(this.posHeight+o),this.posHeight=u-o+a):(this.posHeight=h,this.focusY-=i))}else Math.abs(t)<100&&!this.lckWidth&&(this.posWidth=e),Math.abs(i)<100&&!this.lckHeight&&(this.posHeight=h),this.focusX-=t,this.focusY-=i;this.touch0=s,this.fDrawImage()}},fEnd(t){let i=t.touches,s=i&&i[0];i&&i[1],s?this.touch0=s:(this.touch0=null,this.touch1=null)},fHideImg(){this.prvImg="",this.pT="-10000px",this.sO=!0,this.prvImgData=null,this.target=null},fClose(){this.sD="none",this.sT="-10000px",this.hasSel=!1,this.fHideImg(),this.noBar||s(),this.$emit("end")},fGetImgData(){return new Promise(((t,i)=>{let s=this.prvX,e=this.prvY,h=this.prvWidth,a=this.prvHeight;d({canvasId:"prv-canvas",x:s,y:e,width:h,height:a,success(i){t(i.data)},fail(t){i(t)}},this)}))},async fColorChange(t){let i=Date.now();if(i-this.prvTm<100)return;if(this.prvTm=i,a({title:"加载中...",mask:!0}),!this.prvImgData){if(!(this.prvImgData=await this.fGetImgData().catch((()=>{r({title:"error_read",duration:2e3})}))))return;this.target=new Uint8ClampedArray(this.prvImgData.length)}let s,e,h,l,o,n,p,d,g,u,m,x,v,S,I,w,y=this.prvImgData,H=this.target,b=t.detail.value;if(0===b)H=y;else{b=(b+100)/200,b<.005&&(b=0),b>.995&&(b=1);for(let t=y.length-1;t>=0;t-=4){if(s=y[t-3]/255,e=y[t-2]/255,h=y[t-1]/255,x=Math.max(s,e,h),m=Math.min(s,e,h),d=x-m,x===m?o=0:x===s&&e>=h?o=(e-h)/d*60:x===s&&e<h?o=(e-h)/d*60+360:x===e?o=(h-s)/d*60+120:x===h&&(o=(s-e)/d*60+240),p=(x+m)/2,0===p||x===m?n=0:0<p&&p<=.5?n=d/(2*p):p>.5&&(n=d/(2-2*p)),y[t]&&(l=y[t]),b<.5?n=n*b/.5:b>.5&&(n=2*n+2*b-n*b/.5-1),0===n)s=e=h=Math.round(255*p);else{p<.5?u=p*(1+n):p>=.5&&(u=p+n-p*n),g=2*p-u,v=o/360,S=v+1/3,I=v,w=v-1/3;let t=t=>t<0?t+1:t>1?t-1:t,i=t=>t<1/6?g+6*(u-g)*t:t>=1/6&&t<.5?u:t>=.5&&t<2/3?g+6*(u-g)*(2/3-t):g;s=S=Math.round(255*i(t(S))),e=I=Math.round(255*i(t(I))),h=w=Math.round(255*i(t(w)))}l&&(H[t]=l),H[t-3]=s,H[t-2]=e,H[t-1]=h}}let W=this.prvX,k=this.prvY,T=this.prvWidth,_=this.prvHeight;f({canvasId:"prv-canvas",x:W,y:k,width:T,height:_,data:H,fail(){r({title:"error_put",duration:2e3})},complete(){c()}},this)},btop(t){return this.base64=t,new Promise((function(i,s){for(var e=t.split(","),h=e[0].match(/:(.*?);/)[1],a=atob(e[1]),l=a.length,o=new Uint8Array(l);l--;)o[l]=a.charCodeAt(l);return i((window.URL||window.webkitURL).createObjectURL(new Blob([o],{type:h})))}))}}},[["render",function(t,i,s,e,h,a){const l=I,o=w,n=y,r=H,c=b;return g(),u(r,null,{default:m((()=>[x(l,{src:h.imgSrc.imgSrc,onClick:a.fSelect,style:{width:"100%"}},null,8,["src","onClick"]),x(o,{"canvas-id":"avatar-canvas",id:"avatar-canvas",class:"my-canvas",style:v({top:h.sT,height:h.csH}),"disable-scroll":"false"},null,8,["style"]),x(o,{"canvas-id":"oper-canvas",id:"oper-canvas",class:"oper-canvas",style:v({top:h.sT,height:h.csH}),"disable-scroll":"false",onTouchstart:a.fStart,onTouchmove:a.fMove,onTouchend:a.fEnd},null,8,["style","onTouchstart","onTouchmove","onTouchend"]),x(o,{"canvas-id":"prv-canvas",id:"prv-canvas",class:"prv-canvas","disable-scroll":"false",onTouchstart:a.fHideImg,style:v({height:h.csH,top:h.pT})},null,8,["onTouchstart","style"]),x(r,{class:"oper-wrapper",style:v({display:h.sD,bottom:0,paddingBottom:a.inlineH+"px",height:50+a.inlineH+"px"})},{default:m((()=>[x(r,{class:"oper"},{default:m((()=>[h.sO?(g(),u(r,{key:0,class:"btn-wrapper"},{default:m((()=>[x(r,{onClick:a.fSelect,"hover-class":"hover",style:v({width:h.bW})},{default:m((()=>[x(n,null,{default:m((()=>[S("重选")])),_:1})])),_:1},8,["onClick","style"]),x(r,{onClick:a.fClose,"hover-class":"hover",style:v({width:h.bW})},{default:m((()=>[x(n,null,{default:m((()=>[S("关闭")])),_:1})])),_:1},8,["onClick","style"]),x(r,{onClick:a.fRotate,"hover-class":"hover",style:v({width:h.bW,display:h.bD})},{default:m((()=>[x(n,null,{default:m((()=>[S("旋转")])),_:1})])),_:1},8,["onClick","style"]),x(r,{onClick:a.fPreview,"hover-class":"hover",style:v({width:h.bW})},{default:m((()=>[x(n,null,{default:m((()=>[S("预览")])),_:1})])),_:1},8,["onClick","style"]),x(r,{onClick:a.fUpload,"hover-class":"hover",style:v({width:h.bW})},{default:m((()=>[x(n,null,{default:m((()=>[S("上传")])),_:1})])),_:1},8,["onClick","style"])])),_:1})):(g(),u(r,{key:1,class:"clr-wrapper"},{default:m((()=>[x(c,{class:"my-slider",onChange:a.fColorChange,"block-size":"25",value:"0",min:"-100",max:"100",activeColor:"red",backgroundColor:"green","block-color":"grey","show-value":""},null,8,["onChange"]),x(r,{onClick:a.fPrvUpload,"hover-class":"hover",style:v({width:h.bW})},{default:m((()=>[x(n,null,{default:m((()=>[S("上传")])),_:1})])),_:1},8,["onClick","style"])])),_:1}))])),_:1})])),_:1},8,["style"])])),_:1})}],["__scopeId","data-v-e539d470"]]),X=W(k);const A=t({components:{avatar:q},data:()=>({loginStore:X,globalConfig:X.globalConfig,userInfo:{},sexList:[{id:"2",name:"未知"},{id:"1",name:"男"},{id:"0",name:"女"}],saved:!1,balance:"0.00",tabs_arr:[{id:1,name:"封面图",ifshow:!1},{id:2,name:"详细图",ifshow:!1}],tabs:0}),mounted(){this.get_userInfo(),this.userInfo=JSON.parse(JSON.stringify(X.userInfo)),console.log("ffffff",this.userInfo)},methods:{tab_change(t){this.tabs=t},async get_userInfo(){const t=await this.$myRuquest({url:"/api/front/user/getUserInfo",method:"POST"});200==t.code&&(this.balance=t.data.balance)},logout(){let t=T("client_id");this.$api.LoginApi.logout({client_id:t}).then((t=>{0==t.code&&X.logout()}))},textareaBInput(t){this.userInfo.motto=t.detail.value},changeSex(t){this.userInfo.sex=parseInt(t.detail.value)},saveInfo(){if(""==this.userInfo.realname)return r({title:"请输入昵称",icon:"none"}),!1;this.saved=!0;let t={realname:this.userInfo.realname,email:this.userInfo.email,sex:this.userInfo.sex,motto:this.userInfo.motto,ages:this.userInfo.ages};this.$api.msgApi.updateUserInfo(t).then((t=>{if(0==t.code){r({title:"保存成功",icon:"none"});let t=JSON.parse(JSON.stringify(this.userInfo));X.login(t)}})),setTimeout((()=>{this.saved=!1}),8e3)},setAvatar(){_({url:"/pages/mine/avatar"})},uploadAvatar(t){a({title:"上传中..."}),D({url:this.$api.msgApi.uploadAvatar,filePath:t.path,name:"file",header:{Authorization:T("authToken")},formData:{ext:"png"},success:t=>{c();let i=JSON.parse(t.data);if(0==i.code){r({title:i.msg,icon:"none"}),this.userInfo.avatar=i.data;let t=JSON.parse(JSON.stringify(this.userInfo));X.login(t)}},fail:t=>{c()}})}}},[["render",function(t,i,s,e,h,a){const l=O("cu-custom"),o=H,n=O("avatar"),r=z,c=U;return g(),u(o,null,{default:m((()=>[x(l,{bgColor:"bg-gradual-pink",isBack:!0},{backText:m((()=>[])),content:m((()=>[S("封面图设置")])),_:1}),x(r,null,{default:m((()=>[x(o,{class:"tab_mline"},{default:m((()=>[(g(!0),R(P,null,C(h.tabs_arr,((t,i)=>(g(),u(o,{class:M(["tab_mline_zi",{tab_hover:h.tabs==i}]),key:i,onClick:t=>a.tab_change(i)},{default:m((()=>[S(Y(t.name),1)])),_:2},1032,["onClick","class"])))),128))])),_:1}),0==h.tabs?(g(),u(o,{key:0},{default:m((()=>[x(o,null,{default:m((()=>[x(n,{selWidth:"480px",selHeight:"800px",onUpload:a.uploadAvatar,avatarSrc:h.userInfo.nearby_img,avatarStyle:"width:100%;"},null,8,["onUpload","avatarSrc"])])),_:1})])),_:1})):(g(),u(o,{key:1},{default:m((()=>[S(" 22 ")])),_:1}))])),_:1}),x(o,{class:"padding flex flex-direction"},{default:m((()=>[x(c,{class:"cu-btn bg-green lg",style:v(h.saved?"border: solid 1px #dbdada;":""),disabled:h.saved,onClick:i[0]||(i[0]=t=>a.saveInfo())},{default:m((()=>[S("保存")])),_:1},8,["style","disabled"])])),_:1})])),_:1})}],["__scopeId","data-v-37896502"]]);export{A as default};
