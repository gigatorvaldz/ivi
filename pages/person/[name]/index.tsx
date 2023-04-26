import { NextPage } from 'next';
import React from 'react';
import classNames from 'classnames';
import css from './personPage.module.scss';

import ImageWithFallback from '@/UI/ImageWithFallback';
import BackArrow from '@/UI/BackArrow';

// Some tests
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ActionFilmCardI } from '@/UI/ActionFilmCard';
import ActionFilmCardList from '@/components/ActionFilmCardList';

const film = {
  id: 4,
  name: 'Очень крутой фильм',
  poster: "https://i.ibb.co/xhpjcPy/image.png",
  mpaaRating: '18+',
  rating: 2.2,
  ratingsNumber: 1223,
  year: 2023,
  duration: '01:45',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quae, eaque, laudantium rem sit incidunt dolorum placeat inventore qui minus facilis sed voluptatibus, cupiditate vitae voluptas officiis tempore voluptatem consectetur eius fugit aperiam itaque delectus magni. Optio pariatur alias veniam aspernatur, tempora et nemo provident doloribus quidem. Dolorum hic quaerat sequi quos iste, sed nemo nisi provident odio harum rerum ullam necessitatibus aliquid non in doloribus voluptatum quo eum fugit quis aperiam. Autem dolor laudantium totam tempora quas cumque ipsam cum laborum delectus. Delectus commodi illo, sapiente nobis iure adipisci corporis nisi molestiae perferendis omnis, veritatis deleniti vel, impedit itaque!',
  directors: [],
  actors: [],
  writers: [],
  producers: [],
  cinematography: [],
  musicians: [],
  designers: [],
  editors: [],
  genres: [],
  awards: [],
  countries: [],
  reviews: [],
};

const items: Array<ActionFilmCardI> = [
  { film: film },
  { film: film },
  { film: film },
  { film: film },
];
//

interface PersonPageI {}

const PersonPage: NextPage<PersonPageI> = () => {
  return (
    <>
      <Header />
      {/*test*/}

      <div className={css.container}>
        <div className={css.backarrow}>
          <BackArrow redirectTo="Назад" />
        </div>

        <section className={classNames(css.pagesection, css.personcard)}>
          <div className={css.pagewrapper}>
            <div className={css.avatarcontainer}>
              <ImageWithFallback
                alt="person image"
                src="https://i.ibb.co/xhpjcPy/image.png"
                width={120}
                height={120}
                placeholder="blur"
                blurDataURL="https://i.ibb.co/NsVFCBw/image.png"
              />
            </div>
            <h2 className={css.title}>Адам Сэндлер</h2>
            <ul className={css.anchorlinklist}>
              <li className={css.anchorlink}>
                <a href="#filmography">18 фильмов</a>
              </li>
            </ul>
          </div>
        </section>

        <section className={classNames(css.filmography, css.pagesection)} id="filmography">
          <div className={css.pagewrapper}>
            <div className={css.title}>
              <h2>Полная фильмография</h2>
              <span>18 фильмов</span>
            </div>

            <div className={css.controls}>
              <div className={css.inner}>
                <span>Всё</span>
              </div>
            </div>
            <ActionFilmCardList items={items} />
          </div>
        </section>
      </div>

      {/*test*/}
      <Footer />
    </>
  );
};

export default PersonPage;
