import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import css from './Header.module.scss';
import PopupSearch from '../PopupSearch';
import { NavbarItems, ControlsItems } from '@/constants/header';
import { useRouter } from 'next/router';
import { useToggleDropDown } from '@/hooks/useToggleDropDown';
import HeaderDropDown from './HeaderDropDown';
import { AnimatePresence, motion } from 'framer-motion';
import HeaderNavbar from './HeaderNavbar';
import HeaderControls from './HeaderControls';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [visibleSearch, setVisibleSearch] = useState<boolean>(false);
  const dropContent = useRef<HTMLDivElement>(null);
  const [currentDropDown, setCurrentDropDown] = useState<React.ReactNode>(null);
  const router = useRouter();
  const [dropDownFocusOn, dropDownFocusOff] = useToggleDropDown(isOpen, setIsOpen, dropContent);
  const isDropDown = isOpen && currentDropDown;

  useEffect(() => {
    if (router.asPath.split('?').slice(-1).join('') === 'search') setVisibleSearch(true);
    else setVisibleSearch(false);
  }, [router]);

  const unmountDropDown = () => {
    dropDownFocusOff();
    setCurrentDropDown(undefined);
  };

  const mountDropDown = () => {
    dropDownFocusOn();
  };

  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <div
          ref={dropContent}
          className={classNames(
            {
              [css.dropped]: currentDropDown,
            },
            css.container
          )}
        >
          <div onMouseLeave={unmountDropDown} onMouseEnter={mountDropDown} className={css.content}>
            <div className={css.borderBottom}></div>

            <div className={css.inner}>
              <HeaderNavbar items={NavbarItems} setCurrentDropDown={setCurrentDropDown} />

              <div className={css.controls}>
                <HeaderControls items={ControlsItems} setCurrentDropDown={setCurrentDropDown} />
              </div>
            </div>

            <div>
              <AnimatePresence>
                {isDropDown && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <HeaderDropDown>{currentDropDown}</HeaderDropDown>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <PopupSearch visibleSearch={visibleSearch} />
    </header>
  );
};

export default Header;
