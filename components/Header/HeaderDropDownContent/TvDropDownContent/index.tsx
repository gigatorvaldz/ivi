import React from 'react';
import css from './TvDropDownContent.module.scss';
import { TV, federalChannels, entertainmentChannels } from '@/constants/header';
import List from '@/UI/List';
import Button from '@/UI/Button';
import SubscriptionDropDownContent from '../SubscriptionDropDownContent';
import TVDropDownSlider from './TVDropDownSlider';

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
