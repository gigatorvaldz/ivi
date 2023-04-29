import React from 'react';
import css from './BackArrow.module.scss';
import { useRouter } from 'next/router';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

interface IBackArrow {
  redirectTo: string;
}

const BackArrow: React.FC<IBackArrow> = ({ redirectTo }) => {
  const router = useRouter();

  return (
    <div className={css.container} onClick={() => router.push(router.asPath.split('?').slice(0, -1).join(''))}>
      <MdOutlineArrowBackIosNew className={css.icon} />
      <span>{redirectTo}</span>
    </div>
  );
};

export default BackArrow;