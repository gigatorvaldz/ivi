import Button from '@/UI/Button';
import { TVSmallCardI } from '@/UI/TVCard';
import img from '@/assets/header/TVSmallCard.jpg';
import FilmsDropDownContent from '@/components/Header/HeaderDropDownContent/FilmsDropDownContent';
import NotificationDropDownContent from '@/components/Header/HeaderDropDownContent/NotificationDropDownContent';
import ProfileDropDownContent from '@/components/Header/HeaderDropDownContent/ProfileDropDownContent';
import TvDropDownContent from '@/components/Header/HeaderDropDownContent/TvDropDownContent';
import { HeaderControlsItem, HeaderItem } from '@/interfaces';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RxPerson } from 'react-icons/rx';
import headercss from '@/components/Header/Header.module.scss';
import LanguageSwitcher from '@/UI/LanguageSwitcher';

export const Film = {
  genres: [
    [
      { title: 'Артхаус', href: '/films/arthouse' },
      { title: 'Боевики', href: '/films/boeviki' },
      { title: 'Вестерн', href: '/films/western' },
      { title: 'Военные', href: '/films/voennye' },
      { title: 'Детективы', href: '/films/detective' },
      { title: 'Для всей семьи', href: '/dlya_vsej_semi' },
      { title: 'Для детей', href: '/films/detskiy' },
      { title: 'Документальные', href: '/films/documentary' },
      { title: 'Драмы', href: '/films/drama' },
      { title: 'Исторические', href: '/films/istoricheskie' },
      { title: 'Катастрофы', href: '/films/disaster' },
    ],
    [
      { title: 'Комедии', href: '/films/comedy' },
      { title: 'Криминальные', href: '/films/crime' },
      { title: 'Мелодрамы', href: '/films/melodramy' },
      { title: 'Мистические', href: '/films/misticheskie' },
      { title: 'По комиксам', href: '/films/comics' },
      { title: 'Приключения', href: '/films/adventures' },
      { title: 'Спорт', href: '/films/sport' },
      { title: 'Триллеры', href: '/films/thriller' },
      { title: 'Ужасы', href: '/films/horror' },
      { title: 'Фантастика', href: '/films/fantastika' },
      { title: 'Фэнтези', href: '/films/fentezi' },
    ],
  ],
  countries: [
    { title: 'Русские', href: '/films/ru' },
    { title: 'Зарубежные', href: '/films/foreign' },
    { title: 'Советское кино', href: '/films/su' },
  ],
  years: [
    { title: 'Фильмы 2023 года', href: '/films/2023' },
    { title: 'Фильмы 2022 года', href: '/films/2022' },
    { title: 'Фильмы 2021 года', href: '/films/2021' },
    { title: 'Фильмы 2020 года', href: '/films/2020' },
  ],
  line: [
    { title: 'Новинки', href: '/new/movie-new' },
    { title: 'Подборки', href: '/collections' },
    {
      title: 'Иви.Рейтинг',
      href: '/films/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready',
    },
    { title: 'Трейлеры', href: '/trailers' },
    { title: 'Что посмотреть', href: '/goodmovies' },
    { title: 'Фильмы в HD', href: '/collections/movies-hd' },
    { title: 'Выбор Иви', href: '/collections/vyibor-ivi' },
    { title: 'Новинки подписки', href: '/collections/very-new-svod?sort=priority_in_collection' },
  ],
};

export const Series = {
  genres: [
    [
      { title: 'Артхаус', href: '/series/arthouse' },
      { title: 'Боевики', href: '/series/boeviki' },
      { title: 'Вестерн', href: '/series/western' },
      { title: 'Военные', href: '/series/voennye' },
      { title: 'Детективы', href: '/series/detective' },
      { title: 'Для всей семьи', href: '/dlya_vsej_semi' },
      { title: 'Для детей', href: '/series/detskiy' },
      { title: 'Документальные', href: '/series/documentary' },
      { title: 'Драмы', href: '/series/drama' },
      { title: 'Исторические', href: '/series/istoricheskie' },
      { title: 'Катастрофы', href: '/series/disaster' },
    ],
    [
      { title: 'Комедии', href: '/series/comedy' },
      { title: 'Криминальные', href: '/series/crime' },
      { title: 'Мелодрамы', href: '/series/melodramy' },
      { title: 'Мистические', href: '/series/misticheskie' },
      { title: 'По комиксам', href: '/series/comics' },
      { title: 'Триллеры', href: '/series/thriller' },
      { title: 'Ужасы', href: '/series/horror' },
      { title: 'Фантастика', href: '/series/fantastika' },
      { title: 'Фэнтези', href: '/series/fentezi' },
    ],
  ],
  countries: [
    { title: 'Русские', href: '/series/ru' },
    { title: 'Зарубежные', href: '/series/foreign' },
    { title: 'Советское кино', href: '/series/su' },
    { title: 'Американские', href: '/series/us' },
    { title: 'Украинские', href: '/series/ua' },
  ],
  years: [
    { title: 'Сериалы 2023 года', href: '/series/2023' },
    { title: 'Сериалы 2022 года', href: '/series/2022' },
    { title: 'Сериалы 2021 года', href: '/series/2021' },
    { title: 'Сериалы 2020 года', href: '/series/2020' },
  ],
  line: [
    { title: 'Новинки', href: '/new/series-new' },
    {
      title: 'Иви.Рейтинг',
      href: '/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready',
    },
    { title: 'Сериалы в HD', href: '/collections/series-hd' },
    { title: 'Бесплатные сериалы', href: '/collections/tvshow-free?sort=new' },
  ],
};

