import React, { useState } from 'react';
import css from './Input.module.scss';
import { BiSearch } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';
import { useClickOutside } from '@/hooks/useClickOutside';

export type TInputType = 'search' | 'comment';

interface IInput {
  value: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType: TInputType;
  forwardRef: React.MutableRefObject<null>;
}

const Input: React.FC<IInput> = ({ value, setInputValue, handleInput, inputType, forwardRef }) => {
  const [editingInput, setEditingInput] = useState<boolean>(false);

  useClickOutside(forwardRef, () => {
    if (!document.getElementsByTagName('input')[0].value) return setEditingInput(false);
  });

  const isSearch: boolean = inputType === 'search';

  return (
    <div
      className={isSearch ? css.inputBody : `${css.inputBody} ${css.inputBodyComment}`}
      ref={forwardRef}
      onClick={() => setEditingInput(true)}
    >
      <span
        className={editingInput ? `${css.placeholder} ${css.editingPlaceholder}` : css.placeholder}
      >
        {isSearch ? 'Фильмы, персоны, жанры' : 'Написать отзыв'}
      </span>
      <input value={value} onChange={handleInput} type="text" />
      {isSearch && (
        <>
          {!value ? (
            <BiSearch className={css.inputIcon} />
          ) : (
            <IoCloseOutline
              className={`${css.inputIcon} ${css.closeIcon}`}
              onClick={() => setInputValue('')}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Input;
