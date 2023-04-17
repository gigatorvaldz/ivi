import React from 'react';
import css from './CommentsList.module.scss';
import Avatar from '../Avatar';
import { Comment } from '@/interfaces';
import LikesCounter from '../LikesCounter';

interface ICommentList {
  items: Comment[];
}

const CommentsList: React.FC = () => {
  const mockComments = [
    { text: 'qweryuio', date: '26 февраля 2009', likes: -3 },
    { author: 'Сфпыф', text: 'Сфыпы', date: '26 февраля 2009', likes: 3 },
    { author: 'qwrewt', text: 'qweryuio', date: '26 февраля 2009', likes: 0 },
    { text: 'qweryuio', date: '26 февраля 2009', likes: 3 },
  ];

  return (
    <>
      <ul className={css.container}>
        {mockComments.map((e) => (
          <li>
            <Avatar author={e.author} />
            <div className={css.itemHeader}>
              {e.author && <cite>{e.author}</cite>}
              <time>{e.date}</time>
              <LikesCounter likes={e.likes} />
            </div>
            <div className={css.itemBody}>
              <p>{e.text}</p>
              <span>Развернуть</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CommentsList;
