import classNames from 'classnames';
import { ReactNode } from 'react';

export interface ButtonProps {
  asLink?: {
    href: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
  };
  children?: React.ReactNode | string;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const { asLink, children, className, icon, onClick } = props;

  const buttonClasses = classNames(
    `jdg-button inline-flex flex-wrap items-center justify-center gap-2 border uppercase rounded-md p-3 text-xs font-sans font-medium transition-all tracking-wider`,
    className
  );

  if (asLink) {
    const { href, target = '_self' } = asLink;

    return (
      <a className={buttonClasses} href={href} target={target}>
        {children && children}
        {icon && icon}
      </a>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick && onClick}>
      {children && children}
      {icon && icon}
    </button>
  );
}

export default Button;
