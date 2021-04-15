type Props = {
  title: string;
  percent: string;
  description: string;
  tokens: string;
  position: {
    horizontal: { side: 'left' | 'right'; distance: number };
    vertical: { side: 'top' | 'bottom'; distance: number };
  };
};

export default Props;
