import * as Icons from 'components/Icons';
import { ThemingContext } from 'context';
import React, { useContext } from 'react';

import * as S from './styles';

export const ThemeSwitcher = () => {
  const { theme, themeToogle } = useContext(ThemingContext);

  const isDark = theme.value.title === 'dark';
  const IconComponent = Icons[isDark ? 'Sun' : 'Moon'];
  return (
    <S.Wrapper>
      <button
        aria-label={`Change to ${isDark ? 'light' : 'dark'} mode`}
        title={`Change to ${isDark ? 'light' : 'dark'} mode`}
        type="button"
        onClick={() => themeToogle(isDark ? 'light' : 'dark')}
      >
        <IconComponent />
      </button>
    </S.Wrapper>
  );
};
