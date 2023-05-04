import React from 'react';
import css from './Socials.module.scss';
import Link from 'next/link';
import { SlSocialVkontakte } from 'react-icons/sl';
import { SiOdnoklassniki, SiTwitter } from 'react-icons/si';
import { BiPhoneCall } from 'react-icons/bi';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';

const Socials: React.FC = () => {
  const socialItems = [
    { component: <SlSocialVkontakte className={css.icon} />, href: 'https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e' },
    { component: <SiOdnoklassniki className={css.icon} />, href: 'https://ok.ru/ivi.ru' },
    { component: <SiTwitter className={css.icon} />, href: 'https://twitter.com/ivi_ru' },
    { component: <BiPhoneCall className={css.icon} />, href: 'https://invite.viber.com/?g2=AQAN5HwJ109AW0tMEtqcQ1MwRvpATF2umOpstVEvZ4phfQicwxYucW5izsa0J5qi&lang=ru/126' },
    { component: <FaLinkedinIn className={css.icon} />, href: 'https://www.linkedin.com/company/2543415/' },
    { component: <FaTelegramPlane className={css.icon} />, href: 'https://t.me/official_iviru' },
  ];

  return (
    <div className={css.community}>
      {socialItems.map((e) => (
        <Link key={e.href} href={e.href} className={css.socialItem}>{e.component}</Link>
      ))}
    </div>
  );
};

export default Socials;