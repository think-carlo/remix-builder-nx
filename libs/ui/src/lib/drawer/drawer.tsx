import { Transition } from '@headlessui/react';
import { Fragment } from 'react';

/* eslint-disable-next-line */
export interface DrawerProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
  isOpen: boolean;
}

export function Drawer(props: DrawerProps) {
  const { children, content, isOpen } = props;

  return (
    <div className="relative w-screen h-screen max-w-full max-h-full">
      {children && children}

      <Transition
        show={isOpen}
        as={Fragment}
        enter="duration-300"
        enterFrom="-left-full opacity-0"
        enterTo="left-0 opacity-100"
        leave="duration-300"
        leaveFrom="left-0 opacity-100"
        leaveTo="-left-full opacity-0"
      >
        <div className="bg-brand-blue-800 w-full z-10 absolute inset-y-0">
          {content && content}
        </div>
      </Transition>

      <Transition
        show={isOpen}
        as={Fragment}
        enter="duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-50"
        leave="duration-300"
        leaveFrom="opacity-50"
        leaveTo="opacity-0"
      >
        <div className="w-full h-full top-0 left-0 bg-brand-gray-400"></div>
      </Transition>
    </div>
  );
}

export default Drawer;
