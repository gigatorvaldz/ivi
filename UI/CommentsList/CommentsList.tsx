import React from 'react';
import css from './CommentsList.module.scss';
import Avatar from '../Avatar';
import { Comment } from '@/interfaces';

interface ICommentList {
  items: Comment[];
}

const CommentsList: React.FC = () => {
  const mockComments = [
    { author: 'qwrewt', text: 'qweryuio', date: '26 февраля 2009', likes: 3 },
    { author: 'qwrewt', text: 'qweryuio', date: '26 февраля 2009', likes: 3 },
    { author: 'qwrewt', text: 'qweryuio', date: '26 февраля 2009', likes: 3 },
    { author: 'qwrewt', text: 'qweryuio', date: '26 февраля 2009', likes: 3 },
    { author: 'qwrewt', text: 'qweryuio', date: '26 февраля 2009', likes: 3 },
    { author: 'qwrewt', text: 'qweryuio', date: '26 февраля 2009', likes: 3 },
  ];

  return (
    <ul className={css.container}>
      {mockComments.map((e) => (
        <li>
          <Avatar author={e.author} />
          <div className={css.itemHeader}>
            <cite>{e.author}</cite>
            <time>{e.date}</time>
            <div className={css.likesCounter}>{e.likes}</div>
          </div>
          <div className={css.itemBody}>
            <p>{e.text}</p>
            <span>Развернуть</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;
