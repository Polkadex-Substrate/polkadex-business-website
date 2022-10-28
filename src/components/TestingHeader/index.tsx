import { Orderbook, Polkadex, PrimaryButton } from 'components';
import { MenuIcon } from 'components/Icons';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IOrderbookTranslations } from 'translations';

import * as S from './styles';

type Props = IOrderbookTranslations['header'];
export const TestingHeader = ({
  topLinks,
  ctaButton,
  menuButton,
  products,
  bottomLinks,
}: Props) => {
  const [current, setCurrent] = useState('');
  const [show, setShow] = useState(false);
  const [sticky, setSticky] = useState(false);

  const route = useRouter();
  useEffect(() => {
    setCurrent(route.pathname);
  }, [route.pathname]);
  useEffect(() => {
    const header = document.getElementById('topHeader');
    const stickySize = header.offsetTop;

    const scrollCallback = () => {
      setSticky(window.pageYOffset > stickySize);
    };

    window.addEventListener('scroll', scrollCallback);

    return () => {
      window.removeEventListener('scroll', scrollCallback);
    };
  }, []);
  const toogle = () => {
    setShow(!show);
    document.querySelector('#topHeader').classList.toggle('show');
  };

  return (
    <S.Wrapper show={show} sticky={sticky}>
      <S.TopContainer id="topHeader">
        <S.LogoWrapper>
          <Polkadex size="Medium" />
          <Orderbook />
        </S.LogoWrapper>
        <S.Container show={show}>
          <S.Column>
            <ul>
              {topLinks.map((item, index) => (
                <li key={`link-${index}`}>
                  <S.Link isCurrent={item.href === current} href={item.href}>
                    {item.title}
                  </S.Link>
                </li>
              ))}
            </ul>
          </S.Column>

          <S.ButtonWrapper>
            <S.MenuButton onClick={toogle}>{menuButton}</S.MenuButton>
            <PrimaryButton
              content={ctaButton}
              color="black"
              background="white"
            />
          </S.ButtonWrapper>
        </S.Container>
        <S.MenuIcon onClick={toogle} show={show}>
          <MenuIcon />
        </S.MenuIcon>
      </S.TopContainer>
      <S.MenuWrapper show={show}>
        <S.MenuLinks>
          <S.MenuTitle>Navigation</S.MenuTitle>
          {topLinks.map(({ title }) => (
            <S.MenuItem key={`top-link-${title}`}>{title}</S.MenuItem>
          ))}
        </S.MenuLinks>
        <S.MenuColumn>
          <S.MenuTitle>{products.title}</S.MenuTitle>
          {products.data.map((item) => (
            <S.MenuItem key={`menu-${item.text}`}>
              {item.text}
              {item.new && <S.NewWrapper>New</S.NewWrapper>}
            </S.MenuItem>
          ))}
        </S.MenuColumn>
        {bottomLinks.map(({ title, data }) => (
          <S.MenuColumn key={`menu-col-${title}`}>
            {title ? (
              <S.MenuTitle>{title}</S.MenuTitle>
            ) : (
              <div style={{ height: '20px' }} />
            )}
            {data.map((item) => (
              <S.MenuItem key={`menu-item-row-${item}`}>{item}</S.MenuItem>
            ))}
          </S.MenuColumn>
        ))}
      </S.MenuWrapper>
    </S.Wrapper>
  );
};
