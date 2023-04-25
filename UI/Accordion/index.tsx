import React, { useState } from 'react';
import css from './Accordion.module.scss';
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
        <BsChevronCompactDown
          size={28}
          strokeWidth={0.5}
          className={classNames({
            [css['opened']]: isOpened,
          })}
        ></BsChevronCompactDown>
      </div>
      <div className={css.children}>
        <AnimatePresence>
          {isOpened && (
            <motion.div
              initial={{ transform: 'translateY(-200px)', opacity: 0 }}
              animate={{ transform: 'translateY(0)', opacity: 1 }}
              exit={{ transform: 'translateY(-200px)', opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Accordion;
