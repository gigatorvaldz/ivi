import React, { useEffect, ReactNode } from 'react';
import css from './Modal.module.scss';

interface IModal {
  children: ReactNode;
  visible: boolean;
  setVisible(state: boolean): void;
}

const Modal: React.FC<IModal> = ({ children, visible, setVisible }) => {
  useEffect(() => {
    visible ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [visible, setVisible]);

  return <>{visible && <div className={css.wrapper}>{children}</div>}</>;
};

export default Modal;
