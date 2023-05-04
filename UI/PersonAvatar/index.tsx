import React from 'react';

import styles from './PersonAvatar.module.scss';
import { Person } from '../../interfaces/Person';
import ImageWithFallback from '../ImageWithFallback';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { wordDeclension } from '../../helpers/wordDeclension';

type PersonAvatarProps = {
  avatarType?: 'little' | 'large';
  person: Person;
  role?: string;
  showFilmsCount?: boolean;
};

const PersonAvatar: React.FC<PersonAvatarProps> = ({
  person,
  role,
  showFilmsCount,
  avatarType = 'little',
}) => {
  const router = useRouter();

  const [name, surname] = person.name.split(' ');

  return (
    <div className={styles.container} onClick={() => router.push(`/person/${person.name}`)}>
      <div
        className={classNames(
          { [styles.avatarContainerLarge]: avatarType === 'large' },
          styles.avatarContainer,
        )}
      >
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
        <h3 className={classNames({ [styles.largeText]: avatarType === 'large' }, styles.name)}>
          {name}
        </h3>
        <h3 className={classNames({ [styles.largeText]: avatarType === 'large' }, styles.surname)}>
          {surname}
        </h3>
        {!showFilmsCount && <p className={styles.role}>{role}</p>}
        {showFilmsCount && (
          <p className={styles.role}>
            {person.films?.length +
              ' ' +
              wordDeclension(person.films?.length, [
                'фильм',
                'фильма',
                'фильмов',
              ]) || ''}
          </p>
        )}
      </div>
    </div>
  );
};

export default PersonAvatar;
