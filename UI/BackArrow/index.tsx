import React from 'react';
import css from './BackArrow.module.scss';
import { useRouter } from 'next/router';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

interface IBackArrow {
  redirectTo: string;
  toCategory?: boolean;
}

const BackArrow: React.FC<IBackArrow> = ({ redirectTo, toCategory = true }) => {
  const router = useRouter();

  const onClickHandle = () => {
    if (toCategory) {
      router.push(router.asPath.split('?').slice(0, -1).join(''));
    } else {
      router.back();
    }
  };

  return (
    <div className={css.container} onClick={onClickHandle}>
      <MdOutlineArrowBackIosNew className={css.icon} />
      <span>{redirectTo}</span>
    </div>
  );
};

export default BackArrow;
