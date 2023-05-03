import React from 'react';
import css from './Stores.module.scss';
import Button from '../Button';
import { BsApple, BsGooglePlay } from 'react-icons/bs';
import { MdOutlineMonitor, MdDevicesOther } from 'react-icons/md';

interface IStores {
  isMobile?: boolean;
}

const Stores: React.FC<IStores> = ({ isMobile }) => {
  const storeItems = [
    {
      icon: <BsApple className={css.storeIcon} />,
      primaryText: 'App Store',
      preamble: 'Загрузить в',
    },
    {
      icon: <BsGooglePlay className={css.storeIcon} />,
      primaryText: 'Google Play',
      preamble: 'Доступно в',
    },
    {
      icon: <MdOutlineMonitor className={css.storeIcon} />,
      primaryText: 'Smart TV',
      preamble: 'Смотрите на',
    },
    { icon: <MdDevicesOther className={css.storeIcon} />, primaryText: 'Все устройства' },
  ];

  let resultStores;

  isMobile ? resultStores = storeItems.slice(2) : resultStores = [...storeItems]

  return (
    <div className={css.stores}>
      {resultStores.map((e) => (
        <Button
          key={e.primaryText}
          onClickHandler={() => console.log(1)}
          icon={e.icon}
          primaryText={e.primaryText}
          preamble={e.preamble}
          isHundredPercentsWidth={isMobile}
        />
      ))}
    </div>
  );
};

export default Stores;
