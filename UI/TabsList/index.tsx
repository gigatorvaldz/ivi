import React from 'react';
import css from './TabsList.module.scss';
import { TabsListItem } from '@/interfaces';
import { useRouter } from 'next/router';
import classNames from 'classnames';

interface ITabsList {
  items: TabsListItem[];
}

const TabsList: React.FC = () => {
  const mockData = [
    { title: 'Создатели', href: 'person' },
    { title: 'Комментарии', count: 22, href: 'comments' },
    { title: 'Трейлеры', count: 3, href: 'trailers' },
    { title: 'Награды', count: 1, href: 'awards' },
  ];

  const router = useRouter();
  const currentPath = router.pathname.split('/').slice(-1).join('');

  return (
    <>
      <ul className={css.container}>
        {mockData.map((e) => (
          <li key={e.href}>
            <span className={classNames({ [css.active]: currentPath === e.href }, css.title)}>
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
