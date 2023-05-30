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
  announcement: {
    title: 'Polkadex Contract',
    ctaButton: 'See at Etherscan',
  },
  hero: {
    title: 'The trading engine for Web3 and DeFi',
    description:
      'Polkadex is a fully decentralized peer-to-peer orderbook-based cryptocurrency exchange for the DeFi ecosystem built on Substrate',
    ctaButton: 'Orderbook',
    ctaLink: 'http://orderbook.polkadex.trade',
    secondaryCtaButton: 'Mainnet Explorer',
    secondaryCtaLink:
      'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmainnet.polkadex.trade#/explorer',
    chainsTitle: 'Supported Chains',
  },
  orderbook: {
    tag: 'Products',
    title: 'Polkadex',
    highlight: 'Orderbook',
    description:
      'Polkadex Orderbook is a non-custodial Layer 2 based exchange on the Polkadex Network',
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
        title: 'Software Engineer',
        name: 'Ruchi Ray',
        image: 'ruchiPhotography',
        socialMedia: [
          {
            name: 'Github',
            link: 'https://github.com/RuchiRay',
          },
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/ruchi-ray-a3ab0b1ba',
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
        title: 'Q3 2023',
        alignRight: false,
        soon: true,
        position: {
          horizontal: {
            side: 'left',
            distance: 0,
          },
          vertical: {
            side: 'top',
            distance: -8.3,
          },
        },
        items: [
          { title: 'Derivatives', status: false },
          { title: 'Structured Products', status: false },
        ],
      },
      {
        title: 'Q2 2023',
        invert: true,
        alignRight: true,
        soon: true,
        position: {
          horizontal: {
            side: 'left',
            distance: -6,
          },
          vertical: {
            side: 'top',
            distance: 7,
          },
        },
        items: [
          { title: 'Code Audit of Solochain, Orderbook' },
          { title: 'Crowdloan Rewards (Early Q2)' },
          { title: 'Mobile App Mainnet (Early Q2)' },
          { title: 'Bridge with Polkadot - Mainnet' },
          { title: 'Integration with Trading Bots and Market Makers' },
          { title: 'Bridge with ETH and Polygon' },
        ],
      },
      {
        title: 'Q1 2023',
        alignRight: false,
        active: true,
        position: {
          horizontal: {
            side: 'right',
            distance: 20,
          },
          vertical: {
            side: 'top',
            distance: -9,
          },
        },
        items: [
          {
            title: 'Thea Bridge with Polkadot - Internal Testnet',
          },
          { title: 'XCM Channels with Parachain - Testnet' },
          {
            title: 'Code Audit of Parachain & Thea',
          },
          { title: 'Crowdloan Rewards Pallet - Awaiting Audit' },
        ],
      },
      {
        title: 'Q4 2022',
        alignRight: true,
        invert: true,
        position: {
          horizontal: {
            side: 'left',
            distance: 22,
          },
          vertical: {
            side: 'top',
            distance: 25,
          },
        },
        items: [
          { title: 'Mobile App Public Testnet', status: true },
          { title: 'Polkadex Orderbook Mainnet', status: true },
        ],
      },
      {
        title: 'Q3 2022',
        alignRight: false,
        position: {
          horizontal: {
            side: 'right',
            distance: 10,
          },
          vertical: {
            side: 'top',
            distance: 6.7,
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
        title: 'Q2 2022',
        alignRight: false,
        invert: true,
        position: {
          horizontal: {
            side: 'right',
            distance: -5,
          },
          vertical: {
            side: 'bottom',
            distance: 48,
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
        title: 'Q1 2022',
        alignRight: true,
        position: {
          horizontal: {
            side: 'left',
            distance: 5,
          },
          vertical: {
            side: 'top',
            distance: 35,
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
        title: 'Q3-Q4 2021',
        alignRight: true,
        invert: true,
        position: {
          horizontal: {
            side: 'left',
            distance: 4,
          },
          vertical: {
            side: 'bottom',
            distance: 25,
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
        title: 'Q1-Q2 2021',
        alignRight: true,
        invert: true,
        position: {
          horizontal: {
            side: 'left',
            distance: 34,
          },
          vertical: {
            side: 'bottom',
            distance: 12,
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
        title: 'Q4 2020',
        invert: true,
        alignRight: true,
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
          { title: 'Website Launch', status: true },
          { title: 'Whitepaper Release', status: true },
          { title: 'Testnet V1.0 Launch', status: true },
          { title: 'SAFT based Token PreSale', status: true },
        ],
      },
      {
        title: 'Q3 2020',
        alignRight: true,
        invert: true,
        position: {
          horizontal: {
            side: 'right',
            distance: 2,
          },
          vertical: {
            side: 'bottom',
            distance: -6,
          },
        },
        items: [
          { title: 'Web3 Milestone #1', status: true },
          { title: 'Refactoring Polkadex Engine', status: true },
          { title: 'Code Documentation', status: true },
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
    copyright: 'Copyright © 2023 Polkadex, Inc',
    bottomLinks: [
      {
        title: 'Terms and Privacy Policy',
        href: 'https://github.com/Polkadex-Substrate/Docs/blob/master/Polkadex_Privacy_Policy.pdf',
      },
    ],
  },
};

export const HomeTranslations = {
  'en-US': {
    ...ENLanguage,
  },
};

export type IHomeTranslations = typeof ENLanguage;
