import classNames from 'classnames';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface DrawerProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
  isOpen: boolean;
}

export function Drawer(props: DrawerProps) {
  const { children, content, isOpen } = props;

  const [drawerIsVisible, setDrawerIsVisible] = useState(null);
  const [overlayIsDisplayed, setOverlayIsDisplayed] = useState(null);
  const [overlayIsVisible, setOverlayIsVisible] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setOverlayIsDisplayed(isOpen);
      setTimeout(() => {
        setDrawerIsVisible(isOpen);
        setOverlayIsVisible(isOpen);
      }, 150);
    } else {
      setDrawerIsVisible(isOpen);
      setOverlayIsVisible(isOpen);
      setTimeout(() => {
        setOverlayIsDisplayed(isOpen);
      }, 150);
    }
  }, [isOpen]);

  return (
    <div className="relative w-screen h-screen max-w-full max-h-full">
      {children && children}

      <div
        className={classNames(
          `bg-brand-blue-800 w-80 z-10 absolute inset-y-0 transition-all duration-300`,
          {
            '-left-80 opacity-0': !drawerIsVisible,
            'left-0 opacity-100': drawerIsVisible,
          }
        )}
      >
        {content && content}
      </div>

      <div
        className={classNames(
          `absolute w-full h-full top-0 left-0 bg-brand-gray-400 transition-all duration-300`,
          {
            hidden: !overlayIsDisplayed,
            'opacity-0': !overlayIsVisible,
            'opacity-50': overlayIsVisible,
          }
        )}
      ></div>
    </div>
  );
}

export default Drawer;
