import React, { useState } from 'react';
import css from './AccordionI.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import classNames from 'classnames';
import { BsChevronCompactDown } from 'react-icons/bs';

interface AccordionI {
  children: React.ReactNode;
  icon?: React.ReactNode;
  label: string;
}

const Accordion: React.FC<AccordionI> = ({ icon, label, children }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={css.container}>
      <div className={css.controls} onClick={() => setIsOpened(!isOpened)}>
        {icon && icon}
        <h3 className={css.label}>{label}</h3>
        <BsChevronCompactDown size={28} strokeWidth={0.5}
          className={classNames({
            [css['opened']]: isOpened,
          })}
        ></BsChevronCompactDown>
      </div>
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ height: 0, transform: "scaleY(0)", opacity: 0}}
            animate={{ height: 'auto', transform: "scaleY(1)", opacity: 1 }}
            exit={{ height: 0, opacity: 0}}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
