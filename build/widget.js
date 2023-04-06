"use strict";var starter_bundle_test=(()=>{var Te=Object.create;var O=Object.defineProperty;var Fe=Object.getOwnPropertyDescriptor;var Me=Object.getOwnPropertyNames;var Ue=Object.getPrototypeOf,Ye=Object.prototype.hasOwnProperty;var E=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Ge=(e,t)=>{for(var o in t)O(e,o,{get:t[o],enumerable:!0})},se=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Me(t))!Ye.call(e,n)&&n!==o&&O(e,n,{get:()=>t[n],enumerable:!(r=Fe(t,n))||r.enumerable});return e};var p=(e,t,o)=>(o=e!=null?Te(Ue(e)):{},se(t||!e||!e.__esModule?O(o,"default",{value:e,enumerable:!0}):o,e)),Je=e=>se(O({},"__esModule",{value:!0}),e);var be=E(a=>{"use strict";var H=Symbol.for("react.element"),Ke=Symbol.for("react.portal"),Qe=Symbol.for("react.fragment"),Xe=Symbol.for("react.strict_mode"),et=Symbol.for("react.profiler"),tt=Symbol.for("react.provider"),ot=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),it=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),ae=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=ae&&e[ae]||e["@@iterator"],typeof e=="function"?e:null)}var pe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ce=Object.assign,he={};function w(e,t,o){this.props=e,this.context=t,this.refs=he,this.updater=o||pe}w.prototype.isReactComponent={};w.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function me(){}me.prototype=w.prototype;function J(e,t,o){this.props=e,this.context=t,this.refs=he,this.updater=o||pe}var K=J.prototype=new me;K.constructor=J;ce(K,w.prototype);K.isPureReactComponent=!0;var le=Array.isArray,ue=Object.prototype.hasOwnProperty,Q={current:null},fe={key:!0,ref:!0,__self:!0,__source:!0};function _e(e,t,o){var r,n={},s=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)ue.call(t,r)&&!fe.hasOwnProperty(r)&&(n[r]=t[r]);var c=arguments.length-2;if(c===1)n.children=o;else if(1<c){for(var d=Array(c),m=0;m<c;m++)d[m]=arguments[m+2];n.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)n[r]===void 0&&(n[r]=c[r]);return{$$typeof:H,type:e,key:s,ref:l,props:n,_owner:Q.current}}function lt(e,t){return{$$typeof:H,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function X(e){return typeof e=="object"&&e!==null&&e.$$typeof===H}function dt(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(o){return t[o]})}var de=/\/+/g;function G(e,t){return typeof e=="object"&&e!==null&&e.key!=null?dt(""+e.key):t.toString(36)}function R(e,t,o,r,n){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case H:case Ke:l=!0}}if(l)return l=e,n=n(l),e=r===""?"."+G(l,0):r,le(n)?(o="",e!=null&&(o=e.replace(de,"$&/")+"/"),R(n,t,o,"",function(m){return m})):n!=null&&(X(n)&&(n=lt(n,o+(!n.key||l&&l.key===n.key?"":(""+n.key).replace(de,"$&/")+"/")+e)),t.push(n)),1;if(l=0,r=r===""?".":r+":",le(e))for(var c=0;c<e.length;c++){s=e[c];var d=r+G(s,c);l+=R(s,t,o,d,n)}else if(d=at(e),typeof d=="function")for(e=d.call(e),c=0;!(s=e.next()).done;)s=s.value,d=r+G(s,c++),l+=R(s,t,o,d,n);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function P(e,t,o){if(e==null)return e;var r=[],n=0;return R(e,r,"","",function(s){return t.call(o,s,n++)}),r}function pt(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(o){(e._status===0||e._status===-1)&&(e._status=1,e._result=o)},function(o){(e._status===0||e._status===-1)&&(e._status=2,e._result=o)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var u={current:null},N={transition:null},ct={ReactCurrentDispatcher:u,ReactCurrentBatchConfig:N,ReactCurrentOwner:Q};a.Children={map:P,forEach:function(e,t,o){P(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(t){return t})||[]},only:function(e){if(!X(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};a.Component=w;a.Fragment=Qe;a.Profiler=et;a.PureComponent=J;a.StrictMode=Xe;a.Suspense=nt;a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ct;a.cloneElement=function(e,t,o){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ce({},e.props),n=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=Q.current),t.key!==void 0&&(n=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)ue.call(t,d)&&!fe.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=o;else if(1<d){c=Array(d);for(var m=0;m<d;m++)c[m]=arguments[m+2];r.children=c}return{$$typeof:H,type:e.type,key:n,ref:s,props:r,_owner:l}};a.createContext=function(e){return e={$$typeof:ot,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tt,_context:e},e.Consumer=e};a.createElement=_e;a.createFactory=function(e){var t=_e.bind(null,e);return t.type=e,t};a.createRef=function(){return{current:null}};a.forwardRef=function(e){return{$$typeof:rt,render:e}};a.isValidElement=X;a.lazy=function(e){return{$$typeof:st,_payload:{_status:-1,_result:e},_init:pt}};a.memo=function(e,t){return{$$typeof:it,type:e,compare:t===void 0?null:t}};a.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}};a.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};a.useCallback=function(e,t){return u.current.useCallback(e,t)};a.useContext=function(e){return u.current.useContext(e)};a.useDebugValue=function(){};a.useDeferredValue=function(e){return u.current.useDeferredValue(e)};a.useEffect=function(e,t){return u.current.useEffect(e,t)};a.useId=function(){return u.current.useId()};a.useImperativeHandle=function(e,t,o){return u.current.useImperativeHandle(e,t,o)};a.useInsertionEffect=function(e,t){return u.current.useInsertionEffect(e,t)};a.useLayoutEffect=function(e,t){return u.current.useLayoutEffect(e,t)};a.useMemo=function(e,t){return u.current.useMemo(e,t)};a.useReducer=function(e,t,o){return u.current.useReducer(e,t,o)};a.useRef=function(e){return u.current.useRef(e)};a.useState=function(e){return u.current.useState(e)};a.useSyncExternalStore=function(e,t,o){return u.current.useSyncExternalStore(e,t,o)};a.useTransition=function(){return u.current.useTransition()};a.version="18.2.0"});var _=E((Pt,ge)=>{"use strict";ge.exports=be()});var Se=E(A=>{"use strict";var mt=_(),ut=Symbol.for("react.element"),ft=Symbol.for("react.fragment"),_t=Object.prototype.hasOwnProperty,bt=mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gt={key:!0,ref:!0,__self:!0,__source:!0};function xe(e,t,o){var r,n={},s=null,l=null;o!==void 0&&(s=""+o),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)_t.call(t,r)&&!gt.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:ut,type:e,key:s,ref:l,props:n,_owner:bt.current}}A.Fragment=ft;A.jsx=xe;A.jsxs=xe});var h=E((Lt,we)=>{"use strict";we.exports=Se()});var Bt={};Ge(Bt,{default:()=>Ht});var je=p(_(),1);var ye="d60eff6e72324f5fe1461990ea7b0c34bbfcc59ba6ba6001292a513705441d27",ht=`._root_jy2sj_1 {
  --border-color: rgba(231, 238, 238, 0.8);
  color: rgba(231, 238, 238, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 2.5rem;
  min-width: fit-content;
  background-color: transparent;
  border: 1px var(--border-color) solid;
  border-radius: 0.5rem;
  cursor: pointer;

  margin-bottom: 6px;
}

@media (max-width: 1024px) {
  ._root_jy2sj_1 {
    width: 6rem;
    height: 2rem;
  }
}

@media (max-width: 1280px) {
  ._root_jy2sj_1 {
    width: 7rem;
    height: 2.25rem;
  }
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(ye)){var e=document.createElement("style");e.id=ye,e.textContent=ht,document.head.appendChild(e)}})();var ve={root:"_root_jy2sj_1"};function i(...e){return e.reduce((t,o)=>o?Array.isArray(o)?(t.concat(i(...o)),t):typeof o=="object"?(Object.entries(o).forEach(([r,n])=>{n&&t.push(r)}),t):(t.push(o),t):t,[]).join(" ")}var ee=p(h(),1);var L=class extends je.Component{constructor(o){super(o);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:!1}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(o=>{this.props.app.deregisterHooks(o)})}click(){this.props.onClick.forEach(o=>{o()})}render(){return this.state.hidden?"":(0,ee.jsx)("span",{id:this.props.id+"-element",className:i(ve.root,this.props.buttonStyle),onClick:this.click.bind(this),children:(0,ee.jsx)("a",{children:this.props.name})})}};var q=p(_(),1);var Ce="96a037e42d16bee16310924a6df8bad1ef23ed4da60a6fbf52b8259dbe7eab02",yt=`._root_1j8na_1 {
  --btn-menu-size: 2.25rem;
  --btn-menu-color: white;
  --btn-menu-bg: gray;

  --menu-hor-height: 35%;
  --menu-ver-width: 30vw;
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

/* MENU */

._menuHor_1j8na_24 {
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

._menuHor_1j8na_24:before {
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

._menuHor_1j8na_24::-webkit-scrollbar {
  display: none;
}

._menuHor_1j8na_24._hidden_1j8na_54 {
  bottom: calc(-1 * var(--menu-hor-height) + var(--btn-menu-size) + 1rem);
}

._menuVer_1j8na_58 {
  height: 100%;
  width: var(--menu-ver-width);
  position: absolute;
  top: 0;
  pointer-events: auto;
  background-color: var(--menu-bg);
  backdrop-filter: blur(12px);
}

._menuVer_1j8na_58._left_1j8na_68 {
  left: 0;
  transition: left var(--transition-duration) var(--transition-timing-function);
}

._menuVer_1j8na_58._left_1j8na_68._hidden_1j8na_54 {
  left: calc(-1 * var(--menu-ver-width) + 2 * var(--btn-menu-size));
}

._menuVer_1j8na_58._right_1j8na_77 {
  right: 0;
  transition: right var(--transition-duration) var(--transition-timing-function);
}

._menuVer_1j8na_58._right_1j8na_77._hidden_1j8na_54 {
  right: calc(-1 * var(--menu-ver-width) + 2 * var(--btn-menu-size));
}

@media (max-width: 640px) {
  ._menuVer_1j8na_58,
  ._menuBtnVerRight_1j8na_88 {
    width: var(--menu-ver-max-width);
  }

  ._menuVer_1j8na_58._left_1j8na_68._hidden_1j8na_54 {
    left: calc(-1 * var(--menu-ver-max-width) + 2 * var(--btn-menu-size));
  }
  ._menuVer_1j8na_58._right_1j8na_77._hidden_1j8na_54 {
    right: calc(-1 * var(--menu-ver-max-width) + 2 * var(--btn-menu-size));
  }
}

/* Content Holder */

._specialHolder_1j8na_102 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  min-height: 100%;
  height: 100%;
  position: relative;
  justify-content: space-between;
}

._menu_1j8na_24 {
  padding: 0.7rem;
}

._specialHolderHori_1j8na_117 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  height: calc(100% - 1.5 * var(--btn-menu-size));
  justify-content: space-between;
  overflow-y: scroll;
  scrollbar-width: none;
}

._specialHolderHori_1j8na_117::-webkit-scrollbar {
  display: none;
}

._menuItemHolderWrapper_1j8na_132 {
  width: 100%;
  height: auto;
  flex: 1;
  overflow-y: scroll;
}

._menuItemHolderWrapper_1j8na_132::-webkit-scrollbar {
  display: none;
}

._menuItemsHolder_1j8na_143 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  cursor: pointer;
  box-sizing: border-box;
}

