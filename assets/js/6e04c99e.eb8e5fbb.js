(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(8),a=(n(0),n(346)),o=n(353),c={id:"overview",title:"Plugins Overview",sidebar_label:"Plugins Overview"},s={unversionedId:"advanced/plugins/overview",id:"version-1.1/advanced/plugins/overview",isDocsHomePage:!1,title:"Plugins Overview",description:"Hydra can be extended via plugins.",source:"@site/versioned_docs/version-1.1/advanced/plugins/intro.md",slug:"/advanced/plugins/overview",permalink:"/docs/advanced/plugins/overview",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.1/advanced/plugins/intro.md",version:"1.1",lastUpdatedBy:"Jasha10",lastUpdatedAt:1623374254,formattedLastUpdatedAt:"6/11/2021",sidebar_label:"Plugins Overview",sidebar:"version-1.1/docs",previous:{title:"Config Search Path",permalink:"/docs/advanced/search_path"},next:{title:"Plugin development",permalink:"/docs/advanced/plugins/develop"}},u=[{value:"Plugin types",id:"plugin-types",children:[{value:"Sweeper",id:"sweeper",children:[]},{value:"Launcher",id:"launcher",children:[]},{value:"SearchPathPlugin",id:"searchpathplugin",children:[]},{value:"ConfigSource",id:"configsource",children:[]}]}],l={toc:u};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hydra can be extended via plugins.\nThe example plugins ",Object(a.b)(o.b,{to:"examples/plugins",mdxType:"GithubLink"},"here")," can help you get started with plugin development."),Object(a.b)("h2",{id:"plugin-types"},"Plugin types"),Object(a.b)("p",null,"Hydra has several plugin types:"),Object(a.b)("h3",{id:"sweeper"},"Sweeper"),Object(a.b)("p",null,"A sweeper is responsible for converting command line arguments list into multiple jobs.\nFor example, the basic built-in sweeper takes arguments like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"batch_size=128 optimizer=nesterov,adam learning_rate=0.01,0.1 \n")),Object(a.b)("p",null,"And creates 4 jobs with the following parameters:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"batch_size=128 optimizer=nesterov learning_rate=0.01\nbatch_size=128 optimizer=nesterov learning_rate=0.1\nbatch_size=128 optimizer=adam learning_rate=0.01\nbatch_size=128 optimizer=adam learning_rate=0.1\n")),Object(a.b)("h3",{id:"launcher"},"Launcher"),Object(a.b)("p",null,"Launchers are responsible for launching a job to a specific environment.\nA Launcher takes a batch of argument lists like the one above and launches a job for each one.\nThe job uses those arguments to compose its configuration.\nThe basic launcher simply launches the job locally. "),Object(a.b)("h3",{id:"searchpathplugin"},"SearchPathPlugin"),Object(a.b)("p",null,"A config path plugin can manipulate the search path.\nThis can be used to influence the default Hydra configuration to be more appropriate to a specific environment,\nor just add new entries to the search path to make more configurations available to the Hydra app."),Object(a.b)("p",null,"SearchPathPlugin plugins are discovered automatically by Hydra and are being called to manipulate the search path before\nthe configuration is composed."),Object(a.b)("p",null,"Many other plugins also implement SearchPathPlugin to add their configuration to the config search path once they are installed. "),Object(a.b)("h3",{id:"configsource"},"ConfigSource"),Object(a.b)("p",null,"ConfigSource plugins can be used to allow Hydra to access configuration in non-standard locations when composing the config.\nThis can be used to enable access to an in-house private config store, or as a way to access configs from public sources like GitHub or S3."))}d.isMDXComponent=!0},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return v}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,v=d["".concat(o,".").concat(f)]||d[f]||p[f]||a;return n?i.a.createElement(v,c(c({ref:t},u),{},{components:n})):i.a.createElement(v,c({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},347:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},348:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(11),o=n(347),c=n(7),s=Object(r.createContext)({collectLink:function(){}}),u=n(349),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,n,d,p=e.isNavLink,f=e.to,v=e.href,g=e.activeClassName,b=e.isActive,h=e["data-noBrokenLinkCheck"],m=e.autoAddBaseUrl,O=void 0===m||m,y=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,w=Object(r.useContext)(s),P=f||v,D=Object(o.a)(P),A=null==P?void 0:P.replace("pathname://",""),x=void 0!==A?(n=A,O&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,V=Object(r.useRef)(!1),k=p?a.e:a.c,L=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!L&&D&&window.docusaurus.prefetch(x),function(){L&&d&&d.disconnect()}}),[x,L,D]);var E=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,C=!x||!D||E;return x&&D&&!E&&!h&&w.collectLink(x),C?i.a.createElement("a",Object.assign({href:x},P&&!D&&{target:"_blank",rel:"noopener noreferrer"},y)):i.a.createElement(k,Object.assign({},y,{onMouseEnter:function(){V.current||(window.docusaurus.preload(x),V.current=!0)},innerRef:function(e){var t,n;L&&e&&D&&(t=e,n=function(){window.docusaurus.prefetch(x)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:x||""},p&&{isActive:b,activeClassName:g}))}},349:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(10),i=n(347);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},350:function(e,t,n){try{e.exports=n(351)}catch(i){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},351:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),i=n(38),a=n(352);t.useAllDocsData=function(){return i.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return i.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),i=r.useLocation().pathname;return a.getActivePlugin(n,i,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),i=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:a.getActiveVersion(n.pluginData,i)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return a.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return a.getActiveVersion(n,i)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return a.getActiveDocContext(n,i)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return a.getDocVersionSuggestions(n,i)}},352:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var i=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),a=i?{pluginId:i[0],pluginData:i[1]}:void 0;if(!a&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return a},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var i=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==i})),[i]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var i,a,o=t.getActiveVersion(e,n),c=null==o?void 0:o.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(i=c.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===i&&(a[e.name]=t)}))})),a):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),i=t.getActiveDocContext(e,n),a=i.activeVersion!==r;return{latestDocSuggestion:a?null==i?void 0:i.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:a?r:void 0}}},353:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),i=n(0),a=n.n(i),o=n(348),c=n(10),s=n(350);function u(e){return a.a.createElement(o.a,Object(r.a)({},e,{to:(t=e.to,i=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==i?void 0:i.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,i}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return a.a.createElement(u,e,a.a.createElement("span",null,"\xa0"),a.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);