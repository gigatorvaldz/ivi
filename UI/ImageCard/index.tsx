import { StaticImageData } from 'next/image';
import React from 'react';
import Image from 'next/image';
import css from './ImageCard.module.scss';
interface ImageCardI {
  src: string | StaticImageData;
  alt?: string;
}

const ImageCard: React.FC<ImageCardI> = ({ src, alt = 'image card' }) => {
  return (
    <div className={css.container}>
      <Image fill src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
