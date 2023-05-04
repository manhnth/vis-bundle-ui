"use strict";var starter_bundle_test=(()=>{var _i=Object.create;var te=Object.defineProperty;var fi=Object.getOwnPropertyDescriptor;var bi=Object.getOwnPropertyNames;var gi=Object.getPrototypeOf,yi=Object.prototype.hasOwnProperty;var ie=(e,i)=>()=>(i||e((i={exports:{}}).exports,i),i.exports),vi=(e,i)=>{for(var t in i)te(e,t,{get:i[t],enumerable:!0})},$e=(e,i,t,o)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of bi(i))!yi.call(e,s)&&s!==t&&te(e,s,{get:()=>i[s],enumerable:!(o=fi(i,s))||o.enumerable});return e};var r=(e,i,t)=>(t=e!=null?_i(gi(e)):{},$e(i||!e||!e.__esModule?te(t,"default",{value:e,enumerable:!0}):t,e)),xi=e=>$e(te({},"__esModule",{value:!0}),e);var tt=ie(p=>{"use strict";var Y=Symbol.for("react.element"),wi=Symbol.for("react.portal"),Si=Symbol.for("react.fragment"),Ci=Symbol.for("react.strict_mode"),ki=Symbol.for("react.profiler"),Ii=Symbol.for("react.provider"),zi=Symbol.for("react.context"),Hi=Symbol.for("react.forward_ref"),Bi=Symbol.for("react.suspense"),ji=Symbol.for("react.memo"),Oi=Symbol.for("react.lazy"),Ve=Symbol.iterator;function Mi(e){return e===null||typeof e!="object"?null:(e=Ve&&e[Ve]||e["@@iterator"],typeof e=="function"?e:null)}var Ye={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xe=Object.assign,Ge={};function E(e,i,t){this.props=e,this.context=i,this.refs=Ge,this.updater=t||Ye}E.prototype.isReactComponent={};E.prototype.setState=function(e,i){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,i,"setState")};E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Je(){}Je.prototype=E.prototype;function Ne(e,i,t){this.props=e,this.context=i,this.refs=Ge,this.updater=t||Ye}var Te=Ne.prototype=new Je;Te.constructor=Ne;Xe(Te,E.prototype);Te.isPureReactComponent=!0;var Fe=Array.isArray,Ke=Object.prototype.hasOwnProperty,Ee={current:null},Qe={key:!0,ref:!0,__self:!0,__source:!0};function et(e,i,t){var o,s={},d=null,l=null;if(i!=null)for(o in i.ref!==void 0&&(l=i.ref),i.key!==void 0&&(d=""+i.key),i)Ke.call(i,o)&&!Qe.hasOwnProperty(o)&&(s[o]=i[o]);var h=arguments.length-2;if(h===1)s.children=t;else if(1<h){for(var c=Array(h),f=0;f<h;f++)c[f]=arguments[f+2];s.children=c}if(e&&e.defaultProps)for(o in h=e.defaultProps,h)s[o]===void 0&&(s[o]=h[o]);return{$$typeof:Y,type:e,key:d,ref:l,props:s,_owner:Ee.current}}function Ni(e,i){return{$$typeof:Y,type:e.type,key:i,ref:e.ref,props:e.props,_owner:e._owner}}function Pe(e){return typeof e=="object"&&e!==null&&e.$$typeof===Y}function Ti(e){var i={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return i[t]})}var qe=/\/+/g;function Me(e,i){return typeof e=="object"&&e!==null&&e.key!=null?Ti(""+e.key):i.toString(36)}function ne(e,i,t,o,s){var d=typeof e;(d==="undefined"||d==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(d){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Y:case wi:l=!0}}if(l)return l=e,s=s(l),e=o===""?"."+Me(l,0):o,Fe(s)?(t="",e!=null&&(t=e.replace(qe,"$&/")+"/"),ne(s,i,t,"",function(f){return f})):s!=null&&(Pe(s)&&(s=Ni(s,t+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(qe,"$&/")+"/")+e)),i.push(s)),1;if(l=0,o=o===""?".":o+":",Fe(e))for(var h=0;h<e.length;h++){d=e[h];var c=o+Me(d,h);l+=ne(d,i,t,c,s)}else if(c=Mi(e),typeof c=="function")for(e=c.call(e),h=0;!(d=e.next()).done;)d=d.value,c=o+Me(d,h++),l+=ne(d,i,t,c,s);else if(d==="object")throw i=String(e),Error("Objects are not valid as a React child (found: "+(i==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":i)+"). If you meant to render a collection of children, use an array instead.");return l}function oe(e,i,t){if(e==null)return e;var o=[],s=0;return ne(e,o,"","",function(d){return i.call(t,d,s++)}),o}function Ei(e){if(e._status===-1){var i=e._result;i=i(),i.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=i)}if(e._status===1)return e._result.default;throw e._result}var g={current:null},re={transition:null},Pi={ReactCurrentDispatcher:g,ReactCurrentBatchConfig:re,ReactCurrentOwner:Ee};p.Children={map:oe,forEach:function(e,i,t){oe(e,function(){i.apply(this,arguments)},t)},count:function(e){var i=0;return oe(e,function(){i++}),i},toArray:function(e){return oe(e,function(i){return i})||[]},only:function(e){if(!Pe(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};p.Component=E;p.Fragment=Si;p.Profiler=ki;p.PureComponent=Ne;p.StrictMode=Ci;p.Suspense=Bi;p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pi;p.cloneElement=function(e,i,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Xe({},e.props),s=e.key,d=e.ref,l=e._owner;if(i!=null){if(i.ref!==void 0&&(d=i.ref,l=Ee.current),i.key!==void 0&&(s=""+i.key),e.type&&e.type.defaultProps)var h=e.type.defaultProps;for(c in i)Ke.call(i,c)&&!Qe.hasOwnProperty(c)&&(o[c]=i[c]===void 0&&h!==void 0?h[c]:i[c])}var c=arguments.length-2;if(c===1)o.children=t;else if(1<c){h=Array(c);for(var f=0;f<c;f++)h[f]=arguments[f+2];o.children=h}return{$$typeof:Y,type:e.type,key:s,ref:d,props:o,_owner:l}};p.createContext=function(e){return e={$$typeof:zi,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ii,_context:e},e.Consumer=e};p.createElement=et;p.createFactory=function(e){var i=et.bind(null,e);return i.type=e,i};p.createRef=function(){return{current:null}};p.forwardRef=function(e){return{$$typeof:Hi,render:e}};p.isValidElement=Pe;p.lazy=function(e){return{$$typeof:Oi,_payload:{_status:-1,_result:e},_init:Ei}};p.memo=function(e,i){return{$$typeof:ji,type:e,compare:i===void 0?null:i}};p.startTransition=function(e){var i=re.transition;re.transition={};try{e()}finally{re.transition=i}};p.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};p.useCallback=function(e,i){return g.current.useCallback(e,i)};p.useContext=function(e){return g.current.useContext(e)};p.useDebugValue=function(){};p.useDeferredValue=function(e){return g.current.useDeferredValue(e)};p.useEffect=function(e,i){return g.current.useEffect(e,i)};p.useId=function(){return g.current.useId()};p.useImperativeHandle=function(e,i,t){return g.current.useImperativeHandle(e,i,t)};p.useInsertionEffect=function(e,i){return g.current.useInsertionEffect(e,i)};p.useLayoutEffect=function(e,i){return g.current.useLayoutEffect(e,i)};p.useMemo=function(e,i){return g.current.useMemo(e,i)};p.useReducer=function(e,i,t){return g.current.useReducer(e,i,t)};p.useRef=function(e){return g.current.useRef(e)};p.useState=function(e){return g.current.useState(e)};p.useSyncExternalStore=function(e,i,t){return g.current.useSyncExternalStore(e,i,t)};p.useTransition=function(){return g.current.useTransition()};p.version="18.2.0"});var _=ie((Co,it)=>{"use strict";it.exports=tt()});var rt=ie(se=>{"use strict";var Ri=_(),Ai=Symbol.for("react.element"),Li=Symbol.for("react.fragment"),Wi=Object.prototype.hasOwnProperty,Di=Ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ui={key:!0,ref:!0,__self:!0,__source:!0};function nt(e,i,t){var o,s={},d=null,l=null;t!==void 0&&(d=""+t),i.key!==void 0&&(d=""+i.key),i.ref!==void 0&&(l=i.ref);for(o in i)Wi.call(i,o)&&!Ui.hasOwnProperty(o)&&(s[o]=i[o]);if(e&&e.defaultProps)for(o in i=e.defaultProps,i)s[o]===void 0&&(s[o]=i[o]);return{$$typeof:Ai,type:e,key:d,ref:l,props:s,_owner:Di.current}}se.Fragment=Li;se.jsx=nt;se.jsxs=nt});var a=ie((zo,st)=>{"use strict";st.exports=rt()});var xo={};vi(xo,{default:()=>vo});var at=r(_(),1);var ot="14d33e222b6f94d5732339f3bc4b5fc1c462e1bd22a23eebaa605e0c7f69718b",Zi=`._screen_g0mwn_1 {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(12px);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  text-align: center;
  top: 0;
  left: 0;
}

._holder_g0mwn_20 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

._text_g0mwn_27 {
  text-align: center;
  margin-top: 16px;
  font-size: 18px;
  color: rgba(231, 238, 238, 0.8);
}

._spinner_g0mwn_34 {
  display: inline-block;
  width: 80px;
  height: 80px;
}
._spinner_g0mwn_34:after {
  content: ' ';
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: _spinner_g0mwn_34 1.2s linear infinite;
}

@keyframes _spinner_g0mwn_34 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

._imgLoading_g0mwn_59 {
  width: 14rem;
  height: 14rem;
  animation: _pulse_g0mwn_1 1500ms infinite;
  transform: translateX(-16px) rotate(2deg);
}

@keyframes _pulse_g0mwn_1 {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(ot)){var e=document.createElement("style");e.id=ot,e.textContent=Zi,document.head.appendChild(e)}})();var P={screen:"_screen_g0mwn_1",holder:"_holder_g0mwn_20",text:"_text_g0mwn_27",spinner:"_spinner_g0mwn_34",imgLoading:"_imgLoading_g0mwn_59",pulse:"_pulse_g0mwn_1"};var M=r(a(),1);var ae=class extends at.default.Component{constructor(t){super(t);this.index=0;this.state={loadingText:t.loadingText.length>0?t.loadingText[0]:""}}componentDidMount(){setInterval(this.getLoadingText.bind(this),+this.props.loadIntervalMS)}getLoadingText(){!this.props.loadingText||this.props.loadingText.length<=0||!this.props.active||(this.index>=this.props.loadingText.length-1?this.index=0:this.index++,this.setState({loadingText:this.props.loadingText[this.index]}))}render(){return this.props.active?(0,M.jsx)("div",{id:this.props.id+"-element",className:P.screen+" "+this.props.screenStyle,children:(0,M.jsxs)("div",{"data-id":this.props.id+"-loadingHolder",className:P.holder,children:[this.props.img?(0,M.jsx)("img",{"data-id":this.props.id+"-loadingImg",className:P.imgLoading+" "+this.props.imgLoadingStyle,src:this.props.img,alt:this.props.img}):(0,M.jsx)("div",{className:P.spinner}),(0,M.jsx)("div",{"data-id":this.props.id+"-loadingText",className:P.text+this.props.textStyle,children:this.state.loadingText})]})}):""}};var lt=r(_(),1);var dt="f3bac5f4a45a87aa71726f386e4f0a36e3f81df8301fee057e848a2a19a543ce",$i=`._root_1poim_1 {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  pointer-events: none;
  z-index: 0;
}

._carouselContainer_1poim_12 {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

._carouselWrapper_1poim_19 {
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
}

._carouselContentWrapper_1poim_26 {
  overflow: hidden;
  height: 100%;
  width: 100%;
}

._carouselContent_1poim_26 {
  display: flex;
  height: 100%;
  transition: all 500ms linear;
  -ms-overflow-style: none;
  scrollbar-width: none;
  will-change: transform, transition;
}

._carouselContent_1poim_26._notAnimation_1poim_41 {
  transition: none;
}

._carouselItem_1poim_45 {
  box-sizing: border-box;
  flex-shrink: 0;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  padding: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

._captionHolder_1poim_60 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 50px;
  left: 10px;
  right: 10px;
}

._subCaption_1poim_72 {
  font-size: 40px;
  line-height: 40px;
  font-weight: 400;
  color: white;
}

._img_1poim_79,
._img_1poim_79._mobile_1poim_80 {
  width: 100%;
  margin-bottom: 60px;
  pointer-events: none;
  object-fit: contain;
  z-index: 1;
  height: 100%;
  max-height: 75vh;
  margin-bottom: 40px;
  width: initial;
  max-width: calc(100% - 100px);
}

._img_1poim_79._mobile_1poim_80 {
  display: none;
}

@media (max-width: 600px) {
  ._img_1poim_79 {
    display: none;
  }
  ._img_1poim_79._mobile_1poim_80 {
    display: block;
  }
}

._caption_1poim_60 {
  color: white;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 4px;
  -webkit-text-stroke-color: white;
  font-size: 144px;
  font-weight: bold;
  line-height: 1;
  margin-top: -5px;
  white-space: nowrap;
  text-align: center;
  width: 100%;
}

._backgroundMask_1poim_120 {
  background-color: #1d2024;
  box-sizing: border-box;
  color: #fff;
  height: 100%;
  transition: background-color 500ms ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;

  background-color: rgb(102, 102, 102);
}

._dynamicBg_1poim_135 {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

._dynamicBg_1poim_135::before {
  background: radial-gradient(
    50% 50% at 50% 50%,
    #fff 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: calc(100vw * 2);
  mix-blend-mode: overlay;
  content: '';
  position: absolute;
  top: -100vw;
  left: -100vw;
  height: calc(100vw * 2);
  width: calc(100vw * 2);

  border-radius: calc(100vh * 2);
  top: -100vh;
  left: -100vh;
  height: calc(100vh * 2);
  width: calc(100vh * 2);
}

._dynamicBg_1poim_135::after {
  background-color: rgba(0, 0, 0, 0.25);
  content: '';
  filter: blur(7px);
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  top: calc(50% + 10px);
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(dt)){var e=document.createElement("style");e.id=dt,e.textContent=$i,document.head.appendChild(e)}})();var m={root:"_root_1poim_1",carouselContainer:"_carouselContainer_1poim_12",carouselWrapper:"_carouselWrapper_1poim_19",carouselContentWrapper:"_carouselContentWrapper_1poim_26",carouselContent:"_carouselContent_1poim_26",notAnimation:"_notAnimation_1poim_41",carouselItem:"_carouselItem_1poim_45",captionHolder:"_captionHolder_1poim_60",subCaption:"_subCaption_1poim_72",img:"_img_1poim_79",mobile:"_mobile_1poim_80",caption:"_caption_1poim_60",backgroundMask:"_backgroundMask_1poim_120",dynamicBg:"_dynamicBg_1poim_135"};function n(...e){return e.reduce((i,t)=>t?Array.isArray(t)?(i.concat(n(...t)),i):typeof t=="object"?(Object.entries(t).forEach(([o,s])=>{s&&i.push(o)}),i):(i.push(t),i):i,[]).join(" ")}var u=r(a(),1);var de=class extends lt.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}},{id:this.props.id,name:"nextSlide",func:()=>{var t,o,s;this.state.currentSlide<=((s=(o=(t=this.props.selectionObject)==null?void 0:t.selection)==null?void 0:o.list)==null?void 0:s.length)-1&&this.setState({prevSlide:this.state.currentSlide,currentSlide:this.state.currentSlide+1})}},{id:this.props.id,name:"prevSlide",func:()=>{this.state.currentSlide>=0&&this.setState({prevSlide:this.state.currentSlide,currentSlide:this.state.currentSlide-1})}}];this.state={currentSlide:0,prevSlide:1,hidden:!1}}componentDidUpdate(t,o,s){var d,l,h,c,f;this.state.currentSlide===-1&&setTimeout(()=>{var x,ee,Ue;this.setState({prevSlide:this.state.currentSlide,currentSlide:((Ue=(ee=(x=this.props.selectionObject)==null?void 0:x.selection)==null?void 0:ee.list)==null?void 0:Ue.length)-1})},500),this.state.currentSlide===((h=(l=(d=this.props.selectionObject)==null?void 0:d.selection)==null?void 0:l.list)==null?void 0:h.length)&&setTimeout(()=>{this.setState({prevSlide:this.state.currentSlide,currentSlide:0})},500),(f=(c=this.props.selectionObject)==null?void 0:c.selection)==null||f.onChange(this.state.currentSlide===-1?this.props.selectionObject.selection.list.length-1:this.state.currentSlide===this.props.selectionObject.selection.list.length?0:this.state.currentSlide)}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}getContent(){}changeMenu(t){this.setState({currentSlide:t})}render(){var o,s,d,l,h,c,f;if(this.state.hidden||!((s=(o=this.props.selectionObject)==null?void 0:o.selection)!=null&&s.list)||((l=(d=this.props.selectionObject)==null?void 0:d.selection)==null?void 0:l.list.length)<1)return"";let t=(h=this.props.selectionObject)==null?void 0:h.selection.list;return(0,u.jsxs)("div",{id:this.props.id+"-element",className:m.root+" "+this.props.carouselContainerStyle,children:[(0,u.jsx)("div",{className:m.backgroundMask+" "+this.props.backgroundMaskStyle,style:{backgroundColor:`${this.props.selectionObject.selection.list[this.state.currentSlide===-1?this.props.selectionObject.selection.list.length-1:this.state.currentSlide===this.props.selectionObject.selection.list.length?0:this.state.currentSlide].backgroundColor}`},children:(0,u.jsx)("div",{className:m.dynamicBg})}),(0,u.jsx)("div",{"data-id":this.props.id+"-carouselWrapperStyle",className:m.carouselWrapper+" ",children:(0,u.jsx)("div",{"data-id":this.props.id+"-carouselContentWrapperStyle",className:m.carouselContentWrapper+" ",children:(0,u.jsxs)("div",{"data-id":this.props.id+"-carouselContentStyle",className:n({[m.notAnimation]:this.state.currentSlide===0&&this.state.prevSlide===t.length||this.state.currentSlide===t.length-1&&this.state.prevSlide===-1},m.carouselContent+" "),style:{transform:`translateX(-${(this.state.currentSlide+1)*100}%)`},children:[(0,u.jsxs)("div",{"data-id":this.props.id+"-carouselItemStyle",className:m.carouselItem+" ",children:[(0,u.jsxs)("div",{"data-id":this.props.id+"-captionHolderStyle",className:m.captionHolder+" "+this.props.captionHolderStyle,children:[(0,u.jsx)("div",{"data-id":this.props.id+"-subCaptionStyle",className:m.subCaption+" "+this.props.subCaptionStyle,children:t[t.length-1].sub_caption}),(0,u.jsx)("div",{"data-id":this.props.id+"-CaptionStyle",className:m.caption+" "+this.props.captionStyle,children:t[t.length-1].caption})]}),(0,u.jsx)("img",{"data-id":this.props.id+"-imgStyle",className:m.img+" "+this.props.imgStyle,src:(c=t[t.length-1])==null?void 0:c.img,alt:""}),(0,u.jsx)("img",{"data-id":this.props.id+"-imgMobileStyle",className:m.img+" "+m.mobile+" "+this.props.imgMobileStyle,src:t[t.length-1].img_mobile||t[t.length-1].img,alt:""})]}),this.props.selectionObject.selection.list.map((x,ee)=>(0,u.jsxs)("div",{"data-id":this.props.id+"-carouselItemStyle",className:n({active:this.state.currentSlide===ee},m.carouselItem),children:[(0,u.jsxs)("div",{"data-id":this.props.id+"-captionHolderStyle",className:m.captionHolder+" "+this.props.captionHolderStyle,children:[(0,u.jsx)("div",{"data-id":this.props.id+"-subCaptionStyle",className:m.subCaption+" "+this.props.subCaptionStyle,children:x.sub_caption}),(0,u.jsx)("div",{"data-id":this.props.id+"-CaptionStyle",className:m.caption+" "+this.props.captionStyle,children:x.caption})]}),(0,u.jsx)("img",{"data-id":this.props.id+"-imgStyle",className:m.img+" "+this.props.imgStyle,src:x.img,alt:x.img}),(0,u.jsx)("img",{"data-id":this.props.id+"-imgMobileStyle",className:m.img+" "+m.mobile+" "+this.props.imgMobileStyle,src:x.img_mobile||x.img,alt:x.img})]})),(0,u.jsxs)("div",{"data-id":this.props.id+"-carouselItemStyle",className:m.carouselItem,children:[(0,u.jsxs)("div",{"data-id":this.props.id+"-captionHolderStyle",className:m.captionHolder+" "+this.props.captionHolderStyle,children:[(0,u.jsx)("div",{"data-id":this.props.id+"-subCaptionStyle",className:m.subCaption+" "+this.props.subCaptionStyle,children:t[0].sub_caption}),(0,u.jsx)("div",{"data-id":this.props.id+"-CaptionStyle",className:m.caption+" "+this.props.captionStyle,children:t[0].caption})]}),(0,u.jsx)("img",{"data-id":this.props.id+"-imgStyle",className:m.img+" "+this.props.imgStyle,src:(f=t[0])==null?void 0:f.img,alt:""}),(0,u.jsx)("img",{"data-id":this.props.id+"-imgMobileStyle",className:m.img+" "+m.mobile+" "+this.props.imgMobileStyle,src:t[0].img_mobile||t[0].img,alt:""})]})]})})})]})}};var ht=r(_(),1);var pt="f400ec976cbf548001b6393e9bbf91c07188d478b5c80072aab3bb512c6137bb",Vi=`._root_tc4pa_1 {
  width: 100%;
  height: 1px;
  border-width: 0;
  background-color: #fff;
  opacity: 0.3;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(pt)){var e=document.createElement("style");e.id=pt,e.textContent=Vi,document.head.appendChild(e)}})();var ct={root:"_root_tc4pa_1"};var mt=r(a(),1);var le=class extends ht.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:!1}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}render(){return this.state.hidden?"":(0,mt.jsx)("hr",{id:this.props.id+"-element",className:ct.root+" "+this.props.singleBorderStyle})}};var ut="9e74bb674eb04a187075933b3778d09b82834dd699dcb616c24f7b2a4d6ab12b",Fi=`._root_1t5kx_1 {
  background-color: #1d2024;
  box-sizing: border-box;
  color: #fff;
  height: 100%;
  transition: background-color 500ms ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  background-color: rgb(102, 102, 102);
}

._dynamicBg_1t5kx_15 {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

._dynamicBg_1t5kx_15::before {
  background: radial-gradient(
    50% 50% at 50% 50%,
    #fff 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: calc(100vw * 2);
  mix-blend-mode: overlay;
  content: '';
  position: absolute;
  top: -100vw;
  left: -100vw;
  height: calc(100vw * 2);
  width: calc(100vw * 2);

  border-radius: calc(100vh * 2);
  top: -100vh;
  left: -100vh;
  height: calc(100vh * 2);
  width: calc(100vh * 2);
}

._dynamicBg_1t5kx_15::after {
  background-color: rgba(0, 0, 0, 0.25);
  content: '';
  filter: blur(7px);
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  top: calc(50% + 10px);
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(ut)){var e=document.createElement("style");e.id=ut,e.textContent=Fi,document.head.appendChild(e)}})();var Ze={root:"_root_1t5kx_1",dynamicBg:"_dynamicBg_1t5kx_15"};var _t=r(_(),1),Re=r(a(),1);var pe=class extends _t.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:!1}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}render(){return this.props.hide?"":(0,Re.jsx)("div",{className:Ze.root+" "+this.props.rootStyle,children:(0,Re.jsx)("div",{className:Ze.dynamicBg})})}};var bt=r(_(),1);var ft="2d9ab2ab047c53058b664227ca2daed1b534d5b2f4c721fa80f58b3847b04bbb",qi=`._root_1ekyz_1 {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  pointer-events: none;
  z-index: -1;
}

