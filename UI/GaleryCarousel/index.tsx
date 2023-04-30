import React, { useEffect, useRef, useState } from 'react';
import style from './GaleryCarousel.module.scss';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import classNames from 'classnames';
import { useCarousel } from '../../hooks/useCarousel';

type GaleryCarouselType = {
  slides: React.ReactNode[];
  buttonsBackground?: boolean;
  buttonsOutside?: boolean;
  itemsWidthAreEqual?: boolean;
  arrowsBottomOffset?: number;
  smallArrows?: boolean;
  initialVisibleCards?: number;
};

/**
 * Simple image slider component
 *
 */

const GaleryCarousel: React.FC<GaleryCarouselType> = ({
  slides,
  buttonsBackground = false,
  buttonsOutside = false,
  itemsWidthAreEqual = true,
  arrowsBottomOffset,
  smallArrows = false,
  initialVisibleCards = 7,
}) => {
  const [location, setLocation] = useState<{ left: number; right: number }>({ left: 0, right: 0 });
  const [isDragging, setIsDragging] = useState<'toLeft' | 'toRight' | false>(false);
  const [itemWidth, setItemWidth] = useState<number>(0);

  const carouselTrackRef = useRef<HTMLUListElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [toLeft, toRight, handleTouchStart, handleTouchMove, handleTouchEnd] = useCarousel(
    itemsWidthAreEqual,
    carouselRef,
    carouselTrackRef,
    location,
    setLocation,
    setItemWidth,
    initialVisibleCards,
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
          style.toLeftContainer,
        )}
        onClick={() => {
          setIsDragging('toLeft');
          toLeft();
        }}
      >
        {!!location.left && (
          <BsChevronCompactLeft
            className={classNames(style.iconArrow, {
              [style.gelatine]: isDragging === 'toLeft',
              [style.outside]: buttonsOutside,
              [style.smallArrows]: smallArrows,
            })}
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
            <li
              key={index}
              className={style.carouselItem}
              style={{ width: itemsWidthAreEqual ? itemWidth + 'px' : 'auto' }}
            >
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
          style.toRightContainer,
        )}
        onClick={() => {
          setIsDragging('toRight');
          toRight();
        }}
      >
        {!!location.right && (
          <BsChevronCompactRight
            className={classNames(style.iconArrow, {
              [style.gelatine]: isDragging === 'toRight',
              [style.outside]: buttonsOutside,
              [style.smallArrows]: smallArrows,
            })}
            onAnimationEnd={() => setIsDragging(false)}
          />
        )}
      </div>
    </div>
  );
};

export default GaleryCarousel;
