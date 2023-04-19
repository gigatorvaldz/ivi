import { NextPage } from 'next';
import PopupComments from '@/components/PopupComments';

const Comments: NextPage = () => {
  return (
    <>
      <PopupComments title="Зелёная книга" genre="Фильм" year={2018} />
    </>
  );
};

export default Comments;
