import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import css from './Banner.module.scss';
import photo from '/assets/banner/test.png';
import photo1 from '/assets/banner/test2.png';
import classNames from 'classnames';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Slide {
  component: React.ReactNode;
}

const Banner = () => {
  
  let images: any = [
    { component: <Image src={photo} alt="1" /> },
    { component: <Image src={photo1} alt="2" /> },
    { component: <Image src={photo} alt="3" /> },
    { component: <Image src={photo1} alt="4" /> },
    { component: <Image src={photo} alt="5" /> },
    { component: <Image src={photo1} alt="6" /> },
    { component: <Image src={photo} alt="7" /> },
    { component: <Image src={photo} alt="8" /> },
    { component: <Image src={photo1} alt="9" /> },
    { component: <Image src={photo} alt="10" /> },
    { component: <Image src={photo1} alt="11" /> },
    { component: <Image src={photo} alt="12" /> },
    { component: <Image src={photo1} alt="13" /> },
    { component: <Image src={photo} alt="14" /> },
  ];

  const [currentSlides, setCurrentSlides] = useState<Slide[]>([...images]);
  const [isAnimating, setIsAnimating] = useState<string>('');

  /*  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % currentSlides.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [currentIndex, currentSlides]);  */

  const handlePrevClick = () => {
    setTimeout(() => {
      setIsAnimating('prev');
    }, 300);
  };

  const handleNextClick = () => {
    setTimeout(() => {
      setIsAnimating('next');
    }, 300);
  };

  const handleAnimationEnd = () => {
    isAnimating === 'next'
      ? setCurrentSlides((prev) => [...prev.slice(1), ...prev.slice(0, 1)])
      : setCurrentSlides((prev) => [...prev.slice(-1), ...prev.slice(0, -1)]);
    
    setIsAnimating('');
  };

  return (
    <div className={css.container}>
      <div className={css.carouselInitialized}>
        <div className={css.leftSlide} onClick={handlePrevClick}>
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
            {currentSlides.map((e) => (
              <>{e.component}</>
            ))}
          </div>
        </div>
        <div className={css.rightSlide} onClick={handleNextClick}>
          <IoIosArrowForward className={css.icon} />
        </div>
      </div>
    </div>
  );
};

export default Banner;