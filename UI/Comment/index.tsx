import React, { useState, useRef, useEffect } from 'react';
import css from './Comment.module.scss';
import Avatar from '../Avatar';
import { CommentItem } from '@/interfaces';
import LikesCounter from '../LikesCounter';
import Button from '../Button';
import Input from '../Input';

const Comment: React.FC<CommentItem> = ({ author, date, text, likes, children, level = 0 }) => {
  const [showFullComment, setShowFullComment] = useState(false);
  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState('');
  const wrapperRef = useRef(null);
  const paddingLeft = level * 36;
  const maxCommentLength = 180;

  const toggleComment = (): void => {
    setShowFullComment(!showFullComment);
  };

  const toggleReply = () => {
    setReplying(!replying);
  };

  const handleChange = (e: any) => {
    setReplyText(e.target.value);
  };

  const handleSubmit = () => {
    setReplyText('');
    setReplying(false);
    children?.push({
      author: '25336',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '26 февраля 2009',
      likes: -3,
      children: [],
    });
  };

  useEffect(() => {}, [children]);

  return (
    <div className={css.container} style={{ paddingLeft }}>
      <li>
        <Avatar author={author} />
        <div className={css.itemHeader}>
          {author && <cite>{author}</cite>}
          <time>{date}</time>
          <LikesCounter likes={likes} />
        </div>
        <div className={css.itemBody}>
          <p>
            {text.length > maxCommentLength && !showFullComment
              ? text.slice(0, maxCommentLength) + '...'
              : text}
          </p>
          <div className={css.options}>
            {text.length > maxCommentLength && (
              <>
                {!showFullComment ? (
                  <span onClick={toggleComment}>Развернуть</span>
                ) : (
                  <span onClick={toggleComment}>Свернуть</span>
                )}
              </>
            )}
            {replying ? (
              <span onClick={toggleReply}>Отмена</span>
            ) : (
              <span onClick={toggleReply}>Ответить</span>
            )}
          </div>
          {replying && (
            <div className={css.replyForm}>
              <Input
                forwardRef={wrapperRef}
                value={replyText}
                setInputValue={setReplyText}
                handleInput={handleChange}
                inputType="reply"
              />
              <Button primaryText="Ответить" onClickHandler={() => handleSubmit()} />
            </div>
          )}
        </div>
      </li>
      {children && children.map((child, index) => <Comment key={index} {...child} level={1} />)}
    </div>
  );
};

export default Comment;
