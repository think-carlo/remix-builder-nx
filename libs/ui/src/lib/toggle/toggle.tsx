import { Switch } from '@headlessui/react';
import classNames from 'classnames';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface ToggleProps {
  className?: string;
}

export function Toggle(props: ToggleProps) {
  const { className } = props;
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      className={classNames(
        `jdg-toggle relative inline-flex w-9 h-5 border-2 rounded-full cursor-pointer items-center transition duration-200 ease-in-out focus:border-brand-blue-800`,
        className,
        {
          'bg-brand-gray-400 border-brand-gray-400': !enabled,
          'bg-brand-blue-800 border-brand-blue-800': enabled,
        }
      )}
      checked={enabled}
      onChange={() => setEnabled(!enabled)}
    >
      <span
        aria-hidden="true"
        className={classNames(
          `pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out`,
          {
            'translate-x-4': enabled,
            'translate-x-0': !enabled,
          }
        )}
      />
    </Switch>
  );
}

export default Toggle;
