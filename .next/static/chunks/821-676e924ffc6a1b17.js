(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{3740:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=t(6495).Z,r=t(2648).Z,a=t(1598).Z,n=t(7273).Z,s=a(t(7294)),l=r(t(2636)),c=t(7757),d=t(3735),u=t(3341);t(4210);var b=r(t(7746));let w={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function f(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,i,t,r,a,n,s){if(!e||e["data-loaded-src"]===i)return;e["data-loaded-src"]=i;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===t&&n(!0),null==r?void 0:r.current){let i=new Event("load");Object.defineProperty(i,"target",{writable:!1,value:e});let t=!1,a=!1;r.current(o({},i,{nativeEvent:i,currentTarget:e,target:e,isDefaultPrevented:()=>t,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{t=!0,i.preventDefault()},stopPropagation:()=>{a=!0,i.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let g=s.forwardRef((e,i)=>{var{imgAttributes:t,heightInt:r,widthInt:a,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:b,fill:w,placeholder:m,loading:f,srcString:g,config:h,unoptimized:v,loader:y,onLoadRef:x,onLoadingCompleteRef:k,setBlurComplete:S,setShowAltText:_,onLoad:E,onError:C}=e,O=n(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return f=b?"lazy":f,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},O,{loading:f,width:a,height:r,decoding:"async","data-nimg":w?"fill":"1",className:c,style:o({},d,u)},t,{ref:s.useCallback(e=>{i&&("function"==typeof i?i(e):"object"==typeof i&&(i.current=e)),e&&(C&&(e.src=e.src),e.complete&&p(e,g,m,x,k,S,v))},[g,m,x,k,S,C,v,i]),onLoad:e=>{let i=e.currentTarget;p(i,g,m,x,k,S,v)},onError:e=>{_(!0),"blur"===m&&S(!0),C&&C(e)}})))}),h=s.forwardRef((e,i)=>{let t,r;var a,{src:p,sizes:h,unoptimized:v=!1,priority:y=!1,loading:x,className:k,quality:S,width:_,height:E,fill:C,style:O,onLoad:T,onLoadingComplete:z,placeholder:P="empty",blurDataURL:j,layout:A,objectFit:M,objectPosition:I,lazyBoundary:N,lazyRoot:R}=e,q=n(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let B=s.useContext(u.ImageConfigContext),U=s.useMemo(()=>{let e=w||B||d.imageConfigDefault,i=[...e.deviceSizes,...e.imageSizes].sort((e,i)=>e-i),t=e.deviceSizes.sort((e,i)=>e-i);return o({},e,{allSizes:i,deviceSizes:t})},[B]),W=q,D=W.loader||b.default;delete W.loader;let L="__next_img_default"in D;if(L){if("custom"===U.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=D;D=i=>{let{config:t}=i,o=n(i,["config"]);return e(o)}}if(A){"fill"===A&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(O=o({},O,e));let i={responsive:"100vw",fill:"100vw"}[A];i&&!h&&(h=i)}let F="",V=f(_),G=f(E);if("object"==typeof(a=p)&&(m(a)||void 0!==a.src)){let e=m(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(t=e.blurWidth,r=e.blurHeight,j=j||e.blurDataURL,F=e.src,!C){if(V||G){if(V&&!G){let i=V/e.width;G=Math.round(e.height*i)}else if(!V&&G){let i=G/e.height;V=Math.round(e.width*i)}}else V=e.width,G=e.height}}let Z=!y&&("lazy"===x||void 0===x);((p="string"==typeof p?p:F).startsWith("data:")||p.startsWith("blob:"))&&(v=!0,Z=!1),U.unoptimized&&(v=!0),L&&p.endsWith(".svg")&&!U.dangerouslyAllowSVG&&(v=!0);let[H,Y]=s.useState(!1),[$,X]=s.useState(!1),J=f(S),K=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:I}:{},$?{}:{color:"transparent"},O),Q="blur"===P&&j&&!H?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:V,heightInt:G,blurWidth:t,blurHeight:r,blurDataURL:j,objectFit:K.objectFit}),'")')}:{},ee=function(e){let{config:i,src:t,unoptimized:o,width:r,quality:a,sizes:n,loader:s}=e;if(o)return{src:t,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,i,t){let{deviceSizes:o,allSizes:r}=e;if(t){let e=/(^|\s)(1?\d?\d)vw/g,i=[];for(let o;o=e.exec(t);o)i.push(parseInt(o[2]));if(i.length){let e=.01*Math.min(...i);return{widths:r.filter(i=>i>=o[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof i)return{widths:o,kind:"w"};let a=[...new Set([i,2*i].map(e=>r.find(i=>i>=e)||r[r.length-1]))];return{widths:a,kind:"x"}}(i,r,n),d=l.length-1;return{sizes:n||"w"!==c?n:"100vw",srcSet:l.map((e,o)=>"".concat(s({config:i,src:t,quality:a,width:e})," ").concat("w"===c?e:o+1).concat(c)).join(", "),src:s({config:i,src:t,quality:a,width:l[d]})}}({config:U,src:p,unoptimized:v,width:V,quality:J,sizes:h,loader:D}),ei=p,et={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:W.crossOrigin},eo=s.useRef(T);s.useEffect(()=>{eo.current=T},[T]);let er=s.useRef(z);s.useEffect(()=>{er.current=z},[z]);let ea=o({isLazy:Z,imgAttributes:ee,heightInt:G,widthInt:V,qualityInt:J,className:k,imgStyle:K,blurStyle:Q,loading:x,config:U,fill:C,unoptimized:v,placeholder:P,loader:D,srcString:ei,onLoadRef:eo,onLoadingCompleteRef:er,setBlurComplete:Y,setShowAltText:X},W);return s.default.createElement(s.default.Fragment,null,s.default.createElement(g,Object.assign({},ea,{ref:i})),y?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},et))):null)});i.default=h,("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),e.exports=i.default)},7757:function(e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.getImageBlurSvg=function(e){let{widthInt:i,heightInt:t,blurWidth:o,blurHeight:r,blurDataURL:a,objectFit:n}=e,s=o||i,l=r||t,c=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(o&&r?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E")}},7746:function(e,i){"use strict";function t(e){let{config:i,src:t,width:o,quality:r}=e;return"".concat(i.path,"?url=").concat(encodeURIComponent(t),"&w=").concat(o,"&q=").concat(r||75)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t.__next_img_default=!0,i.default=t},5675:function(e,i,t){e.exports=t(3740)},2703:function(e,i,t){"use strict";var o=t(414);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,i,t,r,a,n){if(n!==o){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:i,element:e,elementType:e,instanceOf:i,node:e,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:a,resetWarningCache:r};return t.PropTypes=t,t}},5697:function(e,i,t){e.exports=t(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5518:function(e,i,t){"use strict";var o,r,a,n,s,l,c=t(7294);c&&"object"==typeof c&&"default"in c&&c.default;var d=t(3451),u=new d,b=u.getBrowser(),w=u.getCPU(),m=u.getDevice(),f=u.getEngine(),p=u.getOS(),g=u.getUA(),h={Mobile:"mobile",Tablet:"tablet",SmartTv:"smarttv",Console:"console",Wearable:"wearable",Embedded:"embedded",Browser:void 0},v={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},y={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},x=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},k=function(){return!!("undefined"!=typeof window&&(window.navigator||navigator))&&(window.navigator||navigator)},S=function(e){var i=k();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)},_=function(e){return e.type===h.Browser},E=function(e){return e.name===v.Edge},C=function(e){return"string"==typeof e&&-1!==e.indexOf("Edg/")},O=function(){return S("iPad")};m.type,h.SmartTv,m.type,h.Console,m.type,h.Wearable,m.type,h.Embedded,b.name===v.MobileSafari||O(),b.name,v.Chromium;var T=(o=m.type)===h.Mobile||o===h.Tablet||O();m.type,h.Mobile,m.type===h.Tablet||O(),_(m),_(m),p.name,y.Android,p.name,y.WindowsPhone,p.name===y.IOS||O(),b.name,v.Chrome,b.name,v.Firefox,(r=b.name)===v.Safari||v.MobileSafari,b.name,v.Opera,(a=b.name)===v.InternetExplorer||v.Ie,x(p.version),x(p.name),x(b.version),x(b.major),x(b.name),x(m.vendor),x(m.model),x(f.name),x(f.version),x(g),E(b)||C(g),b.name,v.Yandex,x(m.type,"browser"),(n=k())&&(/iPad|iPhone|iPod/.test(n.platform)||"MacIntel"===n.platform&&n.maxTouchPoints>1)&&window.MSStream,O(),S("iPhone"),S("iPod"),"string"==typeof(l=(s=k())&&s.userAgent&&s.userAgent.toLowerCase())&&/electron/.test(l),C(g),E(b)&&C(g),p.name,y.Windows,p.name,y.MAC_OS,b.name,v.MIUI,b.name,v.SamsungBrowser,i.tq=T},8357:function(e,i,t){"use strict";t.d(i,{w_:function(){return l}});var o=t(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=o.createContext&&o.createContext(r),n=function(){return(n=Object.assign||function(e){for(var i,t=1,o=arguments.length;t<o;t++)for(var r in i=arguments[t])Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);return e}).apply(this,arguments)},s=function(e,i){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>i.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>i.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};function l(e){return function(i){return o.createElement(c,n({attr:n({},e.attr)},i),function e(i){return i&&i.map(function(i,t){return o.createElement(i.tag,n({key:t},i.attr),e(i.child))})}(e.child))}}function c(e){var i=function(i){var t,r=e.attr,a=e.size,l=e.title,c=s(e,["attr","size","title"]),d=a||i.size||"1em";return i.className&&(t=i.className),e.className&&(t=(t?t+" ":"")+e.className),o.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,c,{className:t,style:n(n({color:e.color||i.color},i.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&o.createElement("title",null,l),e.children)};return void 0!==a?o.createElement(a.Consumer,null,function(e){return i(e)}):i(r)}},3451:function(e,i,t){var o;!function(r,a){"use strict";var n="function",s="undefined",l="object",c="string",d="major",u="model",b="name",w="type",m="vendor",f="version",p="architecture",g="console",h="mobile",v="tablet",y="smarttv",x="wearable",k="embedded",S="Amazon",_="Apple",E="ASUS",C="BlackBerry",O="Browser",T="Chrome",z="Firefox",P="Google",j="Huawei",A="Microsoft",M="Motorola",I="Opera",N="Samsung",R="Sharp",q="Sony",B="Xiaomi",U="Zebra",W="Facebook",D="Chromium OS",L="Mac OS",F=function(e,i){var t={};for(var o in e)i[o]&&i[o].length%2==0?t[o]=i[o].concat(e[o]):t[o]=e[o];return t},V=function(e){for(var i={},t=0;t<e.length;t++)i[e[t].toUpperCase()]=e[t];return i},G=function(e,i){return typeof e===c&&-1!==Z(i).indexOf(Z(e))},Z=function(e){return e.toLowerCase()},H=function(e,i){if(typeof e===c)return e=e.replace(/^\s\s*/,""),typeof i===s?e:e.substring(0,350)},Y=function(e,i){for(var t,o,r,s,c,d,u=0;u<i.length&&!c;){var b=i[u],w=i[u+1];for(t=o=0;t<b.length&&!c&&b[t];)if(c=b[t++].exec(e))for(r=0;r<w.length;r++)d=c[++o],typeof(s=w[r])===l&&s.length>0?2===s.length?typeof s[1]==n?this[s[0]]=s[1].call(this,d):this[s[0]]=s[1]:3===s.length?typeof s[1]!==n||s[1].exec&&s[1].test?this[s[0]]=d?d.replace(s[1],s[2]):a:this[s[0]]=d?s[1].call(this,d,s[2]):a:4===s.length&&(this[s[0]]=d?s[3].call(this,d.replace(s[1],s[2])):a):this[s]=d||a;u+=2}},$=function(e,i){for(var t in i)if(typeof i[t]===l&&i[t].length>0){for(var o=0;o<i[t].length;o++)if(G(i[t][o],e))return"?"===t?a:t}else if(G(i[t],e))return"?"===t?a:t;return e},X={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},J={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[f,[b,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[f,[b,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[b,f],[/opios[\/ ]+([\w\.]+)/i],[f,[b,I+" Mini"]],[/\bopr\/([\w\.]+)/i],[f,[b,I]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[b,f],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[f,[b,"UC"+O]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[f,[b,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[f,[b,"WeChat"]],[/konqueror\/([\w\.]+)/i],[f,[b,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[f,[b,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[f,[b,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[b,/(.+)/,"$1 Secure "+O],f],[/\bfocus\/([\w\.]+)/i],[f,[b,z+" Focus"]],[/\bopt\/([\w\.]+)/i],[f,[b,I+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[f,[b,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[f,[b,"Dolphin"]],[/coast\/([\w\.]+)/i],[f,[b,I+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[f,[b,"MIUI "+O]],[/fxios\/([-\w\.]+)/i],[f,[b,z]],[/\bqihu|(qi?ho?o?|360)browser/i],[[b,"360 "+O]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[b,/(.+)/,"$1 "+O],f],[/(comodo_dragon)\/([\w\.]+)/i],[[b,/_/g," "],f],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[b,f],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[b],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[b,W],f],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[b,f],[/\bgsa\/([\w\.]+) .*safari\//i],[f,[b,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[f,[b,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[f,[b,T+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[b,T+" WebView"],f],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[f,[b,"Android "+O]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[b,f],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[f,[b,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[f,b],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[b,[f,$,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[b,f],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[b,"Netscape"],f],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[f,[b,z+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[b,f],[/(cobalt)\/([\w\.]+)/i],[b,[f,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,Z]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",Z]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,Z]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[u,[m,N],[w,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[u,[m,N],[w,h]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[u,[m,_],[w,h]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[u,[m,_],[w,v]],[/(macintosh);/i],[u,[m,_]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[u,[m,R],[w,h]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[u,[m,j],[w,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[u,[m,j],[w,h]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[u,/_/g," "],[m,B],[w,h]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[u,/_/g," "],[m,B],[w,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[u,[m,"OPPO"],[w,h]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[u,[m,"Vivo"],[w,h]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[u,[m,"Realme"],[w,h]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[u,[m,M],[w,h]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[u,[m,M],[w,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[u,[m,"LG"],[w,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[u,[m,"LG"],[w,h]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[u,[m,"Lenovo"],[w,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[u,/_/g," "],[m,"Nokia"],[w,h]],[/(pixel c)\b/i],[u,[m,P],[w,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[u,[m,P],[w,h]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[u,[m,q],[w,h]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[u,"Xperia Tablet"],[m,q],[w,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[u,[m,"OnePlus"],[w,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[u,[m,S],[w,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[u,/(.+)/g,"Fire Phone $1"],[m,S],[w,h]],[/(playbook);[-\w\),; ]+(rim)/i],[u,m,[w,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[u,[m,C],[w,h]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[u,[m,E],[w,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[u,[m,E],[w,h]],[/(nexus 9)/i],[u,[m,"HTC"],[w,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[m,[u,/_/g," "],[w,h]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[u,[m,"Acer"],[w,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[u,[m,"Meizu"],[w,h]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[m,u,[w,h]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[m,u,[w,v]],[/(surface duo)/i],[u,[m,A],[w,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[u,[m,"Fairphone"],[w,h]],[/(u304aa)/i],[u,[m,"AT&T"],[w,h]],[/\bsie-(\w*)/i],[u,[m,"Siemens"],[w,h]],[/\b(rct\w+) b/i],[u,[m,"RCA"],[w,v]],[/\b(venue[\d ]{2,7}) b/i],[u,[m,"Dell"],[w,v]],[/\b(q(?:mv|ta)\w+) b/i],[u,[m,"Verizon"],[w,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[u,[m,"Barnes & Noble"],[w,v]],[/\b(tm\d{3}\w+) b/i],[u,[m,"NuVision"],[w,v]],[/\b(k88) b/i],[u,[m,"ZTE"],[w,v]],[/\b(nx\d{3}j) b/i],[u,[m,"ZTE"],[w,h]],[/\b(gen\d{3}) b.+49h/i],[u,[m,"Swiss"],[w,h]],[/\b(zur\d{3}) b/i],[u,[m,"Swiss"],[w,v]],[/\b((zeki)?tb.*\b) b/i],[u,[m,"Zeki"],[w,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[m,"Dragon Touch"],u,[w,v]],[/\b(ns-?\w{0,9}) b/i],[u,[m,"Insignia"],[w,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[u,[m,"NextBook"],[w,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[m,"Voice"],u,[w,h]],[/\b(lvtel\-)?(v1[12]) b/i],[[m,"LvTel"],u,[w,h]],[/\b(ph-1) /i],[u,[m,"Essential"],[w,h]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[u,[m,"Envizen"],[w,v]],[/\b(trio[-\w\. ]+) b/i],[u,[m,"MachSpeed"],[w,v]],[/\btu_(1491) b/i],[u,[m,"Rotor"],[w,v]],[/(shield[\w ]+) b/i],[u,[m,"Nvidia"],[w,v]],[/(sprint) (\w+)/i],[m,u,[w,h]],[/(kin\.[onetw]{3})/i],[[u,/\./g," "],[m,A],[w,h]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[u,[m,U],[w,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[u,[m,U],[w,h]],[/smart-tv.+(samsung)/i],[m,[w,y]],[/hbbtv.+maple;(\d+)/i],[[u,/^/,"SmartTV"],[m,N],[w,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[m,"LG"],[w,y]],[/(apple) ?tv/i],[m,[u,_+" TV"],[w,y]],[/crkey/i],[[u,T+"cast"],[m,P],[w,y]],[/droid.+aft(\w)( bui|\))/i],[u,[m,S],[w,y]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[u,[m,R],[w,y]],[/(bravia[\w ]+)( bui|\))/i],[u,[m,q],[w,y]],[/(mitv-\w{5}) bui/i],[u,[m,B],[w,y]],[/Hbbtv.*(technisat) (.*);/i],[m,u,[w,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[m,H],[u,H],[w,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[w,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[m,u,[w,g]],[/droid.+; (shield) bui/i],[u,[m,"Nvidia"],[w,g]],[/(playstation [345portablevi]+)/i],[u,[m,q],[w,g]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[u,[m,A],[w,g]],[/((pebble))app/i],[m,u,[w,x]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[u,[m,_],[w,x]],[/droid.+; (glass) \d/i],[u,[m,P],[w,x]],[/droid.+; (wt63?0{2,3})\)/i],[u,[m,U],[w,x]],[/(quest( 2| pro)?)/i],[u,[m,W],[w,x]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[m,[w,k]],[/(aeobc)\b/i],[u,[m,S],[w,k]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[u,[w,h]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[u,[w,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[w,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[w,h]],[/(android[-\w\. ]{0,9});.+buil/i],[u,[m,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[f,[b,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[f,[b,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[b,f],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[f,b]],os:[[/microsoft (windows) (vista|xp)/i],[b,f],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[b,[f,$,X]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[b,"Windows"],[f,$,X]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[f,/_/g,"."],[b,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[b,L],[f,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[f,b],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[b,f],[/\(bb(10);/i],[f,[b,C]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[f,[b,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[f,[b,z+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[f,[b,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[f,[b,"watchOS"]],[/crkey\/([\d\.]+)/i],[f,[b,T+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[b,D],f],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[b,f],[/(sunos) ?([\w\.\d]*)/i],[[b,"Solaris"],f],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[b,f]]},K=function(e,i){if(typeof e===l&&(i=e,e=a),!(this instanceof K))return new K(e,i).getResult();var t=typeof r!==s&&r.navigator?r.navigator:a,o=e||(t&&t.userAgent?t.userAgent:""),g=t&&t.userAgentData?t.userAgentData:a,y=i?F(J,i):J,x=t&&t.userAgent==o;return this.getBrowser=function(){var e,i={};return i[b]=a,i[f]=a,Y.call(i,o,y.browser),i[d]=typeof(e=i[f])===c?e.replace(/[^\d\.]/g,"").split(".")[0]:a,x&&t&&t.brave&&typeof t.brave.isBrave==n&&(i[b]="Brave"),i},this.getCPU=function(){var e={};return e[p]=a,Y.call(e,o,y.cpu),e},this.getDevice=function(){var e={};return e[m]=a,e[u]=a,e[w]=a,Y.call(e,o,y.device),x&&!e[w]&&g&&g.mobile&&(e[w]=h),x&&"Macintosh"==e[u]&&t&&typeof t.standalone!==s&&t.maxTouchPoints&&t.maxTouchPoints>2&&(e[u]="iPad",e[w]=v),e},this.getEngine=function(){var e={};return e[b]=a,e[f]=a,Y.call(e,o,y.engine),e},this.getOS=function(){var e={};return e[b]=a,e[f]=a,Y.call(e,o,y.os),x&&!e[b]&&g&&"Unknown"!=g.platform&&(e[b]=g.platform.replace(/chrome os/i,D).replace(/macos/i,L)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(e){return o=typeof e===c&&e.length>350?H(e,350):e,this},this.setUA(o),this};K.VERSION="1.0.35",K.BROWSER=V([b,f,d]),K.CPU=V([p]),K.DEVICE=V([u,m,w,g,h,y,v,x,k]),K.ENGINE=K.OS=V([b,f]),typeof i!==s?(e.exports&&(i=e.exports=K),i.UAParser=K):t.amdO?(o=(function(){return K}).call(i,t,i,e),a!==o&&(e.exports=o)):typeof r!==s&&(r.UAParser=K);var Q=typeof r!==s&&(r.jQuery||r.Zepto);if(Q&&!Q.ua){var ee=new K;Q.ua=ee.getResult(),Q.ua.get=function(){return ee.getUA()},Q.ua.set=function(e){ee.setUA(e);var i=ee.getResult();for(var t in i)Q.ua[t]=i[t]}}}("object"==typeof window?window:this)}}]);