import {IColors, IIcons, ISizes} from 'utils/types';

export type Props = {
  name: IIcons;
  link?: string;
  size?: ISizes;
  isActive?: boolean;
  background?: IColors;
  hoverable?: boolean;
};
