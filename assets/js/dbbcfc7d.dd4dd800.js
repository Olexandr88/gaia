"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[5896],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9679:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(8168),r=(a(6540),a(5680));const i={},l="ADR Creation Process",o={unversionedId:"architecture/adr/PROCESS",id:"version-v18.1.0/architecture/adr/PROCESS",title:"ADR Creation Process",description:"1. Copy the adr-template.md file. Use the following filename pattern: adr-next_number-title.md",source:"@site/versioned_docs/version-v18.1.0/architecture/adr/PROCESS.md",sourceDirName:"architecture/adr",slug:"/architecture/adr/PROCESS",permalink:"/v18.1.0/architecture/adr/PROCESS",draft:!1,tags:[],version:"v18.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture Decision Records (ADR)",permalink:"/v18.1.0/architecture/"},next:{title:"README",permalink:"/v18.1.0/architecture/adr/"}},s={},u=[{value:"ADR life cycle",id:"adr-life-cycle",level:2},{value:"ADR status",id:"adr-status",level:3},{value:"Consensus Status",id:"consensus-status",level:4},{value:"Language used in ADR",id:"language-used-in-adr",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"adr-creation-process"},"ADR Creation Process"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Copy the ",(0,r.yg)("inlineCode",{parentName:"li"},"adr-template.md")," file. Use the following filename pattern: ",(0,r.yg)("inlineCode",{parentName:"li"},"adr-next_number-title.md")),(0,r.yg)("li",{parentName:"ol"},"Create a draft Pull Request and solicit input from the stewarding team, if you want to get an early feedback."),(0,r.yg)("li",{parentName:"ol"},"Make sure that the problem, the context and a recommended solution is clear and well documented. Be sure to document alternate solution spaces and give reasons why they have been discarded."),(0,r.yg)("li",{parentName:"ol"},"Add an entry to a list in the README file ",(0,r.yg)("a",{parentName:"li",href:"/v18.1.0/architecture/adr/#adr-table-of-contents"},"Table of Contents"),"."),(0,r.yg)("li",{parentName:"ol"},"Create a Pull Request to propose a new ADR.")),(0,r.yg)("h2",{id:"adr-life-cycle"},"ADR life cycle"),(0,r.yg)("p",null,"ADR creation is an ",(0,r.yg)("strong",{parentName:"p"},"iterative")," process. Instead of trying to solve all decisions in a single ADR pull request, we MUST firstly understand the problem and collect feedback through a GitHub Issue."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Every proposal SHOULD start with a new GitHub Issue or be a result of existing Issues. The Issue should contain just a brief proposal summary.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Once the motivation is validated, a GitHub Pull Request (PR) is created with a new document based on the ",(0,r.yg)("inlineCode",{parentName:"p"},"adr-template.md"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"An ADR doesn't have to arrive to ",(0,r.yg)("inlineCode",{parentName:"p"},"main")," with an ",(0,r.yg)("em",{parentName:"p"},"accepted")," status in a single PR. If the motivation is clear and the solution is sound, we SHOULD be able to merge it and keep a ",(0,r.yg)("em",{parentName:"p"},"proposed")," status. It's preferable to have an iterative approach rather than long, not merged Pull Requests.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If a ",(0,r.yg)("em",{parentName:"p"},"proposed")," ADR is merged, then it should clearly document outstanding issues either in ADR document notes or in a GitHub Issue.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The PR SHOULD always be merged. In the case of a faulty ADR, we still prefer to merge it with a ",(0,r.yg)("em",{parentName:"p"},"rejected")," status. The only time the ADR SHOULD NOT be merged is if the author abandons it.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Merged ADRs SHOULD NOT be deleted."))),(0,r.yg)("h3",{id:"adr-status"},"ADR status"),(0,r.yg)("p",null,"Status has two components:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"{CONSENSUS STATUS} {IMPLEMENTATION STATUS}\n")),(0,r.yg)("p",null,"IMPLEMENTATION STATUS is either ",(0,r.yg)("inlineCode",{parentName:"p"},"Implemented")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Not Implemented"),"."),(0,r.yg)("h4",{id:"consensus-status"},"Consensus Status"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-mermaid"},"flowchart TD\n    A[DRAFT] --\x3e B[PROPOSED]\n    B --\x3e C[LAST CALL YYYY-MM-DD]\n    B --\x3e D[ABANDONED]\n    C --\x3e E[ACCEPTED or REJECTED]\n    E --\x3e F[SUPERSEDED by ADR-xxx]\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"DRAFT"),": ","[optional]"," an ADR which is work in progress, not being ready for a general review. This is to present an early work and get an early feedback in a Draft Pull Request form."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"PROPOSED"),": an ADR covering a full solution architecture and still in the review - project stakeholders haven't reached an agreement yet."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"LAST CALL <date for the last call>"),": ","[optional]"," clear notify that we are close to accept updates. Changing a status to ",(0,r.yg)("inlineCode",{parentName:"li"},"LAST CALL")," means that social consensus (of Cosmos SDK maintainers) has been reached and we still want to give it a time to let the community react or analyze."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ACCEPTED"),": ADR which will represent a currently implemented or to be implemented architecture design."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"REJECTED"),": ADR can go from PROPOSED or ACCEPTED to rejected if the consensus among project stakeholders will decide so."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"SUPERSEEDED by ADR-xxx"),": ADR which has been superseded by a new ADR."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ABANDONED"),": the ADR is no longer pursued by the original authors.")),(0,r.yg)("h2",{id:"language-used-in-adr"},"Language used in ADR"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The context/background should be written in the present tense."),(0,r.yg)("li",{parentName:"ul"},"Avoid using a first, personal form.")))}d.isMDXComponent=!0}}]);