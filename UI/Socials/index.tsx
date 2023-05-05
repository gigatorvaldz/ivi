import React from 'react';
import css from './Socials.module.scss';
import Link from 'next/link';

interface ISocials {
  items: {
    component: React.ReactNode;
    href: string;
  }[];
}

const Socials: React.FC<ISocials> = ({ items }) => {
  return (
    <div className={css.community}>
      {items.map((e, index) => (
        <Link key={index} href={e.href} className={css.socialItem}>
          {e.component}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
