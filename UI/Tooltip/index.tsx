import React, { useState } from 'react';
import css from './Tooltip.module.scss';

interface ITooltip {
  children: React.ReactNode;
  text: string;
}

const Tooltip: React.FC<ITooltip> = ({ children, text }) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const onMouseEnterHandler = () => {
    setShowTooltip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowTooltip(false);
  };

  return (
    <>
      <div
        className={css.container}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        {children}
      </div>
      {showTooltip && (
        <div className={css.tooltipBody}>
          <div className={css.tooltip}>
            <span>{text}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Tooltip;
