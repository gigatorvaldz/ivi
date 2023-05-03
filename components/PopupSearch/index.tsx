import React, { useState, useRef, useEffect } from 'react';
import css from './PopupSearch.module.scss';
import { useRouter } from 'next/router';
import Modal from '../Modal';
import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';
import { GiFilmProjector } from 'react-icons/gi';
import SearchInput from '@/UI/SearchInput';

interface IPopupSearch {
  visibleSearch: boolean;
}

const PopupSearch: React.FC<IPopupSearch> = ({ visibleSearch }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    return(() => {setInputValue('')})
  }, [visibleSearch])

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

  const searchResult = mockData.filter((e) =>
    e.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  const getTitleParts = (str: string): string[] => {
    return str.split(new RegExp(`(${inputValue})`, 'gi')).slice(1);
  };

  return (
    <Modal visible={visibleSearch}>
      <div className={css.container}>
        <IoCloseOutline className={css.closePopup} onClick={() => router.back()} />
        <div className={css.content}>
          <div className={css.searchInput}>
            <h1>Поиск</h1>
            <SearchInput
              setValue={setInputValue}
              value={inputValue}
              onChange={handleInput}
              placeholder="Фильмы, персоны, жанры"
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
                        <span>
                          <span className={css.highlitedText}>{getTitleParts(e.title)[0]}</span>
                          {getTitleParts(e.title)[1]}
                        </span>
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
