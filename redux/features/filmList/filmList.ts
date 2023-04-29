import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { HYDRATE } from 'next-redux-wrapper';
import { Film } from '@/interfaces/Film';

type FilmListState = {
  films: Array<Film>;
  activeGenres: string[];
  activeYear: { min: number; max: number };
  activeCountries: string[];
  searchByDirector: string;
  searchByActor: string;
  minRating: number,
  minRatingsCount: number,
  sortBy: 'rating' | 'ratingsNumber' | 'year' | 'name';
};

const initialState: FilmListState = {
  films: [],
  activeGenres: [],
  activeYear: { min: 0, max: Infinity },
  activeCountries: [],
  searchByDirector: '',
  searchByActor: '',
  minRating: 0,
  minRatingsCount: 0,

  sortBy: 'rating',
};

export const filmListSlice = createSlice({
  name: 'filmList',
  initialState,
  reducers: {
    clearFilters: (state) => {
      state.activeGenres = [];
      state.activeYear = { min: 0, max: Infinity };
      state.searchByDirector = '';
      state.searchByActor = '';
      state.minRating = 0;
      state.minRatingsCount = 0;
      state.activeCountries = [];
    },

    addItem: (state, action: PayloadAction<Film>) => {},

    deleteItem: (state, action: PayloadAction<number | string>) => {},

    filterByTags: (state, action: PayloadAction<(string | null)[]>) => {},

    sortBy: (
      state,
      { payload: sortBy }: PayloadAction<'rating' | 'ratingsNumber' | 'year' | 'name'>
    ) => {
      state.sortBy = sortBy;
    },

    setSearchQueryDirector: (state, action: PayloadAction<string>) => {
      state.searchByDirector = action.payload;
    },

    setSearchQueryActor: (state, action: PayloadAction<string>) => {
      state.searchByActor = action.payload;
    },

    setYear: (state, { payload: yearRange }: PayloadAction<string>) => {
      if (yearRange === 'Все годы') {
        state.activeYear = { min: 0, max: Infinity };
        return;
      }

      let [min, max] = yearRange
        .replace(/\-/, ' ')
        .split(' ')
        .map((year) => +year)
        .filter((year) => !isNaN(year));

      state.activeYear = { min, max: !!max ? max : min };
    },

    setCountries: (state, { payload: countries }: PayloadAction<string[]>) => {
      state.activeCountries = [...countries].sort((country1, country2) =>
        country1.localeCompare(country2)
      );
    },

    setMinRating: (state, action: PayloadAction<number>) => {
      state.minRating = action.payload;
    },

    setMinRatingsCount: (state, action: PayloadAction<number>) => {
      state.minRatingsCount = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.filmList,
      };
    },
  },
});

export const {
  addItem,
  deleteItem,
  filterByTags,
  sortBy,
  setYear,
  setCountries,
  clearFilters,
  setSearchQueryDirector,
  setSearchQueryActor,setMinRating,setMinRatingsCount
} = filmListSlice.actions;
export default filmListSlice.reducer;

export const selectFilms = (state: RootState) => state.filmList.films;
export const selectSortMethod = (state: RootState) => state.filmList.sortBy;
export const selectActiveTags = (state: RootState) => state.filmList.activeGenres;
export const selectYearRange = (state: RootState) => state.filmList.activeYear;
export const selectDirectorQuery = (state: RootState) => state.filmList.searchByDirector;
export const selectActorQuery = (state: RootState) => state.filmList.searchByActor;
export const selectActiveYear = (state: RootState) => {
  const { min, max } = state.filmList.activeYear;
  if (max === Infinity) {
    return 'Все годы';
  } else if (min === max) {
    return min + '';
  } else {
    return Object.values(state.filmList.activeYear).join('-');
  }
};
export const selectActiveCountries = (state: RootState) => state.filmList.activeCountries;
export const selectActiveGenres = (state: RootState) => state.filmList.activeGenres;
export const selectMinRating = (state: RootState) => state.filmList.minRating;
export const selectMinRatingsCount = (state: RootState) => state.filmList.minRatingsCount;

export const selectSortedState = createSelector(
  [selectFilms, selectSortMethod],
  (films, sortBy) => {
    if (sortBy === 'name') {
      films = films.sort((film1, film2) => film1.name.localeCompare(film2.name));
    }

    if (sortBy === 'rating') {
      films = films.sort((film1, film2) => film2.rating - film1.rating);
    }

    if (sortBy === 'ratingsNumber') {
      films = films.sort((film1, film2) => film2.ratingsNumber - film1.ratingsNumber);
    }

    if (sortBy === 'year') {
      films = films.sort((film1, film2) => film2.year - film1.year);
    }

    return films;
  }
);

export const selectFilteredState = createSelector(
  [
    selectSortedState,
    selectYearRange,
    selectDirectorQuery,
    selectActorQuery,
    selectActiveCountries,selectMinRating,selectMinRatingsCount
  ],
  (films, year, directorQuery, actorQuery, countries, minRating, minRatingCount) => {
    const { min, max } = year;

    films = films.filter((film) => {
      if (min === max) {
        return film.year === min;
      } else {
        return film.year > min && film.year < max;
      }
    });

    films = films.filter((film) => {
      if ((directorQuery = '')) return true;
      film.directors.some((director) => director.name.includes(directorQuery));
    });

    films = films.filter((film) => {
      if ((actorQuery = '')) return true;
      film.actors.some((actor) => actor.name.includes(actorQuery));
    });

    films = films.filter((film) => {
      if (countries.length === 0) return true;
      film.countries.some((country) => countries.includes(country.name));
    });

    films = films.filter((film) => {
      film.rating >= minRating;
    });

    films = films.filter((film) => {
      film.ratingsNumber >= minRatingCount;
    });

    return films;
  }
);
