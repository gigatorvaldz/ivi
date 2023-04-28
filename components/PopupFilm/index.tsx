import React, { useEffect, useState } from 'react';
import css from './PopupFilm.module.scss';
import Modal from '../Modal';
import CommentsForm from '../CommentsForm';
import CommentsList from '@/UI/CommentsList/CommentsList';
import BackArrow from '@/UI/BackArrow';
import TabsList from '@/UI/TabsList';
import AsidePoster from '@/UI/AsidePoster';
import { useRouter } from 'next/router';
import ContentCreators from '../ContentCreators';
import { CreatorsBlock } from '@/interfaces';
import { Review } from '@/interfaces/Review';

interface IPopupFilm {
  title: string;
  genre: string;
  year: number;
  visiblePopup: boolean;
  creators: CreatorsBlock[];
  comments: Review[];
}

const PopupFilm: React.FC<IPopupFilm> = ({
  title,
  genre,
  year,
  visiblePopup,
  creators,
  comments
}) => {
  const [contentType, setContentType] = useState<string>('');
  const router = useRouter();
  
  const tabsListItems = [
    { title: 'Создатели', href: 'person' },
    { title: 'Комментарии', count: comments.length, href: 'comments' },
  ];
  
  useEffect(() => {
    const query = router.asPath.split('?').slice(-1).join('');
    if (query === 'comments') setContentType('comments');
    if (query === 'person') setContentType('person');
    return () => {
      setContentType('');
    };
  }, [router]);

  return (
    <Modal visible={visiblePopup}>
      <div className={css.container}>
        <BackArrow redirectTo="фильм" />
        <div className={css.inner}>
          <h1>
            {title} ({genre} {year})
          </h1>
          <TabsList items={tabsListItems} />
          {contentType === 'comments' ? (
            <>
              <CommentsForm />
              <CommentsList items={comments} />
            </>
          ) : (
            <ContentCreators creators={creators} />
          )}
        </div>
        <AsidePoster
          logoSrc="/assets/filmCard/poster.png"
          rating={7.2}
          info="2018 Фильм, Драма"
          duration="120 минут"
        />
      </div>
    </Modal>
  );
};

export default PopupFilm;