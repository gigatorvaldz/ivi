import React, { useState, useRef } from 'react';
import css from './PopupSearch.module.scss';
import { useRouter } from 'next/router';
import Modal from '../Modal';
import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';
import { GiFilmProjector } from 'react-icons/gi';
import Input from '@/UI/Input';

const PopupSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const wrapperRef = useRef(null);
  const router = useRouter();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const links = [
    { title: 'Премьеры фильмов', link: '/123' },
    { title: 'Новинки подписки', link: '/123' },
    { title: 'Сериалы Amediateka', link: '/123' },
    { title: 'Высокий рейтинг', link: '/123' },
  ];

  const mockData = [
    {
      title: 'фильмdsg',
      year: '2022',
      href: '/123',
      component: <GiFilmProjector className={css.resultsIcon} />,
    },
    {
      title: 'киноre',
      year: '2021',
      href: '/123',
      component: <GiFilmProjector className={css.resultsIcon} />,
    },
    {
      title: 'сериалzx',
      year: '2020',
      href: '/123',
      component: <GiFilmProjector className={css.resultsIcon} />,
    },
    {
      title: 'фильмv',
      year: '2022',
      href: '/123',
      component: <GiFilmProjector className={css.resultsIcon} />,
    },
  ];

  const searchResult = mockData.filter((e) => e.title.includes(inputValue));

  return (
    <Modal>
      <IoCloseOutline className={css.closePopup} onClick={() => router.back()} />
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.searchInput}>
            <h1>Поиск</h1>
            <Input
              forwardRef={wrapperRef}
              value={inputValue}
              setInputValue={setInputValue}
              handleInput={handleInput}
              inputType="search"
            />
          </div>
          <div
            className={
              inputValue.length && searchResult.length ? css.resultsBlock : css.searchBlock
            }
          >
            {inputValue.length && searchResult.length
              ? searchResult.map((e) => (
                  <Link href={e.href} key={e.title}>
                    <div className={css.resultsItem}>
                      {e.component}
                      <div className={css.aboutResult}>
                        <span>{e.title}</span>
                        <span>{e.year}</span>
                      </div>
                    </div>
                  </Link>
                ))
              : links.map((e) => (
                  <div key={e.title}>
                    <Link href={e.link}>
                      <span className={css.link}>{e.title}</span>
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopupSearch;
