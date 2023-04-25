import { Film } from './Film';

export interface Award {
  id: number;
  name: string; // Название награды
  year: number; // Год награждения
  nominations: Film[]; // Список номинаций
}
