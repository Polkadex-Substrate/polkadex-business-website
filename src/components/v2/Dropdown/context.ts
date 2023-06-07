import { createContext } from 'utils/createContext';

import { UseDropdownReturn } from './types';

export const [DropdownProvider, useDropdownContext] =
  createContext<UseDropdownReturn>({
    contextName: 'DropdownContext',
  });
