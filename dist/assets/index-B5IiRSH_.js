var pc=Object.defineProperty;var mc=(s,t,e)=>t in s?pc(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var F=(s,t,e)=>mc(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Do="176",gc=0,ra=1,_c=2,wl=1,vc=2,pn=3,Ln=0,Le=1,mn=2,Pn=0,Ai=1,oa=2,aa=3,la=4,yc=5,qn=100,xc=101,Mc=102,Sc=103,Ec=104,bc=200,wc=201,Tc=202,Ac=203,Vr=204,Gr=205,Rc=206,Cc=207,Pc=208,Ic=209,Dc=210,Lc=211,Uc=212,Nc=213,Fc=214,Wr=0,Xr=1,qr=2,Ci=3,jr=4,$r=5,Yr=6,Kr=7,Tl=0,Oc=1,Bc=2,In=0,kc=1,zc=2,Hc=3,Vc=4,Gc=5,Wc=6,Xc=7,Al=300,Pi=301,Ii=302,Jr=303,Zr=304,tr=306,Qr=1e3,$n=1001,to=1002,Be=1003,qc=1004,cs=1005,sn=1006,rr=1007,Yn=1008,on=1009,Rl=1010,Cl=1011,Qi=1012,Lo=1013,Jn=1014,rn=1015,ss=1016,Uo=1017,No=1018,ts=1020,Pl=35902,Il=1021,Dl=1022,tn=1023,es=1026,ns=1027,Fo=1028,Oo=1029,Ll=1030,Bo=1031,ko=1033,zs=33776,Hs=33777,Vs=33778,Gs=33779,eo=35840,no=35841,io=35842,so=35843,ro=36196,oo=37492,ao=37496,lo=37808,co=37809,ho=37810,uo=37811,fo=37812,po=37813,mo=37814,go=37815,_o=37816,vo=37817,yo=37818,xo=37819,Mo=37820,So=37821,Ws=36492,Eo=36494,bo=36495,Ul=36283,wo=36284,To=36285,Ao=36286,jc=3200,$c=3201,Nl=0,Yc=1,Cn="",We="srgb",Di="srgb-linear",js="linear",te="srgb",si=7680,ca=519,Kc=512,Jc=513,Zc=514,Fl=515,Qc=516,th=517,eh=518,nh=519,Ro=35044,ih=35048,ha="300 es",gn=2e3,$s=2001;class ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],or=Math.PI/180,Co=180/Math.PI;function Dn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[s&255]+Ee[s>>8&255]+Ee[s>>16&255]+Ee[s>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function zt(s,t,e){return Math.max(t,Math.min(e,s))}function sh(s,t){return(s%t+t)%t}function ar(s,t,e){return(1-e)*s+e*t}function nn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ee(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,i,r,o,a,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],u=i[6],b=i[1],E=i[4],x=i[7],D=i[2],A=i[5],R=i[8];return r[0]=o*_+a*b+l*D,r[3]=o*m+a*E+l*A,r[6]=o*u+a*x+l*R,r[1]=c*_+h*b+d*D,r[4]=c*m+h*E+d*A,r[7]=c*u+h*x+d*R,r[2]=f*_+p*b+g*D,r[5]=f*m+p*E+g*A,r[8]=f*u+p*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=e*d+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(lr.makeScale(t,e)),this}rotate(t){return this.premultiply(lr.makeRotation(-t)),this}translate(t,e){return this.premultiply(lr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lr=new Nt;function Ol(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ys(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rh(){const s=Ys("canvas");return s.style.display="block",s}const ua={};function Xs(s){s in ua||(ua[s]=!0,console.warn(s))}function oh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ah(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function lh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const da=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fa=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ch(){const s={enabled:!0,workingColorSpace:Di,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===te&&(i.r=_n(i.r),i.g=_n(i.g),i.b=_n(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===te&&(i.r=Ri(i.r),i.g=Ri(i.g),i.b=Ri(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Cn?js:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Di]:{primaries:t,whitePoint:n,transfer:js,toXYZ:da,fromXYZ:fa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:n,transfer:te,toXYZ:da,fromXYZ:fa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),s}const $t=ch();function _n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ri(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ri;class hh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ri===void 0&&(ri=Ys("canvas")),ri.width=t.width,ri.height=t.height;const i=ri.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ri}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ys("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=_n(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_n(e[n]/255)*255):e[n]=_n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uh=0;class zo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(cr(i[o].image)):r.push(cr(i[o]))}else r=cr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function cr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dh=0;class we extends ti{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=$n,i=$n,r=sn,o=Yn,a=tn,l=on,c=we.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Dn(),this.name="",this.source=new zo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Al)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qr:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case to:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qr:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case to:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=Al;we.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,i=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,x=(p+1)/2,D=(u+1)/2,A=(h+f)/4,R=(d+_)/4,P=(g+m)/4;return E>x&&E>D?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=A/n,r=R/n):x>D?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=P/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=R/r,i=P/r),this.set(n,i,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-_)/b,this.z=(f-h)/b,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this.w=zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this.w=zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fh extends ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth?n.depth:1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const i={width:t,height:e,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const r=new we(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new zo(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends fh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bl extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ph extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==p||h!==g){let m=1-a;const u=l*f+c*p+h*g+d*_,b=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const D=Math.sqrt(E),A=Math.atan2(D,u*b);m=Math.sin(m*A)/D,a=Math.sin(a*A)/D}const x=a*b;if(l=l*m+f*x,c=c*m+p*x,h=h*m+g*x,d=d*m+_*x,m===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*p-c*f,t[e+1]=l*g+h*f+c*d-a*p,t[e+2]=c*g+h*p+a*f-l*d,t[e+3]=h*g-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hr.copy(this).projectOnVector(t),this.sub(hr)}reflect(t){return this.sub(hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hr=new T,pa=new rs;class ei{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Je):Je.fromBufferAttribute(r,o),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hs.copy(n.boundingBox)),hs.applyMatrix4(t.matrixWorld),this.union(hs)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bi),us.subVectors(this.max,Bi),oi.subVectors(t.a,Bi),ai.subVectors(t.b,Bi),li.subVectors(t.c,Bi),yn.subVectors(ai,oi),xn.subVectors(li,ai),On.subVectors(oi,li);let e=[0,-yn.z,yn.y,0,-xn.z,xn.y,0,-On.z,On.y,yn.z,0,-yn.x,xn.z,0,-xn.x,On.z,0,-On.x,-yn.y,yn.x,0,-xn.y,xn.x,0,-On.y,On.x,0];return!ur(e,oi,ai,li,us)||(e=[1,0,0,0,1,0,0,0,1],!ur(e,oi,ai,li,us))?!1:(ds.crossVectors(yn,xn),e=[ds.x,ds.y,ds.z],ur(e,oi,ai,li,us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ln=[new T,new T,new T,new T,new T,new T,new T,new T],Je=new T,hs=new ei,oi=new T,ai=new T,li=new T,yn=new T,xn=new T,On=new T,Bi=new T,us=new T,ds=new T,Bn=new T;function ur(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Bn.fromArray(s,r);const a=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),l=t.dot(Bn),c=e.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const mh=new ei,ki=new T,dr=new T;class Ui{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);const e=ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ki,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(dr)),this.expandByPoint(ki.copy(t.center).sub(dr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new T,fr=new T,fs=new T,Mn=new T,pr=new T,ps=new T,mr=new T;class Ho{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){fr.copy(t).add(e).multiplyScalar(.5),fs.copy(e).sub(t).normalize(),Mn.copy(this.origin).sub(fr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(fs),a=Mn.dot(this.direction),l=-Mn.dot(fs),c=Mn.lengthSq(),h=Math.abs(1-o*o);let d,f,p,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(fr).addScaledVector(fs,f),p}intersectSphere(t,e){cn.subVectors(t.center,this.origin);const n=cn.dot(this.direction),i=cn.dot(cn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,n,i,r){pr.subVectors(e,t),ps.subVectors(n,t),mr.crossVectors(pr,ps);let o=this.direction.dot(mr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,t);const l=a*this.direction.dot(ps.crossVectors(Mn,ps));if(l<0)return null;const c=a*this.direction.dot(pr.cross(Mn));if(c<0||l+c>o)return null;const h=-a*Mn.dot(mr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,n,i,r,o,a,l,c,h,d,f,p,g,_,m){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,f,p,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,d,f,p,g,_,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=i,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ci.setFromMatrixColumn(t,0).length(),r=1/ci.setFromMatrixColumn(t,1).length(),o=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,g=c*h,_=c*d;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,g=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gh,t,_h)}lookAt(t,e,n){const i=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Sn.crossVectors(n,Ne),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Sn.crossVectors(n,Ne)),Sn.normalize(),ms.crossVectors(Ne,Sn),i[0]=Sn.x,i[4]=ms.x,i[8]=Ne.x,i[1]=Sn.y,i[5]=ms.y,i[9]=Ne.y,i[2]=Sn.z,i[6]=ms.z,i[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],u=n[14],b=n[3],E=n[7],x=n[11],D=n[15],A=i[0],R=i[4],P=i[8],S=i[12],v=i[1],C=i[5],k=i[9],B=i[13],X=i[2],K=i[6],q=i[10],Z=i[14],G=i[3],st=i[7],ut=i[11],Mt=i[15];return r[0]=o*A+a*v+l*X+c*G,r[4]=o*R+a*C+l*K+c*st,r[8]=o*P+a*k+l*q+c*ut,r[12]=o*S+a*B+l*Z+c*Mt,r[1]=h*A+d*v+f*X+p*G,r[5]=h*R+d*C+f*K+p*st,r[9]=h*P+d*k+f*q+p*ut,r[13]=h*S+d*B+f*Z+p*Mt,r[2]=g*A+_*v+m*X+u*G,r[6]=g*R+_*C+m*K+u*st,r[10]=g*P+_*k+m*q+u*ut,r[14]=g*S+_*B+m*Z+u*Mt,r[3]=b*A+E*v+x*X+D*G,r[7]=b*R+E*C+x*K+D*st,r[11]=b*P+E*k+x*q+D*ut,r[15]=b*S+E*B+x*Z+D*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],u=t[15];return g*(+r*l*d-i*c*d-r*a*f+n*c*f+i*a*p-n*l*p)+_*(+e*l*p-e*c*f+r*o*f-i*o*p+i*c*h-r*l*h)+m*(+e*c*d-e*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+u*(-i*a*h-e*l*d+e*a*f+i*o*d-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],u=t[15],b=d*m*c-_*f*c+_*l*p-a*m*p-d*l*u+a*f*u,E=g*f*c-h*m*c-g*l*p+o*m*p+h*l*u-o*f*u,x=h*_*c-g*d*c+g*a*p-o*_*p-h*a*u+o*d*u,D=g*d*l-h*_*l-g*a*f+o*_*f+h*a*m-o*d*m,A=e*b+n*E+i*x+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=b*R,t[1]=(_*f*r-d*m*r-_*i*p+n*m*p+d*i*u-n*f*u)*R,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*u+n*l*u)*R,t[3]=(d*l*r-a*f*r-d*i*c+n*f*c+a*i*p-n*l*p)*R,t[4]=E*R,t[5]=(h*m*r-g*f*r+g*i*p-e*m*p-h*i*u+e*f*u)*R,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*u-e*l*u)*R,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*p+e*l*p)*R,t[8]=x*R,t[9]=(g*d*r-h*_*r-g*n*p+e*_*p+h*n*u-e*d*u)*R,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*u+e*a*u)*R,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*p-e*a*p)*R,t[12]=D*R,t[13]=(h*_*i-g*d*i+g*n*f-e*_*f-h*n*m+e*d*m)*R,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*R,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*f+e*a*f)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,p=r*h,g=r*d,_=o*h,m=o*d,u=a*d,b=l*c,E=l*h,x=l*d,D=n.x,A=n.y,R=n.z;return i[0]=(1-(_+u))*D,i[1]=(p+x)*D,i[2]=(g-E)*D,i[3]=0,i[4]=(p-x)*A,i[5]=(1-(f+u))*A,i[6]=(m+b)*A,i[7]=0,i[8]=(g+E)*R,i[9]=(m-b)*R,i[10]=(1-(f+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ci.set(i[0],i[1],i[2]).length();const o=ci.set(i[4],i[5],i[6]).length(),a=ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ze.copy(this);const c=1/r,h=1/o,d=1/a;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=d,Ze.elements[9]*=d,Ze.elements[10]*=d,e.setFromRotationMatrix(Ze),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=gn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let p,g;if(a===gn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===$s)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=gn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-r),f=(e+t)*c,p=(n+i)*h;let g,_;if(a===gn)g=(o+r)*d,_=-2*d;else if(a===$s)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ci=new T,Ze=new Zt,gh=new T(0,0,0),_h=new T(1,1,1),Sn=new T,ms=new T,Ne=new T,ma=new Zt,ga=new rs;class $e{constructor(t=0,e=0,n=0,i=$e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ma.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ma,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ga.setFromEuler(this),this.setFromQuaternion(ga,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$e.DEFAULT_ORDER="XYZ";class Vo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vh=0;const _a=new T,hi=new rs,hn=new Zt,gs=new T,zi=new T,yh=new T,xh=new rs,va=new T(1,0,0),ya=new T(0,1,0),xa=new T(0,0,1),Ma={type:"added"},Mh={type:"removed"},ui={type:"childadded",child:null},gr={type:"childremoved",child:null};class me extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new T,e=new $e,n=new rs,i=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Nt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(va,t)}rotateY(t){return this.rotateOnAxis(ya,t)}rotateZ(t){return this.rotateOnAxis(xa,t)}translateOnAxis(t,e){return _a.copy(t).applyQuaternion(this.quaternion),this.position.add(_a.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(va,t)}translateY(t){return this.translateOnAxis(ya,t)}translateZ(t){return this.translateOnAxis(xa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gs.copy(t):gs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(zi,gs,this.up):hn.lookAt(gs,zi,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(hn),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ma),ui.child=t,this.dispatchEvent(ui),ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mh),gr.child=t,this.dispatchEvent(gr),gr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ma),ui.child=t,this.dispatchEvent(ui),ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,t,yh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,xh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}me.DEFAULT_UP=new T(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qe=new T,un=new T,_r=new T,dn=new T,di=new T,fi=new T,Sa=new T,vr=new T,yr=new T,xr=new T,Mr=new ue,Sr=new ue,Er=new ue;class qe{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Qe.subVectors(t,e),i.cross(Qe);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Qe.subVectors(i,e),un.subVectors(n,e),_r.subVectors(t,e);const o=Qe.dot(Qe),a=Qe.dot(un),l=Qe.dot(_r),c=un.dot(un),h=un.dot(_r),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(o,dn.y),l.addScaledVector(a,dn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Mr.setScalar(0),Sr.setScalar(0),Er.setScalar(0),Mr.fromBufferAttribute(t,e),Sr.fromBufferAttribute(t,n),Er.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Mr,r.x),o.addScaledVector(Sr,r.y),o.addScaledVector(Er,r.z),o}static isFrontFacing(t,e,n,i){return Qe.subVectors(n,e),un.subVectors(t,e),Qe.cross(un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Qe.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;di.subVectors(i,n),fi.subVectors(r,n),vr.subVectors(t,n);const l=di.dot(vr),c=fi.dot(vr);if(l<=0&&c<=0)return e.copy(n);yr.subVectors(t,i);const h=di.dot(yr),d=fi.dot(yr);if(h>=0&&d<=h)return e.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(di,o);xr.subVectors(t,r);const p=di.dot(xr),g=fi.dot(xr);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(fi,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Sa.subVectors(r,i),a=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector(Sa,a);const u=1/(m+_+f);return o=_*u,a=f*u,e.copy(n).addScaledVector(di,o).addScaledVector(fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},_s={h:0,s:0,l:0};function br(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=sh(t,1),e=zt(e,0,1),n=zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=br(o,r,t+1/3),this.g=br(o,r,t),this.b=br(o,r,t-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=kl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_n(t.r),this.g=_n(t.g),this.b=_n(t.b),this}copyLinearToSRGB(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return $t.fromWorkingColorSpace(be.copy(this),t),Math.round(zt(be.r*255,0,255))*65536+Math.round(zt(be.g*255,0,255))*256+Math.round(zt(be.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(be.copy(this),e);const n=be.r,i=be.g,r=be.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=We){$t.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,i=be.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(_s);const n=ar(En.h,_s.h,e),i=ar(En.s,_s.s,e),r=ar(En.l,_s.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Ht;Ht.NAMES=kl;let Sh=0;class ni extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=Ai,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vr,this.blendDst=Gr,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vr&&(n.blendSrc=this.blendSrc),this.blendDst!==Gr&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ca&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zl extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new T,vs=new gt;let Eh=0;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ro,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vs.fromBufferAttribute(this,e),vs.applyMatrix3(t),this.setXY(e,vs.x,vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ro&&(t.usage=this.usage),t}}class Hl extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vl extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bh=0;const Ve=new Zt,wr=new me,pi=new T,Fe=new ei,Hi=new ei,ve=new T;class Te extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ol(t)?Vl:Hl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return wr.lookAt(t),wr.updateMatrix(),this.applyMatrix4(wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Hi.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Fe.min,Hi.min),Fe.expandByPoint(ve),ve.addVectors(Fe.max,Hi.max),Fe.expandByPoint(ve)):(Fe.expandByPoint(Hi.min),Fe.expandByPoint(Hi.max))}Fe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ve.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ve.fromBufferAttribute(a,c),l&&(pi.fromBufferAttribute(t,c),ve.add(pi)),i=Math.max(i,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new T,l[P]=new T;const c=new T,h=new T,d=new T,f=new gt,p=new gt,g=new gt,_=new T,m=new T;function u(P,S,v){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,v),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),h.sub(c),d.sub(c),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),a[P].add(_),a[S].add(_),a[v].add(_),l[P].add(m),l[S].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,S=b.length;P<S;++P){const v=b[P],C=v.start,k=v.count;for(let B=C,X=C+k;B<X;B+=3)u(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const E=new T,x=new T,D=new T,A=new T;function R(P){D.fromBufferAttribute(i,P),A.copy(D);const S=a[P];E.copy(S),E.sub(D.multiplyScalar(D.dot(S))).normalize(),x.crossVectors(A,S);const C=x.dot(l[P])<0?-1:1;o.setXYZW(P,E.x,E.y,E.z,C)}for(let P=0,S=b.length;P<S;++P){const v=b[P],C=v.start,k=v.count;for(let B=C,X=C+k;B<X;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new T,r=new T,o=new T,a=new T,l=new T,c=new T,h=new T,d=new T;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new je(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ea=new Zt,kn=new Ho,ys=new Ui,ba=new T,xs=new T,Ms=new T,Ss=new T,Tr=new T,Es=new T,wa=new T,bs=new T;class xt extends me{constructor(t=new Te,e=new zl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Es.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Tr.fromBufferAttribute(d,t),o?Es.addScaledVector(Tr,h):Es.addScaledVector(Tr.sub(e),h))}e.add(Es)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(r),kn.copy(t.ray).recast(t.near),!(ys.containsPoint(kn.origin)===!1&&(kn.intersectSphere(ys,ba)===null||kn.origin.distanceToSquared(ba)>(t.far-t.near)**2))&&(Ea.copy(r).invert(),kn.copy(t.ray).applyMatrix4(Ea),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,kn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],u=o[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,D=E;x<D;x+=3){const A=a.getX(x),R=a.getX(x+1),P=a.getX(x+2);i=ws(this,u,t,n,c,h,d,A,R,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const b=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);i=ws(this,o,t,n,c,h,d,b,E,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],u=o[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,D=E;x<D;x+=3){const A=x,R=x+1,P=x+2;i=ws(this,u,t,n,c,h,d,A,R,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const b=m,E=m+1,x=m+2;i=ws(this,o,t,n,c,h,d,b,E,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function wh(s,t,e,n,i,r,o,a){let l;if(t.side===Le?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Ln,a),l===null)return null;bs.copy(a),bs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(bs);return c<e.near||c>e.far?null:{distance:c,point:bs.clone(),object:s}}function ws(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,xs),s.getVertexPosition(l,Ms),s.getVertexPosition(c,Ss);const h=wh(s,t,e,n,xs,Ms,Ss,wa);if(h){const d=new T;qe.getBarycoord(wa,xs,Ms,Ss,d),i&&(h.uv=qe.getInterpolatedAttribute(i,a,l,c,d,new gt)),r&&(h.uv1=qe.getInterpolatedAttribute(r,a,l,c,d,new gt)),o&&(h.normal=qe.getInterpolatedAttribute(o,a,l,c,d,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new T,materialIndex:0};qe.getNormal(xs,Ms,Ss,f.normal),h.face=f,h.barycoord=d}return h}class xe extends Te{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2));function g(_,m,u,b,E,x,D,A,R,P,S){const v=x/R,C=D/P,k=x/2,B=D/2,X=A/2,K=R+1,q=P+1;let Z=0,G=0;const st=new T;for(let ut=0;ut<q;ut++){const Mt=ut*C-B;for(let kt=0;kt<K;kt++){const ne=kt*v-k;st[_]=ne*b,st[m]=Mt*E,st[u]=X,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[u]=A>0?1:-1,h.push(st.x,st.y,st.z),d.push(kt/R),d.push(1-ut/P),Z+=1}}for(let ut=0;ut<P;ut++)for(let Mt=0;Mt<R;Mt++){const kt=f+Mt+K*ut,ne=f+Mt+K*(ut+1),j=f+(Mt+1)+K*(ut+1),et=f+(Mt+1)+K*ut;l.push(kt,ne,et),l.push(ne,j,et),G+=6}a.addGroup(p,G,S),p+=G,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Li(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ce(s){const t={};for(let e=0;e<s.length;e++){const n=Li(s[e]);for(const i in n)t[i]=n[i]}return t}function Th(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Gl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Ah={clone:Li,merge:Ce};var Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=Th(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wl extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bn=new T,Ta=new gt,Aa=new gt;class Xe extends Wl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bn.x,bn.y).multiplyScalar(-t/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bn.x,bn.y).multiplyScalar(-t/bn.z)}getViewSize(t,e){return this.getViewBounds(t,Ta,Aa),e.subVectors(Aa,Ta)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(or*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mi=-90,gi=1;class Ph extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xe(mi,gi,t,e);i.layers=this.layers,this.add(i);const r=new Xe(mi,gi,t,e);r.layers=this.layers,this.add(r);const o=new Xe(mi,gi,t,e);o.layers=this.layers,this.add(o);const a=new Xe(mi,gi,t,e);a.layers=this.layers,this.add(a);const l=new Xe(mi,gi,t,e);l.layers=this.layers,this.add(l);const c=new Xe(mi,gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xl extends we{constructor(t=[],e=Pi,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ih extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Xl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new xe(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Pn});r.uniforms.tEquirect.value=e;const o=new xt(i,r),a=e.minFilter;return e.minFilter===Yn&&(e.minFilter=sn),new Ph(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class le extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dh={type:"move"};class Ar{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dh)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Go{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new Go(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Lh extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Uh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ro,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Re=new T;class Ks{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ks(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ql extends ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let _i;const Vi=new T,vi=new T,yi=new T,xi=new gt,Gi=new gt,jl=new Zt,Ts=new T,Wi=new T,As=new T,Ra=new gt,Rr=new gt,Ca=new gt;class Nh extends me{constructor(t=new ql){if(super(),this.isSprite=!0,this.type="Sprite",_i===void 0){_i=new Te;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Uh(e,5);_i.setIndex([0,1,2,0,2,3]),_i.setAttribute("position",new Ks(n,3,0,!1)),_i.setAttribute("uv",new Ks(n,2,3,!1))}this.geometry=_i,this.material=t,this.center=new gt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vi.setFromMatrixScale(this.matrixWorld),jl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),yi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vi.multiplyScalar(-yi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Rs(Ts.set(-.5,-.5,0),yi,o,vi,i,r),Rs(Wi.set(.5,-.5,0),yi,o,vi,i,r),Rs(As.set(.5,.5,0),yi,o,vi,i,r),Ra.set(0,0),Rr.set(1,0),Ca.set(1,1);let a=t.ray.intersectTriangle(Ts,Wi,As,!1,Vi);if(a===null&&(Rs(Wi.set(-.5,.5,0),yi,o,vi,i,r),Rr.set(0,1),a=t.ray.intersectTriangle(Ts,As,Wi,!1,Vi),a===null))return;const l=t.ray.origin.distanceTo(Vi);l<t.near||l>t.far||e.push({distance:l,point:Vi.clone(),uv:qe.getInterpolation(Vi,Ts,Wi,As,Ra,Rr,Ca,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Rs(s,t,e,n,i,r){xi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Gi.x=r*xi.x-i*xi.y,Gi.y=i*xi.x+r*xi.y):Gi.copy(xi),s.copy(t),s.x+=Gi.x,s.y+=Gi.y,s.applyMatrix4(jl)}class Fh extends we{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Be,h=Be,d,f){super(null,o,a,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pa extends je{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Mi=new Zt,Ia=new Zt,Cs=[],Da=new ei,Oh=new Zt,Xi=new xt,qi=new Ui;class Bh extends xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Oh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mi),Da.copy(t.boundingBox).applyMatrix4(Mi),this.boundingBox.union(Da)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mi),qi.copy(t.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(qi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Xi.geometry=this.geometry,Xi.material=this.material,Xi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qi.copy(this.boundingSphere),qi.applyMatrix4(n),t.ray.intersectsSphere(qi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Mi),Ia.multiplyMatrices(n,Mi),Xi.matrixWorld=Ia,Xi.raycast(t,Cs);for(let o=0,a=Cs.length;o<a;o++){const l=Cs[o];l.instanceId=r,l.object=this,e.push(l)}Cs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Pa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fh(new Float32Array(i*this.count),i,this.count,Fo,rn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Cr=new T,kh=new T,zh=new Nt;class Wn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Cr.subVectors(n,e).cross(kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Cr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zh.getNormalMatrix(t),i=this.coplanarPoint(Cr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new Ui,Ps=new T;class Wo{constructor(t=new Wn,e=new Wn,n=new Wn,i=new Wn,r=new Wn,o=new Wn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],f=i[7],p=i[8],g=i[9],_=i[10],m=i[11],u=i[12],b=i[13],E=i[14],x=i[15];if(n[0].setComponents(l-r,f-c,m-p,x-u).normalize(),n[1].setComponents(l+r,f+c,m+p,x+u).normalize(),n[2].setComponents(l+o,f+h,m+g,x+b).normalize(),n[3].setComponents(l-o,f-h,m-g,x-b).normalize(),n[4].setComponents(l-a,f-d,m-_,x-E).normalize(),e===gn)n[5].setComponents(l+a,f+d,m+_,x+E).normalize();else if(e===$s)n[5].setComponents(a,d,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ps.x=i.normal.x>0?t.max.x:t.min.x,Ps.y=i.normal.y>0?t.max.y:t.min.y,Ps.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $l extends ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Js=new T,Zs=new T,La=new Zt,ji=new Ho,Is=new Ui,Pr=new T,Ua=new T;class Hh extends me{constructor(t=new Te,e=new $l){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Js.fromBufferAttribute(e,i-1),Zs.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Js.distanceTo(Zs);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(i),Is.radius+=r,t.ray.intersectsSphere(Is)===!1)return;La.copy(i).invert(),ji.copy(t.ray).applyMatrix4(La);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const u=h.getX(_),b=h.getX(_+1),E=Ds(this,t,ji,l,u,b,_);E&&e.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),u=Ds(this,t,ji,l,_,m,g-1);u&&e.push(u)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const u=Ds(this,t,ji,l,_,_+1,_);u&&e.push(u)}if(this.isLineLoop){const _=Ds(this,t,ji,l,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ds(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(Js.fromBufferAttribute(a,i),Zs.fromBufferAttribute(a,r),e.distanceSqToSegment(Js,Zs,Pr,Ua)>n)return;Pr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Pr);if(!(c<t.near||c>t.far))return{distance:c,point:Ua.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}class Vh extends we{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yl extends we{constructor(t,e,n=Jn,i,r,o,a=Be,l=Be,c,h=es){if(h!==es&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class er extends Te{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,f=e,p=2*d+f,g=n*2+r,_=i+1,m=new T,u=new T;for(let b=0;b<=g;b++){let E=0,x=0,D=0,A=0;if(b<=n){const S=b/n,v=S*Math.PI/2;x=-h-t*Math.cos(v),D=t*Math.sin(v),A=-t*Math.cos(v),E=S*d}else if(b<=n+r){const S=(b-n)/r;x=-h+S*e,D=t,A=0,E=d+S*f}else{const S=(b-n-r)/n,v=S*Math.PI/2;x=h+t*Math.sin(v),D=t*Math.cos(v),A=t*Math.sin(v),E=d+f+S*d}const R=Math.max(0,Math.min(1,E/p));let P=0;b===0?P=.5/i:b===g&&(P=-.5/i);for(let S=0;S<=i;S++){const v=S/i,C=v*Math.PI*2,k=Math.sin(C),B=Math.cos(C);u.x=-D*B,u.y=x,u.z=D*k,a.push(u.x,u.y,u.z),m.set(-D*B,A,D*k),m.normalize(),l.push(m.x,m.y,m.z),c.push(v+P,R)}if(b>0){const S=(b-1)*_;for(let v=0;v<i;v++){const C=S+v,k=S+v+1,B=b*_+v,X=b*_+v+1;o.push(C,k,B),o.push(k,X,B)}}}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Pe extends Te{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],p=[];let g=0;const _=[],m=n/2;let u=0;b(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(p,2));function b(){const x=new T,D=new T;let A=0;const R=(e-t)/n;for(let P=0;P<=r;P++){const S=[],v=P/r,C=v*(e-t)+t;for(let k=0;k<=i;k++){const B=k/i,X=B*l+a,K=Math.sin(X),q=Math.cos(X);D.x=C*K,D.y=-v*n+m,D.z=C*q,d.push(D.x,D.y,D.z),x.set(K,R,q).normalize(),f.push(x.x,x.y,x.z),p.push(B,1-v),S.push(g++)}_.push(S)}for(let P=0;P<i;P++)for(let S=0;S<r;S++){const v=_[S][P],C=_[S+1][P],k=_[S+1][P+1],B=_[S][P+1];(t>0||S!==0)&&(h.push(v,C,B),A+=3),(e>0||S!==r-1)&&(h.push(C,k,B),A+=3)}c.addGroup(u,A,0),u+=A}function E(x){const D=g,A=new gt,R=new T;let P=0;const S=x===!0?t:e,v=x===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,m*v,0),f.push(0,v,0),p.push(.5,.5),g++;const C=g;for(let k=0;k<=i;k++){const X=k/i*l+a,K=Math.cos(X),q=Math.sin(X);R.x=S*q,R.y=m*v,R.z=S*K,d.push(R.x,R.y,R.z),f.push(0,v,0),A.x=K*.5+.5,A.y=q*.5*v+.5,p.push(A.x,A.y),g++}for(let k=0;k<i;k++){const B=D+k,X=C+k;x===!0?h.push(X,X+1,B):h.push(X+1,X,B),P+=3}c.addGroup(u,P,x===!0?1:2),u+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kn extends Pe{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Kn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xo extends Te{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const E=new T,x=new T,D=new T;for(let A=0;A<e.length;A+=3)p(e[A+0],E),p(e[A+1],x),p(e[A+2],D),l(E,x,D,b)}function l(b,E,x,D){const A=D+1,R=[];for(let P=0;P<=A;P++){R[P]=[];const S=b.clone().lerp(x,P/A),v=E.clone().lerp(x,P/A),C=A-P;for(let k=0;k<=C;k++)k===0&&P===A?R[P][k]=S:R[P][k]=S.clone().lerp(v,k/C)}for(let P=0;P<A;P++)for(let S=0;S<2*(A-P)-1;S++){const v=Math.floor(S/2);S%2===0?(f(R[P][v+1]),f(R[P+1][v]),f(R[P][v])):(f(R[P][v+1]),f(R[P+1][v+1]),f(R[P+1][v]))}}function c(b){const E=new T;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(b),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function h(){const b=new T;for(let E=0;E<r.length;E+=3){b.x=r[E+0],b.y=r[E+1],b.z=r[E+2];const x=m(b)/2/Math.PI+.5,D=u(b)/Math.PI+.5;o.push(x,1-D)}g(),d()}function d(){for(let b=0;b<o.length;b+=6){const E=o[b+0],x=o[b+2],D=o[b+4],A=Math.max(E,x,D),R=Math.min(E,x,D);A>.9&&R<.1&&(E<.2&&(o[b+0]+=1),x<.2&&(o[b+2]+=1),D<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function p(b,E){const x=b*3;E.x=t[x+0],E.y=t[x+1],E.z=t[x+2]}function g(){const b=new T,E=new T,x=new T,D=new T,A=new gt,R=new gt,P=new gt;for(let S=0,v=0;S<r.length;S+=9,v+=6){b.set(r[S+0],r[S+1],r[S+2]),E.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),A.set(o[v+0],o[v+1]),R.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),D.copy(b).add(E).add(x).divideScalar(3);const C=m(D);_(A,v+0,b,C),_(R,v+2,E,C),_(P,v+4,x,C)}}function _(b,E,x,D){D<0&&b.x===1&&(o[E]=b.x-1),x.x===0&&x.z===0&&(o[E]=D/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function u(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.vertices,t.indices,t.radius,t.details)}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,p=(o-h)/f;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new gt:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new T,i=[],r=[],o=[],a=new T,l=new Zt;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(zt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(zt(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Kl extends vn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new gt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Gh extends Kl{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function qo(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,p*=h,i(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Ls=new T,Ir=new qo,Dr=new qo,Lr=new qo;class Jl extends vn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Ls.subVectors(i[0],i[1]).add(i[0]),c=Ls);const d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ls.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ls),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ir.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,_,m),Dr.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,_,m),Lr.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ir.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Dr.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Lr.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Ir.calc(l),Dr.calc(l),Lr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Na(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Wh(s,t){const e=1-s;return e*e*t}function Xh(s,t){return 2*(1-s)*s*t}function qh(s,t){return s*s*t}function Ji(s,t,e,n){return Wh(s,t)+Xh(s,e)+qh(s,n)}function jh(s,t){const e=1-s;return e*e*e*t}function $h(s,t){const e=1-s;return 3*e*e*s*t}function Yh(s,t){return 3*(1-s)*s*s*t}function Kh(s,t){return s*s*s*t}function Zi(s,t,e,n,i){return jh(s,t)+$h(s,e)+Yh(s,n)+Kh(s,i)}class Jh extends vn{constructor(t=new gt,e=new gt,n=new gt,i=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new gt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zi(t,i.x,r.x,o.x,a.x),Zi(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zh extends vn{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zi(t,i.x,r.x,o.x,a.x),Zi(t,i.y,r.y,o.y,a.y),Zi(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qh extends vn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tu extends vn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eu extends vn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ji(t,i.x,r.x,o.x),Ji(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zl extends vn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ji(t,i.x,r.x,o.x),Ji(t,i.y,r.y,o.y),Ji(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nu extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Na(a,l.x,c.x,h.x,d.x),Na(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new gt().fromArray(i))}return this}}var iu=Object.freeze({__proto__:null,ArcCurve:Gh,CatmullRomCurve3:Jl,CubicBezierCurve:Jh,CubicBezierCurve3:Zh,EllipseCurve:Kl,LineCurve:Qh,LineCurve3:tu,QuadraticBezierCurve:eu,QuadraticBezierCurve3:Zl,SplineCurve:nu});class Qs extends Xo{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qs(t.radius,t.detail)}}class os extends Te{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let u=0;u<h;u++){const b=u*f-o;for(let E=0;E<c;E++){const x=E*d-r;g.push(x,-b,0),_.push(0,0,1),m.push(E/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<a;b++){const E=b+c*u,x=b+c*(u+1),D=b+1+c*(u+1),A=b+1+c*u;p.push(E,x,A),p.push(x,D,A)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.width,t.height,t.widthSegments,t.heightSegments)}}class Qn extends Te{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new T,f=new T,p=[],g=[],_=[],m=[];for(let u=0;u<=n;u++){const b=[],E=u/n;let x=0;u===0&&o===0?x=.5/e:u===n&&l===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){const A=D/e;d.x=-t*Math.cos(i+A*r)*Math.sin(o+E*a),d.y=t*Math.cos(o+E*a),d.z=t*Math.sin(i+A*r)*Math.sin(o+E*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(A+x,1-E),b.push(c++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<e;b++){const E=h[u][b+1],x=h[u][b],D=h[u+1][b],A=h[u+1][b+1];(u!==0||o>0)&&p.push(E,x,A),(u!==n-1||l<Math.PI)&&p.push(x,D,A)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class is extends Te{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new T,d=new T,f=new T;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,u=(i+1)*(p-1)+g,b=(i+1)*p+g;o.push(_,m,b),o.push(m,u,b)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class jo extends Te{constructor(t=new Zl(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new T,l=new T,c=new gt;let h=new T;const d=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(p,2));function _(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),b(),u()}function m(E){h=t.getPointAt(E/e,h);const x=o.normals[E],D=o.binormals[E];for(let A=0;A<=i;A++){const R=A/i*Math.PI*2,P=Math.sin(R),S=-Math.cos(R);l.x=S*x.x+P*D.x,l.y=S*x.y+P*D.y,l.z=S*x.z+P*D.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function u(){for(let E=1;E<=e;E++)for(let x=1;x<=i;x++){const D=(i+1)*(E-1)+(x-1),A=(i+1)*E+(x-1),R=(i+1)*E+x,P=(i+1)*(E-1)+x;g.push(D,A,P),g.push(A,R,P)}}function b(){for(let E=0;E<=e;E++)for(let x=0;x<=i;x++)c.x=E/e,c.y=x/i,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new jo(new iu[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Lt extends ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nl,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class su extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ru extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ql extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ou extends Ql{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ur=new Zt,Fa=new T,Oa=new T;class au{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wo,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Fa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fa),Oa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oa),e.updateMatrixWorld(),Ur.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ur),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ur)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class tc extends Wl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class lu extends au{constructor(){super(new tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cu extends Ql{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new lu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class hu extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class uu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ba(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ba();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ba(){return performance.now()}const ka=new Zt;class du{constructor(t,e,n=0,i=1/0){this.ray=new Ho(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ka.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ka),this}intersectObject(t,e=!0,n=[]){return Po(t,this,n,e),n.sort(za),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Po(t[i],this,n,e);return n.sort(za),n}}function za(s,t){return s.distance-t.distance}function Po(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Po(r[o],t,e,!0)}}class fu extends ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ha(s,t,e,n){const i=pu(n);switch(e){case Il:return s*t;case Fo:return s*t/i.components*i.byteLength;case Oo:return s*t/i.components*i.byteLength;case Ll:return s*t*2/i.components*i.byteLength;case Bo:return s*t*2/i.components*i.byteLength;case Dl:return s*t*3/i.components*i.byteLength;case tn:return s*t*4/i.components*i.byteLength;case ko:return s*t*4/i.components*i.byteLength;case zs:case Hs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vs:case Gs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case no:case so:return Math.max(s,16)*Math.max(t,8)/4;case eo:case io:return Math.max(s,8)*Math.max(t,8)/2;case ro:case oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case co:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ho:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case uo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case fo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case po:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case mo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case go:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case _o:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case vo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case yo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case xo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Mo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case So:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ws:case Eo:case bo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ul:case wo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case To:case Ao:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pu(s){switch(s){case on:case Rl:return{byteLength:1,components:1};case Qi:case Cl:case ss:return{byteLength:2,components:1};case Uo:case No:return{byteLength:2,components:4};case Jn:case Lo:case rn:return{byteLength:4,components:1};case Pl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ec(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function mu(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_u=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Su=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Au=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ru=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ku=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ju=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$u=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ku=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,id=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ad=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ld=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,md=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Id=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$d=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_f=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ef=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Of=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$f=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:gu,alphahash_pars_fragment:_u,alphamap_fragment:vu,alphamap_pars_fragment:yu,alphatest_fragment:xu,alphatest_pars_fragment:Mu,aomap_fragment:Su,aomap_pars_fragment:Eu,batching_pars_vertex:bu,batching_vertex:wu,begin_vertex:Tu,beginnormal_vertex:Au,bsdfs:Ru,iridescence_fragment:Cu,bumpmap_pars_fragment:Pu,clipping_planes_fragment:Iu,clipping_planes_pars_fragment:Du,clipping_planes_pars_vertex:Lu,clipping_planes_vertex:Uu,color_fragment:Nu,color_pars_fragment:Fu,color_pars_vertex:Ou,color_vertex:Bu,common:ku,cube_uv_reflection_fragment:zu,defaultnormal_vertex:Hu,displacementmap_pars_vertex:Vu,displacementmap_vertex:Gu,emissivemap_fragment:Wu,emissivemap_pars_fragment:Xu,colorspace_fragment:qu,colorspace_pars_fragment:ju,envmap_fragment:$u,envmap_common_pars_fragment:Yu,envmap_pars_fragment:Ku,envmap_pars_vertex:Ju,envmap_physical_pars_fragment:ld,envmap_vertex:Zu,fog_vertex:Qu,fog_pars_vertex:td,fog_fragment:ed,fog_pars_fragment:nd,gradientmap_pars_fragment:id,lightmap_pars_fragment:sd,lights_lambert_fragment:rd,lights_lambert_pars_fragment:od,lights_pars_begin:ad,lights_toon_fragment:cd,lights_toon_pars_fragment:hd,lights_phong_fragment:ud,lights_phong_pars_fragment:dd,lights_physical_fragment:fd,lights_physical_pars_fragment:pd,lights_fragment_begin:md,lights_fragment_maps:gd,lights_fragment_end:_d,logdepthbuf_fragment:vd,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:xd,logdepthbuf_vertex:Md,map_fragment:Sd,map_pars_fragment:Ed,map_particle_fragment:bd,map_particle_pars_fragment:wd,metalnessmap_fragment:Td,metalnessmap_pars_fragment:Ad,morphinstance_vertex:Rd,morphcolor_vertex:Cd,morphnormal_vertex:Pd,morphtarget_pars_vertex:Id,morphtarget_vertex:Dd,normal_fragment_begin:Ld,normal_fragment_maps:Ud,normal_pars_fragment:Nd,normal_pars_vertex:Fd,normal_vertex:Od,normalmap_pars_fragment:Bd,clearcoat_normal_fragment_begin:kd,clearcoat_normal_fragment_maps:zd,clearcoat_pars_fragment:Hd,iridescence_pars_fragment:Vd,opaque_fragment:Gd,packing:Wd,premultiplied_alpha_fragment:Xd,project_vertex:qd,dithering_fragment:jd,dithering_pars_fragment:$d,roughnessmap_fragment:Yd,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:Jd,shadowmap_pars_vertex:Zd,shadowmap_vertex:Qd,shadowmask_pars_fragment:tf,skinbase_vertex:ef,skinning_pars_vertex:nf,skinning_vertex:sf,skinnormal_vertex:rf,specularmap_fragment:of,specularmap_pars_fragment:af,tonemapping_fragment:lf,tonemapping_pars_fragment:cf,transmission_fragment:hf,transmission_pars_fragment:uf,uv_pars_fragment:df,uv_pars_vertex:ff,uv_vertex:pf,worldpos_vertex:mf,background_vert:gf,background_frag:_f,backgroundCube_vert:vf,backgroundCube_frag:yf,cube_vert:xf,cube_frag:Mf,depth_vert:Sf,depth_frag:Ef,distanceRGBA_vert:bf,distanceRGBA_frag:wf,equirect_vert:Tf,equirect_frag:Af,linedashed_vert:Rf,linedashed_frag:Cf,meshbasic_vert:Pf,meshbasic_frag:If,meshlambert_vert:Df,meshlambert_frag:Lf,meshmatcap_vert:Uf,meshmatcap_frag:Nf,meshnormal_vert:Ff,meshnormal_frag:Of,meshphong_vert:Bf,meshphong_frag:kf,meshphysical_vert:zf,meshphysical_frag:Hf,meshtoon_vert:Vf,meshtoon_frag:Gf,points_vert:Wf,points_frag:Xf,shadow_vert:qf,shadow_frag:jf,sprite_vert:$f,sprite_frag:Yf},nt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},en={basic:{uniforms:Ce([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ce([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ce([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ce([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ce([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ce([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ce([nt.points,nt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ce([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ce([nt.common,nt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ce([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ce([nt.sprite,nt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ce([nt.common,nt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ce([nt.lights,nt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};en.physical={uniforms:Ce([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Us={r:0,b:0,g:0},Hn=new $e,Kf=new Zt;function Jf(s,t,e,n,i,r,o){const a=new Ht(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function _(E){let x=!1;const D=g(E);D===null?u(a,l):D&&D.isColor&&(u(D,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,x){const D=g(x);D&&(D.isCubeTexture||D.mapping===tr)?(h===void 0&&(h=new xt(new xe(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Li(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Hn.copy(x.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kf.makeRotationFromEuler(Hn)),h.material.toneMapped=$t.getTransfer(D.colorSpace)!==te,(d!==D||f!==D.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=D,f=D.version,p=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new xt(new os(2,2),new Un({name:"BackgroundMaterial",uniforms:Li(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=$t.getTransfer(D.colorSpace)!==te,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||f!==D.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=D,f=D.version,p=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function u(E,x){E.getRGB(Us,Gl(s)),n.buffers.color.setClear(Us.r,Us.g,Us.b,x,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,u(a,l)},render:_,addToRenderList:m,dispose:b}}function Zf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(v,C,k,B,X){let K=!1;const q=d(B,k,C);r!==q&&(r=q,c(r.object)),K=p(v,B,k,X),K&&g(v,B,k,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(v,C,k,B),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function d(v,C,k){const B=k.wireframe===!0;let X=n[v.id];X===void 0&&(X={},n[v.id]=X);let K=X[C.id];K===void 0&&(K={},X[C.id]=K);let q=K[B];return q===void 0&&(q=f(l()),K[B]=q),q}function f(v){const C=[],k=[],B=[];for(let X=0;X<e;X++)C[X]=0,k[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:B,object:v,attributes:{},index:null}}function p(v,C,k,B){const X=r.attributes,K=C.attributes;let q=0;const Z=k.getAttributes();for(const G in Z)if(Z[G].location>=0){const ut=X[G];let Mt=K[G];if(Mt===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(Mt=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(Mt=v.instanceColor)),ut===void 0||ut.attribute!==Mt||Mt&&ut.data!==Mt.data)return!0;q++}return r.attributesNum!==q||r.index!==B}function g(v,C,k,B){const X={},K=C.attributes;let q=0;const Z=k.getAttributes();for(const G in Z)if(Z[G].location>=0){let ut=K[G];ut===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor));const Mt={};Mt.attribute=ut,ut&&ut.data&&(Mt.data=ut.data),X[G]=Mt,q++}r.attributes=X,r.attributesNum=q,r.index=B}function _(){const v=r.newAttributes;for(let C=0,k=v.length;C<k;C++)v[C]=0}function m(v){u(v,0)}function u(v,C){const k=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;k[v]=1,B[v]===0&&(s.enableVertexAttribArray(v),B[v]=1),X[v]!==C&&(s.vertexAttribDivisor(v,C),X[v]=C)}function b(){const v=r.newAttributes,C=r.enabledAttributes;for(let k=0,B=C.length;k<B;k++)C[k]!==v[k]&&(s.disableVertexAttribArray(k),C[k]=0)}function E(v,C,k,B,X,K,q){q===!0?s.vertexAttribIPointer(v,C,k,X,K):s.vertexAttribPointer(v,C,k,B,X,K)}function x(v,C,k,B){_();const X=B.attributes,K=k.getAttributes(),q=C.defaultAttributeValues;for(const Z in K){const G=K[Z];if(G.location>=0){let st=X[Z];if(st===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(st=v.instanceColor)),st!==void 0){const ut=st.normalized,Mt=st.itemSize,kt=t.get(st);if(kt===void 0)continue;const ne=kt.buffer,j=kt.type,et=kt.bytesPerElement,_t=j===s.INT||j===s.UNSIGNED_INT||st.gpuType===Lo;if(st.isInterleavedBufferAttribute){const rt=st.data,wt=rt.stride,Yt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<G.locationSize;Ct++)u(G.location+Ct,rt.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ct=0;Ct<G.locationSize;Ct++)m(G.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let Ct=0;Ct<G.locationSize;Ct++)E(G.location+Ct,Mt/G.locationSize,j,ut,wt*et,(Yt+Mt/G.locationSize*Ct)*et,_t)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)u(G.location+rt,st.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<G.locationSize;rt++)m(G.location+rt);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let rt=0;rt<G.locationSize;rt++)E(G.location+rt,Mt/G.locationSize,j,ut,Mt*et,Mt/G.locationSize*rt*et,_t)}}else if(q!==void 0){const ut=q[Z];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(G.location,ut);break;case 3:s.vertexAttrib3fv(G.location,ut);break;case 4:s.vertexAttrib4fv(G.location,ut);break;default:s.vertexAttrib1fv(G.location,ut)}}}}b()}function D(){P();for(const v in n){const C=n[v];for(const k in C){const B=C[k];for(const X in B)h(B[X].object),delete B[X];delete C[k]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const C=n[v.id];for(const k in C){const B=C[k];for(const X in B)h(B[X].object),delete B[X];delete C[k]}delete n[v.id]}function R(v){for(const C in n){const k=n[C];if(k[v.id]===void 0)continue;const B=k[v.id];for(const X in B)h(B[X].object),delete B[X];delete k[v.id]}}function P(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Qf(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==tn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===ss&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==on&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==rn&&!P)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:D,maxSamples:A}}function ep(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Wn,a=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,E=b*4;let x=u.clippingState||null;l.value=x,x=h(g,f,E,p);for(let D=0;D!==E;++D)x[D]=e[D];u.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const u=p+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<u)&&(m=new Float32Array(u));for(let E=0,x=p;E!==_;++E,x+=4)o.copy(d[E]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function np(s){let t=new WeakMap;function e(o,a){return a===Jr?o.mapping=Pi:a===Zr&&(o.mapping=Ii),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jr||a===Zr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ih(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ti=4,Va=[.125,.215,.35,.446,.526,.582],jn=20,Nr=new tc,Ga=new Ht;let Fr=null,Or=0,Br=0,kr=!1;const Xn=(1+Math.sqrt(5))/2,Si=1/Xn,Wa=[new T(-Xn,Si,0),new T(Xn,Si,0),new T(-Si,0,Xn),new T(Si,0,Xn),new T(0,Xn,-Si),new T(0,Xn,Si),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],ip=new T;class Xa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=ip}=r;Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$a(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fr,Or,Br),this._renderer.xr.enabled=kr,t.scissorTest=!1,Ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===Ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:ss,format:tn,colorSpace:Di,depthBuffer:!1},i=qa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sp(r)),this._blurMaterial=rp(r,t,e)}return i}_compileMaterial(t){const e=new xt(this._lodPlanes[0],t);this._renderer.compile(e,Nr)}_sceneToCubeUV(t,e,n,i,r){const l=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Ga),d.toneMapping=In,d.autoClear=!1;const g=new zl({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),_=new xt(new xe,g);let m=!1;const u=t.background;u?u.isColor&&(g.color.copy(u),t.background=null,m=!0):(g.color.copy(Ga),m=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const x=this._cubeSize;Ns(i,E*x,b>2?x:0,x,x),d.setRenderTarget(i),m&&d.render(_,l),d.render(t,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=u}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Pi||t.mapping===Ii;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$a()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ja());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ns(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Nr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wa[(i-r-1)%Wa.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new xt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*jn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):jn;m>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const u=[];let b=0;for(let R=0;R<jn;++R){const P=R/_,S=Math.exp(-P*P/2);u.push(S),R===0?b+=S:R<m&&(b+=2*S)}for(let R=0;R<u.length;R++)u[R]=u[R]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const x=this._sizeLods[i],D=3*x*(i>E-Ti?i-E+Ti:0),A=4*(this._cubeSize-x);Ns(e,D,A,3*x,2*x),l.setRenderTarget(e),l.render(d,Nr)}}function sp(s){const t=[],e=[],n=[];let i=s;const r=s-Ti+1+Va.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Ti?l=Va[o-s+Ti-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,u=1,b=new Float32Array(_*g*p),E=new Float32Array(m*g*p),x=new Float32Array(u*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,P=A>2?0:-1,S=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];b.set(S,_*g*A),E.set(f,m*g*A);const v=[A,A,A,A,A,A];x.set(v,u*g*A)}const D=new Te;D.setAttribute("position",new je(b,_)),D.setAttribute("uv",new je(E,m)),D.setAttribute("faceIndex",new je(x,u)),t.push(D),i>Ti&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qa(s,t,e){const n=new Zn(s,t,e);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function rp(s,t,e){const n=new Float32Array(jn),i=new T(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ja(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function $a(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function $o(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function op(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jr||l===Zr,h=l===Pi||l===Ii;if(c||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Xa(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Xa(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ap(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Xs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lp(s,t,e,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)t.update(f[p],s.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let E=0,x=b.length;E<x;E+=3){const D=b[E+0],A=b[E+1],R=b[E+2];f.push(D,A,A,R,R,D)}}else if(g!==void 0){const b=g.array;_=g.version;for(let E=0,x=b.length/3-1;E<x;E+=3){const D=E+0,A=E+1,R=E+2;f.push(D,A,A,R,R,D)}}else return;const m=new(Ol(f)?Vl:Hl)(f,1);m.version=_;const u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function cp(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];e.update(m,n,1)}function d(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let u=0;for(let b=0;b<g;b++)u+=p[b]*_[b];e.update(u,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function hp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function up(s,t,e){const n=new WeakMap,i=new ue;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let v=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var p=v;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let D=a.attributes.position.count*x,A=1;D>t.maxTextureSize&&(A=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const R=new Float32Array(D*A*4*d),P=new Bl(R,D,A,d);P.type=rn,P.needsUpdate=!0;const S=x*4;for(let C=0;C<d;C++){const k=u[C],B=b[C],X=E[C],K=D*A*4*C;for(let q=0;q<k.count;q++){const Z=q*S;g===!0&&(i.fromBufferAttribute(k,q),R[K+Z+0]=i.x,R[K+Z+1]=i.y,R[K+Z+2]=i.z,R[K+Z+3]=0),_===!0&&(i.fromBufferAttribute(B,q),R[K+Z+4]=i.x,R[K+Z+5]=i.y,R[K+Z+6]=i.z,R[K+Z+7]=0),m===!0&&(i.fromBufferAttribute(X,q),R[K+Z+8]=i.x,R[K+Z+9]=i.y,R[K+Z+10]=i.z,R[K+Z+11]=X.itemSize===4?i.w:1)}}f={count:d,texture:P,size:new gt(D,A)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function dp(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const nc=new we,Ya=new Yl(1,1),ic=new Bl,sc=new ph,rc=new Xl,Ka=[],Ja=[],Za=new Float32Array(16),Qa=new Float32Array(9),tl=new Float32Array(4);function Ni(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ka[i];if(r===void 0&&(r=new Float32Array(i),Ka[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ge(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function _e(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function nr(s,t){let e=Ja[t];e===void 0&&(e=new Int32Array(t),Ja[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function fp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function pp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2fv(this.addr,t),_e(e,t)}}function mp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;s.uniform3fv(this.addr,t),_e(e,t)}}function gp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4fv(this.addr,t),_e(e,t)}}function _p(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;tl.set(n),s.uniformMatrix2fv(this.addr,!1,tl),_e(e,n)}}function vp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Qa.set(n),s.uniformMatrix3fv(this.addr,!1,Qa),_e(e,n)}}function yp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Za.set(n),s.uniformMatrix4fv(this.addr,!1,Za),_e(e,n)}}function xp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Mp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2iv(this.addr,t),_e(e,t)}}function Sp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3iv(this.addr,t),_e(e,t)}}function Ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4iv(this.addr,t),_e(e,t)}}function bp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2uiv(this.addr,t),_e(e,t)}}function Tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3uiv(this.addr,t),_e(e,t)}}function Ap(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4uiv(this.addr,t),_e(e,t)}}function Rp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ya.compareFunction=Fl,r=Ya):r=nc,e.setTexture2D(t||r,i)}function Cp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||sc,i)}function Pp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||rc,i)}function Ip(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ic,i)}function Dp(s){switch(s){case 5126:return fp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return vp;case 35676:return yp;case 5124:case 35670:return xp;case 35667:case 35671:return Mp;case 35668:case 35672:return Sp;case 35669:case 35673:return Ep;case 5125:return bp;case 36294:return wp;case 36295:return Tp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Ip}}function Lp(s,t){s.uniform1fv(this.addr,t)}function Up(s,t){const e=Ni(t,this.size,2);s.uniform2fv(this.addr,e)}function Np(s,t){const e=Ni(t,this.size,3);s.uniform3fv(this.addr,e)}function Fp(s,t){const e=Ni(t,this.size,4);s.uniform4fv(this.addr,e)}function Op(s,t){const e=Ni(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Bp(s,t){const e=Ni(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function kp(s,t){const e=Ni(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function zp(s,t){s.uniform1iv(this.addr,t)}function Hp(s,t){s.uniform2iv(this.addr,t)}function Vp(s,t){s.uniform3iv(this.addr,t)}function Gp(s,t){s.uniform4iv(this.addr,t)}function Wp(s,t){s.uniform1uiv(this.addr,t)}function Xp(s,t){s.uniform2uiv(this.addr,t)}function qp(s,t){s.uniform3uiv(this.addr,t)}function jp(s,t){s.uniform4uiv(this.addr,t)}function $p(s,t,e){const n=this.cache,i=t.length,r=nr(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||nc,r[o])}function Yp(s,t,e){const n=this.cache,i=t.length,r=nr(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||sc,r[o])}function Kp(s,t,e){const n=this.cache,i=t.length,r=nr(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||rc,r[o])}function Jp(s,t,e){const n=this.cache,i=t.length,r=nr(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ic,r[o])}function Zp(s){switch(s){case 5126:return Lp;case 35664:return Up;case 35665:return Np;case 35666:return Fp;case 35674:return Op;case 35675:return Bp;case 35676:return kp;case 5124:case 35670:return zp;case 35667:case 35671:return Hp;case 35668:case 35672:return Vp;case 35669:case 35673:return Gp;case 5125:return Wp;case 36294:return Xp;case 36295:return qp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Jp}}class Qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dp(e.type)}}class tm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zp(e.type)}}class em{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const zr=/(\w+)(\])?(\[|\.)?/g;function el(s,t){s.seq.push(t),s.map[t.id]=t}function nm(s,t,e){const n=s.name,i=n.length;for(zr.lastIndex=0;;){const r=zr.exec(n),o=zr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){el(e,c===void 0?new Qp(a,s,t):new tm(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new em(a),el(e,d)),e=d}}}class qs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);nm(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function nl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const im=37297;let sm=0;function rm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const il=new Nt;function om(s){$t._getMatrix(il,$t.workingColorSpace,s);const t=`mat3( ${il.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(s)){case js:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function sl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+rm(s.getShaderSource(t),o)}else return i}function am(s,t){const e=om(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function lm(s,t){let e;switch(t){case kc:e="Linear";break;case zc:e="Reinhard";break;case Hc:e="Cineon";break;case Vc:e="ACESFilmic";break;case Wc:e="AgX";break;case Xc:e="Neutral";break;case Gc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fs=new T;function cm(){$t.getLuminanceCoefficients(Fs);const s=Fs.x.toFixed(4),t=Fs.y.toFixed(4),e=Fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function um(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ki(s){return s!==""}function rl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ol(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(s){return s.replace(fm,mm)}const pm=new Map;function mm(s,t){let e=Bt[t];if(e===void 0){const n=pm.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Io(e)}const gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(s){return s.replace(gm,_m)}function _m(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ll(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===vc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===pn&&(t="SHADOWMAP_TYPE_VSM"),t}function ym(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Pi:case Ii:t="ENVMAP_TYPE_CUBE";break;case tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ii:t="ENVMAP_MODE_REFRACTION";break}return t}function Mm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Tl:t="ENVMAP_BLENDING_MULTIPLY";break;case Oc:t="ENVMAP_BLENDING_MIX";break;case Bc:t="ENVMAP_BLENDING_ADD";break}return t}function Sm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Em(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=vm(e),c=ym(e),h=xm(e),d=Mm(e),f=Sm(e),p=hm(e),g=um(r),_=i.createProgram();let m,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ki).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ki).join(`
`),u.length>0&&(u+=`
`)):(m=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),u=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?Bt.tonemapping_pars_fragment:"",e.toneMapping!==In?lm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,am("linearToOutputTexel",e.outputColorSpace),cm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ki).join(`
`)),o=Io(o),o=rl(o,e),o=ol(o,e),a=Io(a),a=rl(a,e),a=ol(a,e),o=al(o),a=al(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=b+m+o,x=b+u+a,D=nl(i,i.VERTEX_SHADER,E),A=nl(i,i.FRAGMENT_SHADER,x);i.attachShader(_,D),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(C){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(D).trim(),X=i.getShaderInfoLog(A).trim();let K=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,D,A);else{const Z=sl(i,D,"vertex"),G=sl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+Z+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||X==="")&&(q=!1);q&&(C.diagnostics={runnable:K,programLog:k,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:u}})}i.deleteShader(D),i.deleteShader(A),P=new qs(i,_),S=dm(i,_)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,im)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=A,this}let bm=0;class wm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tm(t),e.set(t,n)),n}}class Tm{constructor(t){this.id=bm++,this.code=t,this.usedTimes=0}}function Am(s,t,e,n,i,r,o){const a=new Vo,l=new wm,c=new Set,h=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,v,C,k,B){const X=k.fog,K=B.geometry,q=S.isMeshStandardMaterial?k.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||q),G=Z&&Z.mapping===tr?Z.image.height:null,st=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ut=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Mt=ut!==void 0?ut.length:0;let kt=0;K.morphAttributes.position!==void 0&&(kt=1),K.morphAttributes.normal!==void 0&&(kt=2),K.morphAttributes.color!==void 0&&(kt=3);let ne,j,et,_t;if(st){const Qt=en[st];ne=Qt.vertexShader,j=Qt.fragmentShader}else ne=S.vertexShader,j=S.fragmentShader,l.update(S),et=l.getVertexShaderID(S),_t=l.getFragmentShaderID(S);const rt=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),Yt=B.isInstancedMesh===!0,Ct=B.isBatchedMesh===!0,de=!!S.map,ae=!!S.matcap,Vt=!!Z,I=!!S.aoMap,ke=!!S.lightMap,Xt=!!S.bumpMap,Gt=!!S.normalMap,St=!!S.displacementMap,re=!!S.emissiveMap,yt=!!S.metalnessMap,w=!!S.roughnessMap,y=S.anisotropy>0,O=S.clearcoat>0,$=S.dispersion>0,J=S.iridescence>0,W=S.sheen>0,vt=S.transmission>0,ot=y&&!!S.anisotropyMap,Tt=O&&!!S.clearcoatMap,At=O&&!!S.clearcoatNormalMap,Q=O&&!!S.clearcoatRoughnessMap,dt=J&&!!S.iridescenceMap,Rt=J&&!!S.iridescenceThicknessMap,It=W&&!!S.sheenColorMap,ft=W&&!!S.sheenRoughnessMap,Wt=!!S.specularMap,Ot=!!S.specularColorMap,ie=!!S.specularIntensityMap,L=vt&&!!S.transmissionMap,at=vt&&!!S.thicknessMap,V=!!S.gradientMap,Y=!!S.alphaMap,ct=S.alphaTest>0,lt=!!S.alphaHash,Ut=!!S.extensions;let ce=In;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ce=s.toneMapping);const Se={shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:ne,fragmentShader:j,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ct,batchingColor:Ct&&B._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&B.instanceColor!==null,instancingMorph:Yt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Di,alphaToCoverage:!!S.alphaToCoverage,map:de,matcap:ae,envMap:Vt,envMapMode:Vt&&Z.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:ke,bumpMap:Xt,normalMap:Gt,displacementMap:f&&St,emissiveMap:re,normalMapObjectSpace:Gt&&S.normalMapType===Yc,normalMapTangentSpace:Gt&&S.normalMapType===Nl,metalnessMap:yt,roughnessMap:w,anisotropy:y,anisotropyMap:ot,clearcoat:O,clearcoatMap:Tt,clearcoatNormalMap:At,clearcoatRoughnessMap:Q,dispersion:$,iridescence:J,iridescenceMap:dt,iridescenceThicknessMap:Rt,sheen:W,sheenColorMap:It,sheenRoughnessMap:ft,specularMap:Wt,specularColorMap:Ot,specularIntensityMap:ie,transmission:vt,transmissionMap:L,thicknessMap:at,gradientMap:V,opaque:S.transparent===!1&&S.blending===Ai&&S.alphaToCoverage===!1,alphaMap:Y,alphaTest:ct,alphaHash:lt,combine:S.combine,mapUv:de&&_(S.map.channel),aoMapUv:I&&_(S.aoMap.channel),lightMapUv:ke&&_(S.lightMap.channel),bumpMapUv:Xt&&_(S.bumpMap.channel),normalMapUv:Gt&&_(S.normalMap.channel),displacementMapUv:St&&_(S.displacementMap.channel),emissiveMapUv:re&&_(S.emissiveMap.channel),metalnessMapUv:yt&&_(S.metalnessMap.channel),roughnessMapUv:w&&_(S.roughnessMap.channel),anisotropyMapUv:ot&&_(S.anisotropyMap.channel),clearcoatMapUv:Tt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:At&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ft&&_(S.sheenRoughnessMap.channel),specularMapUv:Wt&&_(S.specularMap.channel),specularColorMapUv:Ot&&_(S.specularColorMap.channel),specularIntensityMapUv:ie&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:at&&_(S.thicknessMap.channel),alphaMapUv:Y&&_(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Gt||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(de||Y),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:wt,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:kt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,decodeVideoTexture:de&&S.map.isVideoTexture===!0&&$t.getTransfer(S.map.colorSpace)===te,decodeVideoTextureEmissive:re&&S.emissiveMap.isVideoTexture===!0&&$t.getTransfer(S.emissiveMap.colorSpace)===te,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mn,flipSided:S.side===Le,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ut&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&S.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function u(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)v.push(C),v.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(b(v,S),E(v,S),v.push(s.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function b(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function E(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const v=g[S.type];let C;if(v){const k=en[v];C=Ah.clone(k.uniforms)}else C=S.uniforms;return C}function D(S,v){let C;for(let k=0,B=h.length;k<B;k++){const X=h[k];if(X.cacheKey===v){C=X,++C.usedTimes;break}}return C===void 0&&(C=new Em(s,v,S,r),h.push(C)),C}function A(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:D,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:P}}function Rm(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Cm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function cl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function hl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,f,p,g,_,m){let u=s[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),t++,u}function a(d,f,p,g,_,m){const u=o(d,f,p,g,_,m);p.transmission>0?n.push(u):p.transparent===!0?i.push(u):e.push(u)}function l(d,f,p,g,_,m){const u=o(d,f,p,g,_,m);p.transmission>0?n.unshift(u):p.transparent===!0?i.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||Cm),n.length>1&&n.sort(f||cl),i.length>1&&i.sort(f||cl)}function h(){for(let d=t,f=s.length;d<f;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Pm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new hl,s.set(n,[o])):i>=r.length?(o=new hl,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Im(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Ht};break;case"SpotLight":e={position:new T,direction:new T,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function Dm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Lm=0;function Um(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Nm(s){const t=new Im,e=Dm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const i=new T,r=new Zt,o=new Zt;function a(c){let h=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,u=0,b=0,E=0,x=0,D=0,A=0,R=0;c.sort(Um);for(let S=0,v=c.length;S<v;S++){const C=c[S],k=C.color,B=C.intensity,X=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=k.r*B,d+=k.g*B,f+=k.b*B;else if(C.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(C.sh.coefficients[q],B);R++}else if(C.isDirectionalLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Z=C.shadow,G=e.get(C);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=C.shadow.matrix,b++}n.directional[p]=q,p++}else if(C.isSpotLight){const q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(k).multiplyScalar(B),q.distance=X,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,n.spot[_]=q;const Z=C.shadow;if(C.map&&(n.spotLightMap[D]=C.map,D++,Z.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=Z.matrix,C.castShadow){const G=e.get(C);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=K,x++}_++}else if(C.isRectAreaLight){const q=t.get(C);q.color.copy(k).multiplyScalar(B),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=q,m++}else if(C.isPointLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){const Z=C.shadow,G=e.get(C);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=q,g++}else if(C.isHemisphereLight){const q=t.get(C);q.skyColor.copy(C.color).multiplyScalar(B),q.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[u]=q,u++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==b||P.numPointShadows!==E||P.numSpotShadows!==x||P.numSpotMaps!==D||P.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+D-A,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=b,P.numPointShadows=E,P.numSpotShadows=x,P.numSpotMaps=D,P.numLightProbes=R,n.version=Lm++)}function l(c,h){let d=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const E=c[u];if(E.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(E.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function ul(s){const t=new Nm(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Fm(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new ul(s),t.set(i,[a])):r>=o.length?(a=new ul(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function km(s,t,e){let n=new Wo;const i=new gt,r=new gt,o=new ue,a=new su({depthPacking:$c}),l=new ru,c={},h=e.maxTextureSize,d={[Ln]:Le,[Le]:Ln,[mn]:mn},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Om,fragmentShader:Bm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Te;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wl;let u=this.type;this.render=function(A,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=s.getRenderTarget(),v=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Pn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=u!==pn&&this.type===pn,X=u===pn&&this.type!==pn;for(let K=0,q=A.length;K<q;K++){const Z=A[K],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const st=G.getFrameExtents();if(i.multiply(st),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,G.mapSize.y=r.y)),G.map===null||B===!0||X===!0){const Mt=this.type!==pn?{minFilter:Be,magFilter:Be}:{};G.map!==null&&G.map.dispose(),G.map=new Zn(i.x,i.y,Mt),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const ut=G.getViewportCount();for(let Mt=0;Mt<ut;Mt++){const kt=G.getViewport(Mt);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),k.viewport(o),G.updateMatrices(Z,Mt),n=G.getFrustum(),x(R,P,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===pn&&b(G,P),G.needsUpdate=!1}u=this.type,m.needsUpdate=!1,s.setRenderTarget(S,v,C)};function b(A,R){const P=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,P,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,P,p,_,null)}function E(A,R,P,S){let v=null;const C=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)v=C;else if(v=P.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=v.uuid,B=R.uuid;let X=c[k];X===void 0&&(X={},c[k]=X);let K=X[B];K===void 0&&(K=v.clone(),X[B]=K,R.addEventListener("dispose",D)),v=K}if(v.visible=R.visible,v.wireframe=R.wireframe,S===pn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:d[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const k=s.properties.get(v);k.light=P}return v}function x(A,R,P,S,v){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const B=t.update(A),X=A.material;if(Array.isArray(X)){const K=B.groups;for(let q=0,Z=K.length;q<Z;q++){const G=K[q],st=X[G.materialIndex];if(st&&st.visible){const ut=E(A,st,S,v);A.onBeforeShadow(s,A,R,P,B,ut,G),s.renderBufferDirect(P,null,B,ut,A,G),A.onAfterShadow(s,A,R,P,B,ut,G)}}}else if(X.visible){const K=E(A,X,S,v);A.onBeforeShadow(s,A,R,P,B,K,null),s.renderBufferDirect(P,null,B,K,A,null),A.onAfterShadow(s,A,R,P,B,K,null)}}const k=A.children;for(let B=0,X=k.length;B<X;B++)x(k[B],R,P,S,v)}function D(A){A.target.removeEventListener("dispose",D);for(const P in c){const S=c[P],v=A.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const zm={[Wr]:Xr,[qr]:Yr,[jr]:Kr,[Ci]:$r,[Xr]:Wr,[Yr]:qr,[Kr]:jr,[$r]:Ci};function Hm(s,t){function e(){let L=!1;const at=new ue;let V=null;const Y=new ue(0,0,0,0);return{setMask:function(ct){V!==ct&&!L&&(s.colorMask(ct,ct,ct,ct),V=ct)},setLocked:function(ct){L=ct},setClear:function(ct,lt,Ut,ce,Se){Se===!0&&(ct*=ce,lt*=ce,Ut*=ce),at.set(ct,lt,Ut,ce),Y.equals(at)===!1&&(s.clearColor(ct,lt,Ut,ce),Y.copy(at))},reset:function(){L=!1,V=null,Y.set(-1,0,0,0)}}}function n(){let L=!1,at=!1,V=null,Y=null,ct=null;return{setReversed:function(lt){if(at!==lt){const Ut=t.get("EXT_clip_control");lt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),at=lt;const ce=ct;ct=null,this.setClear(ce)}},getReversed:function(){return at},setTest:function(lt){lt?rt(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(lt){V!==lt&&!L&&(s.depthMask(lt),V=lt)},setFunc:function(lt){if(at&&(lt=zm[lt]),Y!==lt){switch(lt){case Wr:s.depthFunc(s.NEVER);break;case Xr:s.depthFunc(s.ALWAYS);break;case qr:s.depthFunc(s.LESS);break;case Ci:s.depthFunc(s.LEQUAL);break;case jr:s.depthFunc(s.EQUAL);break;case $r:s.depthFunc(s.GEQUAL);break;case Yr:s.depthFunc(s.GREATER);break;case Kr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=lt}},setLocked:function(lt){L=lt},setClear:function(lt){ct!==lt&&(at&&(lt=1-lt),s.clearDepth(lt),ct=lt)},reset:function(){L=!1,V=null,Y=null,ct=null,at=!1}}}function i(){let L=!1,at=null,V=null,Y=null,ct=null,lt=null,Ut=null,ce=null,Se=null;return{setTest:function(Qt){L||(Qt?rt(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(Qt){at!==Qt&&!L&&(s.stencilMask(Qt),at=Qt)},setFunc:function(Qt,Ye,an){(V!==Qt||Y!==Ye||ct!==an)&&(s.stencilFunc(Qt,Ye,an),V=Qt,Y=Ye,ct=an)},setOp:function(Qt,Ye,an){(lt!==Qt||Ut!==Ye||ce!==an)&&(s.stencilOp(Qt,Ye,an),lt=Qt,Ut=Ye,ce=an)},setLocked:function(Qt){L=Qt},setClear:function(Qt){Se!==Qt&&(s.clearStencil(Qt),Se=Qt)},reset:function(){L=!1,at=null,V=null,Y=null,ct=null,lt=null,Ut=null,ce=null,Se=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,b=null,E=null,x=null,D=null,A=null,R=new Ht(0,0,0),P=0,S=!1,v=null,C=null,k=null,B=null,X=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=Z>=2);let st=null,ut={};const Mt=s.getParameter(s.SCISSOR_BOX),kt=s.getParameter(s.VIEWPORT),ne=new ue().fromArray(Mt),j=new ue().fromArray(kt);function et(L,at,V,Y){const ct=new Uint8Array(4),lt=s.createTexture();s.bindTexture(L,lt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<V;Ut++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,Y,0,s.RGBA,s.UNSIGNED_BYTE,ct):s.texImage2D(at+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ct);return lt}const _t={};_t[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),_t[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_t[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(s.DEPTH_TEST),o.setFunc(Ci),Xt(!1),Gt(ra),rt(s.CULL_FACE),I(Pn);function rt(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function wt(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Yt(L,at){return d[L]!==at?(s.bindFramebuffer(L,at),d[L]=at,L===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=at),L===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=at),!0):!1}function Ct(L,at){let V=p,Y=!1;if(L){V=f.get(at),V===void 0&&(V=[],f.set(at,V));const ct=L.textures;if(V.length!==ct.length||V[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Ut=ct.length;lt<Ut;lt++)V[lt]=s.COLOR_ATTACHMENT0+lt;V.length=ct.length,Y=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,Y=!0);Y&&s.drawBuffers(V)}function de(L){return g!==L?(s.useProgram(L),g=L,!0):!1}const ae={[qn]:s.FUNC_ADD,[xc]:s.FUNC_SUBTRACT,[Mc]:s.FUNC_REVERSE_SUBTRACT};ae[Sc]=s.MIN,ae[Ec]=s.MAX;const Vt={[bc]:s.ZERO,[wc]:s.ONE,[Tc]:s.SRC_COLOR,[Vr]:s.SRC_ALPHA,[Dc]:s.SRC_ALPHA_SATURATE,[Pc]:s.DST_COLOR,[Rc]:s.DST_ALPHA,[Ac]:s.ONE_MINUS_SRC_COLOR,[Gr]:s.ONE_MINUS_SRC_ALPHA,[Ic]:s.ONE_MINUS_DST_COLOR,[Cc]:s.ONE_MINUS_DST_ALPHA,[Lc]:s.CONSTANT_COLOR,[Uc]:s.ONE_MINUS_CONSTANT_COLOR,[Nc]:s.CONSTANT_ALPHA,[Fc]:s.ONE_MINUS_CONSTANT_ALPHA};function I(L,at,V,Y,ct,lt,Ut,ce,Se,Qt){if(L===Pn){_===!0&&(wt(s.BLEND),_=!1);return}if(_===!1&&(rt(s.BLEND),_=!0),L!==yc){if(L!==m||Qt!==S){if((u!==qn||x!==qn)&&(s.blendEquation(s.FUNC_ADD),u=qn,x=qn),Qt)switch(L){case Ai:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case oa:s.blendFunc(s.ONE,s.ONE);break;case aa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case la:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case oa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case aa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case la:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,E=null,D=null,A=null,R.set(0,0,0),P=0,m=L,S=Qt}return}ct=ct||at,lt=lt||V,Ut=Ut||Y,(at!==u||ct!==x)&&(s.blendEquationSeparate(ae[at],ae[ct]),u=at,x=ct),(V!==b||Y!==E||lt!==D||Ut!==A)&&(s.blendFuncSeparate(Vt[V],Vt[Y],Vt[lt],Vt[Ut]),b=V,E=Y,D=lt,A=Ut),(ce.equals(R)===!1||Se!==P)&&(s.blendColor(ce.r,ce.g,ce.b,Se),R.copy(ce),P=Se),m=L,S=!1}function ke(L,at){L.side===mn?wt(s.CULL_FACE):rt(s.CULL_FACE);let V=L.side===Le;at&&(V=!V),Xt(V),L.blending===Ai&&L.transparent===!1?I(Pn):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const Y=L.stencilWrite;a.setTest(Y),Y&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),re(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(L){v!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),v=L)}function Gt(L){L!==gc?(rt(s.CULL_FACE),L!==C&&(L===ra?s.cullFace(s.BACK):L===_c?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),C=L}function St(L){L!==k&&(q&&s.lineWidth(L),k=L)}function re(L,at,V){L?(rt(s.POLYGON_OFFSET_FILL),(B!==at||X!==V)&&(s.polygonOffset(at,V),B=at,X=V)):wt(s.POLYGON_OFFSET_FILL)}function yt(L){L?rt(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function w(L){L===void 0&&(L=s.TEXTURE0+K-1),st!==L&&(s.activeTexture(L),st=L)}function y(L,at,V){V===void 0&&(st===null?V=s.TEXTURE0+K-1:V=st);let Y=ut[V];Y===void 0&&(Y={type:void 0,texture:void 0},ut[V]=Y),(Y.type!==L||Y.texture!==at)&&(st!==V&&(s.activeTexture(V),st=V),s.bindTexture(L,at||_t[L]),Y.type=L,Y.texture=at)}function O(){const L=ut[st];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{s.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{s.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{s.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{s.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{s.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{s.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{s.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{s.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{s.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{s.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(L){ne.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ne.copy(L))}function ft(L){j.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),j.copy(L))}function Wt(L,at){let V=c.get(at);V===void 0&&(V=new WeakMap,c.set(at,V));let Y=V.get(L);Y===void 0&&(Y=s.getUniformBlockIndex(at,L.name),V.set(L,Y))}function Ot(L,at){const Y=c.get(at).get(L);l.get(at)!==Y&&(s.uniformBlockBinding(at,Y,L.__bindingPointIndex),l.set(at,Y))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,ut={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,b=null,E=null,x=null,D=null,A=null,R=new Ht(0,0,0),P=0,S=!1,v=null,C=null,k=null,B=null,X=null,ne.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:wt,bindFramebuffer:Yt,drawBuffers:Ct,useProgram:de,setBlending:I,setMaterial:ke,setFlipSided:Xt,setCullFace:Gt,setLineWidth:St,setPolygonOffset:re,setScissorTest:yt,activeTexture:w,bindTexture:y,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:dt,texImage3D:Rt,updateUBOMapping:Wt,uniformBlockBinding:Ot,texStorage2D:At,texStorage3D:Q,texSubImage2D:W,texSubImage3D:vt,compressedTexSubImage2D:ot,compressedTexSubImage3D:Tt,scissor:It,viewport:ft,reset:ie}}function Vm(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return p?new OffscreenCanvas(w,y):Ys("canvas")}function _(w,y,O){let $=1;const J=yt(w);if((J.width>O||J.height>O)&&($=O/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const W=Math.floor($*J.width),vt=Math.floor($*J.height);d===void 0&&(d=g(W,vt));const ot=y?g(W,vt):d;return ot.width=W,ot.height=vt,ot.getContext("2d").drawImage(w,0,0,W,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+vt+")."),ot}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function u(w){s.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(w,y,O,$,J=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let W=y;if(y===s.RED&&(O===s.FLOAT&&(W=s.R32F),O===s.HALF_FLOAT&&(W=s.R16F),O===s.UNSIGNED_BYTE&&(W=s.R8)),y===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(W=s.R8UI),O===s.UNSIGNED_SHORT&&(W=s.R16UI),O===s.UNSIGNED_INT&&(W=s.R32UI),O===s.BYTE&&(W=s.R8I),O===s.SHORT&&(W=s.R16I),O===s.INT&&(W=s.R32I)),y===s.RG&&(O===s.FLOAT&&(W=s.RG32F),O===s.HALF_FLOAT&&(W=s.RG16F),O===s.UNSIGNED_BYTE&&(W=s.RG8)),y===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(W=s.RG8UI),O===s.UNSIGNED_SHORT&&(W=s.RG16UI),O===s.UNSIGNED_INT&&(W=s.RG32UI),O===s.BYTE&&(W=s.RG8I),O===s.SHORT&&(W=s.RG16I),O===s.INT&&(W=s.RG32I)),y===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(W=s.RGB8UI),O===s.UNSIGNED_SHORT&&(W=s.RGB16UI),O===s.UNSIGNED_INT&&(W=s.RGB32UI),O===s.BYTE&&(W=s.RGB8I),O===s.SHORT&&(W=s.RGB16I),O===s.INT&&(W=s.RGB32I)),y===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),O===s.UNSIGNED_INT&&(W=s.RGBA32UI),O===s.BYTE&&(W=s.RGBA8I),O===s.SHORT&&(W=s.RGBA16I),O===s.INT&&(W=s.RGBA32I)),y===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),y===s.RGBA){const vt=J?js:$t.getTransfer($);O===s.FLOAT&&(W=s.RGBA32F),O===s.HALF_FLOAT&&(W=s.RGBA16F),O===s.UNSIGNED_BYTE&&(W=vt===te?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function x(w,y){let O;return w?y===null||y===Jn||y===ts?O=s.DEPTH24_STENCIL8:y===rn?O=s.DEPTH32F_STENCIL8:y===Qi&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Jn||y===ts?O=s.DEPTH_COMPONENT24:y===rn?O=s.DEPTH_COMPONENT32F:y===Qi&&(O=s.DEPTH_COMPONENT16),O}function D(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Be&&w.minFilter!==sn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function A(w){const y=w.target;y.removeEventListener("dispose",A),P(y),y.isVideoTexture&&h.delete(y)}function R(w){const y=w.target;y.removeEventListener("dispose",R),v(y)}function P(w){const y=n.get(w);if(y.__webglInit===void 0)return;const O=w.source,$=f.get(O);if($){const J=$[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(w),Object.keys($).length===0&&f.delete(O)}n.remove(w)}function S(w){const y=n.get(w);s.deleteTexture(y.__webglTexture);const O=w.source,$=f.get(O);delete $[y.__cacheKey],o.memory.textures--}function v(w){const y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let J=0;J<y.__webglFramebuffer[$].length;J++)s.deleteFramebuffer(y.__webglFramebuffer[$][J]);else s.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)s.deleteFramebuffer(y.__webglFramebuffer[$]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=w.textures;for(let $=0,J=O.length;$<J;$++){const W=n.get(O[$]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(O[$])}n.remove(w)}let C=0;function k(){C=0}function B(){const w=C;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),C+=1,w}function X(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function K(w,y){const O=n.get(w);if(w.isVideoTexture&&St(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,w,y);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+y)}function q(w,y){const O=n.get(w);if(w.version>0&&O.__version!==w.version){j(O,w,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+y)}function Z(w,y){const O=n.get(w);if(w.version>0&&O.__version!==w.version){j(O,w,y);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+y)}function G(w,y){const O=n.get(w);if(w.version>0&&O.__version!==w.version){et(O,w,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+y)}const st={[Qr]:s.REPEAT,[$n]:s.CLAMP_TO_EDGE,[to]:s.MIRRORED_REPEAT},ut={[Be]:s.NEAREST,[qc]:s.NEAREST_MIPMAP_NEAREST,[cs]:s.NEAREST_MIPMAP_LINEAR,[sn]:s.LINEAR,[rr]:s.LINEAR_MIPMAP_NEAREST,[Yn]:s.LINEAR_MIPMAP_LINEAR},Mt={[Kc]:s.NEVER,[nh]:s.ALWAYS,[Jc]:s.LESS,[Fl]:s.LEQUAL,[Zc]:s.EQUAL,[eh]:s.GEQUAL,[Qc]:s.GREATER,[th]:s.NOTEQUAL};function kt(w,y){if(y.type===rn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===sn||y.magFilter===rr||y.magFilter===cs||y.magFilter===Yn||y.minFilter===sn||y.minFilter===rr||y.minFilter===cs||y.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,st[y.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,st[y.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,st[y.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ut[y.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ut[y.minFilter]),y.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,Mt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Be||y.minFilter!==cs&&y.minFilter!==Yn||y.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ne(w,y){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",A));const $=y.source;let J=f.get($);J===void 0&&(J={},f.set($,J));const W=X(y);if(W!==w.__cacheKey){J[W]===void 0&&(J[W]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[W].usedTimes++;const vt=J[w.__cacheKey];vt!==void 0&&(J[w.__cacheKey].usedTimes--,vt.usedTimes===0&&S(y)),w.__cacheKey=W,w.__webglTexture=J[W].texture}return O}function j(w,y,O){let $=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=s.TEXTURE_3D);const J=ne(w,y),W=y.source;e.bindTexture($,w.__webglTexture,s.TEXTURE0+O);const vt=n.get(W);if(W.version!==vt.__version||J===!0){e.activeTexture(s.TEXTURE0+O);const ot=$t.getPrimaries($t.workingColorSpace),Tt=y.colorSpace===Cn?null:$t.getPrimaries(y.colorSpace),At=y.colorSpace===Cn||ot===Tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Q=_(y.image,!1,i.maxTextureSize);Q=re(y,Q);const dt=r.convert(y.format,y.colorSpace),Rt=r.convert(y.type);let It=E(y.internalFormat,dt,Rt,y.colorSpace,y.isVideoTexture);kt($,y);let ft;const Wt=y.mipmaps,Ot=y.isVideoTexture!==!0,ie=vt.__version===void 0||J===!0,L=W.dataReady,at=D(y,Q);if(y.isDepthTexture)It=x(y.format===ns,y.type),ie&&(Ot?e.texStorage2D(s.TEXTURE_2D,1,It,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,It,Q.width,Q.height,0,dt,Rt,null));else if(y.isDataTexture)if(Wt.length>0){Ot&&ie&&e.texStorage2D(s.TEXTURE_2D,at,It,Wt[0].width,Wt[0].height);for(let V=0,Y=Wt.length;V<Y;V++)ft=Wt[V],Ot?L&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,ft.width,ft.height,dt,Rt,ft.data):e.texImage2D(s.TEXTURE_2D,V,It,ft.width,ft.height,0,dt,Rt,ft.data);y.generateMipmaps=!1}else Ot?(ie&&e.texStorage2D(s.TEXTURE_2D,at,It,Q.width,Q.height),L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,dt,Rt,Q.data)):e.texImage2D(s.TEXTURE_2D,0,It,Q.width,Q.height,0,dt,Rt,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ot&&ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,It,Wt[0].width,Wt[0].height,Q.depth);for(let V=0,Y=Wt.length;V<Y;V++)if(ft=Wt[V],y.format!==tn)if(dt!==null)if(Ot){if(L)if(y.layerUpdates.size>0){const ct=Ha(ft.width,ft.height,y.format,y.type);for(const lt of y.layerUpdates){const Ut=ft.data.subarray(lt*ct/ft.data.BYTES_PER_ELEMENT,(lt+1)*ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,lt,ft.width,ft.height,1,dt,Ut)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,ft.width,ft.height,Q.depth,dt,ft.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,It,ft.width,ft.height,Q.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?L&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,ft.width,ft.height,Q.depth,dt,Rt,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,V,It,ft.width,ft.height,Q.depth,0,dt,Rt,ft.data)}else{Ot&&ie&&e.texStorage2D(s.TEXTURE_2D,at,It,Wt[0].width,Wt[0].height);for(let V=0,Y=Wt.length;V<Y;V++)ft=Wt[V],y.format!==tn?dt!==null?Ot?L&&e.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,V,It,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?L&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,ft.width,ft.height,dt,Rt,ft.data):e.texImage2D(s.TEXTURE_2D,V,It,ft.width,ft.height,0,dt,Rt,ft.data)}else if(y.isDataArrayTexture)if(Ot){if(ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,It,Q.width,Q.height,Q.depth),L)if(y.layerUpdates.size>0){const V=Ha(Q.width,Q.height,y.format,y.type);for(const Y of y.layerUpdates){const ct=Q.data.subarray(Y*V/Q.data.BYTES_PER_ELEMENT,(Y+1)*V/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,dt,Rt,ct)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,Rt,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,It,Q.width,Q.height,Q.depth,0,dt,Rt,Q.data);else if(y.isData3DTexture)Ot?(ie&&e.texStorage3D(s.TEXTURE_3D,at,It,Q.width,Q.height,Q.depth),L&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,Rt,Q.data)):e.texImage3D(s.TEXTURE_3D,0,It,Q.width,Q.height,Q.depth,0,dt,Rt,Q.data);else if(y.isFramebufferTexture){if(ie)if(Ot)e.texStorage2D(s.TEXTURE_2D,at,It,Q.width,Q.height);else{let V=Q.width,Y=Q.height;for(let ct=0;ct<at;ct++)e.texImage2D(s.TEXTURE_2D,ct,It,V,Y,0,dt,Rt,null),V>>=1,Y>>=1}}else if(Wt.length>0){if(Ot&&ie){const V=yt(Wt[0]);e.texStorage2D(s.TEXTURE_2D,at,It,V.width,V.height)}for(let V=0,Y=Wt.length;V<Y;V++)ft=Wt[V],Ot?L&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,dt,Rt,ft):e.texImage2D(s.TEXTURE_2D,V,It,dt,Rt,ft);y.generateMipmaps=!1}else if(Ot){if(ie){const V=yt(Q);e.texStorage2D(s.TEXTURE_2D,at,It,V.width,V.height)}L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,Rt,Q)}else e.texImage2D(s.TEXTURE_2D,0,It,dt,Rt,Q);m(y)&&u($),vt.__version=W.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function et(w,y,O){if(y.image.length!==6)return;const $=ne(w,y),J=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+O);const W=n.get(J);if(J.version!==W.__version||$===!0){e.activeTexture(s.TEXTURE0+O);const vt=$t.getPrimaries($t.workingColorSpace),ot=y.colorSpace===Cn?null:$t.getPrimaries(y.colorSpace),Tt=y.colorSpace===Cn||vt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const At=y.isCompressedTexture||y.image[0].isCompressedTexture,Q=y.image[0]&&y.image[0].isDataTexture,dt=[];for(let Y=0;Y<6;Y++)!At&&!Q?dt[Y]=_(y.image[Y],!0,i.maxCubemapSize):dt[Y]=Q?y.image[Y].image:y.image[Y],dt[Y]=re(y,dt[Y]);const Rt=dt[0],It=r.convert(y.format,y.colorSpace),ft=r.convert(y.type),Wt=E(y.internalFormat,It,ft,y.colorSpace),Ot=y.isVideoTexture!==!0,ie=W.__version===void 0||$===!0,L=J.dataReady;let at=D(y,Rt);kt(s.TEXTURE_CUBE_MAP,y);let V;if(At){Ot&&ie&&e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Wt,Rt.width,Rt.height);for(let Y=0;Y<6;Y++){V=dt[Y].mipmaps;for(let ct=0;ct<V.length;ct++){const lt=V[ct];y.format!==tn?It!==null?Ot?L&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,0,0,lt.width,lt.height,It,lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,Wt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,0,0,lt.width,lt.height,It,ft,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,Wt,lt.width,lt.height,0,It,ft,lt.data)}}}else{if(V=y.mipmaps,Ot&&ie){V.length>0&&at++;const Y=yt(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Wt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){Ot?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,dt[Y].width,dt[Y].height,It,ft,dt[Y].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Wt,dt[Y].width,dt[Y].height,0,It,ft,dt[Y].data);for(let ct=0;ct<V.length;ct++){const Ut=V[ct].image[Y].image;Ot?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,0,0,Ut.width,Ut.height,It,ft,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,Wt,Ut.width,Ut.height,0,It,ft,Ut.data)}}else{Ot?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,It,ft,dt[Y]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Wt,It,ft,dt[Y]);for(let ct=0;ct<V.length;ct++){const lt=V[ct];Ot?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,0,0,It,ft,lt.image[Y]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,Wt,It,ft,lt.image[Y])}}}m(y)&&u(s.TEXTURE_CUBE_MAP),W.__version=J.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function _t(w,y,O,$,J,W){const vt=r.convert(O.format,O.colorSpace),ot=r.convert(O.type),Tt=E(O.internalFormat,vt,ot,O.colorSpace),At=n.get(y),Q=n.get(O);if(Q.__renderTarget=y,!At.__hasExternalTextures){const dt=Math.max(1,y.width>>W),Rt=Math.max(1,y.height>>W);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,W,Tt,dt,Rt,y.depth,0,vt,ot,null):e.texImage2D(J,W,Tt,dt,Rt,0,vt,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),Gt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,J,Q.__webglTexture,0,Xt(y)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,J,Q.__webglTexture,W),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(w,y,O){if(s.bindRenderbuffer(s.RENDERBUFFER,w),y.depthBuffer){const $=y.depthTexture,J=$&&$.isDepthTexture?$.type:null,W=x(y.stencilBuffer,J),vt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=Xt(y);Gt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,W,y.width,y.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,W,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,W,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,w)}else{const $=y.textures;for(let J=0;J<$.length;J++){const W=$[J],vt=r.convert(W.format,W.colorSpace),ot=r.convert(W.type),Tt=E(W.internalFormat,vt,ot,W.colorSpace),At=Xt(y);O&&Gt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,Tt,y.width,y.height):Gt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,Tt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Tt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function wt(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(y.depthTexture);$.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);const J=$.__webglTexture,W=Xt(y);if(y.depthTexture.format===es)Gt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(y.depthTexture.format===ns)Gt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Yt(w){const y=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=$}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const $=w.texture.mipmaps;$&&$.length>0?wt(y.__webglFramebuffer[0],w):wt(y.__webglFramebuffer,w)}else if(O){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=s.createRenderbuffer(),rt(y.__webglDepthbuffer[$],w,!1);else{const J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,W)}}else{const $=w.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),rt(y.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,W)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(w,y,O){const $=n.get(w);y!==void 0&&_t($.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Yt(w)}function de(w){const y=w.texture,O=n.get(w),$=n.get(y);w.addEventListener("dispose",R);const J=w.textures,W=w.isWebGLCubeRenderTarget===!0,vt=J.length>1;if(vt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=y.version,o.memory.textures++),W){O.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ot]=[];for(let Tt=0;Tt<y.mipmaps.length;Tt++)O.__webglFramebuffer[ot][Tt]=s.createFramebuffer()}else O.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ot=0;ot<y.mipmaps.length;ot++)O.__webglFramebuffer[ot]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(vt)for(let ot=0,Tt=J.length;ot<Tt;ot++){const At=n.get(J[ot]);At.__webglTexture===void 0&&(At.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&Gt(w)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const Tt=J[ot];O.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ot]);const At=r.convert(Tt.format,Tt.colorSpace),Q=r.convert(Tt.type),dt=E(Tt.internalFormat,At,Q,Tt.colorSpace,w.isXRRenderTarget===!0),Rt=Xt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,dt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,O.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),kt(s.TEXTURE_CUBE_MAP,y);for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0)for(let Tt=0;Tt<y.mipmaps.length;Tt++)_t(O.__webglFramebuffer[ot][Tt],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt);else _t(O.__webglFramebuffer[ot],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(y)&&u(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ot=0,Tt=J.length;ot<Tt;ot++){const At=J[ot],Q=n.get(At);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),kt(s.TEXTURE_2D,At),_t(O.__webglFramebuffer,w,At,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,0),m(At)&&u(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ot=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,$.__webglTexture),kt(ot,y),y.mipmaps&&y.mipmaps.length>0)for(let Tt=0;Tt<y.mipmaps.length;Tt++)_t(O.__webglFramebuffer[Tt],w,y,s.COLOR_ATTACHMENT0,ot,Tt);else _t(O.__webglFramebuffer,w,y,s.COLOR_ATTACHMENT0,ot,0);m(y)&&u(ot),e.unbindTexture()}w.depthBuffer&&Yt(w)}function ae(w){const y=w.textures;for(let O=0,$=y.length;O<$;O++){const J=y[O];if(m(J)){const W=b(w),vt=n.get(J).__webglTexture;e.bindTexture(W,vt),u(W),e.unbindTexture()}}}const Vt=[],I=[];function ke(w){if(w.samples>0){if(Gt(w)===!1){const y=w.textures,O=w.width,$=w.height;let J=s.COLOR_BUFFER_BIT;const W=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(w),ot=y.length>1;if(ot)for(let At=0;At<y.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);const Tt=w.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let At=0;At<y.length;At++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[At]);const Q=n.get(y[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,O,$,0,0,O,$,J,s.NEAREST),l===!0&&(Vt.length=0,I.length=0,Vt.push(s.COLOR_ATTACHMENT0+At),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Vt.push(W),I.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let At=0;At<y.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,vt.__webglColorRenderbuffer[At]);const Q=n.get(y[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,Q,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Xt(w){return Math.min(i.maxSamples,w.samples)}function Gt(w){const y=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function St(w){const y=o.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function re(w,y){const O=w.colorSpace,$=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Di&&O!==Cn&&($t.getTransfer(O)===te?($!==tn||J!==on)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function yt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=Ct,this.setupRenderTarget=de,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Gt}function Gm(s,t){function e(n,i=Cn){let r;const o=$t.getTransfer(i);if(n===on)return s.UNSIGNED_BYTE;if(n===Uo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===No)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Pl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Rl)return s.BYTE;if(n===Cl)return s.SHORT;if(n===Qi)return s.UNSIGNED_SHORT;if(n===Lo)return s.INT;if(n===Jn)return s.UNSIGNED_INT;if(n===rn)return s.FLOAT;if(n===ss)return s.HALF_FLOAT;if(n===Il)return s.ALPHA;if(n===Dl)return s.RGB;if(n===tn)return s.RGBA;if(n===es)return s.DEPTH_COMPONENT;if(n===ns)return s.DEPTH_STENCIL;if(n===Fo)return s.RED;if(n===Oo)return s.RED_INTEGER;if(n===Ll)return s.RG;if(n===Bo)return s.RG_INTEGER;if(n===ko)return s.RGBA_INTEGER;if(n===zs||n===Hs||n===Vs||n===Gs)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eo||n===no||n===io||n===so)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===no)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===so)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ro||n===oo||n===ao)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ro||n===oo)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ao)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===vo||n===yo||n===xo||n===Mo||n===So)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===co)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ho)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===po)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===go)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_o)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===So)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ws||n===Eo||n===bo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ws)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ul||n===wo||n===To||n===Ao)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ws)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Wm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new we,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Un({vertexShader:Wm,fragmentShader:Xm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xt(new os(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jm extends ti{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null;const _=new qm,m=e.getContextAttributes();let u=null,b=null;const E=[],x=[],D=new gt;let A=null;const R=new Xe;R.viewport=new ue;const P=new Xe;P.viewport=new ue;const S=[R,P],v=new hu;let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=E[j];return et===void 0&&(et=new Ar,E[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=E[j];return et===void 0&&(et=new Ar,E[j]=et),et.getGripSpace()},this.getHand=function(j){let et=E[j];return et===void 0&&(et=new Ar,E[j]=et),et.getHandSpace()};function B(j){const et=x.indexOf(j.inputSource);if(et===-1)return;const _t=E[et];_t!==void 0&&(_t.update(j.inputSource,j.frame,c||o),_t.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",K);for(let j=0;j<E.length;j++){const et=x[j];et!==null&&(x[j]=null,E[j].disconnect(et))}C=null,k=null,_.reset(),t.setRenderTarget(u),p=null,f=null,d=null,i=null,b=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(u=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",X),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,rt=null,wt=null;m.depth&&(wt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=m.stencil?ns:es,rt=m.stencil?ts:Jn);const Yt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};d=new XRWebGLBinding(i,e),f=d.createProjectionLayer(Yt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Zn(f.textureWidth,f.textureHeight,{format:tn,type:on,depthTexture:new Yl(f.textureWidth,f.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _t={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Zn(p.framebufferWidth,p.framebufferHeight,{format:tn,type:on,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(j){for(let et=0;et<j.removed.length;et++){const _t=j.removed[et],rt=x.indexOf(_t);rt>=0&&(x[rt]=null,E[rt].disconnect(_t))}for(let et=0;et<j.added.length;et++){const _t=j.added[et];let rt=x.indexOf(_t);if(rt===-1){for(let Yt=0;Yt<E.length;Yt++)if(Yt>=x.length){x.push(_t),rt=Yt;break}else if(x[Yt]===null){x[Yt]=_t,rt=Yt;break}if(rt===-1)break}const wt=E[rt];wt&&wt.connect(_t)}}const q=new T,Z=new T;function G(j,et,_t){q.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(_t.matrixWorld);const rt=q.distanceTo(Z),wt=et.projectionMatrix.elements,Yt=_t.projectionMatrix.elements,Ct=wt[14]/(wt[10]-1),de=wt[14]/(wt[10]+1),ae=(wt[9]+1)/wt[5],Vt=(wt[9]-1)/wt[5],I=(wt[8]-1)/wt[0],ke=(Yt[8]+1)/Yt[0],Xt=Ct*I,Gt=Ct*ke,St=rt/(-I+ke),re=St*-I;if(et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(re),j.translateZ(St),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),wt[10]===-1)j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const yt=Ct+St,w=de+St,y=Xt-re,O=Gt+(rt-re),$=ae*de/w*yt,J=Vt*de/w*yt;j.projectionMatrix.makePerspective(y,O,$,J,yt,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function st(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let et=j.near,_t=j.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),v.near=P.near=R.near=et,v.far=P.far=R.far=_t,(C!==v.near||k!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,k=v.far),R.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,v.layers.mask=R.layers.mask|P.layers.mask;const rt=j.parent,wt=v.cameras;st(v,rt);for(let Yt=0;Yt<wt.length;Yt++)st(wt[Yt],rt);wt.length===2?G(v,R,P):v.projectionMatrix.copy(R.projectionMatrix),ut(j,v,rt)};function ut(j,et,_t){_t===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(_t.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Co*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Mt=null;function kt(j,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let rt=!1;_t.length!==v.cameras.length&&(v.cameras.length=0,rt=!0);for(let Ct=0;Ct<_t.length;Ct++){const de=_t[Ct];let ae=null;if(p!==null)ae=p.getViewport(de);else{const I=d.getViewSubImage(f,de);ae=I.viewport,Ct===0&&(t.setRenderTargetTextures(b,I.colorTexture,I.depthStencilTexture),t.setRenderTarget(b))}let Vt=S[Ct];Vt===void 0&&(Vt=new Xe,Vt.layers.enable(Ct),Vt.viewport=new ue,S[Ct]=Vt),Vt.matrix.fromArray(de.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(de.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ae.x,ae.y,ae.width,ae.height),Ct===0&&(v.matrix.copy(Vt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),rt===!0&&v.cameras.push(Vt)}const wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&d){const Ct=d.getDepthInformation(_t[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(t,Ct,i.renderState)}}for(let _t=0;_t<E.length;_t++){const rt=x[_t],wt=E[_t];rt!==null&&wt!==void 0&&wt.update(rt,et,c||o)}Mt&&Mt(j,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ne=new ec;ne.setAnimationLoop(kt),this.setAnimationLoop=function(j){Mt=j},this.dispose=function(){}}}const Vn=new $e,$m=new Zt;function Ym(s,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Gl(s)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,b,E,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,x)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,b,E):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Le&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Le&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const b=t.get(u),E=b.envMap,x=b.envMapRotation;E&&(m.envMap.value=E,Vn.copy(x),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),m.envMapRotation.value.setFromMatrix4($m.makeRotationFromEuler(Vn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,b,E){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*b,m.scale.value=E*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,b){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Le&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const b=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Km(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const x=E.program;n.uniformBlockBinding(b,x)}function c(b,E){let x=i[b.id];x===void 0&&(g(b),x=h(b),i[b.id]=x,b.addEventListener("dispose",m));const D=E.program;n.updateUBOMapping(b,D);const A=t.render.frame;r[b.id]!==A&&(f(b),r[b.id]=A)}function h(b){const E=d();b.__bindingPointIndex=E;const x=s.createBuffer(),D=b.__size,A=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,D,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,x),x}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const E=i[b.id],x=b.uniforms,D=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let A=0,R=x.length;A<R;A++){const P=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,v=P.length;S<v;S++){const C=P[S];if(p(C,A,S,D)===!0){const k=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let K=0;K<B.length;K++){const q=B[K],Z=_(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,k+X,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(b,E,x,D){const A=b.value,R=E+"_"+x;if(D[R]===void 0)return typeof A=="number"||typeof A=="boolean"?D[R]=A:D[R]=A.clone(),!0;{const P=D[R];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return D[R]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(b){const E=b.uniforms;let x=0;const D=16;for(let R=0,P=E.length;R<P;R++){const S=Array.isArray(E[R])?E[R]:[E[R]];for(let v=0,C=S.length;v<C;v++){const k=S[v],B=Array.isArray(k.value)?k.value:[k.value];for(let X=0,K=B.length;X<K;X++){const q=B[X],Z=_(q),G=x%D,st=G%Z.boundary,ut=G+st;x+=st,ut!==0&&D-ut<Z.storage&&(x+=D-ut),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=Z.storage}}}const A=x%D;return A>0&&(x+=D-A),b.__size=x,b.__cache={},this}function _(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){const E=b.target;E.removeEventListener("dispose",m);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function u(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:u}}class Jm{constructor(t={}){const{canvas:e=rh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,u=null;const b=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let D=!1;this._outputColorSpace=We;let A=0,R=0,P=null,S=-1,v=null;const C=new ue,k=new ue;let B=null;const X=new Ht(0);let K=0,q=e.width,Z=e.height,G=1,st=null,ut=null;const Mt=new ue(0,0,q,Z),kt=new ue(0,0,q,Z);let ne=!1;const j=new Wo;let et=!1,_t=!1;const rt=new Zt,wt=new Zt,Yt=new T,Ct=new ue,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Vt(){return P===null?G:1}let I=n;function ke(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Do}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",lt,!1),I===null){const U="webgl2";if(I=ke(U,M),I===null)throw ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Xt,Gt,St,re,yt,w,y,O,$,J,W,vt,ot,Tt,At,Q,dt,Rt,It,ft,Wt,Ot,ie,L;function at(){Xt=new ap(I),Xt.init(),Ot=new Gm(I,Xt),Gt=new tp(I,Xt,t,Ot),St=new Hm(I,Xt),Gt.reverseDepthBuffer&&f&&St.buffers.depth.setReversed(!0),re=new hp(I),yt=new Rm,w=new Vm(I,Xt,St,yt,Gt,Ot,re),y=new np(x),O=new op(x),$=new mu(I),ie=new Zf(I,$),J=new lp(I,$,re,ie),W=new dp(I,J,$,re),It=new up(I,Gt,w),Q=new ep(yt),vt=new Am(x,y,O,Xt,Gt,ie,Q),ot=new Ym(x,yt),Tt=new Pm,At=new Fm(Xt),Rt=new Jf(x,y,O,St,W,p,l),dt=new km(x,W,Gt),L=new Km(I,re,Gt,St),ft=new Qf(I,Xt,re),Wt=new cp(I,Xt,re),re.programs=vt.programs,x.capabilities=Gt,x.extensions=Xt,x.properties=yt,x.renderLists=Tt,x.shadowMap=dt,x.state=St,x.info=re}at();const V=new jm(x,I);this.xr=V,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=Xt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Xt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(q,Z,!1))},this.getSize=function(M){return M.set(q,Z)},this.setSize=function(M,U,z=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,Z=U,e.width=Math.floor(M*G),e.height=Math.floor(U*G),z===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(q*G,Z*G).floor()},this.setDrawingBufferSize=function(M,U,z){q=M,Z=U,G=z,e.width=Math.floor(M*z),e.height=Math.floor(U*z),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(Mt)},this.setViewport=function(M,U,z,H){M.isVector4?Mt.set(M.x,M.y,M.z,M.w):Mt.set(M,U,z,H),St.viewport(C.copy(Mt).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(kt)},this.setScissor=function(M,U,z,H){M.isVector4?kt.set(M.x,M.y,M.z,M.w):kt.set(M,U,z,H),St.scissor(k.copy(kt).multiplyScalar(G).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(M){St.setScissorTest(ne=M)},this.setOpaqueSort=function(M){st=M},this.setTransparentSort=function(M){ut=M},this.getClearColor=function(M){return M.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,z=!0){let H=0;if(M){let N=!1;if(P!==null){const tt=P.texture.format;N=tt===ko||tt===Bo||tt===Oo}if(N){const tt=P.texture.type,it=tt===on||tt===Jn||tt===Qi||tt===ts||tt===Uo||tt===No,ht=Rt.getClearColor(),pt=Rt.getClearAlpha(),Dt=ht.r,Pt=ht.g,Et=ht.b;it?(g[0]=Dt,g[1]=Pt,g[2]=Et,g[3]=pt,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Dt,_[1]=Pt,_[2]=Et,_[3]=pt,I.clearBufferiv(I.COLOR,0,_))}else H|=I.COLOR_BUFFER_BIT}U&&(H|=I.DEPTH_BUFFER_BIT),z&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Rt.dispose(),Tt.dispose(),At.dispose(),yt.dispose(),y.dispose(),O.dispose(),W.dispose(),ie.dispose(),L.dispose(),vt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Zo),V.removeEventListener("sessionend",Qo),Nn.stop()};function Y(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const M=re.autoReset,U=dt.enabled,z=dt.autoUpdate,H=dt.needsUpdate,N=dt.type;at(),re.autoReset=M,dt.enabled=U,dt.autoUpdate=z,dt.needsUpdate=H,dt.type=N}function lt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ut(M){const U=M.target;U.removeEventListener("dispose",Ut),ce(U)}function ce(M){Se(M),yt.remove(M)}function Se(M){const U=yt.get(M).programs;U!==void 0&&(U.forEach(function(z){vt.releaseProgram(z)}),M.isShaderMaterial&&vt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,z,H,N,tt){U===null&&(U=de);const it=N.isMesh&&N.matrixWorld.determinant()<0,ht=lc(M,U,z,H,N);St.setMaterial(H,it);let pt=z.index,Dt=1;if(H.wireframe===!0){if(pt=J.getWireframeAttribute(z),pt===void 0)return;Dt=2}const Pt=z.drawRange,Et=z.attributes.position;let qt=Pt.start*Dt,Kt=(Pt.start+Pt.count)*Dt;tt!==null&&(qt=Math.max(qt,tt.start*Dt),Kt=Math.min(Kt,(tt.start+tt.count)*Dt)),pt!==null?(qt=Math.max(qt,0),Kt=Math.min(Kt,pt.count)):Et!=null&&(qt=Math.max(qt,0),Kt=Math.min(Kt,Et.count));const fe=Kt-qt;if(fe<0||fe===1/0)return;ie.setup(N,H,ht,z,pt);let he,jt=ft;if(pt!==null&&(he=$.get(pt),jt=Wt,jt.setIndex(he)),N.isMesh)H.wireframe===!0?(St.setLineWidth(H.wireframeLinewidth*Vt()),jt.setMode(I.LINES)):jt.setMode(I.TRIANGLES);else if(N.isLine){let bt=H.linewidth;bt===void 0&&(bt=1),St.setLineWidth(bt*Vt()),N.isLineSegments?jt.setMode(I.LINES):N.isLineLoop?jt.setMode(I.LINE_LOOP):jt.setMode(I.LINE_STRIP)}else N.isPoints?jt.setMode(I.POINTS):N.isSprite&&jt.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),jt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))jt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const bt=N._multiDrawStarts,Me=N._multiDrawCounts,Jt=N._multiDrawCount,Ke=pt?$.get(pt).bytesPerElement:1,ii=yt.get(H).currentProgram.getUniforms();for(let Ue=0;Ue<Jt;Ue++)ii.setValue(I,"_gl_DrawID",Ue),jt.render(bt[Ue]/Ke,Me[Ue])}else if(N.isInstancedMesh)jt.renderInstances(qt,fe,N.count);else if(z.isInstancedBufferGeometry){const bt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Me=Math.min(z.instanceCount,bt);jt.renderInstances(qt,fe,Me)}else jt.render(qt,fe)};function Qt(M,U,z){M.transparent===!0&&M.side===mn&&M.forceSinglePass===!1?(M.side=Le,M.needsUpdate=!0,ls(M,U,z),M.side=Ln,M.needsUpdate=!0,ls(M,U,z),M.side=mn):ls(M,U,z)}this.compile=function(M,U,z=null){z===null&&(z=M),u=At.get(z),u.init(U),E.push(u),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),M!==z&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();const H=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const tt=N.material;if(tt)if(Array.isArray(tt))for(let it=0;it<tt.length;it++){const ht=tt[it];Qt(ht,z,N),H.add(ht)}else Qt(tt,z,N),H.add(tt)}),u=E.pop(),H},this.compileAsync=function(M,U,z=null){const H=this.compile(M,U,z);return new Promise(N=>{function tt(){if(H.forEach(function(it){yt.get(it).currentProgram.isReady()&&H.delete(it)}),H.size===0){N(M);return}setTimeout(tt,10)}Xt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Ye=null;function an(M){Ye&&Ye(M)}function Zo(){Nn.stop()}function Qo(){Nn.start()}const Nn=new ec;Nn.setAnimationLoop(an),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(M){Ye=M,V.setAnimationLoop(M),M===null?Nn.stop():Nn.start()},V.addEventListener("sessionstart",Zo),V.addEventListener("sessionend",Qo),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,U,P),u=At.get(M,E.length),u.init(U),E.push(u),wt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(wt),_t=this.localClippingEnabled,et=Q.init(this.clippingPlanes,_t),m=Tt.get(M,b.length),m.init(),b.push(m),V.enabled===!0&&V.isPresenting===!0){const tt=x.xr.getDepthSensingMesh();tt!==null&&ir(tt,U,-1/0,x.sortObjects)}ir(M,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(st,ut),ae=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,ae&&Rt.addToRenderList(m,M),this.info.render.frame++,et===!0&&Q.beginShadows();const z=u.state.shadowsArray;dt.render(z,M,U),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(u.setupLights(),U.isArrayCamera){const tt=U.cameras;if(N.length>0)for(let it=0,ht=tt.length;it<ht;it++){const pt=tt[it];ea(H,N,M,pt)}ae&&Rt.render(M);for(let it=0,ht=tt.length;it<ht;it++){const pt=tt[it];ta(m,M,pt,pt.viewport)}}else N.length>0&&ea(H,N,M,U),ae&&Rt.render(M),ta(m,M,U);P!==null&&R===0&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(x,M,U),ie.resetDefaultState(),S=-1,v=null,E.pop(),E.length>0?(u=E[E.length-1],et===!0&&Q.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function ir(M,U,z,H){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||j.intersectsSprite(M)){H&&Ct.setFromMatrixPosition(M.matrixWorld).applyMatrix4(wt);const it=W.update(M),ht=M.material;ht.visible&&m.push(M,it,ht,z,Ct.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||j.intersectsObject(M))){const it=W.update(M),ht=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ct.copy(M.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),Ct.copy(it.boundingSphere.center)),Ct.applyMatrix4(M.matrixWorld).applyMatrix4(wt)),Array.isArray(ht)){const pt=it.groups;for(let Dt=0,Pt=pt.length;Dt<Pt;Dt++){const Et=pt[Dt],qt=ht[Et.materialIndex];qt&&qt.visible&&m.push(M,it,qt,z,Ct.z,Et)}}else ht.visible&&m.push(M,it,ht,z,Ct.z,null)}}const tt=M.children;for(let it=0,ht=tt.length;it<ht;it++)ir(tt[it],U,z,H)}function ta(M,U,z,H){const N=M.opaque,tt=M.transmissive,it=M.transparent;u.setupLightsView(z),et===!0&&Q.setGlobalState(x.clippingPlanes,z),H&&St.viewport(C.copy(H)),N.length>0&&as(N,U,z),tt.length>0&&as(tt,U,z),it.length>0&&as(it,U,z),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function ea(M,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new Zn(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?ss:on,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const tt=u.state.transmissionRenderTarget[H.id],it=H.viewport||C;tt.setSize(it.z*x.transmissionResolutionScale,it.w*x.transmissionResolutionScale);const ht=x.getRenderTarget();x.setRenderTarget(tt),x.getClearColor(X),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),ae&&Rt.render(z);const pt=x.toneMapping;x.toneMapping=In;const Dt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),et===!0&&Q.setGlobalState(x.clippingPlanes,H),as(M,z,H),w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Et=0,qt=U.length;Et<qt;Et++){const Kt=U[Et],fe=Kt.object,he=Kt.geometry,jt=Kt.material,bt=Kt.group;if(jt.side===mn&&fe.layers.test(H.layers)){const Me=jt.side;jt.side=Le,jt.needsUpdate=!0,na(fe,z,H,he,jt,bt),jt.side=Me,jt.needsUpdate=!0,Pt=!0}}Pt===!0&&(w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt))}x.setRenderTarget(ht),x.setClearColor(X,K),Dt!==void 0&&(H.viewport=Dt),x.toneMapping=pt}function as(M,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,tt=M.length;N<tt;N++){const it=M[N],ht=it.object,pt=it.geometry,Dt=it.group;let Pt=it.material;Pt.allowOverride===!0&&H!==null&&(Pt=H),ht.layers.test(z.layers)&&na(ht,U,z,pt,Pt,Dt)}}function na(M,U,z,H,N,tt){M.onBeforeRender(x,U,z,H,N,tt),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(x,U,z,H,M,tt),N.transparent===!0&&N.side===mn&&N.forceSinglePass===!1?(N.side=Le,N.needsUpdate=!0,x.renderBufferDirect(z,U,H,N,M,tt),N.side=Ln,N.needsUpdate=!0,x.renderBufferDirect(z,U,H,N,M,tt),N.side=mn):x.renderBufferDirect(z,U,H,N,M,tt),M.onAfterRender(x,U,z,H,N,tt)}function ls(M,U,z){U.isScene!==!0&&(U=de);const H=yt.get(M),N=u.state.lights,tt=u.state.shadowsArray,it=N.state.version,ht=vt.getParameters(M,N.state,tt,U,z),pt=vt.getProgramCacheKey(ht);let Dt=H.programs;H.environment=M.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(M.isMeshStandardMaterial?O:y).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Dt===void 0&&(M.addEventListener("dispose",Ut),Dt=new Map,H.programs=Dt);let Pt=Dt.get(pt);if(Pt!==void 0){if(H.currentProgram===Pt&&H.lightsStateVersion===it)return sa(M,ht),Pt}else ht.uniforms=vt.getUniforms(M),M.onBeforeCompile(ht,x),Pt=vt.acquireProgram(ht,pt),Dt.set(pt,Pt),H.uniforms=ht.uniforms;const Et=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Et.clippingPlanes=Q.uniform),sa(M,ht),H.needsLights=hc(M),H.lightsStateVersion=it,H.needsLights&&(Et.ambientLightColor.value=N.state.ambient,Et.lightProbe.value=N.state.probe,Et.directionalLights.value=N.state.directional,Et.directionalLightShadows.value=N.state.directionalShadow,Et.spotLights.value=N.state.spot,Et.spotLightShadows.value=N.state.spotShadow,Et.rectAreaLights.value=N.state.rectArea,Et.ltc_1.value=N.state.rectAreaLTC1,Et.ltc_2.value=N.state.rectAreaLTC2,Et.pointLights.value=N.state.point,Et.pointLightShadows.value=N.state.pointShadow,Et.hemisphereLights.value=N.state.hemi,Et.directionalShadowMap.value=N.state.directionalShadowMap,Et.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Et.spotShadowMap.value=N.state.spotShadowMap,Et.spotLightMatrix.value=N.state.spotLightMatrix,Et.spotLightMap.value=N.state.spotLightMap,Et.pointShadowMap.value=N.state.pointShadowMap,Et.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Pt,H.uniformsList=null,Pt}function ia(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=qs.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function sa(M,U){const z=yt.get(M);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function lc(M,U,z,H,N){U.isScene!==!0&&(U=de),w.resetTextureUnits();const tt=U.fog,it=H.isMeshStandardMaterial?U.environment:null,ht=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Di,pt=(H.isMeshStandardMaterial?O:y).get(H.envMap||it),Dt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Pt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Et=!!z.morphAttributes.position,qt=!!z.morphAttributes.normal,Kt=!!z.morphAttributes.color;let fe=In;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(fe=x.toneMapping);const he=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,jt=he!==void 0?he.length:0,bt=yt.get(H),Me=u.state.lights;if(et===!0&&(_t===!0||M!==v)){const Ae=M===v&&H.id===S;Q.setState(H,M,Ae)}let Jt=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Me.state.version||bt.outputColorSpace!==ht||N.isBatchedMesh&&bt.batching===!1||!N.isBatchedMesh&&bt.batching===!0||N.isBatchedMesh&&bt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&bt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&bt.instancing===!1||!N.isInstancedMesh&&bt.instancing===!0||N.isSkinnedMesh&&bt.skinning===!1||!N.isSkinnedMesh&&bt.skinning===!0||N.isInstancedMesh&&bt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&bt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&bt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&bt.instancingMorph===!1&&N.morphTexture!==null||bt.envMap!==pt||H.fog===!0&&bt.fog!==tt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Q.numPlanes||bt.numIntersection!==Q.numIntersection)||bt.vertexAlphas!==Dt||bt.vertexTangents!==Pt||bt.morphTargets!==Et||bt.morphNormals!==qt||bt.morphColors!==Kt||bt.toneMapping!==fe||bt.morphTargetsCount!==jt)&&(Jt=!0):(Jt=!0,bt.__version=H.version);let Ke=bt.currentProgram;Jt===!0&&(Ke=ls(H,U,N));let ii=!1,Ue=!1,Oi=!1;const oe=Ke.getUniforms(),ze=bt.uniforms;if(St.useProgram(Ke.program)&&(ii=!0,Ue=!0,Oi=!0),H.id!==S&&(S=H.id,Ue=!0),ii||v!==M){St.buffers.depth.getReversed()?(rt.copy(M.projectionMatrix),ah(rt),lh(rt),oe.setValue(I,"projectionMatrix",rt)):oe.setValue(I,"projectionMatrix",M.projectionMatrix),oe.setValue(I,"viewMatrix",M.matrixWorldInverse);const De=oe.map.cameraPosition;De!==void 0&&De.setValue(I,Yt.setFromMatrixPosition(M.matrixWorld)),Gt.logarithmicDepthBuffer&&oe.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&oe.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),v!==M&&(v=M,Ue=!0,Oi=!0)}if(N.isSkinnedMesh){oe.setOptional(I,N,"bindMatrix"),oe.setOptional(I,N,"bindMatrixInverse");const Ae=N.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),oe.setValue(I,"boneTexture",Ae.boneTexture,w))}N.isBatchedMesh&&(oe.setOptional(I,N,"batchingTexture"),oe.setValue(I,"batchingTexture",N._matricesTexture,w),oe.setOptional(I,N,"batchingIdTexture"),oe.setValue(I,"batchingIdTexture",N._indirectTexture,w),oe.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&oe.setValue(I,"batchingColorTexture",N._colorsTexture,w));const He=z.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&It.update(N,z,Ke),(Ue||bt.receiveShadow!==N.receiveShadow)&&(bt.receiveShadow=N.receiveShadow,oe.setValue(I,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ze.envMap.value=pt,ze.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(ze.envMapIntensity.value=U.environmentIntensity),Ue&&(oe.setValue(I,"toneMappingExposure",x.toneMappingExposure),bt.needsLights&&cc(ze,Oi),tt&&H.fog===!0&&ot.refreshFogUniforms(ze,tt),ot.refreshMaterialUniforms(ze,H,G,Z,u.state.transmissionRenderTarget[M.id]),qs.upload(I,ia(bt),ze,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(qs.upload(I,ia(bt),ze,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&oe.setValue(I,"center",N.center),oe.setValue(I,"modelViewMatrix",N.modelViewMatrix),oe.setValue(I,"normalMatrix",N.normalMatrix),oe.setValue(I,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ae=H.uniformsGroups;for(let De=0,sr=Ae.length;De<sr;De++){const Fn=Ae[De];L.update(Fn,Ke),L.bind(Fn,Ke)}}return Ke}function cc(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function hc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,U,z){const H=yt.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),yt.get(M.texture).__webglTexture=U,yt.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const z=yt.get(M);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const uc=I.createFramebuffer();this.setRenderTarget=function(M,U=0,z=0){P=M,A=U,R=z;let H=!0,N=null,tt=!1,it=!1;if(M){const pt=yt.get(M);if(pt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(pt.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(pt.__hasExternalTextures)w.rebindTextures(M,yt.get(M.texture).__webglTexture,yt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Et=M.depthTexture;if(pt.__boundDepthTexture!==Et){if(Et!==null&&yt.has(Et)&&(M.width!==Et.image.width||M.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}const Dt=M.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(it=!0);const Pt=yt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pt[U])?N=Pt[U][z]:N=Pt[U],tt=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?N=yt.get(M).__webglMultisampledFramebuffer:Array.isArray(Pt)?N=Pt[z]:N=Pt,C.copy(M.viewport),k.copy(M.scissor),B=M.scissorTest}else C.copy(Mt).multiplyScalar(G).floor(),k.copy(kt).multiplyScalar(G).floor(),B=ne;if(z!==0&&(N=uc),St.bindFramebuffer(I.FRAMEBUFFER,N)&&H&&St.drawBuffers(M,N),St.viewport(C),St.scissor(k),St.setScissorTest(B),tt){const pt=yt.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,pt.__webglTexture,z)}else if(it){const pt=yt.get(M.texture),Dt=U;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,pt.__webglTexture,z,Dt)}else if(M!==null&&z!==0){const pt=yt.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pt.__webglTexture,z)}S=-1},this.readRenderTargetPixels=function(M,U,z,H,N,tt,it){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=yt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&it!==void 0&&(ht=ht[it]),ht){St.bindFramebuffer(I.FRAMEBUFFER,ht);try{const pt=M.texture,Dt=pt.format,Pt=pt.type;if(!Gt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-H&&z>=0&&z<=M.height-N&&I.readPixels(U,z,H,N,Ot.convert(Dt),Ot.convert(Pt),tt)}finally{const pt=P!==null?yt.get(P).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(M,U,z,H,N,tt,it){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=yt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&it!==void 0&&(ht=ht[it]),ht)if(U>=0&&U<=M.width-H&&z>=0&&z<=M.height-N){St.bindFramebuffer(I.FRAMEBUFFER,ht);const pt=M.texture,Dt=pt.format,Pt=pt.type;if(!Gt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Et=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.bufferData(I.PIXEL_PACK_BUFFER,tt.byteLength,I.STREAM_READ),I.readPixels(U,z,H,N,Ot.convert(Dt),Ot.convert(Pt),0);const qt=P!==null?yt.get(P).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,qt);const Kt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await oh(I,Kt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,tt),I.deleteBuffer(Et),I.deleteSync(Kt),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,z=0){const H=Math.pow(2,-z),N=Math.floor(M.image.width*H),tt=Math.floor(M.image.height*H),it=U!==null?U.x:0,ht=U!==null?U.y:0;w.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,it,ht,N,tt),St.unbindTexture()};const dc=I.createFramebuffer(),fc=I.createFramebuffer();this.copyTextureToTexture=function(M,U,z=null,H=null,N=0,tt=null){tt===null&&(N!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=N,N=0):tt=0);let it,ht,pt,Dt,Pt,Et,qt,Kt,fe;const he=M.isCompressedTexture?M.mipmaps[tt]:M.image;if(z!==null)it=z.max.x-z.min.x,ht=z.max.y-z.min.y,pt=z.isBox3?z.max.z-z.min.z:1,Dt=z.min.x,Pt=z.min.y,Et=z.isBox3?z.min.z:0;else{const He=Math.pow(2,-N);it=Math.floor(he.width*He),ht=Math.floor(he.height*He),M.isDataArrayTexture?pt=he.depth:M.isData3DTexture?pt=Math.floor(he.depth*He):pt=1,Dt=0,Pt=0,Et=0}H!==null?(qt=H.x,Kt=H.y,fe=H.z):(qt=0,Kt=0,fe=0);const jt=Ot.convert(U.format),bt=Ot.convert(U.type);let Me;U.isData3DTexture?(w.setTexture3D(U,0),Me=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Me=I.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Me=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Jt=I.getParameter(I.UNPACK_ROW_LENGTH),Ke=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ii=I.getParameter(I.UNPACK_SKIP_PIXELS),Ue=I.getParameter(I.UNPACK_SKIP_ROWS),Oi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,he.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,he.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Dt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Et);const oe=M.isDataArrayTexture||M.isData3DTexture,ze=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const He=yt.get(M),Ae=yt.get(U),De=yt.get(He.__renderTarget),sr=yt.get(Ae.__renderTarget);St.bindFramebuffer(I.READ_FRAMEBUFFER,De.__webglFramebuffer),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,sr.__webglFramebuffer);for(let Fn=0;Fn<pt;Fn++)oe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(M).__webglTexture,N,Et+Fn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(U).__webglTexture,tt,fe+Fn)),I.blitFramebuffer(Dt,Pt,it,ht,qt,Kt,it,ht,I.DEPTH_BUFFER_BIT,I.NEAREST);St.bindFramebuffer(I.READ_FRAMEBUFFER,null),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||yt.has(M)){const He=yt.get(M),Ae=yt.get(U);St.bindFramebuffer(I.READ_FRAMEBUFFER,dc),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,fc);for(let De=0;De<pt;De++)oe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,He.__webglTexture,N,Et+De):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,He.__webglTexture,N),ze?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,tt,fe+De):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ae.__webglTexture,tt),N!==0?I.blitFramebuffer(Dt,Pt,it,ht,qt,Kt,it,ht,I.COLOR_BUFFER_BIT,I.NEAREST):ze?I.copyTexSubImage3D(Me,tt,qt,Kt,fe+De,Dt,Pt,it,ht):I.copyTexSubImage2D(Me,tt,qt,Kt,Dt,Pt,it,ht);St.bindFramebuffer(I.READ_FRAMEBUFFER,null),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ze?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(Me,tt,qt,Kt,fe,it,ht,pt,jt,bt,he.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Me,tt,qt,Kt,fe,it,ht,pt,jt,he.data):I.texSubImage3D(Me,tt,qt,Kt,fe,it,ht,pt,jt,bt,he):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,tt,qt,Kt,it,ht,jt,bt,he.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,tt,qt,Kt,he.width,he.height,jt,he.data):I.texSubImage2D(I.TEXTURE_2D,tt,qt,Kt,it,ht,jt,bt,he);I.pixelStorei(I.UNPACK_ROW_LENGTH,Jt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ke),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ii),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ue),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Oi),tt===0&&U.generateMipmaps&&I.generateMipmap(Me),St.unbindTexture()},this.copyTextureToTexture3D=function(M,U,z=null,H=null,N=0){return Xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,z,H,N)},this.initRenderTarget=function(M){yt.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),St.unbindTexture()},this.resetState=function(){A=0,R=0,P=null,St.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}const ye={language:"island-crystal-breaker-language",languageDefaultVersion:"island-crystal-breaker-language-default-version",playerName:"island-crystal-breaker-player-name",serverAddress:"island-crystal-breaker-server-address",touchSensitivity:"island-crystal-breaker-touch-sensitivity",leftHanded:"island-crystal-breaker-left-handed",autoSprint:"island-crystal-breaker-auto-sprint",haptics:"island-crystal-breaker-haptics"},dl="2026-04-18-force-english-default",mt={outerIslandSize:{x:18,z:18},centerIslandSize:{x:12,z:12},surfaceY:4,oceanY:0,positions:{center:{x:0,z:0},north:{x:0,z:-30},east:{x:30,z:0},south:{x:0,z:30},west:{x:-30,z:0}},bridgeWidth:2,chestDepthMin:5,chestDepthMax:8,crystalsPerGame:4,crystalHp:48},Ft={walkSpeed:7,sprintSpeed:10.5,jumpVelocity:11.5,gravity:28,eyeHeight:1.62,height:1.8,radius:.36,interactionRange:4,useRange:5.2},Zm={sword:{basic:{damage:8,blockDamage:1.2,cooldown:.32,range:3.2},iron:{damage:12,blockDamage:1.6,cooldown:.28,range:3.4},diamond:{damage:17,blockDamage:2.2,cooldown:.24,range:3.6},rainbow:{damage:23,blockDamage:3,cooldown:.2,range:3.8}},pickaxe:{basic:{damage:4,blockDamage:2.4,cooldown:.35,range:3.4},iron:{damage:6,blockDamage:3.8,cooldown:.3,range:3.4},diamond:{damage:8,blockDamage:5.4,cooldown:.24,range:3.5},rainbow:{damage:11,blockDamage:7.4,cooldown:.18,range:3.6}},shovel:{basic:{damage:3,blockDamage:2.2,cooldown:.34,range:3.2},iron:{damage:5,blockDamage:3.6,cooldown:.3,range:3.3},diamond:{damage:7,blockDamage:5.1,cooldown:.23,range:3.4},rainbow:{damage:10,blockDamage:7,cooldown:.18,range:3.5}}},Os={damage:11,speed:22,cooldown:.45,gravityScale:.35},Hr={speed:18,cooldown:.55,gravityScale:.7},Qm={launchVelocity:17},wn={islandCopper:2,islandGold:60,middleGold:7,middleDiamond:15},Ie={publicServerAddress:"1111",defaultPlayerName:"Player",maxPlayerNameLength:18,maxServerAddressLength:24,presenceInterval:.12},Oe={maxPixelRatio:1.35,joystickDeadzone:.18,autoSprintThreshold:.82,holdRepeatDelayMs:240,holdRepeatIntervalMs:120,defaultTouchSensitivity:1,minTouchSensitivity:.5,maxTouchSensitivity:1.8},Gn={masterVolume:1,musicVolume:.32,sfxVolume:.9,musicTempo:92},Tn={arrows:0,blocks:10,purpleDotters:1,jumpPads:1,currencies:{copper:0,gold:0,emerald:0,diamond:0}},$i={grass:{color:5219919,category:"soft",hp:4,solid:!0},dirt:{color:8278323,category:"soft",hp:5,solid:!0},sand:{color:14272124,category:"soft",hp:4,solid:!0},stone:{color:8818848,category:"hard",hp:8,solid:!0},bridge:{color:9399109,category:"utility",hp:6,solid:!0},copperOre:{color:12217150,category:"ore",hp:7,solid:!0},goldOre:{color:14136649,category:"ore",hp:9,solid:!0},emeraldOre:{color:3457658,category:"ore",hp:10,solid:!0},diamondOre:{color:7792639,category:"ore",hp:11,solid:!0}},oc=[{id:"blocks",itemKey:"items.blocks",descriptionKey:"shopDescriptions.blocks",price:{currency:"copper",amount:1},action:{type:"consumable",item:"blocks",amount:1}},{id:"purpleDotter",itemKey:"items.purpleDotter",descriptionKey:"shopDescriptions.purpleDotter",price:{currency:"gold",amount:5},action:{type:"consumable",item:"purpleDotters",amount:2}},{id:"bow",itemKey:"items.bow",descriptionKey:"shopDescriptions.bow",price:{currency:"gold",amount:4},action:{type:"unlock",item:"bow"}},{id:"arrows",itemKey:"items.arrows",descriptionKey:"shopDescriptions.arrows",price:{currency:"copper",amount:3},action:{type:"consumable",item:"arrows",amount:8}},{id:"jumpPad",itemKey:"items.jumpPad",descriptionKey:"shopDescriptions.jumpPad",price:{currency:"gold",amount:5},action:{type:"consumable",item:"jumpPads",amount:1}},{id:"swordIron",itemKey:"items.swordIron",descriptionKey:"shopDescriptions.swordUpgrade",price:{currency:"gold",amount:5},action:{type:"upgrade",item:"sword",tier:"iron"}},{id:"pickaxeIron",itemKey:"items.pickaxeIron",descriptionKey:"shopDescriptions.pickaxeUpgrade",price:{currency:"gold",amount:5},action:{type:"upgrade",item:"pickaxe",tier:"iron"}},{id:"shovelIron",itemKey:"items.shovelIron",descriptionKey:"shopDescriptions.shovelUpgrade",price:{currency:"gold",amount:5},action:{type:"upgrade",item:"shovel",tier:"iron"}},{id:"swordDiamond",itemKey:"items.swordDiamond",descriptionKey:"shopDescriptions.swordUpgrade",price:{currency:"emerald",amount:12},action:{type:"upgrade",item:"sword",tier:"diamond"}},{id:"pickaxeDiamond",itemKey:"items.pickaxeDiamond",descriptionKey:"shopDescriptions.pickaxeUpgrade",price:{currency:"emerald",amount:12},action:{type:"upgrade",item:"pickaxe",tier:"diamond"}},{id:"shovelDiamond",itemKey:"items.shovelDiamond",descriptionKey:"shopDescriptions.shovelUpgrade",price:{currency:"emerald",amount:12},action:{type:"upgrade",item:"shovel",tier:"diamond"}},{id:"swordRainbow",itemKey:"items.swordRainbow",descriptionKey:"shopDescriptions.swordUpgrade",price:{currency:"emerald",amount:20},action:{type:"upgrade",item:"sword",tier:"rainbow"}},{id:"pickaxeRainbow",itemKey:"items.pickaxeRainbow",descriptionKey:"shopDescriptions.pickaxeUpgrade",price:{currency:"emerald",amount:20},action:{type:"upgrade",item:"pickaxe",tier:"rainbow"}},{id:"shovelRainbow",itemKey:"items.shovelRainbow",descriptionKey:"shopDescriptions.shovelUpgrade",price:{currency:"emerald",amount:20},action:{type:"upgrade",item:"shovel",tier:"rainbow"}}],Bs=["basic","iron","diamond","rainbow"],Yo={basic:"#d9d9d9",iron:"#b8c6d8",diamond:"#67d6f7",rainbow:"#ff77d7"},tg=()=>{try{const s=window.localStorage.getItem(ye.language);if(window.localStorage.getItem(ye.languageDefaultVersion)!==dl)return window.localStorage.setItem(ye.language,"en"),window.localStorage.setItem(ye.languageDefaultVersion,dl),"en";if(s==="en"||s==="ja")return s}catch{return"en"}return"en"};class eg{constructor(){F(this,"roomListeners",new Set);F(this,"errorListeners",new Set);F(this,"eventSource",null);F(this,"roomId","");F(this,"playerId","");F(this,"closingStream",!1);F(this,"sendingPresence",!1);F(this,"queuedPresence",null);F(this,"handleBeforeUnload",()=>{if(!this.roomId||!this.playerId)return;const t=JSON.stringify({roomId:this.roomId,playerId:this.playerId});navigator.sendBeacon("/api/multiplayer/leave",new Blob([t],{type:"application/json"}))})}subscribeRoom(t){return this.roomListeners.add(t),()=>this.roomListeners.delete(t)}subscribeError(t){return this.errorListeners.add(t),()=>this.errorListeners.delete(t)}getPlayerId(){return this.playerId}isConnected(){return!!(this.roomId&&this.playerId)}async join(t,e){await this.leave();const n=await this.postJson("/api/multiplayer/join",{roomId:t,name:e});return this.roomId=n.room.roomId,this.playerId=n.playerId,this.openStream(),window.addEventListener("beforeunload",this.handleBeforeUnload),n}async leave(){if(window.removeEventListener("beforeunload",this.handleBeforeUnload),this.closeStream(),!this.roomId||!this.playerId){this.roomId="",this.playerId="";return}try{await this.postJson("/api/multiplayer/leave",{roomId:this.roomId,playerId:this.playerId})}catch{}this.roomId="",this.playerId=""}async sendPresence(t){if(this.isConnected()&&(this.queuedPresence=t,!this.sendingPresence)){for(this.sendingPresence=!0;this.queuedPresence&&this.isConnected();){const e=this.queuedPresence;this.queuedPresence=null;try{await this.postJson("/api/multiplayer/update",{roomId:this.roomId,playerId:this.playerId,snapshot:e})}catch{this.notifyError("multiplayer.errors.connectionLost");break}}this.sendingPresence=!1}}async damageCrystal(t,e){if(!this.isConnected())return null;try{const n=await this.postJson("/api/multiplayer/crystal-hit",{roomId:this.roomId,playerId:this.playerId,crystalId:t,damage:e});return this.notifyRoom(n.room),n.room}catch{return this.notifyError("multiplayer.errors.connectionLost"),null}}async syncBlockRemoval(t){await this.sendWorldUpdate({action:"remove-block",key:t})}async syncBlockPlacement(t,e,n,i){await this.sendWorldUpdate({action:"place-block",x:t,y:e,z:n,type:i})}async syncJumpPadPlacement(t){await this.sendWorldUpdate({action:"place-jump-pad",...t})}async sendWorldUpdate(t){if(this.isConnected())try{const e=await this.postJson("/api/multiplayer/world-update",{roomId:this.roomId,playerId:this.playerId,...t});this.notifyRoom(e.room)}catch{this.notifyError("multiplayer.errors.connectionLost")}}openStream(){this.closeStream();const t=new URLSearchParams({roomId:this.roomId,playerId:this.playerId}),e=new EventSource(`/api/multiplayer/events?${t.toString()}`);e.addEventListener("room-state",n=>{const r=JSON.parse(n.data);this.notifyRoom(r)}),e.onerror=()=>{this.closingStream||this.notifyError("multiplayer.errors.connectionLost")},this.eventSource=e}closeStream(){this.eventSource&&(this.closingStream=!0,this.eventSource.close(),this.eventSource=null,this.closingStream=!1)}notifyRoom(t){for(const e of this.roomListeners)e(t)}notifyError(t){for(const e of this.errorListeners)e(t)}async postJson(t,e){const n=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok)throw new Error(`Request failed with ${n.status}`);if(n.status!==204)return await n.json()}}const Ei=new $e(0,0,0,"YXZ"),bi=new T,ng={type:"change"},ig={type:"lock"},sg={type:"unlock"},fl=.002,pl=Math.PI/2;class rg extends fu{constructor(t,e=null){super(t,e),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=og.bind(this),this._onPointerlockChange=ag.bind(this),this._onPointerlockError=lg.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(t){super.connect(t),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(t){if(this.enabled===!1)return;const e=this.object;bi.setFromMatrixColumn(e.matrix,0),bi.crossVectors(e.up,bi),e.position.addScaledVector(bi,t)}moveRight(t){if(this.enabled===!1)return;const e=this.object;bi.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(bi,t)}lock(t=!1){this.domElement.requestPointerLock({unadjustedMovement:t})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function og(s){if(this.enabled===!1||this.isLocked===!1)return;const t=this.object;Ei.setFromQuaternion(t.quaternion),Ei.y-=s.movementX*fl*this.pointerSpeed,Ei.x-=s.movementY*fl*this.pointerSpeed,Ei.x=Math.max(pl-this.maxPolarAngle,Math.min(pl-this.minPolarAngle,Ei.x)),t.quaternion.setFromEuler(Ei),this.dispatchEvent(ng)}function ag(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(ig),this.isLocked=!0):(this.dispatchEvent(sg),this.isLocked=!1)}function lg(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const wi=new $e(0,0,0,"YXZ"),ml=Math.PI/2,cg=.14,hg=.18;class ug{constructor(t,e,n){F(this,"camera");F(this,"controls");F(this,"velocity",new T);F(this,"movement",new T);F(this,"onGround",!1);F(this,"coyoteTimer",0);F(this,"jumpBufferTimer",0);F(this,"jumpedThisFrame",!1);F(this,"landedThisFrame",!1);this.world=n,this.camera=t,this.controls=new rg(t,e)}setPosition(t){this.controls.getObject().position.copy(t),this.velocity.set(0,0,0),this.onGround=!1,this.coyoteTimer=0,this.jumpBufferTimer=0}getPosition(){return this.controls.getObject().position}getDirection(){return this.camera.getWorldDirection(new T).normalize()}lock(){this.controls.lock()}unlock(){this.controls.unlock()}isLocked(){return this.controls.isLocked}getHorizontalVelocity(){return new T(this.velocity.x,0,this.velocity.z)}getVerticalVelocity(){return this.velocity.y}isGrounded(){return this.onGround}consumeJumpedThisFrame(){const t=this.jumpedThisFrame;return this.jumpedThisFrame=!1,t}consumeLandedThisFrame(){const t=this.landedThisFrame;return this.landedThisFrame=!1,t}addVerticalVelocity(t){this.velocity.y=Math.max(this.velocity.y,t),this.onGround=!1}update(t,e){this.jumpedThisFrame=!1,this.landedThisFrame=!1;const n=this.controls.getObject(),i=e.consumeLookDelta();(i.x!==0||i.y!==0)&&this.applyLookDelta(i.x,i.y),e.consumeJumpRequest()?this.jumpBufferTimer=hg:this.jumpBufferTimer=Math.max(0,this.jumpBufferTimer-t),this.onGround?this.coyoteTimer=cg:this.coyoteTimer=Math.max(0,this.coyoteTimer-t);const r=e.getMoveForward(),o=e.getMoveRight(),a=this.getDirection();a.y=0,a.lengthSq()===0?a.set(0,0,-1):a.normalize();const l=new T().crossVectors(a,new T(0,1,0)).normalize();this.movement.set(0,0,0),this.movement.addScaledVector(a,r),this.movement.addScaledVector(l,o),this.movement.lengthSq()>0&&this.movement.normalize();const c=e.isSprintPressed()?Ft.sprintSpeed:Ft.walkSpeed,h=Math.exp(-10*t);this.velocity.x*=h,this.velocity.z*=h,this.velocity.x+=this.movement.x*c*(1-h),this.velocity.z+=this.movement.z*c*(1-h),this.jumpBufferTimer>0&&(this.onGround||this.coyoteTimer>0)&&(this.velocity.y=Ft.jumpVelocity,this.onGround=!1,this.coyoteTimer=0,this.jumpBufferTimer=0,this.jumpedThisFrame=!0),this.velocity.y-=Ft.gravity*t,this.moveAxis(n,"x",this.velocity.x*t),this.moveAxis(n,"z",this.velocity.z*t);const d=this.velocity.y<=0;this.moveAxis(n,"y",this.velocity.y*t)&&d?(this.landedThisFrame=!this.onGround,this.onGround=!0,this.velocity.y=0):this.onGround=!1,n.position.y<-20&&(n.position.copy(this.world.getSpawnPoint()),this.velocity.set(0,0,0))}moveAxis(t,e,n){if(n===0)return!1;const i=Math.max(1,Math.ceil(Math.abs(n)/.12)),r=n/i;for(let o=0;o<i;o+=1)if(t.position[e]+=r,this.collides(t.position))return t.position[e]-=r,this.velocity[e]=0,!0;return!1}applyLookDelta(t,e){wi.setFromQuaternion(this.camera.quaternion),wi.y-=t*.002*this.controls.pointerSpeed,wi.x-=e*.002*this.controls.pointerSpeed,wi.x=Math.max(ml-this.controls.maxPolarAngle,Math.min(ml-this.controls.minPolarAngle,wi.x)),this.camera.quaternion.setFromEuler(wi)}collides(t){const e=new T(t.x-Ft.radius,t.y-Ft.eyeHeight,t.z-Ft.radius),n=new T(t.x+Ft.radius,t.y-Ft.eyeHeight+Ft.height,t.z+Ft.radius);return this.world.intersectsAabb(e,n)}}function An(s){return+`0x${(Yo[s??"basic"]??"#d9d9d9").replace("#","")}`}class dg{constructor(t,e){F(this,"root",new le);F(this,"activeItem",null);F(this,"signature","");F(this,"useImpulse",0);F(this,"time",0);this.camera=t,this.state=e,this.root.position.set(.55,-.55,-1),this.root.rotation.set(-.16,.44,-.1),this.camera.add(this.root),this.refreshModel()}refresh(){this.refreshModel()}triggerUse(){this.useImpulse=1}update(t,e,n){if(this.refreshModel(),this.time+=t,this.root.visible=n,!n)return;const i=Math.sin(this.time*(6+e*.45))*Math.min(.035,e*.004),r=Math.cos(this.time*3.8)*.012;this.useImpulse=Math.max(0,this.useImpulse-t*4.4);const o=Math.sin((1-this.useImpulse)*Math.PI)*this.useImpulse;this.root.position.set(.55+r,-.56+i-o*.1,-1+o*.08),this.root.rotation.set(-.16-i*.8-o*.48,.44-r*2.8+o*.26,-.1-o*.42)}refreshModel(){const t=this.state.getCurrentItem(),e=`${t}:${this.getTier(t)}:${this.state.inventory.hasBow}`;e!==this.signature&&(this.signature=e,this.activeItem&&this.root.remove(this.activeItem),this.activeItem=this.createItemMesh(t),this.root.add(this.activeItem))}getTier(t){if(t==="sword"||t==="pickaxe"||t==="shovel")return this.state.inventory.toolTiers[t]}createItemMesh(t){switch(t){case"sword":return this.createSword(this.state.inventory.toolTiers.sword);case"pickaxe":return this.createPickaxe(this.state.inventory.toolTiers.pickaxe);case"shovel":return this.createShovel(this.state.inventory.toolTiers.shovel);case"bow":return this.createBow();case"purpleDotter":return this.createDotter();case"jumpPad":return this.createJumpPad();case"blocks":return this.createBlock()}}createSword(t){const e=new le,n=new xt(new xe(.14,1.22,.08),new Lt({color:An(t),emissive:An(t),emissiveIntensity:t==="rainbow"?.22:.08,metalness:.58,roughness:.2})),i=new xt(new Kn(.1,.28,4),new Lt({color:An(t),metalness:.6,roughness:.2}));i.position.y=.74,i.rotation.z=Math.PI/4;const r=new xt(new xe(.38,.08,.12),new Lt({color:8350207,emissive:2955904,emissiveIntensity:.25,metalness:.5,roughness:.32}));r.position.y=.04;const o=new xt(new Pe(.055,.065,.42,8),new Lt({color:5058336,roughness:.82}));o.position.y=-.25;const a=new xt(new Qn(.09,10,10),new Lt({color:16762969,emissive:8012818,emissiveIntensity:.28,metalness:.35,roughness:.28}));return a.position.y=-.47,e.add(n,i,r,o,a),e.position.set(.18,-.08,.08),e.rotation.set(-.26,-.12,.55),e}createPickaxe(t){const e=new le,n=new xt(new Pe(.05,.06,1.16,8),new Lt({color:7029543,roughness:.85})),i=new xt(new xe(.62,.12,.16),new Lt({color:An(t),emissive:An(t),emissiveIntensity:t==="rainbow"?.2:.06,metalness:.55,roughness:.25}));i.position.y=.34;const r=new xt(new Kn(.08,.26,4),new Lt({color:An(t),metalness:.55,roughness:.24}));r.position.set(-.36,.34,0),r.rotation.z=Math.PI/2;const o=r.clone();return o.position.x=.36,o.rotation.z=-Math.PI/2,e.add(n,i,r,o),e.position.set(.1,-.12,.14),e.rotation.set(.2,.14,.74),e}createShovel(t){const e=new le,n=new xt(new Pe(.05,.055,1.02,8),new Lt({color:7292201,roughness:.84})),i=new xt(new Pe(.18,.11,.3,5),new Lt({color:An(t),emissive:An(t),emissiveIntensity:t==="rainbow"?.18:.05,metalness:.45,roughness:.25}));i.position.y=.44,i.rotation.x=Math.PI/2;const r=new xt(new is(.1,.025,6,14),new Lt({color:16761435,metalness:.3,roughness:.28}));return r.position.y=-.46,e.add(n,i,r),e.position.set(.18,-.14,.06),e.rotation.set(-.22,.18,.62),e}createBow(){const t=new le,e=new Jl([new T(0,-.45,0),new T(.22,0,.02),new T(0,.45,0)]),n=new xt(new jo(e,18,.04,8,!1),new Lt({color:9263359,emissive:3543653,emissiveIntensity:.22,roughness:.3,metalness:.18})),i=new Hh(new Te().setFromPoints([new T(0,-.45,0),new T(-.06,0,0),new T(0,.45,0)]),new $l({color:15197183})),r=new xt(new Pe(.014,.014,.72,6),new Lt({color:16038755,roughness:.45}));return r.rotation.z=Math.PI/2,r.position.set(-.1,0,0),t.add(n,i,r),t.position.set(.12,-.18,.16),t.rotation.set(-.04,.22,.45),t}createDotter(){const t=new le,e=new xt(new Qn(.18,14,14),new Lt({color:11750655,emissive:6955711,emissiveIntensity:.8,roughness:.22,metalness:.08})),n=new xt(new is(.24,.02,6,20),new Lt({color:15648255,emissive:9982200,emissiveIntensity:.6,roughness:.2}));return n.rotation.x=Math.PI/2,t.add(e,n),t.position.set(.22,-.28,.12),t.rotation.set(-.1,.28,.2),t}createJumpPad(){const t=new le,e=new xt(new Pe(.28,.34,.1,16),new Lt({color:3753325,roughness:.45,metalness:.32})),n=new xt(new Pe(.22,.24,.06,16),new Lt({color:8738047,emissive:3480176,emissiveIntensity:.45,roughness:.25}));n.position.y=.07;const i=new xt(new Kn(.08,.22,4),new Lt({color:16764772,emissive:8015122,emissiveIntensity:.24}));return i.position.y=.24,t.add(e,n,i),t.position.set(.26,-.32,.08),t.rotation.set(.12,.26,.12),t}createBlock(){const t=new xt(new xe(.34,.34,.34),new Lt({color:9201735,roughness:.78}));return t.position.set(.28,-.26,.06),t.rotation.set(.24,.54,-.08),t}}const fg={en:{gameTitle:"CRYSTAL WARS",titleSubtitle:"Destroy the crystals. Conquer the islands.",buttons:{start:"Start Game",playOffline:"Play Offline",joinPublic:"Join Public 1111",joinServer:"Join By Address",copyInvite:"Copy Invite",use:"Action",sprint:"Sprint",pause:"Pause",fullscreen:"Fullscreen",exitFullscreen:"Exit Fullscreen",settings:"Settings",resume:"Resume",close:"Close",restart:"Play Again",jump:"Jump",interact:"Interact",buy:"Buy",back:"Back"},settings:{title:"Settings",language:"Language",mobileTitle:"Mobile Controls",touchSensitivity:"Touch Look Sensitivity",leftHanded:"Left-Handed Layout",autoSprint:"Auto Sprint",haptics:"Haptic Feedback",english:"English",japanese:"Japanese"},mobile:{movePad:"Move Pad",swipeLook:"Swipe Right Side",actionButton:"Action Button",hotbarTap:"Tap Hotbar",shopPrompt:"Tap Interact to open the merchant shop",chestPrompt:"Tap Interact to open the chest",generatorPrompt:"Tap Interact to collect island resources",machinePrompt:"Tap Interact to collect machine drops",rotateTitle:"Landscape Recommended",rotateBody:"Rotate your phone sideways for the clearest controls and widest view.",holdActionTip:"Hold the Action button to keep mining or attacking.",fullscreenTip:"Use Fullscreen for a cleaner mobile HUD."},multiplayer:{title:"Online Lobby",subtitle:"Jump into the public server or enter a private server address for friends.",publicHint:"Public online server address: {address}",playerName:"Player Name",serverAddress:"Server Address",connecting:"Connecting...",friendsReady:"Players In This Server",noFriendsYet:"No friends in the room yet. Share the address to invite them.",onlineNow:"Online Server",playersOnline:"{count} players connected",errors:{connection:"Could not join the online server. Check the address and try again.",connectionLost:"The online connection was lost. Rejoin the server to keep playing."}},hud:{health:"Health",currentItem:"Current Item",copper:"Copper",gold:"Gold",emerald:"Emerald",diamond:"Diamond",objective:"Objective",objectiveShort:"Destroy all 4 crystals!",crystalsRemaining:"Destroy every outer-island crystal ({count} left)",winObjective:"All crystals destroyed. You won.",interaction:"Interact",shopPrompt:"Press E to open the merchant shop",chestPrompt:"Press E to open the chest",generatorPrompt:"Press E to collect generator resources",machinePrompt:"Press E to collect machine drops",paused:"Paused"},tutorial:{title:"How to Play",cta:"LET'S GO!",move:"Move around",jump:"Jump",sprint:"Sprint",look:"Look around",use:"Attack / Mine / Use item",switch:"Switch hotbar item",interact:"Interact with NPCs and chests",pause:"Pause",goalPrimary:"Goal: travel to each outer island and destroy its crystal.",goalResources:"Collect copper, gold, emeralds, and diamonds to power up.",goalShop:"Visit the merchant on the middle island to buy gear and upgrades.",goalChests:"Mine underground to find chests and rare loot.",body:"WASD to move, mouse or touch-drag to look, Space to jump, Shift to sprint, left click or tap the right side to use your current item, E or the Interact button to interact, mouse wheel or 1-7 or tap the hotbar to switch items, Esc to pause. On touch screens, use the virtual joystick to move and the Jump button to leap. Mine ore, open underground chests, collect island resources, buy upgrades from the merchant, then destroy all 4 outer-island crystals."},inventory:{bowLocked:"Bow not purchased",hotbar:"Hotbar",upgrades:"Upgrades"},shop:{title:"Merchant",subtitle:"Spend resources on mobility, ranged weapons, and upgrades."},win:{title:"Victory",body:"Every outer-island crystal is gone. The archipelago is safe for now."},items:{sword:"Sword",pickaxe:"Pickaxe",shovel:"Shovel",bow:"Bow",arrows:"Arrows",blocks:"Blocks",purpleDotter:"Purple Dotter",jumpPad:"Jump Pad",swordIron:"Iron Sword",swordDiamond:"Diamond Sword",swordRainbow:"Rainbow Sword",pickaxeIron:"Iron Pickaxe",pickaxeDiamond:"Diamond Pickaxe",pickaxeRainbow:"Rainbow Pickaxe",shovelIron:"Iron Shovel",shovelDiamond:"Diamond Shovel",shovelRainbow:"Rainbow Shovel"},shopDescriptions:{blocks:"1 copper = 1 building block.",purpleDotter:"Throw to teleport where it lands.",bow:"Unlock a ranged bow.",arrows:"Bundle of 8 arrows.",jumpPad:"Place a launch pad on top of a block.",swordUpgrade:"Upgrade your sword tier.",pickaxeUpgrade:"Upgrade your pickaxe tier.",shovelUpgrade:"Upgrade your shovel tier."},tiers:{basic:"Basic",iron:"Iron",diamond:"Diamond",rainbow:"Rainbow"},notifications:{collectedGenerator:"Collected {copper} copper and {gold} gold.",collectedMachine:"Collected {gold} gold and {diamond} diamond.",chestOpened:"Chest opened: {emerald} emeralds, {gold} gold, {arrows} arrows.",joinedServer:"Joined server {address}.",copiedInvite:"Invite copied. Tell your friend to join server {address}.",bought:"Purchased {item}.",notEnough:"Not enough {currency}.",alreadyOwned:"{item} is already unlocked.",upgraded:"{item} upgraded to {tier}.",crystalHit:"Crystal damaged: {hp} HP left.",crystalDestroyed:"Crystal destroyed ({count}/4).",noArrows:"No arrows left.",noBlocks:"No blocks left.",noDotters:"No purple dotters left.",noJumpPads:"No jump pads left.",minedResource:"Mined {resource}.",switchedLanguage:"Language switched to English.",machineReady:"The center machine is worth checking.",generatorReady:"An island generator has resources waiting."},resources:{copper:"copper",gold:"gold",emerald:"emerald",diamond:"diamond",stone:"stone"},misc:{healthValue:"{current}/{max}",currentItemValue:"{item}",merchantName:"Merchant",generatorName:"Generator",machineName:"Central Machine",chestName:"Chest"}},ja:{gameTitle:"クリスタルウォーズ",titleSubtitle:"クリスタルを破壊し、島々を制圧せよ。",buttons:{start:"ゲーム開始",playOffline:"オフラインで遊ぶ",joinPublic:"公開 1111 に入る",joinServer:"アドレスで参加",copyInvite:"招待をコピー",use:"アクション",sprint:"ダッシュ",pause:"一時停止",fullscreen:"全画面",exitFullscreen:"全画面終了",settings:"設定",resume:"再開",close:"閉じる",restart:"もう一度遊ぶ",jump:"ジャンプ",interact:"インタラクト",buy:"購入",back:"戻る"},settings:{title:"設定",language:"言語",mobileTitle:"スマホ操作",touchSensitivity:"視点感度",leftHanded:"左利きレイアウト",autoSprint:"自動ダッシュ",haptics:"触覚フィードバック",english:"英語",japanese:"日本語"},mobile:{movePad:"移動パッド",swipeLook:"右側スワイプ",actionButton:"アクションボタン",hotbarTap:"ホットバータップ",shopPrompt:"インタラクトで商人ショップを開く",chestPrompt:"インタラクトでチェストを開く",generatorPrompt:"インタラクトで資源を回収する",machinePrompt:"インタラクトで中央マシンの資源を回収する",rotateTitle:"横向き推奨",rotateBody:"見やすさと操作性のため、スマートフォンを横向きにすると遊びやすくなります。",holdActionTip:"アクションボタン長押しで採掘や攻撃を続けられます。",fullscreenTip:"全画面にするとスマホでより遊びやすくなります。"},multiplayer:{title:"オンラインロビー",subtitle:"公開サーバーに入るか、フレンド用のサーバーアドレスを入力して参加します。",publicHint:"公開オンラインサーバーのアドレス: {address}",playerName:"プレイヤー名",serverAddress:"サーバーアドレス",connecting:"接続中...",friendsReady:"このサーバーのプレイヤー",noFriendsYet:"まだ誰もいません。アドレスを共有してフレンドを招待しましょう。",onlineNow:"オンラインサーバー",playersOnline:"{count} 人が接続中",errors:{connection:"オンラインサーバーへ参加できませんでした。アドレスを確認して再試行してください。",connectionLost:"オンライン接続が切れました。続けるには再参加してください。"}},hud:{health:"体力",currentItem:"現在のアイテム",copper:"銅",gold:"金",emerald:"エメラルド",diamond:"ダイヤ",objective:"目標",objectiveShort:"4つのクリスタルをすべて破壊せよ！",crystalsRemaining:"外周の島のクリスタルをすべて破壊する（残り {count} 個）",winObjective:"すべてのクリスタルを破壊しました。勝利です。",interaction:"インタラクト",shopPrompt:"Eキーで商人ショップを開く",chestPrompt:"Eキーでチェストを開く",generatorPrompt:"Eキーで資源ジェネレーターを回収する",machinePrompt:"Eキーで中央マシンの資源を回収する",paused:"一時停止中"},tutorial:{title:"遊び方",cta:"出撃する",move:"移動",jump:"ジャンプ",sprint:"ダッシュ",look:"視点操作",use:"攻撃 / 採掘 / アイテム使用",switch:"ホットバー切り替え",interact:"NPCやチェストと会話・調査",pause:"一時停止",goalPrimary:"目標: 外周の各島へ向かい、クリスタルを破壊する。",goalResources:"銅・金・エメラルド・ダイヤを集めて強化する。",goalShop:"中央島の商人から装備とアップグレードを購入する。",goalChests:"地下を掘り進めてチェストやレア資源を見つける。",body:"WASDで移動、マウスまたはタッチドラッグで視点操作、Spaceでジャンプ、Shiftでダッシュ、左クリックまたは右側タップで現在のアイテムを使用、Eまたはインタラクトボタンで調べる、マウスホイールまたは1〜7またはホットバータップでアイテム切り替え、Escで一時停止。タッチ端末では仮想ジョイスティックで移動し、ジャンプボタンで跳びます。鉱石を掘り、地下チェストを見つけ、島の資源を回収し、商人から装備を強化して、4つの外周島クリスタルをすべて破壊しましょう。"},inventory:{bowLocked:"弓は未購入",hotbar:"ホットバー",upgrades:"強化"},shop:{title:"商人",subtitle:"移動系・遠距離武器・各種強化を購入できます。"},win:{title:"勝利",body:"外周の島にあったクリスタルはすべて破壊されました。群島はひとまず安全です。"},items:{sword:"剣",pickaxe:"ツルハシ",shovel:"シャベル",bow:"弓",arrows:"矢",blocks:"ブロック",purpleDotter:"パープルドッター",jumpPad:"ジャンプパッド",swordIron:"鉄の剣",swordDiamond:"ダイヤの剣",swordRainbow:"レインボーの剣",pickaxeIron:"鉄のツルハシ",pickaxeDiamond:"ダイヤのツルハシ",pickaxeRainbow:"レインボーのツルハシ",shovelIron:"鉄のシャベル",shovelDiamond:"ダイヤのシャベル",shovelRainbow:"レインボーのシャベル"},shopDescriptions:{blocks:"銅1個で建築ブロック1個。",purpleDotter:"投げた着地点へテレポートします。",bow:"遠距離攻撃用の弓を解放します。",arrows:"矢8本のセット。",jumpPad:"ブロックの上に設置する発射台。",swordUpgrade:"剣のティアを強化します。",pickaxeUpgrade:"ツルハシのティアを強化します。",shovelUpgrade:"シャベルのティアを強化します。"},tiers:{basic:"基本",iron:"鉄",diamond:"ダイヤ",rainbow:"レインボー"},notifications:{collectedGenerator:"ジェネレーターから銅 {copper} 個、金 {gold} 個を回収しました。",collectedMachine:"中央マシンから金 {gold} 個、ダイヤ {diamond} 個を回収しました。",chestOpened:"チェストを開けました: エメラルド {emerald} 個、金 {gold} 個、矢 {arrows} 本。",joinedServer:"サーバー {address} に参加しました。",copiedInvite:"招待をコピーしました。フレンドにサーバー {address} へ入ってもらってください。",bought:"{item} を購入しました。",notEnough:"{currency} が足りません。",alreadyOwned:"{item} はすでに解放済みです。",upgraded:"{item} を {tier} に強化しました。",crystalHit:"クリスタルにダメージ: 残りHP {hp}",crystalDestroyed:"クリスタルを破壊しました（{count}/4）。",noArrows:"矢がありません。",noBlocks:"ブロックがありません。",noDotters:"パープルドッターがありません。",noJumpPads:"ジャンプパッドがありません。",minedResource:"{resource} を採掘しました。",switchedLanguage:"言語を日本語に切り替えました。",machineReady:"中央マシンに資源がたまっています。",generatorReady:"どこかの島ジェネレーターに資源があります。"},resources:{copper:"銅",gold:"金",emerald:"エメラルド",diamond:"ダイヤ",stone:"石"},misc:{healthValue:"{current}/{max}",currentItemValue:"{item}",merchantName:"商人",generatorName:"ジェネレーター",machineName:"中央マシン",chestName:"チェスト"}}};class pg{constructor(t){F(this,"language");this.language=t}setLanguage(t){this.language=t;try{window.localStorage.setItem(ye.language,t)}catch{}}getLanguage(){return this.language}t(t,e){const n=fg[this.language],i=t.split(".").reduce((r,o)=>{if(r&&typeof r=="object"&&o in r)return r[o]},n);return typeof i!="string"?t:e?Object.entries(e).reduce((r,[o,a])=>{const l=`{${o}}`;return r.split(l).join(String(a))},i):i}}const mg=["sword","pickaxe","shovel","bow","blocks","purpleDotter","jumpPad"];class gg{constructor(){F(this,"localizer");F(this,"phase","title");F(this,"health",100);F(this,"maxHealth",100);F(this,"notifications",[]);F(this,"inventory");F(this,"crystalsDestroyed",0);F(this,"interactionPrompt",null);F(this,"showTutorial",!0);F(this,"showSettings",!1);F(this,"multiplayer");F(this,"mobileSettings");F(this,"destroyedCrystalIds",new Set);F(this,"notificationId",0);F(this,"listeners",new Set);const t=tg();this.localizer=new pg(t),this.maxHealth=100,this.health=this.maxHealth,this.inventory=this.createStartingInventory(),this.multiplayer=this.createMultiplayerState(),this.mobileSettings=this.createMobileSettings(),this.persistLanguage(t)}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}emit(){for(const t of this.listeners)t()}createStartingInventory(){return{currentHotbarIndex:0,hotbar:[...mg],hasBow:!1,arrows:Tn.arrows,blocks:Tn.blocks,purpleDotters:Tn.purpleDotters,jumpPads:Tn.jumpPads,toolTiers:{sword:"basic",pickaxe:"basic",shovel:"basic"},currencies:{copper:Tn.currencies.copper,gold:Tn.currencies.gold,emerald:Tn.currencies.emerald,diamond:Tn.currencies.diamond}}}createMultiplayerState(){return{status:"offline",playerName:this.readStoredValue(ye.playerName,Ie.defaultPlayerName),serverAddress:this.readStoredValue(ye.serverAddress,Ie.publicServerAddress),roomId:"",publicRoomId:Ie.publicServerAddress,playerId:null,seed:null,players:[],errorKey:null}}createMobileSettings(){return{touchSensitivity:this.readStoredNumber(ye.touchSensitivity,Oe.defaultTouchSensitivity,Oe.minTouchSensitivity,Oe.maxTouchSensitivity),leftHanded:this.readStoredBoolean(ye.leftHanded,!1),autoSprint:this.readStoredBoolean(ye.autoSprint,!0),haptics:this.readStoredBoolean(ye.haptics,!0)}}readStoredValue(t,e){var n;try{const i=(n=window.localStorage.getItem(t))==null?void 0:n.trim();return i||e}catch{return e}}readStoredBoolean(t,e){try{const n=window.localStorage.getItem(t);if(n==="true")return!0;if(n==="false")return!1}catch{return e}return e}readStoredNumber(t,e,n,i){try{const r=window.localStorage.getItem(t),o=r===null?Number.NaN:Number(r);if(Number.isFinite(o))return Math.max(n,Math.min(i,o))}catch{return e}return e}resetRun(t=!1){this.phase="title",this.health=this.maxHealth,this.crystalsDestroyed=0,this.destroyedCrystalIds.clear(),this.interactionPrompt=null,this.notifications=[],this.notificationId=0,this.showTutorial=!0,this.showSettings=!1,this.inventory=this.createStartingInventory(),t||(this.multiplayer.status="offline",this.multiplayer.roomId="",this.multiplayer.playerId=null,this.multiplayer.seed=null,this.multiplayer.players=[],this.multiplayer.errorKey=null),this.emit()}startPlaying(){this.phase="playing",this.showSettings=!1,this.emit()}setPhase(t){this.phase=t,this.emit()}setSettingsOpen(t){this.showSettings=t,this.emit()}isOnlineMatch(){return this.multiplayer.status==="online"}getPlayerName(){return this.multiplayer.playerName}setPlayerName(t){const e=t.trim().slice(0,Ie.maxPlayerNameLength)||Ie.defaultPlayerName;this.multiplayer.playerName=e;try{window.localStorage.setItem(ye.playerName,e)}catch{}}getServerAddress(){return this.multiplayer.serverAddress}setServerAddress(t){const e=t.trim().slice(0,Ie.maxServerAddressLength)||Ie.publicServerAddress;this.multiplayer.serverAddress=e;try{window.localStorage.setItem(ye.serverAddress,e)}catch{}}setMultiplayerConnecting(){this.multiplayer.status="connecting",this.multiplayer.errorKey=null,this.multiplayer.players=[],this.emit()}setMultiplayerSession(t,e){this.multiplayer.status="online",this.multiplayer.playerId=t,this.multiplayer.roomId=e.roomId,this.multiplayer.publicRoomId=e.publicRoomId,this.multiplayer.seed=e.seed,this.multiplayer.players=e.players,this.multiplayer.errorKey=null,this.emit()}leaveMultiplayerSession(){this.multiplayer.status="offline",this.multiplayer.roomId="",this.multiplayer.playerId=null,this.multiplayer.seed=null,this.multiplayer.players=[],this.multiplayer.errorKey=null,this.emit()}setMultiplayerError(t){this.multiplayer.status="offline",this.multiplayer.roomId="",this.multiplayer.playerId=null,this.multiplayer.seed=null,this.multiplayer.players=[],this.multiplayer.errorKey=t,this.emit()}clearMultiplayerError(){this.multiplayer.errorKey&&(this.multiplayer.errorKey=null,this.emit())}setMultiplayerPlayers(t){this.multiplayer.players=t,this.emit()}getPlayerCount(){return this.multiplayer.players.length}getTouchSensitivity(){return this.mobileSettings.touchSensitivity}setTouchSensitivity(t){const e=Math.max(Oe.minTouchSensitivity,Math.min(Oe.maxTouchSensitivity,t));this.mobileSettings.touchSensitivity=Number(e.toFixed(2));try{window.localStorage.setItem(ye.touchSensitivity,String(this.mobileSettings.touchSensitivity))}catch{}this.emit()}isLeftHanded(){return this.mobileSettings.leftHanded}setLeftHanded(t){this.mobileSettings.leftHanded=t;try{window.localStorage.setItem(ye.leftHanded,String(t))}catch{}this.emit()}isAutoSprintEnabled(){return this.mobileSettings.autoSprint}setAutoSprintEnabled(t){this.mobileSettings.autoSprint=t;try{window.localStorage.setItem(ye.autoSprint,String(t))}catch{}this.emit()}isHapticsEnabled(){return this.mobileSettings.haptics}setHapticsEnabled(t){this.mobileSettings.haptics=t;try{window.localStorage.setItem(ye.haptics,String(t))}catch{}this.emit()}getDestroyedCrystalIds(){return[...this.destroyedCrystalIds]}setLanguage(t){this.localizer.setLanguage(t),this.persistLanguage(t),this.notifications=[],this.pushNotification("notifications.switchedLanguage"),this.emit()}persistLanguage(t){try{window.localStorage.setItem(ye.language,t)}catch{}}getLanguage(){return this.localizer.getLanguage()}getCurrentItem(){return this.inventory.hotbar[this.inventory.currentHotbarIndex]}cycleHotbar(t){const e=this.inventory.hotbar.length;this.inventory.currentHotbarIndex=(this.inventory.currentHotbarIndex+t+e)%e,this.emit()}setHotbarIndex(t){t<0||t>=this.inventory.hotbar.length||(this.inventory.currentHotbarIndex=t,this.emit())}getToolTier(t){return this.inventory.toolTiers[t]}addCurrency(t,e){this.inventory.currencies[t]+=e,this.emit()}canAfford(t){return this.inventory.currencies[t.price.currency]>=t.price.amount}spend(t,e){return this.inventory.currencies[t]<e?!1:(this.inventory.currencies[t]-=e,this.emit(),!0)}tryPurchase(t){return this.canAfford(t)?t.action.type==="unlock"&&t.action.item==="bow"&&this.inventory.hasBow?(this.pushNotification("notifications.alreadyOwned",{item:this.localizer.t(t.itemKey)}),{success:!1,reason:"already-owned"}):t.action.type==="upgrade"&&!this.canUpgrade(t.action.item,t.action.tier)?{success:!1,reason:"wrong-tier"}:(this.inventory.currencies[t.price.currency]-=t.price.amount,t.action.type==="consumable"?t.action.item==="blocks"?this.inventory.blocks+=t.action.amount:t.action.item==="arrows"?this.inventory.arrows+=t.action.amount:t.action.item==="purpleDotters"?this.inventory.purpleDotters+=t.action.amount:t.action.item==="jumpPads"&&(this.inventory.jumpPads+=t.action.amount):t.action.type==="unlock"?(this.inventory.hasBow=!0,this.inventory.arrows+=12):(this.inventory.toolTiers[t.action.item]=t.action.tier,this.pushNotification("notifications.upgraded",{item:this.localizer.t(`items.${t.action.item}`),tier:this.localizer.t(`tiers.${t.action.tier}`)})),this.pushNotification("notifications.bought",{item:this.localizer.t(t.itemKey)}),this.emit(),{success:!0}):(this.pushNotification("notifications.notEnough",{currency:this.localizer.t(`hud.${t.price.currency}`)}),{success:!1,reason:"not-enough"})}canUpgrade(t,e){const n=Bs.indexOf(this.inventory.toolTiers[t]);return Bs.indexOf(e)===n+1}getShopItems(){return oc.filter(t=>{if(t.action.type!=="upgrade")return t.action.type==="unlock"?!this.inventory.hasBow:!0;const e=Bs.indexOf(this.inventory.toolTiers[t.action.item]);return Bs.indexOf(t.action.tier)===e+1})}useArrow(){return this.inventory.arrows<=0?(this.pushNotification("notifications.noArrows"),!1):(this.inventory.arrows-=1,this.emit(),!0)}useBlock(){return this.inventory.blocks<=0?(this.pushNotification("notifications.noBlocks"),!1):(this.inventory.blocks-=1,this.emit(),!0)}refundBlock(){this.inventory.blocks+=1,this.emit()}useDotter(){return this.inventory.purpleDotters<=0?(this.pushNotification("notifications.noDotters"),!1):(this.inventory.purpleDotters-=1,this.emit(),!0)}useJumpPad(){return this.inventory.jumpPads<=0?(this.pushNotification("notifications.noJumpPads"),!1):(this.inventory.jumpPads-=1,this.emit(),!0)}refundJumpPad(){this.inventory.jumpPads+=1,this.emit()}addBlocks(t){this.inventory.blocks+=t,this.emit()}addArrows(t){this.inventory.arrows+=t,this.emit()}damagePlayer(t){this.health=Math.max(0,this.health-t),this.health<=0&&(this.health=this.maxHealth),this.emit()}collectCrystal(t,e=!0){return this.destroyedCrystalIds.has(t)?!1:(this.destroyedCrystalIds.add(t),this.crystalsDestroyed=this.destroyedCrystalIds.size,e&&this.pushNotification("notifications.crystalDestroyed",{count:this.crystalsDestroyed}),this.crystalsDestroyed>=mt.crystalsPerGame&&(this.phase="win"),this.emit(),!0)}syncDestroyedCrystals(t){this.destroyedCrystalIds=new Set(t),this.crystalsDestroyed=this.destroyedCrystalIds.size,this.crystalsDestroyed>=mt.crystalsPerGame&&(this.phase="win"),this.emit()}getRemainingCrystals(){return mt.crystalsPerGame-this.crystalsDestroyed}setInteractionPrompt(t){var n,i;const e=((n=this.interactionPrompt)==null?void 0:n.id)!==(t==null?void 0:t.id)||((i=this.interactionPrompt)==null?void 0:i.key)!==(t==null?void 0:t.key);this.interactionPrompt=t,e&&this.emit()}hideTutorial(){this.showTutorial=!1,this.emit()}pushNotification(t,e){const n={id:this.notificationId++,key:t,values:e,createdAt:performance.now()};this.notifications=[...this.notifications.slice(-4),n],this.emit()}}const _g=.32,gl=8,_l=[[57,60,64],[53,57,60],[50,53,57],[55,59,62]],vg=[33,29,26,31],yg=[0,1,2,1,2,1,0,1];function Yi(s){return 440*2**((s-69)/12)}class xg{constructor(){F(this,"context",null);F(this,"masterGain",null);F(this,"musicGain",null);F(this,"sfxGain",null);F(this,"noiseBuffer",null);F(this,"nextMusicTime",0);F(this,"musicStep",0);F(this,"footstepTimer",0);F(this,"unlockBound",!1);F(this,"resumePromise",null);F(this,"pendingCues",[]);F(this,"activePhase","title");F(this,"onVisibilityChange",()=>{document.visibilityState==="visible"&&this.activate()});this.bindUnlockListeners(),document.addEventListener("visibilitychange",this.onVisibilityChange)}activate(){this.context||this.createContext(),this.context&&this.context.state!=="running"&&(this.resumePromise||(this.resumePromise=this.context.resume().then(()=>{this.primeAudio(),this.kickMusicScheduler(),this.flushPendingCues()}).catch(t=>{console.warn("Audio resume failed:",t)}).finally(()=>{this.resumePromise=null})))}update(t,e){if(this.activePhase=e.phase,!(!this.context||!this.musicGain)){if(this.context.state!=="running"){this.activate();return}if(this.updateMusicMix(e.phase),this.scheduleMusic(),e.phase==="playing"&&e.grounded&&e.horizontalSpeed>1.4){if(this.footstepTimer-=t,this.footstepTimer<=0){this.playCue("footstep");const n=e.horizontalSpeed>8?.22:.31;this.footstepTimer=n}}else this.footstepTimer=.05}}playCue(t){if(!this.context||!this.sfxGain){this.activate(),this.pendingCues.push(t);return}if(this.context.state!=="running"){this.pendingCues.push(t),this.activate();return}this.playCueNow(t,this.context.currentTime+.005)}playCueNow(t,e){if(!(!this.context||!this.sfxGain))switch(t){case"footstep":this.playNoiseBurst(e,.05,180,900,.08),this.playTone(e,90,.045,"triangle",.03,72);break;case"jump":this.playTone(e,220,.14,"sawtooth",.06,420),this.playTone(e+.03,330,.1,"triangle",.04,520),this.playNoiseBurst(e,.025,500,2600,.018);break;case"land":this.playNoiseBurst(e,.11,70,620,.1),this.playTone(e,68,.08,"triangle",.055,48);break;case"jumpPad":this.playTone(e,240,.12,"triangle",.06,720),this.playTone(e+.04,480,.14,"sine",.045,980);break;case"swing":this.playNoiseBurst(e,.085,320,5600,.05),this.playTone(e,180,.07,"sawtooth",.03,110);break;case"mine":this.playTone(e,280,.06,"square",.04,430),this.playTone(e+.015,520,.08,"triangle",.03,260),this.playNoiseBurst(e,.03,900,4200,.012);break;case"bow":this.playNoiseBurst(e,.045,1100,4200,.03),this.playTone(e,280,.08,"triangle",.035,210);break;case"dotter":this.playTone(e,420,.09,"sine",.05,760),this.playTone(e+.04,760,.1,"triangle",.038,520);break;case"teleport":this.playTone(e,280,.14,"sine",.06,980),this.playTone(e+.03,560,.12,"triangle",.03,1200),this.playNoiseBurst(e+.02,.07,500,6e3,.025);break;case"place":this.playNoiseBurst(e,.035,100,1e3,.04),this.playTone(e,160,.05,"triangle",.025,120);break;case"interact":this.playTone(e,520,.07,"triangle",.04,660);break;case"shopOpen":this.playTone(e,392,.11,"triangle",.04,494),this.playTone(e+.05,494,.1,"triangle",.04,587);break;case"buy":this.playTone(e,494,.09,"triangle",.05,660),this.playTone(e+.06,660,.09,"triangle",.05,784);break;case"collect":this.playTone(e,660,.07,"sine",.05,900),this.playTone(e+.03,900,.09,"triangle",.04,1080);break;case"crystalHit":this.playTone(e,760,.11,"triangle",.06,500),this.playNoiseBurst(e,.04,1100,5400,.03);break;case"crystalBreak":this.playTone(e,480,.2,"sawtooth",.08,220),this.playTone(e+.02,880,.18,"triangle",.06,1280),this.playTone(e+.08,1180,.16,"sine",.04,1480),this.playNoiseBurst(e,.15,400,7e3,.06);break;case"hurt":this.playTone(e,180,.14,"sawtooth",.06,82),this.playNoiseBurst(e,.06,100,1300,.03);break;case"win":this.playTone(e,523,.2,"triangle",.06,659),this.playTone(e+.1,659,.2,"triangle",.06,784),this.playTone(e+.22,784,.28,"triangle",.08,1047);break;case"error":this.playTone(e,220,.09,"square",.04,170);break}}createContext(){const t=window.AudioContext||window.webkitAudioContext;t&&(this.context=new t,this.masterGain=this.context.createGain(),this.musicGain=this.context.createGain(),this.sfxGain=this.context.createGain(),this.masterGain.gain.value=Gn.masterVolume,this.musicGain.gain.value=0,this.sfxGain.gain.value=Gn.sfxVolume,this.musicGain.connect(this.masterGain),this.sfxGain.connect(this.masterGain),this.masterGain.connect(this.context.destination),this.noiseBuffer=this.createNoiseBuffer())}bindUnlockListeners(){if(this.unlockBound)return;this.unlockBound=!0;const t=()=>{this.activate()};window.addEventListener("pointerdown",t,{passive:!0,capture:!0}),window.addEventListener("pointerup",t,{passive:!0,capture:!0}),window.addEventListener("touchstart",t,{passive:!0,capture:!0}),window.addEventListener("touchend",t,{passive:!0,capture:!0}),window.addEventListener("keydown",t,{passive:!0,capture:!0}),window.addEventListener("mousedown",t,{passive:!0,capture:!0}),window.addEventListener("click",t,{passive:!0,capture:!0})}createNoiseBuffer(){if(!this.context)return null;const t=this.context.sampleRate*.2,e=this.context.createBuffer(1,t,this.context.sampleRate),n=e.getChannelData(0);for(let i=0;i<t;i+=1)n[i]=Math.random()*2-1;return e}updateMusicMix(t){if(!this.context||!this.musicGain)return;let e=0;t==="title"?e=Gn.musicVolume*.95:t==="playing"?e=Gn.musicVolume:t==="shop"?e=Gn.musicVolume*.6:t==="win"&&(e=Gn.musicVolume*.35),this.musicGain.gain.cancelScheduledValues(this.context.currentTime),this.musicGain.gain.setTargetAtTime(e,this.context.currentTime,.08)}scheduleMusic(){if(!this.context||!this.musicGain)return;const t=60/Gn.musicTempo/2;for(this.nextMusicTime===0&&(this.nextMusicTime=this.context.currentTime+.06);this.nextMusicTime<this.context.currentTime+_g;){const e=Math.floor(this.musicStep/gl)%_l.length,n=this.musicStep%gl,i=_l[e];n===0&&(this.playPad(this.nextMusicTime,i.map(Yi),t*3.8),this.playPad(this.nextMusicTime+.02,i.map(o=>Yi(o+12)),t*2.8));const r=i[yg[n]%i.length]+(n>=4?12:0);this.playMusicTone(this.nextMusicTime,Yi(r),t*.92,n===0||n===4?"sawtooth":"triangle",n===0||n===4?.05:.038,n%2===0?Yi(r+2):void 0),n%2===0&&this.playMusicTone(this.nextMusicTime,Yi(vg[e]),t*1.8,"sine",.055),n===0||n===4?this.playNoiseBurst(this.nextMusicTime,.06,45,160,.05,this.musicGain):n%2===0&&this.playNoiseBurst(this.nextMusicTime,.03,700,3200,.012,this.musicGain),n===7&&this.playNoiseBurst(this.nextMusicTime,.045,1800,6200,.012,this.musicGain),this.nextMusicTime+=t,this.musicStep+=1}}playPad(t,e,n){for(const i of e)this.playMusicTone(t,i,n,"sawtooth",.02)}playMusicTone(t,e,n,i,r,o){this.playTone(t,e,n,i,r,o,this.musicGain)}playTone(t,e,n,i,r,o,a=this.sfxGain){if(!this.context||!a)return;const l=this.context.createOscillator(),c=this.context.createGain();l.type=i,l.frequency.setValueAtTime(e,t),o!==void 0&&l.frequency.exponentialRampToValueAtTime(Math.max(1,o),t+n),c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(r,t+.01),c.gain.exponentialRampToValueAtTime(1e-4,t+n),l.connect(c),c.connect(a),l.start(t),l.stop(t+n+.02)}playNoiseBurst(t,e,n,i,r,o=this.sfxGain){if(!this.context||!this.noiseBuffer||!o)return;const a=this.context.createBufferSource();a.buffer=this.noiseBuffer;const l=this.context.createBiquadFilter();l.type="highpass",l.frequency.setValueAtTime(n,t);const c=this.context.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(i,t);const h=this.context.createGain();h.gain.setValueAtTime(1e-4,t),h.gain.exponentialRampToValueAtTime(r,t+.006),h.gain.exponentialRampToValueAtTime(1e-4,t+e),a.connect(l),l.connect(c),c.connect(h),h.connect(o),a.start(t),a.stop(t+e+.02)}primeAudio(){if(!this.context||!this.masterGain)return;const t=this.context.createBuffer(1,1,this.context.sampleRate),e=this.context.createBufferSource(),n=this.context.createGain();e.buffer=t,n.gain.value=1e-5,e.connect(n),n.connect(this.masterGain),e.start(),e.stop(this.context.currentTime+.01)}flushPendingCues(){if(!this.context||this.context.state!=="running")return;const t=[...this.pendingCues];this.pendingCues=[];let e=this.context.currentTime+.01;for(const n of t)this.playCueNow(n,e),e+=.02}kickMusicScheduler(){!this.context||!this.musicGain||(this.nextMusicTime=0,this.updateMusicMix(this.activePhase),this.scheduleMusic())}}class Mg{constructor(){F(this,"pressed",new Set);F(this,"interactRequested",!1);F(this,"jumpRequested",!1);F(this,"pauseRequested",!1);F(this,"tutorialDismissed",!1);F(this,"virtualMove",{x:0,y:0});F(this,"virtualJumpPressed",!1);F(this,"virtualSprintPressed",!1);F(this,"lookDelta",{x:0,y:0});F(this,"touchDevice",window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0);F(this,"onKeyDown",t=>{t.code==="Space"&&(t.preventDefault(),this.jumpRequested=!0),this.pressed.add(t.code),t.code==="KeyE"&&(this.interactRequested=!0),t.code==="Escape"&&(this.pauseRequested=!0),(t.code==="KeyW"||t.code==="KeyA"||t.code==="KeyS"||t.code==="KeyD"||t.code==="Space")&&(this.tutorialDismissed=!0)});F(this,"onKeyUp",t=>{t.code==="Space"&&t.preventDefault(),this.pressed.delete(t.code)});window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}isPressed(t){return this.pressed.has(t)}isTouchDevice(){return this.touchDevice}getMoveForward(){const t=(this.pressed.has("KeyW")?1:0)-(this.pressed.has("KeyS")?1:0);return Math.max(-1,Math.min(1,t-this.virtualMove.y))}getMoveRight(){const t=(this.pressed.has("KeyD")?1:0)-(this.pressed.has("KeyA")?1:0);return Math.max(-1,Math.min(1,t+this.virtualMove.x))}isJumpPressed(){return this.pressed.has("Space")||this.virtualJumpPressed}isSprintPressed(){return this.pressed.has("ShiftLeft")||this.pressed.has("ShiftRight")||this.virtualSprintPressed}consumeJumpRequest(){return this.jumpRequested?(this.jumpRequested=!1,!0):!1}setVirtualMovement(t,e){this.virtualMove.x=Math.max(-1,Math.min(1,t)),this.virtualMove.y=Math.max(-1,Math.min(1,e)),(Math.abs(t)>.01||Math.abs(e)>.01)&&(this.tutorialDismissed=!0)}setVirtualJumpPressed(t){t&&!this.virtualJumpPressed&&(this.jumpRequested=!0),this.virtualJumpPressed=t,t&&(this.tutorialDismissed=!0)}setVirtualSprintPressed(t){this.virtualSprintPressed=t,t&&(this.tutorialDismissed=!0)}addLookDelta(t,e){this.lookDelta.x+=t,this.lookDelta.y+=e,(t!==0||e!==0)&&(this.tutorialDismissed=!0)}consumeLookDelta(){const t={...this.lookDelta};return this.lookDelta.x=0,this.lookDelta.y=0,t}requestInteract(){this.interactRequested=!0,this.tutorialDismissed=!0}consumeInteract(){return this.interactRequested?(this.interactRequested=!1,!0):!1}consumePause(){return this.pauseRequested?(this.pauseRequested=!1,!0):!1}consumeTutorialDismissed(){return this.tutorialDismissed?(this.tutorialDismissed=!1,!0):!1}}class Sg{constructor(t,e,n){F(this,"root",document.createElement("div"));F(this,"joystick",document.createElement("div"));F(this,"joystickKnob",document.createElement("div"));F(this,"lookZone",document.createElement("div"));F(this,"actionCluster",document.createElement("div"));F(this,"utilityCluster",document.createElement("div"));F(this,"orientationCard",document.createElement("div"));F(this,"jumpButton",document.createElement("button"));F(this,"interactButton",document.createElement("button"));F(this,"useButton",document.createElement("button"));F(this,"sprintButton",document.createElement("button"));F(this,"pauseButton",document.createElement("button"));F(this,"fullscreenButton",document.createElement("button"));F(this,"joystickPointerId",null);F(this,"lookPointerId",null);F(this,"usePointerId",null);F(this,"joystickCenter",{x:0,y:0});F(this,"joystickVector",{x:0,y:0});F(this,"lookLast",{x:0,y:0});F(this,"lookTravel",0);F(this,"lookStartTime",0);F(this,"manualSprint",!1);F(this,"useRepeatTimeout",null);F(this,"useRepeatInterval",null);F(this,"orientationHintDismissed",!1);F(this,"orientationHintTimer",null);F(this,"joystickRadius",56);F(this,"onViewportChange",()=>{this.render()});F(this,"onOrientationHintDismiss",t=>{t.preventDefault(),this.orientationHintDismissed=!0,this.orientationHintTimer!==null&&(window.clearTimeout(this.orientationHintTimer),this.orientationHintTimer=null),this.render()});F(this,"onJoystickStart",t=>{t.preventDefault(),this.joystickPointerId=t.pointerId,this.joystick.setPointerCapture(t.pointerId);const e=this.joystick.getBoundingClientRect();this.joystickCenter={x:e.left+e.width/2,y:e.top+e.height/2},this.updateJoystick(t.clientX,t.clientY),this.vibrate(8)});F(this,"onJoystickMove",t=>{t.pointerId===this.joystickPointerId&&this.updateJoystick(t.clientX,t.clientY)});F(this,"onJoystickEnd",t=>{t.pointerId===this.joystickPointerId&&(this.joystick.releasePointerCapture(t.pointerId),this.joystickPointerId=null,this.joystickVector={x:0,y:0},this.input.setVirtualMovement(0,0),this.input.setVirtualSprintPressed(this.manualSprint),this.joystickKnob.style.transform="translate(-50%, -50%)",this.updateSprintState())});F(this,"onLookStart",t=>{this.lookPointerId===null&&(this.lookPointerId=t.pointerId,this.lookTravel=0,this.lookStartTime=performance.now(),this.lookLast={x:t.clientX,y:t.clientY},this.lookZone.setPointerCapture(t.pointerId))});F(this,"onLookMove",t=>{if(t.pointerId!==this.lookPointerId)return;const e=t.clientX-this.lookLast.x,n=t.clientY-this.lookLast.y;this.lookLast={x:t.clientX,y:t.clientY},this.lookTravel+=Math.hypot(e,n);const i=this.state.getTouchSensitivity();this.input.addLookDelta(e*i,n*i)});F(this,"onLookEnd",t=>{if(t.pointerId!==this.lookPointerId)return;this.lookZone.releasePointerCapture(t.pointerId);const e=performance.now()-this.lookStartTime;this.lookTravel<10&&e<220&&this.triggerUse(),this.lookPointerId=null,this.lookTravel=0});F(this,"onUseStart",t=>{t.preventDefault(),this.usePointerId=t.pointerId,this.useButton.setPointerCapture(t.pointerId),this.triggerUse(),this.clearUseRepeater(),this.useRepeatTimeout=window.setTimeout(()=>{this.useRepeatInterval=window.setInterval(()=>{this.actions.onUse()},Oe.holdRepeatIntervalMs)},Oe.holdRepeatDelayMs)});F(this,"onUseEnd",t=>{this.usePointerId===t.pointerId&&(this.useButton.hasPointerCapture(t.pointerId)&&this.useButton.releasePointerCapture(t.pointerId),this.usePointerId=null,this.clearUseRepeater())});F(this,"onJumpStart",t=>{t.preventDefault(),this.jumpButton.setPointerCapture(t.pointerId),this.input.setVirtualJumpPressed(!0),this.vibrate(10)});F(this,"onJumpEnd",t=>{this.jumpButton.hasPointerCapture(t.pointerId)&&this.jumpButton.releasePointerCapture(t.pointerId),this.input.setVirtualJumpPressed(!1)});F(this,"onInteractStart",t=>{t.preventDefault(),this.actions.onInteract(),this.vibrate([8,24,8])});F(this,"onSprintToggle",t=>{t.preventDefault(),this.manualSprint=!this.manualSprint,this.updateSprintState(),this.vibrate(this.manualSprint?[8,18,12]:8)});F(this,"onPausePress",t=>{t.preventDefault(),this.actions.onPause(),this.vibrate(16)});F(this,"onFullscreenPress",t=>{t.preventDefault(),this.actions.onToggleFullscreen(),this.vibrate(10)});this.state=t,this.input=e,this.actions=n,this.root.className="touch-controls hidden",this.lookZone.className="touch-look-zone",this.joystick.className="touch-joystick",this.joystickKnob.className="touch-joystick__knob",this.actionCluster.className="touch-action-cluster",this.utilityCluster.className="touch-utility-cluster",this.orientationCard.className="touch-orientation-card hidden",this.jumpButton.className="touch-button touch-button--jump",this.interactButton.className="touch-button touch-button--interact",this.useButton.className="touch-button touch-button--use",this.sprintButton.className="touch-button touch-button--sprint",this.pauseButton.className="touch-chip touch-chip--pause",this.fullscreenButton.className="touch-chip touch-chip--fullscreen";for(const i of[this.jumpButton,this.interactButton,this.useButton,this.sprintButton,this.pauseButton,this.fullscreenButton])i.type="button";this.joystick.appendChild(this.joystickKnob),this.actionCluster.append(this.useButton,this.jumpButton,this.interactButton,this.sprintButton),this.utilityCluster.append(this.pauseButton,this.fullscreenButton),this.root.append(this.lookZone,this.joystick,this.actionCluster,this.utilityCluster,this.orientationCard),document.body.appendChild(this.root),this.lookZone.addEventListener("pointerdown",this.onLookStart),this.lookZone.addEventListener("pointermove",this.onLookMove),this.lookZone.addEventListener("pointerup",this.onLookEnd),this.lookZone.addEventListener("pointercancel",this.onLookEnd),this.joystick.addEventListener("pointerdown",this.onJoystickStart),this.joystick.addEventListener("pointermove",this.onJoystickMove),this.joystick.addEventListener("pointerup",this.onJoystickEnd),this.joystick.addEventListener("pointercancel",this.onJoystickEnd),this.useButton.addEventListener("pointerdown",this.onUseStart),this.useButton.addEventListener("pointerup",this.onUseEnd),this.useButton.addEventListener("pointercancel",this.onUseEnd),this.useButton.addEventListener("pointerleave",this.onUseEnd),this.jumpButton.addEventListener("pointerdown",this.onJumpStart),this.jumpButton.addEventListener("pointerup",this.onJumpEnd),this.jumpButton.addEventListener("pointercancel",this.onJumpEnd),this.jumpButton.addEventListener("pointerleave",this.onJumpEnd),this.interactButton.addEventListener("pointerdown",this.onInteractStart),this.sprintButton.addEventListener("pointerdown",this.onSprintToggle),this.pauseButton.addEventListener("pointerdown",this.onPausePress),this.fullscreenButton.addEventListener("pointerdown",this.onFullscreenPress),this.state.subscribe(()=>this.render()),window.addEventListener("resize",this.onViewportChange,{passive:!0}),document.addEventListener("fullscreenchange",this.onViewportChange),this.orientationCard.addEventListener("pointerdown",this.onOrientationHintDismiss),this.render()}render(){const t=this.state.phase==="playing",e=this.input.isTouchDevice(),n=window.innerHeight>window.innerWidth,i=t&&e&&n&&!this.orientationHintDismissed;this.root.classList.toggle("hidden",!t||!e),this.root.classList.toggle("touch-controls--left-handed",this.state.isLeftHanded()),document.body.classList.toggle("touch-left-handed",e&&this.state.isLeftHanded()),this.orientationCard.classList.toggle("hidden",!i);const r=this.state.localizer.t.bind(this.state.localizer);this.useButton.textContent=r("buttons.use"),this.jumpButton.textContent=r("buttons.jump"),this.interactButton.textContent=r("buttons.interact"),this.sprintButton.textContent=r("buttons.sprint"),this.pauseButton.textContent=r("buttons.pause"),this.fullscreenButton.textContent=document.fullscreenElement?r("buttons.exitFullscreen"):r("buttons.fullscreen"),this.orientationCard.innerHTML=`
      <div class="touch-orientation-card__header">
        <div class="touch-orientation-card__title">${r("mobile.rotateTitle")}</div>
        <button type="button" class="touch-orientation-card__close" data-close-orientation>
          ${r("buttons.close")}
        </button>
      </div>
      <div class="touch-orientation-card__body">${r("mobile.rotateBody")}</div>
    `,this.syncOrientationHint(i),this.updateSprintState()}syncOrientationHint(t){if(!t){this.orientationHintTimer!==null&&(window.clearTimeout(this.orientationHintTimer),this.orientationHintTimer=null);return}this.orientationHintTimer===null&&(this.orientationHintTimer=window.setTimeout(()=>{this.orientationHintTimer=null,this.orientationHintDismissed=!0,this.render()},2600))}updateJoystick(t,e){const n=t-this.joystickCenter.x,i=e-this.joystickCenter.y,r=Math.min(Math.hypot(n,i),this.joystickRadius),o=Math.atan2(i,n),a=Math.cos(o)*r,l=Math.sin(o)*r,c=a/this.joystickRadius,h=l/this.joystickRadius,d=this.applyDeadzone(c),f=this.applyDeadzone(h);this.joystickVector={x:d,y:f},this.input.setVirtualMovement(d,f),this.joystickKnob.style.transform=`translate(calc(-50% + ${a}px), calc(-50% + ${l}px))`,this.updateSprintState()}applyDeadzone(t){const e=Math.abs(t);if(e<=Oe.joystickDeadzone)return 0;const n=(e-Oe.joystickDeadzone)/(1-Oe.joystickDeadzone);return Math.sign(t)*Math.max(0,Math.min(1,n))}updateSprintState(){const t=-this.joystickVector.y,e=Math.hypot(this.joystickVector.x,this.joystickVector.y),n=this.state.isAutoSprintEnabled()&&t>=Oe.autoSprintThreshold&&e>=Oe.autoSprintThreshold,i=this.manualSprint||n;this.input.setVirtualSprintPressed(i),this.sprintButton.classList.toggle("touch-button--active",i)}clearUseRepeater(){this.useRepeatTimeout!==null&&(window.clearTimeout(this.useRepeatTimeout),this.useRepeatTimeout=null),this.useRepeatInterval!==null&&(window.clearInterval(this.useRepeatInterval),this.useRepeatInterval=null)}triggerUse(){this.actions.onUse(),this.vibrate(12)}vibrate(t){this.state.isHapticsEnabled()&&"vibrate"in navigator&&navigator.vibrate(t)}}const Eg="#5a5e82";function Ge(s,t="0 0 64 64"){return`<svg class="ui-icon-svg" viewBox="${t}" aria-hidden="true" focusable="false">${s}</svg>`}function bg(s,t=!1){return t?Eg:Yo[s??"basic"]}function ks(s,t={}){const e=bg(t.tier,t.locked),n=t.locked?"#4b5070":"#d6dbff",i=t.locked?"#41384f":"#6d4727";switch(s){case"sword":return Ge(`
        <g transform="rotate(42 32 32)">
          <path d="M28 9h8v24h-8z" fill="${e}" />
          <path d="M28 9h8l-4-7z" fill="#ffffff" />
          <rect x="22" y="33" width="20" height="5" rx="2.5" fill="#5f4be8" />
          <rect x="29" y="38" width="6" height="15" rx="3" fill="${i}" />
          <circle cx="32" cy="56" r="4" fill="#f3b24c" />
        </g>
      `);case"pickaxe":return Ge(`
        <g transform="rotate(-20 32 32)">
          <rect x="29" y="13" width="6" height="38" rx="3" fill="${i}" />
          <path d="M13 21c9-10 30-10 39 0l-5 6c-7-5-20-5-29 0z" fill="${e}" />
          <rect x="28" y="48" width="8" height="8" rx="3" fill="#f2b853" />
        </g>
      `);case"shovel":return Ge(`
        <g transform="rotate(-18 32 32)">
          <rect x="29" y="10" width="6" height="32" rx="3" fill="${i}" />
          <path d="M22 37h20v7c0 8-6 14-10 14s-10-6-10-14z" fill="${e}" />
          <rect x="27" y="8" width="10" height="6" rx="3" fill="#f0b24c" />
        </g>
      `);case"bow":return Ge(`
        <path d="M17 12c10 10 16 24 16 38" fill="none" stroke="${e}" stroke-width="5" stroke-linecap="round" />
        <path d="M47 12c-10 10-16 24-16 38" fill="none" stroke="${e}" stroke-width="5" stroke-linecap="round" />
        <path d="M17 12l30 38" fill="none" stroke="${n}" stroke-width="2.6" stroke-linecap="round" />
        <path d="M32 18l0 24" fill="none" stroke="${n}" stroke-width="2" stroke-linecap="round" />
        <path d="M32 14l4 7h-8z" fill="#f5bc5f" />
      `);case"arrows":return Ge(`
        <g transform="rotate(-18 32 32)">
          <path d="M18 45l20-24" stroke="${n}" stroke-width="3" stroke-linecap="round" />
          <path d="M17 45l5-1-2-4z" fill="#f5bc5f" />
          <path d="M38 21l6 3" stroke="${e}" stroke-width="2" stroke-linecap="round" />
          <path d="M24 50l20-24" stroke="${n}" stroke-width="3" stroke-linecap="round" opacity="0.8" />
          <path d="M23 50l5-1-2-4z" fill="#f5bc5f" opacity="0.9" />
          <path d="M44 26l6 3" stroke="${e}" stroke-width="2" stroke-linecap="round" opacity="0.8" />
        </g>
      `);case"blocks":return Ge(`
        <polygon points="32,8 51,18 32,28 13,18" fill="#8a6b4d" />
        <polygon points="13,18 32,28 32,49 13,39" fill="#65482f" />
        <polygon points="51,18 32,28 32,49 51,39" fill="#a7815c" />
      `);case"purpleDotter":return Ge(`
        <circle cx="32" cy="32" r="17" fill="#8235ff" />
        <circle cx="32" cy="32" r="11" fill="#c970ff" opacity="0.82" />
        <path d="M32 11l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#fff2ff" opacity="0.94" />
      `);case"jumpPad":return Ge(`
        <rect x="11" y="38" width="42" height="11" rx="5" fill="#42507a" />
        <rect x="16" y="33" width="32" height="7" rx="3.5" fill="#8554ff" />
        <path d="M32 13l7 11h-5v8h-4v-8h-5z" fill="#ffcf64" />
      `)}}function vl(s){switch(s){case"copper":return Ge(`
        <circle cx="32" cy="32" r="16" fill="#bd7440" />
        <circle cx="32" cy="32" r="8" fill="#e9b27f" opacity="0.72" />
      `);case"gold":return Ge(`
        <circle cx="32" cy="32" r="16" fill="#f0c33c" />
        <circle cx="32" cy="32" r="8" fill="#fff0a8" opacity="0.8" />
      `);case"emerald":return Ge(`
        <path d="M32 11l13 9v14l-13 19-13-19V20z" fill="#33d18a" />
        <path d="M32 18l7 5v8l-7 9-7-9v-8z" fill="#abffcf" opacity="0.7" />
      `);case"diamond":return Ge(`
        <path d="M18 24l8-10h12l8 10-14 24z" fill="#78e7ff" />
        <path d="M26 14l6 10 6-10" fill="none" stroke="#e7feff" stroke-width="2.4" stroke-linejoin="round" />
      `)}}class wg{constructor(t,e){F(this,"root",document.createElement("div"));F(this,"touchDevice",window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0);F(this,"mobilePromptKey",null);F(this,"mobilePromptVisible",!1);F(this,"mobilePromptTimer",null);F(this,"handleClick",t=>{const e=t.target;if(!e)return;const n=e.closest("[data-action]");if(n){const o=n.dataset.action;o==="start"?this.actions.onStart():o==="join-public"?this.actions.onJoinPublic():o==="join-server"?this.actions.onJoinServer():o==="resume"?this.actions.onResume():o==="restart"?this.actions.onRestart():o==="open-settings"?this.actions.onToggleSettings(!0):o==="close-settings"?this.actions.onToggleSettings(!1):o==="close-shop"?this.actions.onCloseShop():o==="dismiss-tutorial"?this.actions.onDismissTutorial():o==="copy-invite"&&this.actions.onCopyInvite();return}const i=e.closest("[data-buy]");if(i!=null&&i.dataset.buy){this.actions.onBuy(i.dataset.buy);return}const r=e.closest("[data-hotbar-index]");r!=null&&r.dataset.hotbarIndex&&this.actions.onSelectHotbar(Number(r.dataset.hotbarIndex))});F(this,"handleChange",t=>{const e=t.target;if(!(!e||!e.dataset.setting)){if(e.dataset.setting==="language"){const n=e.value==="ja"?"ja":"en";this.actions.onSetLanguage(n);return}if(e.dataset.setting==="left-handed"){this.actions.onSetLeftHanded(e.checked);return}if(e.dataset.setting==="auto-sprint"){this.actions.onSetAutoSprint(e.checked);return}e.dataset.setting==="haptics"&&this.actions.onSetHaptics(e.checked)}});F(this,"handleInput",t=>{const e=t.target;if(!(!e||!e.dataset.setting)){if(e.dataset.setting==="player-name"){this.actions.onSetPlayerName(e.value);return}if(e.dataset.setting==="server-address"){this.actions.onSetServerAddress(e.value);return}e.dataset.setting==="touch-sensitivity"&&this.actions.onSetTouchSensitivity(Number(e.value))}});this.state=t,this.actions=e,this.root.id="ui-root",document.body.appendChild(this.root),this.root.addEventListener("click",this.handleClick),this.root.addEventListener("change",this.handleChange),this.root.addEventListener("input",this.handleInput),this.state.subscribe(()=>this.render()),this.render()}render(){const t=this.state.localizer.t.bind(this.state.localizer),e=this.state.getShopItems().map(_=>this.renderShopCard(_)).join(""),n=this.state.inventory.hotbar.map((_,m)=>this.renderHotbarSlot(_,m)).join(""),r=(this.touchDevice?this.state.notifications.slice(-2):this.state.notifications).slice().reverse().map(_=>`<div class="notification">${t(_.key,_.values)}</div>`).join("");this.syncMobilePrompt();const o=`${this.state.crystalsDestroyed}/${mt.crystalsPerGame}`,a=this.getInteractionPromptKey(),l=a&&(!this.touchDevice||this.mobilePromptVisible)?`<div class="interaction-pill interaction-pill--${this.touchDevice?"mobile":"desktop"}">${t(a)}</div>`:"",c=this.getItemName(this.state.getCurrentItem()),h=this.touchDevice?`
        <div class="resource-ribbon">
          ${this.renderResourcePill("copper","mini")}
          ${this.renderResourcePill("gold","mini")}
          ${this.renderResourcePill("emerald","mini")}
          ${this.renderResourcePill("diamond","mini")}
        </div>
      `:"",d=this.touchDevice?[this.renderTutorialRow(t("mobile.movePad"),t("tutorial.move")),this.renderTutorialRow(t("mobile.swipeLook"),t("tutorial.look")),this.renderTutorialRow(t("mobile.actionButton"),t("tutorial.use")),this.renderTutorialRow(t("buttons.jump"),t("tutorial.jump")),this.renderTutorialRow(t("buttons.interact"),t("tutorial.interact")),this.renderTutorialRow(t("mobile.hotbarTap"),t("tutorial.switch")),this.renderTutorialRow(t("buttons.sprint"),t("tutorial.sprint")),this.renderTutorialRow(t("buttons.pause"),t("tutorial.pause"))].join(""):[this.renderTutorialRow("W A S D",t("tutorial.move")),this.renderTutorialRow("Space",t("tutorial.jump")),this.renderTutorialRow("Shift",t("tutorial.sprint")),this.renderTutorialRow("Mouse",t("tutorial.look")),this.renderTutorialRow("Left Click",t("tutorial.use")),this.renderTutorialRow("1-7 / Scroll",t("tutorial.switch")),this.renderTutorialRow("E",t("tutorial.interact")),this.renderTutorialRow("Esc",t("tutorial.pause"))].join(""),f=this.state.multiplayer.players.map(_=>`
          <div class="roster-entry ${_.id===this.state.multiplayer.playerId?"roster-entry--self":""}">
            <span class="roster-entry__name">${_.name}</span>
            <span class="roster-entry__item">${t(`items.${_.currentItem}`)}</span>
          </div>
        `).join(""),p=this.state.multiplayer.errorKey?`<div class="lobby-card__error">${t(this.state.multiplayer.errorKey,{address:Ie.publicServerAddress})}</div>`:"",g=this.state.multiplayer.status==="online"?`
        <div class="server-card">
          <div class="server-card__eyebrow">${t("multiplayer.onlineNow")}</div>
          <div class="server-card__address">${this.state.multiplayer.roomId}</div>
          <div class="server-card__count">${t("multiplayer.playersOnline",{count:this.state.getPlayerCount()})}</div>
          <div class="server-card__list">${f}</div>
          <button class="button button--ghost button--small" data-action="copy-invite">
            ${t("buttons.copyInvite")}
          </button>
        </div>
      `:"";this.root.innerHTML=`
      <div class="crosshair ${this.state.phase==="playing"?"":"hidden"}"></div>

      <div class="hud ${this.state.phase==="title"?"hidden":""}">
        <div class="hud__top ${this.touchDevice?"hud__top--touch":""}">
          ${g}
          <div class="objective-pill">
            <span class="objective-pill__label">${t("hud.objective")}</span>
            <strong>${t("hud.objectiveShort")}</strong>
            <span class="objective-pill__count">${o}</span>
          </div>
          <div class="resource-stack resource-stack--top">
            ${this.renderResourcePill("copper")}
            ${this.renderResourcePill("gold")}
            ${this.renderResourcePill("emerald")}
            ${this.renderResourcePill("diamond")}
          </div>
        </div>

        <div class="notifications ${this.touchDevice?"notifications--touch":""}">${r}</div>

        <div class="tutorial-card ${this.state.showTutorial&&this.state.phase==="playing"?"":"hidden"}">
          <div class="tutorial-card__title">${t("tutorial.title")}</div>
          <div class="tutorial-card__rows">
            ${d}
          </div>
          <div class="tutorial-card__divider"></div>
          <div class="tutorial-card__goals">
            <div>${t("tutorial.goalPrimary")}</div>
            <div>${t("tutorial.goalResources")}</div>
            <div>${t("tutorial.goalShop")}</div>
            <div>${t("tutorial.goalChests")}</div>
            ${this.touchDevice?`<div>${t("mobile.holdActionTip")}</div><div>${t("mobile.fullscreenTip")}</div>`:""}
          </div>
          <button class="button button--primary button--wide" data-action="dismiss-tutorial">
            ${t("tutorial.cta")}
          </button>
        </div>

        <div class="hud__bottom">
          ${l}
          <div class="hud__status-row">
            <div class="health-pill">
              <span>${t("hud.health")}</span>
              <strong>${this.state.health}</strong>
            </div>
            ${h}
            <div class="current-item-pill">
              <span>${t("hud.currentItem")}</span>
              <strong>${c}</strong>
            </div>
          </div>
          <div class="hotbar-shell">
            <div class="hotbar">${n}</div>
          </div>
        </div>
      </div>

      <div class="screen ${this.state.phase==="title"?"":"hidden"}">
        <div class="hero-screen">
          <div class="hero-badge">FIRST-PERSON ISLAND ACTION</div>
          <h1 class="hero-title">${t("gameTitle")}</h1>
          <p class="hero-subtitle">${t("titleSubtitle")}</p>
          <div class="panel__actions panel__actions--stack hero-screen__actions">
            <button class="button button--primary" data-action="start">${t("buttons.playOffline")}</button>
            <button class="button button--ghost" data-action="open-settings">${t("buttons.settings")}</button>
          </div>
          <div class="lobby-card">
            <div class="panel__eyebrow">${t("multiplayer.title")}</div>
            <h2>${t("multiplayer.subtitle")}</h2>
            <p class="lobby-card__hint">${t("multiplayer.publicHint",{address:Ie.publicServerAddress})}</p>
            <label class="field">
              <span>${t("multiplayer.playerName")}</span>
              <input
                data-setting="player-name"
                type="text"
                maxlength="${Ie.maxPlayerNameLength}"
                value="${this.escapeAttribute(this.state.getPlayerName())}"
              />
            </label>
            <label class="field">
              <span>${t("multiplayer.serverAddress")}</span>
              <input
                data-setting="server-address"
                type="text"
                maxlength="${Ie.maxServerAddressLength}"
                value="${this.escapeAttribute(this.state.getServerAddress())}"
              />
            </label>
            <div class="panel__actions">
              <button
                class="button button--primary"
                data-action="join-public"
                ${this.state.multiplayer.status==="connecting"?"disabled":""}
              >
                ${t("buttons.joinPublic")}
              </button>
              <button
                class="button button--ghost"
                data-action="join-server"
                ${this.state.multiplayer.status==="connecting"?"disabled":""}
              >
                ${this.state.multiplayer.status==="connecting"?t("multiplayer.connecting"):t("buttons.joinServer")}
              </button>
            </div>
            ${p}
            <div class="lobby-card__roster">
              <div class="lobby-card__roster-title">${t("multiplayer.friendsReady")}</div>
              <div class="server-card__list">
                ${f||`<div class="roster-entry roster-entry--empty">${t("multiplayer.noFriendsYet")}</div>`}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="screen ${this.state.phase==="paused"&&!this.state.showSettings?"":"hidden"}">
        <div class="panel panel--dark">
          <div class="panel__eyebrow">${t("hud.paused")}</div>
          <h2>${t("gameTitle")}</h2>
          <p>${t("titleSubtitle")}</p>
          <div class="panel__actions panel__actions--stack">
            <button class="button button--primary" data-action="resume">${t("buttons.resume")}</button>
            <button class="button button--ghost" data-action="open-settings">${t("buttons.settings")}</button>
          </div>
        </div>
      </div>

      <div class="screen ${this.state.phase==="shop"?"":"hidden"}">
        <div class="panel panel--shop panel--dark">
          <div class="panel__header">
            <div>
              <div class="panel__eyebrow">${t("shop.title")}</div>
              <h2>${t("gameTitle")}</h2>
              <p>${t("shop.subtitle")}</p>
            </div>
            <button class="button button--ghost button--small" data-action="close-shop">${t("buttons.close")}</button>
          </div>
          <div class="shop-grid">${e}</div>
        </div>
      </div>

      <div class="screen ${this.state.showSettings?"":"hidden"}">
        <div class="panel panel--dark panel--settings">
          <div class="panel__header">
            <div>
              <div class="panel__eyebrow">${t("settings.title")}</div>
              <h2>${t("gameTitle")}</h2>
            </div>
            <button class="button button--ghost button--small" data-action="close-settings">${t("buttons.close")}</button>
          </div>
          <label class="field">
            <span>${t("settings.language")}</span>
            <select data-setting="language" value="${this.state.getLanguage()}">
              <option value="en" ${this.state.getLanguage()==="en"?"selected":""}>${t("settings.english")}</option>
              <option value="ja" ${this.state.getLanguage()==="ja"?"selected":""}>${t("settings.japanese")}</option>
            </select>
          </label>
          ${this.touchDevice?`
                <div class="settings-group">
                  <div class="settings-group__title">${t("settings.mobileTitle")}</div>
                  <label class="field">
                    <span>${t("settings.touchSensitivity")}</span>
                    <input
                      data-setting="touch-sensitivity"
                      type="range"
                      min="0.5"
                      max="1.8"
                      step="0.05"
                      value="${this.state.getTouchSensitivity()}"
                    />
                    <div class="field__hint">${this.state.getTouchSensitivity().toFixed(2)}x</div>
                  </label>
                  <label class="toggle-field">
                    <span>${t("settings.leftHanded")}</span>
                    <input
                      data-setting="left-handed"
                      type="checkbox"
                      ${this.state.isLeftHanded()?"checked":""}
                    />
                  </label>
                  <label class="toggle-field">
                    <span>${t("settings.autoSprint")}</span>
                    <input
                      data-setting="auto-sprint"
                      type="checkbox"
                      ${this.state.isAutoSprintEnabled()?"checked":""}
                    />
                  </label>
                  <label class="toggle-field">
                    <span>${t("settings.haptics")}</span>
                    <input
                      data-setting="haptics"
                      type="checkbox"
                      ${this.state.isHapticsEnabled()?"checked":""}
                    />
                  </label>
                </div>
              `:""}
        </div>
      </div>

      <div class="screen ${this.state.phase==="win"?"":"hidden"}">
        <div class="panel panel--dark">
          <div class="panel__eyebrow">${t("win.title")}</div>
          <h2>${t("gameTitle")}</h2>
          <p>${t("win.body")}</p>
          <div class="panel__actions panel__actions--stack">
            <button class="button button--primary" data-action="restart">${t("buttons.restart")}</button>
          </div>
        </div>
      </div>
    `}renderResourcePill(t,e="default"){const n=this.state.inventory.currencies[t];return`
      <div class="resource-pill resource-pill--${t} resource-pill--${e}">
        <span class="resource-pill__icon">${vl(t)}</span>
        <span class="resource-pill__amount">${n}</span>
      </div>
    `}renderTutorialRow(t,e){return`
      <div class="tutorial-card__row">
        <span class="tutorial-card__key">${t}</span>
        <span class="tutorial-card__text">${e}</span>
      </div>
    `}renderHotbarSlot(t,e){const n=e===this.state.inventory.currentHotbarIndex,i=this.getTier(t),r=this.getItemName(t),o=this.getItemCount(t),a=o?`<span class="hotbar-slot__count">${o}</span>`:"";return`
      <button class="hotbar-slot ${n?"hotbar-slot--active":""}" data-hotbar-index="${e}">
        <span class="hotbar-slot__index">${e+1}</span>
        <span class="hotbar-slot__icon">${ks(t,{tier:i,locked:t==="bow"&&!this.state.inventory.hasBow})}</span>
        <span class="hotbar-slot__label" style="color:${i?Yo[i]:"#d8dbff"}">${r}</span>
        ${a}
      </button>
    `}renderShopCard(t){const e=this.state.localizer.t.bind(this.state.localizer),n=this.state.canAfford(t),i=this.getShopEntryIcon(t);return`
      <div class="shop-card ${n?"":"shop-card--locked"}">
        <div class="shop-card__icon">${i}</div>
        <div class="shop-card__title">${e(t.itemKey)}</div>
        <div class="shop-card__desc">${e(t.descriptionKey)}</div>
        <div class="shop-card__footer">
          <div class="shop-card__price">
            ${vl(t.price.currency)}
            <span>${t.price.amount}</span>
          </div>
          <button class="button button--primary button--small" data-buy="${t.id}">
            ${e("buttons.buy")}
          </button>
        </div>
      </div>
    `}getShopEntryIcon(t){if(t.action.type==="unlock")return ks(t.action.item);if(t.action.type==="upgrade")return ks(t.action.item,{tier:t.action.tier});const e=t.action.item==="purpleDotters"?"purpleDotter":t.action.item==="jumpPads"?"jumpPad":t.action.item;return ks(e)}getTier(t){if(t==="sword"||t==="pickaxe"||t==="shovel")return this.state.inventory.toolTiers[t]}getItemName(t){const e=this.state.localizer.t.bind(this.state.localizer);if(t==="bow"&&!this.state.inventory.hasBow)return e("inventory.bowLocked");if(t==="sword"||t==="pickaxe"||t==="shovel"){const n=this.state.inventory.toolTiers[t];return`${e(`tiers.${n}`)} ${e(`items.${t}`)}`}return e(`items.${t}`)}getItemCount(t){return t==="blocks"?`${this.state.inventory.blocks}`:t==="purpleDotter"?`${this.state.inventory.purpleDotters}`:t==="jumpPad"?`${this.state.inventory.jumpPads}`:t==="bow"?`${this.state.inventory.arrows}`:""}escapeAttribute(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}getInteractionPromptKey(){var n;const t=((n=this.state.interactionPrompt)==null?void 0:n.key)??null;return t?this.touchDevice?{"hud.shopPrompt":"mobile.shopPrompt","hud.chestPrompt":"mobile.chestPrompt","hud.generatorPrompt":"mobile.generatorPrompt","hud.machinePrompt":"mobile.machinePrompt"}[t]??t:t:null}syncMobilePrompt(){if(!this.touchDevice||this.state.phase!=="playing"){this.mobilePromptKey=null,this.mobilePromptVisible=!1,this.mobilePromptTimer!==null&&(window.clearTimeout(this.mobilePromptTimer),this.mobilePromptTimer=null);return}const t=this.getInteractionPromptKey();if(!t){this.mobilePromptKey=null,this.mobilePromptVisible=!1,this.mobilePromptTimer!==null&&(window.clearTimeout(this.mobilePromptTimer),this.mobilePromptTimer=null);return}t!==this.mobilePromptKey&&(this.mobilePromptKey=t,this.mobilePromptVisible=!0,this.mobilePromptTimer!==null&&window.clearTimeout(this.mobilePromptTimer),this.mobilePromptTimer=window.setTimeout(()=>{this.mobilePromptTimer=null,this.mobilePromptVisible=!1,this.render()},2400))}}const Rn=(s,t,e)=>`${s},${t},${e}`,yl=(s,t)=>`${s},${t}`,xl=new T(Ft.radius,Ft.height*.5,Ft.radius);function Ml(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967295)}function fn(s){return Math.floor(s+.5)}class Tg{constructor(t){F(this,"blockGroup",new le);F(this,"propGroup",new le);F(this,"interactableGroup",new le);F(this,"crystalGroup",new le);F(this,"water",new xt);F(this,"blocks",new Map);F(this,"blockMaterials",new Map);F(this,"blockMeshes",new Map);F(this,"surfaceHeights",new Map);F(this,"crystals",[]);F(this,"generators",[]);F(this,"chests",[]);F(this,"jumpPads",[]);F(this,"merchant",null);F(this,"machine",null);F(this,"spawnPoint",new T(0,8,0));F(this,"blocksDirty",!1);F(this,"sharedBoxGeometry",new xe(1,1,1));F(this,"tempVector",new T);this.scene=t,this.scene.add(this.blockGroup),this.scene.add(this.propGroup),this.scene.add(this.interactableGroup),this.scene.add(this.crystalGroup);const e=new os(220,220,1,1),n=new Lt({color:2307422,transparent:!0,opacity:.92,roughness:.3,metalness:.08});this.water.geometry=e,this.water.material=n,this.water.rotation.x=-Math.PI/2,this.water.position.y=mt.oceanY,this.scene.add(this.water);for(const[i,r]of Object.entries($i))this.blockMaterials.set(i,new Lt({color:r.color,flatShading:!0,roughness:.95,metalness:i.includes("Ore")?.12:.02}))}generate(t=Math.floor(Math.random()*1e6)){this.clearWorld(),[{id:"center",kind:"center",center:new T(mt.positions.center.x,0,mt.positions.center.z),sizeX:mt.centerIslandSize.x,sizeZ:mt.centerIslandSize.z},{id:"north",kind:"outer",center:new T(mt.positions.north.x,0,mt.positions.north.z),sizeX:mt.outerIslandSize.x,sizeZ:mt.outerIslandSize.z},{id:"east",kind:"outer",center:new T(mt.positions.east.x,0,mt.positions.east.z),sizeX:mt.outerIslandSize.x,sizeZ:mt.outerIslandSize.z},{id:"south",kind:"outer",center:new T(mt.positions.south.x,0,mt.positions.south.z),sizeX:mt.outerIslandSize.x,sizeZ:mt.outerIslandSize.z},{id:"west",kind:"outer",center:new T(mt.positions.west.x,0,mt.positions.west.z),sizeX:mt.outerIslandSize.x,sizeZ:mt.outerIslandSize.z}].forEach((n,i)=>{this.generateIsland(n,t+i*131)}),this.generateBridge("north"),this.generateBridge("east"),this.generateBridge("south"),this.generateBridge("west"),this.placeMerchant(),this.placeMachine(),this.placeOuterIslandObjects(),this.placeTrees(),this.placeChests(t+991),this.rebuildBlockMeshes(),this.spawnPoint=new T(0,this.getSurfaceHeight(0,1)+Ft.eyeHeight+1.1,1)}update(t,e){this.blocksDirty&&(this.rebuildBlockMeshes(),this.blocksDirty=!1);const n=performance.now()*.001;for(const i of this.crystals){i.root.rotation.y+=t*.8;const r=1+Math.sin(n*3+i.root.position.x)*.04;i.core.scale.setScalar(r)}for(const i of[...this.generators,...this.machine?[this.machine]:[]])i.root.rotation.y+=t*.4,e&&this.tickNode(i,t),this.updateNodeVisuals(i,n);for(const i of this.jumpPads)i.cooldown=Math.max(0,i.cooldown-t),i.root.position.y=i.baseY+Math.sin(n*5+i.root.position.x)*.05}getSpawnPoint(){return this.spawnPoint.clone()}intersectsAabb(t,e){const n=fn(t.x),i=fn(e.x),r=fn(t.y),o=fn(e.y),a=fn(t.z),l=fn(e.z);for(let c=n;c<=i;c+=1)for(let h=r;h<=o;h+=1)for(let d=a;d<=l;d+=1){const f=this.blocks.get(Rn(c,h,d));if(f&&$i[f.type].solid)return!0}return!1}pointInsideSolid(t){const e=fn(t.x),n=fn(t.y),i=fn(t.z);return this.blocks.has(Rn(e,n,i))}canPlaceAt(t,e,n){if(this.blocks.has(Rn(t,e,n)))return!1;const i=new T(t,e,n),r=i.clone().sub(xl),o=i.clone().add(xl);return!this.intersectsAabb(r,o)}placeBlock(t,e,n,i){const r=Rn(t,e,n);return this.blocks.has(r)?!1:(this.blocks.set(r,{type:i,x:t,y:e,z:n,hp:$i[i].hp}),this.blocksDirty=!0,!0)}placeJumpPad(t,e,n){if(this.jumpPads.some(a=>a.root.position.distanceToSquared(new T(t,e,n))<.1))return!1;const i=new le,r=new xt(new Pe(.65,.8,.2,18),new Lt({color:16747586,metalness:.18,roughness:.45})),o=new xt(new is(.45,.08,8,16),new Lt({color:16773811,emissive:16753471,emissiveIntensity:.35}));return o.rotation.x=Math.PI/2,o.position.y=.18,i.add(r,o),i.position.set(t,e,n),this.interactableGroup.add(i),this.jumpPads.push({id:`jump-pad-${this.jumpPads.length+1}`,root:i,baseY:e,cooldown:0}),!0}checkJumpPad(t){for(const e of this.jumpPads){const n=Math.hypot(t.x-e.root.position.x,t.z-e.root.position.z),i=t.y-Ft.eyeHeight;if(n<.85&&i>=e.root.position.y-.2&&i<=e.root.position.y+1.1&&e.cooldown<=0)return e.cooldown=.55,!0}return!1}raycastBlock(t,e){var c;const n=[...this.blockMeshes.values()],r=t.intersectObjects(n,!1).filter(h=>h.distance<=e)[0];if(!r||r.instanceId===void 0)return null;const o=r.object.userData.instanceKeys;if(!o)return null;const a=o[r.instanceId],l=this.blocks.get(a);return l?{key:a,block:l,point:r.point.clone(),normal:((c=r.face)==null?void 0:c.normal.clone())??new T(0,1,0),distance:r.distance}:null}raycastCrystal(t,e){const i=t.intersectObjects(this.crystals.map(o=>o.core),!1).filter(o=>o.distance<=e)[0];if(!i)return null;const r=i.object.userData.crystalId??"";return r?{id:r,distance:i.distance}:null}getCrystalNear(t,e){let n=null,i=1/0;for(const r of this.crystals){const o=r.root.position.distanceTo(t);o<=e&&o<i&&(n=r,i=o)}return n?{id:n.id}:null}damageCrystal(t,e){const n=this.crystals.find(i=>i.id===t);return n?(n.hp=Math.max(0,n.hp-e),n.hp===0?(this.removeCrystalEntity(n),{destroyed:!0,hp:0}):{destroyed:!1,hp:n.hp}):null}syncCrystalState(t,e){const n=this.crystals.find(i=>i.id===t);return n?(n.hp=Math.max(0,e),n.hp===0&&this.removeCrystalEntity(n),!0):!1}applyCrystalSnapshot(t,e){const n=new Set(e);for(let i=1;i<=mt.crystalsPerGame;i+=1){const r=`crystal-${i}`,o=n.has(r)?0:t[r]??mt.crystalHp;this.syncCrystalState(r,o)}}damageBlock(t,e){const n=this.blocks.get(t);return n?(n.hp-=e,n.hp>0?{destroyed:!1,block:n}:(this.blocks.delete(t),this.blocksDirty=!0,{destroyed:!0,block:n})):{destroyed:!1,block:null}}removeBlockByKey(t){return this.blocks.has(t)?(this.blocks.delete(t),this.blocksDirty=!0,!0):!1}applyBlockOverride(t){if(t.type===null)return this.removeBlockByKey(t.key);const e=this.blocks.get(t.key);return e&&e.type===t.type?!1:(this.blocks.set(t.key,{type:t.type,x:t.x,y:t.y,z:t.z,hp:$i[t.type].hp}),this.blocksDirty=!0,!0)}applyMultiplayerWorldState(t,e){for(const n of t)this.applyBlockOverride(n);for(const n of e)this.placeJumpPad(n.x,n.y,n.z)}getInteractionPrompt(t){const e=[];if(this.merchant){const n=this.merchant.root.position.distanceTo(t);n<=Ft.interactionRange&&e.push({type:"merchant",id:this.merchant.id,key:"hud.shopPrompt",distance:n})}for(const n of this.generators){const i=n.root.position.distanceTo(t);i<=Ft.interactionRange&&e.push({type:"generator",id:n.id,key:"hud.generatorPrompt",distance:i})}if(this.machine){const n=this.machine.root.position.distanceTo(t);n<=Ft.interactionRange&&e.push({type:"machine",id:this.machine.id,key:"hud.machinePrompt",distance:n})}for(const n of this.chests){if(n.opened)continue;const i=n.root.position.distanceTo(t);i<=Ft.interactionRange&&e.push({type:"chest",id:n.id,key:"hud.chestPrompt",distance:i})}return e.sort((n,i)=>n.distance-i.distance),e[0]??null}collectGenerator(t){const e=this.generators.find(i=>i.id===t);if(!e)return null;const n={copper:e.resources.copper,gold:e.resources.gold};return e.resources.copper=0,e.resources.gold=0,n}collectMachine(t){if(!this.machine||this.machine.id!==t)return null;const e={gold:this.machine.resources.gold,diamond:this.machine.resources.diamond};return this.machine.resources.gold=0,this.machine.resources.diamond=0,e}openChest(t){const e=this.chests.find(n=>n.id===t&&!n.opened);return e?(e.opened=!0,e.root.visible=!1,{...e.loot}):null}findSafeTeleport(t){const e=t.clone();for(let n=0;n<6;n+=1){const i=e.clone().add(new T(0,Ft.eyeHeight,0)),r=i.clone().add(new T(-.36,-1.62,-.36)),o=i.clone().add(new T(Ft.radius,Ft.height-Ft.eyeHeight,Ft.radius));if(!this.intersectsAabb(r,o))return i;e.y+=1}return t.clone().add(new T(0,Ft.eyeHeight+1,0))}clearWorld(){this.blocks.clear(),this.surfaceHeights.clear(),this.crystals.splice(0,this.crystals.length),this.generators.splice(0,this.generators.length),this.chests.splice(0,this.chests.length),this.jumpPads.splice(0,this.jumpPads.length),this.merchant=null,this.machine=null,this.blocksDirty=!1,this.blockMeshes.forEach(t=>{this.blockGroup.remove(t)}),this.blockMeshes.clear(),this.propGroup.clear(),this.interactableGroup.clear(),this.crystalGroup.clear()}removeCrystalEntity(t){this.crystalGroup.remove(t.root);const e=this.crystals.indexOf(t);e>=0&&this.crystals.splice(e,1)}generateIsland(t,e){const n=Ml(e),i=t.sizeX/2,r=t.sizeZ/2;for(let o=Math.floor(t.center.x-i);o<Math.ceil(t.center.x+i);o+=1)for(let a=Math.floor(t.center.z-r);a<Math.ceil(t.center.z+r);a+=1){const l=Math.abs((o+.5-t.center.x)/i),c=Math.abs((a+.5-t.center.z)/r),h=Math.max(l,c),d=Math.hypot(l,c)*.8,f=1-Math.max(h,d);if(f<=0)continue;const p=Math.sin((o+e*.01)*.65)*.35+Math.cos((a-e*.02)*.55)*.3+n()*.5;if(f<.12&&n()<.42)continue;const g=t.kind==="center"?1:0,_=mt.surfaceY+g+Math.max(0,Math.floor(f*4+p)),m=10+Math.floor(n()*3)+(t.kind==="center"?1:0),u=_-m;this.setSurfaceHeight(o,a,_);for(let b=u;b<=_;b+=1){const E=_-b;let x;E===0?x=f<.25?"sand":"grass":E<=2?x=f<.3?"sand":"dirt":x=this.pickUndergroundBlock(t.kind,E,n),this.setBlockData(o,b,a,x)}}}pickUndergroundBlock(t,e,n){return e>3&&n()<.055?"copperOre":e>5&&n()<.03?"goldOre":e>6&&n()<.022?"emeraldOre":t==="center"&&e>7&&n()<.028?"diamondOre":"stone"}generateBridge(t){const e=mt.surfaceY+1,n=mt.centerIslandSize.x/2,i=mt.outerIslandSize.x/2;if(t==="north"||t==="south"){const f=-Math.floor(mt.bridgeWidth/2),p=f+mt.bridgeWidth-1,g=mt.positions[t],_=t==="north"?Math.floor(-n)-1:Math.ceil(n)+1,m=t==="north"?Math.ceil(g.z+i)-1:Math.floor(g.z-i)+1,[u,b]=_<m?[_,m]:[m,_];for(let E=u;E<=b;E+=1)for(let x=f;x<=p;x+=1)this.setBlockData(x,e,E,"bridge");return}const r=-Math.floor(mt.bridgeWidth/2),o=r+mt.bridgeWidth-1,a=mt.positions[t],l=t==="west"?Math.floor(-n)-1:Math.ceil(n)+1,c=t==="west"?Math.ceil(a.x+i)-1:Math.floor(a.x-i)+1,[h,d]=l<c?[l,c]:[c,l];for(let f=h;f<=d;f+=1)for(let p=r;p<=o;p+=1)this.setBlockData(f,e,p,"bridge")}placeMerchant(){const t=new le,e=new xt(new er(.45,1.1,4,12),new Lt({color:16766627,flatShading:!0,roughness:.68})),n=new xt(new Kn(.55,.7,10),new Lt({color:1728358,flatShading:!0,roughness:.7}));n.position.y=1.3,t.add(e,n),t.position.set(2,this.getSurfaceHeight(2,2)+1,2),this.interactableGroup.add(t),this.merchant={id:"merchant",root:t}}placeMachine(){const t=new le,e=new xt(new Pe(.9,1.2,1.1,14),new Lt({color:3490381,flatShading:!0,metalness:.35,roughness:.5})),n=new xt(new Qs(.6,0),new Lt({color:5892351,flatShading:!0,emissive:2129826,emissiveIntensity:.6}));n.position.y=1.1,t.add(e,n),t.position.set(-2.4,this.getSurfaceHeight(-2,-2)+.5,-2.6);const i=[0,1,2].map(()=>{const r=new xt(new Qn(.18,12,12),new Lt({color:14136649,flatShading:!0,emissive:9334548,emissiveIntensity:.45}));return t.add(r),r});this.interactableGroup.add(t),this.machine={id:"machine",type:"machine",root:t,orbs:i,resources:{copper:0,gold:1,diamond:1},timers:{copper:0,gold:0,diamond:0}}}placeOuterIslandObjects(){[{islandId:"north",generator:new T(0,0,-25),crystal:new T(0,0,-34)},{islandId:"east",generator:new T(25,0,0),crystal:new T(34,0,0)},{islandId:"south",generator:new T(0,0,25),crystal:new T(0,0,34)},{islandId:"west",generator:new T(-25,0,0),crystal:new T(-34,0,0)}].forEach((e,n)=>{const i=new le,r=new xt(new Pe(.55,.75,1.1,12),new Lt({color:7032109,flatShading:!0,roughness:.7})),o=new xt(new xe(.25,.9,.25),new Lt({color:15708509,flatShading:!0,emissive:7292434,emissiveIntensity:.25}));o.position.y=1,i.add(r,o),i.position.copy(e.generator),i.position.y=this.getSurfaceHeight(e.generator.x,e.generator.z)+.5;const a=[0,1,2].map(()=>{const d=new xt(new Qn(.16,10,10),new Lt({color:12217150,flatShading:!0,emissive:6370074,emissiveIntensity:.4}));return i.add(d),d});this.interactableGroup.add(i),this.generators.push({id:`generator-${e.islandId}`,type:"generator",root:i,orbs:a,resources:{copper:2,gold:0,diamond:0},timers:{copper:0,gold:0,diamond:0}});const l=new le,c=new xt(new Pe(.9,1.15,1.4,12),new Lt({color:4870015,flatShading:!0,roughness:.55})),h=new xt(new Qs(1.1,0),new Lt({color:10831359,flatShading:!0,emissive:5775488,emissiveIntensity:.8,metalness:.1,roughness:.2}));h.position.y=1.8,h.userData.crystalId=`crystal-${n+1}`,l.add(c,h),l.position.copy(e.crystal),l.position.y=this.getSurfaceHeight(e.crystal.x,e.crystal.z)+.7,this.crystalGroup.add(l),this.crystals.push({id:`crystal-${n+1}`,islandId:e.islandId,hp:mt.crystalHp,root:l,core:h})})}placeTrees(){const t=[[-4,-4,1],[4,-3,1.1],[5,4,.95],[-3,5,.9],[0,-34,1],[5,-32,.95],[34,0,1],[32,5,1.1],[0,34,.92],[-5,32,1.05],[-34,0,.94],[-32,-5,1.08]];for(const[e,n,i]of t){const r=this.getSurfaceHeight(e,n);r<=mt.oceanY||this.propGroup.add(this.createTree(e,r+.5,n,i))}}createTree(t,e,n,i){const r=new le,o=2.2*i,a=new xt(new xe(.55*i,o,.55*i),new Lt({color:6043423,flatShading:!0,roughness:.9}));a.position.y=o*.5;const l=new Lt({color:2379046,flatShading:!0,roughness:.88}),c=new xt(new xe(1.9*i,.56*i,1.2*i),l);c.position.set(0,o+.35*i,0);const h=new xt(new xe(1.1*i,.48*i,1.9*i),l);h.position.set(.12*i,o+.6*i,-.05*i);const d=new xt(new xe(.8*i,.42*i,.8*i),l);return d.position.set(-.14*i,o+.98*i,.12*i),r.add(a,c,h,d),r.position.set(t,e,n),r.rotation.y=(t*.13+n*.09)%Math.PI,r}placeChests(t){const e=Ml(t),n=[{center:new T(0,0,0),sizeX:mt.centerIslandSize.x,sizeZ:mt.centerIslandSize.z,count:1},{center:new T(mt.positions.north.x,0,mt.positions.north.z),sizeX:mt.outerIslandSize.x,sizeZ:mt.outerIslandSize.z,count:2},{center:new T(mt.positions.east.x,0,mt.positions.east.z),sizeX:mt.outerIslandSize.x,sizeZ:mt.outerIslandSize.z,count:2},{center:new T(mt.positions.south.x,0,mt.positions.south.z),sizeX:mt.outerIslandSize.x,sizeZ:mt.outerIslandSize.z,count:2},{center:new T(mt.positions.west.x,0,mt.positions.west.z),sizeX:mt.outerIslandSize.x,sizeZ:mt.outerIslandSize.z,count:2}];for(const i of n){let r=0,o=0;for(;r<i.count&&o<80;){o+=1;const a=Math.round(i.center.x+(e()-.5)*(i.sizeX*.65)),l=Math.round(i.center.z+(e()-.5)*(i.sizeZ*.65)),c=this.getSurfaceHeight(a,l);if(c<=0)continue;const h=mt.chestDepthMin+Math.floor(e()*(mt.chestDepthMax-mt.chestDepthMin+1)),d=c-h,f=Rn(a,d,l);if(!this.blocks.has(f))continue;this.blocks.delete(f),this.blocks.delete(Rn(a,d+1,l)),this.blocksDirty=!0;const p=new le,g=new xt(new xe(.9,.6,.7),new Lt({color:9394732,roughness:.8})),_=new xt(new xe(.95,.25,.75),new Lt({color:13143124,roughness:.72}));_.position.y=.38,p.add(g,_),p.position.set(a,d,l),this.interactableGroup.add(p),this.chests.push({id:`chest-${this.chests.length+1}`,root:p,opened:!1,loot:{emerald:4+Math.floor(e()*4),gold:1+Math.floor(e()*3),arrows:4+Math.floor(e()*7)}}),r+=1}}}tickNode(t,e){if(t.type==="generator"){for(t.timers.copper+=e,t.timers.gold+=e;t.timers.copper>=wn.islandCopper;)t.resources.copper+=1,t.timers.copper-=wn.islandCopper;for(;t.timers.gold>=wn.islandGold;)t.resources.gold+=1,t.timers.gold-=wn.islandGold;return}for(t.timers.gold+=e,t.timers.diamond+=e;t.timers.gold>=wn.middleGold;)t.resources.gold+=1,t.timers.gold-=wn.middleGold;for(;t.timers.diamond>=wn.middleDiamond;)t.resources.diamond+=1,t.timers.diamond-=wn.middleDiamond}updateNodeVisuals(t,e){const n=t.type==="generator"?Math.min(3,t.resources.copper+t.resources.gold):Math.min(3,t.resources.gold+t.resources.diamond);t.orbs.forEach((i,r)=>{i.visible=r<n,i.position.set(Math.cos(e*1.8+r*2.1)*.65,1.15+Math.sin(e*2.4+r*1.7)*.16,Math.sin(e*1.8+r*2.1)*.65);const o=i.material;t.type==="machine"&&r===2&&t.resources.diamond>0?(o.color.setHex(7792639),o.emissive.setHex(1929100)):t.type==="machine"||r===2&&t.resources.gold>0?(o.color.setHex(14136649),o.emissive.setHex(9334548)):(o.color.setHex(12217150),o.emissive.setHex(6370074))})}setBlockData(t,e,n,i){const r=Rn(t,e,n);this.blocks.set(r,{type:i,x:t,y:e,z:n,hp:$i[i].hp})}setSurfaceHeight(t,e,n){this.surfaceHeights.set(yl(t,e),n)}getSurfaceHeight(t,e){return this.surfaceHeights.get(yl(t,e))??mt.oceanY}rebuildBlockMeshes(){this.blockMeshes.forEach(e=>{this.blockGroup.remove(e)}),this.blockMeshes.clear();const t=new Map;for(const e of this.blocks.values())t.has(e.type)||t.set(e.type,[]),t.get(e.type).push(e);for(const[e,n]of t.entries()){const i=this.blockMaterials.get(e);if(!i||n.length===0)continue;const r=new Bh(this.sharedBoxGeometry,i,n.length);r.instanceMatrix.setUsage(ih);const o=[];n.forEach((a,l)=>{this.tempVector.set(a.x,a.y,a.z);const c=new Zt().setPosition(this.tempVector);r.setMatrixAt(l,c),o.push(Rn(a.x,a.y,a.z))}),r.userData.instanceKeys=o,r.castShadow=!1,r.receiveShadow=!0,this.blockMeshes.set(e,r),this.blockGroup.add(r)}}}class Ag{constructor(t){F(this,"actors",new Map);this.scene=t}syncPlayers(t,e){const n=new Set;for(const i of t){if(i.id===e)continue;n.add(i.id);const r=this.actors.get(i.id)??this.createActor(i.id,i.name);r.targetPosition.set(i.position.x,i.position.y-Ft.eyeHeight,i.position.z),r.targetYaw=i.yaw}for(const[i]of this.actors)n.has(i)||this.removeActor(i)}update(t){const e=1-Math.exp(-10*t);for(const n of this.actors.values())n.group.position.lerp(n.targetPosition,e),n.group.rotation.y+=(n.targetYaw-n.group.rotation.y)*e}clear(){for(const[t]of this.actors)this.removeActor(t)}createActor(t,e){const n=new le,i=new xt(new er(.32,.82,5,10),new Lt({color:8087551,emissive:2363483,emissiveIntensity:.22,roughness:.7,metalness:.1}));i.position.y=Ft.height*.52;const r=new xt(new xe(.26,.12,.05),new Lt({color:9105663,emissive:2388129,emissiveIntensity:.45}));r.position.set(0,Ft.height*.84,.3);const o=new xt(new Kn(.12,.26,4),new Lt({color:16758342,emissive:8798208,emissiveIntensity:.18}));o.position.set(0,Ft.height*.5,.46),o.rotation.x=Math.PI/2;const a=new Nh(new ql({map:this.createNameTexture(e),transparent:!0,depthWrite:!1}));a.position.set(0,Ft.height+.9,0),a.scale.set(2.2,.55,1),n.add(i,r,o,a),this.scene.add(n);const l={group:n,label:a,targetPosition:n.position.clone(),targetYaw:0};return this.actors.set(t,l),l}removeActor(t){const e=this.actors.get(t);e&&(this.scene.remove(e.group),e.group.traverse(n=>{const i=n;i.geometry&&i.geometry.dispose();const r=i.material;Array.isArray(r)?r.forEach(o=>o.dispose()):r&&r.dispose()}),e.label.material.dispose(),this.actors.delete(t))}createNameTexture(t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");if(!n)throw new Error("Unable to create remote player label context.");n.clearRect(0,0,e.width,e.height),n.fillStyle="rgba(12, 15, 26, 0.88)",n.strokeStyle="rgba(146, 115, 255, 0.9)",n.lineWidth=4,this.roundRect(n,6,6,244,52,18),n.fill(),n.stroke(),n.font="700 26px Rajdhani, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#f4f6ff",n.fillText(t,128,33);const i=new Vh(e);return i.needsUpdate=!0,i}roundRect(t,e,n,i,r,o){t.beginPath(),t.moveTo(e+o,n),t.lineTo(e+i-o,n),t.quadraticCurveTo(e+i,n,e+i,n+o),t.lineTo(e+i,n+r-o),t.quadraticCurveTo(e+i,n+r,e+i-o,n+r),t.lineTo(e+o,n+r),t.quadraticCurveTo(e,n+r,e,n+r-o),t.lineTo(e,n+o),t.quadraticCurveTo(e,n,e+o,n),t.closePath()}}class Rg{constructor(t){F(this,"scene",new Lh);F(this,"renderer",new Jm({antialias:!0}));F(this,"camera",new Xe(75,1,.1,300));F(this,"world",new Tg(this.scene));F(this,"state",new gg);F(this,"input",new Mg);F(this,"audio",new xg);F(this,"multiplayer",new eg);F(this,"player");F(this,"ui");F(this,"touchControls");F(this,"viewModel");F(this,"remotePlayers");F(this,"clock",new uu);F(this,"raycaster",new du);F(this,"projectiles",[]);F(this,"cooldowns",new Map);F(this,"ignoreNextUnlockPause",!1);F(this,"presenceTimer",0);F(this,"crystalHpState",{});F(this,"animate",()=>{const t=Math.min(this.clock.getDelta(),.05),e=this.state.phase==="playing";e&&(this.player.update(t,this.input),this.player.consumeJumpedThisFrame()&&this.audio.playCue("jump"),this.player.consumeLandedThisFrame()&&this.audio.playCue("land"),this.input.consumeInteract()&&this.handleInteraction(),this.input.consumeTutorialDismissed()&&this.state.showTutorial&&this.state.hideTutorial(),this.world.checkJumpPad(this.player.getPosition())&&(this.audio.playCue("jumpPad"),this.player.addVerticalVelocity(Qm.launchVelocity)),this.state.setInteractionPrompt(this.world.getInteractionPrompt(this.player.getPosition())),this.player.getPosition().y<mt.oceanY+1.2&&(this.audio.playCue("hurt"),this.state.damagePlayer(14),this.player.setPosition(this.world.getSpawnPoint())),this.syncMultiplayerPresence(t)),this.world.update(t,e),this.remotePlayers.update(t),this.audio.update(t,{phase:this.state.phase,grounded:this.player.isGrounded(),horizontalSpeed:this.player.getHorizontalVelocity().length()}),this.viewModel.update(t,this.player.getHorizontalVelocity().length(),e),this.updateProjectiles(t),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate)});F(this,"onMouseDown",t=>{t.button===0&&(this.state.phase!=="playing"||!this.player.isLocked()||(this.audio.activate(),t.preventDefault(),this.useCurrentItem()))});F(this,"onWheel",t=>{this.state.phase==="playing"&&(t.preventDefault(),this.state.cycleHotbar(t.deltaY>0?1:-1))});F(this,"onResize",()=>{this.renderer.setPixelRatio(this.getTargetPixelRatio()),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)});F(this,"onVisibilityChange",()=>{document.visibilityState==="hidden"&&this.state.phase==="playing"&&(this.player.isLocked()&&(this.ignoreNextUnlockPause=!0,this.player.unlock()),this.state.setPhase("paused"))});F(this,"onKeyDown",t=>{if(/^Digit[1-7]$/.test(t.code)&&this.state.phase==="playing"){this.state.setHotbarIndex(Number(t.code.replace("Digit",""))-1);return}t.code==="Escape"&&(this.state.phase==="shop"?this.closeShop():this.state.showSettings?this.toggleSettings(!1):this.state.phase==="paused"&&this.resumeGame())});this.mount=t,this.renderer.setPixelRatio(this.getTargetPixelRatio()),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!1,this.renderer.domElement.className="game-canvas",this.mount.appendChild(this.renderer.domElement),this.scene.background=new Ht(9882859),this.scene.fog=new Go(9882859,38,128);const e=new ou(15852799,2109516,1.2),n=new cu(16771251,1.55);n.position.set(12,26,18),this.scene.add(e,n),this.player=new ug(this.camera,this.renderer.domElement,this.world),this.scene.add(this.player.controls.getObject()),this.viewModel=new dg(this.camera,this.state),this.remotePlayers=new Ag(this.scene),this.ui=new wg(this.state,{onStart:()=>{this.audio.activate(),this.startOfflineGame()},onJoinPublic:()=>{this.audio.activate(),this.joinPublicServer()},onJoinServer:()=>{this.audio.activate(),this.joinServer(this.state.getServerAddress())},onResume:()=>{this.audio.activate(),this.resumeGame()},onRestart:()=>{this.audio.activate(),this.restartCurrentMode()},onToggleSettings:i=>this.toggleSettings(i),onBuy:i=>this.buyItem(i),onCloseShop:()=>this.closeShop(),onDismissTutorial:()=>this.state.hideTutorial(),onSelectHotbar:i=>this.state.setHotbarIndex(i),onSetLanguage:i=>this.state.setLanguage(i),onSetPlayerName:i=>this.state.setPlayerName(i),onSetServerAddress:i=>this.state.setServerAddress(i),onCopyInvite:()=>void this.copyInviteAddress(),onSetTouchSensitivity:i=>this.state.setTouchSensitivity(i),onSetLeftHanded:i=>this.state.setLeftHanded(i),onSetAutoSprint:i=>this.state.setAutoSprintEnabled(i),onSetHaptics:i=>this.state.setHapticsEnabled(i)}),this.touchControls=new Sg(this.state,this.input,{onUse:()=>{this.state.phase==="playing"&&this.useCurrentItem()},onInteract:()=>{this.state.phase==="playing"&&this.handleInteraction()},onPause:()=>this.handleTouchPause(),onToggleFullscreen:()=>void this.toggleFullscreen()}),this.bindEvents(),this.multiplayer.subscribeRoom(i=>this.applyMultiplayerRoomState(i)),this.multiplayer.subscribeError(i=>{this.state.setMultiplayerError(i),this.remotePlayers.clear(),this.state.setPhase("title"),this.player.isLocked()&&(this.ignoreNextUnlockPause=!0,this.player.unlock())}),this.world.generate(),this.player.setPosition(this.world.getSpawnPoint()),this.animate()}bindEvents(){window.addEventListener("resize",this.onResize),window.addEventListener("keydown",this.onKeyDown),document.addEventListener("visibilitychange",this.onVisibilityChange),window.addEventListener("wheel",this.onWheel,{passive:!1}),this.input.isTouchDevice()||window.addEventListener("mousedown",this.onMouseDown),this.player.controls.addEventListener("unlock",()=>{if(this.ignoreNextUnlockPause){this.ignoreNextUnlockPause=!1;return}this.state.phase==="playing"&&this.state.setPhase("paused")})}async startOfflineGame(){this.audio.activate(),await this.multiplayer.leave(),this.state.leaveMultiplayerSession(),this.state.resetRun(),this.prepareWorldForMatch(),this.state.startPlaying(),this.lockPlayerIfNeeded(),this.enterTouchFullscreen()}async restartCurrentMode(){if(this.state.isOnlineMatch()){await this.joinServer(this.state.multiplayer.roomId||this.state.getServerAddress());return}await this.startOfflineGame()}async joinPublicServer(){this.state.setServerAddress(Ie.publicServerAddress),await this.joinServer(Ie.publicServerAddress)}async joinServer(t){const e=t.trim()||Ie.publicServerAddress;this.state.setServerAddress(e),this.state.setMultiplayerConnecting(),this.audio.activate(),this.remotePlayers.clear();try{const{playerId:n,room:i}=await this.multiplayer.join(e,this.state.getPlayerName());this.state.resetRun(!0),this.prepareWorldForMatch(i.seed),this.state.setMultiplayerSession(n,i),this.state.startPlaying(),this.state.pushNotification("notifications.joinedServer",{address:i.roomId}),this.applyMultiplayerRoomState(i,!0),this.lockPlayerIfNeeded(),this.enterTouchFullscreen()}catch{this.state.setMultiplayerError("multiplayer.errors.connection")}}prepareWorldForMatch(t){this.disposeProjectiles(),this.cooldowns.clear(),this.presenceTimer=0,this.crystalHpState={},this.remotePlayers.clear(),this.world.generate(t),this.player.setPosition(this.world.getSpawnPoint()),this.viewModel.refresh()}lockPlayerIfNeeded(){this.input.isTouchDevice()||this.player.lock()}getTargetPixelRatio(){const t=this.input.isTouchDevice()?Oe.maxPixelRatio:2;return Math.min(window.devicePixelRatio,t)}async enterTouchFullscreen(){if(this.input.isTouchDevice()&&!(document.fullscreenElement||!document.fullscreenEnabled))try{await document.documentElement.requestFullscreen(),await this.lockLandscapeOrientation()}catch{}}async toggleFullscreen(){try{if(document.fullscreenElement){await document.exitFullscreen();return}document.fullscreenEnabled&&(await document.documentElement.requestFullscreen(),await this.lockLandscapeOrientation())}catch{}}async lockLandscapeOrientation(){const t=screen.orientation;if(t!=null&&t.lock)try{await t.lock("landscape")}catch{}}handleTouchPause(){if(this.state.phase==="shop"){this.closeShop();return}if(this.state.showSettings){this.toggleSettings(!1);return}if(this.state.phase==="playing"){this.state.setPhase("paused");return}this.state.phase==="paused"&&this.resumeGame()}async copyInviteAddress(){const t=this.state.multiplayer.roomId||this.state.getServerAddress();if(t)try{await navigator.clipboard.writeText(t),this.state.pushNotification("notifications.copiedInvite",{address:t})}catch{this.state.pushNotification("notifications.copiedInvite",{address:t})}}applyMultiplayerRoomState(t,e=!1){const n=this.state.phase,i=new Set(this.state.getDestroyedCrystalIds()),r={...this.crystalHpState};if(this.state.setMultiplayerPlayers(t.players),this.world.applyCrystalSnapshot(t.crystalHp,t.destroyedCrystals),this.world.applyMultiplayerWorldState(t.blockOverrides,t.jumpPads),this.remotePlayers.syncPlayers(t.players,this.multiplayer.getPlayerId()),this.crystalHpState={...t.crystalHp},e)this.state.syncDestroyedCrystals(t.destroyedCrystals);else{const o=t.destroyedCrystals.filter(a=>!i.has(a));for(const a of o)this.audio.playCue("crystalBreak"),this.state.addCurrency("emerald",3),this.state.collectCrystal(a);o.length===0&&Object.entries(t.crystalHp).some(([l,c])=>r[l]!==void 0&&c<r[l])&&this.audio.playCue("crystalHit")}this.state.phase==="win"&&n!=="win"&&(this.audio.playCue("win"),this.player.isLocked()&&(this.ignoreNextUnlockPause=!0,this.player.unlock()))}syncMultiplayerPresence(t){if(!this.state.isOnlineMatch()||(this.presenceTimer-=t,this.presenceTimer>0))return;this.presenceTimer=Ie.presenceInterval;const e=this.player.getDirection();this.multiplayer.sendPresence({position:{x:this.player.getPosition().x,y:this.player.getPosition().y,z:this.player.getPosition().z},yaw:Math.atan2(e.x,e.z),health:this.state.health,currentItem:this.state.getCurrentItem()})}resumeGame(){this.audio.activate(),this.state.setPhase("playing"),this.lockPlayerIfNeeded(),this.enterTouchFullscreen()}toggleSettings(t){t&&this.state.phase==="playing"&&this.player.isLocked()&&(this.ignoreNextUnlockPause=!0,this.player.unlock(),this.state.setPhase("paused")),this.state.setSettingsOpen(t)}openShop(){this.audio.activate(),this.audio.playCue("shopOpen"),this.state.setPhase("shop"),this.player.isLocked()&&(this.ignoreNextUnlockPause=!0,this.player.unlock())}closeShop(){this.state.setPhase("playing"),this.input.isTouchDevice()||this.player.lock()}buyItem(t){this.audio.activate();const e=oc.find(i=>i.id===t);if(!e)return;const n=this.state.tryPurchase(e);this.audio.playCue(n.success?"buy":"error")}updateProjectiles(t){for(let e=this.projectiles.length-1;e>=0;e-=1){const n=this.projectiles[e];if(n.ttl-=t,n.velocity.y-=Ft.gravity*n.gravityScale*t,n.mesh.position.addScaledVector(n.velocity,t),n.type==="arrow"){const r=n.velocity.clone().normalize();n.mesh.quaternion.setFromUnitVectors(new T(0,1,0),r)}const i=n.type==="arrow"?this.world.getCrystalNear(n.mesh.position,1.2):null;if(i){this.applyCrystalDamage(i.id,Os.damage),this.removeProjectile(e);continue}if(n.ttl<=0||this.world.pointInsideSolid(n.mesh.position)||n.mesh.position.y<-8){if(n.type==="dotter"){this.audio.playCue("teleport");const r=this.world.findSafeTeleport(n.mesh.position);this.player.setPosition(r)}this.removeProjectile(e)}}}removeProjectile(t){const[e]=this.projectiles.splice(t,1);e&&(this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose())}disposeProjectiles(){for(let t=this.projectiles.length-1;t>=0;t-=1)this.removeProjectile(t)}handleInteraction(){this.audio.activate();const t=this.world.getInteractionPrompt(this.player.getPosition());if(t){if(t.type==="merchant"){this.openShop();return}if(t.type==="generator"){const e=this.world.collectGenerator(t.id);if(!e||e.copper<=0&&e.gold<=0)return;this.audio.playCue("collect"),this.state.addCurrency("copper",e.copper),this.state.addCurrency("gold",e.gold),this.state.pushNotification("notifications.collectedGenerator",e);return}if(t.type==="machine"){const e=this.world.collectMachine(t.id);if(!e||e.gold<=0&&e.diamond<=0)return;this.audio.playCue("collect"),this.state.addCurrency("gold",e.gold),this.state.addCurrency("diamond",e.diamond),this.state.pushNotification("notifications.collectedMachine",e);return}if(t.type==="chest"){const e=this.world.openChest(t.id);if(!e)return;this.audio.playCue("interact"),this.audio.playCue("collect"),this.state.addCurrency("emerald",e.emerald),this.state.addCurrency("gold",e.gold),this.state.addArrows(e.arrows),this.state.pushNotification("notifications.chestOpened",e)}}}useCurrentItem(){this.viewModel.triggerUse();const t=this.state.getCurrentItem(),e=performance.now()*.001;if(!((this.cooldowns.get(t)??0)>e)){if(t==="sword"||t==="pickaxe"||t==="shovel"){const i=this.state.getToolTier(t),r=Zm[t][i];this.cooldowns.set(t,e+r.cooldown),this.audio.playCue("swing"),this.handleMeleeTool(t,r.damage,r.blockDamage,r.range);return}if(t==="bow"){if(!this.state.inventory.hasBow||!this.state.useArrow()){this.audio.playCue("error");return}this.cooldowns.set(t,e+Os.cooldown),this.audio.playCue("bow"),this.spawnProjectile("arrow",Os.speed,Os.gravityScale,2.6);return}if(t==="blocks"){this.placeBlock();return}if(t==="purpleDotter"){if(!this.state.useDotter()){this.audio.playCue("error");return}this.cooldowns.set(t,e+Hr.cooldown),this.audio.playCue("dotter"),this.spawnProjectile("dotter",Hr.speed,Hr.gravityScale,3.2);return}t==="jumpPad"&&this.placeJumpPad()}}handleMeleeTool(t,e,n,i){this.raycaster.setFromCamera(new gt(0,0),this.camera);const r=this.world.raycastCrystal(this.raycaster,i),o=this.world.raycastBlock(this.raycaster,i);if(r&&(!o||r.distance<=o.distance)){this.applyCrystalDamage(r.id,e);return}if(!o)return;const a=this.getBlockDamageMultiplier(t,o.block.type),l=this.world.damageBlock(o.key,n*a);!l.destroyed||!l.block||(this.audio.playCue("mine"),this.state.isOnlineMatch()&&this.multiplayer.syncBlockRemoval(o.key),this.rewardBrokenBlock(l.block.type))}getBlockDamageMultiplier(t,e){return t==="pickaxe"&&(e==="stone"||e.includes("Ore"))?1.5:t==="shovel"&&(e==="grass"||e==="dirt"||e==="sand")?1.6:t==="sword"&&e==="bridge"?1.15:.65}rewardBrokenBlock(t){if(t==="copperOre"){this.state.addCurrency("copper",1),this.state.pushNotification("notifications.minedResource",{resource:this.state.localizer.t("resources.copper")});return}if(t==="goldOre"){this.state.addCurrency("gold",1),this.state.pushNotification("notifications.minedResource",{resource:this.state.localizer.t("resources.gold")});return}if(t==="emeraldOre"){this.state.addCurrency("emerald",2),this.state.pushNotification("notifications.minedResource",{resource:this.state.localizer.t("resources.emerald")});return}if(t==="diamondOre"){this.state.addCurrency("diamond",1),this.state.pushNotification("notifications.minedResource",{resource:this.state.localizer.t("resources.diamond")});return}this.state.addBlocks(1)}applyCrystalDamage(t,e){if(this.state.isOnlineMatch()){this.multiplayer.damageCrystal(t,e);return}const n=this.world.damageCrystal(t,e);if(n){if(n.destroyed){this.audio.playCue("crystalBreak"),this.state.addCurrency("emerald",3),this.state.collectCrystal(t),this.state.phase==="win"&&this.player.isLocked()&&(this.audio.playCue("win"),this.ignoreNextUnlockPause=!0,this.player.unlock());return}this.audio.playCue("crystalHit"),this.state.pushNotification("notifications.crystalHit",{hp:n.hp})}}spawnProjectile(t,e,n,i){const r=this.player.getDirection(),o=this.player.getPosition().clone().add(r.clone().multiplyScalar(.9)).add(new T(0,-.2,0)),a=t==="arrow"?new xt(new Pe(.04,.04,.9,6),new Lt({color:14201979,metalness:.1,roughness:.65})):new xt(new Qn(.18,12,12),new Lt({color:11619583,emissive:5511558,emissiveIntensity:.6}));a.position.copy(o),this.scene.add(a),this.projectiles.push({type:t,mesh:a,velocity:r.multiplyScalar(e).add(new T(0,1.2,0)),gravityScale:n,ttl:i})}placeBlock(){this.raycaster.setFromCamera(new gt(0,0),this.camera);const t=this.world.raycastBlock(this.raycaster,Ft.useRange);if(!t)return;const e=t.block.x+Math.round(t.normal.x),n=t.block.y+Math.round(t.normal.y),i=t.block.z+Math.round(t.normal.z);if(!this.wouldOverlapPlayer(e,n,i)){if(!this.state.useBlock()){this.audio.playCue("error");return}if(!this.world.placeBlock(e,n,i,"bridge")){this.state.refundBlock(),this.audio.playCue("error");return}this.audio.playCue("place"),this.state.isOnlineMatch()&&this.multiplayer.syncBlockPlacement(e,n,i,"bridge")}}placeJumpPad(){this.raycaster.setFromCamera(new gt(0,0),this.camera);const t=this.world.raycastBlock(this.raycaster,Ft.useRange);if(!t||Math.round(t.normal.y)!==1)return;const e=t.block.x,n=t.block.y+1,i=t.block.z;if(this.wouldOverlapPlayer(e,n,i))return;if(!this.state.useJumpPad()){this.audio.playCue("error");return}if(!this.world.placeJumpPad(e,n+.15,i)){this.state.refundJumpPad(),this.audio.playCue("error");return}this.audio.playCue("place"),this.state.isOnlineMatch()&&this.multiplayer.syncJumpPadPlacement({x:e,y:n+.15,z:i})}wouldOverlapPlayer(t,e,n){const i=this.player.getPosition(),r=new T(i.x-Ft.radius,i.y-Ft.eyeHeight,i.z-Ft.radius),o=new T(i.x+Ft.radius,i.y-Ft.eyeHeight+Ft.height,i.z+Ft.radius),a=new T(t-.5,e-.5,n-.5),l=new T(t+.5,e+.5,n+.5);return!(l.x<r.x||a.x>o.x||l.y<r.y||a.y>o.y||l.z<r.z||a.z>o.z)}}const Ko=document.getElementById("app");if(!Ko)throw new Error("Missing app mount node.");const ac=window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,Fi=()=>{var e,n;const s=((e=window.visualViewport)==null?void 0:e.height)??window.innerHeight,t=((n=window.visualViewport)==null?void 0:n.width)??window.innerWidth;document.documentElement.style.setProperty("--app-height",`${Math.round(s)}px`),document.body.classList.toggle("is-portrait",s>t)};document.documentElement.classList.toggle("touch-device",ac);document.body.classList.toggle("touch-device",ac);Fi();window.addEventListener("resize",Fi,{passive:!0});window.addEventListener("orientationchange",Fi,{passive:!0});var El;(El=window.visualViewport)==null||El.addEventListener("resize",Fi,{passive:!0});var bl;(bl=window.visualViewport)==null||bl.addEventListener("scroll",Fi,{passive:!0});document.addEventListener("visibilitychange",Fi);let Sl=!1;const Jo=s=>{Sl||(Sl=!0,Ko.innerHTML=`
    <div class="fatal-screen">
      <div class="fatal-screen__card">
        <div class="fatal-screen__eyebrow">Mobile Startup Error</div>
        <h1 class="fatal-screen__title">The game could not start.</h1>
        <p class="fatal-screen__body">
          スマートフォンのブラウザで起動できませんでした。<br />
          ページを再読み込みするか、別のブラウザで開いてください。
        </p>
        <pre class="fatal-screen__details">${s}</pre>
      </div>
    </div>
  `)};window.addEventListener("error",s=>{const t=s.error instanceof Error?s.error.message:s.message||"Unknown startup error.";Jo(t)});window.addEventListener("unhandledrejection",s=>{const t=s.reason,e=t instanceof Error?t.message:typeof t=="string"?t:"Unhandled promise rejection.";Jo(e)});try{new Rg(Ko)}catch(s){const t=s instanceof Error?s.message:"Unknown startup error.";Jo(t)}
