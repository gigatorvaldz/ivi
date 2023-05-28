import React from 'react';
import css from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import List from '@/UI/List';
import Socials from '@/UI/Socials';
import { LINKS } from '@/constants/footer';
import noAds from 'public/assets/footer/noAds.svg';
import Stores from '@/UI/Stores';
import SupportService from '@/UI/SupportService';
import { stores } from '@/constants/stores';
import { socials } from '@/constants/socials';
import { useTranslation } from 'next-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation('footer');

  return (
    <footer className={css.container}>
      <div className={css.content}>
        <div className={css.footerTop}>
          <div className={css.column}>
            <span className={css.title}>{t('aboutUs')}</span>
            <List items={LINKS[0]} />
          </div>
          <div className={css.column}>
            <span className={css.title}>{t('sections')}</span>
            <List items={LINKS[1]} />
            <div className={css.certificateLink}>
              <Link href="https://www.ivi.ru/cert">{t('certificate')}</Link>
            </div>
          </div>
          <div className={css.column}>
            <span className={css.title}>{t('support')}</span>
            <SupportService />
          </div>
          <div className={css.column}>
            <div className={css.widget}>
              <Link href="https://www.ivi.ru/subscribe?redirect_url=%2F">
                <div className={css.widgetIcon}>
                  <Image src={noAds} alt="noAds" width={56} height={56} />
                </div>
                <p className={css.widgetText}>{t('watch')}</p>
              </Link>
            </div>
          </div>
        </div>
        <div className={css.footerBottom}>
          <div className={css.columnWide}>
            <Stores items={stores} />
            <div className={css.copyrights}>
              <span>{t('copyrightsTop')}</span>
              <span>{t('copyrightsBottom')}</span>
            </div>
          </div>
          <div className={css.columnWide}>
            <Socials items={socials} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
