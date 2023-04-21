import React from 'react';
import styles from './MedallionButton.module.scss';

type MedallionButtonProps = {
  text?: string | number;
  src?: string;
  caption: string | number;
};

const MedallionButton: React.FC<MedallionButtonProps> = ({ text, src, caption }) => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <div className={styles.content}>
          {text && <p className={styles.text}>{text}</p>}
          {src && <img src={src} alt="thumb" className={styles.img} />}
        </div>
      </div>
      <p className={styles.caption}>{caption}</p>
    </div>
  );
};

export default MedallionButton;
