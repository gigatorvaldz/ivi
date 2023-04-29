import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  selectActiveCountries,
  selectActiveGenres,
  selectActiveYear,
  setCountries,
  setYear,
} from '../redux/features/filmList/filmList';

export function useHandleFilterTag(queryType: string) {
  const dispatch = useAppDispatch();
  const activeYear = useAppSelector(selectActiveYear);
  const activeCountries = useAppSelector(selectActiveCountries);
  const activeGenres = useAppSelector(selectActiveGenres);

  const [activeQuery, setActiveQuery] = useState<string[]>(() => {
    if (queryType === 'year') {
      return [activeYear];
    }

    if (queryType === 'country') {
      return activeCountries;
    }

    if (queryType === 'genre') {
      return activeGenres;
    }

    return [];
  });

  useEffect(() => {
    const query = activeQuery.at(-1);

    if (queryType === 'year' && query) {
      dispatch(setYear(query));
    }

    if (queryType === 'country') {
      dispatch(setCountries(activeQuery));
    }

    if (queryType === 'genre') {
      setActiveQuery(activeGenres);
    }
  }, [activeQuery]);

  return [activeQuery, setActiveQuery] as const;
}