._carouselContainer_1ekyz_12 {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

._carouselWrapper_1ekyz_19 {
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
}

._carouselContentWrapper_1ekyz_26 {
  overflow: hidden;
  height: 100%;
  width: 100%;
}

._carouselContent_1ekyz_26 {
  display: flex;
  height: 100%;
  transition: all 500ms linear;
  -ms-overflow-style: none;
  scrollbar-width: none;
  will-change: transform, transition;
}

._carouselContent_1ekyz_26._notAnimation_1ekyz_41 {
  transition: none;
}

._carouselItem_1ekyz_45 {
  box-sizing: border-box;
  flex-shrink: 0;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  padding: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

._backgroundMask_1ekyz_60 {
  background-color: #1d2024;
  box-sizing: border-box;
  color: #fff;
  height: 100%;
  transition: background-color 500ms ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;

  background-color: rgb(102, 102, 102);
}

._dynamicBg_1ekyz_75 {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

._dynamicBg_1ekyz_75::before {
  background: radial-gradient(
    50% 50% at 50% 50%,
    #fff 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: calc(100vw * 2);
  mix-blend-mode: overlay;
  content: '';
  position: absolute;
  top: -100vw;
  left: -100vw;
  height: calc(100vw * 2);
  width: calc(100vw * 2);

  border-radius: calc(100vh * 2);
  top: -100vh;
  left: -100vh;
  height: calc(100vh * 2);
  width: calc(100vh * 2);
}

._dynamicBg_1ekyz_75::after {
  background-color: rgba(0, 0, 0, 0.25);
  content: '';
  filter: blur(7px);
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  top: calc(50% + 10px);
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(ft)){var e=document.createElement("style");e.id=ft,e.textContent=qi,document.head.appendChild(e)}})();var S={root:"_root_1ekyz_1",carouselContainer:"_carouselContainer_1ekyz_12",carouselWrapper:"_carouselWrapper_1ekyz_19",carouselContentWrapper:"_carouselContentWrapper_1ekyz_26",carouselContent:"_carouselContent_1ekyz_26",notAnimation:"_notAnimation_1ekyz_41",carouselItem:"_carouselItem_1ekyz_45",backgroundMask:"_backgroundMask_1ekyz_60",dynamicBg:"_dynamicBg_1ekyz_75"};var C=r(a(),1);var ce=class extends bt.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}},{id:this.props.id,name:"nextSlide",func:()=>{this.state.currentSlide<=this.props.slides.length-1&&this.setState({prevSlide:this.state.currentSlide,currentSlide:this.state.currentSlide+1})}},{id:this.props.id,name:"prevSlide",func:()=>{this.state.currentSlide>=0&&this.setState({prevSlide:this.state.currentSlide,currentSlide:this.state.currentSlide-1})}}];this.state={currentSlide:0,prevSlide:1,hidden:!1}}componentDidUpdate(t,o,s){this.state.currentSlide===-1&&setTimeout(()=>{this.setState({prevSlide:this.state.currentSlide,currentSlide:this.props.slides.length-1})},500),this.state.currentSlide===this.props.slides.length&&setTimeout(()=>{this.setState({prevSlide:this.state.currentSlide,currentSlide:0})},500)}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}getContent(){return this.props.slides.length<=0?"":this.props.slides[this.state.currentSlide]?this.props.slides[this.state.currentSlide].content:""}changeMenu(t){this.setState({currentSlide:t})}render(){var t,o;return this.state.hidden||this.props.slides.length<1?"":(0,C.jsxs)("div",{id:this.props.id+"-element",className:S.root+" "+this.props.carouselContainerStyle,children:[(0,C.jsx)("div",{className:S.backgroundMask+" "+this.props.backgroundMaskStyle,style:{backgroundColor:`${this.props.slides[this.state.currentSlide===-1?this.props.slides.length-1:this.state.currentSlide===this.props.slides.length?0:this.state.currentSlide].backgroundColor}`},children:(0,C.jsx)("div",{className:S.dynamicBg})}),(0,C.jsx)("div",{"data-id":this.props.id+"-carouselWrapperStyle",className:S.carouselWrapper+" "+this.props.carouselWrapperStyle,children:(0,C.jsx)("div",{"data-id":this.props.id+"-carouselContentWrapperStyle",className:S.carouselContentWrapper+" "+this.props.carouselContentWrapperStyle,children:(0,C.jsxs)("div",{"data-id":this.props.id+"-carouselContentStyle",className:n({[S.notAnimation]:this.state.currentSlide===0&&this.state.prevSlide===this.props.slides.length||this.state.currentSlide===this.props.slides.length-1&&this.state.prevSlide===-1},S.carouselContent+" "+this.props.carouselContentStyle,`${this.state.currentSlide}`),style:{transform:`translateX(-${(this.state.currentSlide+1)*100}%)`},children:[(0,C.jsx)("div",{"data-id":this.props.id+"-carouselItemStyle",className:n({},S.carouselItem,this.props.carouselItemStyle),children:(t=this.props.slides[this.props.slides.length-1])==null?void 0:t.content}),this.props.slides.map((s,d)=>(0,C.jsx)("div",{"data-id":this.props.id+"-carouselItemStyle",className:n({active:this.state.currentSlide===d},S.carouselItem,this.props.carouselItemStyle),children:this.props.slides[d].content})),(0,C.jsx)("div",{"data-id":this.props.id+"-carouselItemStyle",className:n({},S.carouselItem,this.props.carouselItemStyle),children:(o=this.props.slides[0])==null?void 0:o.content})]})})})]})}};var yt=r(_(),1);var gt="dfb3e676ea05dae067ae950ac9f4df4d6807c9db0f9a3a03f3af666480bedb93",Yi=`._root_18cgc_1 {
  width: 32rem;
  height: 32rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

._root_18cgc_1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

._img_18cgc_16 {
  display: none;
}

._mobile_18cgc_20 {
  display: block;
}

@media (min-width: 760px) {
  ._img_18cgc_16 {
    display: block;
  }

  ._img_18cgc_16._mobile_18cgc_20 {
    display: none;
  }
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(gt)){var e=document.createElement("style");e.id=gt,e.textContent=Yi,document.head.appendChild(e)}})();var X={root:"_root_18cgc_1",img:"_img_18cgc_16",mobile:"_mobile_18cgc_20"};var G=r(a(),1);var he=class extends yt.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:this.props.hidden}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}render(){return this.state.hidden?"":(0,G.jsxs)("div",{id:this.props.id+"-element",className:X.root+" "+this.props.imageDisplayHolderStyle,children:[(0,G.jsx)("img",{"data-id":this.props.id+"-imgStyle",className:X.img+" "+this.props.imgStyle,src:this.props.image,alt:this.props.image}),(0,G.jsx)("img",{"data-id":this.props.id+"-imgMobileStyle",className:X.img+" "+X.mobile+" "+this.props.imgMobileStyle,src:this.props.imageMobile||this.props.image,alt:this.props.image})]})}};var xt=r(_(),1);var vt="6ccd5ee0c07c73ca0c2d1106131b570adce42139e1d623aedf0cfd15d229bcea",Xi=`._root_18fi9_1 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  position: relative;
  width: 100%;
}

