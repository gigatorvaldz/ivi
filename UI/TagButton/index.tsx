import React from 'react';
import styles from './TagButton.module.scss';
import classNames from 'classnames';
import { IconType } from 'react-icons';

export type ButtonStylingT = 'primary' | 'accent';

interface IButton {
  callback?: () => void;
  tag: string;
  Icon?: IconType;
  outlined?: boolean;
}

const TagButton: React.FC<IButton> = ({ callback, tag, Icon, outlined }) => {
  return (
    <button
      type="button"
      onClick={callback}
      className={classNames(
        {
          [styles.outlined]: outlined,
        },
        styles.button
      )}
    >
      {Icon && <Icon className={styles.icon} />}
      <span className={styles.tag}>{tag}</span>
    </button>
  );
};

export default TagButton;
