import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import classNames from 'classnames';
import css from './personPage.module.scss';

import ImageWithFallback from '@/UI/ImageWithFallback';
import BackArrow from '@/UI/BackArrow';
import Layout from '@/components/Layout';
import Link from 'next/link';
import ActionFilmCardList from '@/components/ActionFilmCardList';
import { Person } from '@/interfaces/Person';

interface PersonPageI {
  person?: Person;
  error?: boolean;
}

const PersonPage: NextPage<PersonPageI> = ({ person, error = false }) => {
  if (!person || error) {
    return (
      <Layout>
        <div className={css.container}>
          <div className={css.backarrow}>
            <BackArrow toCategory={false} redirectTo="Назад" />
          </div>
          <h1 className={css.errorMessage}>Person is not found</h1>
        </div>
      </Layout>
    );
  } else {
    return (
      <>
        <Layout>
          <div className={css.container}>
            <div className={css.backarrow}>
              <BackArrow toCategory={false} redirectTo="Назад" />
            </div>

            <section className={classNames(css.pagesection, css.personcard)}>
              <div className={css.pagewrapper}>
                <div className={css.avatarcontainer}>
                  <ImageWithFallback
                    alt="person image"
                    src={person.photo}
                    width={120}
                    height={120}
                    placeholder="blur"
                    blurDataURL={person.photo}
                  />
                </div>
                <h2 className={css.title}>{person?.name}</h2>
                <ul className={css.anchorlinklist}>
                  <li className={css.anchorlink}>
                    <Link passHref replace href="#filmography">
                    Фильмов: {person.films.length}
                    </Link>
                  </li>
                </ul>
              </div>
            </section>

            <section className={classNames(css.filmography, css.pagesection)} id="filmography">
              <div className={css.pagewrapper}>
                <div className={css.title}>
                  <h2>Полная фильмография</h2>
                  <span>Фильмов: {person.films.length}</span>
                </div>

                <div className={css.controls}>
                  <div className={css.inner}>
                    <span>Всё</span>
                  </div>
                </div>
                <ActionFilmCardList items={person.films} />
              </div>
            </section>
          </div>
        </Layout>
      </>
    );
  }
};

export const getServerSideProps: GetServerSideProps<PersonPageI> = async (context) => {
  if (context.params) {
    const id = context.params.id;
    try {
      const response = await fetch(`http://localhost:3000/api/person/${id}`);
      const data = await response.json();
      if (data && id) {
        return {
          props: {
            person: data,
            id: id,
          },
        };
      }
    } catch (error) {
      return {
        props: {
          error: true,
        },
      };
    }
  }

  return {
    props: {
      error: true,
    },
  };
};

export default PersonPage;
