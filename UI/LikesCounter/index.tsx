import React from 'react';
import css from './LikesCounter.module.scss';
import classNames from 'classnames';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

interface ILikesCounter {
  rating: number | undefined;
}

const LikesCounter: React.FC<ILikesCounter> = ({ rating }) => {
  const likeComment = (): void => {};

  const dislikeComment = (): void => {};

  return (
    <div className={css.container}>
      <AiOutlineLike className={css.icon} />
      <span
        className={classNames({
          [css.positiveLikes]: rating && rating > 0,
          [css.negativeLikes]: rating && rating < 0,
        })}
      >
        {rating}
      </span>
      <AiOutlineDislike className={css.icon} />
    </div>
  );
};

export default LikesCounter;
