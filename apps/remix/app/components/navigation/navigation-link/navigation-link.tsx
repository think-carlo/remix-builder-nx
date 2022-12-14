import classNames from 'classnames';
import { FC } from 'react';

/* eslint-disable-next-line */
export interface NavigationLinkProps {
  className?: string;
  children?: React.ReactNode;
  href: string;
}

export const NavigationLink: FC<NavigationLinkProps> = ({
  children,
  className,
  href,
}) => (
  <a
    className={classNames(
      `jdg-navigation-link block border-b-2 hover:border-brand-gray-400 font-sans font-medium px-1 pb-[2px] pt-2 transition-all`,
      className
    )}
    href={href}
  >
    {children && children}
  </a>
);

export default NavigationLink;
