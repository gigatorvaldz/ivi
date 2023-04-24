import React, { useState, useEffect } from 'react';
import css from './Banner.module.scss';
import classNames from 'classnames';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Slide {
  component: React.ReactNode;
}

const Banner: React.FC<{ slides: React.ReactElement<Slide>[] }> = ({ slides }) => {
  const [isAnimating, setIsAnimating] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 12000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handlePrevSlide = (): void => {
    if (isAnimating) return;
    setTimeout(() => {
      setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
      setIsAnimating('prev');
    }, 100);
  };

  const handleNextSlide = (): void => {
    if (isAnimating) return;
    setTimeout(() => {
      setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
      setIsAnimating('next');
    }, 100);
  };

  const handleAnimationEnd = () => {
    setIsAnimating('');
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchPosition === null) return;

    const currentPosition = e.touches[0].clientX;
    const direction = currentPosition - touchPosition;

    if (direction > 10) handlePrevSlide();
    if (direction < -10) handleNextSlide();

    setTouchPosition(null);
  };

  const renderSlides = (): React.ReactNode => {
    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    const afterNextIndex = nextIndex === slides.length - 1 ? 0 : nextIndex + 1;
    const lastNeedIndex = afterNextIndex === slides.length - 1 ? 0 : afterNextIndex + 1;

    return [prevIndex, currentIndex, nextIndex, afterNextIndex, lastNeedIndex].map((index) => {
      return React.cloneElement(slides[index]);
    });
  };

  return (
    <div className={css.container} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <div className={css.carouselInitialized}>
        <div className={css.leftSlide} onClick={handlePrevSlide}>
          <IoIosArrowBack className={css.icon} />
        </div>
        <div className={css.mainSlide}>
          <div
            className={classNames(
              {
                [css.nextSlide]: isAnimating === 'next',
                [css.prevSlide]: isAnimating === 'prev',
              },
              css.carouselContainer
            )}
            onAnimationEnd={handleAnimationEnd}
          >
            {renderSlides()}
          </div>
        </div>
        <div className={css.rightSlide} onClick={handleNextSlide}>
          <IoIosArrowForward className={css.icon} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
