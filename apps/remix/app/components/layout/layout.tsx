import React, { FC, useState } from 'react';
import Button from '../button/button';
import Header from '../header/header';
import InputText from '../inputs/text/text';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import NavigationItem from '../navigation/navigation-item/navigation-item';
import NavigationList from '../navigation/navigation-list/navigation-list';
import SvgClose from '../icons/close';
import Footer from '../footer/footer';
import NavigationLink from '../navigation/navigation-link/navigation-link';
import {
  mockBottomNavigation,
  mockMobileNavigation,
  mockTopNavigation,
} from '../header/header.helpers';

/* eslint-disable-next-line */
export interface LayoutProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNavigationJSX = (
    <div className="flex flex-col gap-6 p-6 relative">
      <Button
        className="border-none lg:hidden absolute top-6 right-6"
        icon={<SvgClose className="fill-brand-white h-5 w-5" />}
        onClick={() => setIsOpen(!isOpen)}
      />

      <Logo className="fill-brand-white" />

      <InputText name="search" />

      <Navigation>
        <NavigationList className="flex flex-col gap-4">
          {mockMobileNavigation.map((item, index) => (
            <NavigationItem key={`mobile-nav-item--${index}`}>
              <NavigationLink
                className="border-brand-blue-800 inline-block font-normal text-brand-white text-2xl px-1 py-2"
                href={item.href}
              >
                {item.label}
              </NavigationLink>
            </NavigationItem>
          ))}
        </NavigationList>
      </Navigation>
    </div>
  );

  return (
    <main className="jdg-layout">
      {/* <Drawer isOpen={isOpen} content={mobileNavigationJSX}>
      </Drawer> */}

      <Header
        bottomNavigation={mockBottomNavigation}
        topNavigation={mockTopNavigation}
        toggleDrawer={() => setIsOpen(!isOpen)}
      />

      {children && children}

      <Footer />
    </main>
  );
};

export default Layout;
