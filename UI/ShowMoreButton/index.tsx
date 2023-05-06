import React, { useState } from 'react';

import styles from './ShowMoreButton.module.scss';
import { useRouter } from 'next/router';
import classNames from 'classnames';

type ShowMoreButtonProps = {
  placeholder: string;
  avatarType?: 'little' | 'large';
};

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ placeholder, avatarType = 'little' }) => {
  const router = useRouter();

  return (
    <div
      className={styles.container}
      onClick={() => router.push(router.asPath + '?person', undefined, { shallow: true })}
    >
      <div
        className={classNames(
          { [styles.avatarContainerLarge]: avatarType === 'large' },
          styles.avatarContainer,
        )}
      >
        {placeholder}
      </div>
    </div>
  );
};

export default ShowMoreButton;
