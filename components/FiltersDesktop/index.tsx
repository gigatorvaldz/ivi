import React from 'react';
import DropDownMenu from '@/UI/DropDownMenu/index';
import TagButton from '@/UI/TagButton';
import ResetFiltersButton from '../ResetFiltersButton';

import styles from './FiltersDesktop.module.scss';
import { BsPlus } from 'react-icons/bs';
import filmsFilterBlockTags from '@/constants/filmsFilterBlockTags';
import filmsFilterBlockDDTitles from '@/constants/filmsFilterBlockDDTitles';

const FiltersDesktop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filtersByBlock}>
        {filmsFilterBlockDDTitles.map((dropDownTitle) => (
          <DropDownMenu title={dropDownTitle} type="click" key={dropDownTitle}>
            123
          </DropDownMenu>
        ))}
      </div>
      <div className={styles.filterTags}>
        {filmsFilterBlockTags.map((tag) => (
          <TagButton tag={tag} Icon={BsPlus} outlined key={tag} />
        ))}
      </div>
      <ResetFiltersButton />
    </div>
  );
};

export default FiltersDesktop;
