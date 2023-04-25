import React from 'react';

import styles from './Player.module.scss';
import { FaPlay } from 'react-icons/fa';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { AiOutlineDownload } from 'react-icons/ai';
import Button from '../../UI/Button';
import ImageWithFallback from '@/UI/ImageWithFallback';
import { Film } from '@/interfaces/Film';

type PlayerProps = {
  film: Film;
};

const Player: React.FC<PlayerProps> = ({ film }) => {
  return (
    <div className={styles.container}>
      <div className={styles.player}>
        <ImageWithFallback src={film.poster} fill alt="trailer_poster" className={styles.poster} />
      </div>
      <div className={styles.buttons}>
        <Button icon={<FaPlay />} primaryText="Трейлер" />
        <Button icon={<BsFillBookmarkFill className={styles.iconMark} />} />
        <Button icon={<AiOutlineDownload className={styles.iconDonwload} />} />
      </div>
    </div>
  );
};

export default Player;
