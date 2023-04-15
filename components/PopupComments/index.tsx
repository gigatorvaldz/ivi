import React from 'react';
import css from './PopupComments.module.scss';
import Modal from '../Modal';

interface IPopupComments {
    visible: boolean;
    setVisible(state: boolean): void;
}

const PopupComments: React.FC<IPopupComments> = ({visible, setVisible}) => {
    return (
        <Modal visible setVisible={setVisible}>
            <div className={css.container}>
                <h1></h1>
            </div>
        </Modal>
    )
}

export default PopupComments;
