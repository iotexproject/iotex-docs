(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{528:function(t,e,a){"use strict";a.d(e,"a",(function(){return u})),a.d(e,"b",(function(){return d}));a(71),a(107),a(521),a(522),a(285),a(106),a(168),a(169),a(49),a(170),a(281);var n=/#.*$/,i=/\.(md|html)$/,r=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(n,"").replace(i,"")}function l(t){return s.test(t)}function c(t){if(l(t))return t;var e=t.match(n),a=e?e[0]:"",i=o(t);return r.test(i)?t:i+".html"+a}function u(t,e){var a=decodeURIComponent(t.hash),i=function(t){var e=t.match(n);if(e)return e[0]}(e);return(!i||a===i)&&o(t.path)===o(e)}function h(t,e,a){if(l(e))return{type:"external",path:e};a&&(e=function(t,e,a){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var i=e.split("/");a&&i[i.length-1]||i.pop();for(var r=t.replace(/^\//,"").split("/"),s=0;s<r.length;s++){var o=r[s];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(e,a));for(var n=o(e),i=0;i<t.length;i++)if(o(t[i].regularPath)===n)return Object.assign({},t[i],{type:"page",path:c(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t,e,a,n){var i=a.pages,r=a.themeConfig,s=n&&r.locales&&r.locales[n]||r;if("auto"===(t.frontmatter.sidebar||s.sidebar||r.sidebar))return p(t);var o=s.sidebar||r.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var a in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(a)))return{base:a,config:e[a]};var n;return{}}(e,o),c=l.base,u=l.config;return"auto"===u?p(t):u?u.map((function(t){return function t(e,a,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return h(a,e,n);if(Array.isArray(e))return Object.assign(h(a,e[0],n),{title:e[1]});var r=e.children||[];return 0===r.length&&e.path?Object.assign(h(a,e.path,n),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:r.map((function(e){return t(e,a,n,i+1)})),collapsable:!1!==e.collapsable}}(t,i,c)})):[]}return[]}function p(t){var e=function(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}},529:function(t,e,a){},538:function(t,e,a){},543:function(t,e,a){},554:function(t,e,a){"use strict";a.r(e);a(167);var n=a(528),i={name:"SidebarGroup",components:{DropdownTransition:a(555).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=a(554).default},methods:{isActive:n.a}},r=(a(573),a(38));function s(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?s(t,e):"page"===e.type&&Object(n.a)(t,e.path)}))}var o={name:"SidebarLinks",components:{SidebarGroup:Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?a("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[a("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?a("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):a("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[a("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?a("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),a("DropdownTransition",[t.open||!t.collapsable?a("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports,SidebarLink:a(588).a},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var a=0;a<e.length;a++){var n=e[a];if(s(t,n))return a}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(n.a)(this.$route,t.regularPath)}}},l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.items.length?a("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,n){return a("li",{key:n},["group"===e.type?a("SidebarGroup",{attrs:{item:e,open:n===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(n)}}}):a("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=l.exports},556:function(t,e,a){"use strict";a(529)},568:function(t,e,a){"use strict";a(538)},573:function(t,e,a){"use strict";a(543)},589:function(t,e,a){"use strict";a.r(e);var n={name:"Home",components:{NavLink:a(523).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(a(556),a(38)),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[a("header",{staticClass:"hero"},[t.data.heroImage?a("img",{staticClass:"logo",attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?a("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.taglines?a("p",{staticClass:"description"},t._l(t.data.taglines,(function(e,n){return a("span",{key:n},[t._v("\n        "+t._s(e.text)),a("br")])})),0):t._e(),t._v(" "),t.data.titleCards&&t.data.titleCards.length?a("div",{staticClass:"titleCards"},t._l(t.data.titleCards,(function(e,n){return a("div",{key:n,staticClass:"titleCard"},[a("h4",[t._v(t._s(e.title))]),t._v(" "),a("ul",[e.links&&e.links.length?a("div",{staticClass:"titleCardsLink"},t._l(e.links,(function(e,n){return a("div",{key:n,staticClass:"titleCardLink"},[a("li",[e.url?a("NavLink",{attrs:{item:{link:e.url,text:e.text}}}):a("span",[t._v(t._s(e.text))])],1)])})),0):t._e()])])})),0):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,(function(e,n){return a("div",{key:n,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))]),t._v(" "),a("NavLink",{staticClass:"action-button-mini",attrs:{item:{link:e.featureLink,text:e.linkText}}})],1)})),0):t._e(),t._v(" "),a("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?a("div",{staticClass:"footer"},[a("a",{attrs:{href:t.data.footerLink,target:"_blank"}},[t._v(t._s(t.data.footer))])]):t._e()],1)}),[],!1,null,null,null).exports,s=(a(557),a(559)),o=a(585),l=a(587),c=a(553);function u(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var h={name:"Navbar",components:{SidebarButton:l.a,NavLinks:c.a,SearchBox:o.a,AlgoliaSearchBox:s.a},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(u(this.$el,"paddingLeft"))+parseInt(u(this.$el,"paddingRight")),a=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};a(),window.addEventListener("resize",a,!1)}},d=(a(568),Object(i.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar"},[a("TopBanner"),t._v(" "),a("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),a("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?a("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?a("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),a("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?a("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?a("SearchBox"):t._e(),t._v(" "),a("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),p=a(584),f=a(586),g=a(528),b={name:"Layout",components:{Home:r,Page:p.a,Sidebar:f.a,Navbar:d},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(g.b)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},m=Object(i.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=m.exports}}]);