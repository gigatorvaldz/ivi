import React from 'react'
import css from "./Message.module.scss"

export interface MessageI {
    title: string;
    extra?: string;
}

const Message: React.FC<MessageI> = ({title, extra}) => {
  return (
    <div className={css.container}>
        <h2>{title}</h2>
        <p>{extra}</p>
    </div>
  )
}

export default Message