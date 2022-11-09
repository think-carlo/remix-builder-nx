import SvgFacebook from '../icons/facebook';
import SvgTwitter from '../icons/twitter';
import SvgLinkedin from '../icons/linkedin';
import SvgInstagram from '../icons/instagram';
import SvgEmail from '../icons/email';
import Button from '../button/button';
import Navigation from '../navigation/navigation';
import NavigationList from '../navigation/navigation-list/navigation-list';
import NavigationItem from '../navigation/navigation-item/navigation-item';

/* eslint-disable-next-line */
export interface SocialBarProps {}

export function SocialBar(props: SocialBarProps) {
  return (
    <Navigation className="jdg-social-bar">
      <NavigationList className="jdg-social-bar-list items-center">
        <NavigationItem className="jdg-social-bar-item">
          <Button
            asLink={{ href: 'https://www.facebook.com', target: '_blank' }}
            className="border-none"
            icon={<SvgFacebook className="fill-brand-blue-800" />}
          />
        </NavigationItem>

        <NavigationItem className="jdg-social-bar-item">
          <Button
            asLink={{ href: 'https://www.twitter.com', target: '_blank' }}
            className="border-none"
            icon={<SvgTwitter className="fill-brand-blue-800" />}
          />
        </NavigationItem>

        <NavigationItem className="jdg-social-bar-item">
          <Button
            asLink={{ href: 'https://www.linkedin.com', target: '_blank' }}
            className="border-none"
            icon={<SvgLinkedin className="fill-brand-blue-800" />}
          />
        </NavigationItem>

        <NavigationItem className="jdg-social-bar-item">
          <Button
            asLink={{ href: 'https://www.instagram.com', target: '_blank' }}
            className="border-none"
            icon={<SvgInstagram className="fill-brand-blue-800" />}
          />
        </NavigationItem>

        <NavigationItem className="jdg-social-bar-item">
          <Button
            asLink={{ href: 'mailto:username@email.com', target: '_blank' }}
            className="border-none"
            icon={<SvgEmail className="fill-brand-blue-800" />}
          />
        </NavigationItem>
      </NavigationList>
    </Navigation>
  );
}

export default SocialBar;
