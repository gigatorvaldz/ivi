import React, { useRef, useState } from 'react';
import css from './CommentsForm.module.scss';
import Input from '@/UI/Input';
import Button from '@/UI/Button';
import Avatar from '@/UI/Avatar';

const CommentsForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const wrapperRef = useRef(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <>
      <form className={css.container} onSubmit={onSubmit}>
        <Avatar />
        <div className={css.input}>
          <Input
            value={inputValue}
            onChange={handleInput}
            placeholder='Написать отзыв'
            invalid={!!inputValue && inputValue.length < 10}
          />
          {inputValue && inputValue.length < 10 && (
            <span className={css.errorCaption}>
              Минимум 10 символов, вы ввели {inputValue.length}
            </span>
          )}
        </div>
        <Button disabled={inputValue.length < 10} primaryText="Отправить" styling="accent" />
      </form>
    </>
  );
};

export default CommentsForm;
