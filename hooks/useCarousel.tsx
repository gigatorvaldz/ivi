import React, { useEffect, useState } from 'react';

export function useCarousel(
  imagesListedPerSwap: number,
  itemsWidthAreEqual: boolean,
  carouselRef: React.RefObject<HTMLDivElement>,
  carouselTrackRef: React.RefObject<HTMLUListElement>,
  stepWidth: number,
  setStepWidth: React.Dispatch<React.SetStateAction<number>>,
  location: {
    left: number;
    right: number;
  },
  setLocation: React.Dispatch<
    React.SetStateAction<{
      left: number;
      right: number;
    }>
  >
) {
  const [startX, setStartX] = useState(0);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    function setInitialStepWidth() {
      if (itemsWidthAreEqual) {
        let itemWidth = (carouselTrackRef.current!.children![0] as HTMLElement).offsetWidth;
        setStepWidth(itemWidth * imagesListedPerSwap);
      }

      let carouselWidth = carouselRef.current!.clientWidth;
      let right = carouselTrackRef.current!.scrollWidth - carouselWidth;
      setLocation((prevState) => ({ ...prevState, right }));
    }

    setTimeout(() => {
      setInitialStepWidth();
    }, 100);
  }, []);

  function toLeft() {
    let left = location.left - stepWidth;
    let carouselWidth = carouselRef.current!.clientWidth;
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
    let carouselWidth = carouselRef.current!.clientWidth;
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
