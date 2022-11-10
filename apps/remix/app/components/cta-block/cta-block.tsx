import classNames from 'classnames';
import { FC } from 'react';
import { ButtonPrimary, ButtonPrimaryColors } from '../button';
import { ColorImage } from '../color-image/color-image';

/* eslint-disable-next-line */
export interface CtaBlockProps {
  headline: string;
  image: {
    src: string;
    alt: string;
  };
  button: {
    href: string;
    text: string;
  };
  theme: 'dark' | 'light';
}

export const CtaBlock: FC<CtaBlockProps> = ({
  headline,
  button,
  theme,
  image,
}) => {
  const { href, text } = button || {};
  const { src, alt } = image || {};
  const ctaOverlayColor =
    theme === 'light' ? 'bg-brand-blue-500/95' : 'bg-brand-blue-800/95';
  const ctaButtonColor =
    theme === 'light' ? ButtonPrimaryColors.DARK : ButtonPrimaryColors.MID;

  return (
    <section
      className={classNames(
        `jdg-cta-block relative bg-blend-overlay`,
        ctaOverlayColor
      )}
    >
      <div className="jdg-container-wrapper px-6 md:px-8 py-14 md:py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="jdg-cta-block-content flex flex-col gap-6 items-center">
            <h2 className="jdg-cta-block-headline font-serif text-center text-2xl md:text-4xl lg:text-5xl text-brand-white transition-all">
              {headline}
            </h2>

            <ButtonPrimary color={ctaButtonColor} asLink={{ href }}>
              {text}
            </ButtonPrimary>
          </div>
        </div>
      </div>

      <ColorImage
        className={`${
          theme === 'light' ? 'bg-brand-blue-500/95' : 'bg-brand-blue-800/95'
        } absolute top-0 -z-10 h-full w-full`}
        src={src}
        alt={alt}
      />
    </section>
  );
};

export default CtaBlock;
