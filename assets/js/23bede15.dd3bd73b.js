"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8136],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(t),c=l,k=m["".concat(u,".").concat(c)]||m[c]||p[c]||o;return t?r.createElement(k,a(a({ref:n},d),{},{components:t})):r.createElement(k,a({ref:n},d))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9168:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(7462),l=(t(7294),t(3905));const o={title:"4. webpack \u6253\u5305\u540e\u6a21\u5757\u5206\u6790",sidebar_position:4},a=void 0,i={unversionedId:"bundle",id:"bundle",title:"4. webpack \u6253\u5305\u540e\u6a21\u5757\u5206\u6790",description:"1. \u540c\u6b65\u52a0\u8f7d",source:"@site/engineering/04-bundle.md",sourceDirName:".",slug:"/bundle",permalink:"/website/engineering/bundle",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4. webpack \u6253\u5305\u540e\u6a21\u5757\u5206\u6790",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3. sourcemap",permalink:"/website/engineering/sourcemap"},next:{title:"5. AST\u8bed\u6cd5\u6811",permalink:"/website/engineering/ast"}},u={},s=[{value:"1. \u540c\u6b65\u52a0\u8f7d",id:"1-\u540c\u6b65\u52a0\u8f7d",level:2},{value:"\u6ca1\u6709\u4f9d\u8d56",id:"\u6ca1\u6709\u4f9d\u8d56",level:3},{value:"<strong>\u6253\u5305\u6a21\u5757\u5206\u6790</strong>",id:"\u6253\u5305\u6a21\u5757\u5206\u6790",level:3},{value:"2. \u517c\u5bb9\u6027\u5b9e\u73b0",id:"2-\u517c\u5bb9\u6027\u5b9e\u73b0",level:2},{value:"2.1 common.js \u52a0\u8f7d common.js",id:"21-commonjs-\u52a0\u8f7d-commonjs",level:3},{value:"2.1.1 index.js",id:"211-indexjs",level:4},{value:"2.1.2 title.js",id:"212-titlejs",level:4},{value:"2.1.3 bundle.js",id:"213-bundlejs",level:4},{value:"2.2 common.js \u52a0\u8f7d ES6 modules",id:"22-commonjs-\u52a0\u8f7d-es6-modules",level:3},{value:"2.2.1 index.js",id:"221-indexjs",level:4},{value:"2.2.2 title.js",id:"222-titlejs",level:4},{value:"2.2.3 bundle.js",id:"223-bundlejs",level:4},{value:"2.3 ES6 modules \u52a0\u8f7d ES6 modules",id:"23-es6-modules-\u52a0\u8f7d-es6-modules",level:3},{value:"2.3.1 index.js",id:"231-indexjs",level:4},{value:"2.3.2 title.js",id:"232-titlejs",level:4},{value:"2.3.3 bundle.js",id:"233-bundlejs",level:4},{value:"2.4 ES6 modules \u52a0\u8f7d common.js",id:"24-es6-modules-\u52a0\u8f7d-commonjs",level:3},{value:"2.4.1 index.js",id:"241-indexjs",level:4},{value:"2.4.2 title.js",id:"242-titlejs",level:4},{value:"2.4.3 bundle.js",id:"243-bundlejs",level:4},{value:"3. \u5f02\u6b65\u52a0\u8f7d\u5b9e\u73b0\u5206\u6790",id:"3-\u5f02\u6b65\u52a0\u8f7d\u5b9e\u73b0\u5206\u6790",level:2},{value:"\u6253\u5305\u524d",id:"\u6253\u5305\u524d",level:3},{value:"\u6253\u5305\u540e",id:"\u6253\u5305\u540e",level:3},{value:"4 \u603b\u7ed3",id:"4-\u603b\u7ed3",level:2},{value:"\u6838\u5fc3\u65b9\u6cd5",id:"\u6838\u5fc3\u65b9\u6cd5",level:3},{value:"<strong>\u517c\u5bb9\u5904\u7406</strong>",id:"\u517c\u5bb9\u5904\u7406",level:3},{value:"<strong>\u5f02\u6b65\u52a0\u8f7d</strong>",id:"\u5f02\u6b65\u52a0\u8f7d",level:3}],d={toc:s};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u540c\u6b65\u52a0\u8f7d"},"1. \u540c\u6b65\u52a0\u8f7d"),(0,l.kt)("h3",{id:"\u6ca1\u6709\u4f9d\u8d56"},"\u6ca1\u6709\u4f9d\u8d56"),(0,l.kt)("p",null,"src\\index.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"console.log(title)\n")),(0,l.kt)("p",null,"bundle.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"//\u5bfc\u51fa\u5bf9\u8c61\nvar exports = {}\n//\u6a21\u5757\u5185\u5bb9\nconsole.log(title)\n")),(0,l.kt)("h3",{id:"\u6253\u5305\u6a21\u5757\u5206\u6790"},(0,l.kt)("strong",{parentName:"h3"},"\u6253\u5305\u6a21\u5757\u5206\u6790")),(0,l.kt)("p",null,"src\\index.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JS"},'let title = require("./title.js");\nconsole.log(title);\n')),(0,l.kt)("p",null,"src\\title.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = "title"\n')),(0,l.kt)("p",null,"bundle.js"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672a\u52a0\u5165\u7f13\u5b58")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'//\u6a21\u5757\u5b9a\u4e49\n//key\u662f\u6a21\u5757ID\uff0c\u4e5f\u5c31\u662f\u6a21\u5757\u76f8\u5bf9\u4e8e\u76f8\u524d\u6839\u76ee\u5f55\u7684\u76f8\u5bf9\u8def\u5f84\nvar modules = {\n  "./src/title.js": (module) => {\n    module.exports = "title"\n  },\n}\n//\u52a0\u8f7d\u6a21\u5757\uff0c\u6267\u884c modules \u5bf9\u5e94\u7684\u51fd\u6570\nfunction require(moduleId) {\n  var module = {\n    exports: {},\n  }\n  modules[moduleId](module, module.exports, require)\n  return module.exports\n}\n\n//\u5165\u53e3\nvar exports = {}\nlet title = require("./src/title.js")\nconsole.log(title)\n')),(0,l.kt)("h2",{id:"2-\u517c\u5bb9\u6027\u5b9e\u73b0"},"2. \u517c\u5bb9\u6027\u5b9e\u73b0"),(0,l.kt)("h3",{id:"21-commonjs-\u52a0\u8f7d-commonjs"},"2.1 common.js \u52a0\u8f7d common.js"),(0,l.kt)("h4",{id:"211-indexjs"},"2.1.1 index.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let title = require("./title")\nconsole.log(title.name)\nconsole.log(title.age)\n')),(0,l.kt)("h4",{id:"212-titlejs"},"2.1.2 title.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'exports.name = "title_name"\nexports.age = "title_age"\n')),(0,l.kt)("h4",{id:"213-bundlejs"},"2.1.3 bundle.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},';(() => {\n  //\u9700\u8981\u52a0\u8f7d\u7684\u6a21\u5757\n  var modules = {\n    "./src/title.js": (module, exports) => {\n      exports.name = "title_name"\n      exports.age = "title_age"\n    },\n  }\n  //\u7f13\u5b58\n  var cache = {}\n  //require \u65b9\u6cd5\n  function require(moduleId) {\n    var cachedModule = cache[moduleId]\n    if (cachedModule !== undefined) {\n      return cachedModule.exports\n    }\n    var module = (cache[moduleId] = {\n      exports: {},\n    })\n    modules[moduleId](module, module.exports, require)\n    return module.exports\n  }\n  // \u5165\u53e3\n  var exports = {}\n  ;(() => {\n    let title = require("./src/title.js")\n    console.log(title.name)\n    console.log(title.age)\n  })()\n})()\n')),(0,l.kt)("h3",{id:"22-commonjs-\u52a0\u8f7d-es6-modules"},"2.2 common.js \u52a0\u8f7d ES6 modules"),(0,l.kt)("h4",{id:"221-indexjs"},"2.2.1 index.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let title = require("./title")\nconsole.log(title)\nconsole.log(title.age)\n')),(0,l.kt)("h4",{id:"222-titlejs"},"2.2.2 title.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'export default "title_name"\nexport const age = "title_age"\n')),(0,l.kt)("h4",{id:"223-bundlejs"},"2.2.3 bundle.js"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53bb\u9664\u4e86\u81ea\u6267\u884c\u51fd\u6570\u548c\u6a21\u5757\u7f13\u5b58")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6253\u5305\u524d\u9762\u662f commonjs \u6253\u5305\u540e\u4e0d\u9700\u8981\u53d8\uff0c\u6253\u5305\u524d\u662f esmodule \u6253\u5305\u540e\u5f97\u53d8")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * \u5982\u679c\u539f\u6a21\u5757\u662fesmodule\n * \u5148\u6267\u884crequire.r\n * \u518d\u6267\u884crequire.d\n */\nvar modules = {\n  "./src/title.js": (module, exports, require) => {\n    //1.\u58f0\u660e\u6216\u8005\u8bf4\u8868\u793a\u5f53\u524d\u7684\u6a21\u5757\u539f\u6765\u662f\u4e00\u4e2aes module\n    require.r(exports)\n    //2. \u5b9a\u4e49\u5c5e\u6027\n    require.d(exports, {\n      age: () => age,\n      default: () => DEFAULT_EXPORTS, //\u503c\u662f\u4e00\u4e2agetter\n    })\n    //\u9ed8\u8ba4\u5bfc\u51fa\n    const DEFAULT_EXPORTS = "title_name"\n    //\u547d\u540d\u5bfc\u51fa\n    const age = "title_age"\n  },\n}\n/**\n * \u6267\u884cmodules\u5bf9\u8c61\u5bf9\u5e94\u7684\u6a21\u5757\u51fd\u6570\n * @param {*} moduleId \u6a21\u5757Id\n * @returns module.exports\n */\nfunction require(moduleId) {\n  var module = {\n    exports: {},\n  }\n  modules[moduleId](module, module.exports, require)\n  return module.exports\n}\n/**\n * \u7ed9exports \u4e0a\u9762\u5b9a\u4e49\u5c5e\u6027\n * @param {*} exports \u5bfc\u51fa\u5bf9\u8c61\n * @param {*} definition \u5b9a\u4e49\u7684\u5c5e\u6027\n */\nrequire.d = (exports, definition) => {\n  //\u904d\u5386key\n  for (var key in definition) {\n    //\u5728 definition \u4e0a\u4e0d\u5728 exports \u4e0a\u5c31\u8d4b\u503c\n    if (require.o(definition, key) && !require.o(exports, key)) {\n      // \u7ed9exports \u4e0a\u9762\u5b9a\u4e49\u5c5e\u6027 geT \u83b7\u53d6\n      Object.defineProperty(exports, key, {\n        enumerable: true,\n        get: definition[key],\n      })\n    }\n  }\n}\n//\u5bf9\u8c61\u81ea\u8eab\u5c5e\u6027\u4e2d\u662f\u5426\u5177\u6709\u6307\u5b9a\u7684\u5c5e\u6027\nrequire.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)\n/**\n * \u7ed9exports \u58f0\u660e Symbol.toStringTag\u4e3aModule \uff0c__esModule \u672atrue\n * @param {*} exports\n */\nrequire.r = (exports) => {\n  if (typeof Symbol !== "undefined" && Symbol.toStringTag) {\n    Object.defineProperty(exports, Symbol.toStringTag, {\n      value: "Module",\n    })\n  }\n  Object.defineProperty(exports, "__esModule", {\n    value: true,\n  })\n}\n\nvar exports = {}\n\nlet title = require("./src/title.js")\nconsole.log(title)\nconsole.log(title.default)\nconsole.log(title.age)\n')),(0,l.kt)("h3",{id:"23-es6-modules-\u52a0\u8f7d-es6-modules"},"2.3 ES6 modules \u52a0\u8f7d ES6 modules"),(0,l.kt)("h4",{id:"231-indexjs"},"2.3.1 index.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import name, { age } from "./title"\nconsole.log(name)\nconsole.log(age)\n')),(0,l.kt)("h4",{id:"232-titlejs"},"2.3.2 title.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'export default name = "title_name"\nexport const age = "title_age"\n')),(0,l.kt)("h4",{id:"233-bundlejs"},"2.3.3 bundle.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * \u5982\u679c\u539f\u6a21\u5757\u662fesmodule\n * \u5148\u6267\u884crequire.r\n * \u518d\u6267\u884crequire.d\n */\nvar modules = {\n  "./src/title.js": (module, exports, require) => {\n    //1.\u58f0\u660e\u6216\u8005\u8bf4\u8868\u793a\u5f53\u524d\u7684\u6a21\u5757\u539f\u6765\u662f\u4e00\u4e2aes module\n\n    require.r(exports)\n    //2. \u5b9a\u4e49\u5c5e\u6027\n    require.d(exports, {\n      age: () => age,\n      default: () => _DEFAULT_EXPORT__,\n    })\n    // \u6b64\u5904\u4e3a\u4e86\u5b9e\u73b0Livbinding\u505a\u51c6\u5907\n    const _DEFAULT_EXPORT__ = (name = "title_name")\n    const age = "title_age"\n  },\n}\nvar cache = {}\n/**\n * \u6267\u884cmodules\u5bf9\u8c61\u5bf9\u5e94\u7684\u6a21\u5757\u51fd\u6570\n * @param {*} moduleId \u6a21\u5757Id\n * @returns module.exports\n */\nfunction require(moduleId) {\n  var cachedModule = cache[moduleId]\n  if (cachedModule !== undefined) {\n    return cachedModule.exports\n  }\n  var module = (cache[moduleId] = {\n    exports: {},\n  })\n  modules[moduleId](module, module.exports, require)\n  return module.exports\n}\n/**\n * \u7ed9exports \u4e0a\u9762\u5b9a\u4e49\u5c5e\u6027\n * @param {*} exports \u5bfc\u51fa\u5bf9\u8c61\n * @param {*} definition \u5b9a\u4e49\u7684\u5c5e\u6027\n */\nrequire.d = (exports, definition) => {\n  for (var key in definition) {\n    if (require.o(definition, key) && !require.o(exports, key)) {\n      Object.defineProperty(exports, key, {\n        enumerable: true,\n        get: definition[key],\n      })\n    }\n  }\n}\n\nrequire.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)\n/**\n * \u7ed9exports \u58f0\u660e Symbol.toStringTag\u4e3aModule \uff0c__esModule \u672atrue\n * @param {*} exports\n */\nrequire.r = (exports) => {\n  if (typeof Symbol !== "undefined" && Symbol.toStringTag) {\n    Object.defineProperty(exports, Symbol.toStringTag, {\n      value: "Module",\n    })\n  }\n  Object.defineProperty(exports, "__esModule", {\n    value: true,\n  })\n}\n\n//\u5165\u53e3\nvar exports = {}\n//\u6807\u660e\u662fesModule\u6a21\u5757\nrequire.r(exports)\n//\u52a0\u8f7d\u5bf9\u5e94\u7684\u6a21\u5757\nvar _title_0__ = require("./src/title.js")\n//\u53d6\u503c\nconsole.log(_title_0__["default"])\nconsole.log(_title_0__.age)\n')),(0,l.kt)("h3",{id:"24-es6-modules-\u52a0\u8f7d-commonjs"},"2.4 ES6 modules \u52a0\u8f7d common.js"),(0,l.kt)("h4",{id:"241-indexjs"},"2.4.1 index.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import name, { age } from "./title"\nconsole.log(name)\nconsole.log(age)\n')),(0,l.kt)("h4",{id:"242-titlejs"},"2.4.2 title.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  name: "title_name",\n  age: "title_age",\n}\n')),(0,l.kt)("h4",{id:"243-bundlejs"},"2.4.3 bundle.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * \u5982\u679c\u539f\u6a21\u5757\u662fesmodule\n * \u5148\u6267\u884crequire.r\n * \u518d\u6267\u884crequire.d\n */\nvar modules = {\n  "./src/title.js": (module, exports, require) => {\n    //1.\u58f0\u660e\u6216\u8005\u8bf4\u8868\u793a\u5f53\u524d\u7684\u6a21\u5757\u539f\u6765\u662f\u4e00\u4e2aes module\n\n    require.r(exports)\n    //2. \u5b9a\u4e49\u5c5e\u6027\n    require.d(exports, {\n      age: () => age,\n      default: () => _DEFAULT_EXPORT__,\n    })\n    // \u6b64\u5904\u4e3a\u4e86\u5b9e\u73b0Livbinding\u505a\u51c6\u5907\n    const _DEFAULT_EXPORT__ = (name = "title_name")\n    const age = "title_age"\n  },\n}\nvar cache = {}\n/**\n * \u6267\u884cmodules\u5bf9\u8c61\u5bf9\u5e94\u7684\u6a21\u5757\u51fd\u6570\n * @param {*} moduleId \u6a21\u5757Id\n * @returns module.exports\n */\nfunction require(moduleId) {\n  var cachedModule = cache[moduleId]\n  if (cachedModule !== undefined) {\n    return cachedModule.exports\n  }\n  var module = (cache[moduleId] = {\n    exports: {},\n  })\n  modules[moduleId](module, module.exports, require)\n  return module.exports\n}\n/**\n * \u7ed9exports \u4e0a\u9762\u5b9a\u4e49\u5c5e\u6027\n * @param {*} exports \u5bfc\u51fa\u5bf9\u8c61\n * @param {*} definition \u5b9a\u4e49\u7684\u5c5e\u6027\n */\nrequire.d = (exports, definition) => {\n  for (var key in definition) {\n    if (require.o(definition, key) && !require.o(exports, key)) {\n      Object.defineProperty(exports, key, {\n        enumerable: true,\n        get: definition[key],\n      })\n    }\n  }\n}\n\nrequire.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)\n/**\n * \u7ed9exports \u58f0\u660e Symbol.toStringTag\u4e3aModule \uff0c__esModule \u672atrue\n * @param {*} exports\n */\nrequire.r = (exports) => {\n  if (typeof Symbol !== "undefined" && Symbol.toStringTag) {\n    Object.defineProperty(exports, Symbol.toStringTag, {\n      value: "Module",\n    })\n  }\n  Object.defineProperty(exports, "__esModule", {\n    value: true,\n  })\n}\n\n//\u5165\u53e3\nvar exports = {}\n//\u6807\u660e\u662fesModule\u6a21\u5757\nrequire.r(exports)\n//\u52a0\u8f7d\u5bf9\u5e94\u7684\u6a21\u5757\nvar _title_0__ = require("./src/title.js")\n//\u53d6\u503c\nconsole.log(_title_0__["default"])\nconsole.log(_title_0__.age)\n')),(0,l.kt)("h2",{id:"3-\u5f02\u6b65\u52a0\u8f7d\u5b9e\u73b0\u5206\u6790"},"3. \u5f02\u6b65\u52a0\u8f7d\u5b9e\u73b0\u5206\u6790"),(0,l.kt)("h3",{id:"\u6253\u5305\u524d"},"\u6253\u5305\u524d"),(0,l.kt)("p",null,"index.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import("./title.js").then((module) => {\n  console.log(module.default)\n  import("./title.js").then((module) => {\n    console.log(module.default)\n  })\n})\n')),(0,l.kt)("p",null,"title.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'export default "title"\n')),(0,l.kt)("h3",{id:"\u6253\u5305\u540e"},"\u6253\u5305\u540e"),(0,l.kt)("p",null,"main.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'//\u5b9a\u4e49\u4e00\u4e2a\u6a21\u5757\u5b9a\u4e49\u7684\u5bf9\u8c61\nvar modules = {}\n//\u5b58\u653e\u5df2\u7ecf\u52a0\u8f7d\u7684\u6a21\u5757\u7684\u7f13\u5b58\nvar cache = {}\n//\u5728\u6d4f\u89c8\u5668\u91cc\u5b9e\u73b0require\u65b9\u6cd5\nfunction require(moduleId) {\n  var cachedModule = cache[moduleId]\n  if (cachedModule !== undefined) {\n    return cachedModule.exports\n  }\n  var module = (cache[moduleId] = {\n    exports: {},\n  })\n  modules[moduleId](module, module.exports, require)\n  return module.exports\n}\n//\u7ed9require\u65b9\u6cd5\u5b9a\u4e49\u4e00\u4e2am\u5c5e\u6027\uff0c\u6307\u5411\u6a21\u5757\u5b9a\u4e49\u5bf9\u8c61\nrequire.m = modules\nrequire.d = (exports, definition) => {\n  for (var key in definition) {\n    if (require.o(definition, key) && !require.o(exports, key)) {\n      Object.defineProperty(exports, key, {\n        enumerable: true,\n        get: definition[key],\n      })\n    }\n  }\n}\nrequire.f = {} //\u7a7a\u5bf9\u8c61\n/**\n *\n * @param {*} chunkId  chunk \u4ee3\u7801\u5757 \u6a21\u5757\u7684\u96c6\u5408\n * @returns \u8fd4\u56dePromise\n */\nrequire.e = (chunkId) => {\n  let promises = []\n  require.f.j(chunkId, promises)\n  return Promise.all(promises)\n}\n//\u6e90\u4ee3\u7801\u52a0\u8f7d\u7edd\u5bf9\u8def\u5f84 \u6b64\u5904\u5199\u6210\'\'\nrequire.p = ""\n//\u8fd4\u56de\u6b64\u4ee3\u7801\u5757\u5bf9\u5e94\u7684\u6587\u4ef6\u540d\nrequire.u = (chunkId) => {\n  return "" + chunkId + ".main.js"\n}\nrequire.g = (function () {\n  if (typeof globalThis === "object") return globalThis\n  try {\n    return this || new Function("return this")()\n  } catch (e) {\n    if (typeof window === "object") return window\n  }\n})()\nrequire.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)\n// \u901a\u8fc7JSONP\u52a0\u8f7d\u4ee3\u7801 \u52a8\u6001\u52a0\u8f7d\u4ee3\u7801 \u539f\u4ee3\u7801\u4e2d\u4f1a\u6709\u4e00\u4e2a\u5b9a\u65f6\u5668\uff0c\u6210\u529f\u540e\u8fbe\u5230\u65f6\u95f4\u5220\u9664\u521b\u5efascript\u6807\u7b7e\nrequire.l = (url) => {\n  let script = document.createElement("script")\n  script.src = url\n  document.head.appendChild(script)\n}\nrequire.r = (exports) => {\n  if (typeof Symbol !== "undefined" && Symbol.toStringTag) {\n    Object.defineProperty(exports, Symbol.toStringTag, {\n      value: "Module",\n    })\n  }\n  Object.defineProperty(exports, "__esModule", {\n    value: true,\n  })\n}\n\n//\u5b58\u653e\u52a0\u8f7d\u7684\u4ee3\u7801\u5757\u7684\u72b6\u6001\n//key\u662f\u4ee3\u7801\u5757\u7684\u540d\u5b57\n//0\u8868\u793a\u5df2\u7ecf\u52a0\u8f7d\u5b8c\u6210\u4e86\nvar installedChunks = {\n  main: 0,\n  //\u5f53\u4e00\u4e2a\u4ee3\u7801\u5757\u5b83\u7684\u503c\u662f\u4e00\u4e2a\u6570\u7ec4\u7684\u65f6\u5019\u8868\u793a\u6b64\u4ee3\u7801\u5757\u5bf9\u5e94\u7684JS\u6587\u4ef6\u6b63\u5728\u52a0\u8f7d\u4e2d\n  //\'src_hello_js\':[resolve,reject,promise]=>0\n}\n/**\n * \u901a\u8fc7JSONP\u5f02\u6b65\u52a0\u8f7d\u4e00\u4e2achunkId\u5bf9\u5e94\u7684\u4ee3\u7801\u5757\u6587\u4ef6\uff0c\u5176\u5b9e\u5c31\u662ftitle.main.js\n * \u4f1a\u8fd4\u56de\u4e00\u4e2aPromise\n * @param {*} chunkId \u4ee3\u7801\u5757ID\n * @param {*} promises promise\u6570\u7ec4\n */\nrequire.f.j = (chunkId, promises) => {\n  //\u505a\u7f13\u5b58  \u5f53\u524d\u7684\u4ee3\u7801\u5757\u7684\u6570\u636e\n  var installedChunkData = require.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined\n  if (installedChunkData !== 0) {\n    const promise = new Promise((resolve, reject) => {\n      installedChunkData = installedChunks[chunkId] = [resolve, reject]\n    })\n    installedChunkData[2] = promise\n    //installedChunkData=[resolve,reject,promise]\n    promises.push(promise)\n    const url = require.p + require.u(chunkId)\n    require.l(url)\n  }\n}\n/**\n *\n * @param {*} chunkIds \u4ee3\u7801\u5757ID\u6570\u7ec4\n * @param {*} moreModules \u989d\u5916\u7684\u6a21\u5757\u5b9a\u4e49\n */\nfunction webpackJsonpCallback([chunkIds, moreModules]) {\n  const resolves = []\n  for (let i = 0; i < chunkIds.length; i++) {\n    const chunkId = chunkIds[i] //src_title_js\n    const resolve = installedChunks[chunkId][0]\n    resolves.push(resolve)\n    //\u5230\u8fd9\u91cc\u6b64\u4ee3\u7801\u5757\u5c31\u5df2\u7ecf\u52a0\u8f7d\u6210\u529f\u4e86\uff0c\u53ef\u4ee5\u628achunkId\u7684\u503c\u8bbe\u7f6e\u4e3a0\n    installedChunks[chunkId] = 0\n  }\n  //\u5408\u5e76\u6a21\u5757\u5b9a\u4e49\u5230modules\u53bb\n  for (const moduleId in moreModules) {\n    modules[moduleId] = moreModules[moduleId]\n  }\n  while (resolves.length) {\n    //\u53d6\u51fa\u6240\u6709\u7684resolve\u65b9\u6cd5\uff0c\u8ba9\u5b83\u6267\u884c\uff0c\u8ba9\u5b83\u5bf9\u5e94\u7684promise\u53d8\u6210\u6210\u529f\u6001\n    resolves.shift()()\n  }\n}\nconst chunkLoadingGlobal = (window["someName"] = [])\nchunkLoadingGlobal.push = webpackJsonpCallback\nvar exports = {}\n/**\n * require.e\u5f02\u6b65\u52a0\u8f7dtitle\u4ee3\u7801\u5757\u6587\u4ef6 title.main.js\n * promise\u6210\u529f\u540e\u4f1a\u628a title.main.js\u91cc\u9762\u7684\u4ee3\u7801\u5b9a\u4e49\u5408\u5e76\u5230require.m\u5bf9\u8c61\u4e0a\uff0c\u4e5f\u5c31\u662fmodules\u4e0a\n * \u8c03\u7528require\u65b9\u6cd5\u52a0\u8f7d./src/title.js\u6a21\u5757\uff0c\u83b7\u53d6 \u6a21\u5757\u7684\u5bfc\u51fa\u5bf9\u8c61\uff0c\u8fdb\u884c\u6253\u5370\n */\nrequire\n  .e("src_title_js")\n  .then(require.bind(require, "./src/title.js"))\n  .then((module) => {\n    console.log(module.default)\n    require\n      .e("src_title_js")\n      .then(require.bind(require, "./src/title.js"))\n      .then((result) => {\n        console.log(result.default)\n      })\n  })\n')),(0,l.kt)("p",null,"src_title_js.main.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'window["someName"].push([\n  ["src_title_js"],\n  {\n    "./src/title.js": (module, exports, require) => {\n      require.r(exports)\n      require.d(exports, {\n        default: () => _DEFAULT_EXPORT__,\n      })\n      const _DEFAULT_EXPORT__ = "title"\n    },\n  },\n])\n')),(0,l.kt)("h2",{id:"4-\u603b\u7ed3"},"4 \u603b\u7ed3"),(0,l.kt)("h3",{id:"\u6838\u5fc3\u65b9\u6cd5"},"\u6838\u5fc3\u65b9\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"modules \u5bf9\u8c61 ")," key \u662f\u6a21\u5757 ID\uff0c\u4e5f\u5c31\u662f\u6a21\u5757\u76f8\u5bf9\u4e8e\u76f8\u524d\u6839\u76ee\u5f55\u7684\u76f8\u5bf9\u8def\u5f84 \u503c\u4e3a\u5bf9\u5e94\u52a0\u8f7d\u6a21\u5757\u7684\u5185\u5bb9\u51fd\u6570")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"require \u65b9\u6cd5")," \u6267\u884c modules \u5bf9\u8c61\u5bf9\u5e94\u7684\u6a21\u5757\u51fd\u6570 \u8fd4\u56de modules.exports \u5bf9\u8c61")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"require.d \u65b9\u6cd5")," \u901a\u8fc7 defineProperty \u7ed9 exports \u4e0a\u8bbe\u7f6e\u5c5e\u6027 get \u83b7\u53d6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"require.o \u65b9\u6cd5")," \u5bf9\u8c61\u81ea\u8eab\u5c5e\u6027\u4e2d\u662f\u5426\u5177\u6709\u6307\u5b9a\u7684\u5c5e\u6027")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"require.r \u65b9\u6cd5")," \u6807\u660e\u8be5\u6a21\u5757\u662f esModele \u6a21\u5757")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"require.n \u65b9\u6cd5")," \u8fd4\u56de\u51fd\u6570\u517c\u5bb9\u6027\u5904\u7406\u9ed8\u8ba4\u503c \uff0cesModule \u6a21\u5757 \u662f\u7684\u8fd4\u56de module",'["default"]'," \u5426\u5219 commonjs \u6a21\u5757\u8fd4\u56de\u672c\u8eab")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"require.m \u65b9\u6cd5")," \u6307\u5411\u6a21\u5757\u5b9a\u4e49\u5bf9\u8c61 equire.m = modules;")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"require.p \u65b9\u6cd5")," \u83b7\u53d6\u8981\u52a0\u8f7d\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"require.u \u65b9\u6cd5")," \u8fd4\u56de\u6b64\u4ee3\u7801\u5757\u5bf9\u5e94\u7684\u6587\u4ef6\u540d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"require.l \u65b9\u6cd5")," \u8fd4\u56de\u6b64\u4ee3\u7801\u5757\u5bf9\u5e94\u7684\u6587\u4ef6\u540d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"require.f.j \u65b9\u6cd5"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"require.e \u65b9\u6cd5")," \u5f02\u6b65\u52a0\u8f7d\u4ee3\u7801\u5757\u6587\u4ef6"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de Promise.all(","[promises]",")"),(0,l.kt)("li",{parentName:"ul"},"promise \u6210\u529f\u540e\u4f1a\u628a \u52a0\u8f7d\u91cc\u9762\u7684\u4ee3\u7801\u5b9a\u4e49\u5408\u5e76\u5230 require.m \u5bf9\u8c61\u4e0a\uff0c\u4e5f\u5c31\u662f modules \u4e0a"),(0,l.kt)("li",{parentName:"ul"},"\u8c03\u7528 require \u65b9\u6cd5\u52a0\u8f7d\u5bf9\u5e94\u6a21\u5757\uff0c\u83b7\u53d6 \u6a21\u5757\u7684\u5bfc\u51fa\u5bf9\u8c61\uff0c\u8fdb\u884c\u6253\u5370")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"installedChunks \u5bf9\u8c61")," //\u5b58\u653e\u52a0\u8f7d\u7684\u4ee3\u7801\u5757\u7684\u72b6\u6001 //key \u662f\u4ee3\u7801\u5757\u7684\u540d\u5b57 //0 \u8868\u793a\u5df2\u7ecf\u52a0\u8f7d\u5b8c\u6210\u4e86"))),(0,l.kt)("h3",{id:"\u517c\u5bb9\u5904\u7406"},(0,l.kt)("strong",{parentName:"h3"},"\u517c\u5bb9\u5904\u7406")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"common.js \u52a0\u8f7d common.js"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u8c03\u7528 require \u65b9\u6cd5 \u6267\u884c modules \u5bf9\u8c61\u5bf9\u5e94\u7684\u51fd\u6570\u8fd4\u56de modules.exports \u5bf9\u8c61"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"common.js \u52a0\u8f7d ES6 modules"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u8c03\u7528 require \u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c modules \u5bf9\u8c61\u5bf9\u5e94\u7684\u51fd\u6570",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u8c03\u7528 require.r \u65b9\u6cd5 \u6807\u660e\u8be5\u6a21\u5757\u4e3a esModule"),(0,l.kt)("li",{parentName:"ol"},"\u8c03\u7528 require.d \u65b9\u6cd5 \u7ed9 export \u5bf9\u8c61\u8d4b\u503c"))),(0,l.kt)("li",{parentName:"ol"},"\u8fd4\u56de modules.exports")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ES6 modules \u52a0\u8f7d ES6 modules"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u6a21\u5757\u5165\u53e3 \u8c03\u7528 require.r \u6807\u660e\u662f esModule \u6a21\u5757"),(0,l.kt)("li",{parentName:"ol"},"\u8c03\u7528 require \u65b9\u6cd5 \u52a0\u8f7d\u6a21\u5757",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u8c03\u7528 require.r \u6807\u660e\u88ab\u52a0\u8f7d\u7684\u6a21\u5757\u662f esModule"),(0,l.kt)("li",{parentName:"ol"},"\u8c03\u7528 require.d \u65b9\u6cd5 \u7ed9 export \u5bf9\u8c61\u8d4b\u503c"))),(0,l.kt)("li",{parentName:"ol"},"\u8fd4\u56de \u52a0\u8f7d\u7684\u5185\u5bb9 modules.exports"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ES6 modules \u52a0\u8f7d common.js"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6a21\u5757\u5165\u53e3 \u8c03\u7528 require.r \u6807\u660e\u662f esModule \u6a21\u5757\u3001")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8c03\u7528 require \u65b9\u6cd5 \u52a0\u8f7d\u6a21\u5757 \u8fd4\u56de\u5bf9\u5e94\u6a21\u5757\u5185\u5bb9")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u517c\u5bb9\u5904\u7406\u8fd4\u56de\u7684\u9ed8\u8ba4\u503c \u8c03\u7528 require.n"))))),(0,l.kt)("h3",{id:"\u5f02\u6b65\u52a0\u8f7d"},(0,l.kt)("strong",{parentName:"h3"},"\u5f02\u6b65\u52a0\u8f7d")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8c03\u7528 require.e \u5f02\u6b65\u52a0\u8f7d\u4ee3\u7801\uff0c\u53c2\u6570\u8981\u52a0\u8f7d\u7684\u6a21\u5757 ID"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684 promises \u6570\u7ec4"),(0,l.kt)("li",{parentName:"ul"},"\u8c03\u7528 require.f.j(chunkId, promises\uff09",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e00\u4e2a promise \u548c\u5e76\u4e14\u5c06\u8be5 chunkId \u5bf9\u5e94 promise \u7684 resolve,reject \u653e\u8fdb\u6570\u7ec4"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u5168\u5c40\u5bf9\u8c61 installedChunks \u5b58\u53d6 key\uff1achunkId \uff0cvalue \u4e3a\u5b9a\u4e49\u7684\u6570\u7ec4"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u8be5 promise \u6dfb\u52a0\u5230 promises \u4e0a"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 require.p + require.u(chunkId) \u83b7\u53d6\u8981\u52a8\u6001\u52a0\u8f7d\u7684 script \u7684 url \u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},"\u8c03\u7528 require.l \u540c\u8fc7 JSONP\uff08\u52a8\u6001\u521b\u5efa script\uff0c\u6210\u529f\u540e\u5220\u9664\uff09\u5f02\u6b65\u52a0\u8f7d\u5bf9\u63a5\u7684\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u8c03\u7528",(0,l.kt)("strong",{parentName:"li"},"webpackJsonpCallback"),"\u52a0\u8f7d\u6210\u529f\u7684\u56de\u8c03\uff0c\u53c2\u6570\u4e3a chunkIds \u548c moreModules \u5bf9\u8c61",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"installedChunks \u53d6\u51fa\u5bf9\u5e94 chunkId \u7684 resolves \u65b9\u6cd5\u5b58\u8d77\u6765"),(0,l.kt)("li",{parentName:"ul"},"\u628a installedChunks \u4e2d chunkId \u7684\u503c\u8bbe\u7f6e\u4e3a 0 \uff08\u8868\u660e\u8be5\u6a21\u5757\u52a0\u8f7d\u6210\u529f\u4e86\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u904d\u5386 moreModules \u5408\u5e76\u6a21\u5757\u5b9a\u4e49\u5230 modules \u53bb"),(0,l.kt)("li",{parentName:"ul"},"\u4f9d\u6b21\u53d6\u51fa resolve \u65b9\u6cd5\u5e76\u6267\u884c"))))),(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de Promise.all(promises)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6210\u529f\u4e4b\u540e\u901a\u8fc7 then \u65b9\u6cd5\u52a0\u8f7d\u8c03\u7528 require \u65b9\u6cd5\u52a0\u8f7d\u6a21\u5757\u5185\u5bb9\u5e76\u8fd4\u56de\u4e0b\u4e00\u4e2a then")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9875\u9762\u901a\u8fc7.then \u65b9\u6cd5\u62ff\u5230\u7ed3\u679c"))))}p.isMDXComponent=!0}}]);