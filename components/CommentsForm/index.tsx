import React, { useRef, useState } from 'react';
import css from './CommentsForm.module.scss';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import Avatar from '@/UI/Avatar';

const CommentsForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const wrapperRef = useRef(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <form className={css.container}>
      <Avatar />
      <Input
        forwardRef={wrapperRef}
        value={inputValue}
        setInputValue={setInputValue}
        handleInput={handleInput}
        inputType="comment"
      />
      <Button disabled={inputValue.length < 10} primaryText="Отправить" styling="accent" />
    </form>
  );
};

export default CommentsForm;
