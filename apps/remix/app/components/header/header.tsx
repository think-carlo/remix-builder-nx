import { useState } from 'react';
import Button from '../button/button';
import InputText from '../inputs/text/text';
import Logo from '../logo/logo';
import { NavigationItem as NavigationItemModel } from '../navigation/navigation.model';
import Navigation from '../navigation/navigation';
import NavigationItem from '../navigation/navigation-item/navigation-item';
import NavigationList from '../navigation/navigation-list/navigation-list';
import SvgClose from '../icons/close';
import SvgMenu from '../icons/menu';
import SvgSearch from '../icons/search';
import { Transition } from '@headlessui/react';
import NavigationLink from '../navigation/navigation-link/navigation-link';
import classNames from 'classnames';

const transitionProps = {
  enter: 'transition-opacity duration-300',
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leave: 'transition-opacity duration-300',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0',
};

/* eslint-disable-next-line */
export interface HeaderProps {
  bottomNavigation: NavigationItemModel[];
  topNavigation: NavigationItemModel[];
  toggleDrawer?: () => void;
}

export function Header(props: HeaderProps) {
  const { bottomNavigation, topNavigation, toggleDrawer } = props;

  // Transition state to toggle between rendered components.
  const [isNavigating, setIsNavigating] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  const [navIsDisplayed, setNavIsDisplayed] = useState(false);
  const [navIsVisible, setNavIsVisible] = useState(false);

  const handleNavToggle = () => {
    setNavIsVisible(!navIsVisible);
    setTimeout(() => setNavIsDisplayed(!navIsDisplayed), 300);
  };

  const bottomNavAnchorClass = 'text-brand-blue-800 border-brand-white text-sm';
  const topNavAnchorClass = 'text-brand-white border-brand-blue-800 text-sm';

  return (
    <header className="jdg-header shadow-header">
      <div className="hidden lg:flex items-center gap-4 bg-brand-blue-800 justify-end px-6 pt-2 pb-3 ">
        <Navigation>
          <NavigationList className="gap-6">
            {topNavigation.map((navItem, index) => (
              <NavigationItem key={`top-nav-item--${index}`}>
                <NavigationLink
                  className={topNavAnchorClass}
                  href={navItem.href}
                >
                  {navItem.label}
                </NavigationLink>
              </NavigationItem>
            ))}
          </NavigationList>
        </Navigation>

        <Button
          className="border-none fill-brand-white pb-2 h-10 w-9"
          icon={
            <>
              <SvgSearch
                className={classNames(`transition-all`, {
                  hidden: !navIsDisplayed,
                  block: navIsDisplayed,
                  'opacity-0': !navIsVisible,
                  'opacity-100': navIsVisible,
                })}
              />

              <SvgClose
                className={classNames(`transition-all`, {
                  hidden: navIsDisplayed,
                  block: !navIsDisplayed,
                  'opacity-0': navIsVisible,
                  'opacity-100': !navIsVisible,
                })}
              />
            </>
          }
          onClick={handleNavToggle}
        />
      </div>

      <div className="flex gap-12 items-center justify-between p-6">
        <Logo className="fill-brand-blue-800" />
        <Button
          className="border-none lg:hidden"
          icon={<SvgMenu className="fill-brand-blue-800 h-6 w-6" />}
          onClick={toggleDrawer}
        />

        {/* <Transition
          className="hidden lg:block"
          show={isNavigating}
          {...transitionProps}
        >
          <Navigation>
            <NavigationList className="gap-6">
              {bottomNavigation.map((navItem, index) => (
                <NavigationItem key={`bottom-nav-item--${index}`}>
                  <NavigationLink
                    className={bottomNavAnchorClass}
                    href={navItem.href}
                  >
                    {navItem.label}
                  </NavigationLink>
                </NavigationItem>
              ))}
            </NavigationList>
          </Navigation>
        </Transition>

        <Transition
          className="flex-1 hidden lg:block"
          show={isSearching}
          {...transitionProps}
        >
          <InputText name="search" className="w-full" />
        </Transition> */}
      </div>
    </header>
  );
}

export default Header;
