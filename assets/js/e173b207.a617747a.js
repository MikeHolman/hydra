(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{306:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(346)),o=n(353),c={id:"app_packaging",title:"Application packaging",sidebar_label:"Application packaging"},u={unversionedId:"advanced/app_packaging",id:"advanced/app_packaging",isDocsHomePage:!1,title:"Application packaging",description:"You can package your Hydra application along with its configuration.",source:"@site/docs/advanced/packaging.md",slug:"/advanced/app_packaging",permalink:"/docs/next/advanced/app_packaging",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/packaging.md",version:"current",lastUpdatedBy:"Jasha10",lastUpdatedAt:1623374254,formattedLastUpdatedAt:"6/11/2021",sidebar_label:"Application packaging",sidebar:"docs",previous:{title:"Plugin development",permalink:"/docs/next/advanced/plugins/develop"},next:{title:"Hydra in Jupyter Notebooks",permalink:"/docs/next/advanced/jupyter_notebooks"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(o.a,{to:"examples/advanced/hydra_app_example",mdxType:"ExampleGithubLink"}),Object(i.b)("p",null,"You can package your Hydra application along with its configuration.\nAn example ",Object(i.b)(o.b,{to:"examples/advanced/hydra_app_example",mdxType:"GithubLink"},"standalone application")," is included in the repo."),Object(i.b)("p",null,"Run it with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"$ python examples/advanced/hydra_app_example/hydra_app/main.py\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),Object(i.b)("p",null,"Install it with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"$ pip install examples/advanced/hydra_app_example\n...\nSuccessfully installed hydra-app-0.1\n")),Object(i.b)("p",null,"Once installed, run the installed app with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"$ hydra_app\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),Object(i.b)("p",null,"The installed app will use the packaged configuration files."))}p.isMDXComponent=!0},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,v=p["".concat(o,".").concat(f)]||p[f]||d[f]||i;return n?r.a.createElement(v,c(c({ref:t},s),{},{components:n})):r.a.createElement(v,c({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},347:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},348:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(11),o=n(347),c=n(7),u=Object(a.createContext)({collectLink:function(){}}),s=n(349),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,p,d=e.isNavLink,f=e.to,v=e.href,g=e.activeClassName,b=e.isActive,m=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,y=void 0===h||h,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(s.b)().withBaseUrl,D=Object(a.useContext)(u),w=f||v,x=Object(o.a)(w),A=null==w?void 0:w.replace("pathname://",""),k=void 0!==A?(n=A,y&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,P=Object(a.useRef)(!1),V=d?i.e:i.c,E=c.default.canUseIntersectionObserver;Object(a.useEffect)((function(){return!E&&x&&window.docusaurus.prefetch(k),function(){E&&p&&p.disconnect()}}),[k,E,x]);var L=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,_=!k||!x||L;return k&&x&&!L&&!m&&D.collectLink(k),_?r.a.createElement("a",Object.assign({href:k},w&&!x&&{target:"_blank",rel:"noopener noreferrer"},O)):r.a.createElement(V,Object.assign({},O,{onMouseEnter:function(){P.current||(window.docusaurus.preload(k),P.current=!0)},innerRef:function(e){var t,n;E&&e&&x&&(t=e,n=function(){window.docusaurus.prefetch(k)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:k||""},d&&{isActive:b,activeClassName:g}))}},349:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(10),r=n(347);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},350:function(e,t,n){try{e.exports=n(351)}catch(r){var a={};e.exports={useAllDocsData:function(){return a},useActivePluginAndVersion:function(){}}}},351:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var a=n(23),r=n(38),i=n(352);t.useAllDocsData=function(){return r.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return r.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),r=a.useLocation().pathname;return i.getActivePlugin(n,r,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),r=a.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,r)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return i.getActiveVersion(n,r)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return i.getActiveDocContext(n,r)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return i.getDocVersionSuggestions(n,r)}},352:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var a=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var r=Object.entries(e).find((function(e){e[0];var n=e[1];return!!a.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=r?{pluginId:r[0],pluginData:r[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var r=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==r})),[r]).find((function(e){return!!a.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var r,i,o=t.getActiveVersion(e,n),c=null==o?void 0:o.docs.find((function(e){return!!a.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(r=c.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===r&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var a=t.getLatestVersion(e),r=t.getActiveDocContext(e,n),i=r.activeVersion!==a;return{latestDocSuggestion:i?null==r?void 0:r.alternateDocVersions[a.name]:void 0,latestVersionSuggestion:i?a:void 0}}},353:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var a=n(3),r=n(0),i=n.n(r),o=n(348),c=n(10),u=n(350);function s(e){return i.a.createElement(o.a,Object(a.a)({},e,{to:(t=e.to,r=Object(u.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==r?void 0:r.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,r}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return i.a.createElement(s,e,i.a.createElement("span",null,"\xa0"),i.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);