import React from 'react';
import Link from 'next/link';

import styles from './ActorsPanel.module.scss';
import classNames from 'classnames';
import PersonAvatar from '../../UI/PersonAvatar';
import { Film } from '../../interfaces/Film';
import { useRouter } from 'next/router';

type ActorsPanelProps = {
  film: Film;
};

const ActorsPanel: React.FC<ActorsPanelProps> = ({ film }) => {
  const directors = film.directors.map((director) => ({ person: director, role: 'Режиссёр' }));
  const actors = film.actors.map((actor) => ({ person: actor, role: 'Актёр' }));
  const writers = film.writers.map((writer) => ({ person: writer, role: 'Сценарист' }));
  const producers = film.producers.map((producer) => ({ person: producer, role: 'Продюсер' }));
  const persons = [...directors, ...actors, ...writers, ...producers];

  const router = useRouter();

  return (
    <section className={styles.galerySection}>
      <div className="wrapper">
        <div className={styles.container}>
          <span
            onClick={() => router.push(router.asPath + '?person', undefined, { shallow: true })}
            className={classNames(styles.heading, styles.link)}
          >
            Актёры и создатели
          </span>
          <div className={styles.actorCardsContainer}>
            {persons.map(({ person, role }) => (
              <PersonAvatar person={person} role={role} key={person.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActorsPanel;
