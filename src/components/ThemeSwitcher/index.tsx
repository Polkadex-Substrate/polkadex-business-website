import { Icon } from 'components';
import { ThemingContext } from 'context';
import React, { useContext } from 'react';

import * as S from './styles';

export const ThemeSwitcher = () => {
  const { theme, themeToogle } = useContext(ThemingContext);

  return (
    <S.Wrapper>
      <button
        aria-label="Change to dark mode"
        title="Change to dark mode"
        type="button"
        onClick={() => themeToogle('dark')}
      >
        <Icon
          name="Moon"
          background="none"
          isActive={theme.value.title === 'dark'}
        />
      </button>
      <button
        aria-label="Change to light mode"
        title="Change to light mode"
        type="button"
        onClick={() => themeToogle('light')}
      >
        <Icon
          name="Sun"
          background="none"
          isActive={theme.value.title === 'light'}
        />
      </button>
    </S.Wrapper>
  );
};
