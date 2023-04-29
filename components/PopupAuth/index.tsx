import React, { useRef } from 'react';
import Modal from '../Modal';
import css from './PopupAuth.module.scss';
import router from 'next/router';
import { IoCloseOutline } from 'react-icons/io5';
import Message from '@/UI/Message';
import Input from '@/UI/Input';
import Button from '@/UI/Button';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import ErrorMessage from '@/UI/ErrorMessage';
import { AnimatePresence, motion } from 'framer-motion';

const closeButtonHandle = () => {
  router.back();
};

const PopupAuth: React.FC = () => {
  const loginInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const retryPasswordInputRef = useRef(null);

  const onSubmit = (data: object) => {
    console.log(JSON.stringify(data));
    reset();
  };

  const {
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
  });

  let password = watch('password');

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
            <form action="#" className={css.loginform} onSubmit={handleSubmit(onSubmit)}>
              <div className={css.input}>
                <Controller
                  control={control}
                  name="login"
                  defaultValue={''}
                  rules={{
                    required: 'Не указан логин.',
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Неправильно указан e-mail.',
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      name="login"
                      value={value}
                      handleInput={onChange}
                      forwardRef={loginInputRef}
                      inputType="email"
                    />
                  )}
                />
              </div>
              <div className={css.input}>
                <Controller
                  control={control}
                  name="password"
                  defaultValue={''}
                  rules={{
                    required: 'Не указан пароль',
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      name="password"
                      value={value}
                      handleInput={onChange}
                      forwardRef={passwordInputRef}
                      inputType="password"
                    />
                  )}
                />
              </div>
              <div className={css.input}>
                <Controller
                  control={control}
                  name="retryPassword"
                  defaultValue={''}
                  rules={{
                    required: 'Не указано подтверждение пароля.',
                    validate: (value) => {
                      if (value === password) {
                        return true;
                      } else {
                        return 'Пароли не совпадают';
                      }
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      name="retryPassword"
                      value={value}
                      handleInput={onChange}
                      forwardRef={retryPasswordInputRef}
                      inputType="retryPassword"
                    />
                  )}
                />
              </div>
              <div className={css.submit}>
                <Button
                  type="submit"
                  disabled={!isValid}
                  primaryText="Продолжить"
                  styling="accent"
                />
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
              <aside className={css.errors}>
                <AnimatePresence>
                  {errors.login && (
                    <motion.div
                      initial={{ transform: "translateY(100px)", opacity: 0 }}
                      animate={{ transform: "translateY(0px)", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ErrorMessage message={`${errors.login?.message}`} />
                    </motion.div>
                  )}
                  {errors.password && <ErrorMessage message={`${errors.password?.message}`} />}
                  {errors.retryPassword && (
                    <ErrorMessage message={`${errors.retryPassword?.message}`} />
                  )}
                </AnimatePresence>
              </aside>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopupAuth;
