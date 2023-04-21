import { Film } from './Film';

export interface Genre {
  id: number;
  name: string; // Название жанра
  englishName: string; // Название жанра на английском языке
  films: Film[]; // Список фильмов
}
