import { en } from '../locales/en';
import { ru } from '../locales/ru';
import { useRouter } from 'next/router';

const TRANSLATIONS = { en, ru };

export default function useTranslation() {
  const router = useRouter();
  let { locale, asPath } = router;

  const setLocale = (locale: string) => router.push(asPath, asPath, { locale });

  const t = (keyString: string) => {
    return TRANSLATIONS[locale as keyof typeof TRANSLATIONS][keyString as keyof typeof locale];
  };

  return { t, locale, setLocale };
}
