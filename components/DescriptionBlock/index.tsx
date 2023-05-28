import React, { useState } from 'react';
import styles from './DescriptionBlock.module.scss';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';

type DescriptionBlockProps = {
  title?: string;
  content: string[];
  children?: React.ReactNode;
  isMainPage?: boolean;
};

const DescriptionBlock: React.FC<DescriptionBlockProps> = ({
  title,
  content,
  children,
  isMainPage = false,
}) => {
  const [isHidden, setIsHidden] = useState(true);
  const { t } = useTranslation(['mainPage', 'common']);

  return (
    <div className={styles.description}>
      {title && (
        <h1 className={!isMainPage ? styles.descriptionTitle : styles.descriptionSubTitle}>
          {t(title)}
        </h1>
      )}
      <div
        className={classNames(
          {
            [styles.hidden]: isHidden,
            [styles.mainPageParagraph]: isMainPage,
          },
          styles.descriptionContent,
        )}
      >
        {content.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {t(paragraph)}
          </p>
        ))}
        {children}
      </div>
      <span
        className={styles.toggleDesciption}
        onClick={() => setIsHidden((prevState) => !prevState)}
      >
        {isHidden ? t('expand') : t('collapse')}
      </span>
    </div>
  );
};

export default DescriptionBlock;
