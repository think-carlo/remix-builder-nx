import classNames from 'classnames';
import SvgJudgeLogo from '../icons/judge-logo';

/* eslint-disable-next-line */
export interface LogoProps {
  homeUrl?: string;
  className?: string;
}

export function Logo(props: LogoProps) {
  const { className, homeUrl } = props;

  return (
    <a className="jdg-logo--link" href={homeUrl || '#'}>
      <SvgJudgeLogo className={classNames(`jdg-logo`, className)} />
    </a>
  );
}

export default Logo;