._slider_18fi9_11 {
  -webkit-appearance: none;
  appearance: none;
  border-radius: 15px;
  border: 1px solid #fff;
  box-sizing: border-box;
  height: 10px;
  width: 100%;
  background-color: rgba(231, 238, 238, 0.8);
}

._sliderThumb_18fi9_22 {
  border-radius: 8px;
  width: 16px;
  height: 16px;
  position: absolute;
  pointer-events: none;
  top: calc(50%);
  border: 4px solid #fff;
  box-sizing: border-box;
  transition: left 100ms, transform 100ms;
  left: 0%;
  bottom: 0px;
  transform: translateY(-50%) translateX(0%);

  background-color: transparent;
}

._sliderThumbBackground_18fi9_39 {
  width: 100%;
  height: 100%;
}

._slider_18fi9_11:hover {
  opacity: 1;
}

._slider_18fi9_11::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 0px;
  height: 0px;
  cursor: pointer;
  opacity: 0;
}

._slider_18fi9_11::-moz-range-thumb {
  width: 0px;
  height: 0px;
  cursor: pointer;
  opacity: 0;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(vt)){var e=document.createElement("style");e.id=vt,e.textContent=Xi,document.head.appendChild(e)}})();var J={root:"_root_18fi9_1",slider:"_slider_18fi9_11",sliderThumb:"_sliderThumb_18fi9_22",sliderThumbBackground:"_sliderThumbBackground_18fi9_39"};var Z=r(a(),1);var me=class extends xt.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:this.props.hidden,rangeValue:0}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}onChange(t){this.setState({rangeValue:t}),this.props.onChange.forEach(o=>{o()})}render(){return this.state.hidden?"":(0,Z.jsxs)("div",{id:this.props.id+"-element",className:n(J.root,this.props.sliderContainerStyle),children:[(0,Z.jsx)("input",{type:"range",min:"0",max:"100",className:n(J.slider,this.props.sliderStyle),id:"myRange",onChange:t=>this.onChange(t.target.value)}),(0,Z.jsx)("div",{"data-id":this.props.id+"-sliderThumbStyle",style:{left:`${this.state.rangeValue<101?`${this.state.rangeValue}%`:"auto"}`,transform:`translateY(-50%) translateX(-${this.state.rangeValue*1.1}%)`},className:n(J.sliderThumb,this.props.sliderThumbStyle),children:(0,Z.jsx)("span",{className:J.sliderThumbBackground})})]})}};var kt=r(_(),1);var wt="d80aa6b6bf587965bdb1e57d8f68fa9f37344866e42c5c7fd57b978b1da20c6b",Gi=`._root_sv5e0_1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

._tabMenuHeader_sv5e0_8 {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

._tabMenuHeader_sv5e0_8 > * {
  flex-grow: 1;
}

._tabMenuHeaderItem_sv5e0_20 {
  height: fit-content;
  min-width: fit-content;
  padding: 0.2rem 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgba(231, 238, 238, 0.8);
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  flex: 1;

  transition: border 250ms ease-in-out, box-shadow 250ms ease-in-out,
    opacity 250ms ease-in-out, transform 250ms ease-in-out;
  will-change: border, box-shadow, opacity, transform;
}

._tabMenuHeaderItemActive_sv5e0_39 {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgb(236, 236, 236);
  border-right: 1px rgba(231, 238, 238, 0.8) solid;
  flex: 1;
  cursor: none;
  border: 1px solid #a9e3ff;
  box-shadow: 0 0 5px #4cc7f4, inset 0 0 5px #4cc7f4;
  opacity: 1;
}

._tabMenuContent_sv5e0_54 {
  width: 100%;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  height: fit-content;
  overflow-y: scroll;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(wt)){var e=document.createElement("style");e.id=wt,e.textContent=Gi,document.head.appendChild(e)}})();var R={root:"_root_sv5e0_1",tabMenuHeader:"_tabMenuHeader_sv5e0_8",tabMenuHeaderItem:"_tabMenuHeaderItem_sv5e0_20",tabMenuHeaderItemActive:"_tabMenuHeaderItemActive_sv5e0_39",tabMenuContent:"_tabMenuContent_sv5e0_54"};var St="c1d7bc67fdbe6f73c391c47abb64f6605a764681d81309b08a8cc508ddb36296",Ji=`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,600&display=swap');

._base_iwbld_5 * {
  box-sizing: border-box;
}

body {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;

  font-size: 1rem;
  letter-spacing: 0.020625rem;
  line-height: 1.25rem;
}

label,
span {
  display: inline-block;
}

@media (max-width: 600px) {
  body {
    font-size: 0.875rem;
    line-height: 1.125rem;
  }
}

._headlineBase_iwbld_55 {
  font-size: 1rem;
  letter-spacing: 0.020625rem;
  line-height: 1.25rem;
}

._headlineOne_iwbld_67 {
  font-size: 1.5rem;
  letter-spacing: 0.020625rem;
  line-height: 1.75rem;
}

._headlineTwo_iwbld_79 {
  font-size: 1.25rem;
  letter-spacing: 0.01875rem;
  line-height: 1.5rem;
}

._headlineThree_iwbld_91 {
  font-size: 1.125rem;
  letter-spacing: -0.0075;
  line-height: 1.25rem;
}

._subHeadline_iwbld_103 {
  font-size: 0.875rem;
  letter-spacing: 0.01875rem;
  line-height: 1.125rem;
}

._captionOne_iwbld_115 {
  font-size: 0.8125rem;
  letter-spacing: 0.00125rem;
  line-height: 1rem;
}

._captionTwo_iwbld_127 {
  font-size: 0.75rem;
  letter-spacing: 0;
  line-height: 0.875rem;
}

._captionThree_iwbld_139 {
  font-size: 0.5625rem;
  letter-spacing: 0;
  line-height: 0.75rem;
}

