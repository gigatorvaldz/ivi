import { useMediaQuery } from 'react-responsive';

export const useMediaQueriesMinWidth = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const isLaptop = useMediaQuery({ query: '(min-width: 1100px)' });
  const isTable = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(min-width: 320px)' });

  return { isMobile, isTable, isLaptop, isDesktop };
};
