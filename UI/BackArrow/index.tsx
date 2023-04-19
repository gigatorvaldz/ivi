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
    <div className={css.container} onClick={() => router.back()}>
      <MdOutlineArrowBackIosNew className={css.icon} />
      <span>К {redirectTo}у</span>
    </div>
  );
};

export default BackArrow;