import React, { useState, useRef, useEffect } from 'react';
import { useToggleDropDown } from '@/hooks/useToggleDropDown';
import st from './DropdownMenu.module.scss';
import Portal from '@/components/Portal';

import { BsChevronCompactDown } from 'react-icons/bs';
import { useAppSelector } from '../../redux/hooks';
import {
  selectActiveCountries,
  selectActiveGenres,
  selectActiveYear,
} from '../../redux/features/filmList/filmList';

interface DropDownProps {
  title: string;
  type: 'hover' | 'click';
  children?: React.ReactNode;
  contentType?: 'genre' | 'country' | 'year';
}

const DropDownMenu: React.FC<DropDownProps> = ({
  title = 'Список',
  type,
  children,
  contentType,
}) => {
  const activeYear = useAppSelector(selectActiveYear);
  const activeCountries = useAppSelector(selectActiveCountries);
  const activeGenres = useAppSelector(selectActiveGenres);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropContent = useRef<HTMLDivElement>(null);

  const [dropDownFocusOn, dropDownFocusOff, dropDownToggle] = useToggleDropDown(
    isOpen,
    setIsOpen,
    dropContent
  );

  return (
    <div
      ref={dropContent}
      className={st.dropDown}
      onMouseEnter={
        type === 'hover'
          ? () => {
              dropDownFocusOn();
            }
          : undefined
      }
      onMouseLeave={
        type === 'hover'
          ? () => {
              dropDownFocusOff();
            }
          : undefined
      }
      onClick={
        type === 'click'
          ? () => {
              dropDownToggle();
            }
          : undefined
      }
    >
      <div className={st['dropDown__title'] + ' ' + (isOpen ? st.opened : '')}>
        <div className={st.titleContainer}>
          <p className={st.title}>{title}</p>
          <div className={st.subtitleContainer}>
            {contentType && (
              <p className={st.subtitle}>
                {(contentType === 'genre'
                  ? activeGenres
                  : contentType === 'year'
                  ? [activeYear]
                  : activeCountries
                ).join(', ')}
              </p>
            )}
          </div>
        </div>
        <BsChevronCompactDown className={st.arrowDown + ' ' + (isOpen ? st.opened : '')} />
      </div>
      {isOpen && (
        <div className={st['dropDown__contentWrapper']} onClick={(e) => e.stopPropagation()}>
          <div className={st['dropDown__content']}>{children}</div>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
