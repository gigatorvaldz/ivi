import React from 'react';
import css from './FilmCardButtons.module.scss';
import Tooltip from '../Tooltip';
import { FaRegBookmark } from 'react-icons/fa';
import { IoMdColorWand } from 'react-icons/io';
import { AiOutlineStar, AiOutlineStop } from 'react-icons/ai';

const FilmCardButtons = () => {
  const items = [
    { text: 'Смотреть позже', component: <FaRegBookmark className={css.icon} /> },
    { text: 'Похожее', component: <IoMdColorWand className={css.icon} /> },
    { text: 'Уже смотрел, оценить', component: <AiOutlineStar className={css.icon} /> },
    { text: 'Не нравится такое', component: <AiOutlineStop className={css.icon} /> },
  ];

  return (
    <div className={css.interactive}>
      {items.map((e) => (
        <Tooltip text={e.text}>{e.component}</Tooltip>
      ))}
    </div>
  );
};

export default FilmCardButtons;
