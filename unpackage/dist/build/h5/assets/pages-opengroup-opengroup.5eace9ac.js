import{_ as t,u as s,s as i,n as a,J as e,g as o,o as n,e as l,w as d,i as c,k as r,r as h,F as p,q as u,f as _,j as g,t as m,y as f}from"./index-45871c8e.js";const x=s(i);const y=t({data:()=>({paddingB:0,total:0,params:{page:1,limit:10,is_mine:0},list:[],join_id:"",contacts:[],host:""}),methods:{openDetails(t){a({url:"/pages/message/chat?id=group-"+t.group_id})},getList(){this.$api.third_openApi.opengroup_List(this.params).then((t=>{if(0==t.code){this.list=t.data.data,this.total=t.count;for(var s=0;s<this.list.length;s++)for(var i=0;i<this.contacts.length;i++)this.list[s].group_id==this.contacts[i].group_id&&this.$set(this.list[s],"ifin",!0)}}))},into_droup(t,s){this.$api.third_openApi.into_group({group_id:"group-"+t,inviteUid:[1]}).then((t=>{0==t.code&&(e({title:"加入成功",icon:"success"}),this.initContacts(),this.$set(this.list[s],"ifin",!0))}))},initContacts(){this.modelName="",this.$api.msgApi.initContacts().then((t=>{x.sysUnread=t.count,x.initContacts(t.data)}))}},created(){this.paddingB=this.inlineTools,this.getList(),this.contacts=o("allContacts"),this.host=this.$imgurl()}},[["render",function(t,s,i,a,e,o){const x=f,y=c,k=u("Empty");return n(),l(y,null,{default:d((()=>[0!==e.list.length?(n(),l(y,{key:0,style:{"padding-bottom":"50px"}},{default:d((()=>[(n(!0),r(p,null,h(e.list,((t,s)=>(n(),l(y,{class:"user_line",key:s},{default:d((()=>[_(y,{class:"user_l"},{default:d((()=>[_(x,{src:e.host+t.avatar,mode:"widthFix",style:{width:"100%","border-radius":"8px"}},null,8,["src"])])),_:2},1024),_(y,{class:"user_r"},{default:d((()=>[_(y,{class:"item_name"},{default:d((()=>[g(m(t.name),1)])),_:2},1024),_(y,{style:{"max-height":"90px","font-size":"13px",color:"#969696",padding:"10px 0"}},{default:d((()=>[g(m(t.desc_v),1)])),_:2},1024),t.ifin?(n(),l(y,{key:0,onClick:s=>o.openDetails(t),class:"item_btn2"},{default:d((()=>[g(" 立即进入 ")])),_:2},1032,["onClick"])):(n(),l(y,{key:1,class:"item_btn",onClick:i=>o.into_droup(t.group_id,s)},{default:d((()=>[g(" 加入群聊 ")])),_:2},1032,["onClick"]))])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(n(),l(k,{key:1,noDatatext:"暂无记录",textcolor:"#999"}))])),_:1})}],["__scopeId","data-v-a1dbac40"]]);export{y as default};
