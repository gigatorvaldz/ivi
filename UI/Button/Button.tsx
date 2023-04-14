import React, { ReactNode } from 'react';
import css from './Button.module.scss';

interface IButton {
  onClickHandler(): void;
  primaryText?: string;
  preamble?: string;
  icon?: ReactNode;
}

const Button: React.FC<IButton> = ({ onClickHandler, primaryText, preamble, icon }) => {
  const personalButtonStyle: string =
    !icon && !preamble
      ? 'textOnly'
      : !primaryText && !preamble
      ? 'iconOnly'
      : !preamble
      ? 'iconWithPrimary'
      : 'allProps';

  return (
    <button onClick={onClickHandler} className={css.button + ' ' + css[personalButtonStyle]}>
      {icon && icon}
      <div>
        {primaryText && <span className={css.primaryText}>{primaryText}</span>}
        {preamble && <span className={css.preamble}>{preamble}</span>}
      </div>
    </button>
  );
};

export default Button;
