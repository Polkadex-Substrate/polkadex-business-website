const ENLanguage = {
  header: {
    topLinks: [
      {
        title: 'Overview',
        href: '/',

        soon: false,
      },
      {
        title: 'Features',
        href: '/ll1',
        soon: false,
      },
      {
        title: 'Architecture',
        href: '/ll2',
        soon: false,
      },
      {
        title: 'Devices',
        href: '/ll3',
        soon: false,
      },
    ],
    products: {
      title: 'Products',
      data: [
        { text: 'Orderbook', new: false },
        { text: 'PolkaIDO', new: true },
        { text: 'Staking', new: false },
        { text: 'Liquidity Mining', new: false },
        { text: 'Thea Bridge', new: true },
      ],
    },
    bottomLinks: [
      {
        title: 'Resources',
        data: ['Roadmap', 'Ecosystem', 'Wiki', 'Blog (Learn)'],
      },
      {
        title: '',
        data: ['Crowdloans', 'Explorer', 'Network (governance)', 'Migrate'],
      },
      {
        title: 'About',
        data: ['Vision', 'Team', 'Tokenomics', 'Brand Assets'],
      },
      {
        title: 'Community',
        data: ['Twitter', 'Discord', 'Telegram', 'Reddit', 'Github'],
      },
    ],
    ctaButton: 'TradeNow',
    menuButton: 'All Polkadex',
  },
  oldHeader: {
    topLinks: [
      {
        title: 'Staking',
        href: '/staking',
        soon: false,
      },
      {
        title: 'Subscan',
        href: 'https://polkadex.subscan.io/',
        soon: false,
      },
      {
        title: 'THEA',
        href: '#',
        soon: true,
      },
      {
        title: 'Explorer',
        href: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmainnet.polkadex.trade#/explorer',
        soon: false,
      },
      {
        title: 'Docs',
        href: 'https://docs.polkadex.trade/',
        soon: false,
      },
      {
        title: 'Crowdloans',
        href: 'https://polkadex.medium.com/polkadex-has-secured-a-parachain-slot-a04513f2c913',
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
  promo: {
    title: 'The CEXiest DEX in DeFi',
    subtitle: 'The best of centralized exchanges',
    advantage: 'The best of decentralized exchanges',
    disadvantage: ' The disadvantages of both',
    polkadex: 'Polkadex Orderbook',
    available: 'Available on',
    button: 'Trade now',
    learn: 'Learn more',
  },
  announcement: {
    title: 'Polkadex Contract',
    ctaButton: 'See at Etherscan',
  },
  hero: {
    title: 'The trading engine for Web3 and DeFi',
    description:
      'Polkadex is a fully decentralized peer-to-peer orderbook-based cryptocurrency exchange for the DeFi ecosystem built on Substrate',
    ctaButton: 'Orderbook Open Beta',
    ctaLink: 'http://orderbook-beta.polkadex.trade',
    secondaryCtaButton: 'Mainnet Explorer',
    secondaryCtaLink:
      'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmainnet.polkadex.trade#/explorer',
    chainsTitle: 'Supported Chains',
  },
  orderbook: {
    tag: 'Products',
    title: 'How is it all possible',
    highlight: 'Orderbook',
    description:
      'A unique combination of multiple state-of-the-art technologies like blockchain, Polkadot parachains, TEE, Polkadex Orderbook is at the cutting edge of innovation in DeFi.',
    fullDescription:
      'Essentially, Polkadex Orderbook is a Layer 2 SubstraTEE (an abstraction layer for the Substrate framework of the SGX Trusted Execution Environment) scaling solution on top of the Polkadex network.\n\nInteresting fact: Polkadex is not only the first project to use the Substrate Abstraction Layer for SGX technology to build a decentralized exchange, but it is also one of the first use cases of this technology in general.',
    ctaButton: 'Polkadex Orderbook',
    button: 'Open trading account',
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
      'Polkadex is the first project featuring an orderbook based exchange in the Polkadot ecosystem',
    cards: {
      bridge: {
        title: 'Trustless Cross-Chain Transfers',
        description:
          'Trustless cross-chain bridges help to bring any blockchain token to Polkadex in a non-custodial and trustless manner. It functions through Parachain with Polkadot network and Snowfork with Ethereum network. Polkadex is built for the future making it possible to integrate with other liquidity providers using forkless upgrades. We do not have access to user funds or smart contract keys',
        ctaButton: 'Learn More',
        plannedBridgesTitle: 'Planned Bridges',
        plannedBridgesCards: [
          {
            title: 'Polkadot',
            description:
              'Once Polkadex becomes a parachain, it will be able to connect to any other parachain and Polkadot network itself to share assets in a trustless way. Polkadex will also get the ability to bring assets from Ethereum to Polkadex',
          },
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
        description: `Polkadex Orderbook implements a Layer 2 Trusted Execution Environment (TEE) on top of Polkadex that allows an operator to maintain the Orderbook. The results produced by the TEE contain cryptographic proof. In the event of tampering the blockchain can invalidate the proof thereby not accepting the tampered state submitted by the Operator. The users' funds always stay in the native blockchain and are controlled by the user. In this way Polkadex ensures that only the trader"s private key can initiate a balance transfer`,
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
  tradeAnywhere: {
    title: 'Trade anywhere, anytime',
    description:
      'Take Polkadex Orderbook with you and trade anywhere you want with the ',
    mobile: 'Polkadex Mobile App',
    advice:
      'Place, modify, and cancel trades from your mobile device while your private keys remain in your air-gapped cold wallet.',
    subtitle: 'Available on',
    possibleTitle: 'How is it all possible',
    possibleDescription:
      'A unique combination of multiple state-of-the-art technologies like blockchain, Polkadot parachains, TEE, Polkadex Orderbook is at the cutting edge of innovation in DeFi.',
    subDescription: [
      'Essentially, Polkadex Orderbook is a Layer 2 SubstraTEE (an abstraction layer for the Substrate framework of the SGX Trusted Execution Environment) scaling solution on top of the Polkadex network.',
      'Interesting fact: Polkadex is not only the first project to use the Substrate Abstraction Layer for SGX technology to build a decentralized exchange, but it is also one of the first use cases of this technology in general.',
    ],
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
        title: 'Head of Marketing',
        name: 'Dagmara Handzlik',
        image: 'dagmaraPhotography',
        socialMedia: [
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/dagmara-handzlik-15604534/',
          },
          {
            name: 'Twitter',
            link: 'https://twitter.com/DagaCMO',
          },
        ],
      },
      {
        title: 'Lead Community Manager',
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
        title: 'Social Media Manager',
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
        title: 'Flutter Engineer',
        name: 'Adriel Bomfim',
        image: 'adrielPhotography',
        socialMedia: [
          {
            name: 'Github',
            link: 'https://github.com/AdrielVBomfim',
          },
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/adrielvb/',
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
        title: 'Senior Frontend Engineer',
        name: 'Charles Chiakwa',
        image: 'charlesPhotography',
        socialMedia: [
          {
            name: 'Github',
            link: 'https://github.com/charleslukes',
          },
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/charles-chiakwa-b1796816a/',
          },
        ],
      },
      {
        title: 'Senior Rust Engineer',
        name: 'Ivan Temchenko',
        image: 'ivanPhotography',
        socialMedia: [
          {
            name: 'Github',
            link: 'https://github.com/35359595',
          },
        ],
      },
      {
        title: 'Junior Rust Engineer',
        name: 'Nakul Amate',
        image: 'nakulPhotography',
        socialMedia: [
          {
            name: 'Github',
            link: 'https://github.com/nakul1010',
          },
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/nakul-amate/',
          },
        ],
      },
      {
        title: 'Junior Rust Engineer',
        name: 'Faisal Ahmed',
        image: 'faisalPhotography',
        socialMedia: [
          {
            name: 'Github',
            link: 'https://github.com/felixfaisal',
          },
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/faisal-ahmed-farooq-6395a0174/',
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
      {
        title: 'Marketing Advisor',
        name: 'Garlam (가람) Won',
        image: 'garlamPhotography',
        socialMedia: [
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/garlam/',
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
        title: 'Q3 2020',
        alignRight: false,
        position: {
          horizontal: {
            side: 'left',
            distance: 0,
          },
          vertical: {
            side: 'top',
            distance: -10.5,
          },
        },
        items: [
          { title: 'Web3 Milestone #1', status: true },
          { title: 'Refactoring Polkadex Engine', status: true },
          { title: 'Code Documentation', status: true },
        ],
      },
      {
        title: 'Q4 2020',
        position: {
          horizontal: {
            side: 'left',
            distance: 40,
          },
          vertical: {
            side: 'top',
            distance: -8,
          },
        },
        items: [
          { title: 'Website Launch', status: true },
          { title: 'Whitepaper Release', status: true },
          { title: 'Testnet V1.0 Launch', status: true },
          { title: 'SAFT based Token PreSale', status: true },
        ],
      },
      {
        title: 'Q1-Q2 2021',
        alignRight: false,
        position: {
          horizontal: {
            side: 'right',
            distance: 20,
          },
          vertical: {
            side: 'top',
            distance: 5,
          },
        },
        items: [
          { title: 'Public Sale', status: true },
          {
            title: 'Testnet V2.0 Launch',
            status: true,
          },
          { title: 'Testnet V3.0 Launch', status: true },
          { title: 'Security Audit', status: true },
        ],
      },
      {
        title: 'Q3-Q4 2021',
        alignRight: true,
        position: {
          horizontal: {
            side: 'left',
            distance: 15,
          },
          vertical: {
            side: 'top',
            distance: 23,
          },
        },
        items: [
          { title: 'Mainnet Launch', status: true },
          { title: 'ERC20 to native PDEX migration', status: true },
          { title: 'Launch of Private Beta Tester Program', status: true },
          { title: 'Parachain Strategy Development', status: true },
        ],
      },
      {
        title: 'Q1 2022',
        alignRight: false,
        position: {
          horizontal: {
            side: 'right',
            distance: 0,
          },
          vertical: {
            side: 'bottom',
            distance: 40,
          },
        },
        items: [
          { title: 'PolkaIDO Beta', status: true },
          { title: 'PolkaIDO Public Testnet', status: true },
          { title: 'Polkadex Crowdloan Campaign', status: true },
          {
            title: 'Polkadex Orderbook Beta*',
            status: true,
            subInfo: 'Without blockchain integration',
            isHoverable: true,
          },
        ],
      },
      {
        title: 'Q2 2022',
        alignRight: true,
        invert: true,
        position: {
          horizontal: {
            side: 'left',
            distance: 0,
          },
          vertical: {
            side: 'bottom',
            distance: 20,
          },
        },
        items: [
          { title: 'THEA Public Testnet', status: true },
          {
            title: 'PolkaIDO* Public Testnet',
            status: true,
            subInfo: 'Token minting + token bridging',
            isHoverable: true,
          },
          { title: 'Polkadex secures Polkadot’s parachain slot', status: true },
          { title: 'Open Beta Program', status: true },
          {
            title: 'Polkadex Orderbook Public Testnet*',
            subInfo: 'With blockchain integration',
            isHoverable: true,
            status: true,
          },
        ],
      },
      {
        title: 'Q3 2022',
        alignRight: true,
        invert: true,
        position: {
          horizontal: {
            side: 'left',
            distance: 20,
          },
          vertical: {
            side: 'bottom',
            distance: 10,
          },
        },
        items: [
          { title: 'Orderbook Testnet with Withdrawals', status: true },
          {
            title: 'Cross Chain Transfer of test tokens to trade',
            status: true,
          },
        ],
      },
      {
        title: 'Q4 2022',
        alignRight: true,
        invert: true,
        position: {
          horizontal: {
            side: 'right',
            distance: 30,
          },
          vertical: {
            side: 'bottom',
            distance: -3,
          },
        },
        items: [
          { title: 'Mobile App Public Testnet', timeline: 'Early Q4' },
          { title: 'Polkadex Orderbook Mainnet', timeline: 'Early Q4' },
          { title: 'Release Polkadex Orderbook to Parachain' },
          {
            title: 'Polkadex Orderbook Mobile Apps* in app stores',
            subInfo: 'iOS & Android',
            isHoverable: true,
          },
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
  oldFooter: {
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
            title: 'Polkadot',
            href: 'https://www.polkadot.network/',
          },
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
            href: 'https://docs.polkadex.trade/',
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
        ],
      },
      products: {
        title: 'Products',
        links: [
          {
            title: 'Polkadex Orderbook',
            href: 'https://docs.polkadex.trade/orderbookIntroduction',
          },
          {
            title: 'Polkadex IDO',
            href: 'https://docs.polkadex.trade/IDOPlatform',
          },
        ],
      },
    },
    copyright: 'Copyright © 2022 Polkadex, Inc',
    bottomLinks: [
      {
        title: 'Terms and Privacy Policy',
        href: 'https://github.com/Polkadex-Substrate/Docs/blob/master/Polkadex_Privacy_Policy.pdf',
      },
    ],
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
            title: 'Polkadot',
            href: 'https://www.polkadot.network/',
          },
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
            href: 'https://docs.polkadex.trade/',
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
            title: 'Tutorials',
            href: '/tutorials',
          },
          {
            title: 'Open Beta',
            href: '/beta',
          },
        ],
      },
      company: {
        title: 'Company',
        links: [
          {
            title: 'About Us',
            href: 'https://docs.polkadex.trade/',
          },
          {
            title: 'Partners',
            href: 'https://github.com/Polkadex-Substrate',
          },
          {
            title: 'Contact',
            href: 'https://www.substrate.io/',
          },
          {
            title: 'Brand Assets',
            href: '/brandAssets',
          },
          {
            title: 'Careers',
            href: '/brandAssets',
          },
        ],
      },

      products: {
        title: 'Products',
        links: [
          {
            title: 'Polkadex Orderbook',
            href: 'https://docs.polkadex.trade/orderbookIntroduction',
          },
          {
            title: 'Polkadex IDO',
            href: 'https://docs.polkadex.trade/IDOPlatform',
          },
        ],
      },
    },
    copyright: 'Copyright © 2022 Polkadex, Inc',
    bottomLinks: [
      {
        title: 'Terms and conditions',
        href: 'https://github.com/Polkadex-Substrate/Docs/blob/master/Polkadex_Privacy_Policy.pdf',
      },
      {
        title: 'Privacy policy',
        href: 'https://github.com/Polkadex-Substrate/Docs/blob/master/Polkadex_Privacy_Policy.pdf',
      },
    ],
  },

  keys: {
    title: 'Your keys, your crypto, your exchange',
    description:
      'Polkadex Orderbook is non-custodial which means only you control your money.',
    highlight: 'No risk of security breach',
    firstDescription:
      'Unlike CEXs, Polkadex Orderbook is the first exchange where you can hold your funds without worrying about security breaches. There’s no centralized honeypot for hackers to go after.',
    secondDescription:
      'In other words, your funds remain safe and secure in your wallet at all times while being available for trading whenever you need them.',
    button: 'Start trading now',
  },

  speedlimits: {
    title: '500k TPS = no speed limits',
    descriptionFirst:
      'Trade crypto on a DEX that’s as fast as (if not faster than) CEXs',
    descriptionSecond:
      ' Capable of scaling to 500,000 transactions per second, Polkadex Orderbook is non-custodial crypto trading in real time with sub-milisecond latency.',

    sections: [
      {
        title: 'Cheaper',
        firstDescription: '0% trading fees for the first 6 months.',
        secondDescription: 'Zero gas fees.',
        thirdDescription: 'No order placement/cancellation fees.',
      },
      {
        title: 'Limit & market orders.',
        firstDescription: 'Get the exact price you want with limit orders.',
        secondDescription:
          'Market orders are executed instantly and transparently.',
      },
    ],
    buttonText: 'Trade now',
  },
  tradeStrategy: {
    title: 'All trading strategies are welcome',
    boost: 'Let bots trade',
    boostDesc:
      'Determine your strategy and let a robot do the rest. \n\nIntegrate a bot from popular trading bot providers to automate trading!',
    multipleAcc: 'Register multiple accounts',
    multipleAccDesc:
      'Use your desktop, phone, tablet, or any other device to register a hot wallet and trade wherever, whenever.\n\nHot wallets allow you to trade on the go without being able to withdraw or transfer your funds to other accounts. \n\nConvenience meets security.',
    delegate: 'Delegate',
    delegteDesc:
      'Whether it’s an algorithm or a fund manager, delegate your assets trading to a third party while keeping control of your funds and sit back and watch your profits roll in.',
  },
  feetDifference: {
    title: 'Feel the difference',
    subtitle: 'Start trading in real time with 0 gas fees',
    open_beta: 'Open an account',
  },
  polkadex: {
    title: 'The four core components of \n Polkadex Orderbook',
    tabs: [
      'Polkadex Network',
      'Trusted Execution Environment',
      'Orderbook Engine',
    ],
    cards: [
      {
        title: 'Polkadex Network',
        subtitle:
          'The native blockchain is maintained by PDEX staking, which secures the actions of Polkadex Orderbook.',
        desc: 'The Polkadex network connects to the Polkadex parachain via a Substrate-to-Substrate bridge, bringing in liquidity from other Polkadot parachains.',
        sec_desc:
          'The Polkadex network also connects to other blockchains like Ethereum via THEA bridge.',
        button: 'Make your first trade',
        learnMore: 'Learn more',
      },
      {
        title: 'Trusted Execution Environment (TEE)',
        subtitle:
          'Invented by Intel, TEE technology allows modern CPUs to have an isolated section independent of the Operating System, BIOS and other core components of a computer',
        desc: 'The main advantage is that the computation executed in the TEE is verified by the blockchain and any tampering in the logic will result in the blockchain rejecting the TEE.',
        sec_desc:
          'The Polkadex network also connects to other blockchains like Ethereum via THEA bridge.',
        button: 'Make your first trade',
        learnMore: 'Learn more',
      },
      {
        title: 'Orderbook Engine',
        subtitle: 'Runs a high-performance order book',
        desc: 'Matches trades. Provides orders with TEEs for verification and settlement.',
        sec_desc:
          'The Polkadex network also connects to other blockchains like Ethereum via THEA bridge.',
        button: 'Make your first trade',
        learnMore: 'Learn more',
      },
    ],
  },

  crossChain: {
    title: 'Truly cross-chain ',
    description: 'Trade tokens from the following \n\nsupported networks:',
    subDesc: 'Through the Polkadex parachain Polkadot and Polkadot parachains',
    dubDescTwo: 'Through THEA bridge Ethereum',
    readMore: 'Read more',
    comeSoon: 'More to come soon!',
    subtitle: 'Better looking',
    subtitleDesc:
      '“If you’re going to build a non-custodial orde rbook-based DEX capable of high frequency trading, why not do it with some style?” All the function ality of a CEX and the security of a DEX wrapped into a sleek, minimalist, and easy-to-use interface.',
  },

  question: {
    question: 'Interested in listing your token on the',
    boldtext: 'Polkadex Orderbook?',
    button: 'Coming soon!',
  },

  statistic: {
    blockOne: 'Trades per second',
    blockTwo: 'Gas fees orders',
    blockTree: 'Non-custodial',
    BlockFour: 'Trading fee',
  },
};

export const OrderbookTranslations = {
  'en-US': {
    ...ENLanguage,
  },
};

export type IOrderbookTranslations = typeof ENLanguage;
