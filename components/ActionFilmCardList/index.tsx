import React from 'react';
import css from './ActionFilmCardList.module.scss';
import ActionFilmCard, { ActionFilmCardI } from '@/UI/ActionFilmCard';

interface ActionFilmCardListI {
  items: ActionFilmCardI[];
}

const ActionFilmCardList: React.FC<ActionFilmCardListI> = ({ items }) => {
  return (
    <div className={css.container}>
      {items.map((el) => (
        <ActionFilmCard film={el.film} />
      ))}
    </div>
  );
};

export default ActionFilmCardList;
