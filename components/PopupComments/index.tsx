import React from 'react';
import css from './PopupComments.module.scss';
import Modal from '../Modal';
import CommentsForm from '../CommentsForm';
import CommentsList from '@/UI/CommentsList/CommentsList';
import BackArrow from '@/UI/BackArrow';
import TabsList from '@/UI/TabsList';
import AsidePoster from '@/UI/AsidePoster';

interface IPopupComments {
  title: string;
  genre: string;
  year: number;
}

const PopupComments: React.FC<IPopupComments> = ({ title, genre, year }) => {
  return (
    <Modal>
      <div className={css.container}>
        <BackArrow redirectTo="фильм" />
        <div className={css.inner}>
          <h1>
            {title} ({genre} {year})
          </h1>
          <TabsList />
          <CommentsForm />
          <CommentsList />
        </div>
        <AsidePoster logoSrc='/assets/filmCard/poster.png' rating={7.2} info='2018 Фильм, Драма' duration='120 минут'  />
      </div>
    </Modal>
  );
};

export default PopupComments;
