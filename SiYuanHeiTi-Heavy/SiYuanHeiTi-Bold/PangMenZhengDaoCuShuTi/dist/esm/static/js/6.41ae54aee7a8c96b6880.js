webpackJsonp([6],{"1N7z":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAg9JREFUSA1jPCGs+5+BhoCFgZHxGcP//1KMjIzLGBgYn1DHrn/S//8zRDMyMjxnYWVi8fzz989Bhv8M+pzc/3L0Hl1+T4kll+R0Bb9/ZTzEyMDwkYGJ2ZPJ+NW5SwxMDH7/Gf8rf//KsPWMlDEXuRY8lrHkBJqxBWiWCiPTfz/zV+cvMoEMM3996TDQBxH/GRjN/vz6tfq/gwMLqZaA9Dz78WU10Axzxv/MkWavLx/CMOOkqF4yKNJPiOgu/v//P9CXxAGQ2pMieotAeoF0Cl5dJ0T1KiEK9fvwKkSSPCmi2wvWI6pXjSSMm3lCWG8C2CdAy3CrgsicFNYtBxsurDuJkFq4PNTLS6GuSoZLoDFOiOongR0iorccV5CCIxlNHzBrAKNJnjWBkYFx5/9/DDNPChsEoKsBGuzP8O//LKD4bhZ51jiQHnQ1ID7eiLworsf94+//A0CdOizybHwmZ8/+BmkCpZiTV95+BjKv8jIKO2i/PvAFJI4NYPUBTKH+y0tfgW7YCkzCHMJveZlh4tdeizKBxICat+IzHKQerwUwAymhRy0gGHojIIiA+ecPKBzefH+nQjA8sCggGERs7Ezzgbnx09+/DDNwFQdYzIULEbTA4MnFp8AiowJYrVqfkdBzhuskkkHQApA5pm8uzmBmZrYxfXl5D5HmwpURVXNBC7KjcF0kMIjyAQnmYSgFAGuSuzmeT5jZAAAAAElFTkSuQmCC"},"83WB":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAYAAABmMXGeAAAAAXNSR0IArs4c6QAAAn9JREFUSA2tlvtOE0EUxtuVVzJtn0ONFxS1Bu+AikHFyx+KiBBQhIBGDFZEjC/SyzvZ+jvNfJvpdLbdbtyk+facnfmd78xM2y2V3NVut2/x2ev1emXliuqUTWy1WjeB7Ruw0+mU0HvlcrlXFJo0m81ZJn+Ww263ewfHu0WBNi/B0WkBBSK+i/vC4LIBcXaA1gX1dKdWq817ca5bc9qrVCqz6GFkxhyOtyP5kal0p3Ga4Pgbei2cQcHtarX6IMxnxYkeMLGL4xvEDeWkFFpgQ7cUj9MUagMNjKM6ehSZ+JBONiP5oVTavv/ELUUDvezn7Z6CmxR+HOb9eMCpHriluEp8rJyUQots3obimEadaiCAUwB+EF9SztN1jtsTL05vo071FMd/aXUGPVHO0yXWeM2L09uRTjXKHAP4iV5QTkrBNQo/U2yaC2oDHfgYPW9xcK2yFM+VG9m+BpnaUnCO7TT88fPufplOVpTP7VQTcDoF4AQ9q5yUwissxcuJoQZw4N/oGQGlgF/nbl+T8ujETse0/4b2X00EdcBf6LnQcZIkb9nIF5bP3T4gndUhIJxVAQ2ay6kHjB3+d7S8bDBdY6EOeIRe1CQpLb/H4VPF0v5ftIJQDeh+UIaAjF2PAY2R6RRg4oDTYTHO4gYtL4V5xdGNMiDfmgaDYkD7kc4EGnjIqQN+R6+ospQ13KLlRcVZOuDUAQ9jQAAf8gCtULpRDmh/0TOhA9bwIy0/CvNZcb99B7S3lOvhQICfAC6E+VFxAshee77GgEzcmRRoxWyXvwCsRyrvFnmP6kNpr8Nn4F2UeA/gXKRQrlTCjh4w8rbAHJt9cvdzzR43iGX4b6/n/wCFTUue9qN1SwAAAABJRU5ErkJggg=="},K1Wp:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mvHQ"),s=a.n(i),r=a("L1vg"),n=a("+1DV"),o=(a("IuHS"),a("qyXO"),{name:"dateRange",props:{maxDate:{type:String,default:(new Date).toString()},minDate:{type:String,default:(new Date).toString()},start:{type:String,default:""},end:{type:String,default:""}},methods:{openSelect:function(t){var e=this,a="start"===t?this.start:this.end,i={},s=a?new Date(a):new Date;i.year=s.getFullYear()+"",i.month=s.getMonth()+1+"",i.day=s.getDate()+"",Object(n.a)(3,[this.getYears,this.getMonth,this.getDays],{title:this.title,itemHeight:35,relation:[1,1],itemShowCount:6,oneLevelId:i.year,twoLevelId:i.month,threeLevelId:i.day,callback:function(a,i,s){var r=a.id+"-"+("00"+i.id).substr(-2)+"-"+("00"+s.id).substr(-2);"start"===t?e.$emit("handleStart",r):e.$emit("handleEnd",r)}})},getYears:function(t){var e=new Date(this.minDate).getFullYear(),a=new Date(this.maxDate).getFullYear();t(this.createArr(e,a,"年"))},getMonth:function(t,e){t=+t;var a=new Date(this.minDate).getFullYear(),i=new Date(this.minDate).getMonth()+1,s=new Date(this.maxDate).getFullYear(),r=new Date(this.maxDate).getMonth()+1,n=1,o=12;t===a?(n=i,o=12):t===s&&(n=1,o=r),e(this.createArr(n,o,"月"))},getDays:function(t,e,a){t=+t,e=+e;var i=new Date(this.minDate).getFullYear(),s=new Date(this.minDate).getMonth()+1,r=new Date(this.minDate).getDate(),n=new Date(this.maxDate).getFullYear(),o=new Date(this.maxDate).getMonth()+1,c=new Date(this.maxDate).getDate(),l=1,u=this.getMaxDay(t,e);t===i&&e===s?l=r:t===n&&e===o&&(u=c),a(this.createArr(l,u,"日"))},createArr:function(t,e,a){for(var i=[],s=t;s<=e;s++)i.push({id:s+"",value:s+a});return i},getMaxDay:function(t,e){if(t+="",/^(1|3|5|7|8|10|12)$/.test(e+=""))return 31;if(/^(4|6|9|11)$/.test(e))return 30;if(/^2$/.test(e))return t%4==0&&t%100!=0||t%400==0?29:28;throw new Error("month is illegal")}}}),c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"date-wrapper"},[a("div",{staticClass:"date-item",on:{click:function(e){t.openSelect("start")}}},[t.start?a("span",[t._v(t._s(t.start))]):a("span",{staticClass:"placeholder"},[t._v("请选择")])]),t._v("\n  至\n  "),a("div",{staticClass:"date-item",on:{click:function(e){t.openSelect("end")}}},[t.end?a("span",[t._v(t._s(t.end))]):a("span",{staticClass:"placeholder"},[t._v("请选择")])])])},staticRenderFns:[]};var l=a("VU/8")(o,c,!1,function(t){a("dcNm")},"data-v-23f0bfdd",null).exports,u=a("Su9L"),h=a.n(u),d={components:{PVItem:r.a,dateRange:l},data:function(){return{searchData:{},base:"",tabIndex:0,list:[],productList:[],visitorViews:[],productViews:[],isShow:!1,isFixed:!1,isLoading:!1,allLoad:!1,prevDate:"",productSearch:{empNo:"",timeStatus:0,start:"",end:""},visitorSearch:{empNo:"",pageNum:1,pageSize:10}}},created:function(){var t=new Date;this.productSearch.empNo=this.$route.query.empNo,this.visitorSearch.empNo=this.$route.query.empNo,this.prevDate=t.getFullYear()-10+"-"+("00"+(t.getMonth()+1)).substr(-2,2)+"-"+("00"+t.getDate()).substr(-2,2),this.base=sessionStorage.getItem("esm_wxShareUrl")||location.origin,sessionStorage.getItem("productList")?(this.productList=JSON.parse(sessionStorage.getItem("productList")),this.productList=this.productList.filter(function(t){return"0"===t.productCategoryColumn})):this.getProductList(),this.searchData=this.visitorSearch,this.getPVbyVisitor()},activated:function(){window.addEventListener("scroll",this.onScroll)},beforeRouteLeave:function(t,e,a){window.removeEventListener("scroll",this.onScroll),a()},methods:{changeTab:function(t){switch(this.tabIndex=t,t){case 0:this.isShow=!1,this.isFixed=!1,this.searchData=this.visitorSearch,this.visitorViews.length>0?this.list=this.visitorViews:this.getPVbyVisitor();break;case 1:this.searchData=this.productSearch,this.productViews.length>0?this.list=this.productViews:this.getListByTime(0)}},getListByTime:function(t,e,a){this.productViews=[],this.searchData.timeStatus=t,this.searchData.start=e,this.searchData.end=a,this.getPVbyProduct()},getPVbyVisitor:function(){var t=this;this.$touch({url:"/api/v1/business/eStoreVisitor",method:"get",data:this.searchData}).then(function(e){"Y"===e.code?e.body.map(function(e){e.userId&&e.avatar&&e.userName?e.hasArrow=!0:e.hasArrow=!1,e.avatar=e.avatar||h.a,e.userName=e.userName||"微信用户",e.empNo=t.searchData.empNo,e.start=e.visitTime,e.type="visitor",e.from="store",t.list.push(e),t.visitorViews.push(e)}):(t.searchData.pageNum>1&&t.searchData.pageNum--,t.visitorSearch.pageNum=t.searchData.pageNum,t.$Message.error("服务器错误")),t.allLoad=t.searchData.pageNum>1&&e.body.length<t.searchData.pageSize,t.isLoading=!1})},getPVbyProduct:function(){var t=this;this.list=[],this.$touch({url:"/api/v1/business/productVisitor",method:"get",data:this.searchData}).then(function(e){if("Y"===e.code){var a={},i={};e.body.map(function(e){(a=t.productList.find(function(t){return t.productCode===e.productId}))&&(i={empNo:t.searchData.empNo,total:a?e.total:"0",img:t.base+"/RH_MSPSERVER/wechat/productImage/"+a.productCode+"-display.jpg",name:a.productFullName,productId:a.productCode,hasArrow:!0,type:"product",from:"product"},t.productViews.push(i),t.list.push(i))})}else t.$Message.error("服务器错误")})},show:function(){this.searchData.timeStatus=-1,this.isShow=!this.isShow,this.isFixed=!this.isFixed},confirm:function(){this.isShow=!1,this.isFixed=!1,this.getPVbyProduct()},onScroll:function(){if(0===this.tabIndex){var t=document.body.scrollTop||document.documentElement.scrollTop,e=document.body.scrollHeight||document.documentElement.scrollHeight;t+(document.body.clientHeight||document.documentElement.clientHeight||window.innerHeight)>=e&&!this.isLoading&&!this.allLoad&&(this.searchData.pageNum++,this.visitorSearch.pageNum=this.searchData.pageNum,this.isLoading=!0,this.getPVbyVisitor())}},getStart:function(t){this.searchData.start=t},getEnd:function(t){this.searchData.end=t},getProductList:function(){var t=this;this.$http({method:"get",url:"/newWechat/getProducts?agentNo="+this.$route.query.empNo}).then(function(e){200===e.code?(t.productList=e.data,sessionStorage.setItem("productList",s()(t.productList)),t.productList=t.productList.filter(function(t){return"0"===t.productCategoryColumn})):t.$Message.error("服务器错误")}).catch(function(){t.$Message.error("服务器错误")})}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{fixed:t.isFixed}},[i("section",{staticClass:"tabbar"},[i("ul",[i("li",{class:{active:0===t.tabIndex},on:{click:function(e){t.changeTab(0)}}},[t._v("商城访客")]),t._v(" "),i("li",{class:{active:1===t.tabIndex},on:{click:function(e){t.changeTab(1)}}},[t._v("产品访客")])]),t._v(" "),1===t.tabIndex?i("div",{staticClass:"timeBar"},[i("button",{class:{active:0===t.searchData.timeStatus},on:{click:function(e){t.getListByTime(0)}}},[t._v(" 最近一周 ")]),t._v(" "),i("button",{class:{active:1===t.searchData.timeStatus},on:{click:function(e){t.getListByTime(1)}}},[t._v("最近一个月")]),t._v(" "),i("button",{class:{active:2===t.searchData.timeStatus},on:{click:function(e){t.getListByTime(2)}}},[t._v("全部")]),t._v(" "),i("button",{staticClass:"custom",class:{active:-1===t.searchData.timeStatus},on:{click:t.show}},[t._v("\n        时间筛选\n        "),i("img",{staticClass:"icon",attrs:{src:-1===t.searchData.timeStatus?a("1N7z"):a("Ws/l"),alt:"icon"}})])]):t._e()]),t._v(" "),i("section",{staticClass:"content"},[t.list.length>0?t._l(t.list,function(t,e){return i("PVItem",{key:e,attrs:{detail:t}})}):t._e(),t._v(" "),-1===t.searchData.timeStatus&&t.isShow?i("section",{staticClass:"Modal"},[i("div",{staticClass:"modal-wrapper"},[t._v("\n        时间筛选\n        "),i("dateRange",{attrs:{minDate:t.prevDate,start:t.searchData.start,end:t.searchData.end},on:{handleStart:t.getStart,handleEnd:t.getEnd}}),t._v(" "),i("button",{staticClass:"btn-confirm",on:{click:t.confirm}},[t._v("确定")])],1)]):t._e()],2),t._v(" "),t.list.length<1?i("img",{staticClass:"empty",attrs:{src:a("lDQN"),alt:"empty"}}):t._e(),t._v(" "),t.isLoading?i("div",{staticClass:"bottom"},[i("span",{staticClass:"isLoading"},[t._v("加载中...")])]):t._e(),t._v(" "),0===t.tabIndex&&t.allLoad?i("div",{staticClass:"bottom"},[i("span",{staticClass:"allLoad"},[t._v("我是有底线的")])]):t._e()])},staticRenderFns:[]};var p=a("VU/8")(d,g,!1,function(t){a("n3po")},"data-v-339883b2",null);e.default=p.exports},L1vg:function(t,e,a){"use strict";var i=a("mvHQ"),s=a.n(i),r=a("T2Wy"),n={name:"PVItem",props:{detail:{type:Object,default:function(){return{}}}},filters:{getTime:function(t){var e=parseInt(t);return Object(r.a)("yyyy-MM-dd hh:mm:ss",e)}},methods:{changeRouter:function(){switch(this.$route.path){case"/pageview":console.log(this.detail),"product"===this.detail.type?this.$router.push({name:"productPV",query:{detail:s()(this.detail)}}):"visitor"===this.detail.type&&this.detail.hasArrow&&this.$router.push({name:"visitorPV",query:{detail:s()(this.detail)}});break;case"/productPV":this.$router.push({name:"visitorPV",query:{detail:s()(this.detail)}})}}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-wrapper",on:{click:t.changeRouter}},["visitor"===t.detail.type?[i("img",{staticClass:"avatar",attrs:{src:t.detail.avatar,alt:"avatar"}}),t._v(" "),i("div",{staticClass:"detail-wrapper"},[i("p",{staticClass:"name"},[t._v(t._s(t.detail.userName))]),t._v(" "),t.detail.interval?i("p",[t._v(t._s(t._f("getTime")(t.detail.start))+" 访问时长："+t._s(t.detail.interval))]):i("p",[t._v(t._s(t.detail.visitTime))])])]:t._e(),t._v(" "),"product"===t.detail.type?[i("img",{staticClass:"img",attrs:{src:t.detail.img,alt:"product"}}),t._v(" "),i("div",{staticClass:"detail-wrapper"},[i("p",{staticClass:"name"},[t._v(t._s(t.detail.name))]),t._v(" "),t.detail.interval?i("p",[t._v(t._s(t._f("getTime")(t.detail.start))+" 访问时长："+t._s(t.detail.interval))]):i("p",[t._v("累计"+t._s(t.detail.total)+"人访问过")])])]:t._e(),t._v(" "),t.detail.hasArrow?i("img",{staticClass:"arrow",attrs:{src:a("83WB"),alt:"arrow"}}):t._e()],2)},staticRenderFns:[]};var c=a("VU/8")(n,o,!1,function(t){a("vnob")},"data-v-76b9b7af",null);e.a=c.exports},T2Wy:function(t,e,a){"use strict";e.a=function(t,e){var a=new Date(e),i={"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length)));for(var s in i)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,("00"+i[s]).substr(-2,2)));return t}},"Ws/l":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAfxJREFUSA3tVb1LQlEU76mIEQYOLubYGASpLyQDoTCsocYiiKihhoa2vuhPqKXFGnKqBpcaGno1vMwQ/KCp/6BsM6pXyPOh/Y48RR/vw4+a6sDh3nvO7/zOved+MR6Pp9z1i2IBdw7qgp4yDPP0E7nK5XIfeOahLxZIWJKkW5AP2my2tUQi8dpJkkAg4CgUCnEkeTObzWGGyFiWHS2VShy6D3CMZ7PZr3aS+P3+7mKxeIPYIUx4Ip1Ox01ElEql7tDMQlk4YsFgkErXklCMKIoxBA1jknNETgSVBNTJZDIXaFbgnBQEIYq2sjryGQlhEXMM3BT6q6jAuWaMz+fbopPl9Xr3NUEKB7B7csyOwtVlVhpyuVzC5XI5YF93u90ijZWY+jGINzDeRWkPUIXtep9mn5aMwBN5VstaQMx8ScacaZW0tgf1JJgNXb5F6BX0ECQzaBsE5NMwHAF7DfIFOaYBQwPdjQyFQj35fJ4HbgAkvdi8IgXRicGmfsD2aLfbgzzPC2RXE9UVVIEcx32ifwkiG4hq++V0Ok1kI58eOfHoJiBAp/KfwLCCf6BEOI4S1QHnvt+wHioAwxJZrdYobuk7YiNIpnsxVfiN70EymXwG8SZ0BB/TmBqJns1wBRSMVzKCVQTwidBv1ZI09XPJD9l9S8wyuKkVtENcjfkGZkbJ/DcDvGcAAAAASUVORK5CYII="},dcNm:function(t,e){},lDQN:function(t,e,a){t.exports=a.p+"static/img/empty.c93938a.png"},n3po:function(t,e){},vnob:function(t,e){}});
//# sourceMappingURL=6.41ae54aee7a8c96b6880.js.map