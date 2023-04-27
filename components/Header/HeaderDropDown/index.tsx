import React from 'react';
import st from './HeaderDropDown.module.scss';

interface DropDownProps {
  children?: React.ReactNode;
}

const HeaderDropDown: React.FC<DropDownProps> = ({ children }) => {
  return (
    <div className={st.dropDown}>
      <div className={st['dropDown__contentWrapper']} onClick={(e) => e.stopPropagation()}>
        <div className={st['dropDown__content']}>{children}</div>
      </div>
    </div>
  );
};

export default HeaderDropDown;
