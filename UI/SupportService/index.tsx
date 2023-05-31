import React, { useRef, useState } from 'react';
import css from './SupportService.module.scss';
import Button from '../Button';
import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import Link from 'next/link';
import classNames from 'classnames';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useTranslation } from 'next-i18next';

interface ISupportService {
  isMobile?: boolean;
}

const SupportService: React.FC<ISupportService> = ({ isMobile = false }) => {
  const [visibleNumber, setVisibleNumber] = useState<boolean>(false);
  const numberRef = useRef(null);
  const { t } = useTranslation('footer');
  useClickOutside(numberRef, setVisibleNumber);

  return (
    <>
      <div className={classNames({ [css.descriptionMobile]: isMobile }, css.description)}>
        <span>{t('supportInfoTop')}</span>
        <span>{t('supportInfoBottom')}</span>
      </div>
      <div className={classNames({ [css.supportMobile]: isMobile }, css.support)}>
        <div className={css.wideButton}>
          <Link href="/profile">
            <Button isHundredPercentsWidth={true} primaryText={t('chat')} />
          </Link>
        </div>
        <div className={classNames({ [css.supportButtonsMobile]: isMobile }, css.supportButtons)}>
          <Link href="mailto:support@ivi.ru">
            <Button icon={<FiMail className={css.supportIcon} />} />
          </Link>
          <Button
            innerRef={numberRef}
            onClickHandler={() => setVisibleNumber(!visibleNumber)}
            icon={<BsTelephone className={css.supportIcon} />}
          />
          <Link
            href="tel:88002344923"
            className={classNames({ [css.showed]: visibleNumber }, css.phoneItem)}
          >
            <span className={css.phoneNumber}>8 800 234-49-23</span>
            <span className={css.phoneFree}>{t('freeCall')}</span>
          </Link>
        </div>
      </div>
      <div className={css.questions}>
        <Link href="https://ask.ivi.ru/">ask.ivi.ru</Link>
        <span>{t('faq')}</span>
      </div>
    </>
  );
};

export default SupportService;
