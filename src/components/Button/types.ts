export type Props = {
  content: string;
  icon: string;
  background?: 'primary' | 'secondary' | 'none';
};
export type ButtonProps = {
  withOpacity?: boolean;
  href: string;
} & Props;

export type ButtonFormProps = {
  action?: () => void;
  type?: 'button' | 'submit';
  disable?: boolean;
} & Props;
