import { PrimaryButton, SecondaryButton } from 'components/Button';
import Dropdown from 'components/Dropdown';
import Icon from 'components/Icon';
import Logo from 'components/Logo';
import { useEffect, useState } from 'react';

import * as S from './styles';

const Header = () => {
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
          <Logo size="Medium" />
        </S.Container>
        <S.Container>
          <S.Column>
            <ul>
              <li>
                <Dropdown title="Products">
                  <S.ProductLink>
                    <a href="https://docs.polkadex.trade/introductionOrderbook">
                      Orderbook
                    </a>
                  </S.ProductLink>
                </Dropdown>
              </li>
              <li>
                <a href="https://docs.polkadex.trade/">Docs</a>
              </li>
              <li>
                <a href="https://github.com/Polkadex-Substrate/Documentation/blob/master/polkadex-lightpaper.md">
                  Lightpaper
                </a>
              </li>
            </ul>
          </S.Column>
          <S.Column>
            <Icon
              name="twitter"
              alt="Twitter Logo"
              link="https://twitter.com/polkadex"
            />
            <Icon
              name="medium"
              alt="Twitter Logo"
              link="https://polkadex.medium.com/"
            />
            <PrimaryButton
              content="Join on Telegram"
              icon="telegram"
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
      <S.BottomContainer>
        <div>
          <ul>
            <li>
              <a href="#hero"> Overview</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#roadmap">Roadmap</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#tokenEconomics"> Token Economics</a>
            </li>
          </ul>
        </div>
        <div />
      </S.BottomContainer>
    </S.Wrapper>
  );
};

export default Header;