::-webkit-scrollbar {
  width: none;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(St)){var e=document.createElement("style");e.id=St,e.textContent=Ji,document.head.appendChild(e)}})();var Ct={base:"_base_iwbld_5",headlineBase:"_headlineBase_iwbld_55",headlineOne:"_headlineOne_iwbld_67",headlineTwo:"_headlineTwo_iwbld_79",headlineThree:"_headlineThree_iwbld_91",subHeadline:"_subHeadline_iwbld_103",captionOne:"_captionOne_iwbld_115",captionTwo:"_captionTwo_iwbld_127",captionThree:"_captionThree_iwbld_139"};var A=r(a(),1);var ue=class extends kt.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={currentSub:0,hidden:!1}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}getContent(){return this.props.tabMenu.length<=0?"":this.props.tabMenu[this.state.currentSub]?this.props.tabMenu[this.state.currentSub].content:""}changeMenu(t){this.setState({currentSub:t})}render(){return this.state.hidden?"":(0,A.jsxs)("div",{id:this.props.id+"-element",className:R.root+" "+this.props.tabMenuHolderStyle,children:[(0,A.jsx)("div",{"data-id":this.props.id+"-tabMenuHeaderStyle",className:R.tabMenuHeader+" "+this.props.tabMenuHeaderStyle,children:this.props.tabMenu.map((t,o)=>(0,A.jsx)("div",{"data-id":this.props.id+"-tabMenuItemStyle",className:n(R.tabMenuHeaderItem,{[R.tabMenuHeaderItemActive]:this.state.currentSub===o},Ct.headlineBase,this.props.tabMenuItemStyle,this.props.tabMenuItemActiveStyle),onClick:()=>{this.changeMenu(o)},children:t.name}))}),(0,A.jsx)("div",{"data-id":this.props.id+"-tabMenuContentStyle",className:n(R.tabMenuContent,this.props.tabMenuContentStyle),children:this.getContent()})]})}};var Ht=r(_(),1);var It="a0c37d8616137e03408beb4103bb7bd340dd403a2eaa7ef7082e97b9a80aee84",Ki=`._root_1v88f_1 {
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(It)){var e=document.createElement("style");e.id=It,e.textContent=Ki,document.head.appendChild(e)}})();var zt={root:"_root_1v88f_1"};var Bt=r(a(),1);var _e=class extends Ht.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:this.props.hidden}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}render(){return this.state.hidden?"":(0,Bt.jsx)("div",{id:this.props.id+"-element",className:n(zt.root,this.props.textStyle),children:this.props.inputText})}};var jt="3106637566f3ecd1a9e0cc95540baf64a664fefa7fe691e9bd62f0f4df92292d",Qi=`._container_1vjsa_1 {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
}

._hide_1vjsa_8 {
  display: none !important;
}

._horizontalContainer_1vjsa_12 {
  flex-direction: row;
}

._verticalContainer_1vjsa_16 {
  flex-direction: column;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(jt)){var e=document.createElement("style");e.id=jt,e.textContent=Qi,document.head.appendChild(e)}})();var Ae={container:"_container_1vjsa_1",hide:"_hide_1vjsa_8",horizontalContainer:"_horizontalContainer_1vjsa_12",verticalContainer:"_verticalContainer_1vjsa_16"};var Ot=r(_(),1);var Mt=r(a(),1);var fe=class extends Ot.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:!1}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}render(){return(0,Mt.jsx)("div",{id:this.props.id+"-element",className:n(Ae.container+" "+this.props.containerStyle,{[Ae.hide]:this.props.hide||this.state.hidden}),children:this.props.content})}};var Pt=r(_(),1);var Nt="e6720a5d7bc5108afbd5fb396d60cce7c126e3176dc27e3516874df7b08f8bd0",eo=`._root_1y5nz_1 {
  width: 100%;
  height: 100%;
  display: flex;
}

._root_1y5nz_1 * {
  box-sizing: border-box;
}

._root_1y5nz_1._left_1y5nz_11 > *:nth-child(2) {
  align-self: self-start;
}
._root_1y5nz_1._right_1y5nz_14 > *:nth-child(2) {
  align-self: self-start;
}

._root_1y5nz_1._right_1y5nz_14 {
  flex-direction: row-reverse;
}

._root_1y5nz_1._top_1y5nz_22 {
  flex-direction: column;
}

._root_1y5nz_1._bottom_1y5nz_26 {
  flex-direction: column-reverse;
}

._bottom_1y5nz_26 ._nav_1y5nz_30,
._top_1y5nz_22._nav_1y5nz_30 {
}

._nav_1y5nz_30 {
  width: 3.5rem;
  height: max-content;
  display: flex;
  flex-direction: column;
}

._top_1y5nz_22 > ._nav_1y5nz_30,
._bottom_1y5nz_26 > ._nav_1y5nz_30 {
  width: 100%;
  flex-direction: row;
}

._navItemHolder_1y5nz_47 {
  height: 3.5rem;
  width: 3.5rem;
  min-height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgba(231, 238, 238, 0.6);
  inline-size: 56px;
  font-style: normal;
  overflow: hidden;
}

._navItemHolder_1y5nz_47._active_1y5nz_61 {
  color: rgb(236, 236, 236);
}

._navItemLabel_1y5nz_65 {
  display: inline-block;
  margin-top: 2px;
}

._navImgHolder_1y5nz_70 {
  width: 1.75rem;
  height: 1.75rem;

  opacity: 0.7;
}

._navImgHolder_1y5nz_70 > * {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

._navItemHolder_1y5nz_47._active_1y5nz_61 ._navImgHolder_1y5nz_70 {
  opacity: 1;
}

._top_1y5nz_22 > ._content_1y5nz_87,
._bottom_1y5nz_26 > ._content_1y5nz_87 {
  margin-top: 8px;
}

._content_1y5nz_87 {
  /* display: flex;
  flex-wrap: wrap; */
  box-sizing: border-box;
  flex-grow: 1;
  overflow-y: scroll;
  scrollbar-width: none;
  height: 100%;
}

._left_1y5nz_11 ._content_1y5nz_87,
._right_1y5nz_14 ._content_1y5nz_87 {
}
::-webkit-scrollbar {
  display: none;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Nt)){var e=document.createElement("style");e.id=Nt,e.textContent=eo,document.head.appendChild(e)}})();var w={root:"_root_1y5nz_1",left:"_left_1y5nz_11",right:"_right_1y5nz_14",top:"_top_1y5nz_22",bottom:"_bottom_1y5nz_26",nav:"_nav_1y5nz_30",navItemHolder:"_navItemHolder_1y5nz_47",active:"_active_1y5nz_61",navItemLabel:"_navItemLabel_1y5nz_65",navImgHolder:"_navImgHolder_1y5nz_70",content:"_content_1y5nz_87"};var Tt="f41800c53fe6e2eead0680745d1da75001eecd3ac943e8b36d6b50531f65173a",to=`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,600&display=swap');

._base_iwbld_5 * {
  box-sizing: border-box;
}

body {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;

  font-size: 1rem;
  letter-spacing: 0.020625rem;
  line-height: 1.25rem;
}

label,
span {
  display: inline-block;
}

@media (max-width: 600px) {
  body {
    font-size: 0.875rem;
    line-height: 1.125rem;
  }
}

._headlineBase_iwbld_55 {
  font-size: 1rem;
  letter-spacing: 0.020625rem;
  line-height: 1.25rem;
}

._headlineOne_iwbld_67 {
  font-size: 1.5rem;
  letter-spacing: 0.020625rem;
  line-height: 1.75rem;
}

._headlineTwo_iwbld_79 {
  font-size: 1.25rem;
  letter-spacing: 0.01875rem;
  line-height: 1.5rem;
}

._headlineThree_iwbld_91 {
  font-size: 1.125rem;
  letter-spacing: -0.0075;
  line-height: 1.25rem;
}

._subHeadline_iwbld_103 {
  font-size: 0.875rem;
  letter-spacing: 0.01875rem;
  line-height: 1.125rem;
}

._captionOne_iwbld_115 {
  font-size: 0.8125rem;
  letter-spacing: 0.00125rem;
  line-height: 1rem;
}

._captionTwo_iwbld_127 {
  font-size: 0.75rem;
  letter-spacing: 0;
  line-height: 0.875rem;
}

._captionThree_iwbld_139 {
  font-size: 0.5625rem;
  letter-spacing: 0;
  line-height: 0.75rem;
}

::-webkit-scrollbar {
  width: none;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Tt)){var e=document.createElement("style");e.id=Tt,e.textContent=to,document.head.appendChild(e)}})();var Et={base:"_base_iwbld_5",headlineBase:"_headlineBase_iwbld_55",headlineOne:"_headlineOne_iwbld_67",headlineTwo:"_headlineTwo_iwbld_79",headlineThree:"_headlineThree_iwbld_91",subHeadline:"_subHeadline_iwbld_103",captionOne:"_captionOne_iwbld_115",captionTwo:"_captionTwo_iwbld_127",captionThree:"_captionThree_iwbld_139"};var z=r(a(),1);var be=class extends Pt.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={currentSub:0,hidden:!1}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}getContent(){return this.props.submenu.length<=0?"":this.props.submenu[this.state.currentSub]?this.props.submenu[this.state.currentSub].content:""}changeMenu(t){this.setState({currentSub:t})}render(){return this.state.hidden?"":(0,z.jsxs)("div",{id:this.props.id+"-element",className:n(w.root,{[w.left]:this.props.variants==="left",[w.right]:this.props.variants==="right",[w.top]:this.props.variants==="top",[w.bottom]:this.props.variants==="bottom"},this.props.holderStyle),children:[(0,z.jsx)("div",{"data-id":this.props.id+"-navigationHolderStyle",className:w.nav+" "+this.props.navHolderStyle,children:this.props.submenu.map((t,o)=>(0,z.jsxs)("div",{"data-id":this.props.id+"-navigationItemStyle",className:n(w.navItemHolder,this.props.navItemHolderStyle,{[w.active]:this.state.currentSub===o,[this.props.navItemActiveStyle]:this.state.currentSub===o}),onClick:()=>{this.changeMenu(o)},children:[(0,z.jsx)("div",{className:w.navImgHolder+" "+this.props.navImgHolderStyle,children:(0,z.jsx)("img",{className:this.props.navImgStyle,src:this.state.currentSub===o?t.activeIcon:t.inActiveIcon,alt:t.name})}),(0,z.jsx)("label",{"data-id":this.props.id+"-navItemLabelStyle",className:w.navItemLabel+" "+Et.captionThree+" "+this.props.labelStyle,children:t.name})]}))}),(0,z.jsx)("div",{"data-id":this.props.id+"-submenuIconContentHolderStyle",className:n(w.content,this.props.submenuIconContentHolderStyle),children:this.getContent()})]})}};var Lt=r(_(),1);var Zt="b0bcb7f3c313952479a966cb73eaab43a89b4471e8286ed873cf2ac3b2185f8e",io=`._root_1djv3_1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

._header_1djv3_8 {
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

._headerItem_1djv3_16 {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgba(231, 238, 238, 0.8);
  border-right: 1px rgba(231, 238, 238, 0.8) solid;
  flex: 1;
}

._headerItemActive_1djv3_27 {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgb(236, 236, 236);
  border-right: 1px rgba(231, 238, 238, 0.8) solid;
  flex: 1;
}

._headerItem_1djv3_16:last-child {
  border: none;
}

._headerItemActive_1djv3_27:last-child {
  border: none;
}

._content_1djv3_46 {
  width: 100%;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  height: fit-content;
  overflow-y: scroll;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Zt)){var e=document.createElement("style");e.id=Zt,e.textContent=io,document.head.appendChild(e)}})();var L={root:"_root_1djv3_1",header:"_header_1djv3_8",headerItem:"_headerItem_1djv3_16",headerItemActive:"_headerItemActive_1djv3_27",content:"_content_1djv3_46"};var Rt="f9891e24de7ba89641ed71a320d9c1da36322d02dc17bf3df86c4f59bfd12d2b",oo=`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,600&display=swap');

._base_iwbld_5 * {
  box-sizing: border-box;
}

body {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;

  font-size: 1rem;
  letter-spacing: 0.020625rem;
  line-height: 1.25rem;
}

label,
span {
  display: inline-block;
}

@media (max-width: 600px) {
  body {
    font-size: 0.875rem;
    line-height: 1.125rem;
  }
}

._headlineBase_iwbld_55 {
  font-size: 1rem;
  letter-spacing: 0.020625rem;
  line-height: 1.25rem;
}

._headlineOne_iwbld_67 {
  font-size: 1.5rem;
  letter-spacing: 0.020625rem;
  line-height: 1.75rem;
}

._headlineTwo_iwbld_79 {
  font-size: 1.25rem;
  letter-spacing: 0.01875rem;
  line-height: 1.5rem;
}

._headlineThree_iwbld_91 {
  font-size: 1.125rem;
  letter-spacing: -0.0075;
  line-height: 1.25rem;
}

._subHeadline_iwbld_103 {
  font-size: 0.875rem;
  letter-spacing: 0.01875rem;
  line-height: 1.125rem;
}

._captionOne_iwbld_115 {
  font-size: 0.8125rem;
  letter-spacing: 0.00125rem;
  line-height: 1rem;
}

._captionTwo_iwbld_127 {
  font-size: 0.75rem;
  letter-spacing: 0;
  line-height: 0.875rem;
}

._captionThree_iwbld_139 {
  font-size: 0.5625rem;
  letter-spacing: 0;
  line-height: 0.75rem;
}

