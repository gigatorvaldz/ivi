import React from 'react';
import css from './Stores.module.scss';
import Button from '../Button';
import { BsApple, BsGooglePlay } from 'react-icons/bs';
import { MdOutlineMonitor, MdDevicesOther } from 'react-icons/md';

const Stores: React.FC = () => {
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

  return (
    <div className={css.stores}>
      {storeItems.map((e) => (
        <Button
          key={e.primaryText}
          onClickHandler={() => console.log(1)}
          icon={e.icon}
          primaryText={e.primaryText}
          preamble={e.preamble}
        />
      ))}
    </div>
  );
};

export default Stores;