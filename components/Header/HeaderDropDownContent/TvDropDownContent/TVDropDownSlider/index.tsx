import React from 'react';
import css from "./TVDropDownSlider.module.scss"

import ImageCarousel from '@/UI/ImageCarousel';
import TVSmallCard, { TVSmallCardI } from '@/UI/TVCard';

export interface TVDropDownSliderI {
  items: Array<TVSmallCardI>;
}

const TVDropDownSlider: React.FC<TVDropDownSliderI> = ({ items }: TVDropDownSliderI) => {
  return (
    <div className={css.container}>
      <ImageCarousel
        imagesListedPerSwap={3}
        buttonsOutside
        slides={items.map((el) => (
          <TVSmallCard src={el.src} href={el.href} />
        ))}
      />
    </div>
  );
};

export default TVDropDownSlider;
