import React from 'react';
import css from './LanguageSwitcher.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/router';

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;
  const switchedLanguage = router.locale == 'ru' ? 'en' : 'ru';

  return (
    <Link className={css.container} href={pathname} locale={switchedLanguage}>
      {switchedLanguage}
    </Link>
  );
};

export default LanguageSwitcher;
