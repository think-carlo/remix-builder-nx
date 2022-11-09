import React, { FC } from 'react';
import { ButtonPrimary, ButtonPrimaryColors } from '../button';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import NavigationItem from '../navigation/navigation-item/navigation-item';
import NavigationLink from '../navigation/navigation-link/navigation-link';
import NavigationList from '../navigation/navigation-list/navigation-list';
import SocialBar from '../social-bar/social-bar';

/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  const footerMobileNavigation = [
    { href: '#', label: 'About Judge' },
    { href: '#', label: 'IT Consulting' },
    { href: '#', label: 'Talent & Executive Search' },
    { href: '#', label: 'Learning Solutions' },
    { href: '#', label: 'Industries We Serve' },
    { href: '#', label: 'Find A Job' },
    { href: '#', label: 'Resources' },
    { href: '#', label: 'Timesheets' },
    { href: '#', label: 'TIC' },
    { href: '#', label: 'Privacy & Cookies Policy' },
    { href: '#', label: 'Sitemap' },
  ];

  const footerNavigation = [
    {
      href: '#',
      label: 'About Judge',
      submenu: [
        { href: '#', label: 'Diversity, Equity & Inclusion' },
        { href: '#', label: 'Internal Judge Careers' },
        { href: '#', label: 'Locations' },
        { href: '#', label: 'Leadership' },
      ],
    },
    {
      href: '#',
      label: 'IT Consulting',
      submenu: [
        { href: '#', label: 'Diversity, Equity & Inclusion' },
        { href: '#', label: 'Internal Judge Careers' },
        { href: '#', label: 'Locations' },
        { href: '#', label: 'Leadership' },
        { href: '#', label: 'Diversity, Equity & Inclusion' },
        { href: '#', label: 'Internal Judge Careers' },
        { href: '#', label: 'Locations' },
      ],
    },
    {
      href: '#',
      label: 'Talent & Executive Search',
      submenu: [
        { href: '#', label: 'Diversity, Equity & Inclusion' },
        { href: '#', label: 'Internal Judge Careers' },
        { href: '#', label: 'Locations' },
        { href: '#', label: 'Leadership' },
        { href: '#', label: 'Diversity, Equity & Inclusion' },
        { href: '#', label: 'Internal Judge Careers' },
        { href: '#', label: 'Locations' },
      ],
    },
    {
      href: '#',
      label: 'Learning Solutions',
      submenu: [
        { href: '#', label: 'Diversity, Equity & Inclusion' },
        { href: '#', label: 'Internal Judge Careers' },
        { href: '#', label: 'Locations' },
        { href: '#', label: 'Leadership' },
        { href: '#', label: 'Diversity, Equity & Inclusion' },
        { href: '#', label: 'Internal Judge Careers' },
        { href: '#', label: 'Locations' },
      ],
    },
    {
      href: '#',
      label: 'Industries We Serve',
      submenu: [
        { href: '#', label: 'Diversity, Equity & Inclusion' },
        { href: '#', label: 'Internal Judge Careers' },
        { href: '#', label: 'Locations' },
        { href: '#', label: 'Leadership' },
        { href: '#', label: 'Diversity, Equity & Inclusion' },
        { href: '#', label: 'Internal Judge Careers' },
        { href: '#', label: 'Locations' },
      ],
    },
  ];

  return (
    <footer className="flex flex-col p-6 gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-6 w-full gap-6">
        <div className="col-span-1 flex flex-col items-center gap-6">
          <Logo className="fill-brand-blue-800" />

          <Navigation className="w-full lg:hidden">
            <NavigationList className="grid grid-cols-2 md:grid-cols-3 justify-between gap-4">
              {footerMobileNavigation.map((item, index) => (
                <NavigationItem key={`mobile-footer-item--${index}`}>
                  <NavigationLink
                    className="border-brand-white inline-block font-normal text-brand-blue-800"
                    href={item.href}
                  >
                    {item.label}
                  </NavigationLink>
                </NavigationItem>
              ))}
            </NavigationList>
          </Navigation>

          <ButtonPrimary
            asLink={{ href: '/contact-us/', target: '_self' }}
            color={ButtonPrimaryColors.DARK}
            className="w-full max-w-xs text-sm"
          >
            Contact Us
          </ButtonPrimary>

          <SocialBar />
        </div>

        <div className="hidden lg:flex lg:col-span-5">
          <Navigation className="w-full">
            <NavigationList className="grid grid-cols-5 gap-6">
              {footerNavigation.map((item, index) => (
                <NavigationItem
                  key={`footer-nav-item--${index}`}
                  className="col-span-1"
                >
                  <NavigationLink
                    className="text-sm text-brand-blue-800 font-bold border-brand-white inline-block"
                    href={item.href}
                  >
                    {item.label}
                  </NavigationLink>

                  {item.submenu && (
                    <NavigationList className="flex flex-col">
                      {item.submenu.map((subitem, subindex) => (
                        <NavigationItem
                          key={`footer-sub-nav-item--${subindex}`}
                        >
                          <NavigationLink
                            className="text-sm text-brand-blue-800 font-normal border-brand-white inline-block"
                            href={subitem.href}
                          >
                            {subitem.label}
                          </NavigationLink>
                        </NavigationItem>
                      ))}
                    </NavigationList>
                  )}
                </NavigationItem>
              ))}
            </NavigationList>
          </Navigation>
        </div>
      </div>

      <p className="ml-auto text-center text-brand-gray-600 text-sm">
        Copyright © 2022 The Judge Group Inc.
        <br className="md:hidden" />
        {` `}All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
