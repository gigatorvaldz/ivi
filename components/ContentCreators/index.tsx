import React from 'react';
import css from './ContentCreators.module.scss';
import PersonAvatar from '@/UI/PersonAvatar';
import { CreatorsBlock } from '@/interfaces';

interface IContentCreators {
  creators: CreatorsBlock[];
}

const ContentCreators: React.FC<IContentCreators> = ({ creators }) => {
  return (
    <div className={css.container}>
      {creators.map((personArray, index) => (
        <>
          <span className={css.headerLink}>{personArray.profession}</span>
          <ul key={index} className={css.galleryList}>
            {personArray.person.map((e, index) => (
              <li key={index}>
                <PersonAvatar person={e} showFilmsCount avatarType='large' />
              </li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};

export default ContentCreators;
