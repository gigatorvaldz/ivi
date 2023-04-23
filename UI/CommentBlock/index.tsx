import React from 'react';
import styles from './CommentBlock.module.scss';
import LikesCounter from './../LikesCounter/index';
import { useRouter } from 'next/router';

type CommentBlockProps = {
  title: string;
  content: string;
  rating: number;
  date?: string;
};

const CommentBlock: React.FC<CommentBlockProps> = ({
  title,
  content,
  rating,
  date = '14 декабря 2018',
}) => {
  const router = useRouter();

  return (
    <div className={styles.container} onClick={() => router.push('/films/comments')}>
      <h3 className={styles.author}>{title}</h3>
      <p className={styles.comment}>{content}</p>
      <div className={styles.infoBlock}>
        <p className={styles.date}>{date}</p>
        <LikesCounter likes={rating} />
      </div>
    </div>
  );
};

export default CommentBlock;
