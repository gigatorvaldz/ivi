import React from 'react';
import { useRouter } from 'next/router';
import styles from './MedallionButton.module.scss';
import Link from 'next/link';

type MedallionButtonProps = {
  text?: string | number;
  src?: string;
  caption: string | number;
};

const MedallionButton: React.FC<MedallionButtonProps> = ({ text, src, caption }) => {
  const router = useRouter();

  return (
    <Link
      className={styles.container}
      href='/'
    >
      <div className={styles.button}>
        <div className={styles.content}>
          {text && <p className={styles.text}>{text}</p>}
          {src && <img src={src} alt="thumb" className={styles.img} />}
        </div>
      </div>
      <p className={styles.caption}>{caption}</p>
    </Link>
  );
};

export default MedallionButton;