::-webkit-scrollbar {
  width: none;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Rt)){var e=document.createElement("style");e.id=Rt,e.textContent=oo,document.head.appendChild(e)}})();var At={base:"_base_iwbld_5",headlineBase:"_headlineBase_iwbld_55",headlineOne:"_headlineOne_iwbld_67",headlineTwo:"_headlineTwo_iwbld_79",headlineThree:"_headlineThree_iwbld_91",subHeadline:"_subHeadline_iwbld_103",captionOne:"_captionOne_iwbld_115",captionTwo:"_captionTwo_iwbld_127",captionThree:"_captionThree_iwbld_139"};var W=r(a(),1);var ge=class extends Lt.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={currentSub:0,hidden:!1}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}getContent(){return this.props.submenu.length<=0?"":this.props.submenu[this.state.currentSub]?this.props.submenu[this.state.currentSub].content:""}changeMenu(t){this.setState({currentSub:t})}render(){return this.state.hidden?"":(0,W.jsxs)("div",{id:this.props.id+"-element",className:L.root,children:[(0,W.jsx)("div",{"data-id":this.props.id+"-navigationHeaderStyle",className:n(L.header,this.props.navigationHeaderStyle),children:this.props.submenu.map((t,o)=>(0,W.jsx)("div",{"data-id":this.props.id+"-navigationItemStyle",className:n({[L.headerItemActive]:this.state.currentSub===o},L.headerItem,At.headlineBase,this.props.navigationItemActiveStyle,this.props.navigationItemStyle),onClick:()=>{this.changeMenu(o)},children:t.name}))}),(0,W.jsx)("div",{"data-id":this.props.id+"-contentHolderStyle",className:n(L.content,this.props.contentHolderStyle),children:this.getContent()})]})}};var Dt=r(_(),1);var Wt="84018bccf109bd0443f087aa5e2f4933b5ca35f4f4aea585a1464851537d7cda",no=`._root_1im2s_1 {
  height: fit-content;
  width: fit-content !important;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(231, 238, 238, 0.8);
  background-color: transparent;
  border: 1px rgba(231, 238, 238, 0.8) solid;
  border-radius: 0.5rem;
  cursor: pointer;

  margin-bottom: 4px;

  transition: border 250ms ease-in-out, box-shadow 250ms ease-in-out,
    opacity 250ms ease-in-out, transform 250ms ease-in-out;
  will-change: border, box-shadow, opacity, transform;
}

._root_1im2s_1:hover,
._buttonActive_1im2s_22 {
  border: 1px solid #a9e3ff;
  box-shadow: 0 0 5px #4cc7f4, inset 0 0 5px #4cc7f4;
  opacity: 1;
}

._buttonImage_1im2s_28 {
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  overflow: hidden;
}

._buttonImage_1im2s_28 > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Wt)){var e=document.createElement("style");e.id=Wt,e.textContent=no,document.head.appendChild(e)}})();var K={root:"_root_1im2s_1",buttonActive:"_buttonActive_1im2s_22",buttonImage:"_buttonImage_1im2s_28"};var D=r(a(),1);var ye=class extends Dt.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:!1}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}click(){this.props.onClick.forEach(t=>{t()})}render(){return this.state.hidden?"":(0,D.jsxs)("div",{id:this.props.id+"-element",className:n(K.root,this.props.buttonStyle,{[K.buttonActive]:this.props.isActive,[this.props.buttonActiveStyle]:this.props.isActive}),onClick:this.click.bind(this),children:[this.props.image&&(0,D.jsx)("div",{"data-id":this.props.id+"-buttonImageStyle",className:n(K.buttonImage,this.props.buttonImageStyle),children:(0,D.jsx)("img",{src:this.props.image,alt:"button_image"})}),(0,D.jsx)("span",{"data-id":this.props.id+"-buttonLabelStyle",className:n(K.buttonLabel,this.props.buttonLabelStyle),children:this.props.name})]})}};var xe=r(_(),1);var Ut="eb8ee77a1183b6ae617b417a64ab910135c15e3f4050a5fa2d263a89ff7327d5",ro=`._root_1ubxb_1 {
  --btn-menu-size: 2.25rem;
  --btn-menu-color: white;
  --btn-menu-bg: gray;

  --menu-hor-height: 35%;
  --menu-ver-width: 35vw;
  --menu-ver-max-width: 96vw;
  --menu-bg: rgba(36, 52, 65, 0.1);

  --transition-duration: 0.75s;
  --transition-timing-function: ease;

  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  overflow: hidden;
  pointer-events: none;
}

._root_1ubxb_1 * {
  box-sizing: border-box;
}

/* body {
  background-color: red;
} */

/* MENU */

._menu_1ubxb_32 {
  padding-left: 0.7rem;
  padding-right: 0.7rem;

  display: flex;
  flex-direction: column;
}

._menu_1ubxb_32 > *:nth-child(1) {
  flex-grow: 1;
}

/* menu button always in the end of menu */
._menu_1ubxb_32 > *:nth-child(2) {
  /* align-self: end; */
}

._menuHor_1ubxb_49 {
  height: var(--menu-hor-height);
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  transition: bottom var(--transition-duration)
    var(--transition-timing-function);
  pointer-events: auto;
  display: inline-flex;
  background-color: var(--menu-bg);
}

._menuHor_1ubxb_49:before {
  /* fix css filter on the parent break child positioning */

  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(12px);
  z-index: -100;
}

._menuHor_1ubxb_49::-webkit-scrollbar {
  display: none;
}

._menuHor_1ubxb_49._hidden_1ubxb_79 {
  bottom: calc(-1 * var(--menu-hor-height) + var(--btn-menu-size) + 1rem);
}

._menuVer_1ubxb_83 {
  height: 100%;
  width: var(--menu-ver-width);
  position: absolute;
  top: 0;
  pointer-events: auto;
  background-color: var(--menu-bg);
  backdrop-filter: blur(12px);
}

._menuVer_1ubxb_83._left_1ubxb_93 {
  left: 0;
  transition: left var(--transition-duration) var(--transition-timing-function);
}

._menuVer_1ubxb_83._left_1ubxb_93._hidden_1ubxb_79 {
  left: calc(-1 * var(--menu-ver-width) + 2 * var(--btn-menu-size));
}

._hidden_1ubxb_79 > * > ._menuItemsHolder_1ubxb_102 {
  /* display: none !important; */
  visibility: hidden;
}

._menuVer_1ubxb_83._right_1ubxb_107 {
  right: 0;
  transition: right var(--transition-duration) var(--transition-timing-function);
}

._menuVer_1ubxb_83._right_1ubxb_107._hidden_1ubxb_79 {
  right: calc(-1 * var(--menu-ver-width) + 2 * var(--btn-menu-size));
}

@media (max-width: 600px) {
  ._menuVer_1ubxb_83,
  ._menuBtnVerRight_1ubxb_118 {
    width: var(--menu-ver-max-width);
  }

  ._menuVer_1ubxb_83._left_1ubxb_93._hidden_1ubxb_79 {
    left: calc(-1 * var(--menu-ver-max-width) + 2 * var(--btn-menu-size));
  }
  ._menuVer_1ubxb_83._right_1ubxb_107._hidden_1ubxb_79 {
    right: calc(-1 * var(--menu-ver-max-width) + 2 * var(--btn-menu-size));
  }
}

/* Content Holder */

._specialHolder_1ubxb_132 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  min-height: 100%;
  height: 100%;
  position: relative;
  justify-content: space-between;
}

._specialHolderHori_1ubxb_143 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  height: calc(100% - 1.5 * var(--btn-menu-size));
  justify-content: space-between;
  overflow-y: scroll;
  scrollbar-width: none;
}

._specialHolderHori_1ubxb_143::-webkit-scrollbar {
  display: none;
}

._menuItemHolderWrapper_1ubxb_158 {
  width: 100%;
  height: auto;
  flex: 1;
  overflow-y: scroll;
}

._menuItemHolderWrapper_1ubxb_158::-webkit-scrollbar {
  display: none;
}

._menuItemsHolder_1ubxb_102 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;
}

._menuButtonHolder_1ubxb_178 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  margin-top: 1.25;
}

/* Toggle Button */

._menuBtnContainer_1ubxb_189 {
  height: calc(var(--btn-menu-size) + 1rem);
}

._menuBtn_1ubxb_118 {
  display: flex;
  height: var(--btn-menu-size);
  width: var(--btn-menu-size);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: var(--btn-menu-bg);
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  pointer-events: auto;
  position: fixed;
}

._menuBtn_1ubxb_118 img {
  width: 80%;
  height: 80%;
  border-radius: 50%;
}

._menuBtnHor_1ubxb_216 {
  position: fixed;
  left: 0.5rem;
  bottom: 0.5rem;
}

._menuBtnVerLeft_1ubxb_222 {
  bottom: 0.5rem;
  right: 0.88rem;
}

._menuBtnVerRight_1ubxb_118 {
  bottom: 0.5rem;
  left: 0.5rem;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Ut)){var e=document.createElement("style");e.id=Ut,e.textContent=ro,document.head.appendChild(e)}})();var y={root:"_root_1ubxb_1",menu:"_menu_1ubxb_32",menuHor:"_menuHor_1ubxb_49",hidden:"_hidden_1ubxb_79",menuVer:"_menuVer_1ubxb_83",left:"_left_1ubxb_93",menuItemsHolder:"_menuItemsHolder_1ubxb_102",right:"_right_1ubxb_107",menuBtnVerRight:"_menuBtnVerRight_1ubxb_118",specialHolder:"_specialHolder_1ubxb_132",specialHolderHori:"_specialHolderHori_1ubxb_143",menuItemHolderWrapper:"_menuItemHolderWrapper_1ubxb_158",menuButtonHolder:"_menuButtonHolder_1ubxb_178",menuBtnContainer:"_menuBtnContainer_1ubxb_189",menuBtn:"_menuBtn_1ubxb_118",menuBtnHor:"_menuBtnHor_1ubxb_216",menuBtnVerLeft:"_menuBtnVerLeft_1ubxb_222"};var $t="a3ae497c90a5297f8612ad85dc1940266eee0b543fd2302674f87cf67f3ae8b1",so=`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,600&display=swap');

._base_iwbld_5 * {
  box-sizing: border-box;
}

body {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;

  font-size: 1rem;
  letter-spacing: 0.020625rem;
  line-height: 1.25rem;
}

label,
span {
  display: inline-block;
}

@media (max-width: 600px) {
  body {
    font-size: 0.875rem;
    line-height: 1.125rem;
  }
}

._headlineBase_iwbld_55 {
  font-size: 1rem;
  letter-spacing: 0.020625rem;
  line-height: 1.25rem;
}

._headlineOne_iwbld_67 {
  font-size: 1.5rem;
  letter-spacing: 0.020625rem;
  line-height: 1.75rem;
}

._headlineTwo_iwbld_79 {
  font-size: 1.25rem;
  letter-spacing: 0.01875rem;
  line-height: 1.5rem;
}

._headlineThree_iwbld_91 {
  font-size: 1.125rem;
  letter-spacing: -0.0075;
  line-height: 1.25rem;
}

._subHeadline_iwbld_103 {
  font-size: 0.875rem;
  letter-spacing: 0.01875rem;
  line-height: 1.125rem;
}

._captionOne_iwbld_115 {
  font-size: 0.8125rem;
  letter-spacing: 0.00125rem;
  line-height: 1rem;
}

._captionTwo_iwbld_127 {
  font-size: 0.75rem;
  letter-spacing: 0;
  line-height: 0.875rem;
}

._captionThree_iwbld_139 {
  font-size: 0.5625rem;
  letter-spacing: 0;
  line-height: 0.75rem;
}

::-webkit-scrollbar {
  width: none;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById($t)){var e=document.createElement("style");e.id=$t,e.textContent=so,document.head.appendChild(e)}})();var Vt={base:"_base_iwbld_5",headlineBase:"_headlineBase_iwbld_55",headlineOne:"_headlineOne_iwbld_67",headlineTwo:"_headlineTwo_iwbld_79",headlineThree:"_headlineThree_iwbld_91",subHeadline:"_subHeadline_iwbld_103",captionOne:"_captionOne_iwbld_115",captionTwo:"_captionTwo_iwbld_127",captionThree:"_captionThree_iwbld_139"};var k=r(a(),1);var ve=class extends xe.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"close",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"open",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:this.props.hiddenAtStart?this.props.hiddenAtStart:!1,hideContent:this.props.hiddenAtStart&&this.props.hideContentWhenClose}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}click(t){t?(this.props.toggleOn.forEach(o=>{o()}),this.setState({hideContent:!1})):(this.props.toggleOff.forEach(o=>{o()}),this.props.hideContentWhenClose&&this.setState({hideContent:!0}))}renderTheme(){return(0,k.jsx)(xe.Fragment,{children:(0,k.jsxs)("div",{id:this.props.id+"-element",className:n(y.menu,this.props.menuStyle,{[y.menuHor]:this.props.variants==="horizontal",[y.menuVer]:this.props.variants!=="horizontal",[y.left]:this.props.variants==="vertical-left",[y.right]:this.props.variants==="vertical-right",[y.hidden]:this.state.hidden,[this.props.menuHiddenStyle]:this.state.hidden}),children:[(0,k.jsx)("div",{"data-id":this.props.id+"-contentHolderStyle",className:n(y.specialHolderHori,this.props.contentHolderStyle),children:(0,k.jsx)("div",{className:y.menuItemsHolder+" "+this.props.menuItemsHolderStyle,children:this.props.content})},"main-component"),!this.props.hideMenuButton&&(0,k.jsx)("div",{className:y.menuBtnContainer,children:(0,k.jsx)("span",{"data-id":this.props.id+"-buttonStyle",className:n(y.menuBtn,{[y.menuBtnHor]:this.props.variants==="horizontal",[y.menuBtnVerLeft]:this.props.variants==="vertical-left",[y.menuBtnVerRight]:this.props.variants==="vertical-right"},this.props.buttonStyle),onClick:()=>{let t=!this.state.hidden;this.setState({hidden:t}),this.click(!t)},children:this.state.hidden?(0,k.jsx)("img",{src:this.props.openButtonImage?this.props.openButtonImage:""}):(0,k.jsx)("img",{src:this.props.closeButtonImage?this.props.closeButtonImage:""})})})]})})}render(){return(0,k.jsx)("div",{className:y.root+" "+Vt.base+" "+this.props.baseStyle+" "+this.props.menuOverlayStyle,children:this.renderTheme()})}};var qt=r(_(),1);var Ft="574a8e5847476443320e50fd527a39934518ce2c3be27db0ca9ea36010a45b83",ao=`._root_fs9ve_1 {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 9999px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  border: 1px solid rgba(231, 238, 238, 0.4);
  transition: border 250ms ease-in-out, box-shadow 250ms ease-in-out,
    opacity 250ms ease-in-out, transform 250ms ease-in-out;
  will-change: border, box-shadow, opacity, transform;

  height: 3rem;
  width: 3rem;
}

