import Meta from '@/components/Meta/Meta';
import Footer from '@/components/Footer/Footer';

import DropDown from '@/UI/DropDown';
import styles from './filmsPage.module.scss';
import DropDownMenu from '@/UI/DropDownMenu';
import List from '@/UI/List/List';
import { LINKS } from '@/constants/footer';

const FilmsPage = () => {
  return (
    <>
      <Meta title="films" description="films page" />
      <h2></h2>
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
      </div>
      <Footer />
    </>
  );
};

export default FilmsPage;
