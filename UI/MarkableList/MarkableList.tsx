import React from 'react';
import styles from './MarkableList.module.scss';
import Link from 'next/link';
import { ListItem } from '@/interfaces';
import { IconType } from 'react-icons';

import classNames from 'classnames';

interface IList {
  items: Partial<ListItem>[];
  Mark: IconType;
  columns?: number;
}

const MarkableList: React.FC<IList> = ({ items, Mark, columns = 1 }) => {
  const activeTitle = 'тест';

  return (
    <ul className={classNames(styles.list, styles[`columns_${columns}`])}>
      {items.map((item) => (
        <li key={item.href}>
          {item.href && (
            <Link
              href={item.href}
              className={classNames(
                { [styles.active]: activeTitle === item.title },
                styles.linkContainer
              )}
            >
              {item.title} <Mark className={styles.mark} />
            </Link>
          )}
          {!item.href && (
            <div
              className={classNames(
                { [styles.active]: activeTitle === item.title },
                styles.linkContainer
              )}
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
