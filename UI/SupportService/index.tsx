import React from 'react';
import css from './SupportService.module.scss';
import Button from '../Button';
import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import Link from 'next/link';
import classNames from 'classnames';

interface ISupportService {
  isMobile?: boolean;
}

const SupportService: React.FC<ISupportService> = ({ isMobile = false }) => {
  return (
    <>
      <div className={classNames({ [css.descriptionMobile]: isMobile }, css.description)}>
        <span>Мы всегда готовы вам помочь.</span>
        <span>Наши операторы онлайн 24/7</span>
      </div>
      <div className={classNames({ [css.supportMobile]: isMobile }, css.support)}>
        <div className={css.wideButton}>
          <Button isHundredPercentsWidth={true} primaryText="Написать в чате" />
        </div>
        <div className={classNames({ [css.supportButtonsMobile]: isMobile }, css.supportButtons)}>
          <Button icon={<FiMail className={css.supportIcon} />} />
          <Button icon={<BsTelephone className={css.supportIcon} />} />
        </div>
      </div>
      <div className={css.questions}>
        <Link href="/123">ask.ivi.ru</Link>
        <span>Ответы на вопросы</span>
      </div>
    </>
  );
};

export default SupportService;
