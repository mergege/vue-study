webpackJsonp([8],{"+/OK":function(e,t){},LSjA:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("91qt"),n=a("ZVws"),r=a("hEaO"),i=a("Y3JF"),l=a("c6kH"),c={activated:function(){this.policyNo=this.$route.query.policyNo,this.getInsuranceDetails()},components:{headerTemplate:s.a,customerInfoTemplate:n.a,alertTemplate:r.a},data:function(){return{alertShow:!1,alertMsg:"",policyNo:"",insureHeader:{icon:a("Rxd6"),title:"投保单明细"},insuranceData:[{key:"投保单号",value:""},{key:"投保日期",value:""},{key:"首期保费",value:""}],insuranceObject:{applyBarCode:"投保单号",applyDate:"投保日期",periodStandPrem:"首期保费"},dateData:[{key:"录入",value:""},{key:"投保",value:""},{key:"核保",value:""},{key:"承保",value:""},{key:"保单打印",value:""},{key:"回执回销",value:""},{key:"回访",value:""}],dateObject:{enterDate:"录入",applyDate:"投保",underwriteDate:"核保",effectDate:"承保",printDate:"保单打印",clientSignDate:"回执回销",visitDate:"回访"}}},methods:{closeAlert:function(){this.alertShow=!1},alertDiv:function(e){this.alertShow=!0,this.alertMsg=e},getInsuranceDetails:function(){var e=this,t={policyNo:this.policyNo},a={method:"POST",stringData:!0,success:function(t){if(t.flag===l.a.SUCCESS_FLAG){var a=t.data;for(var s in e.insuranceData=[],e.dateData=[],e.dateDetailData=[],e.insuranceObject)e.insuranceObject.hasOwnProperty(s)&&e.insuranceData.push({key:e.insuranceObject[s],value:a[s]});for(var n in e.dateObject)e.dateObject.hasOwnProperty(n)&&e.dateData.push({key:e.dateObject[n],value:a.policyTime[n]})}else e.alertDiv(t.message)},error:function(){e.alertDiv("服务器连接出错")}};Object(i.a)("/selfservice/clientManage/apply",t,a)}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid insuranceDetailsWrap"},[a("div",{staticClass:"content"},[a("header-template",{staticClass:"border",attrs:{headerData:e.insureHeader}}),e._v(" "),a("customer-info-template",{staticClass:"border",attrs:{customerInfoData:e.insuranceData}}),e._v(" "),a("customer-info-template",{attrs:{customerInfoData:e.dateData}})],1),e._v(" "),a("alert-template",{attrs:{isShow:e.alertShow},on:{"on-close":function(t){e.closeAlert()}}},[a("p",{domProps:{textContent:e._s(e.alertMsg)}})])],1)},staticRenderFns:[]};var u=a("VU/8")(c,o,!1,function(e){a("+/OK")},"data-v-68769fdc",null);t.default=u.exports},ZVws:function(e,t,a){"use strict";var s={props:{customerInfoData:{type:Array,default:[{key:"",value:""}]},leftWidth:{type:String,default:"col-xs-4 col-sm-4 col-md-4 col-lg-4"},rightWidth:{type:String,default:"col-xs-8 col-sm-8 col-md-8 col-lg-8"}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"clearfix customerInfoWrap"},[a("div",{staticClass:"content"},e._l(e.customerInfoData,function(t,s){return a("div",{key:s,staticClass:"clearfix"},[a("div",{staticClass:"left",class:e.leftWidth},[e._v("\n        "+e._s(t.key)+"\n      ")]),e._v(" "),a("div",{staticClass:"right",class:e.rightWidth},[e._v("\n        "+e._s(t.value)+"\n      ")])])}))])},staticRenderFns:[]};var r=a("VU/8")(s,n,!1,function(e){a("kCek")},"data-v-34159e5d",null);t.a=r.exports},kCek:function(e,t){}});
//# sourceMappingURL=8.52683dbc8bbca0e1c3ee.js.map