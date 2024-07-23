"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[8151],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>h});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),p=n,h=u["".concat(l,".").concat(p)]||u[p]||v[p]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=r(8168),n=(r(6540),r(5680));const o={title:"Validator Overview",order:1},i=void 0,s={unversionedId:"validators/overview",id:"version-v19.0.0-rc0/validators/overview",title:"Validator Overview",description:"Introduction",source:"@site/versioned_docs/version-v19.0.0-rc0/validators/overview.md",sourceDirName:"validators",slug:"/validators/overview",permalink:"/v19.0.0-rc0/validators/overview",draft:!1,tags:[],version:"v19.0.0-rc0",frontMatter:{title:"Validator Overview",order:1},sidebar:"tutorialSidebar",previous:{title:"Setting up Tendermint KMS + Ledger",permalink:"/v19.0.0-rc0/validators/kms/kms_ledger"},next:{title:"Validator Security",permalink:"/v19.0.0-rc0/validators/security"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Create a Validator Website",id:"create-a-validator-website",level:2},{value:"Seek Legal Advice",id:"seek-legal-advice",level:2},{value:"Community",id:"community",level:2}],c={toc:d},u="wrapper";function v(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"The Cosmos Hub is based on ",(0,n.yg)("a",{parentName:"p",href:"https://docs.cometbft.com/v0.37/introduction/what-is-cometbft"},"CometBFT")," that relies on a set of validators that are responsible for committing new blocks in the blockchain. These validators participate in the consensus protocol by broadcasting votes that contain cryptographic signatures signed by each validator's private key."),(0,n.yg)("p",null,"Validator candidates can bond their own ATOM and have ATOM ",(0,n.yg)("a",{parentName:"p",href:"/v19.0.0-rc0/delegators/delegator-guide-cli"},'"delegated"'),", or staked, to them by token holders. The Cosmos Hub has 180 active validators, but over time the number of validators can be changed through governance (",(0,n.yg)("inlineCode",{parentName:"p"},"MaxValidators")," parameter). Validator voting power is determined by the total number of ATOM tokens delegated to them. Validators that do not have enough voting power to be in the top 180 are considered inactive. Inactive validators can become active if their staked amount increases so that they fall into the top 180 validators."),(0,n.yg)("p",null,"Validators and their delegators earn ATOM as block provisions and tokens as transaction fees through execution of the Tendermint consensus protocol. Note that validators can set a commission percentage on the fees their delegators receive as additional incentive. You can find an overview of all current validators and their voting power on ",(0,n.yg)("a",{parentName:"p",href:"https://www.mintscan.io/cosmos/validators"},"Mintscan"),"."),(0,n.yg)("p",null,"If validators double sign or are offline for an ",(0,n.yg)("a",{parentName:"p",href:"/v19.0.0-rc0/validators/validator-faq#what-are-the-slashing-conditions"},"extended period"),", their staked ATOM (including ATOM of users that delegated to them) can be slashed. The penalty depends on the severity of the violation."),(0,n.yg)("h2",{id:"hardware"},"Hardware"),(0,n.yg)("p",null,"For validator key management, validators must set up a physical operation that is secured with restricted access. A good starting place, for example, would be co-locating in secure data centers."),(0,n.yg)("p",null,"Validators are expected to equip their datacenter location with redundant power, connectivity, and storage backups. Expect to have several redundant networking boxes for fiber, firewall, and switching and then small servers with redundant hard drive and failover."),(0,n.yg)("p",null,"You can find the minimum hardware requirements on the instructions for ",(0,n.yg)("a",{parentName:"p",href:"/v19.0.0-rc0/hub-tutorials/join-mainnet"},"joining the Cosmos Hub mainnet"),". As the network grows, bandwidth, CPU, and memory requirements rise. Large hard drives are recommended for storing years of blockchain history, as well as significant RAM to process the increasing amount of transactions."),(0,n.yg)("h2",{id:"create-a-validator-website"},"Create a Validator Website"),(0,n.yg)("p",null,"To get started as a validator, create your dedicated validator website and signal your intention to become a validator in the ",(0,n.yg)("a",{parentName:"p",href:"https://discord.gg/interchain"},"Interchain Discord"),". Posting your validator website is essential because delegators want to have information about the entity they are delegating their ATOM to."),(0,n.yg)("h2",{id:"seek-legal-advice"},"Seek Legal Advice"),(0,n.yg)("p",null,"As always, do your own research and seek legal advice if you intend to run a validator node."),(0,n.yg)("h2",{id:"community"},"Community"),(0,n.yg)("p",null,"Discuss the finer details of being a validator on our community Discord and sign up for the Cosmos newsletter to get regular updates:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://discord.gg/interchain"},"Discord")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://cosmos.network/updates/signup/"},"Newsletter"))))}v.isMDXComponent=!0}}]);