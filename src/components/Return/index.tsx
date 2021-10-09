import { Icon, Logo, ThemeSwitcher } from 'components';
import { PrimaryButton } from 'components/Button';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import * as S from './styles';

export const Return = () => {
  const router = useRouter();

  useEffect(() => {
    const header = document.getElementById('return');
    const sticky = header.offsetTop;

    const scrollCallback = () => {
      if (window.pageYOffset > sticky + 5) {
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

  return (
    <S.Wrapper id="return">
      <S.Container>
        <button type="button" onClick={() => router.back()}>
          <Icon name="ArrowLeft" background="none" />
        </button>
        <Logo size="Medium" />
        <ThemeSwitcher />
      </S.Container>
      <S.Box>
        <Icon hoverable name="Twitter" link="https://twitter.com/polkadex" />
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
        <Icon
          hoverable
          name="Reddit"
          link="https://www.reddit.com/r/polkadex"
        />
        <PrimaryButton
          content="Join Telegram"
          icon="Telegram"
          href="https://t.me/Polkadex"
        />
      </S.Box>
    </S.Wrapper>
  );
};
