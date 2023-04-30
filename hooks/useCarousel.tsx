import React, { useEffect, useState } from 'react';
import { useMediaQueriesMinWidth } from './useMediaQueries';

export function useCarousel(
  itemsWidthAreEqual: boolean,
  carouselRef: React.RefObject<HTMLDivElement>,
  carouselTrackRef: React.RefObject<HTMLUListElement>,
  location: {
    left: number;
    right: number;
  },
  setLocation: React.Dispatch<
    React.SetStateAction<{
      left: number;
      right: number;
    }>
  >,
  setItemWidth?: React.Dispatch<React.SetStateAction<number>>,
  initialVisibleCards?: number,
) {
  const [startX, setStartX] = useState(0);
  const [distance, setDistance] = useState(0);
  const [imagesPerSwap, setImagesPerSwap] = useState(1);
  const [stepWidth, setStepWidth] = useState(200 * imagesPerSwap);

  const { isMobile, is500, isTable, isLaptop, isDesktop } = useMediaQueriesMinWidth();

  useEffect(() => {
    const handleWidthChange = () => {
      setLocation({ left: 0, right: location.right + location.left });
      carouselTrackRef.current!.style.transform = `translateX(${0}px)`;
      let visibleCards = initialVisibleCards || 7;

      if (setItemWidth) {
        if (isDesktop) {
          setItemWidth(Math.ceil(1240 / visibleCards));
          setImagesPerSwap(visibleCards - 1 <= 0 ? 1 : visibleCards - 1);
          return;
        } else if (isLaptop) {
          setItemWidth(
            Math.ceil((window.innerWidth - 63) / (visibleCards - 1 <= 0 ? 1 : visibleCards - 1)),
          );
          setImagesPerSwap(visibleCards - 2 <= 0 ? 1 : visibleCards - 2);
          return;
        } else if (isTable) {
          setItemWidth(
            Math.ceil((window.innerWidth - 63) / (visibleCards - 2 <= 0 ? 1 : visibleCards - 2)),
          );
          setImagesPerSwap(visibleCards - 3 <= 0 ? 1 : visibleCards - 3);
          return;
        } else if (is500) {
          setItemWidth(
            Math.ceil((window.innerWidth - 63) / (visibleCards - 3 <= 0 ? 1 : visibleCards - 3)),
          );
          setImagesPerSwap(visibleCards - 4 <= 0 ? 1 : visibleCards - 4);
          return;
        } else if (isMobile) {
          setItemWidth(
            Math.ceil((window.innerWidth - 64) / (visibleCards - 4 <= 0 ? 1 : visibleCards - 4)),
          );
          setImagesPerSwap(visibleCards - 5 <= 0 ? 1 : visibleCards - 5);
          return;
        } else {
          setItemWidth(
            Math.ceil((window.innerWidth - 64) / (visibleCards - 5 <= 0 ? 1 : visibleCards - 5)),
          );
          setImagesPerSwap(1);
        }
      }
    };

    handleWidthChange();
    window.addEventListener('resize', handleWidthChange);
    return () => {
      window.removeEventListener('resize', handleWidthChange);
    };
  }, [isMobile, is500, isTable, isLaptop, isDesktop]);

  useEffect(() => {
    function setInitialStepWidth() {
      if (itemsWidthAreEqual) {
        let itemWidth = (carouselTrackRef.current!.children![0] as HTMLElement).offsetWidth;
        setStepWidth(itemWidth * imagesPerSwap);
      }

      let carouselWidth = carouselRef.current!.offsetWidth;
      let right = carouselTrackRef.current!.scrollWidth - carouselWidth;
      setLocation((prevState) => ({ ...prevState, right }));
    }

    setTimeout(() => {
      setInitialStepWidth();
    }, 100);
    window.addEventListener('resize', setInitialStepWidth);

    return () => {
      window.removeEventListener('resize', setInitialStepWidth);
    };
  }, [imagesPerSwap, setImagesPerSwap]);

  function toLeft() {
    let left = location.left - stepWidth;
    let carouselWidth = carouselRef.current!.offsetWidth;
    let right = carouselTrackRef.current!.scrollWidth - carouselWidth - left;
    if (location.left < stepWidth) {
      carouselTrackRef.current!.style.transform = `translateX(${0}px)`;
      setLocation({ left: 0, right: location.right + location.left });
      return;
    }
    carouselTrackRef.current!.style.transform = `translateX(${-left}px)`;
    setLocation({ left, right });
  }

  function toRight() {
    let left = location.left + stepWidth;
    let carouselWidth = carouselRef.current!.offsetWidth;
    let right = carouselTrackRef.current!.scrollWidth - carouselWidth - left;

    if (location.right < stepWidth) {
      setLocation({ left: location.left + location.right, right: 0 });
      carouselTrackRef.current!.style.transform = `translateX(${-(
        location.left + location.right
      )}px)`;
      return;
    }
    carouselTrackRef.current!.style.transform = `translateX(${-left}px)`;
    setLocation({ left, right });
  }

  function handleTouchStart(e: React.TouchEvent<HTMLUListElement>) {
    let touch = e.targetTouches[0];
    setStartX(touch.clientX);
  }

  function handleTouchMove(e: React.TouchEvent<HTMLUListElement>) {
    let touch = e.targetTouches[0];
    let currentDistance = touch.clientX - startX;

    if (location.left - currentDistance < 0) {
      setDistance(0);
      carouselTrackRef.current!.style.transform = `translateX(${0}px)`;
      return;
    }

    if (location.right + currentDistance < 0) {
      setDistance(Infinity);
      carouselTrackRef.current!.style.transform = `translateX(${-(
        location.left + location.right
      )}px)`;
      return;
    }

    if (currentDistance < 0) {
      carouselTrackRef.current!.style.transform = `translateX(${
        currentDistance - location.left
      }px)`;
    }

    if (currentDistance > 0) {
      carouselTrackRef.current!.style.transform = `translateX(${
        currentDistance - location.left
      }px)`;
    }

    setDistance(currentDistance);
  }

  function handleTouchEnd(e: React.TouchEvent<HTMLUListElement>) {
    if (distance < 0) {
      setLocation({ left: location.left + Math.abs(distance), right: location.right + distance });
    }
    if (distance > 0) {
      setLocation({ left: location.left - distance, right: location.right + distance });
    }
    if (distance === 0) {
      setLocation({ left: 0, right: location.right + location.left });
    }
    if (distance === Infinity) {
      setLocation({ left: location.right + location.left, right: 0 });
    }
  }

  return [toLeft, toRight, handleTouchStart, handleTouchMove, handleTouchEnd] as const;
}
