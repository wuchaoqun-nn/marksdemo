(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a07b266"],{3747:function(e,t,n){"use strict";var c=n("975b"),o=n("4ef5"),a=(n("3b18"),n("f64c")),r=(n("b0c0"),n("7a23")),i=Object(r["createElementVNode"])("span",{class:"pannel-item-label"},"数据管理:",-1),l=Object(r["createTextVNode"])("清除"),d=Object(r["createTextVNode"])(" 保存 "),u=Object(r["createTextVNode"])(" 打开 "),b=Object(r["defineComponent"])({setup:function(e){var t=window.mapWork,n=function(){t.btnClear()},b=function(){t.btnExpFile()},f=function(e){return!1},p=function(e){var n=e.file,c=n.name,o=null===c||void 0===c?void 0:c.substring(c.lastIndexOf(".")+1,c.length).toLowerCase();"json"!=o&&a["a"].error("文件类型不合法,请选择json格式标注文件！"),t.btnImpFile(n)},s=Object(r["ref"])([]);return function(e,t){var a=Object(r["resolveComponent"])("mars-button"),j=Object(r["resolveComponent"])("a-button"),O=Object(r["resolveComponent"])("a-upload"),h=Object(r["resolveComponent"])("a-space");return Object(r["openBlock"])(),Object(r["createBlock"])(h,null,{default:Object(r["withCtx"])((function(){return[i,Object(r["createVNode"])(a,{onClick:n},{default:Object(r["withCtx"])((function(){return[l]})),_:1}),Object(r["createVNode"])(a,{onClick:b,title:"保存GeoJSON"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Object(r["unref"])(o["a"])),d]})),_:1}),Object(r["createVNode"])(O,{multiple:!1,name:"file",accept:"json,geojson","file-list":s.value,showUploadList:!1,supportServerRender:!0,beforeUpload:f,onChange:p},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{title:"打开GeoJSON"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Object(r["unref"])(c["a"])),u]})),_:1})]})),_:1},8,["file-list"])]})),_:1})}}});const f=b;t["a"]=f},"4e4b":function(e,t,n){"use strict";n("e64d")},6606:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=n("7544"),a=n("3747"),r=n("bc30"),i=n("a9ad"),l={class:"f-mb"},d={class:"f-mb"},u=Object(c["createElementVNode"])("span",{class:"pannel-item-label"},"数据维护:",-1),b=Object(c["createTextVNode"])("图上标绘"),f=Object(c["createTextVNode"])("是否编辑"),p=Object(c["defineComponent"])({setup:function(e){var t=window.mapWork,n=Object(c["reactive"])({enabledShowHide:!0,enabledPopup:!0,enabledTooltip:!1,enabledRightMenu:!0,enabledEdit:!1}),p=function(){t.bindEdit(n.enabledEdit)},s=function(){t.btnDrawModel()};return function(e,t){var j=Object(c["resolveComponent"])("mars-button"),O=Object(c["resolveComponent"])("a-checkbox"),h=Object(c["resolveComponent"])("a-space");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(o["a"],{class:"infoView"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",l,[Object(c["createVNode"])(i["a"])]),Object(c["createElementVNode"])("div",d,[Object(c["createVNode"])(h,null,{default:Object(c["withCtx"])((function(){return[u,Object(c["createVNode"])(j,{onClick:s},{default:Object(c["withCtx"])((function(){return[b]})),_:1}),Object(c["createVNode"])(O,{checked:Object(c["unref"])(n).enabledEdit,"onUpdate:checked":t[0]||(t[0]=function(e){return Object(c["unref"])(n).enabledEdit=e}),onChange:p},{default:Object(c["withCtx"])((function(){return[f]})),_:1},8,["checked"])]})),_:1})]),Object(c["createVNode"])(a["a"])]})),_:1}),Object(c["createVNode"])(r["a"])],64)}}});const s=p;t["default"]=s},7544:function(e,t,n){"use strict";var c=n("246f"),o=n("7a23"),a={class:"title"},r=Object(o["defineComponent"])({props:{type:{type:String,default:"pannel"},warpper:{type:String,default:"sanbox-warpper"},title:{type:String,default:""},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup:function(e,t){var n=t.emit,r=e,i=Object(o["ref"])(),l=function(){n("update:visible",!1)};function d(e){var t=e.clientX,n=e.clientY;function c(e){var c=i.value,a=e.clientX-t,r=e.clientY-n;o(c,c.offsetLeft+a,c.offsetTop+r,e)}function o(e,c,o,a){var i=document.getElementById(r.warpper);c>0&&c+e.offsetWidth<i.offsetWidth&&(e.style.left=c+"px",t=a.clientX),o>0&&o+e.offsetHeight<i.offsetHeight&&(e.style.top=o+"px",n=a.clientY)}window.onmousemove=function(e){e.preventDefault(),c(e)},window.onmouseup=function(e){c(e),window.onmousemove=null,window.onmouseup=null}}return function(t,n){return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["pannel fadeInRight",{"pannel-model":"model"===r.type}]),ref_key:"pannelBox",ref:i},["model"===r.type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,ref:"modelHeader",class:"pannel-model__header",onMousedown:d},[Object(o["createElementVNode"])("span",a,Object(o["toDisplayString"])(e.title),1),Object(o["createVNode"])(Object(o["unref"])(c["a"]),{onClick:l,class:"close-btn"})],544)):Object(o["createCommentVNode"])("",!0),Object(o["renderSlot"])(t.$slots,"default")],2)),[[o["vShow"],"pannel"===r.type||e.visible]])}}}),i=(n("4e4b"),n("6b0d")),l=n.n(i);const d=l()(r,[["__scopeId","data-v-b885d716"]]);t["a"]=d},"92f9":function(e,t,n){"use strict";n("af22")},a9ad:function(e,t,n){"use strict";var c=n("7a23"),o=Object(c["createElementVNode"])("span",{class:"pannel-item-label"},"图层状态:",-1),a=Object(c["createTextVNode"])("显示隐藏"),r=Object(c["createTextVNode"])("Popup绑定"),i=Object(c["createTextVNode"])("Tooltip"),l=Object(c["createTextVNode"])("右键绑定"),d=Object(c["defineComponent"])({setup:function(e){var t=window.mapWork,n=Object(c["reactive"])({enabledShowHide:!0,enabledPopup:!0,enabledTooltip:!1,enabledRightMenu:!0}),d=function(){t.bindShowHide(n.enabledShowHide)},u=function(){t.bindPopup(n.enabledPopup)},b=function(){t.bindTooltip(n.enabledTooltip)},f=function(){t.bindRightMenu(n.enabledRightMenu)};return function(e,t){var p=Object(c["resolveComponent"])("a-checkbox"),s=Object(c["resolveComponent"])("a-space");return Object(c["openBlock"])(),Object(c["createBlock"])(s,null,{default:Object(c["withCtx"])((function(){return[o,Object(c["createVNode"])(p,{checked:Object(c["unref"])(n).enabledShowHide,"onUpdate:checked":t[0]||(t[0]=function(e){return Object(c["unref"])(n).enabledShowHide=e}),onChange:d},{default:Object(c["withCtx"])((function(){return[a]})),_:1},8,["checked"]),Object(c["createVNode"])(p,{checked:Object(c["unref"])(n).enabledPopup,"onUpdate:checked":t[1]||(t[1]=function(e){return Object(c["unref"])(n).enabledPopup=e}),onChange:u},{default:Object(c["withCtx"])((function(){return[r]})),_:1},8,["checked"]),Object(c["createVNode"])(p,{checked:Object(c["unref"])(n).enabledTooltip,"onUpdate:checked":t[2]||(t[2]=function(e){return Object(c["unref"])(n).enabledTooltip=e}),onChange:b},{default:Object(c["withCtx"])((function(){return[i]})),_:1},8,["checked"]),Object(c["createVNode"])(p,{checked:Object(c["unref"])(n).enabledRightMenu,"onUpdate:checked":t[3]||(t[3]=function(e){return Object(c["unref"])(n).enabledRightMenu=e}),onChange:f},{default:Object(c["withCtx"])((function(){return[l]})),_:1},8,["checked"])]})),_:1})}}});const u=d;t["a"]=u},af22:function(e,t,n){},bc30:function(e,t,n){"use strict";var c=n("7a23"),o=Object(c["createTextVNode"])("定位至山区"),a=Object(c["createTextVNode"])("定位至模型");function r(e,t,n,r,i,l){var d=Object(c["resolveComponent"])("mars-button"),u=Object(c["resolveComponent"])("a-space"),b=Object(c["resolveComponent"])("pannel");return Object(c["openBlock"])(),Object(c["createBlock"])(b,{class:"localBtn"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(d,{onClick:e.centerAtTerrain},{default:Object(c["withCtx"])((function(){return[o]})),_:1},8,["onClick"]),Object(c["createVNode"])(d,{onClick:e.centerAtModel},{default:Object(c["withCtx"])((function(){return[a]})),_:1},8,["onClick"])]})),_:1})]})),_:1})}n("d81d");var i=n("7544"),l=Object(c["defineComponent"])({components:{Pannel:i["a"]},setup:function(){var e=window.mapWork,t=function(){e.map.setCameraView({lat:30.859414,lng:116.28709,alt:8617,heading:18,pitch:-28})},n=function(){e.centerAtModel(),e.map.setCameraView({lng:114.019768,lat:22.627935,alt:80.6,heading:359,pitch:-34})};return{centerAtTerrain:t,centerAtModel:n}}}),d=(n("92f9"),n("6b0d")),u=n.n(d);const b=u()(l,[["render",r],["__scopeId","data-v-a6077f40"]]);t["a"]=b},d81d:function(e,t,n){"use strict";var c=n("23e7"),o=n("b727").map,a=n("1dde"),r=a("map");c({target:"Array",proto:!0,forced:!r},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},e64d:function(e,t,n){}}]);