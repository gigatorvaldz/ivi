import React from 'react';
import css from './AsidePoster.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Poster } from '@/interfaces';
import { IoFilmSharp } from 'react-icons/io5';

const AsidePoster: React.FC<Poster> = ({ logoSrc, rating, info, duration }) => {
  const router = useRouter();
  const ratingArray = ('' + rating).split('.');

  return (
    <div className={css.container}>
      <div className={css.poster} onClick={() => router.back()}>
        <Image src={logoSrc} fill alt="poster" />
      </div>
      <div className={css.description}>
        <div className={css.rating}>
          <span>{ratingArray[0]},</span>
          <span>{ratingArray[1]}</span>
        </div>
        <div className={css.info}>{info}</div>
        <div className={css.duration}>
          <IoFilmSharp />
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default AsidePoster;
