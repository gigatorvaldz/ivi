import React from 'react';
import css from './Stores.module.scss';
import Link from 'next/link';
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
      href: 'https://apps.apple.com/RU/app/id455705533?mt=8',
    },
    {
      icon: <BsGooglePlay className={css.storeIcon} />,
      primaryText: 'Google Play',
      preamble: 'Доступно в',
      href: 'https://play.google.com/store/apps/details?id=ru.ivi.client&referrer=af_tranid%3DRr7d_GphzalA85B2ML2oFQ%26shortlink%3DdevicesAndroid%26c%3DdevicesAndroid%26pid%3DWebsite%20ivi%26source_caller%3Dui',
    },
    {
      icon: <MdOutlineMonitor className={css.storeIcon} />,
      primaryText: 'Smart TV',
      preamble: 'Смотрите на',
      href: 'https://www.ivi.ru/pages/tvsmart/',
    },
    {
      icon: <MdDevicesOther className={css.storeIcon} />,
      primaryText: 'Все устройства',
      href: 'https://www.ivi.ru/devices',
    },
  ];

  let resultStores;

  isMobile ? (resultStores = storeItems.slice(2)) : (resultStores = [...storeItems]);

  return (
    <div className={css.stores}>
      {resultStores.map((e, index) => (
        <Link href={e.href} key={index}>
          <Button
            key={e.primaryText}
            icon={e.icon}
            primaryText={e.primaryText}
            preamble={e.preamble}
            isHundredPercentsWidth={isMobile}
          />
        </Link>
      ))}
    </div>
  );
};

export default Stores;
