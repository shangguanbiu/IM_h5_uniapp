import{_ as t,a as e,s as i,J as l,o as s,e as a,w as d,i as _,f as p,j as f,m as u,k as n,r,F as c,l as o,v as y,t as h,q as x,y as g,p as v}from"./index-bb9aa3b8.js";const m=""+new URL("vip_top-50b43346.png",import.meta.url).href,w=""+new URL("vip-26c9feb8.jpg",import.meta.url).href,z=""+new URL("right-eee705b9.png",import.meta.url).href,b=e(i);const k=t({data:()=>({type_l1:0,userinfo:{},list:[],balance:0}),methods:{change_tab(t){this.type_l1=t},getList(){this.$api.third_openApi.get_level_list(this.params).then((t=>{0==t.code&&(this.list=t.data.data)}))},async get_userinfo_im(){let t=JSON.parse(JSON.stringify(b.userInfo));const e=await this.$myRuquest({url:"/api/front/index/getImUserInfo",method:"POST",data:{user_id:t.user_id}});if(200==e.code){this.userinfo=e.data;let t=JSON.parse(JSON.stringify(e.data));b.login(t)}},async get_userInfo(){const t=await this.$myRuquest({url:"/api/front/user/getUserInfo",method:"POST"});200==t.code&&(this.balance=t.data.balance)},async to_vip(){if(0==this.balance||this.balance<this.list[this.type_l1].price)return void l({title:"积分不足！",icon:"none"});if(this.userinfo.islevel==this.list[this.type_l1].id)return void l({title:"您已经是该等级了",icon:"none"});if(this.userinfo.islevel>this.list[this.type_l1].id)return void l({title:"当前等级不能降级！",icon:"none"});if(200==(await this.$myRuquest({url:"/api/front/index/changeImUserData",method:"POST",data:{user_id:this.userinfo.user_id,islevel:this.list[this.type_l1].id}})).code){l({title:"开通成功",icon:"none"}),this.userinfo.islevel=this.list[this.type_l1].id;let t=JSON.parse(JSON.stringify(this.userinfo));b.login(t)}}},onShow(){this.getList(),this.get_userInfo(),this.get_userinfo_im()}},[["render",function(t,e,i,l,b,k){const F=x("cu-custom"),I=g,T=_;return s(),a(T,null,{default:d((()=>[p(F,{bgColor:"bg-gradual-pink",isBack:!0},{backText:d((()=>[])),content:d((()=>[f("我的特权")])),_:1}),p(T,{style:{padding:"10px","max-height":"200px",position:"relative"}},{default:d((()=>[p(I,{src:m,mode:"widthFix",style:{width:"100%","max-height":"200px"}}),0==b.userinfo.islevel?(s(),a(T,{key:0,class:"item_btn",onClick:k.to_vip,style:{position:"absolute",right:"32px",top:"70px"}},{default:d((()=>[f("立即开通")])),_:1},8,["onClick"])):(s(),a(T,{key:1,class:"item_btn",onClick:k.to_vip,style:{position:"absolute",right:"32px",top:"70px"}},{default:d((()=>[f("立即升级")])),_:1},8,["onClick"])),p(T,{class:"vip_are_p"},{default:d((()=>[p(I,{src:b.userinfo.avatar,mode:"widthFix",style:{height:"30px",width:"30px","border-radius":"50%","margin-right":"5px"}},null,8,["src"]),0==b.userinfo.islevel?(s(),a(T,{key:0},{default:d((()=>[f("暂未激活会员")])),_:1})):u("",!0),21==b.userinfo.islevel?(s(),a(T,{key:1},{default:d((()=>[f("月卡VIP")])),_:1})):u("",!0),22==b.userinfo.islevel?(s(),a(T,{key:2},{default:d((()=>[f("季度卡VIP")])),_:1})):u("",!0),23==b.userinfo.islevel?(s(),a(T,{key:3},{default:d((()=>[f("年卡VIP")])),_:1})):u("",!0)])),_:1})])),_:1}),p(T,{class:"tab_line"},{default:d((()=>[(s(!0),n(c,null,r(b.list,((t,e)=>(s(),a(T,{class:v(["tab_l_zi_are",{tab_l_zi_hover:b.type_l1==e}]),key:e,onClick:t=>k.change_tab(e)},{default:d((()=>[p(T,{class:"tab_l_zi"},{default:d((()=>[p(T,{class:"tab_l_top"},{default:d((()=>[f(h(t.price)+"元",1)])),_:2},1024),p(T,{class:"tab_l_day"},{default:d((()=>[f(h(t.name),1)])),_:2},1024),p(T,{style:{"text-align":"center"}}),0==t.istype?(s(),a(T,{key:0,class:"tab_l_ft"},{default:d((()=>[f(" ￥"+h(t.price)+"/月 ",1)])),_:2},1024)):u("",!0),1==t.istype?(s(),a(T,{key:1,class:"tab_l_ft"},{default:d((()=>[f(" ￥"+h(t.price)+"/季度 ",1)])),_:2},1024)):u("",!0),2==t.istype?(s(),a(T,{key:2,class:"tab_l_ft"},{default:d((()=>[f(" ￥"+h(t.price)+"/年 ",1)])),_:2},1024)):u("",!0)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1}),o(p(T,{class:"vip_ft"},{default:d((()=>[p(T,{class:"vip_tit"},{default:d((()=>[f(" VIP特权 ")])),_:1}),p(T,{style:{display:"flex",padding:"10px 0"}},{default:d((()=>[p(T,null,{default:d((()=>[p(I,{src:w,mode:"widthFix",style:{width:"50px"}})])),_:1}),p(T,{style:{"margin-left":"10px"}},{default:d((()=>[p(T,{class:"vip_tit_zit"},{default:d((()=>[f(" 查看我喜欢了谁 ")])),_:1}),p(T,{class:"vip_tit_zi"},{default:d((()=>[f(" 我喜欢了TA！查看我念念不忘的TA ")])),_:1})])),_:1})])),_:1}),p(T,{style:{display:"flex",padding:"10px 0"}},{default:d((()=>[p(T,null,{default:d((()=>[p(I,{src:w,mode:"widthFix",style:{width:"50px"}})])),_:1}),p(T,{style:{"margin-left":"10px"}},{default:d((()=>[p(T,{class:"vip_tit_zit"},{default:d((()=>[f(" 查看谁喜欢我 ")])),_:1}),p(T,{class:"vip_tit_zi"},{default:d((()=>[f(" TA喜欢了我？查看前5名对我心动的TA ")])),_:1})])),_:1})])),_:1}),p(T,{style:{display:"flex",padding:"10px 0"}},{default:d((()=>[p(T,null,{default:d((()=>[p(I,{src:z,mode:"widthFix",style:{width:"50px"}})])),_:1}),p(T,{style:{"margin-left":"10px"}},{default:d((()=>[p(T,{class:"vip_tit_zit"},{default:d((()=>[f(h(0!==b.list.length?b.list[b.type_l1].iszan:0)+"次右滑 ",1)])),_:1}),p(T,{class:"vip_tit_zi"},{default:d((()=>[f(" 突破每天右滑上限，不错过每个机会 ")])),_:1})])),_:1})])),_:1}),p(T,{style:{display:"flex",padding:"10px 0"}},{default:d((()=>[p(T,null,{default:d((()=>[p(I,{src:w,mode:"widthFix",style:{width:"50px"}})])),_:1}),p(T,{style:{"margin-left":"10px"}},{default:d((()=>[p(T,{class:"vip_tit_zit"},{default:d((()=>[f(" 视频每天"+h(0!==b.list.length?b.list[b.type_l1].isview:0)+"个 ",1)])),_:1}),p(T,{class:"vip_tit_zi"},{default:d((()=>[f(" 突破每天视频观看上线，不错热门视频吃瓜 ")])),_:1})])),_:1})])),_:1}),p(T,{style:{display:"flex",padding:"10px 0"}},{default:d((()=>[p(T,null,{default:d((()=>[p(I,{src:w,mode:"widthFix",style:{width:"50px"}})])),_:1}),p(T,{style:{"margin-left":"10px"}},{default:d((()=>[p(T,{class:"vip_tit_zit"},{default:d((()=>[f(" 会员身份标识 ")])),_:1}),p(T,{class:"vip_tit_zi"},{default:d((()=>[f(" 获得红字昵称 ")])),_:1})])),_:1})])),_:1})])),_:1},512),[[y,0==b.type_l1]]),o(p(T,{class:"vip_ft"},{default:d((()=>[p(T,{class:"vip_tit"},{default:d((()=>[f(" VIP特权 ")])),_:1}),p(T,{style:{display:"flex",padding:"10px 0"}},{default:d((()=>[p(T,null,{default:d((()=>[p(I,{src:w,mode:"widthFix",style:{width:"50px"}})])),_:1}),p(T,{style:{"margin-left":"10px"}},{default:d((()=>[p(T,{class:"vip_tit_zit"},{default:d((()=>[f(" 查看谁喜欢我 ")])),_:1}),p(T,{class:"vip_tit_zi"},{default:d((()=>[f(" TA喜欢了我？不错过对我满意的TA ")])),_:1})])),_:1})])),_:1}),p(T,{style:{display:"flex",padding:"10px 0"}},{default:d((()=>[p(T,null,{default:d((()=>[p(I,{src:z,mode:"widthFix",style:{width:"50px"}})])),_:1}),p(T,{style:{"margin-left":"10px"}},{default:d((()=>[p(T,{class:"vip_tit_zit"},{default:d((()=>[f(h(0!==b.list.length?b.list[b.type_l1].iszan:0)+"次右滑 ",1)])),_:1}),p(T,{class:"vip_tit_zi"},{default:d((()=>[f(" 突破每天右滑上限，不错过每个机会 ")])),_:1})])),_:1})])),_:1}),p(T,{style:{display:"flex",padding:"10px 0"}},{default:d((()=>[p(T,null,{default:d((()=>[p(I,{src:w,mode:"widthFix",style:{width:"50px"}})])),_:1}),p(T,{style:{"margin-left":"10px"}},{default:d((()=>[p(T,{class:"vip_tit_zit"},{default:d((()=>[f(" 视频每天"+h(0!==b.list.length?b.list[b.type_l1].isview:0)+"个 ",1)])),_:1}),p(T,{class:"vip_tit_zi"},{default:d((()=>[f(" 突破每天视频观看上线，不错热门视频吃瓜 ")])),_:1})])),_:1})])),_:1}),p(T,{style:{display:"flex",padding:"10px 0"}},{default:d((()=>[p(T,null,{default:d((()=>[p(I,{src:w,mode:"widthFix",style:{width:"50px"}})])),_:1}),p(T,{style:{"margin-left":"10px"}},{default:d((()=>[p(T,{class:"vip_tit_zit"},{default:d((()=>[f(" 会员身份标识 ")])),_:1}),p(T,{class:"vip_tit_zi"},{default:d((()=>[f(" 获得红字昵称和VIP标识 ")])),_:1})])),_:1})])),_:1})])),_:1},512),[[y,1==b.type_l1]]),o(p(T,{class:"vip_ft"},{default:d((()=>[p(T,{class:"vip_tit"},{default:d((()=>[f(" VIP特权 ")])),_:1}),p(T,{style:{display:"flex",padding:"10px 0"}},{default:d((()=>[p(T,null,{default:d((()=>[p(I,{src:w,mode:"widthFix",style:{width:"50px"}})])),_:1}),p(T,{style:{"margin-left":"10px"}},{default:d((()=>[p(T,{class:"vip_tit_zit"},{default:d((()=>[f(" 查看谁喜欢我 ")])),_:1}),p(T,{class:"vip_tit_zi"},{default:d((()=>[f(" TA喜欢了我？看看喜欢我的TA ")])),_:1})])),_:1})])),_:1}),p(T,{style:{display:"flex",padding:"10px 0"}},{default:d((()=>[p(T,null,{default:d((()=>[p(I,{src:z,mode:"widthFix",style:{width:"50px"}})])),_:1}),0!==b.list.length?(s(),a(T,{key:0,style:{"margin-left":"10px"}},{default:d((()=>[p(T,{class:"vip_tit_zit"},{default:d((()=>[f(h(b.list[b.type_l1].iszan>999?"无限":b.list[b.type_l1].iszan)+"次右滑 ",1)])),_:1}),p(T,{class:"vip_tit_zi"},{default:d((()=>[f(" 突破每天右滑上限，不错过每个机会 ")])),_:1})])),_:1})):u("",!0)])),_:1}),0!==b.list.length?(s(),a(T,{key:0,style:{display:"flex",padding:"10px 0"}},{default:d((()=>[p(T,null,{default:d((()=>[p(I,{src:w,mode:"widthFix",style:{width:"50px"}})])),_:1}),p(T,{style:{"margin-left":"10px"}},{default:d((()=>[p(T,{class:"vip_tit_zit"},{default:d((()=>[f(" 视频"+h(b.list[b.type_l1].isview>999?"无限":b.list[b.type_l1].isview)+"次观看 ",1)])),_:1}),p(T,{class:"vip_tit_zi"},{default:d((()=>[f(" 突破每天视频观看上线，不错热门视频吃瓜 ")])),_:1})])),_:1})])),_:1})):u("",!0),p(T,{style:{display:"flex",padding:"10px 0"}},{default:d((()=>[p(T,null,{default:d((()=>[p(I,{src:w,mode:"widthFix",style:{width:"50px"}})])),_:1}),p(T,{style:{"margin-left":"10px"}},{default:d((()=>[p(T,{class:"vip_tit_zit"},{default:d((()=>[f(" 会员身份标识 ")])),_:1}),p(T,{class:"vip_tit_zi"},{default:d((()=>[f(" 获得红字昵称和VIP标识 ")])),_:1})])),_:1})])),_:1})])),_:1},512),[[y,2==b.type_l1]])])),_:1})}],["__scopeId","data-v-d616d5ee"]]);export{k as default};
