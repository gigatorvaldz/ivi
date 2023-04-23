import React from 'react';
import css from './TVCard.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

export type TVSmallCardstyling = 'flex' | 'default';

export interface TVSmallCardI {
  src: StaticImageData;
  href: string;
  styling?: TVSmallCardstyling;
}

const TVSmallCard: React.FC<TVSmallCardI> = ({ src, href, styling = 'default' }: TVSmallCardI) => {
  return (
    <Link href={href}>
      <div className={classNames(css[styling], css.card)}>
        <Image className={css.img} src={src} alt="tv channel card" />
      </div>
    </Link>
  );
};

export default TVSmallCard;
