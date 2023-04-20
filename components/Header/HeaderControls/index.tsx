import React from 'react';
import css from './HeaderControls.module.scss';
import { HeaderControlsItem } from '@/interfaces';
import Link from 'next/link';

interface HeaderControlsI {
  items: Array<HeaderControlsItem>;
  setCurrentDropDown: (e: React.ReactNode) => void;
}

const HeaderControls: React.FC<HeaderControlsI> = ({
  items,
  setCurrentDropDown,
}: HeaderControlsI) => {
  return (
    <div className={css.container}>
      {items.map((el) => (
        <div
          key={el.name}
          onMouseEnter={() => {
            setCurrentDropDown(el.dropdown);
          }}
        >
          <Link href={el.href}>{el.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default HeaderControls;
