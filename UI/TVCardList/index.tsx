import React from 'react';
import css from './TVCardList.module.scss';
import { TVSmallCardI } from '../TVCard';
import TVSmallCard from '../TVCard';

interface TVCardListI {
  items: Array<TVSmallCardI>;
  title: string;
}

const TVCardList: React.FC<TVCardListI> = ({ items, title }) => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>{title}</h3>
      <ul className={css.list}>
        {items.map((el) => (
          <li key={el.href}>
            <TVSmallCard styling="flex" href={el.href} src={el.src} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TVCardList;
