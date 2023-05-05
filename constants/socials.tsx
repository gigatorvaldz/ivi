import { SlSocialVkontakte } from 'react-icons/sl';
import { SiOdnoklassniki, SiTwitter } from 'react-icons/si';
import { BiPhoneCall } from 'react-icons/bi';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';

export const socials = [
  {
    component: <SlSocialVkontakte />,
    href: 'https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e',
  },
  { component: <SiOdnoklassniki />, href: 'https://ok.ru/ivi.ru' },
  { component: <SiTwitter />, href: 'https://twitter.com/ivi_ru' },
  {
    component: <BiPhoneCall />,
    href: 'https://invite.viber.com/?g2=AQAN5HwJ109AW0tMEtqcQ1MwRvpATF2umOpstVEvZ4phfQicwxYucW5izsa0J5qi&lang=ru/126',
  },
  { component: <FaLinkedinIn />, href: 'https://www.linkedin.com/company/2543415/' },
  { component: <FaTelegramPlane />, href: 'https://t.me/official_iviru' },
];