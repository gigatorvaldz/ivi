import React, { useState } from 'react';
import styles from './MarkableList.module.scss';
import Link from 'next/link';
import { ListItem } from '@/interfaces';
import { IconType } from 'react-icons';

import classNames from 'classnames';
import { useHandleFilterTag } from '../../hooks/useHandleFilterTag';

interface IList {
  items: Partial<ListItem>[];
  Mark: IconType;
  queryType: 'genre' | 'country' | 'year';
  columns?: number;
}

const MarkableList: React.FC<IList> = ({ items, Mark, queryType, columns = 1 }) => {
  const [activeQuery, setActiveQuery] = useHandleFilterTag(queryType);

  function handleClick(title = '') {
    if (queryType === 'country' || queryType === 'genre') {
      setActiveQuery((prevState) =>
        prevState.includes(title)
          ? prevState.filter((country) => country !== title)
          : [...prevState, title]
      );
    } else {
      setActiveQuery([title]);
    }
  }

  return (
    <ul className={classNames(styles.list, styles[`columns_${columns}`])}>
      {items.map((item) => (
        <li key={item.href}>
          {item.href && (
            <Link
              href={item.href}
              className={classNames(
                { [styles.active]: activeQuery.includes(item.title!) },
                styles.linkContainer
              )}
            >
              {item.title} <Mark className={styles.mark} />
            </Link>
          )}
          {!item.href && (
            <div
              className={classNames(
                { [styles.active]: activeQuery.includes(item.title!) },
                styles.linkContainer
              )}
              onClick={() => handleClick(item.title)}
            >
              <p>{item.title}</p>
              <Mark className={styles.mark} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MarkableList;
