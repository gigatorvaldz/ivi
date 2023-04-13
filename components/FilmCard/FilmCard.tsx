import React from 'react';
import css from './FilmCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegBookmark } from 'react-icons/fa';
import { IoMdColorWand } from 'react-icons/io';
import { AiOutlineStar, AiOutlineStop } from 'react-icons/ai';
import poster from '/assets/filmCard/poster.png';
import ageBadge from '/assets/filmCard/age16.svg';

interface IFilmCard {
  link: string;
  logoSrc: string;
  ageBadge: string;
  rating: number;
  info: string;
  duration: string;
  title: string;
  extra: string;
}

const FilmCard: React.FC = () => {
  return (
    <Link href="/666">
      <div className={css.container}>
        <div className={css.imageSection}>
          <Image className={css.logo} src={poster} alt="poster" fill />
          <Image className={css.ageBadge} src={ageBadge} alt="ageBadge" width={24} height={16} />
          <div className={css.properties}>
            <div className={css.interactive}>
              <FaRegBookmark className={css.icon} />
              <IoMdColorWand className={css.icon} />
              <AiOutlineStar className={css.icon} />
              <AiOutlineStop className={css.icon} />
            </div>
            <div className={css.inner}>
              <div className={css.rating}>
                <span className={css.valueInteger}>9,</span>
                <span className={css.valueFraction}>1</span>
              </div>
              <span className={css.chartTitle}>сюжет</span>
              <div className={css.barChart}>
                <div className={css.progress} style={{ width: '66%' }}></div>
              </div>
              <div className={css.info}>
                <div>2018, CША, Комедии</div>
                <div>124 минуты</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={css.title}>
            <span>Зеленая книга</span>
          </div>
          <div className={css.extra}>
            <span>Подписка</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FilmCard;