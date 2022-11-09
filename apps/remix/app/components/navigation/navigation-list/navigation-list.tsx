import classNames from 'classnames';

/* eslint-disable-next-line */
export interface NavigationListProps {
  children?: React.ReactNode;
  className?: string;
}

export function NavigationList(props: NavigationListProps) {
  const { children, className } = props;

  return (
    <ul className={classNames(`jdg-navigation-list flex list-none`, className)}>
      {children && children}
    </ul>
  );
}

export default NavigationList;
