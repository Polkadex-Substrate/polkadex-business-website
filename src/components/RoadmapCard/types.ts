type Item = {
  title: string;
  status?: boolean;
  timeline?: string;
  subItems?: Item[];
  subInfo?: string;
  isHoverable?: boolean;
};

type Props = {
  title?: string;
  content: Item[];
  alignRight?: boolean;
  invert?: boolean;
  position: {
    horizontal: { side: 'left' | 'right' | string; distance: number };
    vertical: { side: 'top' | 'bottom' | string; distance: number };
  };
};

export default Props;
