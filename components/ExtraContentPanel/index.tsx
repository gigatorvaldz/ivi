import React from 'react';
import Link from 'next/link';
import { Film } from '@/interfaces/Film';
import ImageWithFallback from '@/UI/ImageWithFallback';

import styles from './ExtraContentPanel.module.scss';
import classNames from 'classnames';

type ExtraContentPanelProps = {
  film: Film;
};

const ExtraContentPanel: React.FC<ExtraContentPanelProps> = ({ film }) => {
  return (
    <section className={styles.galerySection}>
      <div className="wrapper">
        <div className={styles.container}>
          <h2 className={styles.heading}>
            <Link href={`/`} className={classNames(styles.link)}>
              Трейлеры
            </Link>
            &nbsp;и доп. материалы
          </h2>
          <div className={styles.trailerContainer}>
            <div className={styles.filmPoster}>
              <ImageWithFallback
                src={'http://source.com/1'}
                fallback="https://i.ibb.co/pb7f3ZC/image.png"
                className={styles.poster}
                fill
                alt="person_img"
                placeholder="blur"
              />
            </div>
            <div className={styles.descriptionBlock}>
              <h3 className={styles.trailerDescription}>{`ТВ-ролик (русский язык)`}</h3>
              <p className={styles.trailerDuration}>35 сек.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraContentPanel;
