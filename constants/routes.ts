import { Genres } from './genres';

export enum BasicRoutes {
  new = 'Что нового',
  films = 'Фильмы',
  series = 'Сериалы',
  animation = 'Мультфильмы',
  profile = 'Кабинет',
  'best-movies' = 'Лучшие фильмы',
  'vyibor-ivi' = 'Выбор Иви',
  'filmyi-amediateka' = 'Фильмы Amediateka',
  'movies-uhd4k' = 'Фильмы в 4K UHD',
}

export const Routes = {
  ...BasicRoutes,
  ...Genres,
} as const;
