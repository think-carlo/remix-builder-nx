import classNames from 'classnames';

/* eslint-disable-next-line */
export interface TextareaProps {
  className?: string;
}

export function Textarea(props: TextareaProps) {
  const { className } = props;

  return (
    <textarea
      className={classNames(
        `jdg-textarea border border-brand-gray-400 rounded-sm p-2 min-h-[64px] w-full resize-none text-sm font-sans placeholder:text-base`,
        className
      )}
      placeholder="Enter message..."
    />
  );
}

export default Textarea;
