webpackJsonp([7],{"5zde":function(i,t,e){e("zQR9"),e("qyJz"),i.exports=e("FeBl").Array.from},FISZ:function(i,t){},NHxp:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAEOCAMAAABPbwmXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NkExQUEyOTU5QkIxMUU4OTEzQkQyNjE3ODkxQ0ZFNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NkExQUEyQTU5QkIxMUU4OTEzQkQyNjE3ODkxQ0ZFNCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY2QTFBQTI3NTlCQjExRTg5MTNCRDI2MTc4OTFDRkU0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY2QTFBQTI4NTlCQjExRTg5MTNCRDI2MTc4OTFDRkU0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PV3MGAAAAAlQTFRFx8fHpaWl////rQE39AAAAW1JREFUeNrs1MENwCAQA0Ff+i+aeyUUgAREsxVY83BKU6lHbzhw4MCBAwcOHDhw4MCBAwcOHDhw4MAhHDhw4MCBAwcOHDhw4MCBAwcOHDhw4BAOHDhw4MCBAwcOHDhw4MCBAwcOHDhwCAcOHDhw4MCBAweOdDi+GR0OHDhw4MCBAwcOHDhw4MCBAwcOHDhw4MCBAwcOHDhw4MCBAwcOHDhw4MCBAwcOHDhw4MCBAwcOHDhw4MCBAwcOHDhw4MCB44ccqa0FBw4cd3K4Uhw4cODAgQMHDhw4cODAgQMHDhw4cODAgQMHDhw4cODAgQMHDhw4cODAgQMHDhw4cODAgQMHDhw4cODAgQMHDhw4cODAgQPH8tLhOC4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgEA4cOHDgwIEDBw4cOHDgwIEDBw4cOHAIBw4cOHDgwIEDBw4cOHDgwIEDBw4cOIQDBw4cOHDgwIFjL4emhgADAPi4MXM1j1sHAAAAAElFTkSuQmCC"},Spjs:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("mw3O"),a=e.n(n),s=e("c/Tr"),o=e.n(s),l=e("//Fk"),c=e.n(l),r={props:{size:{type:String,default:"big"}},name:"noneUpLoadImg",methods:{inputChange:function(i){var t=this,e=i.target.files;if(e.length){for(var n=!1,a=0;a<e.length;a++)e[a].size>10485760&&(n=!0);if(n)return void alert("上传的文件不能大于10M,请重新选择");c.a.all(o()(e).map(this.toDataUrl)).then(function(i){t.$emit("on-fileChange",i)}),i.target.value=""}},toDataUrl:function(i){var t=this;return new c.a(function(e,n){var a=new FileReader;a.onload=function(){var i=new Image;i.onload=function(){e(t.compress(i,i.width,i.height,.4))},i.src=a.result},a.onerror=function(){n()},a.readAsDataURL(i)})},compress:function(i,t,e,n){var a=void 0;return(a=document.createElement("canvas")).width=t,a.height=e,a.getContext("2d").drawImage(i,0,0,t,e),a.toDataURL("image/jpeg",n)}}},h={render:function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{staticClass:"wrap"},[n("label",[n("img",{class:{big:"big"===i.size},attrs:{src:e("NHxp")}}),i._v(" "),n("input",{attrs:{type:"file",accept:"image/*",multiple:""},on:{change:function(t){i.inputChange(t)}}})])])},staticRenderFns:[]};var g={name:"mineShow",data:function(){return{isEdit:!1,imgList:[],delList:[],isClickEdit:!0,chooseSrc:"",isFull:!1}},components:{upLoadImg:e("VU/8")(r,h,!1,function(i){e("FISZ")},"data-v-76e336e0",null).exports},beforeRouteLeave:function(i,t,e){this.Athena.showTopRight("gone"),this.isFull?(this.isFull=!1,e(!1)):e(!0)},activated:function(){var i=this;this.imgList=[],this.isEdit=!1,this.isClickEdit=!0,this.Athena.register("app","call","mineSave",this.save,!0),this.Athena.register("app","call","mineEdit",function(){i.isClickEdit=!0,i.edit(),i.Athena.showTopRight("save",{saveCall:"app.call.mineSave"})},!0),this.Athena.showTopRight("edit",{editCall:"app.call.mineEdit"}),this.initData()},watch:{imgList:function(i){this.isClickEdit||(i.length?this.Athena.showTopRight("edit",{editCall:"app.call.mineEdit"}):this.Athena.showTopRight("gone"))}},methods:{initData:function(){var i=this;this.$spin.loading({loadingMsg:"加载中"}),this.$http({url:"/newWechat/sales/apply/getPersonalPictureDisplay",data:{agentNo:sessionStorage.getItem("agentNo"),imageType:"1"}}).then(function(t){i.imgList=t.listPersonalPictureDTO.filter(function(i){return"1"===i.imageType})||[]}).then(function(){i.$spin.remove()}).catch(function(){alert("服务器出错"),i.$spin.remove()})},fileChange:function(i){this.upload(i.slice(0,8-this.imgList.length)),this.imgList=this.imgList.concat(i).slice(0,8)},del:function(i,t){var e=i.ppId;e&&this.delList.push(e),this.imgList.splice(t,1)},edit:function(){this.isEdit=!0},save:function(){var i=this;if(this.delList.length){var t={};t.agentNo=sessionStorage.getItem("agentNo"),this.delList.forEach(function(i,e){t["listPersonalPictureDTO["+e+"].operationType"]="3",t["listPersonalPictureDTO["+e+"].ppId"]=i}),this.$spin.loading({loadingMsg:"正在保存"}),this.$http({url:"/newWechat/sales/apply/savePersonalBusinessCard",method:"post",data:a.a.stringify(t)},!1).then(function(t){"Y"===t.flag?(i.$spin.loadend({loadedMsg:"保存成功"}),i.isEdit=!1,i.Athena.showTopRight("edit",{editCall:"app.call.mineEdit"}),setTimeout(function(){i.initData()},300)):(i.$spin.remove(),alert("保存失败,请重试!"))}).catch(function(t){i.$spin.remove(),console.log(t)})}},getImageType:function(i){return i.split(";")[0].split("/")[1]},preview:function(i,t){this.Athena.sendData("showImage",{url:sessionStorage.getItem("esm_wxShareUrl")+"/",path:"RH_MSPSERVER/newWechat/sales/apply/getPictureDisplay?ppId="+i,ppId:i})},closedFull:function(){this.isFull=!1},upload:function(i){var t=this,e={};e.agentNo=sessionStorage.getItem("agentNo"),i.forEach(function(i,n){e["listPersonalPictureDTO["+n+"].imageType"]="1",e["listPersonalPictureDTO["+n+"].operationType"]="0",e["listPersonalPictureDTO["+n+"].imageCategory"]=t.getImageType(i),e["listPersonalPictureDTO["+n+"].stringImageData"]=i}),this.$spin.loading({loadingMsg:"正在上传"}),this.$http({url:"/newWechat/sales/apply/savePersonalBusinessCard",method:"post",data:a.a.stringify(e)},!1).then(function(i){"Y"===i.flag?(t.$spin.loadend({loadedMsg:"上传成功"}),setTimeout(function(){t.initData()},300)):(t.$spin.remove(),alert("上传失败"))}).catch(function(i){t.$spin.remove(),console.log(i)})}}},d={render:function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{staticClass:"mine-wrap"},[0===i.imgList.length?n("div",{directives:[{name:"show",rawName:"v-show",value:!i.isEdit,expression:"!isEdit"}],staticClass:"noneUpload"},[n("upLoadImg",{on:{"on-fileChange":i.fileChange}}),i._v(" "),n("span",[i._v("还未上传照片，点击 + 上传")])],1):n("div",{staticClass:"imgWrap"},[i._l(i.imgList,function(t,a){return n("div",{key:a,style:{"background-image":"url("+(t.stringImageData?t.stringImageData:t)+")"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:i.isEdit,expression:"isEdit"}],staticClass:"del",attrs:{src:e("wKtR")},on:{click:function(e){i.del(t,a)}}}),i._v(" "),n("span",{staticClass:"view",on:{click:function(e){i.preview(t.ppId,t.stringImageData?t.stringImageData:t)}}})])}),i._v(" "),i.imgList.length<8?n("upLoadImg",{directives:[{name:"show",rawName:"v-show",value:!i.isEdit,expression:"!isEdit"}],staticStyle:{border:"none"},attrs:{size:"small"},on:{"on-fileChange":i.fileChange}}):i._e()],2),i._v(" "),i.isFull?n("div",{staticClass:"full-image",on:{click:function(t){i.closedFull()}}},[n("img",{attrs:{src:i.chooseSrc}})]):i._e()])},staticRenderFns:[]};var A=e("VU/8")(g,d,!1,function(i){e("jt+8")},"data-v-463b8e7b",null);t.default=A.exports},"c/Tr":function(i,t,e){i.exports={default:e("5zde"),__esModule:!0}},fBQ2:function(i,t,e){"use strict";var n=e("evD5"),a=e("X8DO");i.exports=function(i,t,e){t in i?n.f(i,t,a(0,e)):i[t]=e}},"jt+8":function(i,t){},qyJz:function(i,t,e){"use strict";var n=e("+ZMJ"),a=e("kM2E"),s=e("sB3e"),o=e("msXi"),l=e("Mhyx"),c=e("QRG4"),r=e("fBQ2"),h=e("3fs2");a(a.S+a.F*!e("dY0y")(function(i){Array.from(i)}),"Array",{from:function(i){var t,e,a,g,d=s(i),A="function"==typeof this?this:Array,p=arguments.length,u=p>1?arguments[1]:void 0,w=void 0!==u,D=0,m=h(d);if(w&&(u=n(u,p>2?arguments[2]:void 0,2)),void 0==m||A==Array&&l(m))for(e=new A(t=c(d.length));t>D;D++)r(e,D,w?u(d[D],D):d[D]);else for(g=m.call(d),e=new A;!(a=g.next()).done;D++)r(e,D,w?o(g,u,[a.value,D],!0):a.value);return e.length=D,e}})},wKtR:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NkE4QUYyMTU5QkIxMUU4OTEzQkQyNjE3ODkxQ0ZFNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NkE4QUYyMjU5QkIxMUU4OTEzQkQyNjE3ODkxQ0ZFNCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY2QThBRjFGNTlCQjExRTg5MTNCRDI2MTc4OTFDRkU0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY2QThBRjIwNTlCQjExRTg5MTNCRDI2MTc4OTFDRkU0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+tdBnUgAAAEtQTFRFzzBH5Y6bzCM74HyK4HuJzzFH+efq1k5i/vn6yhw1+ujq1Ehc/vz97re/99/i7rjA/vv8+unryBUv1Uld1UpeyyI6////yBMt////iZAVJgAAABl0Uk5T////////////////////////////////AAE0CrcAAADpSURBVHjajNTZEoMgDAXQKCiKWpeWpv//pWWtKEtznxw9M2hMAp8o7yjxfciKm4PYDCsXoBQIvg6xgpNI1uIvLdtPBsHMzYiXjM0cFHjTT5jk2XsFzjwAM4GHUw71WaNVH5B+nwkLec1GgTmswWIac6BBciyjcfeIYSXMIF3ntoZaXXuNFqxmtYjXEbdI2OtDJTnsA2GRK2SXtkrnCmqRqiNFR6TjRP3rBL0EpGISfgvpB/9rFekRoem02ortO/n2pQ0CbaRKwznFw2nVlo75dhnz7MKQ94URVs8SVs+SWz3EJVZbh18BBgA4BWwKhTwDFAAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=7.48139151ed674fc6a03f.js.map