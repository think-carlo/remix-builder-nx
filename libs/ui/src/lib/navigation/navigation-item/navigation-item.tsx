import classNames from 'classnames';
import { FC } from 'react';

/* eslint-disable-next-line */
export interface NavigationItem {
  children?: React.ReactNode;
  className?: string;
}

export const NavigationItem: FC<NavigationItem> = ({ children, className }) => (
  <li className={classNames(`jdg-navigation-item`, className)}>
    {children && children}
  </li>
);

export default NavigationItem;
