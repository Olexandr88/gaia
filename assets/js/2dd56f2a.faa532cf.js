"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[643],{5680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>g});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(r),h=a,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(8168),a=(r(6540),r(5680));const i={},o=void 0,c={unversionedId:"architecture/adr/README",id:"version-v18.1.0/architecture/adr/README",title:"README",description:"\x3c!--",source:"@site/versioned_docs/version-v18.1.0/architecture/adr/README.md",sourceDirName:"architecture/adr",slug:"/architecture/adr/",permalink:"/v18.1.0/architecture/adr/",draft:!1,tags:[],version:"v18.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR Creation Process",permalink:"/v18.1.0/architecture/adr/PROCESS"},next:{title:"adr-001-interchain-accounts",permalink:"/v18.1.0/architecture/adr/adr-001-interchain-accounts"}},l={},s=[{value:"Rationale",id:"rationale",level:2},{value:"Creating new ADR",id:"creating-new-adr",level:2},{value:"Use RFC 2119 Keywords",id:"use-rfc-2119-keywords",level:3},{value:"ADR Table of Contents",id:"adr-table-of-contents",level:2},{value:"Accepted",id:"accepted",level:3},{value:"Proposed",id:"proposed",level:3},{value:"Draft",id:"draft",level:3},{value:"Rejected",id:"rejected",level:3},{value:"Deprecated",id:"deprecated",level:3}],d={toc:s},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"architecture-decision-records-adr"},"Architecture Decision Records (ADR)"),(0,a.yg)("p",null,"This is a location to record all high-level architecture decisions for new feature and module proposals in the Cosmos Hub."),(0,a.yg)("p",null,"An Architectural Decision (",(0,a.yg)("strong",{parentName:"p"},"AD"),") is a software design choice that addresses a functional or non-functional requirement that is architecturally significant.\nAn Architecturally Significant Requirement (",(0,a.yg)("strong",{parentName:"p"},"ASR"),") is a requirement that has a measurable effect on a software system\u2019s architecture and quality.\nAn Architectural Decision Record (",(0,a.yg)("strong",{parentName:"p"},"ADR"),") captures a single AD, such as often done when writing personal notes or meeting minutes; the collection of ADRs created and maintained in a project constitute its decision log. All these are within the topic of Architectural Knowledge Management (AKM)."),(0,a.yg)("p",null,"You can read more about the ADR concept ",(0,a.yg)("a",{parentName:"p",href:"https://adr.github.io/"},"here"),"."),(0,a.yg)("h2",{id:"rationale"},"Rationale"),(0,a.yg)("p",null,"ADRs are intended to be the primary mechanism for proposing new feature designs and new processes, for collecting community input on an issue, and for documenting the design decisions.\nAn ADR should provide:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Context on the relevant goals and the current state"),(0,a.yg)("li",{parentName:"ul"},"Proposed changes to achieve the goals"),(0,a.yg)("li",{parentName:"ul"},"Summary of pros and cons"),(0,a.yg)("li",{parentName:"ul"},"Discarded solution spaces and why they were discarded"),(0,a.yg)("li",{parentName:"ul"},"References"),(0,a.yg)("li",{parentName:"ul"},"Changelog")),(0,a.yg)("p",null,"Note the distinction between an ADR and a spec. The ADR provides the context, intuition, reasoning, and\njustification for a change in architecture, or for the architecture of something\nnew. The spec is much more compressed and streamlined summary of everything as\nit stands today."),(0,a.yg)("p",null,"If recorded decisions turn out to be lacking, convene a discussion, record the new decisions here, and then modify the code to match."),(0,a.yg)("h2",{id:"creating-new-adr"},"Creating new ADR"),(0,a.yg)("p",null,"Read about the ",(0,a.yg)("a",{parentName:"p",href:"/v18.1.0/architecture/adr/PROCESS"},"PROCESS"),"."),(0,a.yg)("h3",{id:"use-rfc-2119-keywords"},"Use RFC 2119 Keywords"),(0,a.yg)("p",null,'When writing ADRs, follow the same best practices for writing RFCs.\nWhen writing RFCs, key words are used to signify the requirements in the specification.\nThese words are often capitalized: "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL.\nThey are to be interpreted as described in ',(0,a.yg)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2119"},"RFC 2119"),"."),(0,a.yg)("h2",{id:"adr-table-of-contents"},"ADR Table of Contents"),(0,a.yg)("h3",{id:"accepted"},"Accepted"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"n/a")),(0,a.yg)("h3",{id:"proposed"},"Proposed"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/v18.1.0/architecture/adr/adr-003-ica-controller"},"ADR 003: Interchain Accounts Controller Module"))),(0,a.yg)("h3",{id:"draft"},"Draft"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"n/a")),(0,a.yg)("h3",{id:"rejected"},"Rejected"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/v18.1.0/architecture/adr/adr-001-interchain-accounts"},"ADR 001: Interchain Accounts"))),(0,a.yg)("h3",{id:"deprecated"},"Deprecated"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/v18.1.0/architecture/adr/adr-002-globalfee"},"ADR 002: Globalfee Module"))))}p.isMDXComponent=!0}}]);