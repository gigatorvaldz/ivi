import React, { useState } from 'react';
import css from './LinedList.module.scss';
import Link from 'next/link';
import { ListItem } from '@/interfaces';

interface IList {
  items: ListItem[];
}

const LinedList: React.FC<IList> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const currentItmeHeight = 25;

  return (
    <div className={css.wrapper}>
      <div className={css.line}>
        <div
          style={{ marginTop: selectedItem * currentItmeHeight + 'px' }}
          className={css.selector}
        ></div>
      </div>
      <ul className={css.list}>
        {items.map((e) => (
          <li onMouseEnter={() => setSelectedItem(items.indexOf(e))} key={e.title}>
            <Link href={e.href}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinedList;
