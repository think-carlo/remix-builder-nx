import classNames from 'classnames';
import React, { FC } from 'react';

export interface ColorImageProps {
  className?: string;
  src: string;
  alt: string;
}

export const ColorImage: FC<ColorImageProps> = ({ src, alt, className }) => {
  return (
    <div className={classNames(`jdg-color-image`, className)}>
      <img
        className="block absolute h-full w-full object-cover"
        src={src}
        alt={alt}
      />
    </div>
  );
};
