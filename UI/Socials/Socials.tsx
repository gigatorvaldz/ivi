import React from 'react';
import css from './Socials.module.scss';
import Link from 'next/link';
import { SlSocialVkontakte } from 'react-icons/sl';
import { SiOdnoklassniki, SiTwitter } from 'react-icons/si';
import { BiPhoneCall } from 'react-icons/bi';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';

const Socials: React.FC = () => {
  const socialItems = [
    { component: <SlSocialVkontakte className={css.icon} />, href: '/123' },
    { component: <SiOdnoklassniki className={css.icon} />, href: '/123' },
    { component: <SiTwitter className={css.icon} />, href: '/123' },
    { component: <BiPhoneCall className={css.icon} />, href: '/123' },
    { component: <FaLinkedinIn className={css.icon} />, href: '/123' },
    { component: <FaTelegramPlane className={css.icon} />, href: '/123' },
  ];

  return (
    <div className={css.community}>
      {socialItems.map((e) => (
        <Link href={e.href} className={css.socialItem}>{e.component}</Link>
      ))}
    </div>
  );
};

export default Socials;