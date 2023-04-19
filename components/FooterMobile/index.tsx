import React from 'react';
import css from './FooterMobile.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { BiHomeAlt, BiSearch } from 'react-icons/bi';
import { AiOutlineFolder } from 'react-icons/ai';
import { MdMonitor, MdOutlineMoreHoriz } from 'react-icons/md';
import glowImage from '/assets/footer/glowImage.svg';

const FooterMobile: React.FC = () => {
  const router = useRouter();

  const items = [
    { component: <BiHomeAlt className={css.icon} />, text: 'Мой Иви', path: '/' },
    { component: <AiOutlineFolder className={css.icon} />, text: 'Каталог', path: '/films' },
    { component: <BiSearch className={css.icon} />, text: 'Поиск', path: '/search' },
    { component: <MdMonitor className={css.icon} />, text: 'TV+', path: '/tv+' },
    { component: <MdOutlineMoreHoriz className={css.icon} />, text: 'Ещё', path: '/more' },
  ];

  return (
    <footer className={css.container}>
      {items.map((e) => (
        <div className={css.item} key={e.text}>
          <Image
            width={64}
            height={48}
            src={glowImage}
            alt="glowImage"
            className={classNames(
              { [css.glowImageActive]: router.pathname === e.path },
              css.glowImage
            )}
          />
          {e.component}
          <span className={css.caption}>{e.text}</span>
        </div>
      ))}
    </footer>
  );
};

export default FooterMobile;
