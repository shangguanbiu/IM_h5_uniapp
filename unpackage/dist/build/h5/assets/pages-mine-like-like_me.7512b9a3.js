import{_ as t,n as e,g as s,J as a,o as i,e as l,w as o,i as n,f as d,j as _,k as c,r,F as u,m as h,v as f,t as p,l as k,q as m,y,O as x,P as g}from"./index-cd0ab6d8.js";import{b as w,_ as b,a as v}from"./common.5a281662.js";import{_ as U,a as C}from"./nan.89d00671.js";const $=t({data:()=>({pop_notice:!1,notice_type:1,notice_content:"您当前可打招呼次数已达到每日限制，联更多的TA可开通会员，请联系客服",paddingB:0,total:0,params:{page:1,limit:10,is_mine:0},list:[],iflike:!1,had_likes:[],show_talk:!1,talk_data:{},fromUserid:"",fromUser:"",send_content:"",host:""}),methods:{bet_talk(t){this.show_talk=!0,this.talk_data=t},pop_ok(){e({url:"/pages/movie/kefu/kefu"})},getList(){this.$api.third_openApi.like_me_index(this.params).then((t=>{0==t.code&&(this.list=t.data.data,this.total=t.count,this.list.forEach((t=>{this.$set(t,"iflike",!1),this.$set(t,"isfar",(1.5*Math.random()+1).toFixed(2)),this.$set(t,"ifonline",Math.random()>=.5),this.$set(t,"istime",(.5*Math.random()+1).toFixed(2)),this.had_likes.forEach((e=>{t.account==e&&(t.iflike=!0)}))})))}))},setLike(t,e,a){var i={type:t,user_id:s("userInfo").user_id,user_account:e};1==t&&this.$api.third_openApi.near_user_like(i).then((t=>{0==t.code&&(this.list[a].iflike=!0)}))},async check_if_friend(t){if(0==this.fromUser.istalk)return this.pop_notice=!0,void(this.notice_type=1);var e=new Array;e.push(this.fromUser.user_id),e.push(t);200==(await this.$myRuquest({url:"/api/front/index/saveImUser",method:"POST",data:{users:e.toString()}})).code&&this.sendMessage(t)},sendMessage(t){let e={id:this.$util.getUuid(),is_group:0,fromUser:this.fromUser,type:"text",toContactId:t,content:this.send_content,sendTime:(new Date).getTime()};this.$api.msgApi.sendMessage(e).then((t=>{0==t.code?(this.show_talk=!1,this.notice_content="已打招呼，等待TA的回应！可在下方栏目-消息中查看",this.pop_notice=!0,this.notice_type=2,this.count_number()):a({title:t.msg,icon:"none"})})).catch((t=>{}))},async count_number(){if(200==(await this.$myRuquest({url:"/api/front/index/changeImUserData",method:"POST",data:{user_id:this.fromUser.user_id,column:"istalk"}})).code){this.userinfo.istalk=this.userinfo.istalk-1;let t=JSON.parse(JSON.stringify(this.userinfo));loginStore.login(t)}}},created(){this.paddingB=this.inlineTools,this.getList();var t=s("userInfo");this.had_likes=t.islikes.split(","),this.fromUser=t,this.host=this.$imgurl()}},[["render",function(t,e,s,a,$,F){const T=m("cu-custom"),A=y,I=n,S=m("Empty"),M=x,O=g;return i(),l(I,null,{default:o((()=>[d(T,{bgColor:"bg-gradual-pink",isBack:!0},{backText:o((()=>[])),content:o((()=>[_("喜欢我的TA")])),_:1}),0!==$.list.length?(i(),l(I,{key:0},{default:o((()=>[(i(!0),c(u,null,r($.list,((t,e)=>h((i(),l(I,{class:"user_line",key:e},{default:o((()=>[d(I,{class:"user_l"},{default:o((()=>[null!==t.avatar?(i(),l(A,{key:0,src:t.avatar,style:{width:"80px",height:"80px","border-radius":"50%"}},null,8,["src"])):(i(),l(A,{key:1,src:w,style:{width:"80px",height:"80px","border-radius":"50%"}})),d(I,{class:"item_like"},{default:o((()=>[t.ifonline?(i(),l(I,{key:0,class:"cuIcon-title",onClick:s=>F.setLike(2,t.account,e)},null,8,["onClick"])):k("",!0)])),_:2},1024)])),_:2},1024),d(I,{class:"user_r"},{default:o((()=>[d(I,{class:"item_name"},{default:o((()=>[d(I,{style:{display:"flex"}},{default:o((()=>[0==t.sex?(i(),l(I,{key:0,class:"sex_ico"},{default:o((()=>[d(A,{src:U,style:{width:"100%"},mode:"widthFix"})])),_:1})):k("",!0),1==t.sex?(i(),l(I,{key:1,class:"sex_ico"},{default:o((()=>[d(A,{src:C,style:{width:"100%"},mode:"widthFix"})])),_:1})):k("",!0),_(" "+p(t.realname),1)])),_:2},1024),d(I,{class:"col_96",style:{display:"flex",width:"150px","justify-content":"flex-end"}},{default:o((()=>[d(I,null,{default:o((()=>[_(p(t.isfar)+"km · ",1)])),_:2},1024),t.ifonline?(i(),l(I,{key:0},{default:o((()=>[_("在线")])),_:1})):k("",!0),t.ifonline?k("",!0):(i(),l(I,{key:1},{default:o((()=>[_(p(t.istime)+"小时",1)])),_:2},1024))])),_:2},1024)])),_:2},1024),d(I,{style:{margin:"5px 0","text-align":"right"}},{default:o((()=>[d(I,{class:"item_btn",onClick:e=>F.bet_talk(t)},{default:o((()=>[_("打招呼")])),_:2},1032,["onClick"])])),_:2},1024),null!==t.motto?(i(),l(I,{key:0,class:"motto"},{default:o((()=>[_("签名："+p(t.motto),1)])),_:2},1024)):k("",!0)])),_:2},1024)])),_:2},1024)),[[f,e<4]]))),128))])),_:1})):(i(),l(S,{key:1,noDatatext:"暂无记录",textcolor:"#999"})),h(d(I,null,{default:o((()=>[d(I,{class:"com_bg",onClick:e[0]||(e[0]=t=>$.show_talk=!1)}),d(I,{class:"talk_mian"},{default:o((()=>[d(I,{style:{width:"90%",margin:"auto"}},{default:o((()=>[d(I,{class:"talk_ico"},{default:o((()=>[null!==$.talk_data.avatar?(i(),l(A,{key:0,src:$.talk_data.avatar,style:{width:"100%","border-radius":"50%",height:"80px"},mode:"widthFix"},null,8,["src"])):(i(),l(A,{key:1,src:w,style:{width:"100%","border-radius":"50%",height:"80px"},mode:"widthFix"}))])),_:1}),d(I,{class:"talk_name"},{default:o((()=>[_(p($.talk_data.realname),1)])),_:1}),d(I,{class:"talk_desc"},{default:o((()=>[0==$.talk_data.sex?(i(),l(I,{key:0,class:"talk_sex p_type1"},{default:o((()=>[d(I,{class:"sex_ico"},{default:o((()=>[d(A,{src:b,style:{width:"100%"},mode:"widthFix"})])),_:1}),d(I,{style:{"line-height":"25px"}},{default:o((()=>[_(p($.talk_data.ages),1)])),_:1})])),_:1})):k("",!0),1==$.talk_data.sex?(i(),l(I,{key:1,class:"talk_sex p_type1"},{default:o((()=>[d(I,{class:"sex_ico"},{default:o((()=>[d(A,{src:v,style:{width:"100%"},mode:"widthFix"})])),_:1}),d(I,{style:{"line-height":"25px"}},{default:o((()=>[_(p($.talk_data.ages),1)])),_:1})])),_:1})):k("",!0),2==$.talk_data.sex?(i(),l(I,{key:2,class:"talk_sex p_type3"},{default:o((()=>[d(I,{style:{"line-height":"25px"}},{default:o((()=>[_(p($.talk_data.ages),1)])),_:1})])),_:1})):k("",!0),d(I,{class:"talk_sex p_type3"},{default:o((()=>[d(I,{style:{"line-height":"25px"}},{default:o((()=>[_("vip-"+p($.talk_data.islevel),1)])),_:1})])),_:1})])),_:1}),d(I,{class:"talk_form"},{default:o((()=>[d(I,{style:{"padding-left":"10px"}},{default:o((()=>[d(M,{placeholder:"随意打个招呼吧",style:{height:"32px","font-size":"14px"},maxlength:"32",name:"input",modelValue:$.send_content,"onUpdate:modelValue":e[1]||(e[1]=t=>$.send_content=t)},null,8,["modelValue"])])),_:1}),d(I,null,{default:o((()=>[d(O,{class:"cu-btn bg-blue shadow",onClick:e[2]||(e[2]=t=>F.check_if_friend($.talk_data.user_id))},{default:o((()=>[_("发送")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},512),[[f,$.show_talk]]),h(d(I,null,{default:o((()=>[d(I,{class:"com_bg"}),d(I,{class:"com_main"},{default:o((()=>[d(I,{class:"pop_mian"},{default:o((()=>[d(I,{class:"pop_title"},{default:o((()=>[_("提示")])),_:1}),d(I,{style:{padding:"10px 15px","line-height":"25px","flex-wrap":"wrap","text-align":"center"}},{default:o((()=>[_(p($.notice_content),1)])),_:1}),d(I,{class:"pop_foot"},{default:o((()=>[1==$.notice_type?(i(),l(I,{key:0,class:"pop_ft_btn1",onClick:e[3]||(e[3]=t=>$.pop_notice=!1)},{default:o((()=>[_("关闭")])),_:1})):k("",!0),1==$.notice_type?(i(),l(I,{key:1,class:"pop_ft_btn2",onClick:e[4]||(e[4]=t=>F.pop_ok())},{default:o((()=>[_("去升级")])),_:1})):k("",!0),2==$.notice_type?(i(),l(I,{key:2,class:"pop_ft_btn2",onClick:e[5]||(e[5]=t=>$.pop_notice=!1)},{default:o((()=>[_("确定")])),_:1})):k("",!0)])),_:1})])),_:1})])),_:1})])),_:1},512),[[f,$.pop_notice]])])),_:1})}],["__scopeId","data-v-cb6711b9"]]);export{$ as default};
