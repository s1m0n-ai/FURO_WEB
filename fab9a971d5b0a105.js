(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[9222],{

/***/ 247026:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(223140);self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};(function(__c) {var D=__c.D;var A=__c.A;
var LGb=function(a,b,c,d){c=new KGb(c,d);A(1===a.count(),"Only single widget root element is supported");a=a.first();A(null!=a&&"layout"===a.type,`Unexpected widget root found: ${null===a||void 0===a?void 0:a.type}`);c.xaa(a,b)},NGb=function(a){return{...__c.Cv,...G6,top:0,left:0,width:a.width,height:a.height,viewBox:{top:0,left:0,width:a.vaa.width,height:a.vaa.height},gb:a.gb.map(MGb)}},OGb=function(a){switch(a.ED){case 0:var b=__c.Pj.Tc().attrs({"font-size":a.fontSize,leading:a.lineHeight?1E3*a.lineHeight:
void 0,"text-align":a.textAlign||"start","font-weight":a.fontWeight,"font-family":a.fontFamily,"font-kerning":"normal","font-feature-liga":"on","font-feature-clig":"on","font-feature-calt":"on",direction:a.direction});a.color&&b.yh("color",a.color);b=b.oc(a.text.endsWith("\n")?a.text:`${a.text}\n`).build();var c;return{...__c.XM,...H6,...G6,Ha:null!==(c=a.Ha)&&void 0!==c?c:0,text:b,Bg:2};case 1:return b=a.text,{...__c.XM,...H6,...G6,text:b,Bg:2};default:throw new D(a);}},L6=function({content:a,fill:b,
border:c,W:d}){b={...__c.s1a,fill:I6(b),border:J6(c),W:K6(d)};switch(a.type){case "shape":return{...b,element:NGb(a)};case "text":return{...b,element:OGb(a)};case "layout":return{...b,element:PGb(a)};default:throw new D(a);}},PGb=function({cells:a,border:b,fill:c,W:d,gridTemplateColumns:e,gridTemplateRows:f,columnGap:g,rowGap:h}){return{...__c.t1a,...H6,...G6,F:H6.width,P:H6.height,fill:I6(c),border:J6(b),direction:1,W:K6(d),cells:new Map(a.map(k=>[k.id,L6(k)])),behavior:{rules:[{Xf:void 0,grid:{gridTemplateColumns:e,
gridTemplateRows:f,columnGap:null!==g&&void 0!==g?g:0,rowGap:null!==h&&void 0!==h?h:0,ng:QGb(a)}}]},kf:void 0}},QGb=function(a){return new Map(a.map(b=>[b.id,RGb(b)]))},RGb=function(a){const b=a.placement.padding;return{...__c.Hsa,...a.placement,alignSelf:"center",padding:{...__c.tS,...(null!=b?"number"===typeof b?{all:b}:b:{})}}},J6=function(a){var b;const c=null!==(b=null===a||void 0===a?void 0:a.color)&&void 0!==b?b:"#000000";var d;return{...__c.wG,all:a?{...__c.uS,weight:null!==(d=a.weight)&&
void 0!==d?d:1,color:c,Ve:!0}:void 0}},K6=function(a){return{...__c.sS,...(null!=a?"number"===typeof a?{all:a}:a:{})}},MGb=function(a){return{...__c.Dv,...a,fill:I6(a.fill),stroke:SGb(a.stroke)}},SGb=function(a){return a?{...__c.uS,color:a.color,weight:a.weight}:void 0},I6=function(a){var b;const c={...__c.Fv,Ha:null!==(b=null===a||void 0===a?void 0:a.Ha)&&void 0!==b?b:0};switch(null===a||void 0===a?void 0:a.type){case "color":return{...c,color:a.color};case "gradient":return{...c,fb:a.fb};case void 0:return c;
default:throw new D(a);}},YGb=function(a,b){const c=new Map(b.cells.map(e=>[e.id,e]));TGb(a.cells,c,(e,f)=>{let g=!1;UGb(e.element,f.content,()=>{a.cells.delete(f.id);a.cells.set(f.id,L6(f));g=!0});g||(M6(e.fill,f.fill),VGb(e.border,f.border),WGb(e.W,f.W))},e=>L6(e));XGb(a.behavior,b,c);M6(a.fill,b.fill);WGb(a.W,b.W);VGb(a.border,b.border);var d;a.Ha=null!==(d=b.Ha)&&void 0!==d?d:0},XGb=function(a,b,c){N6(a.rules,[b],d=>{ZGb(d.grid.gridTemplateColumns,b.gridTemplateColumns)||(d.grid.gridTemplateColumns=
b.gridTemplateColumns);ZGb(d.grid.gridTemplateRows,b.gridTemplateRows)||(d.grid.gridTemplateRows=b.gridTemplateRows);var e;d.grid.columnGap=null!==(e=b.columnGap)&&void 0!==e?e:0;var f;d.grid.rowGap=null!==(f=b.rowGap)&&void 0!==f?f:0;TGb(d.grid.ng,c,(g,h)=>{const k=h.placement.padding,l=h.placement.gridColumnEnd,m=h.placement.gridRowStart,n=h.placement.gridRowEnd,p=h.placement.alignSelf;g.gridColumnStart=h.placement.gridColumnStart;g.gridColumnEnd=l;g.gridRowStart=m;g.gridRowEnd=n;"number"===typeof k&&
g.padding.all!==k?g.padding.all=k:"number"!==typeof k&&(g.padding.va=null===k||void 0===k?void 0:k.va,g.padding.Da=null===k||void 0===k?void 0:k.Da,g.padding.ua=null===k||void 0===k?void 0:k.ua,g.padding.Ja=null===k||void 0===k?void 0:k.Ja);g.alignSelf=p},g=>RGb(g))},d=>{var e,f;return{Xf:void 0,grid:{gridTemplateColumns:b.gridTemplateColumns,gridTemplateRows:b.gridTemplateRows,columnGap:null!==(e=b.columnGap)&&void 0!==e?e:0,rowGap:null!==(f=b.rowGap)&&void 0!==f?f:0,ng:QGb(d.cells)}}})},$Gb=function(a,
b){N6(a.gb,b.gb,(e,f)=>{e.d=f.d;M6(e.fill,f.fill);e.stroke.ref&&f.stroke?(e=e.stroke.ref,f=f.stroke,e.color=f.color,e.weight=f.weight):e.stroke.set(SGb(f.stroke))},e=>MGb(e));const {viewBox:c,width:d}=NGb(b);a.width=d;__c.Et(a.viewBox).equals(__c.Et(c))||(a.viewBox=c)},UGb=function(a,b,c){switch(b.type){case "shape":"shape"===a.type?$Gb(a,b):c();break;case "text":"text"===a.type&&__c.Pj.domain.Nb(__c.Pj.ra(a.text),OGb(b).text)||c();break;case "layout":"layout"===a.type?YGb(a,b):c();break;default:throw new D(b);
}},TGb=function(a,b,c,d){const e=new Set(a.keys());for(const [f,g]of b)(b=a.get(f))?(e.delete(f),c(b,g)):a.set(f,d(g));e.forEach(f=>a.delete(f))},N6=function(a,b,c,d){const e=a.toArray();for(let f=0;f<Math.max(e.length,b.length);f++)if(f<e.length&&f<b.length)c(e[f],b[f]);else if(f<e.length&&f>=b.length)a.delete(e[f]);else if(f>=e.length&&f<b.length){const g=d(b[f]);a.append(g)}},M6=function(a,b){switch(null===b||void 0===b?void 0:b.type){case "color":a.color=b.color;a.fb.set(void 0);var c;a.Ha=null!==
(c=b.Ha)&&void 0!==c?c:0;break;case "gradient":if(a.fb.ref&&__c.zSa.domain.Nb(a.fb.ref,b.fb))break;a.color=void 0;a.fb.set(b.fb);var d;a.Ha=null!==(d=b.Ha)&&void 0!==d?d:0;break;default:a.color=void 0,a.fb.set(void 0)}},WGb=function(a,b){b=K6(b);a.all=b.all;a.fB=b.fB;a.dB=b.dB;a.eB=b.eB;a.cB=b.cB},VGb=function(a,b){b=J6(b).all;var c;if(c=b)c=a.all.ref,c=!(c&&b?__c.xG.domain.Nb(__c.xG.ra(c),b):!c&&!b);c&&a.all.set(b)},ZGb=function(a,b){return a.length===b.length&&a.every(c=>b.includes(c))},bHb=function(a,
b,c,d){let e=a.CHa.get(b);if(e)return e;e={vB:new aHb(c.Tw,b,d,c.Kia),hua:void 0,YCa:void 0,QDa:__c.HW.mode};a.CHa.set(b,e);return e},dHb=function(a,b,c,d,e){var f,g;e=bHb(a,c,b,e);const h=e.vB,k=e.YCa,l=e.hua,m=e.QDa;c=__c.IR.ra(c);const n=(null===(f=(g=a.Ex).Sza)||void 0===f?void 0:f.call(g,d))||__c.HW;h.Mj===k&&cHb.structural(c,l)&&n.mode===m||(e.hua=c,e.YCa=h.Mj,e.QDa=n.mode,b=b.render(h,n),a.F2a.update(d,b),LGb(d,b,(p,q)=>a.eM.Xia.set(p,q),(p,q,r)=>a.eM.refs.set(p,{ref:q,key:r})))},fHb=function(a,
b){return{PN:({Mk:c})=>{var d;const {vB:e}=bHb(a.renderer,c,b,a.YW),f=__c.KR.create([]),g=[];g.push(eHb(()=>{var k,l;return[null===(k=(l=a.Ex).Sza)||void 0===k?void 0:k.call(l,f),__c.IR.ra(c),e.Mj]},()=>{dHb(a.renderer,b,c,f,a.YW)},{fireImmediately:!0,equals:cHb.structural}));const h=null===(d=b.qX)||void 0===d?void 0:d.call(b,{vB:e});h&&g.push(h);return{eb:f,Yt:()=>{g.forEach(k=>k())}}}}},hHb=function(a,b){let c=a.v0.get(b);c||(c=gHb("weakKey"),a.v0.set(b,c));c.reportObserved()},O6=__webpack_require__(42782),
cHb=O6.p6,iHb=O6.Fl,gHb=O6.cp,P6=O6.LO,eHb=O6.U5;var jHb=class{static j(a){__c.P(a,{Y4a:P6.ref,qX:P6.ref})}constructor(){jHb.j(this)}};var kHb=class{constructor(){this.sources=new WeakMap}},aHb=class{static j(a){__c.P(a,{nh:iHb})}get ZCa(){var a=this.YW,b=this.Mk,c=this.Kia;let d=a.sources.get(b);d||(d=P6.box(c),a.sources.set(b,d));return d}get Mj(){return this.ZCa.get()}get nh(){return this.Tw.As({type:"dict",value:this.Mk})}yp(a){this.ZCa.set(a instanceof Function?{...this.Mj,...a()}:{...this.Mj,...a})}constructor(a,b,c,d){aHb.j(this);this.Tw=a;this.Mk=b;this.YW=c;this.Kia=d}};var KGb=class{y_(a,b){this.uHa(a,b);b.ref&&this.Ena(a,b.ref,b.key)}zaa(a,b){b.ref&&this.Ena(a.text,b.ref,b.key)}wra(a,b){switch(b.content.type){case "shape":A("shape"===a.element.type);this.y_(a.element,b.content);break;case "text":A("text"===a.element.type);this.zaa(a.element,b.content);break;case "layout":A("layout"===a.element.type);this.xaa(a.element,b.content);break;default:throw new D(b.content);}}xaa(a,b){this.uHa(a,b);b.ref&&this.Ena(a,b.ref,b.key);for(const [c,d]of a.cells)a=b.cells.find(e=>
e.id===c),A(!!d&&!!a),this.wra(d,a)}constructor(a,b){this.uHa=a;this.Ena=b}};var G6={locked:!0,Mp:{Oea:!1,s$:!1},Hi:!0},H6={top:0,left:0,width:1,height:1};var lHb=class{constructor(a){this.Hm=a;this.update=(b,c)=>{N6(b,[c],(d,e)=>{switch(d.type){case "layout":YGb(d,e);break;default:throw Error(`Not supported element type: ${d.type}`);}},d=>{a:switch(d.type){case "layout":d={...PGb(d),width:d.minWidth,height:d.minHeight,F:d.minWidth,P:d.minHeight,locked:!1,Hi:!1,Mp:void 0};break a;default:throw new D(d.type);}return d});for(const d of b)A("layout"===d.type),d.width=c.minWidth,d.height=c.minHeight,d.F=c.minWidth,d.P=c.minHeight,c.direction&&(d.direction=
c.direction),this.Hm.Cna(d)}}};var mHb=class{constructor(a,b,c){this.F2a=a;this.eM=b;this.Ex=c;this.CHa=new WeakMap}};var nHb=!1,oHb=class{register(a,b){this.mB.has(a)||(this.mB.set(a,b),nHb||(__c.JR.set(a,fHb(this,b)),nHb=!0))}get(a){return this.mB.get(a)}constructor(a,b,c){this.renderer=a;this.YW=b;this.Ex=c;this.mB=new Map}};var pHb=class{delete(a){var b;const c=this.map.delete(a);c&&(null===(b=this.v0.get(a))||void 0===b?void 0:b.reportChanged());return c}get(a){hHb(this,a);return this.map.get(a)}has(a){hHb(this,a);return this.map.has(a)}set(a,b){if(!this.map.has(a)||this.map.get(a)!==b){var c;this.map.set(a,b);null===(c=this.v0.get(a))||void 0===c?void 0:c.reportChanged()}return this}constructor(){this.v0=new WeakMap;this.map=new WeakMap}};var qHb=class{constructor(){this.Xia=new pHb;this.refs=new pHb}},rHb=class{getContext(a){return this.eM.refs.get(a)}rJ(a){return this.eM.Xia.get(a)}constructor(a,b,c){this.eM=a;this.YW=b;this.renderer=c}};__c.XFa={G_a:function(a){const b=new jHb;switch(a.$c){case "fixed":const c=new qHb;a=new mHb(new lHb(a.Hm),c,b);const d=new kHb;return{Ex:b,cvb:new rHb(c,d,a),ubb:new oHb(a,d,b),eM:c};case "responsive":throw Error("Not implemented");default:throw new D(a);}}};
}).call(self, self._fe4d99ebe0d2d259646a80d250150d47);}

}])
//# sourceMappingURL=sourcemaps/fab9a971d5b0a105.js.map