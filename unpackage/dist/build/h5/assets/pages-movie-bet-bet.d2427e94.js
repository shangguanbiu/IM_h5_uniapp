import{_ as e,n as t,J as l,o as a,e as s,w as i,p as u,i as n,f as _,j as o,t as f,m as d,k as c,r,F as m,l as h,v as p,O as b,P as y}from"./index-bbbfa810.js";const g=e({data:()=>({pop_notice:!1,scroll_ft:!1,pop_bet:!1,index_ico:"@/static/image/shouye.png",index_ico_h:"",cz_ico:"",cz_ico_h:"",kf_ico:"",kf_ico_h:"",user_ico:"",user_ico_h:"",bet_num:"",max_num:0,qishu:"20231212000001",ifrun:!0,ifhistory:!1,history_list:[],Number_arr:[{name:"春",value:1,ifhad:!1},{name:"夏",value:2,ifhad:!1},{name:"秋",value:3,ifhad:!1},{name:"冬",value:4,ifhad:!1}],Number_laster:[{name:"冬",value:4,ifhad:!1}],cost_arr:[10,50,100,200,500,1e3],userinfo:{},time1:0,time2:0,time3:0,time_build:null,if_over:!1,pageHeight:0}),watch:{bet_num(e){Number(e)>this.max_num?this.bet_num=this.max_num:this.bet_num=e},time3:function(e){0==this.time1&&0==this.time2&&e<8&&(this.ifrun=!1),this.time2==this.time3&&0==e&&(this.if_over=!0,this.time1=0,this.time2=0,this.time3=0,this.ifrun=!1,clearInterval(this.time_build),this.time_build=null,setTimeout((function(){}),1e4)),(e<0||NaN==e||"NaN"==e)&&(this.time1=0,this.time2=0,this.time3=0,this.ifrun=!1,clearInterval(this.time_build),this.time_build=null,setTimeout((function(){}),1e4))}},methods:{change_num(e){},showtime(e,t){if(""!==t){var l=new Date,a=new Date(t).getTime()-l.getTime(),s=Math.floor(a/864e5),i=Math.floor(a/36e5%24),u=Math.floor(a/6e4%60),n=Math.floor(a/1e3%60);return this.time1=i,this.time2=u,this.time3=n,console.log(s+"天"+i+":"+u+":"+n),s+"天"+i+":"+u+":"+n}},jump(e){1==e?t({url:"/pages/movie/index/index"}):2==e?t({url:"/pages/movie/list/index"}):3==e?t({url:"/pages/movie/bet/bet"}):4==e?t({url:"/pages/kefu/kefu_index"}):5==e&&t({url:"/pages/mine/index"})},see_list(){t({url:"/pages/movie/bet/list"})},get_bet_num(e,t){this.Number_arr[t].ifhad?this.Number_arr[t].ifhad=!1:this.Number_arr[t].ifhad=!0;const l=this.Number_arr.find((e=>1==e.ifhad));this.pop_bet=void 0!==l,this.pageHeight<820&&1==this.pop_bet&&(this.scroll_ft=!0)},get_num(e){this.bet_num=e},reset(){this.bet_num=""},async get_userInfo(){const e=await this.$myRuquest({url:"/api/front/user/getUserInfo",method:"POST"});200==e.code&&(this.userinfo=e.data,this.max_num=this.userinfo.balance)},async submit_bet(){200==(await this.$myRuquest({url:"/api/front/user/getUserInfo",method:"POST",data:{qihao:"",id:1,momey:this.bet_num}})).code&&l({title:"投票成功！",icon:"success"})},run_fun(){this.get_userInfo(),this.time_build=setInterval((()=>{this.showtime("","2023-12-20 15:14:27")}),1e3)}},onLoad(){this.pop_notice=!1;var e=document.getElementsByClassName("uni-page-head-hd")[0];e&&(e.style.display="none")},mounted(){this.pageHeight=document.documentElement.clientHeight,console.log("ddd",this.pageHeight)}},[["render",function(e,t,l,g,x,k){const v=n,N=b,C=y;return a(),s(v,{class:u({scroll_ft:x.scroll_ft})},{default:i((()=>[_(v,{class:"bet_top"},{default:i((()=>[_(v,{style:{padding:"10px  15px"}},{default:i((()=>[_(v,{class:"bet_line bet_ge"},{default:i((()=>[_(v,null,{default:i((()=>[o("当前期数")])),_:1})])),_:1}),_(v,{style:{display:"flex"},class:"bet_ge"},{default:i((()=>[_(v,{style:{"font-weight":"bold","font-size":"16px"}},{default:i((()=>[o(f(x.qishu),1)])),_:1}),x.ifrun?(a(),s(v,{key:0},{default:i((()=>[o("投票中")])),_:1})):d("",!0),x.ifrun?d("",!0):(a(),s(v,{key:1},{default:i((()=>[o("封盘中")])),_:1}))])),_:1}),_(v,{class:"time"},{default:i((()=>[o(f(x.time2+":"+x.time3),1)])),_:1}),_(v,{class:"bet_line bet_ge"},{default:i((()=>[(a(!0),c(m,null,r(x.Number_laster,((e,t)=>(a(),s(v,{style:{display:"flex"},key:t},{default:i((()=>[_(v,{style:{"margin-right":"10px"}},{default:i((()=>[o("20231212000002")])),_:1}),e.value<4||4==e.value?(a(),s(v,{key:0,class:"color_n1"},{default:i((()=>[o("春")])),_:1})):d("",!0),e.value>5||5==e.value?(a(),s(v,{key:1,class:"color_n2"},{default:i((()=>[o("夏")])),_:1})):d("",!0),e.value%2==1?(a(),s(v,{key:2,class:"color_n1"},{default:i((()=>[o("秋")])),_:1})):d("",!0),e.value%2==0?(a(),s(v,{key:3,class:"color_n2"},{default:i((()=>[o("冬")])),_:1})):d("",!0)])),_:2},1024)))),128)),_(v,{onClick:t[0]||(t[0]=e=>x.ifhistory=!x.ifhistory),style:{display:"flex"}},{default:i((()=>[o("历史出票 "),x.ifhistory?d("",!0):(a(),s(v,{key:0,class:"cuIcon-unfold",style:{"line-height":"19px","margin-left":"2px"}})),x.ifhistory?(a(),s(v,{key:1,class:"cuIcon-fold",style:{"line-height":"19px","margin-left":"2px"}})):d("",!0)])),_:1}),h(_(v,{class:"history_are",onClick:t[1]||(t[1]=e=>x.ifhistory=!1)},{default:i((()=>[0!==x.Number_arr.length?(a(),s(v,{key:0,style:{padding:"0px 15px"}},{default:i((()=>[(a(!0),c(m,null,r(x.Number_arr,((e,t)=>(a(),s(v,{style:{display:"flex",padding:"5px 0"},key:t},{default:i((()=>[_(v,{style:{"margin-right":"10px"}},{default:i((()=>[o("20231212000002")])),_:1}),e.value<4||4==e.value?(a(),s(v,{key:0,class:"color_n1"},{default:i((()=>[o("春")])),_:1})):d("",!0),e.value>5||5==e.value?(a(),s(v,{key:1,class:"color_n2"},{default:i((()=>[o("夏")])),_:1})):d("",!0),e.value%2==1?(a(),s(v,{key:2,class:"color_n1"},{default:i((()=>[o("秋")])),_:1})):d("",!0),e.value%2==0?(a(),s(v,{key:3,class:"color_n2"},{default:i((()=>[o("冬")])),_:1})):d("",!0)])),_:2},1024)))),128))])),_:1})):d("",!0)])),_:1},512),[[p,x.ifhistory]])])),_:1})])),_:1})])),_:1}),_(v,{class:"bet_top_ft"},{default:i((()=>[_(v,{class:"bet_t_ft_m",onClick:t[2]||(t[2]=e=>x.pop_notice=!0)},{default:i((()=>[o("投票规则")])),_:1}),_(v,{class:"bet_t_ft_m",onClick:k.see_list,style:{display:"flex","justify-content":"center",color:"#e6557f"}},{default:i((()=>[o(" 我的出票 "),_(v,{class:"cuIcon-right",style:{"line-height":"40px","margin-left":"2px"}})])),_:1},8,["onClick"])])),_:1}),_(v,{class:"bet_main"},{default:i((()=>[(a(!0),c(m,null,r(x.Number_arr,((e,t)=>(a(),s(v,{class:"bet_mainzi",key:t},{default:i((()=>[_(v,{class:u(["bet_zi",{bet_zi_get:e.ifhad}]),onClick:l=>k.get_bet_num(e,t)},{default:i((()=>[o(f(e.name),1)])),_:2},1032,["class","onClick"])])),_:2},1024)))),128))])),_:1}),h(_(v,{class:"bet_foot"},{default:i((()=>[_(v,{class:"bet_f_m"},{default:i((()=>[_(v,{class:"bet_f_mtit"},{default:i((()=>[_(v,null,{default:i((()=>[o("快捷投票")])),_:1}),_(v,{class:"had_num"},{default:i((()=>[o("可用积分:"+f(x.max_num),1)])),_:1})])),_:1}),_(v,{class:"bet_num_line"},{default:i((()=>[(a(!0),c(m,null,r(x.cost_arr,((e,t)=>(a(),s(v,{class:"bet_num",key:t,onClick:t=>k.get_num(e)},{default:i((()=>[o(f(e),1)])),_:2},1032,["onClick"])))),128))])),_:1}),_(v,{class:"bet_num_line",style:{padding:"15px 0"}},{default:i((()=>[_(v,{style:{"line-height":"30px"}},{default:i((()=>[o("投票积分:")])),_:1}),_(v,null,{default:i((()=>[_(N,{class:"uni-input inmut_l",modelValue:x.bet_num,"onUpdate:modelValue":t[3]||(t[3]=e=>x.bet_num=e),onInput:t[4]||(t[4]=e=>k.change_num(x.bet_num)),type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),_(v,null,{default:i((()=>[_(C,{type:"default",class:"reset_btn",onClick:k.reset},{default:i((()=>[o("重置")])),_:1},8,["onClick"])])),_:1})])),_:1}),x.ifrun?(a(),s(C,{key:0,type:"default",class:"ok_btn",onClick:t[5]||(t[5]=()=>{})},{default:i((()=>[o("投票")])),_:1})):d("",!0),x.ifrun?d("",!0):(a(),s(C,{key:1,type:"default",class:"ok_btn2"},{default:i((()=>[o("封盘中")])),_:1}))])),_:1})])),_:1},512),[[p,x.pop_bet]]),h(_(v,null,{default:i((()=>[_(v,{class:"com_bg"}),_(v,{class:"com_main"},{default:i((()=>[_(v,{class:"pop_mian"},{default:i((()=>[_(v,{class:"pop_title"},{default:i((()=>[o("投票规则")])),_:1}),_(v,{style:{padding:"10px 15px",display:"flex","justify-content":"flex-start","line-height":"25px","flex-wrap":"wrap"}},{default:i((()=>[o(" 游戏投票规则 ")])),_:1}),_(v,{class:"pop_foot"},{default:i((()=>[_(v,{class:"pop_ft_btn2",onClick:t[6]||(t[6]=e=>x.pop_notice=!1)},{default:i((()=>[o("确定")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},512),[[p,x.pop_notice]])])),_:1},8,["class"])}],["__scopeId","data-v-ce07498a"]]);export{g as default};