import { FC, useState } from 'react';
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
import NavigationLink from '../navigation/navigation-link/navigation-link';
import classNames from 'classnames';

/* eslint-disable-next-line */
export interface HeaderProps {
  className?: string;
  bottomNavigation: NavigationItemModel[];
  topNavigation: NavigationItemModel[];
  toggleDrawer?: () => void;
}

export const Header: FC<HeaderProps> = ({
  className,
  bottomNavigation,
  topNavigation,
  toggleDrawer,
}) => {
  // Transition state to toggle between rendered components.
  const [navIsDisplayed, setNavIsDisplayed] = useState(true);
  const [navIsVisible, setNavIsVisible] = useState(true);
  const [searchIsDisplayed, setSearchIsDisplayed] = useState(false);
  const [searchIsVisible, setSearchIsVisible] = useState(false);

  const handleNavToggle = () => {
    if (navIsDisplayed) {
      setNavIsVisible(!navIsVisible);
      setTimeout(() => {
        setNavIsDisplayed(!navIsDisplayed);
        setTimeout(() => {
          setSearchIsDisplayed(!searchIsDisplayed);
          setTimeout(() => setSearchIsVisible(!searchIsVisible), 100);
        }, 100);
      }, 100);
    } else {
      setSearchIsVisible(!searchIsVisible);
      setTimeout(() => {
        setSearchIsDisplayed(!searchIsDisplayed);
        setTimeout(() => {
          setNavIsDisplayed(!navIsDisplayed);
          setTimeout(() => setNavIsVisible(!navIsVisible), 100);
        }, 100);
      }, 100);
    }
  };

  const bottomNavAnchorClass = 'text-brand-blue-800 border-brand-white text-sm';
  const topNavAnchorClass = 'text-brand-white border-brand-blue-800 text-sm';

  return (
    <header className={classNames(`jdg-header shadow-header`, className)}>
      <div className="hidden lg:block bg-brand-blue-800">
        <div className="container mx-auto flex items-center gap-4 justify-end px-6 pt-2 pb-3">
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
                  height="12"
                  width="16"
                  className={classNames(`transition-all duration-300`, {
                    hidden: !navIsDisplayed,
                    block: navIsDisplayed,
                    'opacity-0': !navIsVisible,
                    'opacity-100': navIsVisible,
                  })}
                />

                <SvgClose
                  height="12"
                  width="16"
                  className={classNames(`transition-all duration-300`, {
                    hidden: !searchIsDisplayed,
                    block: searchIsDisplayed,
                    'opacity-0': !searchIsVisible,
                    'opacity-100': searchIsVisible,
                  })}
                />
              </>
            }
            onClick={handleNavToggle}
          />
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex gap-12 items-center justify-between p-6">
          <Logo className="fill-brand-blue-800" />
          <Button
            className="border-none lg:hidden"
            icon={<SvgMenu className="fill-brand-blue-800 h-6 w-6" />}
            onClick={toggleDrawer}
          />

          <Navigation
            className={classNames(`hidden transition-all duration-300`, {
              'lg:block': navIsDisplayed,
              'opacity-0': !navIsVisible,
              'opacity-100': navIsVisible,
            })}
          >
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

          <InputText
            name="search"
            className={classNames(`w-full transition-all duration-300`, {
              hidden: !searchIsDisplayed,
              block: searchIsDisplayed,
              'opacity-0': !searchIsVisible,
              'opacity-100': searchIsVisible,
            })}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
