import React, { useState } from 'react';
import css from './SignInForm.module.scss';
import Button from '@/UI/Button';
import { Control, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import AuthInput from '../AuthInput';
import AuthErrorMessage from '../AuthErrorMessage';
import { useAppDispatch } from '@/redux/hooks';
import { loginUser } from '@/redux/features/authReducer';
import { AuthRequest } from '@/interfaces/Auth';
import { useRouter } from 'next/router';

const SignInForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [isAuthError, setIsAuthError] = useState(false);

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<AuthRequest>({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<AuthRequest> = async (data: AuthRequest) => {
    const dispathResponse = await dispatch(loginUser(data));
    if (dispathResponse.meta.requestStatus === 'fulfilled') {
      router.back();
    } else {
      reset();
      setIsAuthError(true)
    }
  };

  const onFormFocus = () => {
    setIsAuthError(false)
  }

  return (
    <form action="#" className={css.loginform} onSubmit={handleSubmit(onSubmit)} onFocus={onFormFocus}>
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
        control={control as unknown as Control<FieldValues>}
        placeholder="Введите e-mail"
      />
      <AuthInput
        name="password"
        rules={{ required: 'Не указан пароль' }}
        control={control as unknown as Control<FieldValues>}
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
        <AuthErrorMessage
          isVisible={isAuthError}
          message={`Неправильно введены данные.`}
        />
      </aside>
    </form>
  );
};

export default SignInForm;
