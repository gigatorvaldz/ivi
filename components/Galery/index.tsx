import React, { useEffect } from 'react';
import GaleryCarousel from '@/UI/GaleryCarousel';
import Link from 'next/link';
import { Routes } from '@/constants/routes';
import getEnumKeyByEnumValue from '../../helpers/getEnumKeyByValue';

import styles from './Galery.module.scss';
import classNames from 'classnames';
import { BsChevronCompactRight } from 'react-icons/bs';

type GaleryProps = {
  title: string;
  slides: React.ReactNode[];
  isTitleLink?: boolean;
  arrowsBottomOffset?: number;
};

const Galery: React.FC<GaleryProps> = ({
  title,
  slides,
  isTitleLink = true,
  arrowsBottomOffset = 0,
}) => {
  return (
    <section className={styles.galerySection}>
      <div className="wrapper">
        <div className={styles.container}>
          {!isTitleLink && <h2 className={styles.heading}>{title}</h2>}
          {isTitleLink && (
            <Link
              href={`/${getEnumKeyByEnumValue(Routes, title)}`}
              className={classNames(styles.heading, styles.link)}
            >
              {title}
              <BsChevronCompactRight className={styles.iconArrow} />
            </Link>
          )}
          <GaleryCarousel
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
