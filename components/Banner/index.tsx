import React, { useState, useEffect } from 'react';
import css from './Banner.module.scss';
import classNames from 'classnames';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Slide {
  component: React.ReactNode;
  position?: string;
}

const Banner: React.FC<{ slides: React.ReactElement<Slide>[] }> = ({ slides }) => {
  const [isAnimating, setIsAnimating] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 10000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handlePrevSlide = (): void => {
    setTimeout(() => {
      setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
      setIsAnimating('prev');
    }, 300);
  };

  const handleNextSlide = (): void => {
    setTimeout(() => {
      setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
      setIsAnimating('next');
    }, 300);
  };

  const handleAnimationEnd = () => {
    setIsAnimating('');
  };

  const renderSlides = (): React.ReactNode => {
    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    const afterNextIndex = nextIndex === slides.length - 1 ? 0 : nextIndex + 1;
    const lastNeedIndex = afterNextIndex === slides.length - 1 ? 0 : afterNextIndex + 1;

    const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

    return [prevIndex, currentIndex, nextIndex, afterNextIndex, lastNeedIndex].map((index) => {
      return React.cloneElement(extendedSlides[index]);
    });
  };

  return (
    <div className={css.container}>
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