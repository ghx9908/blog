"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2526],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(a),c=r,k=s["".concat(o,".").concat(c)]||s[c]||d[c]||l;return a?n.createElement(k,p(p({ref:t},u),{},{components:a})):n.createElement(k,p({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5563:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:3,title:"3. sourcemap"},p=void 0,i={unversionedId:"sourcemap",id:"sourcemap",title:"3. sourcemap",description:"1. sourcemap",source:"@site/engineering/03-sourcemap.md",sourceDirName:".",slug:"/sourcemap",permalink:"/website/engineering/sourcemap",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"3. sourcemap"},sidebar:"tutorialSidebar",previous:{title:"2. polyfill",permalink:"/website/engineering/polyfill"},next:{title:"4. webpack \u6253\u5305\u540e\u6a21\u5757\u5206\u6790",permalink:"/website/engineering/bundle"}},o={},m=[{value:"1. sourcemap",id:"1-sourcemap",level:2},{value:"1.1 \u4ec0\u4e48\u662f sourceMap",id:"11-\u4ec0\u4e48\u662f-sourcemap",level:3},{value:"1.2 \u914d\u7f6e\u9879",id:"12-\u914d\u7f6e\u9879",level:3},{value:"1.3 \u6700\u4f73\u5b9e\u8df5",id:"13-\u6700\u4f73\u5b9e\u8df5",level:3},{value:"1.3.1 \u5f00\u53d1\u73af\u5883",id:"131-\u5f00\u53d1\u73af\u5883",level:4},{value:"1.3.2 \u751f\u4ea7\u73af\u5883",id:"132-\u751f\u4ea7\u73af\u5883",level:4},{value:"2.\u8c03\u8bd5\u4ee3\u7801",id:"2\u8c03\u8bd5\u4ee3\u7801",level:2},{value:"2.1 \u6d4b\u8bd5\u73af\u5883\u8c03\u8bd5",id:"21-\u6d4b\u8bd5\u73af\u5883\u8c03\u8bd5",level:3},{value:"2.2 \u751f\u4ea7\u73af\u5883\u8c03\u8bd5",id:"22-\u751f\u4ea7\u73af\u5883\u8c03\u8bd5",level:3},{value:"<strong>\u8bf7\u8bf4\u8bf4 sourcemap \u539f\u7406</strong>",id:"\u8bf7\u8bf4\u8bf4-sourcemap-\u539f\u7406",level:2}],u={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-sourcemap"},"1. sourcemap"),(0,r.kt)("h3",{id:"11-\u4ec0\u4e48\u662f-sourcemap"},"1.1 \u4ec0\u4e48\u662f sourceMap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sourcemap \u662f\u4e3a\u4e86\u89e3\u51b3\u5f00\u53d1\u4ee3\u7801\u4e0e\u5b9e\u9645\u8fd0\u884c\u4ee3\u7801\u4e0d\u4e00\u81f4\u65f6\u5e2e\u52a9\u6211\u4eec debug \u5230\u539f\u59cb\u5f00\u53d1\u4ee3\u7801\u7684\u6280\u672f"),(0,r.kt)("li",{parentName:"ul"},"webpack \u901a\u8fc7\u914d\u7f6e\u53ef\u4ee5\u81ea\u52a8\u7ed9\u6211\u4eec",(0,r.kt)("inlineCode",{parentName:"li"},"source maps"),"\u6587\u4ef6\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"map"),"\u6587\u4ef6\u662f\u4e00\u79cd\u5bf9\u5e94\u7f16\u8bd1\u6587\u4ef6\u548c\u6e90\u6587\u4ef6\u7684\u65b9\u6cd5")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"sourcemap \u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9002\u7528\u573a\u666f"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u4f18\u7f3a\u70b9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"source-map")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u539f\u59cb\u4ee3\u7801\uff0c\u9700\u8981\u6700\u597d\u7684 sourcemap \u8d28\u91cf"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6700\u9ad8\u7684\u8d28\u91cf\u548c\u6700\u4f4e\u7684\u6027\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eval-source-map")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u539f\u59cb\u4ee3\u7801\uff0c\u9700\u8981\u9ad8\u8d28\u91cf\u7684 sourcemap"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9ad8\u8d28\u91cf\u548c\u4f4e\u6027\u80fd\uff0csourcemap \u53ef\u80fd\u4f1a\u5f88\u6162")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cheap-module-eval-source-map")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u539f\u59cb\u4ee3\u7801\uff0c\u9700\u8981\u9ad8\u8d28\u91cf\u548c\u4f4e\u6027\u80fd\u7684 sourcemap"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9ad8\u8d28\u91cf\u548c\u66f4\u4f4e\u7684\u6027\u80fd\uff0c\u53ea\u6709\u6bcf\u884c\u7684\u6620\u5c04")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cheap-eval-source-map")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8f6c\u6362\u4ee3\u7801\uff0c\u9700\u8981\u884c\u5185 sourcemap"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u9ad8\u7684\u8d28\u91cf\u548c\u66f4\u4f4e\u7684\u6027\u80fd\uff0c\u6bcf\u4e2a\u6a21\u5757\u88ab eval \u6267\u884c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eval")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u751f\u6210\u4ee3\u7801\uff0c\u9700\u8981\u5e26 eval \u7684\u6784\u5efa\u6a21\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6700\u4f4e\u7684\u8d28\u91cf\u548c\u66f4\u4f4e\u7684\u6027\u80fd\uff0c\u4f46\u53ef\u4ee5\u7f13\u5b58 sourcemap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cheap-source-map")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8f6c\u6362\u4ee3\u7801\uff0c\u9700\u8981\u884c\u5185 sourcemap"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u5217\u6620\u5c04\uff0c\u4ece loaders \u751f\u6210\u7684 sourcemap \u6ca1\u6709\u88ab\u4f7f\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cheap-module-source-map")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u539f\u59cb\u4ee3\u7801\uff0c\u9700\u8981\u53ea\u6709\u884c\u5185\u7684 sourcemap"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u5217\u6620\u5c04\uff0c\u4f46\u5305\u62ec\u4ece loaders \u4e2d\u751f\u6210\u7684 sourcemap \u7684\u6bcf\u884c\u6620\u5c04")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hidden-source-map")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u9690\u85cf sourcemap"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u80fd\u591f\u9690\u85cf sourcemap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nosources-source-map")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u6b63\u786e\u63d0\u793a\u62a5\u9519\u4f4d\u7f6e\uff0c\u4f46\u4e0d\u66b4\u9732\u6e90\u7801"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u80fd\u591f\u6b63\u786e\u63d0\u793a\u62a5\u9519\u4f4d\u7f6e\uff0c\u4f46\u4e0d\u4f1a\u66b4\u9732\u6e90\u7801")))),(0,r.kt)("h3",{id:"12-\u914d\u7f6e\u9879"},"1.2 \u914d\u7f6e\u9879"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"}," cosnt devtool =    \\^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$\\\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u9879\u5176\u5b9e\u53ea\u662f\u4e94\u4e2a\u5173\u952e\u5b57 eval\u3001source-map\u3001cheap\u3001module \u548c inline \u7684\u7ec4\u5408")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"sourcemap \u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"source-map")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u751f\u6210 .map \u6587\u4ef6 ",(0,r.kt)("strong",{parentName:"td"},"\u6700\u9ad8\u7684\u8d28\u91cf\u548c\u6700\u4f4e\u7684\u6027\u80fd"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eval")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f7f\u7528 eval \u5305\u88f9\u6a21\u5757\u4ee3\u7801\uff0c",(0,r.kt)("strong",{parentName:"td"},"\u6709\u7f13\u5b58"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cheap")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u5305\u542b\u5217\u4fe1\u606f\uff0c\u4e5f\u4e0d\u5305\u542b loader \u7684 sourcemap ",(0,r.kt)("strong",{parentName:"td"},"(\u4f4e\u5f00\u9500)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"module")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5305\u542b loader \u7684 sourcemap\uff0c\u5426\u5219\u65e0\u6cd5\u5b9a\u4e49\u6e90\u6587\u4ef6 ",(0,r.kt)("strong",{parentName:"td"},"\u6620\u5c04\u5230 loader \u5904\u7406\u524d\u7684\u4ee3\u7801"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"inline")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c06 .map ",(0,r.kt)("strong",{parentName:"td"},"\u4f5c\u4e3a DataURI \u5d4c\u5165"),"\uff0c\u4e0d\u5355\u72ec\u751f\u6210 .map \u6587\u4ef6")))),(0,r.kt)("h3",{id:"13-\u6700\u4f73\u5b9e\u8df5"},"1.3 \u6700\u4f73\u5b9e\u8df5"),(0,r.kt)("h4",{id:"131-\u5f00\u53d1\u73af\u5883"},"1.3.1 \u5f00\u53d1\u73af\u5883"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u73af\u5883\u5bf9 sourceMap \u7684\u8981\u6c42\uff1a\u5feb\uff08eval\uff09\uff0c\u4fe1\u606f\u5168\uff08module\uff09\uff0c"),(0,r.kt)("li",{parentName:"ul"},"\u4e14\u7531\u4e8e\u6b64\u65f6\u4ee3\u7801\u672a\u538b\u7f29\uff0c\u6211\u4eec\u5e76\u4e0d\u90a3\u4e48\u5728\u610f\u4ee3\u7801\u5217\u4fe1\u606f(cheap),"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u63a8\u8350\u914d\u7f6e"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"devtool: eval-cheap-module-source-map"))),(0,r.kt)("h4",{id:"132-\u751f\u4ea7\u73af\u5883"},"1.3.2 \u751f\u4ea7\u73af\u5883"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5e76\u4e0d\u5e0c\u671b\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u76f4\u63a5\u770b\u5230\u6211\u4eec\u672a\u7f16\u8bd1\u7684\u6e90\u7801\uff0c"),(0,r.kt)("li",{parentName:"ul"},"\u6240\u4ee5\u6211\u4eec\u4e0d\u5e94\u8be5\u76f4\u63a5\u63d0\u4f9b sourceMap \u7ed9\u6d4f\u89c8\u5668\u3002\u4f46\u6211\u4eec\u53c8\u9700\u8981 sourceMap \u6765\u5b9a\u4f4d\u6211\u4eec\u7684\u9519\u8bef\u4fe1\u606f\uff0c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u63a8\u8350"),(0,r.kt)("inlineCode",{parentName:"li"},"hidden-source-map")),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u65b9\u9762 webpack \u4f1a\u751f\u6210 sourcemap \u6587\u4ef6\u4ee5\u63d0\u4f9b\u7ed9\u9519\u8bef\u6536\u96c6\u5de5\u5177\u6bd4\u5982 sentry\uff0c\u53e6\u4e00\u65b9\u9762\u53c8\u4e0d\u4f1a\u4e3a bundle \u6dfb\u52a0\u5f15\u7528\u6ce8\u91ca\uff0c\u4ee5\u907f\u514d\u6d4f\u89c8\u5668\u4f7f\u7528\u3002")),(0,r.kt)("h2",{id:"2\u8c03\u8bd5\u4ee3\u7801"},"2.\u8c03\u8bd5\u4ee3\u7801"),(0,r.kt)("h3",{id:"21-\u6d4b\u8bd5\u73af\u5883\u8c03\u8bd5"},"2.1 \u6d4b\u8bd5\u73af\u5883\u8c03\u8bd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\n- \u628a\u4ee3\u7801\u53d1\u5e03\u5230\u4e86\u6d4b\u8bd5\u73af\u5883\uff0c\u4e0d\u5e0c\u671b\u6d4b\u8bd5\u4eba\u5458\u80fd\u770b\u5230\u4f60\u7684\u6e90\u6587\u4ef6\n- \u4f46\u662f\u4f60\u5f00\u53d1\u9700\u8981\n- \u4f60\u53ef\u4ee5\u628a map \u6587\u4ef6\u653e\u5728\u4f60\u7684\u672c\u5730\u3002\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filemanager-webpack-plugin")," \u662f\u4e00\u4e2a\u7528\u4e8e Webpack \u7684\u63d2\u4ef6\uff0c\u53ef\u4ee5\u5728 Webpack \u6784\u5efa\u7ed3\u675f\u540e\u6267\u884c\u4e00\u4e9b\u6587\u4ef6\u7ba1\u7406\u64cd\u4f5c\u6bd4\u5982\u62f7\u8d1d\u6587\u4ef6\u3001\u5220\u9664\u6587\u4ef6\u3001\u5f52\u6863\u6587\u4ef6\u7b49\u7b49"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"webpack.SourceMapDevToolPlugin "),"\u662f webpack \u63d0\u4f9b\u7684\u7528\u4e8e\u751f\u6210 source map \u7684\u63d2\u4ef6\u4e4b\u4e00\u3002\u5b83\u53ef\u4ee5\u4e3a\u5f00\u53d1\u73af\u5883\u4e0b\u7684\u4ee3\u7801\u751f\u6210 source map\uff0c\u65b9\u4fbf\u8c03\u8bd5\u548c\u5b9a\u4f4d\u95ee\u9898,\u8be5\u63d2\u4ef6\u7684\u4e3b\u8981\u4f5c\u7528\u5c31\u662f\u5728\u6253\u5305\u7684\u4ee3\u7801\u4e2d\u751f\u6210\u5bf9\u5e94\u7684 source map \u6587\u4ef6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"filename: \u6307\u5b9a\u751f\u6210\u7684 source map \u6587\u4ef6\u540d\uff0c\u4e00\u822c\u4e3a ","[file]",".map \u6216\u8005 ","[file]",".","[contenthash]",".map"),(0,r.kt)("li",{parentName:"ul"},"append: \u662f\u5426\u5c06 source map \u6dfb\u52a0\u5230\u5df2\u6709\u7684 source map \u4e2d\uff0c\u5982\u679c\u4e3a false\uff0c\u5219\u751f\u6210\u7684 source map \u4f1a\u8986\u76d6\u5df2\u6709\u7684 source map")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const HtmlWebpackPlugin = require("html-webpack-plugin")\nconst FileManagerPlugin = require("filemanager-webpack-plugin")\nconst webpack = require("webpack")\nmodule.exports = {\n  mode: "production",\n  devtool: false,\n  entry: "./src/index.js",\n  resolveLoader: {\n    modules: ["node_modules", "loaders"],\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        use: [\n          {\n            loader: "babel-loader",\n            options: {\n              presets: ["@babel/preset-env"],\n            },\n          },\n        ],\n      },\n      {\n        test: /\\.(jpg|png|gif|bmp)$/,\n        type: "asset",\n      },\n    ],\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      template: "./src/index.html",\n    }),\n    new webpack.SourceMapDevToolPlugin({\n      append: "\\n//# sourceMappingURL=http://127.0.0.1:8081/[url]",\n      filename: "[file].map[query]",\n    }),\n    new FileManagerPlugin({\n      events: {\n        onEnd: {\n          copy: [\n            {\n              source: "./dist/*.map",\n              destination: false,\n              // destination: "D:/aprepare/webpacksource/sourcemap",\n            },\n          ],\n          delete: ["./dist/*.map"],\n          archive: [\n            {\n              source: "./dist",\n              destination: "./dist/dist.zip",\n            },\n          ],\n        },\n      },\n    }),\n  ],\n}\n')),(0,r.kt)("p",null,"\u672c\u5730"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"http-server -c -1 -p 8081\n")),(0,r.kt)("h3",{id:"22-\u751f\u4ea7\u73af\u5883\u8c03\u8bd5"},"2.2 \u751f\u4ea7\u73af\u5883\u8c03\u8bd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6253\u5f00\u6df7\u6dc6\u4ee3\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u53f3\u952e -> \u9009\u62e9","[Add source map]"),(0,r.kt)("li",{parentName:"ul"},"\u8f93\u5165\u672c\u5730 ",(0,r.kt)("inlineCode",{parentName:"li"},"sourceMap")," \u7684\u5730\u5740\uff08\u6b64\u5904\u9700\u8981\u542f\u7528\u4e00\u4e2a\u9759\u6001\u8d44\u6e90\u670d\u52a1\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"http-server")," \u6216\u8005\u901a\u8fc7\u6d4f\u89c8\u5668\u6253\u5f00\u5bf9\u5e94\u6df7\u6dc6\u4ee3\u7801\u7684",(0,r.kt)("inlineCode",{parentName:"li"},".map"),"\u6587\u4ef6 \uff09\uff0c\u5b8c\u6210\u3002\u672c\u5730\u4ee3\u7801\u6267\u884c\u6784\u5efa\u547d\u4ee4\uff0c\u6ce8\u610f\u9700\u8981\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"li"},"sourceMap")," \u914d\u7f6e\uff0c\u7f16\u8bd1\u4ea7\u751f\u51fa\u6784\u5efa\u540e\u7684\u4ee3\u7801\uff0c\u6b64\u65f6\u6784\u5efa\u540e\u7684\u7ed3\u679c\u4f1a\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"li"},"sourceMap")," \u6587\u4ef6\u3002\u5173\u8054\u4e0a ",(0,r.kt)("inlineCode",{parentName:"li"},"sourceMap")," \u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"sources -> page")," \u9762\u677f\u4e0a\u7684\u53d8\u5316\u4e86")),(0,r.kt)("h2",{id:"\u8bf7\u8bf4\u8bf4-sourcemap-\u539f\u7406"},(0,r.kt)("strong",{parentName:"h2"},"\u8bf7\u8bf4\u8bf4 sourcemap \u539f\u7406")),(0,r.kt)("p",null,"\u5176\u5de5\u4f5c\u539f\u7406\u662f\u5728\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u4e2d\u5d4c\u5165\u4e00\u4e2a\u6620\u5c04\u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u6e90\u4ee3\u7801\u7684\u4f4d\u7f6e\u4fe1\u606f\u3002\u5f53\u5f00\u53d1\u8005\u5728\u6d4f\u89c8\u5668\u4e2d\u8fdb\u884c\u8c03\u8bd5\u65f6\uff0c\u8c03\u8bd5\u5de5\u5177\u53ef\u4ee5\u4f7f\u7528 SourceMap \u6587\u4ef6\u5c06\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u6620\u5c04\u56de\u539f\u59cb\u6e90\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0cSourceMap \u6587\u4ef6\u4e2d\u5305\u542b\u4e86\u4e00\u4e9b\u6620\u5c04\u6761\u76ee\uff0c\u6bcf\u4e2a\u6761\u76ee\u8868\u793a\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u7684\u4e00\u884c\u3001\u4e00\u5217\u548c\u4e00\u4e2a\u6e90\u6587\u4ef6\u7684\u4f4d\u7f6e\u4fe1\u606f\u3002\u8fd9\u4e2a\u6e90\u6587\u4ef6\u53ef\u4ee5\u662f\u539f\u59cb\u6e90\u4ee3\u7801\uff0c\u4e5f\u53ef\u4ee5\u662f\u53e6\u4e00\u4e2a\u7f16\u8bd1\u540e\u7684\u6587\u4ef6\uff0c\u5982\u679c\u662f\u540e\u8005\uff0cSourceMap \u6587\u4ef6\u5c06\u4f1a\u5d4c\u5957\u5f15\u7528\u5176\u4ed6 SourceMap \u6587\u4ef6\u4ee5\u5b8c\u6210\u6620\u5c04\u3002"),(0,r.kt)("p",null,"\u5f53\u5f00\u53d1\u8005\u5728\u6d4f\u89c8\u5668\u4e2d\u8c03\u8bd5\u4ee3\u7801\u65f6\uff0c\u8c03\u8bd5\u5de5\u5177\u53ef\u4ee5\u89e3\u6790\u8fd9\u4e9b\u6620\u5c04\u6761\u76ee\uff0c\u6839\u636e SourceMap \u6587\u4ef6\u5c06\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u6620\u5c04\u56de\u539f\u59cb\u6e90\u4ee3\u7801\u3002\u8fd9\u4f7f\u5f97\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u8fdb\u884c\u8c03\u8bd5\uff0c\u5e76\u53ef\u4ee5\u67e5\u770b\u539f\u59cb\u6e90\u4ee3\u7801\u7684\u4f4d\u7f6e\u3001\u65ad\u70b9\u548c\u8c03\u7528\u6808\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u603b\u4e4b\uff0cSourceMap \u6587\u4ef6\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u9760\u7684\u673a\u5236\uff0c\u4f7f\u5f97\u5f00\u53d1\u8005\u53ef\u4ee5\u66f4\u8f7b\u677e\u5730\u8fdb\u884c\u8c03\u8bd5\u548c\u9519\u8bef\u6392\u67e5\uff0c\u4ece\u800c\u63d0\u9ad8\u4e86\u5f00\u53d1\u6548\u7387\u548c\u4ee3\u7801\u8d28\u91cf\u3002"))}d.isMDXComponent=!0}}]);