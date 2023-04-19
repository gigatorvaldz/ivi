iimport Meta from '@/components/Meta/Meta';
import Footer from '@/components/Footer/Footer';

import styles from './filmsPage.module.scss';
import Breadcrumbs from '@/components/BreadCrumbs';
import DescriptionBlock from '@/components/DescriptionBlock';
import descriptions from '@/constants/filmsDescriptionText';
import TagButton from '@/UI/TagButton';
import ImageCarousel from '@/UI/ImageCarousel';
import suggestionTags from '@/constants/suggestionsTags';
import FiltersDesktop from '@/components/FiltersDesktop/index';
import Galery from '@/components/Galery';
import GenreTag from '@/UI/GenreTag';
import { genresIcons } from '@/constants/genres';
import { FilmCardArray } from '@/mocks/FilmCardArray';

const FilmsPage = () => {
  return (
    <>
      <Meta title="films" description="films page" />
      <section className={styles.aboutSection}>
        <div className="wrapper">
          <div className={styles.container}>
            <Breadcrumbs />
            <div className={styles.descriptionBlock}>
              <DescriptionBlock title="Фильмы" content={descriptions.films} />
            </div>
            <div className={styles.suggestionsTags}>
              <ImageCarousel
                buttonsOutside
                slides={suggestionTags.map((tag) => (
                  <TagButton tag={tag} />
                ))}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.filtersSection}>
        <div className="wrapper">
          <div className={styles.container}>
            <FiltersDesktop />
          </div>
        </div>
      </section>
      <Galery
        title="Жанры"
        slides={genresIcons.map(({ genre, icon }) => (
          <GenreTag tag={genre} Icon={icon} key={genre} />
        ))}
        isTitleLink={false}
        arrowsBottomOffset={0}
      />
      <Galery title="Фильмы-новинки" slides={FilmCardArray} isTitleLink={false} />
      <Galery title="Лучшие фильмы" slides={FilmCardArray} />
      <Footer />
    </>
  );
};

export default FilmsPage;
