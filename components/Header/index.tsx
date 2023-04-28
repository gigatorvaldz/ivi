import React, { useEffect, useRef, useState } from 'react';
import css from './Header.module.scss';
import Button from '@/UI/Button';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RxPerson } from 'react-icons/rx';
import classNames from 'classnames';
import FilmsDropDownContent from './HeaderDropDownContent/FilmsDropDownContent';
import NotificationDropDownContent from './HeaderDropDownContent/NotificationDropDownContent';
import { Film, Series, Animation } from '@/constants/header';
import { useToggleDropDown } from '@/hooks/useToggleDropDown';
import HeaderDropDown from './HeaderDropDown';
import { AnimatePresence, motion } from 'framer-motion';
import HeaderNavbar from './HeaderNavbar';
import { HeaderItem, HeaderControlsItem } from '@/interfaces';
import HeaderControls from './HeaderControls';
import TvDropDownContent from './HeaderDropDownContent/TvDropDownContent/index';
import ProfileDropDownContent from './HeaderDropDownContent/ProfileDropDownContent';
import PopupSearch from '../PopupSearch';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [visibleSearch, setVisibleSearch] = useState<boolean>(false);
  const dropContent = useRef<HTMLDivElement>(null);
  const [currentDropDown, setCurrentDropDown] = useState<React.ReactNode>(null);
  const router = useRouter();
  const [dropDownFocusOn, dropDownFocusOff] = useToggleDropDown(isOpen, setIsOpen, dropContent);

  useEffect(() => {
    if (router.asPath.split('?').slice(-1).join('') === 'search') setVisibleSearch(true);
    else setVisibleSearch(false);
  }, [router]);

  const NavbarItems: Array<HeaderItem> = [
    { title: 'Мой Иви', dropdown: undefined, href: '/' },
    { title: 'Что нового', dropdown: undefined, href: '/' },
    { title: 'Фильмы', dropdown: <FilmsDropDownContent content={Film} />, href: '/movies' },
    { title: 'Сериалы', dropdown: <FilmsDropDownContent content={Series} />, href: '/series' },
    { title: 'Мультфильмы', dropdown: <FilmsDropDownContent content={Animation} />, href: '/' },
    { title: 'TV+', dropdown: <TvDropDownContent />, href: '/' },
  ];

  const ControlsItems: Array<HeaderControlsItem> = [
    {
      title: <Button primaryText="Смотреть 30 дней бесплатно" styling="accent" />,
      dropdown: undefined,
      href: '/',
      name: 'subbutton',
    },
    {
      title: (
        <div
          className={css.search}
          onClick={() => router.push(router.asPath + '?search', undefined, { shallow: true })}
        >
          <AiOutlineSearch strokeWidth={18} size={20} />
          <p>Поиск</p>
        </div>
      ),
      dropdown: undefined,
      name: 'searchbutton',
    },
    {
      title: (
        <div className={css.notification}>
          <IoMdNotificationsOutline strokeWidth={18} size={20} />
        </div>
      ),
      dropdown: <NotificationDropDownContent />,
      href: '/profile/pull_notifications',
      name: 'notificationbutton',
    },
    {
      title: (
        <div className={css.profile}>
          <RxPerson size={24} />
        </div>
      ),
      dropdown: <ProfileDropDownContent />,
      href: '/profile',
      name: 'profilebutton',
    },
  ];

  return (
    <header className={css.header}>
      <div className="wrapper">
        <div
          ref={dropContent}
          className={classNames(
            {
              [css.dropped]: currentDropDown,
            },
            css.container
          )}
        >
          <div
            onMouseLeave={() => {
              dropDownFocusOff();
              setCurrentDropDown(undefined);
            }}
            onMouseEnter={() => {
              dropDownFocusOn();
            }}
            className={css.content}
          >
            <div className={css.borderBottom}></div>
            <div className={css.inner}>
              <HeaderNavbar items={NavbarItems} setCurrentDropDown={setCurrentDropDown} />
              <div className={css.controls}>
                <HeaderControls items={ControlsItems} setCurrentDropDown={setCurrentDropDown} />
              </div>
            </div>

            <div>
              <AnimatePresence>
                {isOpen && currentDropDown && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <HeaderDropDown>{currentDropDown}</HeaderDropDown>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <PopupSearch visibleSearch={visibleSearch} />
    </header>
  );
};

export default Header;
