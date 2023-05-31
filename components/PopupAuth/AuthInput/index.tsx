import React, { useRef } from 'react';
import { Control, Controller } from 'react-hook-form';
import css from './AuthInput.module.scss';
import Input from '@/UI/Input';

interface AuthInputI {
  name: string;
  rules: object;
  control: Control;
  type?: string;
  placeholder: string;
}

const AuthInput: React.FC<AuthInputI> = ({ name, control, rules, placeholder, type = 'text' }) => {
  return (
    <div className={css.input}>
      <Controller
        control={control}
        name={name}
        defaultValue={''}
        rules={rules}
        render={({ field: { onChange, value }, formState: { errors } }) => (
          <Input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            invalid={Boolean(errors[name])}
          />
        )}
      />
    </div>
  );
};

export default AuthInput;
