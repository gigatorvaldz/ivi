import React from 'react';
import Modal from '../Modal';
import css from './PopupAuth.module.scss';
import { useRouter } from 'next/router';
import { IoCloseOutline } from 'react-icons/io5';
import Message from '@/UI/Message';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

interface PopupAuthI {
  type: 'registration' | 'login';
}

const PopupAuth: React.FC<PopupAuthI> = ({ type }) => {

  const router = useRouter();

  const closeButtonHandle = () => {
    router.back();
  };

  return (
    <Modal visible={true}>
      <div className={css.container}>
        <div className={css.header}>
          <h2 className={css.title}>{type === 'registration' ? "Регистрация" : "Вход"}</h2>
          <IoCloseOutline className={css.closePopup} onClick={closeButtonHandle} />
        </div>
        <div className={css.content}>
          <div className={css.inner}>
            <div className={css.message}>
              <Message
                title={type === 'registration' ? "Зарегистрируйтесь" : "Войдите"}
                extra="чтобы пользоваться сервисом на любом устройстве"
              />
            </div>
            {type === 'registration' ? <SignUpForm /> : <SignInForm />}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopupAuth;
