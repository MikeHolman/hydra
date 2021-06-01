(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(270)),i={id:"overview",title:"Developer Guide Overview"},c={unversionedId:"development/overview",id:"development/overview",isDocsHomePage:!1,title:"Developer Guide Overview",description:"This guide assumes you have checked-out the repository.",source:"@site/docs/development/overview.md",slug:"/development/overview",permalink:"/docs/next/development/overview",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/development/overview.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1622590216,formattedLastUpdatedAt:"6/1/2021",sidebar:"docs",previous:{title:"Callbacks",permalink:"/docs/next/experimental/callbacks"},next:{title:"Testing",permalink:"/docs/next/development/testing"}},p=[{value:"Environment setup",id:"environment-setup",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This guide assumes you have checked-out the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra"},"repository"),".\nIt is recommended that you install Hydra in a virtual environment like ",Object(o.b)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/"},"conda")," or ",Object(o.b)("a",{parentName:"p",href:"https://virtualenv.pypa.io/en/latest/"},"virtualenv"),"."),Object(o.b)("h2",{id:"environment-setup"},"Environment setup"),Object(o.b)("p",null,"Install ",Object(o.b)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda")," and create an empty Conda environment with:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"conda create -n hydra38 python=3.8 -qy\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOTE")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The core Hydra framework supports Python 3.6 or newer. You may need to create additional environments for different Python versions if CI detect issues on a supported version of Python."))),Object(o.b)("p",null,"Activate the environment:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"conda activate hydra38\n")),Object(o.b)("p",null,"From the source tree, install Hydra in development mode with the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# install development dependencies\npip install -r requirements/dev.txt\n# install Hydra in development (editable) mode\npip install -e .\n")))}s.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return v}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,v=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?a.a.createElement(v,c(c({ref:t},l),{},{components:n})):a.a.createElement(v,c({ref:t},l))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);