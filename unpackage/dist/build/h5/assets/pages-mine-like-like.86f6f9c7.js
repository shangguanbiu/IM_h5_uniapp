import{_ as s,a as e,s as t,g as a,o as i,e as l,w as o,i as r,f as d,j as n,k as _,r as u,F as c,q as h,l as f,m as p,t as k,v as m,y}from"./index-45871c8e.js";import{_ as x,a as g}from"./nan.89d00671.js";import{_ as w}from"./common.b05f9007.js";const v=e(t);const $=s({data:()=>({paddingB:0,total:0,params:{page:1,limit:10,is_mine:0},list:[],iflike:!1,had_likes:[],likes_arr:[],host:""}),methods:{getList(){let s=JSON.parse(JSON.stringify(v.userInfo));this.$api.third_openApi.near_user_List(this.params).then((e=>{if(0==e.code){let t=e.data.data;this.total=e.count,t.forEach((s=>{this.$set(s,"iflike",!1),this.$set(s,"isfar",(1.5*Math.random()+1).toFixed(2)),this.$set(s,"ifonline",Math.random()>=.5),this.$set(s,"istime",(.5*Math.random()+1).toFixed(2)),0!==this.had_likes.length&&this.had_likes.forEach((e=>{s.account==e&&(s.iflike=!0,this.likes_arr.push(s))}))})),0==s.islevel?this.list=t.slice(0,5):this.list=t}}))},setLike(s,e,t){var i={type:s,user_id:a("userInfo").user_id,user_account:e};1==s&&this.$api.third_openApi.near_user_like(i).then((s=>{0==s.code&&(this.list[t].iflike=!0)}))}},created(){this.paddingB=this.inlineTools,this.getList();var s=a("userInfo");this.had_likes=s.islikes.split(","),this.host=this.$imgurl()}},[["render",function(s,e,t,a,v,$){const b=h("cu-custom"),j=y,F=r,I=h("Empty");return i(),l(F,null,{default:o((()=>[d(b,{bgColor:"bg-gradual-pink",isBack:!0},{backText:o((()=>[])),content:o((()=>[n("我喜欢的TA")])),_:1}),0!==v.likes_arr.length?(i(),l(F,{key:0},{default:o((()=>[(i(!0),_(c,null,u(v.likes_arr,((s,e)=>f((i(),l(F,{class:"user_line",key:e},{default:o((()=>[d(F,{class:"user_l"},{default:o((()=>[d(F,{style:{display:"flex"}},{default:o((()=>[0==s.sex?(i(),l(F,{key:0,class:"sex_ico"},{default:o((()=>[d(j,{src:x,style:{width:"100%"},mode:"widthFix"})])),_:1})):p("",!0),1==s.sex?(i(),l(F,{key:1,class:"sex_ico"},{default:o((()=>[d(j,{src:g,style:{width:"100%"},mode:"widthFix"})])),_:1})):p("",!0),null!==s.avatar?(i(),l(j,{key:2,src:v.host+s.avatar,style:{width:"80px",height:"80px","border-radius":"50%"}},null,8,["src"])):(i(),l(j,{key:3,src:w,style:{width:"80px",height:"80px","border-radius":"50%"}}))])),_:2},1024),d(F,{class:"item_like"},{default:o((()=>[s.ifonline?(i(),l(F,{key:0,class:"cuIcon-title",onClick:t=>$.setLike(2,s.account,e)},null,8,["onClick"])):p("",!0)])),_:2},1024)])),_:2},1024),d(F,{class:"user_r"},{default:o((()=>[d(F,{class:"item_name"},{default:o((()=>[n(k(s.realname)+" ",1),d(F,{class:"col_96",style:{display:"flex",width:"150px","justify-content":"flex-end"}},{default:o((()=>[d(F,null,{default:o((()=>[n(k(s.isfar)+"km · ",1)])),_:2},1024),s.ifonline?(i(),l(F,{key:0},{default:o((()=>[n("在线")])),_:1})):p("",!0),s.ifonline?p("",!0):(i(),l(F,{key:1},{default:o((()=>[n(k(s.istime)+"小时",1)])),_:2},1024))])),_:2},1024)])),_:2},1024),d(F,{style:{margin:"5px 0"}},{default:o((()=>[0==s.sex?(i(),l(F,{key:0,class:"p_type p_type1"},{default:o((()=>[n("女")])),_:1})):p("",!0),1==s.sex?(i(),l(F,{key:1,class:"p_type p_type2"},{default:o((()=>[n("男")])),_:1})):p("",!0)])),_:2},1024),""!==s.motto&&null!==s.motto?(i(),l(F,{key:0,class:"motto"},{default:o((()=>[n("签名："+k(s.motto),1)])),_:2},1024)):p("",!0)])),_:2},1024)])),_:2},1024)),[[m,e<4]]))),128))])),_:1})):(i(),l(I,{key:1,noDatatext:"暂无记录",textcolor:"#999"}))])),_:1})}],["__scopeId","data-v-e54e71c0"]]);export{$ as default};