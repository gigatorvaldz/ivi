import { NextPage, GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import Meta from '@/components/Meta';
import MedallionButton from '@/UI/MedallionButton';
import DescriptionBlock from '@/components/DescriptionBlock';
import WatchOptions from '@/components/WatchOptions';
import RatingMobile from '@/UI/RatingMobile';
import Galery from '@/components/Galery';
import { FilmCardArray } from '@/mocks/FilmCardArray';
import ActorsPanel from '@/components/ActorsPanel';
import ExtraContentPanel from '@/components/ExtraContentPanel';
import CommentsGalery from '@/components/CommentsGalery';
import LinkButton from '@/UI/LinkButton';
import Link from 'next/link';
import classNames from 'classnames';
import Layout from '@/components/Layout';

import styles from './filmPage.module.scss';
import Breadcrumbs from '@/components/BreadCrumbs';
import Player from '@/components/Player';
import { Film } from '@/interfaces/Film';
import PopupFilm from '@/components/PopupFilm';

type FilmPageProps = {
  film: Film;
};

const FilmPage: NextPage<FilmPageProps> = ({ film }) => {
  const { name: firstCountry, englishName: firstCountryEng } = film.countries[0];
  const [visiblePopup, setVisiblePopup] = useState<boolean>(false);
  const router = useRouter();
  const currentQuery = router.asPath.split('?');

  useEffect(() => {
    if (currentQuery.length !== 1 && currentQuery.slice(-1).join('') !== 'search')
      setVisiblePopup(true);
    else setVisiblePopup(false);
  }, [router]);

  return (
    <>
      <Meta title="film" description="film page" />
      <Layout>
        <section className={styles.breadcrumbs}>
          <div className="wrapper">
            <div className={styles.container}>
              <Breadcrumbs />
            </div>
          </div>
        </section>
        <section className={styles.infoSection}>
          <div className="wrapper">
            <div className={styles.container}>
              <div className={styles.playerSection}>
                <Player film={film} />
              </div>
              <div className={styles.aboutFilmSection}>
                <div className={styles.filmTitleContainer}>
                  <h1 className={styles.title}>{film.name}</h1>
                  <h2 className={styles.subtitle}>{`(Фильм ${film.year})`}</h2>
                </div>
                <div className={styles.paramsContainer}>
                  <div className={styles.paramsList}>
                    <p className={styles.param}>{film.year}</p>
                    <p className={styles.param}>1 серия</p>
                    <p className={styles.param}>{film.mpaaRating}</p>
                  </div>
                  <div className={styles.paramsList}>
                    <Link
                      href={`/films/${firstCountryEng}`}
                      className={classNames(styles.param, styles.link)}
                    >
                      {firstCountry}
                    </Link>
                    {film.genres.map(({ name, englishName, id }) => (
                      <Link
                        href={`/films/${englishName}`}
                        className={classNames(styles.param, styles.link)}
                        key={id}
                      >
                        <span></span>
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className={styles.medallionsContainer}>
                  <MedallionButton caption="Рейтинг Кинопоиска" text={film.rating} />
                  {film.actors.slice(0, 4).map((actor) => (
                    <MedallionButton caption={actor.name} src={actor.photo} key={actor.id} />
                  ))}
                </div>
                <DescriptionBlock content={[film.description]}>
                  <WatchOptions
                    qualities={['FullHD', 'HD', '1080', '720']}
                    languages={['Русский', 'Английский']}
                  />
                </DescriptionBlock>
                <RatingMobile rating={film.rating} ratesCount={film.ratingsNumber} />
              </div>
            </div>
          </div>
        </section>
        <Galery
          title={`С фильмом «${film.name}» смотрят:`}
          slides={FilmCardArray}
          isTitleLink={false}
        />

        <ActorsPanel film={film} />
        <ExtraContentPanel film={film} />
        <CommentsGalery film={film} />

        <section className={styles.allDevices}>
          <div className="wrapper">
            <div className={styles.container}>
              <h2 className={styles.allDevicesHeader}>
                Cмотреть «{film.name}» на всех устройствах
              </h2>
              <p className={styles.availableDevices}>
                Приложение доступно для скачивания на iOS, Android, SmartTV и приставках
              </p>
              <Button 
                primaryText='Подключить устройства'
                styling='accent'
              />
            </div>
          </div>
        </section>
        <PopupFilm
          visiblePopup={visiblePopup}
          comments={film.reviews}
          creators={[
            { profession: 'Режиссёры', person: film.directors },
            { profession: 'Актёры', person: film.actors },
            { profession: 'Продюсеры', person: film.producers },
            { profession: 'Художники', person: film.designers },
            { profession: 'Сценаристы', person: film.writers },
            { profession: 'Композиторы', person: film.musicians },
            // {profession: 'Монтаж', person: film.?},
            // {profession: 'Переводчик', person: film.?},
          ]}
          title={film.name}
          genre="Фильм"
          year={film.year}
        />
      </Layout>
    </>
  );
};

import fsPromises from 'fs/promises';
import path from 'path';
import { useRouter } from 'next/router';
import Button from '@/UI/Button';

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
