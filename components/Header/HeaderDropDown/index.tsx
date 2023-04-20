import React from 'react';
import st from './HeaderDropDown.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

interface DropDownProps {
  children?: React.ReactNode;
}

const HeaderDropDown: React.FC<DropDownProps> = ({ children }) => {
  return (
    <div className={st.dropDown}>
      <AnimatePresence>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <div className={st['dropDown__contentWrapper']} onClick={(e) => e.stopPropagation()}>
            <div className={st['dropDown__content']}>{children}</div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeaderDropDown;
