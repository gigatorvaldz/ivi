import Link from 'next/link';
import React from 'react';
import css from './ActionCard.module.scss';

interface ActionCardI {
  active?: boolean;
  icon: React.ReactNode;
  label: string;
  description?: string;
  href: string;
}

const ActionCard: React.FC<ActionCardI> = ({ href, icon, label, description, active = false }) => {
  return (
    <Link className={css.container} href={href}>
      <div className={css.icon}>{icon}</div>
      <h3>{label}</h3>
      {description && <p className={css.description}>{description}</p>}
      {active && <div className={css.activeBulb}></div>}
    </Link>
  );
};

export default ActionCard;
