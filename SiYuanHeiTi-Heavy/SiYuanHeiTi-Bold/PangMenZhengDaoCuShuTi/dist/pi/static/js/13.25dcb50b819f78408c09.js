webpackJsonp([13],{"2cSK":function(t,a){},LLBC:function(t,a){},qZbQ:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={props:{policyItemData:{type:Object,default:{applyBarCode:"",appClientName:"",mainProductPlan:"",applyDate:"",applyStatusDesc:"",applyChannel:"",applySource:""}}},methods:{onClick:function(){this.$emit("on-click")}}},l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"clearfix noPolicyItemWrap",on:{click:function(a){t.onClick()}}},[s("div",{staticClass:"clearfix top"},[s("div",{staticClass:"col col-xs-8 col-sm-8 col-md-8 col-lg-8"},[s("span",{staticClass:"active"},[t._v(t._s(t.policyItemData.applyBarCode))])]),t._v(" "),s("div",{staticClass:"col col-xs-4 col-sm-4 col-md-4 col-lg-4 applyName"},[s("span",[t._v(t._s(t.policyItemData.appClientName))])])]),t._v(" "),s("div",{staticClass:"clearfix content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col col-xs-12 col-sm-12 col-md-12 col-lg-12"},[s("span",[t._v("主险名称："+t._s(t.policyItemData.mainProductPlan))])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col col-xs-6 col-sm-6 col-md-6 col-lg-6"},[t._v("业务来源："),s("span",{staticClass:"effect-date"},[t._v(t._s(t.policyItemData.applySource))])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col col-xs-5 col-sm-5 col-md-5 col-lg-5"},[t._v("投保日期："),s("span",{staticClass:"effect-date"},[t._v(t._s(t.policyItemData.applyDate))])]),t._v(" "),s("div",{staticClass:"col col-xs-7 col-sm-7 col-md-7 col-lg-7",staticStyle:{display:"flex","justify-content":"flex-end"}},[t._v("当前状态："),s("span",{staticClass:"status"},[t._v(t._s(t.policyItemData.applyStatusDesc))])])])])])},staticRenderFns:[]};var i=s("VU/8")(e,l,!1,function(t){s("LLBC")},"data-v-4c3cb312",null).exports,c=s("hEaO"),o=s("Y3JF"),n={components:{policyInquiryItemTemplate:i,alertTemplate:c.a},data:function(){return{agentNo:"",clientNo:"",dataArray:[],alertDiv:{show:!1,msg:""}}},methods:{showAlertDiv:function(t){this.alertDiv.show=!0,this.alertDiv.msg=t},closeAlertDiv:function(){this.alertDiv.show=!1},getDataArray:function(){var t=this,a={agentNo:this.agentNo},s={method:"POST",stringData:!0,success:function(a){if("Y"===a.flag){t.dataArray=[];for(var s=0;s<a.data.applyList.length;s++){var e=a.data.applyList[s];e.applyName=e.appClientName,t.dataArray.push(e)}}else t.showAlertDiv(a.message)},error:function(){t.showAlertDiv("网络错误，请重试")}};Object(o.a)("/selfservice/clientManage/policy/getApplyList",a,s)},onClick:function(t,a){this.$router.push({path:"/issuerDetailMsg",query:{applyBarCode:a.applyBarCode}})}},activated:function(){this.agentNo=this.$route.query.agentNo,this.getDataArray()}},r={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"issuerDetailMsg"},[s("div",{staticClass:"itemList"},t._l(t.dataArray,function(a,e){return s("div",{key:e,staticClass:"margin-bottom"},[s("policy-inquiry-item-template",{attrs:{policyItemData:a},on:{"on-click":function(s){t.onClick(e,a)}}})],1)})),t._v(" "),s("alert-template",{attrs:{isShow:t.alertDiv.show},on:{"on-close":function(a){t.closeAlertDiv()}}},[s("p",{domProps:{textContent:t._s(t.alertDiv.msg)}})])],1)},staticRenderFns:[]};var p=s("VU/8")(n,r,!1,function(t){s("2cSK")},"data-v-94f0862e",null);a.default=p.exports}});
//# sourceMappingURL=13.25dcb50b819f78408c09.js.map