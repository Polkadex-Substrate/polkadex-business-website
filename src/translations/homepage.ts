
const ENLanguage = {
  header: {
    topLinks: [
      {
        title: 'Orderbook',
        href: '/orderbook',
        soon: false,
      },
      {
        title: 'Staking',
        href: '/staking',
        soon: false,
      },
      {
        title: 'Hyperbridge',
        href: 'https://hyperbridge.network',
        soon: false,
      },
      {
        title: 'Explorer',
        href: 'https://explorer.polkadex.ee',
        soon: false,
      },
      {
        title: 'Docs',
        href: 'https://docs.polkadex.ee/',
        soon: false,
      },
    ],
    bottomLinks: [
      {
        title: 'Overview',
        href: 'hero',
      },
      {
        title: 'Features',
        href: 'features',
      },
      {
        title: 'Roadmap',
        href: 'roadmap',
      },
      {
        title: 'Team',
        href: 'team',
      },
      {
        title: 'Token Economics',
        href: 'tokenEconomics',
      },
    ],
    ctaButton: 'Join on Telegram',
  },
  announcement: {
    title: 'Polkadex Contract',
    ctaButton: 'See at Etherscan',
  },
  hero: {
    title: 'The trading engine for Web3 and DeFi',
    description:
      'Polkadex is a fully decentralized peer-to-peer orderbook-based cryptocurrency exchange for DeFi, built on Substrate as a sovereign Layer 1 network',
    ctaButton: 'Orderbook',
    ctaLink: process.env.ORDERBOOK_LINK,
    secondaryCtaButton: 'Mainnet Explorer',
    secondaryCtaLink:
      'https://explorer.polkadex.ee',
    chainsTitle: 'Supported Chains',
  },
  orderbook: {
    tag: 'Products',
    title: 'Polkadex',
    highlight: 'Orderbook',
    description:
      'Polkadex Orderbook is a non-custodial exchange application running on the Polkadex Layer 1 Network',
    ctaButton: 'Polkadex Orderbook',
    cards: [
      {
        title: 'Register multiple hot wallets',
        description:
          'Connect hot wallets based on browser extensions, mobile phones or iPads and add on-chain trading bots to automate trading with your funds',
        icon: 'MultipleWallets',
      },
      {
        title: 'Delegate your assets to third parties',
        description:
          'Manage your assets with Polkadex Orderbook and delegate them to third parties. Make profits through algorithmic trading while still keeping control of your crypto assets',
        icon: 'ThirdParty',
      },
      {
        title: 'Keep your assets safe and secure',
        description:
          'Leave your assets on the exchange without worrying about hacks and save on transaction fees for moving your funds in and out every time you want to trade',
        icon: 'SecureAssets',
      },
    ],
    technologiesTitle: 'Technologies',
  },
  partners: {
    tag: 'Growing with',
    title: 'Ecosystem',
    highlight: 'Partners',
    description:
      'Our official collaborators who help us create the ultimate trading products and spread the word about Polkadex',
  },
  otherProducts: [
    {
      releaseTag: 'Soon',
      releaseDate: 'Q1 - 2022',
      title: 'Polkadex IDO Platform',
      description:
        'Polkadex IDO Platform allows token projects to create ERC-20 like tokens. Teams can raise funds and get listed on the Polkadex exchange in one click',
      img: 'polkadexIDO',
      alt: 'Misterious Polkadex IDO Platform screenshot',
    },
    {
      releaseTag: 'Soon',
      releaseDate: 'Q1 - 2022',
      title: 'Polkadex Mobile',
      description:
        'Polkadex Mobile allows traders to place modify and cancel trades from their air-gapped cold wallets as well as receive funds directly to it. It shows a paradigm shift in traditional trading',
      img: 'polkadexAppMobile',
      alt: 'Misterious Polkadex Mobile App screenshot',
    },
  ],
  features: {
    tag: 'Features',
    title: 'The Future of ',
    highlight: 'Decentralized Trading',
    description:
      'Polkadex is the first project featuring an orderbook based cross-chain decentralized spot exchange in the world.',
    cards: {
      bridge: {
        title: 'Trustless Cross-Chain Transfers',
        description:
          'Trustless cross-chain bridges help to bring any blockchain token to Polkadex in a non-custodial and trustless manner. It functions through Hyperbridge across Ethereum and other EVM networks. Polkadex is built for the future making it possible to integrate with other liquidity providers using forkless upgrades. We do not have access to user funds or smart contract keys',
        ctaButton: 'Learn More',
        plannedBridgesTitle: 'Planned Bridges',
        plannedBridgesCards: [
        ],
      },
      tradingBots: {
        title: 'On-Chain Trading Bots',
        description:
          'Trading bots on Polkadex bring High-Frequency Trading (HFT) to both retail and institutional investors. Zero cancellation fees allow traders to enter and exit the markets in a dynamic fashion based on the market situation and incentivize API endpoints for both trading bot companies and liquidity providers. Moreover the unique architecture of Polkadex eliminates such bottlenecks of traditional decentralized exchanges as front-running of orders by paying higher gas fees',
        ctaButton: 'Learn More',
      },
      offchainStateCommits: {
        title: 'Offchain',
        highlight: 'State Commits',
        tag: 'v2',
        description: `Polkadex Orderbook uses a Trusted Execution Environment (TEE) on the Polkadex Layer 1 network that allows an operator to maintain the Orderbook. The results produced by the TEE contain cryptographic proof. In the event of tampering the blockchain can invalidate the proof thereby not accepting the tampered state submitted by the Operator. The users' funds always stay in the native blockchain and are controlled by the user. In this way Polkadex ensures that only the trader"s private key can initiate a balance transfer`,
      },
      benefits: {
        title: 'Unmatched performance',
        description:
          'Polkadex scales to 500K transactions per second and sub-millisecond latency. The latest leaps in technological development enable Polkadex to keep the advantages of centralized exchanges and at the same time support High-Frequency Trading maintaining the highest level of security of user funds',
        ctaButton: 'Learn More',
        subtitle: 'More Features',
        cards: [
          {
            title: 'High-Frequency Trading',
            description:
              'Polkadex can connect to all the favourite trading bots of the community seamlessly enabling users to implement multiple trading strategies',
            icon: 'Speed',
            alt: 'Block speed icon',
          },
          {
            title: 'Polkadex IDO pallet',
            description:
              'Polkadex IDO pallet allows token projects to create ERC-20 like tokens with built-in support for parachain transfers and one-click listing in the Polkadex Orderbook. It also helps teams to raise funds through IDOs in a decentralized manner',
            icon: 'Ido',
            alt: '',
          },
          {
            title: 'Polkadex Fiat',
            description:
              'Polkadex supports fiat currencies in the Polkadex Orderbook. Traders can easily use a credit card to buy crypto',
            icon: 'Fiat',
            alt: '',
          },
          {
            title: 'Decentralized KYC Option',
            description:
              'At Polkadex we believe that traders deserve privacy. Hence we have decentralized the KYC process for our users offering to store their data on wallets instead of our platform',
            icon: 'Kyc',
            alt: '',
          },
          {
            title: 'Polkadex NFTs',
            description:
              'Polkadex NFTs will gamify our trading ecosystem and make it more fun for users. We aim to provide this functionality shortly after the Mainnet launch',
            icon: 'Nft',
            alt: '',
          },
          {
            title: 'New Token Generation',
            description:
              'Tokens generated in Polkadex have native support for cross-chain transfers to other parachains and networks connected to our ecosystem. Thus we eliminate the need to conduct expensive audits and delays in new token releases for the project teams',
            icon: 'Token',
            alt: '',
          },
          {
            title: 'High liquidity',
            description:
              'Polkadex enables institutional liquidity on the platform with the help of a decentralized KYC system',
            icon: 'Liquidity',
            alt: '',
          },
          {
            title: 'Forkless Upgrade',
            description:
              'Polkadex upgrades for new features bridges to new blockchains bug fixes and performance improvements do not require hard forks',
            icon: 'Upgrade',
            alt: '',
          },
        ],
      },
    },
  },
  investors: {
    tag: 'Supported & Funded by',
    title: 'Strategic',
    highlight: 'Investors',
    description:
      'The early backers who supported and funded Polkadex helping us reach our goals and aim even higher',
  },
  team: {
    tag: 'Team',
    title: 'Part of our team',
    highlight: 'of 20+ motivated members',
    cards: [
      {
        title: 'Executive Director',
        name: 'Vivek Prasannan',
        image: 'vivekPhotography',
        socialMedia: [
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/vivekprasannan/',
          },
        ],
      },
      {
        title: 'Chief Executive Officer',
        name: 'Gautham J',
        image: 'gauthamPhotography',
        socialMedia: [
          {
            name: 'Github',
            link: 'https://github.com/Gauthamastro',
          },
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/gautham-j-a4a559133/',
          },
        ],
      },
      {
        title: 'Chief Operating Officer',
        name: 'Deepansh Singh',
        image: 'deepanshPhotography',
        socialMedia: [
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/deepanshconnect/',
          },
        ],
      },
      {
        title: 'Chief Community Manager',
        name: 'Francis Dufour',
        image: 'francisPhotography',
        socialMedia: [
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/francis-dufour-25357960/',
          },
        ],
      },
      {
        title: 'Marketing Manager',
        name: 'Pablo Solanas Martin',
        image: 'pabloPhotography',
        socialMedia: [
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/pablosolanasmartin/',
          },
        ],
      },
      {
        title: 'Lead Frontend Engineer',
        name: 'Emmanuel Thomas',
        image: 'emmanuelPhotography',
        socialMedia: [
          {
            name: 'Github',
            link: 'https://github.com/nuel77',
          },
          {
            name: 'LinkedIn',
            link: 'https://linkedin.com/in/nuel77',
          },
          {
            name: 'Twitter',
            link: 'https://twitter.com/_nuel_1999',
          },
        ],
      },
      {
        title: 'Senior Blockchain Engineer',
        name: 'Krishna Singh',
        image: 'zkPhotography',
        socialMedia: [
          {
            name: 'Github',
            link: 'https://github.com/zktony',
          },
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/krishna-singh-b37671170',
          },
        ],
      },
      {
        title: 'Software Engineer',
        name: 'Arjun Porwal',
        image: 'arjunPhotography',
        socialMedia: [
          {
            name: 'Github',
            link: 'https://github.com/ap211unitech',
          },
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/arjun-porwal-9198b71a3/',
          },
          {
            name: 'Twitter',
            link: 'https://twitter.com/arjun_porwal_33',
          },
        ],
      },
      {
        title: 'Product Manager',
        name: 'Pavan Kanteti',
        image: 'pavanPhotography',
        socialMedia: [
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/pavankanteti/',
          },
        ],
      },
      {
        title: 'UX/UI Designer',
        name: 'Rodolfo Ferreira',
        image: 'rodolfoPhotography',
        socialMedia: [
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/rodolfo-ferreira-91824819a/',
          },
        ],
      },
      {
        title: 'Graphic Designer',
        name: 'Nitika Khandelwal',
        image: 'nitikaPhotography',
        socialMedia: [
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/nitika-khandelwal-0a167615a/',
          },
        ],
      },
      {
        title: 'Threshold Cryptography Advisor',
        name: 'Omer Shlomovits',
        image: 'omerPhotography',
        socialMedia: [
          {
            name: 'Twitter',
            link: 'https://twitter.com/OmerShlomovits',
          },
        ],
      },
      {
        title: 'Cryptoeconomic Advisor',
        name: 'Matthias Hafner',
        image: 'matthiasPhotography',
        socialMedia: [
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/matthias-hafner-26b069b8/',
          },
        ],
      },
      {
        title: 'Strategic Advisor',
        name: 'Sherwin Lee',
        image: 'sherwinPhotography',
        socialMedia: [
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/sherwin-lee-89735b153/',
          },
        ],
      },
      {
        title: 'Legal Counsel',
        name: 'Zhi Hao Loy',
        image: 'zhiPhotography',
        socialMedia: [
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/loyzhihao/',
          },
        ],
      },
    ],
  },
  roadmap: {
    tag: 'Roadmap',
    title: 'Polkadex',
    highlight: 'Journey',
    description:
      'We started our journey with the idea of bringing the best DeFi experience to users and keep moving closer to our goal with each step',
    cards: [
      {
        title: '2027 →',
        alignRight: false,
        position: {
          horizontal: {
            side: 'right',
            distance: 26,
          },
          vertical: {
            side: 'top',
            distance: -11,
          },
        },
        items: [
          { title: 'Cross-chain deposits and withdrawals', status: false },
          { title: 'Liquidity Incentive Program', status: false },
          { title: 'Market Maker onboarding at scale', status: false },
          { title: 'Strategic Funding Round', status: false },
          { title: 'Polkadex DAO · Sudo-key removal', status: false },
        ],
      },
      {
        title: '2026',
        alignRight: true,
        invert: true,
        position: {
          horizontal: {
            side: 'left',
            distance: 4,
          },
          vertical: {
            side: 'top',
            distance: 17,
          },
        },
        items: [
          { title: 'Polkadex 2.0 Testnet relaunch (Q3)', status: true },
          { title: 'Hyperbridge integration', status: true },
          { title: 'Orderbook Mainnet relaunch (Q4)', status: false },
          { title: 'Market-making infrastructure re-activated', status: false },
        ],
      },
      {
        title: '2024 – 2025',
        alignRight: false,
        position: {
          horizontal: {
            side: 'right',
            distance: 4,
          },
          vertical: {
            side: 'top',
            distance: 2,
          },
        },
        items: [
          { title: 'Hestia release — wallet-based sign-up', status: true },
          { title: 'Automatic fee conversion to PDEX', status: true },
          { title: 'Hummingbot connector integration', status: true },
          { title: 'Launch-phase market maker onboarded', status: true },
          { title: 'First spot market pair listings', status: true },
        ],
      },
      {
        title: '2023',
        alignRight: true,
        invert: true,
        position: {
          horizontal: {
            side: 'left',
            distance: -3,
          },
          vertical: {
            side: 'top',
            distance: 58,
          },
        },
        items: [
          { title: 'Hyperbridge internal testnet', status: true },
          { title: 'XCM channels with parachains', status: true },
          { title: 'Code audits — Parachain & Hyperbridge', status: true },
          { title: 'Parachain listings on Polkadex', status: true },
        ],
      },
      {
        title: '2022',
        alignRight: false,
        position: {
          horizontal: {
            side: 'right',
            distance: 0,
          },
          vertical: {
            side: 'bottom',
            distance: 48,
          },
        },
        items: [
          { title: 'Polkadex Orderbook Mainnet', status: true },
          { title: 'Orderbook Public Testnet + Beta', status: true },
          { title: 'Open Beta Program', status: true },
          { title: 'PolkaIDO Beta + Public Testnet', status: true },
          { title: 'Mobile App Public Testnet', status: true },
        ],
      },
      {
        title: '2021',
        alignRight: true,
        invert: true,
        position: {
          horizontal: {
            side: 'left',
            distance: 25,
          },
          vertical: {
            side: 'bottom',
            distance: 15,
          },
        },
        items: [
          { title: 'Public Sale', status: true },
          { title: 'Testnet V2 + V3 launches', status: true },
          { title: 'Security audit', status: true },
          { title: 'Mainnet launch', status: true },
          { title: 'ERC-20 → native PDEX migration', status: true },
        ],
      },
      {
        title: '2020',
        alignRight: true,
        invert: true,
        position: {
          horizontal: {
            side: 'left',
            distance: 50,
          },
          vertical: {
            side: 'bottom',
            distance: 0,
          },
        },
        items: [
          { title: 'Web3 Foundation Milestone #1', status: true },
          { title: 'Whitepaper release', status: true },
          { title: 'Website launch', status: true },
          { title: 'Testnet V1', status: true },
          { title: 'SAFT-based token pre-sale', status: true },
        ],
      },
    ],
  },
  tokenEconomics: {
    tag: 'Token Economics',
    title: 'Distribution of',
    highlight: 'Tokens',
    totalSupply: {
      title: 'Total Supply',
      subTitle: '20,000,000 PDEX',
    },
    circulationSupply: {
      title: 'Initial Circulating Supply',
      subTitle: '1,963,860 PDEX',
      smallText: '9.8193% of total supply',
    },
    cards: [
      {
        percent: '9%',
        title: 'Founders and team',
        description:
          '20% initial unlocked 12 months after the Mainnet launch and remaining vested quarterly',
        tokens: '1,800,000 tokens',
        position: {
          horizontal: {
            side: 'left',
            distance: 20,
          },
          vertical: {
            side: 'top',
            distance: 4,
          },
        },
      },
      {
        percent: '7%',
        title: 'Seed round',
        description: '20% initial and remaining vested quarterly',
        tokens: '1,400,000 tokens',
        position: {
          horizontal: {
            side: 'left',
            distance: 38,
          },
          vertical: {
            side: 'top',
            distance: 20,
          },
        },
      },
      {
        percent: '8%',
        title: 'Strategic round',
        description: '25% initial and remaining vested quarterly',
        tokens: '1,600,000 tokens',
        position: {
          horizontal: {
            side: 'left',
            distance: 46,
          },
          vertical: {
            side: 'top',
            distance: 34,
          },
        },
      },
      {
        percent: '10.193%',
        title: 'Private round',
        description: '30% initial and remaining vested quarterly',
        tokens: '2,038,600 tokens',
        position: {
          horizontal: {
            side: 'left',
            distance: 50.5,
          },
          vertical: {
            side: 'top',
            distance: 49,
          },
        },
      },
      {
        percent: '41%',
        title: 'Treasury',
        description: 'Exchange Listings and Governance (locked in Treasury)',
        tokens: '8,200,000 tokens',
        position: {
          horizontal: {
            side: 'left',
            distance: 52,
          },
          vertical: {
            side: 'top',
            distance: 63,
          },
        },
      },
      {
        percent: '10%',
        title: 'Parachain auction',
        tokens: '2,000,000 tokens',
        position: {
          horizontal: {
            side: 'left',
            distance: 50.5,
          },
          vertical: {
            side: 'top',
            distance: 78,
          },
        },
      },
      {
        percent: '6%',
        title: 'Advisors',
        description:
          '10% initial release six months after the Token Generation Event and remaining vested quarterly',
        tokens: '1,200,000 tokens',
        position: {
          horizontal: {
            side: 'left',
            distance: 47.5,
          },
          vertical: {
            side: 'top',
            distance: 90,
          },
        },
      },
      {
        percent: '6.807%',
        title: 'Marketing, Ecosystem and Partnerships',
        description: '20% initial and remaining vested quarterly',
        tokens: '1,361,400 tokens',
        position: {
          horizontal: {
            side: 'left',
            distance: 39,
          },
          vertical: {
            side: 'top',
            distance: 108,
          },
        },
      },
      {
        percent: '2%',
        title: 'Community Round',
        description: 'No vesting',
        tokens: '400,000 tokens',
        position: {
          horizontal: {
            side: 'left',
            distance: 25,
          },
          vertical: {
            side: 'bottom',
            distance: 1,
          },
        },
      },
    ],
  },
  media: {
    tag: 'Media',
    title: 'Polkadex',
    highlight: 'News',
    description: 'The latest and greatest news from the Polkadex team',
    ctaButton: 'Polkadex News',
  },
  newsletter: {
    title: 'Subscribe to our newsletter',
    description: 'Stay up to date with Polkadex news!',
    formPlaceholder: 'Enter your email',
    formButton: 'Subscribe',
  },
  footer: {
    full: true,
    rowLinks: {
      polkadex: {
        title: 'Polkadex',
        links: [
          {
            title: 'Overview',
            href: 'hero',
          },
          {
            title: 'Features',
            href: 'features',
          },
          {
            title: 'Roadmap',
            href: 'roadmap',
          },
          {
            title: 'Team',
            href: 'team',
          },
          {
            title: 'Token Economics',
            href: 'tokenEconomics',
          },
        ],
      },
      community: {
        title: 'Community',
        links: [

          {
            title: 'Web3 Foundation',
            href: 'https://web3.foundation/',
          },
        ],
      },
      resources: {
        title: 'Resources',
        links: [
          {
            title: 'Documentation',
            href: 'https://docs.polkadex.ee/',
          },
          {
            title: 'Github Repository',
            href: 'https://github.com/Polkadex-Substrate',
          },
          {
            title: 'Substrate',
            href: 'https://www.substrate.io/',
          },
          {
            title: 'Brand Assets',
            href: '/brandAssets',
          },
          {
            title: 'Listing',
            href: '/listing',
          },
        ],
      },
      products: {
        title: 'Products',
        links: [
          {
            title: 'Polkadex Orderbook',
            href: '/orderbook',
          },
          {
            title: 'Polkadex IDO',
            href: 'https://docs.polkadex.ee/IDOPlatform',
          },
        ],
      },
    },
    copyright: 'Copyright © 2023 Polkadex, Inc',
    bottomLinks: [
      {
        title: 'Terms and Privacy Policy',
        href: 'https://github.com/Polkadex-Substrate/Docs/blob/master/Polkadex_Privacy_Policy.pdf',
      },
    ],
  },
  releases: [
    {
      title: 'Prometheus release',
      emoji: '💫',
      completed: true,
      phase: 'Phase 0',
      items: [
        'Release Orderbook Beta to the public.',
        'Implement bug fixes for Orderbook Beta.',
        'Improve the User Interface and User Flow',
        'Establish XCMP channels with ecosystem projects.',
      ],
    },
    {
      title: 'Sudo-keys removed',
      emoji: '🗳️',
      completed: true,
      phase: 'Phase 1',
      items: [
        'No sudo keys. All protocol upgrades are governed on-chain.',
        'No single entity can control the network or user funds.',
      ],
    },
    {
      title: 'Hyperbridge integration',
      emoji: '🔥',
      completed: true,
      phase: 'Phase 2',
      items: [
        'Secure cross-chain transfers using Hyperbridge.',
        'Expand supported assets — first spot market pairs listed on the Orderbook.',
        'Automatic fee conversion to PDEX from native assets for account registration, transaction fees, deposits, and withdrawals.',
        'Remove claim processes for deposits and withdrawals on Hyperbridge and Polkadex Orderbook.',
        'Integrate with Hummingbot connector for algorithmic trading.',
        'Onboard launch-phase market makers.',
      ],
    },
    {
      title: 'Polkadex 2.0 · Testnet',
      phase: 'Q3 2026',
      emoji: '🚀',
      active: true,
      items: [
        'Orderbook Testnet relaunch on the new Polkadex 2.0 architecture.',
        'Hyperbridge integration for cross-chain testnet transfers.',
        'Public testing via the Testnet Guide with live cross-chain PDEX flows.',
      ],
    },
    {
      title: 'Polkadex 2.0 · Mainnet',
      phase: 'Q4 2026',
      emoji: '⚡',
      items: [
        'Orderbook Mainnet relaunch on the new architecture.',
        'Trading live across native and Hyperbridge-bridged assets.',
        'Market-making infrastructure re-activated with launch partners.',
      ],
    },
    {
      title: 'Post-launch expansion',
      phase: 'Next',
      emoji: '🌐',
      items: [
        'Cross-chain deposits and withdrawals via Hyperbridge.',
        'Liquidity Incentive Program for LPs.',
        'Market Maker onboarding at scale.',
        'Strategic Funding Round to accelerate execution.',
      ],
    },
    {
      title: 'Long-term vision',
      phase: 'Beyond',
      emoji: '💯',
      items: [
        'Democratic listing process for new markets via governance.',
        'Native dApp integrations with 3rd-party service providers.',
        'Initiate the Polkadex DAO.',
      ],
    },
  ],
};

export const HomeTranslations = {
  'en-US': {
    ...ENLanguage,
  },
};

export type IHomeTranslations = typeof ENLanguage;
