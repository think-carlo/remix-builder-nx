import classNames from 'classnames';
import { FC } from 'react';

/* eslint-disable-next-line */
export interface NavigationListProps {
  children?: React.ReactNode;
  className?: string;
}

export const NavigationList: FC<NavigationListProps> = ({
  children,
  className,
}) => (
  <ul className={classNames(`jdg-navigation-list flex list-none`, className)}>
    {children && children}
  </ul>
);

export default NavigationList;
