import { Film } from "./Film";
import { Profession } from "./Profession";

export interface Person {
  id: number;
  name: string; // Полное имя человека
  photo: string; // Фото человека в виде ссылки
  films: Film[]; // Список фильмов
  professions: Profession[]; // Список профессий человека
}
