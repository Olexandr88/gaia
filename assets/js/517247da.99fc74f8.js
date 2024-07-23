"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[2392],{5680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>h});var t=a(6540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},g=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=o,h=u["".concat(l,".").concat(c)]||u[c]||d[c]||r;return a?t.createElement(h,i(i({ref:n},g),{},{components:a})):t.createElement(h,i({ref:n},g))}));function h(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4197:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var t=a(8168),o=(a(6540),a(5680));const r={title:"Upgrading Your Node",order:4},i="Upgrade Your Node",s={unversionedId:"hub-tutorials/upgrade-node",id:"version-v19.0.0-rc0/hub-tutorials/upgrade-node",title:"Upgrading Your Node",description:"This document describes the upgrade procedure of a gaiad full-node to a new version.",source:"@site/versioned_docs/version-v19.0.0-rc0/hub-tutorials/upgrade-node.md",sourceDirName:"hub-tutorials",slug:"/hub-tutorials/upgrade-node",permalink:"/v19.0.0-rc0/hub-tutorials/upgrade-node",draft:!1,tags:[],version:"v19.0.0-rc0",frontMatter:{title:"Upgrading Your Node",order:4},sidebar:"tutorialSidebar",previous:{title:"Upgrading the Chain",permalink:"/v19.0.0-rc0/hub-tutorials/live-upgrade-tutorial"},next:{title:"Delegators",permalink:"/v19.0.0-rc0/delegators/"}},l={},p=[{value:"Cosmovisor",id:"cosmovisor",level:2},{value:"Setup",id:"setup",level:3},{value:"Preparing an Upgrade",id:"preparing-an-upgrade",level:3},{value:"Manual Software Upgrade",id:"manual-software-upgrade",level:2},{value:"Upgrade Genesis File",id:"upgrade-genesis-file",level:2},{value:"Fetching from a Trusted Source",id:"fetching-from-a-trusted-source",level:3},{value:"Exporting State to a New Genesis Locally",id:"exporting-state-to-a-new-genesis-locally",level:3},{value:"Reset Data",id:"reset-data",level:2},{value:"Restart",id:"restart",level:2}],g={toc:p},u="wrapper";function d(e){let{components:n,...a}=e;return(0,o.yg)(u,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"upgrade-your-node"},"Upgrade Your Node"),(0,o.yg)("p",null,"This document describes the upgrade procedure of a ",(0,o.yg)("inlineCode",{parentName:"p"},"gaiad")," full-node to a new version."),(0,o.yg)("h2",{id:"cosmovisor"},"Cosmovisor"),(0,o.yg)("p",null,"The Cosmos SDK provides a convenient process manager that wraps around the ",(0,o.yg)("inlineCode",{parentName:"p"},"gaiad")," binary and can automatically swap in new binaries upon a successful governance upgrade proposal. Cosmovisor is entirely optional but recommended. More information can be found in ",(0,o.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.45/run-node/cosmovisor.html"},"cosmos.network docs")," and ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.11/tools/cosmovisor/README.md"},"cosmos-sdk/cosmovisor/readme"),"."),(0,o.yg)("h3",{id:"setup"},"Setup"),(0,o.yg)("p",null,"To get started with Cosmovisor first download it"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor\n")),(0,o.yg)("p",null,"Set up the environment variables"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'echo "# Setup Cosmovisor" >> ~/.profile\necho "export DAEMON_NAME=gaiad" >> ~/.profile\necho "export DAEMON_HOME=$HOME/.gaia" >> ~/.profile\nsource ~/.profile\n')),(0,o.yg)("p",null,"Create the appropriate directories"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/.gaia/cosmovisor/upgrades\nmkdir -p ~/.gaia/cosmovisor/genesis/bin/\ncp $(which gaiad) ~/.gaia/cosmovisor/genesis/bin/\n\n# verify the setup. \n# It should return the same version as gaiad\ncosmovisor version\n")),(0,o.yg)("p",null,"Now ",(0,o.yg)("inlineCode",{parentName:"p"},"gaiad")," can start by running"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cosmovisor start\n")),(0,o.yg)("h3",{id:"preparing-an-upgrade"},"Preparing an Upgrade"),(0,o.yg)("p",null,"Cosmovisor will continually poll  the ",(0,o.yg)("inlineCode",{parentName:"p"},"$DAEMON_HOME/data/upgrade-info.json")," for new upgrade instructions. When an upgrade is ready, node operators can download the new binary and place it under ",(0,o.yg)("inlineCode",{parentName:"p"},"$DAEMON_HOME/cosmovisor/upgrades/<name>/bin")," where ",(0,o.yg)("inlineCode",{parentName:"p"},"<name>")," is the URI-encoded name of the upgrade as specified in the upgrade module plan."),(0,o.yg)("p",null,"It is possible to have Cosmovisor automatically download the new binary. To do this set the following environment variable."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"export DAEMON_ALLOW_DOWNLOAD_BINARIES=true\n")),(0,o.yg)("h2",{id:"manual-software-upgrade"},"Manual Software Upgrade"),(0,o.yg)("p",null,"First, stop your instance of ",(0,o.yg)("inlineCode",{parentName:"p"},"gaiad"),". Next, upgrade the software:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cd gaia\ngit fetch --all && git checkout <new_version>\nmake install\n")),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("em",{parentName:"p"},"NOTE"),": If you have issues at this step, please check that you have the latest stable version of GO installed.")),(0,o.yg)("p",null,"See the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/testnets"},"testnet repo")," for details on which version is needed for which public testnet, and the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/Gaia/releases"},"Gaia release page")," for details on each release."),(0,o.yg)("p",null,"Your full node has been cleanly upgraded! If there are no breaking changes then you can simply restart the node by running:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"gaiad start\n")),(0,o.yg)("h2",{id:"upgrade-genesis-file"},"Upgrade Genesis File"),(0,o.yg)("admonition",{type:"warning"},(0,o.yg)("p",{parentName:"admonition"},"If the new version you are upgrading to has breaking changes, you will have to restart your chain. If it is not breaking, you can skip to ",(0,o.yg)("a",{parentName:"p",href:"/hub-tutorials/upgrade-node#restart"},"Restart"))),(0,o.yg)("p",null,"To upgrade the genesis file, you can either fetch it from a trusted source or export it locally."),(0,o.yg)("h3",{id:"fetching-from-a-trusted-source"},"Fetching from a Trusted Source"),(0,o.yg)("p",null,"If you are joining the mainnet, fetch the genesis from the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/launch"},"mainnet repo"),". If you are joining a public testnet, fetch the genesis from the appropriate testnet in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/testnets"},"testnet repo"),". Otherwise, fetch it from your trusted source."),(0,o.yg)("p",null,"Save the new genesis as ",(0,o.yg)("inlineCode",{parentName:"p"},"new_genesis.json"),". Then replace the old ",(0,o.yg)("inlineCode",{parentName:"p"},"genesis.json")," with ",(0,o.yg)("inlineCode",{parentName:"p"},"new_genesis.json")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/.gaia/config\ncp -f genesis.json new_genesis.json\nmv new_genesis.json genesis.json\n")),(0,o.yg)("p",null,"Then, go to the ",(0,o.yg)("a",{parentName:"p",href:"#reset-data"},"reset data")," section."),(0,o.yg)("h3",{id:"exporting-state-to-a-new-genesis-locally"},"Exporting State to a New Genesis Locally"),(0,o.yg)("p",null,"If you were running a node in the previous version of the network and want to build your new genesis locally from a state of this previous network, use the following command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/.gaia/config\ngaiad export --for-zero-height --height=<export-height> > new_genesis.json\n")),(0,o.yg)("p",null,"The command above take a state at a certain height ",(0,o.yg)("inlineCode",{parentName:"p"},"<export-height>")," and turns it into a new genesis file that can be used to start a new network."),(0,o.yg)("p",null,"Then, replace the old ",(0,o.yg)("inlineCode",{parentName:"p"},"genesis.json")," with ",(0,o.yg)("inlineCode",{parentName:"p"},"new_genesis.json"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cp -f genesis.json new_genesis.json\nmv new_genesis.json genesis.json\n")),(0,o.yg)("p",null,"At this point, you might want to run a script to update the exported genesis into a genesis that is compatible with your new version. For example, the attributes of a the ",(0,o.yg)("inlineCode",{parentName:"p"},"Account")," type changed, a script should query encoded account from the account store, unmarshall them, update their type, re-marshal and re-store them. You can find an example of such script ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/02c6c9fafd58da88550ab4d7d494724a477c8a68/contrib/migrate/v0.33.x-to-v0.34.0.py"},"here"),"."),(0,o.yg)("h2",{id:"reset-data"},"Reset Data"),(0,o.yg)("admonition",{type:"warning"},(0,o.yg)("p",{parentName:"admonition"},"If the version <new_version> you are upgrading to is not breaking from the previous one, you should not reset the data. If it is not breaking, you can skip to ",(0,o.yg)("a",{parentName:"p",href:"#restart"},"Restart"))),(0,o.yg)("admonition",{type:"warning"},(0,o.yg)("p",{parentName:"admonition"},"If you are running a ",(0,o.yg)("strong",{parentName:"p"},"validator node")," on the mainnet, always be careful when doing ",(0,o.yg)("inlineCode",{parentName:"p"},"gaiad unsafe-reset-all"),". You should never use this command if you are not switching ",(0,o.yg)("inlineCode",{parentName:"p"},"chain-id"),".")),(0,o.yg)("p",null,"::: danger IMPORTANT\nMake sure that every node has a unique ",(0,o.yg)("inlineCode",{parentName:"p"},"priv_validator.json"),". Do not copy the ",(0,o.yg)("inlineCode",{parentName:"p"},"priv_validator.json")," from an old node to multiple new nodes. Running two nodes with the same ",(0,o.yg)("inlineCode",{parentName:"p"},"priv_validator.json")," will cause you to get slashed due to double signing!\n:::"),(0,o.yg)("p",null,"First, remove the outdated files and reset the data. ",(0,o.yg)("strong",{parentName:"p"},"If you are running a validator node, make sure you understand what you are doing before resetting"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"gaiad unsafe-reset-all\n")),(0,o.yg)("p",null,"Your node is now in a pristine state while keeping the original ",(0,o.yg)("inlineCode",{parentName:"p"},"priv_validator.json")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"config.toml"),". If you had any sentry nodes or full nodes setup before, your node will still try to connect to them, but may fail if they haven't also been upgraded."),(0,o.yg)("h2",{id:"restart"},"Restart"),(0,o.yg)("p",null,"If there are no breaking changes then you can simply restart the node by running:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"gaiad start\n")))}d.isMDXComponent=!0}}]);