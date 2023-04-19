import React from 'react';
import css from './Avatar.module.scss';
import { RxAvatar } from 'react-icons/rx';

interface IAvatar {
  author?: string;
}

const Avatar: React.FC<IAvatar> = ({ author }) => {
  return (
    <div className={css.container}>
      {author ? <span>{author[0]}</span> : <RxAvatar className={css.icon} />}
    </div>
  );
};

export default Avatar;
