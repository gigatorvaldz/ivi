import React, { useEffect } from 'react';
import GaleryCarousel from '@/UI/GaleryCarousel';
import { Film } from '@/interfaces/Film';
import CommentBlock from '../../UI/CommentBlock';
import { useRouter } from 'next/router';

import styles from './CommentsGalery.module.scss';
import classNames from 'classnames';

type CommentsGaleryProps = {
  film: Film;
  isTitleLink?: boolean;
  arrowsBottomOffset?: number;
};

const CommentsGalery: React.FC<CommentsGaleryProps> = ({ film, arrowsBottomOffset = 0 }) => {
  const router = useRouter();

  return (
    <section className={styles.galerySection}>
      <div className="wrapper">
        <div className={styles.container}>
          <span
            onClick={() => router.push(router.asPath + '?comments', undefined, { shallow: true })}
            className={classNames(styles.heading, styles.link)}
          >
            Комментарии <span className={styles.commentsCount}>{film.reviews.length}</span>
          </span>
          <p className={styles.filmTitle}>О фильме «{film.name}»</p>

          <GaleryCarousel
            buttonsOutside
            itemsWidthAreEqual
            arrowsBottomOffset={arrowsBottomOffset}
            initialVisibleCards={4}
            slides={film.reviews.map(({ id, title, text, rating }) => (
              <CommentBlock key={id} title={title} content={text} rating={rating} />
            ))}
          />
        </div>
      </div>
    </section>
  );
};

export default CommentsGalery;
