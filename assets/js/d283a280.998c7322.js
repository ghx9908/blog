"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7025],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>N});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),d=o(a),N=l,f=d["".concat(p,".").concat(N)]||d[N]||m[N]||r;return a?n.createElement(f,i(i({ref:t},k),{},{components:a})):n.createElement(f,i({ref:t},k))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8667:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:5,title:"vue\u9762\u8bd5\u9898"},i=void 0,u={unversionedId:"05vue",id:"05vue",title:"vue\u9762\u8bd5\u9898",description:"\u8c08\u8c08\u4f60\u5bf9 vue \u7684\u7406\u89e3 \uff1f",source:"@site/interview/05vue.md",sourceDirName:".",slug:"/05vue",permalink:"/website/interview/05vue",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"vue\u9762\u8bd5\u9898"},sidebar:"tutorialSidebar",previous:{title:"1. react \u865a\u62df\u5217\u8868\u4e4b FixedSizeList \u5c01\u88c5",permalink:"/website/interview/react\u7ec4\u4ef6\u5c01\u88c5/FixedSizeList"},next:{title:"\u5de5\u7a0b\u5316",permalink:"/website/interview/category/\u5de5\u7a0b\u5316"}},p={},o=[{value:"\u8c08\u8c08\u4f60\u5bf9 vue \u7684\u7406\u89e3 \uff1f",id:"\u8c08\u8c08\u4f60\u5bf9-vue-\u7684\u7406\u89e3-",level:2},{value:"Vue \u4e3a\u4ec0\u4e48\u9700\u8981\u865a\u62df DOM?",id:"vue-\u4e3a\u4ec0\u4e48\u9700\u8981\u865a\u62df-dom",level:2},{value:"\u8c08\u4e00\u8c08\u5bf9 Vue \u7ec4\u4ef6\u5316\u7684\u7406\u89e3\uff1f",id:"\u8c08\u4e00\u8c08\u5bf9-vue-\u7ec4\u4ef6\u5316\u7684\u7406\u89e3",level:2},{value:"\u4f60\u77e5\u9053\u54ea\u4e9b Vue3 \u65b0\u7279\u6027?",id:"\u4f60\u77e5\u9053\u54ea\u4e9b-vue3-\u65b0\u7279\u6027",level:2},{value:"Vue3 \u5bf9\u2f50 Vue2 \u7684\u53d8\u5316",id:"vue3-\u5bf9-vue2-\u7684\u53d8\u5316",level:2},{value:"Composition API \u548c Options API",id:"composition-api-\u548c-options-api",level:2},{value:"\u8bf7\u8bf4\u4e00\u4e0b\u4f60\u5bf9\u54cd\u5e94\u5f0f\u6570\u636e\u7684\u7406\u89e3\uff1f",id:"\u8bf7\u8bf4\u4e00\u4e0b\u4f60\u5bf9\u54cd\u5e94\u5f0f\u6570\u636e\u7684\u7406\u89e3",level:2},{value:"\u53cc\u5411\u7ed1\u5b9a\u7684\u7406\u89e3\uff0c\u4ee5\u53ca\u5b83\u7684\u5b9e\u73b0\u539f\u7406\u5417\uff1f",id:"\u53cc\u5411\u7ed1\u5b9a\u7684\u7406\u89e3\u4ee5\u53ca\u5b83\u7684\u5b9e\u73b0\u539f\u7406\u5417",level:2},{value:"\u751f\u547d\u5468\u671f\u5bf9\u6bd4",id:"\u751f\u547d\u5468\u671f\u5bf9\u6bd4",level:2},{value:"\u5982\u4f55\u7406\u89e3 reactive\u3001ref \u3001toRef \u548c toRefs\uff1f",id:"\u5982\u4f55\u7406\u89e3-reactiveref-toref-\u548c-torefs",level:2},{value:"watch \u548c watchEffect \u7684\u533a\u522b\uff1f",id:"watch-\u548c-watcheffect-\u7684\u533a\u522b",level:2},{value:"computed \u548c watch \u533a\u522b?",id:"computed-\u548c-watch-\u533a\u522b",level:2},{value:"Vue \u4e2d\u5982\u4f55\u8fdb\u884c\u4f9d\u8d56\u6536\u96c6",id:"vue-\u4e2d\u5982\u4f55\u8fdb\u884c\u4f9d\u8d56\u6536\u96c6",level:2},{value:"Vue \u4e2d\u5982\u4f55\u68c0\u6d4b\u6570\u7ec4\u53d8\u5316?",id:"vue-\u4e2d\u5982\u4f55\u68c0\u6d4b\u6570\u7ec4\u53d8\u5316",level:2},{value:"Vue \u4e2d diff \u7b97\u6cd5\u539f\u7406",id:"vue-\u4e2d-diff-\u7b97\u6cd5\u539f\u7406",level:2},{value:"\u8c08\u8c08 Vue3 \u4e2d\u6a21\u677f\u7f16\u8bd1\u505a\u4e86\u54ea\u4e9b\u4f18\u5316\uff1f",id:"\u8c08\u8c08-vue3-\u4e2d\u6a21\u677f\u7f16\u8bd1\u505a\u4e86\u54ea\u4e9b\u4f18\u5316",level:2},{value:"\u5982\u4f55\u5c06 template \u8f6c\u6362\u6210 render \u51fd\u6570 ?",id:"\u5982\u4f55\u5c06-template-\u8f6c\u6362\u6210-render-\u51fd\u6570-",level:2},{value:"v-if &amp; v-show",id:"v-if--v-show",level:2},{value:"v-if &amp; v-for \u4f18\u5148\u7ea7",id:"v-if--v-for-\u4f18\u5148\u7ea7",level:2},{value:"Vue.use \u662f\u5e72\u4ec0\u4e48\u7684\uff1f",id:"vueuse-\u662f\u5e72\u4ec0\u4e48\u7684",level:2},{value:"\u8bf4\u8bf4\u4f60\u5bf9 nextTick \u7684\u7406\u89e3\uff1f",id:"\u8bf4\u8bf4\u4f60\u5bf9-nexttick-\u7684\u7406\u89e3",level:2},{value:"Vue \u4e2d\u5982\u4f55\u8fdb\u884c\u7ec4\u4ef6\u901a\u4fe1\uff1f",id:"vue-\u4e2d\u5982\u4f55\u8fdb\u884c\u7ec4\u4ef6\u901a\u4fe1",level:2},{value:"Vue-Router \u6709\u51e0\u79cd\u94a9\u5b50\u51fd\u6570\uff0c\u5177\u4f53\u662f\u4ec0\u4e48\u53ca\u6267\u884c\u6d41\u7a0b\u662f\u600e\u6837\u7684?",id:"vue-router-\u6709\u51e0\u79cd\u94a9\u5b50\u51fd\u6570\u5177\u4f53\u662f\u4ec0\u4e48\u53ca\u6267\u884c\u6d41\u7a0b\u662f\u600e\u6837\u7684",level:2}],k={toc:o};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8c08\u8c08\u4f60\u5bf9-vue-\u7684\u7406\u89e3-"},"\u8c08\u8c08\u4f60\u5bf9 vue \u7684\u7406\u89e3 \uff1f"),(0,l.kt)("p",null,"Vue \u662f\u4e00\u5957\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684\u6e10\u8fdb\u5f0f\u6846\u67b6\uff0cVue \u7684\u6838\u5fc3\u5e93\u53ea\u5173\u6ce8\u89c6\u56fe\u5c42"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u58f0\u660e\u5f0f\u6846\u67b6"),(0,l.kt)("li",{parentName:"ul"},"MVVM \u6a21\u5f0f\u54cd\u5e94\u5f0f\u6570\u636e\u7ed1\u5b9a"),(0,l.kt)("li",{parentName:"ul"},"\u865a\u62df DOM\uff08\u5b83\u80fd\u591f\u5728\u5185\u5b58\u4e2d\u6784\u5efa\u865a\u62df DOM \u6811\uff0c\u901a\u8fc7\u6bd4\u8f83\u865a\u62df DOM \u7684\u5dee\u5f02\u6765\u6700\u5c0f\u5316\u5b9e\u9645 DOM \u7684\u64cd\u4f5c\uff0c\u63d0\u5347\u6027\u80fd\u3002\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u6307\u4ee4\u548c\u63d2\u4ef6\u7cfb\u7edf")),(0,l.kt)("h2",{id:"vue-\u4e3a\u4ec0\u4e48\u9700\u8981\u865a\u62df-dom"},"Vue \u4e3a\u4ec0\u4e48\u9700\u8981\u865a\u62df DOM?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u771f\u5b9e DOM \u7684\u62bd\u8c61 \uff0c \u51cf\u5c11\u4e86\u5bf9\u771f\u5b9e DOM \u7684\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u8de8\u5e73\u53f0"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4f55\u751f\u6210\u7684 template-\u300b render-\u300b \u8fd4\u56de\u865a\u62df dom | h-\u300b createVNode")),(0,l.kt)("h2",{id:"\u8c08\u4e00\u8c08\u5bf9-vue-\u7ec4\u4ef6\u5316\u7684\u7406\u89e3"},"\u8c08\u4e00\u8c08\u5bf9 Vue \u7ec4\u4ef6\u5316\u7684\u7406\u89e3\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u5185\u805a\u3001\u53ef\u91cd\u7528\u3001\u53ef\u7ec4\u5408"),(0,l.kt)("li",{parentName:"ul"},"\u964d\u4f4e\u66f4\u65b0\u8303\u56f4\uff0c\u53ea\u91cd\u65b0\u6e32\u67d3\u53d8\u5316\u7684\u7ec4\u4ef6\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u6709\u4e00\u4e2a\u6e32\u67d3\u51fd\u6570 effect \u6570\u636e\u53d8\u5316\u5c31\u5c31\u4f1a\u6267\u884c \u5408\u7406\u62c6\u5206")),(0,l.kt)("h2",{id:"\u4f60\u77e5\u9053\u54ea\u4e9b-vue3-\u65b0\u7279\u6027"},"\u4f60\u77e5\u9053\u54ea\u4e9b Vue3 \u65b0\u7279\u6027?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Composition API"),(0,l.kt)("li",{parentName:"ul"},"setup \u8bed\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"Teleport \u4f20\u9001\u95e8"),(0,l.kt)("li",{parentName:"ul"},"Fragments"),(0,l.kt)("li",{parentName:"ul"},"Emits Component Option \uff08vue2 \u9700\u8981\u7528.native\uff0c vue3 \u76f4\u63a5\u7ed1\u5b9a\u5230\u4e86\u6839\u5143\u7d20\u4e0a\uff09"),(0,l.kt)("li",{parentName:"ul"},"createRenderer \u63d0\u4f9b\u81ea\u5b9a\u4e49\u6e32\u67d3\u5668"),(0,l.kt)("li",{parentName:"ul"},"v-bind in ",(0,l.kt)("inlineCode",{parentName:"li"},"<style>")),(0,l.kt)("li",{parentName:"ul"},"\u5728\u4f5c\u7528\u57df\u6837\u5f0f\u4e2d\u53ef\u4ee5\u5305\u542b\u5168\u5c40\u89c4\u5219\u6216\u53ea\u9488\u5bf9\u63d2\u69fd\u5185\u5bb9\u7684\u89c4\u5219 ",(0,l.kt)("inlineCode",{parentName:"li"},":deep(h1)")," ",(0,l.kt)("inlineCode",{parentName:"li"},":global(.root)")," ",(0,l.kt)("inlineCode",{parentName:"li"},":slotted(.child)")),(0,l.kt)("li",{parentName:"ul"},"Suspense")),(0,l.kt)("h2",{id:"vue3-\u5bf9-vue2-\u7684\u53d8\u5316"},"Vue3 \u5bf9\u2f50 Vue2 \u7684\u53d8\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6027\u80fd\u4f18\u5316\uff08\u66f4\u5feb\uff09"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Proxy defineProperty \u9012\u5f52 $set $delets"),(0,l.kt)("li",{parentName:"ul"},"\u6a21\u677f\u7f16\u8bd1\u4f18\u5316"),(0,l.kt)("li",{parentName:"ul"},"diff PatchFlag"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f53\u79ef\u4f18\u5316\uff08\u66f4\u5c0f\uff09"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Vue3 \u79fb\u9664\u4e86\u4e0d\u5e38\u7528\u7684 API"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"$on $once .sync \u8fc7\u6ee4\u5668 \u5168\u5c40 API"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Tree-shaking \u673a\u5236\u5b9e\u73b0\u6309\u9700\u5f15\u5165")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u652f\u6301\u81ea\u5b9a\u4e49\u6e32\u67d3\u5668 \u8de8\u5e73\u53f0 \u4ee5\u524d\u9700\u8981\u6539\u6e90\u7801")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"TypeScript \u652f\u6301")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"monorepo"))),(0,l.kt)("h2",{id:"composition-api-\u548c-options-api"},"Composition API \u548c Options API"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53cd\u590d\u6a2a\u8df3"),(0,l.kt)("li",{parentName:"ul"},"\u65e0 this \u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"Tree-shaking \u652f\u6301\u53cb\u597d"),(0,l.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u590d\u7528 Vue2 \u91c7\u7528 mixins")),(0,l.kt)("h2",{id:"\u8bf7\u8bf4\u4e00\u4e0b\u4f60\u5bf9\u54cd\u5e94\u5f0f\u6570\u636e\u7684\u7406\u89e3"},"\u8bf7\u8bf4\u4e00\u4e0b\u4f60\u5bf9\u54cd\u5e94\u5f0f\u6570\u636e\u7684\u7406\u89e3\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Vue2 defineProperty \u6570\u636e\u52ab\u6301 \u91cd\u5199 getter \u548c setter \u5f97\u9012\u5f52 \u5220\u9664\u65b0\u589e\u9700\u8981\u901a\u8fc7$set\u548c$delete \u4e0d\u652f\u6301 Map \u548c Set"),(0,l.kt)("li",{parentName:"ul"},"Vue3 \u91c7\u7528 Proxy")),(0,l.kt)("h2",{id:"\u53cc\u5411\u7ed1\u5b9a\u7684\u7406\u89e3\u4ee5\u53ca\u5b83\u7684\u5b9e\u73b0\u539f\u7406\u5417"},"\u53cc\u5411\u7ed1\u5b9a\u7684\u7406\u89e3\uff0c\u4ee5\u53ca\u5b83\u7684\u5b9e\u73b0\u539f\u7406\u5417\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b83\u7528\u4e8e\u5c06\u6a21\u578b\u6570\u636e\u548c\u89c6\u56fe\u6570\u636e\u8fdb\u884c\u540c\u6b65\uff0c\u4f7f\u5f97\u5f53\u6a21\u578b\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u89c6\u56fe\u4f1a\u81ea\u52a8\u66f4\u65b0\uff1b\u5f53\u89c6\u56fe\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u6a21\u578b\u6570\u636e\u4e5f\u4f1a\u81ea\u52a8\u66f4\u65b0\u3002\u53cc\u5411\u7ed1\u5b9a\u5728\u8868\u5355\u5904\u7406\u3001\u5b9e\u65f6\u6570\u636e\u663e\u793a\u7b49\u65b9\u9762\u63d0\u4f9b\u4e86\u6781\u5927\u7684\u4fbf\u5229\u6027\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u54cd\u5e94\u5f0f\u7cfb\u7edf\uff08Reactivity System\uff09\uff1a\nVue 3 \u4f7f\u7528 Proxy \u4ee3\u66ff\u4e86 Vue 2 \u4e2d\u7684 Object.defineProperty\uff0c\u4ece\u800c\u52ab\u6301\u5bf9\u8c61\u7684\u8bfb\u5199\u64cd\u4f5c\u3002Proxy \u66f4\u5f3a\u5927\uff0c\u53ef\u4ee5\u52ab\u6301\u5bf9\u5bf9\u8c61\u7684\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664\u5c5e\u6027\u7684\u64cd\u4f5c\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f9d\u8d56\u6536\u96c6\uff08Dependency Tracking\uff09\uff1a\nVue 3 \u4f7f\u7528 effect \u51fd\u6570\u6765\u6536\u96c6\u4f9d\u8d56\u3002\u5f53\u4e00\u4e2a\u54cd\u5e94\u5f0f\u5bf9\u8c61\u7684\u5c5e\u6027\u88ab\u8bbf\u95ee\u65f6\uff0c\u5f53\u524d\u6d3b\u8dc3\u7684 effect \u51fd\u6570\u4f1a\u88ab\u8bb0\u5f55\u4e3a\u8be5\u5c5e\u6027\u7684\u4f9d\u8d56\u8005\u3002\u5f53\u8be5\u5c5e\u6027\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u8fd9\u4e9b\u4f9d\u8d56\u8005\u4f1a\u88ab\u91cd\u65b0\u6267\u884c\uff0c\u4ece\u800c\u66f4\u65b0\u89c6\u56fe\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6a21\u677f\u7f16\u8bd1\uff08Template Compilation\uff09\uff1a\nVue 3 \u4e2d\uff0c\u6a21\u677f\u88ab\u7f16\u8bd1\u6210\u6e32\u67d3\u51fd\u6570\u3002\u6e32\u67d3\u51fd\u6570\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u4f1a\u89e6\u53d1\u54cd\u5e94\u5f0f\u6570\u636e\u7684\u8bfb\u53d6\u64cd\u4f5c\uff0c\u4ece\u800c\u5b8c\u6210\u4f9d\u8d56\u6536\u96c6\u3002\u5f53\u54cd\u5e94\u5f0f\u6570\u636e\u53d8\u5316\u65f6\uff0c\u6e32\u67d3\u51fd\u6570\u4f1a\u91cd\u65b0\u6267\u884c\uff0c\u66f4\u65b0\u89c6\u56fe\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6307\u4ee4\uff08Directives\uff09\uff1a\nVue 3 \u4e2d\u4f7f\u7528 v-model \u6307\u4ee4\u5b9e\u73b0\u53cc\u5411\u7ed1\u5b9a\u3002v-model \u672c\u8d28\u4e0a\u662f\u5bf9 input \u548c change \u4e8b\u4ef6\u548c\u7ed1\u5b9a\u5c5e\u6027\uff08\u5982 value\uff09\u7684\u5c01\u88c5\uff0c\u7528\u6765\u5b9e\u73b0\u6570\u636e\u548c\u89c6\u56fe\u7684\u53cc\u5411\u540c\u6b65\u3002"))),(0,l.kt)("h2",{id:"\u751f\u547d\u5468\u671f\u5bf9\u6bd4"},"\u751f\u547d\u5468\u671f\u5bf9\u6bd4"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u751f\u547d\u5468\u671f v2"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u751f\u547d\u5468\u671f v3"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"beforeCreate"),(0,l.kt)("td",{parentName:"tr",align:"left"},"beforeCreate"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u4ef6\u5b9e\u4f8b\u88ab\u521b\u5efa\u4e4b\u521d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"created"),(0,l.kt)("td",{parentName:"tr",align:"left"},"created"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u4ef6\u5b9e\u4f8b\u5df2\u7ecf\u5b8c\u5168\u521b\u5efa")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"beforeMount"),(0,l.kt)("td",{parentName:"tr",align:"left"},"beforeMount"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u4ef6\u6302\u8f7d\u4e4b\u524d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"mounted"),(0,l.kt)("td",{parentName:"tr",align:"left"},"mounted"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u4ef6\u6302\u8f7d\u5230\u5b9e\u4f8b\u4e0a\u53bb\u4e4b\u540e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"beforeUpdate"),(0,l.kt)("td",{parentName:"tr",align:"left"},"beforeUpdate"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u4ef6\u6570\u636e\u53d1\u751f\u53d8\u5316\uff0c\u66f4\u65b0\u4e4b\u524d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"updated"),(0,l.kt)("td",{parentName:"tr",align:"left"},"updated"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u6570\u636e\u66f4\u65b0\u4e4b\u540e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"beforeDestroy"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"beforeUnmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u4ef6\u5b9e\u4f8b\u9500\u6bc1\u4e4b\u524d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"destroyed"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"unmounted")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u4ef6\u5b9e\u4f8b\u9500\u6bc1\u4e4b\u540e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"activated"),(0,l.kt)("td",{parentName:"tr",align:"left"},"activated"),(0,l.kt)("td",{parentName:"tr",align:"left"},"keep-alive \u7f13\u5b58\u7684\u7ec4\u4ef6\u6fc0\u6d3b\u65f6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"deactivated"),(0,l.kt)("td",{parentName:"tr",align:"left"},"deactivated"),(0,l.kt)("td",{parentName:"tr",align:"left"},"keep-alive \u7f13\u5b58\u7684\u7ec4\u4ef6\u505c\u7528\u65f6\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"errorCaptured"),(0,l.kt)("td",{parentName:"tr",align:"left"},"errorCaptured"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6355\u83b7\u4e00\u4e2a\u6765\u81ea\u5b50\u5b59\u7ec4\u4ef6\u7684\u9519\u8bef\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"renderTracked Dev")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8c03\u8bd5\u94a9\u5b50\uff0c\u54cd\u5e94\u5f0f\u4f9d\u8d56\u88ab\u6536\u96c6\u65f6\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"renderTriggered Dev")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8c03\u8bd5\u94a9\u5b50\uff0c\u54cd\u5e94\u5f0f\u4f9d\u8d56\u88ab\u89e6\u53d1\u65f6\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"serverPrefetch")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ssr only\uff0c\u7ec4\u4ef6\u5b9e\u4f8b\u5728\u670d\u52a1\u5668\u4e0a\u88ab\u6e32\u67d3\u524d\u8c03\u7528")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Vue3 \u4e2d\u65b0\u589e\u4e86\uff0c\u7ec4\u5408\u5f0f API\uff1a\u751f\u547d\u5468\u671f\u94a9\u5b50\uff0c\u4f46\u662f\u4e0d\u5b58\u5728 onBeforeCreate \u548c onCreated \u94a9\u5b50")),(0,l.kt)("h2",{id:"\u5982\u4f55\u7406\u89e3-reactiveref-toref-\u548c-torefs"},"\u5982\u4f55\u7406\u89e3 reactive\u3001ref \u3001toRef \u548c toRefs\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"reactive:"),"\uff1a\u5c06\u4e00\u4e2a\u666e\u901a\u5bf9\u8c61\u8f6c\u6362\u4e3a\u54cd\u5e94\u5f0f\u5bf9\u8c61\u3002(\u91c7\u7528 new Proxy \u8fdb\u884c\u5b9e\u73b0) \u901a\u8fc7\u4ee3\u7406\u5bf9\u8c61\u8bbf\u95ee\u5c5e\u6027\u65f6\u4f1a\u8fdb\u884c\u4f9d\u8d56\u6536\u96c6\uff0c\u5c5e\u6027\u66f4\u65b0\u65f6\u4f1a\u89e6\u53d1\u4f9d\u8d56\u66f4\u65b0\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ref:")," \u521b\u5efa\u4e00\u4e2a\u5305\u88c5\u5bf9\u8c61\uff08Wrapper Object\uff09\u5c06\u4e00\u4e2a\u7b80\u5355\u7684\u503c\u5305\u88c5\u6210\u4e00\u4e2a\u54cd\u5e94\u5f0f\u5bf9\u8c61\uff0c\u5f53\u8bbf\u95ee",(0,l.kt)("inlineCode",{parentName:"li"},"value"),"\u5c5e\u6027\u65f6\u4f1a\u8fdb\u884c\u4f9d\u8d56\u6536\u96c6\uff0c\u66f4\u65b0",(0,l.kt)("inlineCode",{parentName:"li"},"value"),"\u5c5e\u6027\u65f6\u4f1a\u89e6\u53d1\u4f9d\u8d56\u66f4\u65b0\u3002(\u91c7\u7528\u7c7b\u8bbf\u95ee\u5668\u5b9e\u73b0) ",(0,l.kt)("em",{parentName:"li"},"\u5185\u90e8\u662f\u5bf9\u8c61\u7684\u60c5\u51b5\u4f1a\u91c7\u7528 reactive \u6765\u8fdb\u884c\u5904\u7406")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"toRef:"),"\uff1a\u521b\u5efa",(0,l.kt)("inlineCode",{parentName:"li"},"ref"),"\u5bf9\u8c61\uff0c\u5f15\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"reactive"),"\u4e2d\u7684\u5c5e\u6027\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"toRefs:"),"\uff1a\u6279\u91cf\u521b\u5efa",(0,l.kt)("inlineCode",{parentName:"li"},"ref"),"\u5bf9\u8c61\uff0c\u5f15\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"reactive"),"\u4e2d\u7684\u5c5e\u6027\u3002")),(0,l.kt)("h2",{id:"watch-\u548c-watcheffect-\u7684\u533a\u522b"},"watch \u548c watchEffect \u7684\u533a\u522b\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"watchEffect \u7acb\u5373\u8fd0\u884c\u4e00\u4e2a\u51fd\u6570\uff0c\u7136\u540e\u88ab\u52a8\u5730\u8ffd\u8e2a\u5b83\u7684\u4f9d\u8d56\uff0c\u5f53\u8fd9\u4e9b\u4f9d\u8d56\u6539\u53d8\u65f6\u91cd\u65b0\u6267\u884c\u8be5\u51fd\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"watch \u4fa6\u6d4b\u4e00\u4e2a\u6216\u591a\u4e2a\u54cd\u5e94\u5f0f\u6570\u636e\u6e90\u5e76\u5728\u6570\u636e\u6e90\u53d8\u5316\u65f6\u8c03\u7528\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5e95\u5c42\u90fd\u662f\u57fa\u4e8e effect \u51fd\u6570\u5b9e\u73b0 \u63a5\u53d7\u4e00\u4e2a getter \u51fd\u6570\u548c scheduler \u4f9d\u8d56\u6536\u96c6\u548c\u89e6\u53d1\u66f4\u65b0")),(0,l.kt)("h2",{id:"computed-\u548c-watch-\u533a\u522b"},"computed \u548c watch \u533a\u522b?"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5e95\u5c42\u90fd\u662f\u57fa\u4e8e effect \u5b9e\u73b0")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7528\u9014"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"computed")," \u7528\u4e8e\u58f0\u660e\u8ba1\u7b97\u5c5e\u6027\uff0c\u4e3b\u8981\u7528\u4e8e\u57fa\u4e8e\u6570\u636e\u8ba1\u7b97\u51fa\u65b0\u7684\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"watch")," \u7528\u4e8e\u76d1\u542c\u6570\u636e\u53d8\u5316\uff0c\u9002\u5408\u6267\u884c\u526f\u4f5c\u7528\u64cd\u4f5c\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6027\u80fd"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"computed")," \u4f1a\u7f13\u5b58\u8ba1\u7b97\u7ed3\u679c\uff0c\u53ea\u6709\u5728\u4f9d\u8d56\u7684\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6\u624d\u4f1a\u91cd\u65b0\u8ba1\u7b97\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"watch")," \u6bcf\u6b21\u6570\u636e\u53d8\u5316\u90fd\u4f1a\u89e6\u53d1\u56de\u8c03\u51fd\u6570\uff0c\u6267\u884c\u903b\u8f91\u53ef\u80fd\u8f83\u4e3a\u6602\u8d35\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u573a\u666f"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"computed")," \u5f53\u4f60\u9700\u8981\u57fa\u4e8e\u54cd\u5e94\u5f0f\u6570\u636e\u8ba1\u7b97\u67d0\u4e2a\u503c\u65f6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"watch")," \u5f53\u4f60\u9700\u8981\u5728\u6570\u636e\u53d8\u5316\u65f6\u6267\u884c\u5f02\u6b65\u64cd\u4f5c\u6216\u526f\u4f5c\u7528\u65f6\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u5f0f\u4f9d\u8d56"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"computed")," \u81ea\u52a8\u8ffd\u8e2a\u4f9d\u8d56\uff0c\u53ea\u6709\u5728\u4f9d\u8d56\u53d8\u5316\u65f6\u91cd\u65b0\u8ba1\u7b97\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"watch")," \u624b\u52a8\u6307\u5b9a\u8981\u76d1\u542c\u7684\u54cd\u5e94\u5f0f\u6570\u636e\u3002")),(0,l.kt)("h2",{id:"vue-\u4e2d\u5982\u4f55\u8fdb\u884c\u4f9d\u8d56\u6536\u96c6"},"Vue \u4e2d\u5982\u4f55\u8fdb\u884c\u4f9d\u8d56\u6536\u96c6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Vue3 \u4e2d\u4f1a\u901a\u8fc7 Map \u7ed3\u6784\u5c06\u5c5e\u6027\u548c effect \u6620\u5c04\u8d77\u6765\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5728\u521d\u59cb\u5316\u65f6\u4f1a\u8c03\u7528 render \u51fd\u6570\uff0c\u6b64\u65f6\u4f1a\u89e6\u53d1\u5c5e\u6027\u4f9d\u8d56\u6536\u96c6 track\uff0c"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u5c5e\u6027\u53d1\u751f\u4fee\u6539\u65f6\u4f1a\u627e\u5230\u5bf9\u5e94\u7684 effect \u5217\u8868\u4f9d\u6b21\u6267\u884c trigger")),(0,l.kt)("h2",{id:"vue-\u4e2d\u5982\u4f55\u68c0\u6d4b\u6570\u7ec4\u53d8\u5316"},"Vue \u4e2d\u5982\u4f55\u68c0\u6d4b\u6570\u7ec4\u53d8\u5316?"),(0,l.kt)("p",null,"Vue2 \u4e2d\u91cd\u5199\u6570\u7ec4\u65b9\u6cd5\nVue3 Proxy \u5b9e\u73b0\u4e86\u66f4\u9ad8\u6548\u548c\u7cbe\u786e\u7684\u6570\u7ec4\u53d8\u5316\u68c0\u6d4b \u4f46\u662f\u7531\u4e8e\u4ee3\u7406\u95ee\u9898 \u4e5f\u5bf9\u90e8\u5206\u6570\u7ec4\u8fdb\u884c\u91cd\u5199"),(0,l.kt)("h2",{id:"vue-\u4e2d-diff-\u7b97\u6cd5\u539f\u7406"},"Vue \u4e2d diff \u7b97\u6cd5\u539f\u7406"),(0,l.kt)("p",null,"vue \u57fa\u4e8e\u865a\u62df DOM \u505a\u66f4\u65b0 \u3002diff \u7684\u6838\u5fc3\u5c31\u662f\u6bd4\u8f83\u4e24\u4e2a\u865a\u62df\u8282\u70b9\u7684\u5dee\u5f02 \u3002Vue \u7684 diff \u7b97\u6cd5\u662f\u5e73\u7ea7\u6bd4\u8f83\uff0c\u4e0d\u8003\u8651\u8de8\u7ea7\u6bd4\u8f83\u7684\u60c5\u51b5\u3002\u5185\u90e8\u91c7\u7528\u6df1\u5ea6\u9012\u5f52\u7684\u65b9\u5f0f + \u53cc\u6307\u9488\u7684\u65b9\u5f0f\u8fdb\u884c\u6bd4\u8f83\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6bd4\u8f83 key \u548c type \u662f\u5426\u80fd\u590d\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u770b\u65b0\u8001\u8282\u70b9\u7684\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"\u90fd\u662f\u6570\u7ec4 \u7136\u540e\u6838\u5fc3\u6bd4\u8f83"),(0,l.kt)("li",{parentName:"ul"},"\u5934\u5934"),(0,l.kt)("li",{parentName:"ul"},"\u5c3e\u5c3e"),(0,l.kt)("li",{parentName:"ul"},"\u7279\u6b8a\u60c5\u51b5\u7684\u6302\u8f7d"),(0,l.kt)("li",{parentName:"ul"},"\u7279\u6b8a\u60c5\u51b5\u7684\u5378\u8f7d"),(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6bd4\u8f83\u5b8c \u6700\u957f\u9012\u5f52\u5b50\u5e8f\u5217 \u79fb\u52a8\u8001\u8282\u70b9\u6700\u5c11\u60c5\u51b5")),(0,l.kt)("h2",{id:"\u8c08\u8c08-vue3-\u4e2d\u6a21\u677f\u7f16\u8bd1\u505a\u4e86\u54ea\u4e9b\u4f18\u5316"},"\u8c08\u8c08 Vue3 \u4e2d\u6a21\u677f\u7f16\u8bd1\u505a\u4e86\u54ea\u4e9b\u4f18\u5316\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PatchFlags \u4f18\u5316 \u9776\u5411\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ul"},"BlockTree"),(0,l.kt)("li",{parentName:"ul"},"\u9759\u6001\u63d0\u5347\n\u6bcf\u6b21\u8c03\u7528 render \u51fd\u6570\u90fd\u8981\u91cd\u65b0\u521b\u5efa\u865a\u62df\u8282\u70b9\u3002\n\u9759\u6001\u63d0\u5347\u5219\u662f\u5c06\u9759\u6001\u7684\u8282\u70b9\u6216\u8005\u5c5e\u6027\u63d0\u5347\u51fa\u53bb\u3002\u9759\u6001\u63d0\u5347\u662f\u4ee5\u6811\u4e3a\u5355\u4f4d\u3002\u4e5f\u5c31\u662f\u8bf4\u6811\u4e2d\u8282\u70b9\u6709\u52a8\u6001\u7684\u4e0d\u4f1a\u8fdb\u884c\u63d0\u5347\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9884\u5b57\u7b26\u4e32\u5316\n\u9759\u6001\u63d0\u5347\u7684\u8282\u70b9\u90fd\u662f\u9759\u6001\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u63d0\u5347\u51fa\u6765\u7684\u8282\u70b9\u5b57\u7b26\u4e32\u5316\u3002 \u5f53\u8fde\u7eed\u9759\u6001\u8282\u70b9\u8d85\u8fc7 20 \u4e2a\u65f6\uff0c\u4f1a\u5c06\u9759\u6001\u8282\u70b9\u5e8f\u5217\u5316\u4e3a\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u51fd\u6570\n\u6bcf\u6b21\u8c03\u7528 render \u7684\u65f6\u90fd\u8981\u521b\u5efa\u65b0\u51fd\u6570 \u5f00\u542f\u51fd\u6570\u7f13\u5b58\u540e,\u51fd\u6570\u4f1a\u88ab\u7f13\u5b58\u8d77\u6765\uff0c\u540e\u7eed\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528")),(0,l.kt)("h2",{id:"\u5982\u4f55\u5c06-template-\u8f6c\u6362\u6210-render-\u51fd\u6570-"},"\u5982\u4f55\u5c06 template \u8f6c\u6362\u6210 render \u51fd\u6570 ?"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06 template \u6a21\u677f\u8f6c\u6362\u6210 ast \u8bed\u6cd5\u6811 - parserHTML"),(0,l.kt)("li",{parentName:"ol"},"Vue2 \u5bf9\u9759\u6001\u8bed\u6cd5\u505a\u9759\u6001\u6807\u8bb0 - optimize / Vue3 \u5bf9 ast \u8bed\u6cd5\u8fdb\u884c\u8f6c\u5316 - transform"),(0,l.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u751f\u6210\u4ee3\u7801 - codeGen")),(0,l.kt)("h2",{id:"v-if--v-show"},"v-if & v-show"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"v-if \u53ef\u4ee5\u963b\u65ad\u5185\u90e8\u4ee3\u7801\u662f\u5426\u6267\u884c")),(0,l.kt)("h2",{id:"v-if--v-for-\u4f18\u5148\u7ea7"},"v-if & v-for \u4f18\u5148\u7ea7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 Vue2 \u4e2d\u89e3\u6790\u65f6\uff0c\u5148\u89e3\u6790 v-for \u5728\u89e3\u6790 v-if\u3002\u4f1a\u5bfc\u81f4\u5148\u5faa\u73af\u540e\u5728\u5bf9\u6bcf\u4e00\u9879\u8fdb\u884c\u5224\u65ad\uff0c\u6d6a\u8d39\u6027\u80fd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 Vue3 \u4e2d v-if \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e v-for\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u5c5e\u6027\u5728 v-for \u5faa\u73af\u5916\u90e8\u8fc7\u6ee4\u6570\u7ec4")),(0,l.kt)("h2",{id:"vueuse-\u662f\u5e72\u4ec0\u4e48\u7684"},"Vue.use \u662f\u5e72\u4ec0\u4e48\u7684\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5 Vue.js \u63d2\u4ef6\u3002\u5982\u679c\u63d2\u4ef6\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5fc5\u987b\u63d0\u4f9b install \u65b9\u6cd5\u3002\u5982\u679c\u63d2\u4ef6\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u4f1a\u88ab\u4f5c\u4e3a install \u65b9\u6cd5\u3002install \u65b9\u6cd5\u8c03\u7528\u65f6\uff0c\u4f1a\u5c06 Vue \u4f5c\u4e3a\u53c2\u6570\u4f20\u5165,\u8fd9\u6837\u63d2\u4ef6\u4e2d\u5c31\u4e0d\u5728\u9700\u8981\u4f9d\u8d56 Vue \u4e86\u3002(\u6269\u5c55\u5e94\u7528\u7684\u529f\u80fd)"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5168\u5c40\u6307\u4ee4\u3001\u5168\u5c40\u8fc7\u6ee4\u5668(Vue3 \u4e0d\u518d\u652f\u6301\u8fc7\u6ee4\u5668)\u3001\u5168\u5c40\u7ec4\u4ef6\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'Vue.use = function (plugin: Function | Object) {\n  // \u63d2\u4ef6\u7f13\u5b58\n  const installedPlugins = this._installedPlugins || (this._installedPlugins = [])\n  if (installedPlugins.indexOf(plugin) > -1) {\n    // \u5982\u679c\u5df2\u7ecf\u6709\u63d2\u4ef6 \u76f4\u63a5\u8fd4\u56de\n    return this\n  }\n  // additional parameters\n  const args = toArray(arguments, 1) // \u9664\u4e86\u7b2c\u4e00\u9879\u5176\u4ed6\u7684\u53c2\u6570\u6574\u5408\u6210\u6570\u7ec4\n  args.unshift(this) // \u5c06Vue \u653e\u5165\u5230\u6570\u7ec4\u4e2d\n  if (typeof plugin.install === "function") {\n    // \u8c03\u7528install\u65b9\u6cd5\n    plugin.install.apply(plugin, args)\n  } else if (typeof plugin === "function") {\n    // \u76f4\u63a5\u8c03\u7528\u65b9\u6cd5\n    plugin.apply(null, args)\n  }\n  installedPlugins.push(plugin) // \u7f13\u5b58\u63d2\u4ef6\n  return this\n}\n')),(0,l.kt)("h2",{id:"\u8bf4\u8bf4\u4f60\u5bf9-nexttick-\u7684\u7406\u89e3"},"\u8bf4\u8bf4\u4f60\u5bf9 nextTick \u7684\u7406\u89e3\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53\u4f60\u5728 Vue \u4e2d\u66f4\u6539\u54cd\u5e94\u5f0f\u72b6\u6001\u65f6\uff0c\u6700\u7ec8\u7684 DOM \u66f4\u65b0\u5e76\u4e0d\u662f\u540c\u6b65\u751f\u6548\u7684\uff0c\u800c\u662f\u7531 Vue \u5c06\u5b83\u4eec\u7f13\u5b58\u5728\u4e00\u4e2a\u961f\u5217\u4e2d\uff0c\u76f4\u5230\u4e0b\u4e00\u4e2a\u201ctick\u201d\u624d\u4e00\u8d77\u6267\u884c\u3002\u8fd9\u6837\u662f\u4e3a\u4e86\u786e\u4fdd\u6bcf\u4e2a\u7ec4\u4ef6\u65e0\u8bba\u53d1\u751f\u591a\u5c11\u72b6\u6001\u6539\u53d8\uff0c\u90fd\u4ec5\u6267\u884c\u4e00\u6b21\u66f4\u65b0\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const resolvedPromise = Promise.resolve()\nlet currentFlushPromise\nexport function nextTick(fn) {\n  const p = currentFlushPromise || resolvedPromise\n  return fn ? p.then(this ? fn.bind(this) : fn) : p\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"vue2")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[\u6e32\u67d3 watcher\uff0c nextTick \u903b\u8f91\uff0c\u6570\u636e\u66f4\u65b0]"," \u9875\u9762\u8981\u7b49\u540c\u6b65\u4ee3\u7801\u6267\u884c\u5b8c\u624d\u6267\u884c\u4e0b\u4e00\u4e2a tick"),(0,l.kt)("li",{parentName:"ul"},"\u6bd4\u5982\u8bf4\u6211\u5148\u5199 nextTick \u7136\u540e\u4fee\u6539\u6570\u636e\u66f4\u65b0\u9875\u9762 \u6211\u5728\u4e4b\u524d\u7684 nextTick \u4e2d\u662f\u4f1a\u83b7\u53d6\u4e0d\u5230\u6700\u65b0\u7684\u6570\u636e\u7684 \u56e0\u4e3a\u5148\u6267\u884c\u7684 nextTick \u7136\u540e\u4fee\u6539\u7684\u9875\u9762\n\u4f18\u96c5\u964d\u7ea7\uff08Promise\u3001MutationObserver\u3001setImmediate\u3001setTimeout\uff09 \u8fd9\u91cc\u4e00\u822c\u4f1a\u914d\u5408\u6d4f\u89c8\u5668\u4e8b\u4ef6\u73af\u4f5c\u4e3a\u9762\u8bd5\u9898\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"vue3")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53\u6267\u884c mounted \u4e4b\u524d\u4f1a\u521b\u5efa\u4e00\u4e2a promise,nextTick \u4f1a\u88ab\u5ef6\u8fdf\u5230\u8fd9\u4e2a promise \u4e4b\u540e\u6267\u884c (\u503c\u88ab\u6539\u4e3a 100 \u540e\u518d\u8fdb\u884c\u6e32\u67d3)"),(0,l.kt)("li",{parentName:"ul"},"\u6bd4\u5982\u8bf4\u6211\u5148\u5199 nextTick \u7136\u540e\u4fee\u6539\u6570\u636e\u66f4\u65b0\u9875\u9762 \u6211\u5728\u4e4b\u524d\u7684 nextTick \u6b64\u65f6 DOM \u5df2\u7ecf\u66f4\u65b0 \u662f\u53ef\u4ee5\u83b7\u53d6\u5230\u6570\u636e\u7684")),(0,l.kt)("h2",{id:"vue-\u4e2d\u5982\u4f55\u8fdb\u884c\u7ec4\u4ef6\u901a\u4fe1"},"Vue \u4e2d\u5982\u4f55\u8fdb\u884c\u7ec4\u4ef6\u901a\u4fe1\uff1f"),(0,l.kt)("p",null,"props \u7236\u5b50\u95f4\u901a\u4fe1\n$attrs \u7236\u5b50\u95f4\u901a\u4fe1\n$emit \u5b50\u7236\u901a\u4fe1\nexpose / ref / $parent \u5b9e\u4f8b\u901a\u4fe1\nv-model \u6570\u636e\u540c\u6b65\nprovide / inject \u8de8\u7ea7\u901a\u4fe1\nslot ui \u901a\u4fe1\nVuex/pinia \u72b6\u6001\u7ba1\u7406\nmitt \u53d1\u5e03\u8ba2\u9605\u901a\u4fe1\uff08\u4e8b\u4ef6\u603b\u7ebf\uff09"),(0,l.kt)("h2",{id:"vue-router-\u6709\u51e0\u79cd\u94a9\u5b50\u51fd\u6570\u5177\u4f53\u662f\u4ec0\u4e48\u53ca\u6267\u884c\u6d41\u7a0b\u662f\u600e\u6837\u7684"},"Vue-Router \u6709\u51e0\u79cd\u94a9\u5b50\u51fd\u6570\uff0c\u5177\u4f53\u662f\u4ec0\u4e48\u53ca\u6267\u884c\u6d41\u7a0b\u662f\u600e\u6837\u7684?"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"beforeRouteLeave"),(0,l.kt)("li",{parentName:"ol"},"beforeEach"),(0,l.kt)("li",{parentName:"ol"},"BeforeEnter"),(0,l.kt)("li",{parentName:"ol"},"BeforeRouteEnter"),(0,l.kt)("li",{parentName:"ol"},"BeforeResolve\n\u5bfc\u822a\u786e\u8ba4"),(0,l.kt)("li",{parentName:"ol"},"afterEach\u2018\n\u9875\u9762\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ol"},"BeforeRouteEnter \u91cc\u9762\u7684 next \u51fd\u6570 \u53c2\u6570\u4e3a\u7ec4\u4ef6\u7684\u5b9e\u4f8b")),(0,l.kt)("p",null,"\u5bfc\u822a\u88ab\u89e6\u53d1\u3002\n\u5728\u5931\u6d3b\u7684\u7ec4\u4ef6\u91cc\u8c03\u7528 beforeRouteLeave \u5b88\u536b\u3002\n\u8c03\u7528\u5168\u5c40\u7684 beforeEach \u5b88\u536b\u3002\n\u5728\u91cd\u7528\u7684\u7ec4\u4ef6\u91cc\u8c03\u7528 beforeRouteUpdate \u5b88\u536b(2.2+)\u3002\n\u5728\u8def\u7531\u914d\u7f6e\u91cc\u8c03\u7528 beforeEnter\u3002\n\u89e3\u6790\u5f02\u6b65\u8def\u7531\u7ec4\u4ef6\u3002\n\u5728\u88ab\u6fc0\u6d3b\u7684\u7ec4\u4ef6\u91cc\u8c03\u7528 beforeRouteEnter\u3002\n\u8c03\u7528\u5168\u5c40\u7684 beforeResolve \u5b88\u536b(2.5+)\u3002\n\u5bfc\u822a\u88ab\u786e\u8ba4\u3002\n\u8c03\u7528\u5168\u5c40\u7684 afterEach \u94a9\u5b50\u3002\n\u89e6\u53d1 DOM \u66f4\u65b0\u3002\n\u8c03\u7528 beforeRouteEnter \u5b88\u536b\u4e2d\u4f20\u7ed9 next \u7684\u56de\u8c03\u51fd\u6570\uff0c\u521b\u5efa\u597d\u7684\u7ec4\u4ef6\u5b9e\u4f8b\u4f1a\u4f5c\u4e3a\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\u4f20\u5165\u3002"))}m.isMDXComponent=!0}}]);