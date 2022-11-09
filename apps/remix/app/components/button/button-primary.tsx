import classNames from 'classnames';
import Button, { ButtonProps } from './button';

export enum ButtonPrimaryColors {
  DARK = 'dark',
  MID = 'mid',
}

/* eslint-disable-next-line */
export interface ButtonPrimaryProps extends ButtonProps {
  color?: ButtonPrimaryColors;
}

export function ButtonPrimary(props: ButtonPrimaryProps) {
  const { className, color = 'mid' } = props;

  const buttonClasses = classNames(
    `jdg-button--primary text-brand-white`,
    className,
    {
      'jdg-button--primary-dark bg-brand-blue-800 hover:bg-brand-blue-900 border-brand-blue-800 focus:border-brand-white focus:outline focus:outline-brand-blue-800':
        color === 'dark',
      'jdg-button--primary-mid bg-brand-blue-500 hover:bg-brand-blue-600 border-brand-blue-500 focus:border-brand-white focus:outline focus:outline-brand-blue-500':
        color === 'mid',
    }
  );

  return <Button {...props} className={buttonClasses} />;
}

export default ButtonPrimary;
