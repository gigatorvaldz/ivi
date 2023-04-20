import React from 'react';
import css from './SubscriptionDropDownContent.module.scss';
import { BsFillTvFill } from 'react-icons/bs';
import Button from '@/UI/Button';

const SubscriptionDropDownContent: React.FC = () => {
  return (
    <div className={css.subscription}>
      <div className={css.subcarousel}></div>
      <div>
        <Button
          styling="lighter"
          primaryText="Смотреть на SmartTV"
          icon={<BsFillTvFill size={22} />}
        />
      </div>
    </div>
  );
};

export default SubscriptionDropDownContent;
