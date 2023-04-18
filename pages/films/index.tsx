import Meta from '@/components/Meta';
import Footer from '@/components/Footer';

import DropDown from '@/UI/DropDown';
import styles from './filmsPage.module.scss';
import DropDownMenu from '@/UI/DropDownMenu';
import List from '@/UI/List';
import { LINKS } from '@/constants/footer';
import ImageCarousel from './../../UI/ImageCarousel/index';
import Button from '@/UI/Button';
import Breadcrumbs from '../../components/BreadCrumbs';

const FilmsPage = () => {
  return (
    <>
      <Meta title="films" description="films page" />
      <h2></h2>
      <section className={styles.filmsSection}>
        <div className="wrapper">
          <div className={styles.container}>
            <Breadcrumbs />
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
            <div style={{ maxWidth: '200px' }}>
              <ImageCarousel
                buttonsBackground
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FilmsPage;