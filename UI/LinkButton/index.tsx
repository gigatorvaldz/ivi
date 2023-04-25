import React, { ReactNode } from 'react';
import css from './LinkButton.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

interface ILinkButton {
  href: string;
  primaryText?: string;
  preamble?: string;
  icon?: ReactNode;
  styling?: 'primary' | 'accent' | 'lighter';
  disabled?: boolean;
}

const LinkButton: React.FC<ILinkButton> = ({
  href,
  primaryText,
  preamble,
  icon,
  styling = 'primary',
}) => {
  return (
    <Link
      href={href}
      className={classNames(
        {
          [css.textOnly]: !icon && !preamble && primaryText,
          [css.iconOnly]: !primaryText && !preamble && icon,
          [css.iconWithPrimary]: !preamble && icon && primaryText,
          [css.allProps]: preamble && icon && primaryText,
        },
        css.link,
        css[styling]
      )}
    >
      {icon && icon}
      <div>
        {primaryText && <span className={css.primaryText}>{primaryText}</span>}
        {preamble && <span className={css.preamble}>{preamble}</span>}
      </div>
    </Link>
  );
};

export default LinkButton;
