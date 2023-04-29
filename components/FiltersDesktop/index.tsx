import React, { useEffect } from 'react';
import DropDown from '@/UI/DropDown/index';
import DropDownMenu from '@/UI/DropDownMenu/index';
import TagButton from '@/UI/TagButton';
import ResetFiltersButton from '../ResetFiltersButton';
import GenreTag from '@/UI/GenreTag';
import ImageCarousel from '@/UI/ImageCarousel';
import MarkableList from '@/UI/MarkableList/MarkableList';
import FilterInput from '@/UI/FilterInput';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  clearFilters,
  selectMinRating,
  selectMinRatingsCount,
  setMinRating,
  setMinRatingsCount,
} from '@/redux/features/filmList/filmList';
import Slider from '@/UI/Slider';

import styles from './FiltersDesktop.module.scss';
import { BsPlus } from 'react-icons/bs';
import { MdDone } from 'react-icons/md';
import { BiCircle } from 'react-icons/bi';
import filmsFilterBlockTags from '@/constants/filmsFilterBlockTags';
import { genresIcons, Genres } from '@/constants/genres';
import { Countries } from '@/constants/countries';
import { modifyGenreLinks } from '@/helpers/modifyGenreLinks';
import { ProductionYears } from '@/constants/productionYears';
import { useMediaQueriesMinWidth } from '../../hooks/useMediaQueries';

const FiltersDesktop = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(clearFilters());
  }, []);

  const genres = modifyGenreLinks(Genres).sort((genre1, genre2) =>
    genre1.title.localeCompare(genre2.title)
  );
  const years = Object.values(ProductionYears).map((year) => ({ title: year }));
  const countries = Object.values(Countries)
    .sort((country1, country2) => country1.localeCompare(country2))
    .map((country) => ({ title: country }));

  const minRating = useAppSelector(selectMinRating);
  const minRatingsCount = useAppSelector(selectMinRatingsCount);

  const { isMobile, is500, isTable, isLaptop, isDesktop } = useMediaQueriesMinWidth();

  return (
    <div className={styles.container}>
      <div className={styles.filtersByBlock}>
        <DropDownMenu title={'Жанры'} type="click" contentType="genre">
          <ImageCarousel
            buttonsBackground
            itemsWidthAreEqual
            imagesListedPerSwap={2}
            slides={genresIcons.map(({ genre, icon }) => (
              <GenreTag tag={genre} Icon={icon} outlined size="small" key={genre} />
            ))}
          />
          <div className={styles.genreListsBlock}>
            <MarkableList
              items={genres}
              Mark={MdDone}
              queryType={'genre'}
              columns={isLaptop ? 3 : 1}
            />
          </div>
        </DropDownMenu>
        <DropDownMenu title={'Страны'} type="click" contentType="country">
          <ImageCarousel
            buttonsBackground
            slides={Object.values(Countries).map((country) => (
              <TagButton tag={country} outlined key={country} />
            ))}
          />
          <div className={styles.genreListsBlock}>
            <MarkableList
              items={countries}
              Mark={MdDone}
              queryType={'country'}
              columns={isLaptop ? 3 : 1}
            />
          </div>
        </DropDownMenu>
        <DropDownMenu title={'Годы'} type="click" contentType="year">
          <MarkableList items={years} Mark={BiCircle} queryType={'year'} />
        </DropDownMenu>
        <DropDownMenu title={'Рейтинг Кинопоиска'} type="click">
          <Slider
            min={0}
            max={10}
            step={0.1}
            value={minRating}
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(setMinRating(+e.target.value));
            }}
            description="Рейтинг кинопоиска"
          />
          <Slider
            min={0}
            max={100000}
            step={1000}
            value={minRatingsCount}
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(setMinRatingsCount(+e.target.value));
            }}
            description="Количество оценок"
          />
        </DropDownMenu>
      </div>
      {/* <div className={styles.filterTags}>
        {filmsFilterBlockTags.map((tag) => (
          <TagButton tag={tag} Icon={BsPlus} outlined key={tag} />
        ))}
      </div> */}
      <DropDown
        options={['По рейтингу', 'По количеству оценок', 'По дате выхода', 'По Алфавиту']}
        type="hover"
      />
      <FilterInput query={'producer'} />
      <FilterInput query={'actor'} />
      <ResetFiltersButton />
    </div>
  );
};

export default FiltersDesktop;