._menuButtonHolder_1j8na_152 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  margin-top: 1.25;
}

/* Toggle Button */

._menuBtn_1j8na_88 {
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

._menuBtn_1j8na_88 img {
  width: 80%;
  height: 80%;
  border-radius: 50%;
}

._menuBtnHor_1j8na_186 {
  position: fixed;
  left: 0.5rem;
  bottom: 0.5rem;
}

._menuBtnVerLeft_1j8na_192 {
  bottom: 0.5rem;
  right: 0.88rem;
}

._menuBtnVerRight_1j8na_88 {
  bottom: 0.5rem;
  left: 0.5rem;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Ce)){var e=document.createElement("style");e.id=Ce,e.textContent=yt,document.head.appendChild(e)}})();var f={root:"_root_1j8na_1",menuHor:"_menuHor_1j8na_24",hidden:"_hidden_1j8na_54",menuVer:"_menuVer_1j8na_58",left:"_left_1j8na_68",right:"_right_1j8na_77",menuBtnVerRight:"_menuBtnVerRight_1j8na_88",specialHolder:"_specialHolder_1j8na_102",menu:"_menu_1j8na_24",specialHolderHori:"_specialHolderHori_1j8na_117",menuItemHolderWrapper:"_menuItemHolderWrapper_1j8na_132",menuItemsHolder:"_menuItemsHolder_1j8na_143",menuButtonHolder:"_menuButtonHolder_1j8na_152",menuBtn:"_menuBtn_1j8na_88",menuBtnHor:"_menuBtnHor_1j8na_186",menuBtnVerLeft:"_menuBtnVerLeft_1j8na_192"};var g=p(h(),1);var Z=class extends q.Component{constructor(o){super(o);this.hooks=[{id:this.props.id,name:"close",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"open",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:this.props.hiddenAtStart?this.props.hiddenAtStart:!1,hideContent:this.props.hiddenAtStart&&this.props.hideContentWhenClose}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(o=>{this.props.app.deregisterHooks(o)})}click(o){o?(this.props.toggleOn.forEach(r=>{r()}),this.setState({hideContent:!1})):(this.props.toggleOff.forEach(r=>{r()}),this.props.hideContentWhenClose&&this.setState({hideContent:!0}))}renderTheme(){return(0,g.jsx)(q.Fragment,{children:(0,g.jsx)("div",{id:this.props.id+"-element",className:i(f.menu,{[f.menuHor]:this.props.variants==="horizontal",[f.menuVer]:this.props.variants!=="horizontal",[f.left]:this.props.variants==="vertical-left",[f.right]:this.props.variants==="vertical-right",[f.hidden]:this.state.hidden},this.props.menuStyle,this.props.menuHiddenStyle),children:(0,g.jsxs)("div",{"data-id":this.props.id+"-contentHolderStyle",className:i(f.specialHolderHori,this.props.contentHolderStyle),children:[(0,g.jsx)("div",{className:f.menuItemsHolder,style:this.state.hideContent?{display:"none"}:{},children:this.props.content}),!this.props.hideMenuButton&&(0,g.jsx)("span",{"data-id":this.props.id+"-buttonStyle",className:i(f.menuBtn,{[f.menuBtnHor]:this.props.variants==="horizontal",[f.menuBtnVerLeft]:this.props.variants==="vertical-left",[f.menuBtnVerRight]:this.props.variants==="vertical-right"},this.props.buttonStyle),onClick:()=>{let o=!this.state.hidden;this.setState({hidden:o}),this.click(!o)},children:this.state.hidden?(0,g.jsx)("img",{src:this.props.openButtonImage?this.props.openButtonImage:""}):(0,g.jsx)("img",{src:this.props.closeButtonImage?this.props.closeButtonImage:""})})]},"main-component")})})}render(){return(0,g.jsx)("div",{className:i(f.root),children:this.renderTheme()})}};var V=p(_(),1);var ke="af8fb98399df5adf831f5cedbf1fef817d11e401b02b7be9b14b23a3ee4f52d3",vt=`._root_thbqi_1 {
  width: 100%;
  margin-top: 1.25rem;
}

._root_thbqi_1 > * > * {
  background-color: inherit;
}

._main_thbqi_10 {
  border: 1px solid rgba(231, 238, 238, 0.8);
  border-left-width: 0px;
  border-right-width: 0px;
  margin-top: 0.75rem;
}

._main_thbqi_10._active_thbqi_17 {
  border-bottom: none;
}

._header_thbqi_21 {
  padding: 0.75rem 0.2rem;
  color: rgba(231, 238, 238, 0.8);
}

._title_thbqi_26 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

._content_thbqi_33 {
  overflow: hidden;
  max-height: 0;
  transition: all 0.2s ease-in-out;
}

._active_thbqi_17 ._content_thbqi_33 {
  max-height: 20vh;
  padding-top: 1.25rem;
  /* overflow-y: scroll; */
  /* scrollbar-width: none; */
}

/* ::-webkit-scrollbar {
  width: 0;
} */

._toggleBtn_thbqi_50 > svg {
  fill: currentColor;
  width: 1.5rem;
  height: 1.5rem;
  transition: all 0.2s;
}

._active_thbqi_17 ._toggleBtn_thbqi_50 > svg {
  transform: rotate(180deg);
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(ke)){var e=document.createElement("style");e.id=ke,e.textContent=vt,document.head.appendChild(e)}})();var v={root:"_root_thbqi_1",main:"_main_thbqi_10",active:"_active_thbqi_17",header:"_header_thbqi_21",title:"_title_thbqi_26",content:"_content_thbqi_33",toggleBtn:"_toggleBtn_thbqi_50"};var b=p(h(),1);var W=class extends V.Component{constructor(o){super(o);this.hooks=[{id:this.props.id,name:"close",func:()=>{this.setState({hiddenContent:!0})}},{id:this.props.id,name:"open",func:()=>{this.setState({hiddenContent:!1})}}];this.state={hiddenContent:this.props.openAtStart?!1:this.props.openAtStart}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(o=>{this.props.app.deregisterHooks(o)})}click(){this.setState({hiddenContent:!this.state.hiddenContent})}render(){return(0,b.jsx)(V.Fragment,{children:(0,b.jsx)("div",{id:this.props.id+"-element",className:i(v.root),children:(0,b.jsxs)("div",{"data-id":this.props.id+"-mainStyle",className:i(v.main,{[v.active]:this.state.hiddenContent===!1},this.props.mainStyle),children:[(0,b.jsx)("div",{"data-id":this.props.id+"-headerStyle",className:i(v.header,this.props.headerStyle),children:(0,b.jsxs)("div",{"data-id":this.props.id+"-titleStyle",className:i(v.title,this.props.titleStyle),children:[this.props.title,(0,b.jsx)("span",{className:i(v.toggleBtn),onClick:o=>this.click(),children:(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 96 960 960",children:(0,b.jsx)("path",{d:"M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z"})})})]})}),(0,b.jsx)("div",{"data-id":this.props.id+"-contentStyle",className:i(v.content,this.props.contentStyle),children:this.props.content})]})})})}};var Be=p(_(),1);var Ie="3c9718fc23f048d87a08c352a18e70f035f01b46e826bbf6d8d7ec5fcc31bb2b",xt=`._root_1jy54_1 {
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  cursor: pointer;

  margin-bottom: 6px;
}

._root_1jy54_1 > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 9999px;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Ie)){var e=document.createElement("style");e.id=Ie,e.textContent=xt,document.head.appendChild(e)}})();var He={root:"_root_1jy54_1"};var te=p(h(),1);var D=class extends Be.Component{constructor(o){super(o);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:!1}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(o=>{this.props.app.deregisterHooks(o)})}click(){this.props.onClick.forEach(o=>{o()})}render(){return this.state.hidden?"":(0,te.jsx)("span",{id:this.props.id+"-element",className:i(He.root,this.props.buttonStyle),onClick:this.click.bind(this),children:(0,te.jsx)("img",{src:this.props.img,alt:"Pic_Button"})})}};var Pe=p(_(),1);var Oe="45144b410e03de7091b8309b3aec8bd08a45d92ef716befe3abb421695f539c1",St=`._root_116v3_1 {
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  font-family: sans-serif;
  font-style: normal;
  font-size: 0.875rem;
  border-radius: 9999px;

  margin-bottom: 5px;
}

._root_116v3_1 > img {
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 9999px;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Oe)){var e=document.createElement("style");e.id=Oe,e.textContent=St,document.head.appendChild(e)}})();var Ee={root:"_root_116v3_1"};var oe=p(h(),1);var $=class extends Pe.Component{constructor(o){super(o);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:!1,on:!0}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(o=>{this.props.app.deregisterHooks(o)})}toggle(){let o=!this.state.on;o?this.props.turnON.forEach(r=>{r()}):this.props.turnOFF.forEach(r=>{r()}),this.setState({on:o})}render(){return this.state.hidden?"":(0,oe.jsx)("span",{id:this.props.id+"-element",className:i(Ee.root,this.props.buttonStyle),onClick:this.toggle.bind(this),children:(0,oe.jsx)("img",{src:this.state.on?this.props.onImg:this.props.offImg})})}};var Ne=p(_(),1);var Re="4393c532175971b5d0b79b047245cd4b924637b67161f03ab049bb5af4c4dfb1",wt=`._root_1opjr_1 {
  width: 100%;

  margin-top: 1.25rem;
}

