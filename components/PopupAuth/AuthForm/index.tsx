import React from 'react';
import css from './AuthForm.module.scss';
import { useForm } from 'react-hook-form';
import AuthInput from '../AuthInput';
import AuthErrorMessage from '../AuthErrorMessage';
import AuthPrivacy from '../AuthPrivacy';
import Button from '@/UI/Button';

const AuthForm: React.FC = () => {

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
    <form action="#" className={css.loginform} onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        control={control}
        name="login"
        rules={{
          required: 'Не указан логин.',
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Неправильно указан e-mail.',
          },
        }}
      />
      <AuthInput
        control={control}
        name="password"
        rules={{
          required: 'Не указан пароль',
        }}
      />
      <AuthInput
        control={control}
        name="retryPassword"
        rules={{
          required: 'Не указано подтверждение пароля.',
          validate: (value: string) => {
            if (value === password) {
              return true;
            } else {
              return 'Пароли не совпадают.';
            }
          },
        }}
      />
      <div className={css.submit}>
        <Button type="submit" disabled={!isValid} primaryText="Продолжить" styling="accent" />
      </div>
      <AuthPrivacy />
      <aside className={css.errors}>
        <AuthErrorMessage isVisible={Boolean(errors.login)} message={`${errors.login?.message}`} />
        <AuthErrorMessage
          isVisible={Boolean(errors.password)}
          message={`${errors.password?.message}`}
        />
        <AuthErrorMessage
          isVisible={Boolean(errors.retryPassword)}
          message={`${errors.retryPassword?.message}`}
        />
      </aside>
    </form>
  );
};

export default AuthForm;
