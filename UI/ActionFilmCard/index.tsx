import { Film } from '@/interfaces/Film';
import React from 'react';
import css from './ActionFilmCard.module.scss';
import ImageCard from '../ImageCard';
import Button from '../Button';
import Link from 'next/link';

export interface ActionFilmCardI {
  film: Film;
}

const ActionFilmCard: React.FC<ActionFilmCardI> = ({film}) => {
  return (
    <Link href={`/moovies/${film.name}`} className={css.container}>
      <div className={css.mainimage}>
        <ImageCard src={film.poster} />
      </div>
      <div className={css.secondary}>
        <div className={css.info}>
          <h2>{film.year}</h2>
          <h2>{film.name}</h2>
          <p>Рейтинг Иви: {film.rating}</p>
        </div>
        <div className={css.button}>
          <Button styling="lighter" primaryText="Смотреть" />
        </div>
      </div>
    </Link>
  );
};

export default ActionFilmCard;
