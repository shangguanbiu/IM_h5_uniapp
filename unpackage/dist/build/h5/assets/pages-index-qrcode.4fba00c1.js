import{_ as t,as as r,K as e,E as a,G as n,at as i,Z as o,o as s,e as h,w as c,f as l,a1 as u,C as g,i as f,au as d,g as w,ad as v,j as p,t as y,m,x as A,z as x,Q as C,B as b}from"./index-784797a9.js";import{r as I}from"./uni-app.es.5ef72ce7.js";var k=function(t,r){var e=t,a=R[r],n=null,i=0,o=null,s=new Array,h={},c=function(t,r){n=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var a=0;a<t;a+=1)r[e][a]=null}return r}(i=4*e+17),l(0,0),l(i-7,0),l(0,i-7),g(),u(),d(t,r),e>=7&&f(t),null==o&&(o=v(e,a,s)),w(o,r)},l=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||i<=t+e))for(var a=-1;a<=7;a+=1)r+a<=-1||i<=r+a||(n[t+e][r+a]=0<=e&&e<=6&&(0==a||6==a)||0<=a&&a<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=a&&a<=4)},u=function(){for(var t=8;t<i-8;t+=1)null==n[t][6]&&(n[t][6]=t%2==0);for(var r=8;r<i-8;r+=1)null==n[6][r]&&(n[6][r]=r%2==0)},g=function(){for(var t=q.getPatternPosition(e),r=0;r<t.length;r+=1)for(var a=0;a<t.length;a+=1){var i=t[r],o=t[a];if(null==n[i][o])for(var s=-2;s<=2;s+=1)for(var h=-2;h<=2;h+=1)n[i+s][o+h]=-2==s||2==s||-2==h||2==h||0==s&&0==h}},f=function(t){for(var r=q.getBCHTypeNumber(e),a=0;a<18;a+=1){var o=!t&&1==(r>>a&1);n[Math.floor(a/3)][a%3+i-8-3]=o}for(a=0;a<18;a+=1){o=!t&&1==(r>>a&1);n[a%3+i-8-3][Math.floor(a/3)]=o}},d=function(t,r){for(var e=a<<3|r,o=q.getBCHTypeInfo(e),s=0;s<15;s+=1){var h=!t&&1==(o>>s&1);s<6?n[s][8]=h:s<8?n[s+1][8]=h:n[i-15+s][8]=h}for(s=0;s<15;s+=1){h=!t&&1==(o>>s&1);s<8?n[8][i-s-1]=h:s<9?n[8][15-s-1+1]=h:n[8][15-s-1]=h}n[i-8][8]=!t},w=function(t,r){for(var e=-1,a=i-1,o=7,s=0,h=q.getMaskFunction(r),c=i-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var l=0;l<2;l+=1)if(null==n[a][c-l]){var u=!1;s<t.length&&(u=1==(t[s]>>>o&1)),h(a,c-l)&&(u=!u),n[a][c-l]=u,-1==(o-=1)&&(s+=1,o=7)}if((a+=e)<0||i<=a){a-=e,e=-e;break}}},v=function(t,r,e){for(var a=G.getRSBlocks(t,r),n=K(),i=0;i<e.length;i+=1){var o=e[i];n.put(o.getMode(),4),n.put(o.getLength(),q.getLengthInBits(o.getMode(),t)),o.write(n)}var s=0;for(i=0;i<a.length;i+=1)s+=a[i].dataCount;if(n.getLengthInBits()>8*s)throw new Error("code length overflow. ("+n.getLengthInBits()+">"+8*s+")");for(n.getLengthInBits()+4<=8*s&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(!1);for(;!(n.getLengthInBits()>=8*s||(n.put(236,8),n.getLengthInBits()>=8*s));)n.put(17,8);return function(t,r){for(var e=0,a=0,n=0,i=new Array(r.length),o=new Array(r.length),s=0;s<r.length;s+=1){var h=r[s].dataCount,c=r[s].totalCount-h;a=Math.max(a,h),n=Math.max(n,c),i[s]=new Array(h);for(var l=0;l<i[s].length;l+=1)i[s][l]=255&t.getBuffer()[l+e];e+=h;var u=q.getErrorCorrectPolynomial(c),g=$(i[s],u.getLength()-1).mod(u);for(o[s]=new Array(u.getLength()-1),l=0;l<o[s].length;l+=1){var f=l+g.getLength()-o[s].length;o[s][l]=f>=0?g.getAt(f):0}}var d=0;for(l=0;l<r.length;l+=1)d+=r[l].totalCount;var w=new Array(d),v=0;for(l=0;l<a;l+=1)for(s=0;s<r.length;s+=1)l<i[s].length&&(w[v]=i[s][l],v+=1);for(l=0;l<n;l+=1)for(s=0;s<r.length;s+=1)l<o[s].length&&(w[v]=o[s][l],v+=1);return w}(n,a)};return h.addData=function(t){var r=X(t);s.push(r),o=null},h.isDark=function(t,r){if(t<0||i<=t||r<0||i<=r)throw new Error(t+","+r);return n[t][r]},h.getModuleCount=function(){return i},h.make=function(){c(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){c(!0,e);var a=q.getLostPoint(h);(0==e||t>a)&&(t=a,r=e)}return r}())},h.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var a=0;a<h.getModuleCount();a+=1){e+="<tr>";for(var n=0;n<h.getModuleCount();n+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=h.isDark(a,n)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},h.createImgTag=function(t,r,e){t=t||2;var a=r=void 0===r?4*t:r,n=h.getModuleCount()*t+r;return V(e,e,(function(r,e){if(a<=r&&r<n&&a<=e&&e<n){var i=Math.floor((r-a)/t),o=Math.floor((e-a)/t);return h.isDark(o,i)?0:1}return 1}))},h};k.stringToBytes=function(t){for(var r=new Array,e=0;e<t.length;e+=1){var a=t.charCodeAt(e);r.push(255&a)}return r},k.createStringToBytes=function(t,r){var e=function(){for(var e=Z(t),a=function(){var t=e.read();if(-1==t)throw new Error;return t},n=0,i={};;){var o=e.read();if(-1==o)break;var s=a(),h=a()<<8|a();i[String.fromCharCode(o<<8|s)]=h,n+=1}if(n!=r)throw new Error(n+" != "+r);return i}(),a="?".charCodeAt(0);return function(t){for(var r=new Array,n=0;n<t.length;n+=1){var i=t.charCodeAt(n);if(i<128)r.push(i);else{var o=e[t.charAt(n)];"number"==typeof o?(255&o)==o?r.push(o):(r.push(o>>>8),r.push(255&o)):r.push(a)}}return r}};var B,D,P,L,O,S=1,M=2,T=4,E=8,R={L:1,M:0,Q:3,H:2},_=0,z=1,H=2,F=3,N=4,U=5,W=6,Q=7,q=(B=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],D=1335,P=7973,O=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r},(L={}).getBCHTypeInfo=function(t){for(var r=t<<10;O(r)-O(D)>=0;)r^=D<<O(r)-O(D);return 21522^(t<<10|r)},L.getBCHTypeNumber=function(t){for(var r=t<<12;O(r)-O(P)>=0;)r^=P<<O(r)-O(P);return t<<12|r},L.getPatternPosition=function(t){return B[t-1]},L.getMaskFunction=function(t){switch(t){case _:return function(t,r){return(t+r)%2==0};case z:return function(t,r){return t%2==0};case H:return function(t,r){return r%3==0};case F:return function(t,r){return(t+r)%3==0};case N:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case U:return function(t,r){return t*r%2+t*r%3==0};case W:return function(t,r){return(t*r%2+t*r%3)%2==0};case Q:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw new Error("bad maskPattern:"+t)}},L.getErrorCorrectPolynomial=function(t){for(var r=$([1],0),e=0;e<t;e+=1)r=r.multiply($([1,j.gexp(e)],0));return r},L.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case S:return 10;case M:return 9;case T:case E:return 8;default:throw new Error("mode:"+t)}else if(r<27)switch(t){case S:return 12;case M:return 11;case T:return 16;case E:return 10;default:throw new Error("mode:"+t)}else{if(!(r<41))throw new Error("type:"+r);switch(t){case S:return 14;case M:return 13;case T:return 16;case E:return 12;default:throw new Error("mode:"+t)}}},L.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,a=0;a<r;a+=1)for(var n=0;n<r;n+=1){for(var i=0,o=t.isDark(a,n),s=-1;s<=1;s+=1)if(!(a+s<0||r<=a+s))for(var h=-1;h<=1;h+=1)n+h<0||r<=n+h||0==s&&0==h||o==t.isDark(a+s,n+h)&&(i+=1);i>5&&(e+=3+i-5)}for(a=0;a<r-1;a+=1)for(n=0;n<r-1;n+=1){var c=0;t.isDark(a,n)&&(c+=1),t.isDark(a+1,n)&&(c+=1),t.isDark(a,n+1)&&(c+=1),t.isDark(a+1,n+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(a=0;a<r;a+=1)for(n=0;n<r-6;n+=1)t.isDark(a,n)&&!t.isDark(a,n+1)&&t.isDark(a,n+2)&&t.isDark(a,n+3)&&t.isDark(a,n+4)&&!t.isDark(a,n+5)&&t.isDark(a,n+6)&&(e+=40);for(n=0;n<r;n+=1)for(a=0;a<r-6;a+=1)t.isDark(a,n)&&!t.isDark(a+1,n)&&t.isDark(a+2,n)&&t.isDark(a+3,n)&&t.isDark(a+4,n)&&!t.isDark(a+5,n)&&t.isDark(a+6,n)&&(e+=40);var l=0;for(n=0;n<r;n+=1)for(a=0;a<r;a+=1)t.isDark(a,n)&&(l+=1);return e+=Math.abs(100*l/r/r-50)/5*10},L),j=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)r[t[e]]=e;var a={glog:function(t){if(t<1)throw new Error("glog("+t+")");return r[t]},gexp:function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]}};return a}();function $(t,r){if(void 0===t.length)throw new Error(t.length+"/"+r);var e=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var a=new Array(t.length-e+r),n=0;n<t.length-e;n+=1)a[n]=t[n+e];return a}(),a={getAt:function(t){return e[t]},getLength:function(){return e.length},multiply:function(t){for(var r=new Array(a.getLength()+t.getLength()-1),e=0;e<a.getLength();e+=1)for(var n=0;n<t.getLength();n+=1)r[e+n]^=j.gexp(j.glog(a.getAt(e))+j.glog(t.getAt(n)));return $(r,0)},mod:function(t){if(a.getLength()-t.getLength()<0)return a;for(var r=j.glog(a.getAt(0))-j.glog(t.getAt(0)),e=new Array(a.getLength()),n=0;n<a.getLength();n+=1)e[n]=a.getAt(n);for(n=0;n<t.getLength();n+=1)e[n]^=j.gexp(j.glog(t.getAt(n))+r);return $(e,0).mod(t)}};return a}var G=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},e={};return e.getRSBlocks=function(e,a){var n=function(r,e){switch(e){case R.L:return t[4*(r-1)+0];case R.M:return t[4*(r-1)+1];case R.Q:return t[4*(r-1)+2];case R.H:return t[4*(r-1)+3];default:return}}(e,a);if(void 0===n)throw new Error("bad rs block [url=home.php?mod=space&uid=5302]@[/url] typeNumber:"+e+"/errorCorrectLevel:"+a);for(var i=n.length/3,o=new Array,s=0;s<i;s+=1)for(var h=n[3*s+0],c=n[3*s+1],l=n[3*s+2],u=0;u<h;u+=1)o.push(r(c,l));return o},e}(),K=function(){var t=new Array,r=0,e={getBuffer:function(){return t},getAt:function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},put:function(t,r){for(var a=0;a<r;a+=1)e.putBit(1==(t>>>r-a-1&1))},getLengthInBits:function(){return r},putBit:function(e){var a=Math.floor(r/8);t.length<=a&&t.push(0),e&&(t[a]|=128>>>r%8),r+=1}};return e},X=function(t){for(var r=T,e=t,a=[],n={},i=0,o=e.length;i<o;i++){var s=[],h=e.charCodeAt(i);h>65536?(s[0]=240|(1835008&h)>>>18,s[1]=128|(258048&h)>>>12,s[2]=128|(4032&h)>>>6,s[3]=128|63&h):h>2048?(s[0]=224|(61440&h)>>>12,s[1]=128|(4032&h)>>>6,s[2]=128|63&h):h>128?(s[0]=192|(1984&h)>>>6,s[1]=128|63&h):s[0]=h,a.push(s)}(a=Array.prototype.concat.apply([],a)).length!=e.length&&(a.unshift(191),a.unshift(187),a.unshift(239));var c=a;return n.getMode=function(){return r},n.getLength=function(t){return c.length},n.write=function(t){for(var r=0;r<c.length;r+=1)t.put(c[r],8)},n},Y=function(){var t=new Array,r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,a){e=e||0,a=a||t.length;for(var n=0;n<a;n+=1)r.writeByte(t[n+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+="]"}};return r},Z=function(t){var r=t,e=0,a=0,n=0,i={read:function(){for(;n<8;){if(e>=r.length){if(0==n)return-1;throw new Error("unexpected end of file./"+n)}var t=r.charAt(e);if(e+=1,"="==t)return n=0,-1;t.match(/^\s$/)||(a=a<<6|o(t.charCodeAt(0)),n+=6)}var i=a>>>n-8&255;return n-=8,i}},o=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw new Error("c:"+t)};return i},J=function(t,r){var e=t,a=r,n=new Array(t*r),i={setPixel:function(t,r,a){n[r*e+t]=a},write:function(t){t.writeString("GIF87a"),t.writeShort(e),t.writeShort(a),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(e),t.writeShort(a),t.writeByte(0);var r=o(2);t.writeByte(2);for(var n=0;r.length-n>255;)t.writeByte(255),t.writeBytes(r,n,255),n+=255;t.writeByte(r.length-n),t.writeBytes(r,n,r.length-n),t.writeByte(0),t.writeString(";")}},o=function(t){for(var r=1<<t,e=1+(1<<t),a=t+1,i=s(),o=0;o<r;o+=1)i.add(String.fromCharCode(o));i.add(String.fromCharCode(r)),i.add(String.fromCharCode(e));var h,c,l,u=Y(),g=(h=u,c=0,l=0,{write:function(t,r){if(t>>>r!=0)throw new Error("length over");for(;c+r>=8;)h.writeByte(255&(t<<c|l)),r-=8-c,t>>>=8-c,l=0,c=0;l|=t<<c,c+=r},flush:function(){c>0&&h.writeByte(l)}});g.write(r,a);var f=0,d=String.fromCharCode(n[f]);for(f+=1;f<n.length;){var w=String.fromCharCode(n[f]);f+=1,i.contains(d+w)?d+=w:(g.write(i.indexOf(d),a),i.size()<4095&&(i.size()==1<<a&&(a+=1),i.add(d+w)),d=w)}return g.write(i.indexOf(d),a),g.write(e,a),g.flush(),u.toByteArray()},s=function(){var t={},r=0,e={add:function(a){if(e.contains(a))throw new Error("dup key:"+a);t[a]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return void 0!==t[r]}};return e};return i},V=function(t,r,e,a){for(var n=J(t,r),i=0;i<r;i+=1)for(var o=0;o<t;o+=1)n.setPixel(o,i,e(o,i));var s=Y();n.write(s);for(var h=function(){var t=0,r=0,e=0,a="",n={},i=function(t){a+=String.fromCharCode(o(63&t))},o=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw new Error("n:"+t)};return n.writeByte=function(a){for(t=t<<8|255&a,r+=8,e+=1;r>=6;)i(t>>>r-6),r-=6},n.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var n=3-e%3,o=0;o<n;o+=1)a+="="},n.toString=function(){return a},n}(),c=s.toByteArray(),l=0;l<c.length;l+=1)h.writeByte(c[l]);h.flush();var u="";return u+="data:image/gif;base64,",u+=h};const tt=function(t,r){var e,a=(r=r||{}).typeNumber||4,n=r.errorCorrectLevel||"M",i=r.size||500;try{(e=k(a,n||"M")).addData(t),e.make()}catch(h){if(a>=40)throw new Error("Text too long to encode");return gen(t,{size:i,errorCorrectLevel:n,typeNumber:a+1})}var o=parseInt(i/e.getModuleCount()),s=parseInt((i-e.getModuleCount()*o)/2);return e.createImgTag(o,s,i)};const rt=t({name:"mosowe-canvas-image",components:{},props:{imgType:{type:String,default:"jpg",validator:()=>["jpg","png"]},compress:{type:Boolean,default:!1},compressSize:{type:[Number,String],default:2097152},showPreview:{type:Boolean,default:!1},height:{type:[String,Number],default:200},width:{type:[String,Number],default:200},lists:{type:Array,default:()=>[]}},data:()=>({canvas:null,listsIndex:0,listsLength:0,canvasArc:null,canvasArcWidth:100,canvasArcHeight:100,compressQuality:20,compressQualityH5:5}),watch:{},beforeCreate(){},created(){this.canvas=r("canvas",this),this.canvasArc=r("canvas-arc",this)},beforeMount(){},mounted(){},beforeUpdate(){},updated(){},beforeDestroy(){},destroyed(){},methods:{createCanvas(){this.clearCanvas(),0!==this.lists.length?(this.listsIndex=0,this.listsLength=this.lists.length-1,a({title:"正在生成图片...",mask:!0}),setTimeout((()=>{n()}),1e4),this.dataDrawCanvas()):e({title:"lists不能为空",icon:"none"})},dataDrawCanvas(){let t=this.lists[this.listsIndex];"image"===t.type?t.content.indexOf("https://")>-1?this.downloadImageH5(t):this.compress&&t.hasOwnProperty("file")&&t.file.size>this.compressSize?this.compressImage(t):t.arc?this.drawImageArc(t):this.drawImage(t):"text"===t.type?this.drawText(t):"rect"===t.type?this.drawRect(t):"arc"===t.type?this.drawArc(t):"qr"===t.type&&this.drawQR(t)},downloadImageH5(t){let r=null;r=new Image,r.setAttribute("crossOrigin","anonymous"),r.crossOrigin="Anonymous",r.src=t.content,r.onload=()=>{let e=document.createElement("canvas");e.width=t.width,e.height=t.height,e.getContext("2d").drawImage(r,0,0,t.width,t.height);let a=e.toDataURL("image/png");t.arc?(t.content=a,this.drawImageArc(t)):(this.canvas.globalAlpha=t.hasOwnProperty("globalAlpha")?t.globalAlpha:1,this.canvas.drawImage(a,t.x,t.y,t.hasOwnProperty("width")?t.width:this.width,t.hasOwnProperty("height")?t.height:this.height),this.checkDrawOver())}},compressImage(t){a({title:"压缩中...",mask:!0});let r=new Image;r.setAttribute("crossOrigin","anonymous"),r.crossOrigin="Anonymous",r.src=t.content,r.onload=()=>{let e=document.createElement("canvas");e.width=t.width,e.height=t.height,e.getContext("2d").drawImage(r,0,0,t.width,t.height);let a=e.toDataURL("image/png");t.content=a,t.arc?this.drawImageArc(t):this.drawImage(t)}},drawImageArc(t){this.canvasArc.clearRect(0,0,this.canvasArcWidth,this.canvasArcHeight),this.canvasArcWidth=2*t.arcR,this.canvasArcHeight=2*t.arcR,this.canvasArc.save();let r=setTimeout((()=>{clearTimeout(r),this.canvasArc.arc(t.arcR,t.arcR,t.arcR,0,2*Math.PI),this.canvasArc.clip(),this.canvasArc.drawImage(t.content,t.arcX,t.arcY,t.width,t.height),this.canvasArc.draw(!1,setTimeout((()=>{let r=setTimeout((()=>{clearTimeout(r),i({x:0,y:0,width:2*t.arcR,height:2*t.arcR,fileType:"png",canvasId:"canvas-arc",success:r=>{t.width=2*t.arcR,t.height=2*t.arcR,t.content=r.tempFilePath,this.drawImage(t)},fail:t=>{console.log(t)},complete:()=>{this.canvasArc.restore(),this.canvasArc.fillRect(0,0,0,0),this.canvasArc.clearRect(0,0,this.canvasArcWidth,this.canvasArcHeight)}},this)}),100)})))}),100)},drawImage(t){this.canvas.globalAlpha=t.hasOwnProperty("globalAlpha")?t.globalAlpha:1,this.canvas.drawImage(t.content,t.x,t.y,t.hasOwnProperty("width")?t.width:this.width,t.hasOwnProperty("height")?t.height:this.height),this.checkDrawOver()},drawText(t){this.canvas.setFillStyle(t.hasOwnProperty("color")?t.color:"#000000"),this.canvas.setFontSize(t.hasOwnProperty("size")?t.size:20),this.canvas.setTextAlign(t.hasOwnProperty("align")?t.align:"left"),this.canvas.globalAlpha=t.hasOwnProperty("globalAlpha")?t.globalAlpha:1,t.maxWidth?this.canvas.fillText(t.content,t.x,t.y,t.maxWidth):this.canvas.fillText(t.content,t.x,t.y),this.checkDrawOver()},drawRect(t){this.canvas.setFillStyle(t.hasOwnProperty("color")?t.color:"#000000"),this.canvas.globalAlpha=t.hasOwnProperty("globalAlpha")?t.globalAlpha:1,this.canvas.fillRect(t.x,t.y,t.width,t.height),this.checkDrawOver()},drawArc(t){this.canvas.arc(t.arcX,t.arcY,t.arcR,0,2*Math.PI),this.canvas.setFillStyle(t.hasOwnProperty("color")?t.color:"#000000"),this.canvas.globalAlpha=t.hasOwnProperty("globalAlpha")?t.globalAlpha:1,this.canvas.fill(),this.canvas.closePath(),this.checkDrawOver()},drawQR(t){let r=t.content.length,e=Math.ceil(r/16);e<4&&(e=4),t.qr=tt(t.content,{size:parseInt(300),typeNumber:e}),this.canvas.globalAlpha=t.hasOwnProperty("globalAlpha")?t.globalAlpha:1,this.canvas.drawImage(t.qr,t.x,t.y,t.hasOwnProperty("width")?t.width:this.width,t.hasOwnProperty("height")?t.height:this.height),this.checkDrawOver()},checkDrawOver(){this.listsIndex<this.listsLength?(this.listsIndex++,this.dataDrawCanvas()):this.canvasImage()},canvasImage(){this.listsIndex=0,this.canvas.draw(!1,(()=>{setTimeout((()=>{i({x:0,y:0,width:Number(this.width),height:Number(this.height),fileType:this.imgType,canvasId:"canvas",success:t=>{this.$emit("canvasImage",t.tempFilePath),this.showPreview&&this.showPreviewFn(t.tempFilePath)},fail:t=>{console.log(t)},complete:()=>{n()}},this)}),500)}))},showPreviewFn(t){o({current:0,urls:[t]})},clearCanvas(){this.canvas.clearRect(0,0,this.width,this.height)}}},[["render",function(t,r,e,a,n,i){const o=f,w=d;return s(),h(o,{class:"mosowe-canvas-image"},{default:c((()=>[l(o,{class:"slot-view",onClick:i.createCanvas},{default:c((()=>[u(t.$slots,"default",{},void 0,!0)])),_:3},8,["onClick"]),l(o,{class:"canvas-wrap-box"},{default:c((()=>[l(w,{class:"canvas-wrap","canvas-id":"canvas",style:g("width: "+e.width+"px; height: "+e.height+"px;")},null,8,["style"]),l(w,{class:"canvas-wrap","canvas-id":"canvas-arc",style:g("width: "+n.canvasArcWidth+"px; height: "+n.canvasArcHeight+"px;")},null,8,["style"])])),_:1})])),_:3})}],["__scopeId","data-v-e59ccf0d"]]);w("userInfo");const et=t({data:()=>({canvasUrl:"",group_id:0,lists:[],width:500,height:700,title:"我的二维码",contact:{}}),components:{mosoweCanvasImage:rt},onLoad(t){this.group_id=t.group_id?t.group_id:"",this.group_id?(this.title="群二维码",this.getGroupInfo()):this.createUserQr()},methods:{createUserQr(){let t=w("userInfo"),r=t.qrUrl??"";if(!r)return e({title:"请重新登陆后再生成二维码",icon:"none"}),void v();this.lists=[{type:"rect",color:"#ffffff",width:this.width,height:this.height,x:0,y:0},{type:"image",content:t.avatar,width:100,height:100,x:70,y:60},{type:"text",content:t.displayName,x:190,y:96,maxWidth:400,color:"#000",size:28},{type:"text",content:t.account,x:190,y:135,maxWidth:400,color:"#999",size:20},{type:"qr",content:r,width:360,height:360,x:70,y:200},{type:"text",content:"扫一扫上面的二维码图案，加我为好友",x:105,y:620,color:"#999",maxWidth:400,size:18}],setTimeout((()=>{this.$refs.mosoweCanvasComponents.createCanvas()}),100)},getGroupInfo(){this.userList=[],this.$api.msgApi.groupInfo({group_id:this.group_id}).then((t=>{let r=t.data;this.contact=r;let e=r.name;e.length>12&&(e=e.substring(0,12)+"..."),this.lists=[{type:"rect",color:"#ffffff",width:this.width,height:this.height,x:0,y:0},{type:"image",content:r.avatar,width:100,height:100,x:200,y:40},{type:"text",content:"群聊："+e,x:this.width/2,align:"center",y:180,maxWidth:400,color:"#000",size:24},{type:"qr",content:r.qrUrl,width:360,height:360,x:70,y:220},{type:"text",content:"该二维码7天内（"+r.qrExpire+"前）有效",x:105,y:640,color:"#999",maxWidth:400,size:18}],setTimeout((()=>{this.$refs.mosoweCanvasComponents.createCanvas()}),100)}))},canvasImage(t){this.canvasUrl=t},saveHeadImgFile(){const t=document.createElement("a");t.style.display="none",t.href=this.canvasUrl,t.setAttribute("download",this.contact.name+".jpg"),t.setAttribute("target","_blank"),document.body.appendChild(t),t.click(),document.body.removeChild(t)}}},[["render",function(t,r,e,a,n,i){const o=A("cu-custom"),u=x,g=f,d=C,w=I(b("mosowe-canvas-image"),rt);return s(),h(g,null,{default:c((()=>[l(o,{bgColor:"bg-gradual-pink",isBack:!0},{backText:c((()=>[])),content:c((()=>[p(y(n.title),1)])),_:1}),l(g,{class:"mt-20 im-flex im-align-items-center"},{default:c((()=>[l(u,{src:n.canvasUrl,mode:"widthFix",style:{margin:"0 auto"}},null,8,["src"])])),_:1}),n.canvasUrl?(s(),h(g,{key:0,class:"padding flex flex-direction mt-10"},{default:c((()=>[l(d,{class:"cu-btn bg-green lg",onClick:i.saveHeadImgFile},{default:c((()=>[p(" 下载图片 ")])),_:1},8,["onClick"])])),_:1})):m("",!0),l(w,{ref:"mosoweCanvasComponents",lists:n.lists,height:n.height,width:n.width,onCanvasImage:i.canvasImage},null,8,["lists","height","width","onCanvasImage"])])),_:1})}],["__scopeId","data-v-d3b847b7"]]);export{et as default};