export const Animation = {
  genres: [
    [
      { title: 'Артхаус', href: '/animation/arthouse' },
      { title: 'Боевики', href: '/animation/boeviki' },
      { title: 'Вестерн', href: '/animation/western' },
      { title: 'Военные', href: '/animation/voennye' },
      { title: 'Детективы', href: '/animation/detective' },
      { title: 'Для всей семьи', href: '/dlya_vsej_semi' },
      { title: 'Для детей', href: '/animation/detskiy' },
      { title: 'Документальные', href: '/animation/documentary' },
      { title: 'Драмы', href: '/animation/drama' },
      { title: 'Исторические', href: '/animation/istoricheskie' },
      { title: 'Катастрофы', href: '/animation/disaster' },
    ],
    [
      { title: 'Комедии', href: '/animation/comedy' },
      { title: 'Криминальные', href: '/animation/crime' },
      { title: 'Мелодрамы', href: '/animation/melodramy' },
      { title: 'Мистические', href: '/animation/misticheskie' },
      { title: 'По комиксам', href: '/animation/comics' },
      { title: 'Фантастика', href: '/animation/fantastika' },
      { title: 'Фэнтези', href: '/animation/fentezi' },
    ],
  ],
  countries: [
    { title: 'Русские', href: '/animation/ru' },
    { title: 'Зарубежные', href: '/animation/foreign' },
    { title: 'Советские', href: '/animation/su' },
    { title: 'Американские', href: '/animation/us' },
  ],
  years: [
    { title: 'Мультики 2023 года', href: '/animation/2023' },
    { title: 'Мультики 2022 года', href: '/animation/2022' },
    { title: 'Мультики 2021 года', href: '/animation/2021' },
    { title: 'Мультики 2020 года', href: '/animation/2020' },
  ],
  line: [
    { title: 'Новинки', href: '/new/animation-new' },
    { title: 'Мультики в HD', href: '/collections/cartoons-hd' },
  ],
};

export const TV = [
  { title: 'ТВ-каналы', href: '/tvplus' },
  { title: 'Развлекательное', href: '/tvplus/razvlekatelnoe' },
  { title: 'Дети', href: '/tvplus/deti' },
  { title: 'Документальное', href: '/tvplus/documentalnoe' },
];

export const federalChannels: Array<TVSmallCardI> = [
  { src: img, href: '/1' },
  { src: img, href: '/2' },
  { src: img, href: '/3' },
  { src: img, href: '/4' },
  { src: img, href: '/5' },
  { src: img, href: '/6' },
  { src: img, href: '/7' },
  { src: img, href: '/8' },
  { src: img, href: '/9' },
];

export const entertainmentChannels: Array<TVSmallCardI> = [
  { src: img, href: '/1' },
  { src: img, href: '/2' },
  { src: img, href: '/3' },
  { src: img, href: '/4' },
  { src: img, href: '/5' },
  { src: img, href: '/6' },
  { src: img, href: '/7' },
  { src: img, href: '/8' },
  { src: img, href: '/9' },
];

export const NavbarItems: Array<HeaderItem> = [
  { title: 'Мой Иви', dropdown: undefined, href: '/' },
  { title: 'Что нового', dropdown: undefined, href: 'https://www.ivi.ru/new' },
  { title: 'Фильмы', dropdown: <FilmsDropDownContent content={Film} />, href: '/films' },
  { title: 'Сериалы', dropdown: <FilmsDropDownContent content={Series} />, href: '/series' },
  {
    title: 'Мультфильмы',
    dropdown: <FilmsDropDownContent content={Animation} />,
    href: '/animation',
  },
  { title: 'TV+', dropdown: <TvDropDownContent />, href: 'https://www.ivi.ru/tvplus' },
];

export const ControlsItems: Array<HeaderControlsItem> = [
  {
    title: <Button primaryText="Смотреть 30 дней бесплатно" styling="accent" />,
    dropdown: undefined,
    href: '/',
    linkToAnotherPage: true,
    name: 'subbutton',
  },
  {
    title: (
      <div className={headercss.search}>
        <AiOutlineSearch strokeWidth={18} size={20} />
        <p>Поиск</p>
      </div>
    ),
    dropdown: undefined,
    href: 'search',
    linkToAnotherPage: false,
    name: 'searchbutton',
  },
  {
    title: (
      <div className={headercss.notification}>
        <IoMdNotificationsOutline strokeWidth={18} size={20} />
      </div>
    ),
    dropdown: <NotificationDropDownContent />,
    href: '/profile/pull_notifications',
    linkToAnotherPage: true,
    name: 'notificationbutton',
  },
  {
    title: (
      <div className={headercss.language}>
        <LanguageSwitcher />
      </div>
    ),
    dropdown: undefined,
    href: '/',
    linkToAnotherPage: true,
    name: 'languagebutton',
  },
  {
    title: (
      <div className={headercss.profile}>
        <RxPerson size={24} />
      </div>
    ),
    dropdown: <ProfileDropDownContent />,
    href: '/profile',
    linkToAnotherPage: true,
    name: 'profilebutton',
  },
];
