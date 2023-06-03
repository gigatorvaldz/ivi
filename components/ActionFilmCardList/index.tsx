import React from 'react';
import css from './ActionFilmCardList.module.scss';
import ActionFilmCard from '@/UI/ActionFilmCard';
import { Film } from '@/interfaces/Film';

interface ActionFilmCardListI {
  items: Film[];
}

const ActionFilmCardList: React.FC<ActionFilmCardListI> = ({ items }) => {
  return (
    <div className={css.container}>
      {items.map((el) => (
        <ActionFilmCard key={el.id} film={el} />
      ))}
    </div>
  );
};

export default ActionFilmCardList;
