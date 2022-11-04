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
            <S.SocialCard target="_blank" href="/twitter">
              <Icons.Twitter />
            </S.SocialCard>
            <S.SocialCard target="_blank" href="/medium">
              <Icons.Medium />
            </S.SocialCard>
            <S.SocialCard target="_blank" href="/linkedin">
              <Icons.LinkedIn />
            </S.SocialCard>
            <S.SocialCard target="_blank" href="/discord">
              <Icons.Discord />
            </S.SocialCard>
            <S.SocialCard target="_blank" href="/youtube">
              <Icons.Youtube />
            </S.SocialCard>
            <S.SocialCard target="_blank" href="/reddit">
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
                <a href="/announcement" target="_blank">
                  Announcement
                </a>
                <a href="/announcement" target="_blank">
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
                <a href="/announcement" target="_blank">
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
                PolkaIDO becomes the first Polkadex component to finish private
                beta testing and launch onto the Polkadex testnet.
              </p>
            </div>
          </S.InfoVertical>
        </S.Info>
      </S.Container>
    </S.Wrapper>
  );
};
