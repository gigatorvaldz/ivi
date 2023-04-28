import React, { useRef, useState } from 'react';
import Modal from '../Modal';
import css from './PopupAuth.module.scss';
import router from 'next/router';

import { IoCloseOutline } from 'react-icons/io5';
import Message from '@/UI/Message';
import Input from '@/UI/Input';
import Button from '@/UI/Button';
import Link from 'next/link';

const closeButtonHandle = () => {
  router.back();
};

const PopupAuth: React.FC = () => {
  const [loginInput, setLoginInpit] = useState<string>('');
  const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInpit(e.currentTarget.value);
  };
  const loginInputRef = useRef(null);

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
            <form className={css.loginform} action="">
              <div className={css.input}>
                <Input
                  value={loginInput}
                  setInputValue={setLoginInpit}
                  handleInput={handleLoginInput}
                  forwardRef={loginInputRef}
                  inputType="comment"
                />
              </div>
              <div className={css.submit}>
                <Button disabled primaryText="Продолжить" styling="accent" />
              </div>
              <div className={css.privacy}>
                <p>Нажимая «Продолжить», я соглашаюсь</p>
                <p>
                  с{' '}
                  <Link className={css.link} href={'https://www.ivi.ru/info/confidential'}>
                    Политикой конфиденциальности
                  </Link>
                </p>
                <p>
                  и{' '}
                  <Link className={css.link} href={'https://www.ivi.ru/info/confidential'}>
                    Пользовательским соглашением
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopupAuth;