._selectButtonItemHolder_1opjr_7 {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  align-content: start;

  margin-top: 12px;
}

._selectButtonItem_1opjr_7 {
  border: rgba(231, 238, 238, 0.4) 2px solid;
  color: rgba(231, 238, 238, 0.4);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: fit-content;
  background-color: transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  font-family: sans-serif;
  font-style: normal;
  font-size: 1rem;
  width: 8rem;
  height: 2.5rem;
}

@media (max-width: 1024px) {
  ._selectButtonItem_1opjr_7 {
    width: 6rem;
    height: 2rem;
  }
}

@media (max-width: 1280px) {
  ._selectButtonItem_1opjr_7 {
    width: 7rem;
    height: 2rem;
  }
}

._selectButtonItemActive_1opjr_50 {
  border-color: rgba(231, 238, 238, 0.8);
  color: rgba(231, 238, 238, 0.8);
}

._selectButtonLabel_1opjr_55 {
  color: rgba(231, 238, 238, 0.8);
  font-family: sans-serif;
  font-style: normal;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Re)){var e=document.createElement("style");e.id=Re,e.textContent=wt,document.head.appendChild(e)}})();var j={root:"_root_1opjr_1",selectButtonItemHolder:"_selectButtonItemHolder_1opjr_7",selectButtonItem:"_selectButtonItem_1opjr_7",selectButtonItemActive:"_selectButtonItemActive_1opjr_50",selectButtonLabel:"_selectButtonLabel_1opjr_55"};var C=p(h(),1);var z=class extends Ne.Component{constructor(o){super(o);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:!1}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(o=>{this.props.app.deregisterHooks(o)})}render(){var o,r;return this.state.hidden?"":(0,C.jsxs)("div",{id:this.props.id+"-element",className:i(j.root,this.props.holderStyle),children:[this.props.hideLabel?"":(0,C.jsx)("label",{"data-id":this.props.id+"-labelStyle",className:i(j.selectButtonLabel,this.props.labelStyle),children:this.props.label}),(0,C.jsx)("div",{className:j.selectButtonItemHolder,children:(r=(o=this.props.selectionObject)==null?void 0:o.selection)!=null&&r.list?this.props.selectionObject.selection.list.map((n,s)=>(0,C.jsx)("div",{"data-id":this.props.id+"-itemStyle",className:i(j.selectButtonItem,{[j.selectButtonItemActive]:this.props.selectionObject.selection.currentIndex===s},this.props.itemStyle),onClick:()=>{this.props.selectionObject&&this.props.selectionObject.selection.onChange(s)},children:n[this.props.selectionObject.displayValue.name]})):""})]})}};var Le=p(_(),1);var Ae="15405e933d03e2baa87bd518dcce3ed621b31749df28f8997cebe0e7b6083406",jt=`._root_wiih3_1 {
  width: 100%;
  margin-top: 1.25rem;
}

._cardItemsHolder_wiih3_6 {
  display: grid;
  grid-template-columns: repeat(auto-fill, 6.7rem);
  gap: 12px;
  margin-top: 0.75rem;
}

._cardItem_wiih3_6 {
  width: 4.5rem;
  height: 8.5rem;
  border: 2px solid;
  border-radius: 4px;
  min-height: fit-content;
}

._imgBox_wiih3_21 {
  width: 100%;
  height: 5rem;
  padding: 0.5rem;
}

._imgBox_wiih3_21 > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

._caption_wiih3_33 {
  width: 100%;
  display: flex;
  justify-content: center;
}

._cardItem_wiih3_6 {
  border-color: rgba(231, 238, 238, 0.4);
  color: rgba(231, 238, 238, 0.8);
}

._cardItem_wiih3_6._active_wiih3_44 {
  border-color: rgba(231, 238, 238, 0.8);
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Ae)){var e=document.createElement("style");e.id=Ae,e.textContent=jt,document.head.appendChild(e)}})();var x={root:"_root_wiih3_1",cardItemsHolder:"_cardItemsHolder_wiih3_6",cardItem:"_cardItem_wiih3_6",imgBox:"_imgBox_wiih3_21",caption:"_caption_wiih3_33",active:"_active_wiih3_44"};var y=p(h(),1);var T=class extends Le.default.Component{constructor(o){super(o);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:!1}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(o=>{this.props.app.deregisterHooks(o)})}render(){var o,r;return this.state.hidden?"":(0,y.jsxs)("div",{id:this.props.id+"-element",className:i(x.root,this.props.holderStyle),children:[!this.props.hideLabel&&(0,y.jsx)("label",{"data-id":this.props.id+"-labelStyle",className:x.selectPictureLabel+this.props.labelStyle,children:this.props.label}),(0,y.jsx)("div",{className:x.cardItemsHolder,children:(r=(o=this.props.selectionObject)==null?void 0:o.selection)!=null&&r.list?this.props.selectionObject.selection.list.map((n,s)=>{var ne,ie;let l=(ne=this.props.customCardDisplay)==null?void 0:ne.find(Y=>{Y.name,n[this.props.selectionObject.displayValue.img]}),c=(l==null?void 0:l.image)||n[this.props.selectionObject.displayValue.img],d=(ie=this.props.customCardDisplay)==null?void 0:ie.find(Y=>{Y.name,n[this.props.selectionObject.displayValue.img]}),m=(d==null?void 0:d.caption)||n[this.props.selectionObject.displayValue.caption];return console.log("caption",m),(0,y.jsxs)("div",{"data-id":this.props.id+"-itemStyle",className:i(x.cardItem,{[x.active]:this.props.selectionObject.selection.currentIndex===s},this.props.itemStyle),onClick:()=>{this.props.selectionObject&&this.props.selectionObject.selection.onChange(s)},children:[(0,y.jsx)("div",{className:i(x.imgBox),children:(0,y.jsx)("img",{src:c,alt:n.caption})}),(0,y.jsx)("div",{className:i(x.caption),children:m})]})}):""})]})}};var qe=p(_(),1);var Ze="c5349aef30a0c534f7a5535ee97e240d70ac7cc7bb1ab3c8948c831cbba54fb4",Ct=`._root_1jomy_1 {
  width: 100%;
  margin-top: 1.25rem;
}

