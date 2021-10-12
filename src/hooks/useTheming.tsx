import { IDefaultThemes } from 'context/types';
import { useEffect, useState } from 'react';
import { defaultThemes } from 'styles';

export const useTheming = () => {
  const [hasDefault, setHasDefault] = useState(false);
  const [theme, setTheme] = useState({
    value: defaultThemes.dark,
    loading: true,
  });

  const themeToogle = (value: IDefaultThemes | string) => {
    window.localStorage.setItem('theme', value);
    setTheme({ ...theme.value, value: defaultThemes[value], loading: false });
  };
  const handleTheme = () => {
    const localTheme = window.localStorage.getItem('theme');
    const OSDefaultTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';
    if (localTheme) themeToogle(localTheme);
    else themeToogle(OSDefaultTheme);

    setHasDefault(true);
  };

  useEffect(() => {
    if (!hasDefault) handleTheme();
  }, [theme, hasDefault]);

  return {
    theme,
    themeToogle,
  };
};
