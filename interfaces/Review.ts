export interface Review {
  id: number;
  title: string; // Заголовок
  text: string; // Текст комментария
  rating: number; // Рейтинг комментария
  filmId: number; // id фильма, к которому принадлежит комментарий
  userId: number; // id пользователя, которому принадлежит комментарий
}
