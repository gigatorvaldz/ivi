import React from 'react';
import css from './TabsList.module.scss';
import { TabsListItem } from '@/interfaces';
import { useRouter } from 'next/router';
import classNames from 'classnames';

interface ITabsList {
  items: TabsListItem[];
}

const TabsList: React.FC<ITabsList> = ({ items }) => {
  const router = useRouter();
  const currentQuery = router.asPath.split('?').slice(-1).join('');
  const pathWithoutQuery = router.asPath.split('?').slice(0, -1).join('');

  return (
    <>
      <ul className={css.container}>
        {items.map((e) => (
          <li
            key={e.href}
            onClick={() =>
              e.href && router.push(pathWithoutQuery + `?${e.href}`, undefined, { shallow: true })
            }
          >
            <span className={classNames({ [css.active]: currentQuery === e.href }, css.title)}>
              {e.title}
            </span>
            {e.count && <span className={css.count}>{e.count}</span>}
          </li>
        ))}
      </ul>
    </>
  );
};
export default TabsList;
