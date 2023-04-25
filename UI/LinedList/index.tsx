import React, { useEffect, useState } from 'react';
import css from './LinedList.module.scss';
import Link from 'next/link';
import { ListItem } from '@/interfaces';

interface IList {
  items: ListItem[];
  init?: number;
}

const LinedList: React.FC<IList> = ({ items, init = 0 }) => {
  const [selectedItem, setSelectedItem] = useState<number>(init);
  const currentItemHeight = 25;

  useEffect(() => {
    setSelectedItem(init);
  }, [items]);
  
  return (
    <div className={css.wrapper}>
      <div className={css.line}>
        <div
          style={{ marginTop: selectedItem * currentItemHeight + 'px' }}
          className={css.selector}
        ></div>
      </div>
      <ul className={css.list}>
        {items.map((e) => (
          <li onMouseEnter={() => setSelectedItem(items.indexOf(e))} key={e.title}>
            <Link href={e.href || '/'}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinedList;
