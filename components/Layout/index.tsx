import React, { ReactNode } from 'react';
import Footer from '../Footer';
import FooterMobile from '../FooterMobile';
import Header from '../Header';
import HeaderMobile from '../HeaderMobile';
import dynamic from 'next/dynamic';
const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <MediaQuery minWidth={1025}>
        <Header />
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        <HeaderMobile />
      </MediaQuery>
      {children}
      <MediaQuery minWidth={1025}>
        <Footer />
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        <FooterMobile />
      </MediaQuery>
    </>
  );
};

export default Layout;
