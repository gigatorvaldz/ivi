import React from 'react';
import css from './HeaderMobile.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import Button from '@/UI/Button';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RxPerson } from 'react-icons/rx';

import headerLogo from '@/assets/header/logo.svg';
import classNames from 'classnames';

const HeaderMobile: React.FC = () => {
  return (
    <header className={css.header}>
      <div className="wrapper">
        <div className={css.container}>
          <div className={css.inner}>
            <Link className={css.logo} href={'/'}>
              <Image src={headerLogo} alt="header logo" />
            </Link>
            <div className={css.controls}>
              <Link href="/">
                <Button primaryText="Смотреть 30 дней бесплатно" styling="accent" />
              </Link>
              <Link
                href="/profile/pull_notifications"
                className={classNames(css.notification, css.tablet)}
              >
                <IoMdNotificationsOutline strokeWidth={18} size={20} />
              </Link>
              <Link href="/profile" className={classNames(css.profile, css.tablet)}>
                <RxPerson size={24} />
              </Link>
            </div>
          </div>
          <div className={css.borderBottom}></div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
