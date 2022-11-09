import classNames from 'classnames';
import { FC } from 'react';

/* eslint-disable-next-line */
export interface NavigationProps {
  children?: React.ReactNode;
  className?: string;
}

export const Navigation: FC<NavigationProps> = ({ children, className }) => (
  <nav className={classNames(`jdg-navigation`, className)}>
    {children && children}
  </nav>
);

export default Navigation;
