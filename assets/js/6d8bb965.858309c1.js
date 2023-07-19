"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27624],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var r=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},p=function(e){var a=d(e.components);return r.createElement(l.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),g=i,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||o;return t?r.createElement(m,n(n({ref:a},p),{},{components:t})):r.createElement(m,n({ref:a},p))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,n=new Array(o);n[0]=g;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[c]="string"==typeof e?e:i,n[1]=s;for(var d=2;d<o;d++)n[d]=t[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},79275:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),n=["components"],s={id:"use-data-explorer",title:"Data Explorer",sidebar_label:"Data Explorer"},l=void 0,d={unversionedId:"use-data-explorer",id:"use-data-explorer",title:"Data Explorer",description:"The data explorer can be used to visualize and explore data streams that are persisted by using the Data Lake sink.",source:"@site/../docs/03_use-data-explorer.md",sourceDirName:".",slug:"/use-data-explorer",permalink:"/docs/next/use-data-explorer",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688367241,formattedLastUpdatedAt:"Jul 3, 2023",sidebarPosition:3,frontMatter:{id:"use-data-explorer",title:"Data Explorer",sidebar_label:"Data Explorer"},sidebar:"documentation",previous:{title:"Live Dashboard",permalink:"/docs/next/use-dashboard"},next:{title:"Notifications",permalink:"/docs/next/use-notifications"}},p={},c=[{value:"Using the data explorer",id:"using-the-data-explorer",level:2},{value:"Get the data",id:"get-the-data",level:3},{value:"Data Views &amp; Widgets",id:"data-views--widgets",level:3},{value:"Data Configuration",id:"data-configuration",level:3},{value:"Visualization Configuration",id:"visualization-configuration",level:3},{value:"Table",id:"table",level:4},{value:"Map",id:"map",level:4},{value:"Heatmap",id:"heatmap",level:4},{value:"Time Series",id:"time-series",level:4},{value:"Image",id:"image",level:4},{value:"Indicator",id:"indicator",level:4},{value:"2D Correlation",id:"2d-correlation",level:4},{value:"Distribution",id:"distribution",level:4},{value:"Appearance Configuration",id:"appearance-configuration",level:3}],u={toc:c},g="wrapper";function m(e){var a=e.components,t=(0,i.Z)(e,n);return(0,o.kt)(g,(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The data explorer can be used to visualize and explore data streams that are persisted by using the ",(0,o.kt)("strong",{parentName:"p"},"Data Lake")," sink."),(0,o.kt)("img",{className:"docs-image",src:"/img/03_use-data-explorer/01_data-explorer-overview.png",alt:"StreamPipes Data Explorer Overview"}),(0,o.kt)("p",null,"It provides a canvas (i.e. a data view) where various visualizations from multiple pipelines can be placed. For each data view, you can set a date and time range for the configured visualizations."),(0,o.kt)("h2",{id:"using-the-data-explorer"},"Using the data explorer"),(0,o.kt)("h3",{id:"get-the-data"},"Get the data"),(0,o.kt)("p",null,"In the data explorer, any pipeline that uses the so-called ",(0,o.kt)("strong",{parentName:"p"},"Data Lake")," sink can be explored in the data explorer. Switch to the pipeline editor and add the data lake sink to a data processor or stream.\nThe sink requires an index name as a configuration parameter, which is used as an identifier in the data explorer."),(0,o.kt)("h3",{id:"data-views--widgets"},"Data Views & Widgets"),(0,o.kt)("p",null,"After your data is stored in the data lake, you can switch over to the data-explorer tab to create a novel data view and the widgets of your choice. In StreamPipes, a data view organizes a set of related widgets (i.e. data visualizations or plots) and gets assigned a single date and time range. The standard date and time range consists of the last 15 minutes of the current date and time. You can select predefined ranges (e.g. day or month) or configure the exact date and time range you want to explore."),(0,o.kt)("img",{className:"docs-image",src:"/img/03_use-data-explorer/02_data-explorer-overview-2.png",alt:"StreamPipes Data Explorer Component"}),(0,o.kt)("p",null,"First create and name your data view and select the edit icon to proceed. In your data view, you can now add a new widget congiguration (plus icon) to configure and create your first widget. The widget configuration consists of (i) data, where the individual data sources in the data lake are selected, the properties for the widget are chosen and filters on the data sources are defined and applied, (ii) visualization, where the type of widget is chosen and the respective configuration for the widget type is done and (iii) appearance, where general style configurations for the widget (such as background color) can be performed. "),(0,o.kt)("h3",{id:"data-configuration"},"Data Configuration"),(0,o.kt)("p",null,"The data configuration is the first step to define your widget. You can add several data sources (i.e. data sinks) and need to configure each added data source individually. This gives you sufficient freedom to combine the needed information, potentially consisting of different data resolutions, filters or types of information."),(0,o.kt)("img",{className:"docs-image",src:"/img/03_use-data-explorer/03_data-explorer-data.png",alt:"StreamPipes Data Explorer Data Configuration"}),(0,o.kt)("p",null,"After selecting the initial data source, you can choose if the underlying data query is to be performed raw, aggregated or single. Raw queries refer to using the data as-is, where you can define a limit on the number of events to guarantee performant usage in the application. In aggregated mode, you can choose among predefined aggregation granularites (e.g. day, minute, second). "),(0,o.kt)("p",null,"In the next step, you can choose the fields (i.e. properties of your data source) you are interested in exploring. If you selected aggregation or single mode, you can also modify the type of aggregation to be performed on the selected property."),(0,o.kt)("p",null,"You can also filter your data source by adding conjunctive conditions."),(0,o.kt)("h3",{id:"visualization-configuration"},"Visualization Configuration"),(0,o.kt)("p",null,"The visualization configuration is dependent on the visulization type, which needs to be selected first. The data-explorer currently supports the following types:"),(0,o.kt)("h4",{id:"table"},"Table"),(0,o.kt)("p",null,"The table view formats the selected properties in table format. "),(0,o.kt)("img",{className:"docs-image",src:"/img/03_use-data-explorer/04_data-explorer-table.png",alt:"StreamPipes Data Explorer Table"}),(0,o.kt)("h4",{id:"map"},"Map"),(0,o.kt)("p",null,"The map allows to visualize and explore coordinates on the world map. The configuration requires to choose the property which comprises the coordinates, allows to choose the marker style, a zoom level as well as the tooltip content."),(0,o.kt)("img",{className:"docs-image",src:"/img/03_use-data-explorer/05_data-explorer-map.png",alt:"StreamPipes Data Explorer Map"}),(0,o.kt)("h4",{id:"heatmap"},"Heatmap"),(0,o.kt)("p",null,"The heatmap widget visualizes data in terms of the available intensity, where higher values are interpreted as being more intense. You only need to select the property which you want to visualize. Note that it might be interesting to aggregate the data in the data configuration to get more insights in your heatmap."),(0,o.kt)("img",{className:"docs-image",src:"/img/03_use-data-explorer/06_data-explorer-heatmap.png",alt:"StreamPipes Data Explorer Heatmap"}),(0,o.kt)("h4",{id:"time-series"},"Time Series"),(0,o.kt)("p",null,"The time series widget allows you to do exploration and analysis for your numerical and boolean data properties. You can easily visualize your data properties in various styles (i.e. scatter, line, scattered line, bar or symbol) and colors, and configure a second y-axis for better interpretation of varying property ranges."),(0,o.kt)("img",{className:"docs-image",src:"/img/03_use-data-explorer/07_data-explorer-timeseries-1.png",alt:"StreamPipes Data Explorer Time Series 1"}),(0,o.kt)("img",{className:"docs-image",src:"/img/03_use-data-explorer/08_data-explorer-timeseries-2.png",alt:"StreamPipes Data Explorer Time Series 2"}),(0,o.kt)("img",{className:"docs-image",src:"/img/03_use-data-explorer/09_data-explorer-timeseries-3.png",alt:"StreamPipes Data Explorer Time Series 3"}),(0,o.kt)("h4",{id:"image"},"Image"),(0,o.kt)("p",null,"The image widget enables to integrate and visualize your image data."),(0,o.kt)("h4",{id:"indicator"},"Indicator"),(0,o.kt)("p",null,"The indiator widget lets you visualize a single numerical value as well as (optionally) the delta to another indicator. You only need to configure the respective properties."),(0,o.kt)("img",{className:"docs-image",src:"/img/03_use-data-explorer/11_data-explorer-indicator.png",alt:"StreamPipes Data Explorer Indicator"}),(0,o.kt)("h4",{id:"2d-correlation"},"2D Correlation"),(0,o.kt)("p",null,"The correlation plot currently supports analyzing the relationship of two properties. Once selected, you can choose between a scatter view of the plotted data points or directly extract correlations in a density chart."),(0,o.kt)("img",{className:"docs-image",src:"/img/03_use-data-explorer/12_data-explorer-correlation-1.png",alt:"StreamPipes Data Explorer Correlation 1"}),(0,o.kt)("img",{className:"docs-image",src:"/img/03_use-data-explorer/13_data-explorer-correlation-2.png",alt:"StreamPipes Data Explorer Correlation 2"}),(0,o.kt)("h4",{id:"distribution"},"Distribution"),(0,o.kt)("p",null,"In the distribution widget, you can quickly get an overview of your data range and common data values. You can either choose a histrogram view, where a bar chart is used to show data the frequency of automatically extracted data ranges or a pie view, where you can also select the granularity of how your data is clustered in terms of frequency."),(0,o.kt)("img",{className:"docs-image",src:"/img/03_use-data-explorer/14_data-explorer-distribution-1.png",alt:"StreamPipes Data Explorer Distribution 1"}),(0,o.kt)("img",{className:"docs-image",src:"/img/03_use-data-explorer/15_data-explorer-distribution-2.png",alt:"StreamPipes Data Explorer Distribution 2"}),(0,o.kt)("h3",{id:"appearance-configuration"},"Appearance Configuration"),(0,o.kt)("p",null,"Finally, you can change the title of your created widget as well as background and text colors in the appearance configuration. "),(0,o.kt)("img",{className:"docs-image",src:"/img/03_use-data-explorer/16_data-explorer-appearance.png",alt:"StreamPipes Data Explorer Appearance"}))}m.isMDXComponent=!0}}]);