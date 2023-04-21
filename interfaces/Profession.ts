import { Person } from './Person';

export interface Profession {
  id: number;
  name: string; // Название профессии
  persons: Person[]; // Список людей этой профессии
}
