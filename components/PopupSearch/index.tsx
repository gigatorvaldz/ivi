import React, { useState, useRef, useEffect } from 'react';
import css from './PopupSearch.module.scss';
import Modal from '../Modal';
import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';
import { GiFilmProjector } from 'react-icons/gi';
import SearchInput from '@/UI/SearchInput';
import { useURLQuery } from '@/hooks/useURLQuery';
import { useTranslation } from 'next-i18next';

const PopupSearch: React.FC = () => {
  const { t } = useTranslation('popups');
  const [inputValue, setInputValue] = useState<string>('');
  const { currentQuery, toggleQuery } = useURLQuery();

  useEffect(() => {
    return () => {
      setInputValue('');
    };
  }, [currentQuery]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const searchVariants = [
    'premieres',
    'subscriptionNews',
    'amediateka',
    'highRating',
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
    e.title.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const getTitleParts = (str: string): string[] => {
    return str.split(new RegExp(`(${inputValue})`, 'gi')).slice(1);
  };

  return (
    <Modal visible={currentQuery === 'search'}>
      <div className={css.container}>
        <IoCloseOutline className={css.closePopup} onClick={() => toggleQuery('?search')} />
        <div className={css.content}>
          <div className={css.searchInput}>
            <h1>{t('search')}</h1>
            <SearchInput
              setValue={setInputValue}
              value={inputValue}
              onChange={handleInput}
              placeholder={t('searchInput')}
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
              : searchVariants.map((e, index) => (
                  <div key={index}>
                    <span className={css.searchVariant} onClick={() => console.log('')}>
                      {t(e)}
                    </span>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopupSearch;
