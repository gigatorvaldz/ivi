import React from 'react';
import css from './DrawerAboutAccordion.module.scss';
import List from '@/UI/List';
import { LINKS } from '@/constants/footer';


const DrawerAboutAccordion: React.FC = () => {
    return (
        <div className={css.container}><List items={LINKS[0]} /></div>
    )
}

export default DrawerAboutAccordion;