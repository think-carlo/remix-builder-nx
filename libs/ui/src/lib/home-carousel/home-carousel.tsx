import React, { FC } from 'react';
import SvgArrowLeft from '../icons/arrow-left';
import SvgArrowRight from '../icons/arrow-right';
import SvgPlay from '../icons/play';
import SvgPause from '../icons/pause';

export interface Slide {
  image: {
    src: string;
    alt: string;
  };
  headline: string;
  lede: string;
  links: {
    href: string;
    label: string;
  }[];
}

export interface HomeCarouselProps {
  slides: Slide[];
}

export const HomeCarousel: FC<HomeCarouselProps> = ({ slides }) => {
  return (
    <section id="jdg-home-carousel--wrapper" className="jdg-carousel">
      <div id="jdg-home-carousel--images" className="slick slick-slider">
        {slides.map((slide) => (
          <div className="jdg-carousel-slide">
            <img src={slide.image.src} alt={slide.image.alt} />
          </div>
        ))}
      </div>

      <div id="jdg-home-carousel--content">
        {slides.map((slide, slideIndex) => {
          const hidden = slideIndex === 0;
          const tabindex = slideIndex === 0 ? 0 : -1;

          return (
            <div className="jdg-carousel-content-slide" aria-hidden={hidden}>
              <h3>{slide.headline}</h3>
              <p className="jdg-type-body--large">{slide.lede}</p>
              <div className="jdg-carousel-content-links">
                {slide.links.map((link) => (
                  <a
                    className="jdg-type-body--large"
                    href={link.href}
                    tabIndex={tabindex}
                  >
                    {link.label}
                    <SvgArrowRight />
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <ol
        role="list"
        className="jdg-carousel-controls"
        aria-label="Previous and Next Buttons"
      >
        <li>
          <button aria-label="Previous" className="jdg-carousel-control start">
            <SvgArrowLeft />
          </button>
        </li>

        <li>
          <button aria-label="Next" className="jdg-carousel-control end">
            <SvgArrowRight />
          </button>
        </li>
      </ol>

      <SvgPlay className="jdg-icon jdg-icon--play-button" />
      <SvgPause className="jdg-icon jdg-icon--pause-button" />
    </section>
  );
};