._root_fs9ve_1._active_fs9ve_19,
._root_fs9ve_1:hover {
  border: 1px solid #a9e3ff;
  box-shadow: 0 0 5px #4cc7f4, inset 0 0 5px #4cc7f4;
  opacity: 1;
}

._active_fs9ve_19 {
  pointer-events: none;
}

._hidden_fs9ve_30 {
  display: none;
}

@media (max-width: 600px) {
  ._root_fs9ve_1 {
    width: 2.5rem;
    height: 2.5rem;
  }
}

._animation_fs9ve_41._toUp_fs9ve_41 {
  transform: rotate(0);
}

._animation_fs9ve_41._toLeft_fs9ve_45 {
  transform: rotate(-90deg);
}
._animation_fs9ve_41._toRight_fs9ve_48 {
  transform: rotate(90deg);
}
._animation_fs9ve_41._toDown_fs9ve_51 {
  transform: rotate(180deg);
}

._buttonsBox_fs9ve_55 {
  display: flex;
  align-items: start;
  justify-content: center;
  border: transparent;
  line-height: 1;
  height: 100%;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  border-radius: 9999px;

  overflow: hidden;

  /* using this tool to covert hex-color and apply filter to change png img: https://codepen.io/sosuke/pen/Pjoqqp */
  /* filter: invert(95%) sepia(12%) saturate(304%) hue-rotate(183deg)
    brightness(99%) contrast(90%); */
}

._btnImgBox_fs9ve_75 {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  height: 100%;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  border-radius: 9999px;
}

._animation_fs9ve_41 > ._buttonsBox_fs9ve_55 > ._btnImgBox_fs9ve_75 {
  width: 100%;
  height: 100%;
}

._animation_fs9ve_41 > ._buttonsBox_fs9ve_55 > ._btnImgBox_fs9ve_75._first_fs9ve_93 {
  animation: _arrowsMove_fs9ve_1 2s infinite;
  opacity: 1;
}

._animation_fs9ve_41 > ._buttonsBox_fs9ve_55 > ._btnImgBox_fs9ve_75._second_fs9ve_98 {
  animation: _arrowsMove_fs9ve_1 2s infinite;
  animation-delay: 0s;
  animation-delay: 1s;
  opacity: 0;
}

@keyframes _arrowsMove_fs9ve_1 {
  0% {
    transform: translateY(50%);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-50%);
    opacity: 0;
  }
}

._img_fs9ve_120 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 9999px;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Ft)){var e=document.createElement("style");e.id=Ft,e.textContent=ao,document.head.appendChild(e)}})();var v={root:"_root_fs9ve_1",active:"_active_fs9ve_19",hidden:"_hidden_fs9ve_30",animation:"_animation_fs9ve_41",toUp:"_toUp_fs9ve_41",toLeft:"_toLeft_fs9ve_45",toRight:"_toRight_fs9ve_48",toDown:"_toDown_fs9ve_51",buttonsBox:"_buttonsBox_fs9ve_55",btnImgBox:"_btnImgBox_fs9ve_75",first:"_first_fs9ve_93",arrowsMove:"_arrowsMove_fs9ve_1",second:"_second_fs9ve_98",img:"_img_fs9ve_120"};var j=r(a(),1);var we=class extends qt.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:!!this.props.hideAtStart}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}click(){this.props.onClick.forEach(t=>{t()})}render(){return this.state.hidden?"":(0,j.jsx)("div",{id:this.props.id+"-element",className:n(v.root,{[v.animation]:this.props.useAnimation,[v.toUp]:this.props.variants==="animation-to-up",[v.toLeft]:this.props.variants==="animation-to-left",[v.toRight]:this.props.variants==="animation-to-right",[v.toDown]:this.props.variants==="animation-to-down",[v.active]:!this.props.isNotActive,[this.props.buttonActiveStyle]:!this.props.isNotActive},this.props.buttonStyle),onClick:this.click.bind(this),children:(0,j.jsxs)("div",{className:v.buttonsBox+" "+this.props.imagesHolderStyle,children:[(0,j.jsx)("div",{className:v.btnImgBox+" "+v.first+this.props.imageBoxStyle,children:(0,j.jsx)("img",{className:v.img+""+this.props.imgStyle,src:this.props.image,alt:"Pic_Button_One"})}),(0,j.jsx)("div",{className:v.btnImgBox+" "+v.second+this.props.imageBoxStyle,children:(0,j.jsx)("img",{className:v.img+" "+this.props.imgStyle,src:this.props.image,alt:"Pic_Button_Option"})})]})})}};var Xt=r(_(),1);var Yt="72dac0e92faee9baf25ed563c82cc08396bda9f47b8ff416bcd3daa41942ef66",lo=`._root_14d92_1 {
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  font-style: normal;
  border-radius: 9999px;
  transition: border 250ms ease-in-out, box-shadow 250ms ease-in-out,
    opacity 250ms ease-in-out, transform 250ms ease-in-out;
  will-change: border, box-shadow, opacity, transform;
  border: 1px solid rgba(231, 238, 238, 0.4);

  margin-bottom: 5px;
}

._root_14d92_1 img {
  /* display: inline-block; */
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 9999px;
}
._root_14d92_1._onState_14d92_24 {
  border: 1px solid #a9e3ff;
  box-shadow: 0 0 5px #4cc7f4, inset 0 0 5px #4cc7f4;
}

@media (max-width: 600px) {
  ._root_14d92_1 {
    width: 2.5rem;
    height: 2.5rem;
  }
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Yt)){var e=document.createElement("style");e.id=Yt,e.textContent=lo,document.head.appendChild(e)}})();var Le={root:"_root_14d92_1",onState:"_onState_14d92_24"};var We=r(a(),1);var Se=class extends Xt.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:!1,on:this.props.on}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}toggle(){let t=!this.state.on;t?this.props.turnON.forEach(o=>{o()}):this.props.turnOFF.forEach(o=>{o()}),this.setState({on:t})}render(){return this.state.hidden?"":(0,We.jsx)("div",{id:this.props.id+"-element",className:n(Le.root,{[Le.onState]:this.state.on},this.props.buttonStyle),onClick:this.toggle.bind(this),children:(0,We.jsx)("img",{src:this.state.on?this.props.onImg:this.props.offImg})})}};var Jt=r(_(),1);var Gt="2010073cb9c4b579793f14bb68a97df6f64987da776440d763eb7e2dadd2e281",po=`._root_rgdr5_1 {
  width: 100%;
}

._selectButtonLabel_rgdr5_5 {
  color: rgba(231, 238, 238, 0.8);
  display: inline-block;

  margin-bottom: 6px;
}

._selectButtonItemHolder_rgdr5_12 {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  align-content: start;
}

._selectButtonItem_rgdr5_12 {
  border: rgba(231, 238, 238, 0.4) 2px solid;
  color: rgba(231, 238, 238, 0.4);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: fit-content;
  background-color: transparent;
  border-radius: 0.5rem;
  cursor: pointer;

  padding: 0.5rem 1rem;
}

._selectButtonItemActive_rgdr5_36 {
  color: rgba(231, 238, 238, 0.8);
  border: 2px solid #a9e3ff;
  box-shadow: 0 0 5px #4cc7f4, inset 0 0 5px #4cc7f4;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Gt)){var e=document.createElement("style");e.id=Gt,e.textContent=po,document.head.appendChild(e)}})();var U={root:"_root_rgdr5_1",selectButtonLabel:"_selectButtonLabel_rgdr5_5",selectButtonItemHolder:"_selectButtonItemHolder_rgdr5_12",selectButtonItem:"_selectButtonItem_rgdr5_12",selectButtonItemActive:"_selectButtonItemActive_rgdr5_36"};var $=r(a(),1);var Ce=class extends Jt.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:!1}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}click(){this.props.onClick.forEach(t=>{t()})}render(){var t,o;return this.state.hidden?"":(0,$.jsxs)("div",{id:this.props.id+"-element",className:n(U.root,this.props.holderStyle),children:[this.props.hideLabel?"":(0,$.jsx)("label",{"data-id":this.props.id+"-labelStyle",className:n(U.selectButtonLabel,this.props.labelStyle),children:this.props.label}),(0,$.jsx)("div",{className:U.selectButtonItemHolder,children:(o=(t=this.props.selectionObject)==null?void 0:t.selection)!=null&&o.list?this.props.selectionObject.selection.list.map((s,d)=>(0,$.jsx)("div",{"data-id":this.props.id+"-itemStyle",className:n(U.selectButtonItem,{[U.selectButtonItemActive]:this.props.selectionObject.selection.currentIndex===d},this.props.itemStyle),onClick:()=>{this.props.selectionObject.selection.onChange(d),this.click.bind(this)},children:s[this.props.selectionObject.displayValue.name]})):""})]})}};var Qt=r(_(),1);var Kt="9445684bc62ddfc01935d40e11e538fdda371b94220dc3449bbc9560802cb0f7",co=`* {
  box-sizing: border-box;
}

._root_1sd9d_5 {
  width: 100%;
}

._cardItemsHolder_1sd9d_9 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

._selectPictureLabel_1sd9d_15 {
  color: rgba(231, 238, 238, 0.8);

  margin-bottom: 6px;
}

._cardItem_1sd9d_9 {
  width: 5rem;
  height: 8.5rem;
  border: 1px solid;
  border-radius: 4px;
  min-height: max-content;
  margin-right: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: rgba(231, 238, 238, 0.4);
  color: rgba(231, 238, 238, 0.8);

  font-size: 12px;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  ._cardItem_1sd9d_9 {
    width: 3.75rem;
    height: 6.55rem;
  }
}

._imgBox_1sd9d_46 {
  width: 90%;
  height: 60%;
  margin-bottom: 4px;
}

._imgBox_1sd9d_46 > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

._caption_1sd9d_58 {
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 1;

  overflow: hidden;
}

._cardItem_1sd9d_9._active_1sd9d_68 {
  /* border-color: #14b9e6;
  color: #14b9e6; */

  border: 1px solid #a9e3ff;
  box-shadow: 0 0 5px #4cc7f4, inset 0 0 5px #4cc7f4;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Kt)){var e=document.createElement("style");e.id=Kt,e.textContent=co,document.head.appendChild(e)}})();var O={root:"_root_1sd9d_5",cardItemsHolder:"_cardItemsHolder_1sd9d_9",selectPictureLabel:"_selectPictureLabel_1sd9d_15",cardItem:"_cardItem_1sd9d_9",imgBox:"_imgBox_1sd9d_46",caption:"_caption_1sd9d_58",active:"_active_1sd9d_68"};var H=r(a(),1);var ke=class extends Qt.default.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:!1}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}click(){this.props.onClick.forEach(t=>{t()})}render(){var t,o;return this.state.hidden?"":(0,H.jsxs)("div",{id:this.props.id+"-element",className:n(O.root,this.props.holderStyle),children:[!this.props.hideLabel&&(0,H.jsx)("label",{"data-id":this.props.id+"-labelStyle",className:O.selectPictureLabel+this.props.labelStyle,children:this.props.label}),(0,H.jsx)("div",{className:O.cardItemsHolder,children:(o=(t=this.props.selectionObject)==null?void 0:t.selection)!=null&&o.list?this.props.selectionObject.selection.list.map((s,d)=>{var f;let l=(f=this.props.customCardDisplay)==null?void 0:f.find(x=>x.name===s[this.props.selectionObject.displayValue.img]),h=(l==null?void 0:l.image)||s[this.props.selectionObject.displayValue.img],c=(l==null?void 0:l.caption)||s[this.props.selectionObject.displayValue.caption];return(0,H.jsxs)("div",{"data-id":this.props.id+"-itemStyle",className:n(O.cardItem,{[O.active]:this.props.selectionObject.selection.currentIndex===d},this.props.itemStyle),onClick:()=>{this.props.selectionObject.selection.onChange(d),this.click.bind(this)},children:[(0,H.jsx)("div",{className:n(O.imgBox),children:(0,H.jsx)("img",{src:h,alt:s.caption})}),(0,H.jsx)("div",{className:n(O.caption),children:c})]})}):""})]})}};var ti=r(_(),1);var ei="fbcd55e38ea8b2a1cb3a24301433f68405d2e76e7c259c306796b9c2604a5d4c",ho=`._root_1x7sv_1 {
  width: 100%;
}

