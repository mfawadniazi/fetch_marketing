(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[720],{7942:function(e,t,n){"use strict";var o=n(5696);t.default=void 0;var r,i=(r=n(7294))&&r.__esModule?r:{default:r},l=n(4957),a=n(9898),s=n(639);var u={};function c(e,t,n,o){if(e&&l.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;u[t+"%"+n+(r?"%"+r:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=a.useRouter(),d=i.default.useMemo((function(){var t=l.resolveHref(r,e.href,!0),n=o(t,2),i=n[0],a=n[1];return{href:i,as:e.as?l.resolveHref(r,e.as):a||i}}),[r,e.href,e.as]),f=d.href,p=d.as,h=e.children,b=e.replace,v=e.shallow,m=e.scroll,y=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,w=s.useIntersection({rootMargin:"200px"}),E=o(w,2),k=E[0],x=E[1],O=i.default.useCallback((function(e){k(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,k]);i.default.useEffect((function(){var e=x&&n&&l.isLocalURL(f),t="undefined"!==typeof y?y:r&&r.locale,o=u[f+"%"+p+(t?"%"+t:"")];e&&!o&&c(r,f,p,{locale:t})}),[p,f,x,y,n,r]);var S={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,i,a,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[r?"replace":"push"](n,o,{shallow:i,locale:s,scroll:a}))}(e,r,f,p,b,v,m,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(f)&&c(r,f,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof y?y:r&&r.locale,C=r&&r.isLocaleDomain&&l.getDomainLocale(p,M,r&&r.locales,r&&r.domainLocales);S.href=C||l.addBasePath(l.addLocale(p,M,r&&r.defaultLocale))}return i.default.cloneElement(t,S)};t.default=d},639:function(e,t,n){"use strict";var o=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,u=e.disabled||!l,c=r.useRef(),d=r.useState(!1),f=o(d,2),p=f[0],h=f[1],b=r.useState(t?t.current:null),v=o(b,2),m=v[0],y=v[1],g=r.useCallback((function(e){c.current&&(c.current(),c.current=void 0),u||p||e&&e.tagName&&(c.current=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));o?t=a.get(o):(t=a.get(n),s.push(n));if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(n,t={id:n,observer:i,elements:r}),t}(n),r=o.id,i=o.observer,l=o.elements;return l.set(e,t),i.observe(e),function(){if(l.delete(e),i.unobserve(e),0===l.size){i.disconnect(),a.delete(r);var t=s.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:n}))}),[u,m,n,p]);return r.useEffect((function(){if(!l&&!p){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[p]),r.useEffect((function(){t&&y(t.current)}),[t]),[g,p]};var r=n(7294),i=n(6286),l="undefined"!==typeof IntersectionObserver;var a=new Map,s=[]},1664:function(e,t,n){e.exports=n(7942)},9470:function(e,t,n){"use strict";function o(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function r(e,t){var n=t.distance,o=t.left,r=t.right,i=t.up,l=t.down,a=t.top,u=t.bottom,c=t.big,d=t.mirror,p=t.opposite,h=(n?n.toString():0)+((o?1:0)|(r?2:0)|(a||l?4:0)|(u||i?8:0)|(d?16:0)|(p?32:0)|(e?64:0)|(c?128:0));if(f.hasOwnProperty(h))return f[h];var b=o||r||i||l||a||u,v=void 0,m=void 0;if(b){if(!d!=!(e&&p)){var y=[r,o,u,a,l,i];o=y[0],r=y[1],a=y[2],u=y[3],i=y[4],l=y[5]}var g=n||(c?"2000px":"100%");v=o?"-"+g:r?g:"0",m=l||a?"-"+g:i||u?g:"0"}return f[h]=(0,s.animation)((e?"to":"from")+" {opacity: 0;"+(b?" transform: translate3d("+v+", "+m+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),f[h]}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,i=(e.out,e.forever),l=e.timeout,a=e.duration,u=void 0===a?s.defaults.duration:a,d=e.delay,f=void 0===d?s.defaults.delay:d,p=e.count,h=void 0===p?s.defaults.count:p,b=o(e,["children","out","forever","timeout","duration","delay","count"]),v={make:r,duration:void 0===l?u:l,delay:f,forever:i,count:h,style:{animationFillMode:"both"},reverse:b.left};return t?(0,c.default)(b,v,v,n):v}Object.defineProperty(t,"__esModule",{value:!0});var l,a=n(5697),s=n(1017),u=n(2580),c=(l=u)&&l.__esModule?l:{default:l},d={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,big:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,distance:a.string,delay:a.number,count:a.number,forever:a.bool},f={};i.propTypes=d,t.default=i,e.exports=t.default},9162:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var o=i(n(7294)),r=i(n(3854));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}function a(e){var t=e.mode,n=e.onFixedToggle,i=e.hideOnBoundaryHit,a=e.offsetTransforms,s=e.disabled,u=e.boundaryElement,c=e.scrollElement,d=e.bottomOffset,f=e.topOffset,p=e.positionRecheckInterval,h=e.children,b=e.isIOSFixEnabled,v=e.dontUpdateHolderHeightWhenSticky,m=e.wrapperClassName,y=e.stickyClassName,g=e.stickyStyle,w=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["mode","onFixedToggle","hideOnBoundaryHit","offsetTransforms","disabled","boundaryElement","scrollElement","bottomOffset","topOffset","positionRecheckInterval","children","isIOSFixEnabled","dontUpdateHolderHeightWhenSticky","wrapperClassName","stickyClassName","stickyStyle"]);return o.default.createElement(r.default,{mode:t,onFixedToggle:n,hideOnBoundaryHit:i,offsetTransforms:a,disabled:s,boundaryElement:u,scrollElement:c,bottomOffset:d,topOffset:f,positionRecheckInterval:p,isIOSFixEnabled:b,dontUpdateHolderHeightWhenSticky:v},(function(e){var t=e.isFixed,n=e.wrapperStyles,r=e.wrapperRef,i=e.holderStyles,a=e.holderRef;return o.default.createElement("div",l({},w,{ref:a,style:i}),o.default.createElement("div",l({},w,{className:m+" "+(t?y:""),style:t?l({},n,g):n,ref:r}),h))}))}a.defaultProps={stickyClassName:"sticky",wrapperClassName:"",stickyStyle:{}};var s=a;t.default=s,e.exports=t.default},2442:function(e,t){"use strict";t.__esModule=!0,t.listen=function(e,t,n){for(var o=0,i=t.length;o<i;o+=1)r(e,t[o],n)},t.unlisten=function(e,t,n){for(var o=0,r=t.length;o<r;o+=1)i(e,t[o],n)};var n=[],o=[];function r(e,t,r){var i=n.indexOf(e);-1===i&&(i=n.length,n.push(e),o.push(function(e){return{el:e,callbacks:{},realCallbacks:{},realListenersCnt:0}}(e))),function(e,t,n){e.callbacks[t]?-1===e.callbacks[t].indexOf(n)&&e.callbacks[t].push(n):(e.callbacks[t]=[n],e.realCallbacks[t]=function(n){for(var o=0,r=e.callbacks[t].length;o<r;o+=1)e.callbacks[t][o](n)},e.el.addEventListener(t,e.realCallbacks[t]),e.realListenersCnt+=1)}(o[i],t,r)}function i(e,t,r){var i=n.indexOf(e);if(-1!==i){var l=o[i];!function(e,t,n){if(e.callbacks[t]){var o=e.callbacks[t].indexOf(n);-1!==o&&(e.callbacks[t].splice(o,1),e.callbacks[t].length>0||(e.el.removeEventListener(t,e.realCallbacks[t]),delete e.callbacks[t],delete e.realCallbacks[t],e.realListenersCnt-=1))}}(l,t,r),l.realListenersCnt>0||(n.splice(i,1),o.splice(i,1))}}},2771:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){if(!e)return null;if(n.hasOwnProperty(e))return n[e];if("#"===e[0])return document.getElementById(e.slice(1));if(null===o)return null;var r=t;for(;r=r.parentElement;)if(r[o](e))return r||null;return null};var n={};"undefined"!==typeof document&&(n.body=document.body,n.window=window,n.document=document);var o=function(){if("undefined"!==typeof document&&document.body){var e=document.body;return"function"===typeof e.matches?"matches":"function"===typeof e.webkitMatchesSelector?"webkitMatchesSelector":"function"===typeof e.mozMatchesSelector?"mozMatchesSelector":"function"===typeof e.msMatchesSelector?"msMatchesSelector":"function"===typeof e.oMatchesSelector?"oMatchesSelector":null}return null}();e.exports=t.default},1738:function(e,t){"use strict";t.__esModule=!0,t.default=function(e){do{var t=window.getComputedStyle(e);if("none"!==t.transform||"none"!==t.webkitTransform)return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null},e.exports=t.default},1596:function(e,t){"use strict";t.__esModule=!0,t.getRect=function(e){if(e&&"function"===typeof e.getBoundingClientRect)return e.getBoundingClientRect();if(e===window||e===document)return{top:0,left:0,bottom:window.innerHeight,height:window.innerHeight,width:window.innerWidth,right:window.innerWidth};return{top:0,left:0,right:0,bottom:0,width:0,height:0}},t.isIntersecting=function(e,t,n,o){var r=e.top+n,i=e.bottom+o;return r>=t.top&&r<=t.bottom||i>=t.top&&i<=t.bottom||i>=t.bottom&&r<=t.top},t.infiniteRect=void 0;var n={top:-1/0,bottom:1/0,height:1/0,left:-1/0,right:1/0,width:1/0};t.infiniteRect=n},5198:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.ZP=void 0,o(n(3854)).default;var r=o(n(9162)).default;t.ZP=r},3854:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var o=n(7294),r=n(2442),i=s(n(2771)),l=s(n(1738)),a=n(1596);function s(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u.apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}var f=function(e,t){var n=t.bottomOffset,o=t.hideOnBoundaryHit,r=e.top,i=e.height,l=e.width,a=e.boundaryBottom;return o||r+i+n<a?{top:r+"px",width:l+"px",position:"fixed"}:!o&&a>0?{top:a-i-n+"px",width:l+"px",position:"fixed"}:{width:l+"px",bottom:n+"px",position:"absolute"}},p=function(e,t){var n=t.bottomOffset,o=t.hideOnBoundaryHit,r=e.bottom,i=e.height,l=e.width,a=e.boundaryTop;return o||r-i-n>a?{width:l+"px",top:r-i+"px",position:"fixed"}:{width:l+"px",top:n+"px",position:"absolute"}},h=function(e,t,n){return("top"===e?f:p)(n,t)},b=function(e,t){var n=e.wrapperStyles,o=t.wrapperStyles;if(e.isFixed!==t.isFixed||e.height!==t.height||!n&&o||n&&!o)return!1;if(!o)return!0;for(var r in n)if(n.hasOwnProperty(r)&&n[r]!==o[r])return!1;return!0},v=function(e){var t,n;function o(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).holderEl=null,t.wrapperEl=null,t.el=null,t.scrollEl=null,t.boundaryEl=null,t.disabled=!1,t.checkPositionIntervalId=void 0,t.lastMinHeight=void 0,t.state={isFixed:!1,wrapperStyles:null,holderStyles:null,height:0},t.holderRef=function(e){e!==t.holderEl&&(t.holderEl=e)},t.wrapperRef=function(e){e!==t.wrapperEl&&(t.wrapperEl=e,t.updateScrollEl(),t.updateBoundaryEl())},t.checkPosition=function(){var e=c(t),n=e.holderEl,o=e.wrapperEl,r=e.boundaryEl,i=e.scrollEl,s=e.disabled;if(i&&n&&o){var d=t.props,f=d.mode,p=d.onFixedToggle,v=d.offsetTransforms,m=d.isIOSFixEnabled,y=d.dontUpdateHolderHeightWhenSticky;if(s)t.state.isFixed&&t.setState({isFixed:!1,wrapperStyles:{}});else if(n.getBoundingClientRect&&o.getBoundingClientRect){var g=n.getBoundingClientRect(),w=o.getBoundingClientRect(),E=r?(0,a.getRect)(r):a.infiniteRect,k=(0,a.getRect)(i),x=t.isFixed(g,w,E,k),O=null;if(v&&x){var S=(0,l.default)(i);S&&(O=(0,a.getRect)(S))}var M=t.state.isFixed&&y&&t.lastMinHeight?t.lastMinHeight:w.height;t.lastMinHeight=M;var C=m?{transform:"translateZ(0)",WebkitTransform:"translateZ(0)"}:null,_={isFixed:x,height:w.height,holderStyles:{minHeight:M+"px"},wrapperStyles:x?u({},C,h(f,t.props,{boundaryTop:"bottom"===f?E.top:0,boundaryBottom:"top"===f?E.bottom:0,top:"top"===f?k.top-(O?O.top:0):0,bottom:"bottom"===f?k.bottom-(O?O.bottom:0):0,width:g.width,height:w.height})):C};x!==t.state.isFixed&&p&&"function"===typeof p&&p(x),b(t.state,_)||t.setState(_)}}else console.error("Missing required elements:",{scrollEl:i,holderEl:n,wrapperEl:o})},t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,d(t,n);var s=o.prototype;return s.isFixed=function(e,t,n,o){var r=this.props,i=r.hideOnBoundaryHit,l=r.bottomOffset,s=r.topOffset,u=r.mode;if(this.disabled)return!1;if(i&&n&&!(0,a.isIntersecting)(n,o,s,l))return!1;var c=i?t.height+l:0;return"top"===u?e.top+s<o.top&&o.top+c<=n.bottom:e.bottom-s>o.bottom&&o.bottom-c>=n.top},s.updateScrollEl=function(){if(this.wrapperEl){this.scrollEl&&((0,r.unlisten)(this.scrollEl,["scroll"],this.checkPosition),this.scrollEl=null);var e=this.props.scrollElement;this.scrollEl="string"===typeof e?(0,i.default)(e,this.wrapperEl):e,this.scrollEl?(0,r.listen)(this.scrollEl,["scroll"],this.checkPosition):console.error("Cannot find scrollElement "+("string"===typeof e?e:"unknown"))}},s.updateBoundaryEl=function(){if(this.wrapperEl){var e=this.props.boundaryElement;this.boundaryEl=(0,i.default)(e,this.wrapperEl),this.boundaryEl!==window&&this.boundaryEl!==document||(this.boundaryEl=null)}},s.initialize=function(){var e=this.props,t=e.positionRecheckInterval,n=e.disabled;this.disabled=n,(0,r.listen)(window,["scroll","resize","pageshow","load"],this.checkPosition),this.checkPosition(),t&&(this.checkPositionIntervalId=setInterval(this.checkPosition,t))},s.componentDidUpdate=function(e){var t=e.scrollElement,n=e.boundaryElement,o=e.disabled;t!==this.props.scrollElement&&this.updateScrollEl(),n!==this.props.boundaryElement&&this.updateBoundaryEl(),o!==this.props.disabled&&(this.disabled=this.props.disabled,this.checkPosition())},s.componentDidMount=function(){this.initialize(),null===this.wrapperEl&&console.error("Wrapper element is missing, please make sure that you have assigned refs correctly")},s.componentWillUnmount=function(){this.scrollEl&&(0,r.unlisten)(this.scrollEl,["scroll"],this.checkPosition),(0,r.unlisten)(window,["scroll","resize","pageshow","load"],this.checkPosition),this.boundaryEl=null,this.scrollEl=null,clearInterval(this.checkPositionIntervalId)},s.render=function(){var e=this.holderRef,t=this.wrapperRef,n=this.state,o=n.isFixed,r=n.wrapperStyles,i=n.holderStyles;return this.props.children({holderRef:e,wrapperRef:t,isFixed:o,wrapperStyles:r,holderStyles:i})},o}(o.Component);v.defaultProps={mode:"top",topOffset:0,bottomOffset:0,isIOSFixEnabled:!0,disabled:!1,onFixedToggle:null,boundaryElement:null,scrollElement:"window",dontUpdateHolderHeightWhenSticky:!1};var m=v;t.default=m,e.exports=t.default},2587:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}n.d(t,{Z:function(){return o}})},6835:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(2937);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);l=!0);}catch(s){a=!0,r=s}finally{try{l||null==n.return||n.return()}finally{if(a)throw r}}return i}}(e,t)||(0,o.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2937:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(2587);function r(e,t){if(e){if("string"===typeof e)return(0,o.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,o.Z)(e,t):void 0}}}}]);
//# sourceMappingURL=720.0d63c4900ec7eff2.js.map