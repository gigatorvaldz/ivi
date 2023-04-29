import React from 'react';
import css from './ErrorMessage.module.scss';
import { BiError } from 'react-icons/bi';

interface ErrorMessageI {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageI> = ({ message = "Error" }) => {
  return (
    <div className={css.container}>
      <BiError />
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
