"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[4596],{5680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>m});var o=t(6540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),l=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=l(e.components);return o.createElement(s.Provider,{value:r},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=l(t),u=n,m=g["".concat(s,".").concat(u)]||g[u]||y[u]||a;return t?o.createElement(m,p(p({ref:r},c),{},{components:t})):o.createElement(m,p({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[g]="string"==typeof e?e:n,p[1]=i;for(var l=2;l<a;l++)p[l]=t[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3258:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(8168),n=(t(6540),t(5680));const a={order:1,parent:{order:6}},p="Proposal Types",i={unversionedId:"governance/proposal-types/README",id:"version-v18.1.0/governance/proposal-types/README",title:"Proposal Types",description:"- Text",source:"@site/versioned_docs/version-v18.1.0/governance/proposal-types/README.md",sourceDirName:"governance/proposal-types",slug:"/governance/proposal-types/",permalink:"/v18.1.0/governance/proposal-types/",draft:!1,tags:[],version:"v18.1.0",frontMatter:{order:1,parent:{order:6}},sidebar:"tutorialSidebar",previous:{title:"Governance Overview",permalink:"/v18.1.0/governance/"},next:{title:"Community Pool Spend",permalink:"/v18.1.0/governance/proposal-types/community-pool-spend"}},s={},l=[{value:"Drafting a Proposal",id:"drafting-a-proposal",level:2}],c={toc:l},g="wrapper";function y(e){let{components:r,...t}=e;return(0,n.yg)(g,(0,o.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"proposal-types"},"Proposal Types"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/v18.1.0/governance/proposal-types/text-prop"},(0,n.yg)("strong",{parentName:"a"},"Text"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/v18.1.0/governance/proposal-types/community-pool-spend"},(0,n.yg)("strong",{parentName:"a"},"Community Pool Spend"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/v18.1.0/governance/proposal-types/param-change"},(0,n.yg)("strong",{parentName:"a"},"Parameter Change"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/v18.1.0/governance/proposal-types/software-upgrade"},(0,n.yg)("strong",{parentName:"a"},"Software Upgrade"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"IBC Client Update"))),(0,n.yg)("h2",{id:"drafting-a-proposal"},"Drafting a Proposal"),(0,n.yg)("p",null,"Drafting and submitting a proposal is a process that takes time, attention, and involves risk. The objective of this documentation is to make this process easier by preparing participants for what to pay attention to, the information that should be considered in a proposal, and how to reduce the risk of losing deposits. "),(0,n.yg)("p",null,"Ideally, a proposal should only fail to pass because voters are aware, engaged, and have made an informed decision to vote down the proposal. "),(0,n.yg)("p",null,"If you are considering drafting a proposal, you should first review the general background on drafting and submitting a proposal:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"/v18.1.0/governance/process"},"How the voting process and governance mechanism works")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"/v18.1.0/governance/best-practices"},"How to draft your proposal and engage with the Cosmos community about it")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"/v18.1.0/governance/formatting"},"How to format proposals")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"/v18.1.0/governance/submitting"},"How to submit your proposal"))),(0,n.yg)("p",null,"You should also review details specific to each kind of proposal, listed in this section."))}y.isMDXComponent=!0}}]);