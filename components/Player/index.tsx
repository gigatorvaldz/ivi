import React from 'react';

import styles from './Player.module.scss';
import { FaPlay } from 'react-icons/fa';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { AiOutlineDownload } from 'react-icons/ai';
import Button from '../../UI/Button';

const Player = () => {
  return (
    <div className={styles.container}>
      <div className={styles.player}></div>
      <div className={styles.buttons}>
        <Button icon={<FaPlay />} primaryText="Трейлер" />
        <Button icon={<BsFillBookmarkFill className={styles.iconMark} />} />
        <Button icon={<AiOutlineDownload className={styles.iconDonwload} />} />
      </div>
    </div>
  );
};

export default Player;
