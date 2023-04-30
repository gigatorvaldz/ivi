import Link from 'next/link';
import React from 'react';
import css from './AuthPrivacy.module.scss';
type Props = {};

const AuthPrivacy = (props: Props) => {
  return (
    <div className={css.privacy}>
      <p>Нажимая «Продолжить», я соглашаюсь</p>
      <p>
        с{' '}
        <Link className={css.link} href={'https://www.ivi.ru/info/confidential'}>
          Политикой конфиденциальности
        </Link>
      </p>
      <p>
        и{' '}
        <Link className={css.link} href={'https://www.ivi.ru/info/confidential'}>
          Пользовательским соглашением
        </Link>
      </p>
    </div>
  );
};

export default AuthPrivacy;
