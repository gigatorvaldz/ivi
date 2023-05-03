import React, { useEffect, useRef, useState } from 'react';

import styles from './ActorsPanel.module.scss';
import classNames from 'classnames';
import PersonAvatar from '../../UI/PersonAvatar';
import { Film } from '../../interfaces/Film';
import { useRouter } from 'next/router';

type ActorsPanelProps = {
  film: Film;
};

const ActorsPanel: React.FC<ActorsPanelProps> = ({ film }) => {
  const [avatarsCount, setAvatarsCount] = useState(0);

  const directors = film.directors.map((director) => ({ person: director, role: 'Режиссёр' }));
  const actors = film.actors.map((actor) => ({ person: actor, role: 'Актёр' }));
  const writers = film.writers.map((writer) => ({ person: writer, role: 'Сценарист' }));
  const producers = film.producers.map((producer) => ({ person: producer, role: 'Продюсер' }));
  const persons = [...directors, ...actors, ...writers, ...producers];

  const router = useRouter();

  const AvatarsContainer = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function setAvatarsNumber() {
      let containerWidth = (AvatarsContainer.current! as HTMLElement).offsetWidth;
      let avatarWidth = (AvatarsContainer.current!.children![0] as HTMLElement).offsetWidth;
      setAvatarsCount(Math.floor(containerWidth / avatarWidth));
    }

    setAvatarsNumber();
    window.addEventListener('resize', setAvatarsNumber);

    return () => {
      window.removeEventListener('resize', setAvatarsNumber);
    };
  }, [avatarsCount, setAvatarsCount]);

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
          <ul className={styles.actorCardsContainer} ref={AvatarsContainer}>
            <li className={styles.actorCard}>
              <PersonAvatar person={persons[0].person} role={persons[0].role} />
            </li>
            {persons.slice(1, avatarsCount - 1).map(({ person, role }) => (
              <li className={styles.actorCard} key={person.id}>
                <PersonAvatar person={person} role={role} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ActorsPanel;
