import React from 'react';
import css from './TVSmallCard.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface TVSmallCardI {
  src: StaticImageData;
  href: string;
}

const TVSmallCard: React.FC<TVSmallCardI> = ({ src, href }: TVSmallCardI) => {
  return (
    <Link href={href}>
      <div className={css.card}>
        <Image className={css.img} src={src} alt="tv channel card" />
      </div>
    </Link>
  );
};

export default TVSmallCard;
