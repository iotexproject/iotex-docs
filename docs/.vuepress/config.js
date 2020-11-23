module.exports = {
  alias: {
    "@gateway": "introduction/node-concept"
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require("markdown-it-katex"));
    }
  },
  plugins: [
    "@vuepress/vuepress-plugin-katex",
    {
      delimiters: "dollars"
    },
    [
      "vuepress-plugin-medium-zoom",
      {
        selector: ".theme-default-content img",
        delay: 1000,
        options: {
          margin: 24,
          background: "#000000",
          scrollOffset: 0
        }
      }
    ],
    "@vuepress/back-to-top",
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-111756489-6" // UA-00000000-0
      }
    ],
    "vuepress-plugin-smooth-scroll",
    "tabs"
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "IoTeX Documentation",
      description: "Developer docs, by the community, for the community"
    }
  },

  themeConfig: {
    repo: "iotexproject/iotex-docs",
    docsDir: "docs",
    editLinks: true,
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        collapsable: false,
        nav: [
          { text: "Home", link: "/" },
          { text: "Core concepts", link: "/introduction/whatisiotex" },
          { text: "Documentation", link: "/developer/" },
          { text: "Get Involved", link: "/contribute/" },
          { text: "Dev Chat", link: "https://t.me/iotexdev" }
        ],
        sidebar: {
          initialOpenGroupIndex: 1,
          "/introduction": [
            {
              collapsable: false,
              title: "Core Concepts Home",
              path: "/introduction/whatisiotex",
              children: [
                {
                  collapsable: true,
                  title: "The platform",
                  sidebarDepth: 0,
                  path: "/introduction/whatisiotex",
                  children: [
                    "introduction/whatisiotex",
                    "introduction/platform-overview",
                    "introduction/blockchain-layer",
                    "introduction/middleware-layer",
                    "introduction/tools-layer",
                    "introduction/governance"
                  ]
                },
                {
                  collapsable: true,
                  title: "Core Concepts",
                  sidebarDepth: 0,
                  path: "/introduction/account-concept",
                  children: [
                    "introduction/account-concept",
                    "introduction/IOTX-token-concept",
                    "introduction/private-key-concept",
                    "introduction/node-concept",
                    "introduction/action-concept",
                    "introduction/wallet-concept"
                  ]
                }
              ]
            }
          ],

          "/developer": [
            {
              collapsable: false,
              sidebarDepth: 0,
              title: "Developer Home",
              path: "/developer/",
              children: [
                {
                  title: "Software Tools",
                  collapsable: false
                },
                {
                  title: "Get Started",
                  path: "/developer/get-started/ioctl-install",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "/developer/get-started/ioctl-install",
                    "/developer/get-started/ioctl-create-account",
                    "developer/get-started/single-node",
                    "developer/get-started/interact",
                    "/developer/get-started/ioctl-send-transfer"
                  ]
                },
                {
                  title: "Smart Contracts",
                  path: "/developer/smart-contracts/introduction",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "/developer/smart-contracts/introduction",
                    "/developer/smart-contracts/issue-tokens",
                    "/developer/smart-contracts/token-metadata"
                  ]
                },
                {
                  title: "Antenna SDKs",
                  path: "/developer/sdk/overview",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "developer/sdk/overview",
                    {
                      title: "Installation",
                      path: "/developer/sdk/install-antenna-js",
                      sidebarDepth: 0,
                      collapsable: true,
                      children: [
                        "developer/sdk/install-antenna-js",
                        "developer/sdk/install-antenna-go",
                        "developer/sdk/install-antenna-swift",
                        "developer/sdk/install-antenna-java",
                        "developer/sdk/install-antenna-c"
                      ]
                    },
                    {
                      title: "Reference Code",
                      path: "/developer/sdk/account-create",
                      sidebarDepth: 0,
                      collapsable: true,
                      children: [
                        "/developer/sdk/account-create",
                        "/developer/sdk/transfer",
                        "/developer/sdk/xrc20",
                        "/developer/sdk/smart-contracts",
                        "/developer/sdk/iopay-integrate",
                        "/developer/sdk/did",
                        "/developer/sdk/rpc"
                      ]
                    }
                  ]
                },
                {
                  title: "Code Examples",
                  path: "/developer/examples/chain-info",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "/developer/examples/chain-info",
                    "/developer/examples/open-oracle",
                    "/developer/examples/xrc20-deploy"
                  ]
                },
                {
                  title: "IoTeX dApp Sample",
                  path: "/developer/dapp-starter/introduction",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "developer/dapp-starter/introduction"
                    // "developer/dapp-starter/pylon"
                  ]
                },
                {
                  title: "Middleware",
                  collapsable: false
                },
                {
                  title: "Decentralized Identity",
                  path: "/developer/did/overview",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "developer/did/overview",
                    "developer/did/self-managed-interface",
                    "developer/did/create-register",
                    "developer/did/query",
                    "developer/did/update",
                    "developer/did/delete",
                    "developer/did/resolution",
                    "developer/did/verifiable-credentials",
                    "developer/did/security-notes",
                    "developer/did/reference"
                  ]
                },
                {
                  title: "Secure Hardware",
                  collapsable: false
                },
                {
                  title: "Pebble",
                  path: "/developer/hardware/pebble",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "developer/hardware/pebble",
                    "developer/hardware/pebble-quick-start",
                    "developer/hardware/pebble-data-specs",
                    "developer/hardware/pebble-power-on",
                    "developer/hardware/pebble-dev-modes",
                    {
                      title: "Setup in Developer Mode",
                      path: "/developer/hardware/pebble-backend-configuration",
                      sidebarDepth: 0,
                      collapsable: true,
                      children: [
                        "/developer/hardware/pebble-backend-configuration",
                        "/developer/hardware/pebble-backend-integration"
                      ]
                    },
                    {
                      title: "Setup in Production Mode",
                      path: "/developer/hardware/pebble-aws-configuration",
                      sidebarDepth: 0,
                      collapsable: true,
                      children: [
                        "/developer/hardware/pebble-aws-configuration",
                        "/developer/hardware/pebble-aws-integration"
                      ]
                    },
                    {
                      title: "Integrate with IoTeX Blockchain",
                      path: "/developer/hardware/pebble-blockchain-tbrule",
                      sidebarDepth: 0,
                      collapsable: true,
                      children: [
                        "/developer/hardware/pebble-blockchain-tbrule",
                        "/developer/hardware/pebble-blockchain-apiserver"
                      ]
                    },
                    {
                      title: "Develop and Build the Firmware",
                      path: "/developer/hardware/pebble-build-linux",
                      sidebarDepth: 0,
                      collapsable: true,
                      children: [
                        "/developer/hardware/pebble-build-linux",
                        "/developer/hardware/pebble-build-windows",
                        "/developer/hardware/pebble-firmware-configure",
                        "/developer/hardware/pebble-flash"
                      ]
                    }
                  ]
                },
                {
                  title: "Reference",
                  collapsable: false
                },
                {
                  title: "ioctl Client",
                  path: "/developer/ioctl/install",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "developer/ioctl/install",
                    "developer/ioctl/config",
                    "developer/ioctl/account",
                    "developer/ioctl/hdwallet",
                    "developer/ioctl/alias",
                    "developer/ioctl/action",
                    "developer/ioctl/bc",
                    "developer/ioctl/node",
                    "developer/ioctl/contract",
                    "developer/ioctl/stake2",
                    "developer/ioctl/xrc20",
                    "developer/ioctl/did"
                  ]
                },
                {
                  title: "Core gRPC API",
                  path: "/developer/core-api/api",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: ["/developer/core-api/api"]
                },
                {
                  title: "GraphQL API",
                  path: "/developer/graphql/analytics",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "/developer/graphql/analytics",
                    "/developer/graphql/member-portal"
                  ]
                },
                {
                  title: "More Resources",
                  collapsable: false
                },
                {
                  title: "Clone Finished Projects",
                  path: "/developer/complete-projects/rolling-dice",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "/developer/complete-projects/rolling-dice",
                    "/developer/complete-projects/hermes"
                  ]
                },
                {
                  title: "Exchanges Integration",
                  path: "/developer/integrations/rosetta",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "/developer/integrations/rosetta",
                    "/developer/integrations/guide"
                  ]
                },
                {
                  title: "Misc Tools",
                  path: "/developer/more/action-injector",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "/developer/more/faucets",
                    "/developer/more/action-injector",
                    "/developer/more/bookkeeping"
                  ]
                }
              ]
            }
          ],

          "/contribute": ["/contribute/"]
        }
      }
    }
  },

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"
      }
    ],
    ["link", { rel: "icon", href: `/img/favicon.png` }],
    // ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c"
      }
    ],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  serviceWorker: false
};
