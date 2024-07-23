"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[3102],{5680:(e,a,r)=>{r.d(a,{xA:()=>l,yg:()=>m});var o=r(6540);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,o,t=function(e,a){if(null==e)return{};var r,o,t={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=o.createContext({}),d=function(e){var a=o.useContext(p),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},l=function(e){var a=d(e.components);return o.createElement(p.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},g=o.forwardRef((function(e,a){var r=e.components,t=e.mdxType,n=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=d(r),g=t,m=c["".concat(p,".").concat(g)]||c[g]||u[g]||n;return r?o.createElement(m,s(s({ref:a},l),{},{components:r})):o.createElement(m,s({ref:a},l))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=r.length,s=new Array(n);s[0]=g;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[c]="string"==typeof e?e:t,s[1]=i;for(var d=2;d<n;d++)s[d]=r[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8956:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var o=r(8168),t=(r(6540),r(5680));const n={order:2,parent:{order:2}},s="Software Upgrade",i={unversionedId:"governance/proposal-types/software-upgrade",id:"version-v19.0.0-rc0/governance/proposal-types/software-upgrade",title:"Software Upgrade",description:"Software upgrade proposals are submitted to signal that a Cosmos Hub release with new features, bugfixes and various other improvements is available and ready for production deployment.",source:"@site/versioned_docs/version-v19.0.0-rc0/governance/proposal-types/software-upgrade.md",sourceDirName:"governance/proposal-types",slug:"/governance/proposal-types/software-upgrade",permalink:"/v19.0.0-rc0/governance/proposal-types/software-upgrade",draft:!1,tags:[],version:"v19.0.0-rc0",frontMatter:{order:2,parent:{order:2}},sidebar:"tutorialSidebar",previous:{title:"Parameter Changes",permalink:"/v19.0.0-rc0/governance/proposal-types/param-change"},next:{title:"Text (Signaling)",permalink:"/v19.0.0-rc0/governance/proposal-types/text-prop"}},p={},d=[{value:"Procedure",id:"procedure",level:2},{value:"Using x/upgrading",id:"using-xupgrading",level:2},{value:"Additional information",id:"additional-information",level:2}],l={toc:d},c="wrapper";function u(e){let{components:a,...r}=e;return(0,t.yg)(c,(0,o.A)({},l,r,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"software-upgrade"},"Software Upgrade"),(0,t.yg)("p",null,"Software upgrade proposals are submitted to signal that a Cosmos Hub release with new features, bugfixes and various other improvements is available and ready for production deployment."),(0,t.yg)("p",null,"Software upgrade proposals should be submitted by the development teams tasked with stewarding the Cosmos Hub development."),(0,t.yg)("h2",{id:"procedure"},"Procedure"),(0,t.yg)("p",null,"Use ",(0,t.yg)("inlineCode",{parentName:"p"},"draft-proposal")," command to create a draft proposal and populate it with required information."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"\u2717 gaiad tx gov draft-proposal\nUse the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190\n? Select proposal type:\n    text\n    community-pool-spend\n  \u25b8 software-upgrade # choose this\n    cancel-software-upgrade\n    other\n\n# populate all steps (displaying all for demonstration purposes)\nEnter proposal title: Upgrade v15\nEnter proposal authors: Stewards\nEnter proposal summary: Upgrade to v15\nEnter proposal details: <v15 upgrade changelog details>\nEnter proposal proposal forum url: /\nEnter proposal vote option context: Vote YES to support running this binary on the Cosmos Hub mainnet.\nEnter proposal deposit: 100001uatom\nEnter msg authority: cosmos10d07y265gmmuvt4z0w9aw880jnsr700j6zn9kn\n")),(0,t.yg)("p",null,"In your ",(0,t.yg)("inlineCode",{parentName:"p"},"draft_proposal.json")," populate the ",(0,t.yg)("inlineCode",{parentName:"p"},"height")," with your desired upgrade height and populate the ",(0,t.yg)("inlineCode",{parentName:"p"},"info")," field with additional information (must be a valid JSON string):"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "binaries": {\n    "darwin/amd64": "https://github.com/cosmos/gaia/releases/download/v15.0.0/gaiad-v15.0.0-darwin-amd64?checksum=sha256:7157f03fbad4f53a4c73cde4e75454f4a40a9b09619d3295232341fec99ad138",\n    "darwin/arm64": "https://github.com/cosmos/gaia/releases/download/v15.0.0/gaiad-v15.0.0-darwin-arm64?checksum=sha256:09e2420151dd22920304dafea47af4aa5ff4ab0ddbe056bb91797e33ff6df274",\n    "linux/amd64": "https://github.com/cosmos/gaia/releases/download/v15.0.0/gaiad-v15.0.0-linux-amd64?checksum=sha256:236b5b83a7674e0e63ba286739c4670d15d7d6b3dcd810031ff83bdec2c0c2af",\n    "linux/arm64": "https://github.com/cosmos/gaia/releases/download/v15.0.0/gaiad-v15.0.0-linux-arm64?checksum=sha256:b055fb7011e99d16a3ccae06443b0dcfd745b36480af6b3e569e88c94f3134d3",\n    "windows/armd64": "https://github.com/cosmos/gaia/releases/download/v15.0.0/gaiad-v15.0.0-windows-amd64.exe?checksum=sha256:f0224ba914cad46dc27d6a9facd8179aec8a70727f0b1e509f0c6171c97ccf76",\n    "windows/arm64": "https://github.com/cosmos/gaia/releases/download/v15.0.0/gaiad-v15.0.0-windows-arm64.exe?checksum=sha256:cbbce5933d501b4d54dcced9b097c052bffdef3fa8e1dfd75f29b34c3ee7de86"\n  }\n}\n')),(0,t.yg)("p",null,"Upload your ",(0,t.yg)("inlineCode",{parentName:"p"},"draft_metadata.json")," to a distribution platform of your choice. ",(0,t.yg)("inlineCode",{parentName:"p"},"draft_proposal.json")," is used to submit a governance proposal using ",(0,t.yg)("inlineCode",{parentName:"p"},"submit-proposal"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"gaiad tx gov submit-proposal <path_to_proposal.json>\n   --from <submitter address> \\\n   --chain-id cosmoshub-4 \\\n   --gas <max gas allocated> \\\n   --fees <fees allocated> \\\n   --node <node address> \\\n")),(0,t.yg)("h2",{id:"using-xupgrading"},"Using x/upgrading"),(0,t.yg)("p",null,"Software upgrade proposals can be submitted using the ",(0,t.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.47/build/modules/upgrade#transactions"},"x/upgrade module"),". The end effect will be the same since the ",(0,t.yg)("inlineCode",{parentName:"p"},"x/gov")," module routes the message to ",(0,t.yg)("inlineCode",{parentName:"p"},"x/upgrade")," module."),(0,t.yg)("h2",{id:"additional-information"},"Additional information"),(0,t.yg)("p",null,"Additional instructions with debugging information is available on the ",(0,t.yg)("a",{parentName:"p",href:"/v19.0.0-rc0/governance/submitting"},"submitting")," page."))}u.isMDXComponent=!0}}]);