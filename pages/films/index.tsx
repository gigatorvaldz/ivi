import Meta from '@/components/Meta/index';
import Breadcrumbs from '@/components/BreadCrumbs';
import DescriptionBlock from '@/components/DescriptionBlock';
import descriptions from '@/constants/filmsDescriptionText';
import TagButton from '@/UI/TagButton';
import suggestionTags from '@/constants/suggestionsTags';
import FiltersDesktop from '@/components/FiltersDesktop/index';
import Galery from '@/components/Galery';
import GenreTag from '@/UI/GenreTag';
import { genresIcons } from '@/constants/genres';
import GaleryCarousel from '../../UI/GaleryCarousel';
import { GetServerSideProps, NextPage } from 'next';
import { Film } from '../../interfaces/Film';

import styles from './filmsPage.module.scss';
import Layout from './../../components/Layout/index';
import FilmCard from '../../components/FilmCard';

type FilmsPageProps = {
  films: Film[];
};

const FilmsPage: NextPage<FilmsPageProps> = ({ films }) => {
  return (
    <>
      <Meta title="films" description="films page" />
      <Layout>
        <section className={styles.aboutSection}>
          <div className="wrapper">
            <div className={styles.container}>
              <Breadcrumbs />
              <div className={styles.descriptionBlock}>
                <DescriptionBlock title="Фильмы" content={descriptions.films} />
              </div>
              <div className={styles.suggestionsTags}>
                <GaleryCarousel
                  buttonsOutside
                  slides={suggestionTags.map((tag) => (
                    <TagButton tag={tag} />
                  ))}
                  itemsWidthAreEqual={false}
                  smallArrows={true}
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
        <Galery
          title="Фильмы-новинки"
          slides={films.map((film) => (
            <FilmCard film={film} key={film.id} />
          ))}
          isTitleLink={false}
        />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<FilmsPageProps> = async () => {
  const response = await fetch(`http://localhost:4000/films`);

  const films: Film[] = await response.json();

  if (!films) {
    return {
      notFound: true,
    };
  }

  return {
    props: { films },
  };
};

export default FilmsPage;
