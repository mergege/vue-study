webpackJsonp([4],{Hol5:function(t,e,a){"use strict";a("qb6w"),a("Bb4J");var n={props:{headerContentData:{type:Object,default:{title:"投保人",content:[{key:"客户号",value:"客户号"},{key:"姓名",value:"姓名"},{key:"与被保人关系",value:"与被保人关系"},{key:"联系地址",value:"联系地址"},{key:"联系电话",value:"联系电话"}],hasDetails:!0,detailsArray:[]}}},data:function(){return{contentShow:!1}},methods:{toggleContent:function(){this.contentShow=!this.contentShow},clickDetails:function(){this.$emit("click-details",this.headerContentData.detailsArray)}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clearfix headerContentWrap"},[a("div",{staticClass:"header",on:{click:t.toggleContent}},[a("span",[t._v(t._s(t.headerContentData.title))]),t._v(" "),a("span",{staticClass:"icon-right",class:{"icon-down":t.contentShow}})]),t._v(" "),0==t.headerContentData.content.length&&t.contentShow?a("div",{staticClass:"content"},[t._v("\n      暂无数据\n  ")]):t.contentShow&&t.headerContentData.content.length?a("div",{staticClass:"content"},t._l(t.headerContentData.content,function(e,n){return a("div",{key:e.key+n,staticClass:"clearfix padding-right"},["notPassReason"==e.key?a("div",{staticClass:"key tips col-xs-12 col-sm-12 col-md-12 col-lg-12"},[a("span",[t._v("自核未通过原因")])]):a("div",{staticClass:"key col-xs-5 col-sm-5 col-md-5 col-lg-5"},[a("span",[t._v(t._s(e.key))])]),t._v(" "),a("div",{staticClass:"value col-xs-7 col-sm-7 col-md-7 col-lg-7"},[a("span",[t._v(t._s(e.value))])])])})):t._e(),t._v(" "),t.headerContentData.hasDetails&&t.contentShow?a("div",{staticClass:"clearfix details",staticStyle:{"margin-left":".6*5rem","border-top":"1px solid lightgray",height:".8*5rem","font-size":"0.3*5rem"},on:{click:function(e){t.clickDetails()}}},[a("div",{staticClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",staticStyle:{color:"#BC192E",padding:"0 .2*5rem 0 0"}},[t._v("附加险")]),t._v(" "),a("div",{staticClass:"col-xs-4 col-sm-4 col-md-4 col-lg-4",staticStyle:{"text-align":"right"}},[t._v("查看详情")]),t._v(" "),t._m(0)]):t._e(),t._v(" "),!1===t.headerContentData.hasDetails&&t.contentShow?a("div",{staticClass:"clearfix details",staticStyle:{"margin-left":".6*5rem","border-top":"1px solid lightgray",height:".8*5rem","font-size":"0.3*5rem"}},[a("div",{staticClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",staticStyle:{color:"#BC192E",padding:"0 .2*5rem 0 0"}},[t._v("无附加险")])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-xs-2 col-sm-2 col-md-2 col-lg-2",staticStyle:{"text-align":"center"}},[e("img",{staticStyle:{display:"inline-block",width:"1rem"},attrs:{src:a("/c3F")}})])}]};var s=a("VU/8")(n,i,!1,function(t){a("e4Uq")},"data-v-783dd108",null);e.a=s.exports},e4Uq:function(t,e){},"i/e2":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mvHQ"),i=a.n(n),s=a("hEaO"),o=a("Hol5"),l=(a("qb6w"),a("Bb4J"),{props:{headerContentData:{type:Object,default:{title:"投保人",content:[{key:"客户号",value:"客户号"},{key:"姓名",value:"姓名"},{key:"与被保人关系",value:"与被保人关系"},{key:"联系地址",value:"联系地址"},{key:"联系电话",value:"联系电话"}],hasDetails:!0,detailsArray:[]}}},data:function(){return{contentShow:!1,itemContentShow:[]}},methods:{toggleContent:function(){this.contentShow=!this.contentShow},toggleItemContent:function(t){this.$set(this.itemContentShow,t,!this.itemContentShow[t])},clickDetails:function(){this.$emit("click-details",this.headerContentData.detailsArray)},getMoreMsg:function(t){var e=this.headerContentData.content[t];sessionStorage.setItem("reason",i()(e.list)),this.$router.push({name:"reasonDetails"})}},mounted:function(){for(var t=0;t<this.headerContentData.content.length;t++)this.itemContentShow.push(!1)}}),c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clearfix headerContentWrap"},[a("div",{staticClass:"header",on:{click:t.toggleContent}},[a("span",[t._v(t._s(t.headerContentData.title))]),t._v(" "),a("span",{staticClass:"icon-right",class:{"icon-down":t.contentShow}})]),t._v(" "),null==t.headerContentData.content&&t.contentShow?a("div",{staticClass:"content"},[t._v("\n      暂无数据\n  ")]):t.contentShow&&t.headerContentData.content?a("div",{staticClass:"content"},t._l(t.headerContentData.content,function(e,n){return a("div",{key:n,staticClass:"contenItem"},[a("div",{staticClass:"itemHeader",on:{click:function(e){t.toggleItemContent(n)}}},[t._v("第"+t._s(n+1)+"条信息"),a("span",{staticClass:"icon",class:{iconDown:t.itemContentShow[n]}})]),t._v(" "),t.itemContentShow[n]?a("div",{staticClass:"itemContent"},[t._l(e.uwTaskInfo,function(e,n,i){return a("div",{key:i,staticClass:"itemContentLine"},["undwrtLevel"==n?a("span",{staticClass:"key"},[t._v("核保级别")]):t._e(),t._v(" "),"undwrtTaskStatusDesc"==n?a("span",{staticClass:"key"},[t._v("核保任务状态")]):t._e(),t._v(" "),a("span",{staticClass:"value"},[t._v(t._s(e))])])}),t._v(" "),a("div",{staticClass:"itemContenLine more"},[a("span",{staticClass:"value",on:{click:function(e){t.getMoreMsg(n)}}},[t._v("点击查看更多信息")])])],2):t._e()])})):t._e()])},staticRenderFns:[]};var r=a("VU/8")(l,c,!1,function(t){a("xSI5")},"data-v-700b3348",null).exports,d=a("Y3JF"),u={components:{alertTemplate:s.a,headerContentTemplate:o.a,underWritingTemplate:r},activated:function(){this.applyBarCode=this.$route.query.applyBarCode,this.getDetails()},data:function(){return{applyBarCode:"",alertDiv:{show:!1,msg:""},applyInfo:{title:"投保人",content:[{key:"客户号",value:""},{key:"姓名",value:""},{key:"证件号码",value:""},{key:"与被保人关系",value:""},{key:"联系地址",value:""},{key:"联系电话",value:""}]},insuredInfo:{title:"主被保险人",content:[{key:"客户号",value:""},{key:"姓名",value:""},{key:"证件号码",value:""}]},benefiterInfo:{title:"身故受益人",content:[{key:"受益人代码",value:""},{key:"姓名",value:""},{key:"证件号码",value:""},{key:"与被保人关系",value:""},{key:"受益顺位",value:""},{key:"受益比例",value:""},{key:"受益状态",value:""}]},productInfo:{title:"主险种信息",content:[{key:"险种名称",value:""},{key:"险种类别",value:""},{key:"保险金额",value:""},{key:"保障期限",value:""},{key:"缴费频率",value:""},{key:"缴费期限",value:""},{key:"期交保费",value:""}],hasDetails:!0,detailsArray:[]},payAndReceive:{title:"收付信息",content:[{key:"费用类型",value:""},{key:"收付金额",value:""},{key:"收付方式",value:""},{key:"财务状态",value:""},{key:"记账日期",value:""}]},underWriting:{title:"核保信息",content:[]},detailMsg:{title:"详细历程",content:[{key:"录入",value:""},{key:"投保",value:""},{key:"核保",value:""},{key:"承保",value:""},{key:"保单打印",value:""},{key:"回执回销",value:""},{key:"回访",value:""}]}}},methods:{showAlertDiv:function(t){this.alertDiv.show=!0,this.alertDiv.msg=t},closeAlertDiv:function(){this.alertDiv.show=!1},getDetails:function(){var t=this,e={applyBarCode:this.applyBarCode},a={method:"POST",stringData:!0,success:function(e){if("Y"===e.flag){t.applyInfo.content=[{key:"客户号",value:e.data.applyInfo.clientNo},{key:"姓名",value:e.data.applyInfo.clientName},{key:"证件号码",value:e.data.applyInfo.idNo},{key:"与被保人关系",value:e.data.applyInfo.relationShip},{key:"联系地址",value:e.data.applyInfo.address},{key:"联系电话",value:e.data.applyInfo.phone}],t.insuredInfo.content=[{key:"客户号",value:e.data.insuredInfo.clientNo},{key:"姓名",value:e.data.insuredInfo.clientName},{key:"证件号码",value:e.data.insuredInfo.idNo}],t.productInfo.content=[{key:"险种名称",value:e.data.productInfo.productName},{key:"保险金额",value:e.data.productInfo.baseSumIns},{key:"保障期限",value:e.data.productInfo.coveragePeriod},{key:"缴费频率",value:e.data.productInfo.premFreq},{key:"缴费期限",value:e.data.productInfo.premTerm},{key:"期交保费",value:e.data.productInfo.periodStandPrem}],t.benefiterInfo.content=[];for(var a=0;a<e.data.benefitList.length;a++)t.benefiterInfo.content.push({key:"受益人代码",value:e.data.benefitList[a].clientNo},{key:"姓名",value:e.data.benefitList[a].clientName},{key:"证件号码",value:e.data.benefitList[a].idNo},{key:"与被保人关系",value:e.data.benefitList[a].relationShip},{key:"受益顺位",value:e.data.benefitList[a].order},{key:"受益比例",value:e.data.benefitList[a].rate},{key:"受益状态",value:e.data.benefitList[a].benefitStatus}),a<e.data.benefitList.length-1&&t.benefiterInfo.content.push({key:"-----------",value:""});t.payAndReceive.content=[];for(var n=0;n<e.data.inList.length;n++)t.payAndReceive.content.push({key:"费用类型",value:e.data.inList[n].businessNoTypeDesc},{key:"收付金额",value:e.data.inList[n].premSum},{key:"收付方式",value:e.data.inList[n].paymentTypeDesc},{key:"财务状态",value:e.data.inList[n].accessStatusDesc},{key:"记账日期",value:e.data.inList[n].finBusiCostCreatedDate}),n<e.data.inList.length-1&&t.payAndReceive.content.push({key:"-----------",value:""});t.underWriting.content=e.data.underwriteInfo,t.detailMsg.content=[{key:"录入",value:e.data.policyTime.enterDate},{key:"投保",value:e.data.policyTime.applyDate},{key:"核保",value:e.data.policyTime.underwriteDate},{key:"承保",value:e.data.policyTime.effectDate},{key:"保单打印",value:e.data.policyTime.printDate},{key:"回执回销",value:e.data.policyTime.clientSignDate},{key:"回访",value:e.data.policyTime.visitDate}],e.data.productInfo.additionalRiskList.length>0?(t.productInfo.hasDetails=!0,t.productInfo.detailsArray=e.data.productInfo.additionalRiskList):t.productInfo.hasDetails=!1}else t.showAlertDiv(e.message)},error:function(){t.showAlertDiv("网络错误，请重试")}};Object(d.a)("/selfservice/clientManage/getApplyInfo",e,a)},clickDetails:function(t){this.$router.push({path:"/additionalPolicyDetails",query:{additionalRiskList:i()(t)}})}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"issuerDetailMsg"},[a("header-content-template",{staticClass:"section",attrs:{headerContentData:t.applyInfo}}),t._v(" "),a("header-content-template",{staticClass:"section",attrs:{headerContentData:t.insuredInfo}}),t._v(" "),a("header-content-template",{staticClass:"section",attrs:{headerContentData:t.benefiterInfo}}),t._v(" "),a("header-content-template",{staticClass:"section",attrs:{headerContentData:t.productInfo},on:{"click-details":function(e){t.clickDetails(e)}}}),t._v(" "),a("header-content-template",{staticClass:"section",attrs:{headerContentData:t.payAndReceive}}),t._v(" "),a("under-writing-template",{staticClass:"section",attrs:{headerContentData:t.underWriting}}),t._v(" "),a("header-content-template",{staticClass:"section",attrs:{headerContentData:t.detailMsg}})],1)},staticRenderFns:[]};var y=a("VU/8")(u,v,!1,function(t){a("pvot")},"data-v-6bdddddc",null);e.default=y.exports},pvot:function(t,e){},xSI5:function(t,e){}});
//# sourceMappingURL=4.37dd520863b2a1cb3efd.js.map