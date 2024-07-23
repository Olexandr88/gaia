"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[1741],{5680:(e,t,o)=>{o.d(t,{xA:()=>m,yg:()=>d});var a=o(6540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(o),h=n,d=c["".concat(l,".").concat(h)]||c[h]||u[h]||s;return o?a.createElement(d,r(r({ref:t},m),{},{components:o})):a.createElement(d,r({ref:t},m))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,r=new Array(s);r[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,r[1]=i;for(var p=2;p<s;p++)r[p]=o[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},1484:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=o(8168),n=(o(6540),o(5680));const s={title:"Formatting a Proposal",order:4},r=void 0,i={unversionedId:"governance/formatting",id:"version-v19.0.0-rc0/governance/formatting",title:"Formatting a Proposal",description:"Many proposals allow for long form text to be included, usually under the key description. These provide the opportunity to include markdown if formatted correctly, as well as line breaks with \\n.",source:"@site/versioned_docs/version-v19.0.0-rc0/governance/formatting.md",sourceDirName:"governance",slug:"/governance/formatting",permalink:"/v19.0.0-rc0/governance/formatting",draft:!1,tags:[],version:"v19.0.0-rc0",frontMatter:{title:"Formatting a Proposal",order:4},sidebar:"tutorialSidebar",previous:{title:"Off-Chain Proposal Process",permalink:"/v19.0.0-rc0/governance/best-practices"},next:{title:"On-Chain Proposal Process",permalink:"/v19.0.0-rc0/governance/process"}},l={},p=[{value:"Text",id:"text",level:2},{value:"Real example",id:"real-example",level:3},{value:"Community Pool Spend",id:"community-pool-spend",level:2},{value:"Real example",id:"real-example-1",level:3},{value:"Legacy Param Change",id:"legacy-param-change",level:2},{value:"Real example",id:"real-example-2",level:3}],m={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,n.yg)(c,(0,a.A)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Many proposals allow for long form text to be included, usually under the key ",(0,n.yg)("inlineCode",{parentName:"p"},"description"),". These provide the opportunity to include ",(0,n.yg)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"},"markdown")," if formatted correctly, as well as line breaks with ",(0,n.yg)("inlineCode",{parentName:"p"},"\\n"),". "),(0,n.yg)("p",null,"Beware, however, that if you are using the CLI to create a proposal, and setting ",(0,n.yg)("inlineCode",{parentName:"p"},"description")," using a flag, the text will be ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Escape_sequences_in_C"},"escaped")," which may have undesired effects. "),(0,n.yg)("p",null,"Formatting a proposal can be a trial-and-error process, which is why first submitting to the ",(0,n.yg)("a",{parentName:"p",href:"/v19.0.0-rc0/governance/submitting#submitting-your-proposal-to-the-testnet"},"testnet")," is recommended. "),(0,n.yg)("p",null,"The examples shown below are of the text in a ",(0,n.yg)("inlineCode",{parentName:"p"},"json")," file packaged into a ",(0,n.yg)("inlineCode",{parentName:"p"},"submit-proposal")," transaction sent on-chain. More details about how to submit a proposal are in the ",(0,n.yg)("a",{parentName:"p",href:"/v19.0.0-rc0/governance/submitting"},"Submitting a Governance Proposal")," section, but for now just be aware that the examples are the contents of a file separate from the transaction. As a general rule, any flags specific to a proposal (e.g., Title, description, deposit, parameters, recipient) can be placed in a ",(0,n.yg)("inlineCode",{parentName:"p"},"json")," file, while flags general to a transaction of any kind (e.g., chain-id, node-id, gas, fees) can remain in the CLI."),(0,n.yg)("h2",{id:"text"},"Text"),(0,n.yg)("p",null,"Text proposals are used by delegators to agree to a certain strategy, plan, commitment, future upgrade, or any other statement in the form of text. Aside from having a record of the proposal outcome on the Cosmos Hub chain, a text proposal has no direct effect on the change Cosmos Hub."),(0,n.yg)("p",null,"There are four components:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Title")," - the distinguishing name of the proposal, typically the way the that explorers list proposals"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Summary")," - the body of the proposal that further describes what is being proposed and details surrounding the proposal"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Deposit"),' - the amount that will be contributed to the deposit (in micro-ATOMs "uatom") from the account submitting the proposal'),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Metadata")," - usually a link to an off-chain resource")),(0,n.yg)("h3",{id:"real-example"},"Real example"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.mintscan.io/cosmos/proposals/12"},"Proposal 12")," asked if the Cosmos Hub community of validators charging 0% commission was harmful to the success of the Cosmos Hub."),(0,n.yg)("p",null,"You can use ",(0,n.yg)("inlineCode",{parentName:"p"},"gaiad tx gov draft-proposal")," and choose ",(0,n.yg)("inlineCode",{parentName:"p"},"text")," to create the proposal file."),(0,n.yg)("p",null,"You must submit the proposal using ",(0,n.yg)("inlineCode",{parentName:"p"},"gaiad tx gov submit-proposal <path_to_text_proposal.json>"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Are Validators Charging 0% Commission Harmful to the Success of the Cosmos Hub?",\n  "summary": "This governance proposal is intended to act purely as a signalling proposal. Throughout this history of the Cosmos Hub, there has been much debate about the impact that validators charging 0% commission has on the Cosmos Hub, particularly with respect to the decentralization of the Cosmos Hub and the sustainability for validator operations. Discussion around this topic has taken place in many places including numerous threads on the Cosmos Forum, public Telegram channels, and in-person meetups. Because this has been one of the primary discussion points in off-chain Cosmos governance discussions, we believe it is important to get a signal on the matter from the on-chain governance process of the Cosmos Hub. There have been past discussions on the Cosmos Forum about placing an in-protocol restriction on validators from charging 0% commission. https://forum.cosmos.network/t/governance-limit-validators-from-0-commission-fee/2182 This proposal is NOT proposing a protocol-enforced minimum. It is merely a signalling proposal to query the viewpoint of the bonded Atom holders as a whole. We encourage people to discuss the question behind this governance proposal in the associated Cosmos Hub forum post here: https://forum.cosmos.network/t/proposal-are-validators-charging-0-commission-harmful-to-the-success-of-the-cosmos-hub/2505 Also, for voters who believe that 0% commission rates are harmful to the network, we encourage optionally sharing your belief on what a healthy minimum commission rate for the network using the memo field of their vote transaction on this governance proposal or linking to a longer written explanation such as a Forum or blog post. The question on this proposal is \u201cAre validators charging 0% commission harmful to the success of the Cosmos Hub?\u201d. A Yes vote is stating that they ARE harmful to the network\'s success, and a No vote is a statement that they are NOT harmful.",\n  "deposit": "100000uatom",\n  "metadata": "ipfs://CID",\n}\n')),(0,n.yg)("h2",{id:"community-pool-spend"},"Community Pool Spend"),(0,n.yg)("p",null,"There are five (5) components:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Title")," - the distinguishing name of the proposal, typically the way the that explorers list proposals"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Sumamary")," - the body of the proposal that further describes what is being proposed and details surrounding the proposal"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Recipient")," - the Cosmos Hub (bech32-based) address that will receive funding from the Community Pool"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Amount")," - the amount of funding that the recipient will receive in micro-ATOMs (uatom)"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Deposit"),' - the amount that will be contributed to the deposit (in micro-ATOMs "uatom") from the account submitting the proposal')),(0,n.yg)("p",null,"If the description says that a certain address will receive a certain number of ATOMs, it should also be programmed to do that, but it's possible that that's not the case (accidentally or otherwise). Check that the description aligns with the 'recipient' address."),(0,n.yg)("h3",{id:"real-example-1"},"Real example"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"amount")," is ",(0,n.yg)("inlineCode",{parentName:"p"},"1000000000uatom"),". 1,000,000 micro-ATOM is equal to 1 ATOM, so ",(0,n.yg)("inlineCode",{parentName:"p"},"recipient")," address ",(0,n.yg)("inlineCode",{parentName:"p"},"cosmos1xf2qwf6g6xvuttpf37xwrgp08qq984244952ze")," will receive 1000 ATOM if this proposal is passed."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},'deposit": "1000000uatom')," results in 1 ATOM being used from the proposal submitter's account."),(0,n.yg)("p",null,"You can use the ",(0,n.yg)("inlineCode",{parentName:"p"},"gaiad tx gov draft-proposal")," utility and choose ",(0,n.yg)("inlineCode",{parentName:"p"},"/cosmos.distribution.v1beta1.MsgCommunityPoolSpend")," to create a draft proposal file."),(0,n.yg)("p",null,"You must use ",(0,n.yg)("inlineCode",{parentName:"p"},"gaiad tx gov submit-proposal <path_to_proposal_file.json>")," to submit the proposal. The proposal cannot be submitted using ",(0,n.yg)("inlineCode",{parentName:"p"},"submit-legacy-proposal"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "messages":[\n    {\n    "@type": "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",\n    "authority": "cosmos10d07y265gmmuvt4z0w9aw880jnsr700j6zn9kn",\n    "recipient": "cosmos00af8sd0a9dfansdfoiasf0a9ssd9fa09i99990",\n    "amount": [{\n      "denom": "uatom",\n      "amount": "10000000000"\n    }]\n    }\n  ],\n  "deposit": "100000uatom",\n  "proposer": "cosmos12xpdapokdfpsodf32das75sokdaadapsokd1sa",\n  "metadata": "Community Pool Spend Proposal Example",\n  "title": "Activate governance discussions on the Discourse forum using community pool funds",\n  "summary": "## Summary\\nProposal to request for 1000 ATOM from the community spending pool to be sent to a multisig who will put funds towards stewardship of the Discourse forum to make it an authoritative record of governance decisions as well as a vibrant space to draft and discuss proposals.\\n## Details\\nWe are requesting 1000 ATOM from the community spending pool to activate and steward the Cosmos Hub (Discourse) forum for the next six months.\\n\\nOff-chain governance conversations are currently highly fragmented, with no shared public venue for discussing proposals as they proceed through the process of being drafted and voted on. It means there is no record of discussion that voters can confidently point to for context, potentially leading to governance decisions becoming delegitimized by stakeholders.\\n\\nThe requested amount will be sent to a multisig comprising individuals (members listed below) who can ensure that the tokens are spent judiciously. We believe stewardship of the forum requires:\\n\\n* **Moderation**: Format, edit, and categorize posts; Standardize titles and tags; Monitor and approve new posts; Archive posts.\\n* **Facilitation**: Ask clarifying questions in post threads; Summarize discussions; Provide historical precedence to discussions.\\n* **Engagement**: Circulate important posts on other social channels to increase community participation; Solicit input from key stakeholders.\\n* **Guidance**: Orient and assist newcomers; Guide proposers through governance process; Answer questions regarding the forum or Cosmos ecosystem.\\nThe work to steward the forum will be carried out by members of [Hypha Worker Co-op](https://hypha.coop/) and individuals selected from the community to carry out scoped tasks in exchange for ATOM from this budget.\\n## Multisig Members\\n* Hypha: Mai Ishikawa Sutton (Hypha Co-op)\\n* Validator: Daniel Hwang (Stakefish)\\n* Cosmos Hub developer: Lauren Gallinaro (Interchain Berlin)\\n\\nWe feel the membership of the multisig should be rotated following the six-month pilot period to preserve insight from the distinct specializations (i.e., Cosmos Hub validators and developers).\\n## Timeline and Deliverables\\nWe estimate the total work to take 250-300 hours over six months where we hope to produce:\\n* **Moving summaries:** Provide succinct summaries of the proposals and include all publicly stated reasons why various entities are choosing to vote for/against a given proposal. These summaries will be written objectively, not siding with any one entity.\\n* **Validator platforms:** Create a section of the Forum where we collate all validators\' visions for Cosmos Hub governance to allow them to state their positions publicly. We will work with the smaller validators to ensure they are equally represented.\\n* **Regular check-ins with the Cosmonaut DAO:** Collaborate with the future Cosmonaut DAO to ensure maximal accessibility and engagement. Community management is a critical, complementary aspect of increasing participation in governance.\\n* **Announcement channel:** Create a read-only announcement channel in the Cosmos Community Discord, so that new proposals and major discussions can be easily followed.\\n* **Tooling friendly posts:** Tag and categorize posts so that they can be easily ingested into existing tooling that validators have setup.\\n* **Neutral moderation framework:** Document and follow transparent standards for how the forum is moderated.\\n\\nAt the end of the period, we will produce a report reflecting on our successes and failures, and recommendations for how the work of maintaining a governance venue can be continuously sustained (e.g., through a DAO). We see this initiative as a process of discovery, where we are learning by doing.\\n\\nFor more context, you can read through the discussions on this [proposal on the Discourse forum](https://forum.cosmos.network/t/proposal-draft-activate-governance-discussions-on-the-discourse-forum-using-community-pool-funds/5833).\\n\\n## Governance Votes\\nThe following items summarize the voting options and what it means for this proposal:\\n**YES** - You approve this community spend proposal to deposit 1000 ATOM to a multisig that will spend them to improve governance discussions in the Discourse forum.\\n**NO** - You disapprove of this community spend proposal in its current form (please indicate why in the Cosmos Forum).\\n**NO WITH VETO** - You are strongly opposed to this change and will exit the network if passed.\\n**ABSTAIN** - You are impartial to the outcome of the proposal.\\n## Recipient\\ncosmos1xf2qwf6g6xvuttpf37xwrgp08qq984244952ze\\n## Amount\\n1000 ATOM\\n\\n***Disclosure**: Hypha has an existing contract with the Interchain Foundation focused on the testnet program and improving documentation. This work is beyond the scope of that contract and is focused on engaging the community in governance.*\\n\\nIPFS pin of proposal on-forum: (https://ipfs.io/ipfs/Qmaq7ftqWccgYCo8U1KZfEnjvjUDzSEGpMxcRy61u8gf2Y)",\n}\n')),(0,n.yg)("h2",{id:"legacy-param-change"},"Legacy Param Change"),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Legacy parameter change proposals are not available for cosmos-sdk modules."),(0,n.yg)("p",{parentName:"admonition"},"You can update these CosmosHub modules using ",(0,n.yg)("inlineCode",{parentName:"p"},"submit-legacy-proposal"),":"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"ibc (transfer, interchain-accounts)"),(0,n.yg)("li",{parentName:"ul"},"provider"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Note:")," The chages outlined here must be submitted using ",(0,n.yg)("inlineCode",{parentName:"p"},"submit-legacy-proposal"),"."),(0,n.yg)("p",null,"For ",(0,n.yg)("inlineCode",{parentName:"p"},"param-change")," proposals, there are arguably seven (7) components, though three are nested beneath 'Changes':"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Title")," - the distinguishing name of the proposal, typically the way the that explorers list proposals"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Description")," - the body of the proposal that further describes what is being proposed and details surrounding the proposal"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Changes")," - a component containing "),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Subspace")," - the Cosmos Hub module with the parameter that is being changed"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Key")," - the parameter that will be changed"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Value")," - the value of the parameter that will be changed by the governance mechanism"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Deposit"),' - the amount that will be contributed to the deposit (in micro-ATOMs "uatom") from the account submitting the proposal')),(0,n.yg)("p",null,"The components must be presented as shown in the example."),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"To update any of the cosmos-sdk modules you must use ",(0,n.yg)("inlineCode",{parentName:"p"},"gaiad tx gov submit-proposal")," with a correctly formatted proposal file containing a ",(0,n.yg)("inlineCode",{parentName:"p"},"MsgUpdateParams"),"."),(0,n.yg)("p",{parentName:"admonition"},"When using ",(0,n.yg)("inlineCode",{parentName:"p"},"MsgUpdateParams")," please note that ",(0,n.yg)("strong",{parentName:"p"},"all")," fields must always be specified (",(0,n.yg)("inlineCode",{parentName:"p"},"PUT")," semantics). Please be careful to not accidentally submit a proposal\nthat changes more parameters than was intended. The parameters that you do not want to change you can simply copy from existing module params.")),(0,n.yg)("h3",{id:"real-example-2"},"Real example"),(0,n.yg)("p",null,"This example is 'real', because it was put on-chain using the Theta testnet and can be seen in the block explorer ",(0,n.yg)("a",{parentName:"p",href:"https://explorer.theta-testnet.polypore.xyz/proposals/87"},"here"),"."),(0,n.yg)("p",null,"Not all explorers will show the proposed parameter changes that are coded into the proposal, so ensure that you verify that the description aligns with what the governance proposal is programmed to enact. If the description says that a certain parameter will be increased, it should also be programmed to do that, but it's possible that that's not the case (accidentally or otherwise)."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},' {\n  "title": "Doc update test: Param change for transfer/SendEnabled",\n  "description": "Testing the proposal format for enabling IBC transfers on our chain",\n  "changes": [\n    {\n      "subspace": "transfer",\n      "key": "transfer",\n      "value": true\n    }\n  ],\n  "deposit": "100000uatom"\n}\n')))}u.isMDXComponent=!0}}]);