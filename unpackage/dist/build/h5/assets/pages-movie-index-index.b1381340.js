import{_ as t,T as e,B as i,o,e as a,w as s,m as l,f as n,q as c,C as r,j as d,t as u,y as _,i as p,a as h,s as f,n as m,d as g,c as y,g as x,aa as w,k as b,r as k,F as A,l as C,v as S,z as v,aD as I,aE as T}from"./index-94068fa3.js";import{_ as B}from"./uni-icons.564d28fc.js";import{r as E}from"./uni-app.es.f2d0fc12.js";const M=t({name:"UniNoticeBar",emits:["click","getmore","close"],props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#FFF9EA"},speed:{type:Number,default:100},color:{type:String,default:"#FF9A43"},moreColor:{type:String,default:"#FF9A43"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:()=>({textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,elIdBox:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}),mounted(){this.$nextTick((()=>{this.initSize()}))},methods:{initSize(){if(this.scrollable){let t=[],i=new Promise(((t,i)=>{e().in(this).select(`#${this.elId}`).boundingClientRect().exec((e=>{this.textWidth=e[0].width,t()}))})),o=new Promise(((t,i)=>{e().in(this).select(`#${this.elIdBox}`).boundingClientRect().exec((e=>{this.boxWidth=e[0].width,t()}))}));t.push(i),t.push(o),Promise.all(t).then((()=>{this.animationDuration=this.textWidth/this.speed+"s",this.animationDelay=`-${this.boxWidth/this.speed}s`,setTimeout((()=>{this.animationPlayState="running"}),1e3)}))}},loopAnimation(){},clickMore(){this.$emit("getmore")},close(){this.show=!1,this.$emit("close")},onClick(){this.$emit("click")}}},[["render",function(t,e,h,f,m,g){const y=E(i("uni-icons"),B),x=_,w=p;return m.show?(o(),a(w,{key:0,class:"uni-noticebar",style:r({backgroundColor:h.backgroundColor}),onClick:g.onClick},{default:s((()=>[!0===h.showIcon||"true"===h.showIcon?(o(),a(y,{key:0,class:"uni-noticebar-icon",type:"sound",color:h.color,size:"22"},null,8,["color"])):l("",!0),n(w,{ref:"textBox",class:c(["uni-noticebar__content-wrapper",{"uni-noticebar__content-wrapper--scrollable":h.scrollable,"uni-noticebar__content-wrapper--single":!h.scrollable&&(h.single||h.moreText)}])},{default:s((()=>[n(w,{id:m.elIdBox,class:c(["uni-noticebar__content",{"uni-noticebar__content--scrollable":h.scrollable,"uni-noticebar__content--single":!h.scrollable&&(h.single||h.moreText)}])},{default:s((()=>[n(x,{id:m.elId,ref:"animationEle",class:c(["uni-noticebar__content-text",{"uni-noticebar__content-text--scrollable":h.scrollable,"uni-noticebar__content-text--single":!h.scrollable&&(h.single||h.showGetMore)}]),style:r({color:h.color,width:m.wrapWidth+"px",animationDuration:m.animationDuration,"-webkit-animationDuration":m.animationDuration,animationPlayState:m.webviewHide?"paused":m.animationPlayState,"-webkit-animationPlayState":m.webviewHide?"paused":m.animationPlayState,animationDelay:m.animationDelay,"-webkit-animationDelay":m.animationDelay})},{default:s((()=>[d(u(h.text),1)])),_:1},8,["id","class","style"])])),_:1},8,["id","class"])])),_:1},8,["class"]),!0===h.showGetMore||"true"===h.showGetMore?(o(),a(w,{key:1,class:"uni-noticebar__more uni-cursor-point",onClick:g.clickMore},{default:s((()=>[h.moreText.length>0?(o(),a(x,{key:0,style:r({color:h.moreColor}),class:"uni-noticebar__more-text"},{default:s((()=>[d(u(h.moreText),1)])),_:1},8,["style"])):(o(),a(y,{key:1,type:"right",color:h.moreColor,size:"16"},null,8,["color"]))])),_:1},8,["onClick"])):l("",!0),!0!==h.showClose&&"true"!==h.showClose||!1!==h.showGetMore&&"false"!==h.showGetMore?l("",!0):(o(),a(w,{key:2,class:"uni-noticebar-close uni-cursor-point"},{default:s((()=>[n(y,{type:"closeempty",color:h.color,size:"16",onClick:g.close},null,8,["color","onClick"])])),_:1}))])),_:1},8,["style","onClick"])):l("",!0)}],["__scopeId","data-v-46989114"]]),P=h(f);const F=t({data:()=>({pop_notice:!1,getitem:0,if_long:!1,scrollW:0,show_login:!1,indicatorDots:!0,autoplay:!0,interval:3e3,duration:500,list_t:[],bannerdata:[],indicatorColor:"#292b40",indicatorActiveColor:"#ffffff",show_team:!1,team:"",get_data:"",compay_name:"正在获取中正在获取中",select_compay:!1,compay_list:[],if_login_check:!1,compay_id:"",index_ico:"",index_ico_h:"",cz_ico:"",cz_ico_h:"",kf_ico:"",kf_ico_h:"",user_ico:"",user_ico_h:"",index_ft_bg:"",room:[],list:[],hot_list:[],run_txt:[],run_text_string:"",userinfo:{},back:!1}),props:["run"],watch:{$route(t){"/"==t.fullPath&&(this.back=!0,this.get_notice(2),this.getList(1,6,1),this.getList(2,10,2))}},methods:{pop_ok(){m({url:"/pages/movie/kefu/kefu"})},postMsg(){g({url:"/pages/index/index"})},async get_userinfo(){let t=JSON.parse(JSON.stringify(P.userInfo));const e=await this.$myRuquest({url:"/api/front/index/getImUserInfo",method:"POST",data:{user_id:t.user_id}});if(200==e.code){this.userinfo=e.data;let t=JSON.parse(JSON.stringify(e.data));P.login(t)}},on_func_notice(t){0!=this.userinfo.isview||0!=this.userinfo.role?(y("movice_info",t),m({url:"/pages/movie/list/detial?id="+t.id})):this.pop_notice=!0},jump(t){1==t?m({url:"/pages/movie/index/index"}):2==t?m({url:"/pages/movie/list/index"}):3==t?m({url:"/pages/movie/bet/bet"}):4==t?m({url:"/pages/kefu/kefu_index"}):5==t&&m({url:"/pages/mine/index"})},async getList(t,e,i){1==t&&this.get_userinfo(),this.list=[];const o=await this.$myRuquest({method:"Post",url:"/api/front/movie/getList",data:{page:1,pagesize:e,tag:i}});200==o.code&&(1==t?this.room=o.data.list:this.hot_list=o.data.list)},async get_banner(t){this.bannerdata=[],window.scrollTo({top:0,behavior:"smooth"});const e=await this.$myRuquest({url:"/api/front/notice/getList",method:"POST",data:{type:t}});200==e.code&&(this.bannerdata=e.data.list)},async get_notice(t){var e=this;const i=await this.$myRuquest({url:"/api/front/notice/getList",method:"POST",data:{type:t}});200==i.code&&(this.back||this.get_banner(1),e.run_txt=i.data.list,0!==e.run_txt.length&&e.run_txt.forEach((t=>{this.run_text_string+=t.title})))},onClose(){this.show_login=!this.show_login},noOk(){m({url:"/pages/login/login"})},to_notice(){m({url:"/pages/movie/notice/notice"})},to_more(){m({url:"/pages/movie/list/index"})},to_home(){uni.postMessage({type:"backToHome"})},onNavigationBarButtonTap(t){""!==x("token")?0==t.index?m({url:"/pages/notice/notice"}):m({url:"/pages/login/login"}):this.show_login=!0}},onLoad(){},onShow(){w("movice_info"),this.pop_notice=!1,this.show_login=!1,x("ifLogin")},mounted(){x("ifLogin")}},[["render",function(t,e,r,_,h,f){const m=v,g=p,y=T,x=I,w=E(i("uni-notice-bar"),M);return o(),a(g,{style:{"background-color":"#190D30"}},{default:s((()=>[n(g,{class:"index_topline"},{default:s((()=>[n(g,{class:"index_top_l",style:{width:"47px"},onClick:f.to_notice},{default:s((()=>[n(g,{style:{"padding-top":"5px"}},{default:s((()=>[n(m,{src:"data:image/png;base64,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",style:{width:"25px",height:"25px","margin-top":"3px"},mode:"widthFix"})])),_:1})])),_:1},8,["onClick"]),n(g,{class:"index_top_mdl"}),n(g,{class:"index_top_l"})])),_:1}),n(g,{class:"page-section swiper"},{default:s((()=>[n(g,{style:{position:"relative"}},{default:s((()=>[0!==h.bannerdata.length?(o(),a(x,{key:0,"indicator-dots":h.indicatorDots,"indicator-color":h.indicatorColor,"indicator-active-color":h.indicatorActiveColor,autoplay:h.autoplay,interval:h.interval,duration:h.duration,style:{width:"100%",height:"210px"}},{default:s((()=>[(o(!0),b(A,null,k(h.bannerdata,((t,e)=>(o(),a(y,{key:e},{default:s((()=>[n(m,{src:t.img,mode:"widthFix",style:{width:"100%"}},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["indicator-dots","indicator-color","indicator-active-color","autoplay","interval","duration"])):l("",!0)])),_:1}),n(g,{style:{width:"100vw",display:"flex","background-color":"#fffbe8"}},{default:s((()=>[n(g,{class:"laba"},{default:s((()=>[n(g,{class:"cuIcon-notificationfill"})])),_:1}),n(g,{style:{flex:"1",height:"40px",overflow:"hidden"}},{default:s((()=>[n(w,{single:!0,scrollable:!0,speed:60,text:h.run_text_string},null,8,["text"])])),_:1})])),_:1}),n(g,{class:"main_i"},{default:s((()=>[n(g,{class:"title_line"},{default:s((()=>[d("今日推荐"),n(g,{class:"type_more",onClick:f.to_more},{default:s((()=>[d("更多")])),_:1},8,["onClick"])])),_:1}),n(g,{class:"index_lanmu"},{default:s((()=>[(o(!0),b(A,null,k(h.room,((t,e)=>(o(),a(g,{class:"index_lm_zi",onClick:e=>f.on_func_notice(t),key:e},{default:s((()=>[n(g,{class:"index_lm_zim"},{default:s((()=>[n(m,{src:t.img,style:{width:"100%"},mode:"widthFix"},null,8,["src"]),n(g,{class:"tit_a"},{default:s((()=>[d(u(t.name),1)])),_:2},1024),n(g,{class:"tit_adesc"},{default:s((()=>[d(u(t.desc),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1}),n(g,{class:"title_line"},{default:s((()=>[d("热门"),n(g,{class:"type_more",onClick:f.to_more},{default:s((()=>[d("更多")])),_:1},8,["onClick"])])),_:1}),n(g,{style:{"padding-bottom":"55px"}},{default:s((()=>[(o(!0),b(A,null,k(h.hot_list,((t,e)=>(o(),a(g,{class:"user_line",key:e,onClick:e=>f.on_func_notice(t)},{default:s((()=>[n(g,{class:"user_l"},{default:s((()=>[n(m,{src:t.img,mode:"widthFix",style:{width:"100%"}},null,8,["src"])])),_:2},1024),n(g,{class:"user_r"},{default:s((()=>[n(g,{class:"item_name"},{default:s((()=>[d(u(t.name),1)])),_:2},1024),n(g,{style:{"max-height":"90px"}},{default:s((()=>[n(g,{class:"item_desc"},{default:s((()=>[d(u(t.desc),1)])),_:2},1024),n(g,null,{default:s((()=>[(o(!0),b(A,null,k(t.hot_tags.split(","),((t,e)=>C((o(),a(g,{class:c("item_"+e),key:e},{default:s((()=>[d(u(t),1)])),_:2},1032,["class"])),[[S,e<3]]))),128))])),_:2},1024)])),_:2},1024),n(g,{style:{display:"flex"}},{default:s((()=>[n(g,{class:"cuIcon-attentionfavor l_ft_r",style:{"font-size":"14px"}}),n(g,{class:"l_ft_r"},{default:s((()=>[d(u(t.view_count),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),C(n(g,null,{default:s((()=>[n(g,{class:"com_bg"}),n(g,{class:"com_main"},{default:s((()=>[n(g,{class:"pop_mian"},{default:s((()=>[n(g,{class:"pop_title"},{default:s((()=>[d("提示")])),_:1}),n(g,{style:{padding:"10px 15px",display:"flex","justify-content":"flex-start","line-height":"25px","flex-wrap":"wrap"}},{default:s((()=>[d(" 您当前可观看浏览视频数量已达到每日限制，观看更多可开通会员，请联系客服 ")])),_:1}),n(g,{class:"pop_foot"},{default:s((()=>[n(g,{class:"pop_ft_btn1",onClick:e[0]||(e[0]=t=>h.pop_notice=!1)},{default:s((()=>[d("关闭")])),_:1}),n(g,{class:"pop_ft_btn2",onClick:e[1]||(e[1]=t=>f.pop_ok())},{default:s((()=>[d("去升级")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},512),[[S,h.pop_notice]])])),_:1})}],["__scopeId","data-v-f248c0ae"]]);export{F as default};
