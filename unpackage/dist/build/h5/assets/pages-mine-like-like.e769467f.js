import{_ as s,g as t,o as e,e as a,w as i,i as l,f as o,j as r,k as d,r as n,F as h,q as _,l as u,m as c,t as f,v as k,y as p}from"./index-bb9aa3b8.js";import{_ as m,a as y}from"./nan.89d00671.js";import{_ as x}from"./common.b05f9007.js";const g=s({data:()=>({paddingB:0,total:0,params:{page:1,limit:10,is_mine:0},list:[],iflike:!1,had_likes:[],likes_arr:[],host:""}),methods:{getList(){this.$api.third_openApi.near_user_List(this.params).then((s=>{0==s.code&&(this.list=s.data.data,this.total=s.count,this.list.forEach((s=>{this.$set(s,"iflike",!1),this.$set(s,"isfar",(1.5*Math.random()+1).toFixed(2)),this.$set(s,"ifonline",Math.random()>=.5),this.$set(s,"istime",(.5*Math.random()+1).toFixed(2)),0!==this.had_likes.length&&this.had_likes.forEach((t=>{s.account==t&&(s.iflike=!0,this.likes_arr.push(s))}))})))}))},setLike(s,e,a){var i={type:s,user_id:t("userInfo").user_id,user_account:e};1==s&&this.$api.third_openApi.near_user_like(i).then((s=>{0==s.code&&(this.list[a].iflike=!0)}))}},created(){this.paddingB=this.inlineTools,this.getList();var s=t("userInfo");this.had_likes=s.islikes.split(","),this.host=this.$imgurl(),console.log("host1",this.host)}},[["render",function(s,t,g,w,$,v){const b=_("cu-custom"),j=p,F=l,L=_("Empty");return e(),a(F,null,{default:i((()=>[o(b,{bgColor:"bg-gradual-pink",isBack:!0},{backText:i((()=>[])),content:i((()=>[r("我喜欢的TA")])),_:1}),0!==$.likes_arr.length?(e(),a(F,{key:0},{default:i((()=>[(e(!0),d(h,null,n($.likes_arr,((s,t)=>u((e(),a(F,{class:"user_line",key:t},{default:i((()=>[o(F,{class:"user_l"},{default:i((()=>[o(F,{style:{display:"flex"}},{default:i((()=>[0==s.sex?(e(),a(F,{key:0,class:"sex_ico"},{default:i((()=>[o(j,{src:m,style:{width:"100%"},mode:"widthFix"})])),_:1})):c("",!0),1==s.sex?(e(),a(F,{key:1,class:"sex_ico"},{default:i((()=>[o(j,{src:y,style:{width:"100%"},mode:"widthFix"})])),_:1})):c("",!0),null!==s.avatar?(e(),a(j,{key:2,src:$.host+s.avatar,style:{width:"80px",height:"80px","border-radius":"50%"}},null,8,["src"])):(e(),a(j,{key:3,src:x,style:{width:"80px",height:"80px","border-radius":"50%"}}))])),_:2},1024),o(F,{class:"item_like"},{default:i((()=>[s.ifonline?(e(),a(F,{key:0,class:"cuIcon-title",onClick:e=>v.setLike(2,s.account,t)},null,8,["onClick"])):c("",!0)])),_:2},1024)])),_:2},1024),o(F,{class:"user_r"},{default:i((()=>[o(F,{class:"item_name"},{default:i((()=>[r(f(s.realname)+" ",1),o(F,{class:"col_96",style:{display:"flex",width:"150px","justify-content":"flex-end"}},{default:i((()=>[o(F,null,{default:i((()=>[r(f(s.isfar)+"km · ",1)])),_:2},1024),s.ifonline?(e(),a(F,{key:0},{default:i((()=>[r("在线")])),_:1})):c("",!0),s.ifonline?c("",!0):(e(),a(F,{key:1},{default:i((()=>[r(f(s.istime)+"小时",1)])),_:2},1024))])),_:2},1024)])),_:2},1024),o(F,{style:{margin:"5px 0"}},{default:i((()=>[0==s.sex?(e(),a(F,{key:0,class:"p_type p_type1"},{default:i((()=>[r("女")])),_:1})):c("",!0),1==s.sex?(e(),a(F,{key:1,class:"p_type p_type2"},{default:i((()=>[r("男")])),_:1})):c("",!0)])),_:2},1024),""!==s.motto?(e(),a(F,{key:0,class:"motto"},{default:i((()=>[r("签名："+f(s.motto),1)])),_:2},1024)):c("",!0)])),_:2},1024)])),_:2},1024)),[[k,t<4]]))),128))])),_:1})):(e(),a(L,{key:1,noDatatext:"暂无记录",textcolor:"#999"}))])),_:1})}],["__scopeId","data-v-512d4e5e"]]);export{g as default};
