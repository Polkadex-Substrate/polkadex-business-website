type Props = {
  title: string;
  percent: string;
  description?: string;
  tokens: string;
  position: {
    horizontal: { side: 'left' | 'right' | string; distance: number };
    vertical: { side: 'top' | 'bottom' | string; distance: number };
  };
};

export default Props;
