import React, { useEffect } from 'react';
import css from './Drawer.module.scss';
import classNames from 'classnames';

import Accordion from '@/UI/Accordion';
import Link from 'next/link';
import ActionCard from '@/UI/ActionCard';
import DrawerNavigationAccordion from './DrawerAccordionContent/DrawerNavigationAccordion';

import { IoDiamondOutline } from 'react-icons/io5';
import { BsAward, BsCameraReels, BsCollectionPlay, BsTv } from 'react-icons/bs';
import { WiTrain } from 'react-icons/wi';

import { Film, Series, Animation } from '@/constants/header';
import DrawerTVAccordion from './DrawerAccordionContent/DrawerTVAccordion';

const Drawer: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('drawer-opened');

    return () => {
      document.body.classList.remove('drawer-opened');
    };
  }, []);

  return (
    <div className={css.container}>
      <div className={css.inner}>
        <div className={classNames(css['navigation-group'], css.subscription)}>
          <ActionCard
            icon={<IoDiamondOutline size={22} />}
            label="Подключить подписку"
            active
            styling="mobile"
            href="/subscribe?from=top_menu&redirect_url=%2Fwatch%2Fdruzya"
          />

          <ActionCard
            icon={<BsAward size={22} />}
            label="Активация сертификата"
            href="/cert"
            styling="mobile"
          />
        </div>
        <div className={classNames(css['navigation-group'], css['navigation-list'])}>
          <Link href="/">
            <h3>Мой Иви</h3>
          </Link>

          <Link href="/new">
            <h3>Что нового</h3>
          </Link>

          <div className={css.accordion}>
            <Accordion label="Фильмы" icon={<BsCameraReels size={22} />}>
              <DrawerNavigationAccordion
                genres={[...Film.genres[0], ...Film.genres[1]]}
                years={Film.years}
                countries={Film.countries}
                widgets={Film.line}
                header={{ title: 'Все фильмы', href: '/movies' }}
              />
            </Accordion>
          </div>

          <div className={css.accordion}>
            <Accordion label="Сериалы" icon={<BsCollectionPlay size={22} />}>
              <DrawerNavigationAccordion
                genres={[...Series.genres[0], ...Series.genres[1]]}
                years={Series.years}
                countries={Series.countries}
                widgets={Series.line}
                header={{ title: 'Все сериалы', href: '/series' }}
              />
            </Accordion>
          </div>

          <div className={css.accordion}>
            <Accordion label="Мультфильмы" icon={<WiTrain size={30} />}>
              <DrawerNavigationAccordion
                genres={[...Animation.genres[0], ...Animation.genres[1]]}
                years={Animation.years}
                countries={Animation.countries}
                widgets={Animation.line}
                header={{ title: 'Все мультфильмы', href: '/animation' }}
              />
            </Accordion>
          </div>

          <div className={css.accordion}>
            <Accordion label="TV+" icon={<BsTv size={22} />}>
              <DrawerTVAccordion />
            </Accordion>
          </div>

          <Link href="/goodmovies">
            <h3>Что посмотреть</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
