webpackJsonp([18],{"0HXq":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("mvHQ"),i=a.n(s),n=a("AdN4"),o=a("sihj"),r=a("71e1"),l=a.n(r),c=a("1QNT"),h=a("kgJZ"),m=a("3L8I").base_URL,d={name:"protectiveDetail",data:function(){return{planIndex:0,firstIndex:0,firstTab:["产品介绍","常见问题"],planList:["A计划","B计划","C计划"],code:"",productName:"",fullName:"",wxShareUrl:"",interfaceUrl:"",images:{banner:"",planA:"",planB:"",planC:"",question:"",detail:"",code:"",smallImg:""},InsureUrl:"",shareQrcode:""}},components:{bottomNav:n.a,msgBox:o.a},activated:function(){var e=this;this.Athena.register("app","call","proSmallImage",this.compressHeaderImage,!0),this.images.banner="",this.images.planA="",this.images.planB="",this.images.planC="",this.images.detail="",this.images.question="",this.images.smallImg="",this.images.code="",this.$http({url:"/../dcs-fpc/msp-web"},!1).then(function(t){e.wxShareUrl=t.propertySources[0].source.wxShareUrl,e.interfaceUrl=e.wxShareUrl+"/RH_MSPSERVER/wechat/productImage/",e.code=e.$route.query.code,e.productName=e.$route.query.productName,e.fullName=e.$route.query.productFullName,e.description=e.$route.query.description,e.planIndex=0,e.firstIndex=0,document.title=e.productName,e.Athena.setTitle(e.productName),e.initData(),e.initTopRight()}).catch(function(){alert("服务器出错")})},methods:{initData:function(){this.images.banner="",this.images.planA="",this.images.planB="",this.images.planC="",this.images.detail="",this.images.question="",this.images.smallImg="",this.images.code="",this.images.banner=this.interfaceUrl+this.code+"-banner.jpg",this.images.planA=this.interfaceUrl+this.code+"-productDuty-1.jpg",this.images.planB=this.interfaceUrl+this.code+"-productDuty-2.jpg",this.images.planC=this.interfaceUrl+this.code+"-productDuty-3.jpg",this.images.detail=this.interfaceUrl+this.code+"-detail.jpg",this.images.question=this.interfaceUrl+this.code+"-question.jpg",this.images.smallImg=this.interfaceUrl+this.code+"-smallImage.jpg"},choosePlan:function(e){this.planIndex=e},chooseTab:function(e){this.firstIndex=e},initTopRight:function(){var e=this,t="",a="";a=(t="/RH_MSPSERVER"===m?"msp.cmrh.com"===location.host?"https://ols.cmrh.com/ols/html/ias/#/sxp/index/hsf?neededParams=":"https://ols-di1.sit.cmrh.com/ols/html/ias/#/sxp/index/hsf?neededParams=":m.indexOf("msp.cmrh.com")>-1?"https://ols.cmrh.com/ols/html/ias/#/sxp/index/hsf?neededParams=":"https://ols-di1.sit.cmrh.com/ols/html/ias/#/sxp/index/hsf?neededParams=")+encodeURIComponent(i()({type:"json",params:{applySource:"F3",agentNo:sessionStorage.getItem("agentNo1")||localStorage.getItem("agentNo")}})),t+=encodeURIComponent(i()({type:"json",params:{applySource:"F3",agentNo:sessionStorage.getItem("agentNo1")||localStorage.getItem("agentNo")}}).replace(/"/g,'\\"')),this.InsureUrl=t,a=h.a.decodeUrl(a),console.log("qrcodeUrl",a),l.a.toDataURL(a).then(function(t){Object(c.a)(t,e.images.smallImg,{width:256,height:256,iconRadius:5,iconBorderWidth:5,iconBorderColor:"#fff"}).then(function(t){e.shareQrcode=t,console.log("shareQrcode",e.shareQrcode)})}),this.Athena.showTopRight("share",{type:this.Athena.shareWechat+this.Athena.shareWechatFriends,url:t,title:this.fullName,txt:this.description,icon:"app.call.proSmallImage"})},compressHeaderImage:function(){var e=this,t=new Image;t.onload=function(){var a=t.width,s=t.height,i=Math.max(a,s),n=document.createElement("canvas");n.width=150,n.height=150;var o=n.getContext("2d");o.rect(0,0,i,i),o.fillStyle="#ffffff",o.fill(),o.drawImage(t,0,0,a,s,(150-a/i*150)/2,(150-s/i*150)/2,a/i*150,s/i*150);var r=n.toDataURL("image/jpeg",.9);e.Athena.sendData("shareQrCodeImage",{qrCodeImage:e.shareQrcode.split(",")[1],icon:r.split(",")[1]})},t.src=this.images.smallImg}},beforeRouteLeave:function(e,t,a){this.Athena.showTopRight("gone"),a()}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"detail-wrap"},[a("div",{staticClass:"title-img"},[a("img",{attrs:{src:e.images.banner}})]),e._v(" "),a("div",{staticClass:"plan-tab"},[a("ul",e._l(e.planList,function(t,s){return a("li",{key:s,class:{active:e.planIndex===s},on:{click:function(t){e.choosePlan(s)}}},[e._v(e._s(t))])}))]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0===e.planIndex,expression:"planIndex === 0"}],staticClass:"imgShow"},[a("img",{attrs:{src:e.images.planA}})]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1===e.planIndex,expression:"planIndex === 1"}],staticClass:"imgShow"},[a("img",{attrs:{src:e.images.planB}})]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2===e.planIndex,expression:"planIndex === 2"}],staticClass:"imgShow"},[a("img",{attrs:{src:e.images.planC}})]),e._v(" "),a("div",{staticClass:"tab"},e._l(e.firstTab,function(t,s){return a("div",{key:s,class:{selected:e.firstIndex===s},on:{click:function(t){e.chooseTab(s)}}},[e._v(e._s(t))])})),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0===e.firstIndex,expression:"firstIndex === 0"}],staticClass:"imgShow"},[a("img",{attrs:{src:e.images.detail}})]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1===e.firstIndex,expression:"firstIndex === 1"}],staticClass:"imgShow"},[a("img",{attrs:{src:e.images.question}})])])},staticRenderFns:[]};var g=a("VU/8")(d,p,!1,function(e){a("pKwl")},"data-v-493530aa",null);t.default=g.exports},pKwl:function(e,t){}});
//# sourceMappingURL=18.a08e2ef0262569133a53.js.map