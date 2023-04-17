import React, { useEffect, useRef, useState } from 'react';
import style from './ImageCarousel.module.scss';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import classNames from 'classnames';
import { useCarousel } from '../../hooks/useCarousel';

type ImageCarouselType = {
  slides: [React.ReactNode, ...React.ReactNode[]];
  step?: number;
  buttonsBackground?: boolean;
  buttonsOutside?: boolean;
  itemsWidthAreEqual?: boolean;
  imagesListedPerSwap?: number;
};

/**
 * Simple image slider component
 *
 */

const ImageCarousel: React.FC<ImageCarouselType> = ({
  slides,
  buttonsBackground = false,
  buttonsOutside = false,
  itemsWidthAreEqual = true,
  imagesListedPerSwap = 1,
}) => {
  const [location, setLocation] = useState<{ left: number; right: number }>({ left: 0, right: 0 });
  const [stepWidth, setStepWidth] = useState(100 * imagesListedPerSwap);
  const [isDragging, setIsDragging] = useState<'toLeft' | 'toRight' | false>(false);

  const carouselTrackRef = useRef<HTMLUListElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [toLeft, toRight, handleTouchStart, handleTouchMove, handleTouchEnd] = useCarousel(
    imagesListedPerSwap,
    itemsWidthAreEqual,
    carouselRef,
    carouselTrackRef,
    stepWidth,
    setStepWidth,
    location,
    setLocation
  );

  return (
    <div className={style.container}>
      <div
        className={classNames(
          {
            [style.noBackground]: !buttonsBackground,
            [style.outside]: buttonsOutside,
          },
          style.toLeftContainer
        )}
      >
        {!!location.left && (
          <BsChevronCompactLeft
            className={classNames(
              {
                [style.gelatine]: isDragging === 'toLeft',
                [style.outside]: buttonsOutside,
              },
              style.iconArrow
            )}
            onAnimationEnd={() => setIsDragging(false)}
            onClick={() => {
              setIsDragging('toLeft');
              toLeft();
            }}
          />
        )}
      </div>
      <div className={style.carousel} ref={carouselRef}>
        <ul
          className={style.carouselTrack}
          ref={carouselTrackRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => (
            <li key={index} className={style.carouselItem}>
              {slide}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={classNames(
          {
            [style.noBackground]: !buttonsBackground,
            [style.outside]: buttonsOutside,
          },
          style.toRightContainer
        )}
      >
        {!!location.right && (
          <BsChevronCompactRight
            className={classNames(
              {
                [style.gelatine]: isDragging === 'toRight',
                [style.outside]: buttonsOutside,
              },
              style.iconArrow
            )}
            onAnimationEnd={() => setIsDragging(false)}
            onClick={() => {
              setIsDragging('toRight');
              toRight();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;
