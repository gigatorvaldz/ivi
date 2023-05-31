import React, { useState } from 'react';
import css from './ProfileDropDownContent.module.scss';

import ActionCard from '@/UI/ActionCard';
import Button from '@/UI/Button';
import List from '@/UI/List';

import { ListItem } from '@/interfaces';

import {
  BsAward,
  BsBookmark,
  BsClockHistory,
  BsCollectionPlay,
  BsCreditCard,
} from 'react-icons/bs';
import { IoDiamondOutline } from 'react-icons/io5';
import { TbDeviceTvOld } from 'react-icons/tb';
import PopupAuth from '@/components/PopupAuth';
import Portal from '@/components/Portal';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logoutUser } from '@/redux/features/authReducer';

const controlsItems: Array<ListItem> = [
  { title: 'Настройки', href: '/profile/settings' },
  {
    title: 'Помощь',
    href: 'https://ask.ivi.ru/?_gl=1*bkmipy*_ga*MTk3NzcxMjcwMS4xNjgxMjIzNzAw*_ga_GETQ4387MJ*MTY4MjAwMzczNC42LjEuMTY4MjAwNjE4Mi42MC4wLjA.',
  },
];

const ProfileDropDownContent: React.FC = () => {
  const [isAuthing, setIsAuthing] = useState<boolean>(false);
  const [authType, setAuthType] = useState<'registration' | 'login'>('registration');

  const dispatch = useAppDispatch();

  const onAuthButtonClickHandle = (type: 'registration' | 'login') => {
    return () => {
      setAuthType(type);
      setIsAuthing(true);
    };
  };

  const onLogoutClickHandle = () => {
    dispatch(logoutUser());
  };

  const isAuth = useAppSelector((state) => state.authReducer.isAuth);

  return (
    <div className={css.container}>
      <div className={css.actions}>
        <ActionCard
          icon={<BsCollectionPlay size={22} />}
          label="Покупки"
          href="/profile/purchases"
        />
        <ActionCard
          icon={<BsBookmark size={22} />}
          label="Смотреть позже"
          href="/profile/purchases"
        />
        <ActionCard
          icon={<BsClockHistory size={22} />}
          label="История просмотров"
          href="/profile/purchases"
        />
        <ActionCard
          icon={<IoDiamondOutline size={22} />}
          label="Подписки"
          description="Подключить"
          active
          href="/profile/purchases"
        />
        <ActionCard icon={<BsAward size={22} />} label="Покупки" href="/profile/purchases" />
        <ActionCard icon={<TbDeviceTvOld size={22} />} label="Покупки" href="/profile/purchases" />
        <ActionCard icon={<BsCreditCard size={22} />} label="Покупки" href="/profile/purchases" />
      </div>
      <div className={css.controls}>
        <div className={css.auth}>
          {isAuth ? (
            <>
              <Button onClickHandler={onLogoutClickHandle} primaryText="Выйти" styling="accent" />
            </>
          ) : (
            <>
              <Button
                onClickHandler={onAuthButtonClickHandle('login')}
                primaryText="Войти"
                styling="accent"
              />
              <Button
                onClickHandler={onAuthButtonClickHandle('registration')}
                primaryText="Зарегистрироваться"
                styling="accent"
              />
            </>
          )}
          {isAuthing && (
            <Portal>
              <PopupAuth setIsVisible={setIsAuthing} type={authType} />
            </Portal>
          )}
        </div>
        <List items={controlsItems} />
      </div>
    </div>
  );
};

export default ProfileDropDownContent;
