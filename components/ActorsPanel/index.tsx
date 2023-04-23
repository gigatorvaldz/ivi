import React from 'react';
import Link from 'next/link';

import styles from './ActorsPanel.module.scss';
import classNames from 'classnames';
import PersonAvatar from '../../UI/PersonAvatar';
import { Film } from '../../interfaces/Film';

type ActorsPanelProps = {
  film: Film;
};

const ActorsPanel: React.FC<ActorsPanelProps> = ({ film }) => {
  const directors = film.directors.map((director) => ({ person: director, role: 'Режиссёр' }));
  const actors = film.actors.map((actor) => ({ person: actor, role: 'Актёр' }));
  const writers = film.writers.map((writer) => ({ person: writer, role: 'Сценарист' }));
  const producers = film.producers.map((producer) => ({ person: producer, role: 'Продюсер' }));
  const persons = [...directors, ...actors, ...writers, ...producers];

  return (
    <section className={styles.galerySection}>
      <div className="wrapper">
        <div className={styles.container}>
          <Link href={`/`} className={classNames(styles.heading, styles.link)}>
            Актёры и создатели
          </Link>
          <div className={styles.actorCardsContainer}>
            {persons.map(({ person, role }) => (
              <PersonAvatar person={person} role={role} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActorsPanel;
