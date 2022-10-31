import {
  AvailableMessage,
  Icon,
  Polkadex,
  PrimaryButton,
  ThemeSwitcher,
} from 'components';
import { useEffect } from 'react';
import { IHomeTranslations } from 'translations';

import * as S from './styles';

type Props = {
  disableBottomMenu?: boolean;
  disableLight?: boolean;
} & IHomeTranslations['header'];

export const Header = ({
  topLinks,
  bottomLinks,
  ctaButton,
  disableBottomMenu = true,
}: Props) => {
  useEffect(() => {
    const header = document.getElementById('topHeader');
    const sticky = header.offsetTop;

    const scrollCallback = () => {
      if (window.pageYOffset > sticky + 190) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', scrollCallback);

    return () => {
      window.removeEventListener('scroll', scrollCallback);
    };
  }, []);

  const toogle = () =>
    document.querySelector('#topHeader').classList.toggle('show');
  return (
    <S.Wrapper>
      <S.TopContainer id="topHeader">
        <S.Container>
          <Polkadex size="Medium" />
          <ThemeSwitcher />
          {/* <LanguageSelector /> */}
        </S.Container>
        <S.Container>
          <S.Column>
            <ul>
              {topLinks.map((item, index) => (
                <li key={index}>
                  {item.soon ? (
                    <AvailableMessage message="Soon">
                      <a href={item.href}>{item.title}</a>
                    </AvailableMessage>
                  ) : (
                    <a href={item.href}>{item.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </S.Column>
          <S.Column>
            <Icon
              hoverable
              name="Twitter"
              link="https://twitter.com/polkadex"
            />
            <Icon hoverable name="Medium" link="https://polkadex.medium.com/" />
            <Icon
              hoverable
              name="Youtube"
              link="https://www.youtube.com/channel/UC6fXRDT4lLKlXG3gP0PP06Q"
            />
            <Icon
              hoverable
              name="LinkedIn"
              link="https://www.linkedin.com/company/69690544"
            />
            <Icon name="Reddit" link="https://www.reddit.com/r/polkadex" />
            <Icon name="Discord" link="https://discord.com/invite/Uvua83QAzk" />
            <PrimaryButton
              content={ctaButton}
              icon="Telegram"
              href="https://t.me/Polkadex"
            />
          </S.Column>
        </S.Container>
        <S.MenuWrapper onClick={toogle}>
          <svg width="26" height="26" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </S.MenuWrapper>
      </S.TopContainer>
      {disableBottomMenu && (
        <S.BottomContainer>
          <div>
            <ul>
              {bottomLinks.map((item, index) => (
                <li key={index}>
                  <a href={`#${item.href}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div />
        </S.BottomContainer>
      )}
    </S.Wrapper>
  );
};
