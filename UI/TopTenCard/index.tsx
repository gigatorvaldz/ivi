import React from 'react';
import css from './TopTenCard.module.scss';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

interface ITopTenCard {
  position: StaticImageData;
  title: StaticImageData;
  poster: StaticImageData;
  href: string;
}

const TopTenCard: React.FC<ITopTenCard> = ({ position, title, poster, href }) => {
  return (
    <div className={css.container}>
      <Link href={href}>
        <div className={css.imageSection}>
          <div className={css.imageFade}></div>
          <Image src={poster} className={css.poster} alt="poster" />
          <div className={css.info}>
            <Image src={title} alt="title" />
            <Image src={position} className={css.position} alt="position" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TopTenCard;
