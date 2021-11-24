import { createContext } from 'react';
import { defaultThemes } from 'styles';

import { ITheme } from './types';

export const ThemingContext = createContext<any>({
  theme: { value: defaultThemes.dark },
});
