import React from 'react';

import styles from './Player.module.scss';
import { FaPlay } from 'react-icons/fa';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { AiOutlineDownload } from 'react-icons/ai';
import Button from '../../UI/Button';
import { Film } from '@/interfaces/Film';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false });

type PlayerProps = {
  film: Film;
};

const Player: React.FC<PlayerProps> = ({ film }) => {
  return (
    <div className={styles.container}>
      <div className="player-wrapper">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=TODt_q-_4C4"
          muted
          playing
          controls
          className="react-player"
        />
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
