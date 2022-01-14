import { LinkHTMLAttributes } from "hoist-non-react-statics/node_modules/@types/react";

export type Props = {
  title?: string;
  description?: string;
  buttonTitle?: string;
} & Pick<LinkHTMLAttributes<HTMLLinkElement>, "href">;
