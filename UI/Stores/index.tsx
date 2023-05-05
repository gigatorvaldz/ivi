import React from 'react';
import css from './Stores.module.scss';
import Link from 'next/link';
import Button from '../Button';
import { BsApple, BsGooglePlay } from 'react-icons/bs';
import { MdOutlineMonitor, MdDevicesOther } from 'react-icons/md';

interface IStores {
  items: {
    icon: React.ReactNode;
    primaryText: string;
    preamble?: string;
    href: string;
  }[];
  isMobile?: boolean;
}

const Stores: React.FC<IStores> = ({ items, isMobile }) => {

  let resultStores;
  isMobile ? (resultStores = items.slice(2)) : (resultStores = [...items]);

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