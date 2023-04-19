import React from 'react';
import { useRouter } from 'next/router';

import classNames from 'classnames';
import styles from './GenreTag.module.scss';
import { IconType } from 'react-icons';
import getEnumKeyByEnumValue from '../../helpers/getEnumKeyByValue';
import { Genres } from '../../constants/genres';

type GenreTagProps = {
  tag: string;
  Icon: IconType;
  outlined?: boolean
};

const GenreTag: React.FC<GenreTagProps> = ({ tag, Icon, outlined }) => {
  const router = useRouter();

  return (
    <div
      className={classNames({[styles.outlined]: outlined}, styles.container)  }
      onClick={() => router.push(`/films/${getEnumKeyByEnumValue(Genres, tag)}`)}
    >
      <Icon className={styles.icon} />
      <p className={styles.tag}>{tag}</p>
    </div>
  );
};

export default GenreTag;
