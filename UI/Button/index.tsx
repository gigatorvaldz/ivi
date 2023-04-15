import React, { ReactNode } from 'react';
import css from './Button.module.scss';
import classNames from 'classnames';

export type ButtonStylingT = 'primary' | 'accent';

interface IButton {
  onClickHandler?: () => void;
  primaryText?: string;
  preamble?: string;
  icon?: ReactNode;
  styling?: ButtonStylingT;
}

const Button: React.FC<IButton> = ({
  onClickHandler,
  primaryText,
  preamble,
  icon,
  styling = 'primary',
}) => {
  return (
    <button
      onClick={onClickHandler}
      className={classNames(
        {
          [css.textOnly]: !icon && !preamble && primaryText,
          [css.iconOnly]: !primaryText && !preamble && icon,
          [css.iconWithPrimary]: !preamble && icon && primaryText,
          [css.allProps]: preamble && icon && primaryText,
        },
        css.button,
        css[styling]
      )}
    >
      {icon && icon}
      <div>
        {primaryText && <span className={css.primaryText}>{primaryText}</span>}
        {preamble && <span className={css.preamble}>{preamble}</span>}
      </div>
    </button>
  );
};

export default Button;
