import React, { useState } from 'react';
import styles from './DescriptionBlock.module.scss';
import classNames from 'classnames';

type DescriptionBlockProps = {
  title?: string;
  content: string[];
  children?: React.ReactNode;
};

const DescriptionBlock: React.FC<DescriptionBlockProps> = ({ title, content, children }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={styles.description}>
      {title && <h1 className={styles.descriptionTitle}>{title}</h1>}
      <div className={classNames({ [styles.hidden]: isHidden }, styles.descriptionContent)}>
        {content.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
        {children}
      </div>
      <span
        className={styles.toggleDesciption}
        onClick={() => setIsHidden((prevState) => !prevState)}
      >
        {isHidden ? 'Развернуть' : 'Свернуть'}
      </span>
    </div>
  );
};

export default DescriptionBlock;
