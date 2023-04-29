import React, { ReactNode } from 'react';
import { useMediaQueriesMinWidth } from '@/hooks/useMediaQueries';
import Footer from '../Footer';
import FooterMobile from '../FooterMobile';
import Header from '../Header';

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const { isLaptop } = useMediaQueriesMinWidth();

  return (
    <>
      <Header />
      {children}
      {isLaptop ? <Footer /> : <FooterMobile />}
    </>
  );
};

export default Layout;