._selectPictureItemHolder_1jomy_6 {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  align-content: start;

  margin-top: 0.75rem;
}

._selectPictureItem_1jomy_6 {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

._selectPictureItemActive_1jomy_25 {
  border: 2px solid transparent;
  border-color: #3aa8ff;
}

._selectPictureItem_1jomy_6 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

._selectPictureLabel_1jomy_37 {
  color: rgba(231, 238, 238, 0.8);
  font-family: sans-serif;
  font-style: normal;
  font-size: 16px;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Ze)){var e=document.createElement("style");e.id=Ze,e.textContent=Ct,document.head.appendChild(e)}})();var k={root:"_root_1jomy_1",selectPictureItemHolder:"_selectPictureItemHolder_1jomy_6",selectPictureItem:"_selectPictureItem_1jomy_6",selectPictureItemActive:"_selectPictureItemActive_1jomy_25",selectPictureLabel:"_selectPictureLabel_1jomy_37"};var S=p(h(),1);var F=class extends qe.default.Component{constructor(o){super(o);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:!1}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(o=>{this.props.app.deregisterHooks(o)})}render(){var o,r;return this.state.hidden?"":(0,S.jsxs)("div",{id:this.props.id+"-element",className:i(k.root,this.props.holderStyle),children:[!this.props.hideLabel&&(0,S.jsx)("label",{"data-id":this.props.id+"-labelStyle",className:i(k.selectPictureLabel,this.props.labelStyle),children:this.props.label}),(0,S.jsx)("div",{className:k.selectPictureItemHolder,children:(r=(o=this.props.selectionObject)==null?void 0:o.selection)!=null&&r.list?this.props.selectionObject.selection.list.map((n,s)=>{var d;let l=(d=this.props.customPictureDisplay)==null?void 0:d.find(m=>m.name===n[this.props.selectionObject.displayValue.img]),c=(l==null?void 0:l.image)||n[this.props.selectionObject.displayValue.img];return(0,S.jsx)("div",{"data-id":this.props.id+"-itemStyle",className:i(k.selectPictureItem,{[k.selectPictureItemActive]:this.props.selectionObject.selection.currentIndex===s},this.props.itemStyle),onClick:()=>{this.props.selectionObject&&this.props.selectionObject.selection.onChange(s)},children:(0,S.jsx)("img",{src:c})})}):""})]})}};var De=p(_(),1);var We="29c9f3ec3f1599a744ede99b77d2e18005750d89b5c04b9d270ee9d9b1553b0e",kt=`._root_1ybf2_1 {
  display: inline-block;
  min-width: fit-content;
  background-color: transparent;
  border: 1px rgba(231, 238, 238, 0.8) solid;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(231, 238, 238, 0.8);
  font-family: sans-serif;
  font-style: normal;
  font-size: 0.875rem;
  width: 8rem;
  height: 2.5rem;

  margin-bottom: 5px;
}

@media (max-width: 1024px) {
  ._root_1ybf2_1 {
    width: 6rem;
    height: 2rem;
  }
}

@media (max-width: 1280px) {
  ._root_1ybf2_1 {
    width: 7rem;
    height: 2.25rem;
  }
}

/* .button:active {
  border: 1px rgba(231, 238, 238, 1) solid;
  color: rgba(231, 238, 238, 1);
} */
`;(function(){if(!(typeof document>"u")&&!document.getElementById(We)){var e=document.createElement("style");e.id=We,e.textContent=kt,document.head.appendChild(e)}})();var Ve={root:"_root_1ybf2_1"};var re=p(h(),1);var M=class extends De.Component{constructor(o){super(o);this.hooks=[{id:this.props.id,name:"hide",func:()=>{this.setState({hidden:!0})}},{id:this.props.id,name:"show",func:()=>{this.setState({hidden:!1})}}];this.state={hidden:!1,on:!0}}componentDidMount(){this.props.app.registerHooks(this.hooks)}componentWillUnmount(){this.hooks.forEach(o=>{this.props.app.deregisterHooks(o)})}toggle(){let o=!this.state.on;o?this.props.turnON.forEach(r=>{r()}):this.props.turnOFF.forEach(r=>{r()}),this.setState({on:o})}render(){return this.state.hidden?"":(0,re.jsx)("span",{id:this.props.id+"-element",className:i(Ve.root,this.props.buttonStyle),onClick:this.toggle.bind(this),children:(0,re.jsx)("a",{children:this.state.on?this.props.onText:this.props.offText})})}};var ze=p(_(),1);var $e="0ec81b85571a289e000feaf60c6527f4f12a3d2a5feebbee78fc07128ed67624",It=`._dropdown_1n3pb_1 {
  width: 100%;
  height: 2.25rem;
  border-radius: 5px;
  outline: none;
}

._dropdownItem_1n3pb_8,
._dropdown_1n3pb_1 {
  font-size: 18px;
}

label {
  color: rgba(231, 238, 238, 0.8);
}

@media (min-width: 1024px) {
  ._dropdown_1n3pb_1,
  ._dropdownItem_1n3pb_8 {
    font-size: 16px;
  }
}

._dropdownHolder_1n3pb_24 {
  width: 100%;
}

._dropdownLabel_1n3pb_28 {
  display: inline-block;

  margin-bottom: 6px;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById($e)){var e=document.createElement("style");e.id=$e,e.textContent=It,document.head.appendChild(e)}})();var B={dropdown:"_dropdown_1n3pb_1",dropdownItem:"_dropdownItem_1n3pb_8",dropdownHolder:"_dropdownHolder_1n3pb_24",dropdownLabel:"_dropdownLabel_1n3pb_28"};var I=p(h(),1);var U=class extends ze.Component{constructor(o){super(o);this.hooks=[];this.state={hidden:!1}}componentDidMount(){}componentWillUnmount(){}render(){var n,s;return this.state.hidden?"":(0,I.jsxs)("div",{id:this.props.id+"-element","data-id":this.props.id+"-holderStyle",className:i(B.dropdownHolder,this.props.holderStyle),children:[this.props.hideLabel?"":(0,I.jsx)("label",{"data-id":this.props.id+"-labelStyle",className:i(B.dropdownLabel,this.props.labelStyle),children:this.props.label}),(0,I.jsx)("select",{"data-id":this.props.id+"-dropdownStyle",value:"a",className:i(B.dropdown,this.props.dropdownStyle),onChange:l=>{this.props.selectionObject&&this.props.selectionObject.selection&&this.props.selectionObject.selection.onChange(parseInt(l.currentTarget.value))},children:(s=(n=this.props.selectionObject)==null?void 0:n.selection)!=null&&s.list?this.props.selectionObject.selection.list.map((l,c)=>{var d;return(0,I.jsx)("option",{className:B.dropdownItem,value:c,children:l[(d=this.props.selectionObject.displayValue)==null?void 0:d.name]||""})}):""})]})}};var Ht={Button:L,Menu:Z,Submenu:W,PicButton:D,PicToggleButton:$,SelectCard:T,SelectPicture:F,Dropdown:U,SelectButton:z,ToggleButton:M};return Je(Bt);})();
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