._selectPictureLabel_1x7sv_5 {
  color: rgba(231, 238, 238, 0.8);
  display: inline-block;

  margin-bottom: 6px;
}

._selectPictureItemHolder_1x7sv_12 {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: start;
}

._selectPictureItem_1x7sv_12 {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  transition: border 250ms ease-in-out, box-shadow 250ms ease-in-out,
    opacity 250ms ease-in-out, transform 250ms ease-in-out;
  will-change: border, box-shadow, opacity, transform;
  border: 1px solid rgba(231, 238, 238, 0.4);
  border-radius: 48px;

  margin-right: 4px;
}

._selectPictureItemActive_1x7sv_37 {
  border: 1px solid #a9e3ff;
  box-shadow: 0 0 5px #4cc7f4, inset 0 0 5px #4cc7f4;
}

._selectPictureItem_1x7sv_12 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

@media (max-width: 600px) {
  ._selectPictureItem_1x7sv_12 {
    width: 2.5rem;
    height: 2.5rem;
  }
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(ei)){var e=document.createElement("style");e.id=ei,e.textContent=ho,document.head.appendChild(e)}})();var V={root:"_root_1x7sv_1",selectPictureLabel:"_selectPictureLabel_1x7sv_5",selectPictureItemHolder:"_selectPictureItemHolder_1x7sv_12",selectPictureItem:"_selectPictureItem_1x7sv_12",selectPictureItemActive:"_selectPictureItemActive_1x7sv_37"};var N=r(a(),1);var Ie=class extends ti.default.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:!1}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}click(){this.props.onClick.forEach(t=>{t()})}render(){var t,o;return this.state.hidden?"":(0,N.jsxs)("div",{id:this.props.id+"-element",className:n(V.root,this.props.holderStyle),children:[!this.props.hideLabel&&(0,N.jsx)("label",{"data-id":this.props.id+"-labelStyle",className:n(V.selectPictureLabel,this.props.labelStyle),children:this.props.label}),(0,N.jsx)("div",{className:n(V.selectPictureItemHolder,this.props.holderItemsStyle),children:(o=(t=this.props.selectionObject)==null?void 0:t.selection)!=null&&o.list?this.props.selectionObject.selection.list.map((s,d)=>{var c;let l=(c=this.props.customPictureDisplay)==null?void 0:c.find(f=>f.name===s[this.props.selectionObject.displayValue.img]),h=(l==null?void 0:l.image)||s[this.props.selectionObject.displayValue.img];return(0,N.jsx)("div",{"data-id":this.props.id+"-itemStyle",onClick:()=>{this.props.selectionObject.selection.onChange(d),this.click.bind(this)},className:n(V.selectPictureItem,{[V.selectPictureItemActive]:this.props.selectionObject.selection.currentIndex===d},this.props.itemStyle,{[this.props.activeItemStyle]:this.props.selectionObject.selection.currentIndex===d}),children:(0,N.jsx)("img",{src:h})})}):""})]})}};var oi=r(_(),1);var ii="0a41e816250965d643af277c30beed96183b0926dba51b2fac6b1134222e0671",mo=`._root_1wy4v_1 {
  min-width: fit-content;
  padding: 0.5rem 1rem;
  margin-bottom: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(231, 238, 238, 0.8);
  background-color: transparent;
  border: 1px rgba(231, 238, 238, 0.8) solid;
  border-radius: 0.5rem;
  cursor: pointer;

  transition: border 250ms ease-in-out, box-shadow 250ms ease-in-out,
    opacity 250ms ease-in-out, transform 250ms ease-in-out;
  will-change: border, box-shadow, opacity, transform;
}

._root_1wy4v_1:hover {
  border: 1px solid #a9e3ff;
  box-shadow: 0 0 5px #4cc7f4, inset 0 0 5px #4cc7f4;
  opacity: 1;
}

._buttonImage_1wy4v_25 {
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  overflow: hidden;
}

._buttonImage_1wy4v_25 > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(ii)){var e=document.createElement("style");e.id=ii,e.textContent=mo,document.head.appendChild(e)}})();var De={root:"_root_1wy4v_1",buttonImage:"_buttonImage_1wy4v_25"};var F=r(a(),1);var ze=class extends oi.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:!1,on:!0}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}toggle(){let t=!this.state.on;t?this.props.turnON.forEach(o=>{o()}):this.props.turnOFF.forEach(o=>{o()}),this.setState({on:t})}render(){return this.state.hidden?"":(0,F.jsxs)("div",{id:this.props.id+"-element",className:n(De.root,this.props.buttonStyle),onClick:this.toggle.bind(this),children:[this.props.onImage&&(0,F.jsx)("div",{"data-id":this.props.id+"-buttonImageStyle",className:n(De.buttonImage,this.props.buttonImageStyle),children:(0,F.jsx)("img",{src:this.state.on?this.props.onImage:this.props.offImage,alt:"button_image"})}),(0,F.jsx)("span",{"data-id":this.props.id+"-buttonLabelStyle",className:this.props.buttonLabelStyle,children:this.state.on?this.props.onText:this.props.offText})]})}};var ai=r(_(),1);var ni="d9edeb15b4822f07a0bdfcbc8bbaa46f913b62b0045adac4c30af0115ee2510e",uo=`._root_1susl_1 {
  width: 100%;
}

._dropdownLabel_1susl_5 {
  display: inline-block;

  margin-bottom: 6px;
}

._dropdownLabel_1susl_5,
._dropdown_1susl_5 {
  color: rgba(231, 238, 238, 0.8);
}

._dropdown_1susl_5 {
  width: 100%;
  height: 2.25rem;
  border-radius: 5px;
  outline: none;
  color: gray;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(ni)){var e=document.createElement("style");e.id=ni,e.textContent=uo,document.head.appendChild(e)}})();var Q={root:"_root_1susl_1",dropdownLabel:"_dropdownLabel_1susl_5",dropdown:"_dropdown_1susl_5"};var ri="1fa64a31da712666538c527babf1c21d65a2c0671a09d9dc8582a4a36d612152",_o=`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,600&display=swap');

._base_iwbld_5 * {
  box-sizing: border-box;
}

body {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;

  font-size: 1rem;
  letter-spacing: 0.020625rem;
  line-height: 1.25rem;
}

label,
span {
  display: inline-block;
}

@media (max-width: 600px) {
  body {
    font-size: 0.875rem;
    line-height: 1.125rem;
  }
}

._headlineBase_iwbld_55 {
  font-size: 1rem;
  letter-spacing: 0.020625rem;
  line-height: 1.25rem;
}

._headlineOne_iwbld_67 {
  font-size: 1.5rem;
  letter-spacing: 0.020625rem;
  line-height: 1.75rem;
}

._headlineTwo_iwbld_79 {
  font-size: 1.25rem;
  letter-spacing: 0.01875rem;
  line-height: 1.5rem;
}

._headlineThree_iwbld_91 {
  font-size: 1.125rem;
  letter-spacing: -0.0075;
  line-height: 1.25rem;
}

._subHeadline_iwbld_103 {
  font-size: 0.875rem;
  letter-spacing: 0.01875rem;
  line-height: 1.125rem;
}

._captionOne_iwbld_115 {
  font-size: 0.8125rem;
  letter-spacing: 0.00125rem;
  line-height: 1rem;
}

._captionTwo_iwbld_127 {
  font-size: 0.75rem;
  letter-spacing: 0;
  line-height: 0.875rem;
}

._captionThree_iwbld_139 {
  font-size: 0.5625rem;
  letter-spacing: 0;
  line-height: 0.75rem;
}

::-webkit-scrollbar {
  width: none;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(ri)){var e=document.createElement("style");e.id=ri,e.textContent=_o,document.head.appendChild(e)}})();var si={base:"_base_iwbld_5",headlineBase:"_headlineBase_iwbld_55",headlineOne:"_headlineOne_iwbld_67",headlineTwo:"_headlineTwo_iwbld_79",headlineThree:"_headlineThree_iwbld_91",subHeadline:"_subHeadline_iwbld_103",captionOne:"_captionOne_iwbld_115",captionTwo:"_captionTwo_iwbld_127",captionThree:"_captionThree_iwbld_139"};var q=r(a(),1);var He=class extends ai.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"close",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"open",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:!1}}componentDidMount(){}componentWillUnmount(){}render(){var s,d;return this.state.hidden?"":(0,q.jsxs)("div",{id:this.props.id+"-element","data-id":this.props.id+"-holderStyle",className:n(Q.root,this.props.holderStyle),children:[this.props.hideLabel?"":(0,q.jsx)("label",{"data-id":this.props.id+"-labelStyle",className:n(Q.dropdownLabel,this.props.labelStyle),children:this.props.label}),(0,q.jsx)("select",{"data-id":this.props.id+"-dropdownStyle",value:"a",className:[Q.dropdown,si.subHeadline,this.props.dropdownStyle].join(" "),onChange:l=>{this.props.selectionObject&&this.props.selectionObject.selection&&this.props.selectionObject.selection.onChange(parseInt(l.currentTarget.value))},children:(d=(s=this.props.selectionObject)==null?void 0:s.selection)!=null&&d.list?this.props.selectionObject.selection.list.map((l,h)=>{var c;return(0,q.jsx)("option",{className:Q.dropdownItem,value:h,children:l[(c=this.props.selectionObject.displayValue)==null?void 0:c.name]||""})}):""})]})}};var je=r(_(),1);var di="f473cdfd157173d3a3120c491d0ffa12633181d06fa301e0d76bb262c845219d",fo=`._root_8iejd_1 {
  width: 100%;
}

._root_8iejd_1 > * > * {
  background-color: inherit;
}

._root_8iejd_1._hide_8iejd_9 {
  display: none;
}

._main_8iejd_13 {
  /* border: 1px solid rgba(231, 238, 238, 0.8);
  border-left-width: 0px;
  border-right-width: 0px; */
}

._main_8iejd_13._active_8iejd_19 {
  border-bottom: none;
}

