/* eslint-disable no-unused-expressions */
import {
  AllHTMLAttributes,
  Children,
  cloneElement,
  createElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import * as S from './styles';

export const Tooltip = ({ children }) => {
  const tooltipRef = useRef(null);
  const [state, setState] = useState(false);
  let HeaderComponent = null;
  let ContentComponent = null;

  Children.forEach(children, (child) => {
    if (child.type.displayName === 'TooltipHeader')
      HeaderComponent = cloneElement(child, {
        'data-id': 'tooltip-button',
      });
    else if (child.type.displayName === 'TooltipContent')
      ContentComponent = cloneElement(child);
  });

  return (
    <S.Wrapper
      data-id="tooltip"
      ref={tooltipRef}
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
    >
      {HeaderComponent}
      {state && ContentComponent}
    </S.Wrapper>
  );
};

type TooltipHeaderProps = AllHTMLAttributes<HTMLDivElement>;

export const TooltipHeader = ({
  as = 'div',
  children,
  ...props
}: TooltipHeaderProps) => {
  // eslint-disable-next-line react/no-children-prop
  return createElement(as, { ...props, children });
};

TooltipHeader.displayName = 'TooltipHeader';

export type TooltipContentProps = {
  position?: 'top' | 'bottom' | 'left' | 'right';
  children?: ReactNode;
  onDisplay?: () => void;
  onDismiss?: () => void;
} & AllHTMLAttributes<HTMLDivElement>;

export const TooltipContent = ({
  position = 'top',
  onDisplay,
  onDismiss,
  children,
  style,
}: TooltipContentProps) => {
  useEffect(() => {
    // called when mounted
    onDisplay && onDisplay();
    // called when unmounted
    return () => {
      onDismiss && onDismiss();
    };
  }, [onDismiss, onDisplay]);
  return (
    <S.Content
      position={position}
      role="tooltip"
      data-id="tooltip-content"
      style={style}
    >
      {children}
    </S.Content>
  );
};

TooltipContent.displayName = 'TooltipContent';
