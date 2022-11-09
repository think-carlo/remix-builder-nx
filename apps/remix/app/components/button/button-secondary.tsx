import classNames from 'classnames';
import Button, { ButtonProps } from './button';
import './button.css';

export enum ButtonSecondaryColors {
  LIGHT = 'light',
  MID = 'mid',
  DARK = 'dark',
}

/* eslint-disable-next-line */
export interface ButtonSecondaryProps extends ButtonProps {
  color?: ButtonSecondaryColors;
}

export function ButtonSecondary(props: ButtonSecondaryProps) {
  const { className, color = ButtonSecondaryColors.MID } = props;

  const buttonClasses = classNames(`jdg-button--secondary`, className, {
    'jdg-button--secondary-dark bg-brand-white hover:bg-brand-blue-500 focus:bg-brand-blue-500 text-brand-blue-500 hover:text-brand-white focus:text-brand-white border-brand-blue-500 focus:border-brand-white focus:outline focus:outline-brand-blue-500':
      color === ButtonSecondaryColors.DARK,
    'judg-button--secondary-mid bg-brand-white hover:bg-brand-gray-400 border-brand-gray-400 focus:border-brand-white focus:outline focus:outline-brand-blue-500':
      color === ButtonSecondaryColors.MID,
    'jdg-button--secondary-light bg-transparent text-brand-white hover:bg-brand-white hover:text-brand-blue-500 focus:outline focus:outline-brand-blue-500 focus:border-brand-white':
      color === ButtonSecondaryColors.LIGHT,
  });

  return <Button {...props} className={buttonClasses} />;
}

export default ButtonSecondary;
