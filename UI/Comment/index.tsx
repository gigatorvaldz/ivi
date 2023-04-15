import React from 'react';
import css from './Comment.module.scss';

interface IComment {
  author: string;
  text: string;
  likes?: number;
}

const Comment: React.FC = () => {
  return <div className={css.container}></div>;
};

export default Comment;
