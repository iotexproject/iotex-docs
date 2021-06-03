(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{651:function(a,s,n){"use strict";n.r(s);var e=n(38),t=Object(e.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"send-blockchain-action"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#send-blockchain-action"}},[a._v("#")]),a._v(" Send Blockchain Action")]),a._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#transfer-tokens"}},[a._v("Transfer Tokens")])]),n("li",[n("a",{attrs:{href:"#query-action"}},[a._v("Query Action")])]),n("li",[n("a",{attrs:{href:"#deploy-contract"}},[a._v("Deploy Contract")])]),n("li",[n("a",{attrs:{href:"#invoke-contract"}},[a._v("Invoke Contract")])]),n("li",[n("a",{attrs:{href:"#read-smart-contract"}},[a._v("Read Smart Contract")])]),n("li",[n("a",{attrs:{href:"#claim-reward"}},[a._v("Claim Reward")])]),n("li",[n("a",{attrs:{href:"#deposit-to-rewarding-pool"}},[a._v("Deposit To Rewarding Pool")])])])]),n("p"),a._v(" "),n("h3",{attrs:{id:"transfer-tokens"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transfer-tokens"}},[a._v("#")]),a._v(" Transfer Tokens")]),a._v(" "),n("p",[n("code",[a._v("Usage: ioctl action transfer (ALIAS|RECIPIENT_ADDRESS) AMOUNT_IOTX [DATA] -s SIGNER [-l GAS_LIMIT] [-p GAS_PRICE]")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("➜  ioctl action transfer IOsenser 7 pad#3212 -s whale\nEnter password #whale:\n\nsenderAddress: io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd (whale)\ntransfer: <\n  recipient: io1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt (IOsenser)\n  amount: 7000000000000000000\n  payload: pad#3212\n>\nsenderPubKey: 04f591bf3d3e233f6705c8a78823e9ea4a9a73365ca4dd1e60e5567558135778fde8b79dc883b04a98ab68a0fe9e3b7ce984fceca0466c03f93f40d32915bf1d88\nsignature: 64f9dc75b3406a009692cde669d3186bc29844ba70520e16fdafc14487d8d6be184c4a43f5f7e1f688d759c985a268d1a4b73b34b9e98d1db61adcb549a37d0101\n\nPlease confirm your action.\nType 'YES' to continue, quit for anything else.\nyes\n\nAction has been sent to blockchain.\nWait for several seconds and query this action by hash:\niotexscan.io/action/aa56b8958d5030676876363ec054df4ac7044ea2fc09f51a1c238d22c9411c33\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br")])]),n("h3",{attrs:{id:"query-action"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#query-action"}},[a._v("#")]),a._v(" Query Action")]),a._v(" "),n("p",[n("code",[a._v("Usage: ioctl action hash ACTION_HASH")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("→  ioctl action hash 690fb07fbb5ba3b762a7a16edea35ff1c3b02b43a6331aef88c4daa1bc933ad4\n\nversion: 1  nonce: 7  gasLimit: 122222  gasPrice: 2000000000000 Rau\nsenderAddress: io1znka733xefxjjw2wqddegplwtefun0mfdmz7dw (whale)\ntransfer: <\n  recipient: io18jaldgzc8wlyfnzamgas62yu3kg5nw527czg37 (nani)\n  amount: 123000000000000000000 Rau\n  payload:\n>\nsenderPubKey: 04d0fade363080b9061844ed6b1009f35595515b31295e37e870106d3201a638856db2c3f870dbbcafc559af54574f3487dbea0d318588608d7aca8e77e4ce5ade\nsignature: 2e10f265fdc5944fab11afaebd258292afe8f9076157fbaca6bfdd3ece9047483fb3aa10ce187fe55d2d9c591e5eda430833b744f825a6ae34c9b34461d3940f01\n\n#This action has been written on blockchain\nreturnValue:\nstatus: 1 (Success)\nactHash: 690fb07fbb5ba3b762a7a16edea35ff1c3b02b43a6331aef88c4daa1bc933ad4\ngasConsumed: 10000\ncontractAddress:\nlogs:0\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br")])]),n("h3",{attrs:{id:"deploy-contract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deploy-contract"}},[a._v("#")]),a._v(" Deploy Contract")]),a._v(" "),n("p",[n("code",[a._v("Usage: ioctl action deploy -s SIGNER -b BYTE_CODE -l GAS_LIMIT [-p GAS_PRICE]")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("➜  ioctl action deploy -b 608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a7230582009e6d7025fff5ff3ba4cf7ba6b842526416df976e012a516f37e397607c1f2360029 -l 50000 -p 1 -s whale\nEnter password #whale:\n\nsenderAddress: io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd (whale)\nversion: 1\nnonce: 3\ngasLimit: 50000\ngasPrice: 1000000000000\nexecution: <\n  contract:\n  amount: 0\n  data: 608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a7230582009e6d7025fff5ff3ba4cf7ba6b842526416df976e012a516f37e397607c1f2360029\n>\nsenderPubKey: 04f591bf3d3e233f6705c8a78823e9ea4a9a73365ca4dd1e60e5567558135778fde8b79dc883b04a98ab68a0fe9e3b7ce984fceca0466c03f93f40d32915bf1d88\nsignature: a0cbb205184c3153217bdd7e1d251a70bf8d9222b7ab9b8015254e5961f21602694477ea5bed2005fe21f47724130af173b7abe2b5f9304b09f188749c88c2f001\n\nPlease confirm your action.\nType 'YES' to continue, quit for anything else.\nyes\n\nAction has been sent to blockchain.\nWait for several seconds and query this action by hash:\nb49e5860c5b4154fdb6bcb808a60fbf8de2ac7807d99551ec5357d83ad2612e5\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br")])]),n("h3",{attrs:{id:"invoke-contract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#invoke-contract"}},[a._v("#")]),a._v(" Invoke Contract")]),a._v(" "),n("p",[n("code",[a._v("Usage: ioctl action invoke (ALIAS|CONTRACT_ADDRESS) [AMOUNT_IOTX] -s SIGNER -b BYTE_CODE -l GAS_LIMIT [-p GAS_PRICE]")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("➜  ioctl action invoke io1vqzcl56vlfspyaadyxhqy07jrmalx73vdaklzn 122 -s boss -b 60fe47b10000000000000000000000000000000000000000000000000000000000000001 -l 90000 -p 3\nEnter password #boss:\n\nsenderAddress: io1ed52svvdun2qv8sf2m0xnynuxfaulv6jlww7ur\nversion: 1\nnonce: 2\ngasLimit: 90000\ngasPrice: 3000000000000\nexecution: <\n  contract: io1vqzcl56vlfspyaadyxhqy07jrmalx73vdaklzn\n  amount: 122000000000000000000\n  data: 60fe47b10000000000000000000000000000000000000000000000000000000000000001\n>\nsenderPubKey: 04b3fe4456876ca4c904c52dc3203e06651924d6cbd5e9f545ce990ea1289f3b8ddaff3b7e104803187f87b1e375076285e7137052260b14f2f33229a671a39a0c\nsignature: bde6509fadfe80b707ef80e24041b4cfe7bf583c7d89a0649027090c191918b217ffae5faf1dd5f2d9e6d05f8721c8ff7a6b3b5cffb64610d3bad71c9c55e47001\n\nPlease confirm your action.\nType 'YES' to continue, quit for anything else.\nyes\n\nAction has been sent to blockchain.\nWait for several seconds and query this action by hash:\n58fc6465bd3b7e33b1508064b0342dc786247b4e18859be72fea57c993dc4950\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br")])]),n("h3",{attrs:{id:"read-smart-contract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#read-smart-contract"}},[a._v("#")]),a._v(" Read Smart Contract")]),a._v(" "),n("p",[n("code",[a._v("ioctl action read (ALIAS|CONTRACT_ADDRESS) -b BYTE_CODE [-s SIGNER]")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("➜ ioctl action read io1vqzcl56vlfspyaadyxhqy07jrmalx73vdaklzn -b 60fe47b10000000000000000000000000000000000000000000000000000000000000001\n\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])]),n("h3",{attrs:{id:"claim-reward"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#claim-reward"}},[a._v("#")]),a._v(" Claim Reward")]),a._v(" "),n("p",[n("code",[a._v("Usage: ioctl action claim AMOUNT_IOTX [DATA] -s SIGNER [-l GAS_LIMIT] [-p GASPRICE]")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('➜  ioctl action claim 321 happy -s whale\nEnter password #whale:\n\nsenderAddress: io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd (whale)\nversion: 1\nnonce: 6\ngasLimit: 15000\ngasPrice: "1000000000000"\nclaimFromRewardingFund: <\n  amount: "321000000000000000000"\n  data: "happy"\n>\nsenderPubKey: 04f591bf3d3e233f6705c8a78823e9ea4a9a73365ca4dd1e60e5567558135778fde8b79dc883b04a98ab68a0fe9e3b7ce984fceca0466c03f93f40d32915bf1d88\nsignature: 6b4022afc93901b7de420f84829e9f3e2f531a83c4c0f3a935df3694dbe09e7f068733a294207e9ee39e0d83b4fc206e9f7059592e648b8d92a0bb1eed489f4000\n\nPlease confirm your action.\nType \'YES\' to continue, quit for anything else.\nyes\n\nAction has been sent to blockchain.\nWait for several seconds and query this action by hash:\n59a73e24a41385005519d1d1e7f164b36b98717f2c5649785b43c2588245502d\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br")])]),n("h3",{attrs:{id:"deposit-to-rewarding-pool"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deposit-to-rewarding-pool"}},[a._v("#")]),a._v(" Deposit To Rewarding Pool")]),a._v(" "),n("p",[n("code",[a._v("ioctl action deposit AMOUNT_IOTX [DATA] [-s SIGNER] [-n NONCE] [-l GAS_LIMIT] [-p GAS_PRICE] [-P PASSWORD] [-y]")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('➜ ioctl action deposit 10 -s tmp2\nEnter password #io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4:\n\n\nversion: 1  nonce: 419  gasLimit: 10000  gasPrice: 0.000001 IOTX\nsenderAddress: io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4 (tmp2)\nversion: 1\nnonce: 419\ngasLimit: 10000\ngasPrice: "1000000000000"\ndepositToRewardingFund: <\n  amount: "10000000000000000000"\n>\nsenderPubKey: 0422346c407294b5e37487395f193faa48dabfc2225ab33fe47b335299f46505b1689f0d96fd53bd19971fe47f310669cf6260dcdc23318454814a4fe904f4d384\nsignature: a3c46bae8324e5bcc498de67510b8e8dffe3d8474b7bd1f1cef7a1e01aff6722210df22a5b5c796e1820c5d091c8e49b7a7ee36d2951f90a6f8538bbcfd8f17100\n\nPlease confirm your action.\n\n\nOptions: yes\nQuit for anything else.\nyes\nAction has been sent to blockchain.\nWait for several seconds and query this action by hash:23aee3e08f084d5090329d47e27afa8c08358967ca8d6f2b2dc26803b7491d4e\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);