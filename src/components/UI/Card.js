import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};
//className in (props.className) is the same name as in AddUser <Card> tag
export default Card;