webpackJsonp([5],{"1nuA":function(e,t,s){"use strict";t.decode=t.parse=s("kMPS"),t.encode=t.stringify=s("xaZU")},"3IRH":function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"6NpM":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("sihj"),a=s("37Up"),o=s("Ca4C"),i=s("71e1"),r=s.n(i),h=s("1QNT"),c=s("kgJZ"),l={name:"productDetail",data:function(){return{isShow:0,activeIndex:0,titleList:["产品特色","公司介绍"],msgData:{},code:"",phone:"",productName:"",fullName:"",images:{banner:"",detail:"",companyBanner:"",company:"",code:""},isShowPhone:!1,interfaceUrl:"",imgBanner:"",comBanner:"",wxShareUrl:"",agentNo:"",isAs:!1,smallImgUrl:"",showToast:!1,isApp:!1,shareQrcode:"",accessType:""}},activated:function(){var e=this;this.Athena.register("app","call","shareImage",this.compressHeaderImage,!0),window.env=localStorage.getItem("windowEnv")||null,this.agentNo=this.$route.query.agentNo,this.code=this.$route.query.code,this.phone=this.$route.query.phone,this.productName=this.$route.query.productName,this.fullName=this.$route.query.productFullName,this.description=this.$route.query.description,document.title=this.productName,this.Athena.setTitle(this.productName),this.activeIndex=0,this.isShow=0,this.isShowPhone="mobile"!==window.env,this.accessType=sessionStorage.getItem("accessType"),this._getIsAPP(),this.isAs="BA"===this.accessType,this.$http({url:"/../dcs-fpc/msp-web"},!1).then(function(t){e.wxShareUrl=t.propertySources[0].source.wxShareUrl,e.interfaceUrl=e.wxShareUrl+"/RH_MSPSERVER/wechat/productImage/",e.smallImgUrl=e.wxShareUrl+"/RH_MSPSERVER/wechat/proposal/images/",e.initData(),e.$http({url:"/pos/controller/getTime",method:"POST"},!1).then(function(t){"Y"===t.flag?e.initTopRight(t.time):(e.$toast.show(t.message),e.initTopRight(""))}).catch(function(){alert("服务器出错")})}).catch(function(){alert("服务器出错")})},methods:{initData:function(){this.imgBanner=this.interfaceUrl+this.code+"-banner.jpg",this.comBanner=this.interfaceUrl+"company-banner.jpg",this.images.detail=this.interfaceUrl+this.code+"-detail.jpg",this.images.company=this.interfaceUrl+"company-detail.jpg",this.images.code=this.interfaceUrl+this.code+"-code.png",this.images.banner=this.imgBanner,this.images.companyBanner=this.comBanner},choose:function(e){0===e?(this.isShow=0,this.images.banner=this.imgBanner,this.setShowRed(e)):1===e&&(this.images.banner=this.comBanner,this.isShow=1,this.setShowRed(e))},setShowRed:function(e){this.activeIndex!==e&&(this.activeIndex=e)},initTopRight:function(e){var t=this,s="",n="";this.isToGW()?(s=Object(o.b)(this.agentNo,this.code,!0,this.accessType,e),n=Object(o.b)(this.agentNo,this.code,!1,this.accessType,e)):(s=this.wxShareUrl+"/html/mc/index.html%23"+this.$route.path+"?code="+this.code+"%26phone="+this.phone+"%26productName="+this.productName+"%26productFullName="+this.fullName+"%26agentNo="+this.agentNo,n=this.wxShareUrl+"/html/mc/index.html#"+this.$route.path+"?code="+this.code+"%26phone="+this.phone+"%26productName="+this.productName+"%26productFullName="+this.fullName+"%26agentNo="+this.agentNo),n=c.a.decodeUrl(n),r.a.toDataURL(n).then(function(e){Object(h.a)(e,t.smallImgUrl+t.code+"/"+t.code+"_wechat_share.jpg",{width:256,height:256,iconRadius:5,iconBorderWidth:5,iconBorderColor:"#fff"}).then(function(e){t.shareQrcode=e})}),console.log(33333,s),this.Athena.showTopRight("share",{type:this.Athena.shareWechat+this.Athena.shareWechatFriends,url:s,title:this.fullName,txt:this.description,icon:"app.call.shareImage"})},isToGW:function(){return!!Object(o.c)(this.accessType)||(!!("5019"===this.code||"5022"===this.code||"5017"===this.code||"5014"===this.code||"3006"===this.code||"5016lnrab"===this.code||"5025"===this.code||"3018akzh"===this.code&&this.isPersonaAgentNo())||(!!Object(o.a)(this.accessType)||!!this.isLegalPerson()))},isLegalPerson:function(){return"G"===this.accessType},isPersonaAgentNo:function(){return"A"===this.accessType||"PT"===this.accessType||"YD"===this.accessType},clause:function(){this.Athena.showTopRight("gone"),window.location.href=this.wxShareUrl+"/RH_MSPSERVER/wechat/proposal/html/provision/"+this.code+"_provision.html"},rateTable:function(){this.Athena.showTopRight("gone"),1023===this.code?window.location.href=this.wxShareUrl+"/RH_MSPSERVER/wechat/proposal/html/synopsis/"+this.code+"_synopsis.html":window.location.href=this.wxShareUrl+"/RH_MSPSERVER/wechat/proposal/html/rate/"+this.code+"_rate.html"},compressHeaderImage:function(){var e=this,t=new Image;t.onload=function(){var s=t.width,n=t.height,a=Math.max(s,n),o=document.createElement("canvas");o.width=150,o.height=150;var i=o.getContext("2d");i.rect(0,0,a,a),i.fillStyle="#ffffff",i.fill(),i.drawImage(t,0,0,s,n,(150-s/a*150)/2,(150-n/a*150)/2,s/a*150,n/a*150);var r=o.toDataURL("image/jpeg",.9);e.Athena.sendData("shareQrCodeImage",{qrCodeImage:e.shareQrcode.split(",")[1],icon:r.split(",")[1]})},t.src=this.smallImgUrl+this.code+"/"+this.code+"_wechat_share.jpg"},isShowToast:function(){this.showToast=!this.showToast},triggerTel:function(){this.$store.commit("showTelBox",this._getEsmBaseInfo().phone)},routerTo:function(e){e.stopPropagation(),this.$router.push({path:"/weixinQRCode"})},backIndex:function(){this.$router.push({path:'/index?neededParams=%7B"type"%3A"json","params"%3A%7B"u"%3A"'+this._getEsmBaseInfo().agentNo+'"%7D%7D'})},_getEsmBaseInfo:function(){return Object(a.a)()},_getIsAPP:function(){this.isApp=Object(a.b)()}},components:{msgBox:n.a},beforeRouteLeave:function(e,t,s){this.Athena.showTopRight("gone"),s()}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"detail-wrap"},[n("div",{staticClass:"titleImg"},[n("img",{attrs:{src:e.images.banner}})]),e._v(" "),n("div",{staticClass:"tab"},e._l(e.titleList,function(t,s){return n("div",{key:s,class:{selected:e.activeIndex===s},on:{click:function(t){e.choose(s)}}},[e._v(e._s(t))])})),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0===e.isShow,expression:"isShow === 0"}],staticClass:"detailImg"},[n("img",{attrs:{src:e.images.detail}})]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:1===e.isShow,expression:"isShow === 1"}],staticClass:"detailCompanyImg"},[n("img",{attrs:{src:e.images.company}})]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isShowPhone&&e.isAs,expression:"!isShowPhone && isAs"}],staticClass:"asApp"},[n("div",{on:{click:function(t){e.clause()}}},[e._v("产品条款")]),e._v(" "),n("div",{on:{click:function(t){e.rateTable()}}},[e._v(e._s(1023===e.code?"产品说明书":"费率表"))])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowPhone&&e.isAs,expression:"isShowPhone && isAs"}],staticClass:"asShare"},[n("div",{on:{click:function(t){e.clause()}}},[e._v("产品条款")]),e._v(" "),n("div",{on:{click:function(t){e.rateTable()}}},[e._v(e._s(1023===e.code?"产品说明书":"费率表"))]),e._v(" "),n("a",{staticClass:"astel",attrs:{href:"tel:"+e.phone}},[e._v("电话咨询")]),e._v(" "),n("div",{staticClass:"line"})]),e._v(" "),e.isApp?e._e():n("div",{staticClass:"navBottom"},[n("div",{staticClass:"indexLink",on:{click:e.backIndex}},[e._m(0),e._v(" "),n("div",[e._v("首页")])]),e._v(" "),n("div",{staticClass:"avatar"},[n("img",{attrs:{src:e._getEsmBaseInfo().avatarImageSrc,alt:""}})]),e._v(" "),n("div",{staticClass:"contact",on:{click:e.isShowToast}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showToast,expression:"showToast"}],staticClass:"Toast"},[n("a",{attrs:{href:"tel:"+e._getEsmBaseInfo().phone}},[n("img",{attrs:{src:s("MeEE"),alt:""}}),e._v("电话")]),e._v(" "),n("div",{on:{click:e.routerTo}},[n("img",{attrs:{src:s("M+45"),alt:""}}),e._v("微信")])]),e._v(" "),e._m(1),e._v(" "),n("div",[e._v("联系方式")])])]),e._v(" "),n("msgBox")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"iconImg"},[t("img",{attrs:{src:s("LQtU"),alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"iconImg"},[t("img",{attrs:{src:s("Fz/X"),alt:""}})])}]};var u=s("VU/8")(l,p,!1,function(e){s("u3nt")},"data-v-5ac4bdde",null);t.default=u.exports},Ca4C:function(e,t,s){"use strict";t.c=f,t.a=d,t.b=function(e,t,s,n,i){var h="",f=s?l[t].replace("#","%23"):l[t],x=function(){var e=o.base_URL,t="/RH_MSPSERVER"===e?location.origin:e;switch(r.a.parse(t).host){case"msp.cmrh.com":return"prod";case"msp-di1.sit.cmrh.com":return"di1";case"msp-st1.uat.cmrh.com":return"st1"}return"di1"}(),N=p[x]+f,C=s?"%26":"&",j="",S="",I="newretail-"+e,A=e,_=e;"3018akzh"!==t&&"5014"!==t||(N=u[x]+f,console.log(N));switch(t){case"hhh":"prod"===x?(j="ybg329",S="hsh"):(j="ybg320",S="001"),h=c.a.stringify({goodsid:j,channelmark:S,agentid:I,agentNo:"CX0000305",applySource:"WD1",secondAgent:A,serviceName1:_},{delimiter:C});break;case"hlj":"prod"===x?(j="ybg331",S="hsh"):(j="ybg335",S="5014re"),h=c.a.stringify({goodsid:j,channelmark:S,agentid:I,agentNo:"CX0000305",applySource:"WD1",secondAgent:A,serviceName1:_},{delimiter:C});break;case"hcx":"prod"===x?(j="ybg328",S="hsh"):(j="ybg315",S="001"),h=c.a.stringify({goodsid:j,channelmark:S,agentid:I,agentNo:"CX0000305",applySource:"WD1",secondAgent:A,serviceName1:_},{delimiter:C});break;case"fjdcyw":"prod"===x?(j="ybg318",S="hsh"):(j="ybg384",S="001"),h=c.a.stringify({goodsid:j,channelmark:S,agentid:I,agentNo:"CX0000305",applySource:"WD1",secondAgent:A,serviceName1:_},{delimiter:C});break;default:var R=function(e,t){switch(b(e)){case y:if("5019"===t)return"WD2";break;case g:return"WD3";case v:return"WD1";case w:return"WD4"}}(n,t),U=a()({type:"json",params:{applySource:R,agentNo:e}});d(n)?("5019"===t&&(N=p[x]+"/site-ols/rasx-uni/"+(s?"%23":"#")+"/index"),U=a()({type:"json",params:{applySource:"WD3",agentNo:"CX0000307",serviceName1:"CX0000309",serviceName2:e,secondAgent:e}}),"5014"===t&&(U=a()({type:"json",params:{applySource:"WD3",agentNo:"CX0000307",serviceName1:"CX0000309",serviceName2:e,secondAgent:e,sign:i}})),"5011"===t&&(U=a()({applySource:"WD3",agentNo:"CX0000307",serviceName1:"CX0000309",serviceName2:e,secondAgent:e}))):b(n)===v?("5019"===t&&(N=p[x]+"/site-ols/rasx-uni/"+(s?"%23":"#")+"/index"),U=a()({type:"json",params:{applySource:"WD1",agentNo:"CX0000305",serviceName1:e}}),"5014"===t&&(U=a()({type:"json",params:{applySource:"WD1",agentNo:"CX0000305",serviceName1:e,sign:i}})),"5011"===t&&(U=a()({applySource:"WD1",agentNo:"CX0000305",serviceName1:e,secondAgent:e}))):b(n)===y?("5019"===t&&(N=p[x]+"/site-ols/rasx-ejia/"+(s?"%23":"#")+"/index"),U=a()({type:"json",params:{applySource:"WD2",agentNo:"CX0000306",serviceName1:"CX0000308",serviceName2:e}}),"5014"===t&&(U=a()({type:"json",params:{applySource:"WD2",agentNo:"CX0000306",serviceName1:"CX0000308",serviceName2:e,sign:i}})),"5025"===t&&(U=a()({type:"json",params:{applySource:"F3",agentNo:e}})),"5022"===t&&(U=a()({type:"json",params:{applySource:"WD1",agentNo:sessionStorage.getItem("virtualAgentNo"),serviceName1:e}}))):b(n)===w&&("5019"===t&&(N=p[x]+"/site-ols/rasx-faren/"+(s?"%23":"#")+"/index"),U=a()({type:"json",params:{applySource:"WD4",agentNo:"CX0000310",serviceName1:"CX0000311",serviceName2:e,secondAgent:e}}),"5014"===t&&(U=a()({type:"json",params:{applySource:"WD4",agentNo:"CX0000310",serviceName1:"CX0000311",serviceName2:e,secondAgent:e,sign:i}}))),s?(h="neededParams="+encodeURIComponent(U.replace(/"/g,'\\"')),console.log(22222,h),"3018akzh"===t&&(h=m[x]+"&neededParams="+encodeURIComponent(U.replace(/"/g,'\\"')))):(h="neededParams="+encodeURIComponent(U),"3018akzh"===t&&(h=m[x]+"&neededParams="+encodeURIComponent(U)))}return console.log(66666,h),N+"?"+h};var n=s("mvHQ"),a=s.n(n),o=s("3L8I"),i=(s.n(o),s("UZ5h")),r=s.n(i),h=s("mw3O"),c=s.n(h);var l={3018:"/site-ols/CMCG-rszh-com/#/index",1016:"/ols/html/mhi/1016/index.html#/",5016:"/site-ols/cancer/#/index",5007:"/ols/html/ias/#/raxb",5009:"/site-ols/CMCG-hmrs/#/index",5012:"/ols/html/ias/#/wnx",5011:"/hbb/html/index.html#/pay/newInto",5018:"/site-ols/rawy/#/index",5010:"/site-ols/fhb/#/index","5019free":"/site-ols/rasx-zx/#/index",5025:"/site-ols/rasx-ysh/#/index",5019:"/site-ols/rasx/#/index",5017:"/site-ols/bxb/#/index",5022:"/site-ols/hmwl/#/index",5021:"/site-ols/rgj/#/index",3006:"/ols/html/ias/#/cii-ejia/",5014:"/osp/html/act2020/zhjtyw-zx/index.html#/index","3018akzh":"/osp/html/#/productDetail/short/index","3018xzhsf":"/site-ols/D000014311/#/index","5016lnrab":"/site-ols/cancer-aged/#/index",hhh:"/mit/h5/index.html#/accidentInsurance/comprehensiveTrafficDetail",hlj:"/mit/h5/index.html#/accidentInsurance/comprehensiveTrafficDetail",hcx:"/mit/h5/index.html#/accidentInsurance/comprehensiveTrafficDetail",fjdcyw:"/mit/h5/index.html#/accidentInsurance/comprehensiveTrafficDetail"},p={prod:"https://ols.cmrh.com",di1:"https://ols-di1.sit.cmrh.com",st1:"https://ols-st1.uat.cmrh.com"},u={prod:"https://osp.cmrh.com",di1:"https://osp-di1.sit.cmrh.com",st1:"https://osp-st1.uat.cmrh.com"},m={prod:"productId=8a159e2f02ee7b9105bfb194c259cfb8",di1:"productId=6e2c73b5c321e18f54f9b3c6df4ce317"};function f(e){return"I"===e}function d(e){return b(e)===g}var g="B",v="NR",y="L",w="G";function b(e){return"B"===e?g:f(e)?v:function(e){return"A"===e||"PT"===e||"YD"===e}(e)?y:function(e){return"G"===e}(e)?w:void 0}},MsCo:function(e,t,s){(function(e,n){var a;!function(o){"object"==typeof t&&t&&t.nodeType,"object"==typeof e&&e&&e.nodeType;var i="object"==typeof n&&n;i.global!==i&&i.window!==i&&i.self;var r,h=2147483647,c=36,l=1,p=26,u=38,m=700,f=72,d=128,g="-",v=/^xn--/,y=/[^\x20-\x7E]/,w=/[\x2E\u3002\uFF0E\uFF61]/g,b={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},x=c-l,N=Math.floor,C=String.fromCharCode;function j(e){throw new RangeError(b[e])}function S(e,t){for(var s=e.length,n=[];s--;)n[s]=t(e[s]);return n}function I(e,t){var s=e.split("@"),n="";return s.length>1&&(n=s[0]+"@",e=s[1]),n+S((e=e.replace(w,".")).split("."),t).join(".")}function A(e){for(var t,s,n=[],a=0,o=e.length;a<o;)(t=e.charCodeAt(a++))>=55296&&t<=56319&&a<o?56320==(64512&(s=e.charCodeAt(a++)))?n.push(((1023&t)<<10)+(1023&s)+65536):(n.push(t),a--):n.push(t);return n}function _(e){return S(e,function(e){var t="";return e>65535&&(t+=C((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=C(e)}).join("")}function R(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function U(e,t,s){var n=0;for(e=s?N(e/m):e>>1,e+=N(e/t);e>x*p>>1;n+=c)e=N(e/x);return N(n+(x+1)*e/(e+u))}function O(e){var t,s,n,a,o,i,r,u,m,v,y,w=[],b=e.length,x=0,C=d,S=f;for((s=e.lastIndexOf(g))<0&&(s=0),n=0;n<s;++n)e.charCodeAt(n)>=128&&j("not-basic"),w.push(e.charCodeAt(n));for(a=s>0?s+1:0;a<b;){for(o=x,i=1,r=c;a>=b&&j("invalid-input"),((u=(y=e.charCodeAt(a++))-48<10?y-22:y-65<26?y-65:y-97<26?y-97:c)>=c||u>N((h-x)/i))&&j("overflow"),x+=u*i,!(u<(m=r<=S?l:r>=S+p?p:r-S));r+=c)i>N(h/(v=c-m))&&j("overflow"),i*=v;S=U(x-o,t=w.length+1,0==o),N(x/t)>h-C&&j("overflow"),C+=N(x/t),x%=t,w.splice(x++,0,C)}return _(w)}function T(e){var t,s,n,a,o,i,r,u,m,v,y,w,b,x,S,I=[];for(w=(e=A(e)).length,t=d,s=0,o=f,i=0;i<w;++i)(y=e[i])<128&&I.push(C(y));for(n=a=I.length,a&&I.push(g);n<w;){for(r=h,i=0;i<w;++i)(y=e[i])>=t&&y<r&&(r=y);for(r-t>N((h-s)/(b=n+1))&&j("overflow"),s+=(r-t)*b,t=r,i=0;i<w;++i)if((y=e[i])<t&&++s>h&&j("overflow"),y==t){for(u=s,m=c;!(u<(v=m<=o?l:m>=o+p?p:m-o));m+=c)S=u-v,x=c-v,I.push(C(R(v+S%x,0))),u=N(S/x);I.push(C(R(u,0))),o=U(s,b,n==a),s=0,++n}++s,++t}return I.join("")}r={version:"1.4.1",ucs2:{decode:A,encode:_},decode:O,encode:T,toASCII:function(e){return I(e,function(e){return y.test(e)?"xn--"+T(e):e})},toUnicode:function(e){return I(e,function(e){return v.test(e)?O(e.slice(4).toLowerCase()):e})}},void 0===(a=function(){return r}.call(t,s,t,e))||(e.exports=a)}()}).call(t,s("3IRH")(e),s("DuR2"))},UZ5h:function(e,t,s){"use strict";var n=s("MsCo"),a=s("qOJP");function o(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}t.parse=w,t.resolve=function(e,t){return w(e,!1,!0).resolve(t)},t.resolveObject=function(e,t){return e?w(e,!1,!0).resolveObject(t):t},t.format=function(e){a.isString(e)&&(e=w(e));return e instanceof o?e.format():o.prototype.format.call(e)},t.Url=o;var i=/^([a-z0-9.+-]+:)/i,r=/:[0-9]*$/,h=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),l=["'"].concat(c),p=["%","/","?",";","#"].concat(l),u=["/","?","#"],m=/^[+a-z0-9A-Z_-]{0,63}$/,f=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,d={javascript:!0,"javascript:":!0},g={javascript:!0,"javascript:":!0},v={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},y=s("1nuA");function w(e,t,s){if(e&&a.isObject(e)&&e instanceof o)return e;var n=new o;return n.parse(e,t,s),n}o.prototype.parse=function(e,t,s){if(!a.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var o=e.indexOf("?"),r=-1!==o&&o<e.indexOf("#")?"?":"#",c=e.split(r);c[0]=c[0].replace(/\\/g,"/");var w=e=c.join(r);if(w=w.trim(),!s&&1===e.split("#").length){var b=h.exec(w);if(b)return this.path=w,this.href=w,this.pathname=b[1],b[2]?(this.search=b[2],this.query=t?y.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var x=i.exec(w);if(x){var N=(x=x[0]).toLowerCase();this.protocol=N,w=w.substr(x.length)}if(s||x||w.match(/^\/\/[^@\/]+@[^@\/]+/)){var C="//"===w.substr(0,2);!C||x&&g[x]||(w=w.substr(2),this.slashes=!0)}if(!g[x]&&(C||x&&!v[x])){for(var j,S,I=-1,A=0;A<u.length;A++){-1!==(_=w.indexOf(u[A]))&&(-1===I||_<I)&&(I=_)}-1!==(S=-1===I?w.lastIndexOf("@"):w.lastIndexOf("@",I))&&(j=w.slice(0,S),w=w.slice(S+1),this.auth=decodeURIComponent(j)),I=-1;for(A=0;A<p.length;A++){var _;-1!==(_=w.indexOf(p[A]))&&(-1===I||_<I)&&(I=_)}-1===I&&(I=w.length),this.host=w.slice(0,I),w=w.slice(I),this.parseHost(),this.hostname=this.hostname||"";var R="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!R)for(var U=this.hostname.split(/\./),O=(A=0,U.length);A<O;A++){var T=U[A];if(T&&!T.match(m)){for(var P="",k=0,D=T.length;k<D;k++)T.charCodeAt(k)>127?P+="x":P+=T[k];if(!P.match(m)){var E=U.slice(0,A),q=U.slice(A+1),B=T.match(f);B&&(E.push(B[1]),q.unshift(B[2])),q.length&&(w="/"+q.join(".")+w),this.hostname=E.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),R||(this.hostname=n.toASCII(this.hostname));var W=this.port?":"+this.port:"",X=this.hostname||"";this.host=X+W,this.href+=this.host,R&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==w[0]&&(w="/"+w))}if(!d[N])for(A=0,O=l.length;A<O;A++){var $=l[A];if(-1!==w.indexOf($)){var M=encodeURIComponent($);M===$&&(M=escape($)),w=w.split($).join(M)}}var L=w.indexOf("#");-1!==L&&(this.hash=w.substr(L),w=w.slice(0,L));var z=w.indexOf("?");if(-1!==z?(this.search=w.substr(z),this.query=w.substr(z+1),t&&(this.query=y.parse(this.query)),w=w.slice(0,z)):t&&(this.search="",this.query={}),w&&(this.pathname=w),v[N]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){W=this.pathname||"";var H=this.search||"";this.path=W+H}return this.href=this.format(),this},o.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",s=this.pathname||"",n=this.hash||"",o=!1,i="";this.host?o=e+this.host:this.hostname&&(o=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&a.isObject(this.query)&&Object.keys(this.query).length&&(i=y.stringify(this.query));var r=this.search||i&&"?"+i||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||v[t])&&!1!==o?(o="//"+(o||""),s&&"/"!==s.charAt(0)&&(s="/"+s)):o||(o=""),n&&"#"!==n.charAt(0)&&(n="#"+n),r&&"?"!==r.charAt(0)&&(r="?"+r),t+o+(s=s.replace(/[?#]/g,function(e){return encodeURIComponent(e)}))+(r=r.replace("#","%23"))+n},o.prototype.resolve=function(e){return this.resolveObject(w(e,!1,!0)).format()},o.prototype.resolveObject=function(e){if(a.isString(e)){var t=new o;t.parse(e,!1,!0),e=t}for(var s=new o,n=Object.keys(this),i=0;i<n.length;i++){var r=n[i];s[r]=this[r]}if(s.hash=e.hash,""===e.href)return s.href=s.format(),s;if(e.slashes&&!e.protocol){for(var h=Object.keys(e),c=0;c<h.length;c++){var l=h[c];"protocol"!==l&&(s[l]=e[l])}return v[s.protocol]&&s.hostname&&!s.pathname&&(s.path=s.pathname="/"),s.href=s.format(),s}if(e.protocol&&e.protocol!==s.protocol){if(!v[e.protocol]){for(var p=Object.keys(e),u=0;u<p.length;u++){var m=p[u];s[m]=e[m]}return s.href=s.format(),s}if(s.protocol=e.protocol,e.host||g[e.protocol])s.pathname=e.pathname;else{for(var f=(e.pathname||"").split("/");f.length&&!(e.host=f.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==f[0]&&f.unshift(""),f.length<2&&f.unshift(""),s.pathname=f.join("/")}if(s.search=e.search,s.query=e.query,s.host=e.host||"",s.auth=e.auth,s.hostname=e.hostname||e.host,s.port=e.port,s.pathname||s.search){var d=s.pathname||"",y=s.search||"";s.path=d+y}return s.slashes=s.slashes||e.slashes,s.href=s.format(),s}var w=s.pathname&&"/"===s.pathname.charAt(0),b=e.host||e.pathname&&"/"===e.pathname.charAt(0),x=b||w||s.host&&e.pathname,N=x,C=s.pathname&&s.pathname.split("/")||[],j=(f=e.pathname&&e.pathname.split("/")||[],s.protocol&&!v[s.protocol]);if(j&&(s.hostname="",s.port=null,s.host&&(""===C[0]?C[0]=s.host:C.unshift(s.host)),s.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===f[0]?f[0]=e.host:f.unshift(e.host)),e.host=null),x=x&&(""===f[0]||""===C[0])),b)s.host=e.host||""===e.host?e.host:s.host,s.hostname=e.hostname||""===e.hostname?e.hostname:s.hostname,s.search=e.search,s.query=e.query,C=f;else if(f.length)C||(C=[]),C.pop(),C=C.concat(f),s.search=e.search,s.query=e.query;else if(!a.isNullOrUndefined(e.search)){if(j)s.hostname=s.host=C.shift(),(R=!!(s.host&&s.host.indexOf("@")>0)&&s.host.split("@"))&&(s.auth=R.shift(),s.host=s.hostname=R.shift());return s.search=e.search,s.query=e.query,a.isNull(s.pathname)&&a.isNull(s.search)||(s.path=(s.pathname?s.pathname:"")+(s.search?s.search:"")),s.href=s.format(),s}if(!C.length)return s.pathname=null,s.search?s.path="/"+s.search:s.path=null,s.href=s.format(),s;for(var S=C.slice(-1)[0],I=(s.host||e.host||C.length>1)&&("."===S||".."===S)||""===S,A=0,_=C.length;_>=0;_--)"."===(S=C[_])?C.splice(_,1):".."===S?(C.splice(_,1),A++):A&&(C.splice(_,1),A--);if(!x&&!N)for(;A--;A)C.unshift("..");!x||""===C[0]||C[0]&&"/"===C[0].charAt(0)||C.unshift(""),I&&"/"!==C.join("/").substr(-1)&&C.push("");var R,U=""===C[0]||C[0]&&"/"===C[0].charAt(0);j&&(s.hostname=s.host=U?"":C.length?C.shift():"",(R=!!(s.host&&s.host.indexOf("@")>0)&&s.host.split("@"))&&(s.auth=R.shift(),s.host=s.hostname=R.shift()));return(x=x||s.host&&C.length)&&!U&&C.unshift(""),C.length?s.pathname=C.join("/"):(s.pathname=null,s.path=null),a.isNull(s.pathname)&&a.isNull(s.search)||(s.path=(s.pathname?s.pathname:"")+(s.search?s.search:"")),s.auth=e.auth||s.auth,s.slashes=s.slashes||e.slashes,s.href=s.format(),s},o.prototype.parseHost=function(){var e=this.host,t=r.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},kMPS:function(e,t,s){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,s,o){t=t||"&",s=s||"=";var i={};if("string"!=typeof e||0===e.length)return i;var r=/\+/g;e=e.split(t);var h=1e3;o&&"number"==typeof o.maxKeys&&(h=o.maxKeys);var c=e.length;h>0&&c>h&&(c=h);for(var l=0;l<c;++l){var p,u,m,f,d=e[l].replace(r,"%20"),g=d.indexOf(s);g>=0?(p=d.substr(0,g),u=d.substr(g+1)):(p=d,u=""),m=decodeURIComponent(p),f=decodeURIComponent(u),n(i,m)?a(i[m])?i[m].push(f):i[m]=[i[m],f]:i[m]=f}return i};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},qOJP:function(e,t,s){"use strict";e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},u3nt:function(e,t){},xaZU:function(e,t,s){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,s,r){return t=t||"&",s=s||"=",null===e&&(e=void 0),"object"==typeof e?o(i(e),function(i){var r=encodeURIComponent(n(i))+s;return a(e[i])?o(e[i],function(e){return r+encodeURIComponent(n(e))}).join(t):r+encodeURIComponent(n(e[i]))}).join(t):r?encodeURIComponent(n(r))+s+encodeURIComponent(n(e)):""};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function o(e,t){if(e.map)return e.map(t);for(var s=[],n=0;n<e.length;n++)s.push(t(e[n],n));return s}var i=Object.keys||function(e){var t=[];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.push(s);return t}}});
//# sourceMappingURL=5.9e108da0c6c82a1f80d5.js.map