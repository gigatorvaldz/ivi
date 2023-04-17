import React from 'react';
import css from './CommentsList.module.scss';
import Avatar from '../Avatar';
import { CommentItem } from '@/interfaces';
import LikesCounter from '../LikesCounter';
import Comment from '../Comment';

interface ICommentList {
  items: Comment[];
}

const CommentsList: React.FC = () => {
  const mockComments = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '26 февраля 2009',
      likes: -3,
      children: [
        {
          text: 'qweryuio',
          date: '26 февраля 2009',
          likes: -3,
          children: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              date: '26 февраля 2009',
              likes: -3,
            },
          ],
        },
        { text: 'qweryuio', date: '26 февраля 2009', likes: -3 },
      ],
    },
    {
      author: 'Сфпыф',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '26 февраля 2009',
      likes: 3,
    },
    { author: '', text: 'qweryuio', date: '26 февраля 2009', likes: 0 },
    { text: 'qweryuio', date: '26 февраля 2009', likes: 3 },
  ];

  return (
    <>
      <ul className={css.container}>
        {mockComments.map((e) => (
          <Comment
            text={e.text}
            author={e.author}
            date={e.date}
            likes={e.likes}
            children={e.children}
          />
        ))}
      </ul>
    </>
  );
};

export default CommentsList;
