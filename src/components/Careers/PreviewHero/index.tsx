/* eslint-disable jsx-a11y/anchor-is-valid */
import { Icon } from 'components/Icon';
import * as Icons from 'components/Icons';
import Link from 'next/link';

import * as S from './styles';

export const PreviewHero = ({
  title = 'Rust Blockchain Developer',
  category = 'Junior',
  type = 'Hybrid',
  place = 'India',
}) => {
  return (
    <S.Wrapper>
      <S.GoBack>
        <Link href="/careers">
          <a>
            <Icons.ArrowLeft /> Go Back
          </a>
        </Link>
      </S.GoBack>
      <S.Title>
        <S.Container>
          {!!category.length && <S.Category>{category}</S.Category>}
          <span>{place}</span>
          <span>{type}</span>
        </S.Container>
        <h1>{title}</h1>
        <S.Share>
          <span>Share this job</span>
          <S.Social>
            <Icon name="Medium" link="https://polkadex.medium.com/" />
            <Icon name="Telegram" link="https://t.me/Polkadex" />
          </S.Social>
        </S.Share>
      </S.Title>
      <S.Overview>
        <S.OverviewContainer>
          <h2>About Polkadex</h2>
          <p>
            Global DEX market volume is growing at more than 1000% year on year
            since 2019 to 2021/22. With more easy to use features, incentives
            and trading opportunities, more customers are moving to DEX. To
            cater to this growing demand, Polkadex created a decentralized
            peer-to-peer orderbook-based cryptocurrency exchange for the DeFi
            ecosystem built on Substrate. Our vision is to interoperate with all
            blockchain ecosystems to bring assets to trade, not just Bitcoin and
            Ethereum, and create the next generation of regulated decentralised
            exchange without compromising user experience. The matured version
            of Polkadex will look like NYSE with crypto for trading.
          </p>
        </S.OverviewContainer>
        <S.OverviewContainer>
          <h2>Description</h2>
          <p>
            Polkadex is looking for a junior parachain runtime engineer to help
            us build, maintain and secure the Polkadex parachain. You will be
            working closely with the core team designing the Polkadex products.
            In this role, you will be responsible for architecting and
            developing the given feature using the Substrate Blockchain
            Framework (www.substrate.dev) in Rust Language. You are expected to
            follow the Rust and Substrate best practices.
          </p>
        </S.OverviewContainer>
        <S.OverviewContainer>
          <h2>Responsibilities</h2>
          <ul>
            <li>Designing blockchain protocols using Substrate Framework</li>
            <li>Architecture test scenarios and tools to test features.</li>
            <li>
              Ability to work independently in a cutting edge technology with
              minimal documentation. The candidate is expected to review the
              codebase to understand undocumented parts.
            </li>
            <li>
              Promote cooperation and commitment between teammates to achieve
              goals
            </li>
          </ul>
        </S.OverviewContainer>
        <S.OverviewContainer>
          <h2>Requirements</h2>
          <ul>
            <li>
              1+ year of experience in Rust language, C or C++, we prefer
              candidates with Rust experience.
            </li>
            <li>
              Experience working with Github and following agile processes.
            </li>
            <li>Fluent in English</li>
            <li>Able to work with engineers from different time zones.</li>
            <li>
              Excellent work ethic with the ability to quickly adapt and
              multitask.
            </li>
            <li>Desire to innovate and improve existing processes</li>
          </ul>
        </S.OverviewContainer>
        <S.OverviewContainer>
          <h2>Benefits</h2>
          <ul>
            <li>
              Starting CTC of $3000/month during the probation period of two
              months, and $5000/month when the candidate is made permanent.
            </li>
            <li>
              The candidate will be eligible for PDEX tokens on completing one
              year with Polkadex after probation period.{' '}
            </li>
          </ul>
        </S.OverviewContainer>
        <button type="button" onClick={undefined}>
          Apply for this job
        </button>
      </S.Overview>
    </S.Wrapper>
  );
};
