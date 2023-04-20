import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import headerLogo from '@/assets/header/logo.svg';
import css from './HeaderNavbar.module.scss';
import { HeaderItem } from '@/interfaces';

interface HeaderNavbarI {
  items: Array<HeaderItem>;
  setCurrentDropDown: (e: React.ReactNode) => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarI> = ({
  items,
  setCurrentDropDown,
}: HeaderNavbarI) => {
  return (
    <nav className={css.menu}>
      <Link className={css.logo} href={'/'}>
        <Image src={headerLogo} alt="header logo" />
      </Link>
      <ul className={css.list}>
        {items.map((el) => (
          <Link href={el.href} key={el.title}>
            <li
            className={css.item}
              onMouseEnter={() => {
                setCurrentDropDown(el.dropdown);
              }}
            >
              <h2>{el.title}</h2>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavbar;
