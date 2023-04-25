import Link from 'next/link';
import React from 'react';
import css from './ActionCard.module.scss';
import classNames from 'classnames';

export type ActionCardStylingT = 'default' | 'mobile';

interface ActionCardI {
  active?: boolean;
  icon: React.ReactNode;
  label: string;
  description?: string;
  href: string;
  styling?: ActionCardStylingT;
}

const ActionCard: React.FC<ActionCardI> = ({
  href,
  icon,
  label,
  description,
  active = false,
  styling = 'default',
}) => {
  return (
    <Link className={classNames(css[styling], css.container)} href={href}>
      <div className={css.icon}>{icon}</div>
      <h3>{label}</h3>
      {description && <p className={css.description}>{description}</p>}
      {active && <div className={css.activeBulb}></div>}
    </Link>
  );
};

export default ActionCard;
