(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0213e376"],{"067f":function(e,t,n){"use strict";n("b4a9")},"458c":function(e,t,n){"use strict";n.r(t);var c=n("f271"),o=n("7a23"),a=n("7544"),l=function(e){return Object(o["pushScopeId"])("data-v-3e65ef6b"),e=e(),Object(o["popScopeId"])(),e},r={class:"f-mb"},u=l((function(){return Object(o["createElementVNode"])("span",{class:"pannel-item-label"},"地表透明度:",-1)})),i=Object(o["createTextVNode"])("是否开启"),d={class:"f-mb"},b=l((function(){return Object(o["createElementVNode"])("span",{class:"pannel-item-label"},"开挖深度",-1)})),f=Object(o["createTextVNode"])("是否开挖"),O={class:"f-mb"},j=Object(o["createTextVNode"])("矩形"),p=Object(o["createTextVNode"])("多边形"),s=Object(o["createTextVNode"])("清除"),v={class:"f-mb"},m=l((function(){return Object(o["createElementVNode"])("span",{class:"pannel-item-label"},"裁剪距离",-1)})),C={class:"f-mb"},h=Object(o["createTextVNode"])("切顶"),V=Object(o["createTextVNode"])("切底"),w=Object(o["createTextVNode"])("内挖"),N=Object(o["createTextVNode"])("外切"),x={class:"f-mb"},k=Object(o["createTextVNode"])("按线切"),_=Object(o["createTextVNode"])("清除"),g=Object(o["defineComponent"])({setup:function(e){var t=window.mapWork,n=Object(o["ref"])(["1","2","3"]),l=Object(o["reactive"])({enabledGround:!1,enabledClipping:!0}),g=Object(o["ref"])(.5),y=Object(o["ref"])(30),E=Object(o["ref"])(0);t.eventTarget.on("loadOk",(function(){t.terrainClips(y.value)}));var T=function(){t.chkUnderground(l.enabledGround,g.value)},B=function(){t.alphaChange(g.value)},S=function(){t.chkClippingPlanes(l.enabledClipping)},I=function(){t.heightChange(y.value)},U=function(){t.drawExtent()},G=function(){t.drawPolygon()},P=function(){t.clearWJ()},W=function(){t.distanceChange(E.value)},D=function(){t.clipTop()},H=function(){t.clipBottom()},J=function(){t.clipLine()},K=function(){t.clipPoly()},X=function(){t.clipPoly2()},Y=function(){t.clearClip()};return function(e,t){var L=Object(o["resolveComponent"])("a-slider"),z=Object(o["resolveComponent"])("a-checkbox"),M=Object(o["resolveComponent"])("a-space"),R=Object(o["resolveComponent"])("a-collapse-panel"),$=Object(o["resolveComponent"])("mars-input-number"),q=Object(o["resolveComponent"])("mars-button"),A=Object(o["resolveComponent"])("a-collapse");return Object(o["openBlock"])(),Object(o["createBlock"])(a["a"],{class:"infoView"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(A,{activeKey:n.value,"onUpdate:activeKey":t[5]||(t[5]=function(e){return n.value=e})},{expandIcon:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(Object(o["unref"])(c["a"]))]})),default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(R,{key:"1",header:"地下模式"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",r,[Object(o["createVNode"])(M,null,{default:Object(o["withCtx"])((function(){return[u,Object(o["createVNode"])(L,{onChange:B,min:0,max:1,step:.1,value:g.value,"onUpdate:value":t[0]||(t[0]=function(e){return g.value=e})},null,8,["step","value"]),Object(o["createVNode"])(z,{onChange:T,checked:Object(o["unref"])(l).enabledGround,"onUpdate:checked":t[1]||(t[1]=function(e){return Object(o["unref"])(l).enabledGround=e})},{default:Object(o["withCtx"])((function(){return[i]})),_:1},8,["checked"])]})),_:1})])]})),_:1}),Object(o["createVNode"])(R,{key:"2",header:"地下开挖"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",d,[Object(o["createVNode"])(M,null,{default:Object(o["withCtx"])((function(){return[b,Object(o["createVNode"])($,{onChange:I,min:-500,max:999,step:1,value:y.value,"onUpdate:value":t[2]||(t[2]=function(e){return y.value=e})},null,8,["value"]),Object(o["createVNode"])(z,{onChange:S,checked:Object(o["unref"])(l).enabledClipping,"onUpdate:checked":t[3]||(t[3]=function(e){return Object(o["unref"])(l).enabledClipping=e})},{default:Object(o["withCtx"])((function(){return[f]})),_:1},8,["checked"])]})),_:1})]),Object(o["createElementVNode"])("div",O,[Object(o["createVNode"])(M,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(q,{onClick:U},{default:Object(o["withCtx"])((function(){return[j]})),_:1}),Object(o["createVNode"])(q,{onClick:G},{default:Object(o["withCtx"])((function(){return[p]})),_:1}),Object(o["createVNode"])(q,{onClick:P},{default:Object(o["withCtx"])((function(){return[s]})),_:1})]})),_:1})])]})),_:1}),Object(o["createVNode"])(R,{key:"3",header:"模型裁剪"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",v,[Object(o["createVNode"])(M,null,{default:Object(o["withCtx"])((function(){return[m,Object(o["createVNode"])(L,{onChange:W,min:-50,max:50,step:.1,value:E.value,"onUpdate:value":t[4]||(t[4]=function(e){return E.value=e})},null,8,["step","value"])]})),_:1})]),Object(o["createElementVNode"])("div",C,[Object(o["createVNode"])(M,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(q,{onClick:D},{default:Object(o["withCtx"])((function(){return[h]})),_:1}),Object(o["createVNode"])(q,{onClick:H},{default:Object(o["withCtx"])((function(){return[V]})),_:1}),Object(o["createVNode"])(q,{onClick:K},{default:Object(o["withCtx"])((function(){return[w]})),_:1}),Object(o["createVNode"])(q,{onClick:X},{default:Object(o["withCtx"])((function(){return[N]})),_:1})]})),_:1})]),Object(o["createElementVNode"])("div",x,[Object(o["createVNode"])(M,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(q,{onClick:J},{default:Object(o["withCtx"])((function(){return[k]})),_:1}),Object(o["createVNode"])(q,{onClick:Y},{default:Object(o["withCtx"])((function(){return[_]})),_:1})]})),_:1})])]})),_:1})]})),_:1},8,["activeKey"])]})),_:1})}}}),y=(n("067f"),n("6b0d")),E=n.n(y);const T=E()(g,[["__scopeId","data-v-3e65ef6b"]]);t["default"]=T},"4e4b":function(e,t,n){"use strict";n("e64d")},7544:function(e,t,n){"use strict";var c=n("246f"),o=n("7a23"),a={class:"title"},l=Object(o["defineComponent"])({props:{type:{type:String,default:"pannel"},warpper:{type:String,default:"sanbox-warpper"},title:{type:String,default:""},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup:function(e,t){var n=t.emit,l=e,r=Object(o["ref"])(),u=function(){n("update:visible",!1)};function i(e){var t=e.clientX,n=e.clientY;function c(e){var c=r.value,a=e.clientX-t,l=e.clientY-n;o(c,c.offsetLeft+a,c.offsetTop+l,e)}function o(e,c,o,a){var r=document.getElementById(l.warpper);c>0&&c+e.offsetWidth<r.offsetWidth&&(e.style.left=c+"px",t=a.clientX),o>0&&o+e.offsetHeight<r.offsetHeight&&(e.style.top=o+"px",n=a.clientY)}window.onmousemove=function(e){e.preventDefault(),c(e)},window.onmouseup=function(e){c(e),window.onmousemove=null,window.onmouseup=null}}return function(t,n){return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["pannel fadeInRight",{"pannel-model":"model"===l.type}]),ref_key:"pannelBox",ref:r},["model"===l.type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,ref:"modelHeader",class:"pannel-model__header",onMousedown:i},[Object(o["createElementVNode"])("span",a,Object(o["toDisplayString"])(e.title),1),Object(o["createVNode"])(Object(o["unref"])(c["a"]),{onClick:u,class:"close-btn"})],544)):Object(o["createCommentVNode"])("",!0),Object(o["renderSlot"])(t.$slots,"default")],2)),[[o["vShow"],"pannel"===l.type||e.visible]])}}}),r=(n("4e4b"),n("6b0d")),u=n.n(r);const i=u()(l,[["__scopeId","data-v-b885d716"]]);t["a"]=i},b4a9:function(e,t,n){},e64d:function(e,t,n){}}]);