import{_ as e,a as t,s,g as a,o as i,e as l,w as r,i as n,f as o,j as d,t as u,k as h,r as _,F as c,x as f,l as k,m as p,v as x,z as y}from"./index-d492f317.js";import{_ as m,a as g}from"./nan.89d00671.js";import{_ as $,a as v,b as w}from"./men2.a2cf875e.js";const b=t(s);const j=e({data:()=>({paddingB:0,total:0,params:{page:1,limit:10,is_mine:0},list:[],iflike:!1,had_likes:[],likes_arr:[],host:""}),methods:{getList(){let e=JSON.parse(JSON.stringify(b.userInfo));this.$api.third_openApi.near_user_List(this.params).then((t=>{if(0==t.code){let s=t.data.data;this.total=t.count,s.forEach((e=>{this.$set(e,"iflike",!1),this.$set(e,"isfar",(1.5*Math.random()+1).toFixed(2)),this.$set(e,"ifonline",Math.random()>=.5),this.$set(e,"istime",(.5*Math.random()+1).toFixed(2)),0!==this.had_likes.length&&this.had_likes.forEach((t=>{e.account==t&&(e.iflike=!0,this.likes_arr.push(e))}))})),0==e.islevel?this.list=s.slice(0,5):this.list=s}}))},setLike(e,t,s){var i={type:e,user_id:a("userInfo").user_id,user_account:t};1==e&&this.$api.third_openApi.near_user_like(i).then((e=>{0==e.code&&(this.list[s].iflike=!0)}))}},created(){this.paddingB=this.inlineTools,this.getList();var e=a("userInfo");this.had_likes=e.islikes.split(","),this.host=this.$imgurl()}},[["render",function(e,t,s,a,b,j){const F=f("cu-custom"),I=y,L=n,B=f("Empty");return i(),l(L,null,{default:r((()=>[o(F,{bgColor:"bg-gradual-pink",isBack:!0},{backText:r((()=>[])),content:r((()=>[d(u(e.$t("like.title")),1)])),_:1}),0!==b.likes_arr.length?(i(),l(L,{key:0},{default:r((()=>[(i(!0),h(c,null,_(b.likes_arr,((t,s)=>k((i(),l(L,{class:"user_line",key:s},{default:r((()=>[o(L,{class:"user_l"},{default:r((()=>[o(L,{style:{display:"flex"}},{default:r((()=>[0==t.sex?(i(),l(L,{key:0,class:"sex_ico"},{default:r((()=>[o(I,{src:m,style:{width:"100%"},mode:"widthFix"})])),_:1})):p("",!0),1==t.sex?(i(),l(L,{key:1,class:"sex_ico"},{default:r((()=>[o(I,{src:g,style:{width:"100%"},mode:"widthFix"})])),_:1})):p("",!0),null!==t.avatar?(i(),l(I,{key:2,src:b.host+t.avatar,style:{width:"80px",height:"80px","border-radius":"50%"}},null,8,["src"])):p("",!0),null==t.avatar&&0==t.sex?(i(),l(I,{key:3,src:$,style:{width:"80px",height:"80px","border-radius":"50%"}})):p("",!0),null==t.avatar&&1==t.sex?(i(),l(I,{key:4,src:v,style:{width:"80px",height:"80px","border-radius":"50%"}})):p("",!0),null==t.avatar&&2==t.sex?(i(),l(I,{key:5,src:w,style:{width:"80px",height:"80px","border-radius":"50%"}})):p("",!0)])),_:2},1024),o(L,{class:"item_like"},{default:r((()=>[t.ifonline?(i(),l(L,{key:0,class:"cuIcon-title",onClick:e=>j.setLike(2,t.account,s)},null,8,["onClick"])):p("",!0)])),_:2},1024)])),_:2},1024),o(L,{class:"user_r"},{default:r((()=>[o(L,{class:"item_name"},{default:r((()=>[d(u(t.realname)+" ",1),o(L,{class:"col_96",style:{display:"flex",width:"150px","justify-content":"flex-end"}},{default:r((()=>[o(L,null,{default:r((()=>[d(u(t.isfar)+"km · ",1)])),_:2},1024),t.ifonline?(i(),l(L,{key:0},{default:r((()=>[d("在线")])),_:1})):p("",!0),t.ifonline?p("",!0):(i(),l(L,{key:1},{default:r((()=>[d(u(t.istime)+"小时",1)])),_:2},1024))])),_:2},1024)])),_:2},1024),o(L,{style:{margin:"5px 0"}},{default:r((()=>[0==t.sex?(i(),l(L,{key:0,class:"p_type p_type1"},{default:r((()=>[d(u(e.$t("like.sex_nv")),1)])),_:1})):p("",!0),1==t.sex?(i(),l(L,{key:1,class:"p_type p_type2"},{default:r((()=>[d(u(e.$t("like.sex_nan")),1)])),_:1})):p("",!0)])),_:2},1024),""!==t.motto&&null!==t.motto?(i(),l(L,{key:0,class:"motto"},{default:r((()=>[d(u(e.$t("like.sine"))+"："+u(t.motto),1)])),_:2},1024)):p("",!0)])),_:2},1024)])),_:2},1024)),[[x,s<4]]))),128))])),_:1})):(i(),l(B,{key:1,noDatatext:e.$t("like.no_data"),textcolor:"#999"},null,8,["noDatatext"]))])),_:1})}],["__scopeId","data-v-4cd52568"]]);export{j as default};
