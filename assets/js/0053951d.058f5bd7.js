"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[5446],{5680:(e,t,o)=>{o.d(t,{xA:()=>u,yg:()=>g});var a=o(6540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(o),c=r,g=h["".concat(l,".").concat(c)]||h[c]||d[c]||n;return o?a.createElement(g,i(i({ref:t},u),{},{components:o})):a.createElement(g,i({ref:t},u))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<n;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},5422:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=o(8168),r=(o(6540),o(5680));const n={title:"Off-Chain Proposal Process",order:3},i=void 0,s={unversionedId:"governance/best-practices",id:"version-v18.1.0/governance/best-practices",title:"Off-Chain Proposal Process",description:"Once a proposal is on-chain, it cannot be changed to reflect feedback or new information. It's very important to give a proposal time off-chain to receive feedback, input, and edits before going on-chain and asking for votes.",source:"@site/versioned_docs/version-v18.1.0/governance/best-practices.md",sourceDirName:"governance",slug:"/governance/best-practices",permalink:"/v18.1.0/governance/best-practices",draft:!1,tags:[],version:"v18.1.0",frontMatter:{title:"Off-Chain Proposal Process",order:3},sidebar:"tutorialSidebar",previous:{title:"Text (Signaling)",permalink:"/v18.1.0/governance/proposal-types/text-prop"},next:{title:"Formatting a Proposal",permalink:"/v18.1.0/governance/formatting"}},l={},p=[{value:"Engage directly with the voting community and seek feedback",id:"engage-directly-with-the-voting-community-and-seek-feedback",level:2},{value:"Stage 1: Your Idea",id:"stage-1-your-idea",level:2},{value:"Not yet confident about your idea?",id:"not-yet-confident-about-your-idea",level:3},{value:"Confident with your idea?",id:"confident-with-your-idea",level:3},{value:"Are you ready to draft a governance proposal?",id:"are-you-ready-to-draft-a-governance-proposal",level:3},{value:"Stage 2: Your Draft Proposal",id:"stage-2-your-draft-proposal",level:2},{value:"Proposal Elements",id:"proposal-elements",level:3},{value:"Parameter-Change",id:"parameter-change",level:4},{value:"Community-Spend Proposal",id:"community-spend-proposal",level:4},{value:"Begin with a well-considered draft proposal",id:"begin-with-a-well-considered-draft-proposal",level:3},{value:"Engage the community with your draft proposal",id:"engage-the-community-with-your-draft-proposal",level:3},{value:"Submit your proposal to the testnet",id:"submit-your-proposal-to-the-testnet",level:3},{value:"Stage 3: Your On-Chain Proposal",id:"stage-3-your-on-chain-proposal",level:2},{value:"The Deposit Period",id:"the-deposit-period",level:3},{value:"The Voting Period",id:"the-voting-period",level:3}],u={toc:p},h="wrapper";function d(e){let{components:t,...o}=e;return(0,r.yg)(h,(0,a.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Once a proposal is on-chain, it cannot be changed to reflect feedback or new information. It's very important to give a proposal time off-chain to receive feedback, input, and edits before going on-chain and asking for votes. "),(0,r.yg)("p",null,"The process of passing a proposal starts long before it goes on-chain!"),(0,r.yg)("p",null,"There are currently several types of proposals supported by the Cosmos Hub: "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("a",{parentName:"strong",href:"/v18.1.0/governance/proposal-types/text-prop"},"Text"))," - Proposal to agree to a certain strategy, plan, commitment, future upgrade or other statement. Text proposals do not directly cause any changes, but they can be used to take a record of the community's opinion or commitment to a future idea."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/v18.1.0/governance/proposal-types/community-pool-spend"},(0,r.yg)("strong",{parentName:"a"},"Community Pool Spend"))," - Proposal to spend funds from the community pool on a project."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/v18.1.0/governance/proposal-types/param-change"},(0,r.yg)("strong",{parentName:"a"},"Parameter Change"))," - Proposal to change a core on-chain parameter."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Software Upgrade")," - Proposal to upgrade the chain version."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"IBC Client Update")," - Proposal to update an IBC client.")),(0,r.yg)("p",null,"You'll first want to determine which kind of proposal you are making. Be sure to review all details of your specific proposal type. "),(0,r.yg)("h2",{id:"engage-directly-with-the-voting-community-and-seek-feedback"},"Engage directly with the voting community and seek feedback"),(0,r.yg)("p",null,"Engagement is likely to be critical to the success of a proposal. The degree to which you engage with the Cosmos Hub community should be relative to the potential impact that your proposal may have on the stakeholders. This guide does not cover all ways of engaging but here are some suggestions: "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Post your idea to the ",(0,r.yg)("a",{parentName:"p",href:"https://forum.cosmos.network/"},"Cosmos Hub Forum"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Mention the idea in a community call (often hosted on ",(0,r.yg)("a",{parentName:"p",href:"https://twitter.com/CosmosHub"},"Twitter"),")")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Host an AMA on ",(0,r.yg)("a",{parentName:"p",href:"https://www.reddit.com/r/cosmosnetwork"},"Reddit")," "),(0,r.yg)("p",{parentName:"li"},"We encourage you to experiment and use your strengths to introduce proposal ideas and gather feedback."))),(0,r.yg)("p",null,"There are many different ways to engage. One strategy involves a few stages of engagement before and after submitting a proposal on chain. "),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Why do it in stages?")," It's a more conservative approach to save resources. The idea is to check in with key stakeholders at each stage before investing more resources into developing your proposal."),(0,r.yg)("p",null,"In the first stage of this strategy, you should engage people (ideally experts) informally about your idea. You'll want to start with the minimal, critical components (name, value to Cosmos Hub, timeline, any funding needs) and check:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Does it make sense? "),(0,r.yg)("li",{parentName:"ul"},"Are there critical flaws? "),(0,r.yg)("li",{parentName:"ul"},"How will this affect other projects or properties of the Hub? ")),(0,r.yg)("p",null,"You should be enagaging with key stakeholders (e.g., a large validator operator) with a few short sentences to measure their support. Here's an example:"),(0,r.yg)("p",null,'"We are considering a proposal for funding to work on ',(0,r.yg)("inlineCode",{parentName:"p"},"project"),". We think it will help the Hub to ",(0,r.yg)("inlineCode",{parentName:"p"},"outcome"),". Timeline is ",(0,r.yg)("inlineCode",{parentName:"p"},"x"),", and we're asking for ",(0,r.yg)("inlineCode",{parentName:"p"},"y")," amount. Do you think that this is a proposal that ",(0,r.yg)("inlineCode",{parentName:"p"},"large validator"),' may support?"'),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Why a large validator?")," They tend to be the de facto decision-makers on the Cosmos Hub, since their delegators also delegate their voting power. If you can establish a base layer of off-chain support, you can be more confident that it's worth proceeding to the next stage."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," Many validators will likely hesitate to commit support, and that's okay. It will be important to reassure these stakeholders that this isn't a binding a commitment. You're just canvasing the community to get a feel for whether it's worthwhile to proceed. It's also an opportunity to connect with new people and to answer their questions about what it is you're working on. It will be important for them to clearly understand why you think what you're proposing will be valuable to the Cosmos Hub, and if possible, why it will be valuable to them as long-term stakeholders."),(0,r.yg)("p",null,"If you're already confident about your idea, ",(0,r.yg)("a",{parentName:"p",href:"#stage-2-your-draft-proposal"},"skip to Stage 2"),"."),(0,r.yg)("h2",{id:"stage-1-your-idea"},"Stage 1: Your Idea"),(0,r.yg)("h3",{id:"not-yet-confident-about-your-idea"},"Not yet confident about your idea?"),(0,r.yg)("p",null,"Great! Governance proposals potentially impact many stakeholders. Introduce your idea with known members of the community before investing resources into drafting a proposal. Don't let negative feedback dissuade you from exploring your idea if you think that it's still important. "),(0,r.yg)("p",null,"If you know people who are very involved with the Cosmos Hub, send them a private message with a concise overview of what you think will result from your idea or proposed changes. Wait for them to ask questions before providing details. Do the same in semi-private channels where people tend to be respectful (and hopefully supportive). "),(0,r.yg)("h3",{id:"confident-with-your-idea"},"Confident with your idea?"),(0,r.yg)("p",null,"Great! However, remember that governance proposals potentially impact many stakeholders, which can happen in unexpected ways. Introduce your idea with members of the community before investing resources into drafting a proposal. At this point you should seek out and carefully consider critical feedback in order to protect yourself from ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Confirmation_bias"},"confirmation bias"),". This is the ideal time to see a critical flaw, because submitting a flawed proposal on-chain will waste resources and have reputational costs."),(0,r.yg)("p",null,"Posting your idea to the ",(0,r.yg)("a",{parentName:"p",href:"https://forum.cosmos.network/"},"Cosmos Hub Forum")," is a great way to get broad feedback and perspective even if you don't have personal connections to any stakeholders or involved parties."),(0,r.yg)("h3",{id:"are-you-ready-to-draft-a-governance-proposal"},"Are you ready to draft a governance proposal?"),(0,r.yg)("p",null,"There will likely be differences of opinion about the value of what you're proposing to do and the strategy by which you're planning to do it. If you've considered feedback from broad perspectives and think that what you're doing is valuable and that your strategy should work, and you believe that others feel this way as well, it's likely worth drafting a proposal. However, remember that the largest ATOM stakers have the biggest vote, so a vocal minority isn't necessarily representative or predictive of the outcome of an on-chain vote. "),(0,r.yg)("p",null,"You could choose to take a conservative approach and wait until you have some confidence that you roughly have initial support from a majority of the voting power before proceeding to drafting the details of your proposal. Or you could propose the idea, or define the problem statement and let the community participate freely in drafting competing solutions to solve the issue."),(0,r.yg)("h2",{id:"stage-2-your-draft-proposal"},"Stage 2: Your Draft Proposal"),(0,r.yg)("p",null,"The next major section outlines and describes some potential elements of drafting a proposal. Ensure that you have considered your proposal and anticipated questions that the community will likely ask. ",(0,r.yg)("strong",{parentName:"p"},"Once your proposal is on-chain, you will not be able to change it.")),(0,r.yg)("h3",{id:"proposal-elements"},"Proposal Elements"),(0,r.yg)("p",null,"It will be important to balance two things: being detailed and being concise. You'll want to be concise so that people can assess your proposal quickly. You'll want to be detailed so that voters will have a clear, meaningful understanding of what the changes are and how they are likely to be impacted."),(0,r.yg)("p",null,"Each major proposal type has a rough template available on the forum: ",(0,r.yg)("a",{parentName:"p",href:"https://forum.cosmos.network/t/about-the-signaling-text-category/5947"},"Text"),", ",(0,r.yg)("a",{parentName:"p",href:"https://forum.cosmos.network/t/about-the-community-spend-category/5949"},"community pool spend"),", ",(0,r.yg)("a",{parentName:"p",href:"https://forum.cosmos.network/t/about-the-parameter-change-category/5950"},"parameter change"),", ",(0,r.yg)("a",{parentName:"p",href:"https://forum.cosmos.network/t/about-the-software-upgrade-category/5951"},"software upgrade"),"."),(0,r.yg)("p",null,"Each proposal should contain a summmary with key details about what the proposal hopes to change. If you were viewing only the summary with no other context, it should be a good start to being able to make a decision."),(0,r.yg)("p",null,"Assume that many people will stop reading at this point. However it is important to provide in-depth information. The on-chain proposal text should also include a link to an un-editable version of the text, such as an IPFS pin, and a link to where discussion about the idea is happening."),(0,r.yg)("p",null,"A few more pointers for Parameter-change and Community Spend proposals are below."),(0,r.yg)("h4",{id:"parameter-change"},"Parameter-Change"),(0,r.yg)("p",null,"An example of a successful parameter change proposal is ",(0,r.yg)("a",{parentName:"p",href:"https://forum.cosmos.network/t/proposal-66-accepted-increase-active-validator-spots-to-175/6118/53"},"Proposal #66"),". Note that this proposal went on-chain without the recommended IPFS pin."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Problem/Value - The problem or value that's motivating the parameter change(s)."),(0,r.yg)("li",{parentName:"ol"},"Solution - How changing the parameter(s) will address the problem or improve the network."),(0,r.yg)("li",{parentName:"ol"},"Risks & Benefits - How making this/these change(s) may expose stakeholders to new benefits and/or risks.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The beneficiaries of the change(s) (ie. who will these changes impact and how?)"),(0,r.yg)("li",{parentName:"ul"},"Voters should understand the importance of the change(s) in a simple way"))),(0,r.yg)("li",{parentName:"ol"},"Supplementary materials - Optional materials eg. models, graphs, tables, research, signed petition, etc")),(0,r.yg)("h4",{id:"community-spend-proposal"},"Community-Spend Proposal"),(0,r.yg)("p",null,"An example of a successful community spend proposal is ",(0,r.yg)("a",{parentName:"p",href:"https://forum.cosmos.network/t/proposal-63-accepted-activate-governance-discussions-on-the-discourse-forum-using-community-pool-funds/5833"},"Proposal #63"),"."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Applicant(s) - The profile of the person(s)/entity making the proposal.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Who you are and your involvement in Cosmos and/or other blockchain networks."),(0,r.yg)("li",{parentName:"ul"},"An overview of team members involved and their relevant experience."))),(0,r.yg)("li",{parentName:"ol"},"Problem - What you're solving and/or opportunity you're addressing.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Past, present (and possibly a prediction of the future without this work being done)."))),(0,r.yg)("li",{parentName:"ol"},"Solution - How you're proposing to deliver the solution.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Your plan to fix the problem or deliver value."),(0,r.yg)("li",{parentName:"ul"},"The beneficiaries of this plan (ie. who will your plan impact and how?)."),(0,r.yg)("li",{parentName:"ul"},"Your reasons for selecting this plan."),(0,r.yg)("li",{parentName:"ul"},"Your motivation for delivering this solution/value."))),(0,r.yg)("li",{parentName:"ol"},"Funding - amount and denomination proposed eg. 5000 ATOM.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The entity controlling the account receiving the funding."),(0,r.yg)("li",{parentName:"ul"},"Consider an itemized breakdown of funding per major deliverable."),(0,r.yg)("li",{parentName:"ul"},"Note that the 'budget' of a spend proposal is generally the easiest thing to criticize. If your budget is vague, consider explaining the reasons you're unable to give a detailed breakdown and be clear about what happens if you do not meet you budget."))),(0,r.yg)("li",{parentName:"ol"},"Deliverables and timeline - the specifics of what you're delivering and how, and what to expect.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"What are the specific deliverables? (be detailed)."),(0,r.yg)("li",{parentName:"ul"},"When will each of these be delivered?"),(0,r.yg)("li",{parentName:"ul"},"How will each of these be delivered?"),(0,r.yg)("li",{parentName:"ul"},"What will happen if you do not deliver on time?"),(0,r.yg)("li",{parentName:"ul"},"Do you have a plan to return the funds if you're under-budget or the project fails?"),(0,r.yg)("li",{parentName:"ul"},"How will you be accountable to the Cosmos Hub stakeholders?",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"How will you communicate updates and how often?"),(0,r.yg)("li",{parentName:"ul"},"How can the community observe your progress?"),(0,r.yg)("li",{parentName:"ul"},"How can the community provide feedback?"))),(0,r.yg)("li",{parentName:"ul"},"How should the quality of deliverables be assessed? eg. metrics."))),(0,r.yg)("li",{parentName:"ol"},"Relationships and disclosures.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Have you received or applied for grants or funding? for similar work? eg. from the Interchain Foundation."),(0,r.yg)("li",{parentName:"ul"},"How will you and/or your organization benefit?"),(0,r.yg)("li",{parentName:"ul"},"Do you see this work continuing in the future and is there a plan?"),(0,r.yg)("li",{parentName:"ul"},"What are the risks involved with this work?"),(0,r.yg)("li",{parentName:"ul"},"Do you have conflicts of interest to declare?")))),(0,r.yg)("h3",{id:"begin-with-a-well-considered-draft-proposal"},"Begin with a well-considered draft proposal"),(0,r.yg)("p",null,"Ideally, a proposal is first sent to the forum in Markdown format so that it can be further edited and available for comments. A changelog is a great tool so that people can see how the idea has developed over time and in response to feedback."),(0,r.yg)("p",null,"This Markdown-formatted post can eventually become the description text in a proposal sent on-chain."),(0,r.yg)("h3",{id:"engage-the-community-with-your-draft-proposal"},"Engage the community with your draft proposal"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Post a draft of your proposal as a topic in the appropriate category of the forum. ",(0,r.yg)("a",{parentName:"p",href:"https://forum.cosmos.network/c/hub-proposals"},"Hub Proposals")," is a catch-all if you are not sure where to post, but there are categories for all types of proposals.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Directly engage key members of the community for feedback. These could be large contributors, those likely to be most impacted by the proposal, and entities with high stake-backing (eg. high-ranked validators; large stakers)."))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Alert the entire community to the draft proposal on other platforms such as Twitter, tagging accounts such as the ",(0,r.yg)("a",{parentName:"li",href:"https://twitter.com/cosmoshub"},"Cosmos Hub account"),", the ",(0,r.yg)("a",{parentName:"li",href:"https://twitter.com/CosmosGov"},"Cosmos Governance account"),", and other governance-focused groups.")),(0,r.yg)("h3",{id:"submit-your-proposal-to-the-testnet"},"Submit your proposal to the testnet"),(0,r.yg)("p",null,"Before going on mainnet, you can test your proposal on the ",(0,r.yg)("a",{parentName:"p",href:"/v18.1.0/governance/submitting#submitting-your-proposal-to-the-testnet"},"testnet"),". "),(0,r.yg)("p",null,"This is a great way to make sure your proposal looks the way you want and refine it before heading to mainnet."),(0,r.yg)("h2",{id:"stage-3-your-on-chain-proposal"},"Stage 3: Your On-Chain Proposal"),(0,r.yg)("p",null,"A majority of the voting community should probably be aware of the proposal and have considered it before the proposal goes live on-chain. If you're taking a conservative approach, you should have reasonable confidence that your proposal will pass before risking deposit contributions. Make revisions to your draft proposal after each stage of engagement."),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"/v18.1.0/governance/submitting"},"submitting guide")," for more on submitting proposals."),(0,r.yg)("h3",{id:"the-deposit-period"},"The Deposit Period"),(0,r.yg)("p",null,"The deposit period currently lasts 14 days. If you submitted your transaction with the minimum deposit (250 ATOM), your proposal will immediately enter the voting period. If you didn't submit the minimum deposit amount (currently 250 ATOM), then this may be an opportunity for others to show their support by contributing (and risking) their ATOMs as a bond for your proposal. You can request contributions openly and also contact stakeholders directly (particularly stakeholders who are enthusiastic about your proposal). Remember that each contributor is risking their funds, and you can ",(0,r.yg)("a",{parentName:"p",href:"/v18.1.0/governance/process#burned-deposits"},"read more about the conditions for burning deposits here"),"."),(0,r.yg)("p",null,"This is a stage where proposals may begin to get broader attention. Some block explorers display proposals in the deposit period, while others don't show them until they hit voting period."),(0,r.yg)("p",null,"A large cross-section of the blockchain/cryptocurrency community exists on Twitter. Having your proposal in the deposit period is a good time to engage the so-called 'crypto Twitter' Cosmos community to prepare validators to vote (eg. tag ",(0,r.yg)("a",{parentName:"p",href:"https://twitter.com/cosmosvalidator"},"@cosmosvalidator"),") and ATOM-holders that are staking (eg. tag ",(0,r.yg)("a",{parentName:"p",href:"https://twitter.com/cosmoshub"},"@cosmoshub"),", ",(0,r.yg)("a",{parentName:"p",href:"https://twitter.com/CosmosGov"},"@CosmosGov"),"). "),(0,r.yg)("h3",{id:"the-voting-period"},"The Voting Period"),(0,r.yg)("p",null,"At this point you'll want to track which validator has voted and which has not. You'll want to re-engage directly with top stake-holders, ie. the highest-ranking validator operators, to ensure that:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"they are aware of your proposal;"),(0,r.yg)("li",{parentName:"ol"},"they can ask you any questions about your proposal; and"),(0,r.yg)("li",{parentName:"ol"},"they are prepared to vote.")),(0,r.yg)("p",null,"Remember that any voter may change their vote at any time before the voting period ends. That historically doesn't happen often, but there may be an opportunity to convince a voter to change their vote. The biggest risk is that stakeholders won't vote at all (for a number of reasons). Validator operators tend to need multiple reminders to vote. How you choose to contact validator operators, how often, and what you say is up to you--remember that no validator is obligated to vote, and that operators are likely occupied by competing demands for their attention. Take care not to stress any potential relationship with validator operators."))}d.isMDXComponent=!0}}]);