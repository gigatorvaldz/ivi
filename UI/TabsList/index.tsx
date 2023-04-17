import React from 'react';
import css from './TabsList.module.scss';
import { TabsListItem } from '@/interfaces';

interface ITabsList {
  items: TabsListItem[];
}

const TabsList: React.FC = () => {
  const mockData = [
    { title: 'Создатели' },
    { title: 'Комментарии', count: 22 },
    { title: 'Трейлеры', count: 3 },
    { title: 'Награды', count: 1 },
  ];

  return (
    <div className={css.container}>
      <ul>
        {mockData.map((e) => (
          <li>
            <span>{e.title}</span>
            {e.count && <span>{e.count}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TabsList;
