import { useMediaQuery } from 'react-responsive';

export const useMediaQueriesMinWidth = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const isLaptop = useMediaQuery({ query: '(min-width: 1160px)' });
  const isTable = useMediaQuery({ query: '(min-width: 768px)' });
  const is500 = useMediaQuery({ query: '(min-width: 500px)' });
  const isMobile = useMediaQuery({ query: '(min-width: 320px)' });

  return { isMobile, is500, isTable, isLaptop, isDesktop };
};
