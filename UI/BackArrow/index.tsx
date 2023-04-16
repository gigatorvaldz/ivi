import React from 'react';
import css from './BackArrow.module.scss';
import {MdOutlineArrowBackIosNew} from 'react-icons/md'

interface IBackArrow {
    redirectTo: string;
}

const BackArrow: React.FC<IBackArrow> = ({redirectTo}) => {
    return (
        <div className={css.container}>
            <MdOutlineArrowBackIosNew className={css.icon} />
            <span>К {redirectTo}у</span>
        </div>
    )
}

export default BackArrow;