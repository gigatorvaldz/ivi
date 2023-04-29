import React from 'react';
import css from './CollectionItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ICollectionItem {
    image: StaticImageData;
    title: string;
    href?: string;
}

const CollectionItem: React.FC<ICollectionItem> = ({image, title, href}) => {
    return (
            <div className={css.container}>
                <Image src={image} alt='collectionImage' />
                <span>{title}</span>
            </div>
    )
}

export default CollectionItem;