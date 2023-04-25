import List from '@/UI/List';
import React from 'react';
import css from './FilmsDropDownContent.module.scss';
import LinedList from '@/UI/LinedList';
import { ListItem } from '@/interfaces';
import SubscriptionDropDownContent from '../SubscriptionDropDownContent';

interface FilmsDropDownContentI {
  content: {
    genres: Array<Array<ListItem>>;
    years: Array<ListItem>;
    countries: Array<ListItem>;
    line: Array<ListItem>;
  };
}

const FilmsDropDownContent: React.FC<FilmsDropDownContentI> = ({
  content,
}: FilmsDropDownContentI) => {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <div className={css.items}>
          <div className={css.genres}>
            <h3>Жанры</h3>
            <div className={css.lists}>
              <div>
                <List items={content.genres[0]} />
              </div>
              <div className={css.linklist}>
                <List items={content.genres[1]} />
              </div>
            </div>
          </div>

          <div className={css.linklist + ' ' + css.others}>
            <div>
              <h3>Страны</h3>
              <List items={content.countries} />
            </div>
            <div>
              <h3>Годы</h3>
              <List items={content.years} />
            </div>
          </div>
        </div>
      </div>
      <div className={css.subscriptionWrapper}>
        <LinedList items={content.line} />
        <SubscriptionDropDownContent />
      </div>
    </div>
  );
};

export default FilmsDropDownContent;
