import React from 'react';
import css from './LikesCounter.module.scss';
import classNames from 'classnames';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

interface ILikesCounter {
  likes: number;
}

const LikesCounter: React.FC<ILikesCounter> = ({ likes }) => {
  const likeComment = (): void => {};

  const dislikeComment = (): void => {};

  return (
    <div className={css.container}>
      <AiOutlineLike className={css.icon} />
      <span
        className={classNames({
          [css.positiveLikes]: likes > 0,
          [css.negativeLikes]: likes < 0,
        })}
      >
        {likes}
      </span>
      <AiOutlineDislike className={css.icon} />
    </div>
  );
};

export default LikesCounter;
