import{_ as t,a,s as e,n as i,g as o,c as s,o as l,e as n,w as r,i as d,f as c,j as u,t as p,k as _,r as f,F as g,l as h,v as m,x as y,aB as w,z as b,aC as v}from"./index-d492f317.js";const k=a(e);const x=t({data:()=>({top_title:"详情",pop_notice:!1,scrollW:0,show_login:!1,indicatorDots:!0,autoplay:!0,interval:3e3,duration:500,indicatorColor:"#292b40",indicatorActiveColor:"#ffffff",tag:["好看","大片","动作片","青春","喜剧"],detail:{},guess_arr:[],fromUser:"",bannerdata:[]}),methods:{pop_ok(){i({url:"/pages/movie/kefu/kefu"})},async getList(t){this.list=[];const a=await this.$myRuquest({method:"Post",url:"/api/front/movie/getList",data:{page:1,pagesize:6,tag:"",current_id:t}});200==a.code&&(this.guess_arr=a.data.list)},async add_view(t){200==(await this.$myRuquest({method:"Post",url:"/api/front/movie/addViewCount",data:{id:t}})).code&&this.count_number("isview")},async count_number(t){let a=JSON.parse(JSON.stringify(k.userInfo));(await this.$myRuquest({url:"/api/front/index/changeImUserData",method:"POST",data:{user_id:a.user_id,column:t}})).code},jump(t){1==t?i({url:"/pages/index/index"}):2==t?i({url:"/pages/recharge/recharge"}):3==t?i({url:"/pages/kefu/kefu_index"}):4==t&&i({url:"/pages/usercenter/usercenter"})},onClose(){this.show_login=!this.show_login},noOk(){i({url:"/pages/login/login"})},to_notice(){i({url:"/pages/notice/notice"})},onNavigationBarButtonTap(t){""!==o("token")?0==t.index?i({url:"/pages/notice/notice"}):i({url:"/pages/login/login"}):this.show_login=!0},see_detail(t){0!=this.fromUser.isview||0!=this.fromUser.role?(s("movice_info",t),i({url:"/pages/movie/list/detial?id="+t.id})):this.pop_notice=!0},async get_userinfo(){let t=JSON.parse(JSON.stringify(k.userInfo));const a=await this.$myRuquest({url:"/api/front/index/getImUserInfo",method:"POST",data:{user_id:t.user_id}});if(200==a.code){this.fromUser=a.data;let t=JSON.parse(JSON.stringify(a.data));k.login(t)}}},onLoad(t){s("iffirst",!1),this.bannerdata=[],this.detail=o("shop_info"),""!==this.detail.nearby_arr&&(this.bannerdata=this.detail.nearby_arr.split(",")),this.top_title=this.detail.title},mounted(){window.scrollTo({top:0,behavior:"smooth"})},onShow(){window.scrollTo({top:0,behavior:"smooth"}),this.show_login=!1,o("token")}},[["render",function(t,a,e,i,o,s){const k=y("cu-custom"),x=b,$=v,C=w,S=d;return l(),n(S,null,{default:r((()=>[c(k,{bgColor:"bg-gradual-pink",isBack:!0},{backText:r((()=>[])),content:r((()=>[u(p(o.top_title),1)])),_:1}),c(S,{class:"page-section swiper"},{default:r((()=>[c(S,null,{default:r((()=>[c(S,{class:"page-section swiper"},{default:r((()=>[c(S,{style:{position:"relative"}},{default:r((()=>[c(C,{"indicator-dots":o.indicatorDots,"indicator-color":o.indicatorColor,"indicator-active-color":o.indicatorActiveColor,autoplay:o.autoplay,interval:o.interval,duration:o.duration,style:{"min-height":"400px"}},{default:r((()=>[(l(!0),_(g,null,f(o.bannerdata,((t,a)=>(l(),n($,{key:"a"+a},{default:r((()=>[c(x,{src:t,mode:"widthFix",style:{width:"100%"}},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["indicator-dots","indicator-color","indicator-active-color","autoplay","interval","duration"])])),_:1})])),_:1})])),_:1}),c(S,{class:"main_i"},{default:r((()=>[c(S,{class:"main_title"},{default:r((()=>[u(p(o.detail.title),1)])),_:1}),c(S,{class:"mian_price_line",style:{padding:"7px 0"}},{default:r((()=>[c(S,{class:"mark_price"},{default:r((()=>[u(p(t.$t("mine.jifen"))+"："+p(o.detail.price),1)])),_:1})])),_:1}),c(S,{class:"mian_price_line",style:{padding:"7px 0"}},{default:r((()=>[c(S,{class:"mark_price"},{default:r((()=>[u(p(t.$t("detail.bianhao"))+"：LMHSD-"+p(o.detail.id),1)])),_:1})])),_:1}),c(S,{class:"main_title",style:{"margin-top":"10px",color:"#2a1468"}},{default:r((()=>[u(p(t.$t("detail.jianjie")),1)])),_:1}),c(S,{class:"dangan",style:{"padding-bottom":"70px"}},{default:r((()=>[u(p(o.detail.remark),1)])),_:1}),c(S,{class:"buy_btn",onClick:a[0]||(a[0]=t=>o.pop_notice=!0)},{default:r((()=>[u(p(t.$t("detail.buynow")),1)])),_:1})])),_:1})])),_:1}),h(c(S,null,{default:r((()=>[c(S,{class:"com_bg"}),c(S,{class:"com_main"},{default:r((()=>[c(S,{class:"pop_mian"},{default:r((()=>[c(S,{class:"pop_title"},{default:r((()=>[u(p(t.$t("pop.title")),1)])),_:1}),c(S,{style:{padding:"10px 15px","text-align":"center","line-height":"25px"}},{default:r((()=>[u(p(t.$t("pop.content9")),1)])),_:1}),c(S,{class:"pop_foot"},{default:r((()=>[c(S,{class:"pop_ft_btn1",onClick:a[1]||(a[1]=t=>o.pop_notice=!1)},{default:r((()=>[u(p(t.$t("pop.close")),1)])),_:1}),c(S,{class:"pop_ft_btn2",onClick:a[2]||(a[2]=t=>s.pop_ok())},{default:r((()=>[u(p(t.$t("pop.ok2")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},512),[[m,o.pop_notice]])])),_:1})}],["__scopeId","data-v-38c4175d"]]);export{x as default};