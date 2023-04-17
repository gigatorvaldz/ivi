import Meta from '@/components/Meta';
import Footer from '@/components/Footer';

import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import DropDown from '@/UI/DropDown';
import styles from './filmsPage.module.scss';
import DropDownMenu from '@/UI/DropDownMenu';
import List from '@/UI/List';
import { LINKS } from '@/constants/footer';
import ImageCarousel from '../../UI/ImageCarousel/index';
import Button from '@/UI/Button';
import { NextPage } from 'next';

interface IFilmsPage {
  children: ReactNode;
}

const FilmsPage: NextPage<IFilmsPage> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Meta title="films" description="films page" />
      {children}
      <h2 onClick={() => router.push('films/comments')}>Комментарии</h2>
      <div className={styles.container}>
        <DropDown type="hover" options={[123, 456, 789]} />
        <DropDownMenu
          type="click"
          title="Страны"
          children={
            <div style={{ display: 'flex', gap: '2rem' }}>
              <List items={LINKS[0]} />
              <List items={LINKS[1]} />
              <List items={LINKS[0]} />
              <List items={LINKS[0]} />
            </div>
          }
        />

        <ImageCarousel
          slides={[
            <Button primaryText="test0" />,
            <Button primaryText="test1" />,
            <Button primaryText="test2" />,
            <Button primaryText="test3" />,
            <Button primaryText="test4" />,
            <Button primaryText="test5" />,
            <Button primaryText="test6" />,
            <Button primaryText="test7" />,
          ]}
        />
      </div>
      <Footer />
    </>
  );
};

export default FilmsPage;
