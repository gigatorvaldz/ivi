import { Genres } from '@/constants/genres';
import { ListItem } from '@/interfaces';

type GenreLinks = ListItem[];

export function modifyGenreLinks(genres: typeof Genres): GenreLinks {
  return Object.entries(genres).map((genre) => ({ title: genre[1], href: `/films/${genre[0]}` }));
}
