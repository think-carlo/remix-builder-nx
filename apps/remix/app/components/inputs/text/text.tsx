import classNames from 'classnames';

/* eslint-disable-next-line */
export interface InputTextProps {
  className?: string;
  name: string;
}

export function InputText(props: InputTextProps) {
  const { className, name } = props;

  return (
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
}

export default InputText;
