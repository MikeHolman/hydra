(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{115:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(8),i=(r(0),r(270)),a={id:"working_directory",title:"Output/Working directory",sidebar_label:"Output/Working directory"},c={unversionedId:"tutorial/working_directory",id:"version-0.11/tutorial/working_directory",isDocsHomePage:!1,title:"Output/Working directory",description:"Hydra solves the problem of your needing to specify a new output directory for each run, by",source:"@site/versioned_docs/version-0.11/tutorial/8_working_directory.md",slug:"/tutorial/working_directory",permalink:"/docs/0.11/tutorial/working_directory",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/tutorial/8_working_directory.md",version:"0.11",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1622590216,formattedLastUpdatedAt:"6/1/2021",sidebar_label:"Output/Working directory",sidebar:"version-0.11/docs",previous:{title:"Tab completion",permalink:"/docs/0.11/tutorial/tab_completion"},next:{title:"Logging",permalink:"/docs/0.11/tutorial/logging"}},l=[{value:"Original working directory",id:"original-working-directory",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hydra solves the problem of your needing to specify a new output directory for each run, by\ncreating a directory for each run and executing your code within that directory."),Object(i.b)("p",null,"The working directory is used to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Store the output for the application (For example, a database dump file)"),Object(i.b)("li",{parentName:"ul"},"Store the Hydra output for the run (Configuration, Logs etc)")),Object(i.b)("p",null,"Every time you run the app, a new working directory is automatically created:"),Object(i.b)("p",null,"Python file: ",Object(i.b)("inlineCode",{parentName:"p"},"my_app.py")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'import os\n\n@hydra.main()\ndef my_app(_cfg):\n    print("Working directory : {}".format(os.getcwd()))\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-17\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-19\n')),Object(i.b)("p",null,"Let's take a look at one of those working directories:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"$ tree outputs/2019-09-25/15-16-17\noutputs/2019-09-25/15-16-17\n\u251c\u2500\u2500 .hydra\n\u2502   \u251c\u2500\u2500 config.yaml\n\u2502   \u251c\u2500\u2500 hydra.yaml\n\u2502   \u2514\u2500\u2500 overrides.yaml\n\u2514\u2500\u2500 my_app.log\n")),Object(i.b)("p",null,"We have the Hydra output directory (",Object(i.b)("inlineCode",{parentName:"p"},".hydra")," by default) and the application log file.\nInside the configuration output directory we have:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"config.yaml"),": A dump of the user specified configuration"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hydra.yaml"),": A dump of the Hydra configuration"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"overrides.yaml"),": The command line overrides used")),Object(i.b)("p",null,"And in the main output directory:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"my_app.log"),": A log file created for this run")),Object(i.b)("h3",{id:"original-working-directory"},"Original working directory"),Object(i.b)("p",null,"You can still access the original working directory if you need to:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'import os\nimport hydra\nfrom hydra import utils\n\n@hydra.main()\ndef my_app(_cfg):\n    print("Current working directory  : {}".format(os.getcwd()))\n    print("Original working directory : {}".format(utils.get_original_cwd()))\n    print("to_absolute_path(\'foo\')    : {}".format(utils.to_absolute_path("foo")))\n    print("to_absolute_path(\'/foo\')   : {}".format(utils.to_absolute_path("/foo")))\n\n\n$ python examples/tutorial/8_working_directory/original_cwd.py\nCurrent working directory  : /Users/omry/dev/hydra/outputs/2019-10-23/10-53-03\nOriginal working directory : /Users/omry/dev/hydra\nto_absolute_path(\'foo\')    : /Users/omry/dev/hydra/foo\nto_absolute_path(\'/foo\')   : /foo\n')),Object(i.b)("p",null,"Working directory can be ",Object(i.b)("a",{parentName:"p",href:"/docs/0.11/configure_hydra/workdir"},"customized"),"."))}p.isMDXComponent=!0},270:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),s=n,b=d["".concat(a,".").concat(s)]||d[s]||y[s]||i;return r?o.a.createElement(b,c(c({ref:t},u),{},{components:r})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);