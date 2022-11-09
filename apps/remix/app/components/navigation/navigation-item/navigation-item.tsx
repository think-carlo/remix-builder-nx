import classNames from 'classnames';

/* eslint-disable-next-line */
export interface NavigationItem {
  children?: React.ReactNode;
  className?: string;
}

export function NavigationItem(props: NavigationItem) {
  const { className, children } = props;

  return (
    <li className={classNames(`jdg-navigation-item`, className)}>
      {children && children}
    </li>
  );
}

export default NavigationItem;
