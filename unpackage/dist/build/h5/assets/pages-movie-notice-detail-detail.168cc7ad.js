import{_ as t,o as a,e,w as n,i as o,f as s,j as c,t as d,l as i,v as r,q as l,A as m}from"./index-7ddb419c.js";import{_ as p}from"./mp-html.943e6e93.js";import{r as u}from"./uni-app.es.9f78534b.js";const g=t({data:()=>({data_content:{},dd:"<p>dadasdsadas</p>"}),components:{},methods:{unescape:function(t){return t.replace(t?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'")},async get_detail(t){const a=await this.$myRuquest({url:"/api/front/notice/getInfo",method:"POST",data:{id:t}});200==a.code&&(this.data_content=a.data,this.data_content.content=this.unescape(this.data_content.content))},emojiToHtml(t){if(!t)return;let a=this.emojiMap;return t.replace(/\[!(\w+)\]/gi,(function(t,e){var n=e;return a[n]?'<img class=\'mr-5\' style="width:18px;height:18px" emoji-name="'.concat(e,'" src="').concat(a[n],'" />'):"[!".concat(e,"]")}))}},onLoad(t){this.get_detail(t.id)},onShow(){}},[["render",function(t,g,_,f,h,j){const w=l("cu-custom"),x=o,b=u(m("mp-html"),p);return a(),e(x,{style:{"background-color":"#190D30"}},{default:n((()=>[s(w,{bgColor:"bg-gradual-pink",isBack:!0},{backText:n((()=>[])),content:n((()=>[c("系统通知")])),_:1}),s(x,{class:"mainare"},{default:n((()=>[s(x,{class:"msgheadare"},{default:n((()=>[s(x,{class:"titel"},{default:n((()=>[c(d(h.data_content.title),1)])),_:1})])),_:1}),i(s(x,{class:"msg"},{default:n((()=>[s(b,{content:h.data_content.content},null,8,["content"])])),_:1},512),[[r,void 0!==h.data_content.content]])])),_:1})])),_:1})}],["__scopeId","data-v-e156aded"]]);export{g as default};