import { createContext } from 'utils/createContext';

import { UsePopoverReturn } from './types';

export const [PopoverProvider, usePopoverContext] =
  createContext<UsePopoverReturn>({
    contextName: 'PopoverContext',
  });
