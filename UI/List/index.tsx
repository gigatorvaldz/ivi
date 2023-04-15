import React from 'react';
import css from './List.module.scss';
import Link from 'next/link';
import { ListItem } from '@/interfaces';

interface IList {
  items: ListItem[];
}

const List: React.FC<IList> = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map((e) => (
        <li key={e.title}>
          <Link href={e.href}>{e.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default List;