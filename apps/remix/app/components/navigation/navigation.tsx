import classNames from 'classnames';

/* eslint-disable-next-line */
export interface NavigationProps {
  children?: React.ReactNode;
  className?: string;
}

export function Navigation(props: NavigationProps) {
  const { children, className } = props;

  return (
    <nav className={classNames(`jdg-navigation`, className)}>
      {children && children}
    </nav>
  );
}

export default Navigation;
