import { FC, useState } from 'react';
import SvgArrowForward from '../icons/arrow-forward';
import SvgPlayButton from '../icons/play-button';
import SvgPauseButton from '../icons/pause-button';
import Slider from 'react-slick';
import './home-carousel.css';
import Button from '../button/button';
import { Image, Link } from '../../models/builder.models';

export interface Slide {
  image: Image;
  headline: string;
  lede: string;
  links: Link[];
}

export interface HomeCarouselProps {
  slides: Slide[];
}

export const HomeCarousel: FC<HomeCarouselProps> = ({ slides }) => {
  const [imageSlider, setImageSlider] = useState<Slider>();
  const [contentSlider, setContentSlider] = useState<Slider>();
  const [isPlaying, setIsPlaying] = useState(true);

  const PrevArrow = (props) => {
    const { onClick } = props;

    return (
      <button
        className="bg-brand-white absolute right-14 md:right-[unset] md:left-4 bottom-3 md:bottom-[unset] md:top-1/2 md:-translate-y-1/2 z-10 rounded-full p-2 rotate-180"
        aria-label="Previous"
        onClick={onClick}
      >
        <SvgArrowForward
          className="h-[15px] w-[15px] md:h-[24px] md:w-[24px]"
          viewBox="0 0 14 14"
        />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;

    return (
      <button
        className="bg-brand-white absolute right-3 bottom-3 md:bottom-[unset] md:top-1/2 md:-translate-y-1/2 z-10 rounded-full p-2"
        aria-label="Next"
        onClick={onClick}
      >
        <SvgArrowForward
          className="h-[15px] w-[15px] md:h-[24px] md:w-[24px]"
          viewBox="0 0 14 14"
        />
      </button>
    );
  };

  const imageSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: contentSlider,
    // regionLabel: 'Main image carousel',
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: false,
  };

  const contentSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: imageSlider,
    // regionLabel: 'Main content carousel',
    arrows: false,
    dots: true,
    pauseOnHover: false,
  };

  const handleToggle = () => {
    if (!imageSlider) return;

    isPlaying ? imageSlider.slickPause() : imageSlider.slickPlay();
    setIsPlaying(!isPlaying);
  };

  if (!slides) return;

  return (
    <section
      id="jdg-home-carousel"
      className="relative pt-6 px-6 pb-14 lg:p-0 flex justify-center items-center"
    >
      <Slider
        className="jdg-home-carousel--images !absolute lg:!relative top-0 overflow-hidden h-full w-full z-0"
        {...imageSliderSettings}
        ref={(slider) => setImageSlider(slider)}
      >
        {slides.map((slide, slideIndex) => {
          const { image } = slide || {};
          const { alt, src } = image || {};

          return (
            <div key={`image-slide--${slideIndex}`} className="h-full !block">
              <img
                className="h-full w-full max-w-[unset]"
                src={src}
                alt={alt}
              />
            </div>
          );
        })}
      </Slider>

      <Slider
        className="jdg-home-carousel--content lg:!absolute max-w-full md:max-w-xl lg:max-w-2xl lg:top-1/2 lg:-translate-y-1/2 lg:right-20 bg-brand-white/95 rounded-md"
        {...contentSliderSettings}
        ref={(slider) => setContentSlider(slider)}
      >
        {slides.map((slide, slideIndex) => {
          const { links } = slide || {};
          const hidden = slideIndex === 0;
          const tabindex = slideIndex === 0 ? 0 : -1;
          const hasLinks = links && links.length !== 0;

          return (
            <div
              className="!flex flex-col gap-4 p-6 lg:p-8"
              aria-hidden={hidden}
            >
              <h3 className="text-brand-blue-800 font-serif text-3xl">
                {slide.headline}
              </h3>

              <p className="text-lg text-brand-gray-800">{slide.lede}</p>
              {hasLinks && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {links.map((link) => (
                    <a
                      className="flex gap-2 col-span-1 items-center text-brand-blue-500 text-xl"
                      href={link.href}
                      tabIndex={tabindex}
                    >
                      {link.label}
                      <SvgArrowForward className="fill-brand-blue-500" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </Slider>

      <Button
        className="border-none rounded-full absolute bottom-3 md:bottom-6 left-3 md:left-4 bg-brand-white p-0"
        icon={
          isPlaying ? (
            <SvgPauseButton viewBox="0 0 36 36" height="30" width="30" />
          ) : (
            <SvgPlayButton viewBox="0 0 36 36" height="30" width="30" />
          )
        }
        onClick={handleToggle}
      />
    </section>
  );
};
