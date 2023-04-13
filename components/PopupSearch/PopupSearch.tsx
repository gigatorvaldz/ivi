import React, { useState, useRef } from 'react';
import css from './PopupSearch.module.scss';
import Link from 'next/link';
import { useClickOutside } from '@/hooks/useClickOutside';
import { BiSearch } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';
import { GiFilmProjector } from 'react-icons/gi';

interface IPopup {
  visible: boolean;
  setVisible(state: boolean): void;
}

const PopupSearch: React.FC<IPopup> = ({ visible, setVisible }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [editingInput, setEditingInput] = useState<boolean>(false);
  const wrapperRef = useRef(null);

  useClickOutside(wrapperRef, () => {
    if (!document.getElementsByTagName('input')[0].value) return setEditingInput(false);
  });

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
      title: 'фильм',
      year: '2022',
      href: '/123',
      component: <GiFilmProjector className={css.resultsIcon} />,
    },
    {
      title: 'кино',
      year: '2021',
      href: '/123',
      component: <GiFilmProjector className={css.resultsIcon} />,
    },
    {
      title: 'сериал',
      year: '2020',
      href: '/123',
      component: <GiFilmProjector className={css.resultsIcon} />,
    },
    {
      title: 'фильм',
      year: '2022',
      href: '/123',
      component: <GiFilmProjector className={css.resultsIcon} />,
    },
  ];

  const searchResult = mockData.filter((e) => e.title.includes(inputValue));

  return (
    <>
      {visible && (
        <div className={css.back}>
          <IoCloseOutline className={css.closePopup} onClick={() => setVisible(false)} />
          <div className={css.container}>
            <div className={css.content}>
              <div className={css.searchInput}>
                <h1>Поиск</h1>
                <div className={css.inputBody} ref={wrapperRef} onClick={() => setEditingInput(true)}>
                  <span
                    className={
                      editingInput
                        ? `${css.placeholder} ${css.editingPlaceholder}`
                        : css.placeholder
                    }
                  >
                    Фильмы, персоны, жанры
                  </span>
                  <input value={inputValue} onChange={handleInput} type="text" />
                  {!inputValue ? (
                    <BiSearch className={css.inputIcon} />
                  ) : (
                    <IoCloseOutline
                      className={`${css.inputIcon} ${css.closeIcon}`}
                      onClick={() => setInputValue('')}
                    />
                  )}
                </div>
              </div>
              <div
                className={
                  inputValue.length && searchResult.length ? css.resultsBlock : css.searchBlock
                }
              >
                {inputValue.length && searchResult.length
                  ? searchResult.map((e) => (
                      <Link href={e.href}>
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
                      <div>
                        <Link href={e.link}>
                          <span className={css.link}>{e.title}</span>
                        </Link>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupSearch;