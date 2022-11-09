import classNames from 'classnames';
import Button, { ButtonProps } from './button';
import './button.css';

export function ButtonTertiary(props: ButtonProps) {
  const { className } = props;

  const buttonClasses = classNames(
    `jdg-button--tertiary border-none text-brand-blue-500 focus:border focus:border-brand-white focus:outline focus:outline-brand-blue-500`,
    className
  );

  return <Button {...props} className={buttonClasses} />;
}

export default ButtonTertiary;
