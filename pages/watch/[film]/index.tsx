import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import Meta from '@/components/Meta';
import MedallionButton from '@/UI/MedallionButton';

import styles from './filmPage.module.scss';
import Breadcrumbs from '@/components/BreadCrumbs';
import Player from '@/components/Player';
import { Film } from '@/interfaces/Film';

type FilmPageProps = {
  film: Film;
};

const FilmPage: NextPage<FilmPageProps> = ({ film }) => {
  return (
    <>
      <Meta title="film" description="film page" />
      <Header />
      <section className={styles.breadcrumbs}>
        <div className="wrapper">
          <div className={styles.container}>
            <Breadcrumbs />
          </div>
        </div>
      </section>
      <section className={styles.breadcrumbs}>
        <div className="wrapper">
          <div className={styles.container}>
            <div className={styles.playerSection}>
              <Player />
            </div>

            <div className={styles.aboutFilmSection}>
              <h1 className={styles.title}>{film.name}</h1>
              <h2 className={styles.subtitle}>{`(Фильм ${film.year})`}</h2>
              <div className={styles.paramsList}>
                <p className={styles.param}>{film.year}</p>
                <p className={styles.param}>1 серия</p>
                <p className={styles.param}>{film.mpaaRating}</p>
              </div>
              <div className={styles.paramsList}>
                <p className={styles.param}>{film.countries[0].name}</p>
                {film.genres.map(({ name }) => (
                  <p className={styles.param} key={name}>
                    <span></span>
                    {name}
                  </p>
                ))}
              </div>
              <div className={styles.medallionsContainer}>
                <MedallionButton caption="Рейтинг Кинопоиска" text={film.rating} />
                {film.actors.map((actor) => (
                  <MedallionButton caption={actor.name} src={actor.photo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

import fsPromises from 'fs/promises';
import path from 'path';

export const getServerSideProps: GetServerSideProps<FilmPageProps> = async (context) => {
  // const { id } = context.params;
  // const response = await fetch('https://64143550600d6c8387434f0a.mockapi.io/api/film');

  // console.log(response);
  // const film: Film = (await response.json())[0];

  const filePath = path.join(process.cwd(), './mocks/filmResponse.json');
  const jsonData = (await fsPromises.readFile(filePath)) as unknown as string;
  const film: Film = JSON.parse(jsonData);

  if (!film) {
    return {
      notFound: true,
    };
  }

  return {
    props: { film },
  };
};

export default FilmPage;
