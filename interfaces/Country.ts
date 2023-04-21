import { Film } from "./Film";

export interface Country {
  id: number;
  name: string; // Название страны
  englishName: string; // Название страны на английском языке
  films: Film[]; // Список фильмов
}
