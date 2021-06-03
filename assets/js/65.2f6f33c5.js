(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{650:function(a,e,s){"use strict";s.r(e);var t=s(38),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"manage-accounts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manage-accounts"}},[a._v("#")]),a._v(" Manage Accounts")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#create-accounts"}},[a._v("Create Accounts")])]),s("li",[s("a",{attrs:{href:"#create-and-store-accounts"}},[a._v("Create and store Accounts")])]),s("li",[s("a",{attrs:{href:"#update-the-password-for-an-account"}},[a._v("Update the Password for an Account")])]),s("li",[s("a",{attrs:{href:"#import-an-account-from-private-key"}},[a._v("Import an Account from Private Key")])]),s("li",[s("a",{attrs:{href:"#export-an-account-private-key"}},[a._v("Export an Account Private Key")])]),s("li",[s("a",{attrs:{href:"#export-an-account-public-key"}},[a._v("Export an Account Public Key")])]),s("li",[s("a",{attrs:{href:"#delete-an-account"}},[a._v("Delete an Account")])]),s("li",[s("a",{attrs:{href:"#list-accounts"}},[a._v("List Accounts")])]),s("li",[s("a",{attrs:{href:"#sign-a-message"}},[a._v("Sign a Message")])]),s("li",[s("a",{attrs:{href:"#query-the-balance-of-an-account"}},[a._v("Query the Balance of an Account")])]),s("li",[s("a",{attrs:{href:"#query-the-nonce-of-an-account"}},[a._v("Query the nonce of an Account")])]),s("li",[s("a",{attrs:{href:"#iotex↔ethereum-address-conversion"}},[a._v("IoTeX↔Ethereum Address Conversion")])]),s("li",[s("a",{attrs:{href:"#generate-public-key-and-address-from-private-key"}},[a._v("Generate Public Key And Address from Private Key")])])])]),s("p"),a._v(" "),s("h3",{attrs:{id:"create-accounts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-accounts"}},[a._v("#")]),a._v(" Create Accounts")]),a._v(" "),s("p",[s("code",[a._v("Usage: ioctl account create")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('➜  ioctl account create\n{\n  "accounts": [\n    {\n      "address": "io12ly97a3sk94ne06qjz2vv6clv3za7mk2z2sra9",\n      "privateKey": "bb59a2a2c21242831906e0c8d188c642fdc1324d27ac4ae0d8cbea373b22147b",\n      "publicKey": "040780ba149d24ee5418084ee193a6be8b3b7cf5329d160fc8902270b342c4fed4b646cdd5fdaf52932eecb957297a9bf6dbb24f7faa9287a27df6b5e83781c74b"\n    }\n  ]\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('➜  ioctl account create -n 3\n{\n  "accounts": [\n    {\n      "address": "io1dcx2490vk2sg0f7ujv9d3gu67rpvyk5rjp854s",\n      "privateKey": "a40ffd19150b4f3cbb1ca779862fc63b15d432c0be9bba81c56856d00e370b91",\n      "publicKey": "04483333bf900b59a412c26a8cf287e122be5d2882d66263ce330a2c84e426fcf48dca4e189dbef15dc3511b049b7708c1e3a49e4904a6286ffcc6019bb27a4ca9"\n    },\n    {\n      "address": "io19sypnkmj6agqqgusht07m35lvlhz4ruehetagk",\n      "privateKey": "fd49783f8687379e3eb6e5778977044cc7e464dd16df8444b8643d3d636f7ebc",\n      "publicKey": "04bcae59b817ec2924adef52088e9295bb040d1a34fe49e64b41ca56e2cbb3be115256975d2c1472b0a3b47bea720810de092ef4d209924ce09fa896b29588a90d"\n    },\n    {\n      "address": "io1ehlhw6kedp5x8y04ddr7fl0cs68ns32hdxuvdl",\n      "privateKey": "2c1bdc74c7ff03f08f2e2d3b65af9a54dc5addc42613670bd4bb1f0440cd9468",\n      "publicKey": "04cd1ff13e20cbe83bc8759ce21404edc2a9b78c57f8d2ffc648f2213dfee98b61d9ebaffe03f32e7a13fbe319b1958c99ed701c3fa1046790f6af12f32262309b"\n    }\n  ]\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br")])]),s("h3",{attrs:{id:"create-and-store-accounts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-and-store-accounts"}},[a._v("#")]),a._v(" Create and store Accounts")]),a._v(" "),s("p",[s("code",[a._v("Usage: ioctl account createadd ALIAS")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('➜  ioctl account createadd IOsenser\n#IOsenser: Set password\n#IOsenser: Enter password again\nNew account "IOsenser" is created.\nPlease Keep your password, or you will lose your private key.\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"update-the-password-for-an-account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-the-password-for-an-account"}},[a._v("#")]),a._v(" Update the Password for an Account")]),a._v(" "),s("p",[s("code",[a._v("Usage: ioctl account update (ALIAS|ADDRESS)")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("➜  ioctl account update IOsenser\n#IOsenser: Enter current password\n#IOsenser: Enter new password\n#IOsenser: Enter new password again\nAccount #IOsenser has been updated.\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"import-an-account-from-private-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-an-account-from-private-key"}},[a._v("#")]),a._v(" Import an Account from Private Key")]),a._v(" "),s("p",[s("code",[a._v("Usage: ioctl account import [key|keystore] ALIAS")]),a._v("\nTwo options are available. If you use "),s("code",[a._v("key")]),a._v(",")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("➜  ioctl account import key whale\n#whale: Enter your private key, which will not be exposed on the screen.\n#whale: Set password\n#whale: Enter password again\nNew account #whale is created. Keep your password, or your will lose your private key.\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("If you use "),s("code",[a._v("keystore")]),a._v(",")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("➜  ioctl account import keystore whale\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"export-an-account-private-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#export-an-account-private-key"}},[a._v("#")]),a._v(" Export an Account Private Key")]),a._v(" "),s("p",[s("code",[a._v("Usage: ioctl account export (ALIAS|ADDRESS)")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("➜  ioctl account export whale\nEnter password #whale:\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"export-an-account-public-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#export-an-account-public-key"}},[a._v("#")]),a._v(" Export an Account Public Key")]),a._v(" "),s("p",[s("code",[a._v("Usage: ioctl account exportpublic (ALIAS|ADDRESS)")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("➜  ioctl account exportpublic tmp2\nEnter password #io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4:\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"delete-an-account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-an-account"}},[a._v("#")]),a._v(" Delete an Account")]),a._v(" "),s("p",[s("code",[a._v("Usage: ioctl account delete (ALIAS|ADDRESS)")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("➜  ioctl account delete whale\n** This is an irreversible action!\nOnce an account is deleted, all the assets under this account may be lost!\nType 'YES' to continue, quit for anything else.\nyes\nEnter password #io1t54nfdnpldaxkpm35f2gzh3rx6cakypmp5xfz5:\nAccount #io1t54nfdnpldaxkpm35f2gzh3rx6cakypmp5xfz5 has been deleted.\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h3",{attrs:{id:"list-accounts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-accounts"}},[a._v("#")]),a._v(" List Accounts")]),a._v(" "),s("p",[s("code",[a._v("Usage: ioctl account list")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("➜  ioctl account list\nio1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt - IOsenser\nio17laykjt9qgafuxj58fuspuxzlv6y4qgxf82vnm - frank\nio1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg\nio14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd - 007\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"sign-a-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sign-a-message"}},[a._v("#")]),a._v(" Sign a Message")]),a._v(" "),s("p",[s("code",[a._v("Usage: ioctl account sign MESSAGE [-s SIGNER]")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('➜  ioctl account sign "abcd" -s tmp2\nEnter password #io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4:\nec280f9f95ed5774fb042e69d92bfb685443dc99350d5460ecf1067d1cb539150903ff0d18cdd5072ce72765996e80c96df7ed86c2b887ce4d41aa8cc2dd0b0001\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"query-the-balance-of-an-account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-the-balance-of-an-account"}},[a._v("#")]),a._v(" Query the Balance of an Account")]),a._v(" "),s("p",[s("code",[a._v("Usage: ioctl account balance (ALIAS|ADDRESS)")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("➜  ioctl account balance IOsenser\nio1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt: 0.721 IOTX\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("➜  ioctl account balance io1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg\nio1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg: 4689 IOTX\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"query-the-nonce-of-an-account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-the-nonce-of-an-account"}},[a._v("#")]),a._v(" Query the nonce of an Account")]),a._v(" "),s("p",[s("code",[a._v("Usage: ioctl account nonce (ALIAS|ADDRESS)")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("➜  ioctl account nonce IOsenser\nio1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt:\nNonce: 0, Pending Nonce: 1\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"iotex↔ethereum-address-conversion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iotex↔ethereum-address-conversion"}},[a._v("#")]),a._v(" IoTeX↔Ethereum Address Conversion")]),a._v(" "),s("p",[s("code",[a._v("Usage: ioctl account ethaddr (ALIAS|IOTEX_ADDRESS|ETH_ADDRESS)")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("➜  ioctl account ethaddr io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd\nio14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd - 0xAA260324ad0DA6FA2231f0FfEC916A99bb00dd34\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("➜  ioctl account ethaddr 0xAA260324ad0DA6FA2231f0FfEC916A99bb00dd34\nio14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd - 0xAA260324ad0DA6FA2231f0FfEC916A99bb00dd34\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("➜  ioctl account ethaddr 007\nio14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd - 0xAA260324ad0DA6FA2231f0FfEC916A99bb00dd34\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"generate-public-key-and-address-from-private-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generate-public-key-and-address-from-private-key"}},[a._v("#")]),a._v(" Generate Public Key And Address from Private Key")]),a._v(" "),s("p",[s("code",[a._v("Usage: ioctl account verify")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("➜  ioctl account verify\nEnter private key:\nAddress:  io1gh439pm67d4cwxt882xpylj75klys6esepml60\nPublic Key: 04ac93d2fffdf488659c3f58890f6ddc55818d50f884e515aa90b2b1ca1e0fc223f85c5a0dc8b9a55b9a282a1ba8a269a3426f168591b60c921380f7d6d34c1f4f\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);