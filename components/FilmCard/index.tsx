import React from 'react';
import css from './FilmCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import poster from 'public/assets/filmCard/poster.png';
import ageBadge from 'public/assets/filmCard/age16.svg';
import FilmCardButtons from '@/UI/FilmCardTooltips';

const FilmCard: React.FC = () => {
  return (
    <Link href="/watch/greenbook">
      <div className={css.container}>
        <div className={css.imageSection}>
          <Image className={css.logo} src={poster} alt="poster" />
          <Image className={css.ageBadge} src={ageBadge} alt="ageBadge" width={24} height={16} />
          <div className={css.properties}>
            <FilmCardButtons />
            <div className={css.inner}>
              <div className={css.rating}>
                <span className={css.valueInteger}>9,</span>
                <span className={css.valueFraction}>1</span>
              </div>
              <span className={css.chartTitle}>сюжет</span>
              <div className={css.barChart}>
                <div className={css.progress} style={{ width: '66%' }}></div>
              </div>
              <div className={css.info}>
                <div>2018, CША, Комедии</div>
                <div>124 минуты</div>
              </div>
            </div>
          </div>
        </div>
        <div className={css.title}>
          <span>Зеленая книга</span>
        </div>
      </div>
    </Link>
  );
};

export default FilmCard;
