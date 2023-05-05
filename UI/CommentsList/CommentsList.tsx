import React, { useState } from 'react';
import css from './CommentsList.module.scss';
import Comment from '../Comment';
import Button from '../Button';
import { Review } from '@/interfaces/Review';

interface ICommentsList {
  items: Review[];
}

const CommentsList: React.FC<ICommentsList> = ({items}) => {
  const [sliceCounter, setSliceCounter] = useState<number>(1);
  let slicedComments = items.slice(0, sliceCounter * 12);

  return (
    <>
      <ul className={css.container}>
        {slicedComments.map((e) => (
          <Comment
            key={e.id}
            id={e.id}
            text={e.text}
            title={e.title}
            rating={e.rating}
            children={e.children}
          />
        ))}
      </ul>
      {slicedComments.length !== items.length && (
        <div className={css.moreComments}>
          <Button
            isHundredPercentsWidth={true}
            primaryText="Показать ещё"
            onClickHandler={() => setSliceCounter((prev) => prev + 1)}
          />
        </div>
      )}
    </>
  );
};

export default CommentsList;
