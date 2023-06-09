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
import { FilmCardArray } from '@/mocks/FilmCardArray';
import GaleryCarousel from '../../UI/GaleryCarousel';

import styles from './filmsPage.module.scss';
import Layout from './../../components/Layout/index';

const FilmsPage = () => {

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
        <Galery title="Фильмы-новинки" slides={FilmCardArray} isTitleLink={false} />
        <Galery title="Лучшие фильмы" slides={FilmCardArray} isTitleLink={false} />
      </Layout>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps<FilmPageProps> = async (context) => {
//   const { id } = context.params;
//   const response = await fetch('https://64143550600d6c8387434f0a.mockapi.io/api/film');

//   console.log(response);
//   const film: Film = (await response.json())[0];

//   if (!film) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { film },
//   };
// };

export default FilmsPage;
