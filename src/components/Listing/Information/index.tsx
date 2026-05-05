import { Dropdown } from 'components/Dropdown';
import * as Icons from 'components/Icons';

import * as S from './styles';

export const Information = () => {
  return (
    <S.Wrapper id="information">
      <S.Container>
        <h2>
          Learn more about Polkadex solutions and follow us on your favourite
          social channels to stay on top of all things Polkadex!
        </h2>
        <S.Social>
          <S.SocialWrapper>
            <S.SocialCard target="_blank" href="https://twitter.com/polkadex">
              <Icons.Twitter />
            </S.SocialCard>
            <S.SocialCard target="_blank" href="https://polkadex.medium.com/">
              <Icons.Medium />
            </S.SocialCard>
            <S.SocialCard
              target="_blank"
              href="https://www.linkedin.com/company/69690544"
            >
              <Icons.LinkedIn />
            </S.SocialCard>
            <S.SocialCard
              target="_blank"
              href="https://discord.com/invite/Uvua83QAzk"
            >
              <Icons.Discord />
            </S.SocialCard>
            <S.SocialCard
              target="_blank"
              href="https://www.youtube.com/channel/UC6fXRDT4lLKlXG3gP0PP06Q"
            >
              <Icons.Youtube />
            </S.SocialCard>
            <S.SocialCard
              target="_blank"
              href="https://www.reddit.com/r/polkadex"
            >
              <Icons.Reddit />
            </S.SocialCard>
            <Dropdown
              title={
                <S.DropdownHeader>
                  <div>
                    <Icons.Telegram />
                  </div>
                  <span>Telegram</span>
                  <div>
                    <Icons.SingleArrowBottom />
                  </div>
                </S.DropdownHeader>
              }
            >
              <S.DropdownContent>
                <a
                  href="https://t.me/PolkadexAnnouncements"
                  target="_blank"
                  rel="noreferrer"
                >
                  Announcement
                </a>
                <a
                  href="https://t.me/Polkadex"
                  target="_blank"
                  rel="noreferrer"
                >
                  Community Chat
                </a>
              </S.DropdownContent>
            </Dropdown>
            <Dropdown
              title={
                <S.DropdownHeader>
                  <div>
                    <Icons.Community />
                  </div>
                  <span>Community</span>
                  <div>
                    <Icons.SingleArrowBottom />
                  </div>
                </S.DropdownHeader>
              }
            >
              <S.DropdownContent>
                <a
                  href="https://t.me/Polkadex"
                  target="_blank"
                  rel="noreferrer"
                >
                  Russian community
                </a>
              </S.DropdownContent>
            </Dropdown>
          </S.SocialWrapper>
        </S.Social>
        <S.Info>
          <S.InfoVertical>
            <div>
              <h3>THEA bridge protocol</h3>
              <p>
                THEA, Polkadex’s revolutionary interoperability layer, is almost
                here. Get ready for an easier, safer, and more decentralized
                token bridge.
              </p>
            </div>
            <img src="/img/thea.png" alt="Thea mockup" />
          </S.InfoVertical>
          <S.InfoVertical>
            <div>
              <h3>Polkadex parachain</h3>
              <p>
                Polkadex secured a parachain slot on Polkadot with 973k DOT
                ($13.8M) contributed to the Polkadex Crowdloan!
              </p>
            </div>
            <div>
              <h3>PolkaIDO</h3>
              <p>
                Polkadex IDO is a one-stop-shop efficient solution for all the
                activities from conducting the fundraise to listing tokens on
                Polkadex exchange fully on-chain. IDO platform will be the
                easiest way to deploy tokens and distribute them among IDO
                participants.
              </p>
            </div>
          </S.InfoVertical>
        </S.Info>
      </S.Container>
    </S.Wrapper>
  );
};
