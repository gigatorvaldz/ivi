import React from 'react';
import css from './TvDropDownContent.module.scss';
import { TV } from '@/constants/header';
import List from '@/UI/List';
import Button from '@/UI/Button';
import SubscriptionDropDownContent from '../SubscriptionDropDownContent';
import TVDropDownSlider from './TVDropDownSlider';

import img from '@/assets/header/TVSmallCard.jpg';
import { TVSmallCardI } from '@/UI/TVSmallCard';

const federalChannels: Array<TVSmallCardI> = [
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
];

const entertainmentChannels = [
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
  { src: img, href: '/' },
];

const TvDropDownContent: React.FC = () => {
  return (
    <div className={css.content}>
      <div className={css.list}>
        <div className={css.listcontent}>
          <h3>ТВ онлайн</h3>
          <List items={TV} />
        </div>
        <Button styling="lighter" primaryText="Телепрограмма" />
      </div>
      <div className={css.sliders}>
        <div className={css.slider}>
          <h3>Федеральные каналы</h3>
          <TVDropDownSlider items={federalChannels} />
        </div>
        <div className={css.slider}>
          <h3>Развлекательные каналы</h3>
          <TVDropDownSlider items={entertainmentChannels} />
        </div>
      </div>
      <div className={css.subscription}>
        <SubscriptionDropDownContent />
      </div>
    </div>
  );
};

export default TvDropDownContent;
