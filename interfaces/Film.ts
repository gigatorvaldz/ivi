import { Award } from './Award';
import { Country } from './Country';
import { Genre } from './Genre';
import { Person } from './Person';
import { Review } from './Review';

export interface Film {
  id: number;
  name: string; // Название фильма
  poster: string; // Постер фильма в виде ссылки
  mpaaRating: string; // Возрастной рейтинг
  rating: number; // Рейтинг фильма
  ratingsNumber: number; // Количество оценок
  year: number; // Год производства
  duration: string; // Продолжительность (время для фильма в формате hh:mm и количество сезонов для сериала)
  description: string; // Описание

  directors: Person[]; // Список режиссеров
  actors: Person[]; // Список актеров
  writers: Person[]; // Список сценаристов
  producers: Person[]; // Список продюссеров
  cinematography: Person[]; // Список операторов
  musicians: Person[]; // Список композиторов
  designers: Person[]; // Список художников
  editors: Person[]; // Список режиссеров монтажа

  genres: Genre[]; // Список жанров
  awards: Award[]; // Список наград
  countries: Country[]; // Список стран
  reviews: Review[]; // Список комментариев
}
