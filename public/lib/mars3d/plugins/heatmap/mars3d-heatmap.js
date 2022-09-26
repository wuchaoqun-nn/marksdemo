/**
 * Mars3D平台插件,结合heatmap可视化功能插件  mars3d-heatmap
 *
 * 版本信息：v3.4.8
 * 编译日期：2022-09-26 09:06:00
 * 版权所有：Copyright by 火星科技  http://mars3d.cn
 * 使用单位：免费公开版 ，2022-06-01
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.mars3d || require('mars3d')), (window.h337 || require('@mars3d/heatmap.js'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'mars3d', '@mars3d/heatmap.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["mars3d-heatmap"] = {}, global.mars3d, global.h337));
})(this, (function (exports, mars3d, h337) { 
'use strict';var _0x55e162=_0x35a1;(function(_0x5dd736,_0x1440c6){var _0x5817ee=_0x35a1,_0x11d9bd=_0x5dd736();while(!![]){try{var _0x292fba=-parseInt(_0x5817ee(0x17b))/0x1*(-parseInt(_0x5817ee(0x129))/0x2)+parseInt(_0x5817ee(0x10e))/0x3*(parseInt(_0x5817ee(0xef))/0x4)+-parseInt(_0x5817ee(0xea))/0x5+-parseInt(_0x5817ee(0x128))/0x6*(parseInt(_0x5817ee(0x12e))/0x7)+-parseInt(_0x5817ee(0x155))/0x8*(parseInt(_0x5817ee(0x17d))/0x9)+-parseInt(_0x5817ee(0x102))/0xa+-parseInt(_0x5817ee(0x12c))/0xb*(-parseInt(_0x5817ee(0x186))/0xc);if(_0x292fba===_0x1440c6)break;else _0x11d9bd['push'](_0x11d9bd['shift']());}catch(_0x5dda8b){_0x11d9bd['push'](_0x11d9bd['shift']());}}}(_0x43cd,0x7f289));function _0x43cd(){var _0x3f4148=['uMvUzgvYu3rHDgu','z2v0','BwvYz2u','C2v0rgf0yq','Dw5KzwzPBMvK','y3r4','ywrKtgf5zxi','CMDIysG','yxr0CMLIDxrLihzLyZmGCg9ZAxrPB24ZreHPz2G7cIaGicaGicaGicbHDhrYAwj1DguGDMvJmYbWB3nPDgLVBJnetg93oWOGicaGicaGicaGyxr0CMLIDxrLihzLyZiGC3q7cIaGicaGicaGicbHDhrYAwj1DguGzMXVyxqGyMf0y2HjzdSkicaGicaGicaGihvUAwzVCM0GC2fTCgXLCJjeigj1BxbnyxbFmZSkicaGicaGicaGihzHCNLPBMCGDMvJmYb2x3bVC2L0Aw9Utum7cIaGicaGicaGicb2yxj5Aw5NihzLyZmGDL9WB3nPDgLVBKvdoWOGicaGicaGicaGDMfYEwLUzYb2zwmYihzFC3q7cGOGicaGicaGicaGDM9PzcbTywLUkcKkicaGicaGicaGihSkicaGicaGicaGicaGDMvJncbWid0Gy3PTx2nVBxb1DgvqB3nPDgLVBIGPoWOGicaGicaGicaGicb2x3bVC2L0Aw9UtumGpsbWB3nPDgLVBJnesgLNAcaRihbVC2L0Aw9Um0rmB3C7cIaGicaGicaGicaGihzFCg9ZAxrPB25fqYa9icHJEM1FBw9KzwXwAwv3uMvSyxrPDMvuB0v5zsaQihaPlNH5EJSkicaGicaGicaGicaGDL9ZDca9ihn0oWOGicaGicaGicaGicb2zwm0ignVBg9Yid0GDgv4DhvYztjekgj1BxbnyxbFmYWGDL9ZDcK7cIaGicaGicaGicaGigzSB2f0ignLBNrLCKj1BxaGpsbKAxn0yw5JzsH2zwmZkdaUmcKSy29SB3iUCMDIktSkicaGicaGicaGicaGDMvJmYb1CerPCIa9ig5VCM1HBgL6zsH2x3bVC2L0Aw9UtumUEhL6ktSkicaGicaGicaGicaGDMvJmYbKAxnqB3mGpsb1CerPCIaQignLBNrLCKj1BxaGkIa','CMDIkde0mcWXndaSmtqWkq','uMvJDgfUz2XLuhjPBwL0AxzL','z2v0uMvJDgfUz2XL','y29UC3rYDwn0','EwvSBg93','oWOGicaGicaGicaGicbWicS9DMvJncHKAxnqB3mSmc4WktSkicaGicaGicaGicaGz2XFug9ZAxrPB24GpsbJEM1FBw9KzwXwAwv3uhjVAMvJDgLVBLjLBgf0AxzLvg9fEwuGkIbWoWOGicaGicaGicaGFqOGicaGicaGia','x2XHEwvY','zgL2','zw51BwvYywjSzq','nLLRD2jSqW','mtG5mda4DNLbD2PI','x2DLDeHLyxrdyw52yxm','x2XHC3rFBujVDw5KCW','mtfItfHXsgS','BgvUz3rO','ntG3ndmWmKfirgTdyq','q2fUBM90ignHBgWGysbJBgfZCYbHCYbHigz1BMn0Aw9U','quXxqvLt','x2nYzwf0zufYy0DYyxbOAwm','zgvMAw5LuhjVCgvYDgLLCW','x3jLBMrLCMvY','6k+35BYv5ywLigHLyxrTyxaUANmG5BQtia','zNvUy3rPB24','y3jLyxrL','Dw5PzM9YBxm','x19LC01VzhvSzq','zgvMyxvSDa','Bgf5zxi','Bg9UBgf0mM1LCMnHDg9Y','z3jHBNvSyxjPDhK','y29Uy2f0','zgvMAw5LuhjVCgvYDhK','zM9YrwfJAa','B3b0Aw9UCW','x2fKzgvKsg9VAW','rg9TvxrPBa','y2fSBa','yM9KEq','C2HHBq','x2DLDefYy0HLyxrdyw52yxm','AgvHDfn0EwXL','yNvTCe1HCa','CMDIkdiXnIWYmtySmJe2kq','ug9PBNruCMfUCW','A2v5CW','x21cB3vUzhnnyxG','qMfZzuXHEwvY','tg5Ntgf0ug9PBNq','z3jHzgLLBNrbCMm','AgvHDa','rwXSAxbZB2LKu3vYzMfJzufWCgvHCMfUy2u','x3bVC2L0Aw9UCW','vxrPBa','Bwf4q2fUDMfZu2L6zq','mtK3nLzAzef5Aq','Aw1Hz2u','CgfYC2u','C2v0ug9ZAxrPB25Z','ywrKr3jHCgHPyW','Cg9ZAxrPB25Z','x2XHC3rFAgvHDerHDge','zMXVB3i','Cg9PBNrZ','twf0zxjPywW','CMvTB3zL','ChjVDg90ExbL','zgLMzKHLAwDODa','u3rLBMnPBez1BMn0Aw9U','x2HLyxq','yxjJuMfKAxvZu2nHBgu','x2nYzwf0zuDYyxbOAwm','x2DYyxbOAwm','CMfKAxvZ','zNjVBunHy2HL','zgf0yq','C2HVDW','yMX1zq','z3jLzw4','B2jQzwn0','uKvqtefdrq','C3bSAxroDw0','BwLU','z2v0vMfSDwvbDa','x3jLy3rHBMDSzq','yxjJ','C3r5Bgu','A2v5','qMXLBMrPBMDtDgf0zq','y29VCMrPBMf0zxm','CMvTB3zLtgf5zxi','z2v0t3DUuhjVCgvYDhLtEw1IB2XZ','D2LKDgG6','oxLwANPJyW','ChvZAa','mZeZodnhqufRDvu','CMvJDgfUz2XL','y2XPzw50v2LKDgG','BwvYy2f0B3iYBg9UBgf0','z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9Y','s0vfua','AgvPz2H0','rgvYAxzLzcbJB25ZDhj1y3rVCNmGBwf5ig9UBhKGCMv0DxjUig9IAMvJDcbVCIb1BMrLzMLUzwq','y2XLyxi','mtCYodm1mdr1C0jRrLa','y29UzMLNDxjL','DgHPCYbOyxnUj3qGyMvLBIbPBML0AwfSAxnLzcaTihn1CgvYkcKGAgfZBID0igjLzw4Gy2fSBgvK','u3rLBMnPBe9WzxjHDgLVBG','yMX1CG','y2XPzw50sgvPz2H0','Ew1HEa','z2v0ug9PBNreyxrH','quXqsefFqKXftKq','y29WEunHBNzHCW','ndKZnda5meLouuDYvq','y29UC3rYDwn0B3i','z2v0sw1Hz2veyxrH','zM9YBwf0uMvJDgfUz2XL','x3jLBw92zwriB29R','nfr0rez4rq','x3vWzgf0zvbVC2L0Aw9UC0HVB2S','x3nLDe9WDgLVBNniB29R','x21HCa','DMfSDwu','z3jHCgHPyW','y29UDgfPBMvY','AxngB3jTyxq','yxbWBhK','ywjZ','ug9SEvv0AwW','Bg5N','y3nZvgv4Da','BwLUq2fUDMfZu2L6zq','z2v0uhjVDg90ExbLt2y','CM91BMq','x3nJywXL','D2LKDgG','Bgf0','mtaZntKYmhPmz1LOrG','DMfSDwvpzG','Bwf4','y2fUDMfZ','Ew1PBG','z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9YCW','sgvHDeXHEwvY','x21VDw50zwriB29R','zNjVBurLz3jLzxm','Eg1PBG','CMvNAxn0zxi','Dw5PzM9YBsbZyw1WBgvYmKqGAw1Hz2u7cGPJEM1FBwf0zxjPywWGy3PTx2DLDe1HDgvYAwfSkgn6Bv9TyxrLCMLHBeLUChv0ig1HDgvYAwfSsw5WDxqPihSkicbJEM1FBwf0zxjPywWGBwf0zxjPywWGpsbJEM1Fz2v0rgvMyxvSDe1HDgvYAwfSkg1HDgvYAwfSsw5WDxqPoWOGihzLyZiGC3qGpsbTyxrLCMLHBeLUChv0lNn0oWOGihzLyZqGy29SB3jjBwfNzsa9ihrLEhr1CMuYrcHPBwfNzsWGC3qPoWOGigLMkgnVBg9Ysw1Hz2uUCMDIid09ihzLyZmOms4Wksb8FcbJB2XVCKLTywDLlNjNyIa9psb2zwmZkdaUmcKPihSkicaGigrPC2nHCMq7cIaGFqOGig1HDgvYAwfSlMrPzMz1C2uGpsbJB2XVCKLTywDLlNjNyJSkicbTyxrLCMLHBc5HBhbOysa9ignVBg9Ysw1Hz2uUytSkicbYzxr1CM4GBwf0zxjPywW7cN0k','mZa2mJy5nerSDMDVsG','Eg1HEa','zMLSDgvY','C2v0uhjVDg90ExbLt2y','y29UzMLNDxjHyMXL','uMvJDgfUz2XL','Dg9bCNjHEq','u3vWzxiGzxHWCMvZC2LVBIbTDxn0igvPDgHLCIbIzsbUDwXSig9YigeGzNvUy3rPB24'];_0x43cd=function(){return _0x3f4148;};return _0x43cd();}function _interopNamespace(_0xea6f0b){var _0x2483c0=_0x35a1;if(_0xea6f0b&&_0xea6f0b[_0x2483c0(0x138)])return _0xea6f0b;var _0x575c6c=Object[_0x2483c0(0x136)](null);return _0xea6f0b&&Object[_0x2483c0(0x14b)](_0xea6f0b)[_0x2483c0(0x13f)](function(_0x16f02b){var _0x4574f4=_0x2483c0;if(_0x16f02b!==_0x4574f4(0x139)){var _0x20ab1a=Object[_0x4574f4(0x181)](_0xea6f0b,_0x16f02b);Object[_0x4574f4(0x13e)](_0x575c6c,_0x16f02b,_0x20ab1a[_0x4574f4(0x117)]?_0x20ab1a:{'enumerable':!![],'get':function(){return _0xea6f0b[_0x16f02b];}});}}),_0x575c6c[_0x2483c0(0x139)]=_0xea6f0b,_0x575c6c;}var mars3d__namespace=_interopNamespace(mars3d),h337__namespace=_interopNamespace(h337);function ownKeys(_0x5b4f9f,_0x40abf1){var _0x26df58=_0x35a1,_0x166c1b=Object[_0x26df58(0x14b)](_0x5b4f9f);if(Object['getOwnPropertySymbols']){var _0x50c7be=Object[_0x26df58(0x179)](_0x5b4f9f);_0x40abf1&&(_0x50c7be=_0x50c7be[_0x26df58(0x110)](function(_0x234f88){var _0x32cb1d=_0x26df58;return Object[_0x32cb1d(0x181)](_0x5b4f9f,_0x234f88)[_0x32cb1d(0x127)];})),_0x166c1b[_0x26df58(0x17c)][_0x26df58(0xf7)](_0x166c1b,_0x50c7be);}return _0x166c1b;}function _objectSpread2(_0x24cab5){var _0x47bf04=_0x35a1;for(var _0x9b0b42=0x1;_0x9b0b42<arguments[_0x47bf04(0x12d)];_0x9b0b42++){var _0x14c6cf=null!=arguments[_0x9b0b42]?arguments[_0x9b0b42]:{};_0x9b0b42%0x2?ownKeys(Object(_0x14c6cf),!0x0)['forEach'](function(_0x4e97b5){_defineProperty(_0x24cab5,_0x4e97b5,_0x14c6cf[_0x4e97b5]);}):Object['getOwnPropertyDescriptors']?Object[_0x47bf04(0x132)](_0x24cab5,Object[_0x47bf04(0x107)](_0x14c6cf)):ownKeys(Object(_0x14c6cf))[_0x47bf04(0x13f)](function(_0x2f090a){var _0x47cf8a=_0x47bf04;Object[_0x47cf8a(0x13e)](_0x24cab5,_0x2f090a,Object[_0x47cf8a(0x181)](_0x14c6cf,_0x2f090a));});}return _0x24cab5;}function _classCallCheck(_0x3f8680,_0x39b590){var _0x1c8dd9=_0x35a1;if(!(_0x3f8680 instanceof _0x39b590))throw new TypeError(_0x1c8dd9(0x12f));}function _defineProperties(_0x18a508,_0x2ce7d5){var _0x4f16c1=_0x35a1;for(var _0x206228=0x0;_0x206228<_0x2ce7d5['length'];_0x206228++){var _0x332d5e=_0x2ce7d5[_0x206228];_0x332d5e[_0x4f16c1(0x127)]=_0x332d5e[_0x4f16c1(0x127)]||![],_0x332d5e[_0x4f16c1(0x112)]=!![];if(_0x4f16c1(0xf3)in _0x332d5e)_0x332d5e['writable']=!![];Object[_0x4f16c1(0x13e)](_0x18a508,_0x332d5e[_0x4f16c1(0x175)],_0x332d5e);}}function _createClass(_0x1cba45,_0x36fb6e,_0x18ba97){var _0x2de160=_0x35a1;if(_0x36fb6e)_defineProperties(_0x1cba45['prototype'],_0x36fb6e);if(_0x18ba97)_defineProperties(_0x1cba45,_0x18ba97);return Object['defineProperty'](_0x1cba45,_0x2de160(0x160),{'writable':![]}),_0x1cba45;}function _defineProperty(_0x1d76e9,_0x5ba640,_0x43f1a3){var _0x2d3eae=_0x35a1;return _0x5ba640 in _0x1d76e9?Object[_0x2d3eae(0x13e)](_0x1d76e9,_0x5ba640,{'value':_0x43f1a3,'enumerable':!![],'configurable':!![],'writable':!![]}):_0x1d76e9[_0x5ba640]=_0x43f1a3,_0x1d76e9;}function _inherits(_0xdda1ca,_0x1bb34e){var _0x2852f2=_0x35a1;if(typeof _0x1bb34e!==_0x2852f2(0x135)&&_0x1bb34e!==null)throw new TypeError(_0x2852f2(0x115));_0xdda1ca[_0x2852f2(0x160)]=Object['create'](_0x1bb34e&&_0x1bb34e[_0x2852f2(0x160)],{'constructor':{'value':_0xdda1ca,'writable':!![],'configurable':!![]}}),Object[_0x2852f2(0x13e)](_0xdda1ca,_0x2852f2(0x160),{'writable':![]});if(_0x1bb34e)_setPrototypeOf(_0xdda1ca,_0x1bb34e);}function _getPrototypeOf(_0x55cede){var _0x45e7f4=_0x35a1;return _getPrototypeOf=Object[_0x45e7f4(0x111)]?Object[_0x45e7f4(0xfd)]:function _0x35eea6(_0x120ff3){return _0x120ff3['__proto__']||Object['getPrototypeOf'](_0x120ff3);},_getPrototypeOf(_0x55cede);}function _setPrototypeOf(_0x276d29,_0x523cc2){var _0x13600d=_0x35a1;return _setPrototypeOf=Object[_0x13600d(0x111)]||function _0x18c62f(_0xe4d6be,_0x4dd0cc){return _0xe4d6be['__proto__']=_0x4dd0cc,_0xe4d6be;},_setPrototypeOf(_0x276d29,_0x523cc2);}function _isNativeReflectConstruct(){var _0x47b847=_0x35a1;if(typeof Reflect===_0x47b847(0x11a)||!Reflect[_0x47b847(0x122)])return![];if(Reflect[_0x47b847(0x122)][_0x47b847(0x145)])return![];if(typeof Proxy===_0x47b847(0x135))return!![];try{return Boolean[_0x47b847(0x160)][_0x47b847(0x103)][_0x47b847(0x143)](Reflect[_0x47b847(0x122)](Boolean,[],function(){})),!![];}catch(_0x353ed9){return![];}}function _assertThisInitialized(_0x464726){var _0x560877=_0x35a1;if(_0x464726===void 0x0)throw new ReferenceError(_0x560877(0x188));return _0x464726;}function _possibleConstructorReturn(_0x3842fd,_0x1b4b9e){var _0x3877ba=_0x35a1;if(_0x1b4b9e&&(typeof _0x1b4b9e===_0x3877ba(0x16d)||typeof _0x1b4b9e==='function'))return _0x1b4b9e;else{if(_0x1b4b9e!==void 0x0)throw new TypeError(_0x3877ba(0x184));}return _assertThisInitialized(_0x3842fd);}function _createSuper(_0x247631){var _0x3885b7=_isNativeReflectConstruct();return function _0x38cc70(){var _0x22071f=_0x35a1,_0x4a120b=_getPrototypeOf(_0x247631),_0x5e504a;if(_0x3885b7){var _0x29530c=_getPrototypeOf(this)[_0x22071f(0xeb)];_0x5e504a=Reflect[_0x22071f(0x122)](_0x4a120b,arguments,_0x29530c);}else _0x5e504a=_0x4a120b[_0x22071f(0xf7)](this,arguments);return _possibleConstructorReturn(this,_0x5e504a);};}var HeatMaterial=_0x55e162(0x10d);function _0x35a1(_0xff110a,_0x420754){var _0x43cd1a=_0x43cd();return _0x35a1=function(_0x35a191,_0x20d830){_0x35a191=_0x35a191-0xe9;var _0x4bf37d=_0x43cd1a[_0x35a191];if(_0x35a1['TgGoEq']===undefined){var _0x147f9d=function(_0xea6f0b){var _0x575c6c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x16f02b='',_0x20ab1a='';for(var _0x5b4f9f=0x0,_0x40abf1,_0x166c1b,_0x50c7be=0x0;_0x166c1b=_0xea6f0b['charAt'](_0x50c7be++);~_0x166c1b&&(_0x40abf1=_0x5b4f9f%0x4?_0x40abf1*0x40+_0x166c1b:_0x166c1b,_0x5b4f9f++%0x4)?_0x16f02b+=String['fromCharCode'](0xff&_0x40abf1>>(-0x2*_0x5b4f9f&0x6)):0x0){_0x166c1b=_0x575c6c['indexOf'](_0x166c1b);}for(var _0x234f88=0x0,_0x24cab5=_0x16f02b['length'];_0x234f88<_0x24cab5;_0x234f88++){_0x20ab1a+='%'+('00'+_0x16f02b['charCodeAt'](_0x234f88)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x20ab1a);};_0x35a1['IMFkCA']=_0x147f9d,_0xff110a=arguments,_0x35a1['TgGoEq']=!![];}var _0x9a4805=_0x43cd1a[0x0],_0x175794=_0x35a191+_0x9a4805,_0x27755e=_0xff110a[_0x175794];return!_0x27755e?(_0x4bf37d=_0x35a1['IMFkCA'](_0x4bf37d),_0xff110a[_0x175794]=_0x4bf37d):_0x4bf37d=_0x27755e,_0x4bf37d;},_0x35a1(_0xff110a,_0x420754);}if(!h337__namespace['create'])throw new Error(_0x55e162(0x134));var Cesium=mars3d__namespace['Cesium'],BaseLayer=mars3d__namespace[_0x55e162(0x13a)][_0x55e162(0x14d)],DEF_HEATSTYLE={'maxOpacity':0.8,'minOpacity':0.1,'blur':0.85,'radius':0x19,'gradient':{0.4:_0x55e162(0x16b),0.6:_0x55e162(0x16c),0.8:_0x55e162(0x123),0.9:'red'}},DEF_STYLE={'arcRadiusScale':1.5,'arcBlurScale':1.5,'vertexFormat':Cesium['EllipsoidSurfaceAppearance']['VERTEX_FORMAT']},HeatLayer=function(_0x3fd61c){var _0x183453=_0x55e162;_inherits(_0x165aba,_0x3fd61c);var _0x5d6a42=_createSuper(_0x165aba);function _0x165aba(){var _0x5ae479=_0x35a1,_0x2e8210,_0x535d24,_0x1c7d2a,_0x5a2c77=arguments[_0x5ae479(0x12d)]>0x0&&arguments[0x0]!==undefined?arguments[0x0]:{};return _classCallCheck(this,_0x165aba),_0x1c7d2a=_0x5d6a42['call'](this,_0x5a2c77),_0x1c7d2a[_0x5ae479(0x140)][_0x5ae479(0x154)]=(_0x2e8210=_0x1c7d2a[_0x5ae479(0x140)][_0x5ae479(0x154)])!==null&&_0x2e8210!==void 0x0?_0x2e8210:document[_0x5ae479(0x144)][_0x5ae479(0x17f)],_0x1c7d2a[_0x5ae479(0x140)][_0x5ae479(0x154)]=Math['min'](_0x1c7d2a[_0x5ae479(0x140)][_0x5ae479(0x154)],0x1388),_0x1c7d2a['options'][_0x5ae479(0xfc)]=(_0x535d24=_0x1c7d2a[_0x5ae479(0x140)][_0x5ae479(0xfc)])!==null&&_0x535d24!==void 0x0?_0x535d24:document['body'][_0x5ae479(0x18b)],_0x1c7d2a[_0x5ae479(0x140)]['minCanvasSize']=Math[_0x5ae479(0x104)](_0x1c7d2a[_0x5ae479(0x140)][_0x5ae479(0xfc)],0x2bc),_0x1c7d2a[_0x5ae479(0x140)][_0x5ae479(0x147)]=_objectSpread2(_objectSpread2({},DEF_HEATSTYLE),_0x1c7d2a[_0x5ae479(0x140)][_0x5ae479(0x147)]||{}),_0x1c7d2a[_0x5ae479(0x140)]['style']=_objectSpread2(_objectSpread2({},DEF_STYLE),_0x1c7d2a['options']['style']||{}),_0x1c7d2a;}return _createClass(_0x165aba,[{'key':_0x183453(0x13a),'get':function _0x2a9326(){return this['_layer'];}},{'key':_0x183453(0x147),'get':function _0x23e055(){var _0x20da5d=_0x183453;return this[_0x20da5d(0x140)][_0x20da5d(0x147)];},'set':function _0x537a42(_0x2b81d1){var _0x1830f5=_0x183453;this['options'][_0x1830f5(0x147)]=mars3d__namespace[_0x1830f5(0x153)][_0x1830f5(0x118)](this[_0x1830f5(0x140)][_0x1830f5(0x147)],_0x2b81d1),this[_0x1830f5(0x163)]&&(this['_heat'][_0x1830f5(0x187)](this[_0x1830f5(0x140)]['heatStyle']),this[_0x1830f5(0xf0)](!![]));}},{'key':_0x183453(0x174),'get':function _0x89b10a(){var _0x5367db=_0x183453;return this[_0x5367db(0x140)]['style'];},'set':function _0x3f5206(_0x49b4bc){var _0x45b3f8=_0x183453;this['options'][_0x45b3f8(0x174)]=mars3d__namespace[_0x45b3f8(0x153)][_0x45b3f8(0x118)](this[_0x45b3f8(0x140)][_0x45b3f8(0x174)],_0x49b4bc);}},{'key':_0x183453(0x15a),'get':function _0x3b48fa(){return this['_positions'];},'set':function _0x52d86d(_0x58a021){var _0x2fbb7b=_0x183453;this[_0x2fbb7b(0x158)](_0x58a021);}},{'key':_0x183453(0x177),'get':function _0x5d5d0f(){var _0x1b9126=_0x183453,_0x1a6217=[];return this[_0x1b9126(0x15d)][_0x1b9126(0x13f)](function(_0x1dcda1){var _0x5bdce5=_0x1b9126;_0x1a6217['push'](_0x1dcda1[_0x5bdce5(0x114)]());}),_0x1a6217;}},{'key':_0x183453(0x17e),'get':function _0x49432d(){return this['_rectangle'];}},{'key':_0x183453(0xf1),'value':function _0x5e6367(_0x3863e1,_0x1fedaa){var _0x539766=_0x183453;_0x3863e1[_0x539766(0x15a)]&&(this[_0x539766(0x15a)]=_0x3863e1[_0x539766(0x15a)]);}},{'key':_0x183453(0x109),'value':function _0x2f2578(){var _0x1bbb20=_0x183453;this['_layer']=new mars3d__namespace[(_0x1bbb20(0x13a))]['GraphicLayer']({'private':!![]});}},{'key':_0x183453(0x141),'value':function _0x56facc(){var _0x14eb72=_0x183453;this[_0x14eb72(0xf2)][_0x14eb72(0x11c)](this['_layer']),this['options']['positions']&&(this[_0x14eb72(0x15a)]=this[_0x14eb72(0x140)][_0x14eb72(0x15a)]),this['options']['flyTo']&&this['flyToByAnimationEnd']();}},{'key':_0x183453(0xee),'value':function _0x3850dd(){var _0x4d3823=_0x183453;this[_0x4d3823(0x147)][_0x4d3823(0xf5)]&&(mars3d__namespace[_0x4d3823(0x142)][_0x4d3823(0x15f)](this[_0x4d3823(0x147)][_0x4d3823(0xf5)]),delete this[_0x4d3823(0x147)][_0x4d3823(0xf5)]),this[_0x4d3823(0x185)](),this[_0x4d3823(0xf2)][_0x4d3823(0x178)](this['_layer']);}},{'key':'addPosition','value':function _0x84d4d(_0x504ce5,_0x292f2f){var _0x36030c=_0x183453;this[_0x36030c(0x152)]=this['_positions']||[],this[_0x36030c(0x152)]['push'](_0x504ce5),this[_0x36030c(0xf0)](_0x292f2f);}},{'key':_0x183453(0x158),'value':function _0xbff756(_0x4d6a84,_0x145025){var _0x485313=_0x183453;this['_positions']=_0x4d6a84,this[_0x485313(0xf0)](_0x145025);}},{'key':'clear','value':function _0x58e9cf(){var _0x29e2ea=_0x183453;this[_0x29e2ea(0x166)]&&(this[_0x29e2ea(0x125)]['removeGraphic'](this[_0x29e2ea(0x166)],!![]),delete this['_graphic']);}},{'key':_0x183453(0xf0),'value':function _0x254017(_0x28ec10){var _0x4dc0ae=_0x183453;if(!this[_0x4dc0ae(0x16a)]||!this['_map']||!this[_0x4dc0ae(0x15a)]||this[_0x4dc0ae(0x15a)][_0x4dc0ae(0x12d)]===0x0)return this;var _0x5c6161=this[_0x4dc0ae(0x12a)]();return this[_0x4dc0ae(0x174)][_0x4dc0ae(0x173)]?this['_graphic']&&_0x28ec10?(this[_0x4dc0ae(0x166)][_0x4dc0ae(0x137)][_0x4dc0ae(0x156)]=_0x5c6161,this[_0x4dc0ae(0x166)][_0x4dc0ae(0x137)][_0x4dc0ae(0x148)]=this['_getArcHeatCanvas']()):this[_0x4dc0ae(0x131)](_0x5c6161):this[_0x4dc0ae(0x166)]&&_0x28ec10?this[_0x4dc0ae(0x166)][_0x4dc0ae(0x137)][_0x4dc0ae(0x156)]=_0x5c6161:this['_createGraphic'](_0x5c6161),this;}},{'key':_0x183453(0x165),'value':function _0x35fae8(_0x554f02){var _0x39a83a=_0x183453;this[_0x39a83a(0x185)](),this[_0x39a83a(0x166)]=new mars3d__namespace['graphic'][(_0x39a83a(0x120))](_objectSpread2(_objectSpread2({},this[_0x39a83a(0x140)]),{},{'rectangle':this[_0x39a83a(0x172)],'appearance':new Cesium['EllipsoidSurfaceAppearance']({'material':new Cesium[(_0x39a83a(0x15e))]({'fabric':{'uniforms':{'image':_0x554f02},'source':HeatMaterial},'translucent':!![]}),'flat':!![]})})),this[_0x39a83a(0x125)][_0x39a83a(0x159)](this['_graphic']);}},{'key':'_createArcGraphic','value':function _0x55cfee(_0x3409cb){var _0x3a0bbb=_0x183453,_0x58f2eb;this[_0x3a0bbb(0x185)]();var _0x4a31f3=Cesium[_0x3a0bbb(0x116)][_0x3a0bbb(0x168)]({'cull':{'enabled':!![]},'depthTest':{'enabled':!![]},'stencilTest':{'enabled':!![],'frontFunction':Cesium[_0x3a0bbb(0x162)][_0x3a0bbb(0x130)],'frontOperation':{'fail':Cesium[_0x3a0bbb(0x189)][_0x3a0bbb(0x182)],'zFail':Cesium[_0x3a0bbb(0x189)][_0x3a0bbb(0x182)],'zPass':Cesium[_0x3a0bbb(0x189)][_0x3a0bbb(0x16e)]},'backFunction':Cesium[_0x3a0bbb(0x162)][_0x3a0bbb(0x130)],'backOperation':{'fail':Cesium[_0x3a0bbb(0x189)][_0x3a0bbb(0x182)],'zFail':Cesium[_0x3a0bbb(0x189)]['KEEP'],'zPass':Cesium[_0x3a0bbb(0x189)][_0x3a0bbb(0x16e)]},'reference':0x2,'mask':0x2},'blending':Cesium[_0x3a0bbb(0x176)][_0x3a0bbb(0x18e)]}),_0x42f471=Math[_0x3a0bbb(0x15c)]((_0x58f2eb=this['style'][_0x3a0bbb(0x161)])!==null&&_0x58f2eb!==void 0x0?_0x58f2eb:this[_0x3a0bbb(0x14c)]*0.02)+0.1;this[_0x3a0bbb(0x174)][_0x3a0bbb(0x161)]&&delete this[_0x3a0bbb(0x174)][_0x3a0bbb(0x161)];var _0x4c19b1=(this[_0x3a0bbb(0x174)][_0x3a0bbb(0x16f)],0x64),_0x442741=Math['max'](this[_0x3a0bbb(0x172)][_0x3a0bbb(0x183)],this[_0x3a0bbb(0x172)][_0x3a0bbb(0x100)]);this['style'][_0x3a0bbb(0x13c)]=_0x442741/=_0x4c19b1,this[_0x3a0bbb(0x166)]=new mars3d__namespace[(_0x3a0bbb(0xf4))][(_0x3a0bbb(0x120))](_objectSpread2(_objectSpread2({},this['options']),{},{'rectangle':this['_rectangle'],'appearance':new Cesium[(_0x3a0bbb(0x151))]({'aboveGround':!![],'renderState':_0x4a31f3,'material':new Cesium['Material']({'fabric':{'uniforms':{'image':_0x3409cb,'repeat':new Cesium['Cartesian2'](0x1,0x1),'color':new Cesium['Color'](0x1,0x1,0x1,0.01),'bumpMap':this[_0x3a0bbb(0x146)]()},'source':HeatMaterial},'translucent':!![]}),'vertexShaderSource':_0x3a0bbb(0x11e)[_0x3a0bbb(0x13d)](_0x42f471,_0x3a0bbb(0x124)),'flat':!![]})})),this[_0x3a0bbb(0x125)]['addGraphic'](this['_graphic']);}},{'key':_0x183453(0x121),'value':function _0x467eff(_0x303b1e){var _0x191838=_0x183453;return _0x303b1e!==null&&_0x303b1e!==void 0x0&&_0x303b1e[_0x191838(0xf6)]&&this[_0x191838(0x172)]?mars3d__namespace[_0x191838(0xf9)][_0x191838(0xed)](this[_0x191838(0x172)]):this[_0x191838(0x172)];}},{'key':_0x183453(0x12a),'value':function _0x15e671(){var _0x14cb60=_0x183453,_0x2ae41f=this,_0x51dc52,_0x4bc327,_0x2b126d,_0x2e18fc,_0x2a3524=this[_0x14cb60(0x152)],_0x4930fc=[],_0xb6063d,_0x497bc8,_0x106f1e,_0x53eb1b;_0x2a3524[_0x14cb60(0x13f)](function(_0x403e1d){var _0x1123e5=_0x14cb60,_0x5dd311=mars3d__namespace[_0x1123e5(0x14e)][_0x1123e5(0x157)](_0x403e1d);if(!_0x5dd311)return;_0x5dd311[_0x1123e5(0xf3)]=_0x403e1d[_0x1123e5(0xf3)]||0x1,!_0x2ae41f[_0x1123e5(0x140)][_0x1123e5(0x17e)]&&(_0xb6063d===undefined?(_0xb6063d=_0x5dd311[_0x1123e5(0xfa)],_0x497bc8=_0x5dd311[_0x1123e5(0xfa)],_0x106f1e=_0x5dd311['lat'],_0x53eb1b=_0x5dd311[_0x1123e5(0x101)]):(_0xb6063d=Math['min'](_0xb6063d,_0x5dd311[_0x1123e5(0xfa)]),_0x497bc8=Math[_0x1123e5(0x104)](_0x497bc8,_0x5dd311[_0x1123e5(0xfa)]),_0x106f1e=Math[_0x1123e5(0x170)](_0x106f1e,_0x5dd311[_0x1123e5(0x101)]),_0x53eb1b=Math[_0x1123e5(0x104)](_0x53eb1b,_0x5dd311[_0x1123e5(0x101)]))),_0x4930fc[_0x1123e5(0x17c)](_0x5dd311);});var _0x1cd977=this[_0x14cb60(0x140)][_0x14cb60(0x17e)]||{'xmin':_0xb6063d,'xmax':_0x497bc8,'ymin':_0x106f1e,'ymax':_0x53eb1b},_0x4c4ca9=getMercatorBounds(_0x1cd977),_0x12a528=Math[_0x14cb60(0xf8)](_0x4c4ca9[_0x14cb60(0x10f)]-_0x4c4ca9[_0x14cb60(0x10b)]),_0xf095f1=Math[_0x14cb60(0xf8)](_0x4c4ca9[_0x14cb60(0x18c)]-_0x4c4ca9['ymin']),_0x17c2cc=Math[_0x14cb60(0x104)](_0x12a528,_0xf095f1),_0x195be7=Math['min'](_0x12a528,_0xf095f1);this[_0x14cb60(0x14c)]=_0x17c2cc;var _0x4718a8=0x1;if(_0x17c2cc>this[_0x14cb60(0x140)][_0x14cb60(0x154)])_0x4718a8=_0x17c2cc/this['options'][_0x14cb60(0x154)],_0x195be7/_0x4718a8<this[_0x14cb60(0x140)][_0x14cb60(0xfc)]&&(_0x4718a8=_0x195be7/this[_0x14cb60(0x140)][_0x14cb60(0xfc)]);else _0x195be7<this['options'][_0x14cb60(0xfc)]&&(_0x4718a8=_0x195be7/this[_0x14cb60(0x140)][_0x14cb60(0xfc)],_0x17c2cc/_0x4718a8>this[_0x14cb60(0x140)][_0x14cb60(0x154)]&&(_0x4718a8=_0x17c2cc/this[_0x14cb60(0x140)][_0x14cb60(0x154)]));var _0x5b37cc=this[_0x14cb60(0x147)][_0x14cb60(0x167)]*1.5,_0x49ae81=_0x12a528/_0x4718a8+_0x5b37cc*0x2,_0x3cbb16=_0xf095f1/_0x4718a8+_0x5b37cc*0x2,_0x26140a=_0x5b37cc*_0x4718a8;_0x4c4ca9['xmin']-=_0x26140a,_0x4c4ca9[_0x14cb60(0x106)]-=_0x26140a,_0x4c4ca9[_0x14cb60(0x10f)]+=_0x26140a,_0x4c4ca9[_0x14cb60(0x18c)]+=_0x26140a,this[_0x14cb60(0xff)]=_0x4718a8,_0x1cd977=geLatLngBounds(_0x4c4ca9),this[_0x14cb60(0x172)]=Cesium[_0x14cb60(0x113)][_0x14cb60(0x10a)](_0x1cd977['xmin'],_0x1cd977[_0x14cb60(0x106)],_0x1cd977[_0x14cb60(0x10f)],_0x1cd977[_0x14cb60(0x18c)]);var _0x1e064d=(_0x51dc52=_0x4930fc[0x0][_0x14cb60(0xf3)])!==null&&_0x51dc52!==void 0x0?_0x51dc52:0x1,_0x5e1781=(_0x4bc327=_0x4930fc[0x0][_0x14cb60(0xf3)])!==null&&_0x4bc327!==void 0x0?_0x4bc327:0x0,_0x551980=[];_0x4930fc[_0x14cb60(0x13f)](function(_0x2c261d){var _0x44aae2=_0x14cb60,_0x1c4e71=mars3d__namespace['PointTrans'][_0x44aae2(0x13b)]([_0x2c261d[_0x44aae2(0xfa)],_0x2c261d[_0x44aae2(0x101)]]),_0x3cc362=_0x2c261d[_0x44aae2(0xf3)]||0x1,_0x55bbdc=Math[_0x44aae2(0xfe)]((_0x1c4e71[0x0]-_0x4c4ca9[_0x44aae2(0x10b)])/_0x4718a8),_0x245387=Math[_0x44aae2(0xfe)]((_0x4c4ca9['ymax']-_0x1c4e71[0x1])/_0x4718a8);_0x1e064d=Math['max'](_0x1e064d,_0x3cc362),_0x5e1781=Math[_0x44aae2(0x170)](_0x5e1781,_0x3cc362),_0x551980[_0x44aae2(0x17c)]({'x':_0x55bbdc,'y':_0x245387,'value':_0x3cc362});});var _0x1fbeb0={'min':(_0x2b126d=this[_0x14cb60(0x140)][_0x14cb60(0x170)])!==null&&_0x2b126d!==void 0x0?_0x2b126d:_0x5e1781,'max':(_0x2e18fc=this[_0x14cb60(0x140)][_0x14cb60(0x104)])!==null&&_0x2e18fc!==void 0x0?_0x2e18fc:_0x1e064d,'data':_0x551980};this[_0x14cb60(0x15b)]=_0x1fbeb0;(!this[_0x14cb60(0x12b)]||_0x4c4ca9['xmin']!==this[_0x14cb60(0x12b)][_0x14cb60(0x10b)]||_0x4c4ca9['ymin']!==this[_0x14cb60(0x12b)][_0x14cb60(0x106)]||_0x4c4ca9[_0x14cb60(0x10f)]!==this['_last_mBounds'][_0x14cb60(0x10f)]||_0x4c4ca9[_0x14cb60(0x18c)]!==this[_0x14cb60(0x12b)]['ymax'])&&(this['_last_mBounds']=_0x4c4ca9,!this[_0x14cb60(0x147)][_0x14cb60(0xf5)]&&(this[_0x14cb60(0x147)][_0x14cb60(0xf5)]=mars3d__namespace[_0x14cb60(0x142)]['create'](_0x14cb60(0x126),'mars3d-heatmap\x20mars3d-hideDiv',this[_0x14cb60(0xf2)]['container'])),this['heatStyle'][_0x14cb60(0xf5)][_0x14cb60(0x174)][_0x14cb60(0xfb)]=_0x14cb60(0x17a)[_0x14cb60(0x13d)](_0x49ae81,'px;height:')['concat'](_0x3cbb16,'px;'),!this[_0x14cb60(0x163)]?this[_0x14cb60(0x163)]=h337__namespace[_0x14cb60(0x136)](this[_0x14cb60(0x147)]):this[_0x14cb60(0x163)][_0x14cb60(0x187)](this[_0x14cb60(0x147)]));this[_0x14cb60(0x163)][_0x14cb60(0x119)](_0x1fbeb0);var _0x3fd53c=mars3d__namespace[_0x14cb60(0x142)][_0x14cb60(0xe9)](this[_0x14cb60(0x163)][_0x14cb60(0x133)][_0x14cb60(0x105)]);return _0x3fd53c;}},{'key':_0x183453(0x146),'value':function _0x4a6bfc(){var _0x4d2e68=_0x183453;this[_0x4d2e68(0x163)][_0x4d2e68(0x187)]({'radius':this[_0x4d2e68(0x147)][_0x4d2e68(0x167)]*this[_0x4d2e68(0x174)][_0x4d2e68(0x164)],'blur':this[_0x4d2e68(0x147)][_0x4d2e68(0x18a)]*this[_0x4d2e68(0x174)]['arcBlurScale'],'gradient':this[_0x4d2e68(0x147)][_0x4d2e68(0x14f)]||{0.25:'rgb(0,0,0)',0.55:_0x4d2e68(0x11f),0.85:_0x4d2e68(0x149),0x1:'rgb(255,255,255)'}});var _0x19b9f0=mars3d__namespace[_0x4d2e68(0x142)][_0x4d2e68(0xe9)](this[_0x4d2e68(0x163)][_0x4d2e68(0x133)][_0x4d2e68(0x105)]);return this['_heat'][_0x4d2e68(0x187)](this[_0x4d2e68(0x140)][_0x4d2e68(0x147)]),_0x19b9f0;}},{'key':_0x183453(0x18d),'value':function _0x32a136(_0x513c75){var _0x398c1a=_0x183453,_0x2903a4=mars3d__namespace[_0x398c1a(0x14e)][_0x398c1a(0x157)](_0x513c75);if(!_0x2903a4)return{};var _0x490e64=mars3d__namespace[_0x398c1a(0x14a)][_0x398c1a(0x13b)]([_0x2903a4[_0x398c1a(0xfa)],_0x2903a4['lat']]),_0x5fb40b=this[_0x398c1a(0x12b)],_0x373fc3=Math[_0x398c1a(0xfe)]((_0x490e64[0x0]-_0x5fb40b[_0x398c1a(0x10b)])/this[_0x398c1a(0xff)]),_0x380b99=Math[_0x398c1a(0xfe)]((_0x5fb40b['ymax']-_0x490e64[0x1])/this[_0x398c1a(0xff)]),_0x101747=this['_heat'][_0x398c1a(0x171)]({'x':_0x373fc3,'y':_0x380b99}),_0x49b68f=this[_0x398c1a(0x163)][_0x398c1a(0x133)][_0x398c1a(0x11b)][_0x398c1a(0xec)](_0x373fc3-0x1,_0x380b99-0x1,0x1,0x1)[_0x398c1a(0x169)];return{'x':_0x373fc3,'y':_0x380b99,'value':_0x101747,'color':_0x398c1a(0x11d)+_0x49b68f[0x0]+','+_0x49b68f[0x1]+','+_0x49b68f[0x2]+','+_0x49b68f[0x3]+')'};}}]),_0x165aba;}(BaseLayer);mars3d__namespace[_0x55e162(0x13a)][_0x55e162(0x108)]=HeatLayer,mars3d__namespace['LayerUtil'][_0x55e162(0x10c)](_0x55e162(0x150),HeatLayer);function getMercatorBounds(_0x5c18c5){var _0x54ae51=_0x55e162,_0x21687a=mars3d__namespace[_0x54ae51(0x14a)]['lonlat2mercator']([_0x5c18c5[_0x54ae51(0x10b)],_0x5c18c5[_0x54ae51(0x106)]]),_0x3f4c02=mars3d__namespace['PointTrans'][_0x54ae51(0x13b)]([_0x5c18c5[_0x54ae51(0x10f)],_0x5c18c5['ymax']]);return{'xmin':_0x21687a[0x0],'ymin':_0x21687a[0x1],'xmax':_0x3f4c02[0x0],'ymax':_0x3f4c02[0x1]};}function geLatLngBounds(_0x5ae62a){var _0x46ab24=_0x55e162,_0x42a0af=mars3d__namespace['PointTrans'][_0x46ab24(0x180)]([_0x5ae62a[_0x46ab24(0x10b)],_0x5ae62a[_0x46ab24(0x106)]]),_0x484cac=mars3d__namespace[_0x46ab24(0x14a)]['mercator2lonlat']([_0x5ae62a['xmax'],_0x5ae62a[_0x46ab24(0x18c)]]);return{'xmin':_0x42a0af[0x0],'ymin':_0x42a0af[0x1],'xmax':_0x484cac[0x0],'ymax':_0x484cac[0x1]};}exports[_0x55e162(0x108)]=HeatLayer,Object[_0x55e162(0x13e)](exports,_0x55e162(0x138),{'value':!![]});
}));
