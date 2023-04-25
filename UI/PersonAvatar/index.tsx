import React, { useState } from 'react';
import Image from 'next/image';

import styles from './PersonAvatar.module.scss';
import { Person } from '../../interfaces/Person';
import ImageWithFallback from '../ImageWithFallback';
import { useRouter } from 'next/router';

type PersonAvatarProps = {
  person: Person;
  role?: string;
  showFilmsCount?: boolean;
};

const PersonAvatar: React.FC<PersonAvatarProps> = ({ person, role, showFilmsCount }) => {
  const router = useRouter();

  const [name, surname] = person.name.split(' ');

  return (
    <div className={styles.container} onClick={() => router.push(`/person/${person.name}`)}>
      <div className={styles.avatarContainer}>
        <ImageWithFallback
          src={person.photo}
          className={styles.avatar}
          fill
          alt="person_img"
          placeholder="blur"
          blurDataURL="https://i.ibb.co/NsVFCBw/image.png"
        />
      </div>
      <div className={styles.infoBlock}>
        <h3 className={styles.name}>{name}</h3>
        <h3 className={styles.surname}>{surname}</h3>
        {!showFilmsCount && <p className={styles.role}>{role}</p>}
        {showFilmsCount && <p className={styles.role}>{person.films?.length || ''}</p>}
      </div>
    </div>
  );
};

export default PersonAvatar;
