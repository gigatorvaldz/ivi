import React from 'react';
import css from './SignInForm.module.scss';
import Button from '@/UI/Button';
import { useForm } from 'react-hook-form';
import AuthInput from '../AuthInput';
import AuthErrorMessage from '../AuthErrorMessage';

const SignInForm: React.FC = () => {
  const onSubmit = (data: object) => {
    console.log(JSON.stringify(data));
    reset();
  };

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
  });

  return (
    <form action="#" className={css.loginform} onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        name="email"
        rules={{
          required: 'Не указан e-mail.',
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Неправильно указан e-mail.',
          },
        }}
        control={control}
        placeholder="Введите e-mail"
      />
      <AuthInput
        name="password"
        rules={{ required: 'Не указан пароль' }}
        control={control}
        placeholder="Введите пароль"
      />
      <div className={css.submit}>
        <Button type="submit" disabled={!isValid} primaryText="Войти" styling="accent" />
      </div>
      <aside className={css.errors}>
        <AuthErrorMessage isVisible={Boolean(errors.email)} message={`${errors.email?.message}`} />
        <AuthErrorMessage
          isVisible={Boolean(errors.password)}
          message={`${errors.password?.message}`}
        />
      </aside>
    </form>
  );
};

export default SignInForm;
