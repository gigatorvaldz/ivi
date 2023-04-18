import React, { useState } from 'react';
import css from './CommentsList.module.scss';
import { CommentItem } from '@/interfaces';
import Comment from '../Comment';
import Button from '../Button';

interface ICommentsList {
  items: CommentItem[];
}

const CommentsList: React.FC = () => {
  const mockComments = [
    {
      author: '125336',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '26 февраля 2009',
      likes: 122,
      children: [
        {
          author: 'O25336',
          text: 'qweryuio',
          date: '26 февраля 2009',
          likes: 0,
          children: [
            {
              author: 'Z25336',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              date: '26 февраля 2009',
              likes: -3,
            },
          ],
        },
        { author: 'Z25336', text: 'qweryuio', date: '26 февраля 2009', likes: -3 },
      ],
    },
    {
      author: '125336',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '26 февраля 2009',
      likes: -3,
      children: [
        {
          author: 'O25336',
          text: 'qweryuio',
          date: '26 февраля 2009',
          likes: -3,
          children: [
            {
              author: 'Z25336',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              date: '26 февраля 2009',
              likes: -3,
            },
          ],
        },
        { author: 'Z25336', text: 'qweryuio', date: '26 февраля 2009', likes: -3 },
      ],
    },
  ];

  const [sliceCounter, setSliceCounter] = useState<number>(1);

  let slicedComments = mockComments.slice(0, sliceCounter * 12);

  return (
    <>
      <ul className={css.container}>
        {slicedComments.map((e) => (
          <Comment
            text={e.text}
            author={e.author}
            date={e.date}
            likes={e.likes}
            children={e.children}
          />
        ))}
      </ul>
      {slicedComments.length !== mockComments.length && (
        <div className={css.moreComments}>
          <Button
            primaryText="Показать ещё"
            onClickHandler={() => setSliceCounter((prev) => prev + 1)}
          />
        </div>
      )}
    </>
  );
};

export default CommentsList;
