(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{284:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(8),r=(n(0),n(346)),o=n(353),c={id:"develop",title:"Plugin development",sidebar_label:"Plugin development"},s={unversionedId:"advanced/plugins/develop",id:"advanced/plugins/develop",isDocsHomePage:!1,title:"Plugin development",description:"If you develop plugins, please join the Plugin developer announcement chat channel.",source:"@site/docs/advanced/plugins/develop.md",slug:"/advanced/plugins/develop",permalink:"/docs/next/advanced/plugins/develop",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/plugins/develop.md",version:"current",lastUpdatedBy:"Jasha10",lastUpdatedAt:1623374254,formattedLastUpdatedAt:"6/11/2021",sidebar_label:"Plugin development",sidebar:"docs",previous:{title:"Plugins Overview",permalink:"/docs/next/advanced/plugins/overview"},next:{title:"Application packaging",permalink:"/docs/next/advanced/app_packaging"}},u=[{value:"Plugin discovery process",id:"plugin-discovery-process",children:[]},{value:"Getting started",id:"getting-started",children:[]}],l={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If you develop plugins, please join the ",Object(r.b)("a",{href:"https://hydra-framework.zulipchat.com/#narrow/stream/233935-Hydra-plugin.20dev.20announcements"},"Plugin developer announcement chat channel"),"."))),Object(r.b)("p",null,"When developing Hydra plugins, keep the following things in mind:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Hydra plugins can be either a standalone Python package, or a part of your existing Python package.\nIn both cases - They should be in the namespace module ",Object(r.b)("inlineCode",{parentName:"li"},"hydra_plugins")," (This is a top level module, Your plugin will ",Object(r.b)("strong",{parentName:"li"},"NOT")," be discovered if you place it in ",Object(r.b)("inlineCode",{parentName:"li"},"mylib.hydra_plugins"),")."),Object(r.b)("li",{parentName:"ul"},"Do ",Object(r.b)("strong",{parentName:"li"},"NOT")," place an ",Object(r.b)("inlineCode",{parentName:"li"},"__init__.py")," file in ",Object(r.b)("inlineCode",{parentName:"li"},"hydra_plugins")," (doing so may break other installed Hydra plugins).")),Object(r.b)("h2",{id:"plugin-discovery-process"},"Plugin discovery process"),Object(r.b)("p",null,"The plugin discovery process runs whenever Hydra starts. During plugin discovery, Hydra scans for plugins in all the submodules of ",Object(r.b)("inlineCode",{parentName:"p"},"hydra_plugins"),". Hydra will import each module and look for plugins defined in that module.\nAny module under ",Object(r.b)("inlineCode",{parentName:"p"},"hydra_plugins")," that is slow to import will slow down the startup of ",Object(r.b)("strong",{parentName:"p"},"ALL")," Hydra applicaitons.\nPlugins with expensive imports can exclude individual files from Hydra's plugin discovery process by prefixing them with ",Object(r.b)("inlineCode",{parentName:"p"},"_")," (but not ",Object(r.b)("inlineCode",{parentName:"p"},"__"),").\nFor example, the file ",Object(r.b)("inlineCode",{parentName:"p"},"_my_plugin_lib.py")," would not be imported and scanned, while ",Object(r.b)("inlineCode",{parentName:"p"},"my_plugin_lib.py")," would be."),Object(r.b)("h2",{id:"getting-started"},"Getting started"),Object(r.b)("p",null,"The best way to get started developing a Hydra plugin is to base your new plugin on one of the example plugins:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Copy the subtree of the relevant ",Object(r.b)(o.b,{to:"examples/plugins",mdxType:"GithubLink"},"example plugin")," into a standalone project."),Object(r.b)("li",{parentName:"ul"},"Edit ",Object(r.b)("inlineCode",{parentName:"li"},"setup.py"),", rename the plugin module, for example from ",Object(r.b)("inlineCode",{parentName:"li"},"hydra_plugins.example_xyz_plugin")," to ",Object(r.b)("inlineCode",{parentName:"li"},"hydra_plugins.my_xyz_plugin"),"."),Object(r.b)("li",{parentName:"ul"},"Install the new plugin (Run this in the plugin directory: ",Object(r.b)("inlineCode",{parentName:"li"},"pip install -e ."),")"),Object(r.b)("li",{parentName:"ul"},"Run the included example app and make sure that the plugin is discovered:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ python example/my_app.py --info plugins\nInstalled Hydra Plugins\n***********************\n        ...\n        Launcher:\n        ---------\n                MyLauncher\n        ...\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Run the example application to see that that your plugin is doing something."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"[Optional]")," If you want the plugin be embedded in your existing application/library, move the ",Object(r.b)("inlineCode",{parentName:"li"},"hydra_plugins")," directory\nand make sure that it's included as a namespace module in your final Python package. See the ",Object(r.b)("inlineCode",{parentName:"li"},"setup.py"),"\nfile included with the example plugin for hints (typically this involves using ",Object(r.b)("inlineCode",{parentName:"li"},'find_namespace_packages(include=["hydra_plugins.*"])'),")."),Object(r.b)("li",{parentName:"ul"},"Hack on your plugin, Ensure that the recommended tests and any tests you want to add are passing.")))}p.isMDXComponent=!0},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=i,v=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return n?a.a.createElement(v,c(c({ref:t},u),{},{components:n})):a.a.createElement(v,c({ref:t},u))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<r;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},347:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))},348:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(11),o=n(347),c=n(7),s=Object(i.createContext)({collectLink:function(){}}),u=n(349),l=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n};t.a=function(e){var t,n,p,d=e.isNavLink,b=e.to,v=e.href,g=e.activeClassName,f=e.isActive,m=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,y=void 0===h||h,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,w=Object(i.useContext)(s),x=b||v,N=Object(o.a)(x),D=null==x?void 0:x.replace("pathname://",""),P=void 0!==D?(n=D,y&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,A=Object(i.useRef)(!1),C=d?r.e:r.c,_=c.default.canUseIntersectionObserver;Object(i.useEffect)((function(){return!_&&N&&window.docusaurus.prefetch(P),function(){_&&p&&p.disconnect()}}),[P,_,N]);var k=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,V=!P||!N||k;return P&&N&&!k&&!m&&w.collectLink(P),V?a.a.createElement("a",Object.assign({href:P},x&&!N&&{target:"_blank",rel:"noopener noreferrer"},O)):a.a.createElement(C,Object.assign({},O,{onMouseEnter:function(){A.current||(window.docusaurus.preload(P),A.current=!0)},innerRef:function(e){var t,n;_&&e&&N&&(t=e,n=function(){window.docusaurus.prefetch(P)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:P||""},d&&{isActive:f,activeClassName:g}))}},349:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n(10),a=n(347);function r(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,o=r.forcePrependBaseUrl,c=void 0!==o&&o,s=r.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},350:function(e,t,n){try{e.exports=n(351)}catch(a){var i={};e.exports={useAllDocsData:function(){return i},useActivePluginAndVersion:function(){}}}},351:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var i=n(23),a=n(38),r=n(352);t.useAllDocsData=function(){return a.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return a.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),a=i.useLocation().pathname;return r.getActivePlugin(n,a,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),a=i.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:r.getActiveVersion(n.pluginData,a)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return r.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),a=i.useLocation().pathname;return r.getActiveVersion(n,a)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),a=i.useLocation().pathname;return r.getActiveDocContext(n,a)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),a=i.useLocation().pathname;return r.getDocVersionSuggestions(n,a)}},352:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var i=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var a=Object.entries(e).find((function(e){e[0];var n=e[1];return!!i.matchPath(t,{path:n.path,exact:!1,strict:!1})})),r=a?{pluginId:a[0],pluginData:a[1]}:void 0;if(!r&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return r},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var a=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==a})),[a]).find((function(e){return!!i.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var a,r,o=t.getActiveVersion(e,n),c=null==o?void 0:o.docs.find((function(e){return!!i.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(a=c.id,r={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===a&&(r[e.name]=t)}))})),r):{}}},t.getDocVersionSuggestions=function(e,n){var i=t.getLatestVersion(e),a=t.getActiveDocContext(e,n),r=a.activeVersion!==i;return{latestDocSuggestion:r?null==a?void 0:a.alternateDocVersions[i.name]:void 0,latestVersionSuggestion:r?i:void 0}}},353:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var i=n(3),a=n(0),r=n.n(a),o=n(348),c=n(10),s=n(350);function u(e){return r.a.createElement(o.a,Object(i.a)({},e,{to:(t=e.to,a=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==a?void 0:a.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,a}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return r.a.createElement(u,e,r.a.createElement("span",null,"\xa0"),r.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);