(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{614:function(t,n,s){"use strict";s.r(n);var a=s(38),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"update-a-iotex-did"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-a-iotex-did"}},[t._v("#")]),t._v(" Update a IoTeX DID")]),t._v(" "),s("p",[t._v("Whenever a DID document is modified, the document hash will change and need to be updated in the DID contract. If a user moves the document to a new storage location, the document URI also needs to be updated in the DID contract. Every device can only update its own document associated with the DID created by itself.\nHere is a draft DID hash/URI update implementation:")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For reference only and subject to change")]),t._v("\n\nmodifier "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onlyDIDOwner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string didInput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    string memory didString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateDIDString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bytes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("didInput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareStrings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("didInput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" didString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"caller does not own the given did"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dids"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("didString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"caller is not a did owner"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nfunction "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateHash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string did"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bytes32 hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" public "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onlyDIDOwner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("did"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dids"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateDIDString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nfunction "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateURI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string did"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" string uri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" public "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onlyDIDOwner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("did"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dids"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateDIDString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uri "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("p",[t._v("Similar to the case of DID registration, did argument is optional for the update functions as well because the contract would use caller's address to derive the DID string.")])])}),[],!1,null,null,null);n.default=e.exports}}]);