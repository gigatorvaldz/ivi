import React, { useEffect, useRef, useState } from 'react';
import style from './GaleryCarousel.module.scss';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import classNames from 'classnames';
import { useCarousel } from '../../hooks/useCarousel';

type ImageCarouselType = {
  slides: React.ReactNode[];
  step?: number;
  buttonsBackground?: boolean;
  buttonsOutside?: boolean;
  itemsWidthAreEqual?: boolean;
  imagesListedPerSwap?: number;
  arrowsBottomOffset?: number;
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
  imagesListedPerSwap = 6,
  arrowsBottomOffset,
}) => {
  const [location, setLocation] = useState<{ left: number; right: number }>({ left: 0, right: 0 });
  const [stepWidth, setStepWidth] = useState(200 * imagesListedPerSwap);
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
        style={{ paddingBottom: arrowsBottomOffset + 'px' }}
        className={classNames(
          {
            [style.noBackground]: !buttonsBackground,
            [style.outside]: buttonsOutside,
          },
          style.toLeftContainer
        )}
        onClick={() => {
          setIsDragging('toLeft');
          toLeft();
        }}
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
        style={{ paddingBottom: arrowsBottomOffset + 'px' }}
        className={classNames(
          {
            [style.noBackground]: !buttonsBackground,
            [style.outside]: buttonsOutside,
          },
          style.toRightContainer
        )}
        onClick={() => {
          setIsDragging('toRight');
          toRight();
        }}
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
          />
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;
