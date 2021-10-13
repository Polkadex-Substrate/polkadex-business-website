import { createContext } from 'react';
import { defaultThemes } from 'styles';

import { ITheme } from './types';

export const ThemingContext = createContext<ITheme>({
  theme: { value: defaultThemes.dark },
});
