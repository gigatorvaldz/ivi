import React from 'react';
import styles from './WatchOptions.module.scss';
import Badge from './../../UI/Badge/index';

type WatchOptionsProps = {
  languages: string[];
  qualities: string[];
};

const WatchOptions: React.FC<WatchOptionsProps> = ({ languages, qualities }) => {
  return (
    <div className={styles.container}>
      <div className={styles.languagesContainer}>
        <p className={styles.caption}>Языки</p>
        <div className={styles.languages}>
          {languages.map((language) => (
            <p className={styles.language} key={language}>
              {language}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.qualityAndSoundContainer}>
        <p className={styles.caption}>
          <span>Изображение и звук.</span> Фактическое качество зависит от устройства и ограничений
          правообладателя.
        </p>
        <div className={styles.qualities}>
          {qualities.map((quality) => (
            <Badge name={quality} key={quality} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchOptions;
