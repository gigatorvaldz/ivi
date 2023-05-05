import { useRouter } from 'next/router';

export const useURLQuery = () => {
  const router = useRouter();

  const currentQuery = router.asPath.split('?').slice(-1).join('');
  const pathWithoutQuery = router.asPath.split('?').slice(0, -1).join('');

//  const [pathWithoutQuery, currentQuery] = (router.asPath.split('?'))

  const lastPage =
    currentQuery.split('/').length > 1
      ? `/${router.asPath.split('/').slice(-1).join('')}`
      : `?${currentQuery}`;

  const toggleQuery = (query: string) => {
    if (query === `?${currentQuery}`) router.push(pathWithoutQuery);
    else router.push(pathWithoutQuery ? pathWithoutQuery + query : router.asPath + query);
  };

  return {
    currentQuery,
    pathWithoutQuery,
    toggleQuery,
    lastPage,
  };
};
