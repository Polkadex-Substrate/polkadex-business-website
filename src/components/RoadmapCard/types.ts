type Item = {
  title: string;
  status?: boolean;
  timeline?: string;
};

type Props = {
  time: string;
  title?: string;
  content: Item[];
  alignRight?: boolean;
  invert?: boolean;
  position: {
    horizontal: { side: 'left' | 'right'; distance: number };
    vertical: { side: 'top' | 'bottom'; distance: number };
  };
};

export default Props;
