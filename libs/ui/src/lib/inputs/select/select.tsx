import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import SvgArrowDown from '../../icons/arrow-down';

/* eslint-disable-next-line */
export interface SelectProps {}

export function Select(props: SelectProps) {
  const colors = ['Red', 'Blue', 'Green'];
  const [selected, setSelected] = useState(colors[0]);

  return (
    <Listbox value={selected} onChange={(value) => setSelected(value)}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-default rounded-sm p-2 border border-brand-gray-400 text-left">
          <span className="block truncate text-brand-black">{selected}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <SvgArrowDown
              className="w-4 fill-brand-gray-600"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute border border-brand-gray-400 mt-1 max-h-60 w-full overflow-auto rounded-sm bg-white p-2 text-base">
            {colors.map((color, colorIndex) => (
              <Listbox.Option
                key={colorIndex}
                className={({ active, selected }) =>
                  `relative cursor-default select-none p-2 rounded-sm ${
                    active
                      ? 'bg-brand-gray-200 text-brand-black'
                      : 'text-brand-gray-600'
                  } ${selected && `text-brand-black`}`
                }
                value={color}
              >
                <span className={`block truncate font-normal`}>{color}</span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

export default Select;
