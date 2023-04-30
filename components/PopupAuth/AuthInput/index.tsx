import React, { useRef } from 'react';
import { Control, Controller } from 'react-hook-form';
import css from './AuthInput.module.scss';
import Input from '@/UI/Input';

interface AuthInputI {
  name: string;
  rules: object;
  control: Control;
}

const AuthInput: React.FC<AuthInputI> = ({ name, control, rules }) => {
  return (
    <div className={css.input}>
      <Controller
        control={control}
        name={name}
        defaultValue={''}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChange={onChange}
            placeholder="email"
            invalid={!!value && value.length < 10}
          />
        )}
      />
    </div>
  );
};

export default AuthInput;
