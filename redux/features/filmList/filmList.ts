import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IFilm } from '../../saga/response_types';

type FilmListState = {
  films: Array<IFilm>;
  sortedFilms: Array<IFilm>;
  activeTags: string[];

  searchQuery: string;
};

const initialState: FilmListState = {
  films: [],
  sortedFilms: [],
  activeTags: [],

  searchQuery: '',
};

export const filmListSlice = createSlice({
  name: 'filmList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IFilm>) => {},

    deleteItem: (state, action: PayloadAction<number | string>) => {},

    filterByTags: (state, action: PayloadAction<(string | null)[]>) => {},

    sortByName: (state) => {
      state.sortedFilms = state.sortedFilms.sort((item1, item2) => {
        return item1.title.localeCompare(item2.title);
      });
    },
  },
});

export const { addItem, deleteItem, filterByTags, sortByName } = filmListSlice.actions;
export default filmListSlice.reducer;

export const selectFilms = (state: RootState) => state.filmList.films;
export const selectSortedFilms = (state: RootState) => state.filmList.sortedFilms;
export const selectActiveTags = (state: RootState) => state.filmList.activeTags;

export const selectFilteredState = createSelector(
  [selectSortedFilms, selectActiveTags],
  (films, activeTags) => {
    if (activeTags.length > 0) {
      films = films.filter((film) => {
        return activeTags.includes(film.genre);
      });
    }

    return films;
  }
);