._header_8iejd_23 {
  padding: 0.75rem 0rem;
  padding-left: 15px;
  color: rgba(231, 238, 238, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  border: 1px solid rgba(231, 238, 238, 0.8);
  border-left-width: 0px;
  border-right-width: 0px;
}

._active_8iejd_19 ._header_8iejd_23 {
  border-bottom: none;
}

._content_8iejd_41 {
  overflow: hidden;
  max-height: 0;
  transition: transform 0.2s ease-in-out;

  padding-left: 25px;
  padding-right: 10px;
}

._active_8iejd_19 ._content_8iejd_41 {
  padding-top: 1.25rem;

  max-height: fit-content;
}

._toggleBtn_8iejd_56 {
  max-width: fit-content;
  max-height: fit-content;
}

svg {
  fill: currentColor;
  width: 1.5rem;
  height: 1.5rem;
  transition: all 0.2s;
}

._active_8iejd_19 ._header_8iejd_23 > svg {
  transform: rotate(180deg);
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(di)){var e=document.createElement("style");e.id=di,e.textContent=fo,document.head.appendChild(e)}})();var T={root:"_root_8iejd_1",hide:"_hide_8iejd_9",main:"_main_8iejd_13",active:"_active_8iejd_19",header:"_header_8iejd_23",content:"_content_8iejd_41",toggleBtn:"_toggleBtn_8iejd_56"};var li="5763232d6af9c716e18e5b2b6c4d20d5fb63c2ad5856928b8f8933418d4c62f7",bo=`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,600&display=swap');

._base_iwbld_5 * {
  box-sizing: border-box;
}

body {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;

  font-size: 1rem;
  letter-spacing: 0.020625rem;
  line-height: 1.25rem;
}

label,
span {
  display: inline-block;
}

@media (max-width: 600px) {
  body {
    font-size: 0.875rem;
    line-height: 1.125rem;
  }
}

._headlineBase_iwbld_55 {
  font-size: 1rem;
  letter-spacing: 0.020625rem;
  line-height: 1.25rem;
}

._headlineOne_iwbld_67 {
  font-size: 1.5rem;
  letter-spacing: 0.020625rem;
  line-height: 1.75rem;
}

._headlineTwo_iwbld_79 {
  font-size: 1.25rem;
  letter-spacing: 0.01875rem;
  line-height: 1.5rem;
}

._headlineThree_iwbld_91 {
  font-size: 1.125rem;
  letter-spacing: -0.0075;
  line-height: 1.25rem;
}

._subHeadline_iwbld_103 {
  font-size: 0.875rem;
  letter-spacing: 0.01875rem;
  line-height: 1.125rem;
}

._captionOne_iwbld_115 {
  font-size: 0.8125rem;
  letter-spacing: 0.00125rem;
  line-height: 1rem;
}

._captionTwo_iwbld_127 {
  font-size: 0.75rem;
  letter-spacing: 0;
  line-height: 0.875rem;
}

._captionThree_iwbld_139 {
  font-size: 0.5625rem;
  letter-spacing: 0;
  line-height: 0.75rem;
}

::-webkit-scrollbar {
  width: none;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(li)){var e=document.createElement("style");e.id=li,e.textContent=bo,document.head.appendChild(e)}})();var pi={base:"_base_iwbld_5",headlineBase:"_headlineBase_iwbld_55",headlineOne:"_headlineOne_iwbld_67",headlineTwo:"_headlineTwo_iwbld_79",headlineThree:"_headlineThree_iwbld_91",subHeadline:"_subHeadline_iwbld_103",captionOne:"_captionOne_iwbld_115",captionTwo:"_captionTwo_iwbld_127",captionThree:"_captionThree_iwbld_139"};var B=r(a(),1);var Be=class extends je.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"close",func:()=>{this.setState({hiddenContent:!0})}},{id:this.props.id,name:"open",func:()=>{this.setState({hiddenContent:!1})}}];this.state={hiddenContent:!this.props.openAtStart}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}click(){this.setState({hiddenContent:!this.state.hiddenContent})}render(){return this.props.hide?"":(0,B.jsx)(je.Fragment,{children:(0,B.jsx)("div",{id:this.props.id+"-element",className:n(T.root,[T.hide===this.props.hide]),children:(0,B.jsxs)("div",{"data-id":this.props.id+"-mainStyle",className:n(T.main,{[T.active]:this.state.hiddenContent===!1},this.props.mainStyle),children:[(0,B.jsxs)("div",{"data-id":this.props.id+"-headerStyle",className:[T.header,pi.headlineThree,this.props.headerStyle].join(" "),onClick:t=>this.click(),children:[this.props.title,(0,B.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 96 960 960",children:(0,B.jsx)("path",{d:"M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z"})})]}),(0,B.jsx)("div",{"data-id":this.props.id+"-contentStyle",className:n(T.content,this.props.contentStyle),children:this.props.content})]})})})}};var ui=r(_(),1);var ci="6eae5fe21ed510755f481bd8e2f206f147ced97beeae0fd7b5d0eba026863a42",go=`._menuWrapper_j2zlh_1 {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  overflow: hidden;
  pointer-events: none;
}

._menuMain_j2zlh_10 {
  position: absolute;
  right: 0;
  top: 5rem;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 220px;
  padding: 12px 24px;
  transform: translate(100%, 0%);
  transition: transform 500ms ease-in-out, visibility 500ms ease-in-out;
  will-change: transform, visibility;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  pointer-events: auto;
}

._menuMain_j2zlh_10._active_j2zlh_28 {
  transform: translate(0%, 0%);
  visibility: visible;
}

._menuMainClose_j2zlh_33 {
  display: flex;
  justify-content: end;
}

._menuMainCloseBtn_j2zlh_38 {
  color: white;
  cursor: pointer;
}

._menuMainContentHolder_j2zlh_43 {
}

@media screen and (orientation: landscape) {
}
._menuMainOpenBtn_j2zlh_48 {
  top: 50%;
  left: initial;
  right: 0;
  transform: translateY(-50%) rotate(-90deg);
}

._menuMainOpenBtn_j2zlh_48 {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 50%;
  bottom: 0;
  text-align: center;
  transform: translateX(-50%) rotate(-90deg);
  width: 40px;
  cursor: pointer;

  pointer-events: auto;
}

._menuMainOpenBtnArrow1_j2zlh_76,
._menuMainOpenBtnArrow2_j2zlh_77 {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  height: 8px;
  text-align: center;
  width: 14px;
  position: absolute;
  bottom: 0;
}

@keyframes _arrowsMoveUp_j2zlh_1 {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  50% {
    transform: translateY(-17px);
    opacity: 1;
  }
  100% {
    transform: translateY(-40px);
    opacity: 0;
  }
}
._menuMainOpenBtnArrow1_j2zlh_76 {
  animation: _arrowsMoveUp_j2zlh_1 2s infinite;
  opacity: 1;
}

._menuMainOpenBtnArrow2_j2zlh_77 {
  animation: _arrowsMoveUp_j2zlh_1 2s infinite;
  animation-delay: 0s;
  animation-delay: 1s;
  opacity: 0;
}

._menuMainOpenBtn_j2zlh_48._hidden_j2zlh_115 {
  visibility: hidden;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(ci)){var e=document.createElement("style");e.id=ci,e.textContent=go,document.head.appendChild(e)}})();var I={menuWrapper:"_menuWrapper_j2zlh_1",menuMain:"_menuMain_j2zlh_10",active:"_active_j2zlh_28",menuMainClose:"_menuMainClose_j2zlh_33",menuMainCloseBtn:"_menuMainCloseBtn_j2zlh_38",menuMainContentHolder:"_menuMainContentHolder_j2zlh_43",menuMainOpenBtn:"_menuMainOpenBtn_j2zlh_48",menuMainOpenBtnArrow1:"_menuMainOpenBtnArrow1_j2zlh_76",menuMainOpenBtnArrow2:"_menuMainOpenBtnArrow2_j2zlh_77",arrowsMoveUp:"_arrowsMoveUp_j2zlh_1",hidden:"_hidden_j2zlh_115"};var hi="9301ccd248eec048b2f7ce04efa06a6b9b66bccfd34e7fc30abab192202af7a5",yo=`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,600&display=swap');

._base_iwbld_5 * {
  box-sizing: border-box;
}

body {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;

  font-size: 1rem;
  letter-spacing: 0.020625rem;
  line-height: 1.25rem;
}

label,
span {
  display: inline-block;
}

@media (max-width: 600px) {
  body {
    font-size: 0.875rem;
    line-height: 1.125rem;
  }
}

._headlineBase_iwbld_55 {
  font-size: 1rem;
  letter-spacing: 0.020625rem;
  line-height: 1.25rem;
}

._headlineOne_iwbld_67 {
  font-size: 1.5rem;
  letter-spacing: 0.020625rem;
  line-height: 1.75rem;
}

._headlineTwo_iwbld_79 {
  font-size: 1.25rem;
  letter-spacing: 0.01875rem;
  line-height: 1.5rem;
}

._headlineThree_iwbld_91 {
  font-size: 1.125rem;
  letter-spacing: -0.0075;
  line-height: 1.25rem;
}

._subHeadline_iwbld_103 {
  font-size: 0.875rem;
  letter-spacing: 0.01875rem;
  line-height: 1.125rem;
}

._captionOne_iwbld_115 {
  font-size: 0.8125rem;
  letter-spacing: 0.00125rem;
  line-height: 1rem;
}

._captionTwo_iwbld_127 {
  font-size: 0.75rem;
  letter-spacing: 0;
  line-height: 0.875rem;
}

._captionThree_iwbld_139 {
  font-size: 0.5625rem;
  letter-spacing: 0;
  line-height: 0.75rem;
}

::-webkit-scrollbar {
  width: none;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(hi)){var e=document.createElement("style");e.id=hi,e.textContent=yo,document.head.appendChild(e)}})();var mi={base:"_base_iwbld_5",headlineBase:"_headlineBase_iwbld_55",headlineOne:"_headlineOne_iwbld_67",headlineTwo:"_headlineTwo_iwbld_79",headlineThree:"_headlineThree_iwbld_91",subHeadline:"_subHeadline_iwbld_103",captionOne:"_captionOne_iwbld_115",captionTwo:"_captionTwo_iwbld_127",captionThree:"_captionThree_iwbld_139"};var b=r(a(),1);var Oe=class extends ui.Component{constructor(t){super(t);this.hooks=[{id:this.props.id,name:"close",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"open",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:this.props.hiddenAtStart?this.props.hiddenAtStart:!1,hideContent:this.props.hiddenAtStart&&this.props.hideContentWhenClose}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(t=>{this.props.app.deregisterHooks(t)})}click(t){t?(this.props.toggleOn.forEach(o=>{o()}),this.setState({hideContent:!1})):(this.props.toggleOff.forEach(o=>{o()}),this.props.hideContentWhenClose&&this.setState({hideContent:!0}))}render(){return(0,b.jsxs)("div",{className:n(I.menuWrapper,mi.base),children:[(0,b.jsxs)("div",{className:n(I.menuMain,{[I.active]:!this.state.hidden},this.props.menuMainStyle),children:[(0,b.jsx)("div",{className:n(I.menuMainClose,this.props.menuMainCloseStyle),children:(0,b.jsx)("div",{className:n(I.menuMainCloseBtn),onClick:()=>{this.setState({hidden:!0})},children:(0,b.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,b.jsxs)("g",{"clip-path":"url(#icon_chevron-right_412470ca49912)",children:[(0,b.jsx)("path",{d:"M10.856 5.88306L21.1444 16.5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),(0,b.jsx)("path",{d:"M10.856 27.1169L21.1444 16.5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})]}),(0,b.jsx)("defs",{children:(0,b.jsx)("clipPath",{id:"icon_chevron-right_412470ca49912",children:(0,b.jsx)("rect",{width:"12",height:"23",fill:"currentColor",transform:"translate(10 5)"})})})]})})}),(0,b.jsx)("div",{className:n(I.menuMainContentHolder,this.props.menuMainContentHolderStyle),children:this.props.content})]}),(0,b.jsxs)("div",{className:n(I.menuMainOpenBtn,{[I.hidden]:this.state.hidden===!1}),onClick:()=>{this.setState({hidden:!1})},children:[(0,b.jsx)("div",{className:I.menuMainOpenBtnArrow1,children:(0,b.jsx)("svg",{width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,b.jsx)("path",{"fill-rule":"evenodd","clip-path":"evenodd",d:"M13.6959 6.28187C14.0925 6.66621 14.1025 7.2993 13.7181 7.69591C13.3338 8.09252 12.7007 8.10247 12.3041 7.71813L7 2.57812L1.69591 7.71813C1.2993 8.10247 0.666213 8.09252 0.281872 7.69591C-0.10247 7.2993 -0.0925236 6.66621 0.304087 6.28187L6.30116 0.47032C6.4949 0.280845 6.74731 0.185637 7 0.185612C7.25269 0.185637 7.50509 0.280845 7.69883 0.470318L13.6959 6.28187Z",fill:"currentColor"})})}),(0,b.jsx)("div",{className:I.menuMainOpenBtnArrow2,children:(0,b.jsx)("svg",{width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,b.jsx)("path",{"fill-rule":"evenodd","clip-path":"evenodd",d:"M13.6959 6.28187C14.0925 6.66621 14.1025 7.2993 13.7181 7.69591C13.3338 8.09252 12.7007 8.10247 12.3041 7.71813L7 2.57812L1.69591 7.71813C1.2993 8.10247 0.666213 8.09252 0.281872 7.69591C-0.10247 7.2993 -0.0925236 6.66621 0.304087 6.28187L6.30116 0.47032C6.4949 0.280845 6.74731 0.185637 7 0.185612C7.25269 0.185637 7.50509 0.280845 7.69883 0.470318L13.6959 6.28187Z",fill:"currentColor"})})})]})]})}};var vo={Accordion:Be,Button:ye,Menu:ve,PicButton:we,PicToggleButton:Se,SelectCard:ke,SelectPicture:Ie,Dropdown:He,SelectButton:Ce,ToggleButton:ze,Submenu:ge,SubmenuIcon:be,Container:fe,SpecialMenu:Oe,TextLabel:_e,TabMenu:ue,RangeSlider:me,ImageDisplay:he,Carousel:ce,BackgroundMask:pe,HorizontalLine:le,CarCarousel:de,LoadingScreen:ae};return xi(xo);})();
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var StarterBundleTest = starter_bundle_test.default
