import React from 'react';
import css from './PopupComments.module.scss';
import Modal from '../Modal';
import CommentsForm from '../CommentsForm';
import CommentsList from '@/UI/CommentsList/CommentsList';
import BackArrow from '@/UI/BackArrow';

interface IPopupComments {
  visible: boolean;
  setVisible(state: boolean): void;
  title: string;
  genre: string;
  year: number;
}

const PopupComments: React.FC<IPopupComments> = ({ visible, setVisible, title, genre, year }) => {
  return (
    <Modal visible setVisible={setVisible}>
      <div className={css.container}>
        <BackArrow redirectTo="фильм" />
        <div className={css.inner}>
          <h1>
            {title} ({genre} {year})
          </h1>
          <CommentsForm />
          <CommentsList />
        </div>
        <div className={css.title}></div>
      </div>
    </Modal>
  );
};

export default PopupComments;
