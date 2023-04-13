import React from 'react';
import css from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import List from '@/UI/List/List';
import { LINKS } from '@/constants/footer';
import noAds from '/assets/footer/noAds.svg';
import Socials from '@/UI/Socials/Socials';

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
            <div className={css.description}>
              <span>Мы всегда готовы вам помочь.</span>
              <span>Наши операторы онлайн 24/7</span>
            </div>
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