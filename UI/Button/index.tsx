import React, { ReactNode, RefObject } from 'react';
import css from './Button.module.scss';
import classNames from 'classnames';

export type ButtonStylingT = 'primary' | 'accent' | 'lighter';

interface IButton {
  onClickHandler?: () => void;
  primaryText?: string | null;
  preamble?: string | null;
  icon?: ReactNode;
  styling?: ButtonStylingT;
  disabled?: boolean;
  isHundredPercentsWidth?: boolean;
  innerRef?: RefObject<HTMLButtonElement>;
}

const Button: React.FC<IButton & React.HTMLProps<HTMLButtonElement>> = ({
  onClickHandler,
  primaryText,
  preamble,
  icon,
  styling = 'primary',
  disabled = false,
  isHundredPercentsWidth = false,
  innerRef
}) => {
  return (
    <button
      ref={innerRef}
      disabled={disabled}
      onClick={onClickHandler}
      className={classNames(
        {
          [css.wideButton]: isHundredPercentsWidth,
          [css.textOnlyAccent]: !icon && !preamble && primaryText && styling==='accent',
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
