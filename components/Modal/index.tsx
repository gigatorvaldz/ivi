import React, { useEffect } from 'react';
import css from './Modal.module.scss';

interface IModal {
  children: React.ReactNode;
  visible: boolean;
}

const Modal: React.FC<IModal> = ({ children, visible }) => {
  useEffect(() => {
    if (visible) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      {visible && (
        <div className={css.background}>
          <div className={css.overlay}>
            <div className={css.wrapper}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
