import React from 'react';
import css from './NotificationDropDownContent.module.scss';
import { MdOutlineNotificationsActive } from 'react-icons/md';

const NotificationDropDownContent: React.FC = () => {
  return (
    <div className={css.container}>
      <MdOutlineNotificationsActive size={108}/>
      <p>Здесь появляются только важные сообщения</p>
    </div>
  );
};

export default NotificationDropDownContent;
