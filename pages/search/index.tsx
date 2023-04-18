import PopupSearch from '@/components/PopupSearch';
import { NextPage } from 'next';
import Home from '..';

const SearchPage: NextPage = () => {
  return (
    <Home>
      <PopupSearch />
    </Home>
  );
};

export default SearchPage;