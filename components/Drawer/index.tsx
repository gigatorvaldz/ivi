import React, { useEffect } from 'react';
import css from './Drawer.module.scss';
import ActionCard from '@/UI/ActionCard';
import { IoDiamondOutline } from 'react-icons/io5';
import { BsAward } from 'react-icons/bs';
import Accordion from '@/UI/Accordion';
import List from '@/UI/List';
import Link from 'next/link';
import { Film } from '@/constants/header';

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
        <div className={css.subscription}>
          <ActionCard
            icon={<IoDiamondOutline size={22} />}
            label="Подписки"
            active
            styling="mobile"
            href="/profile/purchases"
          />
          <ActionCard
            icon={<BsAward size={22} />}
            label="Покупки"
            href="/profile/purchases"
            styling="mobile"
          />
        </div>
        <div className={css.accordion}>
          <Accordion label="Accrodion" icon={<IoDiamondOutline />}>
            <div className={css.accordionContainer}>
              <div className={css.title}>
                <Link href="/">Все фильмы</Link>
              </div>
              <h3>Жанры</h3>
              <div className={css.list}>
                <List items={[...Film.genres[0], ...Film.genres[1]]} />
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
