"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58662],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var i=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=i.createContext({}),d=function(e){var a=i.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=d(e.components);return i.createElement(l.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},h=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(t),h=n,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||s;return t?i.createElement(m,r(r({ref:a},p),{},{components:t})):i.createElement(m,r({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,r=new Array(s);r[0]=h;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[u]="string"==typeof e?e:n,r[1]=o;for(var d=2;d<s;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},17258:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var i=t(87462),n=t(63366),s=(t(67294),t(3905)),r=["components"],o={id:"use-dashboard",title:"Live Dashboard",sidebar_label:"Live Dashboard"},l=void 0,d={unversionedId:"use-dashboard",id:"use-dashboard",title:"Live Dashboard",description:"The live dashboard can be used to visualize live data of data streams using a set of visualizations",source:"@site/../docs/03_use-dashboard.md",sourceDirName:".",slug:"/use-dashboard",permalink:"/docs/next/use-dashboard",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688367241,formattedLastUpdatedAt:"Jul 3, 2023",sidebarPosition:3,frontMatter:{id:"use-dashboard",title:"Live Dashboard",sidebar_label:"Live Dashboard"},sidebar:"documentation",previous:{title:"Managing Pipelines",permalink:"/docs/next/use-managing-pipelines"},next:{title:"Data Explorer",permalink:"/docs/next/use-data-explorer"}},p={},u=[{value:"Visualizing Data Streams",id:"visualizing-data-streams",level:2},{value:"Managing Dashboards",id:"managing-dashboards",level:2},{value:"Creating Visualizations",id:"creating-visualizations",level:2},{value:"Available widgets",id:"available-widgets",level:2}],c={toc:u},h="wrapper";function m(e){var a=e.components,t=(0,n.Z)(e,r);return(0,s.kt)(h,(0,i.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The live dashboard can be used to visualize live data of data streams using a set of visualizations\nThe entry page of the live dashboard lists all created dashboards as in the screenshot below:"),(0,s.kt)("img",{className:"docs-image",src:"/img/03_use-dashboard/01_dashboard-overview.png",alt:"StreamPipes Dashboard Overview"}),(0,s.kt)("h2",{id:"visualizing-data-streams"},"Visualizing Data Streams"),(0,s.kt)("p",null,"To visualize data streams in the live dashboard, a pipeline must be created that makes use of the so-called ",(0,s.kt)("strong",{parentName:"p"},"Data Lake")," sink.\nAny data stream or data processor can serve as an input of the data lake sink. Switch to the pipeline editor, create a pipeline and configure the data lake sink. The visualization name is used to identify the sink in case multiple data lake sinks are used within a single pipeline."),(0,s.kt)("h2",{id:"managing-dashboards"},"Managing Dashboards"),(0,s.kt)("p",null,"Multiple dashboards can be created, e.g., to organize different assets in a single dashboard view."),(0,s.kt)("p",null,"A new dashboard can be created by clicking the ",(0,s.kt)("em",{parentName:"p"},"New Dashboard")," button, which opens a dialog that requires basic dashboard settings such as the title and description of the new dashboard.\nOnce created, the dashboard will be shown in the overview. Here, the following dashboard actions are available:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Show")," opens the dashboard."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Window")," opens the dashboard in a new window with reduced controls, e.g., without the StreamPipes navigation and toolbar. This is a useful view for standalone displays that should visualize key parameters."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Settings")," allows to modify the basic dashboard settings. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Edit")," opens the dashboard in edit mode, where widgets can be added to the dashboard.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Delete")," deletes the selected dashboard.")),(0,s.kt)("h2",{id:"creating-visualizations"},"Creating Visualizations"),(0,s.kt)("p",null,"Visualizations can be added to each dashboard in form of widgets. To add new visualizations, switch to the dashboard in ",(0,s.kt)("em",{parentName:"p"},"Edit")," mode.\nIn edit mode, a button appears that allows to add a new visualization."),(0,s.kt)("p",null,"Adding a new visualization is supported by a wizard consisting of three steps:"),(0,s.kt)("img",{className:"docs-image",src:"/img/03_use-dashboard/02_add-widget.png",alt:"StreamPipes Dashboard Pipeline Selection"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Select pipeline")," is the first step where a pipeline is selected on which the visualization is based. In this view, all pipelines are listed that have at least one ",(0,s.kt)("strong",{parentName:"li"},"Dashboard Sink"),". In case a pipeline contains multiple data lake sinks, the visualization name is listed below the pipeline name which eases discovering of the proper visualization."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Select widget")," is the next step where the visualization widget must be selected. StreamPipes automatically filters this list based on input requirements of widgets. For instance, image visualizations are only visible if the input data stream provides an image object."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Configure widget")," provides widget-specific settings to configure the visualization. In most cases, colors and titles of widgets can be modified. Additionally, chart-specific settings such as axis value ranges can be configured.")),(0,s.kt)("img",{className:"docs-image",src:"/img/03_use-dashboard/03_configure-widget.png",alt:"StreamPipes Dashboard Widget Configuration"}),(0,s.kt)("p",null,"By clicking ",(0,s.kt)("em",{parentName:"p"},"Create"),", the new widget is placed on the canvas. Size and positioning of visualizations can be flexibly changed based on the provided grid. To change the widget configuration, the ",(0,s.kt)("em",{parentName:"p"},"Settings")," button of each widget can be clicked to re-open the configuration dialog."),(0,s.kt)("p",null,"Once created, the dashboard provides a live view of all visualizations:"),(0,s.kt)("img",{className:"docs-image",src:"/img/03_use-dashboard/04_live-dashboard.png",alt:"StreamPipes Live Dashboard"}),(0,s.kt)("p",null,"Before the dashboard is closed, make sure to click the ",(0,s.kt)("em",{parentName:"p"},"Save")," button to persist the updated dashboard. Changes can be discarded by clicking the ",(0,s.kt)("em",{parentName:"p"},"Discard")," button."),(0,s.kt)("h2",{id:"available-widgets"},"Available widgets"),(0,s.kt)("p",null,"The following visualizations are available in the latest release:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Area Chart"),(0,s.kt)("li",{parentName:"ul"},"Gauge"),(0,s.kt)("li",{parentName:"ul"},"HTML page (renders HTML markup)"),(0,s.kt)("li",{parentName:"ul"},"Image  "),(0,s.kt)("li",{parentName:"ul"},"Line Chart"),(0,s.kt)("li",{parentName:"ul"},"Raw (displays the raw JSON input for debugging purposes)"),(0,s.kt)("li",{parentName:"ul"},"Single Value (displays a single measurement)"),(0,s.kt)("li",{parentName:"ul"},"Table"),(0,s.kt)("li",{parentName:"ul"},"Traffic Light")))}m.isMDXComponent=!0}}]);