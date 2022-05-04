define(["./GeometryOffsetAttribute-4d39b441","./Transforms-06c05e21","./Matrix2-e6265fb0","./RuntimeError-ac440aa5","./ComponentDatatype-a9820060","./defaultValue-69ee94f4","./GeometryAttribute-b7edcc35","./GeometryAttributes-1b4134a9","./_commonjsHelpers-3aae1032-15991586","./combine-0259f56f","./WebGLConstants-f63312fc"],(function(e,t,n,a,i,r,o,u,s,m,f){"use strict";const c=new n.Cartesian3;function p(e){const t=(e=r.defaultValue(e,r.defaultValue.EMPTY_OBJECT)).minimum,a=e.maximum;this._min=n.Cartesian3.clone(t),this._max=n.Cartesian3.clone(a),this._offsetAttribute=e.offsetAttribute,this._workerName="createBoxOutlineGeometry"}p.fromDimensions=function(e){const t=(e=r.defaultValue(e,r.defaultValue.EMPTY_OBJECT)).dimensions,a=n.Cartesian3.multiplyByScalar(t,.5,new n.Cartesian3);return new p({minimum:n.Cartesian3.negate(a,new n.Cartesian3),maximum:a,offsetAttribute:e.offsetAttribute})},p.fromAxisAlignedBoundingBox=function(e){return new p({minimum:e.minimum,maximum:e.maximum})},p.packedLength=2*n.Cartesian3.packedLength+1,p.pack=function(e,t,a){return a=r.defaultValue(a,0),n.Cartesian3.pack(e._min,t,a),n.Cartesian3.pack(e._max,t,a+n.Cartesian3.packedLength),t[a+2*n.Cartesian3.packedLength]=r.defaultValue(e._offsetAttribute,-1),t};const l=new n.Cartesian3,d=new n.Cartesian3,y={minimum:l,maximum:d,offsetAttribute:void 0};return p.unpack=function(e,t,a){t=r.defaultValue(t,0);const i=n.Cartesian3.unpack(e,t,l),o=n.Cartesian3.unpack(e,t+n.Cartesian3.packedLength,d),u=e[t+2*n.Cartesian3.packedLength];return r.defined(a)?(a._min=n.Cartesian3.clone(i,a._min),a._max=n.Cartesian3.clone(o,a._max),a._offsetAttribute=-1===u?void 0:u,a):(y.offsetAttribute=-1===u?void 0:u,new p(y))},p.createGeometry=function(a){const s=a._min,m=a._max;if(n.Cartesian3.equals(s,m))return;const f=new u.GeometryAttributes,p=new Uint16Array(24),l=new Float64Array(24);l[0]=s.x,l[1]=s.y,l[2]=s.z,l[3]=m.x,l[4]=s.y,l[5]=s.z,l[6]=m.x,l[7]=m.y,l[8]=s.z,l[9]=s.x,l[10]=m.y,l[11]=s.z,l[12]=s.x,l[13]=s.y,l[14]=m.z,l[15]=m.x,l[16]=s.y,l[17]=m.z,l[18]=m.x,l[19]=m.y,l[20]=m.z,l[21]=s.x,l[22]=m.y,l[23]=m.z,f.position=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:l}),p[0]=4,p[1]=5,p[2]=5,p[3]=6,p[4]=6,p[5]=7,p[6]=7,p[7]=4,p[8]=0,p[9]=1,p[10]=1,p[11]=2,p[12]=2,p[13]=3,p[14]=3,p[15]=0,p[16]=0,p[17]=4,p[18]=1,p[19]=5,p[20]=2,p[21]=6,p[22]=3,p[23]=7;const d=n.Cartesian3.subtract(m,s,c),y=.5*n.Cartesian3.magnitude(d);if(r.defined(a._offsetAttribute)){const t=l.length,n=new Uint8Array(t/3),r=a._offsetAttribute===e.GeometryOffsetAttribute.NONE?0:1;e.arrayFill(n,r),f.applyOffset=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}return new o.Geometry({attributes:f,indices:p,primitiveType:o.PrimitiveType.LINES,boundingSphere:new t.BoundingSphere(n.Cartesian3.ZERO,y),offsetAttribute:a._offsetAttribute})},function(e,t){return r.defined(t)&&(e=p.unpack(e,t)),p.createGeometry(e)}}));
