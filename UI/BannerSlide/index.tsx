import React from 'react';
import css from './BannerSlide.module.scss';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import Button from '@/UI/Button';

interface IBannerSlide {
  backgroundImage: StaticImageData;
  title: StaticImageData;
  info: string;
  buttonText: string;
  href: string;
  textColor?: string;
}

const BannerSlide: React.FC<IBannerSlide> = ({
  backgroundImage,
  title,
  info,
  buttonText,
  href,
  textColor = 'white'
}) => {
  return (
    <Link href={href} className={css.slideContainer}>
      <div className={css.slideContent}>
        <div className={css.slideInfo}>
          <Image src={title} className={css.title} loading='eager' alt="title" />
          <p style={{color: `${textColor}`}}>{info}</p>
          <div className={css.buttonBlock}>
            <Button styling="accent" primaryText={buttonText} />
          </div>
        </div>
        <Image src={backgroundImage} className={css.backgroundImage} loading='eager' alt="backgroundImage" />
      </div>
    </Link>
  );
};

export default BannerSlide;