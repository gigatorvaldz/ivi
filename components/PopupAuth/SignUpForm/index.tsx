import React, { useState } from 'react';
import css from './SignUpForm.module.scss';
import { Control, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import AuthInput from '../AuthInput';
import AuthErrorMessage from '../AuthErrorMessage';
import AuthPrivacy from '../AuthPrivacy';
import Button from '@/UI/Button';
import { useAppDispatch } from '@/redux/hooks';
import { registerUser } from '@/redux/features/authReducer';
import { RegistrationRequest } from '@/interfaces/Auth';
import { useRouter } from 'next/router';

const SignUpForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [authError, setAuthError] = useState('');

  interface RegistrationForm extends RegistrationRequest {
    retryPassword: string;
  }

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm<RegistrationForm>({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<RegistrationRequest> = async (data: RegistrationRequest) => {
    data.age = Number(data.age);
    const dispatchData = await dispatch(registerUser(data));
    const status = dispatchData.meta.requestStatus;
    
    if (status === 'rejected') {
      setAuthError(dispatchData.payload.message);
    } else {
      router.back();
    }
  };

  let password = watch('password');

  return (
    <form action="#" className={css.loginform} onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        control={control as unknown as Control<FieldValues>}
        placeholder={'Введите имя'}
        name="first_name"
        rules={{
          required: 'Не указано имя.',
        }}
      />
      <AuthInput
        control={control as unknown as Control<FieldValues>}
        placeholder={'Введите фамилию'}
        name="second_name"
        rules={{
          required: 'Не указана фамилия.',
        }}
      />
      <AuthInput
        control={control as unknown as Control<FieldValues>}
        placeholder={'Введите телефон'}
        name="phone"
        type="tel"
        rules={{
          required: 'Не указан телефон.',
          minLength: {
            value: 11,
            message: 'Телефон должен быть в 11 символов.',
          },
          maxLength: {
            value: 11,
            message: 'Телефон должен быть в 11 символов.',
          },
        }}
      />
      <AuthInput
        control={control as unknown as Control<FieldValues>}
        placeholder={'Введите возраст'}
        name="age"
        type="number"
        rules={{
          required: 'Не указан возраст.',
        }}
      />
      <AuthInput
        control={control as unknown as Control<FieldValues>}
        placeholder={'Введите страну'}
        name="country"
        rules={{
          required: 'Не указана страна.',
        }}
      />
      <AuthInput
        control={control as unknown as Control<FieldValues>}
        placeholder={'Введите e-mail'}
        name="email"
        type="email"
        rules={{
          required: 'Не указан e-mail.',
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Неправильно указан e-mail.',
          },
        }}
      />
      <AuthInput
        control={control as unknown as Control<FieldValues>}
        name="password"
        type="password"
        rules={{
          required: 'Не указан пароль',
          minLength: {
            value: 6,
            message: 'Пароль должен состоять не меньше чем из 6 символов.',
          },
        }}
        placeholder={'Придумайте пароль'}
      />
      <AuthInput
        control={control as unknown as Control<FieldValues>}
        placeholder={'Повторите пароль'}
        name="retryPassword"
        type="password"
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
        <AuthErrorMessage isVisible={Boolean(errors.email)} message={`${errors.email?.message}`} />
        <AuthErrorMessage
          isVisible={Boolean(errors.password)}
          message={`${errors.password?.message}`}
        />
        <AuthErrorMessage
          isVisible={Boolean(errors.retryPassword)}
          message={`${errors.retryPassword?.message}`}
        />
        <AuthErrorMessage isVisible={Boolean(errors.phone)} message={`${errors.phone?.message}`} />
        <AuthErrorMessage isVisible={authError.length > 0} message={authError} />
      </aside>
    </form>
  );
};

export default SignUpForm;
