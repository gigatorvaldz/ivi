import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ErrorMessage from '@/UI/ErrorMessage';

interface AuthErrorMessageI {
  isVisible: boolean;
  message: string;
}

const AuthErrorMessage: React.FC<AuthErrorMessageI> = ({ isVisible, message }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ transform: 'translateY(100px)', opacity: 0 }}
          animate={{ transform: 'translateY(0px)', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ErrorMessage message={message} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthErrorMessage;
