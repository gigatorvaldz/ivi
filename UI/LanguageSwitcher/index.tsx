import React from 'react';
import useTranslation from '@/hooks/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LanguageSwitcher: React.FC = () => {
  const { locale } = useTranslation();
  const router = useRouter();
  const { pathname } = router;
  const switchedLanguage = locale == 'ru' ? 'en' : 'ru';

  return (
    <Link href={pathname} locale={switchedLanguage}>
      {switchedLanguage}
    </Link>
  );
};

export default LanguageSwitcher;
