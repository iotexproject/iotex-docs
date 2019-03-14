/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const references = {
  roadmap: {
    href: 'https://iotex.io/#roadmap',
    name: 'ROADMAP',
  },
  explorer: {
    href: 'https://iotexscan.io/ ',
    name: 'EXPLORER',
  },
  partnership: {
    href: 'https://iotex.io/partnership',
    name: 'PARTNERSHIP',
  },
  team: {
    href: 'https://iotex.io/#team ',
    name: 'TEAM',
  },
  career: {
    href: 'https://hire.withgoogle.com/public/jobs/iotexio ',
    name: 'CAREER',
  },
  faq: {
    href: 'https://iotex.io/FAQ ',
    name: 'FAQ',
  },
  gettingStarted: {
    href: 'sdk-overview',
    name: 'GETTING STARTED',
  },
  guides: {
    href: 'guides',
    name: 'GUIDES',
  },
  github: {
    href: 'https://github.com/iotexproject',
    name: 'GITHUB',
  },
  apiReference: {
    href: 'iotex-client-js',
    name: 'API REFERENCE',
  },
  contribute: {
    href: 'https://github.com/iotexproject/iotex-core/wiki/Developers\'-Guide',
    name: 'CONTRIBUTE',
  },
  getHelp: {
    href: 'https://gitter.im/iotex-dev-community/Lobby',
    name: 'GET HELP',
  },
  binance: {
    href: 'https://support.binance.com/hc/en-us/articles/360004401292-Binance-Lists-IoTeX-IOTX-',
    name: 'BINANCE',
  },
  gate_io: {
    href: 'https://gateio.io/article/16457',
    name: 'GATE.IO',
  },
  kucoin: {
    href: 'https://news.kucoin.com/en/iotex-iotx-gets-listed-on-kucoin-world-premiere/',
    name: 'KUCOIN',
  },
  wallet: {
    href: 'https://iotexscan.io/wallet',
    name: 'WALLET(TESTNET)',
  },
  telegram: {
    href: 'https://t.me/IoTeXGroup',
    name: 'TELEGRAM',
  },
  twitter: {
    href: 'https://twitter.com/iotex_io',
    name: 'TWITTER',
  },
  reddit: {
    href: 'https://www.reddit.com/r/IoTeX/',
    name: 'REDDIT',
  },
  medium: {
    href: 'https://medium.com/@iotex',
    name: 'MEDIUM',
  },
  linkedin: {
    href: 'https://www.linkedin.com/company/iotex/',
    name: 'LINKEDIN',
  },
  forum: {
    href: 'http://forum.iotex.io/',
    name: 'FORUM',
  }
};

const siteConfig = {
  title: 'Documentation', // Title for your website.
  tagline: 'IoTeX is a Decentralized Network for Internet of Things Powered by a Privacy-Centric Blockchain.',
  url: 'http://docs.iotex.me/', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'iotex-docs',
  organizationName: 'iotexproject',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'guides', label: 'Guides'},
    {doc: 'sdk-overview', label: 'SDK'},
    { href: "https://github.com/iotexproject/", label: `GitHub `, external: true },
  ],

  cname: 'docs.iotex.io',

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: '/iotex.io/logo.svg',
  footerIcon: '/iotex.io/logo.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#051626',
    secondaryColor: '#11161B',
  },

  /* Custom fonts for website */
  fonts: {
    myFont: [
      "Noto Sans",
      "Arial"
    ],
    shareText: [
      "Share Tech",
      "Noto Sans"
    ],
    /*myOtherFont: [
      "-apple-system",
      "system-ui"
    ]*/
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} IoTeX`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  // scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/iotexproject/iotex-docs',
  algolia: {
    apiKey: '9a96e72018d66972847bcead65ec3d59',
    indexName: 'iotex',
    algoliaOptions: {
    } // Optional, if provided by Algolia
  },

  editUrl: 'https://github.com/iotexproject/iotex-docs/edit/master/docs/',
  gaTrackingId: 'UA-111756489-6',
  enableUpdateTime: true,
  scrollToTop: true,
  wrapPagesHTML: true,
  footerLinks: [
    {
      name: 'LEARN',
      links: [references.roadmap,
        references.explorer,
        references.partnership,
        references.team,
        references.career,
        references.faq]
    },
    {
      name: 'DEVELOP',
      links: [references.gettingStarted,
        references.guides,
        references.github,
        references.apiReference,
        references.contribute,
        references.getHelp]
    },
    {
      name: 'INVEST',
      links: [references.binance,
        references.gate_io,
        references.kucoin,
        references.wallet]
    },
    {
      name: 'CONNECT',
      links: [references.telegram,
        references.twitter,
        references.reddit,
        references.medium,
        references.linkedin,
        references.forum
      ]
    }
  ]
};

module.exports = siteConfig;
