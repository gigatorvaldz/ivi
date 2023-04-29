import React from 'react';
import css from './DrawerTVAccordion.module.scss';
import List from '@/UI/List';
import Button from '@/UI/Button';
import TVCardList from '@/UI/TVCardList';
import { federalChannels, entertainmentChannels, TV } from '../../../../constants/header';
import Link from 'next/link';

const DrawerTVAccordion = () => {
  return (
    <div className={css.container}>
      <div className={css.tvonline}>
        <h3>ТВ онлайн</h3>
        <List items={TV} />
      </div>
      <div className={css.tvprogram}>
        <Link className={css.buttonlink} href="/tvplus/tv-schedule-today">
          <Button styling="lighter" primaryText="Телепрограмма" />
        </Link>
      </div>
      <div className={css.channels}>
        <TVCardList title="Федеральные каналы" items={federalChannels} />
        <TVCardList title="Развлекательные каналы" items={entertainmentChannels} />
      </div>
    </div>
  );
};

export default DrawerTVAccordion;
