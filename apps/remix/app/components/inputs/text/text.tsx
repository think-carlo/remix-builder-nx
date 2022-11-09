import classNames from 'classnames';
import { FC } from 'react';

/* eslint-disable-next-line */
export interface InputTextProps {
  className?: string;
  name: string;
}

export const InputText: FC<InputTextProps> = ({ className, name }) => (
  <input
    className={classNames(
      `jdg-input--text border border-brand-gray-400 rounded-sm p-2 font-sans text-sm`,
      className
    )}
    placeholder="Enter text..."
    type="text"
    name={name}
  />
);

export default InputText;
