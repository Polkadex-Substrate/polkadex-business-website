import { Icon } from 'components/Icon';

import * as S from '../styles/maintenance';

const Maintenance = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleContainer>
          <S.TitleWrapper>
            <h1>We’re improving your Experience</h1>
            <p>
              We’ll be back up and running again shortly. Please check out our
              social channels for further update!
            </p>
          </S.TitleWrapper>

          <S.SocialIcons>
            <Icon name="Twitter" link="https://twitter.com/polkadex" />
            <Icon name="Medium" link="https://polkadex.medium.com/" />
            <Icon name="Telegram" link="https://t.me/Polkadex" />
            <Icon
              name="Youtube"
              link="https://www.youtube.com/channel/UC6fXRDT4lLKlXG3gP0PP06Q"
            />
            <Icon
              name="LinkedIn"
              link="https://www.linkedin.com/company/69690544"
            />
            <Icon name="Reddit" link="https://www.reddit.com/r/polkadex" />
          </S.SocialIcons>
        </S.TitleContainer>
        <S.ImageContainer>
          <img src="/img/Maintenance.svg" alt="Maintenance illustration" />
        </S.ImageContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default Maintenance;
