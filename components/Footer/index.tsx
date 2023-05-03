import React from 'react';
import css from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import List from '@/UI/List';
import Socials from '@/UI/Socials';
import { LINKS } from '@/constants/footer';
import noAds from 'public/assets/footer/noAds.svg';
import Stores from '@/UI/Stores';
import Button from '@/UI/Button';
import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import SupportService from '@/UI/SupportService';

const Footer: React.FC = () => {
  return (
    <footer className={css.container}>
      <div className={css.content}>
        <div className={css.footerTop}>
          <div className={css.column}>
            <span className={css.title}>О нас</span>
            <List items={LINKS[0]} />
          </div>
          <div className={css.column}>
            <span className={css.title}>Разделы</span>
            <List items={LINKS[1]} />
            <div className={css.certificateLink}>
              <Link href="/123">Активация сертификата</Link>
            </div>
          </div>
          <div className={css.column}>
            <span className={css.title}>Служба поддержки</span>
            <SupportService />
          </div>
          <div className={css.column}>
            <div className={css.widget}>
              <div className={css.widgetIcon}>
                <Image src={noAds} alt="noAds" width={56} height={56} />
              </div>
              <p className={css.widgetText}>Смотрите фильмы, сериалы и мультфильмы без рекламы</p>
            </div>
          </div>
        </div>
        <div className={css.footerBottom}>
          <div className={css.columnWide}>
            <Stores />
            <div className={css.copyrights}>
              <span>© 2023 OOO «Иви.ру»</span>
              <span>HBO ® and related service marks are the property of Home Box Office, Inc</span>
            </div>
          </div>
          <div className={css.columnWide}>
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
