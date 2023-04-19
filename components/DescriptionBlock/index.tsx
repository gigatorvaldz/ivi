import React, { useState } from 'react';
import styles from './DescriptionBlock.module.scss';
import classNames from 'classnames';

type DescriptionBlockProps = {
  title: string;
  content: string[];
};

const DescriptionBlock: React.FC<DescriptionBlockProps> = ({ title, content }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={styles.description}>
      <h1 className={styles.descriptionTitle}>{title}</h1>
      <div className={classNames({ [styles.hidden]: isHidden }, styles.descriptionContent)}>
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
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
