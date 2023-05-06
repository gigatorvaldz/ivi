import React from 'react';
import css from './FilmCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import poster from 'public/assets/filmCard/poster.png';
import ageBadge from 'public/assets/filmCard/age16.svg';
import FilmCardButtons from '@/UI/FilmCardTooltips';
import { Film } from '../../interfaces/Film';

type FilmCardProps = {
  film: Film;
};

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  const [rating1, rating2 = 0] = String(film.rating).split('.');
  const [hours = 0, minutes] = film.duration.split(':');

  return (
    <Link href={`/watch/${film.id}`}>
      <div className={css.container}>
        <div className={css.imageSection}>
          <Image className={css.logo} src={poster} alt="poster" />
          <Image className={css.ageBadge} src={ageBadge} alt="ageBadge" width={24} height={16} />
          <div className={css.properties}>
            <FilmCardButtons />
            <div className={css.inner}>
              <div className={css.rating}>
                <span className={css.valueInteger}>{rating1},</span>
                <span className={css.valueFraction}>{rating2}</span>
              </div>
              <span className={css.chartTitle}>сюжет</span>
              <div className={css.barChart}>
                <div className={css.progress} style={{ width: '66%' }}></div>
              </div>
              <div className={css.info}>
                <div>
                  {film.year}, {film.countries[0].name}, {film.genres[0].name}
                </div>
                <div>{+hours * 60 + +minutes} минуты</div>
              </div>
            </div>
          </div>
        </div>
        <div className={css.title}>
          <span>{film.name}</span>
        </div>
      </div>
    </Link>
  );
};

export default FilmCard;
