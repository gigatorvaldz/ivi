import React from 'react';
import css from './TeaserList.module.scss';
import Image, { StaticImageData } from 'next/image';

interface ITeaserTile {
  text: string;
  icon: StaticImageData;
}

interface ITeaserList {
  items: ITeaserTile[];
}

const TeaserList: React.FC<ITeaserList> = ({ items }) => {
  return (
    <ul className={css.teaserList}>
      {items.map((e, index) => (
        <li key={index}>
          <Image src={e.icon} alt="teaserTileIcon" />
          <span>{e.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default TeaserList;
