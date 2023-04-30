import React from 'react';
import Modal from '../Modal';
import css from './PopupAuth.module.scss';
import router from 'next/router';
import { IoCloseOutline } from 'react-icons/io5';
import Message from '@/UI/Message';
import AuthForm from './AuthForm';

const closeButtonHandle = () => {
  router.back();
};

const PopupAuth: React.FC = () => {
  return (
    <Modal visible={true}>
      <div className={css.container}>
        <div className={css.header}>
          <h2 className={css.title}>Вход или регистрация</h2>
          <IoCloseOutline className={css.closePopup} onClick={closeButtonHandle} />
        </div>
        <div className={css.content}>
          <div className={css.inner}>
            <div className={css.message}>
              <Message
                title="Войдите или зарегистрируйтесь"
                extra="чтобы пользоваться сервисом на любом устройстве"
              />
            </div>
            <AuthForm />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopupAuth;
