import classNames from 'classnames';
import { FC } from 'react';
import SvgJudgeLogo from '../icons/judge-logo';

/* eslint-disable-next-line */
export interface LogoProps {
  homeUrl?: string;
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className, homeUrl }) => (
  <a className="jdg-logo--link" href={homeUrl || '#'}>
    <SvgJudgeLogo className={classNames(`jdg-logo`, className)} />
  </a>
);

export default Logo;
