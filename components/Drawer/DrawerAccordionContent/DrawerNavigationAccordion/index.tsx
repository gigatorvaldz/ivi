import React from 'react';
import css from './DrawerNavigationAccordion.module.scss';
import List from '@/UI/List';
import { ListItem } from '@/interfaces';
import Link from 'next/link';

interface DrawerNavigationAccordionI {
  genres: ListItem[];
  countries: ListItem[];
  years: ListItem[];
  widgets: ListItem[];
  header: ListItem;
}

const DrawerNavigationAccordion: React.FC<DrawerNavigationAccordionI> = ({
  genres,
  countries,
  years,
  widgets,
  header,
}) => {
  return (
    <div className={css.container}>
      <Link href={header.href || '/'}>
        <h3 className={css.title}>{header.title}</h3>
      </Link>
      <div className={css.links}>
        <div className={css.genres}>
          <h3>Жанры</h3>
          <List items={genres} />
        </div>
        <div className={css.secondary}>
          <div className={css.info}>
            <div>
              <h3>Страны</h3>
              <List items={countries} />
            </div>
            <div>
              <h3>Годы</h3>
              <List items={years} />
            </div>
          </div>
          <div className={css.widget}>
            <List items={widgets} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerNavigationAccordion;
