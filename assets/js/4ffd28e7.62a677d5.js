"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4991],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,h=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},46242:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294);const n=function(e){return r.createElement(r.Fragment,null,r.createElement("li",{className:"installation-step",style:{marginTop:"20px"}},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-md-1 col-3"},r.createElement("span",{className:"fa-stack fa-2x"},r.createElement("i",{className:"fas fa-circle fa-stack-2x sp-color-green"}),r.createElement("strong",{className:"fa-stack-1x",style:{color:"white"}},"1"))),r.createElement("div",{className:"col-md-11 col-9"},"Download the latest Apache StreamPipes release and extract the zip file to a directory of your choice.",r.createElement("div",{className:"row"},r.createElement("table",{className:"table",style:{marginTop:"30px",marginLeft:"20px",marginRight:"20px",border:"1px solid rgb(27, 20, 100)"}},r.createElement("thead",null,r.createElement("tr",{style:{background:"rgb(27, 20, 100)",color:"white"}},r.createElement("th",{scope:"col",style:{borderBottom:"0px",borderTop:"0px"}},"File"),r.createElement("th",{scope:"col",style:{borderBottom:"0px",borderTop:"0px"}},"Version"),r.createElement("th",{scope:"col",style:{borderBottom:"0px",borderTop:"0px"}},"Release Date"),r.createElement("th",{scope:"col",style:{borderBottom:"0px",borderTop:"0px"}},"Signatures"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement("a",{href:"https://www.apache.org/dyn/closer.lua?action=download&filename=streampipes/"+e.version+"/apache-streampipes-"+e.version+"-source-release.zip"},"apache-streampipes-",e.version,"-source-release.zip")),r.createElement("td",null,e.version),r.createElement("td",null,e.releaseDate),r.createElement("td",null,r.createElement("a",{href:"https://downloads.apache.org/streampipes/"+e.version+"/apache-streampipes-"+e.version+"-source-release.zip.sha512"},"SHA"),r.createElement("a",{href:"https://downloads.apache.org/streampipes"+e.version+"/apache-streampipes-"+e.version+"-source-release.zip.asc"},"PGP")))))),r.createElement("div",{className:"row"},r.createElement("div",{className:"alert alert-info",role:"alert",style:{marginLeft:"20px",marginRight:"20px"}},"The above release file should be verified using the PGP signatures and the ",r.createElement("a",{href:"https://downloads.apache.org/streampipes/KEYS"},"project release KEYS"),". See the official ASF ",r.createElement("a",{target:"asf",href:"https://www.apache.org/dyn/closer.cgi#verify"},"verification instructions")," for a description of using the PGP and KEYS files for verification. A SHA512 checksum is also provided as an additional verification method."))))))};const o=function(e){return r.createElement(r.Fragment,null,r.createElement("li",{className:"installation-step"},r.createElement("div",{className:"row",style:{alignItems:"center",justifyContent:"center"}},r.createElement("div",{className:"col-md-1 col-3"},r.createElement("span",{className:"fa-stack fa-2x"},r.createElement("i",{className:"fas fa-circle fa-stack-2x sp-color-green"}),r.createElement("strong",{className:"fa-stack-1x",style:{color:"white"}},"2"))),r.createElement("div",{className:"col-md-11 col-9"},"In a command prompt, open the folder ",r.createElement("code",null,"installer/compose/")," and run ",r.createElement("code",null,"docker-compose up -d")))))};const l=function(e){return r.createElement(r.Fragment,null,r.createElement("li",{className:"installation-step"},r.createElement("div",{className:"row",style:{alignItems:"center",justifyContent:"center"}},r.createElement("div",{className:"col-md-1 col-3"},r.createElement("span",{className:"fa-stack fa-2x"},r.createElement("i",{className:"fas fa-circle fa-stack-2x sp-color-green"}),r.createElement("strong",{className:"fa-stack-1x",style:{color:"white"}},"3"))),r.createElement("div",{className:"col-md-11 col-9"},"Open your browser, navigate to http://localhost:80 (or use the domain name of your server) and finish the setup according to the instructions. The default login credentials are ",r.createElement("code",null,"admin@streampipes.apache.org"),", password ",r.createElement("code",null,"admin")))))};const s=function(e){return r.createElement(r.Fragment,null,r.createElement("li",{className:"installation-step"},r.createElement("div",{className:"row",style:{alignItems:"center",justifyContent:"center"}},r.createElement("div",{className:"col-md-1 col-3"},r.createElement("span",{className:"fa-stack fa-2x"},r.createElement("i",{className:"fas fa-circle fa-stack-2x sp-color-green"}),r.createElement("strong",{className:"fa-stack-1x",style:{color:"white"}},"4"))),r.createElement("div",{className:"col-md-11 col-9"},"For a detailed description of the installer and migration guides, read the ",r.createElement("a",{href:"https://streampipes.apache.org/docs/docs/try-installation.html"},"installation guide"),"or learn about advanced ",r.createElement("a",{href:"https://streampipes.apache.org/docs/docs/deploy-docker.html"},"Docker")," or ",r.createElement("a",{href:"https://streampipes.apache.org/docs/docs/deploy-kubernetes.html"},"K8s")," deployment setups."))))};const i=function(e){return r.createElement(r.Fragment,null,r.createElement(n,e),r.createElement(o,null),r.createElement(l,null),e.showMoreInfo?r.createElement(s,null):r.createElement(r.Fragment,null))}},58209:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=a(46242),s=["components"],i={id:"try-installation",title:"Installation",sidebar_label:"Installation",original_id:"try-installation"},c=void 0,p={unversionedId:"try-installation",id:"version-0.90.0/try-installation",title:"Installation",description:"The easiest way to install StreamPipes is our Docker-based installation. For production-grade deployments, we also",source:"@site/versioned_docs/version-0.90.0/01_try-installation.md",sourceDirName:".",slug:"/try-installation",permalink:"/docs/0.90.0/try-installation",draft:!1,tags:[],version:"0.90.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1689178337,formattedLastUpdatedAt:"Jul 12, 2023",sidebarPosition:1,frontMatter:{id:"try-installation",title:"Installation",sidebar_label:"Installation",original_id:"try-installation"},sidebar:"documentation",previous:{title:"Overview",permalink:"/docs/0.90.0/user-guide-introduction"},next:{title:"Overview",permalink:"/docs/0.90.0/concepts-overview"}},m={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Supported operating systems",id:"supported-operating-systems",level:3},{value:"Web Browser",id:"web-browser",level:3},{value:"Install StreamPipes",id:"install-streampipes",level:2},{value:"Setup StreamPipes",id:"setup-streampipes",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:d},h="wrapper";function f(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)(h,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The easiest way to install StreamPipes is our Docker-based installation. For production-grade deployments, we also\nrecommend looking at our Kubernetes support, which is also part of the installation kit."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The Docker-based installation requires ",(0,o.kt)("strong",{parentName:"p"},"Docker")," and ",(0,o.kt)("strong",{parentName:"p"},"Docker Compose")," to be installed on the target machine.\nInstallation instructions can be found below."),(0,o.kt)("div",{class:"admonition info"},(0,o.kt)("div",{class:"admonition-title"},"Install Docker"),(0,o.kt)("p",null,"Go to https://docs.docker.com/installation/ and follow the instructions to install Docker for your OS. Make sure docker can be started as a non-root user (described in the installation manual, don\u2019t forget to log out and in again) and check that Docker is installed correctly by executing docker-run hello-world")),(0,o.kt)("h3",{id:"supported-operating-systems"},"Supported operating systems"),(0,o.kt)("p",null,"The Docker-based installation supports the operating systems ",(0,o.kt)("strong",{parentName:"p"},"Linux"),", ",(0,o.kt)("strong",{parentName:"p"},"Mac OS X")," and ",(0,o.kt)("strong",{parentName:"p"},"Windows 10"),". Older windows\nversions are not fully compatible with Docker. Linux VMs running under Windows might cause network problems with Docker,\ntherefore some manual work might be needed to make StreamPipes run properly."),(0,o.kt)("h3",{id:"web-browser"},"Web Browser"),(0,o.kt)("p",null,"The StreamPipes application itself will be accessible through a web browser. We recommend a recent version of Chrome (\nbest experience), Firefox or Edge."),(0,o.kt)("h2",{id:"install-streampipes"},"Install StreamPipes"),(0,o.kt)(l.Z,{version:"0.90.0",mdxType:"DownloadSection"}),(0,o.kt)("h2",{id:"setup-streampipes"},"Setup StreamPipes"),(0,o.kt)("p",null,'Once you\'ve opened the browser at the URL given above, you should see the StreamPipes application as shown below. At\ninitial startup, StreamPipes automatically performs an installation process.\nAfter the installation has finished, continue by clicking on "Go to login\npage", once all components are successfully configured.'),(0,o.kt)("p",null,"On the login page, enter your credentials, then you should be forwarded to the home page."),(0,o.kt)("p",null,"Congratulations! You've successfully managed to install StreamPipes. Now we're ready to build our first pipeline!"),(0,o.kt)("div",{class:"my-carousel docs-carousel"},(0,o.kt)("img",{src:"/img/01_try-installation/03_login.png",alt:"Go to login page"}),(0,o.kt)("img",{src:"/img/01_try-installation/04_home.png",alt:"Home page"})),(0,o.kt)("div",{class:"admonition error"},(0,o.kt)("div",{class:"admonition-title"},"Errors during the installation process"),(0,o.kt)("p",null,"In most cases, errors during the installation are due to an under-powered system.",(0,o.kt)("br",null),"If there is a problem with any of the components, please restart the whole system (",(0,o.kt)("code",null,"docker-compose down")," and eventually also delete the volumes). Please also make sure that you've assigned enough memory available to Docker.")),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"That's it! Have a look at the usage guide to learn how to use Apache StreamPipes."))}f.isMDXComponent=!0}}]);