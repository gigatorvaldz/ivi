import React, { useEffect } from 'react';
import GaleryCarousel from '@/UI/GaleryCarousel';
import Link from 'next/link';
import Image from 'next/image';
import { Routes } from '@/constants/routes';
import getEnumKeyByEnumValue from '../../helpers/getEnumKeyByValue';

import styles from './Galery.module.scss';
import classNames from 'classnames';
import { BsChevronCompactRight } from 'react-icons/bs';
import { StaticImageData } from 'next/image';
import { useTranslation } from 'next-i18next';

type GaleryProps = {
  title: string;
  slides: React.ReactNode[];
  isTitleLink?: boolean;
  arrowsBottomOffset?: number;
  titleImage?: StaticImageData;
  initialVisibleCards?: number;
};

const Galery: React.FC<GaleryProps> = ({
  title,
  slides,
  isTitleLink = true,
  arrowsBottomOffset = 0,
  titleImage,
  initialVisibleCards,
}) => {
  const { t } = useTranslation('mainPage');

  return (
    <section className={styles.galerySection}>
      <div className="wrapper">
        <div className={styles.container}>
          <div className={styles.titleSection}>
            {titleImage && <Image src={titleImage} alt="titleImage" />}
            {!isTitleLink && <h2 className={styles.heading}>{t(title)}</h2>}
            {isTitleLink && (
              <Link
                href={`/${getEnumKeyByEnumValue(Routes, title)}`}
                className={classNames(styles.heading, styles.link)}
              >
                {t(title)}
                <BsChevronCompactRight className={styles.iconArrow} />
              </Link>
            )}
          </div>
          <GaleryCarousel
            initialVisibleCards={initialVisibleCards}
            buttonsOutside
            itemsWidthAreEqual
            arrowsBottomOffset={arrowsBottomOffset}
            slides={slides}
          />
        </div>
      </div>
    </section>
  );
};

export default Galery;
