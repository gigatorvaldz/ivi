import React from 'react';
import css from './Socials.module.scss';
import { SlSocialVkontakte } from 'react-icons/sl';
import { SiOdnoklassniki, SiTwitter } from 'react-icons/si';
import { BiPhoneCall } from 'react-icons/bi';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';

const Socials: React.FC = () => {
  const socialItems = [
    { component: <SlSocialVkontakte className={css.icon} /> },
    { component: <SiOdnoklassniki className={css.icon} /> },
    { component: <SiTwitter className={css.icon} /> },
    { component: <BiPhoneCall className={css.icon} /> },
    { component: <FaLinkedinIn className={css.icon} /> },
    { component: <FaTelegramPlane className={css.icon} /> },
  ];

  return (
    <div className={css.community}>
      {socialItems.map((e) => (
        <div>{e.component}</div>
      ))}
    </div>
  );
};

export default Socials;