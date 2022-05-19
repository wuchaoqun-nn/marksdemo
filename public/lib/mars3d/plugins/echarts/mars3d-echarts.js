/**
 * Mars3D平台插件,结合echarts可视化功能插件  mars3d-echarts
 *
 * 版本信息：v3.3.9
 * 编译日期：2022-05-18 19:45:36
 * 版权所有：Copyright by 火星科技  http://mars3d.cn
 * 使用单位：免费公开版 ，2022-02-01
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.echarts || require('echarts')), (window.mars3d || require('mars3d'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'echarts', 'mars3d'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["mars3d-echarts"] = {}, global.echarts, global.mars3d));
})(this, (function (exports, echarts, mars3d) { 
'use strict';var _0x33f794=_0x1a75;function _0x4736(){var _0x59bcee=['DMfSDwu','BgvMDa','C2nOzwr1BgvY','Cg9ZAxrPB25xqW','Cg9ZDfjLBMrLCG','AgfZt3DUuhjVCgvYDhK','C3r5Bgu','CMvTB3zLq2HPBgq','x2vJAgfYDhnjBNn0yw5Jzq','x21VDw50zwriB29R','u2nLBMvuCMfUC2zVCM1Z','x21HCNmZzf9Zy2vUzq','Bwf4','u3vWzxiGzxHWCMvZC2LVBIbTDxn0igvPDgHLCIbIzsbUDwXSig9YigeGzNvUy3rPB24','CgfPBNrLCG','qMfZzuXHEwvY','y2fSBa','mJyYntK2m01msvv4Eq','x21HCa','zgvMAw5LuhjVCgvYDhK','tgf5zxjvDgLS','BwfYCZnKlwvJAgfYDhm','z2v0','CMvTB3zLrxzLBNrmAxn0zw5LCG','z2v0vMLLD1jLy3q','nJa5mJe3DwPnveXX','zxH0zw5Kq29TCg9Uzw50tw9KzwW','z2v0v2LKDgG','nda1ody2m0vqs0zfuG','mJm2ota2ogTUDeXVtG','z2v0uhjVDg90ExbLt2y','x3nLDe9WDgLVBNniB29R','zM9YrwfJAa','y2XPzw50sgvPz2H0','mLPWsgziBq','zNvUy3rPB24','z3jHCgHPyW','zML4zwrizwLNAhq','z2v0sgvPz2H0','x19WCM90B19F','yxbWzw5Kq2HPBgq','C2v0uhjVDg90ExbLt2y','mZm3nZC3mLj5wujeBW','nde0DxzZqLzI','B25cEvf1zxj5','x19LC01VzhvSzq','CMvZAxPL','ChjVDg90ExbL','Bgf5zxi','x2nYzwf0zunOyxj0t3zLCMXHEq','zgvMyxvSDa','DMfSDwvpzG','BwLU','x2vJAgfYDhndB250ywLUzxi','yxbP','y29VCMrPBMf0zvn5C3rLBq','y2XPzw50v2LKDgG','rgvYAxzLzcbJB25ZDhj1y3rVCNmGBwf5ig9UBhKGCMv0DxjUig9IAMvJDcbVCIb1BMrLzMLUzwq','zgL2','Aw5PDa','B2zM','qM91BMrPBMDszwn0','C2v0twfWt2zMC2v0','BwfYCZnKtwfWuM9HBq','z2v0qK1HCa','y2fUDMfZ','DxbKyxrLtgf5B3v0','y2XHBxbuB0DYB3vUza','zgf0yq','x21HCe9MzNnLDa','zNjVBurLz3jLzxm','x3nOB3DiB29R','DMLZAwjPBgL0Eq','DMLZAwjSzq','x2fWAq','Dg9W','x19TyxbpzMzZzxq','AgLKzgvU','mJC1mJy0rK9Nse9U','zwnOyxj0CW','B3b0Aw9UCW','CMvNAxn0zxjdB29YzgLUyxrLu3LZDgvT','C2v0rwnOyxj0C09WDgLVBG','zwfJAfnLCMLLCW','z2v0uMvJDgfUz2XL','nteYmZmXnu1TBurgAa','Bw9Kzq','zgLTzw5ZAw9UCW','zw51BwvYywjSzq','ywjZB2X1Dgu','mhb4','zwnOyxj0C0rLChrOvgvZDa','x2fKzgvKsg9VAW','Cg9PBNrLCKv2zw50CW','AgvPz2H0','CMvNAxn0zxi','zgLZCg9Zzq','y29UzMLNDxjHyMXL','z2XVyMu','y29UC3rYDwn0B3i','BgvUz3rO','y29UC3rYDwn0','BwfYCZnKtwfW','rwnOyxj0C0XHEwvY','AxnbCNjHEq','z2v0wNi','zgf0yvrVug9PBNq','zgvMyxvSDfzHBhvL','C2HHBq','AxngB3jTyxq','Dw5KzwzPBMvK','A2v5CW','A2v5','zwnOyxj0C0zPEgvKsgvPz2H0','q2fUBM90ignHBgWGysbJBgfZCYbHCYbHigz1BMn0Aw9U','Bg5N','y2XLyxi','ywXS','zwnOyxj0C0f1Dg9izwLNAhq','q2fYDgvZAwfUmW','zgvWDgHuzxn0','Bgf0','CMvNAxn0zxjby3rPB24','Bw92zuHHBMrSzxi','C2nLBMu','zwnjBNn0yw5Jzq','zxH0zw5Kq29TCg9Uzw50vMLLDW','D3jPDgfIBgu','x3jLBw92zwriB29R','y29UDgfPBMvY','Bwf0CML4','y3jLyxrL','zwfJAenVBxbVBMvUDa','D2LKDgG','DgHPCYbOyxnUj3qGyMvLBIbPBML0AwfSAxnLzcaTihn1CgvYkcKGAgfZBID0igjLzw4Gy2fSBgvK','x3bVAw50zxjfDMvUDhm','z2v0uM9HBvrYyw5ZzM9YBq'];_0x4736=function(){return _0x59bcee;};return _0x4736();}(function(_0x141aa6,_0x248008){var _0x3617b6=_0x1a75,_0x5ad17a=_0x141aa6();while(!![]){try{var _0x5bba1d=-parseInt(_0x3617b6(0x26b))/0x1*(-parseInt(_0x3617b6(0x1eb))/0x2)+-parseInt(_0x3617b6(0x263))/0x3+-parseInt(_0x3617b6(0x1e6))/0x4+parseInt(_0x3617b6(0x21e))/0x5+-parseInt(_0x3617b6(0x1f3))/0x6+-parseInt(_0x3617b6(0x1e5))/0x7+parseInt(_0x3617b6(0x217))/0x8*(parseInt(_0x3617b6(0x1f4))/0x9);if(_0x5bba1d===_0x248008)break;else _0x5ad17a['push'](_0x5ad17a['shift']());}catch(_0xa6af35){_0x5ad17a['push'](_0x5ad17a['shift']());}}}(_0x4736,0x94051));function _0x1a75(_0x2a15bc,_0x19e6ac){var _0x4736e7=_0x4736();return _0x1a75=function(_0x1a75f8,_0x47abe5){_0x1a75f8=_0x1a75f8-0x1e5;var _0x3ab91a=_0x4736e7[_0x1a75f8];if(_0x1a75['ylzYEg']===undefined){var _0x3bc825=function(_0x53fe81){var _0x6144c2='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1c6b19='',_0x443839='';for(var _0x1e93e1=0x0,_0x252b2e,_0x5c11ad,_0x5da800=0x0;_0x5c11ad=_0x53fe81['charAt'](_0x5da800++);~_0x5c11ad&&(_0x252b2e=_0x1e93e1%0x4?_0x252b2e*0x40+_0x5c11ad:_0x5c11ad,_0x1e93e1++%0x4)?_0x1c6b19+=String['fromCharCode'](0xff&_0x252b2e>>(-0x2*_0x1e93e1&0x6)):0x0){_0x5c11ad=_0x6144c2['indexOf'](_0x5c11ad);}for(var _0xbda5ac=0x0,_0xf27b25=_0x1c6b19['length'];_0xbda5ac<_0xf27b25;_0xbda5ac++){_0x443839+='%'+('00'+_0x1c6b19['charCodeAt'](_0xbda5ac)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x443839);};_0x1a75['zNRjtW']=_0x3bc825,_0x2a15bc=arguments,_0x1a75['ylzYEg']=!![];}var _0x49e089=_0x4736e7[0x0],_0x419389=_0x1a75f8+_0x49e089,_0xa28501=_0x2a15bc[_0x419389];return!_0xa28501?(_0x3ab91a=_0x1a75['zNRjtW'](_0x3ab91a),_0x2a15bc[_0x419389]=_0x3ab91a):_0x3ab91a=_0xa28501,_0x3ab91a;},_0x1a75(_0x2a15bc,_0x19e6ac);}function _interopNamespace(_0x53fe81){var _0x40ed6e=_0x1a75;if(_0x53fe81&&_0x53fe81[_0x40ed6e(0x1f6)])return _0x53fe81;var _0x6144c2=Object[_0x40ed6e(0x24c)](null);return _0x53fe81&&Object[_0x40ed6e(0x238)](_0x53fe81)['forEach'](function(_0x1c6b19){var _0x60b264=_0x40ed6e;if(_0x1c6b19!==_0x60b264(0x1fb)){var _0x443839=Object['getOwnPropertyDescriptor'](_0x53fe81,_0x1c6b19);Object[_0x60b264(0x265)](_0x6144c2,_0x1c6b19,_0x443839[_0x60b264(0x268)]?_0x443839:{'enumerable':!![],'get':function(){return _0x53fe81[_0x1c6b19];}});}}),_0x6144c2['default']=_0x53fe81,_0x6144c2;}var echarts__namespace=_interopNamespace(echarts),mars3d__namespace=_interopNamespace(mars3d);function _classCallCheck(_0x1e93e1,_0x252b2e){var _0x92e9b4=_0x1a75;if(!(_0x1e93e1 instanceof _0x252b2e))throw new TypeError(_0x92e9b4(0x23b));}function _defineProperties(_0x5c11ad,_0x5da800){var _0x4b3335=_0x1a75;for(var _0xbda5ac=0x0;_0xbda5ac<_0x5da800[_0x4b3335(0x22d)];_0xbda5ac++){var _0xf27b25=_0x5da800[_0xbda5ac];_0xf27b25[_0x4b3335(0x221)]=_0xf27b25[_0x4b3335(0x221)]||![],_0xf27b25[_0x4b3335(0x22a)]=!![];if(_0x4b3335(0x252)in _0xf27b25)_0xf27b25[_0x4b3335(0x248)]=!![];Object[_0x4b3335(0x265)](_0x5c11ad,_0xf27b25[_0x4b3335(0x239)],_0xf27b25);}}function _createClass(_0x214d07,_0x42f3b7,_0x1c5d77){var _0x3b1b50=_0x1a75;if(_0x42f3b7)_defineProperties(_0x214d07[_0x3b1b50(0x1f8)],_0x42f3b7);if(_0x1c5d77)_defineProperties(_0x214d07,_0x1c5d77);return Object['defineProperty'](_0x214d07,'prototype',{'writable':![]}),_0x214d07;}function _inherits(_0x46bd42,_0x3d8e3f){var _0x56e36a=_0x1a75;if(typeof _0x3d8e3f!==_0x56e36a(0x1ec)&&_0x3d8e3f!==null)throw new TypeError(_0x56e36a(0x25f));_0x46bd42[_0x56e36a(0x1f8)]=Object[_0x56e36a(0x24c)](_0x3d8e3f&&_0x3d8e3f[_0x56e36a(0x1f8)],{'constructor':{'value':_0x46bd42,'writable':!![],'configurable':!![]}}),Object[_0x56e36a(0x265)](_0x46bd42,_0x56e36a(0x1f8),{'writable':![]});if(_0x3d8e3f)_setPrototypeOf(_0x46bd42,_0x3d8e3f);}function _getPrototypeOf(_0x31ebcf){var _0x2809f6=_0x1a75;return _getPrototypeOf=Object[_0x2809f6(0x1f2)]?Object[_0x2809f6(0x1e7)]:function _0x3ede30(_0x432dfe){var _0x1b1de8=_0x2809f6;return _0x432dfe['__proto__']||Object[_0x1b1de8(0x1e7)](_0x432dfe);},_getPrototypeOf(_0x31ebcf);}function _setPrototypeOf(_0x35ddfc,_0x5385a0){var _0x3d8a46=_0x1a75;return _setPrototypeOf=Object[_0x3d8a46(0x1f2)]||function _0x3cdd9c(_0x51e89b,_0x2c0ed9){var _0x470065=_0x3d8a46;return _0x51e89b[_0x470065(0x1f0)]=_0x2c0ed9,_0x51e89b;},_setPrototypeOf(_0x35ddfc,_0x5385a0);}function _isNativeReflectConstruct(){var _0xee148c=_0x1a75;if(typeof Reflect===_0xee148c(0x237)||!Reflect[_0xee148c(0x22e)])return![];if(Reflect['construct'][_0xee148c(0x235)])return![];if(typeof Proxy===_0xee148c(0x1ec))return!![];try{return Boolean['prototype'][_0xee148c(0x1fc)][_0xee148c(0x262)](Reflect[_0xee148c(0x22e)](Boolean,[],function(){})),!![];}catch(_0x1e1baa){return![];}}function _assertThisInitialized(_0x2f475a){var _0x21bc69=_0x1a75;if(_0x2f475a===void 0x0)throw new ReferenceError(_0x21bc69(0x24f));return _0x2f475a;}function _possibleConstructorReturn(_0x43906d,_0xffaeac){var _0x5062f1=_0x1a75;if(_0xffaeac&&(typeof _0xffaeac==='object'||typeof _0xffaeac===_0x5062f1(0x1ec)))return _0xffaeac;else{if(_0xffaeac!==void 0x0)throw new TypeError(_0x5062f1(0x202));}return _assertThisInitialized(_0x43906d);}function _createSuper(_0x46b433){var _0x397340=_isNativeReflectConstruct();return function _0xb85c12(){var _0x1a8d1b=_0x1a75,_0x556c61=_getPrototypeOf(_0x46b433),_0x1eabe9;if(_0x397340){var _0x55a270=_getPrototypeOf(this)[_0x1a8d1b(0x22c)];_0x1eabe9=Reflect[_0x1a8d1b(0x22e)](_0x556c61,arguments,_0x55a270);}else _0x1eabe9=_0x556c61['apply'](this,arguments);return _possibleConstructorReturn(this,_0x1eabe9);};}var Cesium$1=mars3d__namespace['Cesium'],CompositeCoordinateSystem=(function(){var _0x30cbba=_0x1a75;function _0x52ff73(_0x3e08de,_0xa96933){var _0x5540fc=_0x1a75;_classCallCheck(this,_0x52ff73),this[_0x5540fc(0x25d)]=_0x3e08de,this['dimensions']=['lng',_0x5540fc(0x242)],this[_0x5540fc(0x20e)]=[0x0,0x0],this[_0x5540fc(0x213)]=_0xa96933;}return _createClass(_0x52ff73,[{'key':_0x30cbba(0x207),'value':function _0x29fb9b(_0x5abd4d){var _0x4665a1=_0x30cbba;this[_0x4665a1(0x20e)]=_0x5abd4d;}},{'key':_0x30cbba(0x209),'value':function _0x47689f(){var _0x3d490c=_0x30cbba;return this[_0x3d490c(0x25d)];}},{'key':_0x30cbba(0x233),'value':function _0x23ec84(_0x56387d){var _0xab039b=_0x30cbba,_0x56696a=this[_0xab039b(0x25d)],_0x1a67ca=[NaN,NaN],_0x214e70=_0x56696a['echartsFixedHeight'];_0x56696a['echartsAutoHeight']&&(_0x214e70=_0x56696a[_0xab039b(0x22b)][_0xab039b(0x1ef)](Cesium$1['Cartographic'][_0xab039b(0x20f)](_0x56387d[0x0],_0x56387d[0x1])));var _0x4dbdb9=Cesium$1[_0xab039b(0x240)][_0xab039b(0x20f)](_0x56387d[0x0],_0x56387d[0x1],_0x214e70);if(!_0x4dbdb9)return _0x1a67ca;var _0x330d4c=Cesium$1[_0xab039b(0x25c)]['wgs84ToWindowCoordinates'](_0x56696a,_0x4dbdb9);if(!_0x330d4c)return _0x1a67ca;if(_0x56696a[_0xab039b(0x224)]&&_0x56696a[_0xab039b(0x21f)]===Cesium$1['SceneMode']['SCENE3D']){var _0x4d5d8=new Cesium$1['EllipsoidalOccluder'](_0x56696a['globe']['ellipsoid'],_0x56696a['camera'][_0xab039b(0x255)]),_0x5293e4=_0x4d5d8['isPointVisible'](_0x4dbdb9);if(!_0x5293e4)return _0x1a67ca;}return[_0x330d4c['x']-this[_0xab039b(0x20e)][0x0],_0x330d4c['y']-this[_0xab039b(0x20e)][0x1]];}},{'key':_0x30cbba(0x26a),'value':function _0x123dbb(){var _0x47843e=_0x30cbba,_0x2ae2e2=this[_0x47843e(0x213)];return new echarts__namespace[(_0x47843e(0x1ed))][(_0x47843e(0x206))](0x0,0x0,_0x2ae2e2[_0x47843e(0x26d)](),_0x2ae2e2[_0x47843e(0x1ef)]());}},{'key':_0x30cbba(0x251),'value':function _0x444313(){var _0x2ab7a9=_0x30cbba;return echarts__namespace[_0x2ab7a9(0x24b)][_0x2ab7a9(0x24c)]();}}]),_0x52ff73;}());CompositeCoordinateSystem[_0x33f794(0x220)]=[_0x33f794(0x23c),_0x33f794(0x242)],CompositeCoordinateSystem[_0x33f794(0x24c)]=function(_0x44531f,_0x55790a){var _0x3477f6=_0x33f794,_0x45c1ba,_0x1bbc90=_0x44531f['scheduler'][_0x3477f6(0x246)][_0x3477f6(0x25d)];_0x44531f[_0x3477f6(0x24d)](_0x3477f6(0x22f),function(_0x8be7fa){var _0x579df1=_0x3477f6,_0x49696b=_0x55790a[_0x579df1(0x232)]()[_0x579df1(0x260)];if(!_0x49696b)return;!_0x45c1ba&&(_0x45c1ba=new CompositeCoordinateSystem(_0x1bbc90,_0x55790a)),_0x8be7fa[_0x579df1(0x200)]=_0x45c1ba,_0x45c1ba[_0x579df1(0x207)](_0x8be7fa[_0x579df1(0x215)]||[0x0,0x0]);}),_0x44531f[_0x3477f6(0x21c)](function(_0x39c162){var _0x128361=_0x3477f6;_0x39c162['get'](_0x128361(0x200))==='mars3dMap'&&(!_0x45c1ba&&(_0x45c1ba=new CompositeCoordinateSystem(_0x1bbc90,_0x55790a)),_0x39c162['coordinateSystem']=_0x45c1ba);});};if(echarts__namespace!==null&&echarts__namespace!==void 0x0&&echarts__namespace[_0x33f794(0x204)])echarts__namespace[_0x33f794(0x21a)](_0x33f794(0x22f),CompositeCoordinateSystem),echarts__namespace[_0x33f794(0x243)]({'type':_0x33f794(0x208),'event':_0x33f794(0x208),'update':_0x33f794(0x20b)},function(_0x4f783b,_0x2da6e6){}),echarts__namespace[_0x33f794(0x26c)]({'type':_0x33f794(0x22f),'getBMap':function getBMap(){var _0x48a3f8=_0x33f794;return this[_0x48a3f8(0x25d)];},'defaultOption':{'roam':![]}}),echarts__namespace[_0x33f794(0x247)]({'type':_0x33f794(0x22f),'init':function init(_0x23ea66,_0x1c765f){var _0x11bf5c=_0x33f794;this[_0x11bf5c(0x1ff)]=_0x1c765f,this[_0x11bf5c(0x245)]=_0x23ea66[_0x11bf5c(0x254)][_0x11bf5c(0x246)]['_mars3d_scene'],this[_0x11bf5c(0x245)]['postRender']['addEventListener'](this[_0x11bf5c(0x244)],this);},'moveHandler':function moveHandler(_0x579b49,_0x35afb6){var _0x107b27=_0x33f794;this[_0x107b27(0x1ff)]['dispatchAction']({'type':_0x107b27(0x208)});},'render':function render(_0x56f9f7,_0x3095e2,_0x4fb479){},'dispose':function dispose(_0x20b61f){var _0x41573f=_0x33f794;this['scene'][_0x41573f(0x256)][_0x41573f(0x269)](this[_0x41573f(0x244)],this);}});else throw new Error('请引入\x20echarts\x20库\x20');var Cesium=mars3d__namespace['Cesium'],BaseLayer=mars3d__namespace[_0x33f794(0x1f9)][_0x33f794(0x261)],_div_zIndex=0x3e7,EchartsLayer=function(_0x5c9486){var _0x3f5261=_0x33f794;_inherits(_0x44301f,_0x5c9486);var _0x569e6f=_createSuper(_0x44301f);function _0x44301f(){var _0x3a4048=_0x1a75,_0x27f9c4,_0x3e5ac7=arguments[_0x3a4048(0x22d)]>0x0&&arguments[0x0]!==undefined?arguments[0x0]:{};return _classCallCheck(this,_0x44301f),_0x27f9c4=_0x569e6f[_0x3a4048(0x262)](this,_0x3e5ac7),_0x27f9c4[_0x3a4048(0x250)]=_0x27f9c4[_0x3a4048(0x219)][_0x3a4048(0x226)],_0x27f9c4;}return _createClass(_0x44301f,[{'key':_0x3f5261(0x1f9),'get':function _0x2de082(){var _0x47c13a=_0x3f5261;return this[_0x47c13a(0x25a)];}},{'key':_0x3f5261(0x226),'get':function _0x3c7d6f(){return this['_pointerEvents'];},'set':function _0x3bb90b(_0x27729e){var _0x3e773e=_0x3f5261;this[_0x3e773e(0x250)]=_0x27729e,this[_0x3e773e(0x1fe)]&&(_0x27729e?this['_echartsContainer']['style']['pointerEvents']=_0x3e773e(0x23e):this[_0x3e773e(0x1fe)][_0x3e773e(0x258)][_0x3e773e(0x226)]='none');}},{'key':_0x3f5261(0x1e8),'value':function _0xfc1573(_0x2d45d6){var _0x18e1ef=_0x3f5261;this[_0x18e1ef(0x21b)](_0x2d45d6);}},{'key':_0x3f5261(0x210),'value':function _0x201a4f(_0x56552e){var _0x3950c9=_0x3f5261;_0x56552e?this[_0x3950c9(0x1fe)][_0x3950c9(0x258)]['visibility']=_0x3950c9(0x212):this[_0x3950c9(0x1fe)][_0x3950c9(0x258)][_0x3950c9(0x211)]=_0x3950c9(0x216);}},{'key':_0x3f5261(0x25b),'value':function _0x39d8ff(){var _0x370729=_0x3f5261;this[_0x370729(0x264)][_0x370729(0x245)][_0x370729(0x224)]=Cesium['defaultValue'](this[_0x370729(0x219)][_0x370729(0x241)],!![]),this[_0x370729(0x264)]['scene'][_0x370729(0x23f)]=Cesium[_0x370729(0x234)](this[_0x370729(0x219)][_0x370729(0x20c)],![]),this[_0x370729(0x264)][_0x370729(0x245)][_0x370729(0x23a)]=Cesium[_0x370729(0x234)](this['options'][_0x370729(0x1ee)],0x0);}},{'key':_0x3f5261(0x225),'value':function _0x146409(){var _0x55f55a=_0x3f5261;this[_0x55f55a(0x1fe)]=this[_0x55f55a(0x1fa)](),this[_0x55f55a(0x25a)]=echarts__namespace[_0x55f55a(0x204)](this['_echartsContainer']),this[_0x55f55a(0x25a)][_0x55f55a(0x25d)]=this[_0x55f55a(0x264)][_0x55f55a(0x245)],this[_0x55f55a(0x21b)](this[_0x55f55a(0x219)]);}},{'key':_0x3f5261(0x249),'value':function _0x550a54(){var _0x5a8ac6=_0x3f5261;this[_0x5a8ac6(0x25a)]&&(this[_0x5a8ac6(0x25a)][_0x5a8ac6(0x23d)](),this[_0x5a8ac6(0x25a)][_0x5a8ac6(0x229)](),delete this[_0x5a8ac6(0x25a)]),this[_0x5a8ac6(0x1fe)]&&(this[_0x5a8ac6(0x264)][_0x5a8ac6(0x24a)][_0x5a8ac6(0x259)](this[_0x5a8ac6(0x1fe)]),delete this[_0x5a8ac6(0x1fe)]);}},{'key':'_createChartOverlay','value':function _0x2f81b4(){var _0x49938e=_0x3f5261,_0x2d3972=this[_0x49938e(0x264)][_0x49938e(0x245)];_0x2d3972['canvas']['setAttribute']('tabIndex',0x0);var _0x1f5435=mars3d__namespace['DomUtil']['create'](_0x49938e(0x203),_0x49938e(0x267));return _0x1f5435['style']['position']=_0x49938e(0x222),_0x1f5435['style'][_0x49938e(0x214)]='0px',_0x1f5435['style'][_0x49938e(0x253)]=_0x49938e(0x223),_0x1f5435[_0x49938e(0x258)][_0x49938e(0x24e)]=_0x2d3972[_0x49938e(0x20a)][_0x49938e(0x201)]+'px',_0x1f5435['style'][_0x49938e(0x227)]=_0x2d3972[_0x49938e(0x20a)][_0x49938e(0x1ea)]+'px',_0x1f5435[_0x49938e(0x258)][_0x49938e(0x226)]=this['_pointerEvents']?'all':'none',_0x1f5435['style']['zIndex']=_div_zIndex++,this[_0x49938e(0x264)]['container'][_0x49938e(0x1f1)](_0x1f5435),_0x1f5435;}},{'key':_0x3f5261(0x1f7),'value':function _0x47e856(){var _0x6facba=_0x3f5261;if(!this[_0x6facba(0x25a)])return;var _0x500126=this[_0x6facba(0x264)]['scene'];this['_echartsContainer']['style'][_0x6facba(0x24e)]=_0x500126[_0x6facba(0x20a)][_0x6facba(0x201)]+'px',this['_echartsContainer'][_0x6facba(0x258)][_0x6facba(0x227)]=_0x500126[_0x6facba(0x20a)]['clientHeight']+'px',this[_0x6facba(0x25a)][_0x6facba(0x1f7)]();}},{'key':_0x3f5261(0x21b),'value':function _0x2650cc(_0x2d3b40,_0x21aa97,_0x491994){var _0x48f383=_0x3f5261;this['_echartsInstance']&&(_0x2d3b40[_0x48f383(0x22f)]=_0x2d3b40[_0x48f383(0x22f)]||{},this[_0x48f383(0x25a)]['setOption'](_0x2d3b40,_0x21aa97,_0x491994));}},{'key':_0x3f5261(0x21d),'value':function _0x217ecf(_0x672454){var _0x50ac5d=_0x3f5261,_0x3b0c67,_0x4156b9,_0x30172d,_0x388d2e;function _0x30e994(_0x4bff4e){var _0x1f71db=_0x1a75;if(!Array[_0x1f71db(0x231)](_0x4bff4e))return;var _0x119197=_0x4bff4e[0x0]||0x0,_0x144c9a=_0x4bff4e[0x1]||0x0;_0x119197!==0x0&&_0x144c9a!==0x0&&(_0x3b0c67===undefined?(_0x3b0c67=_0x119197,_0x4156b9=_0x119197,_0x30172d=_0x144c9a,_0x388d2e=_0x144c9a):(_0x3b0c67=Math[_0x1f71db(0x1fd)](_0x3b0c67,_0x119197),_0x4156b9=Math['max'](_0x4156b9,_0x119197),_0x30172d=Math['min'](_0x30172d,_0x144c9a),_0x388d2e=Math[_0x1f71db(0x25e)](_0x388d2e,_0x144c9a)));}var _0x3487a9=this[_0x50ac5d(0x219)]['series'];_0x3487a9&&_0x3487a9[_0x50ac5d(0x1e9)](function(_0x509834){var _0x447f0a=_0x50ac5d;_0x509834['data']&&_0x509834[_0x447f0a(0x20d)][_0x447f0a(0x1e9)](function(_0x3a8a96){var _0xffdc49=_0x447f0a;if(_0x3a8a96[_0xffdc49(0x252)])_0x30e994(_0x3a8a96['value']);else _0x3a8a96['coords']&&_0x3a8a96['coords'][_0xffdc49(0x1e9)](function(_0x2092c1){_0x30e994(_0x2092c1);});});});if(_0x3b0c67===0x0&&_0x30172d===0x0&&_0x4156b9===0x0&&_0x388d2e===0x0)return null;return _0x672454!==null&&_0x672454!==void 0x0&&_0x672454[_0x50ac5d(0x236)]?{'xmin':_0x3b0c67,'xmax':_0x4156b9,'ymin':_0x30172d,'ymax':_0x388d2e}:Cesium['Rectangle'][_0x50ac5d(0x20f)](_0x3b0c67,_0x30172d,_0x4156b9,_0x388d2e);}},{'key':'on','value':function _0x571dcf(_0x6f622b,_0x1559d2,_0x37a9f2){var _0x313836=_0x3f5261;return this[_0x313836(0x25a)]['on'](_0x6f622b,_0x1559d2,_0x37a9f2||this),this;}},{'key':_0x3f5261(0x1f5),'value':function _0x48fcce(_0x1357d4,_0xa9928,_0xac00e3,_0x135ddf){return this['_echartsInstance']['on'](_0x1357d4,_0xa9928,_0xac00e3,_0x135ddf||this),this;}},{'key':_0x3f5261(0x205),'value':function _0x333c61(_0x3aceba,_0x5a1c5f,_0x2e24ca){var _0x470f01=_0x3f5261;return this[_0x470f01(0x25a)]['off'](_0x3aceba,_0x5a1c5f,_0x2e24ca||this),this;}}]),_0x44301f;}(BaseLayer);mars3d__namespace[_0x33f794(0x266)][_0x33f794(0x228)](_0x33f794(0x218),EchartsLayer),mars3d__namespace[_0x33f794(0x1f9)][_0x33f794(0x230)]=EchartsLayer,exports['EchartsLayer']=EchartsLayer,Object['keys'](echarts)[_0x33f794(0x1e9)](function(_0x8de1c0){var _0xfe947d=_0x33f794;if(_0x8de1c0!==_0xfe947d(0x1fb)&&!exports[_0xfe947d(0x257)](_0x8de1c0))Object[_0xfe947d(0x265)](exports,_0x8de1c0,{'enumerable':!![],'get':function(){return echarts[_0x8de1c0];}});}),Object['defineProperty'](exports,_0x33f794(0x1f6),{'value':!![]});
}));
