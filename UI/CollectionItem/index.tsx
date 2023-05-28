import React from 'react';
import css from './CollectionItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import { useTranslation } from 'next-i18next';

interface ICollectionItem {
  image: StaticImageData;
  title: string;
  href?: string;
}

const CollectionItem: React.FC<ICollectionItem> = ({ image, title, href }) => {
  const { t } = useTranslation('mainPage');

  return (
    <div className={css.container}>
      <Image src={image} alt="collectionImage" />
      <span>{t(title)}</span>
    </div>
  );
};

export default CollectionItem;
