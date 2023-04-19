import React, { ReactNode, useEffect } from 'react';
import css from './Modal.module.scss';

interface IModal {
  children: ReactNode;
}

const Modal: React.FC<IModal> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={css.background}>
      <div className={css.overlay}>
        <div className={css.wrapper}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
