(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(8),a=(n(0),n(346)),o=n(353),c={id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},u={unversionedId:"configure_hydra/workdir",id:"version-1.1/configure_hydra/workdir",isDocsHomePage:!1,title:"Customizing working directory pattern",description:"Below are a few examples of customizing output directory patterns.",source:"@site/versioned_docs/version-1.1/configure_hydra/workdir.md",slug:"/configure_hydra/workdir",permalink:"/docs/configure_hydra/workdir",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.1/configure_hydra/workdir.md",version:"1.1",lastUpdatedBy:"Jasha10",lastUpdatedAt:1623374254,formattedLastUpdatedAt:"6/11/2021",sidebar_label:"Customizing working directory pattern",sidebar:"version-1.1/docs",previous:{title:"Customizing logging",permalink:"/docs/configure_hydra/logging"},next:{title:"Customizing Application's help",permalink:"/docs/configure_hydra/app_help"}},s=[{value:"Configuration for run",id:"configuration-for-run",children:[]},{value:"Configuration for multirun",id:"configuration-for-multirun",children:[]},{value:"Using <code>hydra.job.override_dirname</code>",id:"using-hydrajoboverride_dirname",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(o.a,{text:"Example application",to:"examples/configure_hydra/workdir",mdxType:"ExampleGithubLink"}),Object(a.b)("p",null,"Below are a few examples of customizing output directory patterns."),Object(a.b)("h3",{id:"configuration-for-run"},"Configuration for run"),Object(a.b)("p",null,"Run output directory grouped by date:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: ./outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n")),Object(a.b)("p",null,"Run output directory grouped by job name:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${hydra.job.name}/${now:%Y-%m-%d_%H-%M-%S}\n")),Object(a.b)("p",null,"Run output directory can contain user configuration variables:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${now:%Y-%m-%d_%H-%M-%S}/opt:${optimizer.type}\n")),Object(a.b)("h3",{id:"configuration-for-multirun"},"Configuration for multirun"),Object(a.b)("p",null,"We will run the application with same command but different configurations:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"python my_app.py --multirun a=a1,a2,a3 \n")),Object(a.b)("p",null,"Default multirun dir configurations:"),Object(a.b)("div",{className:"row"},Object(a.b)("div",{className:"col col--8"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"hydra:\n  sweep:\n    dir: multirun/${now:%Y-%m-%d}/${now:%H-%M-%S}\n    subdir: ${hydra.job.num}\n\n"))),Object(a.b)("div",{className:"col  col--4"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="workding dir created"',title:'"workding',dir:!0,'created"':!0},"$ tree my_app -d\nmy_app\n\u251c\u2500\u2500 0\n\u251c\u2500\u2500 1\n\u2514\u2500\u2500 2\n")))),Object(a.b)("p",null,"Similar configuration patterns in run can be applied to config multirun dir as well."),Object(a.b)("p",null,"For example, multirun output directory grouped by job name, and sub dir by job num:"),Object(a.b)("div",{className:"row"},Object(a.b)("div",{className:"col col--6"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"hydra:\n  sweep:\n    dir: ${hydra.job.name}\n    subdir: ${hydra.job.num}\n\n"))),Object(a.b)("div",{className:"col  col--6"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="workding dir created"',title:'"workding',dir:!0,'created"':!0},"$ tree my_app -d\nmy_app\n\u251c\u2500\u2500 0\n\u251c\u2500\u2500 1\n\u2514\u2500\u2500 2\n")))),Object(a.b)("h3",{id:"using-hydrajoboverride_dirname"},"Using ",Object(a.b)("inlineCode",{parentName:"h3"},"hydra.job.override_dirname")),Object(a.b)(o.a,{text:"Example application",to:"examples/configure_hydra/job_override_dirname",mdxType:"ExampleGithubLink"}),Object(a.b)("p",null,"This field is populated automatically using your command line arguments and is typically being used as a part of your\noutput directory pattern. It is meant to be used along with the configuration for working dir, especially\nin ",Object(a.b)("inlineCode",{parentName:"p"},"hydra.sweep.subdir"),"."),Object(a.b)("p",null,"If we run the example application with the following commandline overrides and configs:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"python my_app.py --multirun batch_size=32 learning_rate=0.1,0.01\n")),Object(a.b)("div",{className:"row"},Object(a.b)("div",{className:"col col--6"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"hydra:\n  sweep:\n    dir: multirun\n    subdir: ${hydra.job.override_dirname}\n"))),Object(a.b)("div",{className:"col  col--6"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="working dir created"',title:'"working',dir:!0,'created"':!0},"$ tree multirun -d\nmultirun\n\u251c\u2500\u2500 batch_size=32,learning_rate=0.01\n\u2514\u2500\u2500 batch_size=32,learning_rate=0.1\n")))),Object(a.b)("p",null,"You can further customized the output dir creation by configuring",Object(a.b)("inlineCode",{parentName:"p"},"hydra.job.override_dirname"),"."),Object(a.b)("p",null,"In particular, the separator char ",Object(a.b)("inlineCode",{parentName:"p"},"=")," and the item separator char ",Object(a.b)("inlineCode",{parentName:"p"},",")," can be modified by overriding\n",Object(a.b)("inlineCode",{parentName:"p"},"hydra.job.config.override_dirname.kv_sep")," and ",Object(a.b)("inlineCode",{parentName:"p"},"hydra.job.config.override_dirname.item_sep"),".\nCommand line override keys can also be automatically excluded from the generated ",Object(a.b)("inlineCode",{parentName:"p"},"override_dirname"),"."),Object(a.b)("p",null,"An example of a case where the exclude is useful is a random seed."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}/seed=${seed}\n  job:\n    config:\n      override_dirname:\n        exclude_keys:\n          - seed\n")),Object(a.b)("p",null,"With this configuration, running"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ python my_app.py --multirun  batch_size=32 learning_rate=0.1,0.01 seed=1,2\n")),Object(a.b)("p",null,"Would result in a directory structure like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$ tree multirun -d\nmultirun\n\u251c\u2500\u2500 batch_size=32,learning_rate=0.01\n\u2502\xa0\xa0 \u251c\u2500\u2500 seed=1\n\u2502\xa0\xa0 \u2514\u2500\u2500 seed=2\n\u2514\u2500\u2500 batch_size=32,learning_rate=0.1\n    \u251c\u2500\u2500 seed=1\n    \u2514\u2500\u2500 seed=2\n")))}d.isMDXComponent=!0},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||a;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},347:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},348:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(11),o=n(347),c=n(7),u=Object(r.createContext)({collectLink:function(){}}),s=n(349),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,n,d,p=e.isNavLink,b=e.to,m=e.href,f=e.activeClassName,g=e.isActive,v=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,h=void 0===y||y,j=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),O=Object(s.b)().withBaseUrl,w=Object(r.useContext)(u),_=b||m,N=Object(o.a)(_),D=null==_?void 0:_.replace("pathname://",""),x=void 0!==D?(n=D,h&&function(e){return e.startsWith("/")}(n)?O(n):n):void 0,k=Object(r.useRef)(!1),A=p?a.e:a.c,C=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!C&&N&&window.docusaurus.prefetch(x),function(){C&&d&&d.disconnect()}}),[x,C,N]);var P=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,V=!x||!N||P;return x&&N&&!P&&!v&&w.collectLink(x),V?i.a.createElement("a",Object.assign({href:x},_&&!N&&{target:"_blank",rel:"noopener noreferrer"},j)):i.a.createElement(A,Object.assign({},j,{onMouseEnter:function(){k.current||(window.docusaurus.preload(x),k.current=!0)},innerRef:function(e){var t,n;C&&e&&N&&(t=e,n=function(){window.docusaurus.prefetch(x)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:x||""},p&&{isActive:g,activeClassName:f}))}},349:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(10),i=n(347);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,u=a.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},350:function(e,t,n){try{e.exports=n(351)}catch(i){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},351:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),i=n(38),a=n(352);t.useAllDocsData=function(){return i.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return i.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),i=r.useLocation().pathname;return a.getActivePlugin(n,i,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),i=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:a.getActiveVersion(n.pluginData,i)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return a.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return a.getActiveVersion(n,i)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return a.getActiveDocContext(n,i)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return a.getDocVersionSuggestions(n,i)}},352:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var i=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),a=i?{pluginId:i[0],pluginData:i[1]}:void 0;if(!a&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return a},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var i=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==i})),[i]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var i,a,o=t.getActiveVersion(e,n),c=null==o?void 0:o.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(i=c.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===i&&(a[e.name]=t)}))})),a):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),i=t.getActiveDocContext(e,n),a=i.activeVersion!==r;return{latestDocSuggestion:a?null==i?void 0:i.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:a?r:void 0}}},353:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n(3),i=n(0),a=n.n(i),o=n(348),c=n(10),u=n(350);function s(e){return a.a.createElement(o.a,Object(r.a)({},e,{to:(t=e.to,i=Object(u.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==i?void 0:i.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,i}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return a.a.createElement(s,e,a.a.createElement("span",null,"\xa0"),a.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);