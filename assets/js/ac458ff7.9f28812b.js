"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7562],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return p},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return l},withMDXComponents:function(){return s}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){return function(n){var t=l(n.components);return r.createElement(e,a({},n,{components:t}))}},l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=l(t),u=i,m=s["".concat(o,".").concat(u)]||s[u]||h[u]||a;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88891:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],c={id:"changes_to_hydra_main_config_path",title:"Changes to @hydra.main() and hydra.initialize()"},d=void 0,p={unversionedId:"upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",id:"version-1.1/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",title:"Changes to @hydra.main() and hydra.initialize()",description:"Prior to Hydra 1.1, @hydra.main() and hydra.initialize() default config path was the directory containing the Python app (calling @hydra.main() or hydra.initialize()).",source:"@site/versioned_docs/version-1.1/upgrades/1.0_to_1.1/hydra_main_config_path.md",sourceDirName:"upgrades/1.0_to_1.1",slug:"/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",permalink:"/docs/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/upgrades/1.0_to_1.1/hydra_main_config_path.md",tags:[],version:"1.1",lastUpdatedBy:"himkt",lastUpdatedAt:1650587258,formattedLastUpdatedAt:"4/22/2022",frontMatter:{id:"changes_to_hydra_main_config_path",title:"Changes to @hydra.main() and hydra.initialize()"},sidebar:"version-1.1/docs",previous:{title:"Introduction",permalink:"/docs/upgrades/intro"},next:{title:"Changes to default composition order",permalink:"/docs/upgrades/1.0_to_1.1/default_composition_order"}},s=[{value:"Dedicated config directory",id:"dedicated-config-directory",children:[],level:3},{value:"No config directory",id:"no-config-directory",children:[],level:3},{value:"Using the application directory",id:"using-the-application-directory",children:[],level:3}],l={toc:s};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.mdx)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Prior to Hydra 1.1, ",(0,a.mdx)("strong",{parentName:"p"},"@hydra.main()")," and ",(0,a.mdx)("strong",{parentName:"p"},"hydra.initialize()")," default ",(0,a.mdx)("inlineCode",{parentName:"p"},"config path")," was the directory containing the Python app (calling ",(0,a.mdx)("strong",{parentName:"p"},"@hydra.main()")," or ",(0,a.mdx)("strong",{parentName:"p"},"hydra.initialize()"),")."),(0,a.mdx)("p",null,"This can cause unexpected behavior:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Sibling directories are interpreted as config groups, which can lead to surprising results (See ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/hydra/issues/1533"},"#1533"),")."),(0,a.mdx)("li",{parentName:"ul"},"The subtree added automatically can have many files/directories - which will cause ",(0,a.mdx)("strong",{parentName:"li"},"--help")," to be very slow as it's scanning for all config groups/config files (See ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/hydra/issues/759"},"#759"),").")),(0,a.mdx)("p",null,"To address these issues, Hydra 1.1 issues a warning if the config_path is not specified.",(0,a.mdx)("br",{parentName:"p"}),"\n","Your options are as follows:"),(0,a.mdx)("h3",{id:"dedicated-config-directory"},"Dedicated config directory"),(0,a.mdx)("p",null,'For applications with config files, specify a directory like "conf" to use a dedicated config directory relative to the application.'),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path="conf")\n# or:\nhydra.initialize(config_path="conf")\n')),(0,a.mdx)("h3",{id:"no-config-directory"},"No config directory"),(0,a.mdx)("p",null,"For applications that do not define config files next to the Python script (typically applications using only Structured Configs), it is recommended that\nyou pass ",(0,a.mdx)("inlineCode",{parentName:"p"},"None")," as the config_path, indicating that no directory should be added to the config search path.\nThis will become the default in Hydra 1.2."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"@hydra.main(config_path=None)\n# or:\nhydra.initialize(config_path=None)\n")),(0,a.mdx)("h3",{id:"using-the-application-directory"},"Using the application directory"),(0,a.mdx)("p",null,"Use the directory/module of the Python script.\nThis was the default behavior up to Hydra 1.0.",(0,a.mdx)("br",{parentName:"p"}),"\n","This is not recommended as it can cause the surprising behavior outlined above."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path=".")\n# or:\nhydra.initialize(config_path=".")\n')))}u.isMDXComponent=!0}}]);