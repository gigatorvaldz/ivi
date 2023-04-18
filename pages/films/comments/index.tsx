import { NextPage } from 'next';
import PopupComments from '@/components/PopupComments';
import FilmsPage from '..';

const Comments: NextPage = () => {
  return (
    <FilmsPage>
      <PopupComments title="Зелёная книга" genre="Фильм" year={2018} />
    </FilmsPage>
  );
};

export default Comments;
