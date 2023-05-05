import React, { useEffect, useState } from 'react';
import css from './FooterMobile.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { BiHomeAlt, BiSearch } from 'react-icons/bi';
import { AiOutlineFolder } from 'react-icons/ai';
import { MdMonitor, MdOutlineMoreHoriz } from 'react-icons/md';
import glowImage from '/assets/footer/glowImage.svg';
import Drawer from '../Drawer';
import { useURLQuery } from '@/hooks/useURLQuery';
import PopupSearch from '../PopupSearch';

const FooterMobile: React.FC = () => {
  const router = useRouter();
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  const { currentQuery, lastPage, toggleQuery } = useURLQuery();

  useEffect(() => {
    if (currentQuery === 'navigation') setVisibleDrawer(true);
    else setVisibleDrawer(false);
  }, [currentQuery]);

  const items = [
    { component: <BiHomeAlt className={css.icon} />, text: 'Мой Иви', path: '/' },
    { component: <AiOutlineFolder className={css.icon} />, text: 'Каталог', path: '/films' },
    { component: <BiSearch className={css.icon} />, text: 'Поиск', path: '?search' },
    { component: <MdMonitor className={css.icon} />, text: 'TV+', path: '/tv+' },
    {
      component: <MdOutlineMoreHoriz className={css.icon} />,
      text: 'Ещё',
      path: '?navigation',
    },
  ];

  return (
    <>
      {visibleDrawer && <Drawer />}
      <footer className={css.container}>
        {items.map((e, index) => (
          <div
            className={css.item}
            key={index}
            onClick={() => (e.path.slice(0, 1) === '?' ? toggleQuery(e.path) : router.push(e.path))}
          >
            <Image
              width={64}
              height={48}
              src={glowImage}
              alt="glowImage"
              className={classNames(
                { [css.glowImageActive]: lastPage === e.path },
                css.glowImage,
              )}
            />
            {e.component}
            <span className={css.caption}>{e.text}</span>
          </div>
        ))}
      </footer>
      <PopupSearch />
    </>
  );
};

export default FooterMobile;
