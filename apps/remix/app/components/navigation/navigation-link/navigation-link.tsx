import classNames from 'classnames';

/* eslint-disable-next-line */
export interface NavigationLinkProps {
  className?: string;
  children?: React.ReactNode;
  href: string;
}

export function NavigationLink(props: NavigationLinkProps) {
  const { children, className, href } = props;

  return (
    <a
      className={classNames(
        `jdg-navigation-link block border-b-2 hover:border-brand-gray-400 font-medium px-1 pb-[2px] pt-2 transition-all`,
        className
      )}
      href={href}
    >
      {children && children}
    </a>
  );
}

export default NavigationLink;
