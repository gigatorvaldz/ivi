import { NextPage } from "next";
import PopupComments from '@/components/PopupComments';

const CommentsPage: NextPage = () => {
    return <PopupComments visibleComments={false} title="Зелёная книга" genre="Фильм" year={2018} /> 
}

export default CommentsPage;